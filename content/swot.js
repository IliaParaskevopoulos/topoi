module.exports = {
  slug: 'swot',
  name: 'SWOT and TOWS',
  company: 'orto',
  origin: 'SWOT: 1960s, origin disputed. TOWS: Heinz Weihrich, 1982',
  oneLiner: 'Strengths and weaknesses inside the company, opportunities and threats outside it, turned into actions.',
  question: 'What do we have going for us, what holds us back, and what is changing around us?',
  glance: {
    'Use it for': 'A shared starting picture before strategy or planning work',
    'You need': 'Honest input from several teams, plus market facts',
    'You get': 'Four short lists and the strategic moves they suggest',
    'Time': 'A 90-minute workshop'
  },
  steps: [
    { title: 'Set the grid', text: 'Top row: inside the company. Bottom row: outside it. Left column: helpful. Right column: harmful.', example: 'Orto Foods runs a SWOT before its annual plan.' },
    { title: 'Strengths', text: 'Internal things that help you win: capabilities, assets, reputation, relationships.', example: 'Strong supermarket listings and a trusted Swiss-made brand.' },
    { title: 'Weaknesses', text: 'Internal things that hold you back. Be specific, and include what customers complain about.', example: 'Short shelf life raises waste and logistics costs.' },
    { title: 'Opportunities', text: 'External changes you could use: trends, new segments, regulation, competitor moves.', example: 'Rising demand for high-protein and plant-based meals.' },
    { title: 'Threats', text: 'External changes that could hurt you: new competitors, substitutes, cost increases, rules.', example: 'Supermarkets’ own-label ready meals at lower prices.' },
    { title: 'Turn it into actions', text: 'A SWOT on its own decides nothing. Pair the boxes (the TOWS step): use strengths for opportunities, fix weaknesses that threats expose.', example: 'Orto uses its brand to lead in high-protein meals, and cuts waste to answer own-label prices.' }
  ],
  diagram: {
    type: 'matrix', viewBox: '0 0 800 500',
    alt: 'SWOT grid: strengths and weaknesses on the internal row, opportunities and threats on the external row, with actions for each.',
    axesStep: 1,
    x: { title: 'Effect', low: 'Helpful', high: 'Harmful' },
    y: { title: 'Source', low: 'External', high: 'Internal' },
    quadrants: [
      { pos: 'tl', step: 2, title: 'Strengths', text: 'What helps you win, from inside.', ex: 'Strong listings, trusted Swiss brand.', risk: 'Build on', riskEx: 'Lead in protein meals' },
      { pos: 'tr', step: 3, title: 'Weaknesses', text: 'What holds you back, from inside.', ex: 'Short shelf life, high waste.', risk: 'Fix or avoid', riskEx: 'Cut waste' },
      { pos: 'bl', step: 4, title: 'Opportunities', text: 'Changes outside you could use.', ex: 'Demand for high-protein meals.', risk: 'Pursue', riskEx: 'Launch protein range' },
      { pos: 'br', step: 5, title: 'Threats', text: 'Changes outside that could hurt.', ex: 'Cheaper own-label meals.', risk: 'Defend', riskEx: 'Answer on value' }
    ],
    risk: { step: 6, arrow: false }
  },
  whenToUse: ['At the start of an annual plan or strategy review.', 'Before entering a new market, to get a shared view quickly.', 'Briefing a new team or agency.'],
  whenNot: ['As the whole strategy. It describes the situation; it does not choose.', 'When the team cannot be honest about weaknesses. The result will flatter you.'],
  howTo: ['Agree the scope: the whole company, one product, or one market.', 'Collect input from sales, product, operations and customers, not only marketing.', 'Keep each box to five points or fewer, each specific enough to act on.', 'Pair the boxes into TOWS moves: strengths with opportunities, weaknesses with threats.', 'Turn the two or three strongest moves into objectives with owners.'],
  pitfalls: ['Vague points such as “good people” or “competition”.', 'Listing internal plans as opportunities. Opportunities are outside the company.', 'Stopping at the grid without deciding anything.'],
  template: `SWOT — [Company or product], [date]

Strengths (internal, helpful):
Weaknesses (internal, harmful):
Opportunities (external, helpful):
Threats (external, harmful):

TOWS moves
  Strengths + Opportunities:
  Strengths + Threats:
  Weaknesses + Opportunities:
  Weaknesses + Threats:`,
  sources: ['Heinz Weihrich, “The TOWS Matrix: A Tool for Situational Analysis”, Long Range Planning, 1982.', 'SWOT is widely attributed to strategic-planning research in the United States in the 1960s; its exact origin is disputed.'],
  related: ['five-forces', 'ansoff-matrix', 'PESTLE', 'bcg-matrix']
};
