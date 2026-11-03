// Adoption and growth: new pages.
module.exports = [
{
  slug: 'bow-tie', name: 'Bow-Tie Model', company: 'tessera',
  origin: 'Winning by Design (Jacco van der Kooij), 2010s',
  oneLiner: 'A funnel that does not stop at the sale: after the commitment, the customer journey widens again through onboarding, impact and growth.',
  question: 'Are we investing in the half of the journey where recurring revenue is made?',
  glance: { 'Use it for': 'Recurring-revenue businesses planning acquisition and retention together', 'You need': 'Conversion data before and after the sale', 'You get': 'One model and set of metrics from first touch to expansion', 'Time': 'A workshop, then monthly reviews' },
  steps: [
    { title: 'Awareness', text: 'Buyers become aware they have a problem and that you exist.', example: '12,000 plant managers reached by downtime content.' },
    { title: 'Education', text: 'Buyers learn how to solve the problem and what good looks like.', example: '600 attend webinars or download the downtime guide.' },
    { title: 'Selection', text: 'Buyers compare options and choose.', example: '90 plants run a demo or pilot.' },
    { title: 'Commit', text: 'The knot of the bow tie: the customer signs.', example: '30 plants sign.' },
    { title: 'Onboarding', text: 'The customer gets set up and reaches first value.', example: '28 plants live within two weeks.' },
    { title: 'Impact', text: 'The customer sees the results they bought it for. This drives renewal.', example: 'Average 15% less unplanned downtime after six months.' },
    { title: 'Growth', text: 'The customer renews, expands and recommends. In recurring revenue, this side is where most lifetime value comes from.', example: 'A third add the Predict module or a second plant in year two.' }
  ],
  diagram: {
    type: 'bowtie', viewBox: '0 0 800 380',
    alt: 'Bow-tie model: awareness, education and selection narrow to the commitment, then onboarding, impact and growth widen again.',
    left: [
      { step: 1, title: 'Awareness', text: 'Know you exist', ex: '12,000 reached' },
      { step: 2, title: 'Education', text: 'Learn what good is', ex: '600 engaged' },
      { step: 3, title: 'Selection', text: 'Compare, choose', ex: '90 pilots' }
    ],
    knot: { step: 4, title: 'Commit', text: 'They sign', ex: '30 sign' },
    right: [
      { step: 5, title: 'Onboarding', text: 'First value', ex: '28 live in 2 weeks' },
      { step: 6, title: 'Impact', text: 'Results bought for', ex: '15% less downtime' },
      { step: 7, title: 'Growth', text: 'Renew, expand', ex: 'A third expand' }
    ],
    note: { step: 7, label: 'Most lifetime value comes after the sale', ex: 'Expansion pays back acquisition' }
  },
  whenToUse: ['Subscription and recurring-revenue businesses.', 'Marketing that stops at the sale.', 'Aligning marketing, sales and customer success on one model.'],
  whenNot: ['One-off purchases with no ongoing relationship.'],
  howTo: ['Define each stage and its conversion metric.', 'Measure conversion on both sides of the commit.', 'Find the weakest conversion and fix it first.', 'Give product marketing a role on the right side: onboarding content, adoption campaigns, expansion offers.'],
  pitfalls: ['Celebrating new logos while churn rises.', 'No clear owner for onboarding and impact.', 'Measuring impact by usage instead of customer outcomes.'],
  template: `BOW-TIE — [Product], [period]

Stage          Metric            Number     Conversion
Awareness
Education
Selection
Commit
Onboarding
Impact
Growth`,
  sources: ['Winning by Design, The Revenue Architecture (published materials on the bow-tie model).'],
  related: ['aarrr', 'flywheel', 'content-to-stage-map', 'gtm-motions']
},
{
  slug: 'tofu-mofu-bofu', name: 'TOFU, MOFU, BOFU', company: 'nordhaus',
  origin: 'Common marketing practice; no single author',
  oneLiner: 'Plan content for the top, middle and bottom of the funnel, so buyers find help at every stage.',
  question: 'Do we have content for people just discovering the problem, comparing options, and ready to buy?',
  glance: { 'Use it for': 'Planning content and campaigns by funnel stage', 'You need': 'Your current content and funnel data', 'You get': 'A balanced content plan with a goal per stage', 'Time': 'One planning session' },
  steps: [
    { title: 'Map the funnel', text: 'Divide the buying journey into top, middle and bottom.', example: 'Nordhaus plans its content for the year.' },
    { title: 'Top of funnel', text: 'Broad, helpful content for people discovering a need. Measure reach and engagement.', example: 'Small-flat storage ideas and moving checklists.' },
    { title: 'Middle of funnel', text: 'Content that helps people compare and plan. Measure engagement and leads.', example: 'Room planning guides and a free room-plan booking.' },
    { title: 'Bottom of funnel', text: 'Content that helps people decide and buy. Measure conversion.', example: 'Delivery and assembly details, member prices, reviews.' }
  ],
  diagram: {
    type: 'funnel', viewBox: '0 0 800 270', outlineStep: 1,
    alt: 'Top, middle and bottom of the funnel, each with its content and metric.',
    stages: [
      { step: 2, title: 'Top', metric: 'Discover a need: reach', ex: 'Storage ideas, moving checklists' },
      { step: 3, title: 'Middle', metric: 'Compare and plan: leads', ex: 'Room guides, free plan booking' },
      { step: 4, title: 'Bottom', metric: 'Decide and buy: conversion', ex: 'Delivery details, prices, reviews' }
    ]
  },
  whenToUse: ['Planning a content calendar.', 'Content that is all top-of-funnel or all product pages.', 'Explaining content goals to stakeholders.'],
  whenNot: ['Complex B2B buying with many people and loops; use buying jobs or a content-to-stage map.'],
  howTo: ['Sort existing content into the three stages.', 'Set one goal and one metric per stage.', 'Fill the biggest gaps first.', 'Link content so readers can move to the next stage.'],
  pitfalls: ['Judging top-of-funnel content by sales.', 'Bottom-of-funnel content that is just a price list.', 'No links between stages.'],
  template: `TOFU, MOFU, BOFU — [Brand], [period]

Stage     Content          Goal       Metric
Top
Middle
Bottom

Gaps to fill:`,
  sources: ['A common marketing practice; there is no single original source.'],
  related: ['content-to-stage-map', 'aarrr', 'peso-model', 'customer-journey-map']
}
];
