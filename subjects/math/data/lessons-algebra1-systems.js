/* Learning Atlas — Mathematics · Algebra I lessons: the systems strand (AI.SEI).
   Teaching-first, mirroring the quadratics reference: every lesson interleaves
   worked examples (workedExample — reveal or supply each line) and focused
   discover cards between the manipulatives, so the learner is TAUGHT the method
   before being tested on it. Systems of EQUATIONS gets two full algebraic
   methods — substitution and elimination — plus the special no-solution and
   infinite-solution cases. Systems of INEQUALITIES teaches the overlap region,
   dashed vs solid boundaries, and the test-point method. Summative checks tag
   their distractors with the misconception each reveals. Registered on
   MATH.Player.                                                                 */
(function () {
  const P = window.MATH.Player, U = window.MATH.util;
  const reg = P.register;

  /* ---- AI.SEI.2 / AI.SEI.3 · Substitution & Elimination ------------------ */
  reg({
    concept: 'systems-algebra', title: 'Substitution & Elimination',
    standards: ['AI.SEI.2', 'AI.SEI.3'],
    steps: [
      { kind: 'teach', title: 'What “solving a system” really means',
        lead: 'A system is <b>two equations that must hold at the same time</b>. Solving it means finding the one pair <b>(x, y)</b> that makes <b>both</b> true at once — the single point where the two lines cross. The trick in both methods is the same: <b>get rid of one variable</b> so you’re left with an equation you can actually solve.',
        anatomy: {
          expr: '<span class="tint-m">y = 2x + 1</span><br><span class="tint-b">3x + y = 11</span>',
          parts: [
            { sym: 'eq 1', tone: 'm', name: 'first rule', desc: 'one condition the answer must obey — here y is already alone, ripe for <b>substitution</b>' },
            { sym: 'eq 2', tone: 'b', name: 'second rule', desc: 'the other condition — the SAME (x, y) has to satisfy this one too' },
            { sym: '(x, y)', tone: 'y', name: 'the solution', desc: 'the one point that lies on <b>both</b> lines — plug it in and every equation checks out' }
          ]
        },
        moves: [
          { label: 'Substitution', text: '→ one equation says what a variable EQUALS; drop that expression into the OTHER equation and one variable vanishes.' },
          { label: 'Elimination', text: '→ line the equations up and add or subtract them so a matching variable cancels to zero.' },
          { label: 'Either way', text: '→ you collapse two equations into ONE, solve it, then back-substitute for the second variable — and check both.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'From <b>y = 2x + 1</b>, put <b>2x + 1</b> in for y in <b>3x + y = 11</b>. Now it’s all x:',
          math: '3x + (2x + 1) = 11 → 5x = 10 → x = 2, y = 5'
        },
        takeaway: 'both methods do one job — kill a variable so two equations become one.' },

      { kind: 'prior', title: 'What do you think?',
        prompt: 'Two lines cross at exactly one point. If you knew that point <b>(x, y)</b> makes BOTH equations true, how could you find it without drawing a graph?',
        options: ['Combine the two equations so one variable disappears', 'Just guess numbers until both work', 'You can’t — a graph is the only way'] },

      { kind: 'example', title: 'Substitution, start to finish', component: 'workedExample',
        intro: 'When one equation already tells you what a variable EQUALS, you can drop that expression straight into the other equation — turning two unknowns into one.',
        config: {
          problem: 'Solve the system:  y = 2x + 1  and  3x + y = 11',
          steps: [
            { text: 'The first equation already has y alone: y = 2x + 1. That expression can stand in for y anywhere.',
              math: 'y = 2x + 1' },
            { ask: 'Substitute (2x + 1) for y in the OTHER equation, 3x + y = 11. What do you get?',
              choices: ['3x + (2x + 1) = 11', '3x + y = 2x + 1', '3x + (2x + 1) = y'], answer: '3x + (2x + 1) = 11',
              why: 'Replace y in 3x + y = 11 with what it equals — 2x + 1 — keeping the right side 11.',
              hint: 'Put the expression for y into the equation you HAVEN’T used yet.',
              misconceptions: { '3x + y = 2x + 1': 'That just sets the two equations equal — instead put 2x + 1 in place of y in 3x + y = 11', '3x + (2x + 1) = y': 'The right side stays 11 — you’re substituting INTO 3x + y = 11' },
              math: '3x + (2x + 1) = 11' },
            { text: 'Now it’s one equation in one variable. Combine the x-terms:',
              math: '5x + 1 = 11' },
            { ask: 'Solve 5x + 1 = 11 for x.',
              choices: ['x = 2', 'x = 12/5', 'x = 10'], answer: 'x = 2',
              why: 'Subtract 1: 5x = 10, then divide by 5: x = 2.',
              hint: 'Undo the +1 first, then the ×5.',
              misconceptions: { 'x = 12/5': 'You divided before subtracting the 1 — take the +1 off BOTH sides first', 'x = 10': 'That’s 5x, not x — divide by 5 after subtracting 1' },
              math: '5x = 10 → x = 2' },
            { text: 'Back-substitute x = 2 into the SIMPLE equation to get y:',
              math: 'y = 2(2) + 1 = 5' },
            { text: 'Check the pair (2, 5) in BOTH original equations:',
              math: '5 = 2(2) + 1 ✓  ·  3(2) + 5 = 11 ✓',
              note: 'A solution to a system must satisfy every equation — always test both.' }
          ],
          done: 'Isolate a variable → substitute into the OTHER equation → solve → back-substitute → check both. Solution: (2, 5).'
        } },

      { kind: 'discover', title: 'Substitution: trade a variable for its value',
        text: 'When one variable is already alone (or easy to isolate), <b>substitution</b> shines. Isolate that variable, then <b>plug its expression into the OTHER equation</b> — never back into the same one, or you just get 0 = 0. That leaves one equation in one variable; solve it, then <b>back-substitute</b> to find the second variable. Finish by <b>checking the pair in both equations</b>.',
        rule: 'isolate a variable → substitute into the OTHER equation → solve → back-substitute' },

      { kind: 'explore', title: 'Substitute correctly', intro: 'The core move on its own: given one variable isolated, where does its expression go?', component: 'problemSet',
        config: { problems: [
          { prompt: 'Given <b>y = x − 3</b> and <b>2x + y = 9</b>, substituting gives…', answer: '2x + (x − 3) = 9', choices: ['2x + (x − 3) = 9', '2x + (x − 3) = y', 'x − 3 = 2x + y'], hint: 'Replace y in 2x + y = 9 with x − 3.' },
          { prompt: 'Given <b>x = 2y</b> and <b>x + 3y = 10</b>, substituting gives…', answer: '2y + 3y = 10', choices: ['2y + 3y = 10', '2y + 3y = x', 'x + 3y = 2y'], hint: 'Put 2y wherever x appears in x + 3y = 10.' },
          { prompt: 'After solving and getting <b>x = 4</b> from y = x − 3, the value of y is…', answer: 'y = 1', choices: ['y = 1', 'y = 4', 'y = 7'], hint: 'Back-substitute x = 4 into y = x − 3.' }
        ] } },

      { kind: 'example', title: 'Elimination, start to finish', component: 'workedExample',
        intro: 'When no variable is isolated but a variable has the SAME coefficient in both equations, you can add or subtract the equations to make it vanish.',
        config: {
          problem: 'Solve the system:  2x + 3y = 12  and  2x − y = 4',
          steps: [
            { text: 'Line them up. Both equations have exactly 2x — the same x-coefficient.',
              math: '2x + 3y = 12\n2x − y = 4' },
            { ask: 'To cancel x, do you ADD or SUBTRACT the two equations?',
              choices: ['Subtract — matching signs cancel', 'Add — that doubles to 4x', 'Neither works here'], answer: 'Subtract — matching signs cancel',
              why: 'Both x-terms are +2x, so subtracting one equation from the other gives 2x − 2x = 0 and x disappears.',
              hint: 'Same sign on the matched variable → subtract; opposite signs → add.',
              misconceptions: { 'Add — that doubles to 4x': 'Adding +2x and +2x gives 4x — x survives. Subtract to cancel matching terms', 'Neither works here': 'The x-terms match exactly (both 2x) — subtracting cancels them' } },
            { text: 'Subtract the second equation from the first, term by term:',
              math: '(2x − 2x) + (3y − (−y)) = 12 − 4' },
            { ask: 'What does the y-line become? Careful: 3y − (−y).',
              choices: ['4y = 8', '2y = 8', '4y = 16'], answer: '4y = 8',
              why: '3y − (−y) = 3y + y = 4y, and 12 − 4 = 8.',
              hint: 'Subtracting a negative adds: 3y − (−y) = 4y.',
              misconceptions: { '2y = 8': 'You wrote 3y − y — but the second term is −y, so subtracting it ADDS: 3y + y = 4y', '4y = 16': 'The right side is 12 − 4 = 8, not 12 + 4' },
              math: '4y = 8 → y = 2' },
            { text: 'Back-substitute y = 2 into either original — use 2x − y = 4:',
              math: '2x − 2 = 4 → 2x = 6 → x = 3' },
            { text: 'Check (3, 2) in BOTH equations:',
              math: '2(3) + 3(2) = 12 ✓  ·  2(3) − 2 = 4 ✓' },
            { text: 'When coefficients DON’T match, multiply an equation first. For x + 2y = 7 and 3x − y = 7, double the first to get 2x + 4y = 14, or triple nothing — instead multiply the first by 3 to line up x: 3x + 6y = 21, then subtract 3x − y = 7 to cancel x.',
              math: '3(x + 2y = 7) → 3x + 6y = 21',
              note: 'Scale an equation so a variable’s coefficients match, THEN add or subtract.' }
          ],
          done: 'Line up → match a coefficient (multiply if needed) → add or subtract to cancel → solve → back-substitute → check. Solution: (3, 2).'
        } },

      { kind: 'discover', title: 'Elimination — and the two special outcomes',
        text: 'In <b>elimination</b> you make one variable cancel: if its coefficients <b>match in sign</b>, subtract; if they’re <b>opposite</b>, add. If they don’t line up, <b>multiply an equation</b> (or both) until one variable’s coefficients match, then combine. Prefer substitution when a variable is already isolated; prefer elimination when coefficients line up neatly. Watch the ending: a <b>false statement like 0 = 5</b> means <b>no solution</b> (parallel lines that never meet); an <b>always-true statement like 0 = 0</b> means <b>infinitely many solutions</b> (the two equations are the same line).',
        rule: 'match signs → subtract · opposite signs → add · 0 = 5 no solution · 0 = 0 infinitely many' },

      { kind: 'practice', difficulty: 'easy', title: 'Solve each system', component: 'problemSet',
        config: { problems: [
          { prompt: 'Solve by substitution: <b>y = x + 2</b> and <b>x + y = 8</b>.', answer: '(3, 5)', choices: ['(3, 5)', '(5, 3)', '(2, 6)'], hint: 'x + (x + 2) = 8 → 2x = 6 → x = 3, then y = 5.' },
          { prompt: 'Solve by elimination: <b>x + y = 10</b> and <b>x − y = 4</b>.', answer: '(7, 3)', choices: ['(7, 3)', '(3, 7)', '(6, 4)'], hint: 'Add the equations: 2x = 14 → x = 7, then y = 3.' },
          { prompt: 'Solve: <b>y = 3x</b> and <b>2x + y = 15</b>.', answer: '(3, 9)', choices: ['(3, 9)', '(9, 3)', '(5, 15)'], hint: '2x + 3x = 15 → 5x = 15 → x = 3, then y = 9.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Line up first', component: 'problemSet',
        config: { problems: [
          { prompt: 'Solve: <b>x + 2y = 7</b> and <b>3x − y = 7</b>.', answer: '(3, 2)', choices: ['(3, 2)', '(2, 3)', '(1, 3)'], hint: 'Multiply the first by 3: 3x + 6y = 21, subtract 3x − y = 7 → 7y = 14 → y = 2, then x = 3.' },
          { prompt: 'What does <b>0 = 5</b> at the end of elimination tell you?', answer: 'No solution — the lines are parallel', choices: ['No solution — the lines are parallel', 'Infinitely many solutions', 'The solution is (0, 5)'], hint: 'A false statement means no (x, y) can satisfy both.' }
        ] } },
      { kind: 'mastery', title: 'Systems check', component: 'problemSet',
        config: { problems: [
          { prompt: 'Solve: <b>y = 2x − 1</b> and <b>x + y = 5</b>.', answer: '(2, 3)', choices: ['(2, 3)', '(3, 2)', '(2, 1)'], hint: 'x + (2x − 1) = 5 → 3x = 6 → x = 2.', misconceptions: { '(3, 2)': 'You swapped x and y — x = 2, then y = 2(2) − 1 = 3', '(2, 1)': 'After x = 2, back-substitute into y = 2x − 1 = 3, not the wrong value 1' } },
          { prompt: 'Solve: <b>3x + y = 9</b> and <b>3x − y = 3</b>.', answer: '(2, 3)', choices: ['(2, 3)', '(3, 2)', '(2, 6)'], hint: 'Add: 6x = 12 → x = 2, then y = 3.', misconceptions: { '(3, 2)': 'Coordinates reversed — solving gives x = 2 and y = 3', '(2, 6)': 'Forgot to solve for y correctly — 3(2) + y = 9 gives y = 3, not 6' } },
          { prompt: 'Solve: <b>2x − y = 5</b> and <b>4x − 2y = 10</b>.', answer: 'Infinitely many solutions', choices: ['Infinitely many solutions', 'No solution', '(5, 5)'], hint: 'The second equation is just twice the first — same line.', misconceptions: { 'No solution': 'No solution comes from a FALSE statement (0 = 5); here you get 0 = 0 — the same line', '(5, 5)': 'Doubling the first gives the second exactly, so there isn’t one unique point' } },
          { prompt: 'Solve: <b>x + y = 4</b> and <b>x + y = 9</b>.', answer: 'No solution', choices: ['No solution', 'Infinitely many solutions', '(4, 9)'], hint: 'Subtracting gives 0 = 5 — impossible.', misconceptions: { 'Infinitely many solutions': 'Same left side but different right side → parallel lines → 0 = 5, a FALSE statement → no solution', '(4, 9)': 'x + y can’t be both 4 and 9 — there is no such point' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'How do you decide between substitution and elimination for a given system — and what does a “0 = 0” or “0 = 5” ending mean about the graph?',
        starters: ['I’d pick substitution when', 'I’d pick elimination when', 'If the variables all cancel and I get 0 = 0, the lines'] },
      { kind: 'extend', title: 'Go further', intro: 'Push the idea of combining equations.',
        items: [
          { icon: '⚖️', label: 'Why adding equations is legal', detail: 'If A = B and C = D are both true, then A + C = B + D. That single fact is the whole justification for elimination — think about why it holds.' },
          { icon: '🔀', label: 'Multiply BOTH equations', detail: 'Try 3x + 2y = 16 and 2x + 5y = 18 — no coefficient matches. Multiply the first by 2 and the second by 3 to line up x, then eliminate.' },
          { icon: '📖', label: 'A word problem', detail: 'Two coffees and a muffin cost $11; one coffee and a muffin cost $7. Write a system and solve for each price.' }
        ] }
    ]
  });

  /* ---- AI.SEI.4 · Systems of Inequalities -------------------------------- */
  reg({
    concept: 'systems-inequalities', title: 'Systems of Inequalities',
    standards: ['AI.SEI.4'],
    steps: [
      { kind: 'teach', title: 'The answer is the OVERLAP',
        lead: 'One inequality shades a whole <b>half of the plane</b> — every point on one side of a line. A <b>system</b> asks for points that obey <b>every</b> inequality at the same time, so the solution is only the region where all the shadings <b>overlap</b> — the piece caught by both. Not everything shaded — just the double-shaded wedge.',
        anatomy: {
          expr: '<span class="tint-m">y ≥ x − 1</span>   AND   <span class="tint-b">y &lt; −x + 3</span>',
          parts: [
            { sym: 'y ≥ x − 1', tone: 'm', name: 'first region', desc: 'a solid boundary (≥ includes the line) with everything <b>above</b> it shaded' },
            { sym: 'y < −x + 3', tone: 'b', name: 'second region', desc: 'a dashed boundary (&lt; excludes the line) with everything <b>below</b> it shaded' },
            { sym: 'AND', tone: 'x', name: 'the catch', desc: 'a point counts only if it lies in <b>both</b> — the intersection, never the union' },
            { sym: 'overlap', tone: 'y', name: 'the solution', desc: 'the double-shaded region where both conditions hold at once' }
          ]
        },
        moves: [
          { label: '≤ or ≥', text: '→ solid boundary line: points exactly ON the line count as solutions.' },
          { label: '< or >', text: '→ dashed boundary line: the line itself is excluded.' },
          { label: 'Take the union instead of the overlap', text: '→ the classic error — it lets in points that break one of the rules.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'Test <b>(0, 0)</b> in both: 0 ≥ 0 − 1 is true, and 0 &lt; 0 + 3 is true. Passing both means it sits inside the overlap:',
          math: '0 ≥ −1 ✓  and  0 < 3 ✓  →  (0, 0) is a solution'
        },
        takeaway: 'shade each side, then keep only where they overlap — a system means AND.' },

      { kind: 'prior', title: 'What do you think?',
        prompt: 'A point must satisfy <b>y &gt; 1</b> AND <b>y &lt; 4</b>. Which points work?',
        options: ['Only points with y between 1 and 4 — both conditions at once', 'Any point with y > 1 OR y < 4', 'No point can satisfy two rules'] },

      { kind: 'example', title: 'Graph a system, start to finish', component: 'workedExample',
        intro: 'A system of inequalities asks for every point that obeys BOTH rules. You graph each inequality, shade its side, and the answer is where the shadings overlap.',
        config: {
          problem: 'Graph the system:  y ≥ x − 1  and  y < −x + 3',
          steps: [
            { text: 'Draw each boundary line as if it were an equation. y = x − 1 and y = −x + 3.',
              math: 'boundaries: y = x − 1  and  y = −x + 3' },
            { ask: 'y ≥ x − 1 uses “≥”. Is its boundary line dashed or solid?',
              choices: ['Solid — points ON the line count', 'Dashed — the line is excluded', 'It doesn’t matter'], answer: 'Solid — points ON the line count',
              why: '“≥” and “≤” INCLUDE the boundary, so the line is solid. Strict “>” and “<” exclude it and use a dashed line.',
              hint: 'Does the symbol have the “equal” bar underneath?',
              misconceptions: { 'Dashed — the line is excluded': '“≥” includes equality, so the boundary IS part of the solution → solid line', 'It doesn’t matter': 'It changes whether points exactly on the line are solutions — ≥/≤ solid, >/< dashed' } },
            { text: 'For y ≥ x − 1, y is GREATER, so shade the region ABOVE that solid line.',
              math: 'y ≥ x − 1 → shade above (solid)' },
            { ask: 'y < −x + 3 uses strict “<”. How do you draw and shade it?',
              choices: ['Dashed line, shade below', 'Solid line, shade below', 'Dashed line, shade above'], answer: 'Dashed line, shade below',
              why: '“<” is strict → dashed boundary; y is LESS than the line → shade below it.',
              hint: 'Strict inequality → dashed; “y less than” → below.',
              misconceptions: { 'Solid line, shade below': '“<” is strict — the boundary is NOT included, so it must be dashed', 'Dashed line, shade above': 'y < means y is below the line, so shade below, not above' } },
            { text: 'The solution is the DOUBLE-shaded overlap — the wedge covered by both shadings.',
              math: 'solution = overlap of both regions' },
            { text: 'Confirm with a test point. Try (0, 0): check it in both inequalities.',
              math: '0 ≥ 0 − 1 → 0 ≥ −1 ✓  ·  0 < 0 + 3 → 0 < 3 ✓',
              note: '(0, 0) passes BOTH, so it lies in the overlap — the shading is correct.' }
          ],
          done: 'Boundary style (solid ≥/≤, dashed </>) → shade each side → the overlap is the answer → test a point to confirm. (0, 0) is a solution here.'
        } },

      { kind: 'discover', title: 'The solution is the OVERLAP, not the union',
        text: 'A system says <b>AND</b>: a point solves it only if it satisfies <b>every</b> inequality at once. So you shade each half-plane and keep only the <b>double-shaded overlap</b> — the intersection of the regions. Taking the <b>union</b> (anything shaded by either one) is the classic mistake; that accepts points that break one of the rules. The corners of the overlap sit where the boundary lines <b>meet</b>.',
        rule: 'system = AND → keep the overlap (intersection), never the union' },

      { kind: 'explore', title: 'Find the corner', intro: 'A corner of the solution region is exactly where two boundary lines cross. Click the crossing point.', component: 'lineGrapher', config: { mode: 'system', rounds: 2 } },

      { kind: 'example', title: 'A point that fails one rule', component: 'workedExample',
        intro: 'The whole game is “both, or nothing.” Here a tempting point satisfies one inequality but not the other — so it is NOT a solution.',
        config: {
          problem: 'Is (4, 0) a solution of  y ≥ x − 1  and  y < −x + 3 ?',
          steps: [
            { text: 'Test the point in the FIRST inequality, y ≥ x − 1, with x = 4, y = 0.',
              math: '0 ≥ 4 − 1 → 0 ≥ 3 ?' },
            { ask: 'Is 0 ≥ 3 true?',
              choices: ['No — 0 is not ≥ 3', 'Yes — 0 is greater', 'You can’t tell'], answer: 'No — 0 is not ≥ 3',
              why: '0 is less than 3, so 0 ≥ 3 is false. The point already fails the first rule.',
              hint: 'Is zero really greater than or equal to three?',
              misconceptions: { 'Yes — 0 is greater': '0 is LESS than 3, so 0 ≥ 3 is false', 'You can’t tell': 'Just compare the two numbers: 0 is not ≥ 3' } },
            { text: 'Check the SECOND inequality anyway, y < −x + 3: 0 < −4 + 3 → 0 < −1? That’s also false.',
              math: '0 < −1 ? false' },
            { ask: '(4, 0) fails the first rule (and the second). Is it a solution of the system?',
              choices: ['No — it must satisfy BOTH', 'Yes — one true rule is enough', 'Only if it’s on a boundary'], answer: 'No — it must satisfy BOTH',
              why: 'A system is an AND. Failing even one inequality disqualifies the point entirely.',
              hint: 'How many of the two rules must hold?',
              misconceptions: { 'Yes — one true rule is enough': 'That’s the union — a SYSTEM needs every inequality satisfied at once', 'Only if it’s on a boundary': 'Boundary rules matter for solid/dashed, but this point fails the values outright' } },
            { text: 'Compare with (0, 0), which passed both earlier. Same test, opposite verdict — the overlap is picky.',
              math: '(0,0): both true → solution · (4,0): both false → not a solution',
              note: 'Testing a point is the fastest way to check your shaded region is right.' }
          ],
          done: 'Substitute the point into every inequality. All true → in the overlap. Any false → excluded. (4, 0) is NOT a solution.'
        } },

      { kind: 'discover', title: 'Dashed vs solid, and the test-point method',
        text: 'Two habits keep systems honest. First, the <b>boundary style</b>: <b>solid</b> for ≤ or ≥ (the line is included), <b>dashed</b> for &lt; or &gt; (the line is excluded). Second, the <b>test-point method</b> for choosing which side to shade: pick an easy point NOT on the line (often the origin), plug it in — if it makes the inequality <b>true</b>, shade that side; if <b>false</b>, shade the other. Do this for each inequality; the region where all shadings agree is the solution.',
        rule: '≤ ≥ solid · < > dashed · test a point: true → shade its side, false → shade the other' },

      { kind: 'practice', difficulty: 'easy', title: 'Read the graph rules', component: 'problemSet',
        config: { problems: [
          { prompt: 'The boundary for <b>y ≤ 2x + 1</b> is drawn…', answer: 'solid', choices: ['solid', 'dashed'], hint: '“≤” includes the line.' },
          { prompt: 'The boundary for <b>y > −x</b> is drawn…', answer: 'dashed', choices: ['dashed', 'solid'], hint: 'Strict “>” excludes the line.' },
          { prompt: 'The solution of a system of two inequalities is the region that is…', answer: 'shaded by BOTH (the overlap)', choices: ['shaded by BOTH (the overlap)', 'shaded by EITHER one', 'on both boundary lines'], hint: 'A system means AND.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Test the points', component: 'problemSet',
        config: { problems: [
          { prompt: 'Is <b>(0, 0)</b> a solution of <b>y ≥ x − 1</b> and <b>y < −x + 3</b>?', answer: 'Yes — it passes both', choices: ['Yes — it passes both', 'No — it fails the first', 'No — it fails the second'], hint: '0 ≥ −1 ✓ and 0 < 3 ✓.' },
          { prompt: 'Is <b>(3, 3)</b> a solution of <b>y ≤ x</b> and <b>y > 1</b>?', answer: 'Yes — 3 ≤ 3 and 3 > 1', choices: ['Yes — 3 ≤ 3 and 3 > 1', 'No — 3 ≤ 3 fails', 'No — 3 > 1 fails'], hint: 'y ≤ x allows equality (solid), and 3 > 1 is true.' }
        ] } },
      { kind: 'mastery', title: 'Inequalities check', component: 'problemSet',
        config: { problems: [
          { prompt: 'The solution set of a system of inequalities is the…', answer: 'overlap of the regions', choices: ['overlap of the regions', 'union of the regions', 'boundary lines only'], hint: 'Both rules at once.', misconceptions: { 'union of the regions': 'The union accepts points that break one rule — a system needs the overlap (intersection)', 'boundary lines only': 'The solution is a whole region, not just the lines' } },
          { prompt: 'For <b>y < 2x − 3</b>, the boundary line is…', answer: 'dashed', choices: ['dashed', 'solid'], hint: 'Strict “<”.', misconceptions: { 'solid': '“<” is strict — points on the line are NOT included, so the line is dashed' } },
          { prompt: 'You test (0, 0) in <b>y ≥ x + 2</b> and get 0 ≥ 2, which is false. You should shade…', answer: 'the side NOT containing (0, 0)', choices: ['the side NOT containing (0, 0)', 'the side containing (0, 0)', 'both sides'], hint: 'False test point → shade the opposite side.', misconceptions: { 'the side containing (0, 0)': 'A FALSE result means (0,0) is NOT a solution — shade the other side', 'both sides': 'Only one half-plane satisfies the inequality' } },
          { prompt: 'A point satisfies <b>one</b> inequality of a system but breaks the <b>other</b>. It is…', answer: 'not a solution', choices: ['not a solution', 'a solution', 'a boundary point'], hint: 'Systems require every rule.', misconceptions: { 'a solution': 'A system is AND — failing even one inequality disqualifies the point', 'a boundary point': 'Breaking an inequality’s value has nothing to do with lying on a boundary' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why is the solution of a system the OVERLAP rather than everything shaded, and how does a quick test point tell you which side to shade?',
        starters: ['The overlap is right because a solution must', 'A dashed boundary means', 'When my test point makes the inequality false, I'] },
      { kind: 'extend', title: 'Go further', intro: 'Inequalities that model real limits.',
        items: [
          { icon: '💵', label: 'A budget region', detail: 'You have $20; apples cost $2 and pears $1: 2a + p ≤ 20, with a ≥ 0 and p ≥ 0. Sketch the region of affordable combinations.' },
          { icon: '📐', label: 'Corner points', detail: 'The overlap’s corners sit where boundaries cross. Find every corner of y ≥ 0, x ≥ 0, and x + y ≤ 4.' },
          { icon: '📈', label: 'Linear programming', detail: 'Businesses maximise profit over a shaded feasible region like these. Look up how the best answer always lands on a CORNER.' }
        ] }
    ]
  });
})();
