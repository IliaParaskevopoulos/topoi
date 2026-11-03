// The library map: only practical product marketing tools.
// Left out on purpose: generic management and planning tools, product-development methods and
// pure copywriting formulas. Brand and Content are kept as categories at Ilia's request.
// Entries with a slug have a page in content/; `was` is the older name, so links using it still work.
module.exports = [
  {
    name: 'Customer understanding',
    icon: 'customer',
    blurb: 'Who buys, what they are trying to get done, and what stands in their way.',
    items: [
      { slug: 'jobs-to-be-done', was: 'Jobs-to-be-Done' }, { slug: 'outcome-driven-innovation', was: 'Outcome-Driven Innovation' },
      { slug: 'forces-of-progress', was: 'Forces of Progress' }, { slug: 'value-proposition-canvas' },
      { slug: 'five-rings', was: '5 Rings of Buying Insight' }, { slug: 'ideal-customer-profile', was: 'Ideal Customer Profile' },
      { slug: 'buying-committee-map', was: 'Buying committee map' }, { slug: 'kano-model' },
      { slug: 'customer-journey-map', was: 'Customer journey map' }, { slug: 'voice-of-the-customer', was: 'Voice of the Customer' },
      { slug: 'win-loss-analysis', was: 'Win/loss analysis' }, { slug: 'laddering', was: 'Laddering (means-end chain)' },
      { slug: 'sean-ellis-test', was: 'Sean Ellis PMF test' }, { slug: 'net-promoter-score', was: 'NPS, CSAT and CES' }
    ]
  },
  {
    name: 'Market and competitive analysis',
    icon: 'strategy',
    blurb: 'Where to compete, how attractive the market is, and how you compare.',
    items: [
      { slug: 'swot', was: 'SWOT and TOWS' }, { slug: 'pestle', was: 'PESTLE' }, { slug: 'five-forces' },
      { slug: 'ansoff-matrix' }, { slug: 'bcg-matrix', was: 'BCG Growth-Share Matrix' },
      { slug: 'strategy-canvas', was: 'Blue Ocean Strategy Canvas' }, { slug: 'tam-sam-som', was: 'TAM, SAM, SOM' },
      { slug: 'stp', was: 'STP: segment, target, position' }, { slug: 'perceptual-map', was: 'Perceptual map' },
      { slug: 'competitive-intelligence-cycle', was: 'Competitive intelligence cycle' }
    ]
  },
  {
    name: 'Positioning',
    icon: 'positioning',
    blurb: 'The context that makes your product’s value obvious to the right buyer.',
    items: [
      { slug: 'obviously-awesome' }, { slug: 'positioning-statement', was: 'Positioning statement (Moore)' },
      { slug: 'ries-trout-positioning', was: 'Positioning (Ries and Trout)' }, { slug: 'onlyness-statement', was: 'Onlyness statement' },
      { slug: 'category-design', was: 'Category Design' }, { slug: 'whole-product', was: 'Whole Product' },
      { slug: 'crossing-the-chasm' }
    ]
  },
  {
    name: 'Messaging and storytelling',
    icon: 'messaging',
    blurb: 'Turning positioning into words that sales, web and campaigns can use.',
    items: [
      { slug: 'messaging-house' }, { slug: 'message-hierarchy', was: 'Message hierarchy' },
      { slug: 'strategic-narrative', was: 'Strategic Narrative' }, { slug: 'sales-pitch', was: 'Sales Pitch (Dunford)' },
      { slug: 'storybrand', was: 'StoryBrand SB7' }, { slug: 'b2b-elements-of-value', was: 'B2B Elements of Value' },
      { slug: 'fab', was: 'Features, Advantages, Benefits' }, { slug: 'benefit-ladder', was: 'Benefit ladder' },
      { slug: 'value-proposition-formula', was: 'Value proposition formula' },
      { slug: 'why-change-why-now-why-us', was: 'Why change, why now, why us' }
    ]
  },
  {
    name: 'Brand',
    icon: 'brand',
    blurb: 'What the company stands for, how its products are named, and how brand and demand work together.',
    items: [
      { slug: 'brand-pyramid', was: 'Brand Pyramid (CBBE)' }, { slug: 'brand-identity-prism', was: 'Brand Identity Prism' },
      { slug: 'brand-key', was: 'Brand Key' }, { slug: 'brand-archetypes', was: 'Brand archetypes' },
      { slug: 'brand-architecture', was: 'Brand architecture' }, { slug: 'how-brands-grow', was: 'How Brands Grow' },
      { slug: '95-5-rule', was: '95-5 Rule' }, { slug: 'brand-activation-balance', was: 'Brand and activation balance' }
    ]
  },
  {
    name: 'Pricing and packaging',
    icon: 'pricing',
    blurb: 'What to charge, how to package it, and what buyers will accept.',
    items: [
      { slug: 'van-westendorp' }, { slug: 'gabor-granger', was: 'Gabor-Granger' },
      { slug: 'conjoint-maxdiff', was: 'Conjoint and MaxDiff' }, { slug: 'economic-value-to-customer', was: 'Economic Value to the Customer' },
      { slug: 'value-based-pricing', was: 'Value-based pricing' }, { slug: 'leaders-fillers-killers', was: 'Leaders, Fillers, Killers' },
      { slug: 'good-better-best', was: 'Good, Better, Best' }, { slug: 'value-metric', was: 'Value metric' },
      { slug: 'pricing-models', was: 'Pricing model archetypes' }, { slug: 'price-waterfall', was: 'Price waterfall' }
    ]
  },
  {
    name: 'Go-to-market and launch',
    icon: 'launch',
    blurb: 'Getting a product to market: motions, plans and launch mechanics.',
    items: [
      { slug: 'gtm-canvas', was: 'GTM canvas' }, { slug: 'launch-tiers', was: 'Launch tiers' },
      { slug: 't-minus-launch-plan', was: 'T-minus launch plan' }, { slug: 'beachhead-market', was: 'Beachhead market (24 steps)' },
      { slug: 'bowling-alley', was: 'Bowling alley' }, { slug: 'marketing-mix', was: 'Marketing mix: 4Ps and 7Ps' },
      { slug: 'save-framework', was: 'SAVE' }, { slug: 'gtm-motions', was: 'GTM motions' },
      { slug: 'abm-tiers', was: 'ABM tiers' }, { slug: 'product-lifecycle', was: 'Product lifecycle' },
      { slug: 'pr-faq', was: 'Working Backwards PR/FAQ' }
    ]
  },
  {
    name: 'Sales enablement',
    icon: 'sales',
    blurb: 'Helping sales qualify, sell value and handle objections.',
    items: [
      { slug: 'battlecard', was: 'Battlecard' }, { slug: 'meddic', was: 'MEDDIC and MEDDPICC' },
      { slug: 'bant', was: 'BANT' }, { slug: 'spin-selling', was: 'SPIN Selling' },
      { slug: 'challenger-sale', was: 'Challenger Sale' }, { slug: 'command-of-the-message', was: 'Command of the Message' },
      { slug: 'solution-selling', was: 'Solution Selling' }, { slug: 'value-selling', was: 'Value Selling' },
      { slug: 'gartner-buying-jobs', was: 'Gartner B2B buying jobs' }, { slug: 'laer', was: 'LAER' },
      { slug: 'content-to-stage-map', was: 'Content-to-stage map' }, { slug: 'kirkpatrick-model', was: 'Kirkpatrick Model' }
    ]
  },
  {
    name: 'Adoption and growth',
    icon: 'growth',
    blurb: 'Measuring how customers move from first contact to loyal, growing accounts.',
    items: [
      { slug: 'aarrr' }, { slug: 'flywheel' }, { slug: 'bow-tie', was: 'Bow-tie model' },
      { slug: 'tofu-mofu-bofu', was: 'TOFU, MOFU, BOFU' }
    ]
  },
  {
    name: 'Content and channels',
    icon: 'content',
    blurb: 'Planning content and choosing where it runs.',
    items: [
      { slug: 'hub-hero-hygiene', was: 'Hub, Hero, Hygiene' }, { slug: 'topic-clusters', was: 'Topic clusters' },
      { slug: 'they-ask-you-answer', was: 'They Ask, You Answer' }, { slug: 'peso-model', was: 'PESO model' },
      { slug: 'cope', was: 'COPE' }, { slug: 'content-marketing-matrix', was: 'Content marketing matrix' },
      { slug: 'content-atomization', was: 'Content atomization' }
    ]
  }
];
