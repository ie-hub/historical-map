/* Learning Atlas — Mathematics · learning map (focused-unit model).
   Instead of one endless horizontal plane, the map shows ONE grade at a time as
   a compact dependency graph that fits the screen (focus mode), plus a zoomed-out
   grid of every grade as progress cards (overview mode). The sidebar drives which
   grade is in focus; this stays a pure view over MATH.Graph + the progress store.

   Exposes window.MATH.Map: mount(host, opts) -> {
     render, focusGrade(g), grade(), mode(), setMode('focus'|'overview'),
     grades(), destroy
   }.  opts: onOpen(id), onLocked(c,missing), onSoon(c), onFocusChange(grade,mode) */
(function () {
  const MATH = (window.MATH = window.MATH || {});
  const U = MATH.util, Graph = MATH.Graph, Store = MATH.Store;

  const COL_W = 228, NODE_W = 194, NODE_H = 84, GAP_Y = 24, PAD = 40, TOPGAP = 20;

  function mount(host, opts) {
    opts = opts || {};
    host.classList.add('m-map-host');
    host.innerHTML = `<div class="m-map-scroll" id="m-map-scroll">
      <div class="m-map-inner" id="m-map-inner">
        <svg class="m-map-edges" id="m-map-edges"></svg>
        <div class="m-map-nodes" id="m-map-nodes"></div>
      </div></div>
      <div class="m-overview" id="m-overview"></div>`;
    const scrollEl = host.querySelector('#m-map-scroll');
    const inner = host.querySelector('#m-map-inner');
    const edgesSvg = host.querySelector('#m-map-edges');
    const nodesEl = host.querySelector('#m-map-nodes');
    const overviewEl = host.querySelector('#m-overview');

    let mode = 'focus';
    let focus = null;              // current grade
    let layout = {};

    function grades() { return Graph.GRADES.filter(g => Graph.all().some(c => c.grade === g)); }
    function gradeLabel(g) { return g.length <= 2 ? 'Grade ' + g : g; }
    function defaultGrade() {
      const rec = Graph.recommended();
      if (rec) return rec.grade;
      const gs = grades();
      return gs.find(g => Graph.all().some(c => c.grade === g && Graph.status(c.id) === 'available')) || gs[0];
    }

    function render() {
      if (!focus || !grades().includes(focus)) focus = defaultGrade();
      host.classList.toggle('is-overview', mode === 'overview');
      if (mode === 'overview') renderOverview(); else renderFocus();
      if (opts.onFocusChange) opts.onFocusChange(focus, mode);
    }

    /* ---- focus: one grade as strand swim-lanes ------------------------------
       One row per strand, cards ordered left→right by prerequisite depth (long
       lanes wrap). The lane label carries the strand colour, so position and
       colour both mean something. Intro concepts get their own unlabelled lane
       at the very top.                                                          */
    function renderFocus() {
      const concepts = Graph.all().filter(c => c.grade === focus);
      const inGrade = new Set(concepts.map(c => c.id));

      // depth = longest prerequisite chain *within this grade* → order in lane
      const depthCache = {};
      function depth(id, seen) {
        if (depthCache[id] != null) return depthCache[id];
        seen = seen || new Set(); if (seen.has(id)) return 0; seen.add(id);
        const c = Graph.get(id); if (!c) return 0;
        const pre = (c.prereqs || []).filter(p => inGrade.has(p));
        const d = pre.length ? 1 + Math.max.apply(null, pre.map(p => depth(p, seen))) : 0;
        return (depthCache[id] = d);
      }

      // lanes: intro first, then strands in the order they appear in the data
      const lanes = [], byKey = {};
      concepts.forEach(c => {
        const key = c.intro ? '__start' : (c.strand || 'General');
        let lane = byKey[key];
        if (!lane) { lane = byKey[key] = { key, label: c.intro ? '' : (c.strand || 'General'), items: [] }; lanes.push(lane); }
        lane.items.push(c);
      });
      const si = lanes.findIndex(l => l.key === '__start');
      if (si > 0) lanes.unshift(lanes.splice(si, 1)[0]);
      lanes.forEach(l => l.items.sort((a, b) => depth(a.id) - depth(b.id)));

      // wrap lanes to the stage width, so the map only ever scrolls vertically
      const avail = scrollEl.clientWidth || 1400;
      const MAXCOL = Math.max(3, Math.floor((avail - PAD * 2) / COL_W));
      const LABEL_H = 24, LANE_GAP = 22;
      layout = {}; nodesEl.innerHTML = '';
      let y = PAD, maxCols = 1;
      lanes.forEach(lane => {
        if (lane.label) {
          const lab = document.createElement('div');
          lab.className = 'm-lane-label';
          lab.textContent = lane.label;
          lab.style.cssText = `position:absolute;left:${PAD + 2}px;top:${y}px;` +
            `font-family:var(--ui);font-size:11px;font-weight:700;letter-spacing:.09em;` +
            `text-transform:uppercase;color:var(--s-${slug(lane.label)},var(--muted));pointer-events:none`;
          nodesEl.appendChild(lab);
          y += LABEL_H;
        }
        lane.items.forEach((c, i) => {
          const col = i % MAXCOL, row = Math.floor(i / MAXCOL);
          const x = PAD + col * COL_W;
          const ny = y + row * (NODE_H + GAP_Y);
          layout[c.id] = { x: x + NODE_W / 2, y: ny + NODE_H / 2, left: x, top: ny };
          nodesEl.appendChild(nodeEl(c, x, ny));
          maxCols = Math.max(maxCols, col + 1);
        });
        const rows = Math.ceil(lane.items.length / MAXCOL);
        y += rows * (NODE_H + GAP_Y) + LANE_GAP;
      });

      const w = PAD * 2 + maxCols * COL_W - (COL_W - NODE_W);
      const h = y - LANE_GAP + PAD;
      inner.style.width = w + 'px'; inner.style.height = h + 'px';
      edgesSvg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      edgesSvg.setAttribute('width', w); edgesSvg.setAttribute('height', h);
      drawEdges(inGrade);
      // centre when it fits; otherwise let it scroll from the start
      inner.style.margin = (w <= scrollEl.clientWidth && h <= scrollEl.clientHeight) ? 'auto' : '0 auto';
    }

    function nodeEl(c, x, y) {
      const st = Graph.status(c.id);
      const rec = Store.concept(c.id);
      const stars = rec ? rec.stars : 0;
      const n = U.el('button', 'm-node st-' + st + ' strand-' + slug(c.strand) + (c.intro ? ' is-intro' : ''));
      n.dataset.cid = c.id;
      n.style.left = x + 'px'; n.style.top = y + 'px';
      n.style.width = NODE_W + 'px'; n.style.height = NODE_H + 'px';
      const lock = st === 'locked' ? '<span class="m-node-lock">' + ((window.Atlas && Atlas.icon) ? Atlas.icon('lock', 12) : '🔒') + '</span>' : '';
      const starRow = (st === 'mastered' || st === 'review')
        ? `<span class="m-node-stars">${U.range(3).map(i => `<span class="${i < stars ? 'on' : ''}">★</span>`).join('')}</span>` : '';
      const badge = st === 'mastered' ? '✓' : st === 'review' ? '↻' : st === 'available' ? '▶' : st === 'ready-soon' ? '…' : '';
      n.innerHTML = `<span class="m-node-top"><span class="m-node-name">${c.name}</span>${lock}</span>
        <span class="m-node-bot"><span class="m-node-blurb">${c.blurb || ''}</span></span>
        ${starRow}<span class="m-node-badge">${badge}</span>`;
      n.title = c.blurb || c.name;
      if (st === 'locked') {
        const missing = (c.prereqs || []).filter(p => !Store.isMastered(p)).map(p => (Graph.get(p) || {}).name).filter(Boolean);
        n.onclick = () => opts.onLocked && opts.onLocked(c, missing);
        n.setAttribute('aria-disabled', 'true');
      } else if (st === 'ready-soon') {
        n.onclick = () => opts.onSoon && opts.onSoon(c);
      } else {
        n.onclick = () => opts.onOpen && opts.onOpen(c.id);
      }
      return n;
    }

    function drawEdges(inGrade) {
      const parts = [];
      Graph.all().forEach(c => {
        const to = layout[c.id]; if (!to) return;
        (c.prereqs || []).forEach(p => {
          if (!inGrade.has(p)) return;              // only within-grade edges in focus mode
          const from = layout[p]; if (!from) return;
          const met = Store.isMastered(p);
          const x1 = from.x + NODE_W / 2, y1 = from.y, x2 = to.x - NODE_W / 2, y2 = to.y;
          const mx = (x1 + x2) / 2;
          parts.push(`<path d="M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}" class="m-edge ${met ? 'met' : ''}"/>`);
        });
      });
      edgesSvg.innerHTML = parts.join('');
    }

    /* ---- overview: every grade as a progress card ------------------------- */
    function renderOverview() {
      overviewEl.innerHTML = grades().map(g => {
        const cs = Graph.all().filter(c => c.grade === g);
        const total = cs.length;
        const mastered = cs.filter(c => Store.isMastered(c.id)).length;
        const available = cs.some(c => Graph.status(c.id) === 'available');
        const gLocked = Graph.gradeLocked && Graph.gradeLocked(g);
        const pct = total ? Math.round(mastered / total * 100) : 0;
        const strands = Array.from(new Set(cs.map(c => c.strand))).slice(0, 3).join(' · ');
        const state = gLocked ? 'locked' : mastered === total ? 'done' : available || mastered ? 'now' : 'locked';
        const badge = state === 'done' ? '<span class="badge badge-good">Complete</span>'
          : state === 'now' ? '<span class="badge badge-accent">In progress</span>'
            : '<span class="badge">Locked</span>';
        const dots = cs.map(c => {
          const s = Graph.status(c.id);
          return `<i class="${Store.isMastered(c.id) ? 'on' : s === 'available' ? 'cur' : ''}"></i>`;
        }).join('');
        return `<button class="m-ucard" data-grade="${g}">
          <div class="m-ucard-top"><h3>${gradeLabel(g)}</h3>${badge}</div>
          <div class="m-ucard-meta">${total} concepts${strands ? ' · ' + strands : ''}</div>
          <div class="m-ucard-mini">${dots}</div>
          <div class="m-ucard-foot"><span class="progress" style="flex:1"><span style="width:${pct}%"></span></span><b>${pct}%</b></div>
        </button>`;
      }).join('');
      overviewEl.querySelectorAll('[data-grade]').forEach(b => b.onclick = () => { focus = b.dataset.grade; setMode('focus'); });
    }

    function slug(s) { return (s || '').toLowerCase().replace(/[^a-z]/g, ''); }

    function focusGrade(g) { if (grades().includes(g)) { focus = g; mode = 'focus'; render(); } }
    function setMode(m) { mode = m; render(); }

    const off = Store.onChange(() => render());
    // re-wrap the lanes when the stage width changes
    let rsT = null;
    const onResize = () => { clearTimeout(rsT); rsT = setTimeout(render, 150); };
    window.addEventListener('resize', onResize);
    render();
    return {
      render, focusGrade, grade: () => focus, mode: () => mode, setMode,
      grades, destroy() { off(); window.removeEventListener('resize', onResize); }
    };
  }

  MATH.Map = { mount };
})();
