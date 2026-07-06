/* Learning Atlas — Mathematics · Algebra I lessons.
   Seven concepts carry the full teaching arc (Warm-up → Explore → Discover →
   Worked examples → Practice → Challenge → Mastery → Reflect → Extend), each
   aligned to Indiana Algebra I standards. Manipulatives (equationBalance,
   lineGrapher, functionMachine) build intuition; workedExample steps then model
   the full written method line by line — with the learner supplying key steps —
   before any graded practice. Summative checks tag their distractors with the
   misconception each reveals. Registered on MATH.Player by concept id.           */
(function () {
  const P = window.MATH.Player, U = window.MATH.util;
  const reg = P.register;

  /* ---- Orientation · Algebra: Start Here -------------------------------- */
  /* A readable intro (no assessment): what algebra is, where it came from, and
     how the course is sequenced. Pure narrative + an extension. */
  reg({
    concept: 'algebra-intro', title: 'Algebra: Start Here',
    steps: [
      { kind: 'teach', title: 'What a letter really means',
        lead: 'The scary part of algebra is the letters — but a letter is just a <b>name for a number you don’t know yet</b>. It isn’t a new kind of maths; it’s a placeholder that lets you talk about a number before you’ve pinned it down. In <b>x + 5 = 12</b>, <b>x</b> is <i>one specific fixed number</i> hiding behind a mask — your whole job is to unmask it.',
        anatomy: {
          expr: '<span class="tint-x">x</span> + 5 = 12',
          parts: [
            { sym: 'x', tone: 'x', name: 'the unknown', desc: 'a <b>single fixed number</b> we haven’t found yet — here it can only be 7, nothing else' },
            { sym: '+ 5', tone: 'm', name: 'a known amount', desc: 'an ordinary number, doing ordinary arithmetic to x' },
            { sym: '=', tone: 'b', name: 'the balance', desc: 'a promise that both sides name the <b>same</b> value' }
          ]
        },
        moves: [
          { label: 'A letter in an equation', text: '→ stands for one fixed unknown you can solve for — like x in x + 5 = 12.' },
          { label: 'A letter in a formula', text: '→ stands for <i>any</i> number you choose to plug in — like x in “area = x²”. Same symbol, different job.' },
          { label: 'Once you know its value', text: '→ the letter and the number are interchangeable. x just <i>was</i> 7 all along.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'Think “<b>a number plus 5 equals 12</b>.” You already know in your gut it’s 7 — algebra is just the tidy way to write and confirm that hunch.',
          math: 'x + 5 = 12  →  x = 7'
        },
        takeaway: 'A letter isn’t scary — it’s a number wearing a name tag until you figure out who it is.' },
      { kind: 'discover', title: 'What is algebra?', text: 'Algebra is arithmetic with one powerful twist: we use <b>letters</b> to stand for numbers we don’t know yet. That single idea — a symbol for the unknown — lets us describe patterns, write general rules, and solve problems that fixed numbers never could.', rule: 'A letter (a variable) stands for an unknown number' },
      { kind: 'discover', title: 'Where it came from', text: 'Around 820 CE in Baghdad’s House of Wisdom, the Persian scholar <b>al-Khwārizmī</b> wrote a book whose title gave us the word “algebra” — from <i>al-jabr</i>, meaning “restoring” or “balancing”. He laid out step-by-step methods for balancing and solving equations — the very moves you’ll use here. His own name, Latinised, became another word you know: <b>algorithm</b>.' },
      { kind: 'discover', title: 'Why it’s worth it', text: 'Every graph, budget, video-game engine, rocket trajectory, and AI model runs on algebra. The real goal of this course isn’t memorising steps — it’s learning to move fluently between <b>words, tables, graphs, and equations</b>, and to reason about quantities you can’t yet see.' },
      { kind: 'discover', title: 'How this course is built', text: 'The map builds in order: <b>solving equations</b> → <b>slope & lines</b> → <b>functions</b> → <b>systems</b> → <b>exponents & polynomials</b> → <b>quadratics</b> → <b>data & statistics</b>. Master one concept and it unlocks the next. You can wander, but each idea leans on the ones before it.' },
      { kind: 'extend', title: 'Warm up', intro: 'Optional ways to ease in before the first lesson.',
        items: [
          { icon: '📜', label: 'The House of Wisdom', detail: 'Read a little about al-Khwārizmī and 9th-century Baghdad, where algebra was first written down.' },
          { icon: '🔤', label: 'Try the big idea', detail: 'Write “a number plus 5 equals 12” using a letter for the unknown. Congratulations — that’s algebra.' },
          { icon: '🗺️', label: 'Scan the map', detail: 'Close this and look over the Algebra I map. Notice how each concept connects to the next.' }
        ] }
    ]
  });

  /* ---- AI.L.1 · Solving Linear Equations -------------------------------- */
  reg({
    concept: 'solve-linear-eq', title: 'Solving Linear Equations',
    standards: ['AI.L.1'],
    hook: { emoji: '⚖️', text: 'A scale balances only when both sides weigh the same.', sub: 'Solving an equation is just keeping that balance while you get x alone.' },
    steps: [
      { kind: 'teach', title: 'What “solving” actually is',
        lead: 'Solving isn’t guessing — it’s <b>undoing</b>. x got buried under operations (times this, plus that); solving digs it back out by doing the <b>opposite operation, in reverse order</b>. The one iron rule: whatever you do to one side, you do to the <b>other</b>, so the equation stays balanced the whole way.',
        anatomy: {
          expr: '3<span class="tint-x">x</span> + 5 = 17',
          parts: [
            { sym: 'x', tone: 'x', name: 'what you want alone', desc: 'the unknown, currently buried under a ×3 and a +5' },
            { sym: '× 3', tone: 'm', name: 'inner layer', desc: 'done to x <b>first</b> — so it comes off <b>last</b>' },
            { sym: '+ 5', tone: 'b', name: 'outer layer', desc: 'done <b>last</b> — so it’s the <b>first</b> thing you undo' }
          ]
        },
        moves: [
          { label: 'Subtract from both sides', text: '→ undoes a + . The 5 leaves the left, and the right drops by 5 too — balance kept.' },
          { label: 'Divide both sides', text: '→ undoes a × . Split BOTH sides by 3 and x stands alone.' },
          { label: 'Touch only one side', text: '→ breaks the balance. Now the two sides name different numbers and the answer is wrong.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'For <b>3x + 5 = 17</b>: peel off the +5 first (subtract 5 from both sides → 3x = 12), then the ×3 (divide both sides by 3 → x = 4). Last on, first off.',
          math: '3x + 5 = 17  →  3x = 12  →  x = 4'
        },
        takeaway: 'Solving = unwrapping x in reverse, doing the same move to both sides every step.' },
      { kind: 'prior', title: 'What do you think?',
        prompt: 'In <b>x + 5 = 12</b>, what should you do to <b>both sides</b> to get x by itself?',
        options: ['Add 5 to both sides', 'Subtract 5 from both sides', 'Move the 5 across and flip its sign'] },
      { kind: 'explore', title: 'Balance the scale', intro: 'Do the same inverse operation to both sides until x is alone.', component: 'equationBalance', config: { rounds: 3 } },
      { kind: 'discover', title: 'Keep it balanced', text: 'An equation is a balance. To undo <b>+ b</b> you subtract b <b>from both sides</b>; to undo <b>× a</b> you divide both sides by a. Do the same thing to each side and the two sides stay equal — that is how x gets alone.', rule: 'Whatever you do to one side, do to the other' },

      { kind: 'example', title: 'Solve one, start to finish', component: 'workedExample',
        intro: 'The written version of the balance scale. Every solve is the same routine: undo what’s been done to x, one operation at a time.',
        config: {
          problem: 'Solve 3x + 5 = 17',
          steps: [
            { text: 'Read what happened to x: it was multiplied by 3, THEN 5 was added. To free it, undo in reverse order — the + 5 goes first.',
              math: 'undo + 5, then undo × 3' },
            { ask: 'What’s the first move?',
              choices: ['Subtract 5 from both sides', 'Divide both sides by 3', 'Move the 5 across and flip its sign'], answer: 'Subtract 5 from both sides',
              why: 'Subtracting 5 from BOTH sides keeps the balance — and “moving it across with a flipped sign” is just this move in disguise.',
              hint: 'Undo the last thing done to x first.',
              misconceptions: { 'Divide both sides by 3': 'Dividing now splits the 5 too: (3x + 5)/3 is messy. Clear the + 5 first', 'Move the 5 across and flip its sign': 'That shortcut WORKS, but know why: it’s “subtract 5 from both sides” wearing a costume' },
              math: '3x + 5 − 5 = 17 − 5  →  3x = 12' },
            { text: 'Now undo the × 3 — divide both sides by 3:', math: '3x ÷ 3 = 12 ÷ 3  →  x = 4' },
            { text: 'Check by putting 4 back in the ORIGINAL equation:', math: '3(4) + 5 = 12 + 5 = 17 ✓' }
          ],
          done: 'Undo in reverse order, same move on both sides, check at the end. Every linear equation falls to this.'
        } },

      { kind: 'discover', title: 'Undo in reverse order',
        text: 'x was dressed in layers: ×3 first, then +5 on top. Undressing goes in <b>reverse</b> — the last layer on is the first layer off. That’s why you clear the <b>+ or −</b> before the <b>× or ÷</b>. And the “move it across, flip the sign” trick? It’s not a separate rule — it’s literally “do the inverse to both sides”, abbreviated.',
        rule: 'last operation on → first operation undone' },

      { kind: 'example', title: 'x on both sides', component: 'workedExample',
        intro: 'When x appears on BOTH sides, add one move to the front of the routine: herd the x’s together first.',
        config: {
          problem: 'Solve 5x + 2 = 2x + 14',
          steps: [
            { text: 'Two flocks of x’s. Collect them on one side — subtract 2x from both sides (choosing the smaller flock keeps things positive):',
              math: '5x − 2x + 2 = 14  →  3x + 2 = 14' },
            { ask: 'Now it’s the routine you know. What next?',
              choices: ['Subtract 2 from both sides', 'Divide both sides by 3', 'Subtract 14 from both sides'], answer: 'Subtract 2 from both sides',
              why: 'Clear the + 2 first, then the × 3 — reverse order, as always.',
              hint: 'Plus and minus clear before times and divide.',
              misconceptions: { 'Divide both sides by 3': 'The + 2 is still stuck to the 3x — clear it first' },
              math: '3x = 12' },
            { text: 'Divide both sides by 3:', math: 'x = 4' },
            { text: 'Check in BOTH original sides:', math: '5(4) + 2 = 22 · 2(4) + 14 = 22 ✓ — both sides agree' }
          ],
          done: 'Collect the x’s → clear the constant → divide. The check works both sides now.'
        } },

      { kind: 'practice', difficulty: 'easy', title: 'Solve for x', component: 'problemSet',
        config: { generate() { return U.range(3).map(() => { const a = U.rand(2, 5), x = U.rand(1, 8), b = U.rand(1, 9), c = a * x + b; return { prompt: `Solve: <b class="m-big">${a}x + ${b} = ${c}</b>`, answer: x, hint: `First subtract ${b} from both sides, then divide by ${a}.` }; }); } } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Variables on both sides', component: 'problemSet',
        config: { generate() { return U.range(3).map(() => { const x = U.rand(1, 6), a = U.rand(3, 6), bLeft = U.rand(1, 5); const cRight = U.rand(1, 3); const bRight = (a - cRight) * x + bLeft; return { prompt: `Solve: <b class="m-big">${a}x + ${bLeft} = ${cRight}x + ${bRight}</b>`, answer: x, hint: `Get the x's on one side: subtract ${cRight}x from both sides first.` }; }); } } },
      { kind: 'mastery', title: 'Solve each equation', component: 'problemSet',
        config: { problems: [
          { prompt: 'Solve: <b>x + 7 = 3</b>. &nbsp; x =', answer: '−4', choices: ['−4', '4', '10', '−10'], hint: 'Subtract 7 from both sides.', misconceptions: { '4': 'You added 7 instead of subtracting it', '10': 'Adding 7 gives 10 — but you need the inverse: subtract' } },
          { prompt: 'Solve: <b>2x = 10</b>. &nbsp; x =', answer: '5', choices: ['5', '20', '8', '12'], hint: 'Divide both sides by 2.', misconceptions: { '20': 'You multiplied by 2 instead of dividing', '8': 'You subtracted 2 — the inverse of × is ÷' } },
          { prompt: 'Solve: <b>3x + 2 = 14</b>. &nbsp; x =', answer: '4', choices: ['4', '6', '16', '12'], hint: 'Subtract 2 first, then divide by 3.', misconceptions: { '6': 'You divided 14 by 3 before subtracting the 2', '16': 'You added instead of using inverse operations' } },
          { prompt: 'Solve: <b>5x − 3 = 12</b>. &nbsp; x =', answer: '3', choices: ['3', '9', '15', '1.8'], hint: 'Add 3 to both sides, then divide by 5.', misconceptions: { '9': 'You subtracted 3 again instead of adding it back', '1.8': 'You divided before adding the 3 back' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why do you have to do the same thing to BOTH sides of an equation? What happens if you don’t?',
        starters: ['I do the same to both sides because', 'Solving is the opposite of', 'The scale would'] },
      { kind: 'extend', title: 'Go further', intro: 'Push the balance idea further.',
        items: [
          { icon: '📐', label: 'Solve for a letter', detail: 'Rearrange the perimeter formula P = 2l + 2w to solve for w. Same moves, letters instead of numbers.' },
          { icon: '💸', label: 'Real-world setup', detail: 'A gym costs $25 to join plus $10/month. Write and solve an equation for how many months make the total $95.' },
          { icon: '⚖️', label: 'Break the balance', detail: 'Try adding to only ONE side of a real balance scale. What happens? Why must equations avoid that?' }
        ] }
    ]
  });

  /* ---- AI.L.3 · Slope ---------------------------------------------------- */
  reg({
    concept: 'slope', title: 'Slope',
    standards: ['AI.L.3'],
    hook: { emoji: '📈', text: 'A wheelchair ramp, a ski run, a staircase — all the same idea: how steep?', sub: 'How do we put a single number on the steepness of a line?' },
    steps: [
      { kind: 'teach', title: 'What slope really measures',
        lead: 'Slope isn’t just “a number” — it’s a <b>rate of change with a direction built in</b>. It answers: for every step you take to the right, how far up (or down) does the line go? That’s why it’s <b>rise over run</b> — and why the <b>sign</b> matters as much as the size.',
        anatomy: {
          expr: 'slope = <span class="tint-y">rise</span> ÷ <span class="tint-x">run</span>',
          parts: [
            { sym: 'rise', tone: 'y', name: 'the up-and-down', desc: 'change in <b>y</b> — positive if the line climbs, negative if it drops' },
            { sym: 'run', tone: 'x', name: 'the across', desc: 'change in <b>x</b> — how far right you stepped to get that rise' },
            { sym: '÷', tone: 'm', name: 'per one step', desc: 'the division turns it into a <b>rate</b>: rise <i>for each</i> unit of run' }
          ]
        },
        moves: [
          { label: 'Bigger number', text: '→ steeper line. Slope 5 climbs faster than slope 2.' },
          { label: 'Positive vs. negative', text: '→ direction flips. Positive climbs left-to-right; negative falls. Same size, opposite tilt.' },
          { label: 'Swap the order', text: '→ do (y₂−y₁) over (x₂−x₁) in the <b>same</b> order both times. Mixing the order flips the sign wrongly.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'A road that rises <b>6 m</b> over a <b>2 m</b> horizontal run has slope 6 ÷ 2 = 3 — it gains 3 metres of height for every 1 metre across. A road dropping the same amount has slope −3.',
          math: 'slope = 6 ÷ 2 = 3'
        },
        takeaway: 'Slope is a rate <i>and</i> a direction: how much y changes per step of x, sign included.' },
      { kind: 'prior', title: 'What do you think?',
        prompt: 'A line goes <b>up 6</b> every time it goes <b>2 to the right</b>. How steep is it (its slope)?',
        options: ['3', '8', '12'] },
      { kind: 'explore', title: 'Feel the slope', intro: 'Build each target line — watch how the slope tilts it.', component: 'lineGrapher', config: { mode: 'explore', rounds: 3 } },
      { kind: 'discover', title: 'Rise over run', text: 'Slope measures steepness as <b>rise ÷ run</b> — how far the line goes <b>up</b> for each step to the <b>right</b>. A line going up has a <b>positive</b> slope; going down is <b>negative</b>; flat is <b>0</b>.', rule: 'slope = rise ÷ run' },

      { kind: 'example', title: 'Slope from two points, start to finish', component: 'workedExample',
        intro: 'No picture needed — two points are enough. The formula is rise ÷ run written with coordinates.',
        config: {
          problem: 'Find the slope through (−1, 2) and (3, 10)',
          steps: [
            { text: 'Rise is the change in y, run is the change in x. Subtract in the SAME order both times — second point minus first:',
              math: 'm = (y₂ − y₁) / (x₂ − x₁)' },
            { ask: 'The rise: y goes from 2 to 10, so y₂ − y₁ = ?',
              choices: ['8', '12', '−8'], answer: '8',
              why: '10 − 2 = 8 — the line climbs 8.',
              hint: 'Second y minus first y.' },
            { text: 'The run — careful, subtracting a negative: x₂ − x₁ = 3 − (−1).',
              math: '3 − (−1) = 3 + 1 = 4', note: 'This is THE classic slip: 3 − (−1) is 4, not 2.' },
            { text: 'Divide rise by run:', math: 'm = 8 / 4 = 2' },
            { text: 'Sanity check: positive slope, and the points do climb left-to-right. Swap which point is “first” and you get −8/−4 = 2 — same answer, as long as you don’t mix the order.',
              math: '(2 − 10)/(−1 − 3) = −8/−4 = 2 ✓' }
          ],
          done: 'Same order top and bottom, mind the negatives, then divide.'
        } },

      { kind: 'discover', title: 'The four slope personalities',
        text: 'Every line is one of four: <b>positive</b> (climbs left-to-right), <b>negative</b> (falls), <b>zero</b> (flat — the rise is 0, and 0 ÷ run = 0), and <b>undefined</b> (vertical — the run is 0, and dividing by 0 is not allowed). Zero and undefined are opposites, not synonyms: flat has a slope, vertical doesn’t.',
        rule: 'up + · down − · flat 0 · vertical undefined' },

      { kind: 'practice', difficulty: 'easy', title: 'Read the line', component: 'lineGrapher', config: { mode: 'read', rounds: 2 } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Slope from two points', component: 'problemSet',
        config: { generate() { return U.range(3).map(() => { const x1 = U.rand(-4, 0), x2 = U.rand(1, 4), m = U.pick([-2, -1, 1, 2, 3]), y1 = U.rand(-3, 3), y2 = y1 + m * (x2 - x1); return { prompt: `Slope through <b>(${x1}, ${y1})</b> and <b>(${x2}, ${y2})</b>?`, answer: m, hint: '(change in y) ÷ (change in x).' }; }); } } },
      { kind: 'mastery', title: 'Find the slope', component: 'problemSet',
        config: { problems: [
          { prompt: 'A line rises <b>4</b> for every <b>2</b> across. Its slope is…', answer: '2', choices: ['2', '1/2', '8', '−2'], hint: 'rise ÷ run.', misconceptions: { '1/2': 'That’s run ÷ rise — slope is rise ÷ run', '−2': 'A rising line has a positive slope' } },
          { prompt: 'Through <b>(0, 1)</b> and <b>(2, 5)</b>, the slope is…', answer: '2', choices: ['2', '3', '1/2', '−2'], hint: 'Change in y over change in x.', misconceptions: { '3': 'That’s the change in x plus 1 — use rise ÷ run', '1/2': 'You put run over rise' } },
          { prompt: 'A <b>horizontal</b> line has slope…', answer: '0', choices: ['0', '1', 'undefined'], hint: 'It never rises.', misconceptions: { 'undefined': 'A vertical line is undefined; a horizontal line is 0' } },
          { prompt: 'Going <b>down 3</b> for every <b>1</b> across, the slope is…', answer: '−3', choices: ['−3', '3', '−1/3'], hint: 'Down means negative.', misconceptions: { '3': 'A falling line has a negative slope', '−1/3': 'You swapped rise and run' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'How can you tell, just by looking, whether a line’s slope is positive, negative, or zero?',
        starters: ['A positive slope', 'A negative slope', 'The bigger the number, the'] },
      { kind: 'extend', title: 'Go further', intro: 'Find slope in the world.',
        items: [
          { icon: '🛹', label: 'Slope hunt', detail: 'Find a ramp or roof and estimate its rise and run. What’s its slope? Is a 1/12 wheelchair ramp steep?' },
          { icon: '↔️', label: 'Zero vs. undefined', detail: 'Why is a flat line slope 0 but a vertical line “undefined”? Try rise ÷ run when the run is 0.' },
          { icon: '📊', label: 'Slope as a rate', detail: 'On a distance-vs-time graph, what does the slope actually measure?' }
        ] }
    ]
  });

  /* ---- AI.L.3 / AI.L.5 · Slope-Intercept Form --------------------------- */
  reg({
    concept: 'slope-intercept', title: 'Slope-Intercept Form',
    standards: ['AI.L.3', 'AI.L.5'],
    hook: { emoji: '📐', text: 'One tidy formula — y = mx + b — describes an entire line at a glance.', sub: 'If you know only the slope and the starting height, can you draw the whole line?' },
    steps: [
      { kind: 'teach', title: 'What y = mx + b actually says',
        lead: 'A line is a <b>rule for turning any x into a y</b> — a little machine: feed it an input, it hands back an output. The equation <b>y = mx + b</b> is that rule written down, and just <b>two numbers</b> — m and b — set the whole line’s behaviour.',
        anatomy: {
          expr: '<span class="tint-y">y</span> = <span class="tint-m">m</span><span class="tint-x">x</span> + <span class="tint-b">b</span>',
          parts: [
            { sym: 'b', tone: 'b', name: 'the start', desc: 'where the line sits when x = 0 — the <b>y-intercept</b>, your starting height' },
            { sym: 'm', tone: 'm', name: 'the rate', desc: 'how much y changes <b>every time x goes up by 1</b> — the <b>slope</b>, or “rise over run”' },
            { sym: 'x', tone: 'x', name: 'the input', desc: 'the value you choose to feed in' },
            { sym: 'y', tone: 'y', name: 'the output', desc: 'what the line hands back for that x' }
          ]
        },
        moves: [
          { label: 'Bigger m', text: '→ a steeper climb. The line tilts up faster as x grows.' },
          { label: 'Negative m', text: '→ the line runs downhill: y falls as x rises.' },
          { label: 'Change b', text: '→ the whole line slides straight up or down — the steepness never changes.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: '<b>y = 2x + 3</b> reads as: “<b>start at 3</b>, then <b>climb 2</b> for every step right.” Step x from 0 → 1 → 2 and y answers back:',
          math: 'x: 0 → 1 → 2   gives   y: 3 → 5 → 7'
        },
        takeaway: 'm and b are the line’s personality; x is just the question you ask it.' },

      { kind: 'prior', title: 'What do you think?',
        prompt: 'In <b>y = 3x + 2</b>, which number tells you where the line <b>crosses the y-axis</b>?',
        options: ['3', '2', 'x'] },
      { kind: 'explore', title: 'Build y = mx + b', intro: 'Change m and b and watch the line respond.', component: 'lineGrapher', config: { mode: 'explore', rounds: 3 } },
      { kind: 'discover', title: 'What m and b do', text: 'In <b>y = mx + b</b>, <b>m</b> is the <b>slope</b> (the tilt) and <b>b</b> is the <b>y-intercept</b> (where the line crosses the y-axis). Change m and the line pivots; change b and it slides up or down.', rule: 'y = mx + b  →  m = slope, b = y-intercept' },

      { kind: 'example', title: 'From equation to graph by hand', component: 'workedExample',
        intro: 'Two pieces of information, whole line drawn. Start where b says, step where m says.',
        config: {
          problem: 'Graph y = −2x + 4 without a table',
          steps: [
            { ask: 'Which point do you plot FIRST?',
              choices: ['(0, 4) — the y-intercept', '(4, 0)', '(−2, 0)'], answer: '(0, 4) — the y-intercept',
              why: 'b = 4 is where the line crosses the y-axis — the point with x = 0.',
              hint: 'b lives on the y-axis.',
              misconceptions: { '(4, 0)': 'That’s on the x-axis — the y-intercept has x = 0, so it’s (0, 4)', '(−2, 0)': '−2 is the slope, not a point' },
              math: 'start at (0, 4)' },
            { text: 'Now use the slope as marching orders. m = −2 means −2/1: every 1 step RIGHT, go 2 DOWN.',
              math: '(0, 4) → right 1, down 2 → (1, 2)' },
            { ask: 'March once more from (1, 2). Where do you land?',
              choices: ['(2, 0)', '(2, 4)', '(0, 0)'], answer: '(2, 0)',
              why: 'Right 1 to x = 2, down 2 to y = 0.',
              hint: 'Same move again: right 1, down 2.',
              misconceptions: { '(2, 4)': 'Negative slope goes DOWN as x increases' } },
            { text: 'Three points in a row — rule them with one straight line, arrows both ways.', math: '(0,4) (1,2) (2,0) → the line' }
          ],
          done: 'Plot b, then step by m as many times as you like. Two numbers really do pin down the whole line.'
        } },

      { kind: 'discover', title: 'm is a rate, b is a start',
        text: 'Out in the world, <b>b</b> is the <b>starting amount</b> and <b>m</b> is the <b>rate of change</b>. A phone plan “$30 up front plus $15 a month” IS y = 15x + 30: b = 30 (pay it before any months pass), m = 15 (each month adds 15). When a story says <i>per</i>, <i>each</i>, or <i>every</i> — that number is m. A one-time fee, deposit, or head start — that’s b.',
        rule: '“per / each / every” → m · “to start / up front” → b' },

      { kind: 'practice', difficulty: 'easy', title: 'Name m and b', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const m = U.pick([-3, -2, -1, 1, 2, 3]), b = U.rand(-5, 5); const ask = U.pick(['m', 'b']); return ask === 'm' ? { prompt: `In <b>y = ${m}x ${b < 0 ? '− ' + -b : '+ ' + b}</b>, the <b>slope</b> is…`, answer: m, hint: 'The number multiplied by x.' } : { prompt: `In <b>y = ${m}x ${b < 0 ? '− ' + -b : '+ ' + b}</b>, the <b>y-intercept</b> is…`, answer: b, hint: 'The constant on its own.' }; }); } } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Match the line', component: 'lineGrapher', config: { mode: 'read', rounds: 2 } },
      { kind: 'mastery', title: 'Read the equation', component: 'problemSet',
        config: { problems: [
          { prompt: 'In <b>y = −2x + 5</b>, the <b>slope</b> is…', answer: '−2', choices: ['−2', '5', '2', '−5'], hint: 'The coefficient of x.', misconceptions: { '5': 'That’s the y-intercept, not the slope', '2': 'Keep the negative sign' } },
          { prompt: 'In <b>y = 4x − 3</b>, the <b>y-intercept</b> is…', answer: '−3', choices: ['−3', '4', '3', '−4'], hint: 'The constant term.', misconceptions: { '4': 'That’s the slope', '3': 'The intercept is negative here' } },
          { prompt: 'A line with slope <b>1</b> crossing y at <b>−2</b> is…', answer: 'y = x − 2', choices: ['y = x − 2', 'y = −2x + 1', 'y = x + 2', 'y = 2x − 1'], hint: 'y = mx + b.', misconceptions: { 'y = −2x + 1': 'You swapped the slope and the intercept' } },
          { prompt: 'Which line is <b>steeper</b>?', answer: 'y = 5x − 1', choices: ['y = 5x − 1', 'y = 2x + 9'], hint: 'Steepness is the slope.', misconceptions: { 'y = 2x + 9': 'Steepness is the slope (5 > 2), not the intercept' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why is y = mx + b so useful? What can you tell about a line the instant you see it in this form?',
        starters: ['From y = mx + b I can immediately see', 'The b tells me', 'The m tells me'] },
      { kind: 'extend', title: 'Go further', intro: 'Other forms, same line.',
        items: [
          { icon: '🔁', label: 'Other forms', detail: 'Standard form is Ax + By = C. Rearrange 2x + y = 4 into y = mx + b. Which form shows the slope faster?' },
          { icon: '📱', label: 'Model a plan', detail: 'A plan charges $30 up front plus $15/month. Write it as y = mx + b. What are m and b in real terms?' },
          { icon: '✏️', label: 'Sketch from scratch', detail: 'Given y = −½x + 3, plot the intercept, then use the slope to step to the next point.' }
        ] }
    ]
  });

  /* ---- AI.F.1 / AI.F.2 · Functions & Notation --------------------------- */
  reg({
    concept: 'function-basics', title: 'Functions & Notation',
    standards: ['AI.F.1', 'AI.F.2'],
    hook: { emoji: '⚙️', text: 'A function is a machine: one input goes in, exactly one output comes out.', sub: 'Could the same input ever give two different outputs?' },
    steps: [
      { kind: 'teach', title: 'What f(x) really means',
        lead: 'The notation <b>f(x)</b> trips everyone up because it <i>looks</i> like f times x — it isn’t. Read it as “<b>f of x</b>”: the machine named <b>f</b>, fed the input <b>x</b>. A function is a machine with one unbreakable promise — <b>one input, exactly one output</b>. Same number in, same answer out, every time.',
        anatomy: {
          expr: '<span class="tint-m">f</span>(<span class="tint-x">x</span>) = <span class="tint-y">2x + 1</span>',
          parts: [
            { sym: 'f', tone: 'm', name: 'the machine', desc: 'the <b>name</b> of the rule — not a number multiplying anything' },
            { sym: 'x', tone: 'x', name: 'the input', desc: 'the value you feed in; the parentheses mean “<b>of</b>”, not “times”' },
            { sym: '2x + 1', tone: 'y', name: 'the rule', desc: 'what the machine <b>does</b> to whatever you put in' }
          ]
        },
        moves: [
          { label: 'Feed in a number', text: '→ replace every x with it. f(3) means put 3 everywhere x was: 2(3) + 1 = 7.' },
          { label: 'Same input twice', text: '→ same output twice, guaranteed. That reliability is what <i>makes</i> it a function.' },
          { label: 'One input, two outputs', text: '→ not a function. {(1,2),(1,5)} breaks the promise — 1 can’t give both 2 and 5.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'Think of a vending machine: press <b>B4</b> and you always get the same snack. <b>f(B4)</b> is “what comes out when you press B4.” It never hands you two different things for one button.',
          math: 'f(3) = 2(3) + 1 = 7   →   (3, 7)'
        },
        takeaway: 'f(x) is “f of x” — a machine, not multiplication — and it gives exactly one output per input.' },
      { kind: 'prior', title: 'What do you think?',
        prompt: 'A machine follows the rule <b>f(x) = 2x + 1</b>. What is <b>f(3)</b>?',
        options: ['7', '6', '5'] },
      { kind: 'explore', title: 'Run the machine', intro: 'Apply the rule to each input.', component: 'functionMachine', config: { mode: 'apply', rounds: 3 } },
      { kind: 'discover', title: 'What f(x) means', text: '<b>f(x)</b> is just a name for the output when the input is x. A relation is a <b>function</b> only if every input has <b>exactly one</b> output — put the same number in, you always get the same answer out.', rule: 'f(x) = the one output for input x' },

      { kind: 'example', title: 'Read the notation, start to finish', component: 'workedExample',
        intro: 'f(5) looks like multiplication but isn’t. Decode it once carefully and the notation never bites again.',
        config: {
          problem: 'If f(x) = x² − 2x, find f(5) — and say what it means',
          steps: [
            { text: 'f(5) asks one question: “what comes OUT of the machine when 5 goes in?” To answer, replace EVERY x with 5:',
              math: 'f(5) = 5² − 2(5)' },
            { ask: 'Compute it — powers before products:',
              choices: ['15', '5', '35'], answer: '15',
              why: '5² = 25, then 25 − 10 = 15.',
              hint: 'Square the 5 first, then subtract 2 × 5.',
              misconceptions: { '35': 'You ADDED the 2(5) — the rule subtracts it: 25 − 10 = 15', '5': 'Don’t solve anything — just substitute and compute' },
              math: 'f(5) = 25 − 10 = 15' },
            { text: 'Say it in words: “when the input is 5, the output is 15.” On the graph, that’s a point:', math: '(5, 15) is on the graph of f' },
            { text: 'What f(5) is NOT: f times 5. The parentheses here mean “of” — the function f, fed the input 5.',
              math: 'f(5) ≠ f · 5' }
          ],
          done: 'Substitute for every x, compute, and read the result as input → output.'
        } },

      { kind: 'discover', title: 'Spotting a non-function',
        text: 'The test is always the same question: <b>does any input have two outputs?</b> In a set of pairs, hunt for a repeated FIRST number with different second numbers: {(1,2), (1,5)} fails. On a graph, the same idea becomes the <b>vertical line test</b> — a vertical line marks one input, so if it crosses the curve twice, that input has two outputs. Two inputs sharing one output is fine; one input with two outputs never is.',
        rule: 'repeated input, different outputs → not a function' },

      { kind: 'practice', difficulty: 'easy', title: 'Find the rule', component: 'functionMachine', config: { mode: 'infer', rounds: 2 } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Evaluate functions', component: 'problemSet',
        config: { generate() { return U.range(3).map(() => { const a = U.rand(2, 5), b = U.rand(-4, 4), x = U.rand(-3, 5); return { prompt: `If <b>f(x) = ${a}x ${b < 0 ? '− ' + -b : '+ ' + b}</b>, then <b>f(${x})</b> =`, answer: a * x + b, hint: `Multiply by ${a}, then ${b < 0 ? 'subtract ' + -b : 'add ' + b}.` }; }); } } },
      { kind: 'mastery', title: 'Function check', component: 'problemSet',
        config: { problems: [
          { prompt: 'If <b>f(x) = 3x − 2</b>, then <b>f(4)</b> =', answer: '10', choices: ['10', '12', '5', '14'], hint: 'Multiply first, then subtract.', misconceptions: { '12': 'You found 3×4 but forgot the − 2', '5': 'That’s 3 + 4 − 2 — multiply before you add' } },
          { prompt: 'If <b>f(x) = x² + 1</b>, then <b>f(3)</b> =', answer: '10', choices: ['10', '7', '9', '16'], hint: 'Square first.', misconceptions: { '7': '3² is 9, not 6', '9': 'You forgot to add the 1' } },
          { prompt: 'Which is <b>NOT</b> a function?', answer: '{(1,2), (1,5)}', choices: ['{(1,2), (1,5)}', '{(1,2), (2,5)}', '{(1,2), (3,2)}'], hint: 'One input, two outputs?', misconceptions: { '{(1,2), (3,2)}': 'Two inputs sharing an output is fine — the problem is one input with two outputs' } },
          { prompt: 'For <b>f(x) = 5</b>, what is <b>f(100)</b>?', answer: '5', choices: ['5', '100', '500'], hint: 'It’s a constant function.', misconceptions: { '100': 'Every input maps to 5 — the output never changes' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'What makes a relation a function? Give an everyday example of a rule that IS a function and one that isn’t.',
        starters: ['A relation is a function when', 'A function I use every day is', 'It is NOT a function if'] },
      { kind: 'extend', title: 'Go further', intro: 'See functions everywhere.',
        items: [
          { icon: '📏', label: 'The vertical line test', detail: 'Why does a vertical line crossing a graph twice mean it’s not a function?' },
          { icon: '🎛️', label: 'Domain limits', detail: 'For f(x) = 1/x, what input is not allowed? Functions can have inputs they refuse.' },
          { icon: '🔗', label: 'Compose machines', detail: 'If f(x) = x + 1 and g(x) = 2x, what does g(f(3)) give? Feed one machine into the next.' }
        ] }
    ]
  });

  /* ---- AI.SEI.1 · Systems by Graphing ----------------------------------- */
  reg({
    concept: 'systems', title: 'Systems by Graphing',
    standards: ['AI.SEI.1'],
    hook: { emoji: '✖️', text: 'Two lines, two rules — but is there a single (x, y) that makes BOTH true at once?', sub: 'Where would two phone plans cost exactly the same?' },
    steps: [
      { kind: 'teach', title: 'What a solution to a system is',
        lead: 'A single line has endless points that satisfy it. A <b>system</b> asks a harder question: is there one <b>(x, y)</b> that satisfies <b>both</b> lines <i>at the same time</i>? Graph both, and that shared point is exactly <b>where they cross</b> — the one spot that lives on line 1 <i>and</i> line 2.',
        anatomy: {
          expr: '<span class="tint-m">y = 2x − 1</span>   and   <span class="tint-b">y = −x + 5</span>',
          parts: [
            { sym: 'line 1', tone: 'm', name: 'first rule', desc: 'every point on it makes <b>y = 2x − 1</b> true' },
            { sym: 'line 2', tone: 'b', name: 'second rule', desc: 'every point on it makes <b>y = −x + 5</b> true' },
            { sym: 'crossing', tone: 'x', name: 'the solution', desc: 'the <b>one</b> point on <i>both</i> — it obeys both rules at once' }
          ]
        },
        moves: [
          { label: 'Lines cross once', text: '→ exactly one solution: the single point they share.' },
          { label: 'Lines are parallel', text: '→ no crossing, so <b>no solution</b> — no (x, y) satisfies both.' },
          { label: 'Same line drawn twice', text: '→ they overlap everywhere, so <b>infinitely many</b> solutions.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'Two phone plans cost the same only at their crossing point. For <b>y = 2x − 1</b> and <b>y = −x + 5</b>, both lines pass through <b>(2, 3)</b> — plug it in and both give 3, so it satisfies both.',
          math: '2(2) − 1 = 3  and  −(2) + 5 = 3  →  (2, 3)'
        },
        takeaway: 'A system’s solution is the point that makes <i>every</i> equation true at once — where the lines cross.' },
      { kind: 'prior', title: 'What do you think?',
        prompt: 'Two lines are graphed. The <b>solution</b> to the system is…',
        options: ['where the lines cross', 'where each line hits the y-axis', 'the steeper line'] },
      { kind: 'explore', title: 'Find the crossing', intro: 'Click the point that sits on both lines.', component: 'lineGrapher', config: { mode: 'system', rounds: 3 } },
      { kind: 'discover', title: 'One point, both rules', text: 'The <b>solution</b> of a system is the point that lies on <b>both</b> lines — the (x, y) that satisfies both equations. Lines that cross once have <b>one</b> solution; parallel lines have <b>none</b>; the same line drawn twice has <b>infinitely many</b>.', rule: 'Solution = the point on BOTH lines' },

      { kind: 'example', title: 'Solve a system by graphing', component: 'workedExample',
        intro: 'Graph each line the y = mx + b way, read the crossing, then PROVE it with substitution.',
        config: {
          problem: 'Solve the system: y = 2x − 1 and y = −x + 5',
          steps: [
            { text: 'Graph line 1 from its own m and b: start at (0, −1), step right 1 up 2.',
              math: 'y = 2x − 1: (0,−1) → (1,1) → (2,3)' },
            { text: 'Graph line 2 the same way: start at (0, 5), step right 1 down 1.',
              math: 'y = −x + 5: (0,5) → (1,4) → (2,3)' },
            { ask: 'Both lists just named the same point. Where do the lines cross?',
              choices: ['(2, 3)', '(0, 5)', '(1, 1)'], answer: '(2, 3)',
              why: '(2, 3) appears on BOTH lines — that’s the one (x, y) both rules accept.',
              hint: 'Look for the point the two lists share.',
              misconceptions: { '(0, 5)': 'That’s line 2’s y-intercept — only line 2 passes through it', '(1, 1)': 'That’s on line 1 only — check it in y = −x + 5: −1 + 5 = 4, not 1' } },
            { text: 'Never trust the picture alone — verify in BOTH equations:',
              math: '2(2) − 1 = 3 ✓ · −(2) + 5 = 3 ✓' },
            { text: 'Answer as a point: the system’s solution is x = 2, y = 3.', math: '(2, 3)' }
          ],
          done: 'Graph both, read the crossing, substitute into both to confirm. The check is part of the method.'
        } },

      { kind: 'discover', title: 'Count solutions without graphing',
        text: 'You can predict the answer count from the equations alone — compare <b>m</b> first, then <b>b</b>. <b>Different slopes</b> → the lines must cross somewhere → exactly <b>one</b> solution. <b>Same slope, different intercepts</b> → parallel forever → <b>none</b>. <b>Same slope AND same intercept</b> → the very same line → <b>infinitely many</b>. Slopes first, intercepts second.',
        rule: 'm different → one · m same, b different → none · both same → infinite' },

      { kind: 'practice', difficulty: 'easy', title: 'Does the point fit?', component: 'problemSet',
        config: { problems: [
          { prompt: 'Is <b>(2, 5)</b> on <b>y = 2x + 1</b>?', answer: 'Yes', choices: ['Yes', 'No'], hint: '2(2)+1 = ?' },
          { prompt: 'Is <b>(1, 4)</b> on <b>y = x + 3</b>?', answer: 'Yes', choices: ['Yes', 'No'], hint: '1 + 3 = ?' },
          { prompt: 'Is <b>(0, 0)</b> on <b>y = x + 2</b>?', answer: 'No', choices: ['Yes', 'No'], hint: '0 + 2 ≠ 0.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'How many solutions?', component: 'problemSet',
        config: { problems: [
          { prompt: 'Lines with <b>different slopes</b> have how many solutions?', answer: 'One', choices: ['One', 'None', 'Infinite'], hint: 'They cross exactly once.' },
          { prompt: '<b>y = 2x + 1</b> and <b>y = 2x + 6</b> have…', answer: 'No solution', choices: ['No solution', 'One solution', 'Infinite'], hint: 'Same slope, different intercept.' },
          { prompt: '<b>y = x + 4</b> and <b>y = x + 4</b> have…', answer: 'Infinite solutions', choices: ['Infinite solutions', 'One solution', 'No solution'], hint: 'It’s the same line.' }
        ] } },
      { kind: 'mastery', title: 'Systems check', component: 'problemSet',
        config: { problems: [
          { prompt: 'The solution graphed as two crossing lines is…', answer: 'the intersection point', choices: ['the intersection point', 'the two y-intercepts', 'the origin'], hint: 'Where they meet.', misconceptions: { 'the two y-intercepts': 'Intercepts are where each line meets an axis, not each other', 'the origin': 'Only if the lines happen to cross at (0,0)' } },
          { prompt: 'Same slope, <b>different</b> intercepts →', answer: 'no solution', choices: ['no solution', 'one solution', 'infinite solutions'], hint: 'Picture parallel lines.', misconceptions: { 'one solution': 'Parallel lines never cross', 'infinite solutions': 'Different intercepts means they’re never the same line' } },
          { prompt: '<b>y = x + 1</b> and <b>y = x + 1</b> have…', answer: 'infinite solutions', choices: ['infinite solutions', 'one solution', 'no solution'], hint: 'Compare the two equations.', misconceptions: { 'one solution': 'They are the SAME line — every point works', 'no solution': 'Identical lines overlap everywhere' } },
          { prompt: 'Is <b>(2, 5)</b> a solution of <b>y = 2x + 1</b> AND <b>y = x + 3</b>?', answer: 'Yes', choices: ['Yes', 'No'], hint: 'Test both.', misconceptions: { 'No': 'Check both: 2(2)+1 = 5 ✓ and 2+3 = 5 ✓ — it fits both' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'How can two lines have NO solution? How can they have infinitely many? Sketch each in your head.',
        starters: ['No solution happens when', 'Infinite solutions happen when', 'One solution is the usual case because'] },
      { kind: 'extend', title: 'Go further', intro: 'Beyond graphing.',
        items: [
          { icon: '📱', label: 'Break-even', detail: 'Plan A: $40 + $10/mo. Plan B: $10 + $20/mo. Graph both — after how many months do they cost the same?' },
          { icon: '🧮', label: 'Solve without graphing', detail: 'Graphing is approximate. Substitution and elimination find the exact crossing — that’s the next concept.' },
          { icon: '🚗', label: 'Two travelers', detail: 'Two cars start apart and drive toward each other. When (and where) do their distance-time lines cross?' }
        ] }
    ]
  });

  /* ---- AI.NE.2 · Exponent Rules ----------------------------------------- */
  reg({
    concept: 'exponent-rules', title: 'Exponent Rules',
    standards: ['AI.NE.2'],
    hook: { emoji: '🔢', text: '3² × 3⁴ — do you add the exponents, or multiply them?', sub: 'Every exponent rule hides a simple counting shortcut. Let’s uncover it.' },
    steps: [
      { kind: 'teach', title: 'What an exponent counts',
        lead: 'An exponent is not a mysterious operation to memorise — it just <b>counts how many copies of the base are multiplied</b>. <b>2³</b> means 2 · 2 · 2, three copies. Every exponent “rule” is really a <b>counting shortcut</b> you could rediscover by expanding — which is why they’re worth understanding, not cramming.',
        anatomy: {
          expr: '<span class="tint-x">2</span><sup><span class="tint-m">3</span></sup> = 2 · 2 · 2',
          parts: [
            { sym: '2', tone: 'x', name: 'the base', desc: 'the number being multiplied by itself' },
            { sym: '3', tone: 'm', name: 'the exponent', desc: 'how many <b>copies</b> of the base to multiply — a count, not a multiplier' },
            { sym: '2·2·2', tone: 'y', name: 'the expansion', desc: 'what it really is — write this out and every rule becomes obvious' }
          ]
        },
        moves: [
          { label: 'Multiply same base', text: '→ <b>add</b> exponents. x²·x³ lines up (x·x)(x·x·x) = five x’s = x⁵.' },
          { label: 'Divide same base', text: '→ <b>subtract</b>. x⁵ ÷ x² cancels two x’s, leaving x³.' },
          { label: 'Power of a power', text: '→ <b>multiply</b>. (x²)³ is three copies of x², so 2 × 3 = six x’s = x⁶.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'Why does 3² × 3³ add to 3⁵? Just count the 3’s: (3·3)(3·3·3) is <b>five</b> threes multiplied. You add because you’re <i>tallying copies</i>, not because someone said so.',
          math: '3² × 3³ = (3·3)(3·3·3) = 3⁵'
        },
        takeaway: 'An exponent counts copies — expand it and the rules stop being rules and start being obvious.' },
      { kind: 'prior', title: 'What do you think?',
        prompt: 'What does <b>2³</b> mean?',
        options: ['2 × 2 × 2', '2 × 3', '3 × 3'] },
      { kind: 'explore', title: 'Count the factors', intro: 'Expand each one and count — the rule will jump out.', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>3² × 3³</b> means (3·3)(3·3·3) = 3 to the power…?', answer: '5', choices: ['5', '6', '9'], hint: 'Count how many 3’s are multiplied: 2 + 3.' },
          { prompt: '<b>x⁴ × x²</b> = x to the power…?', answer: '6', choices: ['6', '8', '2'], hint: 'Line up the x’s: 4 + 2.' },
          { prompt: '<b>x⁵ ÷ x²</b> = x to the power…?', answer: '3', choices: ['3', '7', '2.5'], hint: 'Cancel matching x’s: 5 − 2.' }
        ] } },
      { kind: 'discover', title: 'The exponent rules', text: 'Same base? <b>Multiply → add</b> exponents (xᵃ·xᵇ = xᵃ⁺ᵇ). <b>Divide → subtract</b> (xᵃ ÷ xᵇ = xᵃ⁻ᵇ). <b>Power of a power → multiply</b> ((xᵃ)ᵇ = xᵃᵇ). And anything (nonzero) to the <b>0</b> power is <b>1</b>.', rule: 'multiply → add · divide → subtract · power of power → multiply' },

      { kind: 'example', title: 'The classic trap, dismantled', component: 'workedExample',
        intro: '(2x²)³ breaks more tests than any other exponent expression. Expand it once by hand and you’ll never fall for it.',
        config: {
          problem: 'Simplify (2x²)³',
          steps: [
            { text: 'A cube means three copies of EVERYTHING inside the brackets:', math: '(2x²)³ = (2x²)(2x²)(2x²)' },
            { ask: 'Collect the plain numbers first: 2 · 2 · 2 = ?',
              choices: ['8', '6', '2'], answer: '8',
              why: 'Three copies of 2 multiply to 8. The ³ hits the 2, not just the x.',
              hint: 'It’s 2 cubed, not 2 × 3.',
              misconceptions: { '6': '2 × 3 = 6 is the trap — the exponent means three COPIES multiplied: 2·2·2 = 8', '2': 'All three copies contribute a 2' },
              math: '2 · 2 · 2 = 2³ = 8' },
            { text: 'Now the x’s: x² · x² · x² — same base multiplied, so ADD the exponents:', math: 'x²⁺²⁺² = x⁶' },
            { text: 'That addition is the shortcut rule in disguise: (x²)³ = x²·³ = x⁶. Assemble:', math: '(2x²)³ = 8x⁶' }
          ],
          done: 'The outside exponent hits every factor inside — cube the coefficient AND multiply the exponents.'
        } },

      { kind: 'discover', title: 'Zero and negatives, from the pattern',
        text: 'Why is x⁰ = 1? Walk the ladder down and watch: x³ → x² → x¹, each step <b>divides by x</b>. Keep going: x¹ ÷ x = <b>x⁰ = 1</b>, and one more step gives <b>x⁻¹ = 1/x</b>. A negative exponent isn’t a negative number — it means “that many divisions”: x⁻² = 1/x². The rules didn’t change; the ladder just kept going.',
        rule: 'each step down divides by x: … x¹, x⁰ = 1, x⁻¹ = 1/x …' },

      { kind: 'practice', difficulty: 'easy', title: 'Apply a rule', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>x² · x³</b> =', answer: 'x⁵', choices: ['x⁵', 'x⁶', 'x¹'], hint: 'Add the exponents.' },
          { prompt: '<b>x⁹ ÷ x⁴</b> =', answer: 'x⁵', choices: ['x⁵', 'x¹³', 'x²'], hint: 'Subtract the exponents.' },
          { prompt: '<b>(x³)²</b> =', answer: 'x⁶', choices: ['x⁶', 'x⁵', 'x⁹'], hint: 'Multiply the exponents.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Mixed rules', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>2x² · 3x⁴</b> =', answer: '6x⁶', choices: ['6x⁶', '6x⁸', '5x⁶'], hint: 'Multiply the numbers, add the exponents.' },
          { prompt: '<b>(2x²)³</b> =', answer: '8x⁶', choices: ['8x⁶', '6x⁵', '8x⁵'], hint: 'Cube the 2 AND multiply the exponent.' }
        ] } },
      { kind: 'mastery', title: 'Exponent check', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>x³ · x⁴</b> =', answer: 'x⁷', choices: ['x⁷', 'x¹²', 'x', 'x⁶'], hint: 'Multiply → add.', misconceptions: { 'x¹²': 'Multiplying powers ADDS exponents (3 + 4), it doesn’t multiply them', 'x': 'You subtracted — that’s the division rule' } },
          { prompt: '<b>x⁸ ÷ x²</b> =', answer: 'x⁶', choices: ['x⁶', 'x⁴', 'x¹⁰', 'x¹⁶'], hint: 'Divide → subtract.', misconceptions: { 'x¹⁰': 'Dividing SUBTRACTS exponents (8 − 2), not adds', 'x⁴': '8 ÷ 2 is for numbers — for powers you subtract exponents' } },
          { prompt: '<b>(x²)⁵</b> =', answer: 'x¹⁰', choices: ['x¹⁰', 'x⁷', 'x²⁵', 'x³²'], hint: 'Power of a power → multiply.', misconceptions: { 'x⁷': 'A power of a power MULTIPLIES exponents (2 × 5), not adds', 'x²⁵': 'You raised 5, not multiplied 2 × 5' } },
          { prompt: '<b>x⁰</b> =', answer: '1', choices: ['1', '0', 'x'], hint: 'A special rule.', misconceptions: { '0': 'Any nonzero base to the 0 power is 1, not 0' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why does multiplying powers ADD the exponents? Explain it using what an exponent really counts.',
        starters: ['An exponent counts', 'Multiplying powers adds exponents because', 'Dividing subtracts because'] },
      { kind: 'extend', title: 'Go further', intro: 'Stretch the rules.',
        items: [
          { icon: '➖', label: 'Negative exponents', detail: 'If x⁵ ÷ x⁵ = x⁰ = 1, what must x⁻² mean? (Hint: it’s a fraction.)' },
          { icon: '🌐', label: 'Scientific notation', detail: 'Why do scientists write huge and tiny numbers as powers of 10? Multiply 10³ × 10⁵ the fast way.' },
          { icon: '½', label: 'Fractional powers', detail: 'What could x^(1/2) mean? Test it: (x^(1/2))² should equal x.' }
        ] }
    ]
  });

  /* ---- AI.DS.4 · Correlation vs. Causation ------------------------------ */
  reg({
    concept: 'correlation-causation', title: 'Correlation vs. Causation',
    standards: ['AI.DS.4'],
    hook: { emoji: '🍦', text: 'Ice-cream sales and shark attacks rise together every single summer.', sub: 'So… does eating ice cream cause shark attacks? When two things move together, what can we actually conclude?' },
    steps: [
      { kind: 'teach', title: 'Moving together isn’t causing',
        lead: 'When two things rise and fall together, they’re <b>correlated</b> — and it’s dangerously tempting to say one <i>causes</i> the other. But a correlation alone can never prove that. Often a hidden third thing — a <b>lurking variable</b> — is quietly driving <i>both</i>, with no direct link between them at all.',
        moves: [
          { label: 'A lurking variable', text: '→ some third factor drives both. Hot weather lifts ice-cream sales AND beach crowds (so shark attacks) — the two are linked only through it.' },
          { label: 'Reverse causation', text: '→ the cause may run the other way from what you assumed. Check the direction before you commit.' },
          { label: 'Pure coincidence', text: '→ with enough data, some things line up by sheer chance and mean nothing.' },
          { label: 'A controlled experiment', text: '→ the only real fix: change one thing, hold the rest steady, and see if the effect follows.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'Children with <b>bigger feet</b> read better. Shoes don’t make you literate — <b>age</b> is the lurking variable: older kids have bigger feet <i>and</i> read better. Remove age and the link vanishes.',
          math: 'big feet ↔ reading  ⇐  age drives both'
        },
        takeaway: 'A strong link is a clue, not a verdict — always ask what third thing might be driving both.' },
      { kind: 'prior', title: 'What do you think?',
        prompt: 'Ice-cream sales and shark attacks both climb in summer. The best explanation is…',
        options: ['Ice cream causes shark attacks', 'A third factor (hot weather) drives both', 'Sharks are drawn to ice cream'] },
      { kind: 'explore', title: 'Cause, or coincidence?', intro: 'For each pair, decide the most likely reason they move together.', component: 'problemSet',
        config: { problems: [
          { prompt: 'More firefighters at a fire ↔ more damage. Most likely…', answer: 'Bigger fires bring both', choices: ['Bigger fires bring both', 'Firefighters cause damage'], hint: 'What causes both to be large?' },
          { prompt: 'Hours studied ↔ test score. Most likely…', answer: 'Studying helps the score', choices: ['Studying helps the score', 'High scores cause studying'], hint: 'Which direction makes sense?' },
          { prompt: 'Shoe size ↔ reading level in kids. Most likely…', answer: 'Age drives both', choices: ['Age drives both', 'Big feet help reading'], hint: 'What grows with age?' }
        ] } },
      { kind: 'discover', title: 'Linked ≠ caused', text: 'Two things moving together are <b>correlated</b> — but that alone never proves one <b>causes</b> the other. There may be a hidden <b>lurking variable</b> driving both, the cause may run the <b>other way</b>, or it may be pure <b>coincidence</b>. Only a <b>controlled experiment</b> can really show cause.', rule: 'Correlation ≠ causation' },

      { kind: 'example', title: 'Autopsy of a headline', component: 'workedExample',
        intro: 'Run one real headline through the full checklist — this is the routine to reuse on every claim you meet.',
        config: {
          problem: '“Study: kids who eat breakfast get better grades”',
          steps: [
            { text: 'First, name what was actually MEASURED. Researchers observed two things rising together — breakfast eating and grades. That is a correlation, nothing more yet.',
              math: 'measured: correlation only' },
            { text: 'Now run the three rival explanations. Rival 1 — lurking variable: could some third thing drive BOTH?',
              math: 'rival 1: a hidden common cause?' },
            { ask: 'Which of these is a plausible lurking variable here?',
              choices: ['Stable home routines — they produce breakfasts AND homework time', 'Breakfast chemically causes intelligence', 'Grades make kids hungry in the morning'], answer: 'Stable home routines — they produce breakfasts AND homework time',
              why: 'A household with regular routines tends to produce both regular breakfasts and regular study — it could drive both numbers with no direct link between them.',
              hint: 'What kind of home reliably produces both a breakfast AND good study habits?',
              misconceptions: { 'Breakfast chemically causes intelligence': 'That’s assuming the conclusion — the question is whether something ELSE explains the link', 'Grades make kids hungry in the morning': 'That’s rival 2 (reverse causation), and not a very plausible one' } },
            { text: 'Rival 2 — reverse causation (do good grades somehow cause breakfast?) — weak here. Rival 3 — coincidence — unlikely with a large sample, but possible. Neither rules the story out; they just have to be CHECKED.',
              math: 'rival 2: direction? · rival 3: chance?' },
            { ask: 'What evidence would actually settle whether breakfast CAUSES better grades?',
              choices: ['Randomly assign breakfast to half the kids, compare grades', 'A much bigger survey', 'Interviews with straight-A students'], answer: 'Randomly assign breakfast to half the kids, compare grades',
              why: 'Random assignment breaks the link with home routines — with groups alike in everything else, a grade gap can only come from the breakfast.',
              hint: 'Which option CONTROLS the other variables instead of just observing more?',
              misconceptions: { 'A much bigger survey': 'A bigger survey is just a bigger correlation — the lurking variable scales up with it', 'Interviews with straight-A students': 'That samples only successes — no comparison group, no cause' } },
            { text: 'Verdict language matters: the honest headline is “breakfast is LINKED to better grades” — not “causes” — until an experiment says otherwise.',
              math: '“linked to” ≠ “causes”' }
          ],
          done: 'Name what was measured → try all three rivals → ask what experiment would settle it. Run every headline through this.'
        } },

      { kind: 'practice', difficulty: 'easy', title: 'Spot the lurking variable', component: 'problemSet',
        config: { problems: [
          { prompt: 'Towns with more churches have more crime. The lurking variable is likely…', answer: 'Population size', choices: ['Population size', 'Churches cause crime'], hint: 'Bigger towns have more of everything.' },
          { prompt: 'People who sleep with shoes on wake with headaches. Likely cause…', answer: 'Going to bed drunk', choices: ['Going to bed drunk', 'Shoes cause headaches'], hint: 'What might cause both?' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Which shows causation?', component: 'problemSet',
        config: { problems: [
          { prompt: 'Which is the strongest evidence of CAUSE?', answer: 'A randomized controlled experiment', choices: ['A randomized controlled experiment', 'A survey showing two things rise together', 'A striking coincidence'], hint: 'What controls other variables?' }
        ] } },
      { kind: 'mastery', title: 'Reasoning check', component: 'problemSet',
        config: { problems: [
          { prompt: 'Towns with more firefighters have more fire damage. Best conclusion?', answer: 'Bigger fires draw more firefighters', choices: ['Bigger fires draw more firefighters', 'Firefighters cause the damage', 'Fewer firefighters is safer'], hint: 'A third factor.', misconceptions: { 'Firefighters cause the damage': 'That reverses cause and effect — the big fire draws the firefighters', 'Fewer firefighters is safer': 'The fire size, not the crew, drives the damage' } },
          { prompt: 'A strong correlation <b>proves</b> one thing causes the other.', answer: 'False', choices: ['False', 'True'], hint: 'Think of ice cream and sharks.', misconceptions: { 'True': 'Correlation alone never proves causation' } },
          { prompt: 'Which best shows CAUSATION?', answer: 'A controlled experiment changing one thing', choices: ['A controlled experiment changing one thing', 'A survey where two things rise together', 'A news headline'], hint: 'What isolates the cause?', misconceptions: { 'A survey where two things rise together': 'A survey shows correlation; only a controlled experiment isolates a cause' } },
          { prompt: 'Kids’ shoe size correlates with reading ability. Why?', answer: 'Age — older kids have bigger feet and read better', choices: ['Age — older kids have bigger feet and read better', 'Big feet help you read', 'Reading makes feet grow'], hint: 'The lurking variable.', misconceptions: { 'Big feet help you read': 'A lurking variable (age) explains both', 'Reading makes feet grow': 'That’s reversed and unrelated — age drives both' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Describe two things that are correlated but where neither causes the other. What’s the real link?',
        starters: ['Two correlated things are', 'They move together because', 'To actually test for cause you would'] },
      { kind: 'extend', title: 'Go further', intro: 'Be a data skeptic.',
        items: [
          { icon: '📰', label: 'Headline hunt', detail: 'Find a news headline claiming X causes Y from a study. Was it an experiment, or just a correlation?' },
          { icon: '🧪', label: 'Design an experiment', detail: 'How would you test whether a new study app actually raises grades — not just correlates with them?' },
          { icon: '📉', label: 'Spurious correlations', detail: 'Search “spurious correlations” — nicolas cage films vs. drownings. Why do these happen?' }
        ] }
    ]
  });
})();
