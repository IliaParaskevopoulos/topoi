// Builds the static site into dist/. Run: node build.js
// Frameworks live in content/<slug>.js. The library map is content/_catalog.js,
// the fictional example companies are content/_cast.js.
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'docs'); // served by GitHub Pages
const BRAND = 'Topoi';
const HERO = ['five-forces', 'golden-circle', 'crossing-the-chasm', 'flywheel', 'van-westendorp', 'value-proposition-canvas', 'ansoff-matrix', 'opportunity-solution-tree'];
const AUTHOR = { name: 'Ilia Paraskevopoulos', url: 'https://iliaparaskevopoulos.com' };

const catalog = require('./content/_catalog.js');
const cast = require('./content/_cast.js');
const files = fs.readdirSync(path.join(ROOT, 'content')).filter(f => f.endsWith('.js') && !f.startsWith('_'));
const all = files.map(f => require(path.join(ROOT, 'content', f)));
const bySlug = Object.fromEntries(all.map(f => [f.slug, f]));

const wasMap = {};
// Attach category to each framework from the catalog, and check the data hangs together.
catalog.forEach(c => c.items.forEach(it => {
  if (typeof it === 'object') {
    if (!bySlug[it.slug]) throw new Error('Catalog lists missing page: ' + it.slug);
    bySlug[it.slug].category = c.name;
    bySlug[it.slug].icon = c.icon;
    if (it.was) wasMap[it.was] = it.slug;
  }
}));
all.forEach(f => {
  if (!f.category) throw new Error('Page not in catalog: ' + f.slug);
  if (!cast[f.company]) throw new Error('Unknown company on ' + f.slug + ': ' + f.company);
});

const ICONS = {
  customer: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>',
  strategy: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
  positioning: '<path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  messaging: '<path d="M4 5h16v11H10l-6 4.5z"/><path d="M8 9h8M8 12h5"/>',
  brand: '<path d="M7 3h10l4 6-9 12L3 9z"/><path d="M3 9h18M12 21 8.5 9 12 3l3.5 6z"/>',
  pricing: '<path d="M3 12V3h9l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  launch: '<path d="M5 21V3.5"/><path d="M5 4h13l-2.5 4.5L18 13H5"/>',
  sales: '<rect x="3" y="7" width="18" height="13" rx="1.5"/><path d="M9 7V4.5h6V7M3 13h18M11 13v2h2v-2"/>',
  growth: '<path d="M20 12a8 8 0 0 1-14.3 4.9"/><path d="M4 12a8 8 0 0 1 14.3-4.9"/><path d="M18.6 3v4.3h-4.3M5.4 21v-4.3h4.3"/>',
  content: '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 11h7M9 15h7"/>',
  planning: '<path d="M3.5 6.5 5 8l3-3M3.5 12.5 5 14l3-3M3.5 18.5 5 20l3-3"/><path d="M11 6.5h9.5M11 12.5h9.5M11 18.5h9.5"/>'
};
const icon = key => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${ICONS[key]}</svg>`;

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const json = o => JSON.stringify(o).replace(/</g, '\\u003c');
const catId = c => 'cat-' + c.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const itemName = it => typeof it === 'object' ? bySlug[it.slug].name : it;
const total = catalog.reduce((n, c) => n + c.items.length, 0);

const shell = (title, desc, body) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@400;500;600;700&family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,600;1,7..72,400&display=swap">
<link rel="stylesheet" href="assets/site.css">
<script src="assets/engine.js" defer></script>
</head>
<body>
<header class="site"><a class="brand" href="index.html">${BRAND}<span class="brand-greek" lang="el">τόποι</span></a><a class="by" href="${AUTHOR.url}">by ${AUTHOR.name}</a></header>
${body}
<footer class="foot">${BRAND} by <a href="${AUTHOR.url}">${AUTHOR.name}</a>. Frameworks are credited to their authors; diagrams and explanations are original. Companies in the worked examples are fictional.</footer>
</body>
</html>
`;

