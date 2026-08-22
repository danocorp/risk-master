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
      Avoid: 'Replacing IoT devices entirely is unrealistic and prohibitively expensive for the AI-enabled assembly plant.',
      Mitigate: 'Network segmentation, device authentication, continuous monitoring, and firmware patching reduce attack likelihood while production continues.',
      Transfer: 'Cyber insurance can cover financial loss, but it does not prevent corrupted safety data or production shutdown.',
      Accept: 'Accepting this risk is irresponsible because breach likelihood and operational impact are high.',
      Escalate: 'Escalation is appropriate only if intelligence suggests a nation-state or coordinated attack beyond project authority.',
    },
  },
  {
    id: 'heavy-robot-accident-response',
    title: 'Heavy robot accident',
    signal: 'A heavy robotic arm creates severe injury potential around maintenance access points.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Halting robotics would stop production and undermine the core AI/robotic assembly goals.',
      Mitigate: 'Advanced safety sensors, geofencing, and mandatory operator training reduce worker injury and vehicle damage exposure.',
      Transfer: 'Insurance covers costs after an incident, but it cannot protect workers from harm.',
      Accept: 'Accepting severe robotic injury exposure is ethically unacceptable.',
      Escalate: 'Escalation is necessary if accident patterns suggest a systemic robotic design flaw.',
    },
  },
  {
    id: 'cloud-outage-response',
    title: 'Cloud outage',
    signal: 'The AI platform depends on one cloud region for production scheduling and model services.',
    response: 'Transfer',
    feedback: {
      Avoid: 'Avoiding cloud platforms is not feasible because predictive analytics and AI scheduling depend on them.',
      Mitigate: 'Backup servers or local failover reduce disruption, but some cloud-provider exposure remains.',
      Transfer: 'A multi-cloud or failover contract shifts continuity responsibility if one provider fails.',
      Accept: 'Accepting single-cloud outage risk is too risky for production.',
      Escalate: 'Escalation fits only if the outage stems from national infrastructure failure.',
    },
  },
  {
    id: 'regulatory-non-compliance-response',
    title: 'Regulatory non-compliance',
    signal: 'The AI safety process may not satisfy certification requirements.',
    response: 'Avoid',
    feedback: {
      Avoid: 'Redesigning processes and systems to meet safety, data, and automation rules from the outset prevents illegal exposure before launch.',
      Mitigate: 'Compliance training and periodic audits help, but they do not remove a non-compliant design.',
      Transfer: 'Liability insurance cannot prevent fines, shutdowns, or certification refusal.',
      Accept: 'Accepting regulatory non-compliance is illegal and unacceptable.',
      Escalate: 'Escalation is required if regulations conflict or need higher-level legal interpretation.',
    },
  },
  {
    id: 'ai-bias-response',
    title: 'AI bias in quality control',
    signal: 'The quality model under-detects defects from one supplier pattern.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Removing AI undermines the efficiency case for the automated assembly programme.',
      Mitigate: 'Bias testing, model retraining, and human-in-the-loop validation reduce defective vehicles reaching customers.',
      Transfer: 'Vendors may share responsibility, but Project Atlas still owns product quality and reputation.',
      Accept: 'Accepting bias can harm customers and damage the brand.',
      Escalate: 'Escalation fits if the bias stems from industry-wide data standards.',
    },
  },
  {
    id: 'supply-chain-response',
    title: 'Supply chain disruption',
    signal: 'A critical robot controller depends on a single overseas supplier.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Supply chains are inherent to car production, so this exposure cannot be eliminated completely.',
      Mitigate: 'Dual sourcing, local suppliers, and buffer inventory reduce downtime from chips, sensors, and robotics component delays.',
      Transfer: 'Contracts can reduce financial loss, but they cannot guarantee parts arrive on time.',
      Accept: 'Accepting this risk can stall entire production lines.',
      Escalate: 'Escalation is necessary if disruption becomes geopolitical or affects multiple supplier tiers.',
    },
  },
  {
    id: 'privacy-breach-response',
    title: 'Data privacy breach',
    signal: 'Predictive analytics collects more worker and vehicle data than the process requires.',
    response: 'Avoid',
    feedback: {
      Avoid: 'Redesigning data flows to minimise personal data and remove unnecessary collection eliminates avoidable privacy exposure.',
      Mitigate: 'Encryption, access controls, and anomaly monitoring reduce breach likelihood, but excess collection remains.',
      Transfer: 'Insurance covers some costs, but not legal consequences or trust damage.',
      Accept: 'Accepting this risk can be illegal under GDPR and similar rules.',
      Escalate: 'Escalation is required if breaches affect multiple business units.',
    },
  },
  {
    id: 'worker-resistance-response',
    title: 'Worker resistance to automation',
    signal: 'Operators fear job losses and begin resisting the AI implementation.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Cancelling automation would undermine Project Atlas viability.',
      Mitigate: 'Training, transparent communication, and change-management support reduce fear of job loss and productivity disruption.',
      Transfer: 'Automation resistance cannot be outsourced or insured away.',
      Accept: 'Accepting resistance can cause morale decline and slower adoption.',
      Escalate: 'Escalation fits if resistance becomes a formal HR or union dispute.',
    },
  },
  {
    id: 'vendor-bankruptcy-response',
    title: 'Vendor bankruptcy',
    signal: 'The AI software supplier shows signs of financial distress.',
    response: 'Transfer',
    feedback: {
      Avoid: 'Avoiding vendors is not feasible because specialist robotics and AI suppliers are essential.',
      Mitigate: 'Vendor diversification reduces single-supplier dependency, but may not protect existing commitments.',
      Transfer: 'Performance bonds, warranties, and financial guarantees shift part of vendor bankruptcy exposure.',
      Accept: 'Accepting vendor collapse exposure is dangerous because support and replacement parts could disappear suddenly.',
      Escalate: 'Escalation is required when procurement detects financial instability early.',
    },
  },
  {
    id: 'environmental-risk-response',
    title: 'Environmental risk from hazardous waste',
    signal: 'The automated production change increases hazardous waste handling requirements.',
    response: 'Avoid',
    feedback: {
      Avoid: 'Switching to greener technologies or redesigning processes can eliminate hazardous waste exposure at source.',
      Mitigate: 'Containment, safe disposal, and monitoring reduce harm, but the hazardous waste exposure remains.',
      Transfer: 'Insurance covers some costs, but not regulatory penalties or environmental responsibility.',
      Accept: 'Accepting illegal or harmful environmental exposure is not acceptable.',
      Escalate: 'Escalation is necessary if national standards conflict or require regulatory clarification.',
    },
  },
];

