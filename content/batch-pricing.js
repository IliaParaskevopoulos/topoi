// Pricing and packaging: new pages.
const ggDemand = p => 0.92 / (1 + Math.exp((p - 560) / 85));
let best = 300, bestRev = 0;
for (let p = 300; p <= 900; p += 5) { const r = p * ggDemand(p); if (r > bestRev) { bestRev = r; best = p; } }
const ggPts = f => { const a = []; for (let p = 300; p <= 900; p += 10) a.push([p, +f(p).toFixed(2)]); return a; };
const ggRev = p => 100 * (p * ggDemand(p)) / bestRev;

module.exports = [
{
  slug: 'gabor-granger', name: 'Gabor-Granger', company: 'tessera',
  origin: 'André Gabor and Clive Granger, 1960s',
  oneLiner: 'Ask buyers whether they would buy at a series of prices, then find the price that earns the most revenue.',
  question: 'At what price does demand times price give us the most revenue?',
  glance: { 'Use it for': 'Setting a price for a product buyers already understand', 'You need': 'A survey of 150+ target buyers', 'You get': 'A demand curve and a revenue-maximising price', 'Time': 'Two to three weeks' },
  steps: [
    { title: 'Pick price points', text: 'Choose five to eight realistic prices around your expected range.', example: 'Tessera tests CHF 300 to 900 per plant per month.' },
    { title: 'Ask at each price', text: 'Ask each buyer whether they would buy at a given price, moving up or down depending on the answer. Plot the share who would buy.', example: 'At CHF 400, 80% would buy; at CHF 700, 15%.' },
    { title: 'Calculate revenue', text: 'Multiply each price by the share who would buy to get relative revenue.', example: 'Revenue rises until about CHF 440, then falls quickly.' },
    { title: 'Find the peak', text: 'The top of the revenue curve is the revenue-maximising price. Check it against costs, competitors and positioning.', example: `Peak at about CHF ${best}. Tessera sets CHF ${Math.round(best / 10) * 10 - 10} for its main plan.` }
  ],
  diagram: {
    type: 'chart', viewBox: '0 0 800 450', left: 90,
    alt: 'Gabor-Granger: the share of buyers who would buy falls as price rises; revenue peaks at one price.',
    axesStep: 1,
    x: { domain: [300, 900], title: 'Price', ticks: [300, 450, 600, 750, 900].map(v => ({ v, gen: '', ex: 'CHF ' + v })) },
    y: { domain: [0, 105], title: 'Share who would buy / revenue index', ticks: [0, 50, 100].map(v => ({ v, gen: String(v), ex: String(v) })) },
    curves: [
      { step: 2, points: ggPts(p => 100 * ggDemand(p)), label: 'Would buy', labelAt: [650, 100 * ggDemand(650)], dx: 6, dy: 24 },
      { step: 3, points: ggPts(ggRev), label: 'Revenue', labelAt: [760, ggRev(760)], dx: 10, dy: -8 }
    ],
    markers: [{ step: 4, x: best, y: 100, label: 'Revenue peak', ex: `Peak: CHF ${best}`, dy: -14 }]
  },
  whenToUse: ['Pricing a product in a category buyers know.', 'Checking a planned price against demand.', 'Comparing demand across segments.'],
  whenNot: ['New categories where buyers have no reference price.', 'Complex packages; use conjoint analysis to price features.'],
  howTo: ['Describe the product clearly to buyers in the target segment.', 'Ask purchase intent at a random first price, then adjust up or down.', 'Calculate the share who would buy at each price.', 'Multiply by price, find the peak, and sanity-check it.'],
  pitfalls: ['Buyers say yes more easily in surveys than in real life.', 'Testing prices far from the real range.', 'Ignoring competitors’ prices beside yours.'],
  template: `GABOR-GRANGER — [Product], [segment]

Price      Would buy (%)      Revenue index
1.
2.
3.

Revenue-maximising price:
Decision and reasons:`,
  sources: ['André Gabor and Clive W. J. Granger, “Price as an Indicator of Quality”, Economica, 1966.'],
  related: ['van-westendorp', 'conjoint-maxdiff', 'good-better-best', 'value-metric']
},
{
  slug: 'conjoint-maxdiff', name: 'Conjoint and MaxDiff', company: 'kontor',
  origin: 'Conjoint: Paul Green and colleagues, 1970s. MaxDiff: Jordan Louviere, late 1980s',
  oneLiner: 'Make buyers trade features and prices off against each other, to learn what they truly value.',
  question: 'Which features and price levels matter most when buyers have to choose?',
  glance: { 'Use it for': 'Packaging, feature priorities and price levels', 'You need': 'A survey tool and 200+ target buyers', 'You get': 'The relative importance of each attribute and level', 'Time': 'Four to six weeks' },
  steps: [
    { title: 'Fee level', text: 'Choose the attributes buyers trade off, each with realistic levels. Show buyers sets of options and ask which they would choose. Price is usually the most important attribute.', example: 'Fee levels from 0.8% to 2.0%: 41% of what drives choice.' },
    { title: 'Payout speed', text: 'The analysis gives each attribute an importance score, based on how much it changes choices.', example: 'Same day, next day or three days: 34% of what drives choice.' },
    { title: 'Integration', text: 'Lower-importance attributes still matter for some segments. MaxDiff, a simpler cousin, asks buyers to pick the most and least important item from short lists.', example: 'Accounting software sync: 25% overall, but 40% for firms with more than ten staff.' },
    { title: 'Build packages', text: 'Use the scores to decide what goes in each package and what to charge for.', example: 'Next-day payout in every plan; same-day payout and sync drive the upgrade.' }
  ],
  diagram: {
    type: 'tiers', viewBox: '0 0 800 450',
    alt: 'Conjoint results: the relative importance of fee level, payout speed and integration in buyer choices.',
    tiers: [
      { step: 1, height: 370, title: 'Fee level', sub: 'Importance', subEx: '41%', items: '• Usually the\n  top attribute', itemsEx: '• 0.8% to 2.0%' },
      { step: 2, height: 310, title: 'Payout speed', sub: 'Importance', subEx: '34%', items: '• Levels tested\n  against each other', itemsEx: '• Same day, next day,\n  three days' },
      { step: 3, height: 230, title: 'Integration', sub: 'Importance', subEx: '25%', items: '• Matters more\n  for some segments', itemsEx: '• Accounting sync' }
    ],
    note: { step: 4, at: 1, label: 'Use the scores to build packages', ex: 'Same-day payout drives upgrades' }
  },
  whenToUse: ['Designing packages and deciding which features to charge for.', 'Choosing between feature roadmaps.', 'Finding how much buyers will pay for an upgrade.'],
  whenNot: ['Very small samples or very new categories buyers cannot judge.'],
  howTo: ['Pick four to six attributes with two to four realistic levels each.', 'Build choice tasks with a survey tool that supports conjoint or MaxDiff.', 'Field the survey to the target segment.', 'Read importance and part-worth results, and simulate packages.'],
  pitfalls: ['Too many attributes, which tires respondents.', 'Unrealistic levels that distort the results.', 'Treating simulated market share as a forecast.'],
  template: `CONJOINT STUDY — [Product]

Attribute          Levels
1.
2.
3.

Results: importance by attribute
Package decisions:`,
  sources: ['Paul E. Green and Vithala R. Rao, “Conjoint Measurement for Quantifying Judgmental Data”, Journal of Marketing Research, 1971.', 'Jordan J. Louviere and colleagues developed best-worst scaling (MaxDiff) from the late 1980s.'],
  related: ['good-better-best', 'leaders-fillers-killers', 'van-westendorp', 'gabor-granger']
},
{
  slug: 'economic-value-to-customer', name: 'Economic Value to the Customer', company: 'halden',
  origin: 'John Forbis and Nitin Mehta, 1981',
  oneLiner: 'Start from the price of the buyer’s next best option, add the value of what makes you better, and price below the total.',
  question: 'What is our product really worth to this customer, compared with their next best option?',
  glance: { 'Use it for': 'Value-based prices and value-selling arguments', 'You need': 'The next best alternative’s price and data on your difference', 'You get': 'A price ceiling and a value story for sales', 'Time': 'A few days per segment' },
  steps: [
    { title: 'Reference value', text: 'Start with the price of the customer’s next best alternative.', example: 'A competitor’s sand, delivered: EUR 80 per tonne.' },
    { title: 'Economic value', text: 'Add the money value of your positive differences, and subtract any negatives. The total is the economic value to this customer.', example: 'Fewer rejected glass batches are worth EUR 35 per tonne: economic value EUR 115.' },
    { title: 'Set the price', text: 'Price between the reference value and the economic value, so both sides win.', example: 'Halden prices at EUR 100: the customer keeps EUR 15 of the value.' },
    { title: 'Share the value', text: 'Use the calculation in sales, so buyers see the value, not just the price.', example: 'A cost-per-good-tonne calculator in every first meeting.' }
  ],
  diagram: {
    type: 'tiers', viewBox: '0 0 800 450',
    alt: 'Economic value to the customer: the reference value of the next best option, the total economic value, and a price set between them.',
    tiers: [
      { step: 1, height: 230, title: 'Reference', sub: 'Next best option', subEx: 'EUR 80 / tonne', items: '• Price of the\n  alternative', itemsEx: '• Competitor sand,\n  delivered' },
      { step: 2, height: 360, title: 'Economic value', sub: 'Reference + difference', subEx: 'EUR 115 / tonne', items: '• Plus your\n  positive differences', itemsEx: '• Fewer rejected\n  batches: +EUR 35' },
      { step: 3, height: 300, title: 'Your price', sub: 'In between', subEx: 'EUR 100 / tonne', items: '• Below economic\n  value, above\n  reference', itemsEx: '• Customer keeps\n  EUR 15 of value' }
    ],
    note: { step: 4, at: 2, label: 'Share the value', ex: 'Calculator in every meeting' }
  },
  whenToUse: ['B2B products with measurable economic benefits.', 'Defending a price premium.', 'Building value-selling tools.'],
  whenNot: ['When benefits cannot be quantified even roughly.'],
  howTo: ['Identify the next best alternative for one segment.', 'List every difference, positive and negative.', 'Put a money value on each with customer data.', 'Set the price between reference and economic value.', 'Turn the calculation into a sales tool.'],
  pitfalls: ['Using your list price as the reference instead of the alternative’s.', 'Counting benefits the customer does not value.', 'Pricing at full economic value, which leaves no reason to switch.'],
  template: `ECONOMIC VALUE TO THE CUSTOMER — [Product], [segment]

Next best alternative and price:
Positive differences and their value:
Negative differences and their cost:
Economic value:
Our price:
Value left with the customer:`,
  sources: ['John L. Forbis and Nitin T. Mehta, “Value-Based Strategies for Industrial Products”, Business Horizons, 1981.', 'Thomas T. Nagle and Georg Müller, The Strategy and Tactics of Pricing, Routledge, many editions.'],
  related: ['value-based-pricing', 'price-waterfall', 'b2b-elements-of-value', 'value-selling']
},
{
  slug: 'value-based-pricing', name: 'Value-Based Pricing', company: 'lumora',
  origin: 'Pricing practice described by Thomas Nagle and colleagues',
  oneLiner: 'Set prices from the value customers get, not from your costs or competitors’ prices alone.',
  question: 'What price reflects the value we create for each segment?',
  glance: { 'Use it for': 'Setting prices for new products and segments', 'You need': 'Customer research on value and alternatives', 'You get': 'Prices per segment that buyers can justify', 'Time': 'Four to six weeks' },
  steps: [
    { title: 'Segment by value', text: 'Group customers by how much value they get, not just by size.', example: 'Paediatric practices get more value than general practices: more antibiotic decisions.' },
    { title: 'Find the alternative', text: 'Identify what each segment would use instead, and what it costs them.', example: 'A lab send-out test: free per test, but results take two to three days.' },
    { title: 'Quantify the difference', text: 'Put a money value on what makes you better, using customer data.', example: 'Fewer return visits and phone calls save about CHF 25 per test.' },
    { title: 'Set the price', text: 'Price below the value you create, so the customer still gains.', example: 'CHF 12 per test for paediatric practices.' },
    { title: 'Communicate the value', text: 'Give sales and customers the tools to see the value.', example: 'A savings calculator on the website and in sales meetings.' }
  ],
  diagram: {
    type: 'chain', viewBox: '0 0 800 490',
    alt: 'Value-based pricing: segment by value, find the alternative, quantify the difference, set the price, communicate the value.',
    nodes: [
      { step: 1, title: 'Segment by value', text: 'Who gets the most value.', ex: 'Paediatric practices.' },
      { step: 2, title: 'Find the alternative', text: 'What they would use instead.', ex: 'Lab test: slow.' },
      { step: 3, title: 'Quantify the difference', text: 'Money value of being better.', ex: 'About CHF 25 saved per test.' },
      { step: 4, title: 'Set the price', text: 'Below the value created.', ex: 'CHF 12 per test.' },
      { step: 5, title: 'Communicate the value', text: 'Tools for sales and buyers.', ex: 'Savings calculator.' }
    ]
  },
  whenToUse: ['Pricing a new product or entering a new segment.', 'Prices set by cost-plus leave money on the table.', 'Competing against cheaper alternatives.'],
  whenNot: ['Commodity markets where buyers see no difference between suppliers.'],
  howTo: ['Interview customers about outcomes and the alternatives they compare.', 'Build a simple value model per segment.', 'Test prices with research such as Van Westendorp or Gabor-Granger.', 'Arm sales with the value story and a calculator.'],
  pitfalls: ['Claiming value customers do not recognise.', 'One price for segments that get very different value.', 'Forgetting to explain the value, so buyers only see the price.'],
  template: `VALUE-BASED PRICING — [Product]

Segment:
Next best alternative and its cost:
Value of our difference:
Price:
How we will communicate it:`,
  sources: ['Thomas T. Nagle and Georg Müller, The Strategy and Tactics of Pricing, Routledge, many editions.'],
  related: ['economic-value-to-customer', 'value-metric', 'van-westendorp', 'good-better-best']
},
{
  slug: 'leaders-fillers-killers', name: 'Leaders, Fillers, Killers', company: 'kontor',
  origin: 'Madhavan Ramanujam and Georg Tacke, Simon-Kucher, 2016',
  oneLiner: 'Sort features into those that drive the purchase, those that fill out a package, and those that put buyers off.',
  question: 'Which features should define our packages, and which should we leave out?',
  glance: { 'Use it for': 'Designing packages and tiers', 'You need': 'Willingness-to-pay research on features', 'You get': 'Packages built around what buyers value most', 'Time': 'Two to four weeks' },
  steps: [
    { title: 'Leaders', text: 'Features that most buyers value highly and would pay for. Build each package around one or two.', example: 'Fast payout and one fixed fee.' },
    { title: 'Fillers', text: 'Nice-to-have features that add value but do not drive the decision. Use them to round out packages.', example: 'Payment reminders and cash-flow reports.' },
    { title: 'Killers', text: 'Features or terms that put buyers off, even if a few want them. Leave them out or make them optional.', example: 'A mandatory annual contract, or having to finance every invoice.' },
    { title: 'Build packages around leaders', text: 'Each package needs its own leader, so buyers know why to choose it.', example: 'Basic leads with next-day payout; Business leads with same-day payout.' }
  ],
  diagram: {
    type: 'tiers', viewBox: '0 0 800 450',
    alt: 'Leaders, fillers and killers: three groups of features, from those that drive purchase to those that put buyers off.',
    tiers: [
      { step: 1, height: 370, title: 'Leaders', sub: 'Drive the purchase', subEx: 'Build around these', items: '• Valued by most\n• Worth paying for', itemsEx: '• Fast payout\n• One fixed fee' },
      { step: 2, height: 290, title: 'Fillers', sub: 'Round out packages', subEx: 'Nice to have', items: '• Add value\n• Don’t decide', itemsEx: '• Reminders\n• Cash-flow reports' },
      { step: 3, height: 210, title: 'Killers', sub: 'Put buyers off', subEx: 'Leave out', items: '• Reduce appeal\n  of the whole', itemsEx: '• Annual contract\n• Finance every\n  invoice' }
    ],
    note: { step: 4, at: 0, label: 'One leader per package', ex: 'Next-day vs same-day payout' }
  },
  whenToUse: ['Creating or reworking packages.', 'Packages that are crowded with features nobody pays for.', 'Deciding what to charge extra for.'],
  whenNot: ['Products with one simple offer and no packaging decisions.'],
  howTo: ['List all features and terms.', 'Research willingness to pay and appeal for each, by segment.', 'Sort them into leaders, fillers and killers.', 'Build packages around leaders, add fillers, remove killers.'],
  pitfalls: ['Bundling a killer into every package.', 'Packages with no clear leader.', 'Sorting features by internal opinion rather than research.'],
  template: `LEADERS, FILLERS, KILLERS — [Product]

Leaders:
Fillers:
Killers:

Package     Leader     Fillers included`,
  sources: ['Madhavan Ramanujam and Georg Tacke, Monetizing Innovation, Wiley, 2016.'],
  related: ['good-better-best', 'conjoint-maxdiff', 'value-metric', 'kano-model']
},
{
  slug: 'value-metric', name: 'Value Metric', company: 'tessera',
  origin: 'Common software pricing practice; no single author',
  oneLiner: 'Choose the unit you charge for so that price grows with the value the customer gets.',
  question: 'What should we charge per, so customers pay more only when they get more?',
  glance: { 'Use it for': 'Choosing the pricing unit for software and services', 'You need': 'An understanding of how customers measure value', 'You get': 'A pricing unit that is fair, predictable and grows with value', 'Time': 'One to two workshops, plus customer checks' },
  steps: [
    { title: 'We charge per', text: 'Name the unit you charge for: users, transactions, assets, locations, usage.', example: 'Per maintained machine.' },
    { title: 'Because value grows with', text: 'The unit should rise as the customer gets more value.', example: 'More machines kept running means more value.' },
    { title: 'Customers can predict it', text: 'Buyers must be able to forecast their bill easily.', example: 'Plants know how many machines they have.' },
    { title: 'It does not punish adoption', text: 'Check that the unit does not stop people using the product more.', example: 'Unlike per-user pricing, adding technicians costs nothing.' }
  ],
  diagram: {
    type: 'statement', viewBox: '0 0 800 280',
    alt: 'Value metric statement: we charge per a unit, because value grows with it, customers can predict it, and it does not punish adoption.',
    parts: [
      { step: 1, lead: 'We charge per', slot: '[unit]', ex: 'maintained machine' },
      { step: 2, lead: 'because', slot: '[value grows with this unit]', ex: 'more machines kept running means more value' },
      { step: 3, lead: 'customers predict it by', slot: '[how buyers forecast the bill]', ex: 'counting the machines in their plant' },
      { step: 4, lead: 'and it doesn’t punish', slot: '[usage you want to encourage]', ex: 'adding more technicians as users' }
    ]
  },
  whenToUse: ['Launching a new product or pricing model.', 'Customers complain the price does not match the value.', 'Growth in usage is not turning into revenue.'],
  whenNot: ['One-off purchases where a single price works fine.'],
  howTo: ['List candidate units.', 'Score each on value alignment, predictability and fairness.', 'Test the top two with customers.', 'Model revenue for typical customers under each.'],
  pitfalls: ['Per-user pricing that discourages adoption.', 'Units customers cannot predict.', 'Changing the unit often, which erodes trust.'],
  template: `VALUE METRIC — [Product]

Candidate units          Grows with value?     Predictable?     Encourages use?
1.
2.
3.

Chosen unit and why:`,
  sources: ['A common software pricing practice; there is no single original source.'],
  related: ['pricing-models', 'good-better-best', 'value-based-pricing', 'leaders-fillers-killers']
},
{
  slug: 'pricing-models', name: 'Pricing Models', company: 'lumora',
  origin: 'Common pricing practice; no single author',
  oneLiner: 'The main ways to structure what customers pay, from a single flat fee to hybrids.',
  question: 'Which pricing model fits how our customers buy and get value?',
  glance: { 'Use it for': 'Choosing or changing your pricing structure', 'You need': 'How customers use and value the product', 'You get': 'A model that fits buyers and your economics', 'Time': 'Two to three weeks' },
  steps: [
    { title: 'Flat fee', text: 'One price for everything. Simple, but leaves money on the table with heavy users.', example: 'A monthly fee per practice, any number of tests.' },
    { title: 'Per user', text: 'Price per person using it. Easy to understand; can slow adoption.', example: 'A fee per clinician.' },
    { title: 'Usage-based', text: 'Pay for what you use. Fair and grows with value; harder to predict.', example: 'A fee per test cartridge.' },
    { title: 'Tiered packages', text: 'Several packages at different prices for different needs.', example: 'Starter, Practice and Group packages.' },
    { title: 'Hybrid', text: 'A base fee plus usage, or packages with usage limits. Often the best fit, but keep it simple.', example: 'Lumora chooses device rental plus a fee per test.' }
  ],
  diagram: {
    type: 'chain', viewBox: '0 0 800 490',
    alt: 'Pricing models: flat fee, per user, usage-based, tiered packages and hybrid.',
    nodes: [
      { step: 1, title: 'Flat fee', text: 'One price for all.', ex: 'Monthly fee per practice.' },
      { step: 2, title: 'Per user', text: 'Price per person.', ex: 'Per clinician.' },
      { step: 3, title: 'Usage-based', text: 'Pay for what you use.', ex: 'Per test cartridge.' },
      { step: 4, title: 'Tiered packages', text: 'Packages for different needs.', ex: 'Starter, Practice, Group.' },
      { step: 5, title: 'Hybrid', text: 'Base fee plus usage.', ex: 'Device rental plus per test.' }
    ]
  },
  whenToUse: ['Launching a product or entering a new segment.', 'The current model causes friction in sales or renewals.', 'Usage and value vary widely between customers.'],
  whenNot: ['As a quick fix for low prices; the problem may be value, not model.'],
  howTo: ['Map how value grows for customers.', 'List which models fit that pattern.', 'Model revenue and customer cost for typical accounts.', 'Test the favourite with customers and sales before switching.'],
  pitfalls: ['A hybrid so complex buyers cannot work out the bill.', 'Copying a competitor’s model without checking the fit.', 'Switching models without a plan for existing customers.'],
  template: `PRICING MODEL — [Product]

How value grows:
Models considered:
Typical customer cost under each:
Chosen model:
Plan for existing customers:`,
  sources: ['A common pricing practice; there is no single original source.'],
  related: ['value-metric', 'good-better-best', 'value-based-pricing', 'price-waterfall']
},
{
  slug: 'price-waterfall', name: 'Price Waterfall', company: 'halden',
  origin: 'Michael Marn and Robert Rosiello, McKinsey, 1992',
  oneLiner: 'Follow the price from list to what you actually keep, to find where money leaks away.',
  question: 'How much of our list price do we actually keep, and where does the rest go?',
  glance: { 'Use it for': 'Finding discounts and costs that eat into price', 'You need': 'Transaction-level data on discounts, rebates and costs', 'You get': 'The leaks between list and pocket price, by customer', 'Time': 'Two to four weeks of analysis' },
  steps: [
    { title: 'List price', text: 'Start with the official price.', example: 'EUR 120 per tonne.' },
    { title: 'Invoice price', text: 'Subtract discounts given on the invoice.', example: 'Volume discount: invoice price EUR 104.' },
    { title: 'Pocket price', text: 'Subtract everything paid after the invoice: rebates, freight, payment terms, promotions.', example: 'Freight, year-end rebates and 90-day terms: pocket price EUR 88.' },
    { title: 'Find the leaks', text: 'Compare pocket prices across customers. Large differences often have no good reason.', example: 'Two similar customers differ by EUR 14 per tonne, mostly freight. Halden changes delivery terms.' }
  ],
  diagram: {
    type: 'tiers', viewBox: '0 0 800 450',
    alt: 'Price waterfall: list price, invoice price after discounts, and pocket price after rebates, freight and payment terms.',
    tiers: [
      { step: 1, height: 370, title: 'List price', sub: 'Official price', subEx: 'EUR 120 / tonne', items: '• Before anything\n  is taken off', itemsEx: '• Price list' },
      { step: 2, height: 320, title: 'Invoice price', sub: 'After discounts', subEx: 'EUR 104 / tonne', items: '• On-invoice\n  discounts', itemsEx: '• Volume discount' },
      { step: 3, height: 270, title: 'Pocket price', sub: 'What you keep', subEx: 'EUR 88 / tonne', items: '• After rebates,\n  freight, terms', itemsEx: '• Freight, rebates,\n  90-day terms' }
    ],
    note: { step: 4, at: 2, label: 'Find the leaks', ex: 'EUR 14 gap between similar customers' }
  },
  whenToUse: ['Margins fall even though list prices hold.', 'Sales teams have wide freedom on discounts.', 'Before a pricing or discount policy review.'],
  whenNot: ['When you lack transaction-level data. Collect it first.'],
  howTo: ['Gather every price element for a sample of transactions.', 'Build the waterfall for each customer.', 'Compare pocket prices for similar customers.', 'Fix the biggest unexplained leaks with clear policies.'],
  pitfalls: ['Looking only at invoice discounts and missing off-invoice costs.', 'Treating all discounts as bad; some buy volume or loyalty.', 'Policies sales cannot follow.'],
  template: `PRICE WATERFALL — [Product], [customer or segment]

List price:
 − On-invoice discounts:
= Invoice price:
 − Rebates:
 − Freight:
 − Payment terms:
 − Other:
= Pocket price:`,
  sources: ['Michael V. Marn and Robert L. Rosiello, “Managing Price, Gaining Profit”, Harvard Business Review, 1992.'],
  related: ['economic-value-to-customer', 'value-based-pricing', 'pricing-models', 'good-better-best']
}
];
