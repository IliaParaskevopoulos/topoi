module.exports = {
  slug: 'positioning-statement',
  name: 'Positioning Statement',
  company: 'halden',
  origin: 'Geoffrey Moore, 1991',
  oneLiner: 'One structured sentence that says who the product is for, what it is, why it matters and how it differs.',
  question: 'Can we say, in one sentence, who we are for and why we are the better choice?',
  glance: {
    'Use it for': 'Writing down positioning so everyone works from the same version',
    'You need': 'A clear target customer and the main alternative they consider',
    'You get': 'An internal statement to test messaging, content and sales stories against',
    'Time': 'One workshop, then a few rounds of review'
  },
  steps: [
    { title: 'Target customer', text: 'Who the product is for. Narrow enough that you could list real companies.', example: 'For solar-glass makers who need consistently low-iron sand.' },
    { title: 'The need', text: 'The problem or opportunity that makes them look for a solution.', example: 'Who lose output when impurities vary between deliveries.' },
    { title: 'Category', text: 'The market frame you compete in. It tells buyers what to compare you with.', example: 'Halden is a high-purity silica supplier.' },
    { title: 'Key benefit', text: 'The main reason to buy, as an outcome for the customer.', example: 'That guarantees iron below 100 ppm in every delivery, tested and certified.' },
    { title: 'Main alternative', text: 'The option the customer would otherwise choose.', example: 'Unlike general glass-sand quarries that test only batch averages.' },
    { title: 'Difference', text: 'What makes you different from that alternative, and can be proven.', example: 'Every shipment comes with its own certificate and a replacement guarantee.' }
  ],
  diagram: {
    type: 'statement', viewBox: '0 0 800 395',
    alt: 'Positioning statement template: for a target customer, who has a need, the product is a category, that gives a key benefit, unlike the main alternative, our product has a difference.',
    parts: [
      { step: 1, lead: 'For', slot: '[target customer]', ex: 'solar-glass makers who need consistently low-iron sand' },
      { step: 2, lead: 'who', slot: '[statement of the need or opportunity]', ex: 'lose output when impurities vary between deliveries' },
      { step: 3, lead: '[Product] is a', slot: '[market category]', ex: 'high-purity silica supplier' },
      { step: 4, lead: 'that', slot: '[key benefit, the main reason to buy]', ex: 'guarantees iron below 100 ppm in every delivery' },
      { step: 5, lead: 'unlike', slot: '[the main alternative]', ex: 'general glass-sand quarries that test batch averages' },
      { step: 6, lead: 'our product', slot: '[main difference you can prove]', ex: 'ships each load with a certificate and replacement guarantee' }
    ]
  },
  whenToUse: ['After positioning work, to record the result in one place.', 'Checking that a new website, deck or campaign matches the positioning.', 'Onboarding new staff and agencies.'],
  whenNot: ['As customer-facing copy. It is an internal tool and reads awkwardly out loud.', 'To decide the positioning. Do that first, with a method such as Obviously Awesome.'],
  howTo: ['Fill each slot with evidence from customers and win/loss data, not hopes.', 'Make the target customer narrow enough to name real accounts.', 'Write the alternative the customer would really choose, which may not be your biggest competitor.', 'Test the statement with sales: does it match the deals you win?', 'Use it as a filter for every message you write.'],
  pitfalls: ['A target customer so broad it includes everyone.', 'A benefit that is really a feature.', 'A difference you cannot prove.'],
  template: `POSITIONING STATEMENT — [Product]

For [target customer]
who [need or opportunity],
[product] is a [market category]
that [key benefit].
Unlike [main alternative],
our product [main difference].

Evidence for each part:`,
  sources: ['Geoffrey A. Moore, Crossing the Chasm, HarperBusiness, 1991.'],
  related: ['obviously-awesome', 'messaging-house', 'crossing-the-chasm', 'Onlyness statement']
};
