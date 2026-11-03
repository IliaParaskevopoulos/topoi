module.exports = {
  slug: 'fab',
  name: 'Features, Advantages, Benefits',
  company: 'halden',
  origin: 'Classic sales-training technique; no single author',
  oneLiner: 'Turn what a product has into what it does, and then into what the customer gains.',
  question: 'Are we describing what the product has, or what the customer gets from it?',
  glance: {
    'Use it for': 'Product pages, sales sheets and sales training',
    'You need': 'A feature list and an understanding of what the buyer measures',
    'You get': 'Messages that connect each feature to a benefit the buyer cares about',
    'Time': 'An hour per product'
  },
  steps: [
    { title: 'Feature', text: 'What the product is or has: a fact, a specification, a component.', example: 'Optical sorting and acid washing at the quarry.' },
    { title: 'Advantage', text: 'What that feature does, or how it performs better than the alternative.', example: 'Iron content below 100 ppm in every shipment.' },
    { title: 'Benefit', text: 'What the customer gains, in their terms: money, time, risk, status.', example: 'Fewer rejected solar-glass batches and higher line output.' },
    { title: 'Ask “so what?”', text: 'Keep asking “so what?” until you reach something the buyer measures or reports on.', example: 'Higher output means meeting delivery targets without adding furnace capacity.' }
  ],
  diagram: {
    type: 'chain', viewBox: '0 0 800 490',
    alt: 'Features, advantages, benefits: a feature leads to an advantage, then a benefit, then the “so what?” test.',
    nodes: [
      { step: 1, title: 'Feature', text: 'What the product is or has.', ex: 'Optical sorting and acid washing.' },
      { step: 2, title: 'Advantage', text: 'What that feature does.', ex: 'Iron below 100 ppm in every shipment.' },
      { step: 3, title: 'Benefit', text: 'What the customer gains.', ex: 'Fewer rejected batches, higher output.' },
      { step: 4, title: 'So what?', text: 'Keep asking until the buyer would measure it.', ex: 'Hit delivery targets without new furnaces.' }
    ]
  },
  whenToUse: ['Writing product pages, brochures and sales sheets.', 'Training new sellers to talk about outcomes.', 'Reviewing copy that reads like a specification sheet.'],
  whenNot: ['Highly technical buyers who first need the specification. Give it to them, then the benefit.', 'Positioning work. FAB works at message level, after positioning is set.'],
  howTo: ['List the features that matter for one buyer role.', 'For each, write what it does better than the alternative.', 'Translate that into a benefit in the buyer’s own measures.', 'Ask “so what?” until the benefit is something they report on.', 'Lead copy with the benefit, and keep the feature as proof.'],
  pitfalls: ['Benefits so general they fit any product (“saves time”).', 'Using the same benefit for every buyer role.', 'Dropping the feature entirely, which removes the proof.'],
  template: `FEATURES, ADVANTAGES, BENEFITS — [Product], [buyer role]

Feature            Advantage             Benefit             So what?
1.
2.
3.`,
  sources: ['A long-standing sales-training technique with no single original source.'],
  related: ['messaging-house', 'value-proposition-canvas', 'Benefit ladder', 'spin-selling']
};
