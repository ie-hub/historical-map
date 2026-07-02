/* Learning Atlas — Sciences · standards registry (Indiana Academic Standards).
   The curriculum's accountability layer. A *standard* is what the state requires a
   student to know; a *concept* (a knowledge-graph node) is how we teach it. Concepts
   name the standards they address via `concept.standards = ['5-PS1-1', …]`, and this
   module builds the reverse index + a coverage report, so the platform can answer:

     - Which concepts teach 5-LS2-1?   SCI.Standards.conceptsFor('5-LS2-1')
     - Is every Grade 5 standard met?  SCI.Standards.coverage('5')

   Codes and statements below are VERBATIM from the Indiana Academic Standards for
   Science (adopted 2023). Indiana adopted the NGSS performance-expectation codes
   unchanged — elementary as GRADE-DOMAIN#-# (e.g. 5-LS2-1) and middle school as
   MS-DOMAIN#-# (banded, e.g. MS-LS1-2). Grade 7 in Indiana's model is the MS-PS2 /
   MS-PS3 / MS-LS1 cluster plus the Earth-science and engineering standards below.

   `essential:true` mirrors Indiana's own "Essential Standard" overlay (⭐). The
   `grade` here is the course we file the PE under ('3' | '5' | '7'); the shared
   3–5 engineering standards are filed under both grades that use them so each
   grade's coverage report is self-contained. Exposes window.SCI.Standards.      */
