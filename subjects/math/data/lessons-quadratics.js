/* Learning Atlas — Mathematics · Algebra I lessons: the quadratic & exponential
   strand (AI.QE) plus its factoring prerequisite (AI.NE.4). Teaching-first:
   every lesson interleaves worked examples (workedExample — reveal or supply
   each line) and focused discover cards between the manipulatives, so the
   learner is TAUGHT the method before being tested on it. Factoring gets the
   deepest treatment: FOIL first (factoring is un-multiplying), the area model
   (the rectangle's sides ARE the factors), then sign reasoning. Summative
   checks tag their distractors with the misconception each reveals.
   Registered on MATH.Player.                                                  */
(function () {
  const P = window.MATH.Player, U = window.MATH.util;
  const reg = P.register;

  /* ---- AI.NE.4 · Factoring Quadratics ------------------------------------ */
  reg({
    concept: 'factoring', title: 'Factoring Quadratics',
    standards: ['AI.NE.4'],
    steps: [
      { kind: 'teach', title: 'What factoring actually does',
        lead: 'Factoring <b>undoes multiplication</b>. Multiplying takes two brackets and spreads them into x² + bx + c; factoring runs that in reverse — you take the spread-out quadratic and <b>rebuild the two brackets</b> it came from. The whole job is a number hunt: find two numbers that fit both a <i>product</i> and a <i>sum</i>.',
        anatomy: {
          expr: '<span class="tint-x">x²</span> + <span class="tint-m">b</span>x + <span class="tint-b">c</span>  =  (x + <span class="tint-y">p</span>)(x + <span class="tint-y">q</span>)',
          parts: [
            { sym: 'c', tone: 'b', name: 'the product', desc: 'the two numbers must <b>multiply to c</b> — for x² + 5x + 6, they multiply to 6' },
            { sym: 'b', tone: 'm', name: 'the sum', desc: 'those same two numbers must <b>add to b</b> — for x² + 5x + 6, they add to 5' },
            { sym: 'p, q', tone: 'y', name: 'the pair', desc: 'the numbers you find — one drops into each bracket as (x + p)(x + q)' }
          ]
        },
        moves: [
          { label: 'c is positive', text: '→ the pair shares a sign (both + or both −), matching the sign of b.' },
          { label: 'c is negative', text: '→ the pair has opposite signs — one +, one −, with the bigger matching b’s sign.' },
          { label: 'Check by multiplying back', text: '→ multiply your brackets out; if you don’t land on the original, the pair is wrong.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'To factor <b>x² + 5x + 6</b>, hunt for two numbers that multiply to 6 and add to 5. That’s <b>2 and 3</b> — so it rebuilds as:',
          math: 'x² + 5x + 6 = (x + 2)(x + 3)'
        },
        takeaway: 'Factoring = find two numbers whose product is c and whose sum is b.' },

      { kind: 'prior', title: 'What do you think?',
        prompt: '<b>(x + 2)(x + 3)</b> multiplies out to x² + 5x + 6. So what would “factoring” x² + 5x + 6 mean?',
        options: ['Un-multiplying it back into (x + 2)(x + 3)', 'Setting it equal to zero', 'Making the x² disappear'] },

      { kind: 'example', title: 'First, watch the multiplication', component: 'workedExample',
        intro: 'You can’t un-multiply until you’ve seen the multiplication. Watch where every piece of x² + 5x + 6 comes from.',
        config: {
          problem: 'Multiply (x + 2)(x + 3)',
          steps: [
            { text: 'Every part of the first bracket multiplies every part of the second — four little products in all.',
              math: '(x + 2)(x + 3) = x·x + x·3 + 2·x + 2·3' },
            { text: 'The first product is the square:', math: 'x · x = x²' },
            { ask: 'The two middle products are x·3 = 3x and 2·x = 2x. What do they combine into?',
              choices: ['5x', '6x', '5x²'], answer: '5x',
              why: 'The x-terms ADD: 3x + 2x = 5x. The middle term is the SUM of 2 and 3.',
              hint: 'Like terms add: 3x + 2x.',
              misconceptions: { '6x': 'You multiplied 3 × 2 — but these two x-terms ADD together', '5x²': '3x + 2x has no x² — only x · x makes a square' },
              math: '3x + 2x = 5x' },
            { text: 'And the two plain numbers multiply:', math: '2 · 3 = 6' },
            { text: 'Put it together — and notice the pattern:', math: 'x² + 5x + 6',
              note: 'The 5 is 2 + 3 (a SUM). The 6 is 2 × 3 (a PRODUCT). That is the whole secret of factoring.' }
          ],
          done: 'So to go backwards, you hunt for two numbers whose SUM is the middle and whose PRODUCT is the end.'
        } },

      { kind: 'discover', title: 'Factoring is un-multiplying',
        text: 'To factor <b>x² + bx + c</b>, find two numbers with <b>product c</b> and <b>sum b</b>, then write one in each bracket: for x² + 5x + 6, the pair is 2 and 3, so it factors as <b>(x + 2)(x + 3)</b>. Always <b>check by multiplying back out</b> — if you don’t land on the original, the pair is wrong.',
        rule: 'find the pair: product = c · sum = b → (x + _)(x + _)' },

      { kind: 'explore', title: 'See it as area', intro: 'A quadratic is literally a rectangle: one x² tile, b x-strips, c unit tiles. Arrange them and the rectangle’s SIDES are the factors.', component: 'areaModel', config: { rounds: 3 } },

      { kind: 'explore', title: 'Find the pair', intro: 'The number hunt on its own: which pair multiplies to c and adds to b?', component: 'problemSet',
        config: { problems: [
          { prompt: 'Which pair multiplies to <b>6</b> and adds to <b>5</b>?', answer: '2 and 3', choices: ['2 and 3', '1 and 6', '−2 and −3'], hint: '2 × 3 = 6 and 2 + 3 = 5.' },
          { prompt: 'Which pair multiplies to <b>8</b> and adds to <b>6</b>?', answer: '2 and 4', choices: ['2 and 4', '1 and 8', '−2 and −4'], hint: 'Check both the product and the sum.' },
          { prompt: 'Which pair multiplies to <b>−10</b> and adds to <b>3</b>?', answer: '5 and −2', choices: ['5 and −2', '−5 and 2', '5 and 2'], hint: 'A negative product needs one negative number.' }
        ] } },

      { kind: 'example', title: 'Now with negatives, start to finish', component: 'workedExample',
        intro: 'Signs are where factoring goes wrong. Reason them out FIRST, then hunt for numbers.',
        config: {
          problem: 'Factor x² − 2x − 15',
          steps: [
            { text: 'Name the hunt: two numbers with product −15 and sum −2.', math: '__ × __ = −15  ·  __ + __ = −2' },
            { text: 'Reason about signs before touching numbers. The product is NEGATIVE, so the two numbers have opposite signs — one +, one −. The sum is −2, so the bigger one carries the minus.',
              math: 'one +, one − · the larger is negative' },
            { ask: 'Which pair fits?', choices: ['−5 and 3', '5 and −3', '−15 and 1'], answer: '−5 and 3',
              why: '−5 × 3 = −15 ✓ and −5 + 3 = −2 ✓',
              hint: 'The bigger number must be the negative one.',
              misconceptions: { '5 and −3': 'That pair sums to +2 — you need −2, so the BIGGER number takes the minus', '−15 and 1': '−15 + 1 = −14, not −2 — right product, wrong sum' } },
            { text: 'Write each number into its own bracket:', math: '(x − 5)(x + 3)' },
            { text: 'Check by multiplying back:', math: 'x² + 3x − 5x − 15 = x² − 2x − 15 ✓' }
          ],
          done: 'Signs first, numbers second, check last — that routine works on every factorable quadratic.'
        } },

      { kind: 'discover', title: 'Read the signs before you hunt',
        text: 'The signs of b and c tell you the bracket signs in advance. If <b>c is positive</b>, the two numbers share a sign — both take <b>b’s sign</b> (x² − 8x + 15 → both negative). If <b>c is negative</b>, the signs are opposite — and the <b>bigger number takes b’s sign</b> (x² + 3x − 10 → +5 and −2). Knowing this halves the hunt.',
        rule: 'c > 0: same signs, matching b · c < 0: opposite signs, bigger number matches b' },

      { kind: 'discover', title: 'Two patterns to know on sight',
        text: 'Two specials skip the hunt entirely. <b>Difference of squares</b> — no middle term, a minus between two squares: x² − 9 = <b>(x + 3)(x − 3)</b> (the +3x and −3x cancel). <b>Perfect square trinomial</b> — the ends are squares and the middle is twice their product: x² + 6x + 9 = <b>(x + 3)²</b> (since 3 + 3 = 6 and 3 × 3 = 9).',
        rule: 'x² − n² = (x + n)(x − n) · x² + 2nx + n² = (x + n)²' },

      { kind: 'practice', difficulty: 'easy', title: 'Factor these', component: 'problemSet',
        config: { problems: [
          { prompt: 'Factor: <b>x² + 7x + 12</b>', answer: '(x + 3)(x + 4)', choices: ['(x + 3)(x + 4)', '(x + 2)(x + 6)', '(x + 1)(x + 12)'], hint: 'Product 12, sum 7.' },
          { prompt: 'Factor: <b>x² − 25</b>', answer: '(x + 5)(x − 5)', choices: ['(x + 5)(x − 5)', '(x − 5)(x − 5)', '(x + 5)(x + 5)'], hint: 'A difference of squares.' },
          { prompt: 'Factor: <b>x² + 4x + 4</b>', answer: '(x + 2)²', choices: ['(x + 2)²', '(x + 4)(x + 1)', '(x + 2)(x − 2)'], hint: 'A perfect square trinomial.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Watch the signs', component: 'problemSet',
        config: { problems: [
          { prompt: 'Factor: <b>x² − x − 12</b>', answer: '(x − 4)(x + 3)', choices: ['(x − 4)(x + 3)', '(x + 4)(x − 3)', '(x − 6)(x + 2)'], hint: 'Product −12, sum −1.' },
          { prompt: 'Factor: <b>x² − 8x + 15</b>', answer: '(x − 3)(x − 5)', choices: ['(x − 3)(x − 5)', '(x + 3)(x + 5)', '(x − 15)(x + 7)'], hint: 'Positive product, negative sum → both negative.' }
        ] } },
      { kind: 'mastery', title: 'Factoring check', component: 'problemSet',
        config: { problems: [
          { prompt: 'Factor: <b>x² + 9x + 20</b>', answer: '(x + 4)(x + 5)', choices: ['(x + 4)(x + 5)', '(x + 2)(x + 10)', '(x + 1)(x + 20)'], hint: 'Product 20, sum 9.', misconceptions: { '(x + 2)(x + 10)': 'That pair multiplies to 20 but adds to 12 — check the SUM too', '(x + 1)(x + 20)': 'That pair adds to 21 — both conditions must hold' } },
          { prompt: 'Factor: <b>x² − 16</b>', answer: '(x + 4)(x − 4)', choices: ['(x + 4)(x − 4)', '(x − 4)²', '(x − 8)(x + 2)'], hint: 'Difference of squares.', misconceptions: { '(x − 4)²': '(x − 4)² gives x² − 8x + 16 — a middle term appears. Difference of squares needs one + and one −' } },
          { prompt: 'Factor: <b>x² − 2x − 15</b>', answer: '(x − 5)(x + 3)', choices: ['(x − 5)(x + 3)', '(x + 5)(x − 3)', '(x − 5)(x − 3)'], hint: 'Product −15, sum −2.', misconceptions: { '(x + 5)(x − 3)': 'Signs flipped — that adds to +2, but you need −2', '(x − 5)(x − 3)': 'Two negatives multiply to +15, but you need −15' } },
          { prompt: '<b>x² + 10x + 25</b> =', answer: '(x + 5)²', choices: ['(x + 5)²', '(x + 5)(x − 5)', '(x + 25)(x + 1)'], hint: 'Perfect square.', misconceptions: { '(x + 5)(x − 5)': 'That’s the difference of squares x² − 25 — no middle term' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'How do the signs of b and c tell you the signs inside the factors before you even hunt for numbers?',
        starters: ['If c is positive, the two numbers', 'If c is negative, the two numbers', 'The sign of b tells me'] },
      { kind: 'extend', title: 'Go further', intro: 'Push the un-multiplying idea.',
        items: [
          { icon: '🧲', label: 'Pull out the GCF first', detail: 'Some quadratics hide a common factor: 3x² + 12x = 3x(x + 4). Always check for one before the pair hunt.' },
          { icon: '🎯', label: 'Why factor at all?', detail: 'If (x − 4)(x + 3) = 0, one factor must be 0. What are the two x-values? That’s the next lesson.' },
          { icon: '⚙️', label: 'Leading coefficients', detail: 'Try factoring 2x² + 7x + 3 — the x² coefficient joins the hunt.' }
        ] }
    ]
  });

  /* ---- AI.QE.6 · Graphing Parabolas -------------------------------------- */
  reg({
    concept: 'quadratic-graphs', title: 'Graphing Parabolas',
    standards: ['AI.QE.6'],
    steps: [
      { kind: 'teach', title: 'What sets a parabola’s shape',
        lead: 'Every quadratic graphs as a <b>parabola</b> — a symmetric U-shaped cup. Three things describe it: the <b>vertex</b> (the turning point), the <b>axis of symmetry</b> (the vertical mirror line through it), and the <b>direction</b> it opens. In vertex form <b>y = a(x − h)² + k</b>, those three are handed to you directly.',
        anatomy: {
          expr: 'y = <span class="tint-m">a</span>(x − <span class="tint-x">h</span>)² + <span class="tint-y">k</span>',
          parts: [
            { sym: 'a', tone: 'm', name: 'the shape', desc: 'sets the cup — <b>a &gt; 0 opens up</b> (a minimum), <b>a &lt; 0 opens down</b> (a maximum); bigger |a| is narrower' },
            { sym: 'h', tone: 'x', name: 'left/right', desc: 'the vertex’s x — the <b>axis of symmetry is x = h</b>. Mind the sign: (x − 3)² turns at x = <b>+3</b>' },
            { sym: 'k', tone: 'y', name: 'up/down', desc: 'the vertex’s height — how far the whole cup sits above or below the x-axis' }
          ]
        },
        moves: [
          { label: 'Flip the sign of a', text: '→ the cup flips over — an upward U becomes a downward ∩.' },
          { label: 'Change h', text: '→ the whole parabola slides left or right; the axis of symmetry moves with it.' },
          { label: 'Change k', text: '→ the parabola slides straight up or down; its shape never changes.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: '<b>y = (x − 2)² − 1</b> reads as: “a = 1 so it opens <b>up</b>, vertex sits at <b>(2, −1)</b>, mirror line x = 2.” The square is zero exactly at x = 2 — that’s the bottom of the cup:',
          math: 'vertex (2, −1) · axis x = 2 · opens up'
        },
        takeaway: 'a shapes the cup; h slides it sideways; k slides it up or down.' },

      { kind: 'prior', title: 'What do you think?',
        prompt: 'A ball thrown upward rises, slows, turns, and falls. What shape does its height trace over time?',
        options: ['An arch (a parabola)', 'A straight line', 'A circle'] },
      { kind: 'explore', title: 'Shape the parabola', intro: 'Match each dashed target — feel what a, h and k each do.', component: 'parabolaExplorer', config: { mode: 'explore', rounds: 3 } },
      { kind: 'discover', title: 'Vertex form', text: 'Every quadratic graphs as a <b>parabola</b>. In vertex form <b>y = a(x − h)² + k</b>: the <b>vertex</b> sits at (h, k), the curve is symmetric about the <b>axis of symmetry</b> x = h, and <b>a</b> controls the cup — a &gt; 0 opens <b>up</b> (vertex is a minimum), a &lt; 0 opens <b>down</b> (a maximum). Mind the sign: (x − 3)² turns at x = <b>+3</b>.', rule: 'y = a(x − h)² + k → vertex (h, k), axis x = h' },

      { kind: 'example', title: 'Graph one by hand', component: 'workedExample',
        intro: 'Five points are enough for a clean sketch — and symmetry hands you two of them for free.',
        config: {
          problem: 'Sketch y = (x − 2)² − 1',
          steps: [
            { text: 'Read the vertex straight off the form: h = 2, k = −1.', math: 'vertex (2, −1) · axis of symmetry x = 2' },
            { ask: 'a = 1 is positive. Which way does the cup open?',
              choices: ['up — the vertex is a minimum', 'down — the vertex is a maximum'], answer: 'up — the vertex is a minimum',
              why: 'a > 0 opens up, so (2, −1) is the lowest point of the whole graph.',
              hint: 'Positive a holds water.' },
            { text: 'Plug in an x one step right of the axis, x = 3:', math: 'y = (3 − 2)² − 1 = 0 → point (3, 0)' },
            { text: 'Symmetry gives its mirror for free — one step LEFT of the axis, same height:', math: '(1, 0) — no arithmetic needed' },
            { ask: 'x = 4 gives y = (4 − 2)² − 1 = 3, the point (4, 3). Where is its mirror point?',
              choices: ['(0, 3)', '(4, −3)', '(2, 3)'], answer: '(0, 3)',
              why: 'x = 4 sits two steps right of the axis x = 2, so the mirror is two steps left: x = 0, same height 3.',
              hint: 'Count steps from the axis x = 2, then go the same distance the other way.',
              misconceptions: { '(2, 3)': 'x = 2 is the axis itself — the mirror lands the same distance on the OTHER side', '(4, −3)': 'Reflection is across the vertical axis — the HEIGHT stays the same' } },
            { text: 'Five points, one smooth cup through them:', math: '(2,−1) · (1,0) (3,0) · (0,3) (4,3)' }
          ],
          done: 'Vertex → open direction → one plugged point per side → mirror the rest. That’s every parabola sketch.'
        } },

      { kind: 'discover', title: 'Why h looks backwards',
        text: 'The (x − h)² sign trips everyone. A square is never negative, so <b>(x − h)² is smallest — zero — exactly when x = h</b>. For (x − 3)², that’s x = <b>+3</b>: the subtraction names the x-value that zeroes the square, which is where the vertex lives. Bonus point for free: set x = 0 and you get the <b>y-intercept</b> — for y = (x − 2)² − 1, that’s (0, 3).',
        rule: 'the vertex sits where the square is zero: x = h' },

      { kind: 'practice', difficulty: 'easy', title: 'Click the vertex', component: 'parabolaExplorer', config: { mode: 'vertex', rounds: 2 } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Read the equation', component: 'problemSet',
        config: { problems: [
          { prompt: 'The vertex of <b>y = (x − 2)² + 5</b> is…', answer: '(2, 5)', choices: ['(2, 5)', '(−2, 5)', '(2, −5)'], hint: 'The square is zero when x = 2.' },
          { prompt: 'The axis of symmetry of <b>y = (x + 4)² − 1</b> is…', answer: 'x = −4', choices: ['x = −4', 'x = 4', 'y = −1'], hint: '(x + 4) = (x − (−4)).' },
          { prompt: '<b>y = −2(x − 1)² + 3</b> opens…', answer: 'down, with a maximum', choices: ['down, with a maximum', 'up, with a minimum'], hint: 'Look at the sign of a.' }
        ] } },
      { kind: 'mastery', title: 'Parabola check', component: 'problemSet',
        config: { problems: [
          { prompt: 'The vertex of <b>y = (x − 3)² − 2</b> is…', answer: '(3, −2)', choices: ['(3, −2)', '(−3, −2)', '(3, 2)', '(−3, 2)'], hint: 'x = h makes the square zero.', misconceptions: { '(−3, −2)': 'Sign flip — (x − 3)² turns at x = +3, not −3', '(3, 2)': 'k is −2, so the vertex sits 2 below the axis' } },
          { prompt: '<b>y = −(x + 1)² + 4</b> opens…', answer: 'down', choices: ['down', 'up'], hint: 'a = −1.', misconceptions: { 'up': 'a is negative, so the cup flips: it opens down' } },
          { prompt: 'The axis of symmetry of <b>y = 2(x − 5)²</b> is…', answer: 'x = 5', choices: ['x = 5', 'x = 2', 'y = 5'], hint: 'The vertical line through the vertex.', misconceptions: { 'x = 2': 'The 2 is a (the stretch) — the axis comes from h', 'y = 5': 'The axis of symmetry is a VERTICAL line, x = h' } },
          { prompt: 'For a &gt; 0, the vertex is the parabola’s…', answer: 'minimum', choices: ['minimum', 'maximum', 'y-intercept'], hint: 'The cup opens up.', misconceptions: { 'maximum': 'Opens-up means the vertex is the LOWEST point — a minimum' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why does the h in (x − h)² move the parabola right when it looks like subtraction? What value of x makes the square zero?',
        starters: ['The square (x − h)² is smallest when', 'The vertex sits at x = h because', 'a tells me'] },
      { kind: 'extend', title: 'Go further', intro: 'Parabolas in the wild.',
        items: [
          { icon: '⛲', label: 'Spot the parabola', detail: 'Water from a fountain, a basketball shot, a headlight reflector — find three real parabolas today.' },
          { icon: '📐', label: 'Standard form', detail: 'Expand y = (x − 2)² + 1 into y = x² − 4x + 5. Same curve — which form shows the vertex faster?' },
          { icon: '🛰️', label: 'Why reflectors?', detail: 'Look up why satellite dishes are parabolic — every incoming ray bounces to one focus point.' }
        ] }
    ]
  });

  /* ---- AI.QE.4 · Solving Quadratics -------------------------------------- */
  reg({
    concept: 'solve-quadratics', title: 'Solving Quadratics',
    standards: ['AI.QE.4'],
    steps: [
      { kind: 'teach', title: 'What “solving” a quadratic means',
        lead: 'Solving a quadratic means finding the <b>x-values where y = 0</b> — the <b>roots</b>. Once you’ve factored, the key that unlocks them is the <b>zero-product property</b>: if two things multiply to zero, at least one of them <i>must be</i> zero. That turns one hard equation into two easy ones.',
        anatomy: {
          expr: '<span class="tint-b">(x − 3)</span> · <span class="tint-x">(x + 2)</span> = <span class="tint-m">0</span>',
          parts: [
            { sym: '= 0', tone: 'm', name: 'the setup', desc: 'everything must be on one side <b>equal to zero</b> first — that’s what makes the next step legal' },
            { sym: '(x − 3)', tone: 'b', name: 'factor one', desc: 'set it to zero on its own: <b>x − 3 = 0 → x = 3</b>' },
            { sym: '(x + 2)', tone: 'x', name: 'factor two', desc: 'set it to zero on its own: <b>x + 2 = 0 → x = −2</b>' }
          ]
        },
        moves: [
          { label: 'A product hits zero', text: '→ one of the factors is zero — so each factor gives its own solution.' },
          { label: 'It’s already a bare square', text: '→ take square roots instead: x² = 49 → x = ±7 (never drop the negative).' },
          { label: 'It won’t factor', text: '→ the quadratic formula x = (−b ± √(b² − 4ac)) / 2a always works.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'To solve <b>x² − x − 6 = 0</b>, factor to <b>(x − 3)(x + 2) = 0</b>, then set each factor to zero. Two little equations, two roots:',
          math: 'x − 3 = 0 or x + 2 = 0  →  x = 3 or x = −2'
        },
        takeaway: 'Roots are where y = 0; the zero-product rule splits one equation into two.' },

      { kind: 'prior', title: 'What do you think?',
        prompt: 'If <b>x² = 49</b>, what could x be?',
        options: ['7 or −7', 'Only 7', '24.5'] },
      { kind: 'explore', title: 'The zero-product idea', intro: 'If two things multiply to zero, one of them must BE zero. Use that.', component: 'problemSet',
        config: { problems: [
          { prompt: 'If <b>(x − 2)(x + 5) = 0</b>, then x =', answer: '2 or −5', choices: ['2 or −5', '−2 or 5', '2 and 5'], hint: 'Set each factor to zero.' },
          { prompt: 'If <b>x(x − 7) = 0</b>, then x =', answer: '0 or 7', choices: ['0 or 7', 'only 7', '0 or −7'], hint: 'x itself is a factor.' },
          { prompt: 'If <b>(x + 3)² = 0</b>, then x =', answer: '−3', choices: ['−3', '3', '−3 or 3'], hint: 'Both factors are the same.' }
        ] } },

      { kind: 'example', title: 'Solve by factoring, start to finish', component: 'workedExample',
        intro: 'Factoring turns one hard question into two easy ones. Here’s the full routine.',
        config: {
          problem: 'Solve x² − x − 6 = 0',
          steps: [
            { text: 'Everything is already on one side, equal to zero — that’s required before factoring helps.', math: 'x² − x − 6 = 0' },
            { ask: 'Factor the left side: which pair multiplies to −6 and adds to −1?',
              choices: ['−3 and 2', '3 and −2', '−6 and 1'], answer: '−3 and 2',
              why: '−3 × 2 = −6 ✓ and −3 + 2 = −1 ✓ — so it factors as (x − 3)(x + 2).',
              hint: 'Product negative → opposite signs; sum −1 → the bigger number is negative.',
              misconceptions: { '3 and −2': 'That pair adds to +1, but the middle term is −1x', '−6 and 1': '−6 + 1 = −5 — right product, wrong sum' },
              math: '(x − 3)(x + 2) = 0' },
            { text: 'Zero product: if two factors multiply to zero, one of them IS zero. Set each to zero separately.',
              math: 'x − 3 = 0  or  x + 2 = 0' },
            { text: 'Solve the two tiny equations:', math: 'x = 3  or  x = −2' },
            { text: 'Check both in the original:', math: '3² − 3 − 6 = 0 ✓ · (−2)² − (−2) − 6 = 4 + 2 − 6 = 0 ✓' }
          ],
          done: 'Set to zero → factor → each factor to zero → check both answers.'
        } },

      { kind: 'discover', title: 'Three ways in', text: 'Pick the tool that fits the form: bare square → <b>square roots</b> (x² = 49 → x = ±7 — never forget the negative). Factorable → <b>factor and use the zero product</b>, as you just did. Anything else → the <b>quadratic formula</b>, x = (−b ± √(b² − 4ac)) / 2a, which always works. Watch it run next.', rule: 'square roots · factoring · the formula — match the tool to the form' },

      { kind: 'example', title: 'The quadratic formula, start to finish', component: 'workedExample',
        intro: 'The formula solves ANY quadratic ax² + bx + c = 0 — no factoring luck required. The only skills are naming a, b, c and keeping signs straight.',
        config: {
          problem: 'Solve x² + 4x − 5 = 0 with x = (−b ± √(b² − 4ac)) / 2a',
          steps: [
            { text: 'Name the three coefficients — signs included:', math: 'a = 1 · b = 4 · c = −5' },
            { ask: 'Compute the part under the root first: b² − 4ac = ?',
              choices: ['36', '−4', '11'], answer: '36',
              why: '4² − 4(1)(−5) = 16 + 20 = 36. Subtracting 4ac when c is negative ADDS.',
              hint: 'Careful: −4 · 1 · (−5) is positive.',
              misconceptions: { '−4': 'Sign slip — −4(1)(−5) is +20, so 16 + 20 = 36', '11': 'b² means 4² = 16, not 4 — then add 20' },
              math: 'b² − 4ac = 16 + 20 = 36' },
            { text: 'Root it and drop everything into the formula:', math: 'x = (−4 ± √36) / 2(1) = (−4 ± 6) / 2' },
            { text: 'The ± is why quadratics have two answers — split it into + and −:',
              math: 'x = (−4 + 6)/2 = 1  or  x = (−4 − 6)/2 = −5' },
            { text: 'Sanity check: this one also factors, and factoring agrees:', math: '(x − 1)(x + 5) = 0 → x = 1 or −5 ✓' }
          ],
          done: 'Name a, b, c → discriminant → root → split the ± into two answers.'
        } },

      { kind: 'discover', title: 'Anatomy of the formula',
        text: 'Each piece of <b>x = (−b ± √(b² − 4ac)) / 2a</b> has a job. The <b>±</b> IS the two solutions — one plus, one minus. The part under the root, <b>b² − 4ac</b>, is the <b>discriminant</b>: it decides how many real solutions exist before you solve. Positive → <b>two</b> crossings; zero → the root vanishes and both answers merge into <b>one</b> (the parabola just touches the axis); negative → <b>no real</b> solutions (the parabola misses the axis entirely).',
        rule: 'b² − 4ac: &gt; 0 two real · = 0 one repeated · &lt; 0 none real' },

      { kind: 'practice', difficulty: 'easy', title: 'Solve them', component: 'problemSet',
        config: { problems: [
          { prompt: 'Solve: <b>x² = 81</b>', answer: 'x = ±9', choices: ['x = ±9', 'x = 9', 'x = 40.5'], hint: 'Two numbers square to 81.' },
          { prompt: 'Solve: <b>x² − 5x + 6 = 0</b>', answer: 'x = 2 or 3', choices: ['x = 2 or 3', 'x = −2 or −3', 'x = 1 or 6'], hint: 'Factor: product 6, sum −5 → (x − 2)(x − 3).' },
          { prompt: 'Solve: <b>x² + 2x = 0</b>', answer: 'x = 0 or −2', choices: ['x = 0 or −2', 'x = −2 only', 'x = 0 or 2'], hint: 'Factor out x first.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Choose your tool', component: 'problemSet',
        config: { problems: [
          { prompt: 'Solve: <b>(x − 4)² = 25</b>', answer: 'x = 9 or −1', choices: ['x = 9 or −1', 'x = 9 only', 'x = ±5'], hint: 'Square-root both sides first: x − 4 = ±5.' },
          { prompt: 'Solve: <b>x² − 2x − 8 = 0</b>', answer: 'x = 4 or −2', choices: ['x = 4 or −2', 'x = −4 or 2', 'x = 8 or −1'], hint: 'Product −8, sum −2.' },
          { prompt: 'Use the formula on <b>x² + 2x − 3 = 0</b>. The discriminant and solutions are…', answer: '16 → x = 1 or −3', choices: ['16 → x = 1 or −3', '−8 → no real solutions', '4 → x = 1 or −3'], hint: 'b² − 4ac = 4 + 12.' }
        ] } },
      { kind: 'mastery', title: 'Solving check', component: 'problemSet',
        config: { problems: [
          { prompt: 'Solve: <b>x² = 36</b>', answer: 'x = 6 or −6', choices: ['x = 6 or −6', 'x = 6 only', 'x = 18', 'x = ±18'], hint: 'Both roots.', misconceptions: { 'x = 6 only': 'Forgot the negative root — (−6)² is also 36', 'x = 18': 'That halves 36 — square roots undo squaring, they don’t divide by 2' } },
          { prompt: 'Solve: <b>(x + 2)(x − 7) = 0</b>', answer: 'x = −2 or 7', choices: ['x = −2 or 7', 'x = 2 or −7', 'x = −2 only'], hint: 'Each factor to zero.', misconceptions: { 'x = 2 or −7': 'Signs flipped — (x + 2) = 0 means x = −2', 'x = −2 only': 'TWO factors → up to two solutions' } },
          { prompt: 'Solve: <b>x² + 3x − 10 = 0</b>', answer: 'x = 2 or −5', choices: ['x = 2 or −5', 'x = −2 or 5', 'x = 10 or −1'], hint: 'Product −10, sum +3.', misconceptions: { 'x = −2 or 5': 'Signs flipped — check: 5 + (−2) = +3 must be the middle term’s sign pattern after factoring (x + 5)(x − 2)' } },
          { prompt: '<b>x² − 6x + 9 = 0</b> has how many solutions?', answer: 'one (repeated) — x = 3', choices: ['one (repeated) — x = 3', 'two: x = 3 and −3', 'none'], hint: 'Discriminant: 36 − 36.', misconceptions: { 'two: x = 3 and −3': 'It factors as (x − 3)² — both factors give the SAME x = 3', 'none': 'The discriminant is 0, not negative — the parabola touches the axis once' } },
          { prompt: 'Which method ALWAYS works on any quadratic?', answer: 'The quadratic formula', choices: ['The quadratic formula', 'Factoring', 'Inspection'], hint: 'One tool has no prerequisites.', misconceptions: { 'Factoring': 'Many quadratics don’t factor over the integers — the formula never fails' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why does a quadratic usually have TWO solutions, where a linear equation has one?',
        starters: ['Squaring hides the sign, so', 'The zero product gives two answers because', 'I’d pick the formula when'] },
      { kind: 'extend', title: 'Go further', intro: 'Beyond the three tools.',
        items: [
          { icon: '🧮', label: 'Where the formula comes from', detail: 'The formula is just completing the square done once, in general, for ax² + bx + c = 0. Look up the derivation — every piece will look familiar.' },
          { icon: '🚀', label: 'A real projectile', detail: 'h = −5t² + 20t gives a rocket’s height. When does it land (h = 0)? Factor out t.' },
          { icon: '🔍', label: 'Discriminant fluency', detail: 'Without solving, count the real solutions of x² + 1 = 0, x² − 4x + 4 = 0, and x² − x − 1 = 0.' }
        ] }
    ]
  });

  /* ---- AI.QE.7 · Zeros, Roots & Factors ---------------------------------- */
  reg({
    concept: 'quadratic-zeros', title: 'Zeros, Roots & Factors',
    standards: ['AI.QE.7'],
    steps: [
      { kind: 'teach', title: 'Zeros, roots, x-intercepts — one thing',
        lead: 'These three words all name the <b>same numbers</b>: the <b>zeros</b> of the function, the <b>roots</b> of the equation, and the <b>x-intercepts</b> of the graph — the x-values where the parabola crosses the x-axis. And the <b>factors</b> point straight at them: (x − 3) means a crossing at x = 3.',
        anatomy: {
          expr: 'y = (x − <span class="tint-b">3</span>)(x + <span class="tint-x">2</span>)  →  crosses at x = <span class="tint-b">3</span>, <span class="tint-x">−2</span>',
          parts: [
            { sym: '(x − 3)', tone: 'b', name: 'right crossing', desc: 'this factor is zero at <b>x = 3</b> — a zero r ⟷ the factor (x − r), so mind the sign flip' },
            { sym: '(x + 2)', tone: 'x', name: 'left crossing', desc: 'this factor is zero at <b>x = −2</b> — the graph pierces the x-axis there' },
            { sym: 'y = 0', tone: 'm', name: 'the crossing line', desc: 'a crossing is any point where <b>y = 0</b> — which is exactly what solving sets up' }
          ]
        },
        moves: [
          { label: 'Two distinct factors', text: '→ two crossings — the parabola cuts the x-axis at two spots.' },
          { label: 'A repeated factor (x − 3)²', text: '→ one crossing — the vertex just touches the axis (one real zero).' },
          { label: 'The cup floats off the axis', text: '→ zero real crossings — the two solutions are complex, not real.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'For <b>y = x² − x − 6 = (x − 3)(x + 2)</b>, the zeros, roots, and x-intercepts are all the same pair — the graph crosses at:',
          math: 'x = 3 and x = −2'
        },
        takeaway: 'Zeros = roots = x-intercepts; there can be 2, 1, or 0 real ones.' },

      { kind: 'prior', title: 'What do you think?',
        prompt: 'You solved x² − x − 6 = 0 and got x = 3 and x = −2. Where would the graph of y = x² − x − 6 cross the x-axis?',
        options: ['At x = 3 and x = −2 — same numbers', 'At x = −3 and x = 2 — flipped', 'You can’t tell from the solutions'] },
      { kind: 'explore', title: 'Click the zeros', intro: 'The zeros are where the curve crosses the x-axis — find both.', component: 'parabolaExplorer', config: { mode: 'zeros', rounds: 3 } },
      { kind: 'discover', title: 'Four names, one thing', text: 'For a quadratic, these are all the SAME numbers: the <b>solutions</b> of ax² + bx + c = 0, the <b>zeros</b> of the function, the <b>x-intercepts</b> of the graph, and (sign-flipped) the <b>factors</b>: zeros 3 and −2 ⟷ factors (x − 3)(x + 2). And if the parabola never touches the x-axis? The two solutions still exist — they’re <b>complex</b>, not real.', rule: 'solutions = zeros = x-intercepts ⟷ factors (x − r)' },

      { kind: 'example', title: 'From factors to a full sketch', component: 'workedExample',
        intro: 'The factors don’t just solve the equation — they hand you the whole graph.',
        config: {
          problem: 'Sketch y = x² − 2x − 8 using its factors',
          steps: [
            { ask: 'Factor it: which is right?',
              choices: ['(x − 4)(x + 2)', '(x + 4)(x − 2)', '(x − 8)(x + 1)'], answer: '(x − 4)(x + 2)',
              why: 'Product −8, sum −2 → the pair is −4 and +2.',
              hint: 'Two numbers: product −8, sum −2.',
              misconceptions: { '(x + 4)(x − 2)': 'Signs flipped — that expands to x² + 2x − 8', '(x − 8)(x + 1)': '−8 + 1 = −7, but the middle term needs −2' },
              math: 'y = (x − 4)(x + 2)' },
            { text: 'Each factor names a crossing — set each to zero:', math: 'zeros: x = 4 and x = −2' },
            { ask: 'The vertex sits exactly midway between the zeros (symmetry!). At which x?',
              choices: ['x = 1', 'x = 3', 'x = 2'], answer: 'x = 1',
              why: 'Midpoint of −2 and 4: (−2 + 4) / 2 = 1.',
              hint: 'Average the two zeros.' },
            { text: 'Plug x = 1 back in for the vertex height:', math: 'y = 1 − 2 − 8 = −9 → vertex (1, −9)' },
            { text: 'Crossings at −2 and 4, bottom of the cup at (1, −9), opening up — the whole graph, straight from the factors.', math: '(−2, 0) · (1, −9) · (4, 0)' }
          ],
          done: 'Factors → zeros → midpoint → vertex. Factored form is a picture in disguise.'
        } },

      { kind: 'practice', difficulty: 'easy', title: 'Translate between forms', component: 'problemSet',
        config: { problems: [
          { prompt: 'Zeros at <b>x = 1 and x = 4</b>. The factors are…', answer: '(x − 1)(x − 4)', choices: ['(x − 1)(x − 4)', '(x + 1)(x + 4)', '(x − 1)(x + 4)'], hint: 'Zero r → factor (x − r).' },
          { prompt: '<b>y = (x + 6)(x − 2)</b> has zeros at…', answer: 'x = −6 and 2', choices: ['x = −6 and 2', 'x = 6 and −2', 'x = 6 and 2'], hint: 'Set each factor to zero.' },
          { prompt: 'A parabola crosses the x-axis at −3 and 5. The solutions of its equation = 0 are…', answer: 'x = −3 and 5', choices: ['x = −3 and 5', 'x = 3 and −5', 'x = 0'], hint: 'Crossings ARE the solutions.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'No crossings?', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>y = x² + 4</b> never touches the x-axis. Its two solutions are…', answer: 'complex (not real)', choices: ['complex (not real)', 'x = ±2', 'it has no solutions at all'], hint: 'x² = −4 has no real answer — but √−1 = i exists.' },
          { prompt: 'A parabola that just TOUCHES the x-axis at x = 3 has…', answer: 'one repeated zero: (x − 3)²', choices: ['one repeated zero: (x − 3)²', 'zeros at 3 and −3', 'no zeros'], hint: 'The vertex sits on the axis.' }
        ] } },
      { kind: 'mastery', title: 'Connections check', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>y = (x − 5)(x + 1)</b> crosses the x-axis at…', answer: '5 and −1', choices: ['5 and −1', '−5 and 1', '5 and 1', '−5 and −1'], hint: 'Each factor → its zero.', misconceptions: { '−5 and 1': 'Sign flip — the factor (x − 5) is zero at x = +5' } },
          { prompt: 'Zeros at <b>−2 and 7</b> → the quadratic is…', answer: '(x + 2)(x − 7)', choices: ['(x + 2)(x − 7)', '(x − 2)(x + 7)', '(x − 2)(x − 7)'], hint: 'Zero r → factor (x − r).', misconceptions: { '(x − 2)(x + 7)': 'Reversed — zero −2 gives factor (x − (−2)) = (x + 2)' } },
          { prompt: 'The zeros of a function are the same as the graph’s…', answer: 'x-intercepts', choices: ['x-intercepts', 'y-intercept', 'vertex'], hint: 'Where y = 0.', misconceptions: { 'y-intercept': 'The y-intercept is where x = 0 — zeros are where y = 0', 'vertex': 'The vertex is the turning point, not (usually) a crossing' } },
          { prompt: 'Every quadratic has exactly…', answer: 'two complex solutions (maybe not real)', choices: ['two complex solutions (maybe not real)', 'two real solutions always', 'one solution'], hint: 'Count with complex numbers.', misconceptions: { 'two real solutions always': 'A parabola floating above the axis has NO real solutions — its two live in the complex numbers' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Explain in your own words why solving the equation and finding the graph’s x-intercepts are the same job.',
        starters: ['Setting y = 0 means', 'A factor (x − r) is zero exactly when', 'If the parabola misses the axis'] },
      { kind: 'extend', title: 'Go further', intro: 'Stretch the connection.',
        items: [
          { icon: '🔺', label: 'Build from zeros', detail: 'Write a quadratic with zeros at −1 and 6, then multiply it out. Check by substituting each zero.' },
          { icon: '🪞', label: 'Vertex from zeros', detail: 'The vertex sits midway between the zeros. Where is it for (x − 1)(x − 7)? Why the midpoint?' },
          { icon: 'ℹ️', label: 'Meet i', detail: 'For x² + 1 = 0, the solutions are ±i where i = √−1 — the doorway to the complex number system (AI.NE.1).' }
        ] }
    ]
  });

  /* ---- AI.QE.1 · Linear vs. Exponential ---------------------------------- */
  reg({
    concept: 'linear-vs-exp', title: 'Linear vs. Exponential',
    standards: ['AI.QE.1'],
    steps: [
      { kind: 'teach', title: 'Adding vs. multiplying each step',
        lead: 'This is the core contrast of the whole strand. <b>Linear</b> growth <b>adds</b> the same amount every step — equal <i>differences</i>. <b>Exponential</b> growth <b>multiplies</b> by the same factor every step — equal <i>ratios</i>. That one difference — plus vs. times — is why one crawls in a straight line and the other explodes.',
        anatomy: {
          expr: 'linear: <span class="tint-m">y = mx + b</span>   ·   exponential: <span class="tint-b">y = a·bˣ</span>',
          parts: [
            { sym: 'y = mx + b', tone: 'm', name: 'linear — adds', desc: 'each step ADDS m: check by <b>subtracting</b> — equal differences mean linear' },
            { sym: 'y = a·bˣ', tone: 'b', name: 'exponential — multiplies', desc: 'each step MULTIPLIES by b: check by <b>dividing</b> — equal ratios mean exponential' },
            { sym: 'test it', tone: 'x', name: 'how to tell', desc: 'differences equal → linear; ratios equal → exponential; neither → something else' }
          ]
        },
        moves: [
          { label: 'Read a table', text: '→ subtract for differences, divide for ratios — whichever stays constant names the type.' },
          { label: 'Give it enough steps', text: '→ any growing exponential overtakes any line, no matter how steep the line.' },
          { label: 'Factor below 1', text: '→ multiplying by ½ each step is still exponential — it’s decay, not linear decrease.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: '<b>5, 8, 11, 14</b> keeps ADDING 3 — linear. <b>2, 6, 18, 54</b> keeps MULTIPLYING by 3 — exponential. Same-looking lists, opposite engines:',
          math: '+3 each step (linear)   vs.   ×3 each step (exponential)'
        },
        takeaway: 'Linear adds the same amount; exponential times the same factor.' },

      { kind: 'prior', title: 'What do you think?',
        prompt: 'Offer A: $1000 a day for 30 days. Offer B: a penny that <b>doubles</b> every day for 30 days. Which pays more?',
        options: ['B — doubling explodes past it', 'A — $30,000 is clearly more', 'They come out about even'] },
      { kind: 'explore', title: 'Read the tables', intro: 'One table grows by equal DIFFERENCES, the other by equal FACTORS. Tell them apart.', component: 'problemSet',
        config: { problems: [
          { prompt: 'y: <b>5, 8, 11, 14</b> (x = 0,1,2,3). The growth is…', answer: '+3 each step — linear', choices: ['+3 each step — linear', '×3 each step — exponential'], hint: '8−5, 11−8, 14−11.' },
          { prompt: 'y: <b>2, 6, 18, 54</b>. The growth is…', answer: '×3 each step — exponential', choices: ['×3 each step — exponential', '+4 each step — linear'], hint: '6/2, 18/6, 54/18.' },
          { prompt: 'y: <b>40, 20, 10, 5</b>. This is…', answer: 'exponential decay (×½)', choices: ['exponential decay (×½)', 'linear decrease (−20)'], hint: 'Is the step a constant difference or a constant factor?' }
        ] } },
      { kind: 'discover', title: 'Equal differences vs. equal factors', text: '<b>Linear</b> functions add the same amount each step — equal <b>differences</b> (y = mx + b). <b>Exponential</b> functions multiply by the same amount each step — equal <b>factors</b> (y = a·bˣ). Over time, ANY growing exponential overtakes ANY line — doubling beats adding, always.', rule: 'linear: +same each step · exponential: ×same each step' },

      { kind: 'example', title: 'Test a mystery table', component: 'workedExample',
        intro: 'The two-check routine: differences first, ratios second. It classifies any table.',
        config: {
          problem: 'x: 0, 1, 2, 3 — y: 4, 12, 36, 108. Linear or exponential?',
          steps: [
            { text: 'Check DIFFERENCES first — subtract each y from the next:', math: '12−4 = +8 · 36−12 = +24 · 108−36 = +72' },
            { text: 'Not equal — so it is NOT linear. But don’t stop: unequal differences don’t say what it IS.', math: '+8, +24, +72 → not linear' },
            { ask: 'Now check RATIOS — divide each y by the one before: 12÷4 = 3, 36÷12 = 3, 108÷36 = ?',
              choices: ['3', '72', '36'], answer: '3',
              why: 'All three ratios are 3 — an equal FACTOR each step.',
              hint: 'Divide, don’t subtract.' },
            { text: 'Equal factors means exponential. The start (x = 0) is 4 and the factor is 3:', math: 'y = 4 · 3ˣ' },
            { text: 'Use the model to predict the next entry:', math: 'x = 4 → 108 × 3 = 324' }
          ],
          done: 'Differences equal → linear. Ratios equal → exponential. Neither → something else entirely.'
        } },

      { kind: 'practice', difficulty: 'easy', title: 'Classify the situation', component: 'problemSet',
        config: { problems: [
          { prompt: 'A gym charges $30/month. Total cost over time is…', answer: 'linear', choices: ['linear', 'exponential'], hint: 'Same amount ADDED monthly.' },
          { prompt: 'A population grows 5% per year. It is…', answer: 'exponential', choices: ['exponential', 'linear'], hint: '×1.05 each year is a factor.' },
          { prompt: 'A candle burns 2 cm per hour. Its height is…', answer: 'linear', choices: ['linear', 'exponential'], hint: 'Equal difference each hour.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'The crossover', component: 'problemSet',
        config: { problems: [
          { prompt: 'f(x) = 100 + 50x vs g(x) = 2ˣ. Which is bigger at x = 10?', answer: 'g — 1024 beats 600', choices: ['g — 1024 beats 600', 'f — the head start holds'], hint: '2¹⁰ = 1024; f(10) = 600.' },
          { prompt: 'Which eventually wins, no matter the numbers?', answer: 'A growing exponential', choices: ['A growing exponential', 'A steep enough line'], hint: 'Factors compound; differences don’t.' }
        ] } },
      { kind: 'mastery', title: 'Growth check', component: 'problemSet',
        config: { problems: [
          { prompt: 'y: <b>3, 6, 12, 24</b>. This is…', answer: 'exponential — ×2 each step', choices: ['exponential — ×2 each step', 'linear — +3 each step', 'neither'], hint: 'Check ratios, not just the first difference.', misconceptions: { 'linear — +3 each step': 'The first gap is +3, but the next is +6 — differences change, FACTORS stay ×2' } },
          { prompt: '“Equal differences over equal intervals” describes…', answer: 'linear functions', choices: ['linear functions', 'exponential functions', 'all functions'], hint: 'Adding vs multiplying.', misconceptions: { 'exponential functions': 'Exponentials grow by equal FACTORS — multiplication, not addition' } },
          { prompt: 'Your money earns 3% interest per year. Your balance grows…', answer: 'exponentially', choices: ['exponentially', 'linearly'], hint: '×1.03 compounds.', misconceptions: { 'linearly': 'Interest is a percentage — each year multiplies the balance, so it compounds' } },
          { prompt: 'A line with slope 1000 races y = 2ˣ. For very large x…', answer: 'the exponential is far ahead', choices: ['the exponential is far ahead', 'the line stays ahead forever', 'they tie'], hint: 'Doubling overtakes any constant step.', misconceptions: { 'the line stays ahead forever': 'A big slope only delays the crossover — doubling always catches any line' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why does multiplying by a constant beat adding a constant in the long run — even a big one?',
        starters: ['Adding grows by the same amount, but multiplying', 'The penny-doubling offer wins because', 'To spot exponential growth in a table I'] },
      { kind: 'extend', title: 'Go further', intro: 'Compounding in the wild.',
        items: [
          { icon: '🪙', label: 'Do the penny math', detail: 'Double a penny 30 times (×2³⁰). Compare it to $1000 × 30. How big is the gap?' },
          { icon: '🦠', label: 'Why outbreaks surprise us', detail: 'If cases double weekly, how long from 100 cases to 100,000? Count the doublings.' },
          { icon: '📈', label: 'The rule of 72', detail: 'Money at r% doubles in about 72/r years. Check it for 6% — why does this shortcut work?' }
        ] }
    ]
  });

  /* ---- AI.QE.2 · Exponential Functions ----------------------------------- */
  reg({
    concept: 'exponential-fn', title: 'Exponential Functions',
    standards: ['AI.QE.2'],
    steps: [
      { kind: 'teach', title: 'What y = a·bˣ actually says',
        lead: 'An exponential function is <b>repeated multiplication</b> written as a rule. In <b>y = a·bˣ</b>, just two numbers set everything: <b>a</b> is where you start, and <b>b</b> is the factor you multiply by at every step. The exponent x counts <i>how many times</i> you’ve multiplied.',
        anatomy: {
          expr: 'y = <span class="tint-m">a</span> · <span class="tint-b">b</span><span class="tint-x">ˣ</span>',
          parts: [
            { sym: 'a', tone: 'm', name: 'the start', desc: 'the value when <b>x = 0</b> (since b⁰ = 1, y = a) — your beginning amount' },
            { sym: 'b', tone: 'b', name: 'the factor', desc: 'what you <b>multiply by</b> each step — b &gt; 1 grows, 0 &lt; b &lt; 1 decays' },
            { sym: 'x', tone: 'x', name: 'the count', desc: 'how many times you’ve multiplied — the exponent, not a thing you add' }
          ]
        },
        moves: [
          { label: 'b &gt; 1', text: '→ growth: 1.05 adds 5% each step, 2 doubles it, 3 triples it.' },
          { label: '0 &lt; b &lt; 1', text: '→ decay: ½ halves it each step, 0.8 loses 20% each step.' },
          { label: 'Turn a percent into b', text: '→ keep the whole 100% and add the change: +20% → ×1.2; −20% → ×0.8.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: '<b>y = 500 · 1.2ˣ</b> models 500 subscribers growing 20% a year: start at 500, multiply by 1.2 each year. Year 2 means multiply <b>twice</b>, not by 2:',
          math: 'y = 500 · 1.2² = 500 · 1.44 = 720'
        },
        takeaway: 'a is the start, b is the factor; b > 1 grows, 0 < b < 1 decays.' },

      { kind: 'prior', title: 'What do you think?',
        prompt: 'In <b>y = 3 · 2ˣ</b>, what does the 3 tell you?',
        options: ['The starting amount (when x = 0)', 'How fast it grows', 'The biggest y can get'] },
      { kind: 'explore', title: 'Decode a and b', intro: 'In y = a·bˣ, work out what each number does.', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>y = 5 · 2ˣ</b>. When x = 0, y =', answer: '5', choices: ['5', '2', '10'], hint: 'b⁰ = 1, so y = a.' },
          { prompt: '<b>y = 5 · 2ˣ</b>. Each step in x…', answer: 'doubles y', choices: ['doubles y', 'adds 2 to y', 'adds 5 to y'], hint: 'One more power of 2.' },
          { prompt: '<b>y = 100 · (½)ˣ</b>. As x grows, y…', answer: 'shrinks — decay', choices: ['shrinks — decay', 'grows — just slower', 'stays at 100'], hint: 'Multiplying by ½ again and again.' }
        ] } },
      { kind: 'discover', title: 'y = a · bˣ', text: 'In <b>y = a·bˣ</b>: <b>a</b> is the <b>starting value</b> (y when x = 0), and <b>b</b> is the <b>growth factor</b> per step. b &gt; 1 means <b>growth</b> (b = 1.05 is +5% each step); 0 &lt; b &lt; 1 means <b>decay</b> (b = ½ halves it). b is what you MULTIPLY by, never what you add.', rule: 'a = start · b = the factor each step' },

      { kind: 'example', title: 'Build a model from a story', component: 'workedExample',
        intro: 'Every exponential word problem is the same two questions: what do you START with, and what do you MULTIPLY by each step?',
        config: {
          problem: 'A channel has 500 subscribers and grows 20% each year. Model it, then predict year 2.',
          steps: [
            { ask: '“Grows 20% each year” — what is the growth factor b?',
              choices: ['1.2', '0.2', '20'], answer: '1.2',
              why: 'You KEEP the original 100% and ADD 20%: 100% + 20% = 120% = ×1.2 each year.',
              hint: 'Keep the whole, then add the extra fifth.',
              misconceptions: { '0.2': '×0.2 would CUT the channel to a fifth of its size — keep 100% and add 20%: ×1.2', '20': '×20 is +1900% — the percent must become a factor near 1' } },
            { text: 'The start is the value at x = 0 — the 500 subscribers. Assemble the model:', math: 'y = 500 · 1.2ˣ' },
            { ask: 'Predict year 2: y = 500 · 1.2² = 500 · 1.44 = ?',
              choices: ['720', '1200', '520'], answer: '720',
              why: 'Exponent first: 1.2² = 1.44, then × 500 = 720.',
              hint: 'Square the 1.2 before multiplying by 500.',
              misconceptions: { '1200': 'That’s 500 × 1.2 × 2 — the exponent means ×1.2 TWICE, not ×2', '520': 'That adds 20 subscribers — percents multiply, they don’t add flat amounts' } },
            { text: 'Same skeleton for decay. LOSING 20% a year keeps 80%:', math: 'b = 0.8 → y = 500 · 0.8ˣ' }
          ],
          done: 'Start value → percent to factor → assemble y = a·bˣ → evaluate with the exponent first.'
        } },

      { kind: 'practice', difficulty: 'easy', title: 'Build the model', component: 'problemSet',
        config: { problems: [
          { prompt: '200 bacteria triple each hour →', answer: 'y = 200 · 3ˣ', choices: ['y = 200 · 3ˣ', 'y = 3 · 200ˣ', 'y = 200 + 3x'], hint: 'Start 200, factor 3.' },
          { prompt: 'A $900 phone loses half its value yearly →', answer: 'y = 900 · (½)ˣ', choices: ['y = 900 · (½)ˣ', 'y = 900 − ½x', 'y = ½ · 900ˣ'], hint: 'Start 900, factor ½.' },
          { prompt: '<b>y = 40 · 1.1ˣ</b> models growth of…', answer: '10% per step', choices: ['10% per step', '110% per step', '1.1% per step'], hint: '×1.1 = +10%.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Evaluate it', component: 'problemSet',
        config: { generate() { return U.range(3).map(() => { const a = U.pick([2, 3, 5, 10]), b = U.pick([2, 3]), x = U.rand(2, 4); return { prompt: `<b>y = ${a} · ${b}ˣ</b>. Find y when x = ${x}.`, answer: a * Math.pow(b, x), hint: `${b}ˣ first, then × ${a}.` }; }); } } },
      { kind: 'mastery', title: 'Exponential check', component: 'problemSet',
        config: { problems: [
          { prompt: 'In <b>y = 7 · 4ˣ</b>, the starting value is…', answer: '7', choices: ['7', '4', '28'], hint: 'Set x = 0.', misconceptions: { '4': '4 is the growth factor b — the start is a, since b⁰ = 1' } },
          { prompt: '<b>y = 50 · 0.8ˣ</b> is…', answer: 'decay — 20% lost per step', choices: ['decay — 20% lost per step', 'growth — 80% per step', 'linear decrease'], hint: 'b < 1.', misconceptions: { 'growth — 80% per step': '×0.8 keeps 80%, LOSING 20% — a factor below 1 is decay', 'linear decrease': 'It multiplies each step, so it’s exponential, not linear' } },
          { prompt: '<b>y = 2 · 3ˣ</b> at x = 3 is…', answer: '54', choices: ['54', '216', '18', '11'], hint: 'Powers before products.', misconceptions: { '216': 'You computed (2·3)³ — the exponent belongs to 3 alone', '18': 'That’s 2 · 3 · 3 — one power short', '11': 'That’s 2 + 3², but a MULTIPLIES' } },
          { prompt: 'Growth of 5% per year means b =', answer: '1.05', choices: ['1.05', '0.05', '5'], hint: 'Keep the whole and add 5%.', misconceptions: { '0.05': '×0.05 would shrink it to 5% — you keep 100% AND add 5%: ×1.05', '5': '×5 is +400%, not +5%' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'How do you turn a percent change into the factor b? Try +7% and −30%.',
        starters: ['A percent increase becomes b =', 'A percent decrease becomes b =', 'The starting value a matters because'] },
      { kind: 'extend', title: 'Go further', intro: 'Model something real.',
        items: [
          { icon: '💰', label: 'Your savings', detail: 'Model $500 at 4% yearly: y = 500 · 1.04ˣ. What’s it worth in 10 years?' },
          { icon: '☕', label: 'Cooling coffee', detail: 'Hot drinks cool exponentially toward room temperature. Why does the LAST 10° take so long?' },
          { icon: '🎮', label: 'Half-life', detail: 'Carbon-14 halves every 5,730 years — y = a·(½)^(x/5730). How do scientists date fossils with it?' }
        ] }
    ]
  });
})();
