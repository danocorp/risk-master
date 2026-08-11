import React, { useEffect, useMemo, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import {
  calculateFinalScore,
  calculateStageScore,
  categories,
  getCategoryById,
  getFinalBand,
  getPlayableStages,
  getRiskHeat,
  gradeAnalysisPlacement,
  gradeRiskResponse,
  impactScale,
  probabilityScale,
} from './data/riskSimulator.js';
import { assetUrl } from './data/cloudinaryAssets.js';

const STORAGE_KEY = 'riskmaster-staged-simulator-state-v3';
const DEFAULT_STATE = {
  selectedCategoryId: 'automobile',
  screen: 'home',
  stageIndex: 0,
  itemIndex: 0,
  stageStates: {},
};

const MUSIC_TRACKS = ['/videos/deep-focus-music.mp3', '/videos/motivation-power-music.mp3'];

function showHintPopup({ category, title = 'Decision saved', text, icon = 'info' }) {
  Swal.close();
  Swal.fire({
    title,
    text,
    icon,
    toast: true,
    position: 'top-end',
    timer: 2600,
    timerProgressBar: true,
    showConfirmButton: false,
    backdrop: false,
    allowOutsideClick: true,
    allowEscapeKey: true,
    stopKeydownPropagation: false,
    returnFocus: false,
    heightAuto: false,
    background: '#ffffff',
    color: '#171827',
    customClass: {
      popup: 'riskmaster-alert',
    },
    showClass: {
      popup: 'riskmaster-alert-in',
    },
    hideClass: {
      popup: 'riskmaster-alert-out',
    },
  });
}

function loadInitialState() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? { ...DEFAULT_STATE, ...JSON.parse(saved) } : DEFAULT_STATE;
  } catch {
    return DEFAULT_STATE;
  }
}