(function () {
  const SCI = (window.SCI = window.SCI || {});

  const SOURCE = {
    name: 'Indiana Academic Standards for Science',
    org: 'Indiana Department of Education',
    version: '2023',
    url: 'https://www.in.gov/doe/students/indiana-academic-standards/science-and-computer-science/'
  };

  const PS = 'Physical Science', LS = 'Life Science', ESS = 'Earth & Space Science', ETS = 'Engineering';
  const byCode = {};
  const order = [];
  // Codes (e.g. shared 3-5-ETS1-*) can be filed under more than one grade; keep the
  // record once but let it belong to several grades for per-grade coverage reports.
  function add(s) {
    const grades = [].concat(s.grade);
    const rec = byCode[s.code] || Object.assign({ subject: 'Science', source: SOURCE, grades: [] }, s, { grades: [] });
    grades.forEach(g => { if (!rec.grades.includes(g)) rec.grades.push(g); });
    if (!byCode[s.code]) { byCode[s.code] = rec; order.push(s.code); }
    return rec;
  }

  /* ================================ GRADE 3 ================================ */
  /* Physical Science — Forces & Interactions */
  add({ code: '3-PS2-1', grade: '3', strand: PS, essential: true, statement: 'Plan and conduct an investigation to provide evidence of the effects of balanced and unbalanced forces on the motion of an object.' });
  add({ code: '3-PS2-2', grade: '3', strand: PS, statement: 'Make observations and/or measurements of an object’s motion to provide evidence that a pattern can be used to predict future motion.' });
  add({ code: '3-PS2-3', grade: '3', strand: PS, statement: 'Ask questions to determine cause and effect relationships of electric or magnetic interactions between two objects not in contact with each other.' });
  add({ code: '3-PS2-4', grade: '3', strand: PS, statement: 'Define a simple design problem that can be solved by applying scientific ideas about magnets.' });
  /* Life Science */
  add({ code: '3-LS1-1', grade: '3', strand: LS, essential: true, statement: 'Develop models to describe that organisms have unique and diverse life cycles but all have in common birth, growth, reproduction, and death.' });
  add({ code: '3-LS2-1', grade: '3', strand: LS, statement: 'Construct an argument that some animals form groups that help members survive.' });
  add({ code: '3-LS3-1', grade: '3', strand: LS, essential: true, statement: 'Analyze and interpret data to provide evidence that plants and animals have traits inherited from parents and that variation of these traits exists in a group of similar organisms.' });
  add({ code: '3-LS3-2', grade: '3', strand: LS, statement: 'Use evidence to support the explanation that traits can be influenced by the environment.' });
  add({ code: '3-LS4-1', grade: '3', strand: LS, statement: 'Analyze and interpret data from fossils to provide evidence of the organisms and the environments in which they lived long ago.' });
  add({ code: '3-LS4-2', grade: '3', strand: LS, essential: true, statement: 'Use evidence to construct an explanation for how the variations in characteristics among individuals of the same species may provide advantages in surviving, finding mates, and reproducing.' });
  add({ code: '3-LS4-3', grade: '3', strand: LS, statement: 'Construct an argument with evidence that in a particular habitat some organisms can survive well, some survive less well, and some cannot survive at all.' });
  add({ code: '3-LS4-4', grade: '3', strand: LS, statement: 'Make a claim about the merit of a solution to a problem caused when the environment changes and the types of plants and animals that live there may change.' });
  /* Earth & Space Science */
  add({ code: '3-ESS2-1', grade: '3', strand: ESS, essential: true, statement: 'Represent data in tables and graphical displays to describe typical weather conditions expected during a particular season.' });
  add({ code: '3-ESS2-2', grade: '3', strand: ESS, statement: 'Obtain and combine information to describe climates in different regions of the world.' });
  add({ code: '3-ESS3-1', grade: '3', strand: ESS, statement: 'Make a claim about the merit of a design solution that reduces the impacts of a weather-related hazard.' });

  /* ================================ GRADE 5 ================================ */
  /* Physical Science — Matter and Its Interactions */
  add({ code: '5-PS1-1', grade: '5', strand: PS, essential: true, statement: 'Develop a model to describe that matter is made of particles too small to be seen.' });
  add({ code: '5-PS1-2', grade: '5', strand: PS, statement: 'Measure and graph quantities to provide evidence that regardless of the type of change that occurs when heating, cooling, or mixing substances, the total weight of matter is conserved.' });
  add({ code: '5-PS1-3', grade: '5', strand: PS, essential: true, statement: 'Make observations and measurements to identify materials based on their properties.' });
  add({ code: '5-PS1-4', grade: '5', strand: PS, statement: 'Conduct an investigation to determine whether the mixing of two or more substances results in new substances.' });
  /* Physical Science — Motion & Stability / Energy */
  add({ code: '5-PS2-1', grade: '5', strand: PS, statement: 'Support an argument that the gravitational force exerted by Earth on objects is directed down.' });
  add({ code: '5-PS3-1', grade: '5', strand: PS, statement: 'Use models to describe that energy in animals’ food (used for body repair, growth, motion, and to maintain body warmth) was once energy from the sun.' });
  /* Life Science */
  add({ code: '5-LS1-1', grade: '5', strand: LS, statement: 'Support an argument that plants get the materials they need for growth chiefly from air and water.' });
  add({ code: '5-LS2-1', grade: '5', strand: LS, essential: true, statement: 'Develop a model to describe the movement of matter among plants, animals, decomposers, and the environment.' });
  /* Earth & Space Science */
  add({ code: '5-ESS1-1', grade: '5', strand: ESS, statement: 'Support an argument that the apparent brightness of the sun and stars is due to their relative distances from the Earth.' });
  add({ code: '5-ESS1-2', grade: '5', strand: ESS, essential: true, statement: 'Represent data in graphical displays to reveal patterns of daily changes in length and direction of shadows, day and night, and the seasonal appearance of some stars in the night sky.' });
  add({ code: '5-ESS2-1', grade: '5', strand: ESS, statement: 'Develop a model using an example to describe ways the geosphere, biosphere, hydrosphere, and/or atmosphere interact.' });
  add({ code: '5-ESS2-2', grade: '5', strand: ESS, statement: 'Describe and graph the amounts of salt water and fresh water in various reservoirs to provide evidence about the distribution of water on Earth.' });
  add({ code: '5-ESS3-1', grade: '5', strand: ESS, essential: true, statement: 'Obtain and combine information about ways individual communities use science ideas to protect the Earth’s resources and environment.' });

  /* Shared 3–5 Engineering Design band (filed under both Grade 3 and Grade 5). */
  add({ code: '3-5-ETS1-1', grade: ['3', '5'], strand: ETS, statement: 'Define a simple design problem reflecting a need or a want that includes specified criteria for success and constraints on materials, time, or cost.' });
  add({ code: '3-5-ETS1-2', grade: ['3', '5'], strand: ETS, statement: 'Generate and compare multiple possible solutions to a problem based on how well each is likely to meet the criteria and constraints of the problem.' });
  add({ code: '3-5-ETS1-3', grade: ['3', '5'], strand: ETS, statement: 'Plan and carry out fair tests in which variables are controlled and failure points are considered to identify aspects of a model or prototype that can be improved.' });

  /* ================================ GRADE 7 ================================ */
  /* Physical Science — Forces & Interactions */
  add({ code: 'MS-PS2-1', grade: '7', strand: PS, essential: true, statement: 'Apply Newton’s Third Law to design a solution to a problem involving the motion of two colliding objects.' });
  add({ code: 'MS-PS2-2', grade: '7', strand: PS, essential: true, statement: 'Plan an investigation to provide evidence that the change in an object’s motion depends on the sum of the forces on the object and the mass of the object.' });
  add({ code: 'MS-PS2-3', grade: '7', strand: PS, statement: 'Ask questions and design a plan to determine the factors that affect the strength of electric and magnetic forces.' });
  add({ code: 'MS-PS2-4', grade: '7', strand: PS, statement: 'Construct and present arguments using evidence to support the claim that gravitational interactions are attractive and depend on the masses of interacting objects.' });
  add({ code: 'MS-PS2-5', grade: '7', strand: PS, statement: 'Conduct an investigation and evaluate the experimental design to provide evidence that fields exist between objects exerting forces on each other even though the objects are not in contact.' });
  /* Physical Science — Energy */
  add({ code: 'MS-PS3-1', grade: '7', strand: PS, essential: true, statement: 'Construct and interpret graphical displays of data to describe the relationships of kinetic energy to the mass of an object and to the speed of an object.' });
  add({ code: 'MS-PS3-2', grade: '7', strand: PS, statement: 'Develop a model to describe that when the arrangement of objects interacting at a distance changes, different amounts of potential energy are stored in the system.' });
  add({ code: 'MS-PS3-3', grade: '7', strand: PS, essential: true, statement: 'Apply scientific principles to design, construct, and test a device that either minimizes or maximizes thermal energy transfer.' });
  add({ code: 'MS-PS3-4', grade: '7', strand: PS, statement: 'Plan an investigation to determine the relationships among the energy transferred, the type of matter, the mass, and the change in the average kinetic energy of the particles as measured by the temperature of the sample.' });
  add({ code: 'MS-PS3-5', grade: '7', strand: PS, statement: 'Construct, use, and present arguments to support the claim that when the kinetic energy of an object changes, energy is transferred to or from the object.' });
  /* Life Science — Structures & Processes */
  add({ code: 'MS-LS1-1', grade: '7', strand: LS, essential: true, statement: 'Conduct an investigation to provide evidence that living things are made of cells; either one cell or many different numbers and types of cells.' });
  add({ code: 'MS-LS1-2', grade: '7', strand: LS, essential: true, statement: 'Develop and use a model to describe the function of a cell as a whole and ways parts of cells contribute to the function.' });
  add({ code: 'MS-LS1-3', grade: '7', strand: LS, statement: 'Use argument supported by evidence for how the body is a system of interacting subsystems composed of groups of cells.' });
  add({ code: 'MS-LS1-7', grade: '7', strand: LS, statement: 'Develop a model to describe how food is rearranged through chemical reactions forming new molecules that support growth and/or release energy as this matter moves through an organism.' });
  add({ code: 'MS-LS1-8', grade: '7', strand: LS, statement: 'Gather and synthesize information that sensory receptors respond to stimuli by sending messages to the brain for immediate behavior or storage as memories.' });
  /* Earth & Space Science */
  add({ code: 'MS-ESS1-4', grade: '7', strand: ESS, statement: 'Construct a scientific explanation based on evidence from rock strata for how the geologic time scale is used to organize Earth’s 4.6-billion-year-old history.' });
  add({ code: 'MS-ESS2-1', grade: '7', strand: ESS, essential: true, statement: 'Develop a model to describe the cycling of Earth’s materials and the flow of energy that drives this process.' });
  add({ code: 'MS-ESS2-2', grade: '7', strand: ESS, statement: 'Construct an explanation based on evidence for how geoscience processes have changed Earth’s surface at varying time and spatial scales.' });
  add({ code: 'MS-ESS2-3', grade: '7', strand: ESS, statement: 'Analyze and interpret data on the distribution of fossils and rocks, continental shapes, and seafloor structures to provide evidence of the past plate motions.' });
  add({ code: 'MS-ESS3-1', grade: '7', strand: ESS, essential: true, statement: 'Construct a scientific explanation based on evidence for how the uneven distributions of Earth’s mineral, energy, and groundwater resources are the result of past and current geoscience processes.' });
  add({ code: 'MS-ESS3-2', grade: '7', strand: ESS, statement: 'Analyze and interpret data on natural hazards to forecast future catastrophic events and inform the development of technologies to mitigate their effects.' });
  /* Engineering Design (middle school) */
  add({ code: 'MS-ETS1-1', grade: '7', strand: ETS, statement: 'Define the criteria and constraints of a design problem with sufficient precision to ensure a successful solution, taking into account relevant scientific principles and potential impacts on people and the natural environment that may limit possible solutions.' });
  add({ code: 'MS-ETS1-2', grade: '7', strand: ETS, statement: 'Evaluate competing design solutions using a systematic process to determine how well they meet the criteria and constraints of the problem.' });
  add({ code: 'MS-ETS1-3', grade: '7', strand: ETS, statement: 'Analyze data from tests to determine similarities and differences among several design solutions to identify the best characteristics of each that can be combined into a new solution to better meet the criteria for success.' });
  add({ code: 'MS-ETS1-4', grade: '7', strand: ETS, statement: 'Develop a model to generate data for iterative testing and modification of a proposed object, tool, or process such that an optimal design can be achieved.' });

  /* ------------------------------ queries ------------------------------ */
  function get(code) { return byCode[code] || null; }
  function all() { return order.map(c => byCode[c]); }
  function byGrade(grade) { return order.map(c => byCode[c]).filter(s => s.grades.includes(grade)); }
  function grades() { const seen = []; order.forEach(c => byCode[c].grades.forEach(g => { if (!seen.includes(g)) seen.push(g); })); return seen.sort(); }

  /* Concepts (graph nodes) that name `code` in their `standards` array. */
  function conceptsFor(code) {
    const G = SCI.Graph; if (!G) return [];
    return G.all().filter(c => (c.standards || []).includes(code));
  }

  /* Curriculum + learner status for one standard:
       state: 'taught' | 'soon' | 'gap'; plus learner mastery / accuracy /
       misconceptions rolled up across the aligned concepts. */
  function status(code) {
    const cs = conceptsFor(code);
    const Store = SCI.Store;
    let attempts = 0, correct = 0, plays = 0, mastered = false; const misc = {};
    if (Store) cs.forEach(c => {
      const rec = Store.concept(c.id);
      if (rec) { attempts += rec.attempts || 0; correct += rec.correct || 0; plays += rec.plays || 0; if (rec.mastered) mastered = true; }
      const m = Store.misconceptionsFor ? Store.misconceptionsFor(c.id) : {};
      Object.keys(m).forEach(k => { misc[k] = (misc[k] || 0) + m[k]; });
    });
    const accuracy = attempts ? Math.round((correct / attempts) * 100) : null;
    const learner = mastered ? 'mastered' : plays ? 'in-progress' : 'not-started';
    const misconceptions = Object.keys(misc);
    if (!cs.length) return { state: 'gap', concepts: [], mastered: false, learner: 'not-started', accuracy: null, misconceptions: [] };
    return { state: cs.some(c => c.lesson) ? 'taught' : 'soon', concepts: cs, mastered, learner, accuracy, misconceptions };
  }

  /* Coverage report for a grade — the seed of the teacher dashboard. */
  function coverage(grade) {
    const list = byGrade(grade).map(s => Object.assign({}, s, status(s.code)));
    const taught = list.filter(s => s.state === 'taught').length;
    const mastered = list.filter(s => s.mastered).length;
    return { grade, standards: list, taught, mastered, total: list.length, pct: list.length ? Math.round(taught / list.length * 100) : 0 };
  }

  SCI.Standards = { add, get, all, byGrade, grades, conceptsFor, status, coverage, SOURCE };
})();
