// Brand and Content: new pages (restored categories, at Ilia's request).
const lg = (t, c, w) => 1 / (1 + Math.exp(-(t - c) / w));
const pts = f => { const a = []; for (let t = 0; t <= 24.0001; t += 0.4) a.push([+t.toFixed(2), +f(t).toFixed(3)]); return a; };
const activation = t => 0.85 * Math.exp(-Math.pow(t - 2, 2) / 3) + 0.08;
const brand = t => 0.75 * lg(t, 9, 3.2);

module.exports = [
{
  slug: 'brand-archetypes', name: 'Brand Archetypes', company: 'lumora',
  origin: 'Margaret Mark and Carol Pearson, 2001, drawing on Carl Jung',
  oneLiner: 'Twelve recognisable characters a brand can embody, grouped by the basic motivation each one speaks to.',
  question: 'What character should our brand play, so its voice and behaviour feel consistent?',
  glance: { 'Use it for': 'Brand voice, tone and creative direction', 'You need': 'A clear view of your customers’ motivations', 'You get': 'One primary archetype that guides voice and design', 'Time': 'One workshop' },
  steps: [
    { title: 'Independence', text: 'Archetypes for the need to find fulfilment and freedom: the Innocent, the Explorer and the Sage.', example: 'The Sage, who seeks the truth, fits a brand built on evidence.' },
    { title: 'Mastery', text: 'Archetypes for the need to achieve and change things: the Hero, the Outlaw and the Magician.', example: 'The Hero would suit a brand about winning a fight against infection.' },
    { title: 'Belonging', text: 'Archetypes for the need to connect with others: the Everyman, the Lover and the Jester.', example: 'The Everyman would make Lumora feel friendly but less expert.' },
    { title: 'Stability', text: 'Archetypes for the need for order and security: the Caregiver, the Creator and the Ruler.', example: 'The Caregiver fits the patient side, but GPs buy on evidence.' },
    { title: 'Choose one', text: 'Pick one primary archetype that fits your customers’ motivation and your proof, and let it guide voice, design and behaviour. Treat it as a creative tool, not a science.', example: 'Lumora chooses the Sage: calm, clear, evidence first, in every message.' }
  ],
  diagram: {
    type: 'forces', viewBox: '0 0 800 480',
    alt: 'Brand archetypes grouped by motivation: independence, mastery, belonging and stability, around the chosen archetype.',
    forces: [
      { pos: 'center', step: 5, title: 'Your archetype', text: 'One primary character.', ex: 'The Sage.', rating: '', ratingEx: '' },
      { pos: 'top', step: 1, title: 'Independence', text: 'Innocent, Explorer, Sage.', ex: 'Sage: seeks the truth.', rating: 'Fit?', ratingEx: 'Chosen' },
      { pos: 'right', step: 2, title: 'Mastery', text: 'Hero, Outlaw, Magician.', ex: 'Hero: too combative.', rating: 'Fit?', ratingEx: 'No' },
      { pos: 'bottom', step: 3, title: 'Belonging', text: 'Everyman, Lover, Jester.', ex: 'Everyman: too casual.', rating: 'Fit?', ratingEx: 'No' },
      { pos: 'left', step: 4, title: 'Stability', text: 'Caregiver, Creator, Ruler.', ex: 'Caregiver: patient side only.', rating: 'Fit?', ratingEx: 'Partly' }
    ],
    rating: { step: 5 }
  },
  whenToUse: ['Defining brand voice and tone.', 'Briefing designers, writers and agencies.', 'A brand that sounds different in every channel.'],
  whenNot: ['As a substitute for positioning. The archetype shapes how you speak, not what you claim.', 'As evidence about customers; it is a creative framework, not research.'],
  howTo: ['Agree the customer motivation your brand serves.', 'Shortlist two or three archetypes that fit it.', 'Test them against your proof and your competitors’ archetypes.', 'Choose one and write voice and design guidelines from it.'],
  pitfalls: ['Choosing an archetype the company cannot live up to.', 'Mixing several archetypes equally.', 'Picking the same archetype as your main competitor.'],
  template: `BRAND ARCHETYPE — [Brand]

Customer motivation:
Shortlist:
Chosen archetype:
Voice: we are … / we are not …
Design cues:`,
  sources: ['Margaret Mark and Carol S. Pearson, The Hero and the Outlaw, McGraw-Hill, 2001.'],
  related: ['brand-identity-prism', 'brand-key', 'brand-pyramid', 'messaging-house']
},
{
  slug: 'brand-identity-prism', name: 'Brand Identity Prism', company: 'nordhaus',
  origin: 'Jean-Noël Kapferer, 1992',
  oneLiner: 'Six facets that together define a brand’s identity, from how it looks to how customers see themselves when using it.',
  question: 'Is our brand identity complete and consistent across all six facets?',
  glance: { 'Use it for': 'Defining or auditing brand identity', 'You need': 'Customer research and current brand materials', 'You get': 'A full brand identity on one page', 'Time': 'One or two workshops' },
  steps: [
    { title: 'Physique', text: 'The brand’s physical features: products, logo, colours, stores.', example: 'Light wood, plain textiles, bright stores in town centres.' },
    { title: 'Personality', text: 'The character the brand shows in how it speaks and behaves.', example: 'Practical, warm and quietly confident.' },
    { title: 'Culture', text: 'The values and origin the brand draws on.', example: 'Nordic simplicity: good design should be affordable.' },
    { title: 'Relationship', text: 'The kind of relationship the brand offers customers.', example: 'A helpful neighbour who knows about homes.' },
    { title: 'Reflection', text: 'The image of the typical customer the brand projects.', example: 'Young families and couples making a first real home.' },
    { title: 'Self-image', text: 'How customers see themselves when they use the brand.', example: '“I have a home I’m proud of, without overspending.”' },
    { title: 'Check the fit', text: 'All six facets should tell the same story. The brand sits at the centre.', example: 'Nordhaus finds its stores feel more premium than its prices; it changes store signage.' }
  ],
  diagram: {
    type: 'cycle', viewBox: '0 0 800 470',
    alt: 'Brand identity prism: physique, personality, culture, relationship, reflection and self-image around the brand.',
    center: { step: 7, title: 'The brand', text: 'All facets tell one story', ex: 'Nordhaus Home' },
    segments: [
      { step: 1, title: 'Physique', text: 'Products, logo, colours', ex: 'Light wood, bright stores' },
      { step: 2, title: 'Personality', text: 'How it speaks and acts', ex: 'Practical, warm' },
      { step: 3, title: 'Culture', text: 'Values and origin', ex: 'Affordable Nordic design' },
      { step: 4, title: 'Relationship', text: 'What it offers customers', ex: 'Helpful neighbour' },
      { step: 5, title: 'Reflection', text: 'The typical customer shown', ex: 'Young families, couples' },
      { step: 6, title: 'Self-image', text: 'How customers see themselves', ex: 'Proud, not overspending' }
    ]
  },
  whenToUse: ['Defining a new brand or refreshing an old one.', 'Briefing agencies.', 'Checking brand consistency across channels.'],
  whenNot: ['Product-level positioning, which needs alternatives and differentiated value.'],
  howTo: ['Fill each facet from customer research and current materials.', 'Mark where facets contradict each other.', 'Decide the target identity for each facet.', 'Update guidelines and the touchpoints that do not fit.'],
  pitfalls: ['Describing the brand you wish you had.', 'Facets that contradict each other.', 'Confusing reflection (who the brand shows) with the actual target customer.'],
  template: `BRAND IDENTITY PRISM — [Brand]

Physique:
Personality:
Culture:
Relationship:
Reflection:
Self-image:

Contradictions to fix:`,
  sources: ['Jean-Noël Kapferer, Strategic Brand Management, Kogan Page, 1992.'],
  related: ['brand-key', 'brand-archetypes', 'brand-pyramid', 'brand-architecture']
},
{
  slug: 'brand-key', name: 'Brand Key', company: 'orto',
  origin: 'Unilever, late 1990s',
  oneLiner: 'A one-page brand positioning that builds from the brand’s strengths and target up to a single brand essence.',
  question: 'What is the essence of our brand, and what supports it?',
  glance: { 'Use it for': 'Writing a brand positioning everyone works from', 'You need': 'Consumer insight and competitive context', 'You get': 'One page that ends in a brand essence', 'Time': 'Two workshops' },
  steps: [
    { title: 'Root strengths', text: 'What the brand has always been good at.', example: 'Real recipes and Swiss ingredients.' },
    { title: 'Competitive environment', text: 'Who and what you compete with in the buyer’s mind.', example: 'Own-label ready meals and cooking from scratch.' },
    { title: 'Target', text: 'Who the brand is for, described by attitudes, not just demographics.', example: 'Busy people who care what they eat.' },
    { title: 'Insight', text: 'A truth about the target that the brand can act on.', example: '“On weekdays I want real food, but I don’t have time to cook it.”' },
    { title: 'Benefits', text: 'What the brand does for the target: functional and emotional.', example: 'A proper meal in five minutes; feeling you looked after yourself.' },
    { title: 'Values and personality', text: 'What the brand stands for and how it behaves.', example: 'Honest, warm, no shortcuts.' },
    { title: 'Reasons to believe', text: 'The proof behind the benefits.', example: 'Small-batch kitchens, Swiss ingredients, no additives.' },
    { title: 'Discriminator', text: 'The single most compelling reason to choose this brand.', example: 'It tastes home-cooked.' },
    { title: 'Brand essence', text: 'The top: the brand in a few words.', example: '“Real food for real weekdays.”' }
  ],
  diagram: {
    type: 'pyramid', viewBox: '0 0 800 450',
    alt: 'Brand key built up from root strengths and competitive environment, through target and insight, benefits and values, reasons to believe and discriminator, to the brand essence.',
    levels: [
      { cells: [{ step: 9, title: 'Essence' }] },
      { cells: [{ step: 7, title: 'Reasons', text: 'Proof', ex: 'Small batch' }, { step: 8, title: 'Discriminator', text: 'Why choose us', ex: 'Home-cooked' }] },
      { cells: [{ step: 5, title: 'Benefits', text: 'Functional, emotional', ex: 'Real meal, 5 minutes' }, { step: 6, title: 'Values', text: 'Stands for, behaves', ex: 'Honest, warm' }] },
      { cells: [{ step: 3, title: 'Target', text: 'Who, by attitude', ex: 'Busy, care what they eat' }, { step: 4, title: 'Insight', text: 'A truth to act on', ex: 'Real food, no time' }] },
      { cells: [{ step: 1, title: 'Root strengths', text: 'What it has always been good at', ex: 'Real recipes, Swiss ingredients' }, { step: 2, title: 'Competition', text: 'Who you compete with', ex: 'Own-label, cooking' }] }
    ]
  },
  whenToUse: ['Writing or refreshing a brand positioning.', 'Briefing agencies on a consumer brand.', 'Aligning marketing teams across countries.'],
  whenNot: ['B2B products where buyers decide on business value; product positioning tools fit better.'],
  howTo: ['Gather insight from consumer research first.', 'Fill the key from the bottom up.', 'Check each level supports the one above.', 'Test the essence with the team: does it guide decisions?'],
  pitfalls: ['An insight that is really a product claim.', 'An essence so general it fits any brand.', 'Filling the key without consumer research.'],
  template: `BRAND KEY — [Brand]

Root strengths:
Competitive environment:
Target:
Insight:
Benefits:
Values and personality:
Reasons to believe:
Discriminator:
Brand essence:`,
  sources: ['Developed at Unilever in the late 1990s and widely described in brand management practice.'],
  related: ['brand-identity-prism', 'brand-pyramid', 'positioning-statement', 'messaging-house']
},
{
  slug: 'how-brands-grow', name: 'How Brands Grow', company: 'orto',
  origin: 'Byron Sharp, Ehrenberg-Bass Institute, 2010',
  oneLiner: 'Brands grow mainly by winning more buyers, which comes from being easy to think of and easy to buy.',
  question: 'Are we building the mental and physical availability that brings in more buyers?',
  glance: { 'Use it for': 'Marketing strategy and budget choices', 'You need': 'Data on penetration, reach and distribution', 'You get': 'A growth plan built on reach and availability', 'Time': 'A strategy workshop' },
  steps: [
    { title: 'Brand growth', text: 'Sharp’s research finds that bigger brands mainly have more buyers, not more loyal ones.', example: 'Orto’s goal: more people buying it at least once a year.' },
    { title: 'Penetration', text: 'Grow by reaching all buyers of the category, including light and occasional buyers.', example: 'Reach everyone who buys ready meals, not only fitness fans.' },
    { title: 'Mental availability', text: 'Be easy to think of in buying situations, linked to the moments people need the category.', example: 'Linked to “dinner after a late day at work”.' },
    { title: 'Physical availability', text: 'Be easy to find and buy, wherever and whenever people shop.', example: 'In all major chains and station shops, with shelf space.' },
    { title: 'Distinctive assets', text: 'Consistent colours, shapes and characters that make the brand instantly recognisable.', example: 'The same green tray and logo placement on every pack and ad.' },
    { title: 'Check each lever', text: 'Rate how strong each lever is and invest in the weakest.', example: 'Mental availability is weakest, so Orto shifts budget to broad-reach advertising.' }
  ],
  diagram: {
    type: 'forces', viewBox: '0 0 800 480',
    alt: 'How brands grow: brand growth in the centre, driven by penetration, mental availability, physical availability and distinctive assets.',
    forces: [
      { pos: 'center', step: 1, title: 'Brand growth', text: 'Mostly from more buyers.', ex: 'More yearly buyers.', rating: 'Strength?', ratingEx: '' },
      { pos: 'top', step: 2, title: 'Penetration', text: 'Reach all category buyers.', ex: 'All ready-meal buyers.', rating: 'Strength?', ratingEx: 'Medium' },
      { pos: 'left', step: 3, title: 'Mental availability', text: 'Easy to think of.', ex: 'Dinner after a late day.', rating: 'Strength?', ratingEx: 'Weak' },
      { pos: 'right', step: 4, title: 'Physical availability', text: 'Easy to find and buy.', ex: 'Major chains, stations.', rating: 'Strength?', ratingEx: 'Strong' },
      { pos: 'bottom', step: 5, title: 'Distinctive assets', text: 'Instantly recognisable.', ex: 'Green tray, logo.', rating: 'Strength?', ratingEx: 'Medium' }
    ],
    rating: { step: 6 }
  },
  whenToUse: ['Setting marketing strategy for a consumer brand.', 'Deciding between loyalty programmes and broad reach.', 'Building a case for consistent brand assets.'],
  whenNot: ['Niche B2B markets with few buyers, where the patterns can differ.'],
  howTo: ['Measure penetration, mental availability and physical availability.', 'Identify the buying situations that trigger the category.', 'Audit your distinctive assets for consistency.', 'Invest in the weakest lever and track penetration.'],
  pitfalls: ['Spending most of the budget on existing loyal buyers.', 'Changing brand assets too often.', 'Narrow targeting that ignores light buyers.'],
  template: `HOW BRANDS GROW — [Brand]

Penetration (share of category buyers):
Mental availability (buying situations linked):
Physical availability (where, how easy):
Distinctive assets:

Weakest lever and plan:`,
  sources: ['Byron Sharp, How Brands Grow, Oxford University Press, 2010.'],
  related: ['95-5-rule', 'brand-activation-balance', 'brand-key', 'marketing-mix']
},
{
  slug: '95-5-rule', name: '95-5 Rule', company: 'tessera',
  origin: 'John Dawes, Ehrenberg-Bass Institute, for the LinkedIn B2B Institute, 2021',
  oneLiner: 'At any time, only about 5% of B2B buyers are ready to buy. Marketing must also reach the 95% who will buy later.',
  question: 'Are we only chasing buyers who are ready now, and ignoring the ones who will buy later?',
  glance: { 'Use it for': 'Balancing brand building and lead generation in B2B', 'You need': 'An estimate of how often customers buy or switch', 'You get': 'A realistic view of how many buyers are in market now', 'Time': 'An hour' },
  steps: [
    { title: 'Out of market: 95%', text: 'Most buyers in your category are not looking right now. Reach them so they remember you when they are.', example: 'Most plants are happy with their tools this quarter.' },
    { title: 'In market: 5%', text: 'A small share is actively buying in a given quarter. Lead generation only reaches these.', example: 'If plants change maintenance software about every five years, roughly 5% are in market each quarter.' },
    { title: 'Market to both', text: 'Build memory with the 95% and convert the 5%. Judge brand work by future demand, not this quarter’s leads.', example: 'Tessera keeps a steady downtime-insight programme for all plants, plus campaigns for those in market.' }
  ],
  diagram: {
    type: 'rings', viewBox: '0 0 800 440',
    alt: 'The 95-5 rule: a large outer circle of buyers not in market now, and a small inner circle of buyers in market this quarter.',
    rings: [
      { step: 1, title: '95%', text: 'Out of market: reach them so they remember you', ex: 'Plants happy with their tools today' },
      { step: 2, title: '5%', text: 'In market now: lead generation reaches only these', ex: 'Switch about every 5 years: ~5% a quarter' }
    ],
    note: { step: 3, label: 'Build memory with the 95%, convert the 5%', ex: 'Steady insight programme plus in-market campaigns' }
  },
  whenToUse: ['Making the case for brand building in B2B.', 'Lead targets that ignore long buying cycles.', 'Explaining why performance marketing alone stalls.'],
  whenNot: ['Categories bought very frequently, where most buyers are in market often.'],
  howTo: ['Estimate how often a customer buys or switches in your category.', 'Calculate the share in market per quarter.', 'Plan reach and memory-building for the rest.', 'Measure brand awareness and consideration, not just leads.'],
  pitfalls: ['Judging all marketing by this quarter’s leads.', 'Hard-selling to people who are not ready.', 'Treating 5% as a fixed number; it depends on your purchase cycle.'],
  template: `95-5 — [Category]

Typical time between purchases:
Share in market per quarter ≈ 1 ÷ (years × 4):
Plan for out-of-market buyers:
Plan for in-market buyers:`,
  sources: ['John Dawes, “Advertising Effectiveness and the 95-5 Rule”, LinkedIn B2B Institute and Ehrenberg-Bass Institute, 2021.'],
  related: ['how-brands-grow', 'brand-activation-balance', 'abm-tiers', 'tofu-mofu-bofu']
},
{
  slug: 'brand-activation-balance', name: 'Brand and Activation Balance', company: 'kontor',
  origin: 'Les Binet and Peter Field, IPA, 2013',
  oneLiner: 'Activation brings short sales spikes; brand building grows sales slowly but lasts. Effective budgets do both.',
  question: 'Are we balancing short-term sales activation with long-term brand building?',
  glance: { 'Use it for': 'Splitting the marketing budget', 'You need': 'Your current spend by objective', 'You get': 'A deliberate split between brand and activation', 'Time': 'One planning session' },
  steps: [
    { title: 'Activation', text: 'Targeted, rational messages that drive sales now. The effect is quick but fades.', example: 'Search ads and offers for business owners looking for cash today.' },
    { title: 'Brand building', text: 'Broad, emotional, memorable messages. The effect builds slowly and lasts.', example: 'A recurring campaign: “Get paid like the big companies do.”' },
    { title: 'Balance the two', text: 'Binet and Field found the best long-term results with roughly 60% brand and 40% activation in consumer markets; later B2B work suggests closer to half and half. Treat these as starting points.', example: 'Kontor moves from 10% to 40% brand spend over two years.' }
  ],
  diagram: {
    type: 'chart', viewBox: '0 0 800 450', left: 90,
    alt: 'Sales effect over time: activation spikes quickly and fades, while brand building rises slowly and lasts.',
    axesStep: 1,
    x: { domain: [0, 24], title: 'Time (months)', ticks: [0, 6, 12, 18, 24].map(v => ({ v, gen: String(v), ex: String(v) })) },
    y: { domain: [0, 1.05], title: 'Sales effect', low: 'Low', high: 'High' },
    curves: [
      { step: 1, points: pts(activation), label: 'Activation: quick, fades', ex: 'Search ads, offers', labelAt: [3.4, activation(3.4)], dx: 10, dy: -4, max: 26 },
      { step: 2, points: pts(brand), label: 'Brand: slow, lasts', ex: 'Recurring brand campaign', labelAt: [15, brand(15)], dy: -14, anchor: 'middle', max: 26 }
    ],
    markers: [{ step: 3, x: 20, y: brand(20), label: 'Do both', ex: 'From 10% to 40% brand', dy: 26 }]
  },
  whenToUse: ['Setting the annual marketing budget.', 'Leadership pushes all spend into short-term lead generation.', 'Growth has stalled despite strong performance marketing.'],
  whenNot: ['Very early start-ups that must prove demand before building a brand.'],
  howTo: ['Classify current spend as brand building or activation.', 'Compare with the reference splits for your market.', 'Move gradually and keep brand messages consistent for years.', 'Measure brand effects over quarters, not weeks.'],
  pitfalls: ['Cutting brand spend because results are slow to show.', 'Brand campaigns that change every year.', 'Treating 60/40 as a rule rather than a starting point.'],
  template: `BRAND AND ACTIVATION — [Company], [year]

Current split: brand   % / activation   %
Target split:
Brand-building activities:
Activation activities:
How we will measure each:`,
  sources: ['Les Binet and Peter Field, The Long and the Short of It, IPA, 2013.', 'Les Binet and Peter Field, “The 5 Principles of Growth in B2B Marketing”, LinkedIn B2B Institute, 2019.'],
  related: ['how-brands-grow', '95-5-rule', 'peso-model', 'tofu-mofu-bofu']
},
{
  slug: 'topic-clusters', name: 'Topic Clusters', company: 'kontor',
  origin: 'HubSpot, 2017',
  oneLiner: 'Organise content around one broad pillar page linked to detailed pages on related subtopics.',
  question: 'Is our content organised so search engines and readers see us as the authority on our topics?',
  glance: { 'Use it for': 'Content and search strategy', 'You need': 'Keyword research and your existing content', 'You get': 'A content structure built around core topics', 'Time': 'A week to plan' },
  steps: [
    { title: 'Pillar page', text: 'One broad, thorough page on a core topic your buyers search for.', example: '“The complete guide to getting paid faster.”' },
    { title: 'Cluster pages', text: 'Detailed pages on specific subtopics, each answering one question in depth.', example: 'Invoice financing explained; payment terms; cash-flow forecasting; chasing late payments.' },
    { title: 'Link them', text: 'Link every cluster page to the pillar and back, so readers and search engines see the topic as a whole.', example: 'Each cluster page links to the guide; the guide links to all four.' }
  ],
  diagram: {
    type: 'tree', viewBox: '0 0 800 260',
    alt: 'Topic cluster: one pillar page linked to four cluster pages on subtopics.',
    nodes: [
      { id: 'p', step: 1, x: 260, y: 12, w: 280, h: 72, label: 'Pillar page', text: 'Broad guide to a core topic', ex: 'Guide to getting paid faster' },
      { id: 'a', parent: 'p', step: 2, x: 14, y: 160, w: 180, h: 76, label: 'Cluster', text: 'One subtopic in depth', ex: 'Invoice financing explained' },
      { id: 'b', parent: 'p', step: 2, x: 210, y: 160, w: 180, h: 76, label: 'Cluster', text: 'One subtopic in depth', ex: 'Payment terms' },
      { id: 'c', parent: 'p', step: 2, x: 406, y: 160, w: 180, h: 76, label: 'Cluster', text: 'One subtopic in depth', ex: 'Cash-flow forecasting' },
      { id: 'd', parent: 'p', step: 2, x: 602, y: 160, w: 180, h: 76, label: 'Cluster', text: 'One subtopic in depth', ex: 'Chasing late payments' }
    ],
    target: { id: 'p', step: 3, label: 'Linked both ways', ex: 'All link back' }
  },
  whenToUse: ['Planning content for search.', 'A blog full of unconnected posts.', 'Building authority on a few core topics.'],
  whenNot: ['Content that is not meant to be found through search, such as sales enablement.'],
  howTo: ['Pick three to five core topics your buyers search for.', 'Research the questions under each topic.', 'Write one pillar page and several cluster pages per topic.', 'Link them, and update the pillar as clusters are added.'],
  pitfalls: ['Pillars that are too thin to be useful.', 'Clusters that repeat each other.', 'Forgetting internal links.'],
  template: `TOPIC CLUSTER — [Topic]

Pillar page:
Cluster pages:
  1.
  2.
  3.
Links checked:`,
  sources: ['HubSpot, research and guidance on the topic cluster model, 2017.'],
  related: ['they-ask-you-answer', 'hub-hero-hygiene', 'content-atomization', 'content-to-stage-map']
},
{
  slug: 'they-ask-you-answer', name: 'They Ask, You Answer', company: 'lumora',
  origin: 'Marcus Sheridan, 2017',
  oneLiner: 'Answer the questions buyers really ask, openly, starting with five topics most companies avoid.',
  question: 'Are we answering the questions buyers actually ask before they talk to us?',
  glance: { 'Use it for': 'Website and sales content that builds trust', 'You need': 'The questions sales and support hear every week', 'You get': 'Content that pre-sells and shortens sales calls', 'Time': 'Ongoing; start with ten articles' },
  steps: [
    { title: 'Cost and price', text: 'Explain what things cost and why, even if you cannot give an exact price.', example: '“How much does a rapid test reader cost a GP practice?”' },
    { title: 'Problems', text: 'Be honest about the problems and limits of your type of product.', example: '“When rapid infection tests are not the right choice.”' },
    { title: 'Comparisons', text: 'Compare options fairly, including yours versus alternatives.', example: '“Rapid test or lab test: which is better for your practice?”' },
    { title: 'Reviews', text: 'Review products and approaches in your category, including others’.', example: '“An honest review of rapid CRP tests for primary care.”' },
    { title: 'Best of', text: 'Lists of the best options for specific needs, even if you are not on every list.', example: '“The best point-of-care tests for paediatric practices.”' }
  ],
  diagram: {
    type: 'chain', viewBox: '0 0 800 490',
    alt: 'They Ask, You Answer: the big five topics of cost, problems, comparisons, reviews and best-of lists.',
    nodes: [
      { step: 1, title: 'Cost and price', text: 'What it costs, and why.', ex: 'Cost of a test reader.' },
      { step: 2, title: 'Problems', text: 'Honest limits.', ex: 'When rapid tests are wrong.' },
      { step: 3, title: 'Comparisons', text: 'Fair side-by-sides.', ex: 'Rapid vs lab test.' },
      { step: 4, title: 'Reviews', text: 'Honest reviews.', ex: 'Rapid CRP tests reviewed.' },
      { step: 5, title: 'Best of', text: 'Best for each need.', ex: 'Best tests for paediatrics.' }
    ]
  },
  whenToUse: ['Building trust in a considered purchase.', 'Sales calls spend too long on basic questions.', 'Website content that does not attract buyers.'],
  whenNot: ['When legal or regulatory rules stop you discussing prices or comparisons openly; check first.'],
  howTo: ['Collect the questions sales and support hear most.', 'Start with the five topics, in buyers’ words.', 'Publish honestly, including limits.', 'Give sellers the articles to send before and after calls.'],
  pitfalls: ['Avoiding price because it feels risky.', 'Comparisons that are really adverts.', 'Writing for search engines instead of buyers.'],
  template: `THEY ASK, YOU ANSWER — [Product]

Cost and price questions:
Problem questions:
Comparison questions:
Review questions:
Best-of questions:`,
  sources: ['Marcus Sheridan, They Ask, You Answer, Wiley, 2017.'],
  related: ['topic-clusters', 'content-to-stage-map', 'gartner-buying-jobs', 'win-loss-analysis']
},
{
  slug: 'cope', name: 'Create Once, Publish Everywhere', company: 'orto',
  origin: 'Daniel Jacobson, NPR, 2009',
  oneLiner: 'Create content once in a structured form, then publish it to every channel without rewriting it.',
  question: 'Are we rewriting the same content for every channel?',
  glance: { 'Use it for': 'Content operations across many channels', 'You need': 'A content system that stores content in parts', 'You get': 'Consistent content everywhere with less work', 'Time': 'A content-model project' },
  steps: [
    { title: 'Create once', text: 'Write content once, stored in parts: title, summary, body, image, facts.', example: 'Each recipe is stored once: name, time, ingredients, steps, photo.' },
    { title: 'Publish everywhere', text: 'Each channel takes the parts it needs, automatically.', example: 'Website, retailer apps, pack QR codes and the newsletter.' },
    { title: 'Update in one place', text: 'A change in the source updates every channel.', example: 'A new ingredient updates the recipe everywhere the same day.' }
  ],
  diagram: {
    type: 'tree', viewBox: '0 0 800 260',
    alt: 'Create once, publish everywhere: one structured content source feeding the website, apps, packaging and newsletter.',
    nodes: [
      { id: 's', step: 1, x: 260, y: 12, w: 280, h: 72, label: 'Create once', text: 'Content stored in parts', ex: 'Recipe: name, time, steps, photo' },
      { id: 'a', parent: 's', step: 2, x: 14, y: 160, w: 180, h: 76, label: 'Channel', text: 'Website', ex: 'Orto website' },
      { id: 'b', parent: 's', step: 2, x: 210, y: 160, w: 180, h: 76, label: 'Channel', text: 'Partner apps', ex: 'Retailer apps' },
      { id: 'c', parent: 's', step: 2, x: 406, y: 160, w: 180, h: 76, label: 'Channel', text: 'Packaging', ex: 'Pack QR codes' },
      { id: 'd', parent: 's', step: 2, x: 602, y: 160, w: 180, h: 76, label: 'Channel', text: 'Email', ex: 'Newsletter' }
    ],
    target: { id: 's', step: 3, label: 'Update once', ex: 'Updates everywhere' }
  },
  whenToUse: ['Content appears in many channels and drifts out of date.', 'Teams rewrite the same content repeatedly.', 'Choosing or rebuilding a content system.'],
  whenNot: ['Small teams with one or two channels.'],
  howTo: ['List content types and the channels that use them.', 'Define each type as structured fields.', 'Set up the system so channels pull fields automatically.', 'Keep editing in one place only.'],
  pitfalls: ['Content stored as one big block of text.', 'Channels with their own copies that drift.', 'Forcing every channel to look the same.'],
  template: `COPE — [Content type]

Fields:
Channels and fields each uses:
Owner of the source:`,
  sources: ['Daniel Jacobson, “COPE: Create Once, Publish Everywhere”, ProgrammableWeb, 2009.'],
  related: ['content-atomization', 'topic-clusters', 'peso-model', 'hub-hero-hygiene']
},
{
  slug: 'content-marketing-matrix', name: 'Content Marketing Matrix', company: 'nordhaus',
  origin: 'Smart Insights, Dave Chaffey, around 2012',
  oneLiner: 'Sort content by whether it is emotional or rational, and whether it builds awareness or drives purchase.',
  question: 'Do we have a balanced mix of content types for awareness and purchase?',
  glance: { 'Use it for': 'Planning a balanced content mix', 'You need': 'Your current content list', 'You get': 'Gaps in your content mix and ideas to fill them', 'Time': 'One workshop' },
  steps: [
    { title: 'Set the grid', text: 'Left to right: from awareness to purchase. Bottom to top: from rational to emotional.', example: 'Nordhaus plots all its content from last year.' },
    { title: 'Entertain', text: 'Emotional content that builds awareness: stories, video, games.', example: 'A video series on small-flat makeovers.' },
    { title: 'Inspire', text: 'Emotional content that moves people towards buying: stories, community, endorsements.', example: 'Customer home tours with the pieces they bought.' },
    { title: 'Educate', text: 'Rational content that builds awareness: guides, articles, reports.', example: 'Moving checklists and storage guides.' },
    { title: 'Convince', text: 'Rational content that helps people buy: demos, prices, comparisons, calculators.', example: 'Room-planning tool, delivery prices, reviews.' },
    { title: 'Find the gaps', text: 'Plot your content and fill the empty quadrants.', example: 'Nordhaus has plenty to educate and convince, little to inspire; it starts home tours.' }
  ],
  diagram: {
    type: 'matrix', viewBox: '0 0 800 500',
    alt: 'Content marketing matrix: entertain, inspire, educate and convince, by emotional or rational and by awareness or purchase.',
    axesStep: 1,
    x: { title: 'Goal', low: 'Awareness', high: 'Purchase' },
    y: { title: 'Appeal', low: 'Rational', high: 'Emotional' },
    quadrants: [
      { pos: 'tl', step: 2, title: 'Entertain', text: 'Stories, video, games.', ex: 'Small-flat makeover videos.', risk: 'Mix?', riskEx: 'Some' },
      { pos: 'tr', step: 3, title: 'Inspire', text: 'Stories, community, endorsements.', ex: 'Customer home tours.', risk: 'Mix?', riskEx: 'Gap' },
      { pos: 'bl', step: 4, title: 'Educate', text: 'Guides, articles, reports.', ex: 'Moving and storage guides.', risk: 'Mix?', riskEx: 'Plenty' },
      { pos: 'br', step: 5, title: 'Convince', text: 'Demos, prices, comparisons.', ex: 'Planning tool, prices, reviews.', risk: 'Mix?', riskEx: 'Plenty' }
    ],
    risk: { step: 6, arrow: false }
  },
  whenToUse: ['Planning a content calendar.', 'Content that is all one type.', 'Briefing an agency on content needs.'],
  whenNot: ['When you have not yet decided audience and goals.'],
  howTo: ['List your content from the past year.', 'Place each piece in a quadrant.', 'Compare the mix with your goals.', 'Plan new content for the gaps.'],
  pitfalls: ['Entertainment with no link to the brand.', 'Only convince content, which reaches only people ready to buy.', 'Forcing pieces into quadrants they do not fit.'],
  template: `CONTENT MATRIX — [Brand], [year]

Entertain:
Inspire:
Educate:
Convince:

Gaps and new ideas:`,
  sources: ['Dave Chaffey, Smart Insights, “The Content Marketing Matrix”, around 2012.'],
  related: ['hub-hero-hygiene', 'peso-model', 'tofu-mofu-bofu', 'content-to-stage-map']
},
{
  slug: 'content-atomization', name: 'Content Atomization', company: 'tessera',
  origin: 'Todd Defren, 2008',
  oneLiner: 'Turn one substantial piece of content into many smaller pieces for different channels.',
  question: 'Are we getting full value from each big piece of content we create?',
  glance: { 'Use it for': 'Getting more reach from major content', 'You need': 'One substantial piece of content', 'You get': 'A set of smaller pieces for every channel', 'Time': 'A day per major piece' },
  steps: [
    { title: 'Start with a big piece', text: 'Choose one substantial piece: a report, webinar, study or guide.', example: 'Tessera’s webinar on cutting unplanned downtime.' },
    { title: 'Break it into parts', text: 'Cut it into smaller pieces, each useful on its own and fitted to a channel.', example: 'Three short clips, a blog post, a checklist, five social posts, a newsletter piece.' },
    { title: 'Link back', text: 'Every small piece points back to the full piece.', example: 'Each clip links to the full webinar recording.' }
  ],
  diagram: {
    type: 'tree', viewBox: '0 0 800 260',
    alt: 'Content atomization: one big piece of content broken into clips, a blog post, a checklist and social posts.',
    nodes: [
      { id: 'w', step: 1, x: 260, y: 12, w: 280, h: 72, label: 'Big piece', text: 'Report, webinar or study', ex: 'Downtime webinar' },
      { id: 'a', parent: 'w', step: 2, x: 14, y: 160, w: 180, h: 76, label: 'Piece', text: 'Short clips', ex: 'Three video clips' },
      { id: 'b', parent: 'w', step: 2, x: 210, y: 160, w: 180, h: 76, label: 'Piece', text: 'Article', ex: 'Blog post' },
      { id: 'c', parent: 'w', step: 2, x: 406, y: 160, w: 180, h: 76, label: 'Piece', text: 'Tool', ex: 'Downtime checklist' },
      { id: 'd', parent: 'w', step: 2, x: 602, y: 160, w: 180, h: 76, label: 'Piece', text: 'Social posts', ex: 'Five LinkedIn posts' }
    ],
    target: { id: 'w', step: 3, label: 'All link back', ex: 'Clips link to webinar' }
  },
  whenToUse: ['After producing a major report, webinar or study.', 'Small teams that need more reach without more production.', 'Planning a launch content calendar.'],
  whenNot: ['Thin content that does not hold up when split.'],
  howTo: ['Plan the pieces before you create the big piece.', 'Cut pieces that stand alone and suit each channel.', 'Schedule them over weeks, not one day.', 'Link every piece back to the source.'],
  pitfalls: ['Posting the same text in every channel.', 'Pieces that make no sense without the original.', 'Releasing everything at once.'],
  template: `ATOMIZATION — [Big piece]

Pieces:
  Channel     Format     Date     Link back
1.
2.
3.`,
  sources: ['Todd Defren, “Content Atomization”, PR-Squared blog, 2008.'],
  related: ['cope', 'hub-hero-hygiene', 'peso-model', 'topic-clusters']
}
];
