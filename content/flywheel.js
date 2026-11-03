module.exports = {
  slug: 'flywheel',
  name: 'Flywheel',
  company: 'nordhaus',
  origin: 'HubSpot, 2018, building on Jim Collins’s flywheel idea',
  oneLiner: 'A circle instead of a funnel: happy customers feed growth, so energy you put in keeps the wheel turning.',
  question: 'Where are we adding momentum to growth, and where is friction slowing it down?',
  glance: {
    'Use it for': 'Seeing growth as a loop that includes existing customers',
    'You need': 'A view of the journey and where customers drop out or get stuck',
    'You get': 'A list of forces to add and friction to remove',
    'Time': 'A half-day workshop with marketing, sales and service'
  },
  steps: [
    { title: 'Customers at the centre',
      text: 'The customer sits in the middle. Everything the company does should keep them moving round the wheel.',
      example: 'Nordhaus Home puts its loyalty members at the centre: people who shop more than twice a year.' },
    { title: 'Attract',
      text: 'Draw people in by being useful: helpful content, local presence, being easy to find.',
      example: 'Free weekend workshops in stores, and accurate local search listings with live stock.' },
    { title: 'Engage',
      text: 'Make it easy to buy and start a relationship: good advice, smooth buying, no pressure.',
      example: 'Staff who help plan a room, and click-and-collect within two hours.' },
    { title: 'Delight',
      text: 'Help customers succeed after they buy, so they come back and tell others.',
      example: 'Free delivery and assembly for members, and easy returns in any store.' },
    { title: 'Add force',
      text: 'Force is anything that speeds the wheel up: referrals, reviews, word of mouth, well-run programmes.',
      example: 'Members who leave a review get first access to sales. Reviews bring in new shoppers.' },
    { title: 'Remove friction',
      text: 'Friction is anything that slows it down: handovers between teams, broken processes, poor service. Removing friction often helps more than adding force.',
      example: 'Products shown online as in stock but missing on the shelf. Nordhaus fixes stock data first.' }
  ],
  diagram: {
    type: 'cycle',
    viewBox: '0 0 800 470',
    alt: 'Flywheel: customers at the centre, surrounded by a ring of attract, engage and delight, with force arrows speeding it up and friction marks slowing it down.',
    center: { step: 1, title: 'Customers', text: 'Who keeps the wheel turning', ex: 'Loyalty members' },
    segments: [
      { step: 2, title: 'Attract', text: 'Be useful and easy to find', ex: 'Workshops in store, local listings with live stock' },
      { step: 3, title: 'Engage', text: 'Make buying easy and start a relationship', ex: 'Room planning with staff, click-and-collect in two hours' },
      { step: 4, title: 'Delight', text: 'Help them succeed after they buy', ex: 'Free delivery and assembly, easy returns' }
    ],
    force: { step: 5, label: 'Force: what speeds it up', ex: 'Force: member reviews bring new shoppers' },
    friction: { step: 6, label: 'Friction: what slows it down', ex: 'Friction: wrong stock data online' }
  },
  whenToUse: [
    'Growth depends heavily on repeat purchases, referrals or reviews.',
    'Marketing, sales and service work in separate silos and customers feel the handovers.',
    'Reframing a funnel that ignores what happens after the sale.'
  ],
  whenNot: [
    'You need precise conversion metrics. Use a funnel model such as AARRR alongside it.',
    'One-off purchases with no repeat or referral potential.'
  ],
  howTo: [
    'Define who sits at the centre: your best, most loyal customers.',
    'For each stage, list what you do today to attract, engage and delight.',
    'List the forces that speed the wheel up and estimate their impact.',
    'List the friction points, especially at handovers between teams.',
    'Pick the largest friction point to remove and one force to strengthen, and assign owners.'
  ],
  pitfalls: [
    'Redrawing the funnel as a circle without changing anything in how teams work.',
    'Adding force (more campaigns) while friction stays in place.',
    'Leaving service and operations out of the workshop. Much of the friction sits there.'
  ],
  template: `FLYWHEEL — [Company], [date]

Customers at the centre:

Attract — what we do today:
Engage — what we do today:
Delight — what we do today:

Forces (what speeds it up):
  1.
  2.

Friction (what slows it down):
  1.
  2.

Friction to remove first:         Owner:
Force to strengthen:              Owner:`,
  sources: [
    'Jim Collins, Good to Great, HarperBusiness, 2001.',
    'Jim Collins, Turning the Flywheel, HarperBusiness, 2019.',
    'HubSpot introduced the flywheel as a replacement for the marketing funnel at its INBOUND conference in 2018.'
  ],
  related: ['aarrr', 'Growth loops', 'Bow-tie model', 'Customer journey map', 'NPS, CSAT and CES']
};
