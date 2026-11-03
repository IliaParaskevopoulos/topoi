const pts = f => { const a = []; for (let x = 0; x <= 1.0001; x += 0.025) a.push([+x.toFixed(3), +f(x).toFixed(3)]); return a; };
const perf = x => -0.8 + 1.6 * x;
const must = x => -0.92 * Math.exp(-4.2 * x);
const attr = x => 0.92 * (Math.exp(4 * x) - 1) / (Math.exp(4) - 1);

module.exports = {
  slug: 'kano-model',
  name: 'Kano Model',
  company: 'lumora',
  origin: 'Noriaki Kano and colleagues, 1984',
  oneLiner: 'Not every feature affects satisfaction the same way. Some are expected, some scale with effort, and some delight.',
  question: 'Which features must we get right, which should we keep improving, and which will make customers choose us?',
  glance: {
    'Use it for': 'Prioritising features and deciding what to lead with in messaging',
    'You need': 'A list of features and a short survey of customers',
    'You get': 'Each feature sorted into must-be, performance, attractive or indifferent',
    'Time': 'Two weeks including the survey'
  },
  steps: [
    { title: 'Set the axes',
      text: 'Left to right: how fully a need is met. Bottom to top: how customers feel, from dissatisfied to delighted. The dashed line is neutral.',
      example: 'Lumora is deciding what to build into the next version of its rapid test reader for GP clinics.' },
    { title: 'Performance features',
      text: 'More is better and less is worse, in a straight line. Customers ask for these directly and compare competitors on them.',
      example: 'Time to result. Every minute saved during a consultation counts.' },
    { title: 'Must-be features',
      text: 'Expected as standard. Missing them causes strong dissatisfaction, but doing them well never delights. Customers rarely mention them.',
      example: 'Certified accuracy and the regulatory mark. Without them, no clinic buys.' },
    { title: 'Attractive features',
      text: 'Delighters customers did not ask for. Missing them does no harm; having them creates real enthusiasm and a reason to choose you.',
      example: 'Results go straight into the clinic’s patient record, with no typing.' },
    { title: 'Indifferent features',
      text: 'Features customers do not care about either way. They cost money and add little.',
      example: 'A choice of device colours.' },
    { title: 'Delighters fade',
      text: 'Over time, attractive features become performance features and then must-be features, as competitors copy them and customers get used to them.',
      example: 'Automatic transfer to the patient record will soon be expected, so Lumora plans its next delighter now.' }
  ],
  diagram: {
    type: 'chart',
    viewBox: '0 0 800 450',
    left: 130,
    right: 630,
    yTitleGap: 100,
    alt: 'Kano Model: satisfaction plotted against how fully a need is met, with a straight performance line, a must-be curve that stays below neutral, and an attractive curve that rises above it.',
    axesStep: 1,
    x: { domain: [0, 1], title: 'How fully the need is met', low: 'Not met', high: 'Fully met' },
    y: { domain: [-1, 1], title: 'Satisfaction', low: 'Dissatisfied', high: 'Delighted' },
    hlines: [{ v: 0, step: 5, label: 'Indifferent', ex: 'Indifferent: device colours', below: true, left: true }],
    curves: [
      { step: 2, points: pts(perf), label: 'Performance', ex: 'Time to result', labelAt: [1, perf(1)], dx: 12, dy: 20, max: 18 },
      { step: 3, points: pts(must), label: 'Must-be', ex: 'Certified accuracy', labelAt: [1, must(1)], dx: 12, dy: 5, max: 18 },
      { step: 4, points: pts(attr), label: 'Attractive', ex: 'Auto-sync to patient record', labelAt: [1, attr(1)], dx: 12, dy: -14, max: 18 }
    ],
    arrows: [{ step: 6, from: [0.86, attr(0.86) - 0.04], to: [0.86, must(0.86) + 0.07], label: 'Over time', ex: 'Soon expected' }]
  },
  whenToUse: [
    'Choosing what goes into the next release when budget is limited.',
    'Deciding which features to lead with in messaging, and which simply need to be confirmed.',
    'Checking whether a planned feature is worth building at all.'
  ],
  whenNot: [
    'Very early concepts that customers cannot picture well enough to judge.',
    'Deciding price. The model sorts features; it does not tell you what they are worth.'
  ],
  howTo: [
    'List the features you want to test, each described in plain words.',
    'For each feature, ask two questions: how would you feel if it were there, and how would you feel if it were not?',
    'Offer five answers to each: I like it, I expect it, I am neutral, I can live with it, I dislike it.',
    'Use the Kano evaluation table to classify each answer pair, then take the most common category per feature.',
    'Make sure every must-be is covered, invest in the performance features that matter most, and add one or two attractive features.'
  ],
  pitfalls: [
    'Asking customers what they want instead of the paired questions. They rarely name must-bes or delighters.',
    'Treating the result as permanent. Categories shift as the market matures.',
    'Leading marketing with must-be features. They prevent losing deals, but rarely win them.'
  ],
  template: `KANO SURVEY — [Product], [segment]

For each feature:
  If [feature] were included, how would you feel?
  If [feature] were not included, how would you feel?
  Answers: I like it / I expect it / I am neutral / I can live with it / I dislike it

Feature                 Category (M / P / A / I / R)   Share of answers
1.
2.
3.

Must-be features to cover:
Performance features to invest in:
Attractive features to add:`,
  sources: [
    'Noriaki Kano, Nobuhiku Seraku, Fumio Takahashi and Shinichi Tsuji, “Attractive Quality and Must-Be Quality”, Journal of the Japanese Society for Quality Control, 1984.'
  ],
  note: 'A fifth category, reverse features, covers things some customers actively dislike. It is left out of the diagram for clarity.',
  related: ['value-proposition-canvas', 'Jobs-to-be-Done', 'Opportunity Solution Tree', 'RICE and ICE']
};
