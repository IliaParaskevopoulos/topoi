module.exports = {
  slug: 'good-better-best',
  name: 'Good, Better, Best',
  company: 'kontor',
  origin: 'Long-standing retail practice; now standard in software pricing',
  oneLiner: 'Three versions at three prices, so each segment finds its fit and most choose the middle.',
  question: 'How do we package our offer so different customers pay for the value they need?',
  glance: {
    'Use it for': 'Packaging and pricing an offer for different segments',
    'You need': 'Segments that value different things, and a view of willingness to pay',
    'You get': 'Three tiers with clear differences and a target tier for most buyers',
    'Time': 'Two to three workshops, plus pricing research'
  },
  steps: [
    { title: 'Good', text: 'The entry tier: enough to solve the core need, at a low barrier. It brings in price-sensitive buyers.', example: 'Pay as you go: 1.9% fee per invoice, no monthly cost.' },
    { title: 'Better', text: 'The tier you want most customers to choose: the best value for the main segment.', example: 'CHF 49 a month: 1.2% fee, automatic sync, two users.' },
    { title: 'Best', text: 'The premium tier for buyers who need more. It also makes the middle tier look reasonable.', example: 'CHF 149 a month: 0.8% fee, a credit line, a named contact.' },
    { title: 'Design the middle to win', text: 'Set the differences so the middle tier is the obvious choice for your main segment. Each step up should add value one group clearly wants.', example: 'Businesses that finance more than about CHF 7,000 a month pay less on the CHF 49 plan, so most choose it.' }
  ],
  diagram: {
    type: 'tiers', viewBox: '0 0 800 450',
    alt: 'Three pricing tiers rising from good to better to best, with the middle tier marked as the one most customers choose.',
    tiers: [
      { step: 1, height: 230, title: 'Good', sub: 'Entry price', subEx: 'Pay as you go', items: '• Core need solved\n• Low barrier', itemsEx: '• 1.9% fee per invoice\n• No monthly cost\n• One user' },
      { step: 2, height: 300, title: 'Better', sub: 'Main segment', subEx: 'CHF 49 a month', items: '• Best value\n• What most need', itemsEx: '• 1.2% fee per invoice\n• Automatic sync\n• Two users' },
      { step: 3, height: 370, title: 'Best', sub: 'Premium', subEx: 'CHF 149 a month', items: '• Everything\n• For heavy users', itemsEx: '• 0.8% fee per invoice\n• Credit line\n• Named contact' }
    ],
    note: { step: 4, at: 1, label: 'Most should choose this', ex: 'Most choose CHF 49 plan' }
  },
  whenToUse: ['Customers differ clearly in how much they use or value the product.', 'Launching a new pricing model.', 'Too many buyers choose the cheapest option, or none.'],
  whenNot: ['Products with one clear use and one buyer type.', 'Large negotiated deals priced case by case.'],
  howTo: ['Segment customers by the value they get, not by company size alone.', 'Choose a value metric that grows with value, such as invoices or users.', 'Put each feature in the lowest tier where its main segment needs it.', 'Price the tiers with research such as Van Westendorp or conjoint.', 'Watch the tier mix after launch and adjust the fences.'],
  pitfalls: ['A good tier so complete that nobody upgrades.', 'Tiers that differ only in quantity, with no reason to step up.', 'Too many tiers, which slows the decision.'],
  template: `GOOD, BETTER, BEST — [Product]

Value metric:

Good:    price /  for whom /  includes
Better:  price /  for whom /  includes
Best:    price /  for whom /  includes

Why most will choose Better:
Fences between tiers:`,
  sources: ['A long-standing retail and catalogue practice; there is no single original source.'],
  related: ['van-westendorp', 'Value metric', 'Leaders, Fillers, Killers', 'Decoy and anchoring']
};
