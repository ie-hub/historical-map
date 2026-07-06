/* Learning Atlas — Mathematics · Algebra I lessons: extending the quadratic
   strand (AI.QE) with completing the square and modelling. Teaching-first, in
   the same shape as lessons-quadratics.js: every lesson interleaves worked
   examples (workedExample — reveal or supply each line) with focused discover
   cards, so the method is TAUGHT before it is tested. Completing the square is
   built as a geometric "finish the square" move that both solves equations and
   rewrites into vertex form; modelling reads the vertex as the max/min and the
   zeros as the start/landing. Summative checks tag their distractors with the
   misconception each reveals. Registered on MATH.Player.                       */
(function () {
  const P = window.MATH.Player, U = window.MATH.util;
  const reg = P.register;

  /* ---- AI.QE.3 · Completing the Square ----------------------------------- */
  reg({
    concept: 'completing-square', title: 'Completing the Square',
    standards: ['AI.QE.3'],
    steps: [
      { kind: 'teach', title: 'What “completing the square” really does',
        lead: 'Some quadratics just <b>won’t factor nicely</b> — but every one hides a perfect square inside it. Completing the square is the move that <b>forces that square to appear</b>: you reshape <b>x² + bx + c</b> into <b>(x + p)² + q</b>. Once it’s a single squared bracket, the turning point is sitting in plain sight and you can undo the square with one ±√.',
        anatomy: {
          expr: '<span class="tint-x">x²</span> + <span class="tint-m">b</span>x + c   →   (x + <span class="tint-b">p</span>)² + <span class="tint-y">q</span>',
          parts: [
            { sym: 'b', tone: 'm', name: 'the middle', desc: 'the coefficient you halve — <b>p is exactly b/2</b>, so the middle number secretly names the bracket' },
            { sym: '(b/2)²', tone: 'x', name: 'the missing corner', desc: 'the number a perfect square is <b>missing</b> — add this and x² + bx becomes (x + b/2)²' },
            { sym: 'p', tone: 'b', name: 'the shift', desc: 'half of b — where the parabola <b>turns left/right</b> (the vertex’s x is −p)' },
            { sym: 'q', tone: 'y', name: 'the leftover', desc: 'the constant left after you tidy up — the vertex’s <b>height</b>' }
          ]
        },
        moves: [
          { label: 'Why (b/2)²?', text: '→ (x + p)² expands to x² + 2px + p². Match 2p = b and you’re forced to p = b/2, so the missing constant is p² = (b/2)².' },
          { label: 'Solving an equation', text: '→ add (b/2)² to <b>both sides</b> to stay balanced, then finish with ±√.' },
          { label: 'Rewriting an expression', text: '→ there’s only one side, so <b>add AND subtract</b> (b/2)² — the value can’t change.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'For <b>x² + 6x</b>, half of 6 is 3, and 3² = 9 is the missing corner. Add it and the whole thing collapses into one bracket:',
          math: 'x² + 6x + 9 = (x + 3)²'
        },
        takeaway: 'Half the middle, square it — that one number turns a messy quadratic into a single perfect square.' },

      { kind: 'prior', title: 'What do you think?',
        prompt: 'You know x² + 6x + <b>9</b> = (x + 3)². What single number turns <b>x² + 6x</b> into a perfect square you can factor like that?',
        options: ['9 — the square of half of 6', '6 — the same as the middle number', '3 — just half of 6'] },

      { kind: 'example', title: 'Solve by finishing the square', component: 'workedExample',
        intro: 'Some quadratics won’t factor nicely — but every one can be forced into a perfect square. Watch the whole routine on one that does factor, so you can trust it.',
        config: {
          problem: 'Solve x² + 6x + 5 = 0',
          steps: [
            { text: 'Move the loose number out of the way — get x² + 6x alone on the left.',
              math: 'x² + 6x = −5' },
            { ask: 'Take HALF of the middle number (6) and SQUARE it. What do you add to complete the square?',
              choices: ['9', '36', '3'], answer: '9',
              why: 'Half of 6 is 3, and 3² = 9. That (b/2)² is exactly what a perfect square is missing.',
              hint: 'First halve 6, THEN square the result.',
              misconceptions: { '36': 'That’s 6² — you must halve b FIRST, then square: (6/2)² = 9', '3': 'That’s only half of 6 — you still have to square it: 3² = 9' },
              math: '(6 ÷ 2)² = 3² = 9' },
            { text: 'This is an equation, so keep it balanced — add 9 to <b>both</b> sides:',
              math: 'x² + 6x + 9 = −5 + 9 = 4' },
            { text: 'The left side is now a perfect square. It factors as (x + half-of-b)²:',
              math: '(x + 3)² = 4', note: 'The 3 inside is half of 6 — the same number you squared.' },
            { ask: 'Undo the square by taking the square root of both sides. What must you write?',
              choices: ['x + 3 = ±2', 'x + 3 = 2', 'x + 3 = 4'], answer: 'x + 3 = ±2',
              why: '√4 is 2, but a square is made by BOTH +2 and −2 — so you need the ± to catch both answers.',
              hint: 'A number and its negative both square to 4.',
              misconceptions: { 'x + 3 = 2': 'You dropped the negative root — you’d lose one of the two solutions', 'x + 3 = 4': 'Don’t forget to square-root the right side too: √4 = 2, not 4' },
              math: 'x + 3 = ±√4 = ±2' },
            { text: 'Split the ± and solve each little equation:',
              math: 'x = −3 + 2 = −1   or   x = −3 − 2 = −5' },
            { text: 'Check both in the original:', math: '(−1)² + 6(−1) + 5 = 0 ✓ · (−5)² + 6(−5) + 5 = 0 ✓' }
          ],
          done: 'Move the constant → add (b/2)² to BOTH sides → factor the square → finish with ±√.'
        } },

      { kind: 'discover', title: 'Half it, square it, add it',
        text: 'To complete the square on <b>x² + bx</b>, take <b>half of b</b>, <b>square it</b>, and add that <b>(b/2)²</b>. The result always factors into <b>(x + b/2)²</b> — the number inside is the SAME half you squared. For x² + 6x, half of 6 is 3, 3² = 9, and x² + 6x + 9 = (x + 3)². The middle coefficient is always <b>twice</b> the number inside the bracket.',
        rule: 'x² + bx + (b/2)² = (x + b/2)²' },

      { kind: 'explore', title: 'Find the missing square', intro: 'Just the completing step: what (b/2)² finishes each perfect square?', component: 'problemSet',
        config: { problems: [
          { prompt: 'What completes the square? <b>x² + 8x + ___</b>', answer: '16', choices: ['16', '64', '8'], hint: 'Half of 8 is 4, then 4².', misconceptions: { '64': 'That’s 8² — halve first: (8/2)² = 16', '8': 'That’s only half-then-not-squared… actually 8 is b itself' } },
          { prompt: 'What completes the square? <b>x² − 10x + ___</b>', answer: '25', choices: ['25', '100', '−25'], hint: 'Half of −10 is −5, and (−5)² = 25.', misconceptions: { '100': 'That’s (−10)² — you must halve b first', '−25': 'A square is never negative — (−5)² = +25' } },
          { prompt: 'x² + 8x + 16 factors as…', answer: '(x + 4)²', choices: ['(x + 4)²', '(x + 8)²', '(x + 16)²'], hint: 'The inside number is HALF of 8.', misconceptions: { '(x + 8)²': 'That’s (x + b)² — the inside is b/2 = 4, not b', '(x + 16)²': '16 is the added constant, not the number inside the bracket' } }
        ] } },

      { kind: 'example', title: 'Twist — rewrite into vertex form', component: 'workedExample',
        intro: 'Completing the square isn’t only for solving. With no equals sign, use it to rewrite y = ax² + bx + c into vertex form — and read the vertex straight off.',
        config: {
          problem: 'Rewrite y = x² − 4x + 1 in vertex form',
          steps: [
            { text: 'Focus on the x² − 4x part. Half of −4 is −2, and (−2)² = 4 — that’s the square you need.',
              math: '(−4 ÷ 2)² = (−2)² = 4' },
            { ask: 'There’s no equation to balance — you can’t add 4 to “the other side.” How do you keep the expression EQUAL?',
              choices: ['Add 4 and subtract 4 in the same line', 'Add 4 to both sides', 'Just add 4'],
              answer: 'Add 4 and subtract 4 in the same line',
              why: 'Adding and subtracting the same 4 changes nothing overall (+4 − 4 = 0), so the expression stays equal.',
              hint: 'You have only one side here — the value can’t change.',
              misconceptions: { 'Add 4 to both sides': 'There ARE no two sides — this is an expression, not an equation', 'Just add 4': 'Adding 4 alone changes the value — you must subtract it back to stay equal' },
              math: 'y = (x² − 4x + 4) − 4 + 1' },
            { text: 'The bracket is now a perfect square — factor it (inside = half of −4 = −2):',
              math: 'y = (x − 2)² − 4 + 1' },
            { text: 'Combine the loose numbers:', math: 'y = (x − 2)² − 3' },
            { ask: 'In vertex form y = (x − h)² + k the vertex is (h, k). What is the vertex here?',
              choices: ['(2, −3)', '(−2, −3)', '(2, 3)'], answer: '(2, −3)',
              why: '(x − 2)² is zero at x = +2, and k = −3 — the subtraction inside names a POSITIVE h.',
              hint: 'The square (x − 2)² is smallest when x = 2.',
              misconceptions: { '(−2, −3)': 'Sign trap — (x − 2)² turns at x = +2, not −2', '(2, 3)': 'k is −3, so the vertex sits 3 BELOW the axis' },
              math: 'vertex (2, −3)' }
          ],
          done: 'No equation? Add-and-subtract (b/2)² on the same line, factor the square, tidy the constant — vertex form appears.'
        } },

      { kind: 'discover', title: 'Balance depends on the setting',
        text: 'The completing move is always “half of b, squared” — but how you keep things fair depends on what you have. <b>Solving an equation?</b> Add (b/2)² to <b>both sides</b>, then finish with <b>±√</b>. <b>Rewriting an expression?</b> There’s only one side, so <b>add AND subtract</b> the same amount to leave the value unchanged. This same move, done once in general on ax² + bx + c = 0, is exactly where the <b>quadratic formula</b> comes from.',
        rule: 'equation → add to both sides, then ±√ · expression → add and subtract' },

      { kind: 'practice', difficulty: 'easy', title: 'Complete the square', component: 'problemSet',
        config: { problems: [
          { prompt: 'Complete the square: <b>x² + 12x + ___</b>', answer: '36', choices: ['36', '144', '6'], hint: '(12/2)² = 6² = 36.' },
          { prompt: 'x² − 6x + 9 = ', answer: '(x − 3)²', choices: ['(x − 3)²', '(x + 3)²', '(x − 6)²'], hint: 'Half of −6 is −3.' },
          { prompt: 'Solving x² + 4x = 5, you add ___ to both sides.', answer: '4', choices: ['4', '16', '2'], hint: '(4/2)² = 2² = 4.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Solve and rewrite', component: 'problemSet',
        config: { problems: [
          { prompt: 'Solve by completing the square: <b>x² + 2x − 3 = 0</b>', answer: 'x = 1 or −3', choices: ['x = 1 or −3', 'x = −1 or 3', 'x = ±2'], hint: 'x² + 2x = 3 → add 1 → (x + 1)² = 4 → x + 1 = ±2.' },
          { prompt: 'Vertex form of <b>y = x² + 6x + 5</b> is…', answer: 'y = (x + 3)² − 4', choices: ['y = (x + 3)² − 4', 'y = (x + 3)² + 4', 'y = (x − 3)² − 4'], hint: 'Add and subtract (6/2)² = 9: (x² + 6x + 9) − 9 + 5.' }
        ] } },
      { kind: 'mastery', title: 'Completing-the-square check', component: 'problemSet',
        config: { problems: [
          { prompt: 'What number completes <b>x² + 10x + ___</b>?', answer: '25', choices: ['25', '100', '5', '20'], hint: '(10/2)² = 5² = 25.', misconceptions: { '100': 'That’s 10² — halve b first, THEN square', '5': 'That’s just half of b — you still need to square it', '20': 'That’s 2 × 10 — the rule is (b/2)², not 2b' } },
          { prompt: 'Solve <b>x² − 4x − 5 = 0</b> by completing the square.', answer: 'x = 5 or −1', choices: ['x = 5 or −1', 'x = −5 or 1', 'x = 2 ± 3 only as x = 5'], hint: 'x² − 4x = 5 → add 4 → (x − 2)² = 9 → x − 2 = ±3.', misconceptions: { 'x = −5 or 1': 'Signs flipped — x − 2 = ±3 gives x = 5 and x = −1', 'x = 2 ± 3 only as x = 5': 'The ± gives TWO answers — don’t drop the minus root' } },
          { prompt: 'The vertex of <b>y = (x − 2)² − 3</b> is…', answer: '(2, −3)', choices: ['(2, −3)', '(−2, −3)', '(2, 3)', '(−2, 3)'], hint: 'The square is zero at x = h.', misconceptions: { '(−2, −3)': 'Sign trap — (x − 2)² turns at x = +2', '(2, 3)': 'k is −3, so the vertex is 3 below, not above' } },
          { prompt: 'Rewriting an EXPRESSION (no equals sign), to complete the square you…', answer: 'add and subtract (b/2)²', choices: ['add and subtract (b/2)²', 'add (b/2)² to both sides', 'add (b/2)² and nothing else'], hint: 'One side only — keep the value unchanged.', misconceptions: { 'add (b/2)² to both sides': 'An expression has no “both sides” — that’s the move for an equation', 'add (b/2)² and nothing else': 'Adding alone changes the value — you must subtract it back' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why do you add (b/2)² to BOTH sides when solving, but add AND subtract it when rewriting an expression? What stays the same in each case?',
        starters: ['Half of b, squared, works because', 'When solving I keep it balanced by', 'When rewriting there’s only one side, so I'] },
      { kind: 'extend', title: 'Go further', intro: 'Push the finish-the-square idea.',
        items: [
          { icon: '🧱', label: 'See the actual square', detail: 'Draw x² as a square and bx as two strips of width b/2 along two sides — the missing corner is a (b/2)² tile. That corner is literally what you add.' },
          { icon: '🧮', label: 'Where the formula is born', detail: 'Complete the square on ax² + bx + c = 0 in general. Every line becomes a piece of x = (−b ± √(b² − 4ac)) / 2a.' },
          { icon: '⚖️', label: 'When a ≠ 1', detail: 'For 2x² + 8x + 3, factor the 2 out of the x-terms first, THEN complete the square. Why does the leading coefficient have to leave first?' }
        ] }
    ]
  });

  /* ---- AI.QE.5 · Modeling with Quadratics -------------------------------- */
  reg({
    concept: 'quadratic-modeling', title: 'Modeling with Quadratics',
    standards: ['AI.QE.5'],
    steps: [
      { kind: 'teach', title: 'Why a parabola models the real world',
        lead: 'Lots of real situations <b>rise then fall</b> (or fall then rise): a thrown ball climbs and drops, a fenced-in area grows then shrinks, profit peaks then dips. That single hump is exactly the shape of a <b>parabola</b> — so a quadratic like <b>h = at² + bt + c</b> becomes a machine you can <i>read</i>. Two features carry almost all the meaning: the <b>vertex</b> and the <b>zeros</b>.',
        anatomy: {
          expr: 'h = <span class="tint-m">a</span>t² + bt + c   →   <span class="tint-y">vertex</span> &amp; <span class="tint-x">zeros</span>',
          parts: [
            { sym: 'vertex y', tone: 'y', name: 'HOW MUCH', desc: 'the turning point’s <b>height</b> — the <b>max or min</b>: greatest height, largest area, top profit' },
            { sym: 'vertex x', tone: 'b', name: 'WHEN / WHAT', desc: 'the turning point’s <b>input</b> — the time it peaks, the width that’s best' },
            { sym: 'zeros', tone: 'x', name: 'WHERE IT’S 0', desc: 'where the quantity <b>hits zero</b> — launch and landing; a projectile has <b>two</b>' },
            { sym: 'a', tone: 'm', name: 'the opening', desc: '<b>a &lt; 0 opens down</b> (vertex is a max), a &gt; 0 opens up (a min)' }
          ]
        },
        visual: '<svg viewBox="0 0 300 180" role="img" aria-label="A downward parabola: two zeros on the ground and a vertex at the top"><line x1="20" y1="140" x2="286" y2="140" stroke="var(--rule2)" stroke-width="2"/><path d="M60 140 Q150 -60 240 140" fill="none" stroke="var(--m-accent)" stroke-width="3"/><line x1="150" y1="42" x2="150" y2="140" stroke="var(--rule2)" stroke-width="1.5" stroke-dasharray="4 4"/><circle cx="150" cy="40" r="5" fill="#8a4fc4"/><text x="150" y="30" fill="#8a4fc4" font-size="12" font-weight="700" text-anchor="middle">vertex = max</text><circle cx="60" cy="140" r="5" fill="#c8791a"/><circle cx="240" cy="140" r="5" fill="#c8791a"/><text x="60" y="158" fill="#c8791a" font-size="11.5" font-weight="700" text-anchor="middle">zero</text><text x="240" y="158" fill="#c8791a" font-size="11.5" font-weight="700" text-anchor="middle">zero</text><text x="150" y="174" fill="var(--muted)" font-size="11" text-anchor="middle">rises, peaks at the vertex, then falls back to the ground</text></svg>',
        moves: [
          { label: '“How high / how much?”', text: '→ read the vertex’s <b>y-value</b> — that’s the max or min amount.' },
          { label: '“When / what input?”', text: '→ read the vertex’s <b>x-value</b> — the time of the peak, or the best width.' },
          { label: '“When does it start/land?”', text: '→ read the <b>zeros</b>. Never assume the max is at t = 0 — a projectile leaves and returns to the ground.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'For <b>h = −16t² + 64t</b>, a is negative so it opens down. The zeros t = 0 and t = 4 are launch and landing; the vertex sits midway, at t = 2, and its height is the max:',
          math: 'peaks at t = 2 s, h = 64 ft; lands at t = 4 s'
        },
        takeaway: 'Vertex tells you the max/min and when it happens; zeros tell you where the value is nothing.' },

      { kind: 'prior', title: 'What do you think?',
        prompt: 'A ball is thrown up and its height follows h = −16t² + 64t. Which part of the parabola tells you the ball’s <b>greatest height</b>?',
        options: ['The vertex — the turning point at the top', 'A zero — where it crosses the axis', 'The starting point at t = 0'] },

      { kind: 'explore', title: 'Click the max height', intro: 'The highest point of the arc is the vertex. Click the turning point on each parabola.', component: 'parabolaExplorer', config: { mode: 'vertex', rounds: 2 } },

      { kind: 'discover', title: 'Vertex tells how much, zeros tell when',
        text: 'Every quadratic model has two features worth reading. The <b>vertex</b> is the <b>maximum or minimum</b> — the highest point of a thrown object, the largest area of a pen. The <b>zeros</b> are where the quantity is <b>zero</b> — a projectile’s launch and landing. Also read the model’s numbers: a &lt; 0 means the parabola opens <b>down</b>, so the vertex is a <b>maximum</b>, and watch the story’s units (feet, seconds, metres).',
        rule: 'vertex = max/min · zeros = when the value is 0' },

      { kind: 'example', title: 'A thrown ball, start to finish', component: 'workedExample',
        intro: 'One projectile model answers two classic questions: WHEN does it land, and HOW HIGH does it get? The zeros answer the first, the vertex the second.',
        config: {
          problem: 'h = −16t² + 64t (height in feet, t in seconds). When does it land, and what is its max height?',
          steps: [
            { text: 'Landing means height = 0. Factor the model to find the zeros:',
              math: '−16t² + 64t = −16t(t − 4)' },
            { ask: 'Set −16t(t − 4) = 0. What are the two zeros?',
              choices: ['t = 0 and t = 4', 'only t = 4', 't = 0 and t = 16'], answer: 't = 0 and t = 4',
              why: 'Zero product: −16t = 0 gives t = 0 (the launch), and t − 4 = 0 gives t = 4 (the landing).',
              hint: 'A projectile has TWO zeros — it starts at the ground and returns to it.',
              misconceptions: { 'only t = 4': 'Don’t forget the launch — t = 0 is a zero too (it starts on the ground)', 't = 0 and t = 16': '16 is a coefficient, not a zero — solve t − 4 = 0' },
              math: 't = 0 (launch) · t = 4 (landing)' },
            { text: 'So it is in the air from t = 0 to t = 4 — it <b>lands at t = 4 s</b>.',
              math: 'time in the air: 4 seconds' },
            { text: 'Max height is at the vertex. By symmetry the vertex sits midway between the zeros:',
              math: 't = (0 + 4) ÷ 2 = 2 s' },
            { ask: 'Put t = 2 back into the model: h = −16(2²) + 64(2). What is the max height?',
              choices: ['64 feet', '2 feet', '128 feet'], answer: '64 feet',
              why: '−16(4) + 64(2) = −64 + 128 = 64 ft. The answer to “how high” is the vertex’s HEIGHT (its y).',
              hint: 'Square the 2 first: −16 × 4 = −64, then + 128.',
              misconceptions: { '2 feet': 't = 2 is WHEN it peaks (the x-value) — the max HEIGHT is the y-value, 64', '128 feet': 'That’s only 64(2) — you forgot the −16(2²) = −64 term' },
              math: 'h = −64 + 128 = 64 feet' }
          ],
          done: 'Zeros → when it launches and lands · vertex’s x → when it peaks · vertex’s y → how high.'
        } },

      { kind: 'discover', title: 'Read a, then read the story',
        text: 'Match each feature to the question the story asks. <b>“How high / how much?”</b> is the vertex’s <b>y-value</b> (max or min). <b>“When / what width?”</b> is the vertex’s <b>x-value</b>. <b>“When does it start / land?”</b> are the <b>zeros</b>. A projectile always has <b>two</b> zeros — launch and landing — so never assume the max is at t = 0. And check the sign of a: a &lt; 0 opens down, so the vertex is a maximum (a ball peaks and falls).',
        rule: 'vertex x = WHEN/WHAT · vertex y = HOW MUCH · zeros = start/land' },

      { kind: 'example', title: 'Twist — the biggest rectangle', component: 'workedExample',
        intro: 'Area problems are quadratics too. Here the vertex gives a MAXIMUM area, and its two coordinates answer two different questions.',
        config: {
          problem: 'You have 40 m of fence for three sides of a rectangle against a wall. Maximise the enclosed area.',
          steps: [
            { text: 'The wall is the fourth side, so fence covers two widths and one length. Let each width be w; the length is what’s left:',
              math: 'length = 40 − 2w' },
            { ask: 'Area = width × length. Write A as a function of w.',
              choices: ['A = w(40 − 2w) = −2w² + 40w', 'A = w(40 − w) = −w² + 40w', 'A = 40w'],
              answer: 'A = w(40 − 2w) = −2w² + 40w',
              why: 'Two widths use 2w of fence, leaving 40 − 2w for the length; multiply by w for area.',
              hint: 'Three sides: two widths and one length share the 40 m.',
              misconceptions: { 'A = w(40 − w) = −w² + 40w': 'That subtracts only ONE width — but two sides are widths, so it’s 40 − 2w', 'A = 40w': 'That treats all 40 m as the length and ignores that fence is shared' },
              math: 'A = −2w² + 40w' },
            { text: 'a = −2 is negative, so the parabola opens DOWN — the vertex is a MAXIMUM. Its w is midway between the zeros (w = 0 and w = 20):',
              math: 'w = (0 + 20) ÷ 2 = 10 m' },
            { ask: 'The max area is the vertex’s HEIGHT. Plug w = 10 into A = −2w² + 40w:',
              choices: ['200 m²', '10 m²', '400 m²'], answer: '200 m²',
              why: '−2(10²) + 40(10) = −200 + 400 = 200 m². The width w = 10 is WHERE the max is; 200 is the max itself.',
              hint: 'Square 10 first: −2 × 100 = −200, then + 400.',
              misconceptions: { '10 m²': 'w = 10 is the WIDTH that maximises area — the area itself is the y-value, 200', '400 m²': 'That’s only 40(10) — you forgot the −2(10²) = −200 term' },
              math: 'A = −200 + 400 = 200 m²' }
          ],
          done: 'Build the model → the vertex’s x is the best width, its y is the largest area. Same two-question habit as the projectile.'
        } },

      { kind: 'discover', title: 'x says WHEN, y says HOW MUCH',
        text: 'The vertex is one point but answers two things: its <b>x-value</b> tells you <b>when</b> or <b>what input</b> (the time of peak, the best width), and its <b>y-value</b> tells you <b>how much</b> (the max height, the largest area). Mixing them up is the classic error — reporting w = 10 as the area, or t = 2 as the height. When <b>a &lt; 0</b> the parabola opens down, guaranteeing the vertex is a <b>maximum</b>; when a &gt; 0 it’s a minimum.',
        rule: 'vertex (x, y): x = when/what input · y = the max/min amount' },

      { kind: 'practice', difficulty: 'easy', title: 'Read the model', component: 'problemSet',
        config: { problems: [
          { prompt: 'In a projectile model, the MAXIMUM height is found at the…', answer: 'vertex', choices: ['vertex', 'zeros', 'y-intercept'], hint: 'The highest point of the arc.' },
          { prompt: 'For <b>h = −16t² + 96t</b>, factoring gives −16t(t − 6). It lands at…', answer: 't = 6 s', choices: ['t = 6 s', 't = 16 s', 't = 96 s'], hint: 'Set t − 6 = 0.' },
          { prompt: 'A model has a &lt; 0. Its vertex is a…', answer: 'maximum', choices: ['maximum', 'minimum', 'zero'], hint: 'a < 0 opens the cup downward.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Which coordinate?', component: 'problemSet',
        config: { problems: [
          { prompt: 'The vertex of <b>h = −16t² + 64t</b> is (2, 64). The MAX HEIGHT is…', answer: '64 feet', choices: ['64 feet', '2 feet', '2 seconds'], hint: 'Height is the y-value.' },
          { prompt: 'For <b>A = −2w² + 40w</b> the vertex is (10, 200). The best WIDTH is…', answer: '10 m', choices: ['10 m', '200 m', '40 m'], hint: 'Width is the x-value.' }
        ] } },
      { kind: 'mastery', title: 'Modeling check', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>h = −16t² + 80t</b>. Its zeros (launch and landing) are…', answer: 't = 0 and t = 5', choices: ['t = 0 and t = 5', 'only t = 5', 't = 0 and t = 80', 't = 16 and t = 5'], hint: 'Factor −16t(t − 5).', misconceptions: { 'only t = 5': 'Forgot t = 0 — the launch is a zero too', 't = 0 and t = 80': '80 is a coefficient, not a zero — solve t − 5 = 0', 't = 16 and t = 5': '−16 is the coefficient of t², not a zero' } },
          { prompt: 'The vertex of a height model is (3, 144). The maximum height is…', answer: '144 feet', choices: ['144 feet', '3 feet', '3 seconds', '147 feet'], hint: 'Max height is the y-value.', misconceptions: { '3 feet': 'That’s the TIME of the peak (x-value) — the height is y = 144', '3 seconds': 'That’s WHEN it peaks, not HOW HIGH', '147 feet': 'Don’t add the coordinates — read y directly' } },
          { prompt: 'For <b>A = −w² + 20w</b>, the vertex is (10, 100). The MAXIMUM AREA is…', answer: '100 (square units)', choices: ['100 (square units)', '10 (units of width)', '20 (square units)'], hint: 'Area is the y-value of the vertex.', misconceptions: { '10 (units of width)': 'w = 10 is the width that gives the max — the area itself is y = 100', '20 (square units)': '20 is a coefficient in the model, not the vertex height' } },
          { prompt: 'A ball’s height peaks at its vertex, then falls. This means a is…', answer: 'negative (opens down)', choices: ['negative (opens down)', 'positive (opens up)', 'zero'], hint: 'A max means the cup opens downward.', misconceptions: { 'positive (opens up)': 'a > 0 opens UP, giving a minimum — a peak needs a < 0', 'zero': 'a = 0 would make it linear, not a parabola at all' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'For a thrown ball, why is the maximum height the vertex’s y-value and not its x-value? And why does a projectile model always have two zeros?',
        starters: ['The vertex’s x tells me', 'The vertex’s y tells me', 'A projectile has two zeros because'] },
      { kind: 'extend', title: 'Go further', intro: 'Quadratic models in the wild.',
        items: [
          { icon: '🏀', label: 'Model a real shot', detail: 'Film a basketball shot, mark three points of its arc, and fit h = at² + bt + c. Where does your model say it peaks?' },
          { icon: '🌉', label: 'Bridges and cables', detail: 'A suspension-bridge cable hangs in a near-parabola. Find its lowest point (the vertex) — is a positive or negative here?' },
          { icon: '💰', label: 'Maximising revenue', detail: 'If revenue = price × quantity and quantity drops as price rises, revenue is a downward parabola. What price maximises it?' }
        ] }
    ]
  });
})();
