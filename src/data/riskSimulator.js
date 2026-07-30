export const probabilityScale = [
  { value: 1, label: 'Very Low' },
  { value: 2, label: 'Low' },
  { value: 3, label: 'Medium' },
  { value: 4, label: 'High' },
  { value: 5, label: 'Very High' },
];

export const impactScale = [
  { value: 1, label: 'Negligible' },
  { value: 2, label: 'Minor' },
  { value: 3, label: 'Moderate' },
  { value: 4, label: 'Major' },
  { value: 5, label: 'Catastrophic' },
];

const identificationRisks = [
  {
    id: 'algorithm-bias',
    title: 'Algorithm bias causing defective products',
    signal: 'The AI inspection model flags fewer defects from one supplier batch, even though manual checks show quality variation.',
    isRisk: true,
    insight: 'Bias in automated quality control can allow defective products to pass inspection.',
  },
  {
    id: 'iot-cyberattack',
    title: 'IoT system vulnerable to cyberattacks',
    signal: 'Connected production sensors are still using default credentials during pilot operations.',
    isRisk: true,
    insight: 'Exposed IoT devices can become an entry point for operational disruption.',
  },
  {
    id: 'workforce-strike',
    title: 'Workforce strikes due to automation fears',
    signal: 'Operators begin discussing industrial action after hearing that robots may replace several roles.',
    isRisk: true,
    insight: 'Automation anxiety can become a people, schedule, and productivity risk.',
  },
  {
    id: 'vendor-dependency',
    title: 'Vendor dependency on AI software supplier',
    signal: 'Only one AI vendor can modify the production model, and internal engineers have limited access.',
    isRisk: true,
    insight: 'Vendor dependency can limit response speed, flexibility, and negotiation power.',
  },
  {
    id: 'data-privacy',
    title: 'Data privacy breach from predictive analytics',
    signal: 'Predictive analytics dashboards include staff identifiers, vehicle IDs, and production notes.',
    isRisk: true,
    insight: 'Analytics data can create privacy exposure if collection and access controls are weak.',
  },
  {
    id: 'integration-costs',
    title: 'Unforeseen integration costs',
    signal: 'Legacy machines need custom adapters before the AI platform can read their production data.',
    isRisk: true,
    insight: 'Integration gaps often become budget and schedule pressure.',
  },
  {
    id: 'regulatory-delay',
    title: 'Regulatory delays for AI safety certification',
    signal: 'The certification body asks for extra evidence before approving AI-assisted quality decisions.',
    isRisk: true,
    insight: 'Certification delays can block launch milestones and create compliance pressure.',
  },
  {
    id: 'ai-downtime',
    title: 'AI system downtime disrupting schedules',
    signal: 'A failed overnight model update pauses the production dashboard for two hours.',
    isRisk: true,
    insight: 'AI downtime can stop work, delay schedules, and reduce trust in automation.',
  },
  {
    id: 'ai-skills-gap',
    title: 'Insufficient staff skills in AI maintenance',
    signal: 'Maintenance staff can restart the AI workstation but cannot diagnose model or sensor faults.',
    isRisk: true,
    insight: 'Skills gaps make failures last longer and increase dependency on external support.',
  },
  {
    id: 'robot-malfunction-reputation',
    title: 'Reputational damage if robots malfunction publicly',
    signal: 'A launch demonstration will show robot-assisted assembly to press, regulators, and customers.',
    isRisk: true,
    insight: 'Public malfunction can damage confidence even when the technical issue is fixable.',
  },
  {
    id: 'cafeteria-refresh',
    title: 'Cafeteria menu refresh',
    signal: 'The cafeteria vendor plans to introduce a new lunch menu during launch week.',
    isRisk: false,
    insight: 'This may affect morale lightly, but it is not a material risk to the AI manufacturing project.',
  },
  {
    id: 'visitor-badges',
    title: 'Visitor badge redesign',
    signal: 'Marketing wants new badge colors for supplier demo day.',
    isRisk: false,
    insight: 'This is an event detail, not a core threat to safety, schedule, compliance, or delivery.',
  },
  {
    id: 'parking-layout',
    title: 'Executive parking layout change',
    signal: 'Facilities will reserve two extra parking spots for senior guests.',
    isRisk: false,
    insight: 'This does not materially affect the AI implementation unless it blocks operations.',
  },
  {
    id: 'poster-delay',
    title: 'Motivational poster delivery delay',
    signal: 'Posters for the automation awareness campaign may arrive one day late.',
    isRisk: false,
    insight: 'This is too minor to belong in the main project risk register.',
  },
];

const analysisRisks = [
  {
    id: 'iot-cyberattack',
    title: 'Cyberattack on IoT',
    signal: 'Connected IoT devices on the production line show repeated unauthorized login attempts.',
    probability: 4,
    impact: 4,
  },
  {
    id: 'worker-resistance',
    title: 'Worker resistance or strike',
    signal: 'Automation fears are spreading among operators and union representatives.',
    probability: 3,
    impact: 3,
  },
  {
    id: 'sensor-drift',
    title: 'Sensor malfunction or drift',
    signal: 'Smart sensors begin reporting inconsistent readings after a calibration update.',
    probability: 4,
    impact: 3,
  },
  {
    id: 'algorithmic-errors',
    title: 'Algorithmic control errors',
    signal: 'The AI control logic occasionally recommends settings outside normal tolerance.',
    probability: 3,
    impact: 4,
  },
  {
    id: 'vendor-integration',
    title: 'Vendor mismatch or integration',
    signal: 'The supplier API does not map cleanly to the factory execution system.',
    probability: 3,
    impact: 3,
  },
  {
    id: 'vendor-lock-in-cost',
    title: 'Vendor lock-in cost overruns',
    signal: 'Licensing terms make future model changes dependent on expensive vendor support.',
    probability: 3,
    impact: 4,
  },
  {
    id: 'ai-compliance',
    title: 'AI regulation compliance',
    signal: 'Safety assessors request more evidence before AI-assisted decisions can be certified.',
    probability: 4,
    impact: 4,
  },
  {
    id: 'reputation-accident',
    title: 'Reputational damage from accidents',
    signal: 'A visible robot incident during a public demonstration could attract negative press.',
    probability: 2,
    impact: 4,
  },
  {
    id: 'heavy-robot-accident',
    title: 'Heavy robot accident',
    signal: 'A heavy robot cell has limited separation between service zones and moving equipment.',
    probability: 2,
    impact: 5,
  },
  {
    id: 'supply-chain-disruption',
    title: 'Supply chain disruption',
    signal: 'A critical robotics component has a single supplier and long replacement lead time.',
    probability: 3,
    impact: 4,
  },
].map((risk) => ({ ...risk, riskScore: risk.probability * risk.impact }));

const responseRisks = [
  {
    id: 'iot-cyberattack-response',
    title: 'Cyberattack on IoT devices',
    signal: 'Production IoT devices are exposed to suspicious traffic and repeated login attempts.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Too costly as a first move because shutting down connected production removes the project benefit.',
      Mitigate: 'Firewalls, access hardening, monitoring, and patching reduce the threat while operations continue.',
      Transfer: 'Insurance can help with financial recovery, but it does not stop downtime.',
      Accept: 'Accepting an active cyber exposure is irresponsible for a connected factory.',
      Escalate: 'Escalation fits if the threat looks like a nation-state or exceeds project authority.',
    },
  },
  {
    id: 'heavy-robot-accident-response',
    title: 'Heavy robot accident',
    signal: 'A heavy robotic arm creates severe injury potential around maintenance access points.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Halting robotics entirely is impractical for this project.',
      Mitigate: 'Safety sensors, physical guarding, lockout controls, and training reduce likelihood and impact.',
      Transfer: 'Insurance only covers financial loss. It does not protect lives.',
      Accept: 'Accepting severe injury risk is unethical.',
      Escalate: 'Escalate if the issue reflects a systemic design flaw outside project authority.',
    },
  },
  {
    id: 'cloud-outage-response',
    title: 'Cloud outage',
    signal: 'The AI platform depends on one cloud region for production scheduling and model services.',
    response: 'Transfer',
    feedback: {
      Avoid: 'Avoiding cloud services completely is not realistic for this setup.',
      Mitigate: 'Backup servers help, but the strongest response is contractual resilience across providers.',
      Transfer: 'A multi-cloud contract and service commitments shift part of the outage exposure.',
      Accept: 'Accepting single-cloud outage risk is too risky for production.',
      Escalate: 'Escalate only if the outage involves national infrastructure or executive tolerance.',
    },
  },
  {
    id: 'regulatory-non-compliance-response',
    title: 'Regulatory non-compliance',
    signal: 'The AI safety process may not satisfy certification requirements.',
    response: 'Avoid',
    feedback: {
      Avoid: 'Designing a fully compliant process removes the illegal exposure before launch.',
      Mitigate: 'Training helps, but it does not remove non-compliant design.',
      Transfer: 'Compliance responsibility cannot be meaningfully transferred away.',
      Accept: 'Accepting illegal non-compliance is not an option.',
      Escalate: 'Escalate if laws conflict or require executive/legal interpretation.',
    },
  },
  {
    id: 'ai-bias-response',
    title: 'AI bias in quality control',
    signal: 'The quality model under-detects defects from one supplier pattern.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Dropping AI entirely is unrealistic if the tool is central to the project.',
      Mitigate: 'Bias testing, representative data, and model retraining reduce defective output.',
      Transfer: 'Vendors are partly responsible, but the factory still owns product quality.',
      Accept: 'Accepting bias can damage safety, quality, and reputation.',
      Escalate: 'Escalate if the issue reflects an industry-wide standard gap.',
    },
  },
  {
    id: 'supply-chain-response',
    title: 'Supply chain disruption',
    signal: 'A critical robot controller depends on a single overseas supplier.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Avoiding supply chain exposure completely is not possible.',
      Mitigate: 'Dual sourcing and local alternatives reduce downtime exposure.',
      Transfer: 'Contracts can help, but they do not guarantee parts arrive.',
      Accept: 'Accepting the risk can create huge downtime.',
      Escalate: 'Escalate if disruption becomes geopolitical or enterprise-wide.',
    },
  },
  {
    id: 'privacy-breach-response',
    title: 'Data privacy breach',
    signal: 'Predictive analytics collects more worker and vehicle data than the process requires.',
    response: 'Avoid',
    feedback: {
      Avoid: 'Redesigning data handling removes unnecessary privacy exposure.',
      Mitigate: 'Encryption helps, but excess collection remains a concern.',
      Transfer: 'Insurance is only a partial financial response.',
      Accept: 'Accepting privacy breach risk can be illegal.',
      Escalate: 'Escalate if the issue is systemic across the wider group.',
    },
  },
  {
    id: 'worker-resistance-response',
    title: 'Worker resistance to automation',
    signal: 'Operators fear job losses and begin resisting the AI implementation.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'No automation means the project is effectively dead.',
      Mitigate: 'Training, communication, and change management reduce resistance.',
      Transfer: 'This people risk cannot be transferred meaningfully.',
      Accept: 'Accepting resistance can damage productivity and delivery.',
      Escalate: 'Escalate if HR policy or labor relations authority is needed.',
    },
  },
  {
    id: 'vendor-bankruptcy-response',
    title: 'Vendor bankruptcy',
    signal: 'The AI software supplier shows signs of financial distress.',
    response: 'Transfer',
    feedback: {
      Avoid: 'Avoiding vendor risk entirely is not feasible once the project depends on specialist software.',
      Mitigate: 'Vendor diversification helps, but it may not protect current commitments.',
      Transfer: 'Performance bonds, warranties, and contractual protection shift part of the exposure.',
      Accept: 'Accepting vendor collapse exposure is dangerous.',
      Escalate: 'Escalate to the procurement board if continuity decisions exceed project authority.',
    },
  },
  {
    id: 'environmental-risk-response',
    title: 'Environmental risk from hazardous waste',
    signal: 'The automated production change increases hazardous waste handling requirements.',
    response: 'Avoid',
    feedback: {
      Avoid: 'Switching to greener technology removes or sharply reduces the hazardous waste exposure.',
      Mitigate: 'Containment helps, but the hazard remains.',
      Transfer: 'Insurance can help financially, but environmental responsibility remains.',
      Accept: 'Accepting illegal environmental exposure is not acceptable.',
      Escalate: 'Escalate if national standards conflict or require policy-level decisions.',
    },
  },
];

