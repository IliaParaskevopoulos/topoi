// Market and competitive analysis, and positioning: new pages.
module.exports = [
{
  slug: 'pestle', name: 'PESTLE', company: 'halden',
  origin: 'Francis Aguilar, 1967 (as ETPS); later extended to PESTLE',
  oneLiner: 'Scan six kinds of outside change that could open or close opportunities for your product.',
  question: 'Which outside forces will change our market in the next few years?',
  glance: { 'Use it for': 'Market entry, annual planning and spotting long-term shifts', 'You need': 'Desk research and input from people close to the market', 'You get': 'A short list of outside changes rated by impact', 'Time': 'Two days of research, one workshop' },
  steps: [
    { title: 'Political', text: 'Government policy, trade rules, subsidies and political stability.', example: 'EU programmes to build solar manufacturing in Europe.' },
    { title: 'Economic', text: 'Growth, inflation, interest rates, exchange rates and input costs.', example: 'Energy prices drive quarrying and drying costs.' },
    { title: 'Social', text: 'Demographics, attitudes, skills and ways of working.', example: 'Fewer young people training as quarry technicians.' },
    { title: 'Technological', text: 'New technologies that change products, processes or buying.', example: 'Thinner solar glass needs even purer sand.' },
    { title: 'Legal', text: 'Laws and regulation that affect the product, sales or operations.', example: 'Stricter extraction permits and land-restoration rules.' },
    { title: 'Environmental', text: 'Climate, resources and environmental rules and expectations.', example: 'Limits on water use and dust at quarries.' },
    { title: 'Rate the impact', text: 'Rate each factor by impact and likelihood, and keep only the few that change your plans.', example: 'Halden plans around three: solar demand, energy costs and purity requirements.' }
  ],
  diagram: {
    type: 'acronym', viewBox: '0 0 800 430',
    alt: 'PESTLE checklist: political, economic, social, technological, legal and environmental factors, each rated by impact.',
    items: [
      { step: 1, letter: 'P', title: 'Political', text: 'Policy, trade, subsidies', ex: 'EU support for European solar manufacturing', status: 'Impact?', statusEx: 'High' },
      { step: 2, letter: 'E', title: 'Economic', text: 'Growth, inflation, input costs', ex: 'Energy prices drive quarrying costs', status: 'Impact?', statusEx: 'High' },
      { step: 3, letter: 'S', title: 'Social', text: 'Demographics, skills, attitudes', ex: 'Fewer trainee quarry technicians', status: 'Impact?', statusEx: 'Medium' },
      { step: 4, letter: 'T', title: 'Technological', text: 'New technologies', ex: 'Thinner solar glass needs purer sand', status: 'Impact?', statusEx: 'High' },
      { step: 5, letter: 'L', title: 'Legal', text: 'Laws and regulation', ex: 'Stricter extraction permits', status: 'Impact?', statusEx: 'Medium' },
      { step: 6, letter: 'E', title: 'Environmental', text: 'Climate, resources, rules', ex: 'Water and dust limits at quarries', status: 'Impact?', statusEx: 'Medium' }
    ],
    score: { step: 7 }
  },
  whenToUse: ['Entering a new country or industry.', 'Annual planning, to check that outside changes are covered.', 'Explaining to leadership why a market will grow or shrink.'],
  whenNot: ['Short-term campaign planning, where these forces barely move.'],
  howTo: ['Agree the market and time horizon, usually three to five years.', 'Research each factor and note the evidence.', 'Rate impact and likelihood for each one.', 'Keep the top three to five and turn them into opportunities or risks in your plan.'],
  pitfalls: ['Long lists of general trends with no link to your product.', 'No evidence behind the points.', 'Doing it once and never updating it.'],
  template: `PESTLE — [Market], [horizon]

Factor          Change          Evidence          Impact    Likelihood
Political
Economic
Social
Technological
Legal
Environmental

Top factors for our plan:`,
  sources: ['Francis J. Aguilar, Scanning the Business Environment, Macmillan, 1967.'],
  related: ['swot', 'five-forces', 'tam-sam-som', 'competitive-intelligence-cycle']
},
{
  slug: 'strategy-canvas', name: 'Strategy Canvas', company: 'nordhaus',
  origin: 'W. Chan Kim and Renée Mauborgne, Blue Ocean Strategy, 2005',
  oneLiner: 'Plot how you and your competitors invest across the factors buyers care about, then reshape your curve to stand apart.',
  question: 'Where do we look the same as competitors, and where could we break away?',
  glance: { 'Use it for': 'Differentiation and finding uncontested space', 'You need': 'The factors the industry competes on, and buyer input', 'You get': 'A visual comparison and a plan to eliminate, reduce, raise and create', 'Time': 'A workshop, plus buyer interviews' },
  steps: [
    { title: 'List the factors', text: 'Left to right: the factors the industry competes on. Bottom to top: how much each player offers.', example: 'Price level, range, design advice, delivery speed, assembly, store experience.' },
    { title: 'Plot competitor one', text: 'Draw the value curve of a typical competitor group.', example: 'Discount chains: low price and wide range, little service.' },
    { title: 'Plot competitor two', text: 'Draw another group. Similar curves show where the industry converges.', example: 'Design stores: high price, beautiful stores, little help with delivery.' },
    { title: 'Plot your curve', text: 'Draw your own offer. A distinct shape is a sign of real differentiation.', example: 'Nordhaus: mid price, strong advice, fast delivery and assembly.' },
    { title: 'Eliminate, reduce, raise, create', text: 'Decide what to drop, cut, increase or add, so your curve stands apart where buyers care.', example: 'Reduce range; raise design advice; create free assembly for members.' }
  ],
  diagram: {
    type: 'chart', viewBox: '0 0 800 450', left: 90, right: 640,
    alt: 'Strategy canvas: value curves for discount chains, design stores and Nordhaus across six factors, with changes marked.',
    axesStep: 1,
    x: { domain: [-0.3, 5.3], title: 'Factors buyers compare', ticks: ['Price level', 'Range', 'Advice', 'Delivery', 'Assembly', 'Stores'].map((t, v) => ({ v, gen: t, ex: t })) },
    y: { domain: [0, 10], title: 'Offering level', low: 'Low', high: 'High' },
    curves: [
      { step: 2, points: [[0, 2], [1, 8.5], [2, 2], [3, 4], [4, 2], [5, 3]], label: 'Discount chains', labelAt: [5, 3], dx: 12, dy: 5, max: 16 },
      { step: 3, points: [[0, 9], [1, 4], [2, 6.5], [3, 3], [4, 4.5], [5, 9]], label: 'Design stores', labelAt: [5, 9], dx: 12, dy: 5, max: 16 },
      { step: 4, points: [[0, 5], [1, 5], [2, 9], [3, 8], [4, 9.3], [5, 6]], label: 'You', ex: 'Nordhaus', labelAt: [5, 6], dx: 12, dy: 5, max: 16 }
    ],
    markers: [
      { step: 5, x: 2, y: 9, label: 'Raise', ex: 'Raise: advice', dy: -14 },
      { step: 5, x: 4, y: 9.3, label: 'Create', ex: 'Create: free assembly', dy: -14 },
      { step: 5, x: 1, y: 5, label: 'Reduce', ex: 'Reduce: range', dy: 24 }
    ]
  },
  whenToUse: ['Your offer looks the same as everyone else’s.', 'Planning a new product or repositioning an old one.', 'Explaining your differentiation in one picture.'],
  whenNot: ['Without buyer input on which factors matter. The curve then reflects internal opinion.'],
  howTo: ['List the factors the industry competes on and invests in.', 'Score competitors and yourself from buyer interviews and research.', 'Draw the curves and look for convergence.', 'Use the four actions: eliminate, reduce, raise, create.', 'Test the new curve with buyers.'],
  pitfalls: ['Too many factors; six to ten is plenty.', 'Raising everything, which is a cost problem, not a strategy.', 'Factors described in internal terms rather than buyer terms.'],
  template: `STRATEGY CANVAS — [Market]

Factor           Competitor A    Competitor B    Us (now)    Us (target)
1.
2.
3.

Eliminate:
Reduce:
Raise:
Create:`,
  sources: ['W. Chan Kim and Renée Mauborgne, Blue Ocean Strategy, Harvard Business School Press, 2005.'],
  related: ['perceptual-map', 'obviously-awesome', 'swot', 'battlecard']
},
{
  slug: 'stp', name: 'Segmentation, Targeting, Positioning', company: 'orto',
  origin: 'Wendell Smith, 1956; popularised by Philip Kotler',
  oneLiner: 'Divide the market into groups, choose the ones to serve, then decide how you want them to see you.',
  question: 'Which customers should we serve, and how should we position ourselves for them?',
  glance: { 'Use it for': 'Choosing target segments before positioning and messaging', 'You need': 'Market data and customer research', 'You get': 'Chosen segments and a positioning for each', 'Time': 'Two to four weeks' },
  steps: [
    { title: 'Segment', text: 'Divide the market into groups with different needs or behaviours. Needs-based segments are more useful than demographics alone.', example: 'Busy working parents, fitness-focused singles, and older people living alone.' },
    { title: 'Target', text: 'Score each segment on size, growth, fit and competition, and choose where to focus.', example: 'Fitness-focused singles: growing, willing to pay more, and few strong brands serve them.' },
    { title: 'Position', text: 'Decide what you want the chosen segment to think of you, compared with the alternatives.', example: 'The high-protein ready meal that tastes home-cooked.' }
  ],
  diagram: {
    type: 'chain', viewBox: '0 0 800 230',
    alt: 'Segmentation, targeting, positioning: three steps from dividing the market to choosing segments to positioning.',
    nodes: [
      { step: 1, title: 'Segment', text: 'Groups with different needs.', ex: 'Parents, fitness singles, older people.' },
      { step: 2, title: 'Target', text: 'Choose where to focus.', ex: 'Fitness-focused singles.' },
      { step: 3, title: 'Position', text: 'How they should see you.', ex: 'High-protein, tastes home-cooked.' }
    ]
  },
  whenToUse: ['Entering a market or launching a product.', 'Marketing is spread too thin across everyone.', 'Before writing positioning and messaging.'],
  whenNot: ['When segments are already clear and agreed. Go straight to positioning.'],
  howTo: ['Segment by needs and behaviour, then describe each segment with data you can act on.', 'Score segments on attractiveness and on your ability to win.', 'Choose one to three segments.', 'Write a positioning for each and check it against competitors.'],
  pitfalls: ['Segments you cannot reach or measure.', 'Targeting every segment “a little”.', 'Positioning written before choosing a target.'],
  template: `STP — [Product]

Segments (need, size, growth, competition):
1.
2.
3.

Chosen target and why:
Positioning for the target:`,
  sources: ['Wendell R. Smith, “Product Differentiation and Market Segmentation as Alternative Marketing Strategies”, Journal of Marketing, 1956.', 'Philip Kotler and Kevin Lane Keller, Marketing Management, Pearson, many editions.'],
  related: ['ideal-customer-profile', 'positioning-statement', 'obviously-awesome', 'perceptual-map']
},
{
  slug: 'perceptual-map', name: 'Perceptual Map', company: 'kontor',
  origin: 'Marketing research practice since the 1960s',
  oneLiner: 'Place competitors on the two dimensions buyers care about most, to see where you stand and where there is room.',
  question: 'How do buyers see us compared with the alternatives, and where is there open space?',
  glance: { 'Use it for': 'Showing differentiation and finding gaps', 'You need': 'Buyer input on which dimensions matter', 'You get': 'A simple map of the competitive landscape', 'Time': 'A few days with research' },
  steps: [
    { title: 'Choose two dimensions', text: 'Pick the two dimensions buyers use most when comparing. Ask them; do not guess.', example: 'Speed to cash, and paperwork and effort.' },
    { title: 'Place the alternatives', text: 'Position each competitor or alternative based on buyer perception, not your opinion.', example: 'Bank factoring: slow, heavy paperwork. Invoice marketplaces: medium on both.' },
    { title: 'Place yourself', text: 'Put yourself where buyers see you, which may differ from where you want to be.', example: 'Kontor: fast, with little effort.' },
    { title: 'Find the open space', text: 'Look for areas buyers value that nobody owns, and check that real demand exists there.', example: 'Fast and low-effort is open; Kontor’s messaging claims it outright.' }
  ],
  diagram: {
    type: 'chart', viewBox: '0 0 800 450', left: 100,
    alt: 'Perceptual map: invoice financing options placed by speed to cash and by paperwork, with Kontor in the fast, low-effort corner.',
    axesStep: 1,
    x: { domain: [0, 10], title: 'Speed to cash', low: 'Slow', high: 'Fast' },
    y: { domain: [0, 10], title: 'Paperwork and effort', low: 'Little', high: 'A lot' },
    markers: [
      { step: 2, x: 2.5, y: 8.5, label: 'Alternative A', ex: 'Bank factoring', anchor: 'start', dx: 12, dy: 5 },
      { step: 2, x: 5.5, y: 5.5, label: 'Alternative B', ex: 'Invoice marketplaces', anchor: 'start', dx: 12, dy: 5 },
      { step: 2, x: 7, y: 7.5, label: 'Alternative C', ex: 'Bank overdraft', anchor: 'start', dx: 12, dy: 5 },
      { step: 3, x: 8.8, y: 1.8, label: 'You', ex: 'Kontor', anchor: 'end', dx: -12, dy: 5 },
      { step: 4, x: 8, y: 3, label: 'Open space', ex: 'Fast and easy: unclaimed', dy: -22 }
    ]
  },
  whenToUse: ['Explaining differentiation to leadership, sales or investors.', 'Looking for an underserved position.', 'Tracking how perception changes after repositioning.'],
  whenNot: ['When buyers decide on many factors at once; use a strategy canvas instead.'],
  howTo: ['Ask buyers which dimensions matter most when they compare.', 'Rate each option on those dimensions from buyer research.', 'Plot and discuss what the picture shows.', 'Check that the open space is something buyers actually want.'],
  pitfalls: ['Choosing dimensions that make you look good.', 'Using your own view of competitors instead of buyers’.', 'Assuming every empty space is an opportunity.'],
  template: `PERCEPTUAL MAP — [Market]

Dimension 1 (left to right):
Dimension 2 (bottom to top):

Option            Score 1     Score 2     Source
Us
Competitor A
Competitor B

Open space and evidence of demand:`,
  sources: ['A long-standing marketing research technique; there is no single original source.'],
  related: ['strategy-canvas', 'stp', 'positioning-statement', 'battlecard']
},
{
  slug: 'competitive-intelligence-cycle', name: 'Competitive Intelligence Cycle', company: 'lumora',
  origin: 'Adapted from the intelligence cycle by SCIP practitioners',
  oneLiner: 'A repeating loop that turns questions about competitors into information people use to decide.',
  question: 'Are we learning about competitors in a way that actually changes our decisions?',
  glance: { 'Use it for': 'Running competitive intelligence as a steady programme', 'You need': 'Clear questions from leadership and sales', 'You get': 'Timely, useful intelligence instead of news clippings', 'Time': 'Set up in a month, then ongoing' },
  steps: [
    { title: 'Plan', text: 'Start with the decisions intelligence should support, and the key questions to answer.', example: '“Will the large lab chain launch a rival rapid test this year?”' },
    { title: 'Collect', text: 'Gather information from public sources, sales, customers, partners and events.', example: 'Tender documents, trade shows, regulatory filings and sales call notes.' },
    { title: 'Analyse', text: 'Turn information into meaning: what changed, why it matters, what is likely next.', example: 'Their job adverts for diagnostics engineers suggest a launch within 12 months.' },
    { title: 'Share', text: 'Deliver it in the format each audience uses: briefs, battlecards, alerts.', example: 'A monthly brief for leadership and updated battlecards for sales.' },
    { title: 'Decisions', text: 'The centre of the loop. Intelligence only matters when it informs a decision; then new questions start the next round.', example: 'Lumora speeds up its paediatric launch to get ahead of the rival test.' }
  ],
  diagram: {
    type: 'cycle', viewBox: '0 0 800 470',
    alt: 'Competitive intelligence cycle: plan, collect, analyse and share around decisions at the centre.',
    center: { step: 5, title: 'Decisions', text: 'What the intelligence is for', ex: 'Speed up the paediatric launch' },
    segments: [
      { step: 1, title: 'Plan', text: 'Key questions to answer', ex: 'Will the lab chain launch a rival test?' },
      { step: 2, title: 'Collect', text: 'Public sources, sales, customers', ex: 'Tenders, trade shows, filings, call notes' },
      { step: 3, title: 'Analyse', text: 'What changed and what it means', ex: 'Hiring suggests launch within a year' },
      { step: 4, title: 'Share', text: 'Briefs, battlecards, alerts', ex: 'Monthly brief; updated battlecards' }
    ]
  },
  whenToUse: ['Setting up or fixing a competitive intelligence programme.', 'Competitive information exists but nobody uses it.', 'A competitor move caught the company by surprise.'],
  whenNot: ['As a reason to collect everything about everyone. Start from questions.'],
  howTo: ['Agree three to five key intelligence questions with leadership and sales.', 'List sources for each question and who collects them.', 'Analyse monthly and write what it means, not just what happened.', 'Share in short formats tied to decisions, and ask what changed as a result.'],
  pitfalls: ['Newsletters of competitor news with no analysis.', 'Collecting information nobody asked for.', 'Ignoring what sales hear every day.'],
  template: `COMPETITIVE INTELLIGENCE — [Quarter]

Key questions:
1.
2.

Sources and owners:
Findings and what they mean:
Decisions informed:`,
  sources: ['Strategic and Competitive Intelligence Professionals (SCIP), practitioner guidance on the intelligence cycle.'],
  related: ['battlecard', 'win-loss-analysis', 'pestle', 'five-forces']
},
{
  slug: 'ries-trout-positioning', name: 'Positioning (Ries and Trout)', company: 'orto',
  origin: 'Al Ries and Jack Trout, 1972; book 1981',
  oneLiner: 'Positioning happens in the buyer’s mind: find your place on the mental ladder for your category, and own one idea.',
  question: 'What single idea can we own in buyers’ minds?',
  glance: { 'Use it for': 'Choosing the one idea to own in a crowded market', 'You need': 'An honest view of how buyers rank you today', 'You get': 'One word or idea to build everything around', 'Time': 'A workshop, plus buyer research' },
  steps: [
    { title: 'Find the ladder', text: 'Buyers keep a mental ranking of brands in each category. Identify the category ladder you are on.', example: 'Ready meals in Swiss supermarkets.' },
    { title: 'See your rung', text: 'Be honest about where buyers place you. The leader owns the category; others need a different idea.', example: 'Own-label meals lead; a big international brand is second; Orto is third.' },
    { title: 'Own one idea', text: 'Choose one idea or word that matters to buyers and that no competitor owns, and repeat it everywhere.', example: 'Orto chooses “high-protein”.' },
    { title: 'Or start a new ladder', text: 'If you cannot be first on an existing ladder, create a new category where you can be first.', example: '“High-protein ready meals”, a ladder where Orto is first.' }
  ],
  diagram: {
    type: 'chain', viewBox: '0 0 800 490',
    alt: 'Ries and Trout positioning: find the ladder, see your rung, own one idea, or start a new ladder.',
    nodes: [
      { step: 1, title: 'Find the ladder', text: 'The category in buyers’ minds.', ex: 'Supermarket ready meals.' },
      { step: 2, title: 'See your rung', text: 'Where buyers rank you.', ex: 'Third, behind own-label.' },
      { step: 3, title: 'Own one idea', text: 'One word nobody else owns.', ex: '“High-protein”.' },
      { step: 4, title: 'Or start a new ladder', text: 'A category where you are first.', ex: 'High-protein ready meals.' }
    ]
  },
  whenToUse: ['A crowded market where buyers see little difference.', 'Simplifying a message that tries to say too much.', 'Deciding whether to fight the leader or create a new category.'],
  whenNot: ['Complex B2B purchases decided on many criteria, where one word is not enough on its own.'],
  howTo: ['Research how buyers rank brands in your category.', 'List ideas buyers care about and which brand owns each.', 'Pick one free idea you can credibly own.', 'Make every message and product choice reinforce it.'],
  pitfalls: ['Choosing an idea buyers do not care about.', 'Claiming the leader’s idea.', 'Changing the idea every year.'],
  template: `POSITIONING (RIES AND TROUT) — [Brand]

Category ladder:
Rung 1:          Rung 2:          Rung 3:
Ideas buyers care about, and who owns each:
The idea we will own:
Proof that we deserve it:`,
  sources: ['Al Ries and Jack Trout, “The Positioning Era”, Advertising Age, 1972.', 'Al Ries and Jack Trout, Positioning: The Battle for Your Mind, McGraw-Hill, 1981.'],
  related: ['obviously-awesome', 'category-design', 'positioning-statement', 'onlyness-statement']
},
{
  slug: 'onlyness-statement', name: 'Onlyness Statement', company: 'halden',
  origin: 'Marty Neumeier, Zag, 2006',
  oneLiner: 'Complete the sentence “we are the only…”. If you cannot, you are not different enough yet.',
  question: 'Can we honestly say we are the only one that does this, for these people?',
  glance: { 'Use it for': 'Testing whether your differentiation is real', 'You need': 'A clear view of competitors and your best customers', 'You get': 'One sentence that states your difference', 'Time': 'One workshop' },
  steps: [
    { title: 'What', text: 'The category you compete in, with “the only” in front of it.', example: 'Our product is the only high-purity silica supplier…' },
    { title: 'How', text: 'What makes you different from everyone else in that category.', example: 'that certifies every shipment, not just batch averages…' },
    { title: 'Who', text: 'The customers you serve.', example: 'for solar-glass makers…' },
    { title: 'Where', text: 'The geography you serve.', example: 'in Europe…' },
    { title: 'Why', text: 'The need that makes the difference matter.', example: 'who lose output when sand quality varies…' },
    { title: 'When', text: 'The trend or moment that makes it urgent.', example: 'as Europe rebuilds its own solar supply chain.' }
  ],
  diagram: {
    type: 'statement', viewBox: '0 0 800 395',
    alt: 'Onlyness statement: what, how, who, where, why and when, filled in one line at a time.',
    parts: [
      { step: 1, lead: 'We are the only', slot: '[category]', ex: 'high-purity silica supplier' },
      { step: 2, lead: 'that', slot: '[what makes you different]', ex: 'certifies every shipment, not just batch averages' },
      { step: 3, lead: 'for', slot: '[customers]', ex: 'solar-glass makers' },
      { step: 4, lead: 'in', slot: '[geography]', ex: 'Europe' },
      { step: 5, lead: 'who', slot: '[need that makes it matter]', ex: 'lose output when sand quality varies' },
      { step: 6, lead: 'during', slot: '[trend that makes it urgent]', ex: 'Europe’s push to rebuild its solar supply chain' }
    ]
  },
  whenToUse: ['Checking whether a positioning is truly distinct.', 'Aligning founders and leaders on what makes the company different.', 'Before naming or category work.'],
  whenNot: ['As a tagline. It is a test and an internal anchor, not copy.'],
  howTo: ['Write the sentence alone, then compare drafts as a team.', 'Challenge every “only” against real competitors.', 'Narrow the who or where until the “only” is true.', 'Use the result to check messaging and product decisions.'],
  pitfalls: ['An “only” that a competitor could also claim.', 'Stretching the sentence until it loses meaning.', 'Ignoring the result when it shows you are not different.'],
  template: `ONLYNESS STATEMENT — [Brand]

We are the only [category]
that [difference]
for [customers]
in [geography]
who [need]
during [trend].`,
  sources: ['Marty Neumeier, Zag: The Number One Strategy of High-Performance Brands, New Riders, 2006.'],
  related: ['positioning-statement', 'obviously-awesome', 'ries-trout-positioning', 'category-design']
},
{
  slug: 'category-design', name: 'Category Design', company: 'lumora',
  origin: 'Al Ramadan, Dave Peterson, Christopher Lochhead and Kevin Maney, 2016',
  oneLiner: 'Instead of competing in an existing category, define a new one around a problem, and lead it.',
  question: 'Should we create and lead a new category rather than fight in an existing one?',
  glance: { 'Use it for': 'Truly new products that existing categories describe badly', 'You need': 'A clear new problem and leadership commitment', 'You get': 'A category name, a point of view and a plan to establish it', 'Time': 'Months; it is a company-wide effort' },
  steps: [
    { title: 'Name the problem', text: 'Describe a problem buyers have that existing categories do not solve well.', example: 'Antibiotics are prescribed blind because test results take days.' },
    { title: 'Name the category', text: 'Give the solution space a clear, simple name that frames the problem.', example: '“Point-of-care infection testing”.' },
    { title: 'Write the point of view', text: 'A short document that explains the problem, the new way and why now, without selling your product.', example: 'A two-page point of view shared with GP associations.' },
    { title: 'Build the ecosystem', text: 'Bring in the partners and voices who make the category real: analysts, associations, integrators.', example: 'GP associations, reimbursement bodies and lab partners.' },
    { title: 'Plan a lightning strike', text: 'A concentrated moment that launches the category to the market, with everyone aligned.', example: 'A joint study presented at the national GP congress.' }
  ],
  diagram: {
    type: 'chain', viewBox: '0 0 800 490',
    alt: 'Category design: name the problem, name the category, write the point of view, build the ecosystem, and plan a lightning strike.',
    nodes: [
      { step: 1, title: 'Name the problem', text: 'What existing options miss.', ex: 'Antibiotics prescribed blind.' },
      { step: 2, title: 'Name the category', text: 'A simple frame for the new way.', ex: 'Point-of-care infection testing.' },
      { step: 3, title: 'Write the point of view', text: 'Problem, new way, why now.', ex: 'Two pages for GP associations.' },
      { step: 4, title: 'Build the ecosystem', text: 'Partners who make it real.', ex: 'Associations, payers, labs.' },
      { step: 5, title: 'Lightning strike', text: 'One big launch moment.', ex: 'Study at the national GP congress.' }
    ]
  },
  whenToUse: ['A genuinely new product that buyers keep comparing with the wrong things.', 'A company with the resources to educate a market.'],
  whenNot: ['An incremental product in a known category. Positioning within the category works better and costs less.'],
  howTo: ['Write the problem in buyers’ terms and test it with them.', 'Draft category names and test which one buyers understand fastest.', 'Write the point of view and get leadership to agree it.', 'Line up ecosystem partners before launch.', 'Plan one concentrated launch moment rather than many small ones.'],
  pitfalls: ['Inventing a category name buyers never use.', 'Calling a feature a category.', 'Underestimating the cost of educating a market.'],
  template: `CATEGORY DESIGN — [Company]

Problem:
Category name:
Point of view (problem, new way, why now):
Ecosystem partners:
Lightning strike (moment, date, who):`,
  sources: ['Al Ramadan, Dave Peterson, Christopher Lochhead and Kevin Maney, Play Bigger, Harper Business, 2016.'],
  related: ['obviously-awesome', 'ries-trout-positioning', 'strategic-narrative', 'crossing-the-chasm']
},
{
  slug: 'brand-architecture', name: 'Brand Architecture', company: 'tessera',
  origin: 'David Aaker and Erich Joachimsthaler, 2000',
  oneLiner: 'Decide how your company brand and product names relate, from one master brand to separate brands.',
  question: 'How should we name new products, and how should they relate to our company brand?',
  glance: { 'Use it for': 'Naming products and organising a growing portfolio', 'You need': 'Your product list and plans for new ones', 'You get': 'A naming model and rules for new products', 'Time': 'A workshop, plus buyer checks' },
  steps: [
    { title: 'Master brand', text: 'Start with the company brand and how much trust it carries with buyers.', example: 'Tessera is known to maintenance managers as reliable and simple.' },
    { title: 'Existing products', text: 'Map today’s products and how they are named. Descriptive names under one master brand are a “branded house”.', example: 'Tessera Plan and Tessera Mobile.' },
    { title: 'New products', text: 'Decide where new products fit: under the master brand, as an endorsed sub-brand, or as a separate brand.', example: 'The new failure-prediction module.' },
    { title: 'Choose the model', text: 'Use a branded house when the master brand helps; use separate brands when it would confuse or limit.', example: 'Tessera keeps a branded house and names the module “Tessera Predict”.' }
  ],
  diagram: {
    type: 'tree', viewBox: '0 0 800 330',
    alt: 'Brand architecture: the master brand at the top, with existing and new products named beneath it.',
    nodes: [
      { id: 'm', step: 1, x: 270, y: 14, w: 260, h: 72, label: 'Master brand', text: 'The company brand', ex: 'Tessera' },
      { id: 'a', parent: 'm', step: 2, x: 30, y: 150, w: 220, h: 72, label: 'Product', text: 'Descriptive name', ex: 'Tessera Plan' },
      { id: 'b', parent: 'm', step: 2, x: 290, y: 150, w: 220, h: 72, label: 'Product', text: 'Descriptive name', ex: 'Tessera Mobile' },
      { id: 'c', parent: 'm', step: 3, x: 550, y: 150, w: 220, h: 72, label: 'New product', text: 'Where does it fit?', ex: 'Tessera Predict' }
    ],
    target: { id: 'c', step: 4, label: 'Decide', ex: 'Branded house' }
  },
  whenToUse: ['Naming a new product or acquired company.', 'A portfolio with inconsistent names that confuse buyers.', 'Deciding whether a product needs its own brand.'],
  whenNot: ['Single-product companies with no plans to expand.'],
  howTo: ['List every product and how it is named today.', 'Test with buyers how much the master brand helps each product.', 'Pick a model: branded house, endorsed brands, or house of brands.', 'Write simple naming rules and apply them to every new product.'],
  pitfalls: ['Inventing a new brand for every feature.', 'Clever names that do not say what the product does.', 'Mixing models with no rule behind it.'],
  template: `BRAND ARCHITECTURE — [Company]

Master brand:
Products and names today:
Model (branded house / endorsed / house of brands):
Naming rules:
  1.
  2.
New product names:`,
  sources: ['David A. Aaker and Erich Joachimsthaler, “The Brand Relationship Spectrum”, California Management Review, 2000.'],
  related: ['positioning-statement', 'launch-tiers', 'category-design', 'message-hierarchy']
}
];
