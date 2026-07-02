/* Learning Atlas — Mathematics · Grade 5 · Geometry & Measurement lessons.
   Indiana-aligned: triangles & circles (5.G.1), classifying polygons (5.G.2),
   measurement conversions (5.M.1), area of triangles/parallelograms (5.M.3),
   volume of prisms (5.M.4, 5.M.5). */
(function () {
  const P = window.MATH.Player, U = window.MATH.util;
  const reg = P.register;

  /* ------------------------------------------------- 5.G.1 · Triangles & circles */
  reg({
    concept: 'triangles-circles', title: 'Triangles & Circles',
    standards: ['5.G.1'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'Triangles come in different shapes. What do you think we use to sort them into <b>right</b>, <b>acute</b>, and <b>obtuse</b>?',
        options: ['Their colour', 'Their biggest angle', 'How big they are'] },
      { kind: 'discover', title: 'Name a triangle by its biggest angle', rule: 'Right = one 90° angle. Acute = all angles < 90°. Obtuse = one angle > 90°.',
        text: 'Every triangle has three angles that add to 180°. We name it by its <b>largest</b> angle: a <b>right</b> triangle has a square 90° corner; an <b>acute</b> triangle has three angles all smaller than 90°; an <b>obtuse</b> triangle has one angle bigger than 90°. A triangle can’t have two right or two obtuse angles — that would blow past 180°.' },
      { kind: 'example', title: 'Circles: radius and diameter', component: 'workedExample',
        config: { problem: 'How do the radius and diameter of a circle relate?',
          intro: 'A circle is every point the same distance from a center.',
          steps: [
            { text: 'The <b>radius</b> goes from the center to the edge.', why: 'Every radius of one circle is the same length.' },
            { text: 'The <b>diameter</b> goes edge-to-edge, straight through the center.', why: 'It’s two radii lined up.' },
            { ask: 'If the radius is 5 cm, what is the diameter?', choices: ['10 cm', '5 cm', '2.5 cm'], answer: '10 cm', why: 'Diameter = 2 × radius.', hint: 'A diameter is two radii.', misconceptions: { '2.5 cm': 'That’s half the radius — the diameter is DOUBLE the radius' } },
            { text: 'So diameter = 2 × radius, and radius = diameter ÷ 2.', math: 'd = 2r' }
          ], done: 'Diameter is always twice the radius.' } },
      { kind: 'practice', difficulty: 'easy', title: 'Name the triangle', component: 'problemSet',
        config: { problems: [
          { prompt: 'A triangle with a 90° angle is…', answer: 'right', choices: ['right', 'acute', 'obtuse'], hint: '90° is a square corner.' },
          { prompt: 'A triangle with angles 60°, 60°, 60° is…', answer: 'acute', choices: ['acute', 'right', 'obtuse'], hint: 'All under 90°.' },
          { prompt: 'A triangle with a 120° angle is…', answer: 'obtuse', choices: ['obtuse', 'right', 'acute'], hint: 'One angle over 90°.' },
          { prompt: 'Radius 3 cm → diameter = ?', answer: '6 cm', choices: ['6 cm', '3 cm', '1.5 cm'], hint: '×2.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Angles & circles', component: 'problemSet',
        config: { problems: [
          { prompt: 'Two angles of a triangle are 50° and 60°. The third is…', answer: '70', choices: ['70', '80', '110'], hint: 'They add to 180°.' },
          { prompt: 'That triangle (50°, 60°, 70°) is…', answer: 'acute', choices: ['acute', 'right', 'obtuse'], hint: 'Biggest angle is 70° < 90°.' },
          { prompt: 'A circle’s diameter is 14 cm. Its radius is…', answer: '7 cm', choices: ['7 cm', '28 cm', '14 cm'], hint: '÷2.' },
          { prompt: 'Can a triangle have two 90° angles?', answer: 'no', choices: ['no', 'yes'], hint: '90 + 90 already = 180, leaving nothing for the third.' }
        ] } },
      { kind: 'mastery', title: 'Triangles & circles check', component: 'problemSet',
        config: { problems: [
          { prompt: 'Angles 30°, 60°, 90° make a ___ triangle.', answer: 'right', choices: ['right', 'acute', 'obtuse'], hint: 'It has a 90° angle.', misconceptions: { 'acute': 'One angle is exactly 90° → that makes it RIGHT, not acute' } },
          { prompt: 'A triangle with angles 100°, 40°, 40° is…', answer: 'obtuse', choices: ['obtuse', 'acute', 'right'], hint: '100° > 90°.' },
          { prompt: 'Radius 8 → diameter = ?', answer: '16', choices: ['16', '4', '8'], hint: 'Double it.', misconceptions: { '4': 'That halves it — the diameter is twice the radius' } },
          { prompt: 'The distance from a circle’s center to its edge is the…', answer: 'radius', choices: ['radius', 'diameter', 'perimeter'], hint: 'Center to edge.' }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'How can you tell a right, acute, and obtuse triangle apart just by looking at the angles?',
        starters: ['I look at the', 'A right triangle has', 'The diameter is always'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Find these shapes around you.',
        items: [
          { icon: '📐', label: 'Angle hunt', detail: 'Use the corner of a paper (a 90° angle) to test triangles: bigger = obtuse, smaller = acute.' },
          { icon: '🧭', label: 'Draw with a compass', detail: 'Set a compass to 4 cm and draw a circle. Its radius is 4 cm — what’s the diameter?' },
          { icon: '🔺', label: 'Build 180°', detail: 'Tear the three corners off a paper triangle and line them up — they form a straight line (180°).' }
        ] }
    ]
  });

  /* ------------------------------------------------ 5.G.2 · Classifying polygons */
  reg({
    concept: 'classify-polygons', title: 'Classifying Polygons',
    standards: ['5.G.2'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'A square is a rectangle. Is a rectangle also always a square?',
        options: ['Yes — same thing', 'No — a rectangle needn’t have equal sides', 'Only sometimes'] },
      { kind: 'discover', title: 'Polygons form a hierarchy', rule: 'Name polygons by side count; sort them by shared properties into a hierarchy.',
        text: 'A <b>polygon</b> is a closed shape with straight sides. Name it by sides: triangle (3), quadrilateral (4), pentagon (5), hexagon (6). Quadrilaterals nest in a <b>hierarchy</b>: every square is a rectangle (4 right angles) and every rectangle is a parallelogram (2 pairs of parallel sides) — but not the reverse. A shape belongs to a group when it has <b>all</b> that group’s properties.' },
      { kind: 'example', title: 'Sort a shape by its properties', component: 'workedExample',
        config: { problem: 'Is a <b>square</b> a rectangle? Is a rectangle a square?',
          steps: [
            { text: 'A rectangle = quadrilateral with 4 right angles.', why: 'That’s the defining property.' },
            { ask: 'A square has 4 right angles. So a square is…', choices: ['always a rectangle', 'never a rectangle'], answer: 'always a rectangle', why: 'It has every property a rectangle needs (and more).', hint: 'Does a square have 4 right angles?' },
            { ask: 'A rectangle just needs 4 right angles. Must its sides all be equal?', choices: ['No — so not always a square', 'Yes — it’s always a square'], answer: 'No — so not always a square', why: 'A square needs 4 EQUAL sides too; a long rectangle doesn’t.', hint: 'Think of a door shape.', misconceptions: { 'Yes — it’s always a square': 'A rectangle can be long and thin — squares need equal sides' } },
            { text: 'Squares are a special kind of rectangle — the hierarchy only runs one way.' }
          ], done: 'A shape is a member of every group whose properties it fully has.' } },
      { kind: 'practice', difficulty: 'easy', title: 'Name by sides', component: 'problemSet',
        config: { problems: [
          { prompt: 'A polygon with 5 sides is a…', answer: 'pentagon', choices: ['pentagon', 'hexagon', 'quadrilateral'], hint: 'Penta = 5.' },
          { prompt: 'A polygon with 6 sides is a…', answer: 'hexagon', choices: ['hexagon', 'pentagon', 'octagon'], hint: 'Hexa = 6.' },
          { prompt: 'A 4-sided polygon is a…', answer: 'quadrilateral', choices: ['quadrilateral', 'triangle', 'pentagon'], hint: 'Quad = 4.' },
          { prompt: 'A triangle with all sides equal is…', answer: 'equilateral', choices: ['equilateral', 'scalene', 'isosceles'], hint: '"Equi" = equal.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'The hierarchy', component: 'problemSet',
        config: { problems: [
          { prompt: 'Every square is also a…', answer: 'rectangle', choices: ['rectangle', 'triangle', 'pentagon'], hint: 'It has 4 right angles.' },
          { prompt: 'A triangle with no equal sides is…', answer: 'scalene', choices: ['scalene', 'equilateral', 'isosceles'], hint: 'All different.' },
          { prompt: 'A triangle with exactly two equal sides is…', answer: 'isosceles', choices: ['isosceles', 'scalene', 'equilateral'], hint: 'Two the same.' },
          { prompt: 'Is every parallelogram a rectangle?', answer: 'no', choices: ['no', 'yes'], hint: 'A slanted parallelogram has no right angles.' }
        ] } },
      { kind: 'mastery', title: 'Classify polygons check', component: 'problemSet',
        config: { problems: [
          { prompt: 'A rectangle is always a…', answer: 'parallelogram', choices: ['parallelogram', 'square', 'pentagon'], hint: 'Both pairs of sides are parallel.', misconceptions: { 'square': 'A rectangle need not have equal sides, so not always a square' } },
          { prompt: 'How many sides does a hexagon have?', answer: '6', choices: ['6', '5', '8'], hint: 'Hexa = 6.' },
          { prompt: 'A triangle with a right angle AND two equal sides is…', answer: 'right isosceles', choices: ['right isosceles', 'equilateral', 'scalene'], hint: 'It has BOTH properties.' },
          { prompt: 'Every equilateral triangle is also…', answer: 'acute', choices: ['acute', 'right', 'obtuse'], hint: 'All angles are 60°.' }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why can we say "every square is a rectangle" but not "every rectangle is a square"?',
        starters: ['A square has all the properties of', 'A rectangle only needs', 'The hierarchy runs one way because'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Sort shapes like a mathematician.',
        items: [
          { icon: '🗂️', label: 'Draw the family tree', detail: 'Make a diagram: quadrilateral → parallelogram → rectangle → square. Where do rhombuses fit?' },
          { icon: '🔷', label: 'Property detective', detail: 'Draw a shape and list every group it belongs to and why.' },
          { icon: '🐝', label: 'Why hexagons?', detail: 'Bees build hexagon honeycombs. Look up why 6-sided cells pack so efficiently.' }
        ] }
    ]
  });

  /* ------------------------------------------------ 5.M.1 · Measurement conversions */
  reg({
    concept: 'unit-conversions', title: 'Measurement Conversions',
    standards: ['5.M.1'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'You change <b>3 meters</b> into centimeters. Since a meter is bigger, will the NUMBER of centimeters be bigger or smaller than 3?',
        options: ['Bigger — more small units fit', 'Smaller — meters are bigger', 'The same number'] },
      { kind: 'example', title: 'Convert with the relationship', component: 'workedExample',
        config: { problem: 'How many centimeters are in <b>3 meters</b>?',
          intro: 'Know the relationship, then multiply or divide.',
          steps: [
            { text: '1 meter = 100 centimeters.', why: 'The base relationship to remember.' },
            { ask: 'Going from meters to smaller cm — multiply or divide by 100?', choices: ['Multiply', 'Divide'], answer: 'Multiply', why: 'Smaller units → you need MORE of them → multiply.', hint: 'More small pieces fit in the same length.', misconceptions: { 'Divide': 'Dividing gives fewer — but small units means you need MORE of them' } },
            { text: '3 × 100 = <b>300 cm</b>.', math: '3 m = 300 cm' }
          ], done: 'Big → small unit: multiply. Small → big unit: divide.' } },
      { kind: 'discover', title: 'Big-to-small multiply, small-to-big divide', rule: 'Larger unit → smaller unit: ×.   Smaller unit → larger unit: ÷.',
        text: 'Within one system, units are linked by fixed numbers: 1 km = 1000 m, 1 m = 100 cm, 1 kg = 1000 g, 1 L = 1000 mL, 1 hour = 60 min. Converting to a <b>smaller</b> unit means you need <b>more</b> of them, so you <b>multiply</b>; converting to a <b>larger</b> unit means <b>fewer</b>, so you <b>divide</b>.' },
      { kind: 'practice', difficulty: 'easy', title: 'Single-step conversions', component: 'problemSet',
        config: { problems: [
          { prompt: '2 m = ___ cm', answer: '200', hint: '×100.' },
          { prompt: '5 km = ___ m', answer: '5000', hint: '×1000.' },
          { prompt: '3000 g = ___ kg', answer: '3', hint: '÷1000.' },
          { prompt: '4 hours = ___ minutes', answer: '240', hint: '×60.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Multi-step problems', component: 'problemSet',
        config: { problems: [
          { prompt: 'A ribbon is 2.5 m long. How many cm?', answer: '250', choices: ['250', '25', '2500'], hint: '2.5 × 100.' },
          { prompt: 'A jug holds 1500 mL. How many L?', answer: '1.5', choices: ['1.5', '15', '0.15'], hint: '÷1000.' },
          { prompt: 'A movie is 135 minutes. How many hours and minutes?', answer: '2 h 15 min', choices: ['2 h 15 min', '1 h 35 min', '2 h 5 min'], hint: '135 ÷ 60 = 2 remainder 15.' },
          { prompt: 'You have 3 m of tape and use 120 cm. How much is left (in cm)?', answer: '180', choices: ['180', '117', '2.8'], hint: 'First 3 m = 300 cm, then subtract 120.' }
        ] } },
      { kind: 'mastery', title: 'Conversions check', component: 'problemSet',
        config: { problems: [
          { prompt: '6 m = ___ cm', answer: '600', choices: ['600', '60', '0.06'], hint: '×100.', misconceptions: { '60': 'That’s ×10 — a meter is 100 cm, not 10' } },
          { prompt: '2500 m = ___ km', answer: '2.5', choices: ['2.5', '25', '250'], hint: '÷1000.', misconceptions: { '25': 'Divide by 1000, not 100' } },
          { prompt: '3 kg = ___ g', answer: '3000', choices: ['3000', '300', '30'], hint: '×1000.' },
          { prompt: '90 minutes = ___ hours', answer: '1.5', choices: ['1.5', '1.3', '9'], hint: '90 ÷ 60.', misconceptions: { '1.3': '90 min = 1 h 30 min = 1.5 h (30 min is half an hour)' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'How do you decide whether to multiply or divide when converting units?',
        starters: ['Going to a smaller unit I', 'A smaller unit means I need', 'The metric system is easy because'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Convert in the real world.',
        items: [
          { icon: '📏', label: 'Measure yourself', detail: 'Measure your height in cm, then convert to meters. Then to millimeters.' },
          { icon: '🥤', label: 'Kitchen liters', detail: 'Find a drink label in mL and convert it to liters.' },
          { icon: '⏱️', label: 'Time budget', detail: 'How many minutes in your school day? Convert hours to minutes and back.' }
        ] }
    ]
  });

  /* ----------------------------------------------- 5.M.3 · Area of triangles etc. */
  reg({
    concept: 'area-formulas', title: 'Area of Triangles & Parallelograms',
    standards: ['5.M.3'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'A triangle sits inside a rectangle of the same base and height. What fraction of the rectangle do you think the triangle covers?',
        options: ['The whole thing', 'Half of it', 'A quarter'] },
      { kind: 'example', title: 'Build the triangle formula', component: 'workedExample',
        config: { problem: 'Why is a triangle’s area <b>½ × base × height</b>?',
          intro: 'Start from a rectangle you already know.',
          steps: [
            { text: 'A rectangle’s area is base × height.', math: 'A = b × h', why: 'You learned this in Grade 3.' },
            { ask: 'Cut a rectangle along its diagonal. How many equal triangles?', choices: ['2', '3', '4'], answer: '2', why: 'The diagonal splits it into two identical triangles.', hint: 'One straight cut, corner to corner.' },
            { text: 'So one triangle is HALF the rectangle.', math: 'A = ½ × b × h', why: 'Half of base × height.' },
            { ask: 'A triangle with base 6 and height 4 has area…', choices: ['12', '24', '10'], answer: '12', why: '½ × 6 × 4 = 12.', hint: '½ × 6 × 4.', misconceptions: { '24': 'That’s the whole rectangle — a triangle is HALF' } }
          ], done: 'Triangle = half a rectangle → A = ½ b h.' } },
      { kind: 'discover', title: 'Everything comes from the rectangle', rule: 'Rectangle: A = b·h.  Parallelogram: A = b·h.  Triangle: A = ½·b·h.',
        text: 'A <b>parallelogram</b> has the same area as a rectangle with the same base and height — slide the slanted triangle from one end to the other and it becomes a rectangle, so A = base × height. A <b>triangle</b> is exactly <b>half</b> of that, so A = ½ × base × height. The <b>height</b> is always the straight-up distance, not the slanted side.' },
      { kind: 'practice', difficulty: 'easy', title: 'Area of a triangle', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const b = U.rand(2, 5) * 2, h = U.rand(2, 6); return { prompt: `Triangle: base <b>${b}</b>, height <b>${h}</b>. Area = ? square units`, answer: b * h / 2, hint: '½ × base × height.' }; }); } } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Mixed shapes', component: 'problemSet',
        config: { problems: [
          { prompt: 'Parallelogram: base 7, height 4. Area = ?', answer: '28', choices: ['28', '14', '22'], hint: 'base × height (no ½).' },
          { prompt: 'Triangle: base 10, height 3. Area = ?', answer: '15', choices: ['15', '30', '13'], hint: '½ × 10 × 3.' },
          { prompt: 'A triangle has area 20 and base 8. Its height is…', answer: '5', choices: ['5', '10', '2.5'], hint: 'Work backwards: 20 = ½ × 8 × h.' },
          { prompt: 'Perimeter of a triangle with sides 3, 4, 5?', answer: '12', choices: ['12', '60', '7'], hint: 'Perimeter = add the sides.' }
        ] } },
      { kind: 'mastery', title: 'Area check', component: 'problemSet',
        config: { problems: [
          { prompt: 'Triangle: base 6, height 8. Area = ?', answer: '24', choices: ['24', '48', '14'], hint: '½ × 6 × 8.', misconceptions: { '48': 'Forgot the ½ — a triangle is half of base × height' } },
          { prompt: 'Parallelogram: base 5, height 6. Area = ?', answer: '30', choices: ['30', '15', '11'], hint: 'base × height.', misconceptions: { '15': 'No ½ for a parallelogram — that’s only for triangles' } },
          { prompt: 'Which needs the ½ in its area formula?', answer: 'triangle', choices: ['triangle', 'rectangle', 'parallelogram'], hint: 'Half of a rectangle.' },
          { prompt: 'Triangle base 4, height 4. Area = ?', answer: '8', choices: ['8', '16', '4'], hint: '½ × 4 × 4.' }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'How does knowing the area of a rectangle help you find the area of a triangle and a parallelogram?',
        starters: ['A triangle is half of', 'A parallelogram rearranges into', 'The height is always the'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Measure real areas.',
        items: [
          { icon: '📐', label: 'Cut and prove', detail: 'Draw a rectangle, cut it along the diagonal. Stack the two triangles — identical!' },
          { icon: '🏠', label: 'Area of a gable', detail: 'The triangular top of a house wall — measure base and height and find its area.' },
          { icon: '🔷', label: 'Trapezoid challenge', detail: 'A trapezoid = a rectangle plus a triangle. Can you find its area by splitting it up?' }
        ] }
    ]
  });

  /* ------------------------------------------- 5.M.4 / 5.M.5 · Volume of prisms */
  reg({
    concept: 'volume', title: 'Volume',
    standards: ['5.M.4', '5.M.5'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'To find how much space fills a box, area (length × width) covers the FLOOR. What’s missing to fill the whole box?',
        options: ['Nothing — area is enough', 'The height — how many layers stack up', 'The color'] },
      { kind: 'example', title: 'Pack the box with unit cubes', component: 'workedExample',
        config: { problem: 'Find the volume of a box <b>4 × 3 × 2</b> (l × w × h).',
          intro: 'Volume = how many 1×1×1 unit cubes fit inside.',
          steps: [
            { ask: 'The bottom layer is 4 by 3. How many cubes in one layer?', choices: ['12', '9', '7'], answer: '12', why: 'That’s the area of the base: 4 × 3.', hint: 'Area of the base.' },
            { text: 'The box is 2 layers tall.', why: 'Height = 2 means 2 stacked layers.' },
            { ask: 'Two layers of 12 cubes each — total?', choices: ['24', '14', '12'], answer: '24', why: '12 × 2 = 24 unit cubes.', hint: '12 per layer × 2 layers.' },
            { text: 'Volume = l × w × h = 4 × 3 × 2 = <b>24 cubic units</b>.', math: 'V = 24' }
          ], done: 'Volume = base area × height = l × w × h.' } },
      { kind: 'discover', title: 'Volume is stacked layers', rule: 'V = l × w × h = B × h, where B (base area) = l × w. Answer is in CUBIC units.',
        text: 'Volume measures the space inside a solid, counted in <b>unit cubes</b>. Fill the bottom layer (that’s the base area, l × w), then stack it <b>h</b> layers high. So <b>V = l × w × h</b>, or equally <b>V = B × h</b> where B is the base area. Because you multiply three lengths, volume is measured in <b>cubic</b> units (cm³, in³…).' },
      { kind: 'practice', difficulty: 'easy', title: 'Volume of a box', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const l = U.rand(2, 6), w = U.rand(2, 5), h = U.rand(2, 4); return { prompt: `Box ${l} × ${w} × ${h}. Volume = ? cubic units`, answer: l * w * h, hint: 'l × w × h.' }; }); } } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Base area & missing sides', component: 'problemSet',
        config: { problems: [
          { prompt: 'Base area 15, height 4. Volume = ?', answer: '60', choices: ['60', '19', '30'], hint: 'V = B × h.' },
          { prompt: 'A cube has edges of 3. Its volume = ?', answer: '27', choices: ['27', '9', '18'], hint: '3 × 3 × 3.' },
          { prompt: 'Volume 48, base 12. Height = ?', answer: '4', choices: ['4', '36', '576'], hint: 'Work backwards: 48 ÷ 12.' },
          { prompt: 'A box 5×2×h has volume 40. Find h.', answer: '4', choices: ['4', '8', '10'], hint: '5×2 = 10; 40 ÷ 10.' }
        ] } },
      { kind: 'mastery', title: 'Volume check', component: 'problemSet',
        config: { problems: [
          { prompt: 'Box 3 × 4 × 5. Volume = ?', answer: '60', choices: ['60', '12', '47'], hint: 'Multiply all three.', misconceptions: { '12': 'That’s only the base (3×4) — you still multiply by the height', '47': 'Volume multiplies the sides; it doesn’t add them' } },
          { prompt: 'Volume is measured in ___ units.', answer: 'cubic', choices: ['cubic', 'square', 'straight'], hint: 'Three lengths multiplied.', misconceptions: { 'square': 'Square units are for AREA (two lengths); volume uses three' } },
          { prompt: 'A cube with edge 2 has volume…', answer: '8', choices: ['8', '6', '4'], hint: '2×2×2.' },
          { prompt: 'Base area 20, height 3. Volume = ?', answer: '60', choices: ['60', '23', '17'], hint: 'B × h.' }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why is volume measured in cubic units while area is measured in square units?',
        starters: ['Area covers a flat', 'Volume fills a', 'I multiply three lengths because'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Fill real space.',
        items: [
          { icon: '📦', label: 'Box it up', detail: 'Measure a cereal box (l, w, h) and find its volume in cubic centimeters.' },
          { icon: '🧊', label: 'Ice cube trays', detail: 'How many 1-cube layers stack into a container? Predict, then check.' },
          { icon: '🏗️', label: 'Combined solids', detail: 'An L-shaped block = two boxes joined. Find each volume and add them. (5.M.6)' }
        ] }
    ]
  });
})();
