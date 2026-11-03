module.exports = {
  slug: 'five-forces',
  name: 'Porter’s Five Forces',
  company: 'halden',
  origin: 'Michael Porter, 1979',
  oneLiner: 'Five pressures that decide how much profit an industry leaves for the companies in it.',
  question: 'How attractive is this market, and which pressures will squeeze our margins?',
  glance: {
    'Use it for': 'Judging a market before entering it, or explaining margin pressure in one you are in',
    'You need': 'Knowledge of competitors, suppliers, buyers and alternatives',
    'You get': 'A rating of each pressure and a view of where the profit goes',
    'Time': 'Half a day, plus desk research'
  },
  steps: [
    { title: 'Rivalry among competitors',
      text: 'Start in the middle: how hard do existing competitors fight? Many similar players, slow growth and high fixed costs make rivalry fierce.',
      example: 'A handful of regional quarries compete on purity and on the cost of freight to the customer’s plant.' },
    { title: 'Threat of new entrants',
      text: 'How easily can a new player join? High capital needs, regulation, scale advantages and strong brands keep newcomers out.',
      example: 'A new quarry needs permits that take five to ten years and heavy investment. Few newcomers try.' },
    { title: 'Power of suppliers',
      text: 'How much can your suppliers raise prices or cut quality? Supplier power is high when there are few of them or switching is hard.',
      example: 'Energy and rail freight are a large share of cost, and there are only a few providers.' },
    { title: 'Power of buyers',
      text: 'How much can your customers push prices down? Buyer power is high when a few customers buy most of the volume or can switch easily.',
      example: 'A few large glassmakers buy most of the volume and negotiate hard every year.' },
    { title: 'Threat of substitutes',
      text: 'What else could do the same job for the customer, from a different industry or with a different approach?',
      example: 'Recycled glass partly replaces new sand in container glass, but not in solar-grade glass.' },
    { title: 'Rate each force',
      text: 'Rate each force high, medium or low. The more forces are high, the less profit the industry leaves for its players. Then ask which forces you can change.',
      example: 'Buyer power is the biggest threat, so Halden shifts its mix towards solar makers, where purity matters more than price.' }
  ],
  diagram: {
    type: 'forces',
    viewBox: '0 0 800 480',
    alt: 'Porter’s Five Forces: rivalry among competitors in the centre, surrounded by the threat of new entrants, the power of suppliers, the power of buyers and the threat of substitutes.',
    forces: [
      { pos: 'center', step: 1, title: 'Rivalry among competitors', text: 'How hard current players fight.', ex: 'Few quarries, competing on purity and freight.', rating: 'Rate: high to low', ratingEx: 'Medium' },
      { pos: 'top', step: 2, title: 'Threat of new entrants', text: 'How easily newcomers can join.', ex: 'Permits take 5–10 years.', rating: 'Rate: high to low', ratingEx: 'Low' },
      { pos: 'left', step: 3, title: 'Power of suppliers', text: 'How much suppliers can squeeze you.', ex: 'Few energy and rail providers.', rating: 'Rate: high to low', ratingEx: 'Medium' },
      { pos: 'right', step: 4, title: 'Power of buyers', text: 'How much customers can push prices down.', ex: 'A few glassmakers buy most volume.', rating: 'Rate: high to low', ratingEx: 'High' },
      { pos: 'bottom', step: 5, title: 'Threat of substitutes', text: 'Other ways to do the same job.', ex: 'Recycled glass, but not for solar.', rating: 'Rate: high to low', ratingEx: 'Medium' }
    ],
    rating: { step: 6 }
  },
  whenToUse: [
    'Deciding whether to enter a market or segment.',
    'Explaining to leadership why margins are under pressure.',
    'Preparing a strategy that changes the balance of power, for example by reducing buyer concentration.'
  ],
  whenNot: [
    'Comparing your product with one competitor’s. Use a battlecard or a feature comparison.',
    'Fast-changing markets where the boundaries of the industry are unclear. Define the industry first, or the analysis drifts.'
  ],
  howTo: [
    'Define the industry precisely: which product, which customers, which region.',
    'For each force, list the specific factors that make it strong or weak.',
    'Rate each force high, medium or low, and write down why.',
    'Look at where the profit goes: to you, your suppliers, your buyers, or nobody.',
    'Choose one or two forces you can change, and build the plan around them.'
  ],
  pitfalls: [
    'Defining the industry too broadly, such as “minerals” instead of “high-purity silica for glass”.',
    'Listing factors without rating them, which leaves no conclusion.',
    'Treating the result as fixed. Regulation, technology and consolidation change the forces over time.'
  ],
  template: `FIVE FORCES — [Industry, region], [date]

Industry definition:

Rivalry among competitors        Rating:
  Factors:

Threat of new entrants           Rating:
  Factors:

Power of suppliers               Rating:
  Factors:

Power of buyers                  Rating:
  Factors:

Threat of substitutes            Rating:
  Factors:

Where the profit goes:
Forces we can change, and how:`,
  sources: [
    'Michael E. Porter, “How Competitive Forces Shape Strategy”, Harvard Business Review, 1979.',
    'Michael E. Porter, Competitive Strategy, Free Press, 1980.',
    'Michael E. Porter, “The Five Competitive Forces That Shape Strategy”, Harvard Business Review, 2008.'
  ],
  related: ['ansoff-matrix', 'PESTLE', 'SWOT and TOWS', 'Porter’s Generic Strategies', '7 Powers']
};
