module.exports = {
  slug: 'value-proposition-canvas',
  name: 'Value Proposition Canvas',
  company: 'arvena',
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
      example: 'Segment: quality managers at mid-size probiotic brands.' },
    { title: 'Customer jobs',
      text: 'What they are trying to get done: functional tasks, social goals and emotional needs.',
      example: 'Release batches that pass stability testing. Keep the supplier list short.' },
    { title: 'Pains',
      text: 'What annoys or blocks them before, during or after the job: risks, obstacles and bad outcomes.',
      example: 'Coating failures that scrap whole batches. Long lead times.' },
    { title: 'Gains',
      text: 'The outcomes and benefits they want, including ones that would surprise them.',
      example: 'Fewer process steps. A clean-label claim on the pack.' },
    { title: 'Value map',
      text: 'Now move to the left. The square describes your offer for this segment.',
      example: 'Arvena’s acid-resistant capsule and the technical service around it.' },
    { title: 'Products and services',
      text: 'List what you offer this segment.',
      example: 'Acid-resistant capsules, a dissolution data pack and lab trial support.' },
    { title: 'Pain relievers',
      text: 'How your offer removes or reduces specific pains. Link each one to a pain on the right.',
      example: 'No coating step, so no coating failures.' },
    { title: 'Gain creators',
      text: 'How your offer produces the gains customers want.',
      example: 'One fewer process step and a coating-free label claim.' },
    { title: 'Check the fit',
      text: 'Fit is when your pain relievers and gain creators address the pains and gains that matter most. Rank them, then test with real customers.',
      example: 'Interviews show scrapped batches are the top pain, so that leads the message.' }
  ],
  diagram: {
    type: 'vpc',
    viewBox: '0 0 800 430',
    alt: 'Value Proposition Canvas: a value map square with products and services, pain relievers and gain creators, facing a customer profile circle with jobs, pains and gains.',
    profile: { step: 1, title: 'Customer profile' },
    valueMap: { step: 5, title: 'Value map' },
    parts: {
      jobs: { step: 2, title: 'Jobs', text: 'Tasks, goals and needs', ex: 'Pass stability tests' },
      pains: { step: 3, title: 'Pains', text: 'Risks and obstacles', ex: 'Scrapped batches' },
      gains: { step: 4, title: 'Gains', text: 'Outcomes they want', ex: 'Fewer steps, clean label' },
      products: { step: 6, title: 'Products and services', text: 'What you offer this segment', ex: 'Acid-resistant capsules, data pack, trial support' },
      painRelievers: { step: 7, title: 'Pain relievers', text: 'How you remove pains', ex: 'No coating step to fail' },
      gainCreators: { step: 8, title: 'Gain creators', text: 'How you create gains', ex: 'One fewer step, clean label' }
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
  related: ['obviously-awesome', 'ansoff-matrix', 'Jobs-to-be-Done', 'Empathy Map', 'Business Model Canvas']
};
