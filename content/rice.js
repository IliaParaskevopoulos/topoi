module.exports = {
  slug: 'rice',
  name: 'RICE Scoring',
  company: 'kontor',
  origin: 'Sean McBride, Intercom, around 2016',
  oneLiner: 'Score ideas on reach, impact, confidence and effort, so you can compare them fairly.',
  question: 'Which of our ideas will deliver the most value for the effort?',
  glance: {
    'Use it for': 'Ranking product, marketing or growth ideas',
    'You need': 'Rough estimates of reach, impact, confidence and effort',
    'You get': 'A ranked list with the reasoning written down',
    'Time': 'Minutes per idea once the scales are agreed'
  },
  steps: [
    { title: 'Reach', text: 'How many people the idea affects in a set period. Use real numbers where you can.', example: 'Large-invoice alerts: about 1,100 active businesses a quarter.' },
    { title: 'Impact', text: 'How much it moves the goal for each person reached, on a fixed scale: 3 massive, 2 high, 1 medium, 0.5 low, 0.25 minimal.', example: 'High: 2.' },
    { title: 'Confidence', text: 'How sure you are of the reach and impact estimates: 100% high, 80% medium, 50% low.', example: 'Low: 50%, with one test so far.' },
    { title: 'Effort', text: 'Total work needed from all teams, in person-months.', example: '3 person-months.' },
    { title: 'Calculate and compare', text: 'Score = reach × impact × confidence ÷ effort. Use the score to start a discussion, not to end it.', example: '1,100 × 2 × 50% ÷ 3 ≈ 367. The cash-gap forecast scores 210, so alerts go first.' }
  ],
  diagram: {
    type: 'acronym', viewBox: '0 0 800 300',
    alt: 'RICE scoring: reach, impact, confidence and effort, combined into a score.',
    items: [
      { step: 1, letter: 'R', title: 'Reach', text: 'People affected per period', ex: 'Active businesses per quarter', status: 'Number', statusEx: '1,100' },
      { step: 2, letter: 'I', title: 'Impact', text: 'Effect per person: 0.25 to 3', ex: 'Effect on second-invoice rate', status: '0.25 to 3', statusEx: '2' },
      { step: 3, letter: 'C', title: 'Confidence', text: 'How sure you are: 50% to 100%', ex: 'One test so far', status: 'Percent', statusEx: '50%' },
      { step: 4, letter: 'E', title: 'Effort', text: 'Person-months across all teams', ex: 'Product, design and marketing', status: 'Person-months', statusEx: '3' }
    ],
    score: { step: 5 }
  },
  whenToUse: ['Ranking a long list of ideas with limited capacity.', 'Making the reasons behind priorities visible to stakeholders.', 'Comparing ideas from different teams on one scale.'],
  whenNot: ['Strategic bets whose value is not captured by near-term reach.', 'When nobody can estimate reach or effort even roughly.'],
  howTo: ['Agree the goal the impact score refers to.', 'Fix the scales for impact and confidence before scoring.', 'Estimate each idea with the people who will do the work.', 'Calculate scores and sort the list.', 'Discuss the top and bottom of the list; adjust where judgement disagrees, and write down why.'],
  pitfalls: ['Inflating confidence to push a favourite idea.', 'Forgetting effort from other teams, such as legal or support.', 'Treating the score as the decision.'],
  template: `RICE — [Team], [period], goal: [metric]

Idea            Reach    Impact    Confidence    Effort    Score
1.
2.
3.

Score = Reach × Impact × Confidence ÷ Effort`,
  sources: ['Sean McBride, “RICE: Simple Prioritization for Product Managers”, Intercom blog, around 2016.'],
  related: ['opportunity-solution-tree', 'kano-model', 'MoSCoW', 'OKRs']
};
