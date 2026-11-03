// Customer understanding: new pages.
const smooth = (pts, n = 12) => {
  const out = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i], [x1, y1] = pts[i + 1];
    for (let k = 0; k < n; k++) { const t = k / n, e = (1 - Math.cos(Math.PI * t)) / 2; out.push([+(x0 + (x1 - x0) * t).toFixed(3), +(y0 + (y1 - y0) * e).toFixed(3)]); }
  }
  out.push(pts[pts.length - 1]); return out;
};

module.exports = [
{
  slug: 'outcome-driven-innovation', name: 'Outcome-Driven Innovation', company: 'tessera',
  origin: 'Tony Ulwick, Strategyn, 1990s',
  oneLiner: 'Break a customer’s job into measurable outcomes, then find the ones that matter most and are served worst.',
  question: 'Which customer outcomes are important but poorly served today, so we can lead with them?',
  glance: { 'Use it for': 'Finding underserved needs to build and message around', 'You need': 'A defined job and a survey of 100+ customers', 'You get': 'Outcomes ranked by opportunity score', 'Time': 'Four to six weeks' },
  steps: [
    { title: 'Map the job', text: 'Pick one job the customer is trying to get done and set up a grid: satisfaction left to right, importance bottom to top.', example: 'The job: keep production equipment running.' },
    { title: 'Rate outcome statements', text: 'Write outcome statements in a fixed form (“minimise the time it takes to…”) and have customers rate each for importance and satisfaction. The line marks where the two are equal.', example: 'Tessera writes 60 outcome statements and surveys 180 maintenance managers.' },
    { title: 'Underserved outcomes', text: 'High importance, low satisfaction. These are the best opportunities to lead with.', example: '“Minimise the time to learn a machine is about to fail”: importance 9.1, satisfaction 3.2.' },
    { title: 'Overserved outcomes', text: 'Satisfaction is higher than importance. Competing here wastes effort; it can even be simplified.', example: '“Minimise the effort to schedule routine checks”: importance 6.0, satisfaction 8.5.' },
    { title: 'Score and choose', text: 'Opportunity score = importance + the gap between importance and satisfaction (if positive). Scores above 10 are strong opportunities.', example: 'Early failure warning scores 15.0, so it leads Tessera’s roadmap and messaging.' }
  ],
  diagram: {
    type: 'chart', viewBox: '0 0 800 450', left: 100,
    alt: 'Opportunity landscape: outcomes plotted by satisfaction and importance, with underserved outcomes above the line and overserved below.',
    axesStep: 1,
    x: { domain: [0, 10], title: 'Satisfaction', low: 'Low', high: 'High' },
    y: { domain: [0, 10], title: 'Importance', low: 'Low', high: 'High' },
    curves: [{ step: 2, points: [[0, 0], [10, 10]], label: 'Importance = satisfaction', labelAt: [9.6, 9.6], anchor: 'end', dx: -4, dy: 30, max: 26 }],
    markers: [
      { step: 3, x: 3.2, y: 9.1, label: 'Underserved', ex: 'Early failure warning: 15.0', anchor: 'start', dx: 12, dy: 5 },
      { step: 4, x: 8.5, y: 6.0, label: 'Overserved', ex: 'Scheduling routine checks: 6.0', anchor: 'end', dx: -12, dy: 22 },
      { step: 5, x: 6.8, y: 7.5, label: 'Served as expected', ex: 'Audit reports: 8.2', anchor: 'end', dx: -12, dy: -8 }
    ]
  },
  whenToUse: ['Deciding which needs to build and position around.', 'Finding segments with different unmet needs.', 'Backing messaging choices with numbers, not opinion.'],
  whenNot: ['Very early markets where customers cannot yet describe the job.', 'When you cannot survey enough customers for reliable ratings.'],
  howTo: ['Define the job in the customer’s words, without your product in it.', 'Interview customers to map the job steps and collect outcome statements.', 'Survey customers on importance and satisfaction for each outcome.', 'Calculate opportunity scores and plot the landscape.', 'Lead product and messaging with the highest-scoring outcomes.'],
  pitfalls: ['Outcome statements that describe solutions (“have a dashboard”).', 'Averaging across segments that have different needs.', 'Treating overserved outcomes as strengths to advertise.'],
  template: `OUTCOME-DRIVEN INNOVATION — [Product]

Job:
Outcome statement                      Importance   Satisfaction   Score
Minimise the time it takes to …
Minimise the likelihood that …

Score = Importance + max(Importance − Satisfaction, 0)
Top opportunities:`,
  sources: ['Anthony W. Ulwick, What Customers Want, McGraw-Hill, 2005.', 'Anthony W. Ulwick, Jobs to Be Done: Theory to Practice, Idea Bite Press, 2016.'],
  related: ['jobs-to-be-done', 'kano-model', 'value-proposition-canvas', 'forces-of-progress']
},
{
  slug: 'forces-of-progress', name: 'Forces of Progress', company: 'kontor',
  origin: 'Bob Moesta and Chris Spiek, early 2010s',
  oneLiner: 'Four forces decide whether a customer switches: two push towards change, two hold them back.',
  question: 'What makes customers switch to us, and what stops them even when they want to?',
  glance: { 'Use it for': 'Understanding switching, and fixing what blocks it', 'You need': 'Interviews with people who recently switched, or nearly did', 'You get': 'The forces to strengthen and the anxieties to remove', 'Time': 'Ten interviews over two weeks' },
  steps: [
    { title: 'Set the grid', text: 'Top row: forces about the new solution. Bottom row: forces about the current way. Left: forces that promote a switch. Right: forces that block it.', example: 'Kontor interviews business owners who signed up in the last three months.' },
    { title: 'Push of the situation', text: 'Problems with the current way that push the customer to look for something new.', example: 'Customers paying in 60 to 90 days leave payroll tight every month.' },
    { title: 'Pull of the new solution', text: 'What attracts them to the new way: the better life they imagine.', example: 'Cash within 24 hours, without a meeting at the bank.' },
    { title: 'Anxiety of the new', text: 'Worries about the new solution: will it work, what will it cost, what will others think.', example: '“Will my customers find out? Is the fee worth it?”' },
    { title: 'Habit of the present', text: 'The comfort of the current way, even when it is not good.', example: '“We have always used the bank overdraft.”' },
    { title: 'Tip the balance', text: 'A switch happens when push and pull outweigh anxiety and habit. Reducing anxiety often helps more than adding pull.', example: 'Kontor’s sign-up page answers anxiety first: customers are never contacted, and the fee is shown up front.' }
  ],
  diagram: {
    type: 'matrix', viewBox: '0 0 800 500',
    alt: 'Forces of progress: push of the situation and pull of the new solution promote a switch; anxiety of the new and habit of the present block it.',
    axesStep: 1,
    x: { title: 'Effect on switching', low: 'Promotes', high: 'Blocks' },
    y: { title: 'About', low: 'Current way', high: 'New solution' },
    quadrants: [
      { pos: 'bl', step: 2, title: 'Push', text: 'Problems with the current way.', ex: 'Payment in 60–90 days; payroll is tight.', risk: '+', riskEx: 'Strong' },
      { pos: 'tl', step: 3, title: 'Pull', text: 'The appeal of the new way.', ex: 'Cash in 24 hours, no bank meeting.', risk: '+', riskEx: 'Strong' },
      { pos: 'tr', step: 4, title: 'Anxiety', text: 'Worries about the new way.', ex: 'Will customers find out? Is the fee worth it?', risk: '−', riskEx: 'Reduce first' },
      { pos: 'br', step: 5, title: 'Habit', text: 'Comfort with the current way.', ex: 'We have always used the overdraft.', risk: '−', riskEx: 'Make switching easy' }
    ],
    risk: { step: 6, arrow: false }
  },
  whenToUse: ['Conversion is low even though interest is high.', 'Writing onboarding, FAQ and objection-handling content.', 'Understanding why customers leave a competitor for you.'],
  whenNot: ['Without real switching stories. Hypothetical answers hide the forces.'],
  howTo: ['Interview recent switchers about the timeline of their decision, from first thought to purchase.', 'Note every push, pull, anxiety and habit in their own words.', 'Group the forces across interviews and rank them by frequency.', 'Strengthen push and pull in messaging; remove anxieties with proof, guarantees and trials.'],
  pitfalls: ['Only adding features (pull) while anxieties stay unanswered.', 'Interviewing people who never seriously considered switching.', 'Ignoring habit, which often decides the outcome.'],
  template: `FORCES OF PROGRESS — [Product], [segment]

Push (problems with the current way):
Pull (appeal of the new way):
Anxiety (worries about the new way):
Habit (comfort with the current way):

How we will reduce anxiety:
How we will make switching easy:`,
  sources: ['Bob Moesta with Greg Engle, Demand-Side Sales 101, Lioncrest, 2020.', 'Clayton M. Christensen and others, Competing Against Luck, HarperBusiness, 2016.'],
  related: ['jobs-to-be-done', 'win-loss-analysis', 'laer', 'customer-journey-map']
},
{
  slug: 'five-rings', name: '5 Rings of Buying Insight', company: 'lumora',
  origin: 'Adele Revella, Buyer Persona Institute, 2015',
  oneLiner: 'A buyer persona built from what buyers actually say about their decision, in five parts.',
  question: 'What do our buyers need to hear, and when, to choose us?',
  glance: { 'Use it for': 'Buyer personas that guide messaging and sales', 'You need': 'Interviews with recent buyers, including those who chose others', 'You get': 'A persona based on decision insight, not demographics', 'Time': 'Eight to ten interviews per persona' },
  steps: [
    { title: 'Priority initiative', text: 'What made the buyer decide to invest time and money in solving this problem now.', example: 'New national guidance on antibiotic prescribing, and patients asking for faster answers.' },
    { title: 'Success factors', text: 'The results the buyer expects from a good decision.', example: 'Fewer return visits, and a clear decision during the consultation.' },
    { title: 'Perceived barriers', text: 'What makes the buyer doubt you or your type of solution.', example: 'Doubts about accuracy compared with the lab, staff time, and cost.' },
    { title: 'Decision criteria', text: 'The specific features and attributes the buyer compares, in their words.', example: 'Validated accuracy, a reimbursement code, and a result within a ten-minute consult.' },
    { title: 'Buyer’s journey', text: 'Who is involved, which sources they trust, and the steps they take to decide.', example: 'Starts after a guideline update; owners ask peer GPs, run a trial, then partners decide.' }
  ],
  diagram: {
    type: 'chain', viewBox: '0 0 800 490',
    alt: 'Five rings of buying insight: priority initiative, success factors, perceived barriers, decision criteria and buyer’s journey.',
    nodes: [
      { step: 1, title: 'Priority initiative', text: 'Why they act now.', ex: 'New prescribing guidance.' },
      { step: 2, title: 'Success factors', text: 'Results they expect.', ex: 'Fewer return visits, decide in the consult.' },
      { step: 3, title: 'Perceived barriers', text: 'Why they might doubt you.', ex: 'Accuracy vs lab, staff time, cost.' },
      { step: 4, title: 'Decision criteria', text: 'What they compare.', ex: 'Validated accuracy, reimbursement, 10 minutes.' },
      { step: 5, title: 'Buyer’s journey', text: 'Who, which sources, which steps.', ex: 'Peers, trial, partners decide.' }
    ]
  },
  whenToUse: ['Building or replacing buyer personas.', 'Briefing content and sales teams on what buyers need to hear.', 'Finding why deals stall at a particular stage.'],
  whenNot: ['From desk research only. The method depends on buyer interviews.'],
  howTo: ['Interview buyers who decided in the last few months, including those who chose a competitor.', 'Ask them to tell the story from the moment they started looking.', 'Code their answers into the five rings.', 'Write the persona in buyers’ own words and share it with sales and content.'],
  pitfalls: ['Filling the rings with internal opinions.', 'Demographic details that do not change what you say.', 'Interviewing only happy customers.'],
  template: `5 RINGS — [Persona]

Priority initiative:
Success factors:
Perceived barriers:
Decision criteria:
Buyer’s journey (who, sources, steps):

Quotes worth using:`,
  sources: ['Adele Revella, Buyer Personas, Wiley, 2015.'],
  related: ['buying-committee-map', 'jobs-to-be-done', 'win-loss-analysis', 'message-hierarchy']
},
{
  slug: 'ideal-customer-profile', name: 'Ideal Customer Profile', company: 'tessera',
  origin: 'Common B2B practice; no single author',
  oneLiner: 'A description of the companies that get the most value from you and are most valuable to you.',
  question: 'Which companies should we spend our marketing and sales effort on?',
  glance: { 'Use it for': 'Targeting, account lists and lead scoring', 'You need': 'Data on your best and worst customers', 'You get': 'Clear fit criteria everyone can apply', 'Time': 'One to two weeks' },
  steps: [
    { title: 'Start wide', text: 'Begin with every company that could in theory buy.', example: 'Every manufacturer in Germany, Austria and Switzerland.' },
    { title: 'Firmographic fit', text: 'Filter by size, industry, region and structure where your best customers sit.', example: 'Plants with 50 to 500 staff and at least three production lines.' },
    { title: 'Technical fit', text: 'Filter by the tools and set-up that make you easy to adopt.', example: 'No dedicated maintenance IT team; still on spreadsheets or paper.' },
    { title: 'Situation and triggers', text: 'Add the events that make a company ready to buy now.', example: 'A recent audit finding, a costly breakdown, or a new plant manager.' },
    { title: 'Ideal customers', text: 'The companies that pass every filter. Check the result against your best existing customers.', example: '1,400 plants, matching 9 of Tessera’s 10 most successful customers.' }
  ],
  diagram: {
    type: 'funnel', viewBox: '0 0 800 420', outlineStep: 1,
    alt: 'Ideal customer profile as a funnel from all possible companies to ideal customers, through firmographic, technical and situation filters.',
    stages: [
      { step: 1, title: 'All companies', metric: 'Everyone who could buy', ex: 'All DACH manufacturers' },
      { step: 2, title: 'Firmographics', metric: 'Size, industry, region', ex: '50–500 staff, 3+ lines' },
      { step: 3, title: 'Technical fit', metric: 'Tools and set-up', ex: 'No maintenance IT; spreadsheets' },
      { step: 4, title: 'Triggers', metric: 'Events that create urgency', ex: 'Audit finding, breakdown, new manager' },
      { step: 5, title: 'Ideal', metric: 'Pass every filter', ex: '1,400 plants' }
    ]
  },
  whenToUse: ['Building target account lists for sales or ABM.', 'Aligning marketing and sales on which leads count.', 'Explaining why some customers churn and others grow.'],
  whenNot: ['Before you have enough customers to see patterns. Start with a hypothesis and revisit.'],
  howTo: ['List your ten best and ten worst customers by value, retention and effort.', 'Find what the best have in common: size, industry, tools, situation.', 'Turn that into filters you can apply with data you can get.', 'Size the resulting list and test it with sales.', 'Review twice a year.'],
  pitfalls: ['An ICP so wide it excludes nobody.', 'Confusing the ICP (companies) with personas (people).', 'Filters you cannot check with real data.'],
  template: `IDEAL CUSTOMER PROFILE — [Product]

Firmographics (size, industry, region):
Technical fit (tools, set-up):
Situation and triggers:
Disqualifiers:

Matches among our best customers:   of 10
Size of the target list:`,
  sources: ['A standard B2B marketing and sales practice; there is no single original source.'],
  related: ['buying-committee-map', 'abm-tiers', 'stp', 'beachhead-market']
},
{
  slug: 'buying-committee-map', name: 'Buying Committee Map', company: 'halden',
  origin: 'Common B2B sales and marketing practice',
  oneLiner: 'Map the people behind a B2B decision, what each cares about, and where each stands.',
  question: 'Who decides, who influences, and what does each of them need to hear?',
  glance: { 'Use it for': 'Account planning and role-specific messaging', 'You need': 'Knowledge of the account from sales and discovery calls', 'You get': 'A map of roles, concerns and stance', 'Time': 'An hour per key account' },
  steps: [
    { title: 'The decision', text: 'Put the decision in the middle. B2B purchases usually involve a group, often six or more people.', example: 'A five-year supply contract for solar-grade sand.' },
    { title: 'Economic buyer', text: 'The person who approves the spend and owns the business result.', example: 'The plant’s operations director.' },
    { title: 'Champion', text: 'The person who wants you to win and will sell for you internally.', example: 'The quality manager who investigated last year’s line stoppages.' },
    { title: 'Technical evaluator', text: 'The person who checks whether you meet the requirements.', example: 'The process engineer who runs the lab qualification.' },
    { title: 'Users and others', text: 'People affected by the decision: users, procurement, finance, legal.', example: 'Furnace operators, and procurement, who run the tender.' },
    { title: 'Mark each stance', text: 'Note whether each person supports, is neutral, or is sceptical, and plan who needs what.', example: 'Procurement is sceptical about price, so Halden prepares a cost-per-good-tonne comparison.' }
  ],
  diagram: {
    type: 'forces', viewBox: '0 0 800 480',
    alt: 'Buying committee map: the decision in the centre, surrounded by the economic buyer, champion, technical evaluator and users, each with a stance.',
    forces: [
      { pos: 'center', step: 1, title: 'The decision', text: 'What is being decided.', ex: 'Five-year sand supply contract.', rating: 'Stance?', ratingEx: 'Due in Q2' },
      { pos: 'top', step: 2, title: 'Economic buyer', text: 'Approves the spend.', ex: 'Operations director.', rating: 'Stance?', ratingEx: 'Neutral' },
      { pos: 'left', step: 3, title: 'Champion', text: 'Sells for you inside.', ex: 'Quality manager.', rating: 'Stance?', ratingEx: 'Supporter' },
      { pos: 'right', step: 4, title: 'Technical evaluator', text: 'Checks the requirements.', ex: 'Process engineer.', rating: 'Stance?', ratingEx: 'Supporter' },
      { pos: 'bottom', step: 5, title: 'Users and others', text: 'Users, procurement, finance.', ex: 'Operators; procurement.', rating: 'Stance?', ratingEx: 'Procurement sceptical' }
    ],
    rating: { step: 6 }
  },
  whenToUse: ['Planning a complex deal or key account.', 'Writing messages and content for each role.', 'Spotting a deal that depends on one contact.'],
  whenNot: ['Simple purchases made by one person.'],
  howTo: ['List everyone involved, from discovery calls and CRM notes.', 'Assign each a role and note what they care about.', 'Mark their stance and how well you know them.', 'Plan the message, proof and contact each one needs.', 'Update after every important meeting.'],
  pitfalls: ['Mapping titles instead of real roles.', 'Assuming a friendly contact is a champion.', 'Leaving out procurement and finance until the end.'],
  template: `BUYING COMMITTEE — [Account], [decision]

Role                  Name / title     Cares about     Stance     Next action
Economic buyer
Champion
Technical evaluator
Users
Procurement / finance`,
  sources: ['A standard B2B practice; see also Gartner’s research on B2B buying groups.'],
  related: ['meddic', 'five-rings', 'gartner-buying-jobs', 'abm-tiers']
},
{
  slug: 'customer-journey-map', name: 'Customer Journey Map', company: 'kontor',
  origin: 'Service design and marketing practice; no single author',
  oneLiner: 'Map the stages a customer goes through, and how they feel at each, to find where to help.',
  question: 'Where in the journey do customers struggle, and what should we fix or say there?',
  glance: { 'Use it for': 'Finding drop-off points and planning content and onboarding', 'You need': 'Customer interviews, support data and funnel data', 'You get': 'Stages, feelings and the low points to fix first', 'Time': 'One to two weeks' },
  steps: [
    { title: 'Trigger', text: 'The moment the customer realises they have a problem worth solving.', example: 'A large customer pays 30 days late, and payroll is due.' },
    { title: 'Search', text: 'How they look for options and what they compare.', example: 'Searches “get paid faster on invoices” and asks their accountant.' },
    { title: 'Sign-up', text: 'Getting started: forms, set-up, first connection.', example: 'Creates an account and connects the accounting software.' },
    { title: 'First value', text: 'The first time the product delivers what was promised.', example: 'The first invoice is paid out the next morning.' },
    { title: 'Repeat', text: 'Using the product again, and possibly recommending it.', example: 'Finances invoices monthly and tells the accountant.' },
    { title: 'Plot how they feel', text: 'Draw the customer’s mood across the stages, from interviews and support data.', example: 'Relief at first payout; frustration while connecting software.' },
    { title: 'Fix the low point', text: 'The deepest dip is usually the best place to act.', example: 'Kontor adds guided set-up for the three most common accounting tools.' }
  ],
  diagram: {
    type: 'chart', viewBox: '0 0 800 450', left: 100,
    alt: 'Customer journey map: five stages from trigger to repeat, with a line showing how the customer feels and the lowest point marked.',
    axesStep: 1,
    x: { domain: [0, 5], title: 'Journey' },
    y: { domain: [-1.1, 1.3], title: 'How they feel', low: 'Frustrated', high: 'Happy' },
    hlines: [{ v: 0, step: 1, label: '', ex: '' }],
    bands: [
      { step: 1, x0: 0, x1: 1, label: 'Trigger', ex: 'Late payment' },
      { step: 2, x0: 1, x1: 2, label: 'Search', ex: 'Search, ask' },
      { step: 3, x0: 2, x1: 3, label: 'Sign-up', ex: 'Connect tools' },
      { step: 4, x0: 3, x1: 4, label: 'First value', ex: 'First payout' },
      { step: 5, x0: 4, x1: 5, label: 'Repeat', ex: 'Monthly use' }
    ],
    curves: [{ step: 6, points: smooth([[0, -0.2], [0.5, -0.6], [1.5, -0.05], [2.5, -0.75], [3.5, 0.8], [4.5, 0.45], [5, 0.5]]), label: 'Feeling', labelAt: [3.5, 0.8], dy: -14, anchor: 'middle' }],
    markers: [{ step: 7, x: 2.5, y: -0.75, label: 'Lowest point', ex: 'Connecting software', dy: 26 }]
  },
  whenToUse: ['Conversion or activation is lower than expected.', 'Planning content and onboarding for each stage.', 'Aligning marketing, product and support around the customer.'],
  whenNot: ['As a wall poster that nobody acts on. Map only to decide something.'],
  howTo: ['Choose one persona and one journey.', 'Define the stages from the customer’s side, not your funnel.', 'Collect what they do, think and feel at each stage from interviews and data.', 'Plot the emotional line and mark the low points.', 'Assign an owner and a fix to the deepest low point.'],
  pitfalls: ['Mapping the journey you wish customers had.', 'Too many personas on one map.', 'Mapping without data on where people actually drop off.'],
  template: `CUSTOMER JOURNEY — [Persona], [journey]

Stage        Doing        Thinking        Feeling (−2 to +2)     Our touchpoint
Trigger
Search
Sign-up
First value
Repeat

Lowest point and fix:`,
  sources: ['A standard service design and marketing method; there is no single original source.'],
  related: ['aarrr', 'forces-of-progress', 'content-to-stage-map', 'bow-tie']
},
{
  slug: 'voice-of-the-customer', name: 'Voice of the Customer', company: 'orto',
  origin: 'Abbie Griffin and John Hauser, 1993',
  oneLiner: 'A steady programme that collects what customers say, turns it into themes, and gets it acted on.',
  question: 'What are customers telling us, and is anyone acting on it?',
  glance: { 'Use it for': 'Keeping product, marketing and sales close to customers', 'You need': 'Access to reviews, surveys, support and sales notes', 'You get': 'Regular themes with owners and actions', 'Time': 'Set up in a month, then monthly' },
  steps: [
    { title: 'Collect', text: 'Gather what customers say from many sources: interviews, surveys, reviews, support, sales notes.', example: 'Consumer reviews, retailer buyer feedback and calls to the customer line.' },
    { title: 'Organise', text: 'Tag each comment by product, theme and customer type.', example: 'Tagged by meal, theme (taste, portion, price) and channel.' },
    { title: 'Analyse', text: 'Find the themes that come up most and matter most, and check them against numbers.', example: 'Top theme: portions too small for dinner, in 22% of reviews.' },
    { title: 'Share', text: 'Share a short summary with the teams who can act.', example: 'A monthly one-page summary for product, marketing and sales.' },
    { title: 'Act and close the loop', text: 'Act on the top themes and tell customers what changed.', example: 'Orto launches a larger dinner portion and replies to the reviewers.' }
  ],
  diagram: {
    type: 'chain', viewBox: '0 0 800 490',
    alt: 'Voice of the customer: collect, organise, analyse, share, and act and close the loop.',
    nodes: [
      { step: 1, title: 'Collect', text: 'Interviews, surveys, reviews, support.', ex: 'Reviews, retailer feedback, calls.' },
      { step: 2, title: 'Organise', text: 'Tag by product, theme, customer.', ex: 'Meal, theme, channel.' },
      { step: 3, title: 'Analyse', text: 'Find the top themes.', ex: 'Portions too small: 22%.' },
      { step: 4, title: 'Share', text: 'Summaries for teams who act.', ex: 'Monthly one-pager.' },
      { step: 5, title: 'Act and close the loop', text: 'Fix, then tell customers.', ex: 'Larger portion; reply to reviewers.' }
    ]
  },
  whenToUse: ['Teams make decisions without hearing customers.', 'Feedback sits in many places and nobody reads it all.', 'Before positioning, messaging or roadmap reviews.'],
  whenNot: ['As a one-off survey. VoC is a habit, not a project.'],
  howTo: ['List every source of customer feedback you already have.', 'Agree a simple tagging scheme.', 'Review themes monthly with numbers next to them.', 'Give each top theme an owner and a deadline.', 'Report back to customers when you act.'],
  pitfalls: ['Collecting without acting.', 'Letting the loudest customer stand for everyone.', 'Summaries too long for busy teams to read.'],
  template: `VOICE OF THE CUSTOMER — [Month]

Sources reviewed:
Top themes                Share of comments     Owner     Action
1.
2.
3.

Closed loops this month:`,
  sources: ['Abbie Griffin and John R. Hauser, “The Voice of the Customer”, Marketing Science, 1993.'],
  related: ['win-loss-analysis', 'net-promoter-score', 'jobs-to-be-done', 'five-rings']
},
{
  slug: 'win-loss-analysis', name: 'Win/Loss Analysis', company: 'halden',
  origin: 'Standard product marketing practice; no single author',
  oneLiner: 'Ask buyers why they chose you or someone else, and use the patterns to improve how you sell.',
  question: 'Why do we really win and lose deals?',
  glance: { 'Use it for': 'Improving positioning, pricing and sales approach', 'You need': 'Access to buyers soon after decisions', 'You get': 'The real reasons behind wins and losses', 'Time': 'Ongoing; review quarterly' },
  steps: [
    { title: 'Choose deals', text: 'Pick a mix of recent wins and losses of meaningful size, decided in the last few months.', example: 'Halden picks eight tenders decided this year: three won, five lost.' },
    { title: 'Interview buyers', text: 'Talk to the buyers, ideally through someone who was not in the sale. Sellers’ explanations are not enough.', example: 'A neutral interviewer speaks to procurement and quality managers.' },
    { title: 'Code the reasons', text: 'Sort reasons into themes: product, price, proof, sales experience, relationship.', example: 'Losses cite price per tonne; wins cite certified purity.' },
    { title: 'Find the patterns', text: 'Look for reasons that repeat, and for where you lose early versus late.', example: 'Halden loses when procurement compares list price before quality is discussed.' },
    { title: 'Act and share', text: 'Turn patterns into changes in messaging, pricing, enablement or product, and share them widely.', example: 'Halden adds a cost-per-good-tonne calculator to every first meeting.' }
  ],
  diagram: {
    type: 'chain', viewBox: '0 0 800 490',
    alt: 'Win/loss analysis: choose deals, interview buyers, code the reasons, find patterns, and act and share.',
    nodes: [
      { step: 1, title: 'Choose deals', text: 'Recent wins and losses.', ex: '8 tenders: 3 won, 5 lost.' },
      { step: 2, title: 'Interview buyers', text: 'Neutral interviewer, not the seller.', ex: 'Procurement and quality.' },
      { step: 3, title: 'Code the reasons', text: 'Product, price, proof, sales.', ex: 'Losses: price. Wins: purity.' },
      { step: 4, title: 'Find the patterns', text: 'Repeating reasons and timing.', ex: 'Price compared before quality.' },
      { step: 5, title: 'Act and share', text: 'Change messaging, pricing, enablement.', ex: 'Cost-per-good-tonne calculator.' }
    ]
  },
  whenToUse: ['Win rates fall or a new competitor appears.', 'Before revising positioning or pricing.', 'Building battlecards based on evidence.'],
  whenNot: ['With only CRM “loss reasons”, which are usually one word and often wrong.'],
  howTo: ['Agree which deals qualify and who requests interviews.', 'Use a short interview guide covering the full decision.', 'Code answers the same way every time.', 'Review patterns quarterly with sales, product and leadership.', 'Track whether the changes improve win rates.'],
  pitfalls: ['Only interviewing losses, or only wins.', 'Accepting “price” at face value; it often hides weak value.', 'Reports that nobody acts on.'],
  template: `WIN/LOSS INTERVIEW — [Deal], [won/lost]

How did the need start?
Which options did you consider?
What mattered most in the decision?
Where did we do well or badly?
What would have changed your decision?

Coded reasons:`,
  sources: ['A standard product marketing practice; there is no single original source.'],
  related: ['battlecard', 'voice-of-the-customer', 'forces-of-progress', 'competitive-intelligence-cycle']
},
{
  slug: 'laddering', name: 'Laddering', company: 'orto',
  origin: 'Thomas Reynolds and Jonathan Gutman, 1988',
  oneLiner: 'An interview technique that climbs from product attributes to the consequences and values behind them.',
  question: 'Why does this attribute matter to buyers, and what do they ultimately want from it?',
  glance: { 'Use it for': 'Finding the benefits and motives to build messages on', 'You need': 'One-to-one interviews with buyers', 'You get': 'Ladders from attributes to values, for messaging', 'Time': 'Fifteen interviews' },
  steps: [
    { title: 'Attributes', text: 'Start with what the buyer notices about the product. Ask: “Why is that important to you?”', example: 'High protein, Swiss ingredients.' },
    { title: 'Consequences', text: 'Keep asking why. The answers move to what the attribute does for them.', example: 'I stay full until evening, and I don’t have to cook after work.' },
    { title: 'Values', text: 'At the top are personal values, the end goals behind the choice.', example: 'Looking after myself, even on busy days.' },
    { title: 'Use the ladder', text: 'Lead messages with the consequence, connect to the value, and prove with the attribute.', example: '“Real food that keeps you going, with 30 g of protein in every meal.”' }
  ],
  diagram: {
    type: 'tiers', viewBox: '0 0 800 450',
    alt: 'Laddering: attributes at the bottom rung, consequences in the middle and values at the top.',
    tiers: [
      { step: 1, height: 230, title: 'Attributes', sub: 'What it has', subEx: 'Product facts', items: '• Concrete features\n• What buyers notice', itemsEx: '• High protein\n• Swiss ingredients' },
      { step: 2, height: 300, title: 'Consequences', sub: 'What it does for me', subEx: 'Practical gains', items: '• Functional results\n• Emotional results', itemsEx: '• Full until evening\n• No cooking after work' },
      { step: 3, height: 370, title: 'Values', sub: 'Why it matters to me', subEx: 'Personal goals', items: '• End goals\n• Identity', itemsEx: '• Looking after myself\n• Even on busy days' }
    ],
    note: { step: 4, at: 1, label: 'Lead messages here', ex: 'Lead with “keeps you going”' }
  },
  whenToUse: ['Developing messaging for a product or segment.', 'Understanding why customers prefer you over a competitor.', 'Testing whether a feature matters at all.'],
  whenNot: ['Quick surveys. Laddering needs patient one-to-one conversation.'],
  howTo: ['Ask buyers which attributes matter when choosing.', 'For each, ask “why is that important?” until they reach a value.', 'Map the ladders and look for common paths.', 'Choose the strongest path for each segment and build messages on it.'],
  pitfalls: ['Stopping at the first answer.', 'Leading the buyer to the value you hoped for.', 'Messaging only with values, with no proof underneath.'],
  template: `LADDER — [Product], [segment]

Attribute:
  Why does that matter? →
Consequence:
  Why does that matter? →
Value:

Message: lead with the consequence, prove with the attribute`,
  sources: ['Thomas J. Reynolds and Jonathan Gutman, “Laddering Theory, Method, Analysis, and Interpretation”, Journal of Advertising Research, 1988.'],
  related: ['benefit-ladder', 'fab', 'jobs-to-be-done', 'message-hierarchy']
},
{
  slug: 'sean-ellis-test', name: 'Sean Ellis Test', company: 'kontor',
  origin: 'Sean Ellis, around 2009',
  oneLiner: 'One survey question that shows whether a product has product-market fit: how would you feel if you could no longer use it?',
  question: 'Do enough of our users depend on the product to show product-market fit?',
  glance: { 'Use it for': 'Checking product-market fit and finding the segment that loves you', 'You need': 'At least 40 active users to survey', 'You get': 'A fit score and the profile of your most committed users', 'Time': 'One week' },
  steps: [
    { title: 'Very disappointed', text: 'Ask active users: “How would you feel if you could no longer use the product?” The key answer is “very disappointed”.', example: '44% of Kontor’s active users say very disappointed.' },
    { title: 'Somewhat disappointed', text: 'These users like the product but could live without it. Learn what would make it essential for them.', example: '36% say somewhat disappointed.' },
    { title: 'Not disappointed', text: 'These users do not depend on you. They are often outside your best-fit segment.', example: '20% say not disappointed, mostly very small businesses.' },
    { title: 'Check the 40% line', text: 'Ellis found that products with 40% or more “very disappointed” tend to grow well. Then study who those users are and what they value most.', example: 'Above the line. The “very disappointed” group is mostly construction subcontractors, so Kontor focuses there.' }
  ],
  diagram: {
    type: 'tiers', viewBox: '0 0 800 450',
    alt: 'Sean Ellis test: shares of users who would be very disappointed, somewhat disappointed and not disappointed, with the 40% threshold.',
    tiers: [
      { step: 1, height: 360, title: 'Very', sub: 'disappointed', subEx: '44%', items: '• Depend on it\n• Your core users', itemsEx: '• Mostly construction\n  subcontractors' },
      { step: 2, height: 280, title: 'Somewhat', sub: 'disappointed', subEx: '36%', items: '• Like it\n• Could switch', itemsEx: '• Mixed segments' },
      { step: 3, height: 170, title: 'Not', sub: 'disappointed', subEx: '20%', items: '• Do not need it', itemsEx: '• Very small firms' }
    ],
    note: { step: 4, at: 0, label: '40% or more: strong fit', ex: '44%: above the line' }
  },
  whenToUse: ['Before investing heavily in growth marketing.', 'Finding the segment that values the product most.', 'Tracking fit over time after major changes.'],
  whenNot: ['With users who have barely tried the product. Survey people who used it recently and more than once.'],
  howTo: ['Survey active users who used the product at least twice recently.', 'Ask the main question plus: what is the main benefit, and who would benefit most?', 'Calculate the share who answer “very disappointed”.', 'Profile that group and focus positioning and targeting on them.'],
  pitfalls: ['Surveying all sign-ups, including people who never really used it.', 'Treating 40% as a law rather than a benchmark.', 'Ignoring the follow-up questions, which hold the useful detail.'],
  template: `PRODUCT-MARKET FIT SURVEY — [Product]

How would you feel if you could no longer use [product]?
  Very disappointed / Somewhat disappointed / Not disappointed
What is the main benefit you get from [product]?
What type of person would benefit most from [product]?

Very disappointed:   %   Who they are:`,
  sources: ['Sean Ellis and Morgan Brown, Hacking Growth, Currency, 2017.'],
  related: ['aarrr', 'ideal-customer-profile', 'net-promoter-score', 'crossing-the-chasm']
},
{
  slug: 'net-promoter-score', name: 'Net Promoter Score', company: 'nordhaus',
  origin: 'Fred Reichheld, Bain and Company, 2003',
  oneLiner: 'One question about how likely customers are to recommend you, turned into a score you can track.',
  question: 'How loyal are our customers, and why do some recommend us and others not?',
  glance: { 'Use it for': 'Tracking loyalty and finding what drives recommendations', 'You need': 'A simple survey after key moments', 'You get': 'A score plus reasons in customers’ own words', 'Time': 'Ongoing, reviewed monthly' },
  steps: [
    { title: 'Ask one question', text: '“How likely are you to recommend us to a friend or colleague?” on a scale from 0 to 10. The line shows how answers are spread.', example: 'Nordhaus asks every customer a week after delivery.' },
    { title: 'Detractors', text: 'Scores 0 to 6: unhappy customers who may discourage others.', example: '18% of answers.' },
    { title: 'Passives', text: 'Scores 7 and 8: satisfied but not enthusiastic.', example: '30% of answers.' },
    { title: 'Promoters', text: 'Scores 9 and 10: loyal customers who recommend you.', example: '52% of answers.' },
    { title: 'Calculate the score', text: 'NPS = % promoters minus % detractors, from −100 to +100. Always ask “why?” as a follow-up.', example: '52 − 18 = 34. Detractors mostly mention late deliveries.' }
  ],
  diagram: {
    type: 'chart', viewBox: '0 0 800 450', left: 90,
    alt: 'Net Promoter Score: answers from 0 to 10 grouped into detractors, passives and promoters, with the score calculated.',
    axesStep: 1,
    x: { domain: [-0.5, 10.5], title: 'Likelihood to recommend', ticks: [0, 2, 4, 6, 8, 10].map(v => ({ v, gen: String(v), ex: String(v) })) },
    y: { domain: [0, 32], title: 'Share of answers', ticks: [0, 10, 20, 30].map(v => ({ v, gen: v + '%', ex: v + '%' })) },
    bands: [
      { step: 2, x0: -0.5, x1: 6.5, label: 'Detractors', ex: 'Detractors: 18%' },
      { step: 3, x0: 6.5, x1: 8.5, label: 'Passives', ex: 'Passives: 30%' },
      { step: 4, x0: 8.5, x1: 10.5, label: 'Promoters', ex: 'Promoters: 52%' }
    ],
    curves: [{ step: 1, points: [[0, 1], [1, 1], [2, 1], [3, 2], [4, 3], [5, 4], [6, 6], [7, 9], [8, 21], [9, 27], [10, 25]], label: 'Answers', labelAt: [4, 3], dy: -14, anchor: 'middle' }],
    markers: [{ step: 5, x: 9, y: 27, label: '% promoters − % detractors', ex: 'NPS = 52 − 18 = 34', anchor: 'end', dx: -14, dy: -6 }]
  },
  whenToUse: ['Tracking customer loyalty over time.', 'Finding which experiences create promoters and detractors.', 'Choosing customers for references and case studies.'],
  whenNot: ['As a target for teams to game.', 'As the only measure; pair it with retention and satisfaction data such as CSAT and Customer Effort Score.'],
  howTo: ['Ask at consistent moments, such as after delivery or onboarding.', 'Always add an open “why?” question.', 'Track the score over time and by segment, not as one number.', 'Read the comments monthly and act on the top themes.', 'Follow up with detractors personally.'],
  pitfalls: ['Comparing scores across industries, where norms differ.', 'Ignoring the reasons behind the number.', 'Surveying so often that customers stop answering.'],
  template: `NPS — [Product], [period]

Question: How likely are you to recommend [company] to a friend or colleague? (0–10)
Follow-up: Why did you give that score?

Promoters (9–10):   %
Passives (7–8):     %
Detractors (0–6):   %
NPS = Promoters − Detractors =

Top reasons, promoters:
Top reasons, detractors:`,
  sources: ['Frederick F. Reichheld, “The One Number You Need to Grow”, Harvard Business Review, 2003.'],
  related: ['voice-of-the-customer', 'sean-ellis-test', 'flywheel', 'customer-journey-map']
}
];
