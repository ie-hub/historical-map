/* Learning Atlas — Mathematics · app boot.
   Ties the pieces together: the learning Map (a view over the knowledge graph),
   the lesson Player, a progress panel in the shared Atlas Rail, and top-bar
   search over concepts. Two "views" swap in the stage: the map and a lesson.
   Framework-free; composes core/shell.js (Atlas.Rail, Atlas.wireMenus,
   Atlas.wireSearch).                                                           */
(function () {
  const MATH = window.MATH, Graph = MATH.Graph, Store = MATH.Store;

  let rail, player, mapView;
  const mapEl = () => Atlas.el('m-map'), lessonEl = () => Atlas.el('m-lesson');

  function showMap() {
    lessonEl().style.display = 'none'; lessonEl().innerHTML = '';
    mapEl().style.display = '';
    document.getElementById('brand-title').textContent = 'Learning Map';
    if (mapView) mapView.render();
  }
  function openLesson(conceptId) {
    const c = Graph.get(conceptId); if (!c) return;
    mapEl().style.display = 'none';
    lessonEl().style.display = '';
    document.getElementById('brand-title').textContent = c.name;
    player.start(conceptId);
    rail.close();
  }

  /* ---------------- progress panel (in the rail) ---------------- */
  function renderProgress() {
    const s = Store.summary();
    const total = Graph.all().filter(c => c.lesson).length;
    const rec = Graph.recommended();
    const review = Store.needsReview(70).map(r => Graph.get(r.id)).filter(Boolean);
    const fav = s.favourite ? (MATH.Components.get(s.favourite) || {}).title || s.favourite : null;
    const body = `
      <div class="m-prog-hero">
        <div class="m-prog-streak">${s.streakActive ? '🔥' : '☆'} <b>${s.streak}</b><span>day streak</span></div>
        <div class="m-prog-stars">★ <b>${s.stars}</b><span>stars earned</span></div>
      </div>
      <div class="m-prog-grid">
        <div><b>${s.mastered}</b><span>concepts mastered</span></div>
        <div><b>${s.completed}/${total}</b><span>lessons done</span></div>
        <div><b>${s.accuracy == null ? '—' : s.accuracy + '%'}</b><span>accuracy</span></div>
        <div><b>${s.timeMs ? Math.max(1, Math.round(s.timeMs / 60000)) + 'm' : '—'}</b><span>time learning</span></div>
      </div>
      ${rec ? `<h3>Recommended next</h3>
        <button class="m-rec" data-go="${rec.id}"><b>${rec.name}</b><span>Grade ${rec.grade} · ${rec.strand}</span></button>` : ''}
      ${review.length ? `<h3>Areas to review</h3><div class="chips">${review.map(c => `<button class="chip" data-go="${c.id}">${c.name}</button>`).join('')}</div>` : ''}
      ${fav ? `<h3>Favourite activity</h3><p class="m-fav">${fav}</p>` : ''}
      <h3>Explorer titles</h3>
      <div class="m-badges">${titles(s).map(t => `<div class="m-badge-t ${t.earned ? 'earned' : ''}"><span class="m-bt-ic">${t.icon}</span><span class="m-bt-name">${t.name}</span><span class="m-bt-req">${t.req}</span></div>`).join('')}</div>
      <button class="chip m-reset" data-reset style="margin-top:14px">Reset all progress</button>`;
    rail.update({ title: 'Your progress', kind: 'Explorer', tabs: [], body, onBody(el) {
      el.querySelectorAll('[data-go]').forEach(b => b.onclick = () => openLesson(b.dataset.go));
      const rst = el.querySelector('[data-reset]'); if (rst) rst.onclick = () => { if (confirm('Reset all math progress? This cannot be undone.')) { Store.reset(); renderProgress(); } };
    } });
  }
  function titles(s) {
    return [
      { icon: '🌱', name: 'First Steps', req: 'Finish 1 lesson', earned: s.completed >= 1 },
      { icon: '🧮', name: 'Number Explorer', req: 'Master 3 concepts', earned: s.mastered >= 3 },
      { icon: '🔥', name: 'On a Streak', req: '3-day streak', earned: s.streak >= 3 },
      { icon: '⭐', name: 'Star Collector', req: 'Earn 15 stars', earned: s.stars >= 15 },
      { icon: '🎓', name: 'Math Scholar', req: 'Master 10 concepts', earned: s.mastered >= 10 }
    ];
  }

  /* ---------------- boot ---------------- */
  function boot() {
    rail = Atlas.Rail(Atlas.el('rail'));
    player = MATH.Player.Player(Atlas.el('m-lesson'), {
      onExit: showMap,
      onComplete: () => renderProgress()
    });
    mapView = MATH.Map.mount(Atlas.el('m-map'), {
      onOpen: openLesson,
      onLocked: (c, missing) => { rail.open(); rail.update({ title: c.name + ' 🔒', kind: 'Locked', tabs: [], body:
        `<p class="lead">${c.blurb || ''}</p><div class="note">First master ${missing.length ? missing.map(m => '<b>' + m + '</b>').join(' and ') : 'the prerequisites'} to unlock this.</div>
         <h3>Grade</h3><p>${c.grade} · ${c.strand}</p>` }); },
      onSoon: (c) => { rail.open(); rail.update({ title: c.name, kind: 'Coming soon', tabs: [], body:
        `<p class="lead">${c.blurb || ''}</p><div class="note">This concept is unlocked, but its interactive lesson is still being built. The path to it is ready.</div>` }); }
    });

    Atlas.wireMenus([['view-btn', 'view-pop']]);
    Atlas.wireSearch(Atlas.el('search'), Atlas.el('results'), Graph.search, item => {
      const st = Graph.status(item.id);
      if (st === 'locked' || st === 'ready-soon') { mapView.render(); showMap(); }
      else openLesson(item.id);
    });
    Atlas.el('progress-btn').onclick = () => { renderProgress(); rail.open(); };
    Atlas.el('map-btn').onclick = () => { showMap(); rail.close(); };
    const contBtn = Atlas.el('continue-btn');
    contBtn.onclick = () => { const rec = Graph.recommended(); if (rec) openLesson(rec.id); else showMap(); };

    showMap();
    // greet: open the progress rail on first load if there's history
    if (Store.summary().completed > 0) renderProgress();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