const optionStages = {
  monitoring: {
    title: 'Risk Monitoring and Control',
    label: 'Issue management quiz',
    briefing: {
      title: 'Issue Management Briefing',
      label: 'Project Atlas issue video',
      videoSrc: '/videos/project-atlas-issue-management.mp4',
      summary: 'Watch the issue management briefing, then decide how to monitor and control live risk signals.',
    },
    questions: [
      {
        id: 'monitor-1',
        prompt: 'An alert flashes: "Trend indicates potential bearing failure in 3-5 days." What should the team do?',
        context: 'IoT Early Warning - Technical Monitoring',
        options: [
          { id: 'a', label: 'Schedule preventive maintenance during next downtime.', score: 0, feedback: 'Hint: This improves safety but creates budget pressure and some downtime.' },
          { id: 'b', label: 'Log in risk register as early warning.', score: 10, feedback: 'Hint: This improves resilience and preparedness without immediate cost.' },
          { id: 'c', label: 'Classify as false alarm and clear warning.', score: 0, feedback: 'Hint: This protects short-term focus but creates high future risk.' },
          { id: 'd', label: 'Wait for red alert confirmation before acting.', score: 0, feedback: 'Hint: This protects efficiency now but weakens resilience later.' },
        ],
      },
      {
        id: 'monitor-2',
        prompt: 'A red tag flashes: "Suspicious activity - potential brute force attempt." What is the best control action?',
        context: 'Cyber Alert - Digital Threat Monitoring',
        options: [
          { id: 'a', label: 'Flag as medium risk, monitor later.', score: 0, feedback: 'Hint: This is efficient now, but it may leave resilience too low.' },
          { id: 'b', label: 'Force password reset across users.', score: 0, feedback: 'Hint: This is some action, but it can disrupt operations if not targeted.' },
          { id: 'c', label: 'Escalate to cybersecurity team and increase monitoring.', score: 10, feedback: 'Hint: This improves resilience, though it may increase response cost.' },
          { id: 'd', label: 'Delete logs to clear console.', score: 0, feedback: 'Hint: This creates short-term clarity but major exposure.' },
        ],
      },
      {
        id: 'monitor-3',
        prompt: 'Message: "We are scheduling a compliance audit in 72 hours. Please prepare documentation on safety and AI oversight." What is the best move?',
        context: 'Regulatory Visit - External Risk Monitoring',
        options: [
          { id: 'a', label: 'Wait for written confirmation before acting.', score: 0, feedback: 'Hint: This saves time now but risks delay.' },
          { id: 'b', label: 'Start preparing compliance files immediately and log as risk.', score: 10, feedback: 'Hint: This is proactive and strengthens resilience.' },
          { id: 'c', label: 'Prioritise production, push prep to last 24 hours.', score: 0, feedback: 'Hint: This gives short-term production gain but a long-term penalty.' },
          { id: 'd', label: 'Escalate to compliance officer but continue BAU.', score: 0, feedback: 'Hint: This delegates the concern but may still delay real readiness.' },
        ],
      },
    ],
  },
  opportunity: {
    title: 'Opportunity Management',
    label: 'Upside quiz',
    briefing: {
      title: 'Opportunity Management Briefing',
      label: 'Positive uncertainty',
      videoSrc: '',
      summary: 'Some uncertainty can create value. Choose how to exploit, enhance, share, or accept upside without losing control.',
    },
    questions: [
      {
        id: 'opp-1',
        prompt: 'A supplier proposes switching to a new AI-driven quality inspection tool that could cut defect rates by 40%. What should you do?',
        context: 'Supplier Innovation',
        options: [
          { id: 'a', label: 'Share: Partner with supplier and another industry player to spread benefits.', score: 0, feedback: 'Hint: This can build shared value and resilience, but control may reduce.' },
          { id: 'b', label: 'Exploit: Adopt tool immediately, adjusting budget.', score: 10, feedback: 'Hint: This strongly improves quality and efficiency, but budget pressure rises.' },
          { id: 'c', label: 'Accept: Note the tool but stick to current systems.', score: 0, feedback: 'Hint: This protects stability but may miss a major gain.' },
          { id: 'd', label: 'Enhance: Pilot the tool on one production line first.', score: 0, feedback: 'Hint: This creates learning with lower cost and lower risk.' },
        ],
      },
      {
        id: 'opp-2',
        prompt: 'A regulatory approval comes in three weeks earlier than expected. Which opportunity response is strongest?',
        context: 'Schedule Windfall',
        options: [
          { id: 'a', label: 'Enhance: Use the window for extra testing and QA.', score: 0, feedback: 'Hint: This improves quality, but spends some of the time advantage.' },
          { id: 'b', label: 'Share: Align with partners to launch collaboratively.', score: 0, feedback: 'Hint: This can improve reputation and collaboration, but control is shared.' },
          { id: 'c', label: 'Exploit: Accelerate production phase, getting product to market sooner.', score: 10, feedback: 'Hint: This improves time-to-market and revenue, with workforce stress to manage.' },
          { id: 'd', label: 'Accept: Stick to baseline schedule.', score: 0, feedback: 'Hint: This protects stability but misses the gain.' },
        ],
      },
      {
        id: 'opp-3',
        prompt: 'Operators suggest a redesigned workflow that could reduce overtime hours by 20%. What is the best move?',
        context: 'Workforce Suggestion',
        options: [
          { id: 'a', label: 'Accept: Stick to current process.', score: 0, feedback: 'Hint: This preserves stability but may lose a morale boost.' },
          { id: 'b', label: 'Enhance: Pilot with one team first.', score: 0, feedback: 'Hint: This gives moderate gain with lower risk.' },
          { id: 'c', label: 'Share: Involve contractors to spread workflow design across teams.', score: 0, feedback: 'Hint: This can speed rollout but adds coordination risk.' },
          { id: 'd', label: 'Exploit: Implement suggestion fully, rewarding staff.', score: 10, feedback: 'Hint: This can improve efficiency and morale, with some retraining cost.' },
        ],
      },
    ],
  },
  lessons: {
    title: 'Lessons Learned',
    label: 'Reflection quiz',
    briefing: {
      title: 'Lessons Learned Briefing',
      label: 'Close the loop',
      videoSrc: '',
      summary: 'Before closing the project, reflect on successes, missed opportunities, and transferable practices for future projects.',
    },
    questions: [
      {
        id: 'lesson-1',
        prompt: 'During the simulation, you accepted the AI-driven predictive maintenance upgrade due to cost concerns. Later, downtime events increased by 20%. What is the most appropriate lesson learned?',
        context: 'Missed Opportunity',
        options: [
          { id: 'a', label: 'Opportunities should always be accepted to avoid unnecessary costs.', score: 0, feedback: 'Hint: This is too absolute and can encourage poor investment decisions.' },
          { id: 'b', label: 'Missed opportunities can translate into future risks if not fully evaluated.', score: 10, feedback: 'Hint: This links opportunity decisions to future threat exposure.' },
          { id: 'c', label: 'Predictive maintenance systems always guarantee zero downtime.', score: 0, feedback: 'Hint: This overstates what technology can guarantee.' },
          { id: 'd', label: 'Risk and opportunity management should be treated as completely separate processes.', score: 0, feedback: 'Hint: This separation can hide important connections.' },
        ],
      },
      {
        id: 'lesson-2',
        prompt: 'You escalated the robotics shutdown promptly, limiting production delays to 6 hours instead of multiple days. Which lesson should be recorded?',
        context: 'Threat Response',
        options: [
          { id: 'a', label: 'Escalation eliminates all project risks permanently.', score: 0, feedback: 'Hint: Escalation can help, but it does not remove every risk.' },
          { id: 'b', label: 'Quick escalation guarantees higher profits.', score: 0, feedback: 'Hint: This focuses on a benefit that is not guaranteed.' },
          { id: 'c', label: 'Escalation is effective when risks exceed project authority or control.', score: 10, feedback: 'Hint: This frames escalation as a fit-for-purpose response.' },
          { id: 'd', label: 'Escalation should be the first choice for every risk.', score: 0, feedback: 'Hint: Some risks should be handled locally before escalation.' },
        ],
      },
      {
        id: 'lesson-3',
        prompt: 'You scheduled monthly risk reviews but missed several emerging cybersecurity threats. What is the key takeaway?',
        context: 'Monitoring',
        options: [
          { id: 'a', label: 'Monthly reviews are always sufficient regardless of risk type.', score: 0, feedback: 'Hint: Review cadence should change with risk velocity.' },
          { id: 'b', label: 'Monitoring is only needed if risks have already materialised.', score: 0, feedback: 'Hint: Monitoring should detect weak signals before issues occur.' },
          { id: 'c', label: 'Monitoring schedules must balance frequency and relevance to the project environment.', score: 10, feedback: 'Hint: This connects monitoring rhythm to the risk environment.' },
          { id: 'd', label: 'Cyber risks do not require the same monitoring as operational risks.', score: 0, feedback: 'Hint: Cyber risks often need faster and more specialized monitoring.' },
        ],
      },
      {
        id: 'lesson-4',
        prompt: 'Regulators praised your team for early transparency during an incident, which reduced penalties. Which is the correct lesson?',
        context: 'Stakeholder Engagement',
        options: [
          { id: 'a', label: 'Regulators should only be informed once risks materialise into issues.', score: 0, feedback: 'Hint: Waiting too long can increase reputational and compliance exposure.' },
          { id: 'b', label: 'Delaying communication allows the team to resolve issues quietly.', score: 0, feedback: 'Hint: Quiet delay can reduce trust when stakeholders later discover the issue.' },
          { id: 'c', label: 'Stakeholder engagement is unnecessary in technical risks.', score: 0, feedback: 'Hint: Technical risks can still have stakeholder, legal, and reputation impacts.' },
          { id: 'd', label: 'Transparent communication can mitigate reputational and financial impacts.', score: 10, feedback: 'Hint: This captures the value of early, honest stakeholder engagement.' },
        ],
      },
    ],
  },
};

