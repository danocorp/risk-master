import { v2 as cloudinary } from 'cloudinary';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const outputPath = path.join(root, 'cloudinary-assets.json');
const modulePath = path.join(root, 'src', 'data', 'cloudinaryAssets.js');
const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  throw new Error('Missing Cloudinary environment variables.');
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true,
});

const assetRoots = [
  { dir: path.join(root, 'public', 'videos'), publicPrefix: '/videos', resourceType: 'video' },
  { dir: path.join(root, 'public', 'images'), publicPrefix: '/images', resourceType: 'image' },
];

function publicIdFor(filePath) {
  return path
    .parse(filePath)
    .name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function listAssets() {
  const assets = [];
  for (const assetRoot of assetRoots) {
    try {
      const entries = await fs.readdir(assetRoot.dir, { withFileTypes: true });
      for (const entry of entries) {
        if (!entry.isFile()) continue;
        const filePath = path.join(assetRoot.dir, entry.name);
        assets.push({
          filePath,
          localUrl: `${assetRoot.publicPrefix}/${entry.name}`,
          resourceType: assetRoot.resourceType,
          publicId: publicIdFor(filePath),
        });
      }
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }
  return assets;
}

function uploadAsset(asset) {
  return new Promise((resolve, reject) => {
    const options = {
      resource_type: asset.resourceType,
      folder: 'riskmaster',
      public_id: asset.publicId,
      overwrite: true,
      unique_filename: false,
      use_filename: false,
      chunk_size: 20 * 1024 * 1024,
    };

    const callback = (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      if (!result?.done && result?.done !== undefined) return;
      resolve(result);
    };

    if (asset.resourceType === 'video') {
      cloudinary.uploader.upload_large(asset.filePath, options, callback);
      return;
    }

    cloudinary.uploader.upload(asset.filePath, options, callback);
  });
}

const assets = await listAssets();
const uploaded = {};
const failures = {};

for (const [index, asset] of assets.entries()) {
  console.log(`Uploading ${index + 1}/${assets.length}: ${asset.localUrl}`);
  try {
    const result = await uploadAsset(asset);
    uploaded[asset.localUrl] = {
      secureUrl: result.secure_url,
      publicId: result.public_id,
      resourceType: result.resource_type,
      bytes: result.bytes,
    };
  } catch (error) {
    failures[asset.localUrl] = {
      message: error.message,
      httpCode: error.http_code,
    };
    uploaded[asset.localUrl] = {
      secureUrl: asset.localUrl,
      publicId: null,
      resourceType: asset.resourceType,
      bytes: null,
      fallback: true,
    };
    console.warn(`Failed ${asset.localUrl}: ${error.message}`);
  }
}

const assetUrls = Object.fromEntries(
  Object.entries(uploaded).map(([localUrl, info]) => [localUrl, info.secureUrl]),
);

await fs.writeFile(outputPath, `${JSON.stringify({ assets: uploaded, failures }, null, 2)}\n`);
await fs.writeFile(
  modulePath,
  `export const cloudinaryAssetUrls = ${JSON.stringify(assetUrls, null, 2)};\n\nexport function assetUrl(localUrl) {\n  return cloudinaryAssetUrls[localUrl] || localUrl;\n}\n`,
);

const failedCount = Object.keys(failures).length;
console.log(`Processed ${assets.length} assets with ${failedCount} failure${failedCount === 1 ? '' : 's'}.`);
console.log(`Wrote ${path.relative(root, outputPath)} and ${path.relative(root, modulePath)}.`);
