// Sales enablement: new pages.
module.exports = [
{
  slug: 'battlecard', name: 'Battlecard', company: 'kontor',
  origin: 'Standard product marketing practice; no single author',
  oneLiner: 'A one-page guide that helps sellers win against a specific competitor.',
  question: 'What do our sellers need to know to win against this competitor?',
  glance: { 'Use it for': 'Competitive deals', 'You need': 'Win/loss insight and competitor research', 'You get': 'A short, current guide sellers actually use', 'Time': 'A day per competitor, updated monthly' },
  steps: [
    { title: 'How we win', text: 'The centre: the one-line summary of when and why you win against this competitor.', example: 'We win when speed and flexibility matter more than the lowest rate.' },
    { title: 'Their pitch', text: 'What the competitor says about itself, so sellers are not surprised.', example: 'Bank factoring: “A trusted bank with the lowest rates.”' },
    { title: 'Where we win', text: 'Your real strengths against them, in the buyer’s terms.', example: 'Cash in 24 hours, no paperwork, no commitment to finance every invoice.' },
    { title: 'Where they win', text: 'Be honest about their strengths, so sellers can respond.', example: 'Very large volumes and an existing banking relationship.' },
    { title: 'Landmines and answers', text: 'Questions that expose their weaknesses, and answers to their attacks on you.', example: 'Ask: “How long does approval take, and must you assign all invoices?”' },
    { title: 'Add proof', text: 'Back each point with evidence sellers can show.', example: 'Median payout six hours; 2,000 customers; no minimum volume.' }
  ],
  diagram: {
    type: 'forces', viewBox: '0 0 800 480',
    alt: 'Battlecard: how we win in the centre, with their pitch, where we win, where they win, and landmines around it.',
    forces: [
      { pos: 'center', step: 1, title: 'How we win', text: 'One-line summary.', ex: 'When speed and flexibility matter.', rating: 'Proof?', ratingEx: 'Win rate 64%' },
      { pos: 'top', step: 2, title: 'Their pitch', text: 'What they say.', ex: 'Trusted bank, lowest rates.', rating: 'Proof?', ratingEx: 'From their site' },
      { pos: 'left', step: 3, title: 'Where we win', text: 'Your strengths.', ex: '24-hour cash, no paperwork.', rating: 'Proof?', ratingEx: 'Median 6 hours' },
      { pos: 'right', step: 4, title: 'Where they win', text: 'Their strengths.', ex: 'Big volumes, existing bank.', rating: 'Proof?', ratingEx: 'Win/loss data' },
      { pos: 'bottom', step: 5, title: 'Landmines', text: 'Questions and answers.', ex: 'Ask about approval time.', rating: 'Proof?', ratingEx: '2–3 weeks typical' }
    ],
    rating: { step: 6 }
  },
  whenToUse: ['A competitor appears in many deals.', 'Sellers struggle to explain the difference.', 'After a competitor launch or price change.'],
  whenNot: ['Competitors you meet in only a few deals a year.'],
  howTo: ['Start from win/loss interviews, not your own opinion.', 'Keep it to one page that sellers can scan in a minute.', 'Add proof to every claim.', 'Review it monthly with sales and update it after every major competitor move.'],
  pitfalls: ['Long documents nobody reads.', 'Pretending the competitor has no strengths.', 'Cards that go out of date.'],
  template: `BATTLECARD — [Competitor], updated [date]

How we win:
Their pitch:
Where we win (with proof):
Where they win:
Landmine questions:
Answers to their attacks:`,
  sources: ['A standard product marketing practice; there is no single original source.'],
  related: ['win-loss-analysis', 'competitive-intelligence-cycle', 'perceptual-map', 'laer']
},
{
  slug: 'bant', name: 'BANT', company: 'lumora',
  origin: 'IBM, 1950s–60s',
  oneLiner: 'Four quick checks to qualify a lead: budget, authority, need and timing.',
  question: 'Is this lead worth a seller’s time right now?',
  glance: { 'Use it for': 'Early lead qualification', 'You need': 'A first conversation with the prospect', 'You get': 'A quick yes, not yet, or no', 'Time': 'One call' },
  steps: [
    { title: 'Budget', text: 'Can they afford it, or is there money set aside?', example: 'The practice spends on diagnostics already; a test fee fits the budget.' },
    { title: 'Authority', text: 'Are you talking to someone who can decide, or who can get you to them?', example: 'The practice owner decides; partners must agree.' },
    { title: 'Need', text: 'Is there a real problem your product solves?', example: 'Parents push for antibiotics before results are back.' },
    { title: 'Timing', text: 'When do they need a solution, and is there a reason to act now?', example: 'New prescribing guidance starts next quarter.' },
    { title: 'Qualify', text: 'Pass the lead to sales when enough checks are met. A later variant, CHAMP, puts challenges first, because need matters more than budget.', example: 'Three of four met; budget to be confirmed. Lumora books a demo.' }
  ],
  diagram: {
    type: 'acronym', viewBox: '0 0 800 300',
    alt: 'BANT: budget, authority, need and timing, each checked to qualify a lead.',
    items: [
      { step: 1, letter: 'B', title: 'Budget', text: 'Can they afford it?', ex: 'Diagnostics budget exists', status: 'Met?', statusEx: 'To confirm' },
      { step: 2, letter: 'A', title: 'Authority', text: 'Can they decide?', ex: 'Owner decides with partners', status: 'Met?', statusEx: 'Met' },
      { step: 3, letter: 'N', title: 'Need', text: 'Is there a real problem?', ex: 'Pressure for antibiotics', status: 'Met?', statusEx: 'Met' },
      { step: 4, letter: 'T', title: 'Timing', text: 'Is there a reason to act now?', ex: 'New guidance next quarter', status: 'Met?', statusEx: 'Met' }
    ],
    score: { step: 5 }
  },
  whenToUse: ['Qualifying inbound leads quickly.', 'Agreeing with sales what a qualified lead is.', 'Simple or mid-size B2B sales.'],
  whenNot: ['Complex enterprise deals; use MEDDIC.', 'As a script read to the buyer.'],
  howTo: ['Agree with sales what counts as met for each letter.', 'Ask about need first; budget questions land better after.', 'Record answers in the CRM.', 'Review qualified-lead quality with sales monthly.'],
  pitfalls: ['Disqualifying good leads because budget is not yet set.', 'Asking the four questions as an interrogation.', 'Treating a pass as a forecast.'],
  template: `BANT — [Lead], [date]

Budget:      Met / not yet / no
Authority:   Met / not yet / no
Need:        Met / not yet / no
Timing:      Met / not yet / no

Decision and next step:`,
  sources: ['Widely attributed to IBM’s sales practice in the 1950s and 1960s.'],
  related: ['meddic', 'spin-selling', 'ideal-customer-profile', 'buying-committee-map']
},
{
  slug: 'challenger-sale', name: 'Challenger Sale', company: 'halden',
  origin: 'Matthew Dixon and Brent Adamson, CEB, 2011',
  oneLiner: 'Win by teaching buyers something new about their business, then showing how you solve it.',
  question: 'What insight can we teach buyers that reframes how they see their problem?',
  glance: { 'Use it for': 'Sales conversations and the insight content behind them', 'You need': 'A real insight about the buyer’s business', 'You get': 'A conversation sequence that leads to your solution', 'Time': 'Two workshops to build, then practice' },
  steps: [
    { title: 'Warmer', text: 'Build credibility by showing you understand the buyer’s challenges, often from what peers face.', example: 'Solar-glass makers are pushing furnaces harder to meet demand.' },
    { title: 'Reframe', text: 'Share an insight that changes how the buyer sees the problem.', example: 'Most rejected batches start with small purity swings in the sand, not with the furnace.' },
    { title: 'Rational drowning', text: 'Back the reframe with data that shows its size.', example: 'Purity swings explain about half of rejects in Halden’s customer data.' },
    { title: 'Emotional impact', text: 'Make it personal: how the problem affects people like them.', example: 'The quality manager is blamed for stoppages they could not see coming.' },
    { title: 'A new way', text: 'Describe the better approach, before naming your product.', example: 'Certify purity for every shipment, not batch averages.' },
    { title: 'Your solution', text: 'Only now show how your product delivers the new way.', example: 'Halden’s per-shipment certificates and replacement guarantee.' }
  ],
  diagram: {
    type: 'chain', viewBox: '0 0 800 490',
    alt: 'Challenger sale sequence: warmer, reframe, rational drowning, emotional impact, a new way, your solution.',
    nodes: [
      { step: 1, title: 'Warmer', text: 'Show you understand.', ex: 'Furnaces pushed harder.' },
      { step: 2, title: 'Reframe', text: 'A new way to see it.', ex: 'Rejects start with sand purity.' },
      { step: 3, title: 'Rational drowning', text: 'Data that shows the size.', ex: 'About half of rejects.' },
      { step: 4, title: 'Emotional impact', text: 'Why it matters to them.', ex: 'Quality manager gets blamed.' },
      { step: 5, title: 'A new way', text: 'The better approach.', ex: 'Certify every shipment.' },
      { step: 6, title: 'Your solution', text: 'How you deliver it.', ex: 'Certificates, guarantee.' }
    ]
  },
  whenToUse: ['Complex B2B sales where buyers think they know what they need.', 'Building insight-led content and pitches.', 'Markets where products look similar.'],
  whenNot: ['When you have no real insight. A fake reframe damages trust.'],
  howTo: ['Find an insight from your data that buyers do not know.', 'Build the six-step sequence around it.', 'Create the supporting content: data, stories, a simple model.', 'Train sellers and practise the reframe.'],
  pitfalls: ['Being challenging without being helpful.', 'An insight that leads to any competitor’s product.', 'Skipping straight to the solution.'],
  template: `CHALLENGER SEQUENCE — [Product], [segment]

Warmer:
Reframe (the insight):
Rational drowning (data):
Emotional impact:
A new way:
Our solution:`,
  sources: ['Matthew Dixon and Brent Adamson, The Challenger Sale, Portfolio, 2011.'],
  related: ['why-change-why-now-why-us', 'strategic-narrative', 'spin-selling', 'command-of-the-message']
},
{
  slug: 'command-of-the-message', name: 'Command of the Message', company: 'tessera',
  origin: 'Force Management, 2000s',
  oneLiner: 'A value framework that ties buyers’ problems to business outcomes, the capabilities needed, and your proof.',
  question: 'Can every seller connect our product to the outcomes buyers care about?',
  glance: { 'Use it for': 'Building a value framework for sales', 'You need': 'Customer outcomes, metrics and proof', 'You get': 'A shared value framework and discovery questions', 'Time': 'Several workshops' },
  steps: [
    { title: 'Before scenario', text: 'How the buyer works today, and what is wrong with it.', example: 'Maintenance runs on spreadsheets and fixed schedules.' },
    { title: 'Negative consequences', text: 'What the current way costs.', example: 'Unplanned breakdowns, overtime and audit findings.' },
    { title: 'After scenario', text: 'How things look once the problem is solved.', example: 'Failures are spotted early and work is planned.' },
    { title: 'Positive business outcomes', text: 'The business results the buyer will see.', example: 'Higher output and lower maintenance costs.' },
    { title: 'Required capabilities', text: 'What any solution must be able to do, written so your strengths stand out.', example: 'Warn before failure, work offline, go live without IT.' },
    { title: 'Metrics', text: 'How the buyer will measure success.', example: 'Unplanned downtime hours, emergency repair costs.' },
    { title: 'Proof points', text: 'Evidence you have delivered these outcomes before.', example: '18% less downtime at a pilot plant; live in a day.' }
  ],
  diagram: {
    type: 'chain', viewBox: '0 0 800 490',
    alt: 'Command of the Message value framework: before scenario, negative consequences, after scenario, positive business outcomes, required capabilities, metrics and proof points.',
    nodes: [
      { step: 1, title: 'Before scenario', text: 'How they work today.', ex: 'Spreadsheets, fixed schedules.' },
      { step: 2, title: 'Negative consequences', text: 'What it costs.', ex: 'Breakdowns, overtime.' },
      { step: 3, title: 'After scenario', text: 'Once solved.', ex: 'Failures spotted early.' },
      { step: 4, title: 'Business outcomes', text: 'Results they will see.', ex: 'More output, lower cost.' },
      { step: 5, title: 'Required capabilities', text: 'What any solution must do.', ex: 'Early warning, offline.' },
      { step: 6, title: 'Metrics', text: 'How they will measure.', ex: 'Downtime hours.' },
      { step: 7, title: 'Proof points', text: 'Evidence it works.', ex: '18% less downtime.' }
    ]
  },
  whenToUse: ['Sellers pitch features instead of outcomes.', 'Building discovery guides and value messaging together with sales.', 'Onboarding new sellers.'],
  whenNot: ['Small transactional sales where buyers do not need a business case.'],
  howTo: ['Interview customers about before, after, outcomes and metrics.', 'Write required capabilities that favour your strengths.', 'Attach proof to each outcome.', 'Turn the framework into discovery questions and train sellers.'],
  pitfalls: ['A framework written by marketing alone.', 'Capabilities that any competitor can claim.', 'No metrics, so buyers cannot build a business case.'],
  template: `VALUE FRAMEWORK — [Product], [segment]

Before scenario:
Negative consequences:
After scenario:
Positive business outcomes:
Required capabilities:
Metrics:
Proof points:`,
  sources: ['Force Management’s published materials on its Command of the Message methodology.'],
  related: ['meddic', 'challenger-sale', 'value-selling', 'messaging-house']
},
{
  slug: 'solution-selling', name: 'Solution Selling', company: 'orto',
  origin: 'Michael Bosworth, 1995',
  oneLiner: 'Sell by diagnosing the buyer’s pain and building a shared picture of the solution, not by pitching the product.',
  question: 'Do we understand the buyer’s pain well enough to build the solution with them?',
  glance: { 'Use it for': 'Consultative B2B sales', 'You need': 'Knowledge of buyers’ problems and how you solve them', 'You get': 'A sales process built around the buyer’s pain', 'Time': 'Training plus ongoing coaching' },
  steps: [
    { title: 'Diagnose the pain', text: 'Find the business problem the buyer recognises and wants to fix.', example: 'The supermarket’s chilled ready-meal sales are flat while protein products grow.' },
    { title: 'Build a vision', text: 'Help the buyer picture how the problem would be solved.', example: 'A high-protein section that brings fitness shoppers into the aisle.' },
    { title: 'Agree the value', text: 'Agree what solving it is worth to the buyer.', example: 'A 6% lift in chilled-aisle sales in test stores.' },
    { title: 'Reach the power sponsor', text: 'Get to the person who can approve the change.', example: 'The head of chilled categories.' },
    { title: 'Agree an evaluation plan', text: 'Agree the steps and timing to a decision.', example: 'A 12-week test in 20 stores, then a range review.' }
  ],
  diagram: {
    type: 'chain', viewBox: '0 0 800 490',
    alt: 'Solution selling: diagnose the pain, build a vision, agree the value, reach the power sponsor, agree an evaluation plan.',
    nodes: [
      { step: 1, title: 'Diagnose the pain', text: 'The problem they want fixed.', ex: 'Flat chilled-meal sales.' },
      { step: 2, title: 'Build a vision', text: 'Picture the solution together.', ex: 'A high-protein section.' },
      { step: 3, title: 'Agree the value', text: 'What it is worth.', ex: '6% aisle sales lift.' },
      { step: 4, title: 'Power sponsor', text: 'Who can approve it.', ex: 'Head of chilled.' },
      { step: 5, title: 'Evaluation plan', text: 'Steps to a decision.', ex: '12-week test, 20 stores.' }
    ]
  },
  whenToUse: ['Sales where buyers do not yet know what solution they need.', 'Moving sellers from product pitches to diagnosis.'],
  whenNot: ['Simple, well-understood purchases.'],
  howTo: ['List the main pains your product solves, per buyer role.', 'Write diagnostic questions for each.', 'Give sellers value examples and calculators.', 'Coach sellers on reaching the power sponsor early.'],
  pitfalls: ['Diagnosing for too long without moving forward.', 'Building a vision only your seller believes in.', 'Never reaching the person who can decide.'],
  template: `SOLUTION SELLING — [Account]

Pain:
Vision of the solution:
Value agreed:
Power sponsor:
Evaluation plan and dates:`,
  sources: ['Michael T. Bosworth, Solution Selling, McGraw-Hill, 1995.'],
  related: ['spin-selling', 'value-selling', 'command-of-the-message', 'meddic']
},
{
  slug: 'value-selling', name: 'Value Selling', company: 'kontor',
  origin: 'ValueSelling Associates, 1990s',
  oneLiner: 'A simple formula: vision times value times power equals a plan to a decision.',
  question: 'Does the buyer have a vision, see the value, and can they make it happen?',
  glance: { 'Use it for': 'Qualifying and advancing deals on value', 'You need': 'Discovery conversations with the buyer', 'You get': 'A clear view of what is missing in each deal', 'Time': 'Part of every deal review' },
  steps: [
    { title: 'Vision', text: 'The buyer’s own picture of how their problem is solved, ideally including your capabilities.', example: 'The owner pictures paying staff on time even when customers pay late.' },
    { title: 'Value', text: 'The measurable value the buyer expects, in their terms.', example: 'No more overdraft fees, and no late supplier payments.' },
    { title: 'Power', text: 'Access to the people who can approve and fund the change.', example: 'The owner and the external accountant.' },
    { title: 'Plan', text: 'An agreed plan to a decision. If any of the three is zero, there is no deal.', example: 'Connect the software this week; finance the first invoice next week.' }
  ],
  diagram: {
    type: 'statement', viewBox: '0 0 800 280',
    alt: 'Value selling formula: vision, times value, times power, equals a plan.',
    parts: [
      { step: 1, lead: 'Vision', slot: '[the buyer’s picture of the solution]', ex: 'pay staff on time, even when customers pay late' },
      { step: 2, lead: '× Value', slot: '[the measurable value they expect]', ex: 'no overdraft fees, no late supplier payments' },
      { step: 3, lead: '× Power', slot: '[who can approve and fund it]', ex: 'the owner and the external accountant' },
      { step: 4, lead: '= Plan', slot: '[agreed steps to a decision]', ex: 'connect this week, first invoice next week' }
    ]
  },
  whenToUse: ['Deal reviews, to see what is missing.', 'Training sellers to sell on value.', 'Mid-size B2B deals with a few decision-makers.'],
  whenNot: ['Very large deals with complex buying groups; combine it with MEDDIC.'],
  howTo: ['For each deal, write the buyer’s vision in their words.', 'Agree the value with the buyer, in numbers if possible.', 'Confirm who has power to decide.', 'Agree a written plan to a decision.'],
  pitfalls: ['A vision written by the seller, not the buyer.', 'Value that the buyer never confirmed.', 'Moving forward without access to power.'],
  template: `VALUE SELLING — [Deal]

Vision (buyer’s words):
Value (agreed, measurable):
Power (who decides, access):
Plan (steps, dates):`,
  sources: ['ValueSelling Associates’ published materials on the ValueSelling Framework.'],
  related: ['solution-selling', 'command-of-the-message', 'meddic', 'economic-value-to-customer']
},
{
  slug: 'gartner-buying-jobs', name: 'B2B Buying Jobs', company: 'lumora',
  origin: 'Gartner, 2019',
  oneLiner: 'B2B buyers do not move in a straight line. They work through six jobs, often going back and forth.',
  question: 'Are we helping buyers with every job they must complete to buy?',
  glance: { 'Use it for': 'Planning content and enablement for B2B buying', 'You need': 'An understanding of how your buying groups decide', 'You get': 'Content and help mapped to each buying job', 'Time': 'A workshop' },
  steps: [
    { title: 'Problem identification', text: 'The buying group agrees there is a problem worth solving.', example: 'Partners agree antibiotic prescribing must fall.' },
    { title: 'Solution exploration', text: 'They look at what kinds of solutions exist.', example: 'Lab tests, rapid tests, clinical scores.' },
    { title: 'Requirements building', text: 'They agree what the solution must do.', example: 'Ten-minute result, reimbursed, validated accuracy.' },
    { title: 'Supplier selection', text: 'They compare suppliers against the requirements.', example: 'Three rapid-test suppliers shortlisted.' },
    { title: 'Validation', text: 'They check claims through references, trials and reviews.', example: 'A two-week trial and calls with two practices.' },
    { title: 'Consensus creation', text: 'The group aligns on a decision. This often takes longest.', example: 'Partners and practice manager agree on cost and workflow.' },
    { title: 'Help with every job', text: 'Buyers move between jobs, so make help for each easy to find.', example: 'Lumora adds a “buying guide for partners” to support consensus.' }
  ],
  diagram: {
    type: 'cycle', viewBox: '0 0 800 470',
    alt: 'B2B buying jobs: problem identification, solution exploration, requirements building, supplier selection, validation and consensus creation around the buying group.',
    center: { step: 7, title: 'Buying group', text: 'Moves between jobs', ex: 'Partners, practice manager' },
    segments: [
      { step: 1, title: 'Problem', text: 'Agree there is a problem', ex: 'Cut antibiotic prescribing' },
      { step: 2, title: 'Explore', text: 'What kinds of solution exist', ex: 'Lab, rapid tests, scores' },
      { step: 3, title: 'Require', text: 'What it must do', ex: '10 minutes, reimbursed' },
      { step: 4, title: 'Select', text: 'Compare suppliers', ex: 'Three shortlisted' },
      { step: 5, title: 'Validate', text: 'Check the claims', ex: 'Trial, reference calls' },
      { step: 6, title: 'Consensus', text: 'Align the group', ex: 'Partners agree cost' }
    ]
  },
  whenToUse: ['Planning B2B content and sales enablement.', 'Deals stall even when buyers like the product.', 'Building tools for buying groups.'],
  whenNot: ['Simple purchases by one person.'],
  howTo: ['Map your current content to the six jobs.', 'Find the jobs with little or no help, often consensus.', 'Create tools buyers can share internally: guides, calculators, comparison sheets.', 'Make it easy for sellers to send the right help at each job.'],
  pitfalls: ['Treating the jobs as a linear funnel.', 'Content only for supplier selection.', 'Ignoring the internal work buyers do without you.'],
  template: `BUYING JOBS — [Product]

Job                       Content and tools today      Gap
Problem identification
Solution exploration
Requirements building
Supplier selection
Validation
Consensus creation`,
  sources: ['Gartner, “The New B2B Buying Journey”, 2019.'],
  related: ['buying-committee-map', 'content-to-stage-map', 'five-rings', 'customer-journey-map']
},
{
  slug: 'laer', name: 'LAER', company: 'orto',
  origin: 'Carew International',
  oneLiner: 'Handle objections in four steps: listen, acknowledge, explore, respond.',
  question: 'How should sellers handle objections without arguing?',
  glance: { 'Use it for': 'Objection handling in sales and support', 'You need': 'A list of common objections', 'You get': 'A calm, repeatable way to handle them', 'Time': 'A training session plus practice' },
  steps: [
    { title: 'Listen', text: 'Let the buyer finish. Do not interrupt or prepare your answer while they talk.', example: 'The category buyer: “Your price is above own-label.”' },
    { title: 'Acknowledge', text: 'Show you understood, without agreeing or disagreeing.', example: '“So price compared with own-label is the main concern.”' },
    { title: 'Explore', text: 'Ask questions to find the real concern behind the objection.', example: '“Is it the shelf price, or the margin per metre of shelf?”' },
    { title: 'Respond', text: 'Answer the real concern, with proof.', example: 'Show that margin per shelf metre is 9% higher in test stores.' }
  ],
  diagram: {
    type: 'acronym', viewBox: '0 0 800 300',
    alt: 'LAER objection handling: listen, acknowledge, explore and respond.',
    items: [
      { step: 1, letter: 'L', title: 'Listen', text: 'Let them finish', ex: '“Your price is above own-label.”', status: '', statusEx: '' },
      { step: 2, letter: 'A', title: 'Acknowledge', text: 'Show you understood', ex: '“So price is the main concern.”', status: '', statusEx: '' },
      { step: 3, letter: 'E', title: 'Explore', text: 'Find the real concern', ex: '“Shelf price, or margin per metre?”', status: '', statusEx: '' },
      { step: 4, letter: 'R', title: 'Respond', text: 'Answer with proof', ex: 'Margin per shelf metre 9% higher', status: '', statusEx: '' }
    ]
  },
  whenToUse: ['Training sellers and support teams.', 'Building objection-handling guides.', 'Price and competitor objections.'],
  whenNot: ['When the objection is a real deal-breaker; respect it.'],
  howTo: ['List the ten most common objections from sellers and win/loss.', 'Write explore questions and proof-based responses for each.', 'Practise in role-play.', 'Update the guide as new objections appear.'],
  pitfalls: ['Jumping straight to respond.', 'Acknowledging in a way that sounds like agreement.', 'Responses with no proof.'],
  template: `OBJECTION GUIDE — [Product]

Objection:
Acknowledge:
Explore (questions):
Respond (with proof):`,
  sources: ['The LAER model is taught by Carew International in its sales training.'],
  related: ['battlecard', 'forces-of-progress', 'spin-selling', 'win-loss-analysis']
},
{
  slug: 'content-to-stage-map', name: 'Content-to-Stage Map', company: 'tessera',
  origin: 'Common product marketing practice; no single author',
  oneLiner: 'Map every piece of content to the stage where buyers and customers need it, and find the gaps.',
  question: 'Do we have the right content for every stage, and do sellers know which to use when?',
  glance: { 'Use it for': 'Content planning and sales enablement', 'You need': 'An inventory of existing content', 'You get': 'A map of content by stage, with gaps to fill', 'Time': 'A week to audit and map' },
  steps: [
    { title: 'Map the stages', text: 'Lay out the stages from first interest to growing account.', example: 'Tessera audits 80 pieces of content.' },
    { title: 'Awareness', text: 'Content that helps buyers recognise the problem.', example: 'A guide to the real cost of unplanned downtime.' },
    { title: 'Consideration', text: 'Content that helps buyers compare approaches.', example: 'A comparison of spreadsheets, ERP modules and dedicated tools.' },
    { title: 'Decision', text: 'Content that helps buyers choose and justify the purchase.', example: 'ROI calculator, case study, IT security pack.' },
    { title: 'Onboarding', text: 'Content that gets new customers to first value quickly.', example: 'Set-up checklist and technician app videos.' },
    { title: 'Expansion', text: 'Content that helps customers get more value and buy more.', example: 'Guides to adding a second plant and the Predict module.' }
  ],
  diagram: {
    type: 'funnel', viewBox: '0 0 800 420', outlineStep: 1,
    alt: 'Content-to-stage map: awareness, consideration, decision, onboarding and expansion, each with its content.',
    stages: [
      { step: 2, title: 'Awareness', metric: 'Recognise the problem', ex: 'Cost of downtime guide' },
      { step: 3, title: 'Consideration', metric: 'Compare approaches', ex: 'Spreadsheets vs ERP vs Tessera' },
      { step: 4, title: 'Decision', metric: 'Choose and justify', ex: 'ROI calculator, case, security pack' },
      { step: 5, title: 'Onboarding', metric: 'Reach first value', ex: 'Set-up checklist, app videos' },
      { step: 6, title: 'Expansion', metric: 'Get more value', ex: 'Second plant, Predict module' }
    ]
  },
  whenToUse: ['Sellers cannot find the right content.', 'Planning next quarter’s content.', 'Content focuses only on awareness.'],
  whenNot: ['When the stages are unclear; agree them first.'],
  howTo: ['List every content asset you have.', 'Assign each to one main stage and buyer role.', 'Find stages with little or outdated content.', 'Share the map with sales in the tools they use.'],
  pitfalls: ['Plenty of awareness content, little for decision.', 'Forgetting customers after the sale.', 'A map stored where sellers never look.'],
  template: `CONTENT MAP — [Product]

Stage           Content             Owner     Updated     Gap
Awareness
Consideration
Decision
Onboarding
Expansion`,
  sources: ['A common product marketing practice; there is no single original source.'],
  related: ['gartner-buying-jobs', 'tofu-mofu-bofu', 'bow-tie', 'peso-model']
},
{
  slug: 'kirkpatrick-model', name: 'Kirkpatrick Model', company: 'kontor',
  origin: 'Donald Kirkpatrick, 1959',
  oneLiner: 'Measure sales training at four levels: reaction, learning, behaviour and business results.',
  question: 'Did our enablement actually change what sellers do, and did it pay off?',
  glance: { 'Use it for': 'Measuring sales enablement and training', 'You need': 'A training programme and access to sales data', 'You get': 'Evidence of impact beyond attendance', 'Time': 'Plan before training; measure over three months' },
  steps: [
    { title: 'Reaction', text: 'Did sellers find the training useful and relevant?', example: 'Sellers rate the new pricing training 4.4 out of 5.' },
    { title: 'Learning', text: 'Did they learn what was intended? Test it.', example: '92% pass a short quiz on the new plans.' },
    { title: 'Behaviour', text: 'Do they apply it in real work? Look at calls, CRM data and coaching.', example: '70% of calls now mention the CHF 49 plan.' },
    { title: 'Results', text: 'Did it change business results?', example: 'Share of new customers on the CHF 49 plan rises from 20% to 34%.' }
  ],
  diagram: {
    type: 'pyramid', viewBox: '0 0 800 450',
    alt: 'Kirkpatrick model pyramid: reaction at the base, then learning, behaviour, and results at the top.',
    levels: [
      { side: '4. Results', sideQ: 'Did the business improve?', cells: [{ step: 4, title: 'Results' }] },
      { side: '3. Behaviour', sideQ: 'Do they apply it?', cells: [{ step: 3, title: 'Behaviour', text: 'Use in real work', ex: '70% of calls mention plan' }] },
      { side: '2. Learning', sideQ: 'Did they learn it?', cells: [{ step: 2, title: 'Learning', text: 'Knowledge and skills gained', ex: '92% pass the quiz' }] },
      { side: '1. Reaction', sideQ: 'Did they find it useful?', cells: [{ step: 1, title: 'Reaction', text: 'Sellers’ view of the training', ex: 'Rated 4.4 out of 5' }] }
    ]
  },
  whenToUse: ['Planning a sales training or enablement programme.', 'Showing leadership the value of enablement.', 'Deciding which programmes to keep.'],
  whenNot: ['Tiny one-off briefings, where measuring all four levels costs more than it tells you.'],
  howTo: ['Start from the result you want, then design backwards.', 'Decide how to measure each level before training starts.', 'Measure behaviour through call reviews and CRM data.', 'Report results three months after training.'],
  pitfalls: ['Stopping at satisfaction surveys.', 'No baseline, so results cannot be compared.', 'Claiming results that other changes caused.'],
  template: `KIRKPATRICK — [Programme]

Level        Measure            Target     Result
Reaction
Learning
Behaviour
Results`,
  sources: ['Donald L. Kirkpatrick, “Techniques for Evaluating Training Programs”, Journal of the American Society of Training Directors, 1959.'],
  related: ['meddic', 'command-of-the-message', 'battlecard', 'good-better-best']
}
];