const aiCarManufacturing = {
  id: 'automobile',
  title: 'Project Atlas AI Car Manufacturing',
  shortTitle: 'Project Atlas',
  icon: 'AU',
  accent: '#ff6b35',
  tint: '#fff0e8',
  summary: 'Project Atlas AI car manufacturing scenario with hazards, analysis, response, monitoring, opportunities, and lessons learned.',
  difficulty: 'Model category',
  estimatedTime: '30 min',
  tagline: 'Lead the Project Atlas AI Car Manufacturing risk simulation from factory risk signals to final lessons learned.',
  stages: [
    {
      id: 'general',
      type: 'briefing',
      title: 'General Briefing',
      label: 'Mission setup',
      videoSrc: '/videos/project-atlas-risk-manager-intro.mp4',
      summary: 'Understand the project setting before risk work begins.',
    },
    {
      id: 'identification',
      type: 'identify',
      title: 'Risk Identification',
      label: 'Find the real risks',
      briefing: {
        title: 'Risk Identification Briefing',
        label: 'Stage 1 video',
        videoSrc: '/videos/project-atlas-risk-identification.mp4',
        summary: 'Watch the risk identification briefing, then review 14 signals and identify the 10 real risks.',
      },
      risks: identificationRisks,
      requiredSelections: 10,
    },
    {
      id: 'analysis',
      type: 'analysis',
      title: 'Risk Analysis',
      label: 'Probability x impact',
      briefing: {
        title: 'Risk Analysis Briefing',
        label: 'Matrix challenge',
        videoSrc: '',
        summary: 'Drag or tap each risk into the Probability and Impact matrix. Score is based on R = P x I within a plus or minus 4 range.',
      },
      risks: analysisRisks,
    },
    {
      id: 'response',
      type: 'response',
      title: 'Risk Response',
      label: 'Choose strategy',
      briefing: {
        title: 'Risk Response Briefing',
        label: 'Stage 3 video',
        videoSrc: '/videos/project-atlas-risk-response.mp4',
        summary: 'Choose Avoid, Mitigate, Transfer, Accept, or Escalate for each risk response target.',
      },
      risks: responseRisks,
      strategies: ['Avoid', 'Mitigate', 'Transfer', 'Accept', 'Escalate'],
    },
    { id: 'monitoring', type: 'quiz', ...optionStages.monitoring },
    { id: 'opportunity', type: 'quiz', ...optionStages.opportunity },
    { id: 'lessons', type: 'quiz', ...optionStages.lessons },
  ],
};

const petroNovaIdentificationRisks = [
  {
    id: 'petro-explosion-hazard',
    scenario: 'Site Walkthrough - PESTLE',
    scenarioTag: 'PESTLE',
    title: 'Explosive or flammable hazard',
    signal: 'Sparks flash near a flammable pipe. Cue: "This pipe contains hydrocarbons - ensure no ignition sources nearby."',
    isRisk: true,
    insight: 'Hot work near hydrocarbon lines is a major safety and environmental risk.',
  },
  {
    id: 'petro-reputation-legal',
    scenario: 'Site Walkthrough - PESTLE',
    scenarioTag: 'PESTLE',
    title: 'Reputational and legal risk',
    signal: 'A drone hovers overhead. Cue: "Footage of unsafe practices may be shared online."',
    isRisk: true,
    insight: 'Public evidence of unsafe practice can trigger legal, regulatory, and reputation consequences.',
  },
  {
    id: 'petro-permit-delay',
    scenario: 'Site Walkthrough - PESTLE',
    scenarioTag: 'PESTLE',
    title: 'Political or regulatory delay',
    signal: 'A colleague says: "Those protests are causing the permit office delays again."',
    isRisk: true,
    insight: 'External political and regulatory pressure can delay permits and work approvals.',
  },
  {
    id: 'petro-fuel-volatility',
    scenario: 'Site Walkthrough - PESTLE',
    scenarioTag: 'PESTLE',
    title: 'Market and economic volatility',
    signal: 'A truck driver at the gate says: "Fuel prices keep changing every week."',
    isRisk: true,
    insight: 'Fuel price movement can affect logistics, budget, and contingency needs.',
  },
  {
    id: 'petro-old-equipment',
    scenario: 'Site Walkthrough - PESTLE',
    scenarioTag: 'PESTLE',
    title: 'Technological or maintenance risk',
    signal: 'An old equipment label reads: "Installed: 1983."',
    isRisk: true,
    insight: 'Aging assets can increase breakdown, integration, and safety exposure.',
  },
  {
    id: 'petro-site-poster',
    scenario: 'Site Walkthrough - PESTLE',
    scenarioTag: 'Decoy',
    title: 'Safety poster redesign',
    signal: 'A bright poster says: "New visitor safety artwork coming soon."',
    isRisk: false,
    insight: 'This may support communication, but it is not a material project risk signal.',
  },
  {
    id: 'petro-football-chat',
    scenario: 'Site Walkthrough - PESTLE',
    scenarioTag: 'Decoy',
    title: 'Football chatter outside the fence',
    signal: 'Two workers argue about last night\'s football score near the gate.',
    isRisk: false,
    insight: 'Background chatter is not a relevant risk source unless it affects work performance or safety.',
  },
  {
    id: 'petro-welding-slippage',
    scenario: 'Project Office - SWOT',
    scenarioTag: 'SWOT',
    title: 'Skilled labour shortages causing delays',
    signal: 'Whiteboard Gantt chart cue: "Repeated slippage in welding tasks."',
    isRisk: true,
    insight: 'Repeated specialist-task slippage signals a weakness that can affect schedule delivery.',
  },
  {
    id: 'petro-subcontractor-delay',
    scenario: 'Project Office - SWOT',
    scenarioTag: 'SWOT',
    title: 'Supply chain dependency',
    signal: 'Subcontractor email cue: "Due to shortage of qualified welders, expect 4-week delay."',
    isRisk: true,
    insight: 'Dependency on scarce subcontractor capability can become a delivery threat.',
  },
  {
    id: 'petro-penalty-cost',
    scenario: 'Project Office - SWOT',
    scenarioTag: 'SWOT',
    title: 'Cost escalation through penalties',
    signal: 'Contract binder cue: "Clause 7.3 - Late completion penalty: GBP100k/day."',
    isRisk: true,
    insight: 'Contractual penalties can turn schedule delay into severe cost exposure.',
  },
  {
    id: 'petro-blueprint-error',
    scenario: 'Project Office - SWOT',
    scenarioTag: 'SWOT',
    title: 'Aging or incorrect data causing design errors',
    signal: 'Engineer cue: "These blueprints do not match the current structure."',
    isRisk: true,
    insight: 'Outdated drawings can create rework, safety, and construction quality risks.',
  },
  {
    id: 'petro-steel-volatility',
    scenario: 'Project Office - SWOT',
    scenarioTag: 'SWOT',
    title: 'Cost and material volatility',
    signal: 'Spreadsheet margin note cue: "Steel price forecast: volatile."',
    isRisk: true,
    insight: 'Material price volatility can affect procurement strategy and contingency.',
  },
  {
    id: 'petro-coffee-machine',
    scenario: 'Project Office - SWOT',
    scenarioTag: 'Decoy',
    title: 'Coffee machine queue',
    signal: 'A team member complains that the coffee machine queue is too long after lunch.',
    isRisk: false,
    insight: 'This is a workplace annoyance, not a meaningful risk to refinery expansion delivery.',
  },
  {
    id: 'petro-font-change',
    scenario: 'Project Office - SWOT',
    scenarioTag: 'Decoy',
    title: 'Slide font preference',
    signal: 'The project assistant asks whether the board deck should use a larger font.',
    isRisk: false,
    insight: 'Presentation formatting is not a project risk unless it affects decision quality.',
  },
  {
    id: 'petro-carbon-rules',
    scenario: 'Strategy Meeting - VUCA',
    scenarioTag: 'VUCA',
    title: 'Regulatory uncertainty',
    signal: 'Legislation slide cue: "Carbon compliance rules - TBD."',
    isRisk: true,
    insight: 'Unclear future regulation makes planning, design, and compliance harder.',
  },
  {
    id: 'petro-oil-price-swings',
    scenario: 'Strategy Meeting - VUCA',
    scenarioTag: 'VUCA',
    title: 'Financial volatility',
    signal: 'Finance folder cue: "Cashflow sensitivity: oil price swings plus/minus 30%."',
    isRisk: true,
    insight: 'Large commodity-price swings can affect funding, contingency, and investment decisions.',
  },
  {
    id: 'petro-tie-in-accountability',
    scenario: 'Strategy Meeting - VUCA',
    scenarioTag: 'VUCA',
    title: 'Ambiguity in accountability',
    signal: 'Contractor argues: "Who is responsible for tie-in safety? You or us?"',
    isRisk: true,
    insight: 'Unclear safety ownership can cause gaps, conflict, and delayed decisions.',
  },
  {
    id: 'petro-contractor-complexity',
    scenario: 'Strategy Meeting - VUCA',
    scenarioTag: 'VUCA',
    title: 'Complexity and coordination hazards',
    signal: 'Construction schedule cue: "Multiple contractors, overlapping shifts."',
    isRisk: true,
    insight: 'Many interdependent contractors and shifts increase coordination and safety complexity.',
  },
  {
    id: 'petro-import-disruption',
    scenario: 'Strategy Meeting - VUCA',
    scenarioTag: 'VUCA',
    title: 'Political instability causing supply chain risk',
    signal: 'TV news cue: "Trade talks collapse - imports disrupted."',
    isRisk: true,
    insight: 'Political disruption can affect imported modules and critical supplies.',
  },
  {
    id: 'petro-catering-choice',
    scenario: 'Strategy Meeting - VUCA',
    scenarioTag: 'Decoy',
    title: 'Boardroom catering preference',
    signal: 'An executive asks whether sandwiches or pastries should be served next meeting.',
    isRisk: false,
    insight: 'Catering preference does not affect the risk profile of the refinery expansion.',
  },
  {
    id: 'petro-wall-art',
    scenario: 'Strategy Meeting - VUCA',
    scenarioTag: 'Decoy',
    title: 'Boardroom wall art',
    signal: 'A framed photograph in the boardroom is slightly crooked.',
    isRisk: false,
    insight: 'This is a visual distraction, not a source of project uncertainty.',
  },
];

