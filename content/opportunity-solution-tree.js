module.exports = {
  slug: 'opportunity-solution-tree',
  name: 'Opportunity Solution Tree',
  company: 'kontor',
  origin: 'Teresa Torres, Product Talk',
  oneLiner: 'A map from one business outcome to the customer needs behind it, the ideas that could meet them, and the tests that check those ideas.',
  question: 'Which customer need should we work on to move our outcome, and how do we know our idea will work?',
  glance: {
    'Use it for': 'Choosing what to build or market next, with evidence',
    'You need': 'One clear outcome and regular customer interviews',
    'You get': 'A visible chain from outcome to need to idea to test',
    'Time': 'Set up in a day, then updated weekly'
  },
  steps: [
    { title: 'Desired outcome',
      text: 'Start at the top with one outcome the team is asked to move. It should be measurable and within the team’s influence.',
      example: 'Raise the share of businesses that finance a second invoice within 60 days from 26% to 35%.' },
    { title: 'Opportunities',
      text: 'Map the customer needs, pains and desires you heard in interviews that, if addressed, would move the outcome. Phrase them in the customer’s words.',
      example: '“I’m not sure the first payout was worth the fee.” “I forget Kontor exists until cash gets tight.” “My accountant doesn’t know I use it.”' },
    { title: 'Choose a target',
      text: 'Compare the opportunities and pick one to work on. Size, how often it comes up and fit with strategy all matter.',
      example: 'Kontor picks “I forget Kontor exists until cash gets tight”, which came up in 9 of 12 interviews.' },
    { title: 'Solutions',
      text: 'Generate several solutions for the target opportunity, not just one. Comparing options leads to better choices.',
      example: 'An alert when a large invoice is issued, a monthly cash-gap forecast, and suggested invoices to finance.' },
    { title: 'Assumption tests',
      text: 'For the most promising solution, find the riskiest assumptions and test them quickly before building anything.',
      example: 'Before building alerts, Kontor shows a mock alert to 200 users and interviews 8 about how they plan cash.' }
  ],
  diagram: {
    type: 'tree',
    viewBox: '0 0 800 440',
    alt: 'Opportunity solution tree: a desired outcome at the top, three customer opportunities below it, one chosen as the target, three solutions under the target, and two assumption tests under one solution.',
    nodes: [
      { id: 'o', step: 1, x: 270, y: 12, w: 260, h: 70, label: 'Desired outcome', text: 'A measurable outcome the team owns', ex: 'Second invoice within 60 days: 26% to 35%' },
      { id: 'p1', parent: 'o', step: 2, x: 20, y: 128, w: 230, h: 72, label: 'Opportunity', text: 'A need heard in interviews', ex: 'Not sure the first payout was worth the fee' },
      { id: 'p2', parent: 'o', step: 2, x: 285, y: 128, w: 230, h: 72, label: 'Opportunity', text: 'A pain customers describe', ex: 'I forget Kontor until cash gets tight' },
      { id: 'p3', parent: 'o', step: 2, x: 550, y: 128, w: 230, h: 72, label: 'Opportunity', text: 'A desire they mention', ex: 'My accountant doesn’t know I use it' },
      { id: 's1', parent: 'p2', step: 4, x: 110, y: 250, w: 190, h: 66, label: 'Solution', text: 'One idea for the target', ex: 'Alert when a large invoice is issued' },
      { id: 's2', parent: 'p2', step: 4, x: 305, y: 250, w: 190, h: 66, label: 'Solution', text: 'Another idea', ex: 'Monthly cash-gap forecast' },
      { id: 's3', parent: 'p2', step: 4, x: 500, y: 250, w: 190, h: 66, label: 'Solution', text: 'A third idea', ex: 'Suggested invoices to finance' },
      { id: 't1', parent: 's1', step: 5, x: 20, y: 362, w: 190, h: 66, label: 'Assumption test', text: 'A quick, cheap test', ex: 'Mock alert shown to 200 users' },
      { id: 't2', parent: 's1', step: 5, x: 220, y: 362, w: 190, h: 66, label: 'Assumption test', text: 'Another test', ex: 'Interviews with 8 users on cash planning' }
    ],
    target: { id: 'p2', step: 3, label: 'Target', ex: 'Target: 9 of 12' }
  },
  whenToUse: [
    'A team owns an outcome, such as retention, and has to choose what to work on.',
    'Stakeholders push solutions before anyone has agreed on the customer need.',
    'Product marketing and product want a shared view of what customers are telling them.'
  ],
  whenNot: [
    'Without regular customer interviews. The opportunities would be guesses.',
    'For a fixed project with a known scope, where there is nothing to discover.'
  ],
  howTo: [
    'Agree on one outcome with leadership and write it at the top.',
    'Interview customers every week and add the needs you hear as opportunities.',
    'Group similar opportunities and break big ones into smaller, more specific ones.',
    'Choose one target opportunity, then brainstorm at least three solutions for it.',
    'Test the riskiest assumption of the best solutions before you build or launch.'
  ],
  pitfalls: [
    'Writing solutions in the opportunity row, such as “needs a dashboard”.',
    'Going straight from the outcome to one favourite solution.',
    'Letting the tree go stale. It is a working document, updated as you learn.'
  ],
  template: `OPPORTUNITY SOLUTION TREE — [Team], [date]

Desired outcome:

Opportunities (in the customer’s words):
  1.
  2.
  3.

Target opportunity and why:

Solutions for the target:
  1.
  2.
  3.

Riskiest assumptions and tests:
  Assumption:            Test:            Result:`,
  sources: [
    'Teresa Torres, Continuous Discovery Habits, Product Talk, 2021.'
  ],
  related: ['aarrr', 'kano-model', 'Jobs-to-be-Done', 'RICE and ICE', 'Build, Measure, Learn']
};
