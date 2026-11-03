// Curves are generated so the chart stays smooth and consistent.
const lg = (t, c, w) => 1 / (1 + Math.exp(-(t - c) / w));
const sales = t => 0.98 * lg(t, 3.2, 0.75) * (1 - lg(t, 8.6, 0.7));
const profit = t => 0.72 * lg(t, 3.6, 0.7) * (1 - lg(t, 7.4, 0.8)) - 0.26 * Math.exp(-t / 1.6);
const pts = f => { const a = []; for (let t = 0; t <= 10.0001; t += 0.1) a.push([+t.toFixed(2), +f(t).toFixed(3)]); return a; };

module.exports = {
  slug: 'product-lifecycle',
  name: 'Product Lifecycle',
  company: 'arvena',
  origin: 'Joel Dean, 1950; popularised by Theodore Levitt, 1965',
  oneLiner: 'Products move through introduction, growth, maturity and decline, and each stage calls for different marketing.',
  question: 'Where is each product in its life, and what should marketing do differently because of it?',
  glance: {
    'Use it for': 'Setting the right marketing goals per product and balancing a portfolio',
    'You need': 'Sales history and market growth data for each product',
    'You get': 'Each product placed on the curve, with stage-specific goals',
    'Time': 'Two hours with sales data in hand'
  },
  steps: [
    { title: 'Sales over time',
      text: 'Track sales of a product or category from launch to withdrawal. The curve rises, flattens and eventually falls.',
      example: 'Arvena places each of its capsule lines on one curve.' },
    { title: 'Introduction',
      text: 'Sales are low and costs high. The job is to educate the market, win first customers and prove the product works.',
      example: 'The acid-resistant capsule: pilot runs with a few brands and heavy technical support.' },
    { title: 'Growth',
      text: 'Sales rise fast and competitors arrive. The job is to build preference, widen distribution and scale delivery.',
      example: 'Printed and coloured capsules for premium brands: demand is rising and rivals are launching similar shells.' },
    { title: 'Maturity',
      text: 'Growth slows and competition shifts to price. The job is to defend share, differentiate on service and cut cost.',
      example: 'The standard plant-based capsule: stable volume, price pressure, competing on lead times.' },
    { title: 'Decline',
      text: 'Sales fall as needs change or better options appear. Harvest, reposition, or plan the withdrawal.',
      example: 'The first-generation shell with slower dissolution, which customers are replacing with the newer version.' },
    { title: 'Profit follows later',
      text: 'Profit usually trails sales: negative at launch, highest in late growth or early maturity, then shrinking.',
      example: 'Profit from the mature capsule range pays for the acid-resistant launch.' }
  ],
  diagram: {
    type: 'chart',
    viewBox: '0 0 800 450',
    left: 90,
    yTitleGap: 34,
    alt: 'Product lifecycle: a sales curve rising through introduction and growth, flattening in maturity and falling in decline, with a profit curve that starts negative and peaks earlier.',
    axesStep: 1,
    x: { domain: [0, 10], title: 'Time' },
    y: { domain: [-0.32, 1.3], title: 'Sales and profit' },
    hlines: [{ v: 0, step: 6, label: 'Break-even', ex: 'Break-even', at: 6.5, below: true }],
    bands: [
      { step: 2, x0: 0, x1: 2.5, label: 'Introduction', ex: 'Acid-resistant' },
      { step: 3, x0: 2.5, x1: 5, label: 'Growth', ex: 'Printed capsules' },
      { step: 4, x0: 5, x1: 8, label: 'Maturity', ex: 'Standard capsule' },
      { step: 5, x0: 8, x1: 10, label: 'Decline', ex: 'First-generation' }
    ],
    curves: [
      { step: 1, points: pts(sales), label: 'Sales', labelAt: [6.4, sales(6.4)], dy: -12, anchor: 'middle' },
      { step: 6, points: pts(profit), label: 'Profit', labelAt: [5.6, profit(5.6)], dy: 26, anchor: 'middle' }
    ]
  },
  whenToUse: [
    'Setting different goals for different products instead of one plan for all.',
    'Reviewing a portfolio to make sure new products are coming through as old ones decline.',
    'Explaining to leadership why a mature product gets less launch budget than a new one.'
  ],
  whenNot: [
    'Predicting when a stage will end. The curve describes; it does not forecast.',
    'Fashion or fad products whose curves look nothing like the classic shape.'
  ],
  howTo: [
    'Plot sales for each product over the last three to five years, alongside market growth.',
    'Place each product in a stage based on its sales trend and the state of competition.',
    'Write one goal per product that fits its stage: educate, grow share, defend, or harvest.',
    'Check the portfolio balance: enough products in introduction and growth to replace those in decline.',
    'Review once a year, because products move between stages.'
  ],
  pitfalls: [
    'Treating decline as fate. A repositioning or a new use can restart growth.',
    'Running growth-stage campaigns for a mature product, where the job is to defend and differentiate.',
    'Confusing a category’s lifecycle with a single brand’s.'
  ],
  template: `PRODUCT LIFECYCLE REVIEW — [Portfolio], [year]

Product            Stage          Sales trend      Goal for the year
1.
2.
3.

Portfolio balance:
  Introduction:
  Growth:
  Maturity:
  Decline:

Gaps and decisions:`,
  sources: [
    'Joel Dean, “Pricing Policies for New Products”, Harvard Business Review, 1950.',
    'Theodore Levitt, “Exploit the Product Life Cycle”, Harvard Business Review, 1965.'
  ],
  related: ['crossing-the-chasm', 'ansoff-matrix', 'BCG Growth-Share Matrix', 'Hype Cycle', 'Launch tiers']
};
