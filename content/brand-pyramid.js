module.exports = {
  slug: 'brand-pyramid',
  name: 'Brand Pyramid (CBBE)',
  company: 'nordhaus',
  origin: 'Kevin Lane Keller, 1993 and 2001',
  oneLiner: 'Brand strength is built in four steps, from being known at all to customers feeling a real bond with you.',
  question: 'How strong is our brand in customers’ minds, and which level do we need to build next?',
  glance: {
    'Use it for': 'Diagnosing brand strength and planning brand work',
    'You need': 'Customer research on awareness, perceptions and loyalty',
    'You get': 'A view of where the brand is strong, where it is weak, and what to build next',
    'Time': 'A workshop, after research'
  },
  steps: [
    { title: 'Salience',
      text: 'The base: how easily customers think of you, and in which buying situations. Without salience nothing above it matters.',
      example: 'When people think of furnishing a room on a budget, Nordhaus comes to mind, helped by stores in 35 town centres.' },
    { title: 'Performance',
      text: 'How well the product meets functional needs: reliability, durability, service, price, design.',
      example: 'Furniture that lasts, honest prices and delivery on the promised day.' },
    { title: 'Imagery',
      text: 'The less tangible side: who uses the brand, in which situations, and what personality and values it has.',
      example: 'Warm, practical homes, and the store where staff help you plan a whole room.' },
    { title: 'Judgments',
      text: 'What customers conclude about the brand: quality, credibility, whether to consider it, and whether it is better than others.',
      example: 'Customers judge it good value and trustworthy, and rate the staff advice highly.' },
    { title: 'Feelings',
      text: 'How the brand makes customers feel: warmth, fun, security, social approval, self-respect.',
      example: 'Shopping there feels relaxed and reassuring rather than overwhelming.' },
    { title: 'Resonance',
      text: 'The top: loyalty, attachment, community and active engagement. Customers buy again, join in and recommend you.',
      example: 'Members come back several times a year, join workshops and recommend Nordhaus to friends.' }
  ],
  diagram: {
    type: 'pyramid',
    viewBox: '0 0 800 450',
    alt: 'Brand pyramid: salience at the base, performance and imagery above it, then judgments and feelings, and resonance at the top, with the four brand-building steps of identity, meaning, response and relationships at the side.',
    levels: [
      { side: '4. Relationships', sideQ: 'What about you and me?', cells: [{ step: 6, title: 'Resonance' }] },
      { side: '3. Response', sideQ: 'What about you?', cells: [
        { step: 4, title: 'Judgments', text: 'Quality and credibility', ex: 'Good value, trusted' },
        { step: 5, title: 'Feelings', text: 'Emotional reactions', ex: 'Relaxed, reassured' }] },
      { side: '2. Meaning', sideQ: 'What are you?', cells: [
        { step: 2, title: 'Performance', text: 'How well it meets functional needs', ex: 'Lasts, honest prices, on-time delivery' },
        { step: 3, title: 'Imagery', text: 'Users, personality and values', ex: 'Warm homes, help planning' }] },
      { side: '1. Identity', sideQ: 'Who are you?', cells: [
        { step: 1, title: 'Salience', text: 'How easily customers think of you, and when', ex: 'First choice for furnishing a room on a budget' }] }
    ]
  },
  whenToUse: [
    'Diagnosing why a brand that is well known still does not win enough loyalty.',
    'Planning brand work in the right order, from awareness up.',
    'Aligning marketing, sales and leadership on what the brand should stand for.'
  ],
  whenNot: [
    'You need a short-term demand plan. The pyramid is about long-term brand strength.',
    'Without research. Filling it from internal opinion tells you what you hope, not what customers think.'
  ],
  howTo: [
    'Research each level with customers: awareness, perceptions, judgments, feelings and loyalty.',
    'Fill the pyramid with what customers actually say, level by level.',
    'Write the target state for each level next to the current one.',
    'Find the lowest level with a gap. Work above a weak level rarely sticks.',
    'Plan activities for that level, and measure it again in a year.'
  ],
  pitfalls: [
    'Starting at resonance with community programmes before customers know what the brand stands for.',
    'Treating performance and imagery as one. A brand can be strong on one and weak on the other.',
    'Writing what the company wants to be, not what customers believe today.'
  ],
  template: `BRAND PYRAMID — [Brand], [date]

Level            Today (from research)        Target
Resonance
Judgments
Feelings
Performance
Imagery
Salience

Lowest level with a gap:
Actions for that level:
How we will measure it:`,
  sources: [
    'Kevin Lane Keller, “Conceptualizing, Measuring, and Managing Customer-Based Brand Equity”, Journal of Marketing, 1993.',
    'Kevin Lane Keller, “Building Customer-Based Brand Equity: A Blueprint for Creating Strong Brands”, Marketing Science Institute, 2001.'
  ],
  related: ['messaging-house', 'flywheel', 'Brand Identity Prism', 'Brand Key', 'How Brands Grow']
};
