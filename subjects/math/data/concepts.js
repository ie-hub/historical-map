/* Learning Atlas — Mathematics · the knowledge graph (concept nodes).
   This is the curriculum's spine: concepts and their prerequisites, from
   Kindergarten to Calculus. Grades are labels for layout & recommendation; what
   actually gates a concept is `prereqs`. Concepts with `lesson:true` have an
   authored interactive lesson (see data/lessons/*.js); the rest render on the map
   as "unlocked, coming soon" so the whole K–12 path is visible and future-proof.

   Add a concept here → it appears on the map. Author its lesson keyed by the same
   id → it becomes playable. No engine edits needed.                            */
(function () {
  const G = window.MATH.Graph, add = G.add;

  // ---- Kindergarten ----
  add({ id: 'count-10', name: 'Counting to 10', grade: 'K', strand: 'Number', lesson: true, prereqs: [], blurb: 'Count objects one by one.', components: ['counter'], standards: ['K.NS.4', 'K.NS.5'] });
  add({ id: 'compare-qty', name: 'Comparing Quantities', grade: 'K', strand: 'Number', lesson: true, prereqs: ['count-10'], blurb: 'More, fewer or the same?', components: ['compare'], standards: ['K.NS.7', 'K.NS.9'] });
  add({ id: 'patterns-k', name: 'Patterns', grade: 'K', strand: 'Number', lesson: true, prereqs: ['count-10'], blurb: 'Spot what comes next.', components: ['pattern'], standards: ['K.CA.5'] });
  add({ id: 'shapes-2d', name: '2D Shapes', grade: 'K', strand: 'Geometry', lesson: true, prereqs: [], blurb: 'Circles, squares, triangles.', components: ['shapeSort'], standards: ['K.G.2'] });
  add({ id: 'add-10', name: 'Adding within 10', grade: 'K', strand: 'Operations', lesson: true, prereqs: ['count-10', 'compare-qty'], blurb: 'Put groups together.', components: ['tenFrame'], standards: ['K.CA.1', 'K.CA.2'] });

  // ---- Grade 1 ----
  add({ id: 'numberline', name: 'Number Lines', grade: '1', strand: 'Number', lesson: true, prereqs: ['count-10'], blurb: 'Find numbers on a line.', components: ['numberLine'] });
  add({ id: 'place-value-tens', name: 'Place Value: Tens & Ones', grade: '1', strand: 'Number', lesson: true, prereqs: ['count-10'], blurb: 'Build teen & tens numbers.', components: ['placeValue'] });
  add({ id: 'sub-10', name: 'Subtracting within 10', grade: '1', strand: 'Operations', lesson: true, prereqs: ['add-10'], blurb: 'Take away to find how many left.', components: ['problemSet'] });

  // ---- Grade 2 ----
  add({ id: 'skip-count', name: 'Skip Counting', grade: '2', strand: 'Number', lesson: true, prereqs: ['numberline', 'count-10'], blurb: 'Count by 2s, 5s and 10s.', components: ['numberLine'] });
  add({ id: 'arrays', name: 'Arrays', grade: '2', strand: 'Operations', lesson: true, prereqs: ['skip-count'], blurb: 'Rows and columns of things.', components: ['arrayBuilder'] });
  add({ id: 'fractions-intro', name: 'Fractions: Equal Parts', grade: '2', strand: 'Fractions', lesson: true, prereqs: ['compare-qty', 'shapes-2d'], blurb: 'Split a whole into equal parts.', components: ['fractionPizza'] });

  // ---- Grade 3 ----
  add({ id: 'multiply', name: 'Multiplication', grade: '3', strand: 'Operations', lesson: true, prereqs: ['arrays', 'skip-count'], blurb: 'Equal groups, fast.', components: ['arrayBuilder', 'problemSet'] });
  add({ id: 'division', name: 'Division', grade: '3', strand: 'Operations', prereqs: ['multiply'], blurb: 'Share into equal groups.' });
  add({ id: 'area', name: 'Area', grade: '3', strand: 'Measurement', lesson: true, prereqs: ['multiply'], blurb: 'Squares inside a rectangle.', components: ['arrayBuilder'] });
  add({ id: 'fractions-name', name: 'Naming Fractions', grade: '3', strand: 'Fractions', lesson: true, prereqs: ['fractions-intro'], blurb: 'Read fractions like 3/4.', components: ['fractionPizza'] });

  // ---- Grade 4 ----
  add({ id: 'place-value-1000', name: 'Large Numbers', grade: '4', strand: 'Number', lesson: true, prereqs: ['place-value-tens'], blurb: 'Hundreds, tens and ones.', components: ['placeValue'] });
  add({ id: 'decimals', name: 'Decimals', grade: '4', strand: 'Number', prereqs: ['place-value-1000', 'fractions-name'], blurb: 'Numbers past the point.' });
  add({ id: 'angles', name: 'Angles', grade: '4', strand: 'Geometry', prereqs: ['shapes-2d'], blurb: 'How far something turns.' });

  // ---- Grade 5 ----
  add({ id: 'coordinate-plane', name: 'Coordinate Plane', grade: '5', strand: 'Geometry', lesson: true, prereqs: ['numberline'], blurb: 'Plot points with (x, y).', components: ['coordinatePlane'] });
  add({ id: 'order-ops', name: 'Order of Operations', grade: '5', strand: 'Operations', prereqs: ['multiply', 'division'], blurb: 'Which step comes first?' });
  add({ id: 'volume', name: 'Volume', grade: '5', strand: 'Measurement', prereqs: ['area'], blurb: 'Space inside a solid.' });

  // ---- Grade 6 ----
  add({ id: 'integers', name: 'Integers & Negatives', grade: '6', strand: 'Number', lesson: true, prereqs: ['numberline'], blurb: 'Below zero on the line.', components: ['numberLine'] });
  add({ id: 'ratios', name: 'Ratios', grade: '6', strand: 'Number', prereqs: ['multiply'], blurb: 'Compare with a : b.' });
  add({ id: 'percents', name: 'Percentages', grade: '6', strand: 'Number', prereqs: ['fractions-name', 'decimals'], blurb: 'Parts out of a hundred.' });

  // ---- Grade 7 ----
  add({ id: 'equations1', name: 'One-Step Equations', grade: '7', strand: 'Algebra', prereqs: ['integers'], blurb: 'Solve for the unknown.' });
  add({ id: 'probability', name: 'Probability', grade: '7', strand: 'Data', prereqs: ['fractions-name'], blurb: 'How likely is it?' });

  // ---- Grade 8 ----
  add({ id: 'functions', name: 'Functions', grade: '8', strand: 'Functions', lesson: true, prereqs: ['multiply', 'coordinate-plane'], blurb: 'A rule: input → output.', components: ['functionMachine'] });
  add({ id: 'linear-eq', name: 'Linear Equations', grade: '8', strand: 'Algebra', prereqs: ['equations1', 'coordinate-plane'], blurb: 'Lines and their rules.' });
  add({ id: 'pythagoras', name: 'Pythagorean Theorem', grade: '8', strand: 'Geometry', prereqs: ['area'], blurb: 'a² + b² = c².' });

  // ---- Algebra I ----
  add({ id: 'slope', name: 'Slope', grade: 'Algebra I', strand: 'Functions', prereqs: ['functions', 'linear-eq'], blurb: 'Steepness of a line.' });
  add({ id: 'systems', name: 'Systems of Equations', grade: 'Algebra I', strand: 'Algebra', prereqs: ['linear-eq'], blurb: 'Two lines, one meeting point.' });

  // ---- Geometry ----
  add({ id: 'proofs', name: 'Proofs', grade: 'Geometry', strand: 'Geometry', prereqs: ['angles', 'pythagoras'], blurb: 'Reason step by step.' });

  // ---- Algebra II ----
  add({ id: 'exponentials', name: 'Exponentials', grade: 'Algebra II', strand: 'Functions', prereqs: ['slope'], blurb: 'Growth that speeds up.' });
  add({ id: 'logarithms', name: 'Logarithms', grade: 'Algebra II', strand: 'Functions', prereqs: ['exponentials'], blurb: 'The inverse of powers.' });

  // ---- Precalculus ----
  add({ id: 'trig', name: 'Trigonometry', grade: 'Precalculus', strand: 'Functions', prereqs: ['functions', 'pythagoras'], blurb: 'Angles meet the circle.' });

  // ---- Calculus ----
  add({ id: 'limits', name: 'Limits', grade: 'Calculus', strand: 'Functions', prereqs: ['trig'], blurb: 'Getting infinitely close.' });
  add({ id: 'derivatives', name: 'Derivatives', grade: 'Calculus', strand: 'Functions', prereqs: ['limits'], blurb: 'Rate of change.' });
})();
