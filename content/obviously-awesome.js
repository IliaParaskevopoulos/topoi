module.exports = {
  slug: 'obviously-awesome',
  name: 'Obviously Awesome',
  company: 'arvena',
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
      example: 'Brands would use a gelatin capsule with a separate enteric coating step, or a coated tablet.' },
    { title: 'Unique attributes',
      text: 'List the features and capabilities you have that those alternatives lack. Keep this factual.',
      example: 'Acid resistance built into the capsule shell, with no coating step. Plant-based.' },
    { title: 'Value and proof',
      text: 'Translate each attribute into value for the customer, and back it with proof.',
      example: 'One fewer manufacturing step and one fewer supplier. Proof: dissolution data at stomach pH and a lower cost per thousand capsules.' },
    { title: 'Best-fit customers',
      text: 'Identify who cares most about that value. Describe them by characteristics you can spot, not by demographics alone.',
      example: 'Mid-size probiotic and enzyme brands that outsource encapsulation and already pay for coating.' },
    { title: 'Market category',
      text: 'Choose the market frame that makes your value obvious to those customers. The category sets what they compare you with, what they expect to pay and which features they assume.',
      example: 'Positioned as a delayed-release capsule, not a plant-based capsule, so buyers compare it with coating rather than with cheap shells.' },
    { title: 'Relevant trends',
      text: 'Optional. Add a trend only if it makes your value more urgent for these customers right now.',
      example: 'Clean-label demand makes removing coating chemicals a selling point.' }
  ],
  diagram: {
    type: 'chain',
    viewBox: '0 0 800 490',
    alt: 'Obviously Awesome: six positioning components worked out in order, from competitive alternatives to unique attributes, value, best-fit customers, market category and relevant trends.',
    nodes: [
      { step: 1, title: 'Competitive alternatives', text: 'What customers would do if you did not exist.', ex: 'Gelatin capsule plus a coating step, or a coated tablet.' },
      { step: 2, title: 'Unique attributes', text: 'What you have that the alternatives lack.', ex: 'Acid resistance in the shell. No coating. Plant-based.' },
      { step: 3, title: 'Value and proof', text: 'What those attributes do for customers, with evidence.', ex: 'One fewer process step and supplier. Dissolution data.' },
      { step: 4, title: 'Best-fit customers', text: 'Who cares most about that value.', ex: 'Mid-size probiotic brands that pay for coating today.' },
      { step: 5, title: 'Market category', text: 'The frame that makes your value obvious.', ex: 'Delayed-release capsule, not plant-based capsule.' },
      { step: 6, title: 'Relevant trends', text: 'Optional. Only if it adds urgency.', ex: 'Clean-label demand.', optional: true }
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
  related: ['value-proposition-canvas', 'crossing-the-chasm', 'Positioning Statement (Moore)', 'Messaging House', 'Strategic Narrative']
};