const petroNovaAnalysisRisks = [
  {
    id: 'petro-hydrocarbon-leak',
    title: 'Volatile hydrocarbon leak',
    signal: 'Leak possible during construction tie-ins in volatile zones. Evidence: similar refinery projects had two major explosions in the last decade; hydrocarbon concentration is high.',
    probability: 4,
    impact: 5,
  },
  {
    id: 'petro-acid-spill',
    title: 'Acid or catalyst spill',
    signal: 'Handling acids and catalysts creates toxic exposure. Evidence: worker reports highlight poor training and moderate incident rate.',
    probability: 3,
    impact: 4,
  },
  {
    id: 'petro-crane-accident',
    title: 'Crane accident in confined area',
    signal: 'Heavy lifting near workers in tight space. Evidence: near misses logged and one crane already failed a load test.',
    probability: 3,
    impact: 5,
  },
  {
    id: 'petro-electrical-fire',
    title: 'Electrical fire during tie-in',
    signal: 'New HV systems are being integrated while live. Evidence: fire risk elevated but redundancy systems installed.',
    probability: 2,
    impact: 4,
  },
  {
    id: 'petro-flare-malfunction',
    title: 'Gas flare malfunction',
    signal: 'Flare failure could cause toxic releases. Evidence: rare in the past, but severe when it occurred.',
    probability: 2,
    impact: 5,
  },
  {
    id: 'petro-equipment-delay',
    title: 'Delay in equipment delivery',
    signal: 'Key modules are imported overseas. Evidence: supplier backlog and weather disruption are both possible.',
    probability: 4,
    impact: 3,
  },
  {
    id: 'petro-skilled-shortage',
    title: 'Skilled labour shortage',
    signal: 'Certified welders and operators are scarce. Evidence: industry demand spike and wages climbing.',
    probability: 3,
    impact: 3,
  },
  {
    id: 'petro-community-protest',
    title: 'Community protest',
    signal: 'Local groups are concerned about emissions. Evidence: NGO activity rising and protest permits requested.',
    probability: 2,
    impact: 3,
  },
  {
    id: 'petro-cyber-breach',
    title: 'Cybersecurity breach',
    signal: 'Remote-control systems could be hacked. Evidence: prior oil and gas sector breaches and IT flagged weaknesses.',
    probability: 2,
    impact: 4,
  },
  {
    id: 'petro-regulatory-change',
    title: 'Regulatory changes mid-project',
    signal: 'New laws or regulations may be imposed. Evidence: government consultations ongoing and history of tightening.',
    probability: 3,
    impact: 4,
  },
].map((risk) => ({ ...risk, riskScore: risk.probability * risk.impact }));

const petroNovaResponseRisks = [
  {
    id: 'petro-response-hydrocarbon',
    title: 'Hydrocarbon Leak/Explosion',
    signal: 'Tie-in work could release hydrocarbons in an ignition-prone zone.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Redesigning the tie-in with remote welding reduces exposure but adds six months and about $10m.',
      Mitigate: 'Gas detectors and fire suppression add cost but sharply reduce explosion risk.',
      Transfer: 'Insurance covers liability, but it does not protect lives or prevent blast damage.',
      Accept: 'Relying only on monitoring saves money, but catastrophic potential remains.',
      Escalate: 'Corporate HSE review may be needed, but it can delay the project while approval is pending.',
    },
  },
  {
    id: 'petro-response-chemical',
    title: 'Chemical Exposure',
    signal: 'Acids, catalysts, and toxic gases may expose workers during handling.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Outsourcing catalyst handling reduces exposure but adds about $8m.',
      Mitigate: 'Advanced PPE and automated handling systems strongly reduce exposure for a manageable cost.',
      Transfer: 'A contractor insurance clause provides legal cover but does not reduce exposure.',
      Accept: 'Minimal PPE keeps cost low but leaves high injury potential.',
      Escalate: 'Regulator escalation may be necessary for compliance but could trigger shutdown.',
    },
  },
  {
    id: 'petro-response-crane',
    title: 'Crane Collapse',
    signal: 'Heavy lifting in confined areas creates severe accident exposure.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Pre-assembled modules avoid onsite lifting but create large delay and cost impacts.',
      Mitigate: 'Certified riggers and extra inspections reduce collapse risk strongly.',
      Transfer: 'A specialist firm shifts some liability, but site safety still matters.',
      Accept: 'Standard lifting keeps cost low but leaves high accident risk.',
      Escalate: 'Sponsor escalation fits if outsourcing strategy needs approval.',
    },
  },
  {
    id: 'petro-response-electrical',
    title: 'Electrical Fire',
    signal: 'High-voltage integration could ignite during live tie-in work.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Delaying integration until shutdown avoids fire risk but adds three months.',
      Mitigate: 'Isolation barriers and phased energisation cut the fire risk substantially.',
      Transfer: 'Insurance covers some cost, but the fire hazard remains.',
      Accept: 'Continuing as planned saves money but keeps high fire exposure.',
      Escalate: 'Corporate engineering approval may be needed for high-voltage strategy.',
    },
  },
  {
    id: 'petro-response-oil-spill',
    title: 'Oil Spill',
    signal: 'Piping work near waterways could contaminate the environment.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Rerouting away from waterways reduces risk but adds about $9m and delay.',
      Mitigate: 'Double containment and spill kits reduce spill impact and response time.',
      Transfer: 'Pollution insurance helps financially, but fines may still apply.',
      Accept: 'Minimal measures save cost but create reputational disaster potential.',
      Escalate: 'Regulator escalation may suspend the project.',
    },
  },
  {
    id: 'petro-response-gas-leak',
    title: 'Gas Leak',
    signal: 'Gas handling systems could leak and trigger environmental penalties.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Redesigning gas handling removes exposure but adds major delay and cost.',
      Mitigate: 'Upgraded seals, detectors, and pressure systems strongly reduce leak risk.',
      Transfer: 'A subcontractor shifts some liability but does not fully protect the project.',
      Accept: 'Emergency repair reliance leaves high penalty risk.',
      Escalate: 'Corporate compliance escalation can slow approvals.',
    },
  },
  {
    id: 'petro-response-fatigue',
    title: 'Worker Fatigue',
    signal: 'Compressed schedule creates long shifts and rising near misses.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Extending the schedule reduces fatigue but may upset the sponsor.',
      Mitigate: 'Shift controls, rest breaks, and wellness support strongly reduce fatigue risk.',
      Transfer: 'Subcontracting some tasks can help but adds cost and coordination needs.',
      Accept: 'Maintaining the compressed schedule leaves high accident risk.',
      Escalate: 'Sponsor escalation fits if schedule relief needs approval.',
    },
  },
  {
    id: 'petro-response-equipment',
    title: 'Equipment Failure',
    signal: 'Poor maintenance could cause breakdowns in key construction equipment.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Replacing old equipment reduces exposure but adds about $6m and delay.',
      Mitigate: 'A preventive maintenance programme gives strong risk reduction for moderate cost.',
      Transfer: 'Leasing with service contracts transfers some liability.',
      Accept: 'Minimal checks save cost but increase breakdown risk.',
      Escalate: 'Asset board escalation fits if fleet renewal is needed.',
    },
  },
  {
    id: 'petro-response-compliance',
    title: 'Regulatory Non-Compliance',
    signal: 'New refinery standards may not be reflected in current project controls.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Delaying until permits are secured gives safe compliance but delays the project.',
      Mitigate: 'Compliance consultants and pre-audits reduce fine and shutdown risk.',
      Transfer: 'Legal insurance does not stop shutdowns.',
      Accept: 'Proceeding without updated compliance creates high fine and shutdown risk.',
      Escalate: 'Corporate legal escalation may be needed but could suspend work.',
    },
  },
  {
    id: 'petro-response-security',
    title: 'Security Breach/Sabotage',
    signal: 'Sensitive works and materials are exposed to perimeter security weaknesses.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Relocating sensitive work reduces risk but adds about $5m.',
      Mitigate: 'Specialist security and surveillance reduce breach and sabotage exposure.',
      Transfer: 'A security subcontractor shifts some liability but does not remove threat.',
      Accept: 'Basic guards only keeps cost low but leaves high breach probability.',
      Escalate: 'National security escalation may be required for severe threat intelligence.',
    },
  },
];