function App() {
  const [state, setState] = useState(loadInitialState);
  const [answerFlash, setAnswerFlash] = useState('');
  const [musicVolume, setMusicVolume] = useState(0.32);
  const musicRef = useRef(null);

  const category = getCategoryById(state.selectedCategoryId);
  const stages = category.stages || [];
  const stage = stages[state.stageIndex] || stages[0];
  const stageState = stage ? state.stageStates[stage.id] || {} : {};
  const finalScore = useMemo(() => calculateFinalScore(category, state.stageStates), [category, state.stageStates]);
  const finalBand = getFinalBand(finalScore.percentage);
  const briefing = stage?.type === 'briefing' ? stage : stage?.briefing;
  const isVideoBriefing = state.screen === 'briefing' && Boolean(briefing?.videoSrc);
  const canPlayMusic = state.screen !== 'home' && !isVideoBriefing;
  const musicSrc = assetUrl(MUSIC_TRACKS[state.stageIndex % MUSIC_TRACKS.length]);

  useEffect(() => {
    const music = musicRef.current;
    if (!music) return;

    music.volume = musicVolume;
    music.muted = musicVolume === 0;
    if (!canPlayMusic) {
      music.pause();
      return;
    }

    music.play().catch(() => {
      // Browsers may wait for a user gesture before allowing background audio.
    });
  }, [canPlayMusic, musicSrc, musicVolume]);

  const handleMusicVolumeChange = (event) => {
    const nextVolume = Number(event.target.value) / 100;
    const music = musicRef.current;

    setMusicVolume(nextVolume);

    if (music) {
      music.volume = nextVolume;
      music.muted = nextVolume === 0;
      if (canPlayMusic && nextVolume > 0) {
        music.play().catch(() => {});
      }
    }
  };

  const persist = (nextState) => {
    setState(nextState);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
    } catch {
      // The simulator still works if localStorage is unavailable.
    }
  };

  const updateStageState = (stageId, updater) => {
    setState((current) => {
      const currentStageState = current.stageStates[stageId] || {};
      const nextStageState = typeof updater === 'function' ? updater(currentStageState) : updater;
      const nextState = {
        ...current,
        stageStates: {
          ...current.stageStates,
          [stageId]: nextStageState,
        },
      };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
      } catch {
        // Keep state in memory.
      }
      return nextState;
    });
  };

  const scrollHome = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const resetHome = () => {
    persist(DEFAULT_STATE);
    setAnswerFlash('');
    scrollHome();
  };

  const playOtherGames = () => {
    persist({ ...DEFAULT_STATE, screen: 'home' });
    setAnswerFlash('');
    window.setTimeout(() => {
      document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  const startCategory = (categoryId) => {
    const selected = getCategoryById(categoryId);
    persist({
      ...DEFAULT_STATE,
      selectedCategoryId: categoryId,
      screen: selected.stages ? 'briefing' : 'preview',
    });
    setAnswerFlash('');
    scrollHome();
  };

  const goToStage = (nextStageIndex, screen = 'briefing') => {
    persist({
      ...state,
      screen,
      stageIndex: nextStageIndex,
      itemIndex: 0,
    });
    setAnswerFlash('');
    scrollHome();
  };

  const startActivity = () => {
    persist({ ...state, screen: 'activity', itemIndex: 0 });
    setAnswerFlash('');
    scrollHome();
  };

  const finishStage = () => {
    persist({ ...state, screen: 'stageScore' });
    setAnswerFlash('');
    scrollHome();
  };

  const advanceFromBriefing = () => {
    if (!stage) return;
    if (stage.type === 'briefing') {
      goToStage(Math.min(state.stageIndex + 1, stages.length - 1), 'briefing');
      return;
    }
    startActivity();
  };

  const advanceAfterScore = () => {
    const nextStageIndex = state.stageIndex + 1;
    if (nextStageIndex >= stages.length) {
      persist({ ...state, screen: 'final' });
      scrollHome();
      return;
    }
    goToStage(nextStageIndex, 'briefing');
  };

  const goBack = () => {
    if (state.screen === 'home') return;
    if (state.screen === 'preview') {
      resetHome();
      return;
    }
    if (state.screen === 'briefing') {
      if (state.stageIndex === 0) {
        resetHome();
        return;
      }
      const previousStage = stages[state.stageIndex - 1];
      goToStage(state.stageIndex - 1, previousStage?.type === 'briefing' ? 'briefing' : 'stageScore');
      return;
    }
    if (state.screen === 'activity') {
      persist({ ...state, screen: 'briefing' });
      scrollHome();
      return;
    }
    if (state.screen === 'stageScore') {
      persist({ ...state, screen: 'activity' });
      scrollHome();
      return;
    }
    if (state.screen === 'final') {
      goToStage(stages.length - 1, 'stageScore');
    }
  };

  return (
    <div className="app-shell" style={{ '--category-accent': category.accent, '--category-tint': category.tint }}>
      <audio ref={musicRef} src={musicSrc} loop preload="auto" />
      <header className="mobile-header">
        <button className="brand-mark" type="button" onClick={resetHome} aria-label="Back to RiskMaster home">
          <i className="bx bx-shield-quarter" aria-hidden="true" />
        </button>
        <div>
          <p>RiskMaster</p>
          <strong>{state.screen === 'home' ? 'Simulator Hub' : stage?.title || category.title}</strong>
        </div>
        {state.screen !== 'home' ? (
          <label className="audio-control">
            <i className="bx bx-volume-full" aria-hidden="true" />
            <input
              type="range"
              min="0"
              max="100"
              value={Math.round(musicVolume * 100)}
              onInput={handleMusicVolumeChange}
              onChange={handleMusicVolumeChange}
              aria-label="Background music volume"
            />
            <span>{Math.round(musicVolume * 100)}%</span>
          </label>
        ) : null}
        <span className="header-score">{state.screen === 'home' ? `${categories.length} Packs` : `${finalScore.percentage}%`}</span>
      </header>

      <main className="app-main">
        {state.screen === 'home' ? <HomeScreen selectedCategoryId={state.selectedCategoryId} onSelectCategory={startCategory} /> : null}
        {state.screen === 'preview' ? <PreviewScreen category={category} onBack={resetHome} /> : null}
        {state.screen === 'briefing' && stage ? (
          <BriefingScreen
            category={category}
            stage={stage}
            stageIndex={state.stageIndex}
            totalStages={stages.length}
            onBack={goBack}
            onNext={advanceFromBriefing}
          />
        ) : null}
        {state.screen === 'activity' && stage ? (
          <ActivityScreen
            category={category}
            stage={stage}
            stageState={stageState}
            itemIndex={state.itemIndex}
            setItemIndex={(itemIndex) => {
              persist({ ...state, itemIndex });
              requestAnimationFrame(scrollHome);
            }}
            setAnswerFlash={setAnswerFlash}
            answerFlash={answerFlash}
            updateStageState={updateStageState}
            onBack={goBack}
            onFinish={finishStage}
          />
        ) : null}
        {state.screen === 'stageScore' && stage ? (
          <StageScoreScreen
            category={category}
            stage={stage}
            stageState={stageState}
            stageScore={calculateStageScore(stage, stageState)}
            finalScore={finalScore}
            onBack={goBack}
            onNext={advanceAfterScore}
            isLastStage={state.stageIndex >= stages.length - 1}
          />
        ) : null}
        {state.screen === 'final' ? (
          <FinalScoreScreen
            category={category}
            playableStages={getPlayableStages(category)}
            stageStates={state.stageStates}
            finalScore={finalScore}
            finalBand={finalBand}
            onRetry={() => startCategory(category.id)}
            onHome={resetHome}
            onOtherGames={playOtherGames}
          />
        ) : null}
      </main>
    </div>
  );
}

function HomeScreen({ selectedCategoryId, onSelectCategory }) {
  return (
    <section className="home-screen page-enter">
      <div className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Full-stage risk simulator</span>
          <h1>Brief. Decide. Score. Level up.</h1>
          <p>
            A colorful staged training app for risk identification, analysis, response, monitoring, opportunity management, and lessons learned.
          </p>
          <div className="hero-actions">
            <button className="primary-action" type="button" onClick={() => onSelectCategory(selectedCategoryId)}>
              <i className="bx bx-play-circle" aria-hidden="true" />
              Start featured scenario
            </button>
            <a className="secondary-link" href="#categories">
              <i className="bx bx-grid-alt" aria-hidden="true" />
              Browse categories
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-phone">
            <div className="visual-topline" />
            <div className="visual-card visual-card-one">
              <span />
              <strong />
            </div>
            <div className="visual-card visual-card-two">
              <span />
              <strong />
            </div>
            <div className="visual-pill-row">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>

      <section id="categories" className="category-section">
        <div className="section-heading">
          <span className="eyebrow">Choose your world</span>
          <h2>One engine, many sector simulations.</h2>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className="category-card"
              style={{ '--card-accent': category.accent, '--card-tint': category.tint }}
              onClick={() => onSelectCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-meta">{category.difficulty} . {category.estimatedTime}</span>
              <strong>{category.title}</strong>
              <span>{category.summary}</span>
              <em>{category.stages ? 'Start full simulation' : 'Preview pack'}</em>
            </button>
          ))}
        </div>
      </section>

      <footer className="home-credit">
        Developed by <a href="https://danozonedigital.com" target="_blank" rel="noreferrer">Danozone</a>
      </footer>
    </section>
  );
}

