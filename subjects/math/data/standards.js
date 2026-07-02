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

  /* =============================== GRADE 5 ============================= */
  /* Codes 5.* — Indiana Academic Standards for Mathematics: Grade 5 (Dec 2020).
     Six strands: Number Sense, Computation, Algebraic Thinking, Geometry,
     Measurement, and Data Analysis. Source: in.gov/doe (Grade 5, Dec 2020). */
  /* NUMBER SENSE */
  add({ code: '5.NS.1', grade: '5', strand: 'Number Sense', statement: 'Use a number line to compare and order fractions, mixed numbers, and decimals to thousandths. Write the results using >, =, and < symbols.' });
  add({ code: '5.NS.2', grade: '5', strand: 'Number Sense', statement: 'Explain different interpretations of fractions, including: as parts of a whole, parts of a set, and division of whole numbers by whole numbers.' });
  add({ code: '5.NS.3', grade: '5', strand: 'Number Sense', statement: 'Recognize the relationship that in a multi-digit number, a digit in one place represents 10 times as much as it represents in the place to its right, and inversely, a digit in one place represents 1/10 of what it represents in the place to its left.' });
  add({ code: '5.NS.4', grade: '5', strand: 'Number Sense', statement: 'Explain patterns in the number of zeros of the product when multiplying a number by powers of 10, and explain patterns in the placement of the decimal point when a decimal is multiplied or divided by a power of 10. Use whole-number exponents to denote powers of 10.' });
  add({ code: '5.NS.5', grade: '5', strand: 'Number Sense', statement: 'Use place value understanding to round decimal numbers up to thousandths to any given place value.' });
  add({ code: '5.NS.6', grade: '5', strand: 'Number Sense', statement: 'Understand, interpret, and model percents as part of a hundred (e.g. by using pictures, diagrams, and other visual models).' });
  /* COMPUTATION */
  add({ code: '5.C.1', grade: '5', strand: 'Computation', statement: 'Multiply multi-digit whole numbers fluently using a standard algorithmic approach.' });
  add({ code: '5.C.2', grade: '5', strand: 'Computation', statement: 'Find whole-number quotients and remainders with up to four-digit dividends and two-digit divisors, using strategies based on place value, the properties of operations, and/or the relationship between multiplication and division. Describe the strategy and explain the reasoning used.' });
  add({ code: '5.C.3', grade: '5', strand: 'Computation', statement: 'Compare the size of a product to the size of one factor on the basis of the size of the other factor, without performing the indicated multiplication.' });
  add({ code: '5.C.4', grade: '5', strand: 'Computation', statement: 'Add and subtract fractions with unlike denominators, including mixed numbers.' });
  add({ code: '5.C.5', grade: '5', strand: 'Computation', statement: 'Use visual fraction models and numbers to multiply a fraction by a fraction or a whole number.' });
  add({ code: '5.C.6', grade: '5', strand: 'Computation', statement: 'Explain why multiplying a positive number by a fraction greater than one results in a product greater than the given number. Explain why multiplying a positive number by a fraction less than 1 results in a product smaller than the given number. Relate the principle of fraction equivalence, a/b = (n × a)/(n × b), to the effect of multiplying a/b by one.' });
  add({ code: '5.C.7', grade: '5', strand: 'Computation', statement: 'Use visual fraction models and numbers to divide a unit fraction by a non-zero whole number and to divide a whole number by a unit fraction.' });
  add({ code: '5.C.8', grade: '5', strand: 'Computation', statement: 'Add, subtract, multiply, and divide decimals to hundredths, using models or drawings and strategies based on place value or the properties of operations. Describe the strategy and explain the reasoning.' });
  add({ code: '5.C.9', grade: '5', strand: 'Computation', statement: 'Evaluate expressions with parentheses or brackets involving whole numbers using the commutative properties of addition and multiplication, associative properties of addition and multiplication, and distributive property.' });
  /* ALGEBRAIC THINKING */
  add({ code: '5.AT.1', grade: '5', strand: 'Algebraic Thinking', statement: 'Solve real-world problems involving multiplication and division of whole numbers (e.g. by using equations to represent the problem). In division problems that involve a remainder, explain how the remainder affects the solution to the problem.' });
  add({ code: '5.AT.2', grade: '5', strand: 'Algebraic Thinking', statement: 'Solve real-world problems involving addition and subtraction of fractions referring to the same whole, including cases of unlike denominators (e.g., by using visual fraction models and equations to represent the problem). Use benchmark fractions and number sense of fractions to estimate mentally and assess whether the answer is reasonable.' });
  add({ code: '5.AT.3', grade: '5', strand: 'Algebraic Thinking', statement: 'Solve real-world problems involving multiplication of fractions, including mixed numbers (e.g., by using visual fraction models and equations to represent the problem).' });
  add({ code: '5.AT.4', grade: '5', strand: 'Algebraic Thinking', statement: 'Solve real-world problems involving division of unit fractions by non-zero whole numbers, and division of whole numbers by unit fractions (e.g., by using visual fraction models and equations to represent the problem).' });
  add({ code: '5.AT.5', grade: '5', strand: 'Algebraic Thinking', statement: 'Solve real-world problems involving addition, subtraction, multiplication, and division with decimals to hundredths, including problems that involve money in decimal notation (e.g. by using equations, models or drawings and strategies based on place value or properties of operations to represent the problem).' });
  add({ code: '5.AT.6', grade: '5', strand: 'Algebraic Thinking', statement: 'Graph points with whole number coordinates on a coordinate plane. Explain how the coordinates relate the point as the distance from the origin on each axis, with the convention that the names of the two axes and the coordinates correspond (e.g., x-axis and x-coordinate, y-axis and y-coordinate).' });
  add({ code: '5.AT.7', grade: '5', strand: 'Algebraic Thinking', statement: 'Represent real-world problems and equations by graphing ordered pairs in the first quadrant of the coordinate plane, and interpret coordinate values of points in the context of the situation.' });
  add({ code: '5.AT.8', grade: '5', strand: 'Algebraic Thinking', statement: 'Define and use up to two variables to write linear expressions that arise from real-world problems, and evaluate them for given values.' });
  /* GEOMETRY */
  add({ code: '5.G.1', grade: '5', strand: 'Geometry', statement: 'Identify, describe, and draw triangles (right, acute, obtuse) and circles using appropriate tools (e.g., ruler or straightedge, compass and technology). Understand the relationship between radius and diameter.' });
  add({ code: '5.G.2', grade: '5', strand: 'Geometry', statement: 'Identify and classify polygons including quadrilaterals, pentagons, hexagons, and triangles (equilateral, isosceles, scalene, right, acute and obtuse) based on angle measures and sides. Classify polygons in a hierarchy based on properties.' });
  /* MEASUREMENT */
  add({ code: '5.M.1', grade: '5', strand: 'Measurement', statement: 'Convert among different-sized standard measurement units within a given measurement system, and use these conversions in solving multi-step real-world problems.' });
  add({ code: '5.M.2', grade: '5', strand: 'Measurement', statement: 'Find the area of a rectangle with fractional side lengths by modeling with unit squares of the appropriate unit fraction side lengths, and show that the area is the same as would be found by multiplying the side lengths. Multiply fractional side lengths to find areas of rectangles, and represent fraction products as rectangular areas.' });
  add({ code: '5.M.3', grade: '5', strand: 'Measurement', statement: 'Develop and use formulas for the area of triangles, parallelograms and trapezoids. Solve real-world and other mathematical problems that involve perimeter and area of triangles, parallelograms and trapezoids, using appropriate units for measures.' });
  add({ code: '5.M.4', grade: '5', strand: 'Measurement', statement: 'Find the volume of a right rectangular prism with whole-number side lengths by packing it with unit cubes, and show that the volume is the same as would be found by multiplying the edge lengths or multiplying the height by the area of the base.' });
  add({ code: '5.M.5', grade: '5', strand: 'Measurement', statement: 'Apply the formulas V = l × w × h and V = B × h for right rectangular prisms to find volumes of right rectangular prisms with whole-number edge lengths to solve real-world problems and other mathematical problems.' });
  add({ code: '5.M.6', grade: '5', strand: 'Measurement', statement: 'Find volumes of solid figures composed of two non-overlapping right rectangular prisms by adding the volumes of the non-overlapping parts, applying this technique to solve real-world problems and other mathematical problems.' });
  /* DATA ANALYSIS */
  add({ code: '5.DS.1', grade: '5', strand: 'Data Analysis', statement: 'Formulate questions that can be addressed with data and make predictions about the data. Use observations, surveys, and experiments to collect, represent, and interpret the data using tables (including frequency tables), line plots, bar graphs, and line graphs. Recognize the differences in representing categorical and numerical data.' });
  add({ code: '5.DS.2', grade: '5', strand: 'Data Analysis', statement: 'Understand and use measures of center (mean and median) and frequency (mode) to describe a data set.' });

  /* ============================== ALGEBRA I ============================= */
  /* Codes AI.* — Indiana Academic Standards for Mathematics: Algebra I (2020). */
  /* NUMBER AND EXPRESSIONS */
  add({ code: 'AI.NE.1', grade: 'Algebra I', strand: 'Number & Expressions', statement: 'Explain the hierarchy and relationships of numbers and sets of numbers within the complex number system. Know that there is an imaginary number, i, such that √−1 = i, and that the imaginary numbers together with the real numbers form the complex number system.' });
  add({ code: 'AI.NE.2', grade: 'Algebra I', strand: 'Number & Expressions', statement: 'Simplify algebraic rational expressions, with numerators and denominators containing monomial bases with integer exponents, to equivalent forms.' });
  add({ code: 'AI.NE.3', grade: 'Algebra I', strand: 'Number & Expressions', statement: 'Simplify square roots of monomial algebraic expressions, including non-perfect squares.' });
  add({ code: 'AI.NE.4', grade: 'Algebra I', strand: 'Number & Expressions', statement: 'Factor quadratic expressions (including the difference of two squares, perfect square trinomials, and other quadratic expressions).' });
  add({ code: 'AI.NE.5', grade: 'Algebra I', strand: 'Number & Expressions', statement: 'Add, subtract, and multiply polynomials. Divide polynomials by monomials.' });
  /* FUNCTIONS */
  add({ code: 'AI.F.1', grade: 'Algebra I', strand: 'Functions', statement: 'Understand that a function from one set (the domain) to another set (the range) assigns to each element of the domain exactly one element of the range. Understand that if f is a function and x is in its domain, then f(x) denotes the output of f for the input x, and the graph of f is the graph of the equation y = f(x).' });
  add({ code: 'AI.F.2', grade: 'Algebra I', strand: 'Functions', statement: 'Evaluate functions for given elements of the domain, and interpret statements in function notation in terms of a context.' });
  add({ code: 'AI.F.3', grade: 'Algebra I', strand: 'Functions', statement: 'Identify the domain and range of relations represented in tables, graphs, verbal descriptions, and equations.' });
  add({ code: 'AI.F.4', grade: 'Algebra I', strand: 'Functions', statement: 'Describe, qualitatively, the functional relationship between two quantities by analyzing key features of a graph. Sketch a graph that exhibits given key features of a function that has been verbally described, including intercepts, where the function is increasing or decreasing, positive or negative, and any relative maximum or minimum values.' });
  /* LINEAR EQUATIONS, INEQUALITIES, AND FUNCTIONS */
  add({ code: 'AI.L.1', grade: 'Algebra I', strand: 'Linear Equations & Inequalities', statement: 'Represent real-world problems using linear equations and inequalities in one variable, including those with rational number coefficients and variables on both sides of the equal sign. Solve them fluently, explaining the process used and justifying the choice of a solution method.' });
  add({ code: 'AI.L.2', grade: 'Algebra I', strand: 'Linear Equations & Inequalities', statement: 'Solve compound linear inequalities in one variable, and represent and interpret the solution on a number line. Write a compound linear inequality given its number line representation.' });
  add({ code: 'AI.L.3', grade: 'Algebra I', strand: 'Linear Equations & Inequalities', statement: 'Represent linear functions as graphs from equations, equations from graphs, and equations from tables and other given information (e.g., from a given point and the slope). Find the slope of a line given its graph, equation, or two points on the line.' });
  add({ code: 'AI.L.4', grade: 'Algebra I', strand: 'Linear Equations & Inequalities', statement: 'Represent real-world problems that can be modeled with a linear function using equations, graphs, and tables; translate fluently among these representations, and interpret the slope and intercepts.' });
  add({ code: 'AI.L.5', grade: 'Algebra I', strand: 'Linear Equations & Inequalities', statement: 'Translate among equivalent forms of equations for linear functions, including slope-intercept, point-slope, and standard. Recognize that different forms reveal more or less information about a given situation.' });
  add({ code: 'AI.L.6', grade: 'Algebra I', strand: 'Linear Equations & Inequalities', statement: 'Represent real-world problems using linear inequalities in two variables and solve such problems; graph the solution set as a half-plane and interpret whether it is reasonable.' });
  add({ code: 'AI.L.7', grade: 'Algebra I', strand: 'Linear Equations & Inequalities', statement: 'Solve linear and quadratic equations and formulas for a specified variable to highlight a quantity of interest, using the same reasoning as in solving equations.' });
  /* SYSTEMS OF EQUATIONS AND INEQUALITIES */
  add({ code: 'AI.SEI.1', grade: 'Algebra I', strand: 'Systems of Equations', statement: 'Understand the relationship between a solution of a system of two linear equations in two variables and the graphs of the corresponding lines. Solve pairs of linear equations by graphing; approximate solutions when the coordinates are non-integer.' });
  add({ code: 'AI.SEI.2', grade: 'Algebra I', strand: 'Systems of Equations', statement: 'Verify that replacing one equation of a system by the sum of that equation and a multiple of the other produces a system with the same solutions (including no solution and infinitely many). Solve systems of two linear equations algebraically (substitution and elimination).' });
  add({ code: 'AI.SEI.3', grade: 'Algebra I', strand: 'Systems of Equations', statement: 'Write a system of two linear equations in two variables that represents a real-world problem and solve it with and without technology. Interpret the solution and determine whether it is reasonable.' });
  add({ code: 'AI.SEI.4', grade: 'Algebra I', strand: 'Systems of Equations', statement: 'Represent real-world problems using a system of two linear inequalities in two variables. Graph the solution set as the intersection of the corresponding half-planes and interpret whether it is reasonable.' });
  /* QUADRATIC AND EXPONENTIAL EQUATIONS AND FUNCTIONS */
  add({ code: 'AI.QE.1', grade: 'Algebra I', strand: 'Quadratic & Exponential', statement: 'Distinguish between situations that can be modeled with linear functions and with exponential functions. Understand that linear functions grow by equal differences over equal intervals, while exponential functions grow by equal factors over equal intervals.' });
  add({ code: 'AI.QE.2', grade: 'Algebra I', strand: 'Quadratic & Exponential', statement: 'Represent problems that can be modeled with simple exponential functions using tables, graphs, and equations of the form y = ab^x (integer x > 1, rational b > 0, b ≠ 1); interpret the values of a and b.' });
  add({ code: 'AI.QE.3', grade: 'Algebra I', strand: 'Quadratic & Exponential', statement: 'Use area models to develop the concept of completing the square to solve quadratic equations. Explore the relationship between completing the square and the quadratic formula.' });
  add({ code: 'AI.QE.4', grade: 'Algebra I', strand: 'Quadratic & Exponential', statement: 'Solve quadratic equations in one variable by inspection (e.g., for x² = 49), finding square roots, using the quadratic formula, and factoring, as appropriate to the initial form of the equation.' });
  add({ code: 'AI.QE.5', grade: 'Algebra I', strand: 'Quadratic & Exponential', statement: 'Represent real-world problems using quadratic equations in one or two variables and solve such problems with technology. Interpret the solution(s) and determine whether they are reasonable.' });
  add({ code: 'AI.QE.6', grade: 'Algebra I', strand: 'Quadratic & Exponential', statement: 'Graph exponential and quadratic functions with and without technology. Identify and describe key features such as zeros, lines of symmetry, and extreme values, and interpret them in real-world contexts.' });
  add({ code: 'AI.QE.7', grade: 'Algebra I', strand: 'Quadratic & Exponential', statement: 'Describe the relationships among the solutions of a quadratic equation, the zeros of the function, the x-intercepts of the graph, and the factors of the expression. Explain that every quadratic has two complex solutions, which may or may not be real.' });
  /* DATA ANALYSIS AND STATISTICS */
  add({ code: 'AI.DS.1', grade: 'Algebra I', strand: 'Data Analysis & Statistics', statement: 'Understand statistics as a process for making inferences about a population based on a random sample. Recognize the purposes of and differences among sample surveys, experiments, and observational studies, and explain how randomization relates to each.' });
  add({ code: 'AI.DS.2', grade: 'Algebra I', strand: 'Data Analysis & Statistics', statement: 'Understand that statistics and data are non-neutral and designed to serve a particular interest. Analyze whose interest might be served and how the representations might be misleading.' });
  add({ code: 'AI.DS.3', grade: 'Algebra I', strand: 'Data Analysis & Statistics', statement: 'Use technology to find a linear function that models a relationship between two quantitative variables to make predictions, and interpret the slope and y-intercept. Compute and interpret the correlation coefficient.' });
  add({ code: 'AI.DS.4', grade: 'Algebra I', strand: 'Data Analysis & Statistics', statement: 'Distinguish between correlation and causation.' });
  add({ code: 'AI.DS.5', grade: 'Algebra I', strand: 'Data Analysis & Statistics', statement: 'Summarize bivariate categorical data in two-way frequency tables. Interpret relative frequencies (joint, marginal, and conditional) in the context of the data, and recognize possible associations and trends.' });

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
       learner: 'mastered' | 'in-progress' | 'not-started' (across aligned concepts)
       accuracy: summative accuracy % on aligned concepts (null if untried)
       misconceptions: distinct misconception labels seen on aligned concepts.  */
  function status(code) {
    const cs = conceptsFor(code);
    const Store = MATH.Store;
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

  MATH.Standards = { add, get, all, byGrade, grades, conceptsFor, status, coverage, SOURCE };
})();