const petroNovaStages = {
  monitoring: {
    title: 'Risk Monitoring and Control',
    label: 'Management dashboard',
    briefing: {
      title: 'Risk Monitoring and Control Briefing',
      label: 'Stage 4 video',
      videoSrc: '/videos/petronova-risk-monitoring-control-stage-4.mp4',
      summary: 'Monitor live PetroNova risk triggers, update the register, and decide when to escalate or trigger contingency.',
    },
    questions: [
      {
        id: 'petro-monitor-1',
        prompt: 'Control room dashboard: Tank 17 pressure trends 15% above baseline while engineers say it is probably a sensor glitch. What is the best action?',
        context: 'Hydrocarbon Leak - Dashboard Warning',
        options: [
          { id: 'a', label: 'Log as normal fluctuation.', score: 0, feedback: 'Hint: This keeps the register unchanged despite a rising warning signal.' },
          { id: 'b', label: 'Escalate to safety officer for inspection.', score: 10, feedback: 'Hint: Cost may rise, but hidden seal faults can be caught before escalation.' },
          { id: 'c', label: 'Ignore and trust the engineer comment.', score: 0, feedback: 'Hint: Informal reassurance can allow a weak signal to become an issue.' },
          { id: 'd', label: 'Close the risk entry prematurely.', score: 0, feedback: 'Hint: Closing an active warning can make resurfacing risk more severe.' },
        ],
      },
      {
        id: 'petro-monitor-2',
        prompt: 'Weekly HR dashboard shows welder absenteeism up 15%, three near misses, and several 14-hour shifts. What should the risk manager do?',
        context: 'Worker Fatigue - Weekly Report',
        options: [
          { id: 'a', label: 'Ignore, assume workers will adjust.', score: 0, feedback: 'Hint: Fatigue signals rarely self-correct under schedule pressure.' },
          { id: 'b', label: 'Trigger contingency: enforce rest shifts and hire temporary crew.', score: 0, feedback: 'Hint: This may help, but first make sure the register reflects the changed risk level.' },
          { id: 'c', label: 'Update risk register: raise probability of fatigue accidents.', score: 10, feedback: 'Hint: Accurate monitoring keeps the team aligned before action is chosen.' },
          { id: 'd', label: 'Escalate to sponsor for schedule relief.', score: 0, feedback: 'Hint: Escalation can be useful, but the immediate monitoring move is to update the risk picture.' },
        ],
      },
      {
        id: 'petro-monitor-3',
        prompt: 'Business news announces stricter refinery emissions standards effective in three months, while permits are still under review. What is the best register move?',
        context: 'Regulatory Non-Compliance - News Update',
        options: [
          { id: 'a', label: 'Update compliance risk entry to High.', score: 10, feedback: 'Hint: The register should respond quickly when external conditions shift.' },
          { id: 'b', label: 'Ignore news because company exemptions may apply.', score: 0, feedback: 'Hint: Assumed exemptions can become costly if not verified.' },
          { id: 'c', label: 'Delay update until next quarterly review.', score: 0, feedback: 'Hint: Slow cadence is dangerous when regulatory timing accelerates.' },
          { id: 'd', label: 'Escalate to corporate legal and regulatory team.', score: 0, feedback: 'Hint: This may be needed, but the register still needs a current risk rating.' },
        ],
      },
      {
        id: 'petro-monitor-4',
        prompt: 'Maintenance bay log shows Crane 4 and Pump 22 overdue, with a red icon flashing and unusual crane creaking. What should happen first?',
        context: 'Equipment Failure - Maintenance Log',
        options: [
          { id: 'a', label: 'Transfer to subcontractor and close internally.', score: 0, feedback: 'Hint: Closing internally can hide exposure that still affects the project.' },
          { id: 'b', label: 'Update risk register probability from Medium to High.', score: 10, feedback: 'Hint: The probability has changed because multiple warning signals now align.' },
          { id: 'c', label: 'Ignore, as delays are expensive.', score: 0, feedback: 'Hint: Avoiding delay now can create a larger failure later.' },
          { id: 'd', label: 'Trigger contingency: order emergency maintenance.', score: 0, feedback: 'Hint: This is an action option, but first the monitored risk status should reflect reality.' },
        ],
      },
      {
        id: 'petro-monitor-5',
        prompt: 'Night CCTV shows an unlocked gate, unknown restricted-zone entry, logbook mismatch, and a suspicious activity email. What is the best move?',
        context: 'Security Breach - Perimeter Cameras',
        options: [
          { id: 'a', label: 'Update risk register to High.', score: 0, feedback: 'Hint: Updating is useful, but the threat may now exceed normal project authority.' },
          { id: 'b', label: 'Ignore because the guard was probably careless.', score: 0, feedback: 'Hint: Assumptions can let sabotage or theft escalate.' },
          { id: 'c', label: 'Escalate to national regulator/security.', score: 10, feedback: 'Hint: Restricted-zone intrusion can exceed project-level authority.' },
          { id: 'd', label: 'Trigger contingency: hire extra security patrols.', score: 0, feedback: 'Hint: Extra patrols help, but the breach signal requires senior/security escalation.' },
        ],
      },
    ],
  },
  reflection: {
    title: 'Risk Identification Reflection',
    label: 'Critical thinking',
    briefing: {
      title: 'Risk Identification Reflection',
      label: 'Reflection round',
      videoSrc: '',
      summary: 'Use PetroNova evidence to think about sources of risk, VUCA conditions, and creative identification techniques.',
    },
    questions: [
      {
        id: 'petro-reflect-1',
        context: 'Sources of Risk',
        prompt: 'When conducting risk identification at PetroNova, which are valid sources of identifying potential risks?',
        correctOptionIds: ['a', 'b', 'd'],
        hint: 'Think about evidence sources, structured analysis, and compliance obligations. Watch out for internal versus external environment wording.',
        options: [
          { id: 'a', label: 'Lessons learned from similar refinery projects' },
          { id: 'b', label: 'Conducting a SWOT analysis of the project environment' },
          { id: 'c', label: 'Conducting a PESTLE analysis to understand the internal project environment' },
          { id: 'd', label: 'Reviewing regulatory and environmental compliance requirements' },
        ],
      },
      {
        id: 'petro-reflect-2',
        context: 'VUCA Environment',
        prompt: 'Which items best correspond to VUCA elements relevant to PetroNova risk identification?',
        correctOptionIds: ['a', 'b', 'd'],
        hint: 'Match each choice to the VUCA concept. Complexity is about interdependent interactions, not just availability changes.',
        options: [
          { id: 'a', label: 'Volatility - Frequent, large swings in global oil prices' },
          { id: 'b', label: 'Uncertainty - Unclear timing and scope of future emission regulations' },
          { id: 'c', label: 'Complexity - Availability of spare parts from multiple global suppliers leading to changing stock levels' },
          { id: 'd', label: 'Ambiguity - Poorly-defined safety responsibilities between PetroNova and the EPC contractor' },
        ],
      },
      {
        id: 'petro-reflect-3',
        context: 'Creative Risk Identification',
        prompt: 'Which creative techniques can the team use at the beginning of the PetroNova project to identify risks?',
        correctOptionIds: ['a', 'b', 'd'],
        hint: 'Early planning benefits from cross-functional creativity, structured breakdowns, and prompt lists.',
        options: [
          { id: 'a', label: 'Brainstorming with cross-functional experts' },
          { id: 'b', label: 'Risk Breakdown Structures (RBS)' },
          { id: 'c', label: 'Risk data collection at the project deployment phase' },
          { id: 'd', label: 'Prompt lists such as PESTLE and SWOT' },
        ],
      },
    ],
  },
};

const petroNovaRefinery = {
  id: 'oil-gas',
  title: 'PetroNova Refinery Expansion Project',
  shortTitle: 'PetroNova',
  icon: 'OG',
  accent: '#0f9f6e',
  tint: '#e9fff7',
  summary: 'Oil and gas refinery expansion simulation with PESTLE, SWOT, VUCA, analysis, response, and monitoring rounds.',
  difficulty: 'Model category',
  estimatedTime: '35 min',
  tagline: 'Lead the PetroNova refinery expansion risk process from site walkthrough to monitoring decisions.',
  stages: [
    {
      id: 'petro-general',
      type: 'briefing',
      title: 'Project Brief',
      label: 'Risk Manager Intro',
      videoSrc: '/videos/petronova-risk-manager-intro.mp4',
      summary: 'Step into the PetroNova Refinery Expansion Project as the risk manager.',
    },
    {
      id: 'petro-identification',
      type: 'identify',
      title: 'Risk Identification',
      label: 'PESTLE, SWOT, VUCA',
      prompt: 'Should this hotspot be added to the PetroNova risk register?',
      briefing: {
        title: 'Risk Identification Briefing',
        label: 'Stage 1 video',
        videoSrc: '/videos/petronova-risk-identification.mp4',
        summary: 'Walk through the site, project office, and strategy room to interpret hidden PetroNova risk signals.',
      },
      risks: petroNovaIdentificationRisks,
      requiredSelections: 15,
    },
    { id: 'petro-reflection', type: 'multiQuiz', ...petroNovaStages.reflection },
    {
      id: 'petro-analysis',
      type: 'analysis',
      title: 'Risk Analysis',
      label: 'Probability x impact',
      briefing: {
        title: 'Risk Analysis Briefing',
        label: 'Stage 2 video',
        videoSrc: '/videos/petronova-risk-analysis.mp4',
        summary: 'Place each PetroNova risk on the heatmap using Probability and Impact. Correct range earns stage percentage.',
      },
      risks: petroNovaAnalysisRisks,
    },
    {
      id: 'petro-response',
      type: 'response',
      title: 'Risk Response',
      label: 'Choose strategy',
      briefing: {
        title: 'Risk Response Briefing',
        label: 'Stage 3 video',
        videoSrc: '/videos/petronova-risk-response.mp4',
        summary: 'Choose Avoid, Mitigate, Transfer, Accept, or Escalate for each PetroNova risk.',
      },
      risks: petroNovaResponseRisks,
      strategies: ['Avoid', 'Mitigate', 'Transfer', 'Accept', 'Escalate'],
    },
    { id: 'petro-monitoring', type: 'quiz', ...petroNovaStages.monitoring },
  ],
};