function PreviewScreen({ category, onBack }) {
  return (
    <section className="results-screen page-enter">
      <div className="result-hero">
        <span className="category-icon large">{category.icon}</span>
        <span className="eyebrow">Category preview</span>
        <h1>{category.title}</h1>
        <p>{category.tagline}</p>
      </div>
      <div className="sticky-actions">
        <button className="primary-action" type="button" onClick={onBack}>
          <i className="bx bx-home-alt" aria-hidden="true" />
          Back to homepage
        </button>
      </div>
    </section>
  );
}

function BriefingScreen({ category, stage, stageIndex, totalStages, onBack, onNext }) {
  const briefing = stage.type === 'briefing' ? stage : stage.briefing;
  const isActivityStage = stage.type !== 'briefing';
  const isProjectBrief = stage.type === 'briefing';
  const briefTitle = isProjectBrief ? 'Project brief' : 'Stage brief';
  const briefText = isProjectBrief ? (briefing.projectBrief || category.projectBrief || briefing.summary) : (briefing.stageBrief || briefing.summary);
  const videoRef = useRef(null);
  const briefingVideoSrc = assetUrl(briefing.videoSrc);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !briefingVideoSrc) return;

    video.muted = false;
    video.volume = 1;
    const playPromise = video.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }

    const exitFullscreen = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen?.().catch(() => {});
      }
    };
    const fullscreenTarget = video;
    const openFullscreen = () => {
      if (document.fullscreenElement) return;
      fullscreenTarget.requestFullscreen?.().catch(() => {});
    };

    video.addEventListener('ended', exitFullscreen);
    const timeout = window.setTimeout(openFullscreen, 300);
    return () => {
      window.clearTimeout(timeout);
      video.removeEventListener('ended', exitFullscreen);
    };
  }, [briefingVideoSrc]);

  return (
    <section className="briefing-screen page-enter">
      <div className="sim-topbar">
        <button className="icon-button" type="button" onClick={onBack} aria-label="Go back">
          <i className="bx bx-left-arrow-alt" aria-hidden="true" />
        </button>
        <div className="progress-shell" aria-label={`Stage ${stageIndex + 1} of ${totalStages}`}>
          <span style={{ width: `${((stageIndex + 1) / totalStages) * 100}%` }} />
        </div>
        <span className="step-chip">{stageIndex + 1}/{totalStages}</span>
      </div>

      <article key={`${stage.id}-briefing`} className={`briefing-card question-enter ${briefing.videoSrc ? 'has-video' : ''}`}>
        <div className="question-header">
          <span className="category-icon compact">{category.icon}</span>
          <div>
            <p>{category.title}</p>
            <strong>{briefing.title}</strong>
          </div>
        </div>

        {briefing.videoSrc ? (
          <div className="video-frame">
            <video ref={videoRef} className="stage-video" controls playsInline autoPlay preload="metadata" src={briefingVideoSrc}>
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <div className="briefing-boost">
            <span>Interactive briefing</span>
            <strong>{briefing.title}</strong>
            <p>{briefing.summary}</p>
          </div>
        )}

        <div className="briefing-copy">
          <span>{briefing.label}</span>
          <h2>{briefing.title}</h2>
          <div className="briefing-note">
            <strong>{briefTitle}</strong>
            <p>{briefText}</p>
          </div>
          <InstructionPanel stage={stage} />
        </div>
      </article>

      <div className="sticky-actions">
        <button className="secondary-action" type="button" onClick={onBack}>
          <i className="bx bx-left-arrow-alt" aria-hidden="true" />
          Back
        </button>
        <button className="primary-action" type="button" onClick={onNext}>
          <i className="bx bx-right-arrow-alt" aria-hidden="true" />
          {isActivityStage ? `Start ${stage.title}` : 'Next briefing'}
        </button>
      </div>
    </section>
  );
}

function ActivityScreen(props) {
  if (props.stage.type === 'identify') return <IdentificationActivity {...props} />;
  if (props.stage.type === 'analysis') return <AnalysisActivity {...props} />;
  if (props.stage.type === 'response') return <ResponseActivity {...props} />;
  if (props.stage.type === 'quiz') return <QuizActivity {...props} />;
  if (props.stage.type === 'multiQuiz') return <MultiQuizActivity {...props} />;
  return null;
}

