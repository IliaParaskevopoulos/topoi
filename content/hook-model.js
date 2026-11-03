module.exports = {
  slug: 'hook-model',
  name: 'Hook Model',
  company: 'nordhaus',
  origin: 'Nir Eyal, 2014',
  oneLiner: 'Four steps that, repeated, turn using a product into a habit: trigger, action, variable reward, investment.',
  question: 'What brings customers back to our product without us having to ask every time?',
  glance: {
    'Use it for': 'Designing apps, loyalty programmes and digital services people return to',
    'You need': 'A view of the moment customers need you, and usage data',
    'You get': 'A loop to design and measure, step by step',
    'Time': 'A design workshop, then testing'
  },
  steps: [
    { title: 'Trigger', text: 'What prompts the behaviour. External triggers are messages and reminders; internal triggers are feelings or routines.', example: 'A message about a storage workshop this Saturday, or the feeling that the flat is cluttered.' },
    { title: 'Action', text: 'The simplest thing the user does in expectation of a reward. The easier it is, the more likely it happens.', example: 'Open the app and save a room idea.' },
    { title: 'Variable reward', text: 'A reward that changes each time, which keeps interest. It can be social, material or personal.', example: 'New room ideas each week, and member prices that change.' },
    { title: 'Investment', text: 'The user puts something in, such as data, content or effort, that makes the product better for them and loads the next trigger.', example: 'Uploading room sizes and a photo, so the next suggestions fit.' },
    { title: 'A habit forms', text: 'After enough loops, the internal trigger alone brings the user back. Measure how often users return without a prompt.', example: 'Members open the app weekly whenever they plan a change at home.' }
  ],
  diagram: {
    type: 'cycle', viewBox: '0 0 800 470',
    alt: 'Hook Model: a loop of trigger, action, variable reward and investment around a habit at the centre.',
    center: { step: 5, title: 'Habit', text: 'Users return without a prompt', ex: 'Weekly app use' },
    segments: [
      { step: 1, title: 'Trigger', text: 'A prompt: a message, or a feeling', ex: 'Workshop message; a cluttered flat' },
      { step: 2, title: 'Action', text: 'The simplest step towards a reward', ex: 'Open the app, save a room idea' },
      { step: 3, title: 'Reward', text: 'Variable: different each time', ex: 'New ideas weekly, changing member prices' },
      { step: 4, title: 'Investment', text: 'The user puts something in', ex: 'Room sizes and a photo' }
    ]
  },
  whenToUse: ['Designing digital products, apps or programmes meant for repeated use.', 'Usage drops after sign-up and you need to know where the loop breaks.', 'Planning lifecycle messages that lead to a habit, not just a click.'],
  whenNot: ['Products used rarely by nature, such as annual purchases.', 'Any design that exploits users against their interest. Eyal himself warns against it.'],
  howTo: ['Identify the internal trigger: the feeling or moment when users need you.', 'Make the first action as simple as possible.', 'Design a reward that varies and is worth coming back for.', 'Ask for a small investment that improves the next visit.', 'Measure loop by loop: trigger response, action rate, return without prompt.'],
  pitfalls: ['Relying on push messages forever instead of earning an internal trigger.', 'Rewards that never change.', 'Building habits that do not serve the user, which damages trust and invites regulation.'],
  template: `HOOK MODEL — [Product]

Internal trigger (feeling or moment):
External trigger:
Action (simplest step):
Variable reward:
Investment (what the user puts in):

Metric for each step:`,
  sources: ['Nir Eyal with Ryan Hoover, Hooked: How to Build Habit-Forming Products, Portfolio, 2014.'],
  related: ['flywheel', 'aarrr', 'Fogg Behavior Model', 'Growth loops']
};