const novaTechIdentificationRisks = [
  {
    id: 'nova-overheating-rack',
    scenario: 'Data Centre Walkthrough - PESTLE',
    scenarioTag: 'PESTLE',
    title: 'Environmental and technical failure causing downtime',
    signal: 'Overheating server rack cue: "Temperature spike detected - cooling system lag."',
    isRisk: true,
    insight: 'Cooling failure can interrupt cloud services and damage infrastructure.',
  },
  {
    id: 'nova-ai-act',
    scenario: 'Data Centre Walkthrough - PESTLE',
    scenarioTag: 'PESTLE',
    title: 'Legal and regulatory compliance risk',
    signal: 'News ticker cue: "EU AI Act enforcement begins." New obligations apply to automated decision systems.',
    isRisk: true,
    insight: 'Changing AI and data regulation can affect platform design, release timing, and compliance cost.',
  },
  {
    id: 'nova-usb',
    scenario: 'Data Centre Walkthrough - PESTLE',
    scenarioTag: 'PESTLE',
    title: 'Cybersecurity breach vector',
    signal: 'Contractor uses a personal USB stick. Cue: "Unapproved device detected."',
    isRisk: true,
    insight: 'Unapproved removable media can introduce malware or data exfiltration pathways.',
  },
  {
    id: 'nova-chip-shortage',
    scenario: 'Data Centre Walkthrough - PESTLE',
    scenarioTag: 'PESTLE',
    title: 'Economic and supply chain volatility',
    signal: 'Technician says: "Chip shortages again - delivery pushed back."',
    isRisk: true,
    insight: 'Semiconductor delays can affect hardware readiness and migration schedule.',
  },
  {
    id: 'nova-drone',
    scenario: 'Data Centre Walkthrough - PESTLE',
    scenarioTag: 'PESTLE',
    title: 'Reputational exposure',
    signal: 'Drone filming outside the building. Cue: "Footage could expose sensitive infrastructure."',
    isRisk: true,
    insight: 'Public exposure of sensitive facilities can damage trust and increase security concern.',
  },
  {
    id: 'nova-poster',
    scenario: 'Data Centre Walkthrough - PESTLE',
    scenarioTag: 'Decoy',
    title: 'Motivational wall poster',
    signal: 'A poster says: "Move fast, migrate safely."',
    isRisk: false,
    insight: 'A poster may shape culture, but it is not a material risk signal by itself.',
  },
  {
    id: 'nova-decorative-screen',
    scenario: 'Data Centre Walkthrough - PESTLE',
    scenarioTag: 'Decoy',
    title: 'Decorative uptime animation',
    signal: 'A decorative wall screen loops a generic cloud animation.',
    isRisk: false,
    insight: 'Visual decoration is not a project risk source unless connected to operational evidence.',
  },
  {
    id: 'nova-monolith',
    scenario: 'DevOps Office - SWOT',
    scenarioTag: 'SWOT',
    title: 'Technical debt causing integration failures',
    signal: 'Senior developer mutters: "Legacy monolith code is impossible to untangle."',
    isRisk: true,
    insight: 'Technical debt can slow migration and cause integration defects.',
  },
  {
    id: 'nova-deprecated-library',
    scenario: 'DevOps Office - SWOT',
    scenarioTag: 'SWOT',
    title: 'Dependency risk forcing redesign',
    signal: 'Email popup cue: "Critical dependency library deprecated next quarter."',
    isRisk: true,
    insight: 'Deprecated dependencies can force redesign, security fixes, and schedule changes.',
  },
  {
    id: 'nova-release-penalty',
    scenario: 'DevOps Office - SWOT',
    scenarioTag: 'SWOT',
    title: 'Cost escalation from missed release date',
    signal: 'Contract folder cue: "Penalty clause: GBP50k/day for missed release date."',
    isRisk: true,
    insight: 'Contract penalties can convert delivery slippage into direct financial loss.',
  },
  {
    id: 'nova-low-test-automation',
    scenario: 'DevOps Office - SWOT',
    scenarioTag: 'SWOT',
    title: 'Low automation causing defect leakage',
    signal: 'Dashboard shows 40% test automation coverage.',
    isRisk: true,
    insight: 'Low automated test coverage increases release quality and regression risk.',
  },
  {
    id: 'nova-cloud-price',
    scenario: 'DevOps Office - SWOT',
    scenarioTag: 'SWOT',
    title: 'Cloud cost volatility',
    signal: 'Spreadsheet margin note: "Cloud provider pricing expected to increase."',
    isRisk: true,
    insight: 'Cloud price movement can affect operating cost and business-case assumptions.',
  },
  {
    id: 'nova-standup-snacks',
    scenario: 'DevOps Office - SWOT',
    scenarioTag: 'Decoy',
    title: 'Snack budget debate',
    signal: 'A Slack message asks whether the sprint room should stock more biscuits.',
    isRisk: false,
    insight: 'Team comfort matters, but this is not a material cloud platform upgrade risk.',
  },
  {
    id: 'nova-keyboard-choice',
    scenario: 'DevOps Office - SWOT',
    scenarioTag: 'Decoy',
    title: 'Mechanical keyboard preference',
    signal: 'A developer asks if the team can standardise keyboard switches.',
    isRisk: false,
    insight: 'This is a workplace preference, not a risk to migration delivery.',
  },
  {
    id: 'nova-redacted-regulation',
    scenario: 'Strategy Meeting - VUCA',
    scenarioTag: 'VUCA',
    title: 'Unclear data governance rules',
    signal: 'Slide with redacted regulatory text suggests future data governance obligations are unclear.',
    isRisk: true,
    insight: 'Uncertainty around data governance can affect design and release decisions.',
  },
  {
    id: 'nova-cloud-spend',
    scenario: 'Strategy Meeting - VUCA',
    scenarioTag: 'VUCA',
    title: 'Volatility from unpredictable cloud costs',
    signal: 'CFO folder cue: "Cashflow sensitivity: cloud spend fluctuates plus/minus 25%."',
    isRisk: true,
    insight: 'Cloud spend volatility can disrupt funding and cost forecasts.',
  },
  {
    id: 'nova-incident-ownership',
    scenario: 'Strategy Meeting - VUCA',
    scenarioTag: 'VUCA',
    title: 'Ambiguity in incident-response accountability',
    signal: 'Architect argues with vendor: "Who owns incident response after migration?"',
    isRisk: true,
    insight: 'Unclear incident ownership can slow response during outages or attacks.',
  },
  {
    id: 'nova-microservices-complexity',
    scenario: 'Strategy Meeting - VUCA',
    scenarioTag: 'VUCA',
    title: 'Complexity causing cascading failures',
    signal: 'Workflow diagram shows 12 interconnected microservices.',
    isRisk: true,
    insight: 'Interdependent services can fail in unexpected chains.',
  },
  {
    id: 'nova-dns-news',
    scenario: 'Strategy Meeting - VUCA',
    scenarioTag: 'VUCA',
    title: 'External shock causing service outage',
    signal: 'News report: "Major cyberattack disrupts global DNS provider."',
    isRisk: true,
    insight: 'External provider shocks can interrupt platform availability.',
  },
  {
    id: 'nova-football-chat',
    scenario: 'Strategy Meeting - VUCA',
    scenarioTag: 'Decoy',
    title: 'Football chatter from remote attendee',
    signal: 'A remote participant forgets to mute while discussing a football result.',
    isRisk: false,
    insight: 'Background chatter is distracting but not a risk signal for the platform upgrade.',
  },
  {
    id: 'nova-boardroom-plant',
    scenario: 'Strategy Meeting - VUCA',
    scenarioTag: 'Decoy',
    title: 'Boardroom plant watering',
    signal: 'A facilities note says the boardroom plant needs watering twice a week.',
    isRisk: false,
    insight: 'Facilities housekeeping is not relevant to cloud migration risk.',
  },
];

const novaTechAnalysisRisks = [
  {
    id: 'nova-analysis-usb-breach',
    title: 'Cyber breach via contractor USB',
    signal: 'Unapproved device used in data centre. Clue: sector has rising insider threats.',
    probability: 3,
    impact: 5,
  },
  {
    id: 'nova-analysis-legacy-code',
    title: 'Legacy code integration failure',
    signal: 'Monolith to microservices migration. Clue: past attempts failed.',
    probability: 4,
    impact: 4,
  },
  {
    id: 'nova-analysis-cloud-cost',
    title: 'Cloud cost overrun',
    signal: 'Volatile cloud pricing. Clue: CFO sensitivity plus/minus 25%.',
    probability: 3,
    impact: 4,
  },
  {
    id: 'nova-analysis-dependency',
    title: 'Dependency library deprecation',
    signal: 'Critical library end-of-life. Clue: vendor notice received.',
    probability: 4,
    impact: 3,
  },
  {
    id: 'nova-analysis-cooling',
    title: 'Cooling system failure',
    signal: 'Overheating racks. Clue: sensor spikes detected.',
    probability: 2,
    impact: 5,
  },
  {
    id: 'nova-analysis-dns',
    title: 'DNS provider outage',
    signal: 'External cyberattack. Clue: global DNS provider news alert.',
    probability: 2,
    impact: 4,
  },
  {
    id: 'nova-analysis-test-automation',
    title: 'Low test automation',
    signal: 'Only 40% coverage. Clue: high defect leakage risk.',
    probability: 3,
    impact: 3,
  },
  {
    id: 'nova-analysis-chip-delay',
    title: 'Semiconductor delivery delay',
    signal: 'Chip shortage. Clue: technician complaint about pushed-back delivery.',
    probability: 4,
    impact: 2,
  },
  {
    id: 'nova-analysis-accountability',
    title: 'Accountability dispute',
    signal: 'Vendor versus architect dispute. Clue: unclear incident response roles.',
    probability: 3,
    impact: 4,
  },
  {
    id: 'nova-analysis-data-governance',
    title: 'Data governance regulation change',
    signal: 'Redacted regulatory text. Clue: uncertain compliance requirements.',
    probability: 3,
    impact: 4,
  },
].map((risk) => ({ ...risk, riskScore: risk.probability * risk.impact }));

