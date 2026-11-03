module.exports = {
  slug: 'peso-model',
  name: 'PESO Model',
  company: 'lumora',
  origin: 'Gini Dietrich, 2014',
  oneLiner: 'Four kinds of media, paid, earned, shared and owned, that work best when one piece of work feeds all of them.',
  question: 'Which channels are we relying on, and how can one story work across all four kinds of media?',
  glance: {
    'Use it for': 'Planning communications and content across channels',
    'You need': 'A list of your current channels and what each one delivers',
    'You get': 'A balanced channel plan built around stories that travel across all four',
    'Time': 'A half-day planning session'
  },
  steps: [
    { title: 'Paid media',
      text: 'Media you pay for: advertising, sponsored content, paid social and paid placements.',
      example: 'Ads in GP journals and sponsored places in online medical training.' },
    { title: 'Earned media',
      text: 'Coverage others give you: press, analyst mentions, reviews, awards and speaking slots.',
      example: 'A primary-care journal publishes the results of Lumora’s pilot study.' },
    { title: 'Shared media',
      text: 'What people share and discuss on social and community channels, including your own social posts.',
      example: 'GPs who took part in the pilot post about it in professional forums and on LinkedIn.' },
    { title: 'Owned media',
      text: 'Channels you control: website, blog, newsletter, webinars and events.',
      example: 'Lumora’s website guides, quarterly webinars and a newsletter for practice managers.' },
    { title: 'Integrate',
      text: 'The strongest programmes sit in the middle, where one piece of work feeds all four kinds of media.',
      example: 'The published study becomes a webinar, gets promoted with paid ads, and is shared by the GPs who took part.' }
  ],
  diagram: {
    type: 'venn4',
    viewBox: '0 0 800 440',
    alt: 'PESO model: four overlapping circles for paid, earned, shared and owned media, with integrated work in the middle.',
    circles: [
      { step: 1, title: 'Paid', text: 'Advertising, sponsored content, paid social', ex: 'Ads in GP journals, sponsored training' },
      { step: 2, title: 'Earned', text: 'Press, reviews, analyst mentions, awards', ex: 'Pilot study published in a journal' },
      { step: 3, title: 'Shared', text: 'Social posts, communities, word of mouth', ex: 'GPs posting about the pilot' },
      { step: 4, title: 'Owned', text: 'Website, newsletter, webinars, events', ex: 'Guides, webinars, practice newsletter' }
    ],
    center: { step: 5, label: 'Integrated', ex: 'The pilot study' }
  },
  whenToUse: [
    'Building an annual communications or content plan.',
    'Checking whether you depend too much on one kind of media, often paid.',
    'Planning a launch so press, social, owned channels and ads reinforce each other.'
  ],
  whenNot: [
    'Deciding what to say. Settle positioning and messaging first.',
    'Measuring results on its own. You still need metrics per channel.'
  ],
  howTo: [
    'List every channel you use today and sort it into paid, earned, shared or owned.',
    'Note what each one delivers and what it costs.',
    'Find the gaps: kinds of media you barely use, or depend on too heavily.',
    'Pick two or three stories strong enough to travel across all four.',
    'For each story, plan how it moves: for example, earned coverage, reused on owned channels, shared, and amplified with paid.'
  ],
  pitfalls: [
    'Running the four as separate teams with separate plans.',
    'Counting your own social posts as earned. Earned means someone else chose to cover you.',
    'Spending on paid amplification for content that has no story worth sharing.'
  ],
  template: `PESO PLAN — [Brand or product], [period]

Paid:    channels / budget / goal
Earned:  targets / angle / goal
Shared:  channels / who shares / goal
Owned:   channels / content / goal

Stories that run across all four:
1.  Earned →  Owned →  Shared →  Paid
2.`,
  sources: [
    'Gini Dietrich, Spin Sucks: Communication and Reputation Management in the Digital Age, Que, 2014.'
  ],
  related: ['messaging-house', 'flywheel', 'Hub, Hero, Hygiene', 'Topic clusters', 'Content atomization']
};
