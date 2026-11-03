module.exports = {
  slug: 'spin-selling',
  name: 'SPIN Selling',
  company: 'lumora',
  origin: 'Neil Rackham, 1988',
  oneLiner: 'Four kinds of question that move a buyer from describing their situation to stating the value of a solution.',
  question: 'What should sellers ask so the customer sees the size of the problem and the value of solving it?',
  glance: {
    'Use it for': 'Discovery calls in larger B2B sales',
    'You need': 'A clear view of the problems your product solves, per buyer role',
    'You get': 'A question guide that builds the case for change with the customer',
    'Time': 'A day to build the guide, then practice'
  },
  steps: [
    { title: 'Situation', text: 'Questions about facts and context. Necessary, but keep them few: buyers tire of them.', example: 'How do you test for infections today, and how long do results take?' },
    { title: 'Problem', text: 'Questions about difficulties and dissatisfaction with the current way.', example: 'How often do you prescribe antibiotics while waiting for a result?' },
    { title: 'Implication', text: 'Questions about the consequences of the problem, which make it bigger and more urgent.', example: 'What do unnecessary prescriptions cost you in follow-up visits and patient trust?' },
    { title: 'Need-payoff', text: 'Questions that get the buyer to state the value of solving it, in their own words.', example: 'If you had a result within ten minutes, how would that change your consultations?' },
    { title: 'Spend time where it counts', text: 'Rackham’s research found that successful sellers ask more implication and need-payoff questions, and fewer situation questions.', example: 'Lumora’s call guide has two situation questions, then most time on implications and payoff.' }
  ],
  diagram: {
    type: 'acronym', viewBox: '0 0 800 300',
    alt: 'SPIN questions: situation, problem, implication and need-payoff, with how much time to spend on each.',
    items: [
      { step: 1, letter: 'S', title: 'Situation', text: 'Facts and context', ex: 'How do you test for infections today?', status: 'Few', statusEx: 'Ask 2' },
      { step: 2, letter: 'P', title: 'Problem', text: 'Difficulties with the current way', ex: 'How often do you prescribe while waiting?', status: 'Some', statusEx: 'Ask 3' },
      { step: 3, letter: 'I', title: 'Implication', text: 'Consequences that make the problem bigger', ex: 'What do unnecessary prescriptions cost you?', status: 'Most time', statusEx: 'Most time' },
      { step: 4, letter: 'N', title: 'Need-payoff', text: 'The value of solving it, in their words', ex: 'What would a ten-minute result change?', status: 'Most time', statusEx: 'Most time' }
    ],
    score: { step: 5 }
  },
  whenToUse: ['Larger B2B sales where the buyer must justify a change.', 'Building discovery guides with sales.', 'Training new sellers.'],
  whenNot: ['Small, quick purchases where long questioning slows the sale.', 'As a script read word for word.'],
  howTo: ['List the problems your product solves for each buyer role.', 'For each problem, write implication questions about cost, risk and time.', 'Write need-payoff questions that let the buyer state the value.', 'Keep situation questions few; research the rest before the call.', 'Practise in role-play and listen to recorded calls.'],
  pitfalls: ['Too many situation questions, which bore the buyer.', 'Jumping to the pitch before the buyer feels the implication.', 'Implication questions that sound like manipulation. Stay genuine.'],
  template: `SPIN QUESTION GUIDE — [Product], [buyer role]

Situation (2–3, only what you cannot research):
Problem:
Implication:
Need-payoff:`,
  sources: ['Neil Rackham, SPIN Selling, McGraw-Hill, 1988.'],
  related: ['meddic', 'fab', 'Challenger Sale', 'Solution Selling']
};
