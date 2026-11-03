module.exports = {
  slug: 'bcg-matrix',
  name: 'BCG Growth-Share Matrix',
  company: 'arvena',
  origin: 'Bruce Henderson, Boston Consulting Group, 1970',
  oneLiner: 'Sort products by market growth and market share, to decide where to invest and where to take cash out.',
  question: 'Which products should we invest in, which should fund the others, and which should we let go?',
  glance: {
    'Use it for': 'Portfolio decisions across several products or business units',
    'You need': 'Market growth rates and your share relative to the leader',
    'You get': 'Each product placed in one of four roles, with a funding direction',
    'Time': 'Two hours with data in hand'
  },
  steps: [
    { title: 'Set the axes', text: 'Left to right: relative market share, high on the left by convention. Bottom to top: market growth.', example: 'Arvena places its four capsule lines on the grid.' },
    { title: 'Stars', text: 'High share in a fast-growing market. They lead but need investment to keep up with growth.', example: 'Printed and coloured capsules for premium brands.' },
    { title: 'Question marks', text: 'Low share in a fast-growing market. They could become stars, or drain cash. Invest selectively or exit.', example: 'The new acid-resistant capsule.' },
    { title: 'Cash cows', text: 'High share in a slow-growing market. They need little investment and generate cash.', example: 'The standard plant-based capsule.' },
    { title: 'Dogs', text: 'Low share in a slow-growing market. Keep only if they serve a purpose; otherwise harvest or exit.', example: 'The first-generation shell with slower dissolution.' },
    { title: 'Move the cash', text: 'Use cash from cash cows to fund the question marks most likely to become stars. Stars become cash cows as their market slows.', example: 'Cash from the standard capsule funds the acid-resistant launch.' }
  ],
  diagram: {
    type: 'matrix', viewBox: '0 0 800 500',
    alt: 'BCG matrix: stars, question marks, cash cows and dogs, sorted by relative market share and market growth, with an arrow moving cash from cash cows to question marks.',
    axesStep: 1,
    x: { title: 'Relative market share', low: 'High', high: 'Low' },
    y: { title: 'Market growth', low: 'Low', high: 'High' },
    quadrants: [
      { pos: 'tl', step: 2, title: 'Stars', text: 'Lead a growing market. Need investment.', ex: 'Printed capsules for premium brands.', risk: 'Invest', riskEx: 'Invest' },
      { pos: 'tr', step: 3, title: 'Question marks', text: 'Small share of a growing market.', ex: 'Acid-resistant capsule.', risk: 'Invest or exit', riskEx: 'Fund the launch' },
      { pos: 'bl', step: 4, title: 'Cash cows', text: 'Lead a slow market. Generate cash.', ex: 'Standard plant-based capsule.', risk: 'Harvest', riskEx: 'Fund others' },
      { pos: 'br', step: 5, title: 'Dogs', text: 'Small share of a slow market.', ex: 'First-generation shell.', risk: 'Divest', riskEx: 'Phase out' }
    ],
    risk: { step: 6 }
  },
  whenToUse: ['Reviewing a portfolio of products, brands or business units.', 'Explaining to leadership why marketing budget is uneven across products.', 'Deciding which products to phase out.'],
  whenNot: ['Single-product companies.', 'Markets where share does not bring cost or scale advantages. The logic depends on them.'],
  howTo: ['Define each product’s market precisely, then find its growth rate.', 'Calculate relative share: your share divided by the largest competitor’s.', 'Place each product, sized by revenue if you can.', 'Decide a role per product: invest, hold, harvest or exit.', 'Check the portfolio has enough question marks and stars for the future.'],
  pitfalls: ['Calling every product a star.', 'Defining markets narrowly so that every product leads its own niche.', 'Starving a dog that customers need to buy the rest of the range.'],
  template: `BCG MATRIX — [Portfolio], [year]

Product      Market growth     Relative share     Quadrant      Role
1.
2.
3.

Cash sources:
Where the cash goes:
Products to exit:`,
  sources: ['Bruce D. Henderson, “The Product Portfolio”, BCG Perspectives, 1970.'],
  related: ['ansoff-matrix', 'product-lifecycle', 'GE–McKinsey Nine-Box', 'Three Horizons']
};