function InstructionPanel({ stage }) {
  const copy = {
    briefing: 'Review the written brief as well as the video, then continue to the next stage when the project context is clear.',
    identify: 'Read each signal, decide whether it is a material project risk, then tap the option that should go into the risk register.',
    analysis: 'Tap one heatmap cell for each risk. Probability is rated 1-5 from very low to very high. Impact is rated 1-5 from negligible to catastrophic. The risk score is Probability x Impact.',
    response: 'Read the specific risk signal, compare the five response strategies, then tap the strategy that best fits that risk exposure.',
    quiz: 'Read the live scenario, choose the strongest next action, then continue after your decision is recorded.',
    multiQuiz: 'Select every option that applies to the reflection prompt, then continue once your selections are recorded.',
  };
  const instruction = stage.instructions || copy[stage.type] || copy.briefing;

  return (
    <div className="instruction-panel">
      <strong>What to do next</strong>
      <p>{instruction}</p>
    </div>
  );
}

function IdentificationActivity({ category, stage, stageState, itemIndex, setItemIndex, updateStageState, onBack, onFinish }) {
  const item = stage.risks[itemIndex];
  const decisions = stageState.decisions || {};
  const decision = decisions[item.id];
  const selectedCount = Object.values(decisions).filter(Boolean).length;
  const answeredCount = Object.keys(decisions).length;
  const complete = answeredCount === stage.risks.length;

  const choose = (value) => {
    updateStageState(stage.id, (current) => ({
      ...current,
      selectedIds: value
        ? Array.from(new Set([...(current.selectedIds || []), item.id]))
        : (current.selectedIds || []).filter((id) => id !== item.id),
      decisions: {
        ...(current.decisions || {}),
        [item.id]: value,
      },
    }));
    showHintPopup({
      category,
      title: value ? 'Risk flagged' : 'Signal parked',
      text: 'Your register decision is saved. The scoreboard will reveal whether this was a true risk or a decoy.',
      icon: 'info',
    });
  };

  return (
    <section className="simulation-screen page-enter">
      <ActivityTopbar itemIndex={itemIndex} totalItems={stage.risks.length} onBack={onBack} />
      <article key={item.id} className="question-card question-enter">
        <StageHeader category={category} stage={stage} />
        <InstructionPanel stage={stage} />
        <div className="scenario-strip signal-alert">
          <span>{item.scenarioTag ? `${item.scenarioTag} - ${item.scenario || 'Risk signal'}` : item.scenario || 'Risk signal'}</span>
          <p>{item.signal}</p>
        </div>
        <strong className="risk-title">{item.title}</strong>
        <h2>{stage.prompt || 'Should this be added to the project risk register?'}</h2>
        <div className="option-list">
          <button type="button" className={`answer-option ${decision === true ? 'selected pulse' : ''}`} onClick={() => choose(true)}>
            <span className="option-letter">Y</span>
            <span>Add to risk register</span>
          </button>
          <button type="button" className={`answer-option ${decision === false ? 'selected pulse' : ''}`} onClick={() => choose(false)}>
            <span className="option-letter">N</span>
            <span>Not a material project risk</span>
          </button>
        </div>
        {decision !== undefined ? (
          <div className="feedback-card feedback-enter">
            <span>Choice captured</span>
            <p>Your risk register decision has been saved. You can move on or go back and revise before scoring.</p>
          </div>
        ) : null}
      </article>
      <div className="sticky-actions">
        <button className="secondary-action" type="button" onClick={() => setItemIndex(Math.max(0, itemIndex - 1))}>
          Previous
        </button>
        <button
          className="primary-action"
          type="button"
          onClick={() => (itemIndex === stage.risks.length - 1 ? onFinish() : setItemIndex(itemIndex + 1))}
          disabled={decision === undefined || (itemIndex === stage.risks.length - 1 && !complete)}
        >
          {itemIndex === stage.risks.length - 1 ? `Score stage (${selectedCount} selected)` : 'Next signal'}
        </button>
      </div>
    </section>
  );
}

function AnalysisActivity({ category, stage, stageState, itemIndex, setItemIndex, updateStageState, onBack, onFinish }) {
  const risk = stage.risks[itemIndex];
  const placements = stageState.placements || {};
  const placement = placements[risk.id];
  const totalPlaced = Object.keys(placements).length;
  const complete = totalPlaced === stage.risks.length;

  const placeRisk = (probability, impact) => {
    updateStageState(stage.id, (current) => ({
      ...current,
      placements: {
        ...(current.placements || {}),
        [risk.id]: { probability, impact },
      },
    }));
    showHintPopup({
      category,
      title: `Risk score ${probability * impact}`,
      text: `Placement saved at Probability ${probability} x Impact ${impact}. Continue when your judgement matches the risk signal.`,
      icon: 'info',
    });
  };

  const removePlacement = () => {
    updateStageState(stage.id, (current) => {
      const next = { ...(current.placements || {}) };
      delete next[risk.id];
      return { ...current, placements: next };
    });
  };

  return (
    <section className="analysis-screen page-enter">
      <ActivityTopbar itemIndex={itemIndex} totalItems={stage.risks.length} onBack={onBack} />
      <article key={risk.id} className="question-card matrix-card question-enter">
        <StageHeader category={category} stage={stage} />
        <InstructionPanel stage={stage} />
        <div className="scenario-strip">
          <span>Analyze this risk</span>
          <p>{risk.signal}</p>
        </div>
        <div
          className={`risk-token ${placement ? 'placed' : ''}`}
        >
          <strong>{risk.title}</strong>
          <span>
            {placement
              ? `Placed at P${placement.probability} x I${placement.impact} = ${placement.probability * placement.impact}`
              : 'Tap a matrix cell to place this risk'}
          </span>
        </div>
        <RiskMatrix onPlace={placeRisk} placement={placement} />
        <div className="scale-panel">
          <div>
            <strong>Probability Scale</strong>
            <p>{probabilityScale.map((item) => `${item.value} - ${item.label}`).join(' | ')}</p>
          </div>
          <div>
            <strong>Impact Scale</strong>
            <p>{impactScale.map((item) => `${item.value} - ${item.label}`).join(' | ')}</p>
          </div>
          <div>
            <strong>Risk Score</strong>
            <p>R = Probability x Impact. Exact fit earns 10, close range earns 5, and a weaker but attempted judgement earns 2.</p>
          </div>
        </div>
        <div className="mini-actions">
          <button className="secondary-action" type="button" onClick={removePlacement} disabled={!placement}>
            Remove placement
          </button>
        </div>
      </article>
      <div className="sticky-actions">
        <button className="secondary-action" type="button" onClick={() => setItemIndex(Math.max(0, itemIndex - 1))}>
          Previous
        </button>
        <button
          className="primary-action"
          type="button"
          onClick={() => (itemIndex === stage.risks.length - 1 ? onFinish() : setItemIndex(itemIndex + 1))}
          disabled={!placement || (itemIndex === stage.risks.length - 1 && !complete)}
        >
          {itemIndex === stage.risks.length - 1 ? `Score stage (${totalPlaced} placed)` : 'Next risk'}
        </button>
      </div>
    </section>
  );
}