const novaTechResponseRisks = [
  {
    id: 'nova-response-usb',
    title: 'Cyber Breach via USB',
    signal: 'A contractor uses an unapproved USB device inside the data centre.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Banning all contractor devices reduces exposure but slows onboarding and delivery.',
      Mitigate: 'Endpoint protection and zero-trust access reduce breach likelihood while work continues.',
      Transfer: 'Cyber insurance helps with recovery cost but does not prevent compromise.',
      Accept: 'Monitoring alone leaves too much exposure from removable media.',
      Escalate: 'CISO escalation is useful if the event exceeds project authority.',
    },
  },
  {
    id: 'nova-response-legacy',
    title: 'Legacy Code Integration Failure',
    signal: 'The migration from monolith to microservices risks integration failure.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'A full rewrite may reduce legacy issues but adds about 12 months.',
      Mitigate: 'Incremental refactoring and automated tests reduce integration failure risk.',
      Transfer: 'Outsourcing shifts some delivery work, but architecture risk remains.',
      Accept: 'Minimal refactoring leaves fragility in the upgrade path.',
      Escalate: 'CTO review helps if architectural trade-offs exceed team authority.',
    },
  },
  {
    id: 'nova-response-cost',
    title: 'Cloud Cost Overrun',
    signal: 'Cloud spend fluctuates sharply during the upgrade.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Delaying migration avoids immediate cost exposure but blocks benefits.',
      Mitigate: 'Autoscaling and cost dashboards make spend visible and controllable.',
      Transfer: 'A fixed-price cloud contract may shift cost exposure but can reduce flexibility.',
      Accept: 'Absorbing volatility can damage the business case.',
      Escalate: 'CFO approval fits if budget tolerance is exceeded.',
    },
  },
  {
    id: 'nova-response-dependency',
    title: 'Dependency Library Deprecation',
    signal: 'A critical dependency reaches end-of-life next quarter.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Removing the dependency entirely may be expensive and disruptive.',
      Mitigate: 'Early upgrade and compatibility tests reduce forced redesign pressure.',
      Transfer: 'Vendor support can help, but the project still owns compatibility.',
      Accept: 'Continuing deprecated code creates security and support exposure.',
      Escalate: 'Architecture board escalation helps if replacement changes standards.',
    },
  },
  {
    id: 'nova-response-cooling',
    title: 'Cooling System Failure',
    signal: 'Server racks overheat as cooling response lags.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Moving servers off-site avoids local cooling exposure but disrupts the upgrade.',
      Mitigate: 'Redundant cooling and sensors reduce downtime and equipment damage risk.',
      Transfer: 'A data centre SLA shifts some service responsibility, not all outage impact.',
      Accept: 'Manual temperature checks are too weak for critical infrastructure.',
      Escalate: 'Facilities management escalation helps if infrastructure authority is needed.',
    },
  },
  {
    id: 'nova-response-dns',
    title: 'DNS Provider Outage',
    signal: 'A global DNS provider disruption threatens platform availability.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Hosting DNS internally creates new operational burden.',
      Mitigate: 'Multi-provider DNS failover reduces outage impact.',
      Transfer: 'A premium SLA helps commercially but does not guarantee continuity.',
      Accept: 'Single-provider dependence creates avoidable availability exposure.',
      Escalate: 'CIO review fits if resilience investment exceeds project limits.',
    },
  },
  {
    id: 'nova-response-tests',
    title: 'Low Test Automation',
    signal: 'Only 40% of tests are automated before migration.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Delaying release until 90% coverage may be too slow.',
      Mitigate: 'Expanding automation and CI/CD reduces defect leakage.',
      Transfer: 'Outsourcing tests helps capacity but not ownership of quality.',
      Accept: 'Manual testing only leaves high regression risk.',
      Escalate: 'QA director escalation is useful if quality gate policy is needed.',
    },
  },
  {
    id: 'nova-response-chip',
    title: 'Semiconductor Delivery Delay',
    signal: 'Critical hardware delivery is pushed back by chip shortages.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Hardware redesign is a large disruption.',
      Mitigate: 'Pre-order buffer stock reduces schedule exposure.',
      Transfer: 'Supplier penalty clauses may recover money but not time.',
      Accept: 'Waiting for delivery leaves the schedule exposed.',
      Escalate: 'Procurement escalation helps if supplier strategy must change.',
    },
  },
  {
    id: 'nova-response-accountability',
    title: 'Accountability Dispute',
    signal: 'Vendor and architect disagree over incident-response ownership.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Replacing the vendor is disruptive and may not be necessary.',
      Mitigate: 'A RACI matrix and contract amendment clarify ownership.',
      Transfer: 'Legal arbitration can settle disputes but slows delivery.',
      Accept: 'Unclear roles create dangerous response delays.',
      Escalate: 'Governance board escalation helps if ownership cannot be agreed locally.',
    },
  },
  {
    id: 'nova-response-governance',
    title: 'Data Governance Regulation Change',
    signal: 'Future data governance rules are unclear for platform AI features.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Pausing AI features reduces exposure but sacrifices project value.',
      Mitigate: 'Early compliance audit and privacy engineering reduce regulatory risk.',
      Transfer: 'Legal advice helps interpretation but does not implement controls.',
      Accept: 'Waiting for final regulation can leave the design behind.',
      Escalate: 'Corporate compliance escalation is useful if interpretation affects enterprise policy.',
    },
  },
];

const novaTechMonitoringStage = {
  title: 'Risk Monitoring and Control',
  label: 'Live cyber dashboard',
  briefing: {
    title: 'Risk Monitoring and Control Briefing',
    label: 'Interactive stage intro',
    videoSrc: '',
    summary: 'Track IT warning signs across security, delivery, cost, vendor, and network operations. Balance Safety, Cost, Schedule, and Compliance as risks evolve.',
  },
  questions: [
    {
      id: 'nova-monitor-1',
      prompt: 'Cyber threat dashboard shows a spike in failed login attempts across privileged accounts. What should the team do?',
      context: 'Cyber Threat Dashboard',
      options: [
        { id: 'a', label: 'Escalate to SOC and update risk register.', score: 10, feedback: 'Hint: This improves compliance and resilience while keeping the risk picture current.' },
        { id: 'b', label: 'Assume users forgot passwords and wait.', score: 0, feedback: 'Hint: Waiting can turn weak signals into a breach.' },
        { id: 'c', label: 'Close the risk as normal login noise.', score: 0, feedback: 'Hint: Closing too early can hide an active attack pattern.' },
        { id: 'd', label: 'Delete failed-login logs to reduce alert volume.', score: 0, feedback: 'Hint: Removing evidence weakens investigation and accountability.' },
      ],
    },
    {
      id: 'nova-monitor-2',
      prompt: 'Sprint velocity drops 30%, burnout signs appear, and critical migration tasks are slipping. What is the best monitoring action?',
      context: 'Sprint Velocity Drop',
      options: [
        { id: 'a', label: 'Update fatigue risk and trigger contingency to redistribute workload.', score: 10, feedback: 'Hint: This protects schedule and delivery health before defects rise.' },
        { id: 'b', label: 'Push the team harder for one more sprint.', score: 0, feedback: 'Hint: Short-term pressure can increase defect and burnout risk.' },
        { id: 'c', label: 'Ignore velocity because agile metrics are imperfect.', score: 0, feedback: 'Hint: Imperfect metrics can still reveal a material trend.' },
        { id: 'd', label: 'Cancel testing to regain sprint velocity.', score: 0, feedback: 'Hint: That may improve speed optics but damages quality control.' },
      ],
    },
    {
      id: 'nova-monitor-3',
      prompt: 'Cloud billing alert shows a sudden cost spike after autoscaling rules changed. What should happen?',
      context: 'Cloud Billing Alert',
      options: [
        { id: 'a', label: 'Update cost risk and activate autoscaling review.', score: 10, feedback: 'Hint: This keeps the risk register current and targets the likely control issue.' },
        { id: 'b', label: 'Wait until month-end invoice is final.', score: 0, feedback: 'Hint: Delayed monitoring can let cost exposure compound.' },
        { id: 'c', label: 'Disable all autoscaling immediately.', score: 0, feedback: 'Hint: Overreaction can damage service availability.' },
        { id: 'd', label: 'Move the cost to another budget line.', score: 0, feedback: 'Hint: Accounting movement does not control the underlying risk.' },
      ],
    },
    {
      id: 'nova-monitor-4',
      prompt: 'Vendor dashboard shows 20 unresolved tickets related to migration blockers. What is the best register update?',
      context: 'Vendor Ticket Backlog',
      options: [
        { id: 'a', label: 'Raise probability of dependency risk.', score: 10, feedback: 'Hint: The vendor signal changes likelihood, even before an issue fully lands.' },
        { id: 'b', label: 'Close vendor dependency risk because tickets are logged.', score: 0, feedback: 'Hint: Logging work is not the same as resolving exposure.' },
        { id: 'c', label: 'Ignore because vendors always have backlog.', score: 0, feedback: 'Hint: Trend and relevance matter more than generic assumptions.' },
        { id: 'd', label: 'Delete low-priority tickets to improve the dashboard.', score: 0, feedback: 'Hint: Cleaning the dashboard does not reduce project risk.' },
      ],
    },
    {
      id: 'nova-monitor-5',
      prompt: 'Network telemetry shows anomalous outbound packets from a migration subnet. What should be done?',
      context: 'Suspicious Network Traffic',
      options: [
        { id: 'a', label: 'Escalate to cybersecurity team.', score: 10, feedback: 'Hint: Potential exfiltration requires specialist investigation quickly.' },
        { id: 'b', label: 'Wait for user complaints.', score: 0, feedback: 'Hint: Cyber signals should be handled before customers feel impact.' },
        { id: 'c', label: 'Restart the router and move on.', score: 0, feedback: 'Hint: Restarting may destroy evidence and miss root cause.' },
        { id: 'd', label: 'Mark as performance noise.', score: 0, feedback: 'Hint: Unusual outbound traffic needs validation, not dismissal.' },
      ],
    },
  ],
};

