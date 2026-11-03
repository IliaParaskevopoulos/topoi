module.exports = {
  slug: 'ansoff-matrix',
  name: 'Ansoff Matrix',
  company: 'orto',
  origin: 'Igor Ansoff, 1957',
  oneLiner: 'Four ways to grow, sorted by how far each one takes you from what you already sell and who you already sell to.',
  question: 'Where should our next growth come from, and how much risk does each option carry?',
  glance: {
    'Use it for': 'Growth planning and comparing growth bets',
    'You need': 'A clear list of current products and current markets',
    'You get': 'A balanced set of growth initiatives with their risk made visible',
    'Time': 'A 90-minute workshop'
  },
  steps: [
    { title: 'Set the two axes',
      text: 'Products run left to right, from what you sell today to something new. Markets run bottom to top, from the customers you serve today to new ones.',
      example: 'For Orto Foods, today’s product is its chilled ready-meal range. Today’s market is Swiss supermarket chains.' },
    { title: 'Market penetration',
      text: 'Sell more of your current products to your current markets: win share, raise usage, take accounts from competitors. This is the lowest risk, because you know both the product and the buyer.',
      example: 'Win more shelf space at current supermarket partners with a weekday-dinner promotion plan.' },
    { title: 'Product development',
      text: 'Bring new products to the customers you already know. Your market knowledge carries over; the product is the new risk.',
      example: 'Launch a high-protein lunch range for the same supermarkets.' },
    { title: 'Market development',
      text: 'Take current products to new markets: new regions, new segments or new channels. The product is proven; the market is not.',
      example: 'Sell the existing range to company canteens and petrol-station shops.' },
    { title: 'Diversification',
      text: 'New products for new markets. Both sides are unknown, so this carries the most risk and needs the strongest reason.',
      example: 'Start a meal subscription delivered straight to homes.' },
    { title: 'Read the risk',
      text: 'Risk rises as you move away from the bottom-left corner. Most plans mix quadrants. The matrix shows how much of the plan rests on things you have not proven yet.',
      example: 'Orto puts most of its budget behind penetration and the lunch range, and tests home delivery in one city.' }
  ],
  diagram: {
    type: 'matrix',
    viewBox: '0 0 800 500',
    alt: 'Ansoff Matrix: a two by two grid of products against markets, giving market penetration, product development, market development and diversification.',
    axesStep: 1,
    x: { title: 'Products', low: 'Existing', high: 'New' },
    y: { title: 'Markets', low: 'Existing', high: 'New' },
    quadrants: [
      { pos: 'bl', step: 2, title: 'Market penetration', text: 'Current products, current markets. Win share and usage.', ex: 'Weekday-dinner promotions at current supermarkets.', risk: 'Risk: low' },
      { pos: 'br', step: 3, title: 'Product development', text: 'New products for the customers you already serve.', ex: 'High-protein lunch range for the same chains.', risk: 'Risk: medium' },
      { pos: 'tl', step: 4, title: 'Market development', text: 'Current products in new regions, segments or channels.', ex: 'Current meals for canteens and petrol-station shops.', risk: 'Risk: medium' },
      { pos: 'tr', step: 5, title: 'Diversification', text: 'New products for new markets. Both sides unproven.', ex: 'Home-delivered meal subscription.', risk: 'Risk: high' }
    ],
    risk: { step: 6 }
  },
  whenToUse: [
    'Setting growth priorities for the year or for a new strategy cycle.',
    'Showing leadership how much of a plan depends on unproven products or markets.',
    'Checking whether a roadmap has drifted toward too many new-for-new bets.'
  ],
  whenNot: [
    'Choosing between two options in the same quadrant. You need finer analysis, such as market sizing or a business case.',
    'Working on positioning or messaging. The matrix says where to grow, not how to win there.'
  ],
  howTo: [
    'Write down what counts as a current product and a current market before you place anything. Disagreement here is common and useful.',
    'List every growth initiative on the table, including the ones already running.',
    'Place each one in a quadrant. If it sits on a line, decide which side is more true.',
    'For each initiative, estimate revenue potential and your confidence in it.',
    'Look at the overall mix and the capabilities each quadrant needs, then decide what to fund.'
  ],
  pitfalls: [
    'Calling something a new market when the buyer is the same. A new country with the same type of customer is often closer to penetration than it looks.',
    'Treating the quadrants as exclusive. A healthy plan usually has work in two or three.',
    'Ignoring capability. Diversification often needs skills, certifications or channels you do not have yet.'
  ],
  template: `ANSOFF MATRIX — [Company], [period]

Current products:
Current markets:

1. Market penetration (current products, current markets)
   Initiative:
   Revenue potential:
   Confidence (low / medium / high):

2. Product development (new products, current markets)
   Initiative:
   Revenue potential:
   Confidence:

3. Market development (current products, new markets)
   Initiative:
   Revenue potential:
   Confidence:

4. Diversification (new products, new markets)
   Initiative:
   Revenue potential:
   Confidence:

Overall mix and decision:`,
  sources: [
    'H. Igor Ansoff, “Strategies for Diversification”, Harvard Business Review, 1957.',
    'H. Igor Ansoff, Corporate Strategy, McGraw-Hill, 1965.'
  ],
  related: ['crossing-the-chasm', 'value-proposition-canvas', 'BCG Growth-Share Matrix', 'Three Horizons', 'SWOT / TOWS']
};
