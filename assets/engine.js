/* Framework Library — diagram engine.
   Each framework diagram is data (see content/*.js). A renderer per shape
   draws it into SVG, tagging every group with data-step="n". The player
   reveals groups up to the current step and highlights the current one. */
(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  var uid = 0;

  function s(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) if (attrs[k] != null) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }

  function wrap(str, max) {
    var out = [];
    String(str).split('\n').forEach(function (para) {
      var cur = '';
      para.split(/\s+/).forEach(function (w) {
        if (cur && (cur + ' ' + w).length > max) { out.push(cur); cur = w; }
        else cur = cur ? cur + ' ' + w : w;
      });
      out.push(cur);
    });
    return out;
  }

  // Multi-line text. o: {size, anchor, cls, max, lh, valign}
  function text(parent, x, y, str, o) {
    o = o || {};
    var size = o.size || 15;
    var lines = o.max ? wrap(str, o.max) : String(str).split('\n');
    var lh = size * (o.lh || 1.3);
    var y0 = o.valign === 'middle' ? y - ((lines.length - 1) * lh) / 2 : y;
    var t = s('text', { x: x, y: y0, 'class': o.cls || null, 'text-anchor': o.anchor || 'start', 'font-size': size }, parent);
    lines.forEach(function (l, i) {
      var ts = s('tspan', { x: x, dy: i ? lh : 0 }, t);
      ts.textContent = l;
    });
    return t;
  }

  // Text that switches between general and worked-example wording.
  function dual(parent, x, y, gen, ex, o) {
    o = o || {};
    if (ex == null || ex === gen) return text(parent, x, y, gen, o);
    text(parent, x, y, gen, Object.assign({}, o, { cls: ((o.cls || '') + ' gen').trim() }));
    text(parent, x, y, ex, Object.assign({}, o, { cls: ((o.cls || '') + ' ex').trim() }));
  }

  function step(parent, n) { return s('g', { 'data-step': n, 'class': 'st' }, parent); }

  function arrowDefs(svg) {
    var id = 'ah' + (++uid);
    var defs = s('defs', {}, svg);
    var m = s('marker', { id: id, viewBox: '0 0 10 10', refX: 8, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto-start-reverse' }, defs);
    s('path', { d: 'M0 0 L10 5 L0 10 z', 'class': 'arrowhead' }, m);
    return 'url(#' + id + ')';
  }

  var R = {};

  /* 2×2 matrix */
  R.matrix = function (svg, d) {
    var L = 150, Rr = 780, T = 16, B = 420, W = Rr - L, H = B - T;
    var ah = arrowDefs(svg);
    var pos = { bl: [L, T + H / 2], br: [L + W / 2, T + H / 2], tl: [L, T], tr: [L + W / 2, T] };

    d.quadrants.forEach(function (q) {
      var p = pos[q.pos], g = step(svg, q.step);
      var x = p[0] + 6, y = p[1] + 6, w = W / 2 - 12, h = H / 2 - 12;
      s('rect', { x: x, y: y, width: w, height: h, rx: 3, 'class': 'area' }, g);
      text(g, x + 18, y + 36, q.title, { size: 21, cls: 'title', max: 24 });
      dual(g, x + 18, y + 68, q.text, q.ex, { size: 14.5, cls: 'body', max: 34 });
    });

    var a = step(svg, d.axesStep);
    s('path', { d: 'M' + L + ' ' + T + ' L' + L + ' ' + B + ' L' + Rr + ' ' + B, 'class': 'line draw', pathLength: 1 }, a);
    text(a, L + W / 4, B + 28, d.x.low, { anchor: 'middle', cls: 'axis' });
    text(a, L + 3 * W / 4, B + 28, d.x.high, { anchor: 'middle', cls: 'axis' });
    text(a, (L + Rr) / 2, B + 60, d.x.title, { anchor: 'middle', size: 17, cls: 'axis-title' });
    [[d.y.low, T + 3 * H / 4], [d.y.high, T + H / 4]].forEach(function (r) {
      var gg = s('g', { transform: 'translate(' + (L - 18) + ' ' + r[1] + ') rotate(-90)' }, a);
      text(gg, 0, 0, r[0], { anchor: 'middle', cls: 'axis' });
    });
    var gt = s('g', { transform: 'translate(' + (L - 60) + ' ' + (T + H / 2) + ') rotate(-90)' }, a);
    text(gt, 0, 0, d.y.title, { anchor: 'middle', size: 17, cls: 'axis-title' });

    if (d.risk) {
      var r = step(svg, d.risk.step);
      var cx = L + W / 2, cy = T + H / 2;
      if (d.risk.arrow !== false) s('line', { x1: cx - 34, y1: cy + 34, x2: cx + 46, y2: cy - 46, 'class': 'pen draw', pathLength: 1, 'marker-end': ah }, r);
      d.quadrants.forEach(function (q) {
        var p = pos[q.pos];
        dual(r, p[0] + W / 2 - 24, p[1] + H / 2 - 24, q.risk, q.riskEx, { size: 14, cls: 'pen-text strong', anchor: 'end' });
      });
    }
  };

  /* Bell curve of adoption segments, with an optional chasm */
  R.bell = function (svg, d) {
    var x0 = 40, x1 = 760, base = 390, peak = 70;
    function X(z) { return x0 + ((z + 3) / 6) * (x1 - x0); }
    function Y(z) { return base - (base - peak) * Math.exp(-z * z / 2); }
    function curve(a, b, closed) {
      var pts = [];
      for (var z = a; z <= b + 1e-9; z += 0.05) pts.push(X(z).toFixed(1) + ' ' + Y(z).toFixed(1));
      var p = 'M' + pts.join(' L');
      if (closed) p += ' L' + X(b) + ' ' + base + ' L' + X(a) + ' ' + base + ' Z';
      return p;
    }
    d.segments.forEach(function (seg) {
      var g = step(svg, seg.step), mid = X((seg.from + seg.to) / 2);
      s('path', { d: curve(seg.from, seg.to, true), 'class': 'area' }, g);
      text(g, mid, base + 30, seg.title, { anchor: 'middle', size: 16, cls: 'title', max: 11 });
      text(g, mid, base + 74, seg.pct, { anchor: 'middle', size: 14, cls: 'axis' });
    });
    var c = step(svg, d.curveStep);
    s('line', { x1: x0, y1: base, x2: x1, y2: base, 'class': 'line' }, c);
    s('path', { d: curve(-3, 3, false), 'class': 'line draw', pathLength: 1 }, c);
    if (d.chasm) {
      var k = step(svg, d.chasm.step), cxx = X(d.chasm.at), pts = [], back = [];
      for (var yy = Y(d.chasm.at) - 14, j = 0; yy <= base + 12; yy += 18, j++) {
        var off = j % 2 ? 6 : -6;
        pts.push((cxx - 10 + off) + ',' + yy);
        back.unshift((cxx + 10 + off) + ',' + yy);
      }
      s('polygon', { points: pts.concat(back).join(' '), 'class': 'chasm' }, k);
      dual(k, cxx - 22, 150, d.chasm.label, d.chasm.ex, { anchor: 'end', size: 16, cls: 'pen-text strong', max: 22 });
    }
  };

  /* Ordered chain of components, serpentine over two rows (3 or 4 per row) */
  R.chain = function (svg, d) {
    var ah = arrowDefs(svg), n = d.nodes.length, per = n > 6 ? 4 : 3;
    var gap = per === 4 ? 26 : 40, w = per === 4 ? 172 : 220, x0 = per === 4 ? 21 : 30;
    var h = 176, rows = [24, 284], cols = [], slots = [];
    for (var c = 0; c < per; c++) cols.push(x0 + c * (w + gap));
    for (var i = 0; i < n; i++) slots.push(i < per ? [i, 0] : [per - 1 - (i - per), 1]);
    var tMax = per === 4 ? 17 : 20, bMax = per === 4 ? 23 : 30;
    d.nodes.forEach(function (nd, i) {
      var sl = slots[i], x = cols[sl[0]], y = rows[sl[1]], g = step(svg, nd.step);
      if (i > 0) {
        var pc = slots[i - 1], px = cols[pc[0]], py = rows[pc[1]], line;
        if (pc[1] === sl[1] && sl[0] > pc[0]) line = [px + w + 4, py + h / 2, x - 6, y + h / 2];
        else if (pc[1] === sl[1]) line = [px - 4, py + h / 2, x + w + 6, y + h / 2];
        else line = [px + w / 2, py + h + 4, x + w / 2, y - 6];
        s('line', { x1: line[0], y1: line[1], x2: line[2], y2: line[3], 'class': 'pen draw', pathLength: 1, 'marker-end': ah }, g);
      }
      s('rect', { x: x, y: y, width: w, height: h, rx: 3, 'class': 'area' + (nd.optional ? ' optional' : '') }, g);
      text(g, x + 14, y + 28, String(i + 1), { size: 14, cls: 'num' });
      var tl = wrap(nd.title, tMax).length;
      text(g, x + 14, y + 54, nd.title, { size: per === 4 ? 16 : 18, cls: 'title', max: tMax });
      dual(g, x + 14, y + 54 + tl * 23 + 4, nd.text, nd.ex, { size: 13, cls: 'body', max: bMax });
    });
  };

  /* Bow-tie: stages narrow into a commitment point, then widen again */
  R.bowtie = function (svg, d) {
    var cy = 165, L = 20, Rr = 780, kL = 350, kR = 450, big = 290, small = 74;
    var left = d.left, right = d.right;
    function hAt(x) {
      if (x <= kL) return big - (big - small) * (x - L) / (kL - L);
      return small + (big - small) * (x - kR) / (Rr - kR);
    }
    function slice(x0, x1, st, g) {
      var h0 = hAt(x0), h1 = hAt(x1);
      s('polygon', { points: [x0, cy - h0 / 2, x1, cy - h1 / 2, x1, cy + h1 / 2, x0, cy + h0 / 2].join(' '), 'class': 'area' }, g);
      text(g, (x0 + x1) / 2, cy + 5, st.title, { anchor: 'middle', size: 14, cls: 'title', max: 12, valign: 'middle' });
      dual(g, (x0 + x1) / 2, cy + big / 2 + 28, st.text, st.ex, { anchor: 'middle', size: 12, cls: 'body', max: 15 });
    }
    var lw = (kL - L) / left.length, rw = (Rr - kR) / right.length;
    left.forEach(function (st, i) { slice(L + i * lw + 2, L + (i + 1) * lw - 2, st, step(svg, st.step)); });
    var kg = step(svg, d.knot.step);
    s('rect', { x: kL + 2, y: cy - small / 2, width: kR - kL - 4, height: small, rx: 3, 'class': 'area core' }, kg);
    text(kg, 400, cy + 5, d.knot.title, { anchor: 'middle', size: 15, cls: 'title' });
    dual(kg, 400, cy + big / 2 + 28, d.knot.text, d.knot.ex, { anchor: 'middle', size: 12, cls: 'body', max: 15 });
    right.forEach(function (st, i) { slice(kR + i * rw + 2, kR + (i + 1) * rw - 2, st, step(svg, st.step)); });
    if (d.note) {
      var k = step(svg, d.note.step);
      dual(k, 615, 24, d.note.label, d.note.ex, { anchor: 'middle', size: 14, cls: 'pen-text strong halo', max: 40 });
    }
  };

  /* Funnel with a metric per stage and an optional leak marker */
  R.funnel = function (svg, d) {
    var ah = arrowDefs(svg);
    var cx = 290, topW = 440, botW = 140, y0 = 16, h = 70, gap = 8, n = d.stages.length;
    function wAt(i) { return topW - (topW - botW) * i / n; }
    d.stages.forEach(function (st, i) {
      var g = step(svg, st.step), yt = y0 + i * (h + gap), yb = yt + h, wt = wAt(i), wb = wAt(i + 1);
      s('polygon', { points: [cx - wt / 2, yt, cx + wt / 2, yt, cx + wb / 2, yb, cx - wb / 2, yb].join(' '), 'class': 'area' }, g);
      text(g, cx, yt + h / 2 + 6, st.title, { anchor: 'middle', size: 19, cls: 'title' });
      var rx = cx + (wt + wb) / 4 + 12;
      s('line', { x1: rx, y1: yt + h / 2, x2: 530, y2: yt + h / 2, 'class': 'leader' }, g);
      dual(g, 542, yt + h / 2 + 5, st.metric, st.ex, { size: 14, cls: "body", max: 28, valign: "middle" });
    });
    if (d.outlineStep) {
      var o = step(svg, d.outlineStep), yEnd = y0 + n * (h + gap) - gap;
      s('polygon', { points: [cx - topW / 2, y0, cx + topW / 2, y0, cx + botW / 2, yEnd, cx - botW / 2, yEnd].join(' '), 'class': 'outline draw', pathLength: 1 }, o);
    }
    if (d.leak) {
      var k = step(svg, d.leak.step), i = d.leak.after + 1;
      var yb = y0 + i * (h + gap) - gap / 2, lx = cx - wAt(i) / 2;
      s('path', { d: 'M' + (lx - 4) + ' ' + yb + ' Q ' + (lx - 40) + ' ' + (yb + 4) + ' ' + (lx - 52) + ' ' + (yb + 50), 'class': 'pen draw', pathLength: 1, 'marker-end': ah }, k);
      dual(k, lx - 52, yb + 78, d.leak.label, d.leak.ex, { anchor: 'middle', size: 15, cls: 'pen-text strong', max: 12 });
    }
  };

  /* Value Proposition Canvas: value map square + customer profile circle */
  R.vpc = function (svg, d) {
    var ah = arrowDefs(svg), p = d.parts;
    var sq = { x: 30, y: 40, s: 330 }, c = { x: 612, y: 205, r: 172 };
    function sector(a0, a1) {
      var r = Math.PI / 180, x0 = c.x + c.r * Math.cos(a0 * r), y0 = c.y + c.r * Math.sin(a0 * r);
      var x1 = c.x + c.r * Math.cos(a1 * r), y1 = c.y + c.r * Math.sin(a1 * r);
      return 'M' + c.x + ' ' + c.y + ' L' + x0 + ' ' + y0 + ' A' + c.r + ' ' + c.r + ' 0 0 1 ' + x1 + ' ' + y1 + ' Z';
    }
    function part(key, shape, tx, ty, anchor, max) {
      var q = p[key], g = step(svg, q.step);
      s(shape[0], shape[1], g);
      text(g, tx, ty, q.title, { anchor: anchor, size: 17, cls: 'title', max: max });
      dual(g, tx, ty + (q.title.length > max ? 44 : 24), q.text, q.ex, { anchor: anchor, size: 13, cls: 'body', max: max + 2 });
    }
    var half = sq.s / 2;
    part('products', ['rect', { x: sq.x, y: sq.y, width: half, height: sq.s, 'class': 'area' }], sq.x + 14, sq.y + 34, 'start', 15);
    part('gainCreators', ['rect', { x: sq.x + half, y: sq.y, width: half, height: half, 'class': 'area' }], sq.x + half + 14, sq.y + 34, 'start', 15);
    part('painRelievers', ['rect', { x: sq.x + half, y: sq.y + half, width: half, height: half, 'class': 'area' }], sq.x + half + 14, sq.y + half + 34, 'start', 15);
    part('jobs', ['path', { d: sector(-60, 60), 'class': 'area' }], c.x + 96, c.y - 20, 'middle', 11);
    part('gains', ['path', { d: sector(180, 300), 'class': 'area' }], c.x - 58, c.y - 104, 'middle', 12);
    part('pains', ['path', { d: sector(60, 180), 'class': 'area' }], c.x - 58, c.y + 66, 'middle', 12);

    var vm = step(svg, d.valueMap.step);
    s('rect', { x: sq.x, y: sq.y, width: sq.s, height: sq.s, 'class': 'outline draw', pathLength: 1 }, vm);
    text(vm, sq.x + half, sq.y + sq.s + 34, d.valueMap.title, { anchor: 'middle', size: 17, cls: 'axis-title' });
    var cp = step(svg, d.profile.step);
    s('circle', { cx: c.x, cy: c.y, r: c.r, 'class': 'outline draw', pathLength: 1 }, cp);
    text(cp, c.x, sq.y + sq.s + 34, d.profile.title, { anchor: 'middle', size: 17, cls: 'axis-title' });

    var f = step(svg, d.fit.step), ex = sq.x + sq.s;
    s('line', { x1: ex + 8, y1: sq.y + half / 2, x2: c.x - 140, y2: sq.y + half / 2, 'class': 'pen draw', pathLength: 1, 'marker-end': ah, 'marker-start': ah }, f);
    s('line', { x1: ex + 8, y1: sq.y + 1.5 * half, x2: c.x - 140, y2: sq.y + 1.5 * half, 'class': 'pen draw', pathLength: 1, 'marker-end': ah, 'marker-start': ah }, f);
    dual(f, (ex + c.x - c.r) / 2, c.y + 6, d.fit.label, d.fit.ex, { anchor: 'middle', size: 16, cls: 'pen-text strong', max: 8 });
  };

  /* Centre plus four surrounding forces (Porter) */
  R.forces = function (svg, d) {
    var ah = arrowDefs(svg), w = 220, h = 120;
    var box = { center: [290, 180], top: [290, 10], bottom: [290, 350], left: [20, 180], right: [560, 180] };
    var arrows = {
      top: [400, 134, 400, 174], bottom: [400, 346, 400, 306],
      left: [244, 240, 284, 240], right: [556, 240, 516, 240]
    };
    d.forces.forEach(function (f) {
      var b = box[f.pos], g = step(svg, f.step);
      if (arrows[f.pos]) { var a = arrows[f.pos]; s('line', { x1: a[0], y1: a[1], x2: a[2], y2: a[3], 'class': 'pen draw', pathLength: 1, 'marker-end': ah }, g); }
      s('rect', { x: b[0], y: b[1], width: w, height: h, rx: 3, 'class': 'area' + (f.pos === 'center' ? ' core' : '') }, g);
      text(g, b[0] + 14, b[1] + 26, f.title, { size: 16, cls: 'title', max: 22 });
      dual(g, b[0] + 14, b[1] + (f.title.length > 22 ? 70 : 50), f.text, f.ex, { size: 13, cls: 'body', max: 27 });
    });
    if (d.rating) {
      var r = step(svg, d.rating.step);
      d.forces.forEach(function (f) {
        var b = box[f.pos];
        dual(r, b[0] + w - 12, b[1] + h - 12, f.rating, f.ratingEx, { size: 13.5, cls: 'pen-text strong', anchor: 'end' });
      });
    }
  };

  /* Generic chart: axes, bands, reference lines, curves, arrows, markers */
  R.chart = function (svg, d) {
    var ah = arrowDefs(svg);
    var L = d.left || 100, Rr = d.right || 770, T = 20, B = 370;
    var x = d.x, y = d.y;
    function X(v) { return L + (v - x.domain[0]) / (x.domain[1] - x.domain[0]) * (Rr - L); }
    function Y(v) { return B - (v - y.domain[0]) / (y.domain[1] - y.domain[0]) * (B - T); }

    (d.bands || []).forEach(function (b) {
      var g = step(svg, b.step);
      s('rect', { x: X(b.x0), y: T, width: X(b.x1) - X(b.x0), height: B - T, 'class': 'band' }, g);
      s('line', { x1: X(b.x0), y1: T, x2: X(b.x0), y2: B, 'class': 'edge' }, g);
      s('line', { x1: X(b.x1), y1: T, x2: X(b.x1), y2: B, 'class': 'edge' }, g);
      dual(g, (X(b.x0) + X(b.x1)) / 2, T + 18, b.label, b.ex, { anchor: 'middle', size: 14, cls: 'strong halo' });
    });

    var a = step(svg, d.axesStep);
    s('path', { d: 'M' + L + ' ' + T + ' L' + L + ' ' + B + ' L' + Rr + ' ' + B, 'class': 'line draw', pathLength: 1 }, a);
    (x.ticks || []).forEach(function (t) {
      s('line', { x1: X(t.v), y1: B, x2: X(t.v), y2: B + 6, 'class': 'line' }, a);
      dual(a, X(t.v), B + 24, t.gen, t.ex, { anchor: 'middle', size: 13, cls: 'axis' });
    });
    (y.ticks || []).forEach(function (t) {
      dual(a, L - 10, Y(t.v) + 4, t.gen, t.ex, { anchor: 'end', size: 13, cls: 'axis' });
    });
    if (x.low) text(a, L, B + 24, x.low, { size: 13, cls: 'axis' });
    if (x.high) text(a, Rr, B + 24, x.high, { size: 13, cls: 'axis', anchor: 'end' });
    if (y.low) text(a, L - 10, B - 4, y.low, { size: 13, cls: 'axis', anchor: 'end' });
    if (y.high) text(a, L - 10, T + 12, y.high, { size: 13, cls: 'axis', anchor: 'end' });
    text(a, (L + Rr) / 2, B + 56, x.title, { anchor: 'middle', size: 16, cls: 'axis-title' });
    var gt = s('g', { transform: 'translate(' + (L - (d.yTitleGap || 62)) + ' ' + (T + B) / 2 + ') rotate(-90)' }, a);
    text(gt, 0, 0, y.title, { anchor: 'middle', size: 16, cls: 'axis-title' });

    (d.hlines || []).forEach(function (hl) {
      var g = step(svg, hl.step);
      s('line', { x1: L, y1: Y(hl.v), x2: Rr, y2: Y(hl.v), 'class': 'ref' }, g);
      dual(g, hl.at != null ? X(hl.at) : hl.left ? L + 10 : Rr - 6, Y(hl.v) + (hl.below ? 22 : -9), hl.label, hl.ex, { anchor: hl.at != null ? 'middle' : hl.left ? 'start' : 'end', size: 14, cls: 'strong halo' });
    });

    (d.curves || []).forEach(function (c) {
      var g = step(svg, c.step);
      var dd = 'M' + c.points.map(function (p) { return X(p[0]).toFixed(1) + ' ' + Y(p[1]).toFixed(1); }).join(' L');
      s('path', { d: dd, 'class': 'hl-under' }, g);
      s('path', { d: dd, 'class': 'line curve draw', pathLength: 1 }, g);
      dual(g, X(c.labelAt[0]) + (c.dx || 0), Y(c.labelAt[1]) + (c.dy || 0), c.label, c.ex, { anchor: c.anchor || 'start', size: 14.5, cls: 'title halo', max: c.max || 22 });
    });

    (d.arrows || []).forEach(function (ar) {
      var g = step(svg, ar.step), x1 = X(ar.from[0]), y1 = Y(ar.from[1]), x2 = X(ar.to[0]), y2 = Y(ar.to[1]);
      s('path', { d: 'M' + x1 + ' ' + y1 + ' Q ' + (Math.max(x1, x2) + 70) + ' ' + ((y1 + y2) / 2) + ' ' + x2 + ' ' + y2, 'class': 'pen draw', pathLength: 1, 'marker-end': ah }, g);
      dual(g, Math.max(x1, x2) + 44, (y1 + y2) / 2 + 4, ar.label, ar.ex, { size: 14, cls: 'pen-text strong halo', max: ar.max || 14, valign: 'middle' });
    });

    (d.markers || []).forEach(function (m) {
      var g = step(svg, m.step);
      s('circle', { cx: X(m.x), cy: Y(m.y), r: 6, 'class': 'dot' }, g);
      dual(g, X(m.x) + (m.dx || 0), Y(m.y) + (m.dy || 0), m.label, m.ex, { anchor: m.anchor || 'middle', size: 14, cls: 'pen-text strong halo', max: 20 });
    });
  };

  /* Messaging house: roof, pillars with proof points, foundation */
  R.house = function (svg, d) {
    var roof = step(svg, d.roof.step);
    s('polygon', { points: '50,150 400,14 750,150', 'class': 'area' }, roof);
    text(roof, 400, 84, d.roof.title, { anchor: 'middle', size: 15, cls: 'axis' });
    dual(roof, 400, 108, d.roof.text, d.roof.ex, { anchor: 'middle', size: 17, cls: 'title', max: 42 });
    var xs = [80, 310, 540], w = 180;
    d.pillars.forEach(function (p, i) {
      var g = step(svg, p.step);
      s('rect', { x: xs[i], y: 162, width: w, height: 200, 'class': 'area' }, g);
      dual(g, xs[i] + 14, 188, p.title, p.titleEx, { size: 14, cls: 'axis' });
      dual(g, xs[i] + 14, 212, p.text, p.ex, { size: 15, cls: 'title', max: 20 });
    });
    var pr = step(svg, d.proofStep);
    d.pillars.forEach(function (p, i) {
      s('rect', { x: xs[i] + 10, y: 282, width: w - 20, height: 70, 'class': 'area proof' }, pr);
      dual(pr, xs[i] + 22, 304, p.proof, p.proofEx, { size: 12.5, cls: 'body', max: 22 });
    });
    var f = step(svg, d.foundation.step);
    s('rect', { x: 50, y: 374, width: 700, height: 76, 'class': 'area' }, f);
    text(f, 400, 400, d.foundation.title, { anchor: 'middle', size: 14, cls: 'axis' });
    dual(f, 400, 426, d.foundation.text, d.foundation.ex, { anchor: 'middle', size: 15, cls: 'title', max: 80 });
  };

  /* Cycle / flywheel: centre, three ring segments, force and friction */
  R.cycle = function (svg, d) {
    var ah = arrowDefs(svg), cx = 400, cy = 222, ro = 186, ri = 118, rad = Math.PI / 180;
    function pt(r, a) { return [cx + r * Math.cos(a * rad), cy + r * Math.sin(a * rad)]; }
    function ring(a0, a1) {
      var p1 = pt(ro, a0), p2 = pt(ro, a1), p3 = pt(ri, a1), p4 = pt(ri, a0);
      return 'M' + p1 + ' A' + ro + ' ' + ro + ' 0 0 1 ' + p2 + ' L' + p3 + ' A' + ri + ' ' + ri + ' 0 0 0 ' + p4 + ' Z';
    }
    var c = step(svg, d.center.step);
    s('circle', { cx: cx, cy: cy, r: 88, 'class': 'area core' }, c);
    text(c, cx, cy - 18, d.center.title, { anchor: 'middle', size: 18, cls: 'title' });
    dual(c, cx, cy + 6, d.center.text, d.center.ex, { anchor: 'middle', size: 12.5, cls: 'body', max: 18 });
    var n = d.segments.length, span = 360 / n;
    var outside = n === 3 ? [
      { x: 596, y: 70, anchor: 'start' }, { x: 400, y: 444, anchor: 'middle' }, { x: 204, y: 70, anchor: 'end' }
    ] : d.segments.map(function (sg, i) {
      var a = -90 + span * (i + 0.5), p = pt(212, a), c = Math.cos(a * rad);
      return { x: p[0] + (c > 0 ? 6 : -6), y: p[1] + (Math.sin(a * rad) > 0 ? 10 : -6), anchor: Math.abs(c) < 0.2 ? 'middle' : (c > 0 ? 'start' : 'end') };
    });
    d.segments.forEach(function (sg, i) {
      var a0 = -90 + i * span + 3, a1 = a0 + span - 6, g = step(svg, sg.step), mid = pt((ro + ri) / 2, (a0 + a1) / 2);
      s('path', { d: ring(a0, a1), 'class': 'area' }, g);
      text(g, mid[0], mid[1] + 6, sg.title, { anchor: 'middle', size: 18, cls: 'title' });
      var o = outside[i];
      dual(g, o.x, o.y, sg.text, sg.ex, { anchor: o.anchor, size: 13.5, cls: 'body', max: n === 3 && i === 1 ? 46 : 24 });
    });
    if (!d.force) return;
    var fo = step(svg, d.force.step);
    for (var k = 0; k < 3; k++) {
      var b0 = -90 + k * 120 + 20, b1 = b0 + 80, p1 = pt(103, b0), p2 = pt(103, b1);
      s('path', { d: 'M' + p1 + ' A103 103 0 0 1 ' + p2, 'class': 'pen draw', pathLength: 1, 'marker-end': ah }, fo);
    }
    dual(fo, 30, 330, d.force.label, d.force.ex, { size: 14, cls: 'pen-text strong', max: 26 });
    var fr = step(svg, d.friction.step);
    for (var m = 0; m < 3; m++) {
      var ang = -90 + m * 120, q1 = pt(ri - 4, ang), q2 = pt(ro + 4, ang);
      s('line', { x1: q1[0], y1: q1[1], x2: q2[0], y2: q2[1], 'class': 'brake' }, fr);
    }
    dual(fr, 770, 330, d.friction.label, d.friction.ex, { size: 14, cls: 'strong', anchor: 'end', max: 26 });
  };

  /* Pyramid with optional split levels and side labels (levels listed top to bottom) */
  R.pyramid = function (svg, d) {
    var ax = 310, top = 12, base = 440, hw = 300, n = d.levels.length, h = (base - top) / n;
    function half(y) { return hw * (y - top) / (base - top); }
    d.levels.forEach(function (lv, i) {
      var y0 = top + i * h, y1 = y0 + h, cells = lv.cells;
      cells.forEach(function (c, j) {
        var g = step(svg, c.step), pts;
        if (cells.length === 1) pts = [[ax - half(y0), y0], [ax + half(y0), y0], [ax + half(y1), y1], [ax - half(y1), y1]];
        else if (j === 0) pts = [[ax - half(y0), y0], [ax, y0], [ax, y1], [ax - half(y1), y1]];
        else pts = [[ax, y0], [ax + half(y0), y0], [ax + half(y1), y1], [ax, y1]];
        s('polygon', { points: pts.map(function (p) { return p.join(','); }).join(' '), 'class': 'area' }, g);
        var ty = i === 0 ? y0 + h * 0.78 : y0 + h * (cells.length === 1 ? 0.42 : 0.5);
        var cx = cells.length === 1 ? ax : (j === 0 ? ax - half(ty + 12) * 0.5 : ax + half(ty + 12) * 0.5);
        text(g, cx, ty, c.title, { anchor: 'middle', size: i === 0 ? 13 : (cells.length > 1 && i < 2 && c.title.length > 9 ? 12 : 15), cls: 'title' + (i === 0 ? ' halo' : '') });
        if (c.text) dual(g, cx, ty + 19, c.text, c.ex, { anchor: 'middle', size: 12.5, cls: 'body', max: cells.length === 1 ? 34 : 19 });
      });
      if (lv.side) {
        var gs = step(svg, lv.cells[0].step), ym = y0 + h / 2;
        s('line', { x1: ax + half(ym) + 10, y1: ym, x2: 636, y2: ym, 'class': 'leader' }, gs);
        text(gs, 644, ym - 3, lv.side, { size: 14, cls: 'axis-title' });
        text(gs, 644, ym + 16, lv.sideQ, { size: 13, cls: 'axis' });
      }
    });
  };

  /* Acronym checklist: one row per letter, with a status column */
  R.acronym = function (svg, d) {
    var rowH = d.rowH || 68, y0 = 12;
    d.items.forEach(function (it, i) {
      var y = y0 + i * rowH, g = step(svg, it.step);
      s('rect', { x: 24, y: y, width: 52, height: 52, rx: 3, 'class': 'area' }, g);
      text(g, 50, y + 36, it.letter, { anchor: 'middle', size: 27, cls: 'title' });
      text(g, 94, y + 20, it.title, { size: 17, cls: 'title' });
      dual(g, 94, y + 41, it.text, it.ex, { size: 13.5, cls: 'body', max: 72 });
    });
    if (d.score) {
      var r = step(svg, d.score.step);
      d.items.forEach(function (it, i) {
        dual(r, 776, y0 + i * rowH + 20, it.status, it.statusEx, { anchor: 'end', size: 14, cls: 'pen-text strong halo' });
      });
    }
  };

  /* Four overlapping circles, with notes in side columns */
  R.venn4 = function (svg, d) {
    var cx = 400, cy = 215, o = 78, r = 128, pos = [[-1, -1], [1, -1], [-1, 1], [1, 1]];
    d.circles.forEach(function (c, i) {
      var p = pos[i], g = step(svg, c.step), x = cx + p[0] * o, y = cy + p[1] * o;
      s('circle', { cx: x, cy: y, r: r, 'class': 'area venn' }, g);
      text(g, x + p[0] * 52, y + p[1] * 50 + 6, c.title, { anchor: 'middle', size: 18, cls: 'title' });
      dual(g, p[0] < 0 ? 20 : 780, p[1] < 0 ? 60 : 330, c.text, c.ex, { anchor: p[0] < 0 ? 'start' : 'end', size: 13.5, cls: 'body', max: 22 });
    });
    var m = step(svg, d.center.step);
    s('circle', { cx: cx, cy: cy, r: 26, 'class': 'area core' }, m);
    dual(m, cx, cy + 50, d.center.label, d.center.ex, { anchor: 'middle', size: 14, cls: 'pen-text strong halo', max: 20 });
  };

  /* Tree of boxes with elbow connectors; positions come from the content file */
  R.tree = function (svg, d) {
    var byId = {};
    d.nodes.forEach(function (n) { byId[n.id] = n; });
    d.nodes.forEach(function (n) {
      var g = step(svg, n.step);
      if (n.parent) {
        var p = byId[n.parent], x1 = p.x + p.w / 2, y1 = p.y + p.h, x2 = n.x + n.w / 2, y2 = n.y, ym = (y1 + y2) / 2;
        s('path', { d: 'M' + x1 + ' ' + y1 + ' L' + x1 + ' ' + ym + ' L' + x2 + ' ' + ym + ' L' + x2 + ' ' + y2, 'class': 'line draw', pathLength: 1 }, g);
      }
      s('rect', { x: n.x, y: n.y, width: n.w, height: n.h, rx: 3, 'class': 'area' }, g);
      text(g, n.x + 12, n.y + 19, n.label, { size: 12, cls: 'axis' });
      dual(g, n.x + 12, n.y + 39, n.text, n.ex, { size: 13.5, cls: 'title', max: Math.floor((n.w - 20) / 7.4) });
    });
    if (d.target) {
      var t = byId[d.target.id], gt = step(svg, d.target.step);
      s('rect', { x: t.x - 6, y: t.y - 6, width: t.w + 12, height: t.h + 12, rx: 6, 'class': 'pen draw', pathLength: 1 }, gt);
      dual(gt, t.x + t.w - 10, t.y + 19, d.target.label, d.target.ex, { anchor: 'end', size: 12.5, cls: 'pen-text strong' });
    }
  };

  /* Concentric rings, outermost first, with notes in a right-hand column */
  R.rings = function (svg, d) {
    var cx = 250, cy = 222, Rr = 205, n = d.rings.length, band = Rr / n;
    d.rings.forEach(function (rg, i) {
      var r = Rr - i * band, g = step(svg, rg.step), inner = i === n - 1;
      s('circle', { cx: cx, cy: cy, r: r, 'class': 'area' + (inner ? ' core' : '') }, g);
      var ty = inner ? cy + 6 : cy - r + band * 0.62;
      text(g, cx, ty, rg.title, { anchor: 'middle', size: inner ? 19 : 17, cls: 'title' });
      var ly = inner ? cy : cy - r + band * 0.45, lx = cx + Math.sqrt(Math.max(0, r * r - (ly - cy) * (ly - cy)));
      var colY = ly;
      s('path', { d: 'M' + (lx + 4) + ' ' + ly + ' L 500 ' + colY, 'class': 'leader' }, g);
      dual(g, 512, colY + 5, rg.text, rg.ex, { size: 14, cls: 'body', max: 34, valign: 'middle' });
    });
    if (d.note) {
      var k = step(svg, d.note.step);
      dual(k, 512, 420, d.note.label, d.note.ex, { size: 14, cls: 'pen-text strong', max: 36 });
    }
  };

  /* Fill-in statement: fixed lead words on the left, slots that fill in */
  R.statement = function (svg, d) {
    var rowH = d.rowH || 62, y0 = 18;
    d.parts.forEach(function (p, i) {
      var y = y0 + i * rowH, g = step(svg, p.step);
      text(g, 186, y + (rowH - 12) / 2 + 5, p.lead, { anchor: 'end', size: p.lead.length > 16 ? 14.5 : 17, cls: 'title', max: 18, valign: 'middle' });
      s('rect', { x: 200, y: y, width: 576, height: rowH - 12, rx: 3, 'class': 'area' }, g);
      dual(g, 216, y + (rowH - 12) / 2 + 5, p.slot, p.ex, { size: 14.5, cls: 'body', max: 66, valign: 'middle' });
    });
  };

  /* Rising tiers, left to right, with a feature list per tier */
  R.tiers = function (svg, d) {
    var base = 430, w = 214, gap = 34, x0 = 40;
    d.tiers.forEach(function (t, i) {
      var x = x0 + i * (w + gap), h = t.height, y = base - h, g = step(svg, t.step);
      s('rect', { x: x, y: y, width: w, height: h, rx: 3, 'class': 'area' }, g);
      text(g, x + 16, y + 30, t.title, { size: 19, cls: 'title' });
      dual(g, x + 16, y + 54, t.sub, t.subEx, { size: 14.5, cls: 'pen-text strong', max: 26 });
      dual(g, x + 16, y + 82, t.items, t.itemsEx, { size: 13, cls: 'body', max: 27, lh: 1.4 });
    });
    if (d.note) {
      var k = step(svg, d.note.step), t = d.tiers[d.note.at], x = x0 + d.note.at * (w + gap);
      s('rect', { x: x - 5, y: base - t.height - 5, width: w + 10, height: t.height + 10, rx: 6, 'class': 'pen draw', pathLength: 1 }, k);
      dual(k, x + w / 2, base - t.height - 16, d.note.label, d.note.ex, { anchor: 'middle', size: 14, cls: 'pen-text strong halo' });
    }
  };

  function mount(container, spec, opts) {
    opts = opts || {};
    var svg = s('svg', { viewBox: spec.viewBox, role: 'img', 'aria-label': spec.alt, 'class': 'diagram' });
    container.appendChild(svg);
    R[spec.type](svg, spec);
    var groups = [].slice.call(svg.querySelectorAll('[data-step]'));
    function set(i) {
      groups.forEach(function (g) {
        var k = +g.getAttribute('data-step');
        g.classList.toggle('on', k <= i);
        g.classList.toggle('now', k === i);
      });
    }
    set(opts.step || 0);
    return { set: set };
  }

  function player(root) {
    var data = JSON.parse(document.getElementById('fw-data').textContent);
    var diagram = mount(root.querySelector('.stage'), data.diagram);
    var n = data.stepCount, i = 0, timer = null, DUR = 4200;
    var items = [].slice.call(root.querySelectorAll('.steps li'));
    var q = function (sel) { return root.querySelector(sel); };
    var bPlay = q('[data-act=play]'), bPrev = q('[data-act=prev]'), bNext = q('[data-act=next]'), bRestart = q('[data-act=restart]');
    var counter = q('.counter'), live = q('.live');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function go(k) {
      i = Math.max(0, Math.min(n, k));
      diagram.set(i);
      items.forEach(function (li, j) {
        li.classList.toggle('done', j + 1 < i);
        li.classList.toggle('current', j + 1 === i);
        if (j + 1 === i) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current');
      });
      counter.textContent = i ? 'Step ' + i + ' of ' + n : n + ' steps';
      bPrev.disabled = i <= 1;
      bNext.disabled = i >= n;
      live.textContent = i ? items[i - 1].querySelector('.t').textContent : '';
    }
    function stop() { clearInterval(timer); timer = null; bPlay.textContent = i >= n ? 'Replay' : 'Play'; bPlay.setAttribute('aria-pressed', 'false'); }
    function play() {
      if (i >= n) go(0);
      clearInterval(timer);
      bPlay.textContent = 'Pause'; bPlay.setAttribute('aria-pressed', 'true');
      var tick = function () { go(i + 1); if (i >= n) stop(); };
      tick();
      timer = setInterval(tick, DUR);
    }
    bPlay.addEventListener('click', function () { timer ? stop() : play(); });
    bNext.addEventListener('click', function () { stop(); go(i + 1); stop(); });
    bPrev.addEventListener('click', function () { stop(); go(i - 1); stop(); });
    bRestart.addEventListener('click', function () { stop(); go(0); play(); });
    items.forEach(function (li, j) {
      li.querySelector('button').addEventListener('click', function () { stop(); go(j + 1); stop(); });
    });

    [].forEach.call(document.querySelectorAll('[data-mode]'), function (b) {
      b.addEventListener('click', function () {
        var ex = b.getAttribute('data-mode') === 'example';
        document.body.classList.toggle('is-example', ex);
        [].forEach.call(document.querySelectorAll('[data-mode]'), function (o) { o.setAttribute('aria-pressed', String(o === b)); });
      });
    });

    var copy = document.querySelector('[data-act=copy]');
    if (copy) copy.addEventListener('click', function () {
      var t = document.querySelector('.template pre').textContent;
      try {
        navigator.clipboard.writeText(t).then(function () { copy.textContent = 'Copied'; }, function () { copy.textContent = 'Select the text to copy'; });
      } catch (e) { copy.textContent = 'Select the text to copy'; }
      setTimeout(function () { copy.textContent = 'Copy template'; }, 2400);
    });

    if (reduce) { go(n); stop(); return; }
    go(0); stop();
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        if (es[0].isIntersecting) { io.disconnect(); setTimeout(play, 500); }
      }, { threshold: 0.5 });
      io.observe(root.querySelector('.sheet'));
    } else play();
  }

  function thumbs() {
    var el = document.getElementById('thumb-data');
    if (!el) return;
    var all = JSON.parse(el.textContent);
    [].forEach.call(document.querySelectorAll('[data-thumb]'), function (t) {
      var spec = all[t.getAttribute('data-thumb')];
      mount(t, spec.diagram, { step: spec.stepCount + 1 });
    });
  }

  function hero() {
    var el = document.getElementById('hero-data');
    if (!el) return;
    var list = JSON.parse(el.textContent), stage = document.querySelector('.hero-stage'), cap = document.querySelector('.hero-caption');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches, k = 0;
    function show() {
      var f = list[k % list.length]; k++;
      stage.innerHTML = ''; stage.classList.remove('out');
      var d = mount(stage, f.diagram, { step: 0 });
      cap.innerHTML = 'Now drawing: <a href="' + f.slug + '.html"></a>';
      cap.querySelector('a').textContent = f.name;
      if (reduce) { d.set(f.stepCount + 1); return; }
      var i = 0, t = setInterval(function () {
        i++; d.set(i);
        if (i >= f.stepCount) {
          clearInterval(t);
          setTimeout(function () { d.set(f.stepCount + 1); }, 900);
          setTimeout(function () { stage.classList.add('out'); }, 3400);
          setTimeout(show, 3900);
        }
      }, 800);
    }
    show();
  }

  document.addEventListener('DOMContentLoaded', function () {
    var p = document.querySelector('.player');
    if (p) player(p);
    thumbs();
    hero();
  });
})();
