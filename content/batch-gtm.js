// Go-to-market and launch: new pages.
module.exports = [
{
  slug: 'gtm-canvas', name: 'Go-to-Market Canvas', company: 'lumora',
  origin: 'Common go-to-market planning practice; no single author',
  oneLiner: 'One page that answers the core go-to-market questions: who, what problem, what value, what price, which channels, how you will measure.',
  question: 'Do we have a complete, consistent plan for taking this product to market?',
  glance: { 'Use it for': 'Planning a launch or a new market entry', 'You need': 'Positioning, pricing and channel options', 'You get': 'A one-page plan everyone can check against', 'Time': 'One or two workshops' },
  steps: [
    { title: 'Target segment', text: 'Who you will sell to first, specific enough to build a list.', example: 'Paediatric practices in German-speaking Switzerland.' },
    { title: 'Problem', text: 'The problem they feel most, in their words.', example: 'Parents push for antibiotics before results are back.' },
    { title: 'Value proposition', text: 'Why your product is the best answer for this segment.', example: 'A result in ten minutes, during the consultation.' },
    { title: 'Pricing', text: 'The model and level, and how it compares with alternatives.', example: 'Device rental plus CHF 12 per test.' },
    { title: 'Channels', text: 'How buyers will hear about you and buy.', example: 'Field sales, the paediatric association congress, and two distributors.' },
    { title: 'Success metrics', text: 'The few numbers that show it is working.', example: '60 practices in 12 months; 300 tests per practice per year.' }
  ],
  diagram: {
    type: 'chain', viewBox: '0 0 800 490',
    alt: 'Go-to-market canvas: target segment, problem, value proposition, pricing, channels and success metrics.',
    nodes: [
      { step: 1, title: 'Target segment', text: 'Who first.', ex: 'Paediatric practices.' },
      { step: 2, title: 'Problem', text: 'What they feel most.', ex: 'Pressure for antibiotics.' },
      { step: 3, title: 'Value proposition', text: 'Why you are best for them.', ex: 'Result in ten minutes.' },
      { step: 4, title: 'Pricing', text: 'Model and level.', ex: 'Rental + CHF 12 per test.' },
      { step: 5, title: 'Channels', text: 'How they hear and buy.', ex: 'Field sales, congress, distributors.' },
      { step: 6, title: 'Success metrics', text: 'Numbers that show it works.', ex: '60 practices in 12 months.' }
    ]
  },
  whenToUse: ['Before a launch or a new market entry.', 'Aligning product, marketing and sales on one plan.', 'Reviewing why a launch is underperforming.'],
  whenNot: ['As a substitute for the detailed launch plan. It is the summary on top.'],
  howTo: ['Fill each box in one or two sentences.', 'Check the boxes agree with each other.', 'Review it with sales and product leadership.', 'Revisit it after the first 90 days in market.'],
  pitfalls: ['A target segment too broad to act on.', 'Channels the target buyers do not use.', 'Metrics that measure activity, not results.'],
  template: `GO-TO-MARKET CANVAS — [Product], [market]

Target segment:
Problem:
Value proposition:
Pricing:
Channels:
Success metrics:`,
  sources: ['A common go-to-market planning practice; there is no single original source.'],
  related: ['launch-tiers', 't-minus-launch-plan', 'beachhead-market', 'gtm-motions']
},
{
  slug: 't-minus-launch-plan', name: 'T-minus Launch Plan', company: 'tessera',
  origin: 'Common launch-management practice; no single author',
  oneLiner: 'Count back from launch day, with phases and milestones, so everything is ready on time.',
  question: 'What must be done, by when, for the launch to land?',
  glance: { 'Use it for': 'Planning and running a launch', 'You need': 'A launch date and the launch tier', 'You get': 'A timeline with phases, milestones and owners', 'Time': 'One planning session, then weekly check-ins' },
  steps: [
    { title: 'Prepare', text: 'Around three months out: positioning, messaging, pricing and the launch plan itself.', example: 'Tessera Predict: positioning and pricing agreed.' },
    { title: 'Build', text: 'Two months out: create the assets — website, demo, sales deck, case study.', example: 'Demo, website page, pilot case study.' },
    { title: 'Enable', text: 'One month out: train sales, partners and support, and brief press and analysts.', example: 'Sales training, partner briefing, support guides.' },
    { title: 'Launch and learn', text: 'Launch day and the month after: campaigns run, results are tracked, and feedback is fed back.', example: 'Launch event, campaign, daily pipeline review.' },
    { title: 'Launch day', text: 'Everything goes live together.', example: 'Event, press release, email to all customers.' },
    { title: 'Review', text: 'About a month after launch: compare results with goals and decide what to adjust.', example: '40 demo requests against a goal of 50; the campaign shifts to plant managers.' }
  ],
  diagram: {
    type: 'chart', viewBox: '0 0 800 450', left: 70,
    alt: 'T-minus launch plan: prepare, build, enable, and launch and learn phases on a timeline, with launch day and the review marked.',
    axesStep: 1,
    x: { domain: [-90, 30], title: 'Days to launch', ticks: [-90, -60, -30, 0, 30].map(v => ({ v, gen: v === 0 ? 'T' : (v > 0 ? 'T+' + v : 'T' + v), ex: v === 0 ? 'T' : (v > 0 ? 'T+' + v : 'T' + v) })) },
    y: { domain: [0, 10], title: '' },
    bands: [
      { step: 1, x0: -90, x1: -60, label: 'Prepare', ex: 'Positioning, pricing' },
      { step: 2, x0: -60, x1: -30, label: 'Build', ex: 'Demo, web, case' },
      { step: 3, x0: -30, x1: 0, label: 'Enable', ex: 'Sales, partners' },
      { step: 4, x0: 0, x1: 30, label: 'Launch, learn', ex: 'Campaign, tracking' }
    ],
    markers: [
      { step: 5, x: 0, y: 5, label: 'Launch day', ex: 'Event and press', dy: -16 },
      { step: 6, x: 30, y: 2.5, label: 'Review', ex: '40 of 50 demos', anchor: 'end', dx: -12, dy: 5 }
    ]
  },
  whenToUse: ['Any Tier 1 or Tier 2 launch.', 'Launches that keep slipping or arrive half-ready.', 'Coordinating many teams on one date.'],
  whenNot: ['Small Tier 3 releases, where a checklist is enough.'],
  howTo: ['Fix the launch date and tier.', 'List deliverables per phase and assign owners.', 'Hold a weekly check-in against the plan.', 'Run a go/no-go meeting a week before launch.', 'Review results about a month after launch.'],
  pitfalls: ['Starting enablement too late.', 'No review after launch.', 'Moving the date without moving the plan.'],
  template: `T-MINUS PLAN — [Launch], launch date:

T−90 Prepare:   deliverables / owners
T−60 Build:     deliverables / owners
T−30 Enable:    deliverables / owners
T−7  Go/no-go:
T    Launch:
T+30 Review:    goals vs results`,
  sources: ['A common launch-management practice; there is no single original source.'],
  related: ['launch-tiers', 'gtm-canvas', 'pr-faq', 'content-to-stage-map']
},
{
  slug: 'beachhead-market', name: 'Beachhead Market', company: 'kontor',
  origin: 'Bill Aulet, Disciplined Entrepreneurship, 2013',
  oneLiner: 'Choose one small market to win completely first, then use it as a base to expand.',
  question: 'Which single market should we win first?',
  glance: { 'Use it for': 'Focusing a new product or start-up', 'You need': 'A list of possible market segments', 'You get': 'One beachhead market and the reasons for it', 'Time': 'Two to four weeks with customer interviews' },
  steps: [
    { title: 'List possible markets', text: 'Brainstorm all the segments that could use the product.', example: 'Small businesses in Switzerland: construction, IT, cleaning, events and more.' },
    { title: 'Shortlist', text: 'Score each on criteria: money to spend, easy to reach, a strong reason to buy, the whole product ready, weak competition, links to other markets.', example: 'Construction subcontractors, IT freelancers and cleaning firms.' },
    { title: 'Choose the beachhead', text: 'Pick one market small enough to dominate and close-knit enough for word of mouth.', example: 'Construction subcontractors: paid in 60–90 days, weekly payroll, tight networks.' },
    { title: 'Win reference customers', text: 'Win and delight the first customers, so they bring the rest of the market.', example: '30 subcontractors in Zurich in the first six months.' }
  ],
  diagram: {
    type: 'funnel', viewBox: '0 0 800 340', outlineStep: 1,
    alt: 'Beachhead market: from all possible markets, to a shortlist, to one beachhead, to the first reference customers.',
    stages: [
      { step: 1, title: 'All markets', metric: 'Every segment that could buy', ex: 'All Swiss small businesses' },
      { step: 2, title: 'Shortlist', metric: 'Scored on criteria', ex: 'Construction, IT, cleaning' },
      { step: 3, title: 'Beachhead', metric: 'One market to dominate', ex: 'Construction subcontractors' },
      { step: 4, title: 'References', metric: 'First customers who spread the word', ex: '30 in Zurich, 6 months' }
    ]
  },
  whenToUse: ['A new product with many possible markets.', 'A start-up spreading itself too thin.', 'Entering a new country.'],
  whenNot: ['Mature products that already lead several markets.'],
  howTo: ['List markets broadly, then interview a few customers in each.', 'Score markets on the criteria.', 'Choose one, even if it feels small.', 'Define what “winning” the beachhead means, in numbers.'],
  pitfalls: ['Choosing the biggest market instead of the most winnable.', 'Picking two beachheads “to be safe”.', 'A beachhead with no links to follow-on markets.'],
  template: `BEACHHEAD — [Product]

Possible markets and scores:
Chosen beachhead and why:
What winning means (numbers):
Follow-on markets:`,
  sources: ['Bill Aulet, Disciplined Entrepreneurship, Wiley, 2013.'],
  related: ['bowling-alley', 'crossing-the-chasm', 'ideal-customer-profile', 'gtm-canvas']
},
{
  slug: 'bowling-alley', name: 'Bowling Alley', company: 'lumora',
  origin: 'Geoffrey Moore, Inside the Tornado, 1995',
  oneLiner: 'After the first segment, expand to neighbouring segments one by one, like knocking down bowling pins.',
  question: 'Which segment should we move into next, using what we won in the last?',
  glance: { 'Use it for': 'Planning expansion after the first segment', 'You need': 'A won beachhead and knowledge of adjacent segments', 'You get': 'An ordered expansion path', 'Time': 'One planning session, reviewed yearly' },
  steps: [
    { title: 'Head pin', text: 'The first segment you win, which knocks over the others.', example: 'Paediatric practices.' },
    { title: 'Second row', text: 'Segments next to the head pin: same use case with new customers, or same customers with a new use case.', example: 'General practices (same use case) and urgent-care centres (similar need).' },
    { title: 'Third row', text: 'Segments reached through the second row’s references and partners.', example: 'Pharmacies, care homes and occupational health services.' },
    { title: 'Choose the next pin', text: 'Pick the next segment where your references and whole product carry over best.', example: 'Lumora picks general practices: the same reimbursement code and the same associations.' }
  ],
  diagram: {
    type: 'tree', viewBox: '0 0 800 360',
    alt: 'Bowling alley: a head pin segment, two segments in the second row, and three in the third row.',
    nodes: [
      { id: 'h', step: 1, x: 300, y: 12, w: 200, h: 72, label: 'Head pin', text: 'First segment won', ex: 'Paediatric practices' },
      { id: 'a', parent: 'h', step: 2, x: 160, y: 140, w: 200, h: 72, label: 'Second row', text: 'Same use, new buyers', ex: 'General practices' },
      { id: 'b', parent: 'h', step: 2, x: 440, y: 140, w: 200, h: 72, label: 'Second row', text: 'Similar need', ex: 'Urgent-care centres' },
      { id: 'c', parent: 'a', step: 3, x: 30, y: 270, w: 200, h: 72, label: 'Third row', text: 'Reached by references', ex: 'Pharmacies' },
      { id: 'd', parent: 'a', step: 3, x: 300, y: 270, w: 200, h: 72, label: 'Third row', text: 'Reached by partners', ex: 'Care homes' },
      { id: 'e', parent: 'b', step: 3, x: 570, y: 270, w: 200, h: 72, label: 'Third row', text: 'New use case', ex: 'Occupational health' }
    ],
    target: { id: 'a', step: 4, label: 'Next', ex: 'Next pin' }
  },
  whenToUse: ['You have won a first segment and need to grow.', 'Choosing between several expansion options.', 'Explaining the growth path to investors or leadership.'],
  whenNot: ['Before you have truly won the first segment.'],
  howTo: ['List segments adjacent to your current one.', 'For each, note what carries over: references, product, channels.', 'Order them by how much carries over and how big they are.', 'Move one pin at a time.'],
  pitfalls: ['Jumping to a big but unrelated segment.', 'Expanding before the head pin is secure.', 'Ignoring what new segments need in the whole product.'],
  template: `BOWLING ALLEY — [Product]

Head pin (won):
Second-row segments and what carries over:
Third-row segments:
Next pin and why:`,
  sources: ['Geoffrey A. Moore, Inside the Tornado, HarperBusiness, 1995.'],
  related: ['beachhead-market', 'crossing-the-chasm', 'whole-product', 'ansoff-matrix']
},
{
  slug: 'marketing-mix', name: 'Marketing Mix: 4Ps and 7Ps', company: 'orto',
  origin: 'E. Jerome McCarthy, 1960 (4Ps); Bernard Booms and Mary Jo Bitner, 1981 (7Ps)',
  oneLiner: 'The decisions that bring a product to market: product, price, place and promotion, plus three more for services.',
  question: 'Have we made a deliberate, consistent decision on every part of the offer?',
  glance: { 'Use it for': 'Checking a go-to-market plan is complete and consistent', 'You need': 'A defined target segment and positioning', 'You get': 'A decision for each element, aligned to the positioning', 'Time': 'One workshop' },
  steps: [
    { title: 'Product', text: 'What you offer: features, quality, range, packaging.', example: 'A high-protein range of five meals, 400 g each.' },
    { title: 'Price', text: 'Price level, discounts and terms.', example: 'CHF 7.90, above own-label, below premium brands.' },
    { title: 'Place', text: 'Where and how customers can buy.', example: 'Two supermarket chains, plus railway-station shops.' },
    { title: 'Promotion', text: 'How customers learn about it: advertising, PR, in-store, digital.', example: 'In-store tastings and fitness-app partnerships.' },
    { title: 'People', text: 'For services: the people who deliver the experience.', example: 'Trained promoters at tastings.' },
    { title: 'Process', text: 'For services: how the service is delivered.', example: 'Fresh delivery to stores three times a week.' },
    { title: 'Physical evidence', text: 'For services: what customers see that signals quality.', example: 'Clear protein labels and a recyclable tray.' },
    { title: 'Check the fit', text: 'Every P should support the same positioning and target segment.', example: 'Station shops fit busy, fitness-focused singles; discount chains would not.' }
  ],
  diagram: {
    type: 'acronym', viewBox: '0 0 800 500',
    alt: 'Marketing mix: product, price, place and promotion, plus people, process and physical evidence for services.',
    items: [
      { step: 1, letter: 'P', title: 'Product', text: 'Features, quality, range, packaging', ex: 'Five high-protein meals, 400 g', status: 'Original 4', statusEx: 'Fits' },
      { step: 2, letter: 'P', title: 'Price', text: 'Level, discounts, terms', ex: 'CHF 7.90', status: 'Original 4', statusEx: 'Fits' },
      { step: 3, letter: 'P', title: 'Place', text: 'Where and how to buy', ex: 'Two chains plus station shops', status: 'Original 4', statusEx: 'Fits' },
      { step: 4, letter: 'P', title: 'Promotion', text: 'How buyers learn about it', ex: 'Tastings, fitness-app partners', status: 'Original 4', statusEx: 'Fits' },
      { step: 5, letter: 'P', title: 'People', text: 'Who delivers the experience', ex: 'Trained promoters', status: 'Services', statusEx: 'Fits' },
      { step: 6, letter: 'P', title: 'Process', text: 'How it is delivered', ex: 'Fresh delivery three times a week', status: 'Services', statusEx: 'Fits' },
      { step: 7, letter: 'P', title: 'Physical evidence', text: 'What signals quality', ex: 'Protein labels, recyclable tray', status: 'Services', statusEx: 'Fits' }
    ],
    score: { step: 8 }
  },
  whenToUse: ['Checking that a launch plan covers every decision.', 'Explaining the plan to people new to marketing.', 'Reviewing whether each element supports the positioning.'],
  whenNot: ['Complex B2B solutions, where SAVE often fits better.'],
  howTo: ['Start from the target segment and positioning.', 'Make a decision for each P, in one or two lines.', 'Check every P against the positioning.', 'Fix the elements that do not fit.'],
  pitfalls: ['Treating the Ps as separate team plans.', 'A price or place that contradicts the positioning.', 'Leaving out the service Ps when service is part of the offer.'],
  template: `MARKETING MIX — [Product], [segment]

Product:
Price:
Place:
Promotion:
People:
Process:
Physical evidence:

Elements that do not fit the positioning:`,
  sources: ['E. Jerome McCarthy, Basic Marketing, Irwin, 1960.', 'Bernard H. Booms and Mary Jo Bitner, “Marketing Strategies and Organization Structures for Service Firms”, 1981.'],
  related: ['save-framework', 'gtm-canvas', 'stp', 'positioning-statement']
},
{
  slug: 'save-framework', name: 'SAVE', company: 'halden',
  origin: 'Richard Ettenson, Eduardo Conrado and Jonathan Knowles, 2013',
  oneLiner: 'A B2B update to the 4Ps: solution instead of product, access instead of place, value instead of price, education instead of promotion.',
  question: 'Are we marketing a solution to buyers’ problems, or just a product?',
  glance: { 'Use it for': 'B2B go-to-market plans and messaging', 'You need': 'A clear view of the customer problem', 'You get': 'A plan built around the buyer’s needs', 'Time': 'One workshop' },
  steps: [
    { title: 'Solution', text: 'Instead of product: define the offer by the problem it solves.', example: 'Fewer rejected solar-glass batches, not just “high-purity sand”.' },
    { title: 'Access', text: 'Instead of place: make it easy to buy and get help across the journey.', example: 'Online certificate portal, a technical hotline and fixed delivery slots.' },
    { title: 'Value', text: 'Instead of price: show the value relative to the price.', example: 'Cost per good tonne of glass, not price per tonne of sand.' },
    { title: 'Education', text: 'Instead of promotion: give useful information at each stage of the decision.', example: 'An annual purity benchmark and furnace-yield guides.' },
    { title: 'Check the shift', text: 'For each element, check the plan describes the buyer’s side, not yours.', example: 'Halden rewrites its sales deck from product specifications to yield outcomes.' }
  ],
  diagram: {
    type: 'acronym', viewBox: '0 0 800 300',
    alt: 'SAVE: solution, access, value and education, each replacing one of the 4Ps.',
    items: [
      { step: 1, letter: 'S', title: 'Solution', text: 'The problem it solves', ex: 'Fewer rejected solar-glass batches', status: 'Not product', statusEx: 'Rewritten' },
      { step: 2, letter: 'A', title: 'Access', text: 'Easy to buy and get help', ex: 'Certificate portal, hotline, fixed slots', status: 'Not place', statusEx: 'Rewritten' },
      { step: 3, letter: 'V', title: 'Value', text: 'Value relative to price', ex: 'Cost per good tonne of glass', status: 'Not price', statusEx: 'Rewritten' },
      { step: 4, letter: 'E', title: 'Education', text: 'Useful information at each stage', ex: 'Purity benchmark, yield guides', status: 'Not promotion', statusEx: 'Rewritten' }
    ],
    score: { step: 5 }
  },
  whenToUse: ['B2B products sold on outcomes rather than specifications.', 'Sales materials that read like data sheets.', 'Planning content for long buying journeys.'],
  whenNot: ['Simple consumer products bought on impulse.'],
  howTo: ['Write the customer problem first.', 'Rewrite each P from the buyer’s side, using SAVE.', 'Check messaging and sales materials against the four elements.', 'Build education content for each stage of the decision.'],
  pitfalls: ['Renaming the 4Ps without changing anything.', 'Value claims with no numbers.', 'Education that is really advertising.'],
  template: `SAVE — [Product], [segment]

Solution (problem solved):
Access (how buyers get it and get help):
Value (value relative to price):
Education (what buyers learn, at which stage):`,
  sources: ['Richard Ettenson, Eduardo Conrado and Jonathan Knowles, “Rethinking the 4 P’s”, Harvard Business Review, 2013.'],
  related: ['marketing-mix', 'economic-value-to-customer', 'content-to-stage-map', 'gtm-canvas']
},
{
  slug: 'gtm-motions', name: 'Go-to-Market Motions', company: 'tessera',
  origin: 'Common software go-to-market practice; no single author',
  oneLiner: 'Choose how customers first buy: through the product itself, through salespeople, or a mix, depending on deal size.',
  question: 'Should customers buy through the product, through sales, or both?',
  glance: { 'Use it for': 'Choosing or mixing sales and marketing motions', 'You need': 'Deal sizes, sales cycle data and product usage data', 'You get': 'A motion per segment, with the marketing that supports it', 'Time': 'A leadership workshop' },
  steps: [
    { title: 'Set the grid', text: 'Left to right: deal size. Bottom to top: who leads the first sale, the sales team or the product.', example: 'Tessera maps its customers by plant size and how they first bought.' },
    { title: 'Product-led', text: 'Small deals where buyers try and buy on their own.', example: 'Single-line workshops trying the free plan.' },
    { title: 'Product-led sales', text: 'Larger deals that start with product use, then sales steps in using usage signals.', example: 'Plants that start a pilot on one line, then roll out to the site.' },
    { title: 'Inside sales', text: 'Smaller deals that still need a conversation, often by phone or video.', example: 'Plants under 100 staff with one maintenance manager.' },
    { title: 'Field and enterprise sales', text: 'Large, complex deals with account teams.', example: 'Groups with five or more plants.' },
    { title: 'Choose per segment', text: 'Most companies mix motions; the key is choosing one per segment and supporting it with the right marketing.', example: 'Tessera’s main motion is product-led sales: pilots first, then a site licence.' }
  ],
  diagram: {
    type: 'matrix', viewBox: '0 0 800 500',
    alt: 'Go-to-market motions by deal size and by who leads the first sale: product-led, product-led sales, inside sales and field sales.',
    axesStep: 1,
    x: { title: 'Deal size', low: 'Small', high: 'Large' },
    y: { title: 'First sale led by', low: 'Sales team', high: 'Product' },
    quadrants: [
      { pos: 'tl', step: 2, title: 'Product-led', text: 'Try and buy alone.', ex: 'Free plan for single lines.', risk: 'Self-serve', riskEx: 'Minor' },
      { pos: 'tr', step: 3, title: 'Product-led sales', text: 'Usage first, then sales.', ex: 'One-line pilot, then site rollout.', risk: 'Usage signals', riskEx: 'Main motion' },
      { pos: 'bl', step: 4, title: 'Inside sales', text: 'Calls and demos.', ex: 'Plants under 100 staff.', risk: 'Demos', riskEx: 'Supporting' },
      { pos: 'br', step: 5, title: 'Field sales', text: 'Account teams, long cycles.', ex: 'Groups with 5+ plants.', risk: 'Account plans', riskEx: 'Supporting' }
    ],
    risk: { step: 6, arrow: false }
  },
  whenToUse: ['Customer acquisition costs are too high for deal sizes.', 'Adding a free plan or a sales team.', 'Different segments buy in very different ways.'],
  whenNot: ['Before you know how your best customers actually bought.'],
  howTo: ['Map recent deals by size and how they started.', 'Find which motion wins each segment most efficiently.', 'Choose a primary motion and supporting ones.', 'Align marketing: self-serve content, usage alerts, or account-based programmes.'],
  pitfalls: ['Adding a free plan without a path to paid.', 'Expensive field sales on small deals.', 'Running every motion at once with no focus.'],
  template: `GO-TO-MARKET MOTIONS — [Company]

Segment          Deal size     Motion          Marketing support
1.
2.

Primary motion:
What marketing changes:`,
  sources: ['A common software go-to-market practice; there is no single original source.'],
  related: ['gtm-canvas', 'abm-tiers', 'bow-tie', 'aarrr']
},
{
  slug: 'abm-tiers', name: 'Account-Based Marketing Tiers', company: 'halden',
  origin: 'ITSMA, early 2000s',
  oneLiner: 'Match marketing effort to account value: broad programmes for many, tailored ones for a few, and fully custom work for the most important.',
  question: 'How much tailored marketing does each target account deserve?',
  glance: { 'Use it for': 'Planning marketing for named target accounts', 'You need': 'A target account list with value estimates', 'You get': 'Three tiers, each with its own programme', 'Time': 'Two weeks to set up' },
  steps: [
    { title: 'One-to-many', text: 'Many accounts with lighter tailoring: targeted ads and content by industry.', example: '200 glass and ceramics plants: targeted ads and industry content.' },
    { title: 'One-to-few', text: 'Clusters of similar accounts with shared needs: tailored events and content per cluster.', example: '20 solar-glass makers: a purity workshop and tailored case studies.' },
    { title: 'One-to-one', text: 'A handful of strategic accounts, each with its own plan, research and executive contact.', example: 'Five strategic accounts: account plans, custom yield analysis and executive meetings.' },
    { title: 'Match effort to value', text: 'Set the tiers by account value and potential, and review them every quarter.', example: 'Accounts move up a tier when they start a lab qualification.' }
  ],
  diagram: {
    type: 'tiers', viewBox: '0 0 800 450',
    alt: 'Account-based marketing tiers: one-to-many, one-to-few and one-to-one, rising in tailoring and effort.',
    tiers: [
      { step: 1, height: 230, title: 'One-to-many', sub: 'Many accounts', subEx: '200 plants', items: '• Targeted ads\n• Industry content', itemsEx: '• Ads by industry\n• Glass content' },
      { step: 2, height: 300, title: 'One-to-few', sub: 'Clusters', subEx: '20 solar-glass makers', items: '• Tailored events\n• Cluster content', itemsEx: '• Purity workshop\n• Tailored cases' },
      { step: 3, height: 370, title: 'One-to-one', sub: 'Strategic accounts', subEx: '5 accounts', items: '• Account plans\n• Custom research\n• Executive contact', itemsEx: '• Account plans\n• Yield analysis\n• Executive meetings' }
    ],
    note: { step: 4, at: 2, label: 'Effort follows account value', ex: 'Move up on lab qualification' }
  },
  whenToUse: ['B2B with a limited number of high-value accounts.', 'Marketing and sales disagree about which accounts matter.', 'Large deals that need many contacts at once.'],
  whenNot: ['High-volume, low-value sales.'],
  howTo: ['Build the account list from your ICP.', 'Score accounts by value and readiness.', 'Assign tiers and define the programme for each.', 'Plan jointly with sales and review quarterly.'],
  pitfalls: ['Too many one-to-one accounts to serve properly.', 'ABM run by marketing alone.', 'Measuring leads instead of account progress.'],
  template: `ABM TIERS — [Company], [period]

Tier            Accounts     Programme        Owner     Measure
One-to-one
One-to-few
One-to-many

Rules for moving accounts between tiers:`,
  sources: ['ITSMA (Information Technology Services Marketing Association) developed and named account-based marketing in the early 2000s.'],
  related: ['ideal-customer-profile', 'buying-committee-map', 'gtm-motions', 'meddic']
},
{
  slug: 'pr-faq', name: 'Working Backwards PR/FAQ', company: 'nordhaus',
  origin: 'Amazon; described by Colin Bryar and Bill Carr, 2021',
  oneLiner: 'Write the launch press release and FAQ before building anything, to test whether the idea is worth doing.',
  question: 'If we launched this, would the announcement excite customers?',
  glance: { 'Use it for': 'Testing and shaping new product ideas', 'You need': 'A product idea and a clear target customer', 'You get': 'A short document that shows whether the idea holds up', 'Time': 'A week of writing and review' },
  steps: [
    { title: 'Headline', text: 'Name the product and the main customer benefit, in one line.', example: '“Nordhaus launches Room Planner: furnish a room in a weekend.”' },
    { title: 'Subheading', text: 'Who it is for and the benefit, in one sentence.', example: 'For people moving home who want rooms finished fast, without mistakes.' },
    { title: 'Problem', text: 'The customer problem today, in plain words.', example: 'Moving in means weeks of shopping, measuring and returns.' },
    { title: 'Solution', text: 'How the product solves it, and why it is better.', example: 'Plan with a designer online, then one delivery with assembly.' },
    { title: 'Quote and how to start', text: 'A customer quote and how to get started.', example: '“Our flat was done in four days.” Book at nordhaus.example.' },
    { title: 'FAQs', text: 'Answer the hard questions customers and the business would ask.', example: 'What does it cost? What if I change my mind? How do we staff it?' }
  ],
  diagram: {
    type: 'chain', viewBox: '0 0 800 490',
    alt: 'PR/FAQ: headline, subheading, problem, solution, quote and how to start, and FAQs.',
    nodes: [
      { step: 1, title: 'Headline', text: 'Product and benefit.', ex: 'Room Planner: a room in a weekend.' },
      { step: 2, title: 'Subheading', text: 'Who and why, in one line.', ex: 'For people moving home.' },
      { step: 3, title: 'Problem', text: 'The pain today.', ex: 'Weeks of shopping and returns.' },
      { step: 4, title: 'Solution', text: 'How it solves it.', ex: 'Plan online, one delivery.' },
      { step: 5, title: 'Quote and start', text: 'Customer voice, call to action.', ex: '“Done in four days.”' },
      { step: 6, title: 'FAQs', text: 'The hard questions.', ex: 'Cost, changes, staffing.' }
    ]
  },
  whenToUse: ['Deciding whether to build a new product or feature.', 'Aligning product, marketing and leadership early.', 'Writing the launch story before development starts.'],
  whenNot: ['Small improvements that do not need a launch story.'],
  howTo: ['Write the press release in plain language, one page.', 'Write customer and internal FAQs.', 'Review it with leadership and rewrite until the benefit is clear.', 'Use it as the brief for product and launch.'],
  pitfalls: ['Writing it after the product is built.', 'Jargon in the press release.', 'Skipping the hard internal FAQs.'],
  template: `PR/FAQ — [Product]

Headline:
Subheading:
Problem:
Solution:
Customer quote:
How to get started:

Customer FAQs:
Internal FAQs:`,
  sources: ['Colin Bryar and Bill Carr, Working Backwards, St. Martin’s Press, 2021.'],
  related: ['t-minus-launch-plan', 'launch-tiers', 'value-proposition-formula', 'gtm-canvas']
}
];
