module.exports = {
  slug: 'launch-tiers',
  name: 'Launch Tiers',
  company: 'tessera',
  origin: 'Common product marketing practice; no single author',
  oneLiner: 'Not every release deserves a big launch. Sort releases into tiers, each with its own level of effort.',
  question: 'How much launch effort does this release deserve?',
  glance: {
    'Use it for': 'Planning launches and setting expectations with product teams',
    'You need': 'Criteria for impact, and a list of launch activities',
    'You get': 'A tier for each release with a fixed set of activities',
    'Time': 'Set up once, then minutes per release'
  },
  steps: [
    { title: 'Tier 3', text: 'Small changes and fixes. Tell the people who need to know, with little extra effort.', example: 'A new report template: release note, in-app message and help-centre update.' },
    { title: 'Tier 2', text: 'Meaningful improvements for existing customers. Some marketing, some sales enablement.', example: 'An SAP connector: customer webinar, sales training and partner announcement.' },
    { title: 'Tier 1', text: 'Major launches that change the market position or open new segments. Full campaign and full enablement.', example: 'Tessera Predict: launch event, press, campaign and a free pilot programme.' },
    { title: 'Decide with criteria', text: 'Choose the tier with agreed criteria such as revenue impact, customers affected and competitive importance, not by who asks loudest.', example: 'Tessera scores each release on revenue, customers affected and differentiation, from 1 to 3 each.' }
  ],
  diagram: {
    type: 'tiers', viewBox: '0 0 800 450',
    alt: 'Three launch tiers rising from tier 3 for small changes to tier 1 for major launches, each with its activities.',
    tiers: [
      { step: 1, height: 230, title: 'Tier 3', sub: 'Small changes', subEx: 'New report template', items: '• Release note\n• Update docs', itemsEx: '• Release note\n• In-app message\n• Help-centre update' },
      { step: 2, height: 300, title: 'Tier 2', sub: 'Meaningful updates', subEx: 'SAP connector', items: '• Customer email\n• Sales briefing\n• Blog post', itemsEx: '• Customer webinar\n• Sales training\n• Partner news' },
      { step: 3, height: 370, title: 'Tier 1', sub: 'Major launches', subEx: 'Tessera Predict', items: '• Full campaign\n• Press and events\n• Full enablement', itemsEx: '• Launch event\n• Press and campaign\n• Free pilot programme' }
    ],
    note: { step: 4, at: 2, label: 'Choose with agreed criteria', ex: 'Scores 8 of 9: Tier 1' }
  },
  whenToUse: ['Product ships often and marketing cannot launch everything.', 'Product and marketing disagree about how big a launch should be.', 'Planning the launch calendar for the year.'],
  whenNot: ['A company with one or two releases a year. Plan each one individually.'],
  howTo: ['Agree three to five criteria and a simple score for each.', 'Define a fixed list of activities for each tier.', 'Score each release early, together with product.', 'Assign owners and dates from the tier’s list.', 'Review after launch and adjust the tier definitions.'],
  pitfalls: ['Everything becoming Tier 1.', 'Deciding the tier too late to prepare.', 'Skipping Tier 3 communication entirely, which leaves customers unaware of improvements.'],
  template: `LAUNCH TIERS — [Company]

Criteria (score 1–3):
  Revenue impact:
  Customers affected:
  Competitive importance:

Tier 1 (score 8–9): activities
Tier 2 (score 5–7): activities
Tier 3 (score 3–4): activities

Release:         Score:        Tier:`,
  sources: ['A common product marketing practice with no single original source.'],
  related: ['product-lifecycle', 'GTM canvas', 'T-minus launch plan', 'RACI and DACI']
};
