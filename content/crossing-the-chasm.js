module.exports = {
  slug: 'crossing-the-chasm',
  name: 'Crossing the Chasm',
  company: 'lumora',
  origin: 'Geoffrey Moore, 1991, building on Everett Rogers',
  oneLiner: 'New technology spreads through groups of buyers in order, and the hardest jump is from early enthusiasts to the pragmatic mainstream.',
  question: 'Who should we sell to next, and what will they need to see before they buy?',
  glance: {
    'Use it for': 'Launching new technology and choosing the next target segment',
    'You need': 'A view of who your first customers are and why they bought',
    'You get': 'One beachhead segment and a list of what it needs before it will buy',
    'Time': 'Half a day, plus customer interviews'
  },
  steps: [
    { title: 'Draw the adoption curve',
      text: 'Buyers of a new technology fall along a bell curve, from the first to try it to the last. Each group buys for different reasons and trusts different evidence.',
      example: 'Lumora’s rapid blood-test reader, which gives GPs an infection result in ten minutes, is the new technology here.' },
    { title: 'Innovators',
      text: 'Technology enthusiasts, about 2.5% of the market. They try new things because they are new. They make valuable first users, but rarely a business on their own.',
      example: 'University clinics and research-minded GPs who like to try new diagnostics first.' },
    { title: 'Early adopters',
      text: 'Visionaries, about 13.5%. They buy to get ahead of competitors, accept rough edges and want a big change rather than a small improvement.',
      example: 'Practice owners who want to cut unnecessary antibiotic prescriptions and see the reader as a way to stand out.' },
    { title: 'The chasm',
      text: 'Between early adopters and the early majority sits a gap. Pragmatists do not trust visionaries as references; they want proof from companies like theirs. Many products stall here.',
      example: 'Mainstream practices ask for validation in GP settings, a reimbursement code and references from practices like theirs.' },
    { title: 'Early majority',
      text: 'Pragmatists, about 34%. They buy when the solution is complete and proven, and when peers in their segment use it. Moore’s advice is to win one narrow beachhead segment first, then expand.',
      example: 'Lumora picks one beachhead: paediatric practices, where parents push for antibiotics and a fast result helps most.' },
    { title: 'Late majority',
      text: 'Conservatives, about 34%. They buy once the technology is the standard and low risk. They want simplicity, support and a good price.',
      example: 'Large group practices, once the test is reimbursed and part of clinical guidelines.' },
    { title: 'Laggards',
      text: 'Sceptics, about 16%. They buy only when there is no other option. They are rarely worth marketing to directly.',
      example: 'Practices that switch only when their lab stops offering the old send-out test.' }
  ],
  diagram: {
    type: 'bell',
    viewBox: '0 0 800 480',
    alt: 'Technology adoption lifecycle: a bell curve split into innovators, early adopters, early majority, late majority and laggards, with a chasm between early adopters and early majority.',
    curveStep: 1,
    segments: [
      { from: -3, to: -2, step: 2, title: 'Innovators', pct: '2.5%' },
      { from: -2, to: -1, step: 3, title: 'Early adopters', pct: '13.5%' },
      { from: -1, to: 0, step: 5, title: 'Early majority', pct: '34%' },
      { from: 0, to: 1, step: 6, title: 'Late majority', pct: '34%' },
      { from: 1, to: 3, step: 7, title: 'Laggards', pct: '16%' }
    ],
    chasm: { at: -1, step: 4, label: 'The chasm: proof from peers needed', ex: 'GP validation, reimbursement, peer references' }
  },
  whenToUse: [
    'Launching a product that asks buyers to change how they work, or that creates a new category.',
    'Sales slow down after a strong start with early customers.',
    'Choosing which segment to focus on after the first few wins.'
  ],
  whenNot: [
    'Incremental improvements to an established product. Your buyers are already in the mainstream.',
    'Low-risk, low-price purchases where buyers do not need peer proof.'
  ],
  howTo: [
    'Sort your current customers into the five groups. Be honest about how many are visionaries.',
    'Interview pragmatist prospects to learn what stops them: missing proof, missing features, missing service.',
    'List the whole product they need, meaning everything beyond the core product that makes it work for them.',
    'Pick one narrow beachhead segment where you can become the obvious choice quickly.',
    'Win references in that segment, then move to the adjacent segments they influence.'
  ],
  pitfalls: [
    'Reading early adopter enthusiasm as proof of mainstream demand.',
    'Choosing a beachhead that is too broad to dominate, such as “all supplement brands”.',
    'Shipping the core product without the documentation, service and integration pragmatists expect.'
  ],
  template: `CROSSING THE CHASM — [Product]

Current customers by group:
  Innovators:
  Early adopters:
  Early majority:

What pragmatists need before they buy (the whole product):
  1.
  2.
  3.

Beachhead segment:
  Who exactly:
  Why they feel the pain most:
  References we can win there:

Next segments the beachhead will influence:`,
  sources: [
    'Geoffrey A. Moore, Crossing the Chasm, HarperBusiness, 1991 (3rd edition 2014).',
    'Everett M. Rogers, Diffusion of Innovations, Free Press, 1962.'
  ],
  related: ['obviously-awesome', 'aarrr', 'Diffusion of Innovations', 'Beachhead Market', 'Whole Product']
};
