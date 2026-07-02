/* Life Explorer — topic: the Tree of Life.
   A `kind:'diagram'` topic: an authored SVG classification tree whose nodes each
   carry data-part, so the shared explorer wires them to the info rail.         */
(function () {
  window.BIO = window.BIO || { topics: {} };

  const parts = [
    { id: 'life', name: 'Life', category: 'root',
      summary: 'Every living thing shares a common ancestor. Biologists classify all of life into three great domains, then into kingdoms and smaller groups.',
      functions: ['Grows and develops', 'Uses energy (metabolism)', 'Responds to its environment', 'Reproduces and passes on DNA'],
      facts: [['Shared code', 'DNA / RNA'], ['Common ancestor', 'LUCA, ~3.5–4 billion years ago']],
      analogy: 'The trunk from which every branch of living things grows.', related: ['bacteria', 'archaea', 'eukarya'] },
    { id: 'bacteria', name: 'Bacteria', category: 'bacteria',
      summary: 'Single-celled organisms without a nucleus (prokaryotes). The most abundant life on Earth, found almost everywhere.',
      functions: ['Live as single prokaryotic cells', 'Include helpful and harmful species', 'Recycle nutrients across ecosystems'],
      facts: [['Rank', 'Domain'], ['Cell type', 'Prokaryote (no nucleus)'], ['Examples', 'E. coli, Streptococcus']],
      analogy: 'The tiny, everywhere pioneers of life.', related: ['life', 'archaea'] },
    { id: 'archaea', name: 'Archaea', category: 'archaea',
      summary: 'Single-celled prokaryotes that often thrive in extreme places — hot springs, salt lakes and deep sea vents.',
      functions: ['Live as single prokaryotic cells', 'Survive extreme heat, salt and acidity', 'Differ chemically from bacteria'],
      facts: [['Rank', 'Domain'], ['Cell type', 'Prokaryote (no nucleus)'], ['Examples', 'Methanogens, halophiles']],
      analogy: 'The extremophiles that live where little else can.', related: ['life', 'bacteria'] },
    { id: 'eukarya', name: 'Eukarya', category: 'eukarya',
      summary: 'Organisms whose cells have a nucleus (eukaryotes). Includes all animals, plants, fungi and protists.',
      functions: ['Cells contain a nucleus and organelles', 'Can be single-celled or many-celled', 'Branches into four kingdoms'],
      facts: [['Rank', 'Domain'], ['Cell type', 'Eukaryote (has a nucleus)'], ['Kingdoms', 'Animals, plants, fungi, protists']],
      analogy: 'The domain of complex, nucleus-bearing life — including us.', related: ['animalia', 'plantae', 'fungi', 'protista'] },
    { id: 'protista', name: 'Protists', category: 'eukarya',
      summary: 'A diverse grab-bag of mostly single-celled eukaryotes that are not animals, plants or fungi.',
      functions: ['Mostly single-celled eukaryotes', 'Some photosynthesise, some hunt', 'Live in water and damp places'],
      facts: [['Rank', 'Kingdom'], ['Examples', 'Amoeba, algae, paramecium']],
      analogy: 'The “everything else” drawer of the eukaryotes.', related: ['eukarya'] },
    { id: 'fungi', name: 'Fungi', category: 'eukarya',
      summary: 'Eukaryotes that absorb their food, from moulds and yeasts to mushrooms. Key decomposers of nature.',
      functions: ['Absorb nutrients from their surroundings', 'Decompose dead material', 'Reproduce with spores'],
      facts: [['Rank', 'Kingdom'], ['Cell wall', 'Made of chitin'], ['Examples', 'Mushrooms, yeast, mould']],
      analogy: 'Nature’s recyclers, breaking the dead back into soil.', related: ['eukarya'] },
    { id: 'plantae', name: 'Plants', category: 'eukarya',
      summary: 'Multicellular eukaryotes that make their own food from sunlight through photosynthesis.',
      functions: ['Photosynthesise using chlorophyll', 'Have cell walls of cellulose', 'Produce oxygen and food for others'],
      facts: [['Rank', 'Kingdom'], ['Cell wall', 'Made of cellulose'], ['Examples', 'Mosses, ferns, trees, flowers']],
      analogy: 'The green engines that feed the living world.', related: ['eukarya'] },
    { id: 'animalia', name: 'Animals', category: 'eukarya',
      summary: 'Multicellular eukaryotes that eat other organisms and can usually move. Includes everything from sponges to humans.',
      functions: ['Consume other organisms for energy', 'Most can move', 'Have specialised tissues and organs'],
      facts: [['Rank', 'Kingdom'], ['Cells', 'No cell walls'], ['Examples', 'Insects, fish, birds, mammals']],
      analogy: 'The movers and eaters — our own kingdom.', related: ['eukarya'] },
  ];

  const node = (id, cat, x, y, label, w) => {
    w = w || 168; const h = 46;
    return `<g class="part cat-${cat}" data-part="${id}"><rect class="shape node" x="${x}" y="${y}" width="${w}" height="${h}" rx="11"/>` +
      `<text class="plabel node-label" x="${x + w / 2}" y="${y + h / 2 + 5}" text-anchor="middle">${label}</text></g>`;
  };
  const link = (x1, y1, x2, y2) => { const mx = (x1 + x2) / 2; return `<path class="connector" d="M${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}"/>`; };

  // layout coordinates
  const life = { x: 24, y: 287, w: 128 };
  const dom = { x: 300, w: 168 }, By = 70, Ay = 287, Ey = 504;
  const kx = 620, ky = [330, 410, 490, 570];   // protista, fungi, plantae, animalia
  const cy = o => o.y + 23;

  const svg = `
  <svg viewBox="0 0 960 620" xmlns="http://www.w3.org/2000/svg" class="bio-diagram" role="img" aria-label="Tree of life diagram">
    <g class="links">
      ${link(life.x + life.w, cy(life), dom.x, By + 23)}
      ${link(life.x + life.w, cy(life), dom.x, Ay + 23)}
      ${link(life.x + life.w, cy(life), dom.x, Ey + 23)}
      ${link(dom.x + dom.w, Ey + 23, kx, ky[0] + 23)}
      ${link(dom.x + dom.w, Ey + 23, kx, ky[1] + 23)}
      ${link(dom.x + dom.w, Ey + 23, kx, ky[2] + 23)}
      ${link(dom.x + dom.w, Ey + 23, kx, ky[3] + 23)}
    </g>
    ${node('life', 'root', life.x, life.y, 'Life', life.w)}
    ${node('bacteria', 'bacteria', dom.x, By, 'Bacteria', dom.w)}
    ${node('archaea', 'archaea', dom.x, Ay, 'Archaea', dom.w)}
    ${node('eukarya', 'eukarya', dom.x, Ey, 'Eukarya', dom.w)}
    ${node('protista', 'eukarya', kx, ky[0], 'Protists')}
    ${node('fungi', 'eukarya', kx, ky[1], 'Fungi')}
    ${node('plantae', 'eukarya', kx, ky[2], 'Plants')}
    ${node('animalia', 'eukarya', kx, ky[3], 'Animals')}
    <text class="tree-note plabel" x="384" y="40" text-anchor="middle">Domains</text>
    <text class="tree-note plabel" x="704" y="300" text-anchor="middle">Kingdoms of Eukarya</text>
  </svg>`;

  const quizzes = [
    { type: 'click', prompt: 'Click the domain that includes animals, plants and fungi.', answerId: 'eukarya',
      feedback: { correct: 'Correct — Eukarya have cells with a nucleus.', incorrect: 'Look for the domain whose cells have a nucleus.' } },
    { type: 'multiple-choice', prompt: 'Which group are prokaryotes (cells with no nucleus)?', options: ['Plants', 'Bacteria', 'Fungi', 'Animals'], answer: 'Bacteria',
      feedback: { correct: 'Right — bacteria are prokaryotes.', incorrect: 'Prokaryotes are single cells with no nucleus.' } },
    { type: 'click', prompt: 'Click the kingdom that makes its own food by photosynthesis.', answerId: 'plantae',
      feedback: { correct: 'Correct — plants photosynthesise.', incorrect: 'Which kingdom is green and uses sunlight?' } },
    { type: 'multiple-choice', prompt: 'What rank comes directly below a domain in this tree?', options: ['Species', 'Kingdom', 'Family', 'Genus'], answer: 'Kingdom',
      feedback: { correct: 'Correct — domains split into kingdoms.', incorrect: 'Look at what Eukarya branches into.' } },
  ];

  window.BIO.topics['tree-of-life'] = {
    id: 'tree-of-life', name: 'Tree of Life', short: 'Tree of Life', kind: 'diagram', icon: '🌳',
    tagline: 'How living things are classified',
    intro: 'All life is organised into a branching tree. At the top are three domains — Bacteria, Archaea and Eukarya — and the eukaryotes divide further into the familiar kingdoms. Click any branch to explore it.',
    categories: { root: 'All life', bacteria: 'Bacteria', archaea: 'Archaea', eukarya: 'Eukarya' },
    viewBox: '0 0 960 620', svg, parts, quizzes
  };
})();