function frameworkPage(f) {
  const co = cast[f.company];
  const steps = f.steps.map((s, i) => `
      <li><button type="button"><span class="n">${i + 1}</span><span class="t">${esc(s.title)}</span></button>
        <p class="gen">${esc(s.text)}</p><p class="ex">${esc(s.example)}</p></li>`).join('');
  const glance = Object.entries(f.glance).map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')
    + `<dt>Example company</dt><dd>${esc(co.name)}, ${esc(co.industry.toLowerCase())}</dd>`;
  const li = arr => arr.map(x => `<li>${esc(x)}</li>`).join('');
  const related = f.related.map(r => wasMap[r] || r).map(r => bySlug[r]
    ? `<li><a href="${r}.html">${esc(bySlug[r].name)}</a></li>`
    : `<li><span>${esc(r)}, coming soon</span></li>`).join('');
  const example = f.steps.map(s => `<dt>${esc(s.title)}</dt><dd>${esc(s.example)}</dd>`).join('');

  const body = `
<main>
  <div class="intro">
    <p class="crumb"><a href="index.html#${catId(f.category)}">${icon(f.icon)}${esc(f.category)}</a></p>
    <h1>${esc(f.name)}</h1>
    <p class="lede">${esc(f.oneLiner)}</p>
    <p class="origin">${esc(f.origin)}</p>
  </div>

  <section class="player" aria-label="Animated diagram of the ${esc(f.name)}">
    <div class="sheet"><div class="stage"></div></div>
    <div class="side">
      <div class="mode" role="group" aria-label="Diagram wording">
        <button type="button" data-mode="general" aria-pressed="true">General</button>
        <button type="button" data-mode="example" aria-pressed="false">Example: ${esc(co.name)}</button>
      </div>
      <ol class="steps">${steps}
      </ol>
      <div class="controls">
        <button type="button" data-act="restart">Restart</button>
        <button type="button" data-act="prev">Back</button>
        <button type="button" data-act="play" aria-pressed="false">Play</button>
        <button type="button" data-act="next">Next</button>
        <span class="counter"></span>
      </div>
      <p class="live visually-hidden" aria-live="polite"></p>
    </div>
  </section>

  <div class="article">
    <article>
      <section><h2>The question it answers</h2><p class="question">${esc(f.question)}</p></section>
      <section><h2>When to use it</h2><ul>${li(f.whenToUse)}</ul></section>
      <section><h2>When to skip it</h2><ul>${li(f.whenNot)}</ul></section>
      <section><h2>How to run it</h2><ol>${li(f.howTo)}</ol>${f.note ? `<p class="note">${esc(f.note)}</p>` : ''}</section>
      <section><h2>Worked example: ${esc(co.name)}</h2>
        <p>${esc(co.line)}</p>
        <dl class="example-list">${example}</dl></section>
      <section><h2>Common mistakes</h2><ul>${li(f.pitfalls)}</ul></section>
      <section class="template"><h2>Template</h2><pre>${esc(f.template)}</pre><button type="button" data-act="copy">Copy template</button></section>
      <section class="sources"><h2>Sources</h2><ul>${li(f.sources)}</ul></section>
      <section><h2>Related frameworks</h2><ul class="related">${related}</ul></section>
    </article>
    <aside class="glance" aria-label="At a glance"><dl>${glance}</dl></aside>
  </div>
</main>
<script type="application/json" id="fw-data">${json({ stepCount: f.steps.length, diagram: f.diagram })}</script>`;
  return shell(`${f.name} — ${BRAND}`, f.oneLiner, body);
}

function indexPage() {
  const nav = catalog.map(c => {
    const drawn = c.items.filter(i => typeof i === 'object').length;
    return `<li><a href="#${catId(c.name)}">${icon(c.icon)}${esc(c.name)}</a> <span>${drawn} of ${c.items.length}</span></li>`;
  }).join('');

  const sections = catalog.map(c => {
    const drawn = c.items.filter(i => typeof i === 'object').map(i => bySlug[i.slug]);
    const rest = c.items.filter(i => typeof i !== 'object');
    return `
  <section class="cat" id="${catId(c.name)}">
    <div class="cat-head"><h2>${icon(c.icon)}${esc(c.name)}</h2><p>${esc(c.blurb)}</p></div>
    ${drawn.map(f => `
    <a class="entry" href="${f.slug}.html">
      <div class="sheet thumb" data-thumb="${f.slug}" aria-hidden="true"></div>
      <div>
        <h3>${esc(f.name)}</h3>
        <p class="origin">${esc(f.origin)}</p>
        <p>${esc(f.oneLiner)}</p>
      </div>
    </a>`).join('')}
    ${rest.length ? `<div class="todo"><h3>Still to draw</h3><ul>${rest.map(n => `<li>${esc(n)}</li>`).join('')}</ul></div>` : ''}
  </section>`;
  }).join('');

  const castList = Object.values(cast).map(c => `<li><strong>${esc(c.name)}</strong> ${esc(c.industry.toLowerCase())}</li>`).join('');
  const thumbs = Object.fromEntries(all.map(f => [f.slug, { stepCount: f.steps.length, diagram: f.diagram }]));
  const body = `
<main>
  <div class="hero">
    <div>
    <h1>Product marketing frameworks, drawn one step at a time</h1>
    <p>Each framework comes with an animated diagram you can play, pause and step through, a worked B2B example, and a template you can copy.</p>
    <p class="name-note"><span lang="el">Τόποι</span>, topoi, means “places”. In Aristotle’s <em>Rhetoric</em> they are the places a speaker goes to find an argument. This library is the same idea for product marketers.</p>
    </div>
    <div>
      <div class="sheet hero-sheet"><div class="hero-stage" aria-hidden="true"></div></div>
      <p class="hero-caption" aria-live="off"></p>
    </div>
  </div>
  <nav class="catnav" aria-label="Categories">
    <p>${all.length} of ${total} frameworks drawn so far, in ${catalog.length} categories.</p>
    <ul>${nav}</ul>
  </nav>
  ${sections}
  <section class="cat cast">
    <div class="cat-head"><h2>The example companies</h2><p>Worked examples follow six fictional companies from different industries, so you can see each framework in a setting close to yours.</p></div>
    <ul>${castList}</ul>
  </section>
</main>
<script type="application/json" id="thumb-data">${json(thumbs)}</script>
<script type="application/json" id="hero-data">${json(HERO.map(s => ({ slug: s, name: bySlug[s].name, stepCount: bySlug[s].steps.length, diagram: bySlug[s].diagram })))}</script>`;
  return shell(`${BRAND} — product marketing frameworks, drawn step by step`,
    'A library of product marketing frameworks, each explained with an animated diagram, a worked B2B example and a template.', body);
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'assets'), { recursive: true });
fs.copyFileSync(path.join(ROOT, 'src/site.css'), path.join(OUT, 'assets/site.css'));
fs.copyFileSync(path.join(ROOT, 'src/engine.js'), path.join(OUT, 'assets/engine.js'));
fs.writeFileSync(path.join(OUT, 'index.html'), indexPage());
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
all.forEach(f => fs.writeFileSync(path.join(OUT, f.slug + '.html'), frameworkPage(f)));
console.log('Built', all.length, 'framework pages; catalogue lists', total, 'frameworks in', catalog.length, 'categories');
