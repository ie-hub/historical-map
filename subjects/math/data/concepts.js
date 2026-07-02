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

  // ---- Grade 5 ----  (a full Indiana-aligned course graph across six strands:
  //   Number Sense, Computation, Algebraic Thinking, Geometry, Measurement, Data.
  //   Concepts tagged with the 5.* standards they teach; ~18 have authored lessons,
  //   the rest render "coming soon" so the whole course + its coverage is visible.)
  // Number Sense
  add({ id: 'decimal-place-value', name: 'Decimal Place Value', grade: '5', strand: 'Number', intro: true, lesson: true, prereqs: ['place-value-1000', 'decimals'], blurb: 'Each place is ×10 the next.', components: ['placeValue', 'workedExample', 'problemSet'], standards: ['5.NS.3'] });
  add({ id: 'powers-of-ten', name: 'Powers of 10', grade: '5', strand: 'Number', lesson: true, prereqs: ['decimal-place-value'], blurb: 'Move the decimal point.', components: ['workedExample', 'problemSet'], standards: ['5.NS.4'] });
  add({ id: 'round-decimals', name: 'Rounding Decimals', grade: '5', strand: 'Number', lesson: true, prereqs: ['decimal-place-value'], blurb: 'To the nearest tenth, hundredth…', components: ['workedExample', 'problemSet'], standards: ['5.NS.5'] });
  add({ id: 'compare-order', name: 'Comparing & Ordering', grade: '5', strand: 'Number', lesson: true, prereqs: ['decimal-place-value', 'fractions-name'], blurb: 'Order decimals & fractions on a line.', components: ['workedExample', 'problemSet'], standards: ['5.NS.1'] });
  add({ id: 'fraction-meanings', name: 'What Fractions Mean', grade: '5', strand: 'Fractions', prereqs: ['fractions-name'], blurb: 'Part of a whole, a set, or a ÷.', standards: ['5.NS.2'] });
  add({ id: 'percents-intro', name: 'Percents as Part of 100', grade: '5', strand: 'Number', lesson: true, prereqs: ['decimal-place-value', 'fractions-name'], blurb: 'Out of a hundred.', components: ['fractionPizza', 'workedExample', 'problemSet'], standards: ['5.NS.6'] });
  // Computation
  add({ id: 'multiply-multidigit', name: 'Multi-Digit Multiplication', grade: '5', strand: 'Operations', lesson: true, prereqs: ['multiply', 'place-value-1000'], blurb: 'The standard algorithm, fluently.', components: ['workedExample', 'problemSet'], standards: ['5.C.1', '5.C.3'] });
  add({ id: 'divide-multidigit', name: 'Long Division', grade: '5', strand: 'Operations', prereqs: ['division', 'multiply-multidigit'], blurb: 'Two-digit divisors & remainders.', standards: ['5.C.2'] });
  add({ id: 'add-sub-fractions', name: 'Adding & Subtracting Fractions', grade: '5', strand: 'Fractions', lesson: true, prereqs: ['fractions-name', 'fraction-meanings'], blurb: 'Unlike denominators & mixed numbers.', components: ['workedExample', 'fractionPizza', 'problemSet'], standards: ['5.C.4'] });
  add({ id: 'multiply-fractions', name: 'Multiplying Fractions', grade: '5', strand: 'Fractions', lesson: true, prereqs: ['add-sub-fractions'], blurb: 'A fraction of a fraction.', components: ['workedExample', 'fractionPizza', 'problemSet'], standards: ['5.C.5', '5.C.6'] });
  add({ id: 'divide-unit-fractions', name: 'Dividing with Unit Fractions', grade: '5', strand: 'Fractions', prereqs: ['multiply-fractions'], blurb: 'Share ½ among 4; how many ⅓ in 2?', standards: ['5.C.7'] });
  add({ id: 'decimal-operations', name: 'Decimal Operations', grade: '5', strand: 'Operations', lesson: true, prereqs: ['decimal-place-value'], blurb: '+ − × ÷ to hundredths.', components: ['workedExample', 'problemSet'], standards: ['5.C.8'] });
  add({ id: 'order-ops', name: 'Order of Operations', grade: '5', strand: 'Operations', lesson: true, prereqs: ['multiply', 'division'], blurb: 'Which step comes first?', components: ['workedExample', 'problemSet'], standards: ['5.C.9'] });
  // Algebraic Thinking
  add({ id: 'whole-number-problems', name: 'Whole-Number Word Problems', grade: '5', strand: 'Algebra', prereqs: ['multiply-multidigit', 'divide-multidigit'], blurb: 'Model with equations; mind the remainder.', standards: ['5.AT.1'] });
  add({ id: 'fraction-problems', name: 'Fraction Word Problems', grade: '5', strand: 'Fractions', prereqs: ['multiply-fractions'], blurb: 'Real situations with fractions.', standards: ['5.AT.2', '5.AT.3', '5.AT.4'] });
  add({ id: 'decimal-problems', name: 'Decimal & Money Problems', grade: '5', strand: 'Algebra', prereqs: ['decimal-operations'], blurb: 'Everyday problems with money.', standards: ['5.AT.5'] });
  add({ id: 'coordinate-plane', name: 'Coordinate Plane', grade: '5', strand: 'Geometry', lesson: true, prereqs: ['numberline'], blurb: 'Plot points with (x, y).', components: ['coordinatePlane'], standards: ['5.AT.6'] });
  add({ id: 'coordinate-graphing', name: 'Graphing Real Situations', grade: '5', strand: 'Algebra', prereqs: ['coordinate-plane'], blurb: 'Ordered pairs that tell a story.', standards: ['5.AT.7'] });
  add({ id: 'variable-expressions', name: 'Expressions with Variables', grade: '5', strand: 'Algebra', lesson: true, prereqs: ['order-ops'], blurb: 'Let a letter stand for a number.', components: ['workedExample', 'problemSet'], standards: ['5.AT.8'] });
  // Geometry
  add({ id: 'triangles-circles', name: 'Triangles & Circles', grade: '5', strand: 'Geometry', lesson: true, prereqs: ['angles', 'shapes-2d'], blurb: 'Right/acute/obtuse; radius & diameter.', components: ['workedExample', 'problemSet'], standards: ['5.G.1'] });
  add({ id: 'classify-polygons', name: 'Classifying Polygons', grade: '5', strand: 'Geometry', lesson: true, prereqs: ['triangles-circles'], blurb: 'A hierarchy of shapes.', components: ['workedExample', 'problemSet'], standards: ['5.G.2'] });
  // Measurement
  add({ id: 'unit-conversions', name: 'Measurement Conversions', grade: '5', strand: 'Measurement', lesson: true, prereqs: ['decimals', 'multiply-multidigit'], blurb: 'km→m, kg→g, hours→minutes.', components: ['workedExample', 'problemSet'], standards: ['5.M.1'] });
  add({ id: 'area-fractional-sides', name: 'Area with Fractional Sides', grade: '5', strand: 'Measurement', prereqs: ['area', 'multiply-fractions'], blurb: 'Tile a rectangle with unit fractions.', standards: ['5.M.2'] });
  add({ id: 'area-formulas', name: 'Area of Triangles & Parallelograms', grade: '5', strand: 'Measurement', lesson: true, prereqs: ['area', 'classify-polygons'], blurb: 'Build the formulas from a rectangle.', components: ['workedExample', 'problemSet'], standards: ['5.M.3'] });
  add({ id: 'volume', name: 'Volume', grade: '5', strand: 'Measurement', lesson: true, prereqs: ['area'], blurb: 'Space inside a solid.', components: ['workedExample', 'problemSet'], standards: ['5.M.4', '5.M.5'] });
  add({ id: 'composite-volume', name: 'Volume of Combined Solids', grade: '5', strand: 'Measurement', prereqs: ['volume'], blurb: 'Add two boxes together.', standards: ['5.M.6'] });
  // Data Analysis
  add({ id: 'data-displays', name: 'Collecting & Displaying Data', grade: '5', strand: 'Data', prereqs: ['coordinate-plane'], blurb: 'Tables, line plots, bar & line graphs.', standards: ['5.DS.1'] });
  add({ id: 'measures-of-center', name: 'Mean, Median & Mode', grade: '5', strand: 'Data', lesson: true, prereqs: ['divide-multidigit'], blurb: 'Describe a data set with one number.', components: ['workedExample', 'problemSet'], standards: ['5.DS.2'] });

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

  // ---- Algebra I ----  (a full course graph; 7 concepts have authored lessons,
  //                       the rest render as "coming soon" so the whole course —
  //                       and its Indiana standards coverage — is visible.)
  // Start here — an orientation to the course (history + what's ahead; no standard)
  add({ id: 'algebra-intro', name: 'Algebra: Start Here', grade: 'Algebra I', strand: 'Number', intro: true, lesson: true, prereqs: [], blurb: 'What algebra is, and where it came from.' });
  // Linear equations & inequalities
  add({ id: 'solve-linear-eq', name: 'Solving Linear Equations', grade: 'Algebra I', strand: 'Algebra', lesson: true, prereqs: ['algebra-intro', 'equations1'], blurb: 'Isolate x, keep it balanced.', components: ['equationBalance', 'problemSet'], standards: ['AI.L.1'] });
  add({ id: 'literal-equations', name: 'Rearranging Formulas', grade: 'Algebra I', strand: 'Algebra', lesson: true, prereqs: ['solve-linear-eq'], blurb: 'Solve for any variable.', components: ['workedExample', 'problemSet'], standards: ['AI.L.7'] });
  add({ id: 'compound-inequalities', name: 'Compound Inequalities', grade: 'Algebra I', strand: 'Algebra', lesson: true, prereqs: ['solve-linear-eq'], blurb: 'AND / OR on a number line.', components: ['workedExample', 'problemSet'], standards: ['AI.L.2'] });
  add({ id: 'slope', name: 'Slope', grade: 'Algebra I', strand: 'Functions', lesson: true, prereqs: ['functions', 'linear-eq'], blurb: 'Steepness — rise over run.', components: ['lineGrapher'], standards: ['AI.L.3'] });
  add({ id: 'slope-intercept', name: 'Slope-Intercept Form', grade: 'Algebra I', strand: 'Functions', lesson: true, prereqs: ['slope'], blurb: 'y = mx + b.', components: ['lineGrapher'], standards: ['AI.L.3', 'AI.L.5'] });
  add({ id: 'linear-modeling', name: 'Modeling with Lines', grade: 'Algebra I', strand: 'Functions', lesson: true, prereqs: ['slope-intercept'], blurb: 'Fit a line to a real situation.', components: ['lineGrapher', 'workedExample', 'problemSet'], standards: ['AI.L.4'] });
  add({ id: 'linear-inequalities-2', name: 'Linear Inequalities (2 vars)', grade: 'Algebra I', strand: 'Algebra', lesson: true, prereqs: ['slope-intercept'], blurb: 'Shade the half-plane.', components: ['lineGrapher', 'workedExample', 'problemSet'], standards: ['AI.L.6'] });
  // Functions
  add({ id: 'function-basics', name: 'Functions & Notation', grade: 'Algebra I', strand: 'Functions', lesson: true, prereqs: ['functions'], blurb: 'Inputs, outputs and f(x).', components: ['functionMachine', 'problemSet'], standards: ['AI.F.1', 'AI.F.2'] });
  add({ id: 'domain-range', name: 'Domain & Range', grade: 'Algebra I', strand: 'Functions', lesson: true, prereqs: ['function-basics'], blurb: 'What can go in, what comes out.', components: ['functionMachine', 'workedExample', 'problemSet'], standards: ['AI.F.3'] });
  add({ id: 'interpret-graphs', name: 'Interpreting Graphs', grade: 'Algebra I', strand: 'Functions', lesson: true, prereqs: ['function-basics'], blurb: 'Read a story from a curve.', components: ['workedExample', 'problemSet'], standards: ['AI.F.4'] });
  // Systems
  add({ id: 'systems', name: 'Systems by Graphing', grade: 'Algebra I', strand: 'Algebra', lesson: true, prereqs: ['slope-intercept'], blurb: 'Two lines, one meeting point.', components: ['lineGrapher'], standards: ['AI.SEI.1'] });
  add({ id: 'systems-algebra', name: 'Substitution & Elimination', grade: 'Algebra I', strand: 'Algebra', lesson: true, prereqs: ['systems'], blurb: 'Solve systems without a graph.', components: ['workedExample', 'problemSet'], standards: ['AI.SEI.2', 'AI.SEI.3'] });
  add({ id: 'systems-inequalities', name: 'Systems of Inequalities', grade: 'Algebra I', strand: 'Algebra', lesson: true, prereqs: ['systems', 'linear-inequalities-2'], blurb: 'Overlap of two shaded regions.', components: ['lineGrapher', 'workedExample', 'problemSet'], standards: ['AI.SEI.4'] });
  // Number & expressions
  add({ id: 'exponent-rules', name: 'Exponent Rules', grade: 'Algebra I', strand: 'Number', lesson: true, prereqs: ['multiply'], blurb: 'Multiply, divide and power up.', components: ['problemSet'], standards: ['AI.NE.2'] });
  add({ id: 'radicals', name: 'Simplifying Radicals', grade: 'Algebra I', strand: 'Number', lesson: true, prereqs: ['exponent-rules'], blurb: 'Tame the square root.', components: ['workedExample', 'problemSet'], standards: ['AI.NE.3'] });
  add({ id: 'polynomials', name: 'Polynomials', grade: 'Algebra I', strand: 'Number', lesson: true, prereqs: ['exponent-rules'], blurb: 'Add, subtract and multiply.', components: ['areaModel', 'workedExample', 'problemSet'], standards: ['AI.NE.5'] });
  add({ id: 'factoring', name: 'Factoring Quadratics', grade: 'Algebra I', strand: 'Number', lesson: true, prereqs: ['polynomials'], blurb: 'Un-multiply a quadratic.', components: ['problemSet'], standards: ['AI.NE.4'] });
  add({ id: 'complex-numbers', name: 'The Complex Number System', grade: 'Algebra I', strand: 'Number', lesson: true, prereqs: ['radicals'], blurb: 'Meet i = √−1.', components: ['workedExample', 'problemSet'], standards: ['AI.NE.1'] });
  // Quadratic & exponential
  add({ id: 'linear-vs-exp', name: 'Linear vs. Exponential', grade: 'Algebra I', strand: 'Functions', lesson: true, prereqs: ['slope-intercept'], blurb: 'Equal differences vs. equal factors.', components: ['problemSet'], standards: ['AI.QE.1'] });
  add({ id: 'exponential-fn', name: 'Exponential Functions', grade: 'Algebra I', strand: 'Functions', lesson: true, prereqs: ['linear-vs-exp', 'exponent-rules'], blurb: 'y = ab^x growth & decay.', components: ['problemSet'], standards: ['AI.QE.2'] });
  add({ id: 'quadratic-graphs', name: 'Graphing Parabolas', grade: 'Algebra I', strand: 'Functions', lesson: true, prereqs: ['function-basics'], blurb: 'The shape of x².', components: ['parabolaExplorer'], standards: ['AI.QE.6'] });
  add({ id: 'solve-quadratics', name: 'Solving Quadratics', grade: 'Algebra I', strand: 'Algebra', lesson: true, prereqs: ['factoring', 'quadratic-graphs'], blurb: 'Roots by factoring & formula.', components: ['problemSet'], standards: ['AI.QE.4'] });
  add({ id: 'completing-square', name: 'Completing the Square', grade: 'Algebra I', strand: 'Algebra', lesson: true, prereqs: ['solve-quadratics'], blurb: 'Build a perfect square.', components: ['workedExample', 'problemSet'], standards: ['AI.QE.3'] });
  add({ id: 'quadratic-zeros', name: 'Zeros, Roots & Factors', grade: 'Algebra I', strand: 'Algebra', lesson: true, prereqs: ['solve-quadratics'], blurb: 'Where the parabola meets zero.', components: ['parabolaExplorer', 'problemSet'], standards: ['AI.QE.7'] });
  add({ id: 'quadratic-modeling', name: 'Modeling with Quadratics', grade: 'Algebra I', strand: 'Algebra', lesson: true, prereqs: ['solve-quadratics'], blurb: 'Projectiles and areas.', components: ['parabolaExplorer', 'workedExample', 'problemSet'], standards: ['AI.QE.5'] });
  // Data & statistics
  add({ id: 'scatter-plots', name: 'Scatter Plots & Trend Lines', grade: 'Algebra I', strand: 'Data', lesson: true, prereqs: ['slope-intercept'], blurb: 'Fit a line to a cloud of points.', components: ['workedExample', 'problemSet'], standards: ['AI.DS.3'] });
  add({ id: 'correlation-causation', name: 'Correlation vs. Causation', grade: 'Algebra I', strand: 'Data', lesson: true, prereqs: [], blurb: 'Linked is not the same as caused.', components: ['problemSet'], standards: ['AI.DS.4'] });
  add({ id: 'two-way-tables', name: 'Two-Way Tables', grade: 'Algebra I', strand: 'Data', lesson: true, prereqs: ['correlation-causation'], blurb: 'Joint & conditional frequencies.', components: ['workedExample', 'problemSet'], standards: ['AI.DS.5'] });
  add({ id: 'stats-process', name: 'Sampling & Studies', grade: 'Algebra I', strand: 'Data', lesson: true, prereqs: [], blurb: 'Surveys, experiments, observation.', components: ['workedExample', 'problemSet'], standards: ['AI.DS.1'] });
  add({ id: 'data-nonneutral', name: 'Misleading Data', grade: 'Algebra I', strand: 'Data', lesson: true, prereqs: ['stats-process'], blurb: 'Who does the chart serve?', components: ['workedExample', 'problemSet'], standards: ['AI.DS.2'] });

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
