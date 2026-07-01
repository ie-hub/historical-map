/* Learning Atlas — Mathematics · reusable interactive components.
   Lessons don't build interactions from scratch; they name a component and pass
   a small config. Each component is a manipulative a learner *does something*
   with — never a wall of text. One contract:

     MATH.Components.register(name, { title, mount(host, config, ctx) })

   ctx (provided by the lesson player):
     ctx.attempt(ok)        record one try (drives accuracy + mastery)
     ctx.solved()           the activity's goal is complete → learner may advance
     ctx.feedback(msg, kind) show a short line ('ok' | 'no' | '')
     ctx.progress(done,tot) optional round counter
     ctx.difficulty         'easy' | 'medium' | 'challenge'
     ctx.count(name)        tally a favourite-activity interaction

   mount() may return { destroy() } for cleanup. Exposes window.MATH.Components. */
(function () {
  const MATH = (window.MATH = window.MATH || {});

  /* ---------- tiny helpers ---------- */
  const U = MATH.util = {
    el(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; },
    rand(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; },
    pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; },
    shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; },
    range(n) { return Array.from({ length: n }, (_, i) => i); },
    // simple inline shape SVGs used by several components
    shape(name, fill) {
      fill = fill || 'var(--m-accent)';
      const s = { viewBox: '0 0 40 40' };
      const m = {
        circle: `<circle cx="20" cy="20" r="16" fill="${fill}"/>`,
        square: `<rect x="5" y="5" width="30" height="30" rx="3" fill="${fill}"/>`,
        triangle: `<polygon points="20,4 37,36 3,36" fill="${fill}"/>`,
        rectangle: `<rect x="3" y="10" width="34" height="20" rx="3" fill="${fill}"/>`,
        star: `<polygon points="20,3 24.7,15.5 38,15.5 27.5,23.5 31.5,36 20,28 8.5,36 12.5,23.5 2,15.5 15.3,15.5" fill="${fill}"/>`,
        diamond: `<polygon points="20,3 37,20 20,37 3,20" fill="${fill}"/>`,
        hexagon: `<polygon points="12,5 28,5 37,20 28,35 12,35 3,20" fill="${fill}"/>`,
        pentagon: `<polygon points="20,3 37,16 30,37 10,37 3,16" fill="${fill}"/>`
      };
      return `<svg viewBox="${s.viewBox}" class="m-shape" aria-hidden="true">${m[name] || m.circle}</svg>`;
    }
  };

  const REG = {};
  MATH.Components = {
    register(name, def) { REG[name] = def; },
    get(name) { return REG[name]; },
    has(name) { return !!REG[name]; },
    list() { return Object.keys(REG); }
  };
  const R = MATH.Components.register.bind(MATH.Components);

  /* A shared "check answer" numeric field used by several components. */
  function answerField(host, { label, onCheck, placeholder }) {
    const wrap = U.el('div', 'm-answer');
    wrap.innerHTML = `<label class="m-answer-lab">${label || 'How many?'}</label>
      <input class="m-input" type="number" inputmode="numeric" placeholder="${placeholder || '?'}" aria-label="${label || 'Answer'}">
      <button class="m-btn m-check">Check</button>`;
    host.appendChild(wrap);
    const input = wrap.querySelector('input'), btn = wrap.querySelector('.m-check');
    const fire = () => onCheck(input.value.trim(), input);
    btn.onclick = fire;
    input.addEventListener('keydown', e => { if (e.key === 'Enter') fire(); });
    return { input, btn, focus: () => input.focus() };
  }

  /* ============================================================= COUNTER ===
     Tap each object to count it, then say how many. K counting.
     config: { emoji, min, max, rounds, prompt }                              */
  R('counter', { title: 'Count the objects', mount(host, cfg, ctx) {
    cfg = Object.assign({ emoji: '🍎', min: 3, max: 9, rounds: 3 }, cfg);
    let round = 0, target = 0;
    const stage = U.el('div', 'm-counter'); host.appendChild(stage);
    const info = U.el('p', 'm-prompt'); host.insertBefore(info, stage);
    function newRound() {
      target = U.rand(cfg.min, cfg.max);
      let tapped = 0;
      info.textContent = cfg.prompt || `Tap each ${cfg.emoji} to count them, then type how many.`;
      stage.innerHTML = '';
      const grid = U.el('div', 'm-obj-grid');
      U.range(target).forEach(() => {
        const b = U.el('button', 'm-obj', cfg.emoji);
        b.setAttribute('aria-label', 'object, tap to count');
        b.onclick = () => { if (b.classList.contains('on')) return; b.classList.add('on'); tapped++; tally.textContent = tapped; ctx.count('counter'); };
        grid.appendChild(b);
      });
      stage.appendChild(grid);
      const tally = U.el('div', 'm-tally', '0'); stage.appendChild(tally);
      const af = answerField(stage, { label: 'How many?', onCheck(v) {
        const ok = +v === target;
        ctx.attempt(ok);
        ctx.feedback(ok ? `Yes — ${target}! 🎉` : `Count again — tap each one.`, ok ? 'ok' : 'no');
        if (ok) { round++; ctx.progress(round, cfg.rounds); if (round >= cfg.rounds) ctx.solved(); else setTimeout(newRound, 800); }
      } });
      af.focus();
    }
    ctx.progress(0, cfg.rounds); newRound();
  } });

  /* ============================================================ TEN FRAME ===
     Fill a ten-frame to a target, or model addition within 20 on two frames.
     config: { mode:'fill'|'add', target, a, b, rounds, max }                 */
  R('tenFrame', { title: 'Ten frame', mount(host, cfg, ctx) {
    cfg = Object.assign({ mode: 'fill', rounds: 3, max: 10 }, cfg);
    let round = 0;
    const info = U.el('p', 'm-prompt'); host.appendChild(info);
    const stage = U.el('div', 'm-tf-stage'); host.appendChild(stage);

    function frame(n, fillClass) {
      const f = U.el('div', 'm-tenframe');
      U.range(10).forEach(i => { const c = U.el('button', 'm-tf-cell'); if (i < n) c.classList.add('filled', fillClass || ''); c.dataset.i = i; f.appendChild(c); });
      return f;
    }
    function newRound() {
      stage.innerHTML = '';
      if (cfg.mode === 'add') {
        const a = cfg.a != null ? cfg.a : U.rand(1, 5), b = cfg.b != null ? cfg.b : U.rand(1, 5);
        info.innerHTML = `Fill the frames to show <b>${a} + ${b}</b>, then type the total.`;
        const wrap = U.el('div', 'm-tf-two');
        const fa = frame(0, 'a'), fb = frame(0, 'b');
        wrap.append(fa, U.el('span', 'm-plus', '+'), fb); stage.appendChild(wrap);
        let ca = 0, cb = 0;
        const paint = () => { fa.querySelectorAll('.m-tf-cell').forEach((c, i) => c.classList.toggle('filled', i < ca)); fb.querySelectorAll('.m-tf-cell').forEach((c, i) => c.classList.toggle('filled', i < cb)); };
        fa.onclick = e => { const c = e.target.closest('.m-tf-cell'); if (!c) return; ca = +c.dataset.i + 1; paint(); ctx.count('tenFrame'); };
        fb.onclick = e => { const c = e.target.closest('.m-tf-cell'); if (!c) return; cb = +c.dataset.i + 1; paint(); ctx.count('tenFrame'); };
        answerField(stage, { label: `${a} + ${b} =`, onCheck(v) {
          const modelled = ca === a && cb === b, ok = +v === a + b && modelled;
          ctx.attempt(+v === a + b);
          ctx.feedback(ok ? `${a} + ${b} = ${a + b}. Nice!` : (!modelled ? 'Fill the frames to match first.' : 'Not the total — count all the filled boxes.'), ok ? 'ok' : 'no');
          if (ok) { round++; ctx.progress(round, cfg.rounds); if (round >= cfg.rounds) ctx.solved(); else setTimeout(newRound, 800); }
        } });
      } else {
        const target = cfg.target != null ? cfg.target : U.rand(3, cfg.max);
        info.innerHTML = `Click boxes to show <b>${target}</b>.`;
        const f = frame(0); stage.appendChild(f);
        let filled = 0;
        f.onclick = e => { const c = e.target.closest('.m-tf-cell'); if (!c) return; filled = +c.dataset.i + 1; f.querySelectorAll('.m-tf-cell').forEach((cc, i) => cc.classList.toggle('filled', i < filled)); ctx.count('tenFrame');
          const ok = filled === target; ctx.feedback(ok ? `That's ${target}!` : '', ok ? 'ok' : '');
          if (ok) { ctx.attempt(true); round++; ctx.progress(round, cfg.rounds); if (round >= cfg.rounds) ctx.solved(); else setTimeout(newRound, 700); } };
      }
    }
    ctx.progress(0, cfg.rounds); newRound();
  } });

  /* ========================================================== NUMBER LINE ===
     mode 'place'  — drag/click the marker to a target value.
     mode 'jump'   — start at s and make equal jumps of k; where do you land?
     config: { min, max, step, mode, rounds }                                 */
  R('numberLine', { title: 'Number line', mount(host, cfg, ctx) {
    cfg = Object.assign({ min: 0, max: 10, step: 1, mode: 'place', rounds: 3 }, cfg);
    let round = 0;
    const info = U.el('p', 'm-prompt'); host.appendChild(info);
    const stage = U.el('div', 'm-nl-stage'); host.appendChild(stage);
    const N = Math.round((cfg.max - cfg.min) / cfg.step);

    function build(marks) {
      stage.innerHTML = '';
      const line = U.el('div', 'm-nl'); const track = U.el('div', 'm-nl-track'); line.appendChild(track);
      for (let i = 0; i <= N; i++) {
        const v = cfg.min + i * cfg.step, x = (i / N) * 100;
        const t = U.el('button', 'm-nl-tick'); t.style.left = x + '%'; t.dataset.v = v;
        t.innerHTML = `<span class="m-nl-num">${v}</span>`; t.setAttribute('aria-label', 'point ' + v);
        line.appendChild(t);
      }
      (marks || []).forEach(mk => { const m = U.el('div', 'm-nl-mark ' + (mk.cls || '')); m.style.left = ((mk.v - cfg.min) / (cfg.max - cfg.min)) * 100 + '%'; m.innerHTML = mk.label || ''; line.appendChild(m); });
      stage.appendChild(line);
      return line;
    }
    function newRound() {
      if (cfg.mode === 'jump') {
        const k = U.pick([2, 3, 5].filter(x => x <= cfg.max)), s = 0;
        const jumps = U.rand(2, Math.min(4, Math.floor(cfg.max / k)));
        const target = s + k * jumps;
        info.innerHTML = `Start at 0. Make <b>${jumps} jumps of ${k}</b>. Where do you land?`;
        const line = build([{ v: s, cls: 'start', label: 'start' }]);
        // draw the jump arcs as the learner clicks the landing ticks in order
        let at = 0, done = 0;
        line.addEventListener('click', e => { const t = e.target.closest('.m-nl-tick'); if (!t) return; const v = +t.dataset.v;
          if (v === at + k) { at = v; done++; ctx.count('numberLine'); const m = U.el('div', 'm-nl-hop'); m.style.left = ((v - cfg.min) / (cfg.max - cfg.min)) * 100 + '%'; line.appendChild(m); t.classList.add('landed');
            if (done === jumps) { ctx.attempt(true); ctx.feedback(`${jumps} jumps of ${k} lands on ${target}. That's ${k}×${jumps}!`, 'ok'); round++; ctx.progress(round, cfg.rounds); if (round >= cfg.rounds) setTimeout(ctx.solved, 500); else setTimeout(newRound, 1000); } }
          else { ctx.attempt(false); ctx.feedback(`Jump by ${k} each time — next landing is ${at + k}.`, 'no'); } });
      } else {
        const target = cfg.min + U.rand(1, N - 1) * cfg.step;
        info.innerHTML = `Click the number line at <b>${target}</b>.`;
        const line = build();
        line.addEventListener('click', e => { const t = e.target.closest('.m-nl-tick'); if (!t) return; const v = +t.dataset.v; const ok = v === target; ctx.attempt(ok); ctx.count('numberLine');
          line.querySelectorAll('.m-nl-tick').forEach(x => x.classList.remove('chosen')); t.classList.add(ok ? 'landed' : 'wrong');
          ctx.feedback(ok ? `Right on ${target}!` : `That's ${v}. Look for ${target}.`, ok ? 'ok' : 'no');
          if (ok) { round++; ctx.progress(round, cfg.rounds); if (round >= cfg.rounds) setTimeout(ctx.solved, 500); else setTimeout(newRound, 800); } });
      }
    }
    ctx.progress(0, cfg.rounds); newRound();
  } });

  /* ============================================================== COMPARE ===
     Two groups of objects — choose <, = or >. config: { rounds, max, emoji } */
  R('compare', { title: 'Which is more?', mount(host, cfg, ctx) {
    cfg = Object.assign({ rounds: 4, max: 9, emoji: '⭐' }, cfg);
    let round = 0;
    const info = U.el('p', 'm-prompt', 'Compare the two groups. Pick the sign that makes it true.'); host.appendChild(info);
    const stage = U.el('div', 'm-compare'); host.appendChild(stage);
    function newRound() {
      const a = U.rand(1, cfg.max), b = U.rand(1, cfg.max);
      const right = a > b ? '>' : a < b ? '<' : '=';
      stage.innerHTML = `
        <div class="m-grp"><div class="m-grp-objs">${U.range(a).map(() => `<span>${cfg.emoji}</span>`).join('')}</div><div class="m-grp-n">${a}</div></div>
        <div class="m-signs">${['<', '=', '>'].map(s => `<button class="m-btn m-sign" data-s="${s}">${s}</button>`).join('')}</div>
        <div class="m-grp"><div class="m-grp-objs">${U.range(b).map(() => `<span>${cfg.emoji}</span>`).join('')}</div><div class="m-grp-n">${b}</div></div>`;
      stage.querySelectorAll('.m-sign').forEach(btn => btn.onclick = () => {
        const ok = btn.dataset.s === right; ctx.attempt(ok); ctx.count('compare');
        stage.querySelectorAll('.m-sign').forEach(b2 => b2.classList.toggle('picked', b2 === btn));
        ctx.feedback(ok ? `${a} ${right} ${b} — correct!` : `Count again: ${a} vs ${b}.`, ok ? 'ok' : 'no');
        if (ok) { round++; ctx.progress(round, cfg.rounds); if (round >= cfg.rounds) setTimeout(ctx.solved, 500); else setTimeout(newRound, 800); }
      });
    }
    ctx.progress(0, cfg.rounds); newRound();
  } });

  /* ============================================================== PATTERN ===
     A repeating pattern with the last item hidden — pick what comes next.
     config: { rounds }                                                        */
  R('pattern', { title: 'What comes next?', mount(host, cfg, ctx) {
    cfg = Object.assign({ rounds: 4 }, cfg);
    const SHAPES = ['circle', 'square', 'triangle', 'star', 'diamond', 'hexagon'];
    const COLORS = ['var(--m-accent)', 'var(--m-2)', 'var(--m-3)', 'var(--m-4)'];
    let round = 0;
    const info = U.el('p', 'm-prompt', 'Study the pattern, then pick what comes next.'); host.appendChild(info);
    const stage = U.el('div', 'm-pattern'); host.appendChild(stage);
    function newRound() {
      const unit = U.shuffle(SHAPES).slice(0, U.rand(2, 3)).map(s => ({ s, c: U.pick(COLORS) }));
      const len = unit.length * U.rand(2, 3) + U.rand(0, unit.length - 1);
      const seq = U.range(len).map(i => unit[i % unit.length]);
      const answer = unit[len % unit.length];
      const shown = seq.map(x => `<span class="m-pat-item">${U.shape(x.s, x.c)}</span>`).join('');
      const opts = U.shuffle([answer, ...U.shuffle(unit.concat(SHAPES.map(s => ({ s, c: U.pick(COLORS) })))).filter(o => !(o.s === answer.s && o.c === answer.c)).slice(0, 2)]);
      stage.innerHTML = `<div class="m-pat-seq">${shown}<span class="m-pat-item m-pat-q">?</span></div>
        <div class="m-pat-opts">${opts.map((o, i) => `<button class="m-pat-opt" data-i="${i}">${U.shape(o.s, o.c)}</button>`).join('')}</div>`;
      stage.querySelectorAll('.m-pat-opt').forEach((btn, i) => btn.onclick = () => {
        const o = opts[i], ok = o.s === answer.s && o.c === answer.c; ctx.attempt(ok); ctx.count('pattern');
        ctx.feedback(ok ? 'Yes — the pattern repeats!' : 'Look at how the shapes repeat and try again.', ok ? 'ok' : 'no');
        if (ok) { stage.querySelector('.m-pat-q').innerHTML = U.shape(answer.s, answer.c); round++; ctx.progress(round, cfg.rounds); if (round >= cfg.rounds) setTimeout(ctx.solved, 600); else setTimeout(newRound, 900); }
      });
    }
    ctx.progress(0, cfg.rounds); newRound();
  } });

  /* ============================================================ SHAPE SORT ===
     Tap a shape, then tap the bin it belongs in (by name). config: { rounds } */
  R('shapeSort', { title: 'Sort the shapes', mount(host, cfg, ctx) {
    const KINDS = cfg && cfg.kinds ? cfg.kinds : ['circle', 'square', 'triangle', 'star'];
    cfg = Object.assign({ rounds: 6 }, cfg);
    let round = 0, sel = null;
    const info = U.el('p', 'm-prompt', 'Tap a shape, then tap the matching bin.'); host.appendChild(info);
    const tray = U.el('div', 'm-tray'); host.appendChild(tray);
    const bins = U.el('div', 'm-bins'); host.appendChild(bins);
    bins.innerHTML = KINDS.map(k => `<button class="m-bin" data-k="${k}">${U.shape(k, 'var(--m-faint)')}<span>${k}</span></button>`).join('');
    function newRound() {
      const k = U.pick(KINDS); sel = k;
      tray.innerHTML = `<button class="m-tray-shape" data-k="${k}">${U.shape(k)}</button>`;
      tray.querySelector('.m-tray-shape').classList.add('picked');
    }
    bins.querySelectorAll('.m-bin').forEach(bin => bin.onclick = () => {
      if (!sel) return; const ok = bin.dataset.k === sel; ctx.attempt(ok); ctx.count('shapeSort');
      ctx.feedback(ok ? `Yes — that's a ${sel}.` : `That bin is for ${bin.dataset.k}s. Try again.`, ok ? 'ok' : 'no');
      if (ok) { bin.classList.add('flash'); setTimeout(() => bin.classList.remove('flash'), 400); round++; ctx.progress(round, cfg.rounds); if (round >= cfg.rounds) setTimeout(ctx.solved, 500); else newRound(); }
    });
    ctx.progress(0, cfg.rounds); newRound();
  } });

  /* ========================================================== ARRAY BUILDER ===
     Click a grid to build rows×cols; used for multiplication & area.
     config: { rows, cols, rounds, mode:'multiply'|'area' }                    */
  R('arrayBuilder', { title: 'Array builder', mount(host, cfg, ctx) {
    cfg = Object.assign({ rounds: 3, mode: 'multiply', maxR: 5, maxC: 5 }, cfg);
    let round = 0;
    const info = U.el('p', 'm-prompt'); host.appendChild(info);
    const stage = U.el('div', 'm-arr-stage'); host.appendChild(stage);
    function newRound() {
      const rows = cfg.rows != null ? cfg.rows : U.rand(2, cfg.maxR);
      const cols = cfg.cols != null ? cfg.cols : U.rand(2, cfg.maxC);
      info.innerHTML = cfg.mode === 'area'
        ? `Build a rectangle <b>${rows} × ${cols}</b>, then type its area (squares inside).`
        : `Build <b>${rows} rows of ${cols}</b>, then type how many in all.`;
      stage.innerHTML = '';
      const gridWrap = U.el('div', 'm-arr'); const MAXR = 6, MAXC = 6;
      const grid = U.el('div', 'm-arr-grid'); grid.style.gridTemplateColumns = `repeat(${MAXC}, 1fr)`;
      let selR = 0, selC = 0;
      for (let r = 0; r < MAXR; r++) for (let c = 0; c < MAXC; c++) { const cell = U.el('button', 'm-arr-cell'); cell.dataset.r = r; cell.dataset.c = c; grid.appendChild(cell); }
      const paint = () => grid.querySelectorAll('.m-arr-cell').forEach(cell => cell.classList.toggle('on', +cell.dataset.r < selR && +cell.dataset.c < selC));
      grid.onclick = e => { const cell = e.target.closest('.m-arr-cell'); if (!cell) return; selR = +cell.dataset.r + 1; selC = +cell.dataset.c + 1; paint(); ctx.count('arrayBuilder'); tag.textContent = `${selR} × ${selC}`; };
      gridWrap.appendChild(grid);
      const tag = U.el('div', 'm-arr-tag', '0 × 0'); gridWrap.appendChild(tag);
      stage.appendChild(gridWrap);
      answerField(stage, { label: cfg.mode === 'area' ? 'Area =' : `${rows} × ${cols} =`, onCheck(v) {
        const built = selR === rows && selC === cols, ok = +v === rows * cols && built;
        ctx.attempt(+v === rows * cols);
        ctx.feedback(ok ? `${rows} × ${cols} = ${rows * cols}!` : (!built ? `First build ${rows} × ${cols}.` : 'Count all the squares.'), ok ? 'ok' : 'no');
        if (ok) { round++; ctx.progress(round, cfg.rounds); if (round >= cfg.rounds) ctx.solved(); else setTimeout(newRound, 800); }
      } });
    }
    ctx.progress(0, cfg.rounds); newRound();
  } });

  /* ========================================================= FRACTION PIZZA ===
     A circle split into n equal slices — shade m to build m/n, or read a shown
     fraction. config: { rounds, mode:'build'|'read', maxDen }                 */
  R('fractionPizza', { title: 'Fraction pizza', mount(host, cfg, ctx) {
    cfg = Object.assign({ rounds: 3, mode: 'build', maxDen: 8 }, cfg);
    let round = 0;
    const info = U.el('p', 'm-prompt'); host.appendChild(info);
    const stage = U.el('div', 'm-frac-stage'); host.appendChild(stage);
    function pie(n, shaded, clickable) {
      const R0 = 90, C = 100, svg = [`<svg viewBox="0 0 200 200" class="m-pie">`];
      for (let i = 0; i < n; i++) {
        const a0 = (i / n) * 2 * Math.PI - Math.PI / 2, a1 = ((i + 1) / n) * 2 * Math.PI - Math.PI / 2;
        const x0 = C + R0 * Math.cos(a0), y0 = C + R0 * Math.sin(a0), x1 = C + R0 * Math.cos(a1), y1 = C + R0 * Math.sin(a1);
        const large = (a1 - a0) > Math.PI ? 1 : 0;
        const path = n === 1 ? `<circle cx="${C}" cy="${C}" r="${R0}"` : `<path d="M${C},${C} L${x0.toFixed(1)},${y0.toFixed(1)} A${R0},${R0} 0 ${large} 1 ${x1.toFixed(1)},${y1.toFixed(1)} Z"`;
        svg.push(`${path} class="m-slice ${shaded[i] ? 'on' : ''}" ${clickable ? `data-i="${i}"` : ''} />`);
      }
      svg.push('</svg>'); return svg.join('');
    }
    function newRound() {
      const n = U.rand(2, cfg.maxDen);
      stage.innerHTML = '';
      if (cfg.mode === 'read') {
        const m = U.rand(1, n - 1), shaded = U.shuffle(U.range(n)).slice(0, m).reduce((o, i) => (o[i] = 1, o), {});
        info.innerHTML = `What fraction of the pizza is shaded?`;
        stage.innerHTML = pie(n, shaded, false);
        answerField(stage, { label: 'Numerator (top):', placeholder: 'top', onCheck(v) {
          const ok = +v === m; ctx.attempt(ok); ctx.count('fractionPizza');
          ctx.feedback(ok ? `Yes — ${m}/${n} is shaded.` : `Count the shaded slices out of ${n}.`, ok ? 'ok' : 'no');
          if (ok) { round++; ctx.progress(round, cfg.rounds); if (round >= cfg.rounds) ctx.solved(); else setTimeout(newRound, 800); }
        } });
      } else {
        const m = U.rand(1, n - 1); const shaded = {};
        info.innerHTML = `Click slices to shade <b>${m}/${n}</b> of the pizza.`;
        const holder = U.el('div'); holder.innerHTML = pie(n, shaded, true); stage.appendChild(holder);
        const label = U.el('div', 'm-frac-label', `0/${n}`); stage.appendChild(label);
        holder.querySelector('svg').addEventListener('click', e => { const s = e.target.closest('.m-slice'); if (!s) return; const i = +s.dataset.i; shaded[i] = !shaded[i]; s.classList.toggle('on', shaded[i]); ctx.count('fractionPizza');
          const cnt = Object.values(shaded).filter(Boolean).length; label.textContent = `${cnt}/${n}`;
          if (cnt === m) { ctx.attempt(true); ctx.feedback(`That's ${m}/${n}!`, 'ok'); round++; ctx.progress(round, cfg.rounds); if (round >= cfg.rounds) setTimeout(ctx.solved, 600); else setTimeout(newRound, 900); } });
      }
    }
    ctx.progress(0, cfg.rounds); newRound();
  } });

  /* =========================================================== PLACE VALUE ===
     Compose a number from hundreds / tens / ones (base-ten blocks).
     config: { rounds, max }                                                   */
  R('placeValue', { title: 'Base-ten blocks', mount(host, cfg, ctx) {
    cfg = Object.assign({ rounds: 3, max: 999 }, cfg);
    let round = 0;
    const info = U.el('p', 'm-prompt'); host.appendChild(info);
    const stage = U.el('div', 'm-pv-stage'); host.appendChild(stage);
    function newRound() {
      const target = U.rand(cfg.max > 99 ? 100 : 11, cfg.max);
      const useH = cfg.max > 99;
      info.innerHTML = `Build <b>${target}</b> with blocks.`;
      let h = 0, t = 0, o = 0;
      const cols = [useH ? { k: 'h', v: 100, lab: 'Hundreds' } : null, { k: 't', v: 10, lab: 'Tens' }, { k: 'o', v: 1, lab: 'Ones' }].filter(Boolean);
      stage.innerHTML = `<div class="m-pv-cols">${cols.map(c => `<div class="m-pv-col" data-k="${c.k}"><div class="m-pv-lab">${c.lab}</div><div class="m-pv-stack" data-k="${c.k}"></div><div class="m-pv-ctrls"><button class="m-btn tiny" data-add="${c.k}">+</button><button class="m-btn tiny ghost" data-sub="${c.k}">−</button></div></div>`).join('')}</div><div class="m-pv-total">= <span id="m-pv-n">0</span></div>`;
      const get = k => k === 'h' ? h : k === 't' ? t : o;
      const set = (k, val) => { if (k === 'h') h = val; else if (k === 't') t = val; else o = val; };
      function draw() {
        cols.forEach(c => { const stack = stage.querySelector(`.m-pv-stack[data-k="${c.k}"]`); const n = get(c.k); stack.innerHTML = U.range(n).map(() => `<span class="m-pv-block b-${c.k}"></span>`).join(''); });
        const total = h * 100 + t * 10 + o; stage.querySelector('#m-pv-n').textContent = total;
        if (total === target) { ctx.attempt(true); ctx.count('placeValue'); ctx.feedback(`${useH ? h + ' hundreds, ' : ''}${t} tens, ${o} ones = ${target}!`, 'ok'); round++; ctx.progress(round, cfg.rounds); if (round >= cfg.rounds) setTimeout(ctx.solved, 700); else setTimeout(newRound, 1000); }
      }
      stage.querySelectorAll('[data-add]').forEach(b => b.onclick = () => { const k = b.dataset.add; if (get(k) < 12) { set(k, get(k) + 1); draw(); } });
      stage.querySelectorAll('[data-sub]').forEach(b => b.onclick = () => { const k = b.dataset.sub; if (get(k) > 0) { set(k, get(k) - 1); draw(); } });
      draw();
    }
    ctx.progress(0, cfg.rounds); newRound();
  } });

  /* ======================================================= FUNCTION MACHINE ===
     A rule turns an input into an output. Predict outputs, or infer the rule.
     config: { rounds, mode:'apply'|'infer', rules:[{label, fn}] }             */
  R('functionMachine', { title: 'Function machine', mount(host, cfg, ctx) {
    const RULES = (cfg && cfg.rules) || [
      { label: '+3', fn: x => x + 3 }, { label: '×2', fn: x => x * 2 },
      { label: '×2 + 1', fn: x => x * 2 + 1 }, { label: '−4', fn: x => x - 4 }
    ];
    cfg = Object.assign({ rounds: 4, mode: 'apply' }, cfg);
    let round = 0;
    const info = U.el('p', 'm-prompt'); host.appendChild(info);
    const stage = U.el('div', 'm-fm-stage'); host.appendChild(stage);
    function machine(ruleLabel, input, outputHtml) {
      return `<div class="m-fm">
        <div class="m-fm-io">in<br><b>${input}</b></div>
        <div class="m-fm-body"><div class="m-fm-gear">⚙️</div><div class="m-fm-rule">${ruleLabel}</div></div>
        <div class="m-fm-io out">out<br>${outputHtml}</div></div>`;
    }
    function newRound() {
      const rule = U.pick(RULES);
      if (cfg.mode === 'infer') {
        const rows = [U.rand(1, 6), U.rand(1, 6), U.rand(1, 6)].map(x => [x, rule.fn(x)]);
        info.innerHTML = `The machine follows a hidden rule. What is the output for the last input?`;
        stage.innerHTML = `<table class="m-fm-table"><tr><th>in</th><th>out</th></tr>
          ${rows.slice(0, 2).map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}
          <tr class="q"><td>${rows[2][0]}</td><td>?</td></tr></table>`;
        answerField(stage, { label: 'Output =', onCheck(v) {
          const ok = +v === rows[2][1]; ctx.attempt(ok); ctx.count('functionMachine');
          ctx.feedback(ok ? `Yes — the rule is ${rule.label}.` : `Look at how each input changes.`, ok ? 'ok' : 'no');
          if (ok) { round++; ctx.progress(round, cfg.rounds); if (round >= cfg.rounds) ctx.solved(); else setTimeout(newRound, 900); }
        } });
      } else {
        const input = U.rand(1, 9);
        info.innerHTML = `Apply the rule to the input.`;
        stage.innerHTML = machine(rule.label, input, '<b>?</b>');
        answerField(stage, { label: 'Output =', onCheck(v) {
          const ok = +v === rule.fn(input); ctx.attempt(ok); ctx.count('functionMachine');
          stage.querySelector('.m-fm-io.out').innerHTML = ok ? `out<br><b>${rule.fn(input)}</b>` : 'out<br><b>?</b>';
          ctx.feedback(ok ? `${input} → ${rule.label} → ${rule.fn(input)}` : `Apply ${rule.label} to ${input}.`, ok ? 'ok' : 'no');
          if (ok) { round++; ctx.progress(round, cfg.rounds); if (round >= cfg.rounds) ctx.solved(); else setTimeout(newRound, 900); }
        } });
      }
    }
    ctx.progress(0, cfg.rounds); newRound();
  } });

  /* ======================================================= COORDINATE PLANE ===
     Plot a point at (x,y), or name a shown point. config:{rounds,max,mode}     */
  R('coordinatePlane', { title: 'Coordinate plane', mount(host, cfg, ctx) {
    cfg = Object.assign({ rounds: 4, max: 6, mode: 'plot' }, cfg);
    let round = 0;
    const info = U.el('p', 'm-prompt'); host.appendChild(info);
    const stage = U.el('div', 'm-cp-stage'); host.appendChild(stage);
    const M = cfg.max, size = 300, pad = 26, step = (size - 2 * pad) / M;
    const px = x => pad + x * step, py = y => size - pad - y * step;
    function grid(extra) {
      const lines = [];
      for (let i = 0; i <= M; i++) { lines.push(`<line x1="${px(i)}" y1="${py(0)}" x2="${px(i)}" y2="${py(M)}" class="m-cp-grid"/>`); lines.push(`<line x1="${px(0)}" y1="${py(i)}" x2="${px(M)}" y2="${py(i)}" class="m-cp-grid"/>`); }
      lines.push(`<line x1="${px(0)}" y1="${py(0)}" x2="${px(M)}" y2="${py(0)}" class="m-cp-axis"/>`);
      lines.push(`<line x1="${px(0)}" y1="${py(0)}" x2="${px(0)}" y2="${py(M)}" class="m-cp-axis"/>`);
      for (let i = 1; i <= M; i++) { lines.push(`<text x="${px(i)}" y="${py(0) + 15}" class="m-cp-t">${i}</text>`); lines.push(`<text x="${px(0) - 12}" y="${py(i) + 4}" class="m-cp-t">${i}</text>`); }
      return `<svg viewBox="0 0 ${size} ${size}" class="m-cp">${lines.join('')}${extra || ''}</svg>`;
    }
    function newRound() {
      const tx = U.rand(1, M), ty = U.rand(1, M);
      if (cfg.mode === 'name') {
        info.innerHTML = `Name the coordinates of the point.`;
        stage.innerHTML = grid(`<circle cx="${px(tx)}" cy="${py(ty)}" r="6" class="m-cp-pt"/>`);
        answerField(stage, { label: 'Point (x, y) — type "x,y":', placeholder: 'e.g. 3,4', onCheck(v) {
          const m = v.split(/[ ,]+/).map(Number); const ok = m[0] === tx && m[1] === ty; ctx.attempt(ok); ctx.count('coordinatePlane');
          ctx.feedback(ok ? `Yes — (${tx}, ${ty}).` : `Read across (x) then up (y).`, ok ? 'ok' : 'no');
          if (ok) { round++; ctx.progress(round, cfg.rounds); if (round >= cfg.rounds) ctx.solved(); else setTimeout(newRound, 900); }
        } });
      } else {
        info.innerHTML = `Click to plot the point <b>(${tx}, ${ty})</b> — across then up.`;
        stage.innerHTML = grid('');
        const svg = stage.querySelector('svg');
        svg.addEventListener('click', e => {
          const rect = svg.getBoundingClientRect(); const sx = (e.clientX - rect.left) / rect.width * size, sy = (e.clientY - rect.top) / rect.height * size;
          const gx = Math.round((sx - pad) / step), gy = Math.round((py(0) - sy) / step); const ok = gx === tx && gy === ty;
          ctx.attempt(ok); ctx.count('coordinatePlane');
          svg.querySelectorAll('.m-cp-guess').forEach(n => n.remove());
          const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle'); dot.setAttribute('cx', px(gx)); dot.setAttribute('cy', py(gy)); dot.setAttribute('r', 6); dot.setAttribute('class', 'm-cp-guess ' + (ok ? 'ok' : 'no')); svg.appendChild(dot);
          ctx.feedback(ok ? `Perfect — (${tx}, ${ty}).` : `That's (${gx}, ${gy}). Go across ${tx}, then up ${ty}.`, ok ? 'ok' : 'no');
          if (ok) { round++; ctx.progress(round, cfg.rounds); if (round >= cfg.rounds) setTimeout(ctx.solved, 600); else setTimeout(newRound, 1000); }
        });
      }
    }
    ctx.progress(0, cfg.rounds); newRound();
  } });

  /* ============================================================ PROBLEM SET ===
     The workhorse for practice/challenge/mastery when no bespoke manipulative
     fits: numeric-entry or multiple-choice problems.
     config: { problems:[{ prompt, answer, choices? , hint }], generate?(diff) } */
  R('problemSet', { title: 'Practice', mount(host, cfg, ctx) {
    let problems = (cfg.problems || []).slice();
    if (cfg.generate) problems = cfg.generate(ctx.difficulty);
    if (!problems.length) { ctx.solved(); return; }
    let i = 0;
    const info = U.el('p', 'm-prompt'); host.appendChild(info);
    const stage = U.el('div', 'm-ps-stage'); host.appendChild(stage);
    function render() {
      const p = problems[i]; ctx.progress(i, problems.length);
      info.innerHTML = p.prompt;
      stage.innerHTML = '';
      if (p.choices) {
        const opts = U.el('div', 'm-ps-opts');
        U.shuffle(p.choices).forEach(c => { const b = U.el('button', 'm-btn m-ps-opt', String(c)); b.onclick = () => judge(String(c) === String(p.answer), b); opts.appendChild(b); });
        stage.appendChild(opts);
      } else {
        answerField(stage, { label: 'Answer:', onCheck(v) { judge(String(v).replace(/\s/g, '') === String(p.answer).replace(/\s/g, '')); } });
      }
    }
    function judge(ok, btn) {
      ctx.attempt(ok); ctx.count('problemSet');
      if (btn) stage.querySelectorAll('.m-ps-opt').forEach(b => b.classList.toggle('picked', b === btn));
      const p = problems[i];
      ctx.feedback(ok ? U.pick(['Correct!', 'Nice work!', 'Exactly!', 'You got it!']) : (p.hint || 'Not quite — give it another go.'), ok ? 'ok' : 'no');
      if (ok) { i++; if (i >= problems.length) { ctx.progress(problems.length, problems.length); setTimeout(ctx.solved, 500); } else setTimeout(render, 700); }
    }
    render();
  } });

})();
