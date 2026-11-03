module.exports = {
  slug: 'whole-product',
  name: 'Whole Product',
  company: 'lumora',
  origin: 'Theodore Levitt, 1980; adapted by Geoffrey Moore, 1991',
  oneLiner: 'Customers buy more than the core product: everything around it that makes it work for them.',
  question: 'What does the customer need around our core product before they can get the full value from it?',
  glance: {
    'Use it for': 'Finding gaps that stop mainstream customers from buying',
    'You need': 'A view of everything customers do to make the product work',
    'You get': 'A list of what to build, partner for or bundle',
    'Time': 'A workshop with sales, service and product'
  },
  steps: [
    { title: 'Generic product', text: 'The core thing you ship. On its own, it rarely meets the whole need.', example: 'The rapid test reader and its test cartridges.' },
    { title: 'Expected product', text: 'What customers assume comes with it. Missing any of these blocks the sale.', example: 'Validated accuracy, staff training and a service contract.' },
    { title: 'Augmented product', text: 'What goes beyond expectations and helps the customer get the most out of it.', example: 'Results sent straight to the patient record, and billing codes prepared.' },
    { title: 'Potential product', text: 'What the product could become as the market grows, with partners and new features.', example: 'A network of practices sharing anonymised data on local infections.' },
    { title: 'Complete it for one segment', text: 'Mainstream buyers want the whole product. Build or partner for it one segment at a time, starting with your beachhead.', example: 'Lumora completes the whole product for paediatric practices first.' }
  ],
  diagram: {
    type: 'rings', viewBox: '0 0 800 440',
    alt: 'Whole product: the generic product at the centre, surrounded by the expected, augmented and potential product.',
    rings: [
      { step: 4, title: 'Potential', text: 'What it could become, with partners', ex: 'Shared, anonymised local infection data' },
      { step: 3, title: 'Augmented', text: 'Beyond expectations', ex: 'Results to the patient record, billing codes ready' },
      { step: 2, title: 'Expected', text: 'What customers assume comes with it', ex: 'Validated accuracy, training, service contract' },
      { step: 1, title: 'Generic', text: 'The core thing you ship', ex: 'Reader and test cartridges' }
    ],
    note: { step: 5, label: 'Complete it for one segment first', ex: 'Paediatric practices first' }
  },
  whenToUse: ['Moving from early adopters to mainstream customers.', 'Sales stall even though the core product works.', 'Planning partnerships and services around a product.'],
  whenNot: ['Simple, self-contained products with nothing around them.', 'As a feature wish list. The question is what this segment needs to buy.'],
  howTo: ['Write the generic product in one line.', 'Ask sales and service what customers assume comes with it, and what blocks deals.', 'List what would help customers get more value: integrations, services, content.', 'Decide for each item: build, partner or bundle.', 'Complete the whole product for one segment before widening.'],
  pitfalls: ['Treating the core product as the whole offer.', 'Trying to complete the whole product for every segment at once.', 'Forgetting partners, who often supply the missing pieces.'],
  template: `WHOLE PRODUCT — [Product], [segment]

Generic product:
Expected product (what blocks the sale if missing):
Augmented product:
Potential product:

Gaps: build / partner / bundle
1.
2.`,
  sources: ['Theodore Levitt, “Marketing Success Through Differentiation of Anything”, Harvard Business Review, 1980.', 'Geoffrey A. Moore, Crossing the Chasm, HarperBusiness, 1991.'],
  related: ['crossing-the-chasm', 'kano-model', 'Five Product Levels', 'Beachhead market (24 steps)']
};
