// Example data is generated from smooth curves so the chart and the text use the same numbers.
const lg = (p, c, w) => 1 / (1 + Math.exp(-(p - c) / w));
const f = {
  tooCheap: p => 1 - lg(p, 5.6, 0.6),
  cheap: p => 1 - lg(p, 7.6, 0.9),
  expensive: p => lg(p, 9.0, 0.9),
  tooExp: p => lg(p, 10.6, 0.8)
};
const pts = fn => { const a = []; for (let p = 4; p <= 14.0001; p += 0.1) a.push([+p.toFixed(2), +(fn(p) * 100).toFixed(2)]); return a; };
const cross = (a, b) => { for (let p = 4; p < 14; p += 0.005) if ((a(p) - b(p)) * (a(p + 0.005) - b(p + 0.005)) <= 0) return p + 0.0025; };
const r = p => Math.round(p * 10) / 10;
const chf = p => 'CHF ' + r(p).toFixed(2);

const lo = cross(f.tooCheap, f.expensive), hi = cross(f.tooExp, f.cheap);
const opp = cross(f.tooCheap, f.tooExp), ipp = cross(f.cheap, f.expensive);

module.exports = {
  slug: 'van-westendorp',
  name: 'Van Westendorp Price Sensitivity Meter',
  company: 'orto',
  origin: 'Peter van Westendorp, 1976',
  oneLiner: 'Four questions about price that show the range buyers find acceptable, and where in that range to aim.',
  question: 'What price range will buyers accept for this product, and where in that range should we set the price?',
  glance: {
    'Use it for': 'Setting a price range for a new product or a new pack',
    'You need': 'A survey of at least 150 to 200 target buyers who understand the product',
    'You get': 'An acceptable price range, plus optimal and indifference price points',
    'Time': 'Two to three weeks including fieldwork'
  },
  steps: [
    { title: 'Ask four questions',
      text: 'Show buyers the product and ask: at what price is it so cheap you would doubt the quality? A bargain? Getting expensive, but still worth considering? Too expensive to consider?',
      example: 'Orto asks 400 shoppers about a new 400 g chilled lasagne.' },
    { title: 'Too cheap',
      text: 'For each price, plot the share of buyers who find it too cheap. The curve falls as price rises.',
      example: 'Below about CHF 5.60, most shoppers start to doubt the quality.' },
    { title: 'Bargain',
      text: 'Plot the share who see each price as a bargain. This curve also falls as price rises.',
      example: 'At about CHF 7.60, half the shoppers still see it as a bargain.' },
    { title: 'Getting expensive',
      text: 'Plot the share who find each price expensive but would still consider buying. This curve rises with price.',
      example: 'At CHF 9, half the shoppers find it getting expensive.' },
    { title: 'Too expensive',
      text: 'Plot the share who would not consider buying at each price.',
      example: 'Above CHF 11, most shoppers would not consider it.' },
    { title: 'Acceptable range',
      text: 'The range runs from where “too cheap” crosses “getting expensive” to where “too expensive” crosses “bargain”. Some practitioners use inverted “not a bargain” and “not expensive” curves instead; the idea is the same.',
      example: `Orto’s acceptable range is ${chf(lo)} to ${chf(hi)}.` },
    { title: 'Optimal and indifference points',
      text: 'Where “too cheap” meets “too expensive” is the optimal price point: the fewest buyers reject the price. Where “bargain” meets “getting expensive” is the indifference point.',
      example: `Optimal at ${chf(opp)}, indifference at ${chf(ipp)}. Orto launches at CHF 7.90, between the two, and keeps promotions above ${chf(lo)}.` }
  ],
  diagram: {
    type: 'chart',
    viewBox: '0 0 800 450',
    left: 90,
    alt: 'Van Westendorp chart: four cumulative curves for too cheap, bargain, getting expensive and too expensive, with the acceptable price range and the optimal and indifference price points marked.',
    axesStep: 1,
    x: { domain: [4, 14], title: 'Price', ticks: [4, 6, 8, 10, 12, 14].map(v => ({ v, gen: '', ex: 'CHF ' + v })) },
    y: { domain: [0, 100], title: 'Share of buyers', ticks: [0, 25, 50, 75, 100].map(v => ({ v, gen: v + '%', ex: v + '%' })) },
    bands: [{ step: 6, x0: lo, x1: hi, label: 'Acceptable range', ex: `${chf(lo)} to ${chf(hi)}` }],
    curves: [
      { step: 2, points: pts(f.tooCheap), label: 'Too cheap', labelAt: [4.25, 99] },
      { step: 3, points: pts(f.cheap), label: 'Bargain', labelAt: [6.25, 84] },
      { step: 4, points: pts(f.expensive), label: 'Getting expensive', labelAt: [10.5, 89], anchor: 'start' },
      { step: 5, points: pts(f.tooExp), label: 'Too expensive', labelAt: [12.2, 76], anchor: 'start' }
    ],
    markers: [
      { step: 7, x: opp, y: f.tooCheap(opp) * 100, label: 'Optimal price', ex: 'Optimal: ' + chf(opp), dy: 5, dx: -12, anchor: 'end' },
      { step: 7, x: ipp, y: f.cheap(ipp) * 100, label: 'Indifference price', ex: 'Indifference: ' + chf(ipp), dx: 14, dy: 5, anchor: 'start' }
    ]
  },
  whenToUse: [
    'Pricing a new product, pack size or variant in a category where buyers know roughly what things cost.',
    'Checking whether a planned price sits inside what buyers will accept.',
    'Getting a quick, low-cost read before a more detailed study.'
  ],
  whenNot: [
    'Brand-new categories where buyers have no reference price. Answers will be guesses.',
    'Large B2B deals with negotiated, value-based prices.',
    'Predicting volume or revenue. Combine it with Gabor-Granger or conjoint analysis for that.'
  ],
  howTo: [
    'Recruit buyers from the target segment and show them a realistic description of the product.',
    'Ask the four questions in order: too expensive, expensive, bargain, too cheap. Let them answer in open price amounts.',
    'For each price point, calculate the cumulative share for each question.',
    'Plot the four curves and find the intersections.',
    'Set the price inside the acceptable range, using the optimal and indifference points and your costs as guides.'
  ],
  pitfalls: [
    'Asking people who do not buy in the category. Their answers are not anchored in reality.',
    'Reading the optimal price point as the profit-maximising price. It is the price fewest people reject, nothing more.',
    'Ignoring the competitive shelf. Buyers will compare your price with the products next to it.'
  ],
  template: `VAN WESTENDORP SURVEY — [Product], [segment]

Product description shown:

1. At what price would you consider this product so expensive that you would not consider buying it?
2. At what price would you consider it expensive, but still consider buying it?
3. At what price would you consider it a bargain, a great buy for the money?
4. At what price would it be so cheap that you would doubt its quality?

Results
  Acceptable range:        from        to
  Optimal price point:
  Indifference price point:
  Decision:`,
  sources: [
    'Peter H. van Westendorp, “NSS Price Sensitivity Meter: A New Approach to Study Consumer Perception of Prices”, ESOMAR Congress, Venice, 1976.'
  ],
  related: ['kano-model', 'Gabor-Granger', 'Conjoint and MaxDiff', 'Value-based pricing', 'Good, Better, Best']
};
