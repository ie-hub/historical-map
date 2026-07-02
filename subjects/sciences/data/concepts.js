/* Learning Atlas — Sciences · the knowledge graph (concept nodes).
   The curriculum's spine: concepts and their prerequisites across the three
   Indiana-aligned grade courses (3, 5, 7). `grade` lays concepts out and drives
   the course picker; `strand` (Physical Science / Life Science / Earth & Space /
   Engineering) colours the map swim-lanes; `standards` names the Indiana 2023
   performance expectations a concept teaches (see data/standards.js), which the
   coverage dashboard reads back.

   Concepts with `lesson:true` have an authored interactive lesson (data/lessons-*.js);
   the rest render on the map as "unlocked, coming soon" so the whole grade is
   visible and the coverage view is honest about what's built. Grade 5 is the
   reference slice; Grades 3 and 7 are mapped and standards-tagged, lessons next.

   Add a concept here → it appears on the map. Author its lesson keyed by the same
   id → it becomes playable. No engine edits needed.                            */
(function () {
  const add = window.SCI.Graph.add;
  const PS = 'Physical Science', LS = 'Life Science', ESS = 'Earth & Space Science', ETS = 'Engineering';

  /* =========================== GRADE 3 =========================== */
  /* Physical Science — Forces & Interactions */
  add({ id: 'g3-forces', name: 'Balanced & Unbalanced Forces', grade: '3', strand: PS, intro: true, standards: ['3-PS2-1'], blurb: 'Pushes and pulls that change how things move.' });
  add({ id: 'g3-motion-patterns', name: 'Patterns of Motion', grade: '3', strand: PS, prereqs: ['g3-forces'], standards: ['3-PS2-2'], blurb: 'Repeating motion lets you predict what’s next.' });
  add({ id: 'g3-magnets', name: 'Magnets & Static', grade: '3', strand: PS, standards: ['3-PS2-3'], blurb: 'Forces that act without touching.' });
  add({ id: 'g3-magnet-design', name: 'Design with Magnets', grade: '3', strand: PS, prereqs: ['g3-magnets'], standards: ['3-PS2-4', '3-5-ETS1-1'], blurb: 'Solve a problem using magnets.' });
  /* Life Science */
  add({ id: 'g3-life-cycles', name: 'Life Cycles', grade: '3', strand: LS, standards: ['3-LS1-1'], blurb: 'Birth, growth, reproduction and death.' });
  add({ id: 'g3-animal-groups', name: 'Animal Groups', grade: '3', strand: LS, standards: ['3-LS2-1'], blurb: 'How living in a group helps survival.' });
  add({ id: 'g3-inherited-traits', name: 'Inherited Traits', grade: '3', strand: LS, standards: ['3-LS3-1'], blurb: 'Traits passed from parents — and their variation.' });
  add({ id: 'g3-traits-environment', name: 'Traits & Environment', grade: '3', strand: LS, prereqs: ['g3-inherited-traits'], standards: ['3-LS3-2'], blurb: 'How surroundings shape traits.' });
  add({ id: 'g3-fossils', name: 'Fossils & Ancient Life', grade: '3', strand: LS, standards: ['3-LS4-1'], blurb: 'Clues to organisms and habitats long ago.' });
  add({ id: 'g3-variation-advantage', name: 'Variation & Survival', grade: '3', strand: LS, prereqs: ['g3-inherited-traits'], standards: ['3-LS4-2'], blurb: 'How differences help some individuals thrive.' });
  add({ id: 'g3-habitat-survival', name: 'Habitats & Survival', grade: '3', strand: LS, prereqs: ['g3-variation-advantage'], standards: ['3-LS4-3'], blurb: 'Why some organisms fit a habitat and others don’t.' });
  add({ id: 'g3-environment-change', name: 'When the Environment Changes', grade: '3', strand: LS, prereqs: ['g3-habitat-survival'], standards: ['3-LS4-4'], blurb: 'What happens when a habitat changes.' });
  /* Earth & Space Science */
  add({ id: 'g3-weather', name: 'Weather Patterns', grade: '3', strand: ESS, standards: ['3-ESS2-1'], blurb: 'Typical weather across the seasons.' });
  add({ id: 'g3-climate-regions', name: 'Climates of the World', grade: '3', strand: ESS, prereqs: ['g3-weather'], standards: ['3-ESS2-2'], blurb: 'Why regions have different climates.' });
  add({ id: 'g3-weather-hazards', name: 'Weather Hazards', grade: '3', strand: ESS, prereqs: ['g3-weather'], standards: ['3-ESS3-1', '3-5-ETS1-2'], blurb: 'Designing to reduce weather damage.' });

  /* =========================== GRADE 5 =========================== */
  /* Physical Science — Matter and Its Interactions */
  add({ id: 'g5-particle-model', name: 'Matter Is Made of Particles', grade: '5', strand: PS, intro: true, lesson: true, standards: ['5-PS1-1'], blurb: 'Everything is built from particles too small to see.', components: ['sortCards', 'simSlider', 'problemSet'] });
  add({ id: 'g5-properties', name: 'Properties of Materials', grade: '5', strand: PS, prereqs: ['g5-particle-model'], standards: ['5-PS1-3'], blurb: 'Identify materials by how they behave.' });
  add({ id: 'g5-conservation', name: 'Conservation of Matter', grade: '5', strand: PS, prereqs: ['g5-particle-model'], standards: ['5-PS1-2'], blurb: 'Weight stays the same when matter changes.' });
  add({ id: 'g5-mixtures', name: 'Mixing Substances', grade: '5', strand: PS, prereqs: ['g5-properties'], standards: ['5-PS1-4'], blurb: 'When mixing makes something new.' });
  add({ id: 'g5-gravity', name: 'Gravity Points Down', grade: '5', strand: PS, standards: ['5-PS2-1'], blurb: 'Earth pulls objects toward its center.' });
  add({ id: 'g5-energy-sun', name: 'Energy from the Sun', grade: '5', strand: PS, standards: ['5-PS3-1'], blurb: 'The energy in food traces back to sunlight.' });
  /* Life Science */
  add({ id: 'g5-plants-air-water', name: 'How Plants Grow', grade: '5', strand: LS, prereqs: ['g5-energy-sun'], standards: ['5-LS1-1'], blurb: 'Plants build themselves from air and water.' });
  add({ id: 'g5-matter-cycle', name: 'Matter Cycles in Ecosystems', grade: '5', strand: LS, lesson: true, prereqs: ['g5-energy-sun', 'g5-plants-air-water'], standards: ['5-LS2-1'], blurb: 'Matter moves among plants, animals, decomposers and the environment.', components: ['orderList', 'simSlider', 'problemSet'] });
  /* Earth & Space Science */
  add({ id: 'g5-star-brightness', name: 'Why Stars Look Dim', grade: '5', strand: ESS, standards: ['5-ESS1-1'], blurb: 'Distance changes how bright a star appears.' });
  add({ id: 'g5-shadows-day-night', name: 'Shadows, Day & Night', grade: '5', strand: ESS, standards: ['5-ESS1-2'], blurb: 'Patterns from Earth’s daily spin.' });
  add({ id: 'g5-earth-systems', name: 'Earth’s Systems Interact', grade: '5', strand: ESS, standards: ['5-ESS2-1'], blurb: 'Geosphere, biosphere, hydrosphere and atmosphere meet.' });
  add({ id: 'g5-water-distribution', name: 'Where Earth’s Water Is', grade: '5', strand: ESS, prereqs: ['g5-earth-systems'], standards: ['5-ESS2-2'], blurb: 'Almost all of it is salt water.' });
  add({ id: 'g5-protect-resources', name: 'Protecting Earth’s Resources', grade: '5', strand: ESS, prereqs: ['g5-earth-systems'], standards: ['5-ESS3-1', '3-5-ETS1-2'], blurb: 'How communities care for the environment.' });
  /* Engineering */
  add({ id: 'g5-design', name: 'The Engineering Design Process', grade: '5', strand: ETS, standards: ['3-5-ETS1-1', '3-5-ETS1-3'], blurb: 'Define a problem, compare solutions, run fair tests.' });

  /* =========================== GRADE 7 =========================== */
  /* Physical Science — Forces & Interactions */
  add({ id: 'g7-newtons-third', name: 'Newton’s Third Law', grade: '7', strand: PS, standards: ['MS-PS2-1'], blurb: 'Every action has an equal, opposite reaction.' });
  add({ id: 'g7-force-mass-motion', name: 'Force, Mass & Motion', grade: '7', strand: PS, standards: ['MS-PS2-2'], blurb: 'How net force and mass change motion.' });
  add({ id: 'g7-em-forces', name: 'Electric & Magnetic Forces', grade: '7', strand: PS, standards: ['MS-PS2-3'], blurb: 'What makes these forces stronger or weaker.' });
  add({ id: 'g7-gravity-masses', name: 'Gravity & Mass', grade: '7', strand: PS, standards: ['MS-PS2-4'], blurb: 'Attraction that depends on mass.' });
  add({ id: 'g7-fields', name: 'Fields & Forces at a Distance', grade: '7', strand: PS, prereqs: ['g7-em-forces'], standards: ['MS-PS2-5'], blurb: 'Forces acting without contact.' });
  /* Physical Science — Energy */
  add({ id: 'g7-kinetic-energy', name: 'Kinetic Energy', grade: '7', strand: PS, standards: ['MS-PS3-1'], blurb: 'Energy of motion — from mass and speed.' });
  add({ id: 'g7-potential-energy', name: 'Potential Energy', grade: '7', strand: PS, prereqs: ['g7-kinetic-energy'], standards: ['MS-PS3-2'], blurb: 'Stored energy in an arrangement.' });
  add({ id: 'g7-thermal-design', name: 'Controlling Heat Flow', grade: '7', strand: PS, standards: ['MS-PS3-3', 'MS-ETS1-1'], blurb: 'Design to minimize or maximize heat transfer.' });
  add({ id: 'g7-thermal-transfer', name: 'Thermal Energy Transfer', grade: '7', strand: PS, prereqs: ['g7-kinetic-energy'], standards: ['MS-PS3-4'], blurb: 'Temperature, mass and energy moving.' });
  add({ id: 'g7-energy-transfer', name: 'Energy Transfer', grade: '7', strand: PS, prereqs: ['g7-kinetic-energy'], standards: ['MS-PS3-5'], blurb: 'Energy moving to and from objects.' });
  /* Life Science — Structures & Processes */
  add({ id: 'g7-cells-living', name: 'Living Things Are Made of Cells', grade: '7', strand: LS, intro: true, standards: ['MS-LS1-1'], blurb: 'One cell or many — cells are the unit of life.' });
  add({ id: 'g7-cell-function', name: 'How a Cell Works', grade: '7', strand: LS, prereqs: ['g7-cells-living'], standards: ['MS-LS1-2'], blurb: 'Cell parts and the jobs they do.' });
  add({ id: 'g7-body-subsystems', name: 'Body as Interacting Systems', grade: '7', strand: LS, prereqs: ['g7-cell-function'], standards: ['MS-LS1-3'], blurb: 'Cells → tissues → organs → systems.' });
  add({ id: 'g7-food-molecules', name: 'Food & Chemical Reactions', grade: '7', strand: LS, prereqs: ['g7-cell-function'], standards: ['MS-LS1-7'], blurb: 'Food is rearranged to build and power the body.' });
  add({ id: 'g7-sensory', name: 'Senses & the Brain', grade: '7', strand: LS, standards: ['MS-LS1-8'], blurb: 'Receptors send signals the brain reads.' });
  /* Earth & Space Science */
  add({ id: 'g7-geologic-time', name: 'The Geologic Time Scale', grade: '7', strand: ESS, standards: ['MS-ESS1-4'], blurb: 'Reading Earth’s history in rock strata.' });
  add({ id: 'g7-rock-cycle', name: 'The Rock Cycle', grade: '7', strand: ESS, standards: ['MS-ESS2-1'], blurb: 'Earth’s materials cycle, driven by energy.' });
  add({ id: 'g7-geoscience', name: 'Shaping Earth’s Surface', grade: '7', strand: ESS, prereqs: ['g7-rock-cycle'], standards: ['MS-ESS2-2'], blurb: 'Fast and slow processes that change the land.' });
  add({ id: 'g7-plate-tectonics', name: 'Plate Tectonics', grade: '7', strand: ESS, prereqs: ['g7-rock-cycle'], standards: ['MS-ESS2-3'], blurb: 'Evidence for moving plates.' });
  add({ id: 'g7-earth-resources', name: 'Earth’s Resources', grade: '7', strand: ESS, standards: ['MS-ESS3-1'], blurb: 'Why resources are unevenly distributed.' });
  add({ id: 'g7-natural-hazards', name: 'Natural Hazards', grade: '7', strand: ESS, prereqs: ['g7-plate-tectonics'], standards: ['MS-ESS3-2'], blurb: 'Forecasting and reducing disaster impacts.' });
  /* Engineering */
  add({ id: 'g7-define-problem', name: 'Defining a Design Problem', grade: '7', strand: ETS, standards: ['MS-ETS1-1'], blurb: 'Criteria, constraints and impacts.' });
  add({ id: 'g7-evaluate-solutions', name: 'Evaluating Solutions', grade: '7', strand: ETS, prereqs: ['g7-define-problem'], standards: ['MS-ETS1-2'], blurb: 'Systematically compare designs.' });
  add({ id: 'g7-combine-solutions', name: 'Combining the Best Ideas', grade: '7', strand: ETS, prereqs: ['g7-evaluate-solutions'], standards: ['MS-ETS1-3'], blurb: 'Merge strengths into a better design.' });
  add({ id: 'g7-iterative-design', name: 'Testing & Iterating', grade: '7', strand: ETS, prereqs: ['g7-evaluate-solutions'], standards: ['MS-ETS1-4'], blurb: 'Use test data to refine a design.' });
})();
