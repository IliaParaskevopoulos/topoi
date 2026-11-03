// The full library map. Entries with a slug have a page in content/<slug>.js.
// Plain strings are frameworks still to be drawn.
module.exports = [
  {
    name: 'Customer understanding',
    icon: 'customer',
    blurb: 'Who buys, what they are trying to get done, and what stands in their way.',
    items: [{ slug: 'jobs-to-be-done', was: 'Jobs-to-be-Done' }, 'Outcome-Driven Innovation', 'Forces of Progress',
      { slug: 'value-proposition-canvas' }, 'Empathy Map', '5 Rings of Buying Insight', 'Ideal Customer Profile',
      'Buying committee map', { slug: 'kano-model' }, 'Customer journey map', 'Voice of the Customer',
      'Win/loss analysis', 'Laddering (means-end chain)', 'Sean Ellis PMF test', 'Product-Market Fit Pyramid',
      'Superhuman PMF engine', 'Smallest Viable Audience']
  },
  {
    name: 'Market and competitive strategy',
    icon: 'strategy',
    blurb: 'Where to play, and how strong your position is there.',
    items: [{ slug: 'swot', was: 'SWOT and TOWS' }, 'PESTLE', { slug: 'five-forces' }, 'Porter’s Generic Strategies', { slug: 'ansoff-matrix' },
      { slug: 'bcg-matrix', was: 'BCG Growth-Share Matrix' }, 'GE–McKinsey Nine-Box', 'Three Horizons', 'Blue Ocean Strategy Canvas',
      'Value Disciplines', '7 Powers', 'Playing to Win', 'Strategy Kernel', 'Wardley Mapping',
      'Business Model Canvas', 'Lean Canvas', { slug: 'tam-sam-som', was: 'TAM, SAM, SOM' }, 'STP: segment, target, position',
      'Perceptual map', 'Competitive intelligence cycle']
  },
  {
    name: 'Positioning',
    icon: 'positioning',
    blurb: 'The context that makes your product’s value obvious to the right buyer.',
    items: [{ slug: 'obviously-awesome' }, { slug: 'positioning-statement', was: 'Positioning statement (Moore)' }, 'Positioning (Ries and Trout)',
      'Onlyness statement', 'Category Design', { slug: 'whole-product', was: 'Whole Product' }, 'Five Product Levels',
      { slug: 'crossing-the-chasm' }, 'Diffusion of Innovations']
  },
  {
    name: 'Messaging and storytelling',
    icon: 'messaging',
    blurb: 'Turning positioning into words that sales, web and campaigns can use.',
    items: [{ slug: 'messaging-house' }, 'Message hierarchy', 'Strategic Narrative', 'Sales Pitch (Dunford)',
      'StoryBrand SB7', { slug: 'golden-circle', was: 'Golden Circle' }, 'B2B Elements of Value', { slug: 'fab', was: 'Features, Advantages, Benefits' },
      'Benefit ladder', 'Value proposition formula', 'Five Levels of Awareness', 'SUCCESs (Made to Stick)',
      'AIDA', 'Problem, Agitate, Solve', 'Before, After, Bridge', '4Ps of copywriting', 'Why change, why now, why us']
  },
  {
    name: 'Brand',
    icon: 'brand',
    blurb: 'What the company stands for, and how brand and demand work together.',
    items: [{ slug: 'brand-pyramid', was: 'Brand Pyramid (CBBE)' }, 'Brand Identity Prism', 'Brand Key', 'Brand archetypes', 'Brand architecture',
      'How Brands Grow', '95-5 Rule', 'Brand and activation balance']
  },
  {
    name: 'Pricing and packaging',
    icon: 'pricing',
    blurb: 'What to charge, how to package it, and what buyers will accept.',
    items: [{ slug: 'van-westendorp' }, 'Gabor-Granger', 'Conjoint and MaxDiff', 'Economic Value to the Customer',
      'Value-based pricing', 'Leaders, Fillers, Killers', { slug: 'good-better-best', was: 'Good, Better, Best' }, 'Value metric',
      'Pricing model archetypes', 'Price waterfall', 'Decoy and anchoring']
  },
  {
    name: 'Go-to-market and launch',
    icon: 'launch',
    blurb: 'Getting a product to market: motions, plans and launch mechanics.',
    items: ['GTM canvas', { slug: 'launch-tiers', was: 'Launch tiers' }, 'T-minus launch plan', 'Beachhead market (24 steps)', 'Bowling alley',
      'Marketing mix: 4Ps and 7Ps', '4Cs', 'SAVE', 'GTM motions', 'ABM tiers', 'Bullseye Framework',
      { slug: 'product-lifecycle', was: 'Product lifecycle' }, 'Hype Cycle', 'Pragmatic Framework', 'Working Backwards PR/FAQ', 'RACI and DACI']
  },
  {
    name: 'Sales enablement',
    icon: 'sales',
    blurb: 'Helping sales qualify, sell value and handle objections.',
    items: ['Battlecard', { slug: 'meddic', was: 'MEDDIC and MEDDPICC' }, 'BANT', 'CHAMP', { slug: 'spin-selling', was: 'SPIN Selling' }, 'Challenger Sale',
      'Command of the Message', 'Solution Selling', 'Sandler', 'Value Selling', 'Gartner B2B buying jobs',
      'Feel, Felt, Found', 'LAER', 'Content-to-stage map', 'Kirkpatrick Model']
  },
  {
    name: 'Growth and lifecycle',
    icon: 'growth',
    blurb: 'How customers move from first contact to loyal advocate, and how to measure it.',
    items: [{ slug: 'aarrr' }, { slug: 'flywheel' }, 'TOFU, MOFU, BOFU', { slug: 'see-think-do-care', was: 'See, Think, Do, Care' }, 'Bow-tie model',
      'Demand waterfall', 'Growth loops', 'Customer Value Journey', 'Consumer Decision Journey', 'The Messy Middle',
      { slug: 'hook-model', was: 'Hook Model' }, 'Fogg Behavior Model', 'North Star Metric', 'HEART', 'NPS, CSAT and CES']
  },
  {
    name: 'Content and channels',
    icon: 'content',
    blurb: 'Planning content and choosing where it runs.',
    items: [{ slug: 'hub-hero-hygiene', was: 'Hub, Hero, Hygiene' }, 'Topic clusters', 'They Ask, You Answer', { slug: 'peso-model', was: 'PESO model' }, 'COPE',
      'Content marketing matrix', 'Content atomization']
  },
  {
    name: 'Planning and prioritization',
    icon: 'planning',
    blurb: 'Setting goals, choosing what to do first and measuring the result.',
    items: ['SOSTAC', 'RACE', 'OKRs', 'SMART goals', { slug: 'rice', was: 'RICE and ICE' }, 'MoSCoW', { slug: 'opportunity-solution-tree', was: 'Opportunity Solution Tree' },
      'Build, Measure, Learn', 'Double Diamond', 'Stage-Gate', 'Attribution models']
  }
];
