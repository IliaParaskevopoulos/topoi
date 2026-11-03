/* Topoi sales kit: questionnaire, kit (AI through the kit server, or a quick draft built in
   the browser), on-screen view, Word download, and a download notification to Ilia. */
(function () {
  'use strict';
  var root = document.getElementById('kit-app');
  if (!root) return;
  var API = (root.getAttribute('data-api') || '').replace(/\/$/, '');

  var QUESTIONS = [
    { id: 'contact', title: 'Who is the kit for?', help: 'We use these details to label your kit. Ilia may contact you about it.',
      fields: [
        { id: 'name', label: 'Your name', type: 'text', required: true, auto: 'name' },
        { id: 'email', label: 'Work email', type: 'email', required: true, auto: 'email' },
        { id: 'company', label: 'Company', type: 'text', required: true, auto: 'organization' },
        { id: 'role', label: 'Your role', type: 'text', auto: 'organization-title' }
      ] },
    { id: 'product', title: 'What do you sell?', help: 'One or two sentences, in plain words.',
      fields: [{ id: 'product', label: 'Product or service', type: 'area', required: true, ph: 'Software that helps mid-size manufacturers plan equipment maintenance.' }] },
    { id: 'customer', title: 'Who buys it?', help: 'The type of company and the people involved in the decision.',
      fields: [{ id: 'customer', label: 'Target customer', type: 'area', required: true, ph: 'Plants with 50–500 staff. The maintenance manager uses it; the plant director signs.' }] },
    { id: 'problem', title: 'What problem does it solve?', help: 'What goes wrong for customers before they buy from you?',
      fields: [{ id: 'problem', label: 'The problem', type: 'area', required: true, ph: 'Unplanned breakdowns, overtime and work orders lost on paper.' }] },
    { id: 'competitors', title: 'Who or what do you compete with?', help: 'Up to three competitors or alternatives, including doing nothing or a spreadsheet.',
      fields: [
        { id: 'comp1', label: 'Competitor or alternative 1', type: 'text', required: true, ph: 'Spreadsheets and paper' },
        { id: 'comp2', label: 'Competitor or alternative 2', type: 'text', ph: 'The maintenance module of their ERP' },
        { id: 'comp3', label: 'Competitor or alternative 3', type: 'text' }
      ] },
    { id: 'diff', title: 'Why do customers choose you?', help: 'What you do better, and any proof: numbers, customers, certifications.',
      fields: [
        { id: 'differentiators', label: 'What makes you better', type: 'area', required: true, ph: 'Live in a day, works offline on phones, warns before parts fail.' },
        { id: 'proof', label: 'Proof you can show', type: 'area', ph: 'A pilot plant cut unplanned downtime by 18% in six months.' }
      ] },
    { id: 'objections', title: 'What objections do you hear?', help: 'One per line. The things prospects say before they buy, or when they don’t.',
      fields: [{ id: 'objections', label: 'Common objections', type: 'area', required: true, ph: 'It’s too expensive.\nWe already have an ERP.\nOur IT team has no time.' }] },
    { id: 'deal', title: 'How do you sell?', help: 'This shapes the qualification and discovery parts of the kit.',
      fields: [
        { id: 'motion', label: 'Main way you sell', type: 'select', required: true, options: ['Sales team, complex deals', 'Sales team, simple deals', 'Self-serve or free trial, then sales', 'Partners or distributors'] },
        { id: 'dealSize', label: 'Typical deal size per year', type: 'select', required: true, options: ['Under 5,000', '5,000 to 50,000', '50,000 to 250,000', 'Over 250,000'] },
        { id: 'extra', label: 'Anything else we should know?', type: 'area', ph: 'Optional' }
      ] },
    { id: 'consent', title: 'Ready to build your kit', help: '',
      fields: [{ id: 'consent', label: 'I agree that my answers are processed to write the kit, and that Ilia Paraskevopoulos may email me about it. I have not included confidential information.', type: 'check', required: true }] }
  ];

  var answers = {};
  try { answers = JSON.parse(sessionStorage.getItem('topoi-kit-answers') || '{}'); } catch (e) { answers = {}; }
  var stepIndex = 0, kit = null, kitSource = '';

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    for (var k in attrs || {}) { if (attrs[k] != null) e.setAttribute(k, attrs[k]); }
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function save() { try { sessionStorage.setItem('topoi-kit-answers', JSON.stringify(answers)); } catch (e) {} }
  function lines(s) { return String(s || '').split(/\n+/).map(function (x) { return x.replace(/^[-•*\s]+/, '').trim(); }).filter(Boolean); }

  /* ---------- Questionnaire ---------- */
  function renderStep() {
    var q = QUESTIONS[stepIndex];
    root.innerHTML = '';
    var card = el('form', { 'class': 'kit-card', novalidate: 'novalidate' });
    var nQ = QUESTIONS.length - 1, last = stepIndex === nQ;
    card.appendChild(el('p', { 'class': 'kit-progress' }, last ? 'Last step' : 'Question ' + (stepIndex + 1) + ' of ' + nQ));
    var bar = el('div', { 'class': 'kit-bar' }); bar.appendChild(el('span', { style: 'width:' + (last ? 100 : Math.round(100 * (stepIndex + 1) / (nQ + 1))) + '%' })); card.appendChild(bar);
    card.appendChild(el('h2', { tabindex: '-1' }, esc(q.title)));
    if (q.help) card.appendChild(el('p', { 'class': 'kit-help' }, esc(q.help)));
    q.fields.forEach(function (f) {
      var wrap = el('div', { 'class': 'kit-field' + (f.type === 'check' ? ' kit-check' : '') });
      var id = 'kit-' + f.id, input;
      if (f.type === 'area') input = el('textarea', { id: id, rows: 4, placeholder: f.ph || '' });
      else if (f.type === 'select') {
        input = el('select', { id: id });
        input.appendChild(el('option', { value: '' }, 'Choose one'));
        f.options.forEach(function (o) { input.appendChild(el('option', { value: o }, esc(o))); });
      } else if (f.type === 'check') input = el('input', { id: id, type: 'checkbox' });
      else input = el('input', { id: id, type: f.type, placeholder: f.ph || '', autocomplete: f.auto || null });
      if (f.type === 'check') input.checked = !!answers[f.id]; else input.value = answers[f.id] || '';
      var label = el('label', { 'for': id }, esc(f.label) + (f.required && f.type !== 'check' ? '' : (f.type === 'check' ? '' : ' <span class="opt">(optional)</span>')));
      if (f.type === 'check') { wrap.appendChild(input); wrap.appendChild(label); } else { wrap.appendChild(label); wrap.appendChild(input); }
      wrap.appendChild(el('p', { 'class': 'kit-error', id: id + '-err', 'aria-live': 'polite' }));
      card.appendChild(wrap);
    });
    var nav = el('div', { 'class': 'kit-nav' });
    if (stepIndex > 0) { var back = el('button', { type: 'button', 'class': 'btn-quiet' }, 'Back'); back.onclick = function () { collect(false); stepIndex--; renderStep(); }; nav.appendChild(back); }
    nav.appendChild(el('button', { type: 'submit', 'class': 'btn-bright' }, stepIndex === QUESTIONS.length - 1 ? 'Build my sales kit' : 'Next'));
    card.appendChild(nav);
    card.onsubmit = function (e) {
      e.preventDefault();
      if (!collect(true)) return;
      if (stepIndex < QUESTIONS.length - 1) { stepIndex++; renderStep(); } else build();
    };
    root.appendChild(card);
    var first = card.querySelector('input, textarea, select'); if (first && stepIndex > 0) first.focus(); else card.querySelector('h2').focus();
  }

  function collect(validate) {
    var ok = true, q = QUESTIONS[stepIndex];
    q.fields.forEach(function (f) {
      var input = document.getElementById('kit-' + f.id), err = document.getElementById('kit-' + f.id + '-err');
      var v = f.type === 'check' ? input.checked : input.value.trim().slice(0, 1500);
      answers[f.id] = v;
      err.textContent = '';
      if (validate && f.required && !v) { err.textContent = f.type === 'check' ? 'Please agree to continue.' : 'Please fill this in.'; ok = false; }
      if (validate && f.type === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { err.textContent = 'Enter a valid email address, like name@company.com.'; ok = false; }
    });
    save();
    if (!ok) { var bad = root.querySelector('.kit-error:not(:empty)'); if (bad) bad.previousElementSibling.focus(); }
    return ok;
  }

  /* ---------- Building the kit ---------- */
  function build() {
    root.innerHTML = '<div class="kit-card kit-wait" role="status"><h2>Drawing your sales kit</h2><p class="kit-help">This takes about half a minute. We are writing your positioning, battlecards, objection handling and discovery questions.</p><div class="kit-spinner" aria-hidden="true"><span></span><span></span><span></span></div></div>';
    var done = function (k, src) { kit = k; kitSource = src; renderKit(); };
    if (!API) { setTimeout(function () { done(draftKit(answers), 'draft'); }, 900); return; }
    var ctrl = 'AbortController' in window ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 90000);
    fetch(API + '/kit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ answers: answers }), signal: ctrl ? ctrl.signal : undefined })
      .then(function (r) { if (!r.ok) throw new Error('status ' + r.status); return r.json(); })
      .then(function (j) { clearTimeout(timer); if (!j || !j.kit || !j.kit.battlecards) throw new Error('bad kit'); done(normalise(j.kit), 'ai'); })
      .catch(function () { clearTimeout(timer); done(draftKit(answers), 'draft'); });
  }

  function normalise(k) {
    k.summary = k.summary || {}; k.messaging = k.messaging || { pillars: [] }; k.battlecards = k.battlecards || [];
    k.objections = k.objections || []; k.discovery = k.discovery || {}; k.qualification = k.qualification || []; k.nextSteps = k.nextSteps || [];
    return k;
  }

  // Quick draft from the answers alone, used when the kit server is not reachable.
  function draftKit(a) {
    var first = function (t) { return String(t || '').split(/[.;\n]/)[0].trim(); };
    var lc = function (t) { t = String(t || ''); return /^[A-Z]{2}/.test(t) ? t : t.charAt(0).toLowerCase() + t.slice(1); };
    var uc = function (t) { t = String(t || ''); return t.charAt(0).toUpperCase() + t.slice(1); };
    var joinAnd = function (arr) { return arr.length > 1 ? arr.slice(0, -1).join(', ') + ' and ' + arr[arr.length - 1] : (arr[0] || ''); };
    var comps = [a.comp1, a.comp2, a.comp3].filter(Boolean);
    var diffs = lines(a.differentiators.replace(/,\s+/g, '\n')).map(lc);
    var proofs = lines(a.proof);
    var proof = function (i) { return proofs[i] || proofs[0] || '[Add a number, a customer example or a certification]'; };
    var cust = lc(first(a.customer)), prob = lc(first(a.problem)), product = lc(first(a.product));
    var complex = /complex|Over 250|50,000 to 250/.test(a.motion + a.dealSize);
    var pillars = (diffs.length ? diffs : ['what makes you better']).slice(0, 3).map(function (d, i) {
      return { title: uc(d), message: uc(d) + '. This tackles the main problem buyers have: ' + prob + '.', proof: proof(i) };
    });
    return {
      title: 'Sales kit for ' + a.company,
      summary: {
        positioning: 'For ' + cust + ', who face this problem: ' + prob + '. ' + a.company + ' offers ' + product + '. Unlike ' + lc(comps[0] || 'the current way') + ', it stands out because of ' + (joinAnd(diffs) || '[your main differences]') + '.',
        valueProp: 'We help ' + cust + ' tackle this problem: ' + prob + '. What makes us different: ' + (joinAnd(diffs) || '[your main differences]') + '.',
        whyChange: 'Today, buyers face this: ' + prob + '. Staying with ' + lc(comps[0] || 'the current way') + ' keeps that cost in place.',
        whyNow: '[Add the reason to act this quarter: a deadline, a rising cost, a regulation or a change in the market.]',
        whyUs: uc(joinAnd(diffs) || '[your main differences]') + '. Proof: ' + proof(0)
      },
      messaging: { umbrella: 'A better answer to this problem: ' + prob + '.', pillars: pillars },
      battlecards: (comps.length ? comps : ['Main alternative']).map(function (c) {
        return {
          competitor: c,
          howWeWin: 'We win against ' + c + ' when the buyer cares most about this: ' + (diffs[0] || 'what makes us different') + '.',
          theirPitch: '[What ' + c + ' says about itself. Check their website and recent sales calls.]',
          whereWeWin: diffs.length ? diffs : ['[Your strengths against ' + c + ']'],
          whereTheyWin: ['[Be honest: where ' + c + ' is stronger, and why some buyers choose it]'],
          landmines: ['How long does it take to get value from ' + c + '?', 'What does ' + c + ' cost once set-up, training and upkeep are included?', 'How does ' + c + ' deal with this problem: ' + prob + '?'],
          responses: [{ attack: c + ' is cheaper.', answer: 'Compare the price with what the problem costs today (' + prob + '). ' + proof(0) }]
        };
      }),
      objections: lines(a.objections).slice(0, 8).map(function (o, i) {
        return {
          objection: o,
          acknowledge: 'That’s a fair concern, and we hear it often.',
          explore: ['What is behind that concern for you?', 'What would need to be true for this not to be a problem?'],
          respond: 'Answer the real concern with what makes us different: ' + (diffs[i % Math.max(diffs.length, 1)] || 'our main difference') + '.',
          proof: proof(i)
        };
      }),
      discovery: {
        situation: ['How do you handle this today?', 'Who is involved, and what tools do you use?'],
        problem: ['Where does the current way break down?', 'How often do you run into this: ' + prob + '?'],
        implication: ['What does that cost you each month, in time, money or risk?', 'Who else in the company feels the impact?'],
        needPayoff: ['If that problem went away, what would change for you?', 'How would you measure success six months from now?']
      },
      qualification: complex ? [
        { letter: 'M', name: 'Metrics', question: 'What result would make this a success, in numbers?' },
        { letter: 'E', name: 'Economic buyer', question: 'Who approves a purchase of this size?' },
        { letter: 'D', name: 'Decision criteria', question: 'How will you compare options?' },
        { letter: 'D', name: 'Decision process', question: 'What are the steps and dates to a decision?' },
        { letter: 'I', name: 'Identify pain', question: 'What happens if nothing changes this year?' },
        { letter: 'C', name: 'Champion', question: 'Who inside the company wants this to happen, and why?' }
      ] : [
        { letter: 'B', name: 'Budget', question: 'Is there budget for solving this, or a way to find it?' },
        { letter: 'A', name: 'Authority', question: 'Who else is involved in the decision?' },
        { letter: 'N', name: 'Need', question: 'How big a problem is this today?' },
        { letter: 'T', name: 'Timing', question: 'When do you need a solution in place?' }
      ],
      nextSteps: ['Fill in every [bracketed] gap with real evidence.', 'Test the battlecards with two recent won and lost deals.', 'Share the kit with sales and review it monthly.']
    };
  }

  /* ---------- Showing the kit ---------- */
  function list(arr) { return '<ul>' + (arr || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>'; }
  function renderKit() {
    var k = kit, s = k.summary;
    var html = '<div class="kit-result">' +
      '<div class="kit-result-head"><p class="kit-progress">' + (kitSource === 'ai' ? 'Written for you' : 'Quick draft built from your answers') + '</p>' +
      '<h2>' + esc(k.title || 'Your sales kit') + '</h2>' +
      '<p class="kit-help">' + (kitSource === 'ai' ? 'Check every claim before you share it with your team.' : 'Fill in the [bracketed] gaps with your own evidence before sharing it.') + '</p>' +
      '<div class="kit-actions"><button type="button" class="btn-bright" id="kit-download">Download as Word</button><button type="button" class="btn-quiet" id="kit-restart">Start again</button></div>' +
      '<p class="kit-error" id="kit-dl-msg" aria-live="polite"></p></div>' +
      '<section><h3>Positioning <a href="positioning-statement.html">Positioning statement</a></h3><p>' + esc(s.positioning) + '</p><p><strong>Value proposition:</strong> ' + esc(s.valueProp) + '</p></section>' +
      '<section><h3>Why change, why now, why us <a href="why-change-why-now-why-us.html">Framework</a></h3><dl><dt>Why change</dt><dd>' + esc(s.whyChange) + '</dd><dt>Why now</dt><dd>' + esc(s.whyNow) + '</dd><dt>Why us</dt><dd>' + esc(s.whyUs) + '</dd></dl></section>' +
      '<section><h3>Messaging house <a href="messaging-house.html">Framework</a></h3><p><strong>Umbrella message:</strong> ' + esc(k.messaging.umbrella) + '</p>' +
      (k.messaging.pillars || []).map(function (p, i) { return '<div class="kit-block"><h4>Pillar ' + (i + 1) + ': ' + esc(p.title) + '</h4><p>' + esc(p.message) + '</p><p class="kit-proof">Proof: ' + esc(p.proof) + '</p></div>'; }).join('') + '</section>' +
      '<section><h3>Battlecards <a href="battlecard.html">Framework</a></h3>' + k.battlecards.map(function (b) {
        return '<div class="kit-block"><h4>Against ' + esc(b.competitor) + '</h4><p><strong>How we win:</strong> ' + esc(b.howWeWin) + '</p><p><strong>Their pitch:</strong> ' + esc(b.theirPitch) + '</p>' +
          '<div class="kit-cols"><div><h5>Where we win</h5>' + list(b.whereWeWin) + '</div><div><h5>Where they win</h5>' + list(b.whereTheyWin) + '</div></div>' +
          '<h5>Landmine questions</h5>' + list(b.landmines) +
          '<h5>When they attack</h5><dl>' + (b.responses || []).map(function (r) { return '<dt>' + esc(r.attack) + '</dt><dd>' + esc(r.answer) + '</dd>'; }).join('') + '</dl></div>';
      }).join('') + '</section>' +
      '<section><h3>Objection handling <a href="laer.html">LAER</a></h3>' + k.objections.map(function (o) {
        return '<div class="kit-block"><h4>“' + esc(o.objection) + '”</h4><dl><dt>Listen and acknowledge</dt><dd>' + esc(o.acknowledge) + '</dd><dt>Explore</dt><dd>' + esc((o.explore || []).join(' ')) + '</dd><dt>Respond</dt><dd>' + esc(o.respond) + '</dd><dt>Proof</dt><dd>' + esc(o.proof) + '</dd></dl></div>';
      }).join('') + '</section>' +
      '<section><h3>Discovery questions <a href="spin-selling.html">SPIN</a></h3><div class="kit-cols">' +
      [['Situation', 'situation'], ['Problem', 'problem'], ['Implication', 'implication'], ['Need-payoff', 'needPayoff']].map(function (x) { return '<div><h5>' + x[0] + '</h5>' + list(k.discovery[x[1]]) + '</div>'; }).join('') + '</div></section>' +
      '<section><h3>Qualification <a href="' + (k.qualification.length > 4 ? 'meddic.html">MEDDIC' : 'bant.html">BANT') + '</a></h3><dl>' + k.qualification.map(function (q) { return '<dt>' + esc(q.letter) + ': ' + esc(q.name) + '</dt><dd>' + esc(q.question) + '</dd>'; }).join('') + '</dl></section>' +
      '<section><h3>Next steps</h3>' + list(k.nextSteps) + '</section>' +
      '<p class="kit-foot">Made with Topoi by Ilia Paraskevopoulos. Want help turning this into a full sales enablement programme? <a href="https://iliaparaskevopoulos.com">Get in touch</a>.</p></div>';
    root.innerHTML = html;
    document.getElementById('kit-download').onclick = download;
    document.getElementById('kit-restart').onclick = function () { stepIndex = 0; kit = null; renderStep(); };
    root.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ---------- Word download and notification ---------- */
  function download() {
    var msg = document.getElementById('kit-dl-msg');
    if (!window.docx) { msg.textContent = 'The download could not start. Reload the page and try again.'; return; }
    var D = window.docx, k = kit, s = k.summary, ch = [];
    var H = function (t, lvl) { ch.push(new D.Paragraph({ text: t, heading: lvl || D.HeadingLevel.HEADING_1, spacing: { before: 240, after: 120 } })); };
    var P = function (t, bold) { ch.push(new D.Paragraph({ children: [new D.TextRun({ text: String(t || ''), bold: !!bold })], spacing: { after: 120 } })); };
    var L = function (label, t) { ch.push(new D.Paragraph({ children: [new D.TextRun({ text: label + ': ', bold: true }), new D.TextRun(String(t || ''))], spacing: { after: 100 } })); };
    var B = function (arr) { (arr || []).forEach(function (x) { ch.push(new D.Paragraph({ text: String(x), bullet: { level: 0 } })); }); };
    ch.push(new D.Paragraph({ text: k.title || 'Sales kit', heading: D.HeadingLevel.TITLE }));
    P('Prepared for ' + answers.name + ', ' + answers.company + '. ' + (kitSource === 'ai' ? 'Written with Topoi. Check every claim before sharing.' : 'Quick draft from your answers. Fill in the [bracketed] gaps before sharing.'));
    H('Positioning'); P(s.positioning); L('Value proposition', s.valueProp);
    H('Why change, why now, why us'); L('Why change', s.whyChange); L('Why now', s.whyNow); L('Why us', s.whyUs);
    H('Messaging house'); L('Umbrella message', k.messaging.umbrella);
    (k.messaging.pillars || []).forEach(function (p, i) { H('Pillar ' + (i + 1) + ': ' + p.title, D.HeadingLevel.HEADING_2); P(p.message); L('Proof', p.proof); });
    H('Battlecards');
    k.battlecards.forEach(function (b) {
      H('Against ' + b.competitor, D.HeadingLevel.HEADING_2); L('How we win', b.howWeWin); L('Their pitch', b.theirPitch);
      P('Where we win', true); B(b.whereWeWin); P('Where they win', true); B(b.whereTheyWin); P('Landmine questions', true); B(b.landmines);
      P('When they attack', true); (b.responses || []).forEach(function (r) { L(r.attack, r.answer); });
    });
    H('Objection handling (LAER)');
    k.objections.forEach(function (o) { H('“' + o.objection + '”', D.HeadingLevel.HEADING_2); L('Listen and acknowledge', o.acknowledge); L('Explore', (o.explore || []).join(' ')); L('Respond', o.respond); L('Proof', o.proof); });
    H('Discovery questions (SPIN)');
    [['Situation', 'situation'], ['Problem', 'problem'], ['Implication', 'implication'], ['Need-payoff', 'needPayoff']].forEach(function (x) { P(x[0], true); B(k.discovery[x[1]]); });
    H('Qualification'); k.qualification.forEach(function (q) { L(q.letter + ': ' + q.name, q.question); });
    H('Next steps'); B(k.nextSteps);
    P('Made with Topoi by Ilia Paraskevopoulos, iliaparaskevopoulos.com');
    var doc = new D.Document({ creator: 'Topoi', title: k.title, styles: { default: { document: { run: { font: 'Calibri', size: 22 } } } }, sections: [{ children: ch }] });
    D.Packer.toBlob(doc).then(function (blob) {
      var name = ('Sales kit - ' + answers.company).replace(/[^\w \-]+/g, '').trim() + '.docx';
      var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 2000);
      msg.textContent = 'Downloaded: ' + name;
      notify();
    }, function () { msg.textContent = 'The download could not be created. Try again.'; });
  }

  function notify() {
    if (!API) return;
    var body = JSON.stringify({ answers: answers, kitTitle: kit.title, source: kitSource, page: location.href });
    try {
      if (navigator.sendBeacon && navigator.sendBeacon(API + '/notify', new Blob([body], { type: 'text/plain' }))) return;
    } catch (e) {}
    fetch(API + '/notify', { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: body, keepalive: true }).catch(function () {});
  }

  renderStep();
})();
