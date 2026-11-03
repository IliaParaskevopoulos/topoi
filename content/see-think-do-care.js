module.exports = {
  slug: 'see-think-do-care',
  name: 'See, Think, Do, Care',
  company: 'orto',
  origin: 'Avinash Kaushik, 2013',
  oneLiner: 'Plan content and measurement by how much buying intent each audience has, from none yet to loyal customer.',
  question: 'Are we speaking to people at every level of intent, and measuring each in the right way?',
  glance: {
    'Use it for': 'Planning content, channels and metrics across the journey',
    'You need': 'Current content and channels, plus the metrics you report',
    'You get': 'Content and a fitting metric for each intent group',
    'Time': 'A half-day planning session'
  },
  steps: [
    { title: 'Outline the groups', text: 'Four groups by intent. Kaushik describes them as clusters of intent rather than a strict funnel; the shape here shows how audience size shrinks.', example: 'Orto plans its content for the year around the four groups.' },
    { title: 'See', text: 'The largest audience that could ever be interested, with no buying intent yet. Earn attention with useful or entertaining content.', example: 'Everyone who cooks dinner on weekdays: short recipe videos and kitchen tips.' },
    { title: 'Think', text: 'People with some intent who are starting to consider options. Help them compare and decide.', example: 'People searching for healthy, quick dinners: nutrition comparisons and reviews.' },
    { title: 'Do', text: 'People ready to buy now. Make buying easy and give a reason to choose you.', example: 'Shoppers in the chilled aisle: in-store offers and retailer app coupons.' },
    { title: 'Care', text: 'Existing customers who have bought more than once. Keep them, and turn them into advocates.', example: 'Regular buyers: first taste of new flavours and recipes to go with each meal.' }
  ],
  diagram: {
    type: 'funnel', viewBox: '0 0 800 340',
    alt: 'See, Think, Do, Care: four audience groups shrinking from no buying intent to loyal customers, each with its content and metric.',
    outlineStep: 1,
    stages: [
      { step: 2, title: 'See', metric: 'No intent yet: reach and attention', ex: 'Recipe videos, kitchen tips' },
      { step: 3, title: 'Think', metric: 'Some intent: consideration', ex: 'Healthy quick-dinner comparisons' },
      { step: 4, title: 'Do', metric: 'Ready to buy: conversion', ex: 'In-store offers, app coupons' },
      { step: 5, title: 'Care', metric: 'Customers: loyalty and repeat', ex: 'New flavours first, recipes' }
    ]
  },
  whenToUse: ['Planning content for the year across channels.', 'Checking that all your content is not aimed only at buyers ready to purchase.', 'Choosing a metric per piece of content, instead of judging all by sales.'],
  whenNot: ['Very short B2B sales cycles with few, known buyers.', 'As a replacement for a sales pipeline model.'],
  howTo: ['Define each group for your market in one sentence.', 'Sort your existing content and channels into the four groups.', 'Spot the gaps, often in See and Care.', 'Choose one metric per group that fits its intent.', 'Plan new content to fill the gaps and review quarterly.'],
  pitfalls: ['Judging See content by direct sales.', 'Spending everything on Do, which shrinks the future audience.', 'Forgetting Care, where repeat purchases come from.'],
  template: `SEE, THINK, DO, CARE — [Brand], [year]

Group     Who they are     Content and channels     Metric
See
Think
Do
Care

Gaps to fill:`,
  sources: ['Avinash Kaushik, “See-Think-Do: A Content, Marketing, Measurement Business Framework”, Occam’s Razor blog, 2013.'],
  related: ['aarrr', 'hub-hero-hygiene', 'peso-model', 'TOFU, MOFU, BOFU']
};
