module.exports = {
  slug: 'value-proposition-canvas',
  name: 'Value Proposition Canvas',
  company: 'tessera',
  origin: 'Alexander Osterwalder and colleagues, Strategyzer, 2014',
  oneLiner: 'Two shapes side by side: what a customer is trying to get done, and how your product helps. Fit is where they match.',
  question: 'Does what we offer address the jobs, pains and gains that matter most to this customer?',
  glance: {
    'Use it for': 'Checking product–customer fit for one segment',
    'You need': 'Customer interviews or solid customer insight',
    'You get': 'A ranked view of what matters to the customer and how your offer answers it',
    'Time': 'Two hours per segment'
  },
  steps: [
    { title: 'Customer profile',
      text: 'Start on the right with one customer segment. Draw the profile before you think about your product.',
      example: 'Segment: maintenance managers at manufacturing plants with 50 to 500 staff.' },
    { title: 'Customer jobs',
      text: 'What they are trying to get done: functional tasks, social goals and emotional needs.',
      example: 'Keep production lines running. Pass safety and quality audits.' },
    { title: 'Pains',
      text: 'What annoys or blocks them before, during or after the job: risks, obstacles and bad outcomes.',
      example: 'Unplanned breakdowns, and work orders lost on paper and spreadsheets.' },
    { title: 'Gains',
      text: 'The outcomes and benefits they want, including ones that would surprise them.',
      example: 'Fewer stoppages, and audit records ready in minutes.' },
    { title: 'Value map',
      text: 'Now move to the left. The square describes your offer for this segment.',
      example: 'Tessera’s maintenance planning software and its onboarding service.' },
    { title: 'Products and services',
      text: 'List what you offer this segment.',
      example: 'Maintenance scheduling, a mobile app for technicians, and sensor alerts.' },
    { title: 'Pain relievers',
      text: 'How your offer removes or reduces specific pains. Link each one to a pain on the right.',
      example: 'Alerts before parts fail, and every work order in one place.' },
    { title: 'Gain creators',
      text: 'How your offer produces the gains customers want.',
      example: 'Planned instead of emergency repairs, and one-click audit reports.' },
    { title: 'Check the fit',
      text: 'Fit is when your pain relievers and gain creators address the pains and gains that matter most. Rank them, then test with real customers.',
      example: 'Interviews show unplanned breakdowns are the top pain, so that leads the message.' }
  ],
  diagram: {
    type: 'vpc',
    viewBox: '0 0 800 430',
    alt: 'Value Proposition Canvas: a value map square with products and services, pain relievers and gain creators, facing a customer profile circle with jobs, pains and gains.',
    profile: { step: 1, title: 'Customer profile' },
    valueMap: { step: 5, title: 'Value map' },
    parts: {
      jobs: { step: 2, title: 'Jobs', text: 'Tasks, goals and needs', ex: 'Keep lines running' },
      pains: { step: 3, title: 'Pains', text: 'Risks and obstacles', ex: 'Unplanned breakdowns' },
      gains: { step: 4, title: 'Gains', text: 'Outcomes they want', ex: 'Fewer stops, audit-ready' },
      products: { step: 6, title: 'Products and services', text: 'What you offer this segment', ex: 'Scheduling, technician app, sensor alerts' },
      painRelievers: { step: 7, title: 'Pain relievers', text: 'How you remove pains', ex: 'Alerts before failure' },
      gainCreators: { step: 8, title: 'Gain creators', text: 'How you create gains', ex: 'Planned repairs, instant audits' }
    },
    fit: { step: 9, label: 'Fit', ex: 'Fit' }
  },
  whenToUse: [
    'Designing or refining an offer for a specific segment.',
    'Preparing messaging, so it leads with the pains and gains customers rank highest.',
    'Reviewing why a product sells well in one segment and poorly in another.'
  ],
  whenNot: [
    'Covering several segments at once. Draw one canvas per segment.',
    'Without customer evidence. A canvas filled from assumptions looks convincing and can be wrong.'
  ],
  howTo: [
    'Choose one segment and fill the customer profile first, ideally from interviews.',
    'Rank jobs, pains and gains by how much they matter to the customer.',
    'Fill the value map with what you actually offer today.',
    'Draw a line from each pain reliever and gain creator to the pain or gain it addresses.',
    'Pains and gains with no line are gaps. Offer elements with no line may not be worth leading with.'
  ],
  pitfalls: [
    'Writing the product’s features into the customer profile.',
    'Listing every possible pain without ranking them.',
    'Treating fit as proven before customers have confirmed it.'
  ],
  template: `VALUE PROPOSITION CANVAS — [Segment]

CUSTOMER PROFILE
Jobs (ranked):
  1.
  2.
Pains (ranked):
  1.
  2.
Gains (ranked):
  1.
  2.

VALUE MAP
Products and services:
Pain relievers (→ which pain):
Gain creators (→ which gain):

Gaps and next interviews:`,
  sources: [
    'Alexander Osterwalder, Yves Pigneur, Gregory Bernarda and Alan Smith, Value Proposition Design, Wiley, 2014.'
  ],
  related: ['obviously-awesome', 'jobs-to-be-done', 'five-rings', 'kano-model', 'messaging-house']
};