const optionStages = {
  issueManagement: {
    title: 'Issue Management',
    label: 'Immediate response',
    useExactOptionScores: true,
    briefing: {
      title: 'Issue Management Briefing',
      label: 'Project Atlas issue response',
      videoSrc: '/videos/project-atlas-issue-management.mp4',
      summary: 'A safety issue has materialised inside Plant B during AI/robotic vehicle assembly. Decide the immediate response before the team moves into monitoring and control.',
      stageBrief: 'During Project Atlas car manufacturing, an incident occurs in Plant B where AI-controlled robotic assembly equipment may affect worker safety. Treat this as a live issue: protect people first, contain the affected plant area, and avoid delays that expose staff while facts are still being confirmed.',
    },
    questions: [
      {
        id: 'atlas-issue-immediate-response',
        prompt: 'An emergency alert reports a possible AI-controlled robotic assembly fault in Plant B. What should the project team do first?',
        context: 'Phase 1 - Immediate Response',
        options: [
          { id: 'a', label: 'Evacuate Plant B immediately.', score: 10, feedback: 'Correct: this prioritises human safety in a live emergency, even though production stops.' },
          { id: 'b', label: 'Keep non-involved areas running, isolate Plant B only.', score: 5, feedback: 'Acceptable but flagged: this needs strong justification, rapid containment, and close safety oversight.' },
          { id: 'c', label: 'Do nothing until more information is confirmed.', score: 0, feedback: 'Wrong: delaying action is unacceptable when workers may be exposed to an emergency.' },
        ],
      },
    ],
  },
  monitoring: {
    title: 'Risk Monitoring and Control',
    label: 'Live control dashboard',
    briefing: {
      title: 'Risk Monitoring and Control Briefing',
      label: 'Project Atlas control room',
      videoSrc: '',
      summary: 'Monitor AI/robotic car assembly signals after the Plant B issue response. Update risk status, escalate credible threats, and keep safety, production, compliance, and resilience under control.',
      stageBrief: 'Project Atlas now moves from immediate issue handling into monitoring and control for AI/robotic-enabled car manufacturing. Use control-room evidence from sensors, cybersecurity alerts, compliance updates, and equipment trends to decide which risk signals need action.',
    },
    questions: [
      {
        id: 'monitor-1',
        prompt: 'An alert flashes: "Trend indicates potential bearing failure in 3-5 days." What should the team do?',
        context: 'IoT Early Warning - Technical Monitoring',
        options: [
          { id: 'a', label: 'Schedule preventive maintenance during next downtime.', score: 0, feedback: 'This improves safety but creates budget pressure and some downtime.' },
          { id: 'b', label: 'Log in risk register as early warning.', score: 10, feedback: 'This improves resilience and preparedness without immediate cost.' },
          { id: 'c', label: 'Classify as false alarm and clear warning.', score: 0, feedback: 'This protects short-term focus but creates high future risk.' },
          { id: 'd', label: 'Wait for red alert confirmation before acting.', score: 0, feedback: 'This protects efficiency now but weakens resilience later.' },
        ],
      },
      {
        id: 'monitor-2',
        prompt: 'A red tag flashes: "Suspicious activity - potential brute force attempt." What control action would you take?',
        context: 'Cyber Alert - Digital Threat Monitoring',
        options: [
          { id: 'a', label: 'Flag as medium risk, monitor later.', score: 0, feedback: 'This is efficient now, but it may leave resilience too low.' },
          { id: 'b', label: 'Force password reset across users.', score: 0, feedback: 'This is some action, but it can disrupt operations if not targeted.' },
          { id: 'c', label: 'Escalate to cybersecurity team and increase monitoring.', score: 10, feedback: 'This improves resilience, though it may increase response cost.' },
          { id: 'd', label: 'Delete logs to clear console.', score: 0, feedback: 'This creates short-term clarity but major exposure.' },
        ],
      },
      {
        id: 'monitor-3',
        prompt: 'Message: "We are scheduling a compliance audit in 72 hours. Please prepare documentation on safety and AI oversight." What move would you make?',
        context: 'Regulatory Visit - External Risk Monitoring',
        options: [
          { id: 'a', label: 'Wait for written confirmation before acting.', score: 0, feedback: 'This saves time now but risks delay.' },
          { id: 'b', label: 'Start preparing compliance files immediately and log as risk.', score: 10, feedback: 'This is proactive and strengthens resilience.' },
          { id: 'c', label: 'Prioritise production, push prep to last 24 hours.', score: 0, feedback: 'This gives short-term production gain but a long-term penalty.' },
          { id: 'd', label: 'Escalate to compliance officer but continue BAU.', score: 0, feedback: 'This delegates the concern but may still delay real readiness.' },
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
          { id: 'a', label: 'Share: Partner with supplier and another industry player to spread benefits.', score: 0, feedback: 'This can build shared value and resilience, but control may reduce.' },
          { id: 'b', label: 'Exploit: Adopt tool immediately, adjusting budget.', score: 10, feedback: 'This strongly improves quality and efficiency, but budget pressure rises.' },
          { id: 'c', label: 'Accept: Note the tool but stick to current systems.', score: 0, feedback: 'This protects stability but may miss a major gain.' },
          { id: 'd', label: 'Enhance: Pilot the tool on one production line first.', score: 0, feedback: 'This creates learning with lower cost and lower risk.' },
        ],
      },
      {
        id: 'opp-2',
        prompt: 'A regulatory approval comes in three weeks earlier than expected. Which opportunity response would you use?',
        context: 'Schedule Windfall',
        options: [
          { id: 'a', label: 'Enhance: Use the window for extra testing and QA.', score: 0, feedback: 'This improves quality, but spends some of the time advantage.' },
          { id: 'b', label: 'Share: Align with partners to launch collaboratively.', score: 0, feedback: 'This can improve reputation and collaboration, but control is shared.' },
          { id: 'c', label: 'Exploit: Accelerate production phase, getting product to market sooner.', score: 10, feedback: 'This improves time-to-market and revenue, with workforce stress to manage.' },
          { id: 'd', label: 'Accept: Stick to baseline schedule.', score: 0, feedback: 'This protects stability but misses the gain.' },
        ],
      },
      {
        id: 'opp-3',
        prompt: 'Operators suggest a redesigned workflow that could reduce overtime hours by 20%. What move would you make?',
        context: 'Workforce Suggestion',
        options: [
          { id: 'a', label: 'Accept: Stick to current process.', score: 0, feedback: 'This preserves stability but may lose a morale boost.' },
          { id: 'b', label: 'Enhance: Pilot with one team first.', score: 0, feedback: 'This gives moderate gain with lower risk.' },
          { id: 'c', label: 'Share: Involve contractors to spread workflow design across teams.', score: 0, feedback: 'This can speed rollout but adds coordination risk.' },
          { id: 'd', label: 'Exploit: Implement suggestion fully, rewarding staff.', score: 10, feedback: 'This can improve efficiency and morale, with some retraining cost.' },
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
          { id: 'a', label: 'Opportunities should always be accepted to avoid unnecessary costs.', score: 0, feedback: 'This is too absolute and can encourage poor investment decisions.' },
          { id: 'b', label: 'Missed opportunities can translate into future risks if not fully evaluated.', score: 10, feedback: 'This links opportunity decisions to future threat exposure.' },
          { id: 'c', label: 'Predictive maintenance systems always guarantee zero downtime.', score: 0, feedback: 'This overstates what technology can guarantee.' },
          { id: 'd', label: 'Risk and opportunity management should be treated as completely separate processes.', score: 0, feedback: 'This separation can hide important connections.' },
        ],
      },
      {
        id: 'lesson-2',
        prompt: 'You escalated the robotics shutdown promptly, limiting production delays to 6 hours instead of multiple days. Which lesson should be recorded?',
        context: 'Threat Response',
        options: [
          { id: 'a', label: 'Escalation eliminates all project risks permanently.', score: 0, feedback: 'Escalation can help, but it does not remove every risk.' },
          { id: 'b', label: 'Quick escalation guarantees higher profits.', score: 0, feedback: 'This focuses on a benefit that is not guaranteed.' },
          { id: 'c', label: 'Escalation is effective when risks exceed project authority or control.', score: 10, feedback: 'This frames escalation as a fit-for-purpose response.' },
          { id: 'd', label: 'Escalation should be the first choice for every risk.', score: 0, feedback: 'Some risks should be handled locally before escalation.' },
        ],
      },
      {
        id: 'lesson-3',
        prompt: 'You scheduled monthly risk reviews but missed several emerging cybersecurity threats. What is the key takeaway?',
        context: 'Monitoring',
        options: [
          { id: 'a', label: 'Monthly reviews are always sufficient regardless of risk type.', score: 0, feedback: 'Review cadence should change with risk velocity.' },
          { id: 'b', label: 'Monitoring is only needed if risks have already materialised.', score: 0, feedback: 'Monitoring should detect weak signals before issues occur.' },
          { id: 'c', label: 'Monitoring schedules must balance frequency and relevance to the project environment.', score: 10, feedback: 'This connects monitoring rhythm to the risk environment.' },
          { id: 'd', label: 'Cyber risks do not require the same monitoring as operational risks.', score: 0, feedback: 'Cyber risks often need faster and more specialized monitoring.' },
        ],
      },
      {
        id: 'lesson-4',
        prompt: 'Regulators praised your team for early transparency during an incident, which reduced penalties. Which lesson would you record?',
        context: 'Stakeholder Engagement',
        options: [
          { id: 'a', label: 'Regulators should only be informed once risks materialise into issues.', score: 0, feedback: 'Waiting too long can increase reputational and compliance exposure.' },
          { id: 'b', label: 'Delaying communication allows the team to resolve issues quietly.', score: 0, feedback: 'Quiet delay can reduce trust when stakeholders later discover the issue.' },
          { id: 'c', label: 'Stakeholder engagement is unnecessary in technical risks.', score: 0, feedback: 'Technical risks can still have stakeholder, legal, and reputation impacts.' },
          { id: 'd', label: 'Transparent communication can mitigate reputational and financial impacts.', score: 10, feedback: 'This captures the value of early, honest stakeholder engagement.' },
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
  projectBrief: 'Project Atlas is introducing AI-assisted quality control, connected IoT sensors, robotic production cells, and predictive analytics into a car manufacturing plant where AI/robotic-enabled assembling is central to production. Your role is to identify material threats, score their probability and impact on a 1-5 scale, choose suitable responses, manage live issue signals, monitor controls, and close the simulation with lessons learned.',
  stages: [
    {
      id: 'general',
      type: 'briefing',
      title: 'General Briefing',
      label: 'Mission setup',
      videoSrc: '/videos/project-atlas-risk-manager-intro.mp4',
      summary: 'Understand the Project Atlas AI car manufacturing setting before risk work begins.',
      projectBrief: 'Project Atlas is a car manufacturing transformation built around AI/robotic-enabled assembling, AI-assisted quality control, connected IoT sensors, robotic production cells, and predictive analytics. As risk manager, you must protect worker safety, production continuity, compliance, data privacy, and brand trust while the smart assembly plant moves toward launch.',
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
        summary: 'Watch the risk identification briefing, then review 14 signals and identify the 10 real risks. Tap each signal into or out of the risk register.',
        stageBrief: 'Identify risks in Project Atlas, a car manufacturing programme using AI/robotic-enabled assembling, connected sensors, robotic production cells, and AI quality inspection. Focus on signals that can affect safety, production continuity, compliance, data privacy, supplier reliability, or vehicle quality.',
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
        summary: 'Tap each risk into the Probability and Impact matrix. Probability runs from 1 very low to 5 very high. Impact runs from 1 negligible to 5 catastrophic. Score is based on R = P x I.',
        stageBrief: 'Analyse Project Atlas risks in the context of AI/robotic car assembly. Consider how likely each event is in a connected, automated factory and how severely it could affect workers, vehicles, production schedules, certification, and customer confidence.',
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
        summary: 'Choose Avoid, Mitigate, Transfer, Accept, or Escalate for each risk response target. Each signal has a response that fits its own exposure, authority level, and control options.',
        stageBrief: 'Choose responses for AI/robotic-enabled car manufacturing risks. Match each strategy to the realistic control path: redesign unsafe or illegal exposure, mitigate operational threats, transfer contractual/vendor exposure where appropriate, or escalate beyond project authority.',
      },
      risks: responseRisks,
      strategies: ['Avoid', 'Mitigate', 'Transfer', 'Accept', 'Escalate'],
    },
    { id: 'issue-management', type: 'quiz', ...optionStages.issueManagement },
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
    scenarioTag: 'General',
    title: 'Safety poster redesign',
    signal: 'A bright poster says: "New visitor safety artwork coming soon."',
    isRisk: false,
    insight: 'This may support communication, but it is not a material project risk signal.',
  },
  {
    id: 'petro-football-chat',
    scenario: 'Site Walkthrough - PESTLE',
    scenarioTag: 'General',
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
    scenarioTag: 'General',
    title: 'Coffee machine queue',
    signal: 'A team member complains that the coffee machine queue is too long after lunch.',
    isRisk: false,
    insight: 'This is a workplace annoyance, not a meaningful risk to refinery expansion delivery.',
  },
  {
    id: 'petro-font-change',
    scenario: 'Project Office - SWOT',
    scenarioTag: 'General',
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
    scenarioTag: 'General',
    title: 'Boardroom catering preference',
    signal: 'An executive asks whether sandwiches or pastries should be served next meeting.',
    isRisk: false,
    insight: 'Catering preference does not affect the risk profile of the refinery expansion.',
  },
  {
    id: 'petro-wall-art',
    scenario: 'Strategy Meeting - VUCA',
    scenarioTag: 'General',
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
    response: 'Avoid',
    feedback: {
      Avoid: 'Redesigning tie-ins for isolation, depressurisation, gas-free certification, or a controlled shutdown eliminates exposure to live hydrocarbons where practicable.',
      Mitigate: 'Gas detection, hot-work controls, isolation, emergency shutdown, fire suppression, and atmospheric monitoring reduce risk but still work around the hazard.',
      Transfer: 'Specialist contractors and insurance shift some responsibility, but they do not eliminate the catastrophic exposure.',
      Accept: 'Proceeding with residual explosion risk is only tolerable within approved limits and is weak for a catastrophic hazard.',
      Escalate: 'HSE leadership should authorise any unacceptable residual hydrocarbon-release risk.',
    },
  },
  {
    id: 'petro-response-chemical',
    title: 'Chemical Exposure',
    signal: 'Acids, catalysts, and toxic gases may expose workers during handling.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Substitution or removing unnecessary acid-cleaning helps where feasible, but chemical use is inherent to refinery work.',
      Mitigate: 'Procedures, COSHH assessments, PPE, ventilation, gas monitoring, trained operators, controlled storage, and decontamination reduce exposure.',
      Transfer: 'A specialist chemical-handling contractor can help, but the refinery still needs competent oversight.',
      Accept: 'Routine controlled handling may be accepted only when residual exposure is demonstrably low.',
      Escalate: 'Senior HSE escalation fits where substances or exposure levels exceed project tolerance.',
    },
  },
  {
    id: 'petro-response-crane',
    title: 'Crane Collapse',
    signal: 'Heavy lifting in confined areas creates severe accident exposure.',
    response: 'Avoid',
    feedback: {
      Avoid: 'Redesigning the lifting strategy, using modular installation, and avoiding lifts over occupied or operating areas removes unnecessarily high-consequence lift exposure.',
      Mitigate: 'Engineered lift plans, crane inspections, ground checks, certified operators, exclusion zones, weather monitoring, and supervision reduce lifting risk.',
      Transfer: 'A specialist heavy-lift contractor can take execution responsibility, but PetroNova still retains site safety oversight.',
      Accept: 'Proceeding is appropriate only when the residual lift risk is assessed as tolerable.',
      Escalate: 'Exceptional loads, unusual crane configurations, or risks beyond lifting limits should be escalated.',
    },
  },
  {
    id: 'petro-response-electrical',
    title: 'Electrical Fire',
    signal: 'High-voltage integration could ignite during live tie-in work.',
    response: 'Escalate',
    feedback: {
      Avoid: 'A controlled shutdown and redesigned commissioning sequence would avoid simultaneous live-system integration where possible.',
      Mitigate: 'Lockout, insulation testing, protection-system testing, fire detection, competent electricians, and staged energisation reduce the hazard.',
      Transfer: 'A specialist HV contractor can take defined commissioning responsibilities, but the project still faces the live-interface risk.',
      Accept: 'Limited residual electrical risk is acceptable only after all mandatory controls and tests are satisfied.',
      Escalate: 'The live high-voltage interface can exceed project authority, so senior engineering and HSE governance should decide before work proceeds.',
    },
  },
  {
    id: 'petro-response-oil-spill',
    title: 'Oil Spill',
    signal: 'Piping work near waterways could contaminate the environment.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Rerouting piping away from waterways removes the pathway where the design permits, but the piping route may still be necessary.',
      Mitigate: 'Secondary containment, bunding, isolation valves, spill kits, drainage protection, leak detection, and emergency response reduce likelihood and impact.',
      Transfer: 'Contractor spill-response duties and environmental insurance help financially but do not remove environmental responsibility.',
      Accept: 'Minor residual spill risk is acceptable only where containment keeps consequences limited.',
      Escalate: 'Any anticipated permit breach or protected-waterway impact should go to environmental management and senior governance.',
    },
  },
  {
    id: 'petro-response-gas-leak',
    title: 'Gas Leak',
    signal: 'Gas handling systems could leak and trigger environmental penalties.',
    response: 'Avoid',
    feedback: {
      Avoid: 'Redesigning the gas-handling configuration to remove unnecessary leak-prone connections eliminates the source where possible.',
      Mitigate: 'Leak detection, pressure monitoring, seal inspections, preventive maintenance, and emissions testing reduce release likelihood.',
      Transfer: 'Specialist gas-system contractors shift some installation liability, but emissions exposure remains with the project.',
      Accept: 'Minor residual emissions are acceptable only when they remain below regulatory limits.',
      Escalate: 'Emissions above permitted limits must go to environmental and regulatory leadership before operation continues.',
    },
  },
  {
    id: 'petro-response-fatigue',
    title: 'Worker Fatigue',
    signal: 'Compressed schedule creates long shifts and rising near misses.',
    response: 'Avoid',
    feedback: {
      Avoid: 'Revising the programme, increasing staffing, or redistributing critical work removes the excessive overtime that creates fatigue.',
      Mitigate: 'Shift limits, breaks, fatigue monitoring, rotation, rest periods, and supervision reduce risk and deserve partial credit.',
      Transfer: 'Additional qualified contractors can spread workload, but coordination exposure remains.',
      Accept: 'Occasional overtime is acceptable only within approved working-time and safety limits.',
      Escalate: 'Escalate when the deadline cannot be achieved without unsafe sustained working patterns.',
    },
  },
  {
    id: 'petro-response-equipment',
    title: 'Equipment Failure',
    signal: 'Poor maintenance could cause breakdowns in key construction equipment.',
    response: 'Transfer',
    feedback: {
      Avoid: 'Replacing unreliable legacy equipment removes exposure where feasible, but may be costly or disruptive.',
      Mitigate: 'Preventive maintenance, inspections, condition monitoring, spare parts, and pre-use checks reduce breakdown likelihood.',
      Transfer: 'Specialist maintenance contracts with service obligations, warranties, and liability provisions shift maintenance performance exposure.',
      Accept: 'Use lower-criticality legacy equipment only when failure consequences are limited and contingencies exist.',
      Escalate: 'Repeated safety-critical equipment failures should be escalated when replacement funding is needed.',
    },
  },
  {
    id: 'petro-response-compliance',
    title: 'Regulatory Non-Compliance',
    signal: 'New refinery standards may not be reflected in current project controls.',
    response: 'Avoid',
    feedback: {
      Avoid: 'Building requirements into design and commissioning, and blocking non-compliant commissioning, prevents illegal exposure from arising.',
      Mitigate: 'Audits, regulatory reviews, inspections, documentation checks, and pre-commissioning assurance reduce compliance risk.',
      Transfer: 'Specialist regulatory consultants provide assurance, but compliance ownership remains with the project.',
      Accept: 'Only minor administrative gaps are tolerable when safety and commissioning approval are unaffected.',
      Escalate: 'Potential breaches causing enforcement, shutdown, or refused commissioning need senior and compliance authority.',
    },
  },
  {
    id: 'petro-response-security',
    title: 'Security Breach/Sabotage',
    signal: 'Sensitive works and materials are exposed to perimeter security weaknesses.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Removing unnecessary access points and restricting sensitive areas reduces exposure, but intrusion attempts cannot be eliminated.',
      Mitigate: 'Controlled access, passes, CCTV, perimeter protection, visitor management, lighting, patrols, and incident reporting create proportionate layered security.',
      Transfer: 'A specialist security provider can take defined protection duties, but the project still faces sabotage consequences.',
      Accept: 'Only low-level incidents with no material project threat should be accepted.',
      Escalate: 'Credible threats or suspected sabotage should be escalated to senior management and relevant external authorities.',
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
        prompt: 'Control room dashboard: Tank 17 pressure trends 15% above baseline while engineers say it is probably a sensor glitch. What action would you take?',
        context: 'Hydrocarbon Leak - Dashboard Warning',
        options: [
          { id: 'a', label: 'Log as normal fluctuation.', score: 0, feedback: 'This keeps the register unchanged despite a rising warning signal.' },
          { id: 'b', label: 'Escalate to safety officer for inspection.', score: 10, feedback: 'Cost may rise, but hidden seal faults can be caught before escalation.' },
          { id: 'c', label: 'Ignore and trust the engineer comment.', score: 0, feedback: 'Informal reassurance can allow a weak signal to become an issue.' },
          { id: 'd', label: 'Close the risk entry prematurely.', score: 0, feedback: 'Closing an active warning can make resurfacing risk more severe.' },
        ],
      },
      {
        id: 'petro-monitor-2',
        prompt: 'Weekly HR dashboard shows welder absenteeism up 15%, three near misses, and several 14-hour shifts. What should the risk manager do?',
        context: 'Worker Fatigue - Weekly Report',
        options: [
          { id: 'a', label: 'Ignore, assume workers will adjust.', score: 0, feedback: 'Fatigue signals rarely self-correct under schedule pressure.' },
          { id: 'b', label: 'Trigger contingency: enforce rest shifts and hire temporary crew.', score: 0, feedback: 'This may help, but first make sure the register reflects the changed risk level.' },
          { id: 'c', label: 'Update risk register: raise probability of fatigue accidents.', score: 10, feedback: 'Accurate monitoring keeps the team aligned before action is chosen.' },
          { id: 'd', label: 'Escalate to sponsor for schedule relief.', score: 0, feedback: 'Escalation can be useful, but the immediate monitoring move is to update the risk picture.' },
        ],
      },
      {
        id: 'petro-monitor-3',
        prompt: 'Business news announces stricter refinery emissions standards effective in three months, while permits are still under review. What register move would you make?',
        context: 'Regulatory Non-Compliance - News Update',
        options: [
          { id: 'a', label: 'Update compliance risk entry to High.', score: 10, feedback: 'The register should respond quickly when external conditions shift.' },
          { id: 'b', label: 'Ignore news because company exemptions may apply.', score: 0, feedback: 'Assumed exemptions can become costly if not verified.' },
          { id: 'c', label: 'Delay update until next quarterly review.', score: 0, feedback: 'Slow cadence is dangerous when regulatory timing accelerates.' },
          { id: 'd', label: 'Escalate to corporate legal and regulatory team.', score: 0, feedback: 'This may be needed, but the register still needs a current risk rating.' },
        ],
      },
      {
        id: 'petro-monitor-4',
        prompt: 'Maintenance bay log shows Crane 4 and Pump 22 overdue, with a red icon flashing and unusual crane creaking. What should happen first?',
        context: 'Equipment Failure - Maintenance Log',
        options: [
          { id: 'a', label: 'Transfer to subcontractor and close internally.', score: 0, feedback: 'Closing internally can hide exposure that still affects the project.' },
          { id: 'b', label: 'Update risk register probability from Medium to High.', score: 10, feedback: 'The probability has changed because multiple warning signals now align.' },
          { id: 'c', label: 'Ignore, as delays are expensive.', score: 0, feedback: 'Avoiding delay now can create a larger failure later.' },
          { id: 'd', label: 'Trigger contingency: order emergency maintenance.', score: 0, feedback: 'This is an action option, but first the monitored risk status should reflect reality.' },
        ],
      },
      {
        id: 'petro-monitor-5',
        prompt: 'Night CCTV shows an unlocked gate, unknown restricted-zone entry, logbook mismatch, and a suspicious activity email. What move would you make?',
        context: 'Security Breach - Perimeter Cameras',
        options: [
          { id: 'a', label: 'Update risk register to High.', score: 0, feedback: 'Updating is useful, but the threat may now exceed normal project authority.' },
          { id: 'b', label: 'Ignore because the guard was probably careless.', score: 0, feedback: 'Assumptions can let sabotage or theft escalate.' },
          { id: 'c', label: 'Escalate to national regulator/security.', score: 10, feedback: 'Restricted-zone intrusion can exceed project-level authority.' },
          { id: 'd', label: 'Trigger contingency: hire extra security patrols.', score: 0, feedback: 'Extra patrols help, but the breach signal requires senior/security escalation.' },
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
        prompt: 'Which items correspond to VUCA elements relevant to PetroNova risk identification?',
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
  projectBrief: 'PetroNova is expanding a live refinery while managing high-hazard construction, environmental exposure, contractor coordination, compliance pressure, and security concerns. Your job is to separate real project risks from distractions, rate probability and impact from 1-5, choose proportionate responses, and monitor live issue signals as the project evolves.',
  stages: [
    {
      id: 'petro-general',
      type: 'briefing',
      title: 'Project Brief',
      label: 'Risk Manager Intro',
      videoSrc: '/videos/petronova-risk-manager-intro.mp4',
      summary: 'Step into the PetroNova Refinery Expansion Project as the risk manager and prepare to manage safety, environmental, schedule, and compliance uncertainty.',
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
        summary: 'Walk through the site, project office, and strategy room to interpret hidden PetroNova risk signals. Tap each hotspot decision into or out of the risk register.',
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
        summary: 'Place each PetroNova risk on the heatmap using Probability and Impact. Probability is scored 1-5 and impact is scored 1-5, so each risk score is P x I.',
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
        summary: 'Choose Avoid, Mitigate, Transfer, Accept, or Escalate for each PetroNova risk. Match the response to the specific hazard, consequence, and authority needed.',
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
    id: 'nova-poster',
    scenario: 'Data Centre Walkthrough - PESTLE',
    scenarioTag: 'General',
    title: 'Motivational wall poster',
    signal: 'A poster says: "Move fast, migrate safely."',
    isRisk: false,
    insight: 'A poster may shape culture, but it is not a material risk signal by itself.',
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
    id: 'nova-standup-snacks',
    scenario: 'DevOps Office - SWOT',
    scenarioTag: 'General',
    title: 'Snack budget debate',
    signal: 'A Slack message asks whether the sprint room should stock more biscuits.',
    isRisk: false,
    insight: 'Team comfort matters, but this is not a material cloud platform upgrade risk.',
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
    id: 'nova-incident-ownership',
    scenario: 'Strategy Meeting - VUCA',
    scenarioTag: 'VUCA',
    title: 'Ambiguity in incident-response accountability',
    signal: 'Architect argues with vendor: "Who owns incident response after migration?"',
    isRisk: true,
    insight: 'Unclear incident ownership can slow response during outages or attacks.',
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
    id: 'nova-boardroom-plant',
    scenario: 'Strategy Meeting - VUCA',
    scenarioTag: 'General',
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
    response: 'Avoid',
    feedback: {
      Avoid: 'Disabling USB storage and prohibiting personal USB devices removes an unnecessary attack vector from the migration environment.',
      Mitigate: 'Endpoint detection, USB scanning, device control, malware protection, and monitoring reduce exposure for permitted media.',
      Transfer: 'Contractor cybersecurity obligations and indemnities shift some liability but do not prevent compromise.',
      Accept: 'Limited USB use is acceptable only when scanned and assessed as low residual risk.',
      Escalate: 'Any attempted or suspected USB-based compromise should go immediately to the CISO or incident response team.',
    },
  },
  {
    id: 'nova-response-legacy',
    title: 'Legacy Code Integration Failure',
    signal: 'The migration from monolith to microservices risks integration failure.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Replacing the highest-risk legacy components is useful where direct integration cannot work, but not every legacy system can be removed immediately.',
      Mitigate: 'Staged migration, APIs, sandboxes, integration tests, automated regression testing, rollback, and phased releases best balance continuity and transformation.',
      Transfer: 'Specialist migration partners can support complex systems, but architecture risk remains with NovaTech.',
      Accept: 'Only isolated early-development defects should be accepted when production services are unaffected.',
      Escalate: 'Escalate components that fail security, performance, or compatibility requirements to architecture governance.',
    },
  },
  {
    id: 'nova-response-cost',
    title: 'Cloud Cost Overrun',
    signal: 'Cloud spend fluctuates sharply during the upgrade.',
    response: 'Mitigate',
    feedback: {
      Avoid: 'Restricting unapproved high-cost workloads and uncontrolled autoscaling prevents the worst consumption, but cloud variability remains.',
      Mitigate: 'Budgets, alerts, dashboards, workload optimisation, rightsizing, autoscaling limits, and FinOps reviews actively control variable cloud spend.',
      Transfer: 'Committed-use discounts, pricing protections, and provider cost-management terms help, but they do not replace active governance.',
      Accept: 'Only modest fluctuations within approved contingency should be accepted.',
      Escalate: 'Sustained growth beyond thresholds should go to programme leadership before extra capacity is approved.',
    },
  },
  {
    id: 'nova-response-dependency',
    title: 'Dependency Library Deprecation',
    signal: 'A critical dependency reaches end-of-life next quarter.',
    response: 'Avoid',
    feedback: {
      Avoid: 'Preventing new reliance on unsupported libraries and replacing critical end-of-life dependencies designs out unsupported-software exposure.',
      Mitigate: 'SBOM tracking, advisory monitoring, vulnerability scanning, and scheduled upgrades reduce dependency risk.',
      Transfer: 'Commercially supported versions or vendors can provide maintenance and patches for critical dependencies.',
      Accept: 'Temporary retention needs documented approval and only fits when replacement creates greater immediate operational risk.',
      Escalate: 'Critical unpatched dependencies that cannot be replaced in time should go to security and architecture governance.',
    },
  },
  {
    id: 'nova-response-cooling',
    title: 'Cooling System Failure',
    signal: 'Server racks overheat as cooling response lags.',
    response: 'Transfer',
    feedback: {
      Avoid: 'Moving suitable workloads to distributed cloud or alternative facilities reduces private data-centre dependency, but may not fit every workload.',
      Mitigate: 'Redundant cooling, temperature sensors, backup power, automated alerts, maintenance, and emergency shutdown reduce overheating risk.',
      Transfer: 'Specialist data-centre maintenance with availability, maintenance, and response SLAs shifts operational and financial consequences from the core project team.',
      Accept: 'Brief low-temperature excursions are acceptable only when monitoring confirms equipment stays within safe limits.',
      Escalate: 'Cooling failure affecting critical workloads should go to infrastructure leadership and major-incident management.',
    },
  },
  {
    id: 'nova-response-dns',
    title: 'DNS Provider Outage',
    signal: 'A global DNS provider disruption threatens platform availability.',
    response: 'Avoid',
    feedback: {
      Avoid: 'Designing around multiple independent DNS providers or resilient DNS architecture removes single-provider dependency.',
      Mitigate: 'Health checks, DNS monitoring, short TTLs, and failover procedures reduce outage impact.',
      Transfer: 'High-availability SLAs and service credits provide compensation but do not remove unreachability.',
      Accept: 'Short DNS interruptions are acceptable only within approved service tolerance.',
      Escalate: 'A prolonged or widespread outage belongs with major-incident management and executive technology leadership.',
    },
  },
  {
    id: 'nova-response-tests',
    title: 'Low Test Automation',
    signal: 'Only 40% of tests are automated before migration.',
    response: 'Avoid',
    feedback: {
      Avoid: 'Mandatory automated quality gates and minimum coverage prevent code from reaching production in a known high-defect state.',
      Mitigate: 'Expanding unit, integration, regression, and security tests with CI/CD reduces defect leakage.',
      Transfer: 'Specialist QA providers can independently test high-risk components, but quality ownership remains with the programme.',
      Accept: 'Manual testing is acceptable only for low-risk components where automation is disproportionate.',
      Escalate: 'Releases failing mandatory thresholds should go to the technical change authority.',
    },
  },
  {
    id: 'nova-response-chip',
    title: 'Semiconductor Delivery Delay',
    signal: 'Critical hardware delivery is pushed back by chip shortages.',
    response: 'Transfer',
    feedback: {
      Avoid: 'Reducing dependence on scarce components or using cloud capacity avoids some hardware exposure but may redesign the refresh.',
      Mitigate: 'Early ordering, safety stock, alternative suppliers, and prioritisation reduce schedule exposure.',
      Transfer: 'Supplier contracts with delivery commitments, alternative sourcing obligations, penalties, and contingency arrangements shift part of delivery risk.',
      Accept: 'Short delays may be accepted only where existing infrastructure can absorb them without key milestone impact.',
      Escalate: 'Prolonged disruption threatening critical milestones should go to programme leadership.',
    },
  },
  {
    id: 'nova-response-accountability',
    title: 'Accountability Dispute',
    signal: 'Vendor and architect disagree over incident-response ownership.',
    response: 'Avoid',
    feedback: {
      Avoid: 'A clear RACI and incident-management framework before migration prevents ownership disputes during live recovery.',
      Mitigate: 'Joint incident exercises, shared runbooks, and formal escalation channels reduce confusion.',
      Transfer: 'Contractual SLAs and service-management obligations can allocate vendor duties, but internal accountability still matters.',
      Accept: 'Minor uncertainty is acceptable only for non-critical incidents where recovery is unaffected.',
      Escalate: 'Unresolved live major-incident disputes should go to the designated executive incident authority.',
    },
  },
  {
    id: 'nova-response-governance',
    title: 'Data Governance Regulation Change',
    signal: 'Future data governance rules are unclear for platform AI features.',
    response: 'Escalate',
    feedback: {
      Avoid: 'Excluding legally restricted data from non-essential functions can reduce exposure, but may not resolve architectural or lawful-processing questions.',
      Mitigate: 'Privacy-by-design, classification, encryption, retention, data residency, and regulatory monitoring reduce compliance risk.',
      Transfer: 'Legal/privacy advice and cloud-provider obligations support the response but do not make the engineering decision alone.',
      Accept: 'Minor uncertainty is acceptable only where existing controls remain compliant and there is no material effect.',
      Escalate: 'Material regulatory change affects architecture, data location, and lawful processing, so DPO, legal/compliance, and steering committee involvement is required.',
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
        { id: 'a', label: 'Escalate to SOC and update risk register.', score: 10, feedback: 'This improves compliance and resilience while keeping the risk picture current.' },
        { id: 'b', label: 'Assume users forgot passwords and wait.', score: 0, feedback: 'Waiting can turn weak signals into a breach.' },
        { id: 'c', label: 'Close the risk as normal login noise.', score: 0, feedback: 'Closing too early can hide an active attack pattern.' },
        { id: 'd', label: 'Delete failed-login logs to reduce alert volume.', score: 0, feedback: 'Removing evidence weakens investigation and accountability.' },
      ],
    },
    {
      id: 'nova-monitor-2',
      prompt: 'Sprint velocity drops 30%, burnout signs appear, and critical migration tasks are slipping. What monitoring action would you take?',
      context: 'Sprint Velocity Drop',
      options: [
        { id: 'a', label: 'Update fatigue risk and trigger contingency to redistribute workload.', score: 10, feedback: 'This protects schedule and delivery health before defects rise.' },
        { id: 'b', label: 'Push the team harder for one more sprint.', score: 0, feedback: 'Short-term pressure can increase defect and burnout risk.' },
        { id: 'c', label: 'Ignore velocity because agile metrics are imperfect.', score: 0, feedback: 'Imperfect metrics can still reveal a material trend.' },
        { id: 'd', label: 'Cancel testing to regain sprint velocity.', score: 0, feedback: 'That may improve speed optics but damages quality control.' },
      ],
    },
    {
      id: 'nova-monitor-3',
      prompt: 'Cloud billing alert shows a sudden cost spike after autoscaling rules changed. What should happen?',
      context: 'Cloud Billing Alert',
      options: [
        { id: 'a', label: 'Update cost risk and activate autoscaling review.', score: 10, feedback: 'This keeps the risk register current and targets the likely control issue.' },
        { id: 'b', label: 'Wait until month-end invoice is final.', score: 0, feedback: 'Delayed monitoring can let cost exposure compound.' },
        { id: 'c', label: 'Disable all autoscaling immediately.', score: 0, feedback: 'Overreaction can damage service availability.' },
        { id: 'd', label: 'Move the cost to another budget line.', score: 0, feedback: 'Accounting movement does not control the underlying risk.' },
      ],
    },
    {
      id: 'nova-monitor-4',
      prompt: 'Vendor dashboard shows 20 unresolved tickets related to migration blockers. What register update would you make?',
      context: 'Vendor Ticket Backlog',
      options: [
        { id: 'a', label: 'Raise probability of dependency risk.', score: 10, feedback: 'The vendor signal changes likelihood, even before an issue fully lands.' },
        { id: 'b', label: 'Close vendor dependency risk because tickets are logged.', score: 0, feedback: 'Logging work is not the same as resolving exposure.' },
        { id: 'c', label: 'Ignore because vendors always have backlog.', score: 0, feedback: 'Trend and relevance matter more than generic assumptions.' },
        { id: 'd', label: 'Delete low-priority tickets to improve the dashboard.', score: 0, feedback: 'Cleaning the dashboard does not reduce project risk.' },
      ],
    },
    {
      id: 'nova-monitor-5',
      prompt: 'Network telemetry shows anomalous outbound packets from a migration subnet. What should be done?',
      context: 'Suspicious Network Traffic',
      options: [
        { id: 'a', label: 'Escalate to cybersecurity team.', score: 10, feedback: 'Potential exfiltration requires specialist investigation quickly.' },
        { id: 'b', label: 'Wait for user complaints.', score: 0, feedback: 'Cyber signals should be handled before customers feel impact.' },
        { id: 'c', label: 'Restart the router and move on.', score: 0, feedback: 'Restarting may destroy evidence and miss root cause.' },
        { id: 'd', label: 'Mark as performance noise.', score: 0, feedback: 'Unusual outbound traffic needs validation, not dismissal.' },
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
  projectBrief: 'NovaTech is upgrading a cloud platform while balancing cybersecurity, legacy-system migration, vendor accountability, infrastructure resilience, and uncertain regulation. Your task is to identify the real hazards, rate probability and impact from 1-5, choose varied risk-specific responses, and monitor operational signals without relying on the video alone.',
  stages: [
    {
      id: 'nova-general',
      type: 'briefing',
      title: 'Project Brief',
      label: 'Risk Manager Intro',
      videoSrc: '/videos/novatech-risk-manager-intro.mp4',
      summary: 'Step into the NovaTech Cloud Platform Upgrade as the risk manager and prepare for cyber, infrastructure, delivery, and governance uncertainty.',
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
        summary: 'Explore the data centre, DevOps office, and strategy meeting to interpret 12 technology signals across PESTLE, SWOT, and VUCA.',
      },
      risks: novaTechIdentificationRisks,
      requiredSelections: 9,
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
        summary: 'Place each NovaTech risk on the Probability and Impact grid. Probability is scored 1-5 and impact is scored 1-5, so each risk score is P x I.',
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
        summary: 'Choose Avoid, Mitigate, Transfer, Accept, or Escalate for each NovaTech cloud upgrade risk. The suitable strategy varies by the risk element.',
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

export const categories = [aiCarManufacturing, petroNovaRefinery, novaTechCloudUpgrade];
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
    return { score: 10, label: 'Full score', className: 'correct' };
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

export function gradeQuizOption(question, selectedOption, stage = {}) {
  if (!selectedOption) return { score: 0, label: 'No response', className: 'almost' };

  const rawScore = Number(selectedOption.score || 0);
  const score = stage.useExactOptionScores ? rawScore : (rawScore > 0 ? rawScore : 2);
  const label = score >= 10 ? 'Correct' : score >= 5 ? 'Acceptable' : stage.useExactOptionScores ? 'Wrong' : 'Almost there';
  const className = score >= 10 ? 'correct' : score >= 5 ? 'good' : 'almost';

  return { score, label, className };
}

export function gradeMultiQuizAnswer(question, selectedIds = []) {
  if (!selectedIds.length) return { score: 0, label: 'No response', className: 'almost' };

  const expected = question.correctOptionIds || [];
  const exactMatch = selectedIds.length === expected.length && expected.every((id) => selectedIds.includes(id));
  const score = exactMatch ? 10 : 2;

  return {
    score,
    label: exactMatch ? 'Correct' : 'Almost there',
    className: exactMatch ? 'correct' : 'almost',
  };
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
      return total + gradeQuizOption(question, selected, stage).score;
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
      return total + gradeMultiQuizAnswer(question, selected).score;
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
