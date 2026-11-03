// Messaging and storytelling: new pages.
module.exports = [
{
  slug: 'message-hierarchy', name: 'Message Hierarchy', company: 'lumora',
  origin: 'Common product marketing practice; no single author',
  oneLiner: 'One value proposition at the top, a few key messages under it, and supporting points and proof below.',
  question: 'What do we say first, what comes next, and what proves it?',
  glance: { 'Use it for': 'Ordering messages for web pages, decks and sales conversations', 'You need': 'Agreed positioning and proof points', 'You get': 'A clear order of messages for every channel', 'Time': 'One workshop and a review' },
  steps: [
    { title: 'Proof', text: 'Start at the base with the evidence you actually have: data, studies, customers, certifications.', example: 'A validation study with 2,000 patients, a reimbursement code, 120 practices using it.' },
    { title: 'Supporting points', text: 'The specifics that explain each key message.', example: 'Fingertip sample, no lab courier; validated against lab tests; results go to the patient record.' },
    { title: 'Key messages', text: 'Three or so messages that each give a reason to believe the value proposition.', example: 'A result in ten minutes. Lab-grade accuracy. Fits the GP workflow.' },
    { title: 'Value proposition', text: 'The top: one sentence that everything below supports.', example: 'Make the antibiotic decision during the consultation, not days later.' }
  ],
  diagram: {
    type: 'pyramid', viewBox: '0 0 800 450',
    alt: 'Message hierarchy pyramid: value proposition at the top, then key messages, supporting points and proof at the base.',
    levels: [
      { side: 'One sentence', sideQ: 'What we promise', cells: [{ step: 4, title: 'Value proposition' }] },
      { side: 'Three or so', sideQ: 'Why believe it', cells: [{ step: 3, title: 'Key messages', text: 'Reasons to believe', ex: 'Ten minutes, lab-grade, fits workflow' }] },
      { side: 'Per message', sideQ: 'How it works', cells: [{ step: 2, title: 'Supporting points', text: 'Specifics behind each message', ex: 'Fingertip sample, validated, results to record' }] },
      { side: 'Evidence', sideQ: 'Why trust us', cells: [{ step: 1, title: 'Proof', text: 'Data, studies, customers, certifications', ex: '2,000-patient study, reimbursement, 120 practices' }] }
    ]
  },
  whenToUse: ['Writing a website, sales deck or launch campaign.', 'Teams describe the product in different orders and emphases.', 'Turning a messaging house into channel copy.'],
  whenNot: ['Before positioning is agreed.'],
  howTo: ['List the proof you have before writing any message.', 'Write key messages that each rest on proof.', 'Write one value proposition that all key messages support.', 'Use the hierarchy to order headlines, sections and talk tracks.'],
  pitfalls: ['Key messages with no proof beneath them.', 'Too many key messages to remember.', 'A value proposition that just lists the key messages.'],
  template: `MESSAGE HIERARCHY — [Product], [audience]

Value proposition:
Key message 1:     Supporting points:     Proof:
Key message 2:     Supporting points:     Proof:
Key message 3:     Supporting points:     Proof:`,
  sources: ['A standard product marketing practice; there is no single original source.'],
  related: ['messaging-house', 'value-proposition-formula', 'fab', 'positioning-statement']
},
{
  slug: 'strategic-narrative', name: 'Strategic Narrative', company: 'kontor',
  origin: 'Andy Raskin, 2016',
  oneLiner: 'A sales story that starts with a big change in the world, not with your product.',
  question: 'What story makes buyers see that they must change, and that we can help?',
  glance: { 'Use it for': 'Sales decks, keynotes and company stories', 'You need': 'A clear view of the shift in your market', 'You get': 'One narrative for sales, marketing and leadership', 'Time': 'Two workshops' },
  steps: [
    { title: 'Name a big change', text: 'Open with an undeniable change in the world that affects your buyers.', example: 'Large customers now pay their suppliers in 60 to 90 days.' },
    { title: 'Show winners and losers', text: 'Explain that some will adapt and win, and others will fall behind.', example: 'Small firms that wait run short of cash; those that unlock their invoices keep growing.' },
    { title: 'Tease the promised land', text: 'Describe the desirable future, before you mention your product.', example: 'Get paid the day you send the invoice.' },
    { title: 'Features as magic gifts', text: 'Introduce product capabilities as the tools that overcome the obstacles to that future.', example: 'Connect your accounting software, pick an invoice, see one fixed fee.' },
    { title: 'Present evidence', text: 'Show that it works: customers, numbers, stories.', example: '2,000 small businesses; median payout in six hours.' }
  ],
  diagram: {
    type: 'chain', viewBox: '0 0 800 490',
    alt: 'Strategic narrative: name a big change, show winners and losers, tease the promised land, introduce features as gifts, present evidence.',
    nodes: [
      { step: 1, title: 'Name a big change', text: 'An undeniable shift.', ex: 'Payment terms now 60–90 days.' },
      { step: 2, title: 'Winners and losers', text: 'Adapt or fall behind.', ex: 'Waiting firms run short of cash.' },
      { step: 3, title: 'The promised land', text: 'The future, before the product.', ex: 'Paid the day you invoice.' },
      { step: 4, title: 'Features as gifts', text: 'Tools to overcome obstacles.', ex: 'Connect, pick, fixed fee.' },
      { step: 5, title: 'Evidence', text: 'Proof that it works.', ex: '2,000 firms, 6-hour median payout.' }
    ]
  },
  whenToUse: ['Rebuilding a sales deck that starts with “about us”.', 'Launching a new category or a big repositioning.', 'Aligning leadership on one company story.'],
  whenNot: ['Short product pages, where buyers already know why they are there.'],
  howTo: ['Agree the change in the world with leadership and sales.', 'Write each of the five parts in one or two sentences.', 'Build the deck around those five parts.', 'Test it in real sales calls and adjust.'],
  pitfalls: ['A “change” that is really your product.', 'Skipping winners and losers, which removes the urgency.', 'Too many features in the gifts section.'],
  template: `STRATEGIC NARRATIVE — [Company]

1. The big change:
2. Winners and losers:
3. The promised land:
4. Features as gifts (obstacle → capability):
5. Evidence:`,
  sources: ['Andy Raskin, “The Greatest Sales Deck I’ve Ever Seen”, Medium, 2016.'],
  related: ['sales-pitch', 'why-change-why-now-why-us', 'category-design', 'messaging-house']
},
{
  slug: 'sales-pitch', name: 'Sales Pitch (Dunford)', company: 'tessera',
  origin: 'April Dunford, 2023',
  oneLiner: 'A pitch built on your positioning: start with an insight about the market, then show why you are the best answer.',
  question: 'How do we turn our positioning into a pitch that helps buyers decide?',
  glance: { 'Use it for': 'Building or fixing the main sales pitch', 'You need': 'Agreed positioning (for example from Obviously Awesome)', 'You get': 'A pitch structure sales can use and adapt', 'Time': 'Two to three workshops' },
  steps: [
    { title: 'Insight', text: 'Open with an insight about how the market is changing and what that means for buyers.', example: 'Plants are moving from fixed maintenance schedules to fixing what is about to fail.' },
    { title: 'Alternatives', text: 'Describe the ways buyers can solve the problem today, and the limits of each.', example: 'Spreadsheets miss early warnings; ERP modules need long IT projects.' },
    { title: 'Perfect solution', text: 'Describe what an ideal solution would do, based on the insight.', example: 'Planning that warns early and needs no IT team.' },
    { title: 'Differentiated value', text: 'Introduce your product through the value only you deliver.', example: 'Live in a day, works offline on phones, warns before parts fail.' },
    { title: 'Proof', text: 'Back each value with evidence the buyer trusts.', example: 'A pilot plant cut unplanned downtime by 18% in six months.' },
    { title: 'Objections and next step', text: 'Handle the usual concerns, then agree a clear next step.', example: 'An IT security pack, then a two-week pilot on one line.' }
  ],
  diagram: {
    type: 'chain', viewBox: '0 0 800 490',
    alt: 'Sales pitch: insight, alternatives, perfect solution, differentiated value, proof, objections and next step.',
    nodes: [
      { step: 1, title: 'Insight', text: 'How the market is changing.', ex: 'From schedules to predicting failure.' },
      { step: 2, title: 'Alternatives', text: 'Options today and their limits.', ex: 'Spreadsheets; slow ERP projects.' },
      { step: 3, title: 'Perfect solution', text: 'What ideal would look like.', ex: 'Early warnings, no IT team.' },
      { step: 4, title: 'Differentiated value', text: 'Only you deliver this.', ex: 'Live in a day; offline; alerts.' },
      { step: 5, title: 'Proof', text: 'Evidence buyers trust.', ex: '18% less downtime.' },
      { step: 6, title: 'Objections, next step', text: 'Handle concerns, agree action.', ex: 'Security pack; two-week pilot.' }
    ]
  },
  whenToUse: ['Sales pitches vary from seller to seller.', 'After a repositioning, so the pitch matches it.', 'Deals stall because buyers cannot decide.'],
  whenNot: ['Before positioning is agreed. The pitch is built on it.'],
  howTo: ['Start from your positioning: alternatives, differentiated value, best-fit customers.', 'Write the insight that makes your value matter now.', 'Build the pitch in this order and keep slides few.', 'Practise with sales and refine after real calls.'],
  pitfalls: ['Opening with company history.', 'An insight that is really a product claim.', 'Attacking competitors instead of explaining the limits of the alternatives.'],
  template: `SALES PITCH — [Product]

Insight:
Alternatives and their limits:
Perfect solution:
Our differentiated value:
Proof:
Objections and next step:`,
  sources: ['April Dunford, Sales Pitch, Ambient Press, 2023. The book’s structure is condensed to six steps here.'],
  related: ['obviously-awesome', 'strategic-narrative', 'why-change-why-now-why-us', 'battlecard']
},
{
  slug: 'storybrand', name: 'StoryBrand', company: 'nordhaus',
  origin: 'Donald Miller, 2017',
  oneLiner: 'Tell your marketing as a story where the customer is the hero and your company is the guide.',
  question: 'Is our customer the hero of our marketing, or are we?',
  glance: { 'Use it for': 'Website and campaign messaging', 'You need': 'A clear customer problem and a simple plan to solve it', 'You get': 'A clear, customer-centred message for web and campaigns', 'Time': 'One workshop' },
  steps: [
    { title: 'A character', text: 'The customer is the hero, with something they want.', example: 'Someone moving into a new flat.' },
    { title: 'Has a problem', text: 'Name the external problem, and how it makes them feel.', example: 'Empty rooms, no time, and fear of costly mistakes.' },
    { title: 'Meets a guide', text: 'Your company, showing empathy and authority.', example: 'Nordhaus room planners who have furnished thousands of homes.' },
    { title: 'Who gives a plan', text: 'A few simple steps that make buying feel safe.', example: 'Book a free plan, choose your pieces, we deliver and assemble.' },
    { title: 'Calls to action', text: 'A clear, direct call to act.', example: '“Book a free room plan.”' },
    { title: 'Avoids failure', text: 'What is at stake if they do nothing.', example: 'Weeks of boxes and furniture that doesn’t fit.' },
    { title: 'Ends in success', text: 'The life after the problem is solved.', example: 'A home you’re happy to invite friends to.' }
  ],
  diagram: {
    type: 'chain', viewBox: '0 0 800 490',
    alt: 'StoryBrand: a character has a problem, meets a guide who gives a plan and calls to action, helping avoid failure and end in success.',
    nodes: [
      { step: 1, title: 'A character', text: 'The customer, who wants something.', ex: 'Moving into a new flat.' },
      { step: 2, title: 'Has a problem', text: 'External problem and feeling.', ex: 'Empty rooms, no time.' },
      { step: 3, title: 'Meets a guide', text: 'You: empathy and authority.', ex: 'Nordhaus room planners.' },
      { step: 4, title: 'Gives a plan', text: 'Simple steps.', ex: 'Plan, choose, delivered.' },
      { step: 5, title: 'Calls to action', text: 'One clear ask.', ex: 'Book a free room plan.' },
      { step: 6, title: 'Avoids failure', text: 'The stakes.', ex: 'Weeks of boxes.' },
      { step: 7, title: 'Ends in success', text: 'Life after.', ex: 'A home to invite friends to.' }
    ]
  },
  whenToUse: ['Rewriting a website home page.', 'Messages that talk about the company more than the customer.', 'Campaigns that need one simple story.'],
  whenNot: ['Detailed technical buying, where buyers need specifics more than story.'],
  howTo: ['Fill each of the seven parts in one sentence.', 'Check that the customer, not the company, is the hero.', 'Turn the plan and call to action into the page structure.', 'Test the page with a few target customers.'],
  pitfalls: ['Casting your company as the hero.', 'A plan with too many steps.', 'Overstating the stakes until it sounds like fear selling.'],
  template: `STORYBRAND — [Product]

Character (who, what they want):
Problem (external, how it feels):
Guide (empathy, authority):
Plan (3 steps):
Call to action:
Failure to avoid:
Success:`,
  sources: ['Donald Miller, Building a StoryBrand, HarperCollins Leadership, 2017.'],
  related: ['message-hierarchy', 'value-proposition-formula', 'strategic-narrative', 'messaging-house']
},
{
  slug: 'b2b-elements-of-value', name: 'B2B Elements of Value', company: 'halden',
  origin: 'Eric Almquist, Jamie Cleghorn and Lori Sherer, Bain and Company, 2018',
  oneLiner: 'A pyramid of the kinds of value B2B buyers look for, from basics to personal and inspirational value.',
  question: 'Which kinds of value do we deliver beyond the basics, and do we say so?',
  glance: { 'Use it for': 'Finding value you deliver but do not talk about', 'You need': 'Customer interviews and a view of competitors', 'You get': 'A richer value story beyond price and specifications', 'Time': 'One workshop after interviews' },
  steps: [
    { title: 'Table stakes', text: 'The base: meeting specifications, an acceptable price, compliance. Necessary, but not a reason to choose you.', example: 'Meets the specification, fair price, regulatory compliance.' },
    { title: 'Functional value', text: 'Economic and performance value: lower costs, better quality, higher output.', example: 'Higher furnace output and fewer rejected batches.' },
    { title: 'Ease of doing business', text: 'Productivity, operations, access, relationship and strategic fit.', example: 'Reliable delivery and clear certificates for every shipment.' },
    { title: 'Individual value', text: 'What the buyer gains personally: less anxiety, better reputation, career growth.', example: 'The quality manager no longer fears an audit or a line stoppage.' },
    { title: 'Inspirational value', text: 'The top: vision, hope and social responsibility.', example: 'Helping Europe build its own solar supply chain.' }
  ],
  diagram: {
    type: 'pyramid', viewBox: '0 0 800 450',
    alt: 'B2B elements of value pyramid: table stakes at the base, then functional value, ease of doing business, individual value and inspirational value at the top.',
    levels: [
      { cells: [{ step: 5, title: 'Inspirational' }] },
      { cells: [{ step: 4, title: 'Individual', text: 'Personal gains', ex: 'No audit fear' }] },
      { cells: [{ step: 3, title: 'Ease of doing business', text: 'Productivity, access, relationship', ex: 'Reliable delivery, clear certificates' }] },
      { cells: [{ step: 2, title: 'Functional', text: 'Economic and performance value', ex: 'Higher output, fewer rejects' }] },
      { cells: [{ step: 1, title: 'Table stakes', text: 'Specification, price, compliance', ex: 'Meets spec, fair price, compliant' }] }
    ]
  },
  whenToUse: ['A message that only talks about price and specifications.', 'Finding why customers stay with you even when cheaper options exist.', 'Writing messages for different members of the buying group.'],
  whenNot: ['When you have not yet proved functional value. The upper levels rest on it.'],
  howTo: ['Interview customers about why they chose you and why they stay.', 'Sort what they say into the five levels.', 'Compare with what competitors deliver.', 'Add the strongest higher-level value to your messaging, with proof.'],
  pitfalls: ['Claiming inspirational value without functional proof.', 'Listing every element instead of choosing a few.', 'Ignoring individual value, which often decides B2B purchases.'],
  template: `B2B ELEMENTS OF VALUE — [Product]

Level                     What we deliver        Evidence
Inspirational
Individual
Ease of doing business
Functional
Table stakes

Elements to add to our messaging:`,
  sources: ['Eric Almquist, Jamie Cleghorn and Lori Sherer, “The B2B Elements of Value”, Harvard Business Review, 2018.'],
  related: ['value-proposition-canvas', 'message-hierarchy', 'economic-value-to-customer', 'buying-committee-map']
},
{
  slug: 'benefit-ladder', name: 'Benefit Ladder', company: 'kontor',
  origin: 'Common messaging practice, rooted in means-end research',
  oneLiner: 'Climb from a feature to its functional benefit to its emotional benefit, then choose the rung to lead with.',
  question: 'Which level of benefit should our message lead with?',
  glance: { 'Use it for': 'Headlines, campaigns and product page copy', 'You need': 'Customer insight on why features matter', 'You get': 'A ladder of benefits and a clear choice of what to lead with', 'Time': 'An hour per message' },
  steps: [
    { title: 'Feature', text: 'What the product does or has.', example: 'Connects to your accounting software.' },
    { title: 'Functional benefit', text: 'The practical result for the customer.', example: 'Cash in 24 hours with no paperwork.' },
    { title: 'Emotional benefit', text: 'How that result makes the customer feel.', example: 'Calm before every payroll day.' },
    { title: 'Choose the rung', text: 'Lead with the highest rung you can credibly prove, and keep the lower rungs as proof.', example: 'Headline: “Payroll day, without the panic.” Proof: cash in 24 hours.' }
  ],
  diagram: {
    type: 'tiers', viewBox: '0 0 800 450',
    alt: 'Benefit ladder: feature on the lowest rung, functional benefit in the middle and emotional benefit at the top.',
    tiers: [
      { step: 1, height: 230, title: 'Feature', sub: 'What it does', subEx: 'Accounting sync', items: '• A fact about\n  the product', itemsEx: '• Connects to your\n  accounting software' },
      { step: 2, height: 300, title: 'Functional', sub: 'Practical result', subEx: 'Cash in 24 hours', items: '• Time, money,\n  effort saved', itemsEx: '• Cash in 24 hours\n• No paperwork' },
      { step: 3, height: 370, title: 'Emotional', sub: 'How it feels', subEx: 'Calm on payroll day', items: '• Relief, pride,\n  confidence', itemsEx: '• Calm before\n  every payroll day' }
    ],
    note: { step: 4, at: 2, label: 'Lead with the top rung you can prove', ex: 'Lead: “without the panic”' }
  },
  whenToUse: ['Writing headlines and campaign lines.', 'Copy that lists features without saying why they matter.', 'Choosing between a rational and an emotional message.'],
  whenNot: ['Highly technical buyers early in evaluation, who need the functional rung first.'],
  howTo: ['Start from one feature that matters to the target segment.', 'Ask “so what?” to reach the functional benefit.', 'Ask how that result makes the buyer feel.', 'Choose the rung to lead with and use the others as proof.'],
  pitfalls: ['Emotional claims with no functional proof.', 'Benefits that any competitor could claim.', 'Laddering features nobody cares about.'],
  template: `BENEFIT LADDER — [Product], [segment]

Feature:
Functional benefit:
Emotional benefit:

Lead with:
Proof underneath:`,
  sources: ['A common messaging practice, related to means-end chain research (Reynolds and Gutman, 1988).'],
  related: ['laddering', 'fab', 'message-hierarchy', 'messaging-house']
},
{
  slug: 'value-proposition-formula', name: 'Value Proposition Formula', company: 'nordhaus',
  origin: 'Steve Blank’s “We help X do Y by doing Z”',
  oneLiner: 'One sentence: who you help, what you help them do, how, and compared with what.',
  question: 'Can we say clearly who we help, with what, and how?',
  glance: { 'Use it for': 'A clear first line for pitches, pages and profiles', 'You need': 'A chosen target customer and your main differentiator', 'You get': 'One sentence everyone can repeat', 'Time': 'Thirty minutes' },
  steps: [
    { title: 'Who', text: 'The specific customer you help.', example: 'We help people moving into a new home…' },
    { title: 'Do what', text: 'The outcome they want, in their words.', example: '…furnish their main rooms in a weekend…' },
    { title: 'By how', text: 'How you deliver it: your approach, not a feature list.', example: '…by planning the rooms with them, then delivering and assembling everything…' },
    { title: 'Unlike', text: 'Optional: the alternative you are better than.', example: '…unlike big-box stores where you do it all yourself.' }
  ],
  diagram: {
    type: 'statement', viewBox: '0 0 800 280',
    alt: 'Value proposition formula: we help a customer, do an outcome, by an approach, unlike an alternative.',
    parts: [
      { step: 1, lead: 'We help', slot: '[specific customer]', ex: 'people moving into a new home' },
      { step: 2, lead: 'to', slot: '[outcome they want]', ex: 'furnish their main rooms in a weekend' },
      { step: 3, lead: 'by', slot: '[how you deliver it]', ex: 'planning with them, then delivering and assembling' },
      { step: 4, lead: 'unlike', slot: '[the alternative]', ex: 'big-box stores where you do it all yourself' }
    ]
  },
  whenToUse: ['The first line of a pitch, website or LinkedIn profile.', 'Testing whether a team agrees on what the product is for.', 'Early-stage products that need a clear, simple statement.'],
  whenNot: ['As a replacement for full positioning work in a crowded market.'],
  howTo: ['Write several versions with different customers and outcomes.', 'Pick the most specific one that is still true.', 'Read it to target customers and watch whether they nod.', 'Use it as the first line everywhere.'],
  pitfalls: ['A “who” that means everyone.', 'An outcome that is really a feature.', 'A “how” full of jargon.'],
  template: `VALUE PROPOSITION — [Product]

We help [specific customer]
to [outcome]
by [how]
unlike [alternative].`,
  sources: ['Steve Blank, blog posts on value propositions and customer development, 2010s.'],
  related: ['positioning-statement', 'message-hierarchy', 'value-proposition-canvas', 'storybrand']
},
{
  slug: 'why-change-why-now-why-us', name: 'Why Change, Why Now, Why Us', company: 'tessera',
  origin: 'Erik Peterson and Tim Riesterer, Corporate Visions, 2011',
  oneLiner: 'Most deals are lost to “no decision”. Answer why the buyer should change, why now, and why you.',
  question: 'Have we given buyers a reason to change at all, before asking them to choose us?',
  glance: { 'Use it for': 'Sales messaging when the main competitor is doing nothing', 'You need': 'A clear view of the cost of the status quo', 'You get': 'A talk track that builds urgency before differentiation', 'Time': 'One workshop' },
  steps: [
    { title: 'Why change', text: 'Show what is wrong with the current way, in the buyer’s terms. The status quo is your biggest competitor.', example: 'Fixed maintenance schedules miss failures and waste technician time.' },
    { title: 'Why now', text: 'Give a reason to act soon: a cost of waiting, a deadline or a shift.', example: 'Skilled technicians are scarce, and insurers now ask for maintenance records.' },
    { title: 'Why us', text: 'Only now explain why you are the best way to change.', example: 'Live in a day, with no IT project and early failure warnings.' },
    { title: 'Why pay', text: 'Show that the value clearly exceeds the cost.', example: 'Two avoided breakdowns pay for a year of Tessera.' }
  ],
  diagram: {
    type: 'chain', viewBox: '0 0 800 490',
    alt: 'Why change, why now, why us, why pay: four questions to answer in order.',
    nodes: [
      { step: 1, title: 'Why change', text: 'What is wrong with today.', ex: 'Schedules miss failures.' },
      { step: 2, title: 'Why now', text: 'The cost of waiting.', ex: 'Technician shortage; insurers.' },
      { step: 3, title: 'Why us', text: 'Why you are the best way.', ex: 'Live in a day, early warnings.' },
      { step: 4, title: 'Why pay', text: 'Value exceeds cost.', ex: 'Two breakdowns pay for a year.' }
    ]
  },
  whenToUse: ['Many deals end in “no decision”.', 'Sales pitches jump straight to features.', 'Early-stage categories where buyers are not yet looking.'],
  whenNot: ['Late-stage deals where the buyer has already decided to change and is comparing vendors.'],
  howTo: ['List what the status quo costs the buyer.', 'Find a credible reason to act now.', 'Write why you are best only after the first two answers are strong.', 'Build a simple value calculation for why pay.'],
  pitfalls: ['Starting with why us.', 'Urgency that is invented rather than real.', 'Ignoring the risk buyers feel in changing.'],
  template: `WHY CHANGE, WHY NOW, WHY US — [Product], [segment]

Why change (cost of today):
Why now (reason to act soon):
Why us (differentiated value):
Why pay (value vs cost):`,
  sources: ['Erik Peterson and Tim Riesterer, Conversations That Win the Complex Sale, McGraw-Hill, 2011.'],
  related: ['strategic-narrative', 'sales-pitch', 'challenger-sale', 'forces-of-progress']
}
];
