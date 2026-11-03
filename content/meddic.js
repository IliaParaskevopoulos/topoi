module.exports = {
  slug: 'meddic',
  name: 'MEDDIC',
  company: 'halden',
  origin: 'Jack Napoli and Dick Dunkel, PTC, 1996',
  oneLiner: 'Six things you must know to qualify a complex B2B deal, and to tell a real opportunity from hope.',
  question: 'Do we know enough about this deal to forecast it, and what do we need to find out next?',
  glance: {
    'Use it for': 'Qualifying and reviewing complex B2B deals',
    'You need': 'Discovery conversations with several people at the customer',
    'You get': 'A deal score and a list of gaps that become next actions',
    'Time': '15 minutes per deal review'
  },
  steps: [
    { title: 'Metrics',
      text: 'The measurable gain the customer expects, in their own numbers: money saved, revenue gained, risk reduced.',
      example: 'Cut rejected glass batches from 3% to 1%, worth about EUR 2 million a year.' },
    { title: 'Economic buyer',
      text: 'The person who can approve the spend, and say yes when others say no. Have you met them?',
      example: 'The plant’s operations director, who signs supply contracts above EUR 5 million.' },
    { title: 'Decision criteria',
      text: 'The formal and informal criteria the customer will use to compare options.',
      example: 'Iron content below 100 ppm, delivery reliability, and price per tonne delivered.' },
    { title: 'Decision process',
      text: 'The steps, people and timeline from evaluation to signature.',
      example: 'Lab qualification, a three-month trial, a procurement tender, then board sign-off.' },
    { title: 'Identify pain',
      text: 'The business pain that makes the purchase necessary, and what happens if nothing changes.',
      example: 'Off-spec sand from the current supplier caused two line stoppages last year.' },
    { title: 'Champion',
      text: 'Someone inside the customer with influence who wants you to win and sells for you when you are not in the room.',
      example: 'The quality manager, who led the investigation into the stoppages.' },
    { title: 'Score the deal',
      text: 'Mark each letter as confirmed, partly known or a gap. Gaps become the next actions. A deal with several gaps is not ready to forecast.',
      example: 'Halden has not met the operations director yet, so getting that meeting through the champion is the next step.' }
  ],
  diagram: {
    type: 'acronym',
    viewBox: '0 0 800 430',
    alt: 'MEDDIC checklist: metrics, economic buyer, decision criteria, decision process, identify pain and champion, each with a status.',
    items: [
      { step: 1, letter: 'M', title: 'Metrics', text: 'The measurable gain, in the customer’s numbers', ex: 'Rejected batches from 3% to 1%: about EUR 2 million a year', status: 'Known or gap?', statusEx: 'Confirmed' },
      { step: 2, letter: 'E', title: 'Economic buyer', text: 'Who can approve the spend', ex: 'Operations director, signs contracts above EUR 5 million', status: 'Known or gap?', statusEx: 'Gap: not met' },
      { step: 3, letter: 'D', title: 'Decision criteria', text: 'How they will compare options', ex: 'Iron below 100 ppm, reliability, delivered price', status: 'Known or gap?', statusEx: 'Confirmed' },
      { step: 4, letter: 'D', title: 'Decision process', text: 'Steps, people and timeline to signature', ex: 'Lab, 3-month trial, tender, board', status: 'Known or gap?', statusEx: 'Partly known' },
      { step: 5, letter: 'I', title: 'Identify pain', text: 'Why they must act, and the cost of doing nothing', ex: 'Two line stoppages from off-spec sand', status: 'Known or gap?', statusEx: 'Confirmed' },
      { step: 6, letter: 'C', title: 'Champion', text: 'Who sells for you inside the customer', ex: 'Quality manager who investigated the stoppages', status: 'Known or gap?', statusEx: 'Confirmed' }
    ],
    score: { step: 7 }
  },
  whenToUse: [
    'Complex B2B deals with several stakeholders and a long sales cycle.',
    'Deal and forecast reviews, to replace gut feeling with evidence.',
    'Coaching sellers on what to find out in discovery.'
  ],
  whenNot: [
    'Fast, low-value transactional sales, where it adds work without adding insight.',
    'Early lead qualification by marketing. Use a lighter check there.'
  ],
  howTo: [
    'Agree what “confirmed” means for each letter, so scores are comparable across sellers.',
    'After each discovery call, update the letters with evidence, not opinion.',
    'In deal reviews, go letter by letter and turn each gap into a dated next action.',
    'Product marketing can help by writing discovery questions and proof for each letter, per segment.',
    'Add Competition (MEDDICC) or Paper process (MEDDPICC) if those often derail your deals.'
  ],
  pitfalls: [
    'Treating a friendly contact as a champion. A champion has influence and acts for you.',
    'Writing metrics in your terms instead of the customer’s.',
    'Filling the checklist once and never updating it.'
  ],
  template: `MEDDIC — [Customer], [deal], [date]

                      Evidence                          Status
Metrics
Economic buyer
Decision criteria
Decision process
Identify pain
Champion

Gaps and next actions (owner, date):
1.
2.`,
  sources: [
    'Developed at Parametric Technology Corporation (PTC) in the mid-1990s; credited to Jack Napoli and Dick Dunkel.',
    'Andy Whyte, MEDDICC, 2020.'
  ],
  related: ['value-proposition-canvas', 'messaging-house', 'BANT', 'Challenger Sale', 'Command of the Message']
};
