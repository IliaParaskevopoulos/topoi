module.exports = {
  slug: 'golden-circle',
  name: 'Golden Circle',
  company: 'orto',
  origin: 'Simon Sinek, 2009',
  oneLiner: 'Explain why you exist before how you work and what you sell.',
  question: 'Can we explain why we do what we do, not only what we sell?',
  glance: {
    'Use it for': 'Brand stories, company narratives and keynote openings',
    'You need': 'An honest view of the company’s purpose from its founders or leaders',
    'You get': 'A why, how and what that can open any story about the company',
    'Time': 'A leadership workshop'
  },
  steps: [
    { title: 'Why', text: 'The centre: the purpose or belief behind the company. Not “to make money”, which is a result.', example: 'We believe a weekday dinner should be real food, even when there’s no time to cook.' },
    { title: 'How', text: 'How you act on that belief: the principles, methods or choices that make you different.', example: 'Small-batch recipes, Swiss ingredients, and nothing you wouldn’t use at home.' },
    { title: 'What', text: 'The outside: the products and services you sell. Everyone knows their what.', example: 'Chilled ready meals in Swiss supermarkets.' },
    { title: 'Communicate from the inside out', text: 'Sinek’s argument is that people respond more to the why than to the what, so lead with it.', example: 'Orto’s packaging opens with the belief about weekday dinners, then the recipe principles, then the meal.' }
  ],
  diagram: {
    type: 'rings', viewBox: '0 0 800 440',
    alt: 'Golden Circle: three concentric circles with why at the centre, how around it and what on the outside.',
    rings: [
      { step: 3, title: 'What', text: 'The products and services you sell', ex: 'Chilled ready meals in Swiss supermarkets' },
      { step: 2, title: 'How', text: 'How you act on the belief', ex: 'Small batches, Swiss ingredients, home-style recipes' },
      { step: 1, title: 'Why', text: 'The purpose or belief behind it all', ex: 'Weekday dinner should be real food' }
    ],
    note: { step: 4, label: 'Tell the story from the inside out', ex: 'Pack opens with the why' }
  },
  whenToUse: ['Opening a company story, keynote or About page.', 'Aligning founders and leaders on purpose.', 'Checking that brand messaging says more than features.'],
  whenNot: ['Product pages where buyers need specifics first.', 'When the “why” is invented for marketing and the company does not act on it.'],
  howTo: ['Ask founders and long-time staff why the company started and what they believe.', 'Write the why as a belief, in one sentence.', 'List two or three hows that prove the belief in practice.', 'Write the what plainly.', 'Test the story inside out with customers and staff.'],
  pitfalls: ['A why that any competitor could claim.', 'A why with no proof in how the company behaves.', 'Relying on the talk’s claims about brain biology, which are not well supported. The communication advice stands on its own.'],
  template: `GOLDEN CIRCLE — [Company]

Why (the belief):
How (principles that prove it):
  1.
  2.
What (products and services):

Inside-out story in three sentences:`,
  sources: ['Simon Sinek, Start with Why, Portfolio, 2009.', 'Simon Sinek, “How Great Leaders Inspire Action”, TEDx Puget Sound, 2009.'],
  related: ['brand-pyramid', 'messaging-house', 'Strategic Narrative', 'StoryBrand SB7']
};
