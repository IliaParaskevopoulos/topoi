module.exports = {
  slug: 'jobs-to-be-done',
  name: 'Jobs-to-be-Done',
  company: 'nordhaus',
  origin: 'Clayton Christensen and colleagues, 2003; job stories from Intercom, around 2013',
  oneLiner: 'Customers do not buy products; they “hire” them to make progress in a specific situation.',
  question: 'What progress is the customer trying to make, and what are they hiring today to make it?',
  glance: {
    'Use it for': 'Understanding why customers buy, and who you really compete with',
    'You need': 'Interviews with recent buyers about the moment they decided',
    'You get': 'Job statements that guide product, positioning and messaging',
    'Time': 'Ten to fifteen interviews over two weeks'
  },
  steps: [
    { title: 'The situation', text: 'Start with the circumstance that triggers the need. The same person has different jobs in different situations.', example: 'When I’ve just moved into a new flat and the rooms are empty.' },
    { title: 'The motivation', text: 'What the customer wants to do in that situation, in their words, without naming a product.', example: 'I want to get the basics in place within a weekend.' },
    { title: 'The outcome', text: 'The progress they expect: what will be better once the job is done.', example: 'So I can feel at home and invite friends over.' },
    { title: 'The functional job', text: 'The practical task to get done, which you can usually measure.', example: 'Furnish a living room and bedroom quickly, within budget.' },
    { title: 'Emotional and social jobs', text: 'How they want to feel, and how they want to be seen by others. These often decide the purchase.', example: 'Feel settled, and not be embarrassed when people visit.' },
    { title: 'What they hire today', text: 'The current solutions, including doing nothing. These are your real competitors.', example: 'A weekend at a big-box store, second-hand marketplaces, or living with boxes for weeks.' }
  ],
  diagram: {
    type: 'statement', viewBox: '0 0 800 395',
    alt: 'A job story template: when a situation, I want to make progress, so I can reach an outcome, plus the functional, emotional and social jobs, and what customers hire today.',
    parts: [
      { step: 1, lead: 'When', slot: '[the situation that triggers the need]', ex: 'I’ve just moved into a new flat and the rooms are empty' },
      { step: 2, lead: 'I want to', slot: '[the progress they want to make]', ex: 'get the basics in place within a weekend' },
      { step: 3, lead: 'so I can', slot: '[the outcome they expect]', ex: 'feel at home and invite friends over' },
      { step: 4, lead: 'Functional', slot: '[the practical task]', ex: 'Furnish a living room and bedroom fast, within budget' },
      { step: 5, lead: 'Emotional, social', slot: '[how they want to feel and be seen]', ex: 'Feel settled; not embarrassed when people visit' },
      { step: 6, lead: 'Hired today', slot: '[current solutions, including doing nothing]', ex: 'Big-box store weekend, second-hand sites, living with boxes' }
    ]
  },
  whenToUse: ['Finding out why customers really buy, beyond features.', 'Finding competitors you did not know you had.', 'Writing positioning and messaging in the customer’s terms.'],
  whenNot: ['When you need a demographic profile for media buying. Jobs describe situations, not audiences.', 'Without talking to customers. Jobs written at a desk are guesses.'],
  howTo: ['Interview people who bought (or switched) in the last few months.', 'Ask about the moment they started looking and what pushed them.', 'Write job statements in their words: situation, motivation, outcome.', 'Note functional, emotional and social sides, and what else they considered.', 'Group similar jobs and choose the ones your product serves best.'],
  pitfalls: ['Writing the job around your product (“I want to use Nordhaus…”).', 'Ignoring emotional and social jobs, which often decide the purchase.', 'Treating personas and jobs as the same thing.'],
  template: `JOB STORY — [Product], [segment]

When [situation],
I want to [motivation],
so I can [expected outcome].

Functional job:
Emotional and social jobs:
What they hire today:
What would make them switch:`,
  sources: ['Clayton M. Christensen and Michael E. Raynor, The Innovator’s Solution, Harvard Business School Press, 2003.', 'Clayton M. Christensen, Taddy Hall, Karen Dillon and David S. Duncan, Competing Against Luck, HarperBusiness, 2016.'],
  related: ['value-proposition-canvas', 'Forces of Progress', 'Outcome-Driven Innovation', 'obviously-awesome']
};
