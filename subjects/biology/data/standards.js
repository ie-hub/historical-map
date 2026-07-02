/* Life Explorer — Biology · standards registry (Indiana Academic Standards).
   The accountability layer for the high-school Biology course. A *standard* is
   what the state requires; a *concept* (a graph node) is how we teach it. Concepts
   name the standards they address via `concept.standards = ['HS-LS1-5', …]`, and
   this module builds the reverse index + a coverage report so the platform can
   answer "which concepts teach HS-LS2-4?" and "is the course fully covered?".

   Codes and statements are VERBATIM from the Indiana Academic Standards for
   Science — Biology (adopted 2023), which adopt the NGSS performance-expectation
   codes unchanged (HS-LS1-1 … HS-LS4-6). 24 PEs across the four Life-Science
   disciplinary core ideas; no engineering (ETS) or Indiana-specific additions,
   and Indiana publishes no "essential standard" overlay for this course.

   Unlike the grade courses, Biology is a single course, so `coverage()` takes no
   grade and reports over all 24. Exposes window.BIO.Standards.                  */
(function () {
  const BIO = (window.BIO = window.BIO || { topics: {} });

  const SOURCE = {
    name: 'Indiana Academic Standards for Science — Biology',
    org: 'Indiana Department of Education',
    version: '2023',
    url: 'https://www.in.gov/doe/students/indiana-academic-standards/science-and-computer-science/'
  };

  const LS1 = 'From Molecules to Organisms: Structures & Processes';
  const LS2 = 'Ecosystems: Interactions, Energy & Dynamics';
  const LS3 = 'Heredity: Inheritance & Variation of Traits';
  const LS4 = 'Biological Evolution: Unity & Diversity';

  const byCode = {};
  const order = [];
  function add(s) { byCode[s.code] = Object.assign({ subject: 'Biology', source: SOURCE }, s); order.push(s.code); return byCode[s.code]; }

  /* ---- LS1 · From Molecules to Organisms: Structures and Processes (7) ---- */
  add({ code: 'HS-LS1-1', strand: LS1, statement: 'Construct an explanation based on evidence for how the structure of DNA determines the structure of proteins which carry out the essential functions of life through systems of specialized cells.' });
  add({ code: 'HS-LS1-2', strand: LS1, statement: 'Develop and use a model to illustrate the hierarchical organization of interacting systems that provide specific functions within multicellular organisms.' });
  add({ code: 'HS-LS1-3', strand: LS1, statement: 'Plan and conduct an investigation to provide evidence that feedback mechanisms maintain homeostasis.' });
  add({ code: 'HS-LS1-4', strand: LS1, statement: 'Use a model to illustrate the role of cellular division (mitosis) and differentiation in producing and maintaining complex organisms.' });
  add({ code: 'HS-LS1-5', strand: LS1, statement: 'Use a model to illustrate how photosynthesis transforms light energy into stored chemical energy.' });
  add({ code: 'HS-LS1-6', strand: LS1, statement: 'Construct and revise an explanation based on evidence for how carbon, hydrogen, and oxygen from sugar molecules may combine with other elements to form amino acids and/or other large carbon-based molecules.' });
  add({ code: 'HS-LS1-7', strand: LS1, statement: 'Use a model to illustrate that cellular respiration is a chemical process whereby the bonds of food molecules and oxygen molecules are broken and the bonds in new compounds are formed resulting in a net transfer of energy.' });

  /* ---- LS2 · Ecosystems: Interactions, Energy and Dynamics (8) ---- */
  add({ code: 'HS-LS2-1', strand: LS2, statement: 'Use mathematical and/or computational representations to support explanations of factors that affect carrying capacity of ecosystems at different scales.' });
  add({ code: 'HS-LS2-2', strand: LS2, statement: 'Use mathematical representations to support and revise explanations based on evidence about factors affecting biodiversity and populations in ecosystems of different scales.' });
  add({ code: 'HS-LS2-3', strand: LS2, statement: 'Construct and revise an explanation based on evidence for the cycling of matter and flow of energy in aerobic and anaerobic conditions.' });
  add({ code: 'HS-LS2-4', strand: LS2, statement: 'Use mathematical representations to support claims for the cycling of matter and flow of energy among organisms in an ecosystem.' });
  add({ code: 'HS-LS2-5', strand: LS2, statement: 'Develop a model to illustrate the role of photosynthesis and cellular respiration in the cycling of carbon among the biosphere, atmosphere, hydrosphere, and geosphere.' });
  add({ code: 'HS-LS2-6', strand: LS2, statement: 'Evaluate the claims, evidence, and reasoning that the complex interactions in ecosystems maintain relatively consistent numbers and types of organisms in stable conditions, but changing conditions may result in a new ecosystem.' });
  add({ code: 'HS-LS2-7', strand: LS2, statement: 'Design, evaluate, and refine a solution for reducing the impacts of human activities on the environment and biodiversity.' });
  add({ code: 'HS-LS2-8', strand: LS2, statement: 'Evaluate the evidence for the role of group behavior on individual and species’ chances to survive and reproduce.' });

  /* ---- LS3 · Heredity: Inheritance and Variation of Traits (3) ---- */
  add({ code: 'HS-LS3-1', strand: LS3, statement: 'Ask questions to clarify relationships about the role of DNA and chromosomes in coding the instructions for characteristic traits passed from parents to offspring.' });
  add({ code: 'HS-LS3-2', strand: LS3, statement: 'Make and defend a claim based on evidence that inheritable genetic variations may result from: (1) new genetic combinations through meiosis, (2) viable errors occurring during replication, and/or (3) mutations caused by environmental factors.' });
  add({ code: 'HS-LS3-3', strand: LS3, statement: 'Apply concepts of statistics and probability to explain the variation and distribution of expressed traits in a population.' });

  /* ---- LS4 · Biological Evolution: Unity and Diversity (6) ---- */
  add({ code: 'HS-LS4-1', strand: LS4, statement: 'Communicate scientific information that common ancestry and biological evolution are supported by multiple lines of empirical evidence.' });
  add({ code: 'HS-LS4-2', strand: LS4, statement: 'Construct an explanation based on evidence that the process of evolution primarily results from four factors: (1) the potential for a species to increase in number, (2) the heritable genetic variation of individuals in a species due to mutation and sexual reproduction, (3) competition for limited resources, and (4) the proliferation of those organisms that are better able to survive and reproduce in the environment.' });
  add({ code: 'HS-LS4-3', strand: LS4, statement: 'Apply concepts of statistics and probability to support explanations that organisms with an advantageous heritable trait tend to increase in proportion to organisms lacking this trait.' });
  add({ code: 'HS-LS4-4', strand: LS4, statement: 'Construct an explanation based on evidence for how natural selection leads to adaptation of populations.' });
  add({ code: 'HS-LS4-5', strand: LS4, statement: 'Evaluate the evidence supporting claims that changes in environmental conditions may result in: (1) increases in the number of individuals of some species, (2) the emergence of new species over time, and (3) the extinction of other species.' });
  add({ code: 'HS-LS4-6', strand: LS4, statement: 'Create or revise a simulation to test a solution to mitigate adverse impacts of human activity on biodiversity.' });

  /* ------------------------------ queries ------------------------------ */
  function get(code) { return byCode[code] || null; }
  function all() { return order.map(c => byCode[c]); }
  function strands() { const seen = []; order.forEach(c => { const s = byCode[c].strand; if (!seen.includes(s)) seen.push(s); }); return seen; }

  /* Concepts (graph nodes) that name `code` in their `standards` array. */
  function conceptsFor(code) {
    const G = BIO.Graph; if (!G) return [];
    return G.all().filter(c => (c.standards || []).includes(code));
  }

  /* Curriculum + learner status for one standard (taught / soon / gap + rollup). */
  function status(code) {
    const cs = conceptsFor(code);
    const Store = BIO.Store;
    let attempts = 0, correct = 0, plays = 0, mastered = false;
    if (Store) cs.forEach(c => {
      const rec = Store.concept(c.id);
      if (rec) { attempts += rec.attempts || 0; correct += rec.correct || 0; plays += rec.plays || 0; if (rec.mastered) mastered = true; }
    });
    const accuracy = attempts ? Math.round((correct / attempts) * 100) : null;
    const learner = mastered ? 'mastered' : plays ? 'in-progress' : 'not-started';
    if (!cs.length) return { state: 'gap', concepts: [], mastered: false, learner: 'not-started', accuracy: null };
    return { state: cs.some(c => c.lesson) ? 'taught' : 'soon', concepts: cs, mastered, learner, accuracy };
  }

  /* Coverage report over the whole course (Biology is a single HS course). */
  function coverage() {
    const list = all().map(s => Object.assign({}, s, status(s.code)));
    const taught = list.filter(s => s.state === 'taught').length;
    const mastered = list.filter(s => s.mastered).length;
    return { standards: list, taught, mastered, total: list.length, pct: list.length ? Math.round(taught / list.length * 100) : 0 };
  }

  BIO.Standards = { add, get, all, strands, conceptsFor, status, coverage, SOURCE };
})();
