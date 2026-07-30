export const cloudinaryAssetUrls = {
  "/videos/deep-focus-music.mp3": "https://res.cloudinary.com/tthwqiqa/video/upload/v1785436655/riskmaster/deep-focus-music.mp3",
  "/videos/motivation-power-music.mp3": "https://res.cloudinary.com/tthwqiqa/video/upload/v1785436703/riskmaster/motivation-power-music.mp3",
  "/videos/novatech-risk-analysis.mp4": "https://res.cloudinary.com/tthwqiqa/video/upload/v1785436741/riskmaster/novatech-risk-analysis.mp4",
  "/videos/novatech-risk-identification.mp4": "https://res.cloudinary.com/tthwqiqa/video/upload/v1785441148/riskmaster/novatech-risk-identification.mp4",
  "/videos/novatech-risk-manager-intro.mp4": "https://res.cloudinary.com/tthwqiqa/video/upload/v1785438894/riskmaster/novatech-risk-manager-intro.mp4",
  "/videos/petronova-risk-analysis.mp4": "https://res.cloudinary.com/tthwqiqa/video/upload/v1785438920/riskmaster/petronova-risk-analysis.mp4",
  "/videos/petronova-risk-identification.mp4": "https://res.cloudinary.com/tthwqiqa/video/upload/v1785439061/riskmaster/petronova-risk-identification.mp4",
  "/videos/petronova-risk-manager-intro.mp4": "https://res.cloudinary.com/tthwqiqa/video/upload/v1785439216/riskmaster/petronova-risk-manager-intro.mp4",
  "/videos/petronova-risk-monitoring-control-stage-4.mp4": "https://res.cloudinary.com/tthwqiqa/video/upload/v1785439281/riskmaster/petronova-risk-monitoring-control-stage-4.mp4",
  "/videos/petronova-risk-response.mp4": "https://res.cloudinary.com/tthwqiqa/video/upload/v1785439425/riskmaster/petronova-risk-response.mp4",
  "/videos/project-atlas-issue-management.mp4": "https://res.cloudinary.com/tthwqiqa/video/upload/v1785439556/riskmaster/project-atlas-issue-management.mp4",
  "/videos/project-atlas-risk-identification.mp4": "https://res.cloudinary.com/tthwqiqa/video/upload/v1785440229/riskmaster/project-atlas-risk-identification.mp4",
  "/videos/project-atlas-risk-manager-intro.mp4": "https://res.cloudinary.com/tthwqiqa/video/upload/v1785439948/riskmaster/project-atlas-risk-manager-intro.mp4",
  "/videos/project-atlas-risk-response.mp4": "https://res.cloudinary.com/tthwqiqa/video/upload/v1785440012/riskmaster/project-atlas-risk-response.mp4",
  "/images/vr-background.gif": "https://res.cloudinary.com/tthwqiqa/image/upload/v1785440024/riskmaster/vr-background.gif"
};

export function assetUrl(localUrl) {
  return cloudinaryAssetUrls[localUrl] || localUrl;
}