function RiskMatrix({ onPlace, placement }) {
  const rows = [...probabilityScale].reverse();
  const cells = [
    <div key="corner" className="matrix-corner">Probability</div>,
    ...impactScale.map((impact) => (
      <div key={`impact-${impact.value}`} className="matrix-heading">
        <strong>{impact.label}</strong>
        <span>I{impact.value}</span>
      </div>
    )),
  ];

  rows.forEach((probability) => {
    cells.push(
      <div key={`probability-${probability.value}`} className="matrix-row-heading">
        <strong>{probability.label}</strong>
        <span>P{probability.value}</span>
      </div>,
    );

    impactScale.forEach((impact) => {
      const active = placement?.probability === probability.value && placement?.impact === impact.value;
      const heat = getRiskHeat(probability.value * impact.value);
      cells.push(
        <button
          key={`${probability.value}-${impact.value}`}
          type="button"
          className={`matrix-cell ${heat.className} ${active ? 'active' : ''}`}
          onClick={() => onPlace(probability.value, impact.value)}
        >
          <span>{heat.label}</span>
          <strong>{probability.value * impact.value}</strong>
        </button>,
      );
    });
  });

  return (
    <div className="matrix-wrap">
      <div className="matrix-axis impact-axis">Impact</div>
      <div className="matrix-grid-modern">{cells}</div>
      <div className="matrix-axis probability-axis">Risk score = P x I</div>
    </div>
  );
}

function ResponseActivity({ category, stage, stageState, itemIndex, setItemIndex, updateStageState, answerFlash, setAnswerFlash, onBack, onFinish }) {
  const risk = stage.risks[itemIndex];
  const responses = stageState.responses || {};
  const selected = responses[risk.id];
  const complete = Object.keys(responses).length === stage.risks.length;

  const choose = (strategy) => {
    updateStageState(stage.id, (current) => ({
      ...current,
      responses: {
        ...(current.responses || {}),
        [risk.id]: strategy,
      },
    }));
    setAnswerFlash(strategy);
    showHintPopup({
      category,
      title: `${strategy} selected`,
      text: 'Your response choice has been saved. The scoreboard will assess it after the stage.',
      icon: 'info',
    });
  };

  return (
    <section className="simulation-screen page-enter">
      <ActivityTopbar itemIndex={itemIndex} totalItems={stage.risks.length} onBack={onBack} />
      <article key={risk.id} className="question-card question-enter">
        <StageHeader category={category} stage={stage} />
        <InstructionPanel stage={stage} />
        <div className="scenario-strip">
          <span>Risk response target</span>
          <p>{risk.signal}</p>
        </div>
        <strong className="risk-title">{risk.title}</strong>
        <h2>Which response strategy best fits this risk?</h2>
        <div className="strategy-grid">
          {getStrategyOrder(stage.strategies, risk.id).map((strategy) => (
            <button
              key={strategy}
              type="button"
              className={`strategy-card ${selected === strategy ? 'selected' : ''} ${answerFlash === strategy ? 'pulse' : ''}`}
              onClick={() => choose(strategy)}
            >
              <strong>{strategy}</strong>
              <span>{getStrategyCopy(strategy)}</span>
            </button>
          ))}
        </div>
        {selected ? (
          <div className="feedback-card feedback-enter">
            <span>Choice captured</span>
            <p>Your strategy has been recorded. You can continue or revise before scoring the stage.</p>
          </div>
        ) : null}
      </article>
      <div className="sticky-actions">
        <button className="secondary-action" type="button" onClick={() => setItemIndex(Math.max(0, itemIndex - 1))}>
          Previous
        </button>
        <button
          className="primary-action"
          type="button"
          onClick={() => (itemIndex === stage.risks.length - 1 ? onFinish() : setItemIndex(itemIndex + 1))}
          disabled={!selected || (itemIndex === stage.risks.length - 1 && !complete)}
        >
          {itemIndex === stage.risks.length - 1 ? 'Score stage' : 'Next response'}
        </button>
      </div>
    </section>
  );
}

