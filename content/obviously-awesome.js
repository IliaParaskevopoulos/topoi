module.exports = {
  slug: 'obviously-awesome',
  name: 'Obviously Awesome',
  company: 'tessera',
  origin: 'April Dunford, 2019',
  oneLiner: 'A positioning method that starts from what customers would do without you, then works out what makes you different and who cares most.',
  question: 'In what context does our product make the most sense, so the right buyers see why it matters?',
  glance: {
    'Use it for': 'Positioning a new product, or repositioning one that is not selling as it should',
    'You need': 'A list of your best customers and a cross-functional team',
    'You get': 'A positioning that messaging, sales and product can all build on',
    'Time': 'One or two workshops'
  },
  steps: [
    { title: 'Competitive alternatives',
      text: 'Start with what customers would do if you did not exist. That includes doing nothing, using a spreadsheet or hiring someone, not only named competitors.',
      example: 'Plants would keep using spreadsheets and paper, add the maintenance module of their ERP, or buy an older desktop maintenance system.' },
    { title: 'Unique attributes',
      text: 'List the features and capabilities you have that those alternatives lack. Keep this factual.',
      example: 'Set up in a day from an existing asset list, works offline on technicians’ phones, and warns before parts fail.' },
    { title: 'Value and proof',
      text: 'Translate each attribute into value for the customer, and back it with proof.',
      example: 'Fewer unplanned stops without an IT project. Proof: a pilot plant cut unplanned downtime by 18% in six months.' },
    { title: 'Best-fit customers',
      text: 'Identify who cares most about that value. Describe them by characteristics you can spot, not by demographics alone.',
      example: 'Plants with 50 to 500 staff, several production lines and no dedicated maintenance IT team.' },
    { title: 'Market category',
      text: 'Choose the market frame that makes your value obvious to those customers. The category sets what they compare you with, what they expect to pay and which features they assume.',
      example: 'Positioned as maintenance planning for mid-size plants, not as an enterprise asset management suite, so buyers compare it with spreadsheets, not with ERP projects.' },
    { title: 'Relevant trends',
      text: 'Optional. Add a trend only if it makes your value more urgent for these customers right now.',
      example: 'A shortage of skilled technicians makes every avoided emergency repair count.' }
  ],
  diagram: {
    type: 'chain',
    viewBox: '0 0 800 490',
    alt: 'Obviously Awesome: six positioning components worked out in order, from competitive alternatives to unique attributes, value, best-fit customers, market category and relevant trends.',
    nodes: [
      { step: 1, title: 'Competitive alternatives', text: 'What customers would do if you did not exist.', ex: 'Spreadsheets, ERP module, older desktop tools.' },
      { step: 2, title: 'Unique attributes', text: 'What you have that the alternatives lack.', ex: 'Live in a day, offline app, failure alerts.' },
      { step: 3, title: 'Value and proof', text: 'What those attributes do for customers, with evidence.', ex: 'Fewer stops, no IT project. 18% less downtime.' },
      { step: 4, title: 'Best-fit customers', text: 'Who cares most about that value.', ex: 'Plants of 50–500 staff without maintenance IT.' },
      { step: 5, title: 'Market category', text: 'The frame that makes your value obvious.', ex: 'Maintenance planning for mid-size plants.' },
      { step: 6, title: 'Relevant trends', text: 'Optional. Only if it adds urgency.', ex: 'Technician shortage.', optional: true }
    ]
  },
  whenToUse: [
    'Launching a new product, or a product that has changed a lot since it was first positioned.',
    'The product is good but sales cycles are long and prospects do not “get it”.',
    'Entering a new segment where the old positioning does not fit.'
  ],
  whenNot: [
    'Before you have any customers. The method relies on knowing who already loves the product and why.',
    'Defining a company’s brand identity. This works at product level.'
  ],
  howTo: [
    'Bring together people from product, marketing, sales and customer success.',
    'Agree on your best customers: the ones who bought quickly, stay and refer others.',
    'Work through the components in order. Each answer depends on the one before it.',
    'Capture the result on one page and test it with sales conversations.',
    'Turn it into messaging and a sales story only once the positioning holds up.'
  ],
  pitfalls: [
    'Starting with the category (“we are an X platform”) before understanding the alternatives.',
    'Listing attributes that nobody in the target segment values.',
    'Forcing a fashionable trend into the positioning when it adds no urgency.'
  ],
  template: `POSITIONING — [Product]

1. Competitive alternatives
   What would customers do if we did not exist?

2. Unique attributes
   What do we have that the alternatives lack?

3. Value and proof
   Attribute → value for the customer → proof

4. Best-fit customers
   Who cares most about this value? How can we recognise them?

5. Market category
   Which frame makes our value obvious to them?

6. Relevant trends (optional)
   Which trend makes this more urgent now?`,
  sources: [
    'April Dunford, Obviously Awesome: How to Nail Product Positioning so Customers Get It, Buy It, Love It, Ambient Press, 2019.',
    'April Dunford, Sales Pitch, Ambient Press, 2023.'
  ],
  note: 'The book runs this as a ten-step team exercise. The diagram shows the components in the order you work them out.',
  related: ['positioning-statement', 'value-proposition-canvas', 'crossing-the-chasm', 'messaging-house', 'category-design']
};
