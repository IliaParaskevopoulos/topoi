module.exports = {
  slug: 'tam-sam-som',
  name: 'TAM, SAM, SOM',
  company: 'kontor',
  origin: 'Common market-sizing practice; no single author',
  oneLiner: 'Three nested market sizes: everyone who could ever buy, those you can actually serve, and the share you can realistically win.',
  question: 'How big is the market we can actually win, and is it worth the effort?',
  glance: {
    'Use it for': 'Sizing a market for a plan, an investor or a go/no-go decision',
    'You need': 'Customer counts, prices and a view of your reach',
    'You get': 'Three numbers you can defend, built from customers up',
    'Time': 'A day of desk research'
  },
  steps: [
    { title: 'Total addressable market', text: 'TAM: the total demand for this kind of product if every possible customer bought it.', example: 'Every small business in Switzerland that invoices other businesses.' },
    { title: 'Serviceable available market', text: 'SAM: the part of TAM your product and channels can actually serve today.', example: 'Those using accounting software Kontor connects to, who wait 30 days or more to be paid.' },
    { title: 'Serviceable obtainable market', text: 'SOM: the share of SAM you can realistically win in a set period, given competition and your resources.', example: 'What Kontor can win in three years with its current team: about 4,000 businesses.' },
    { title: 'Check it bottom-up', text: 'Build the numbers from customer counts and price, not from a top-down percentage of a big figure.', example: '4,000 businesses × CHF 1,200 in yearly fees = CHF 4.8 million, the number Kontor plans against.' }
  ],
  diagram: {
    type: 'rings', viewBox: '0 0 800 440',
    alt: 'Three nested circles: total addressable market, serviceable available market, and serviceable obtainable market.',
    rings: [
      { step: 1, title: 'TAM', text: 'Total addressable market: all possible demand', ex: 'All Swiss small businesses that invoice other businesses' },
      { step: 2, title: 'SAM', text: 'Serviceable available: what you can serve today', ex: 'On supported accounting software, waiting 30+ days' },
      { step: 3, title: 'SOM', text: 'Serviceable obtainable: what you can win', ex: 'About 4,000 businesses in three years' }
    ],
    note: { step: 4, label: 'Build it from customers × price', ex: '4,000 × CHF 1,200 = CHF 4.8 million a year' }
  },
  whenToUse: ['Business plans and investor decks.', 'Deciding whether a new segment is worth entering.', 'Setting realistic revenue targets for a launch.'],
  whenNot: ['As a forecast on its own. SOM is a planning assumption, not a prediction.', 'When the category does not exist yet. Size the problem instead.'],
  howTo: ['Define the customer precisely: who, where, with which need.', 'Count customers and multiply by realistic yearly spend for TAM.', 'Narrow to the customers your product and channels reach today for SAM.', 'Estimate a win rate from your sales capacity and competition for SOM.', 'Write down every assumption so others can challenge it.'],
  pitfalls: ['Quoting a huge industry figure as TAM.', 'Assuming “just 1% of the market” without showing how you would win it.', 'Leaving out the assumptions, so nobody can check the numbers.'],
  template: `MARKET SIZE — [Product], [region], [date]

TAM: customers ×  yearly spend  =
  Definition:
SAM: customers ×  yearly spend  =
  Filters applied:
SOM: customers ×  yearly spend  =
  Win-rate assumption:

Assumptions and sources:`,
  sources: ['A standard market-sizing method taught in business schools and used by investors; there is no single original source.'],
  related: ['five-forces', 'crossing-the-chasm', 'Beachhead market (24 steps)', 'Ideal Customer Profile']
};
