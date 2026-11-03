module.exports = {
  slug: 'hub-hero-hygiene',
  name: 'Hub, Hero, Hygiene',
  company: 'halden',
  origin: 'YouTube creator guidance, around 2014',
  oneLiner: 'Three layers of content: always-on answers, regular series, and a few big moments.',
  question: 'Do we have the right mix of everyday, regular and big-moment content?',
  glance: {
    'Use it for': 'Planning a content calendar and budget',
    'You need': 'What your audience searches for, and your content resources',
    'You get': 'A balanced content plan with a clear role for each piece',
    'Time': 'A half-day planning session'
  },
  steps: [
    { title: 'Hygiene', text: 'The base: always-on content that answers what people search for. Useful, findable, kept up to date. YouTube later called this layer “Help”.', example: 'Datasheets, purity FAQs and logistics guides for glass technologists.' },
    { title: 'Hub', text: 'The middle: regular, scheduled content that gives people a reason to come back and follow you.', example: 'A monthly webinar for glass technologists on raw-material quality.' },
    { title: 'Hero', text: 'The top: a few big pieces a year, built to reach far beyond your usual audience.', example: 'An annual benchmark report on sand purity across the European glass industry.' }
  ],
  diagram: {
    type: 'pyramid', viewBox: '0 0 800 450',
    alt: 'Hub, hero, hygiene pyramid: hygiene content at the base, hub content in the middle and hero content at the top.',
    levels: [
      { side: 'A few times a year', sideQ: 'Reach far', cells: [{ step: 3, title: 'Hero' }] },
      { side: 'Weekly or monthly', sideQ: 'Bring people back', cells: [{ step: 2, title: 'Hub', text: 'Regular series that bring people back', ex: 'Monthly webinar for glass technologists' }] },
      { side: 'Always on', sideQ: 'Be found', cells: [{ step: 1, title: 'Hygiene', text: 'Answers to what people search for', ex: 'Datasheets, purity FAQs, logistics guides' }] }
    ]
  },
  whenToUse: ['Planning a content calendar for the year.', 'Deciding how to split a content budget.', 'A content plan that is all campaigns and no everyday answers, or the reverse.'],
  whenNot: ['When you have not yet decided who the content is for and what you want them to do.'],
  howTo: ['List what your audience searches for and asks sales; build hygiene content first.', 'Choose one or two regular formats for hub content you can sustain.', 'Plan one to three hero moments a year, tied to business goals.', 'Link the layers: hero content points to hub series, hub points to hygiene detail.', 'Measure each layer differently: search traffic, return visits, reach.'],
  pitfalls: ['Spending the whole budget on hero pieces with nothing to come back to.', 'Hub series started and abandoned after three episodes.', 'Hygiene content that is out of date.'],
  template: `HUB, HERO, HYGIENE — [Brand], [year]

Hygiene (always on): topics / format / owner
Hub (regular): format / frequency / owner
Hero (big moments): idea / timing / goal

How the layers link:`,
  sources: ['Introduced in YouTube’s creator guidance (the Creator Playbook) around 2014; later renamed Help, Hub, Hero.'],
  related: ['see-think-do-care', 'peso-model', 'Topic clusters', 'They Ask, You Answer']
};