const novaTechCloudUpgrade = {
  id: 'cybersecurity',
  title: 'NovaTech Cloud Platform Upgrade',
  shortTitle: 'NovaTech',
  icon: 'CY',
  accent: '#7c3aed',
  tint: '#f3edff',
  summary: 'Cybersecurity and cloud migration simulation across PESTLE, SWOT, VUCA, analysis, response, and monitoring rounds.',
  difficulty: 'Model category',
  estimatedTime: '30 min',
  tagline: 'Manage cloud upgrade risk across data centre, DevOps, strategy, and live cyber monitoring signals.',
  stages: [
    {
      id: 'nova-general',
      type: 'briefing',
      title: 'Project Brief',
      label: 'Risk Manager Intro',
      videoSrc: '/videos/novatech-risk-manager-intro.mp4',
      summary: 'Step into the NovaTech Cloud Platform Upgrade as the risk manager.',
    },
    {
      id: 'nova-identification',
      type: 'identify',
      title: 'Risk Identification',
      label: 'PESTLE, SWOT, VUCA',
      prompt: 'Should this hotspot be added to the NovaTech risk register?',
      briefing: {
        title: 'Risk Identification Briefing',
        label: 'Stage 1 video',
        videoSrc: '/videos/novatech-risk-identification.mp4',
        summary: 'Explore the data centre, DevOps office, and strategy meeting to interpret hidden technology risk signals.',
      },
      risks: novaTechIdentificationRisks,
      requiredSelections: 15,
    },
    {
      id: 'nova-analysis',
      type: 'analysis',
      title: 'Risk Analysis',
      label: 'Probability x impact',
      briefing: {
        title: 'Risk Analysis Briefing',
        label: 'Stage 2 video',
        videoSrc: '/videos/novatech-risk-analysis.mp4',
        summary: 'Place each NovaTech risk on the Probability and Impact grid. Correct range earns stage percentage.',
      },
      risks: novaTechAnalysisRisks,
    },
    {
      id: 'nova-response',
      type: 'response',
      title: 'Risk Response',
      label: 'Choose strategy',
      briefing: {
        title: 'Risk Response Briefing',
        label: 'Interactive stage intro',
        videoSrc: '',
        summary: 'Choose Avoid, Mitigate, Transfer, Accept, or Escalate for each NovaTech cloud upgrade risk.',
      },
      risks: novaTechResponseRisks,
      strategies: ['Avoid', 'Mitigate', 'Transfer', 'Accept', 'Escalate'],
    },
    { id: 'nova-monitoring', type: 'quiz', ...novaTechMonitoringStage },
  ],
};

const futureCategories = [
  {
    id: 'banking',
    title: 'Banking',
    shortTitle: 'Banking',
    icon: 'BK',
    accent: '#2563eb',
    tint: '#edf4ff',
    summary: 'Fraud, compliance, customer trust, resilience, and operational risk controls.',
    difficulty: 'Coming next',
    estimatedTime: 'Template ready',
    tagline: 'Will follow the same full-stage gameplay as AI car manufacturing.',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    shortTitle: 'Care',
    icon: 'HC',
    accent: '#e11d48',
    tint: '#fff1f4',
    summary: 'Patient safety, privacy, staffing, clinical workflows, and care continuity.',
    difficulty: 'Coming next',
    estimatedTime: 'Template ready',
    tagline: 'Designed for a future clinical risk simulation pack.',
  },
  {
    id: 'other',
    title: 'Other',
    shortTitle: 'Other',
    icon: 'OT',
    accent: '#f59e0b',
    tint: '#fff8e8',
    summary: 'A custom sector slot for future simulations and training variants.',
    difficulty: 'Flexible',
    estimatedTime: 'Template ready',
    tagline: 'Use this as a lightweight custom scenario slot.',
  },
];

export const categories = [novaTechCloudUpgrade, petroNovaRefinery, aiCarManufacturing];
export const hiddenCategories = futureCategories;

export const finalBands = [
  {
    min: 90,
    label: 'Risk Master',
    tagline: 'Elite risk leader. You read the signal, choose the control, and close the loop.',
  },
  {
    min: 75,
    label: 'Risk Strategist',
    tagline: 'Strong strategic judgement. You connect risks, responses, and business outcomes well.',
  },
  {
    min: 60,
    label: 'Risk Practitioner',
    tagline: 'Solid practical foundation. Keep sharpening prioritization and evidence-based controls.',
  },
  {
    min: 0,
    label: 'Risk Learner',
    tagline: 'You are building the habit. Retry the run and use each scoreboard as a coaching moment.',
  },
];

export function getCategoryById(categoryId) {
  return categories.find((category) => category.id === categoryId) || categories[0];
}

export function getFinalBand(percentage) {
  return finalBands.find((band) => percentage >= band.min) || finalBands[finalBands.length - 1];
}

export function getPlayableStages(category) {
  return (category.stages || []).filter((stage) => stage.type !== 'briefing');
}

export function getRiskHeat(score) {
  if (score >= 16) return { label: 'High', className: 'heat-high' };
  if (score >= 12) return { label: 'Med Hi', className: 'heat-med-hi' };
  if (score >= 8) return { label: 'Medium', className: 'heat-medium' };
  if (score >= 4) return { label: 'Low Med', className: 'heat-low-med' };
  return { label: 'Low', className: 'heat-low' };
}

export function gradeAnalysisPlacement(risk, placement) {
  if (!placement) return { score: 0, label: 'Not placed', className: 'almost' };

  const selectedProbability = Number(placement.probability);
  const selectedImpact = Number(placement.impact);
  const selectedScore = selectedProbability * selectedImpact;
  const expectedScore = risk.riskScore;
  const scoreGap = Math.abs(selectedScore - expectedScore);
  const axisGap = Math.abs(selectedProbability - risk.probability) + Math.abs(selectedImpact - risk.impact);
  const selectedHeat = getRiskHeat(selectedScore).label;
  const expectedHeat = getRiskHeat(expectedScore).label;

  if (selectedScore === expectedScore && axisGap <= 1) {
    return { score: 10, label: 'Correct', className: 'correct' };
  }

  if (scoreGap <= 4 || selectedHeat === expectedHeat || axisGap <= 2) {
    return { score: 5, label: 'Good decision', className: 'good' };
  }

  return { score: 2, label: 'Almost there', className: 'almost' };
}

const responseJudgement = {
  Avoid: { Avoid: 10, Mitigate: 8, Escalate: 6, Transfer: 4, Accept: 2 },
  Mitigate: { Mitigate: 10, Transfer: 6, Escalate: 6, Avoid: 4, Accept: 2 },
  Transfer: { Transfer: 10, Mitigate: 8, Escalate: 6, Avoid: 4, Accept: 2 },
  Accept: { Accept: 10, Mitigate: 6, Transfer: 4, Escalate: 4, Avoid: 2 },
  Escalate: { Escalate: 10, Mitigate: 8, Transfer: 6, Avoid: 4, Accept: 2 },
};

const responseLabels = {
  10: 'Strong decision',
  8: 'Good response',
  6: 'Fair enough',
  4: 'Almost there',
  2: 'Not so good',
  0: 'No response',
};

export function gradeRiskResponse(risk, selected) {
  if (!selected) return { score: 0, label: responseLabels[0], className: 'almost' };
  const score = responseJudgement[risk.response]?.[selected] ?? (selected === risk.response ? 10 : 2);
  const className = score >= 8 ? 'correct' : score >= 6 ? 'good' : 'almost';
  return { score, label: responseLabels[score] || responseLabels[2], className };
}

export function calculateStageScore(stage, stageState = {}) {
  if (stage.type === 'identify') {
    const selectedIds = stageState.selectedIds || [];
    const trueRiskIds = stage.risks.filter((risk) => risk.isRisk).map((risk) => risk.id);
    const correct = selectedIds.filter((id) => trueRiskIds.includes(id)).length;
    const incorrect = selectedIds.filter((id) => !trueRiskIds.includes(id)).length;
    const raw = Math.max(0, correct - incorrect);
    return {
      score: raw,
      maxScore: trueRiskIds.length,
      correct,
      correctRiskIds: selectedIds.filter((id) => trueRiskIds.includes(id)),
      incorrect,
      missed: trueRiskIds.length - correct,
      details: `${correct}/${trueRiskIds.length} risks identified, ${incorrect} false positive${incorrect === 1 ? '' : 's'}`,
    };
  }

  if (stage.type === 'analysis') {
    const placements = stageState.placements || {};
    const score = stage.risks.reduce((total, risk) => {
      const placement = placements[risk.id];
      return total + gradeAnalysisPlacement(risk, placement).score;
    }, 0);
    return {
      score,
      maxScore: stage.risks.length * 10,
      details: `${Object.keys(placements).length}/${stage.risks.length} risks placed with R = P x I`,
    };
  }

  if (stage.type === 'response') {
    const responses = stageState.responses || {};
    const score = stage.risks.reduce((total, risk) => total + gradeRiskResponse(risk, responses[risk.id]).score, 0);
    return {
      score,
      maxScore: stage.risks.length * 10,
      details: `${Object.keys(responses).length}/${stage.risks.length} strategies selected`,
    };
  }

  if (stage.type === 'quiz') {
    const answers = stageState.answers || {};
    const score = stage.questions.reduce((total, question) => {
      const selected = question.options.find((option) => option.id === answers[question.id]);
      return total + (selected?.score || 0);
    }, 0);
    return {
      score,
      maxScore: stage.questions.length * 10,
      details: `${Object.keys(answers).length}/${stage.questions.length} decisions answered`,
    };
  }

  if (stage.type === 'multiQuiz') {
    const answers = stageState.answers || {};
    const score = stage.questions.reduce((total, question) => {
      const selected = answers[question.id] || [];
      const expected = question.correctOptionIds || [];
      const exactMatch = selected.length === expected.length && expected.every((id) => selected.includes(id));
      return total + (exactMatch ? 10 : 0);
    }, 0);
    return {
      score,
      maxScore: stage.questions.length * 10,
      details: `${Object.keys(answers).length}/${stage.questions.length} reflection questions answered`,
    };
  }

  return { score: 0, maxScore: 0, details: '' };
}

export function calculateFinalScore(category, stageStates) {
  const scores = getPlayableStages(category).map((stage) => calculateStageScore(stage, stageStates[stage.id]));
  const score = scores.reduce((total, item) => total + item.score, 0);
  const maxScore = scores.reduce((total, item) => total + item.maxScore, 0);
  return {
    score,
    maxScore,
    percentage: maxScore ? Math.round((score / maxScore) * 100) : 0,
    stageScores: scores,
  };
}