function QuizActivity({ category, stage, stageState, itemIndex, setItemIndex, updateStageState, answerFlash, setAnswerFlash, onBack, onFinish }) {
  const question = stage.questions[itemIndex];
  const answers = stageState.answers || {};
  const selectedAnswerId = answers[question.id];
  const selectedOption = question.options.find((option) => option.id === selectedAnswerId);
  const complete = Object.keys(answers).length === stage.questions.length;

  const choose = (optionId) => {
    const selected = question.options.find((option) => option.id === optionId);
    updateStageState(stage.id, (current) => ({
      ...current,
      answers: {
        ...(current.answers || {}),
        [question.id]: optionId,
      },
    }));
    setAnswerFlash(optionId);
    showHintPopup({
      category,
      title: 'Decision logged',
      text: 'Your choice has been recorded. The stage scoreboard will show how the decision performed.',
      icon: 'info',
    });
  };

  return (
    <section className="simulation-screen page-enter">
      <ActivityTopbar itemIndex={itemIndex} totalItems={stage.questions.length} onBack={onBack} />
      <article key={question.id} className="question-card question-enter">
        <StageHeader category={category} stage={stage} />
        <InstructionPanel stage={stage} />
        <div className="scenario-strip">
          <span>Scenario</span>
          <p>{question.context}</p>
        </div>
        <h2>{question.prompt}</h2>
        <div className="option-list">
          {question.options.map((option, index) => (
            <button
              key={option.id}
              type="button"
              className={`answer-option ${selectedAnswerId === option.id ? 'selected' : ''} ${answerFlash === option.id ? 'pulse' : ''}`}
              onClick={() => choose(option.id)}
              style={{ '--option-delay': `${index * 70}ms` }}
            >
              <span className="option-letter">{String.fromCharCode(65 + index)}</span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
        {selectedOption ? (
          <div className="feedback-card feedback-enter">
            <span>Choice captured</span>
            <p>Your answer has been saved. Continue when you are ready for the next decision.</p>
          </div>
        ) : null}
      </article>
      <div className="sticky-actions">
        <button className="secondary-action" type="button" onClick={() => setItemIndex(Math.max(0, itemIndex - 1))}>
          Previous
        </button>
        <button
          className="primary-action"
          type="button"
          onClick={() => (itemIndex === stage.questions.length - 1 ? onFinish() : setItemIndex(itemIndex + 1))}
          disabled={!selectedAnswerId || (itemIndex === stage.questions.length - 1 && !complete)}
        >
          {itemIndex === stage.questions.length - 1 ? 'Score stage' : 'Next question'}
        </button>
      </div>
    </section>
  );
}

function MultiQuizActivity({ category, stage, stageState, itemIndex, setItemIndex, updateStageState, onBack, onFinish }) {
  const question = stage.questions[itemIndex];
  const answers = stageState.answers || {};
  const selectedIds = answers[question.id] || [];
  const complete = Object.keys(answers).length === stage.questions.length;

  const toggle = (optionId) => {
    updateStageState(stage.id, (current) => {
      const currentAnswers = current.answers || {};
      const currentSelected = currentAnswers[question.id] || [];
      const nextSelected = currentSelected.includes(optionId)
        ? currentSelected.filter((id) => id !== optionId)
        : [...currentSelected, optionId];

      return {
        ...current,
        answers: {
          ...currentAnswers,
          [question.id]: nextSelected,
        },
      };
    });
    showHintPopup({
      category,
      title: 'Selection updated',
      text: 'Your selection has been recorded. The stage scoreboard will assess the complete set.',
      icon: 'info',
    });
  };

  return (
    <section className="simulation-screen page-enter">
      <ActivityTopbar itemIndex={itemIndex} totalItems={stage.questions.length} onBack={onBack} />
      <article key={question.id} className="question-card question-enter">
        <StageHeader category={category} stage={stage} />
        <InstructionPanel stage={stage} />
        <div className="scenario-strip">
          <span>{question.context}</span>
          <p>Select every option that applies. Some options are traps.</p>
        </div>
        <h2>{question.prompt}</h2>
        <div className="option-list">
          {question.options.map((option, index) => {
            const selected = selectedIds.includes(option.id);
            return (
              <button
                key={option.id}
                type="button"
                className={`answer-option ${selected ? 'selected pulse' : ''}`}
                onClick={() => toggle(option.id)}
                style={{ '--option-delay': `${index * 70}ms` }}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
        {selectedIds.length ? (
          <div className="feedback-card feedback-enter">
            <span>Selection captured</span>
            <p>Your reflection choices have been saved. You can continue or revise before scoring.</p>
          </div>
        ) : null}
      </article>
      <div className="sticky-actions">
        <button className="secondary-action" type="button" onClick={() => setItemIndex(Math.max(0, itemIndex - 1))}>
          Previous
        </button>
        <button
          className="primary-action"
          type="button"
          onClick={() => (itemIndex === stage.questions.length - 1 ? onFinish() : setItemIndex(itemIndex + 1))}
          disabled={!selectedIds.length || (itemIndex === stage.questions.length - 1 && !complete)}
        >
          {itemIndex === stage.questions.length - 1 ? 'Score reflection' : 'Next reflection'}
        </button>
      </div>
    </section>
  );
}

function StageScoreScreen({ category, stage, stageState, stageScore, finalScore, onBack, onNext, isLastStage }) {
  const percentage = stageScore.maxScore ? Math.round((stageScore.score / stageScore.maxScore) * 100) : 0;
  const selectedRiskIds = stage.type === 'identify' ? stageScore.correctRiskIds || [] : [];
  const selectedRegisterRisks = stage.type === 'identify'
    ? stage.risks.filter((risk) => risk.isRisk && selectedRiskIds.includes(risk.id))
    : [];

  return (
    <section className="results-screen page-enter">
      <div className="result-hero">
        <span className="category-icon large">{category.icon}</span>
        <span className="eyebrow">Stage scoreboard</span>
        <h1>{percentage}%</h1>
        <p>{stage.title}: {stageScore.details}</p>
        <div className="score-ring" style={{ '--score': `${percentage}%` }}>
          <strong>{percentage}%</strong>
          <span>{stageScore.score}/{stageScore.maxScore}</span>
        </div>
      </div>
      <div className="result-stats">
        <div>
          <span>Stage score</span>
          <strong>{stageScore.score}</strong>
        </div>
        {stage.type === 'identify' ? (
          <>
            <div>
              <span>Missed risks</span>
              <strong>{stageScore.missed}</strong>
            </div>
            <div>
              <span>False positives</span>
              <strong>{stageScore.incorrect}</strong>
            </div>
          </>
        ) : (
          <>
            <div>
              <span>Running total</span>
              <strong>{finalScore.percentage}%</strong>
            </div>
            <div>
              <span>Next</span>
              <strong>{isLastStage ? 'Final' : 'Briefing'}</strong>
            </div>
          </>
        )}
      </div>
      {stage.type === 'identify' ? (
        <div className="review-list">
          {selectedRegisterRisks.map((risk) => (
            <article key={risk.id} className="review-card">
              <span>{risk.scenarioTag || 'Risk'}</span>
              <div>
                <strong>{risk.title}</strong>
                <p>{risk.insight}</p>
              </div>
              <em>Register</em>
            </article>
          ))}
          {!selectedRegisterRisks.length ? (
            <article className="review-card">
              <span>Register</span>
              <div>
                <strong>No confirmed risks captured yet</strong>
                <p>Review the stage and look for stronger project risk signals.</p>
              </div>
              <em>0</em>
            </article>
          ) : null}
        </div>
      ) : null}
      {stage.type !== 'identify' ? (
        <StageAnswerReview stage={stage} stageState={stageState} />
      ) : null}
      <div className="sticky-actions">
        <button className="secondary-action" type="button" onClick={onBack}>
          <i className="bx bx-revision" aria-hidden="true" />
          Review stage
        </button>
        <button className="primary-action" type="button" onClick={onNext}>
          <i className="bx bx-right-arrow-alt" aria-hidden="true" />
          {isLastStage ? 'Open final scoreboard' : 'Continue'}
        </button>
      </div>
    </section>
  );
}

function StageAnswerReview({ stage, stageState }) {
  if (stage.type === 'analysis') {
    const placements = stageState.placements || {};
    return (
      <div className="review-list">
        {stage.risks.map((risk) => {
          const placement = placements[risk.id];
          const selectedScore = placement ? Number(placement.probability) * Number(placement.impact) : 0;
          const grade = gradeAnalysisPlacement(risk, placement);
          return (
            <article key={risk.id} className={`review-card ${grade.className}`}>
              <span>{grade.label}</span>
              <div>
                <strong>{risk.title}</strong>
                <p>
                  Your score: {placement ? `${selectedScore} (P${placement.probability} x I${placement.impact})` : 'Not placed'}.
                  Review the signal, probability, and impact scale before retrying the placement.
                </p>
              </div>
              <em>+{grade.score}</em>
            </article>
          );
        })}
      </div>
    );
  }

  if (stage.type === 'response') {
    const responses = stageState.responses || {};
    return (
      <div className="review-list">
        {stage.risks.map((risk) => {
          const selected = responses[risk.id];
          const grade = gradeRiskResponse(risk, selected);
          return (
            <article key={risk.id} className={`review-card ${grade.className}`}>
              <span>{grade.label}</span>
              <div>
                <strong>{risk.title}</strong>
                <p>Your response: {selected || 'None'}. Review the risk signal and strategy definitions before retrying.</p>
              </div>
              <em>+{grade.score}</em>
            </article>
          );
        })}
      </div>
    );
  }

  if (stage.type === 'quiz') {
    const answers = stageState.answers || {};
    return (
      <div className="review-list">
        {stage.questions.map((question) => {
          const selected = question.options.find((option) => option.id === answers[question.id]);
          const correct = Boolean(selected?.score);
          return (
            <article key={question.id} className={`review-card ${correct ? 'correct' : 'almost'}`}>
              <span>{correct ? 'Scored' : 'Review'}</span>
              <div>
                <strong>{question.context}</strong>
                <p>Your answer: {selected?.label || 'None'}. Use the scenario evidence to retry the decision if needed.</p>
              </div>
              <em>{correct ? '+10' : '0'}</em>
            </article>
          );
        })}
      </div>
    );
  }

  if (stage.type === 'multiQuiz') {
    const answers = stageState.answers || {};
    return (
      <div className="review-list">
        {stage.questions.map((question) => {
          const selectedIds = answers[question.id] || [];
          const expectedIds = question.correctOptionIds || [];
          const correct = selectedIds.length === expectedIds.length && expectedIds.every((id) => selectedIds.includes(id));
          const selectedLabels = question.options.filter((option) => selectedIds.includes(option.id)).map((option) => option.label);
          return (
            <article key={question.id} className={`review-card ${correct ? 'correct' : 'almost'}`}>
              <span>{correct ? 'Scored' : 'Review'}</span>
              <div>
                <strong>{question.context}</strong>
                <p>Your answers: {selectedLabels.join('; ') || 'None'}. Revisit the briefing evidence if you want to improve the score.</p>
              </div>
              <em>{correct ? '+10' : '0'}</em>
            </article>
          );
        })}
      </div>
    );
  }

  return null;
}

function FinalScoreScreen({ category, playableStages, stageStates, finalScore, finalBand, onRetry, onHome, onOtherGames }) {
  const petals = Array.from({ length: 22 }, (_, index) => index);
  const celebrationIcons = ['🎉', '🚀', '🎊', '🎁', '🎈'];

  return (
    <section className="results-screen page-enter">
      <div className="result-hero final-celebration">
        <div className="petal-field" aria-hidden="true">
          {petals.map((petal) => (
            <span key={petal} style={{ '--petal-index': petal }} />
          ))}
        </div>
        <h1 className="final-title">
          <span>Congrats</span>
          <span className="celebration-icons" aria-hidden="true">
            {celebrationIcons.map((icon, index) => (
              <i key={icon} style={{ '--icon-index': index }}>{icon}</i>
            ))}
          </span>
        </h1>
        <p className="final-message">You've earned a badge</p>

        <div className="result-actions final-actions">
          <button className="secondary-action" type="button" onClick={onHome}>
            <i className="bx bx-home-alt" aria-hidden="true" />
            Homepage
          </button>
          <button className="secondary-action" type="button" onClick={onOtherGames}>
            <i className="bx bx-grid-alt" aria-hidden="true" />
            Play other games
          </button>
          <button className="primary-action" type="button" onClick={onRetry}>
            <i className="bx bx-refresh" aria-hidden="true" />
            Retry from beginning
          </button>
        </div>

        <div className="earned-badge">
          <span className="category-icon large">{category.icon}</span>
          <div className="score-ring" style={{ '--score': `${finalScore.percentage}%` }}>
            <strong>{finalScore.percentage}%</strong>
            <span>{finalScore.score}/{finalScore.maxScore}</span>
          </div>
          <div>
            <span className="eyebrow">Badge earned</span>
            <strong>{finalBand.label}</strong>
            <p>{finalBand.tagline}</p>
          </div>
        </div>
      </div>

      <div className="review-list">
        {playableStages.map((stage) => {
          const score = calculateStageScore(stage, stageStates[stage.id]);
          const percentage = score.maxScore ? Math.round((score.score / score.maxScore) * 100) : 0;
          return (
            <article key={stage.id} className="review-card">
              <span>{percentage}%</span>
              <div>
                <strong>{stage.title}</strong>
                <p>{score.details}</p>
              </div>
              <em>{score.score}/{score.maxScore}</em>
            </article>
          );
        })}
      </div>

    </section>
  );
}

function getStrategyOrder(strategies, seed) {
  return [...strategies].sort((left, right) => {
    const leftHash = hashString(`${seed}-${left}`);
    const rightHash = hashString(`${seed}-${right}`);
    return leftHash - rightHash;
  });
}

function hashString(value) {
  return Array.from(value).reduce((hash, character) => ((hash << 5) - hash + character.charCodeAt(0)) | 0, 0);
}

function ActivityTopbar({ itemIndex, totalItems, onBack }) {
  return (
    <div className="sim-topbar">
      <button className="icon-button" type="button" onClick={onBack} aria-label="Go back">
        <i className="bx bx-left-arrow-alt" aria-hidden="true" />
      </button>
      <div className="progress-shell" aria-label={`Item ${itemIndex + 1} of ${totalItems}`}>
        <span style={{ width: `${((itemIndex + 1) / totalItems) * 100}%` }} />
      </div>
      <span className="step-chip">{itemIndex + 1}/{totalItems}</span>
    </div>
  );
}

function StageHeader({ category, stage }) {
  return (
    <div className="question-header">
      <span className="category-icon compact">{category.icon}</span>
      <div>
        <p>{category.title}</p>
        <strong>{stage.title}</strong>
      </div>
    </div>
  );
}

function getStrategyCopy(strategy) {
  const copy = {
    Avoid: 'Stop or change the work so the risk no longer applies.',
    Mitigate: 'Reduce likelihood, impact, or both with stronger controls.',
    Transfer: 'Share or shift exposure through suppliers, insurance, or contracts.',
    Accept: 'Keep the risk with clear awareness and contingency.',
    Escalate: 'Raise the decision because it exceeds team authority or tolerance.',
  };
  return copy[strategy] || '';
}

export default App;
