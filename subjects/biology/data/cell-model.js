/* Life Explorer — topic: Interactive Cell (owned-model prototype).
   A `kind:'model3d'` topic: renders a GLB with Google <model-viewer> and places
   clickable HOTSPOTS that open the info rail — the fully-interactive, self-hosted
   route (no third-party viewer). Hotspot positions are 3-D coordinates WE define,
   so they don't depend on how the model names its meshes.

   This demo points at a public placeholder GLB to prove the click-a-hotspot →
   rail flow end to end. To use a real cell: set `modelSrc` to the purchased
   model's .glb (drop it in subjects/biology/assets/ or a CDN), then replace the
   demo `hotspots` with coordinates captured on that model. Reuses the cell parts
   glossary. Loads AFTER data/cell.js.                                          */
(function () {
  window.BIO = window.BIO || { topics: {} };
  const cell = window.BIO.topics['cell'] || {};
  const parts = cell.parts || [];
  const quizzes = (cell.quizzes || []).filter(q => q.type === 'multiple-choice');

  window.BIO.topics['cell-model'] = {
    id: 'cell-model', name: 'Interactive Cell (demo)', short: 'Interactive', kind: 'model3d',
    icon: '🖱️', hideLegend: true, autoRotate: false, tagline: 'Owned 3-D model with clickable hotspots',
    intro: 'A working demo of the “own-the-model” route: a real GLB rendered with Google model-viewer, with clickable hotspots wired to this panel. Right now it uses a placeholder shape to prove the mechanism — once a licensed cell model is dropped in, each hotspot maps to a real organelle. Drag to rotate; click a marker to open its details.',
    // Public, CORS-enabled placeholder (Khronos sample via jsDelivr) so the
    // mechanism can be verified without a purchase.
    modelSrc: 'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/Avocado/glTF-Binary/Avocado.glb',
    credit: { text: 'Placeholder model — swap in your licensed cell GLB', author: '', license: '', modelUrl: 'https://modelviewer.dev/examples/annotations/' },
    // Demo hotspots (real surface points captured on the placeholder via
    // model-viewer's positionAndNormalFromPoint) → real organelle rail entries.
    // On a licensed cell model, these get recaptured on each organelle.
    hotspots: [
      { partId: 'nucleus', position: '-0.008 0.050 0.0078', normal: '0 0 1' },
      { partId: 'mitochondria', position: '0.011 0.037 0.0078', normal: '0 0 1' },
      { partId: 'golgi', position: '0.011 0.015 0.0078', normal: '0 0 1' }
    ],
    categories: cell.categories || {}, parts, quizzes
  };
})();
