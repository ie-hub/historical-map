/* Learning Atlas — Mathematics · Algebra I lessons: the linear strand (AI.L).
   Rearranging formulas, compound inequalities, modelling with lines, and
   two-variable linear inequalities. Teaching-first: every lesson interleaves
   worked examples (workedExample — reveal or supply each line) and focused
   discover cards between the manipulatives, so the learner is TAUGHT the method
   before being tested on it. Summative checks tag their distractors with the
   misconception each reveals. Registered on MATH.Player.                        */
(function () {
  const P = window.MATH.Player, U = window.MATH.util;
  const reg = P.register;

  /* ---- AI.L.7 · Rearranging Formulas ------------------------------------- */
  reg({
    concept: 'literal-equations', title: 'Rearranging Formulas',
    standards: ['AI.L.7'],
    steps: [
      { kind: 'teach', title: 'Solving for a letter is the same old moves',
        lead: 'Rearranging a formula feels new, but it isn’t — you use the <b>exact same inverse-operation moves</b> as solving for x. The only twist: the target is a <b>letter</b>, and <b>every other letter just rides along like a number</b>. In <b>A = lw</b>, to free w you divide by l, and l behaves exactly as a 5 or a 12 would.',
        anatomy: {
          expr: '<span class="tint-y">A</span> = <span class="tint-m">l</span><span class="tint-x">w</span>',
          parts: [
            { sym: 'w', tone: 'x', name: 'your target', desc: 'the letter you want <b>alone</b> on one side' },
            { sym: 'l', tone: 'm', name: 'a passenger', desc: 'every other letter — treat it as an <b>ordinary number</b> you undo around' },
            { sym: 'A', tone: 'y', name: 'the result', desc: 'what the formula already equals; it stays put on its side' }
          ]
        },
        moves: [
          { label: 'Target multiplied by a letter', text: '→ divide both sides by that letter to peel it off (A = lw → w = A/l).' },
          { label: 'Target has a letter added', text: '→ subtract that whole term from both sides first, then divide.' },
          { label: 'Two operations wrap it', text: '→ undo in reverse PEMDAS: strip the added term first, then the multiplier.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'A rectangle with <b>A = 40</b> and <b>l = 8</b>: freeing w is just “divide by 8.” The move is identical whether l is the number 8 or the letter l.',
          math: 'A = lw → w = A/l → w = 40/8 = 5'
        },
        takeaway: 'Isolate your letter with inverse operations; every other letter is a stand-in number.' },

      { kind: 'prior', title: 'What do you think?',
        prompt: 'The area of a rectangle is <b>A = lw</b>. If you already know A and l but need the width w, what should you do?',
        options: ['Divide both sides by l to get w alone', 'Multiply A by l', 'You can’t — there are too many letters'] },

      { kind: 'example', title: 'Solve a formula for a letter', component: 'workedExample',
        intro: 'Solving for a letter uses the SAME inverse-operation moves as solving for x — the other letters just ride along as if they were numbers.',
        config: {
          problem: 'Solve A = lw for w',
          steps: [
            { text: 'You want w by itself. Right now w is MULTIPLIED by l — so treat l like an ordinary number.',
              math: 'A = l · w' },
            { ask: 'To undo “multiply by l”, what do you do to BOTH sides?',
              choices: ['divide by l', 'subtract l', 'multiply by l'], answer: 'divide by l',
              why: 'The inverse of multiplying by l is dividing by l — that cancels the l next to w.',
              hint: 'Undo multiplication with division.',
              misconceptions: { 'subtract l': 'l is multiplied by w, not added — subtracting won’t remove it', 'multiply by l': 'That stacks another l on — you’d get Al = l²w, further from w alone' },
              math: 'A / l = (l · w) / l' },
            { ask: 'After dividing by l, what is left on the right side?',
              choices: ['w', 'lw', 'A'], answer: 'w',
              why: 'The l in the numerator and denominator cancel, leaving w alone — exactly what you wanted.',
              hint: 'l ÷ l = 1, so only w remains.',
              misconceptions: { 'lw': 'The l cancels when you divide — it doesn’t stay behind', 'A': 'A is on the LEFT now; the right side simplifies to w' },
              math: 'w = A / l' },
            { text: 'Done — w is isolated:', math: 'w = A / l',
              note: 'Same three moves as any equation — the only new idea is that l behaves like a number.' }
          ],
          done: 'To solve for a letter, isolate it with inverse operations — every other letter is just a stand-in number.'
        } },

      { kind: 'discover', title: 'Every other letter is a number',
        text: 'To solve a formula for one variable, pretend the <b>other letters are numbers</b> and isolate your target with <b>inverse operations</b> — undoing in <b>reverse PEMDAS order</b> (addition/subtraction first, then multiplication/division). For y = mx + b solved for x: subtract b, then divide by m → <b>x = (y − b)/m</b>.',
        rule: 'treat other letters as numbers · undo operations in reverse order' },

      { kind: 'explore', title: 'Pick the first move', intro: 'Rearranging is all about choosing the right undo-step first. Which inverse operation isolates the target?', component: 'problemSet',
        config: { problems: [
          { prompt: 'To solve <b>d = rt</b> for t, first…', answer: 'divide both sides by r', choices: ['divide both sides by r', 'subtract r', 'divide both sides by t'], hint: 't is multiplied by r → divide by r.' },
          { prompt: 'To solve <b>y = x + c</b> for x, first…', answer: 'subtract c from both sides', choices: ['subtract c from both sides', 'divide both sides by c', 'add c to both sides'], hint: 'c is added to x → subtract c.' },
          { prompt: 'To solve <b>F = ma</b> for a, first…', answer: 'divide both sides by m', choices: ['divide both sides by m', 'subtract m', 'multiply both sides by m'], hint: 'a is multiplied by m → divide by m.' }
        ] } },

      { kind: 'example', title: 'Two operations, in reverse order', component: 'workedExample',
        intro: 'When the target is wrapped in TWO operations, peel them off in reverse PEMDAS order — and divide the WHOLE other side, not just one term.',
        config: {
          problem: 'Solve P = 2l + 2w for l',
          steps: [
            { text: 'l is first multiplied by 2, then 2w is added. Undo in reverse: strip the added term FIRST.',
              math: 'P = 2l + 2w' },
            { ask: 'The 2w is added on. What removes it from the right side?',
              choices: ['subtract 2w from both sides', 'divide both sides by 2w', 'subtract 2 from both sides'], answer: 'subtract 2w from both sides',
              why: 'The whole term 2w is added, so subtract the whole term 2w from both sides.',
              hint: 'Undo the addition before the multiplication.',
              misconceptions: { 'divide both sides by 2w': 'It’s ADDED, not multiplied — subtract it, don’t divide by it', 'subtract 2 from both sides': 'The term is 2w, not 2 — you must remove all of 2w' },
              math: 'P − 2w = 2l' },
            { ask: 'Now 2l = P − 2w. Divide by 2 — what is l?',
              choices: ['(P − 2w)/2', 'P/2 − 2w', 'P − w'], answer: '(P − 2w)/2',
              why: 'Divide the ENTIRE left side by 2. Every term on top is divided, so the whole numerator is P − 2w.',
              hint: 'The whole side P − 2w gets divided by 2 — keep it together.',
              misconceptions: { 'P/2 − 2w': 'You only divided the P — dividing by 2 must hit BOTH terms', 'P − w': 'That’s only half-done — you can’t drop the 2 from under P' },
              math: 'l = (P − 2w)/2' },
            { text: 'Check by re-multiplying: 2·(P − 2w)/2 + 2w = (P − 2w) + 2w = P ✓', math: 'l = (P − 2w)/2' }
          ],
          done: 'Subtract the extra term first, then divide the WHOLE remaining side. Reverse order, whole-side division.'
        } },

      { kind: 'discover', title: 'Divide the whole side — and watch for repeats',
        text: 'When you divide to finish, you must divide <b>every term</b> on the other side, not just one: (P − 2w)/2 means BOTH P and 2w sit over the 2. Also watch for the target appearing <b>twice</b> — if your letter shows up in two places, you first collect it on one side (factor it out) before isolating. Sign slips are the other trap: subtracting a term flips its sign.',
        rule: 'divide the ENTIRE side · collect a repeated target before isolating' },

      { kind: 'practice', difficulty: 'easy', title: 'Rearrange these', component: 'problemSet',
        config: { problems: [
          { prompt: 'Solve <b>y = mx + b</b> for x.', answer: 'x = (y − b)/m', choices: ['x = (y − b)/m', 'x = y − b/m', 'x = (y + b)/m'], hint: 'Subtract b first, then divide the whole side by m.' },
          { prompt: 'Solve <b>C = 2πr</b> for r.', answer: 'r = C/(2π)', choices: ['r = C/(2π)', 'r = C − 2π', 'r = 2πC'], hint: 'r is multiplied by 2π → divide by 2π.' },
          { prompt: 'Solve <b>A = ½bh</b> for h.', answer: 'h = 2A/b', choices: ['h = 2A/b', 'h = A/(2b)', 'h = 2A − b'], hint: 'Multiply both sides by 2, then divide by b.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Multi-step rearranging', component: 'problemSet',
        config: { problems: [
          { prompt: 'Solve <b>P = 2l + 2w</b> for w.', answer: 'w = (P − 2l)/2', choices: ['w = (P − 2l)/2', 'w = P/2 − 2l', 'w = P − 2l'], hint: 'Subtract 2l, then divide the whole side by 2.' },
          { prompt: 'Solve <b>ax + by = c</b> for y.', answer: 'y = (c − ax)/b', choices: ['y = (c − ax)/b', 'y = c − ax/b', 'y = (c + ax)/b'], hint: 'Subtract ax from both sides, then divide everything by b.' }
        ] } },
      { kind: 'mastery', title: 'Rearranging check', component: 'problemSet',
        config: { problems: [
          { prompt: 'Solve <b>d = rt</b> for r.', answer: 'r = d/t', choices: ['r = d/t', 'r = dt', 'r = t/d', 'r = d − t'], hint: 'r is multiplied by t.', misconceptions: { 'r = dt': 'That multiplies — undoing multiplication means DIVIDING by t', 'r = t/d': 'Flipped — you divide d by t, not t by d', 'r = d − t': 't is multiplied by r, not added, so subtraction won’t isolate r' } },
          { prompt: 'Solve <b>y = mx + b</b> for b.', answer: 'b = y − mx', choices: ['b = y − mx', 'b = y + mx', 'b = (y − m)/x', 'b = y/mx'], hint: 'b is added on — subtract the mx term.', misconceptions: { 'b = y + mx': 'Sign slip — moving +mx to the other side makes it −mx', 'b = (y − m)/x': 'b is added, not multiplied — no dividing is needed', 'b = y/mx': 'That divides the whole side — but b was only ADDED' } },
          { prompt: 'Solve <b>P = 2l + 2w</b> for l.', answer: 'l = (P − 2w)/2', choices: ['l = (P − 2w)/2', 'l = P/2 − 2w', 'l = P − 2w', 'l = (P + 2w)/2'], hint: 'Subtract 2w first, then divide the WHOLE side by 2.', misconceptions: { 'l = P/2 − 2w': 'You divided only the P — the 2 must divide both terms', 'l = P − 2w': 'You forgot to divide by 2 after removing 2w', 'l = (P + 2w)/2': 'Sign slip — subtracting 2w leaves P − 2w, not P + 2w' } },
          { prompt: 'Solve <b>V = lwh</b> for h.', answer: 'h = V/(lw)', choices: ['h = V/(lw)', 'h = V − lw', 'h = Vlw', 'h = lw/V'], hint: 'h is multiplied by both l and w.', misconceptions: { 'h = V − lw': 'l and w multiply h, so subtraction can’t free it — divide by lw', 'h = Vlw': 'That multiplies again — divide by lw to undo the multiplication', 'h = lw/V': 'Flipped — divide V by lw, not the other way round' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why can you treat every other letter in a formula as if it were just a number when solving for one target variable?',
        starters: ['The other letters behave like numbers because', 'When I divide to finish, I must', 'I undo operations in reverse order because'] },
      { kind: 'extend', title: 'Go further', intro: 'Rearranging shows up everywhere in science.',
        items: [
          { icon: '🔧', label: 'Physics formulas', detail: 'Rearrange v = d/t for t, and F = ma for a. Solving for the right variable saves re-deriving every time.' },
          { icon: '🌡️', label: 'Temperature conversion', detail: 'From F = (9/5)C + 32, solve for C. You’ll get C = (5/9)(F − 32) — the reverse conversion for free.' },
          { icon: '🔁', label: 'A repeated variable', detail: 'Try solving S = 2πr² + 2πrh for h — h appears once here, but ask what changes if a variable appears twice.' }
        ] }
    ]
  });

  /* ---- AI.L.2 · Compound Inequalities ------------------------------------ */
  reg({
    concept: 'compound-inequalities', title: 'Compound Inequalities',
    standards: ['AI.L.2'],
    steps: [
      { kind: 'teach', title: 'AND means between, OR means either',
        lead: 'A <b>compound inequality</b> glues two conditions together, and the glue word decides everything. <b>AND</b> keeps only what satisfies <b>both</b> — the <b>overlap</b>, a band <i>between</i> two values. <b>OR</b> keeps anything that satisfies <b>either</b> — the <b>union</b>, two separate regions pointing apart. One little word turns one band into two rays.',
        anatomy: {
          expr: '<span class="tint-m">−3</span> &lt; <span class="tint-x">x</span> ≤ <span class="tint-b">5</span>',
          parts: [
            { sym: 'x', tone: 'x', name: 'the unknown', desc: 'the value being pinned down from <b>both</b> sides at once' },
            { sym: '−3', tone: 'm', name: 'lower bound', desc: 'the left wall — <b>strict &lt;</b> here means <b>−3 is NOT included</b> (open dot ○)' },
            { sym: '5', tone: 'b', name: 'upper bound', desc: 'the right wall — <b>≤</b> means <b>5 IS included</b> (closed dot ●)' }
          ]
        },
        moves: [
          { label: 'AND (a band)', text: '→ solution is the overlap — one connected stretch between the two bounds.' },
          { label: 'OR (a union)', text: '→ solution is two separate rays; a value only has to satisfy one piece.' },
          { label: 'Multiply/divide by a negative', text: '→ the inequality sign FLIPS (−2x < 6 becomes x > −3) — the classic trap.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'A fridge must stay <b>at least 1°C and at most 4°C</b> — that “and” is a band. A password reset link is valid if it’s <b>unused OR still fresh</b> — that “or” is two regions.',
          math: '1 ≤ T ≤ 4   (a band)      vs.      x < −1  or  x ≥ 4   (two rays)'
        },
        takeaway: 'AND = the overlap between; OR = either region — and flip the sign on a negative × or ÷.' },

      { kind: 'prior', title: 'What do you think?',
        prompt: 'Which numbers make <b>both</b> x > −3 <b>and</b> x ≤ 2 true at the same time?',
        options: ['Everything between −3 and 2 (a band)', 'Everything except that band', 'Only −3 and 2'] },

      { kind: 'example', title: 'Solve an AND (a band)', component: 'workedExample',
        intro: 'A three-part inequality is an AND: x is squeezed between two values. Whatever you do, do it to ALL THREE parts at once.',
        config: {
          problem: 'Solve −1 ≤ 2x + 3 < 7',
          steps: [
            { text: 'x is trapped in the middle. Peel off the +3 first — subtract 3 from EVERY part.',
              math: '−1 − 3 ≤ 2x + 3 − 3 < 7 − 3' },
            { ask: 'After subtracting 3 from all three parts, what do you get?',
              choices: ['−4 ≤ 2x < 4', '−1 ≤ 2x < 7', '−4 ≤ 2x < 7'], answer: '−4 ≤ 2x < 4',
              why: 'Subtract 3 from each part: −1−3 = −4 and 7−3 = 4. The middle loses its +3.',
              hint: 'Do the same subtraction to the left, middle, AND right.',
              misconceptions: { '−1 ≤ 2x < 7': 'You only changed the middle — the outer numbers must change too', '−4 ≤ 2x < 7': 'You subtracted from the left but forgot the right (7−3 = 4)' },
              math: '−4 ≤ 2x < 4' },
            { ask: 'Now divide all three parts by 2. What is the solution?',
              choices: ['−2 ≤ x < 2', '−4 ≤ x < 4', '−2 ≤ x < 4'], answer: '−2 ≤ x < 2',
              why: 'Divide each part by 2 (a positive, so no flip): −4/2 = −2, 4/2 = 2.',
              hint: '2 is positive — divide every part by 2, keep the signs.',
              misconceptions: { '−4 ≤ x < 4': 'You forgot to divide the outer numbers by 2', '−2 ≤ x < 4': 'The right side is 4/2 = 2, not 4' },
              math: '−2 ≤ x < 2' },
            { text: 'On a number line: a closed dot at −2, an open dot at 2, shaded between — a BAND.', math: '−2 ≤ x < 2' }
          ],
          done: 'AND = a band. Do every operation to all three parts, and closed/open dots match ≤/≥ vs < />.'
        } },

      { kind: 'discover', title: 'AND is overlap, OR is union',
        text: 'A <b>compound inequality</b> joins two conditions. <b>AND</b> (a conjunction like −3 < x ≤ 5) needs <b>both</b> true — the solution is where they <b>overlap</b>, a band between two values. <b>OR</b> (a disjunction like x < −1 or x ≥ 4) needs <b>either</b> true — the solution is the <b>union</b>, two separate rays pointing apart.',
        rule: 'AND = overlap (a band) · OR = union (two rays)' },

      { kind: 'explore', title: 'Band or two rays?', intro: 'Read each solution and decide what its graph looks like: one connected band, or two rays heading opposite ways.', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>−2 < x < 5</b> graphs as…', answer: 'one band between −2 and 5', choices: ['one band between −2 and 5', 'two rays going opposite ways', 'the whole number line'], hint: 'One connected stretch = a band (AND).' },
          { prompt: '<b>x ≤ −1 or x > 3</b> graphs as…', answer: 'two rays pointing apart', choices: ['two rays pointing apart', 'a band between −1 and 3', 'a single point'], hint: 'OR gives a union — two separate pieces.' },
          { prompt: '<b>x ≥ 0</b> and <b>x ≤ 4</b> together graph as…', answer: 'the band 0 ≤ x ≤ 4', choices: ['the band 0 ≤ x ≤ 4', 'two rays', 'nothing at all'], hint: 'Both must hold → the overlap.' }
        ] } },

      { kind: 'example', title: 'An OR — and a sign flip', component: 'workedExample',
        intro: 'OR keeps the two pieces SEPARATE. And watch the classic trap: multiplying or dividing by a negative FLIPS the inequality sign.',
        config: {
          problem: 'Solve 2x + 1 < −3 or −2x < 6',
          steps: [
            { text: 'Solve each piece on its own. First piece: 2x + 1 < −3. Subtract 1 from both sides.',
              math: '2x + 1 < −3 → 2x < −4' },
            { ask: 'Now 2x < −4. Divide both sides by 2 (a positive). What do you get?',
              choices: ['x < −2', 'x > −2', 'x < −4'], answer: 'x < −2',
              why: 'Dividing by a POSITIVE keeps the sign: −4 ÷ 2 = −2, so x < −2.',
              hint: '2 is positive — no flip; −4/2 = −2.',
              misconceptions: { 'x > −2': 'No flip here — you only flip for a NEGATIVE divisor, and 2 is positive', 'x < −4': 'You forgot to divide the −4 by 2' },
              math: 'x < −2' },
            { ask: 'Second piece: −2x < 6. Divide both sides by −2. What happens to the sign?',
              choices: ['it flips: x > −3', 'it stays: x < −3', 'it flips: x > 3'], answer: 'it flips: x > −3',
              why: 'Dividing by a NEGATIVE reverses the inequality. 6 ÷ (−2) = −3, and < becomes >, so x > −3.',
              hint: 'Divide by a negative → flip the sign; 6/(−2) = −3.',
              misconceptions: { 'it stays: x < −3': 'You forgot to flip — dividing by a negative ALWAYS reverses the sign', 'it flips: x > 3': 'Right to flip, wrong arithmetic: 6 ÷ (−2) = −3, not 3' },
              math: '−2x < 6 → x > −3' },
            { text: 'It’s an OR, so the answer is the union — BOTH pieces, kept separate:',
              math: 'x < −2  or  x > −3' },
            { text: 'Graph: a ray left from −2 (open dot) and a ray right from −3 (open dot).',
              math: 'x < −2  or  x > −3', note: 'Here the two rays actually overlap — every real number works. OR just means “either piece counts.”' }
          ],
          done: 'Solve each piece separately, FLIP the sign whenever you multiply or divide by a negative, then union them for OR.'
        } },

      { kind: 'discover', title: 'The flip rule and reading the dots',
        text: 'Whenever you <b>multiply or divide by a negative</b>, the inequality sign <b>flips</b>: −2x < 6 becomes x > −3. On a number line, the endpoint dot tells the story: <b>open dot</b> (○) for strict < or > (the value is NOT included), <b>closed dot</b> (●) for ≤ or ≥ (the value IS included). Never treat AND like OR — a band is one piece, a union is two.',
        rule: 'flip on negative × or ÷ · open dot = < >, closed dot = ≤ ≥' },

      { kind: 'practice', difficulty: 'easy', title: 'Solve them', component: 'problemSet',
        config: { problems: [
          { prompt: 'Solve: <b>−4 < x + 1 ≤ 3</b>', answer: '−5 < x ≤ 2', choices: ['−5 < x ≤ 2', '−3 < x ≤ 4', '−5 < x ≤ 4'], hint: 'Subtract 1 from all three parts.' },
          { prompt: 'Solve: <b>−3x < 12</b>', answer: 'x > −4', choices: ['x > −4', 'x < −4', 'x < 4'], hint: 'Divide by −3 → flip the sign.' },
          { prompt: 'Solve: <b>x − 2 > 3 or x + 1 < −1</b>', answer: 'x > 5 or x < −2', choices: ['x > 5 or x < −2', 'x > 5 and x < −2', '−2 < x < 5'], hint: 'Solve each piece; keep the OR.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Watch the flip', component: 'problemSet',
        config: { problems: [
          { prompt: 'Solve: <b>−6 ≤ −2x < 8</b>', answer: '−4 < x ≤ 3', choices: ['−4 < x ≤ 3', '3 ≥ x > −4', '−4 ≤ x < 3'], hint: 'Divide all parts by −2 → flip BOTH signs and swap the ends.' },
          { prompt: 'Solve: <b>5 < 2x + 1 ≤ 11</b>', answer: '2 < x ≤ 5', choices: ['2 < x ≤ 5', '2 ≤ x < 5', '3 < x ≤ 6'], hint: 'Subtract 1 from all three, then divide by 2.' }
        ] } },
      { kind: 'mastery', title: 'Compound check', component: 'problemSet',
        config: { problems: [
          { prompt: 'Solve: <b>−1 ≤ 2x + 3 < 7</b>', answer: '−2 ≤ x < 2', choices: ['−2 ≤ x < 2', '−2 ≤ x < 5', '1 ≤ x < 2', '−4 ≤ x < 4'], hint: 'Subtract 3 from all parts, then ÷2.', misconceptions: { '−2 ≤ x < 5': 'You didn’t subtract 3 from the right (7−3 = 4, then ÷2 = 2)', '1 ≤ x < 2': 'You divided the middle by 2 but not the left end', '−4 ≤ x < 4': 'You subtracted 3 but forgot to divide all parts by 2' } },
          { prompt: 'Solve: <b>−5x ≥ 20</b>', answer: 'x ≤ −4', choices: ['x ≤ −4', 'x ≥ −4', 'x ≤ 4', 'x ≥ 4'], hint: 'Divide by −5.', misconceptions: { 'x ≥ −4': 'Dividing by a negative FLIPS ≥ to ≤ — you forgot the flip', 'x ≤ 4': '20 ÷ (−5) = −4, not 4 — mind the sign', 'x ≥ 4': 'Both the flip and the sign are wrong here' } },
          { prompt: '<b>x < −1 or x ≥ 4</b> describes…', answer: 'two separate rays (a union)', choices: ['two separate rays (a union)', 'a band between −1 and 4', 'only the numbers −1 and 4'], hint: 'OR joins with union.', misconceptions: { 'a band between −1 and 4': 'That’s AND (overlap) — OR keeps the pieces separate', 'only the numbers −1 and 4': 'Each piece is a whole ray, not a single endpoint' } },
          { prompt: 'A closed dot ● at x = 3 on a number line means…', answer: '3 is included (≤ or ≥)', choices: ['3 is included (≤ or ≥)', '3 is excluded (< or >)', 'x must equal 3'], hint: 'Filled = included.', misconceptions: { '3 is excluded (< or >)': 'That’s the OPEN dot ○ — a filled dot INCLUDES the endpoint', 'x must equal 3': 'The dot marks the boundary of a ray, not the only value' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why does an AND inequality give a single band while an OR gives two separate rays? And why must you flip the sign when dividing by a negative?',
        starters: ['AND is a band because', 'OR is two rays because', 'Dividing by a negative flips the sign because'] },
      { kind: 'extend', title: 'Go further', intro: 'Compound inequalities describe real ranges.',
        items: [
          { icon: '🌡️', label: 'A safe range', detail: 'A fridge must stay 1 ≤ T ≤ 4 °C. Write and graph the band — that’s a compound AND in the wild.' },
          { icon: '🚗', label: 'Speed limits', detail: 'A road posts “no slower than 45 and no faster than 65.” Turn it into a compound inequality.' },
          { icon: '🎢', label: 'Height rules', detail: 'A ride needs riders taller than 48 in but shorter than 78 in. AND or OR? Sketch the number line.' }
        ] }
    ]
  });

  /* ---- AI.L.4 · Modeling with Lines -------------------------------------- */
  reg({
    concept: 'linear-modeling', title: 'Modeling with Lines',
    standards: ['AI.L.4'],
    steps: [
      { kind: 'teach', title: 'Turning a story into y = mx + b',
        lead: 'Modelling is translation: a real situation goes in, an equation <b>y = mx + b</b> comes out. Two words in the story do all the work — a <b>“per” or “each”</b> phrase is the <b>rate</b> (the slope m), and a <b>one-time “start” or “fee”</b> is the <b>beginning amount</b> (the intercept b). Find those two, and the model writes itself.',
        anatomy: {
          expr: '<span class="tint-y">y</span> = <span class="tint-m">m</span><span class="tint-x">x</span> + <span class="tint-b">b</span>',
          parts: [
            { sym: 'b', tone: 'b', name: 'the start', desc: 'the <b>one-time</b> amount before anything changes — the fee, deposit, or value at step 0' },
            { sym: 'm', tone: 'm', name: 'the rate', desc: 'the <b>per / each</b> amount — how much y changes for every 1 step of x' },
            { sym: 'x', tone: 'x', name: 'the input', desc: 'what accumulates: months, hours, items, years' },
            { sym: 'y', tone: 'y', name: 'the total', desc: 'the running result the model predicts' }
          ]
        },
        moves: [
          { label: '“…per month / each hour”', text: '→ that’s the slope m — a repeating rate of change.' },
          { label: '“$25 to join / starts at…”', text: '→ that’s the intercept b — paid or present once, at x = 0.' },
          { label: 'The quantity DROPS over time', text: '→ the slope is NEGATIVE (a $150/yr loss → m = −150).' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'A gym: <b>$25 to join</b> (paid once → b = 25) plus <b>$10 per month</b> (a rate → m = 10). Feed in 6 months and the model predicts the cost.',
          math: 'C = 10m + 25;   at m = 6:   C = 10(6) + 25 = $85'
        },
        takeaway: 'Per/each → slope; one-time/start → intercept. Then substitute to predict.' },

      { kind: 'prior', title: 'What do you think?',
        prompt: 'A gym charges <b>$25 to join</b> plus <b>$10 per month</b>. In a formula for total cost, which number is the slope (the rate)?',
        options: ['10 — the cost per month', '25 — the joining fee', 'Both are the slope'] },

      { kind: 'example', title: 'Build a model from a story', component: 'workedExample',
        intro: 'Every linear model answers two questions: what’s the STARTING amount (the intercept b), and what’s the RATE of change per step (the slope m)?',
        config: {
          problem: 'A gym charges $25 to join plus $10 per month. Model the cost, then find the cost after 6 months.',
          steps: [
            { ask: '“$10 per month” is a rate — a cost per step. In C = mm + b, this is the…',
              choices: ['slope m', 'intercept b', 'neither'], answer: 'slope m',
              why: 'A per-month rate is a change per step — that’s exactly the slope.',
              hint: 'A “per month” amount is a rate of change.',
              misconceptions: { 'intercept b': 'The intercept is the one-time START, not the repeating monthly rate', 'neither': '$10 per month is a rate — every rate is a slope' } },
            { ask: 'The $25 join fee is paid ONCE, at month 0. In the model it is the…',
              choices: ['intercept b', 'slope m', 'the answer'], answer: 'intercept b',
              why: 'The intercept is the value when the input is 0 — here, the cost before any months pass.',
              hint: 'The starting amount, at month 0.',
              misconceptions: { 'slope m': 'The slope is the repeating per-month rate — the join fee is a one-time start', 'the answer': 'It’s a piece of the model, not the final cost' } },
            { text: 'Assemble the model with slope 10 and intercept 25:', math: 'C = 10m + 25' },
            { text: 'Find the cost at 6 months — substitute m = 6:', math: 'C = 10(6) + 25 = 60 + 25 = $85',
              note: 'The slope 10 says each month adds $10; the 25 is the head start.' }
          ],
          done: 'Rate → slope, starting amount → intercept. Build y = mx + b, then substitute to predict.'
        } },

      { kind: 'discover', title: 'Rate is slope, start is intercept',
        text: 'To model a situation with <b>y = mx + b</b>: the <b>rate of change</b> (per hour, per month, per item) is the <b>slope m</b>, and the <b>starting amount</b> (the value before anything changes) is the <b>intercept b</b>. The <b>sign of the slope</b> tells the direction — a <b>positive</b> slope grows, a <b>negative</b> slope shrinks.',
        rule: 'rate → slope m · start → intercept b · sign of m = grows or shrinks' },

      { kind: 'explore', title: 'Feel slope and intercept', intro: 'Build each target line with the steppers — notice the slope tilts it and the intercept slides it up and down. That’s exactly what m and b do in a model.', component: 'lineGrapher', config: { mode: 'explore', rounds: 2 } },

      { kind: 'example', title: 'A decreasing model', component: 'workedExample',
        intro: 'When a quantity DROPS at a steady rate, the slope is NEGATIVE. Same recipe — just mind the sign.',
        config: {
          problem: 'A $1200 laptop loses $150 of value each year. Model its value V after t years, then find V at year 3.',
          steps: [
            { text: 'The starting value (year 0) is $1200 — that’s the intercept.', math: 'b = 1200' },
            { ask: 'It LOSES $150 each year. What is the slope?',
              choices: ['−150', '150', '1200'], answer: '−150',
              why: 'Losing value means the amount goes DOWN each year — a negative rate, so slope = −150.',
              hint: 'Decreasing → the slope is negative.',
              misconceptions: { '150': 'A positive slope would mean the laptop GAINS $150 a year — it’s losing, so −150', '1200': '1200 is the starting value (the intercept), not the yearly rate' } },
            { text: 'Assemble the model — negative slope, positive intercept:', math: 'V = 1200 − 150t' },
            { ask: 'Find the value at year 3: V = 1200 − 150(3) = ?',
              choices: ['750', '450', '1050'], answer: '750',
              why: '150 × 3 = 450, and 1200 − 450 = 750.',
              hint: 'Multiply 150 by 3 first, then subtract from 1200.',
              misconceptions: { '450': 'That’s just 150 × 3 — you still subtract it from the 1200 start', '1050': 'That subtracts only one year’s $150 — subtract 3 years, 450 total' },
              math: 'V = 1200 − 450 = $750' }
          ],
          done: 'A decreasing rate is a negative slope. Keep the starting amount as a positive intercept.'
        } },

      { kind: 'discover', title: 'Predict — and read the meaning',
        text: 'Once you have y = mx + b you can <b>interpolate</b> (predict between known points) or <b>extrapolate</b> (predict beyond them) by substituting an input. Always read what the numbers MEAN in context: the slope is “how much per step,” the intercept is “where it starts.” Build a model from <b>two points</b> the same way — slope = (change in y)/(change in x), then back-solve for b.',
        rule: 'substitute to predict · slope = rise/run · b = the value at x = 0' },

      { kind: 'practice', difficulty: 'easy', title: 'Model the situation', component: 'problemSet',
        config: { problems: [
          { prompt: 'A plumber charges $50 to show up plus $30 per hour. The cost model is…', answer: 'C = 30h + 50', choices: ['C = 30h + 50', 'C = 50h + 30', 'C = 80h'], hint: 'Rate → slope, one-time fee → intercept.' },
          { prompt: 'A tank has 200 L and drains 5 L per minute. The model is…', answer: 'V = 200 − 5t', choices: ['V = 200 − 5t', 'V = 5t + 200', 'V = 200 + 5t'], hint: 'Draining means a negative rate.' },
          { prompt: 'In <b>y = 8x + 40</b> modelling savings over weeks, the $40 is the…', answer: 'starting amount', choices: ['starting amount', 'weekly rate', 'final total'], hint: 'The intercept is the value at week 0.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Interpret and predict', component: 'problemSet',
        config: { problems: [
          { prompt: 'Cost is <b>C = 10m + 25</b>. What is the cost after 6 months?', answer: '$85', choices: ['$85', '$60', '$150'], hint: 'Substitute m = 6: 10(6) + 25.' },
          { prompt: 'A candle starts at 20 cm and burns 2 cm/hr. When does it reach 6 cm?', answer: '7 hours', choices: ['7 hours', '3 hours', '14 hours'], hint: 'Solve 20 − 2t = 6 for t.' }
        ] } },
      { kind: 'mastery', title: 'Modeling check', component: 'problemSet',
        config: { problems: [
          { prompt: 'A subscription is $5 to start plus $12/month. The model is…', answer: 'C = 12m + 5', choices: ['C = 12m + 5', 'C = 5m + 12', 'C = 17m', 'C = 12m − 5'], hint: 'Rate → slope, start → intercept.', misconceptions: { 'C = 5m + 12': 'Swapped — the $12 per month is the rate (slope), $5 is the start', 'C = 17m': 'You added the two numbers — they play different roles, not one combined rate', 'C = 12m − 5': 'The $5 is a starting cost you PAY, so it’s +5, not −5' } },
          { prompt: 'A $900 phone loses $100 of value per year. Its value model is…', answer: 'V = 900 − 100t', choices: ['V = 900 − 100t', 'V = 900 + 100t', 'V = 100t + 900', 'V = 100 − 900t'], hint: 'Losing value → negative slope.', misconceptions: { 'V = 900 + 100t': 'A + slope means GAINING value — it’s dropping, so −100', 'V = 100t + 900': 'Same problem — the rate must be negative for a loss', 'V = 100 − 900t': 'Start and rate are swapped: 900 is the starting value' } },
          { prompt: 'In <b>y = −3x + 50</b>, the slope −3 tells you the quantity…', answer: 'decreases by 3 each step', choices: ['decreases by 3 each step', 'increases by 3 each step', 'starts at 3', 'starts at −3'], hint: 'Negative slope = falling.', misconceptions: { 'increases by 3 each step': 'The slope is negative, so it FALLS by 3, not rises', 'starts at 3': 'The starting amount is the intercept, 50 — not the slope', 'starts at −3': 'That confuses slope with intercept' } },
          { prompt: 'Cost <b>C = 15h + 40</b>. What does the 40 mean?', answer: 'a one-time starting fee of $40', choices: ['a one-time starting fee of $40', 'the cost per hour', 'the total cost', 'the number of hours'], hint: 'The intercept is the value at h = 0.', misconceptions: { 'the cost per hour': 'That’s the slope 15 — the 40 is the value before any hours pass', 'the total cost': 'The total depends on h; 40 is only the starting piece', 'the number of hours': '40 is a dollar amount, not a count of hours' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'How do you decide which number in a story is the slope and which is the intercept? What does the sign of the slope tell you?',
        starters: ['The slope is the number that', 'The intercept is the number that', 'A negative slope means'] },
      { kind: 'extend', title: 'Go further', intro: 'Lines model steady change everywhere.',
        items: [
          { icon: '📱', label: 'Compare two plans', detail: 'Plan A: $20 + $0.10/text. Plan B: $30 + $0.05/text. Model both and find where they cost the same.' },
          { icon: '📉', label: 'Depreciation', detail: 'A car worth $18,000 loses $2,000/year. Model V, then find when it’s worth $6,000.' },
          { icon: '📊', label: 'Fit two points', detail: 'From (2, 11) and (5, 20), find the slope and intercept, then write y = mx + b.' }
        ] }
    ]
  });

  /* ---- AI.L.6 · Linear Inequalities (2 vars) ----------------------------- */
  reg({
    concept: 'linear-inequalities-2', title: 'Linear Inequalities (2 vars)',
    standards: ['AI.L.6'],
    steps: [
      { kind: 'teach', title: 'The answer is a whole region, not a line',
        lead: 'An equation like <b>y = 2x − 1</b> draws a single line — every solution sits exactly on it. An <b>inequality</b> like <b>y ≤ 2x − 1</b> is far more generous: its solutions fill an <b>entire half of the plane</b> (a <b>half-plane</b>). The line becomes just the <b>boundary</b>; the real answer is the shaded side.',
        anatomy: {
          expr: '<span class="tint-y">y</span> <span class="tint-m">≤</span> <span class="tint-b">2x − 1</span>',
          parts: [
            { sym: '2x − 1', tone: 'b', name: 'the boundary', desc: 'the line y = 2x − 1 — the <b>edge</b> that splits the plane into two halves' },
            { sym: '≤', tone: 'm', name: 'the sign', desc: '<b>≤ / ≥</b> include the edge → <b>solid</b> line; strict <b>&lt; / &gt;</b> exclude it → <b>dashed</b> line' },
            { sym: 'y', tone: 'y', name: 'which side', desc: '<b>y &lt;</b> shades <b>below</b> the line, <b>y &gt;</b> shades <b>above</b>' }
          ]
        },
        moves: [
          { label: '≤ or ≥', text: '→ solid boundary — points on the line count as solutions.' },
          { label: 'Strict < or >', text: '→ dashed boundary — the line itself is NOT included.' },
          { label: 'Unsure which side?', text: '→ test (0, 0): if TRUE, shade its side; if FALSE, shade the other.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'For <b>y ≤ 2x − 1</b>: draw a <b>solid</b> line, then test (0, 0) → 0 ≤ −1 is FALSE, so shade the <b>opposite</b> side. The solution is that entire shaded half-plane, not the line.',
          math: 'boundary y = 2x − 1 (solid) · (0,0) fails → shade away from it'
        },
        takeaway: 'The solution is a shaded half-plane; the sign sets solid vs dashed, a test point sets the side.' },

      { kind: 'prior', title: 'What do you think?',
        prompt: 'The graph of the LINE y = 2x − 1 is a single line. What do you think the graph of the INEQUALITY y ≤ 2x − 1 looks like?',
        options: ['A whole shaded region (a half-plane)', 'Still just the line', 'Two separate lines'] },

      { kind: 'example', title: 'Graph y ≤ 2x − 1', component: 'workedExample',
        intro: 'Three moves: draw the boundary line, decide solid or dashed, then shade the correct half — and confirm with a test point.',
        config: {
          problem: 'Graph y ≤ 2x − 1',
          steps: [
            { text: 'Start with the boundary line y = 2x − 1 (slope 2, y-intercept −1).', math: 'boundary: y = 2x − 1' },
            { ask: 'The inequality is ≤ (“or equal to”). Is the boundary line solid or dashed?',
              choices: ['solid — points on the line count', 'dashed — points on the line don’t count'], answer: 'solid — points on the line count',
              why: '≤ and ≥ include the line itself, so the boundary is SOLID.',
              hint: '“Or equal to” means the line is part of the answer.',
              misconceptions: { 'dashed — points on the line don’t count': 'Dashed is only for strict < or > — ≤/≥ includes the line, so solid' } },
            { text: 'Now decide which side to shade. Test the easy point (0, 0): is 0 ≤ 2(0) − 1?', math: '0 ≤ −1 ?  →  FALSE' },
            { ask: '(0, 0) makes it FALSE. So the region containing (0, 0) is…',
              choices: ['NOT the solution — shade the other side', 'the solution — shade around (0,0)', 'exactly on the line'], answer: 'NOT the solution — shade the other side',
              why: 'If the test point fails, its whole side fails — shade the OPPOSITE side.',
              hint: 'A false test point means shade away from it.',
              misconceptions: { 'the solution — shade around (0,0)': 'The point FAILED — its side is not the solution, so shade the other half', 'exactly on the line': '(0, 0) is above the line here, not on it — and it failed the test' } },
            { text: 'Solid line y = 2x − 1, shaded BELOW/right where (0,0) is not — the whole half-plane of solutions.', math: 'solid line · shade the side away from (0, 0)' }
          ],
          done: 'Boundary line → solid (≤ ≥) or dashed (< >) → test a point → shade the side that makes it TRUE.'
        } },

      { kind: 'discover', title: 'Solid or dashed, and which side',
        text: 'Graphing y-form inequalities: the <b>boundary line</b> is <b>solid</b> for ≤ or ≥ (the line is included) and <b>dashed</b> for strict < or > (not included). Then, with y isolated, shade <b>above</b> the line for y &gt; (or ≥) and <b>below</b> for y &lt; (or ≤).',
        rule: '≤ ≥ solid · < > dashed · y > shade above, y < shade below' },

      { kind: 'explore', title: 'Meet the boundary line', intro: 'Every two-variable inequality starts from a line. Build these target lines with the steppers — that line becomes the edge you’ll shade from.', component: 'lineGrapher', config: { mode: 'explore', rounds: 2 } },

      { kind: 'example', title: 'Rearrange first, then graph', component: 'workedExample',
        intro: 'If the inequality isn’t in y-form, solve for y FIRST — and if you divide by a negative to do it, flip the sign. Then the shade rule reads straight off.',
        config: {
          problem: 'Graph 2x + y < 4',
          steps: [
            { text: 'Get y by itself — subtract 2x from both sides. No negative to divide by, so no flip here.', math: '2x + y < 4 → y < −2x + 4' },
            { ask: 'The inequality is strict (<). Solid or dashed boundary?',
              choices: ['dashed', 'solid'], answer: 'dashed',
              why: 'Strict < or > does NOT include the line, so draw it dashed.',
              hint: 'No “or equal to” → dashed.',
              misconceptions: { 'solid': 'Solid is for ≤/≥ — a strict < uses a dashed line' } },
            { ask: 'With y < −2x + 4, which side do you shade?',
              choices: ['below the line', 'above the line', 'the line only'], answer: 'below the line',
              why: 'y < something means y-values SMALLER than the line — that’s the region below it.',
              hint: 'y less than → below.',
              misconceptions: { 'above the line': 'Above is for y > — here y is LESS THAN, so shade below', 'the line only': 'The line is the boundary (dashed here); the solution is a whole region' } },
            { text: 'Confirm with (0, 0): 0 < −2(0) + 4 → 0 < 4, TRUE — so (0,0)’s side (below) is shaded. Everything agrees.',
              math: 'dashed line y = −2x + 4 · shade below · (0,0) checks TRUE' }
          ],
          done: 'Solve for y (flip on a negative divide), read solid/dashed from the sign, shade above/below, then verify with a test point.'
        } },

      { kind: 'discover', title: 'The test point is your safety check',
        text: 'The most reliable method is the <b>test point</b>: pick any point NOT on the line (<b>(0, 0)</b> is easiest), substitute it in. If it makes the inequality <b>TRUE</b>, shade the side <b>containing</b> that point; if <b>FALSE</b>, shade the <b>other</b> side. This works even if you’re unsure about above/below. And remember — if you rearranged by dividing by a negative, the sign <b>flipped</b>, which changes which side is “above.”',
        rule: 'test (0,0): TRUE → shade its side · FALSE → shade the other · flip on negative divide' },

      { kind: 'practice', difficulty: 'easy', title: 'Read the graph', component: 'problemSet',
        config: { problems: [
          { prompt: 'For <b>y > x + 2</b>, the boundary line is…', answer: 'dashed', choices: ['dashed', 'solid'], hint: 'Strict > → not included → dashed.' },
          { prompt: 'For <b>y ≤ −x + 3</b>, you shade…', answer: 'below the line', choices: ['below the line', 'above the line'], hint: 'y ≤ means y-values below.' },
          { prompt: 'Test <b>(0, 0)</b> in <b>y ≥ x − 1</b>: is (0,0) in the solution?', answer: 'yes — 0 ≥ −1 is true', choices: ['yes — 0 ≥ −1 is true', 'no — 0 ≥ −1 is false'], hint: 'Substitute: 0 ≥ 0 − 1 = −1.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Rearrange and decide', component: 'problemSet',
        config: { problems: [
          { prompt: 'Rewrite <b>2x + y < 4</b> in y-form.', answer: 'y < −2x + 4', choices: ['y < −2x + 4', 'y > −2x + 4', 'y < 2x + 4'], hint: 'Subtract 2x — no sign flip needed.' },
          { prompt: 'Rewrite <b>−y ≤ 3x − 2</b> in y-form.', answer: 'y ≥ −3x + 2', choices: ['y ≥ −3x + 2', 'y ≤ −3x + 2', 'y ≥ 3x − 2'], hint: 'Divide by −1 → flip ≤ to ≥ and negate each term.' }
        ] } },
      { kind: 'mastery', title: 'Inequality check', component: 'problemSet',
        config: { problems: [
          { prompt: 'The boundary of <b>y < 3x + 1</b> is drawn…', answer: 'dashed', choices: ['dashed', 'solid', 'not at all', 'as two lines'], hint: 'Strict inequality.', misconceptions: { 'solid': 'Solid is only for ≤ or ≥ — a strict < is dashed', 'not at all': 'You still draw the boundary; it just isn’t included (dashed)', 'as two lines': 'One inequality → one boundary line' } },
          { prompt: 'For <b>y ≥ −2x + 5</b>, shade…', answer: 'above the line', choices: ['above the line', 'below the line', 'only the line', 'the whole plane'], hint: 'y ≥ means y at or above.', misconceptions: { 'below the line': 'Below is for y ≤ — here y is GREATER, so shade above', 'only the line': 'The line is included, but the solution is a whole half-plane', 'the whole plane': 'Only the half where y ≥ the line is shaded' } },
          { prompt: 'You test (0,0) in <b>y > 2x − 1</b> and get 0 > −1 (TRUE). You should…', answer: 'shade the side containing (0, 0)', choices: ['shade the side containing (0, 0)', 'shade the other side', 'not shade at all', 'shade the line only'], hint: 'True test point → its own side.', misconceptions: { 'shade the other side': 'The point PASSED, so shade the side it’s on, not away from it', 'not shade at all': 'A true test point tells you exactly which region to shade', 'shade the line only': 'The boundary is dashed here; the solution is the region, not the line' } },
          { prompt: 'To graph <b>−x + y ≤ 3</b>, first rewrite it as…', answer: 'y ≤ x + 3', choices: ['y ≤ x + 3', 'y ≥ x + 3', 'y ≤ −x + 3', 'y ≥ −x − 3'], hint: 'Add x to both sides — no negative divide, no flip.', misconceptions: { 'y ≥ x + 3': 'No sign flip is needed — you only ADDED x, you didn’t divide by a negative', 'y ≤ −x + 3': 'Adding x makes +x on the right, not −x', 'y ≥ −x − 3': 'Two sign errors — just add x to isolate y' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why does a two-variable inequality shade a whole half-plane instead of just a line? How does the test point tell you which half to shade?',
        starters: ['The inequality is true for a whole region because', 'A solid line means, while a dashed line means', 'The test point works because'] },
      { kind: 'extend', title: 'Go further', intro: 'Half-planes model real constraints.',
        items: [
          { icon: '💵', label: 'A budget constraint', detail: 'You have $60; apples $2, oranges $3: 2a + 3o ≤ 60. Graph the feasible region of purchases.' },
          { icon: '🔗', label: 'A system of inequalities', detail: 'Graph y ≥ x AND y ≤ 4 together. The solution is where both shaded regions OVERLAP.' },
          { icon: '🎯', label: 'Why (0,0)?', detail: 'The origin is the easiest test point — but what do you do when the boundary line passes THROUGH (0, 0)?' }
        ] }
    ]
  });
})();
