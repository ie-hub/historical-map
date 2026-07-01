/* Learning Atlas — Mathematics · standards registry (Indiana Academic Standards).
   The curriculum's accountability layer. A *standard* is what the state requires a
   student to know; a *concept* (a knowledge-graph node) is how we teach it. Concepts
   name the standards they address via `concept.standards = ['K.NS.4', …]`, and this
   module builds the reverse index + a coverage report, so the platform can answer:

     - Which concepts teach K.NS.4?      MATH.Standards.conceptsFor('K.NS.4')
     - Is every K standard addressed?    MATH.Standards.coverage('K')

   Codes and statements below are verbatim from the Indiana Academic Standards for
   Mathematics (Kindergarten, December 2020). Kindergarten is the reference grade;
   add a grade's standards here and tag concepts in concepts.js — the coverage view
   is pure data over the graph. Exposes window.MATH.Standards.                     */
(function () {
  const MATH = (window.MATH = window.MATH || {});

  const SOURCE = {
    name: 'Indiana Academic Standards for Mathematics',
    org: 'Indiana Department of Education',
    version: 'December 2020',
    url: 'https://www.in.gov/doe/students/indiana-academic-standards/mathematics/'
  };

  const byCode = {};
  const order = [];
  function add(s) { byCode[s.code] = Object.assign({ subject: 'Mathematics', source: SOURCE }, s); order.push(s.code); return byCode[s.code]; }

  /* ============================ KINDERGARTEN ============================ */
  /* NUMBER SENSE */
  add({ code: 'K.NS.1', grade: 'K', strand: 'Number Sense', statement: 'Count to at least 100 by ones and tens and count on by one from any number.' });
  add({ code: 'K.NS.2', grade: 'K', strand: 'Number Sense', statement: 'Write whole numbers from zero to 20 and recognize number words from zero to 10. Represent a number of objects with a written numeral zero to 20 (with zero representing a count of no objects).' });
  add({ code: 'K.NS.3', grade: 'K', strand: 'Number Sense', statement: 'Find the number that is one more than or one less than any whole number up to 20.' });
  add({ code: 'K.NS.4', grade: 'K', strand: 'Number Sense', statement: 'Say the number names in standard order when counting objects, pairing each object with one and only one number name and each number name with one and only one object. Understand that the last number describes the number of objects counted and that the number of objects is the same regardless of their arrangement or the order in which they were counted.' });
  add({ code: 'K.NS.5', grade: 'K', strand: 'Number Sense', statement: 'Count up to 20 objects arranged in a line, a rectangular array, or a circle. Count up to 10 objects in a scattered configuration. Count out the number of objects, given a number from one to 20.' });
  add({ code: 'K.NS.6', grade: 'K', strand: 'Number Sense', statement: 'Recognize sets of one to 10 objects in patterned arrangements and tell how many without counting.' });
  add({ code: 'K.NS.7', grade: 'K', strand: 'Number Sense', statement: 'Identify whether the number of objects in one group is greater than, less than, or equal to the number of objects in another group (e.g., by using matching and counting strategies).' });
  add({ code: 'K.NS.8', grade: 'K', strand: 'Number Sense', statement: 'Compare the values of two numbers from 1 to 20 presented as written numerals.' });
  add({ code: 'K.NS.9', grade: 'K', strand: 'Number Sense', statement: 'Correctly use the words for comparison, including: one and many; none, some and all; more and less; most and least; and equal to, more than and less than.' });
  add({ code: 'K.NS.10', grade: 'K', strand: 'Number Sense', statement: 'Separate sets of 10 or fewer objects into equal groups.' });
  add({ code: 'K.NS.11', grade: 'K', strand: 'Number Sense', statement: 'Develop initial understandings of place value and the base 10 number system by showing equivalent forms of whole numbers from 10 to 20 as groups of tens and ones using objects and drawings.' });
  /* COMPUTATION AND ALGEBRAIC THINKING */
  add({ code: 'K.CA.1', grade: 'K', strand: 'Computation & Algebraic Thinking', statement: 'Use objects, drawings, mental images, sounds, etc., to represent addition and subtraction within 10.' });
  add({ code: 'K.CA.2', grade: 'K', strand: 'Computation & Algebraic Thinking', statement: 'Solve real-world problems that involve addition and subtraction within 10 (e.g., by using objects or drawings to represent the problem).' });
  add({ code: 'K.CA.3', grade: 'K', strand: 'Computation & Algebraic Thinking', statement: 'Use objects, drawings, etc., to decompose numbers less than or equal to 10 into pairs in more than one way, and record each decomposition with a drawing or an equation (e.g., 5 = 2 + 3 and 5 = 4 + 1).' });
  add({ code: 'K.CA.4', grade: 'K', strand: 'Computation & Algebraic Thinking', statement: 'Find the number that makes 10 when added to the given number for any number from one to nine (e.g., by using objects or drawings), and record the answer with a drawing or an equation.' });
  add({ code: 'K.CA.5', grade: 'K', strand: 'Computation & Algebraic Thinking', statement: 'Create, extend, and give an appropriate rule for simple repeating and growing patterns with numbers and shapes.' });
  /* GEOMETRY */
  add({ code: 'K.G.1', grade: 'K', strand: 'Geometry', statement: 'Describe the positions of objects and geometric shapes in space using the terms inside, outside, between, above, below, near, far, under, over, up, down, behind, in front of, next to, to the left of and to the right of.' });
  add({ code: 'K.G.2', grade: 'K', strand: 'Geometry', statement: 'Compare two- and three-dimensional shapes in different sizes and orientations, using informal language to describe their similarities, differences, parts (e.g., number of sides and vertices/"corners") and other attributes (e.g., having sides of equal length).' });
  add({ code: 'K.G.3', grade: 'K', strand: 'Geometry', statement: 'Model shapes in the world by composing shapes from objects (e.g., sticks and clay balls) and drawing shapes.' });
  add({ code: 'K.G.4', grade: 'K', strand: 'Geometry', statement: 'Compose simple geometric shapes to form larger shapes (e.g., create a rectangle composed of two triangles).' });
  /* MEASUREMENT */
  add({ code: 'K.M.1', grade: 'K', strand: 'Measurement', statement: 'Make direct comparisons of the length, capacity, weight, and temperature of objects, and recognize which object is shorter, longer, taller, lighter, heavier, warmer, cooler, or holds more.' });
  add({ code: 'K.M.2', grade: 'K', strand: 'Measurement', statement: 'Understand concepts of time, including: morning, afternoon, evening, today, yesterday, tomorrow, day, week, month, and year. Understand that clocks and calendars are tools that measure time.' });
  /* DATA ANALYSIS */
  add({ code: 'K.DA.1', grade: 'K', strand: 'Data Analysis', statement: 'Identify, sort, and classify objects by size, number, and other attributes. Identify objects that do not belong to a particular group and explain the reasoning used.' });

  /* ------------------------------ queries ------------------------------ */
  function get(code) { return byCode[code] || null; }
  function all() { return order.map(c => byCode[c]); }
  function byGrade(grade) { return order.map(c => byCode[c]).filter(s => s.grade === grade); }
  function grades() { const seen = []; order.forEach(c => { const g = byCode[c].grade; if (!seen.includes(g)) seen.push(g); }); return seen; }

  /* Concepts (graph nodes) that name `code` in their `standards` array. */
  function conceptsFor(code) {
    const G = MATH.Graph; if (!G) return [];
    return G.all().filter(c => (c.standards || []).includes(code));
  }

  /* Curriculum + learner status for one standard:
       state: 'taught'  — an aligned concept has an authored lesson
              'soon'    — aligned to a concept, but its lesson isn't built yet
              'gap'     — no concept addresses it at all
       mastered: the learner has mastered at least one aligned concept.        */
  function status(code) {
    const cs = conceptsFor(code);
    const Store = MATH.Store;
    const mastered = !!(Store && cs.some(c => Store.isMastered(c.id)));
    if (!cs.length) return { state: 'gap', concepts: [], mastered: false };
    return { state: cs.some(c => c.lesson) ? 'taught' : 'soon', concepts: cs, mastered };
  }

  /* Coverage report for a grade — the seed of the teacher dashboard. */
  function coverage(grade) {
    const list = byGrade(grade).map(s => Object.assign({}, s, status(s.code)));
    const taught = list.filter(s => s.state === 'taught').length;
    const mastered = list.filter(s => s.mastered).length;
    return { grade, standards: list, taught, mastered, total: list.length, pct: list.length ? Math.round(taught / list.length * 100) : 0 };
  }

  MATH.Standards = { add, get, all, byGrade, grades, conceptsFor, status, coverage, SOURCE };
})();
