module.exports = {
  slug: 'messaging-house',
  name: 'Messaging House',
  company: 'kontor',
  origin: 'Practitioner tool, widely used in B2B marketing and PR',
  oneLiner: 'One umbrella message, held up by three pillars with proof, standing on what makes you credible.',
  question: 'What do we want our audience to believe, and why should they believe it?',
  glance: {
    'Use it for': 'Turning positioning into messages that everyone uses the same way',
    'You need': 'Agreed positioning and real proof points',
    'You get': 'One page that web, sales, PR and campaigns can all write from',
    'Time': 'Two workshops and a round of review'
  },
  steps: [
    { title: 'Umbrella message',
      text: 'The roof: the one thing you want your audience to believe about you. One sentence, in the customer’s terms.',
      example: 'Get paid today for invoices your customers pay in 60 days.' },
    { title: 'First pillar',
      text: 'Each pillar is one reason to believe the umbrella message. Start with the reason that matters most to the buyer.',
      example: 'Speed: cash in your account within 24 hours.' },
    { title: 'Second pillar',
      text: 'A second, distinct reason. Pillars should not overlap.',
      example: 'Simplicity: connect your accounting software and pick an invoice. No paperwork.' },
    { title: 'Third pillar',
      text: 'A third reason. Three is usual: enough to be convincing, few enough to remember.',
      example: 'Clear cost: one fixed fee per invoice, shown before you submit.' },
    { title: 'Proof points',
      text: 'Under each pillar, the evidence: numbers, customer examples, certifications, demos. A pillar without proof is a claim.',
      example: 'Median payout time of six hours. Setup in ten minutes. Fee calculator on every invoice.' },
    { title: 'Foundation',
      text: 'The base: who you are and why you are credible. Company facts that support every message above.',
      example: 'Supervised financial intermediary, 2,000 small-business customers, backed by a cantonal bank partner.' }
  ],
  diagram: {
    type: 'house',
    viewBox: '0 0 800 460',
    alt: 'Messaging house: an umbrella message as the roof, three message pillars with proof points, and a foundation of credentials.',
    roof: { step: 1, title: 'Umbrella message', text: 'The one thing you want them to believe', ex: 'Get paid today for invoices due in 60 days' },
    pillars: [
      { step: 2, title: 'Pillar 1', titleEx: 'Speed', text: 'First reason to believe', ex: 'Cash within 24 hours', proof: 'Data, cases, demos', proofEx: 'Median payout: 6 hours' },
      { step: 3, title: 'Pillar 2', titleEx: 'Simplicity', text: 'Second reason to believe', ex: 'No paperwork', proof: 'Data, cases, demos', proofEx: 'Set up in 10 minutes from your accounting tool' },
      { step: 4, title: 'Pillar 3', titleEx: 'Clear cost', text: 'Third reason to believe', ex: 'One fixed fee per invoice', proof: 'Data, cases, demos', proofEx: 'Fee shown before you submit' }
    ],
    proofStep: 5,
    foundation: { step: 6, title: 'Foundation', text: 'Who you are and why you are credible', ex: 'Supervised, 2,000 customers, cantonal bank partner' }
  },
  whenToUse: [
    'After positioning is agreed and before writing the website, sales deck or campaign.',
    'Teams describe the product in different ways and you need one version.',
    'Briefing agencies, new hires or partners.'
  ],
  whenNot: [
    'Before positioning is settled. The house will just record the confusion.',
    'As customer-facing copy. It is an internal tool; the words still need adapting to each channel.'
  ],
  howTo: [
    'Start from your positioning: best-fit customer, value and proof.',
    'Write the umbrella message in the customer’s language, and test it on a few customers.',
    'Choose three pillars that are distinct and each matter to the buyer.',
    'Collect proof for each pillar. Drop or rework any pillar you cannot prove.',
    'Share it, then check a month later that the website, deck and campaigns use it.'
  ],
  pitfalls: [
    'An umbrella message that could belong to any competitor.',
    'Pillars that describe features rather than reasons to believe.',
    'Making a separate house per persona too early. Start with one, then adapt the proof by audience.'
  ],
  template: `MESSAGING HOUSE — [Product], [audience]

Umbrella message:

Pillar 1:
  Proof:
Pillar 2:
  Proof:
Pillar 3:
  Proof:

Foundation (who we are, why we are credible):`,
  sources: [
    'There is no single original source. The messaging house is a common practitioner tool in B2B marketing and PR.'
  ],
  related: ['obviously-awesome', 'value-proposition-canvas', 'Message hierarchy', 'Strategic Narrative', 'Golden Circle']
};
