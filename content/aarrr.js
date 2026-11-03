module.exports = {
  slug: 'aarrr',
  name: 'AARRR Pirate Metrics',
  company: 'kontor',
  origin: 'Dave McClure, 2007',
  oneLiner: 'Five stages that turn the customer journey into numbers, so you can see where you lose people.',
  question: 'Where in the customer journey are we losing the most potential revenue?',
  glance: {
    'Use it for': 'Finding where to focus growth work',
    'You need': 'One metric you can actually measure for each stage',
    'You get': 'A funnel with conversion rates and a clear first problem to fix',
    'Time': 'A day to define metrics, then a monthly review'
  },
  steps: [
    { title: 'Draw the funnel',
      text: 'Map the journey as five stages. Each stage gets one clear metric, and each is smaller than the one above it.',
      example: 'Kontor maps the path from a first visit to a business that finances invoices every month.' },
    { title: 'Acquisition',
      text: 'How people find you. Measure visits or leads by channel, and what each channel costs.',
      example: '2,400 sign-ups a month, mostly from search and accountant referrals.' },
    { title: 'Activation',
      text: 'The first good experience: the moment a new customer gets value. Define it as a specific event, not a feeling.',
      example: '1,300 businesses connect their accounting software and submit a first invoice.' },
    { title: 'Retention',
      text: 'Whether they come back. In B2B this usually means repeat orders or continued use.',
      example: '340 businesses finance another invoice within 60 days.' },
    { title: 'Referral',
      text: 'Whether they bring others: introductions, reviews, shared work.',
      example: '90 businesses invite their accountant or a supplier.' },
    { title: 'Revenue',
      text: 'Whether they pay, and how much. McClure put revenue last; many teams move it right after retention.',
      example: 'CHF 410,000 in fees a month.' },
    { title: 'Find the biggest leak',
      text: 'Compare conversion between stages and fix the largest drop first. Improving later stages helps little if people never reach them.',
      example: 'Activation to retention loses 74%. Kontor starts sending a payout summary that shows how much cash each invoice freed up.' }
  ],
  diagram: {
    type: 'funnel',
    viewBox: '0 0 800 420',
    alt: 'AARRR funnel with five stages: acquisition, activation, retention, referral and revenue, each with its metric, and the biggest drop-off marked.',
    stages: [
      { step: 2, title: 'Acquisition', metric: 'Visits, leads and cost per channel', ex: '2,400 sign-ups a month' },
      { step: 3, title: 'Activation', metric: 'Share reaching first value', ex: '1,300 submit a first invoice' },
      { step: 4, title: 'Retention', metric: 'Share returning or reordering', ex: '340 finance again within 60 days' },
      { step: 5, title: 'Referral', metric: 'Introductions and referrals', ex: '90 invite an accountant or supplier' },
      { step: 6, title: 'Revenue', metric: 'Revenue and lifetime value', ex: 'CHF 410,000 in fees a month' }
    ],
    leak: { step: 7, after: 1, label: 'Biggest leak', ex: 'Biggest leak: −74%' },
    outlineStep: 1
  },
  whenToUse: [
    'You have a measurable path from first contact to paying customer.',
    'Choosing which growth experiments to run first.',
    'Aligning marketing, sales and customer success on one chain of metrics.'
  ],
  whenNot: [
    'Very few, very large enterprise deals. The numbers are too small to compare; analyse deal stages instead.',
    'Measuring long-term brand building, which does not show up in a funnel within a quarter.'
  ],
  howTo: [
    'Define one metric per stage that you can measure every month.',
    'Agree on the activation event. This is usually the hardest and most useful definition.',
    'Pull the numbers for the same time window across all stages.',
    'Calculate the conversion rate between each pair of stages.',
    'Pick the biggest drop, run one or two experiments against it, and review monthly.'
  ],
  pitfalls: [
    'Using vanity metrics for acquisition, such as impressions, that never connect to revenue.',
    'A vague activation definition that everyone reads differently.',
    'Comparing stages measured over different time windows.'
  ],
  template: `AARRR — [Product], [month]

Stage         Metric                     Number   Conversion from previous
Acquisition
Activation                                         %
Retention                                          %
Referral                                           %
Revenue                                            %

Biggest leak:
Experiment to run this month:
Owner:`,
  sources: [
    'Dave McClure, “Startup Metrics for Pirates: AARRR!”, talk at Ignite Seattle, 2007.'
  ],
  related: ['crossing-the-chasm', 'North Star Metric', 'Bow-Tie Model', 'Demand Waterfall', 'HEART']
};
