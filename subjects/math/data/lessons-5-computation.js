/* Learning Atlas — Mathematics · Grade 5 · Computation lessons.
   Indiana-aligned: multi-digit multiplication (5.C.1, 5.C.3), add/subtract
   fractions (5.C.4), multiply fractions (5.C.5, 5.C.6), decimal operations
   (5.C.8), order of operations (5.C.9). Real strategies, not just answer banks. */
(function () {
  const P = window.MATH.Player, U = window.MATH.util;
  const reg = P.register;

  /* --------------------------------------- 5.C.1 / 5.C.3 · Multi-digit × */
  reg({
    concept: 'multiply-multidigit', title: 'Multi-Digit Multiplication',
    standards: ['5.C.1', '5.C.3'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'To find <b>23 × 14</b>, why can’t you just do 2×1 and 3×4 and mash them together?',
        options: ['You can — 2 and 12 → 212', 'No — each digit has a place value', 'You have to add 14 twenty-three times'] },
      { kind: 'example', title: 'Break it apart by place value', component: 'workedExample',
        config: { problem: 'Multiply <b>23 × 14</b> by splitting 14 into 10 + 4.',
          intro: 'The standard algorithm is really the distributive property in disguise.',
          steps: [
            { text: 'Split the second factor: 14 = 10 + 4.', why: 'Multiply by each part, then add — that’s distribution.' },
            { ask: 'First, 23 × 4 = ?', choices: ['92', '82', '27'], answer: '92', why: '20×4 = 80 and 3×4 = 12, so 80 + 12 = 92.', hint: '(20×4) + (3×4).' },
            { ask: 'Next, 23 × 10 = ?', choices: ['230', '23', '2300'], answer: '230', why: '×10 moves every digit one place left.', hint: 'Just append a zero.' },
            { text: 'Add the partial products: 92 + 230 = <b>322</b>.', math: '23 × 14 = 322', why: 'That’s exactly what the columns of the standard algorithm add up.' }
          ], done: 'Multi-digit multiplication = multiply by each place, then add the parts.' } },
      { kind: 'discover', title: 'Multiply each place, then add', rule: 'a × b: split b by place value, multiply each part, add the partial products.',
        text: 'The standard algorithm works because of <b>place value</b> and the <b>distributive property</b>. 23 × 14 = 23×10 + 23×4. Each row you write is one partial product; the final answer is their sum. Estimating first (23×14 ≈ 20×15 = 300) tells you the answer should be near 300 — a quick reasonableness check.' },
      { kind: 'practice', difficulty: 'easy', title: '2-digit × 1-digit', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const a = U.rand(12, 39), b = U.rand(3, 8); return { prompt: `<b class="m-big">${a} × ${b} = ?</b>`, answer: a * b, hint: `(${Math.floor(a / 10) * 10}×${b}) + (${a % 10}×${b}).` }; }); } } },
      { kind: 'challenge', difficulty: 'challenge', title: '2-digit × 2-digit', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const a = U.rand(13, 48), b = U.rand(12, 29); return { prompt: `<b class="m-big">${a} × ${b} = ?</b>`, answer: a * b, hint: `${a}×${b - b % 10} + ${a}×${b % 10}.` }; }); } } },
      { kind: 'mastery', title: 'Multiplication check', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>34 × 6 = ?</b>', answer: '204', choices: ['204', '184', '3024'], hint: '30×6 + 4×6 = 180 + 24.', misconceptions: { '3024': 'Don’t just stick 3×6 and 4×6 together — add the partial products', '184': 'Check the tens: 30×6 = 180, not 160' } },
          { prompt: '<b>25 × 12 = ?</b>', answer: '300', choices: ['300', '250', '270'], hint: '25×10 + 25×2 = 250 + 50.' },
          { prompt: 'Without multiplying: is <b>48 × 9</b> more or less than 48 × 10?', answer: 'less', choices: ['less', 'more', 'equal'], hint: '9 is a smaller factor than 10 (5.C.3).', misconceptions: { 'more': 'Multiplying by a SMALLER factor gives a smaller product' } },
          { prompt: 'Estimate: <b>39 × 21</b> is closest to…', answer: '800', choices: ['800', '600', '400'], hint: 'Round to 40 × 20.' }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why do we add "partial products" instead of multiplying digits straight across?',
        starters: ['Each digit stands for', 'I break the problem into', 'To check if my answer is reasonable I'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Multiplication scales up.',
        items: [
          { icon: '🟦', label: 'The area model', detail: 'Draw a rectangle 23 by 14, split into 20/3 and 10/4. The four pieces ARE the partial products.' },
          { icon: '🧮', label: 'Lattice method', detail: 'Look up "lattice multiplication" — another way to organize the same partial products.' },
          { icon: '🎯', label: 'Estimate first', detail: 'Before every multiplication, round the factors and estimate. Were you close?' }
        ] }
    ]
  });

  /* ------------------------------------------------ 5.C.4 · Add/subtract fractions */
  reg({
    concept: 'add-sub-fractions', title: 'Adding & Subtracting Fractions',
    standards: ['5.C.4'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'Is <b>1/2 + 1/3 = 2/5</b>? (Add the tops, add the bottoms?)',
        options: ['Yes — 1+1 over 2+3', 'No — the pieces are different sizes', 'Only sometimes'] },
      { kind: 'explore', title: 'See the unequal pieces', intro: 'Halves and thirds are different-sized slices — you can’t just count them together.', component: 'fractionPizza', config: { rounds: 3, mode: 'read', maxDen: 8 } },
      { kind: 'discover', title: 'Same-size pieces first', rule: 'Find a common denominator → rename both fractions → add/subtract the numerators.',
        text: 'You can only add fractions when the pieces are the <b>same size</b> — same denominator. 1/2 and 1/3 both fit into <b>sixths</b>: 1/2 = 3/6 and 1/3 = 2/6. Now the pieces match: 3/6 + 2/6 = <b>5/6</b>. The denominator (piece size) stays the same; you add the numerators (how many pieces).' },
      { kind: 'example', title: 'Add unlike denominators', component: 'workedExample',
        config: { problem: 'Add <b>1/2 + 1/3</b>.',
          steps: [
            { ask: 'What’s a denominator both 2 and 3 divide into?', choices: ['6', '5', '3'], answer: '6', why: '6 is the least common multiple of 2 and 3.', hint: 'Count by 2s and by 3s — where do they meet?', misconceptions: { '5': 'You add numerators, not denominators — find a COMMON denominator instead' } },
            { text: 'Rename each fraction in sixths.', math: '1/2 = 3/6, &nbsp; 1/3 = 2/6', why: 'Multiply top and bottom by the same number.' },
            { ask: 'Now add the numerators: 3/6 + 2/6 = ?', choices: ['5/6', '5/12', '6/6'], answer: '5/6', why: 'Same-size pieces: 3 + 2 = 5 sixths.', hint: 'Keep the denominator; add the tops.', misconceptions: { '5/12': 'Don’t add denominators — the piece size (6) stays the same' } },
            { text: 'So 1/2 + 1/3 = <b>5/6</b>.' }
          ], done: 'Common denominator → rename → add the tops. Subtraction works the same way.' } },
      { kind: 'practice', difficulty: 'easy', title: 'Like denominators', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const d = U.pick([4, 5, 6, 8]); const a = U.rand(1, d - 2), b = U.rand(1, d - a - 1); return { prompt: `<b class="m-big">${a}/${d} + ${b}/${d} = ?</b> &nbsp;(write as _/${d})`, answer: `${a + b}/${d}`, hint: 'Same bottoms — just add the tops.' }; }); } } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Unlike denominators', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>1/2 + 1/4 = ?</b> (write as _/4)', answer: '3/4', hint: '1/2 = 2/4.' },
          { prompt: '<b>2/3 + 1/6 = ?</b> (write as _/6)', answer: '5/6', hint: '2/3 = 4/6.' },
          { prompt: '<b>3/4 − 1/2 = ?</b> (write as _/4)', answer: '1/4', hint: '1/2 = 2/4.' },
          { prompt: '<b>5/6 − 1/3 = ?</b> (write as _/6)', answer: '3/6', hint: '1/3 = 2/6. (3/6 also equals 1/2.)' }
        ] } },
      { kind: 'mastery', title: 'Fraction sum check', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>1/3 + 1/3 = ?</b>', answer: '2/3', choices: ['2/3', '2/6', '1/3'], hint: 'Same bottoms; add tops.', misconceptions: { '2/6': 'Add the numerators only — the denominator (3) stays' } },
          { prompt: '<b>1/2 + 1/4 = ?</b>', answer: '3/4', choices: ['3/4', '2/6', '2/4'], hint: 'Rename 1/2 as 2/4.', misconceptions: { '2/6': 'Never add denominators — find a common one (4)' } },
          { prompt: 'Common denominator for 1/4 and 1/6?', answer: '12', choices: ['12', '10', '24'], hint: 'Smallest number both 4 and 6 divide.', misconceptions: { '10': '4+6 isn’t it — you need a common MULTIPLE' } },
          { prompt: '<b>7/8 − 3/8 = ?</b>', answer: '4/8', choices: ['4/8', '4/0', '10/8'], hint: 'Subtract the tops; keep the bottom.' }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why must fractions have the same denominator before you add them?',
        starters: ['The denominator tells me', 'I can’t add 1/2 and 1/3 directly because', 'A common denominator lets me'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Fractions add up in real life.',
        items: [
          { icon: '🍕', label: 'Pizza math', detail: 'You eat 1/4 and a friend eats 3/8. How much of the pizza is gone? (5.AT.2)' },
          { icon: '📐', label: 'Number-line jumps', detail: 'On a line marked in sixths, jump 1/2 then 1/3. Where do you land?' },
          { icon: '➕', label: 'Mixed numbers', detail: 'Try 1 1/2 + 2 3/4. Add the whole numbers and the fractions separately.' }
        ] }
    ]
  });

  /* ------------------------------------------ 5.C.5 / 5.C.6 · Multiply fractions */
  reg({
    concept: 'multiply-fractions', title: 'Multiplying Fractions',
    standards: ['5.C.5', '5.C.6'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'You take <b>1/2 of 1/2</b> a chocolate bar. Do you get MORE than half or LESS than half?',
        options: ['More — you’re multiplying', 'Less — a part of a part is smaller', 'Exactly half'] },
      { kind: 'explore', title: 'A part of a part', intro: 'Multiplying is "of": 1/2 of a pizza, then a fraction of that.', component: 'fractionPizza', config: { rounds: 3, mode: 'read', maxDen: 6 } },
      { kind: 'discover', title: 'Multiply tops, multiply bottoms', rule: 'a/b × c/d = (a×c)/(b×d).   "×" of a fraction means "of".',
        text: 'To multiply fractions, multiply the <b>numerators</b> together and the <b>denominators</b> together. 1/2 × 1/2 = (1×1)/(2×2) = <b>1/4</b>. Notice the answer is <b>smaller</b> than 1/2 — because taking a fraction <b>less than 1</b> of something shrinks it (5.C.6). Multiplying by a fraction <b>greater than 1</b> would make it bigger.' },
      { kind: 'example', title: 'Work one through', component: 'workedExample',
        config: { problem: 'Find <b>2/3 × 3/4</b>.',
          steps: [
            { ask: 'Multiply the numerators: 2 × 3 = ?', choices: ['6', '5', '9'], answer: '6', why: 'Tops multiply together.', hint: '2 times 3.' },
            { ask: 'Multiply the denominators: 3 × 4 = ?', choices: ['12', '7', '9'], answer: '12', why: 'Bottoms multiply together.', hint: '3 times 4.' },
            { text: 'So the product is 6/12.', math: '2/3 × 3/4 = 6/12' },
            { ask: 'Simplify 6/12.', choices: ['1/2', '2/3', '3/4'], answer: '1/2', why: '6 and 12 both ÷6 give 1/2.', hint: 'Divide top and bottom by 6.' },
            { text: '2/3 × 3/4 = <b>1/2</b> — smaller than either factor, as expected.' }
          ], done: 'Multiply straight across, then simplify.' } },
      { kind: 'practice', difficulty: 'easy', title: 'Multiply across', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const a = U.rand(1, 3), b = U.rand(a + 1, 5), c = U.rand(1, 3), d = U.rand(c + 1, 5); return { prompt: `<b class="m-big">${a}/${b} × ${c}/${d} = ?</b> &nbsp;(write _/_)`, answer: `${a * c}/${b * d}`, hint: 'Tops × tops, bottoms × bottoms.' }; }); } } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Fraction of a whole number', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>1/4 × 12 = ?</b>', answer: '3', choices: ['3', '48', '4'], hint: '1/4 of 12 — split 12 into 4 groups.' },
          { prompt: '<b>2/3 × 9 = ?</b>', answer: '6', choices: ['6', '18', '3'], hint: '1/3 of 9 is 3, so 2/3 is 6.' },
          { prompt: '<b>3/5 × 10 = ?</b>', answer: '6', choices: ['6', '30', '2'], hint: '1/5 of 10 is 2.' },
          { prompt: 'Is 6 × 2/3 bigger or smaller than 6?', answer: 'smaller', choices: ['smaller', 'bigger', 'equal'], hint: '2/3 is less than 1 (5.C.6).' }
        ] } },
      { kind: 'mastery', title: 'Multiply-fractions check', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>1/2 × 1/3 = ?</b>', answer: '1/6', choices: ['1/6', '2/5', '1/5'], hint: 'Tops: 1×1; bottoms: 2×3.', misconceptions: { '2/5': 'That’s adding — for ×, multiply straight across', '1/5': 'Multiply the bottoms (2×3 = 6), don’t add them' } },
          { prompt: '<b>3/4 × 2/3 = ?</b> (simplify)', answer: '1/2', choices: ['1/2', '6/12', '5/7'], hint: '6/12 simplifies.' },
          { prompt: 'Multiplying 8 by 5/8 gives an answer that is…', answer: 'less than 8', choices: ['less than 8', 'more than 8', 'exactly 8'], hint: '5/8 < 1.', misconceptions: { 'more than 8': 'A fraction less than 1 shrinks the number' } },
          { prompt: '<b>1/3 × 6 = ?</b>', answer: '2', choices: ['2', '18', '3'], hint: '1/3 of 6.' }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why does multiplying by a fraction less than 1 make a number SMALLER, when multiplying usually makes things bigger?',
        starters: ['Multiplying by a fraction means', 'A part of a part is', '1/2 × 1/2 is smaller because'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Fraction multiplication in action.',
        items: [
          { icon: '🍫', label: 'Half of a half', detail: 'Fold a paper in half, then in half again. What fraction is one part? Prove it’s 1/4.' },
          { icon: '🍳', label: 'Scale a recipe', detail: 'A recipe needs 3/4 cup sugar. Make half a batch — how much sugar? (5.AT.3)' },
          { icon: '📊', label: 'Grow it instead', detail: 'Multiply 8 by 3/2. Now the answer is bigger than 8 — why?' }
        ] }
    ]
  });

  /* ----------------------------------------------- 5.C.8 · Decimal operations */
  reg({
    concept: 'decimal-operations', title: 'Decimal Operations',
    standards: ['5.C.8'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'To add <b>3.5 + 12.25</b>, what matters most about how you line the numbers up?',
        options: ['Line up the last digits on the right', 'Line up the decimal points', 'It doesn’t matter'] },
      { kind: 'example', title: 'Add by lining up the points', component: 'workedExample',
        config: { problem: 'Add <b>3.5 + 12.25</b>.',
          intro: 'Place value has to match — line up the decimal points.',
          steps: [
            { text: 'Stack them with points aligned; pad 3.5 as 3.50.', math: '&nbsp;12.25<br>+ 3.50', why: 'Tenths over tenths, hundredths over hundredths.' },
            { ask: 'Add the hundredths: 5 + 0 = ?', choices: ['5', '0', '7'], answer: '5', why: 'Only 12.25 has hundredths.', hint: '3.50 has 0 hundredths.' },
            { text: 'Add tenths (2+5=7), ones (2+3=5), tens (1).', math: '= 15.75', why: 'Bring the decimal point straight down.' },
            { text: '3.5 + 12.25 = <b>15.75</b>.' }
          ], done: 'For + and −, line up the decimal points and add place by place.' } },
      { kind: 'discover', title: 'Line up points to add; count places to multiply', rule: '+ / − : line up the decimal points.   × : multiply, then count total decimal places.',
        text: 'Adding and subtracting decimals is just <b>place-value alignment</b> — line up the points so tenths meet tenths. For <b>multiplication</b>, ignore the points, multiply as whole numbers, then put in a point so the answer has as many decimal places as both factors combined: 0.3 × 0.2 → 3×2 = 6, two decimal places → <b>0.06</b>.' },
      { kind: 'practice', difficulty: 'easy', title: 'Add & subtract', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const a = +(U.rand(15, 90) / 10).toFixed(1), b = +(U.rand(10, 40) / 10).toFixed(1); const sub = U.rand(0, 1) === 1 && a > b; return { prompt: `<b class="m-big">${a} ${sub ? '−' : '+'} ${b} = ?</b>`, answer: String(+(sub ? a - b : a + b).toFixed(2)), hint: 'Line up the decimal points.' }; }); } } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Multiply & divide', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>0.4 × 0.2 = ?</b>', answer: '0.08', choices: ['0.08', '0.8', '0.008'], hint: '4×2 = 8, two decimal places.' },
          { prompt: '<b>1.5 × 3 = ?</b>', answer: '4.5', choices: ['4.5', '45', '0.45'], hint: '15×3 = 45, one decimal place.' },
          { prompt: '<b>4.8 ÷ 2 = ?</b>', answer: '2.4', choices: ['2.4', '24', '0.24'], hint: 'Half of 4.8.' },
          { prompt: '<b>0.6 × 0.5 = ?</b>', answer: '0.3', choices: ['0.3', '0.30', '3.0'], hint: '6×5 = 30 → 0.30 = 0.3.' }
        ] } },
      { kind: 'mastery', title: 'Decimal operations check', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>2.75 + 1.4 = ?</b>', answer: '4.15', choices: ['4.15', '2.89', '4.79'], hint: 'Pad to 1.40, then add.', misconceptions: { '2.89': 'Don’t line up the right edges — align the decimal POINTS' } },
          { prompt: '<b>5 − 2.3 = ?</b>', answer: '2.7', choices: ['2.7', '3.7', '2.3'], hint: 'Think 5.0 − 2.3.', misconceptions: { '3.7': 'Regroup: 5.0 − 2.3, not 5 − 2 then attach .3' } },
          { prompt: '<b>0.3 × 0.3 = ?</b>', answer: '0.09', choices: ['0.09', '0.9', '0.6'], hint: '3×3 = 9, two places.', misconceptions: { '0.9': 'Count decimal places: two factors of tenths → hundredths', '0.6': 'That’s adding — the question is ×' } },
          { prompt: '<b>$4.50 + $0.75 = ?</b>', answer: '5.25', choices: ['5.25', '4.125', '12'], hint: 'Money lines up like any decimal.' }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why do you line up decimal points to add, but count decimal places to multiply?',
        starters: ['When adding, the places must', 'When multiplying, I count', 'Money is easy because'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Decimals run the real world.',
        items: [
          { icon: '🧾', label: 'Make change', detail: 'You pay $10 for a $6.35 item. How much change? Subtract decimals. (5.AT.5)' },
          { icon: '⛽', label: 'Price per unit', detail: 'Gas is $3.29 a gallon. What do 4 gallons cost? Multiply a decimal.' },
          { icon: '🍬', label: 'Split the bill', detail: 'Divide a $12.60 snack cost among 3 friends. How much each?' }
        ] }
    ]
  });

  /* ------------------------------------------------- 5.C.9 · Order of operations */
  reg({
    concept: 'order-ops', title: 'Order of Operations',
    standards: ['5.C.9'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'What is <b>2 + 3 × 4</b>? (Left to right, or is there a rule?)',
        options: ['20 — add first, then ×', '14 — multiply first', 'Either is fine'] },
      { kind: 'example', title: 'One expression, one right answer', component: 'workedExample',
        config: { problem: 'Evaluate <b>2 + 3 × 4</b>.',
          intro: 'Everyone must get the same answer — so there’s an agreed order.',
          steps: [
            { ask: 'Which operation happens first?', choices: ['3 × 4', '2 + 3'], answer: '3 × 4', why: 'Multiplication comes before addition.', hint: 'Times before plus.', misconceptions: { '2 + 3': 'Left-to-right isn’t the rule — × and ÷ come before + and −' } },
            { text: '3 × 4 = 12, so the expression becomes 2 + 12.', math: '2 + 3×4 = 2 + 12' },
            { text: 'Now add: 2 + 12 = <b>14</b>.', math: '= 14' }
          ], done: 'Multiply/divide before you add/subtract — always.' } },
      { kind: 'discover', title: 'Grouping, then × ÷, then + −', rule: 'Order: (1) Parentheses/brackets → (2) × and ÷ (left→right) → (3) + and − (left→right).',
        text: 'To make sure everyone gets the same answer, we agree on an <b>order of operations</b>. Do anything inside <b>parentheses or brackets</b> first, then all <b>multiplication and division</b> (left to right), then all <b>addition and subtraction</b> (left to right). Parentheses are powerful: (2 + 3) × 4 = 20, but 2 + 3 × 4 = 14.' },
      { kind: 'practice', difficulty: 'easy', title: 'Two operations', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const a = U.rand(2, 6), b = U.rand(2, 6), c = U.rand(2, 6); return { prompt: `<b class="m-big">${a} + ${b} × ${c} = ?</b>`, answer: a + b * c, hint: `Multiply ${b}×${c} first.` }; }); } } },
      { kind: 'challenge', difficulty: 'challenge', title: 'With parentheses', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>(4 + 2) × 3 = ?</b>', answer: '18', choices: ['18', '10', '24'], hint: 'Parentheses first: 4+2 = 6.' },
          { prompt: '<b>20 − 3 × 4 = ?</b>', answer: '8', choices: ['8', '68', '12'], hint: '× before −.' },
          { prompt: '<b>2 × (5 + 1) − 3 = ?</b>', answer: '9', choices: ['9', '12', '8'], hint: 'Brackets, then ×, then −.' },
          { prompt: '<b>[8 + (2 × 3)] ÷ 2 = ?</b>', answer: '7', choices: ['7', '11', '14'], hint: 'Inner brackets first: 2×3 = 6.' }
        ] } },
      { kind: 'mastery', title: 'Order of operations check', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>6 + 2 × 5 = ?</b>', answer: '16', choices: ['16', '40', '30'], hint: '× first.', misconceptions: { '40': 'Don’t add first — multiply 2×5 before adding 6' } },
          { prompt: '<b>(6 + 2) × 5 = ?</b>', answer: '40', choices: ['40', '16', '20'], hint: 'Parentheses change everything.', misconceptions: { '16': 'The parentheses force 6+2 to happen first' } },
          { prompt: '<b>18 ÷ 3 + 3 = ?</b>', answer: '9', choices: ['9', '3', '18'], hint: '÷ before +.', misconceptions: { '3': '÷ and + : division comes first (18÷3 = 6, then +3)' } },
          { prompt: '<b>4 × (3 + 1) = ?</b>', answer: '16', choices: ['16', '13', '7'], hint: 'Add inside first, then ×.' }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why does the world need ONE agreed order of operations? What would go wrong without it?',
        starters: ['Without a rule, 2 + 3 × 4 could', 'Parentheses let me', 'Multiplication comes before addition because'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Order matters everywhere.',
        items: [
          { icon: '🖩', label: 'Trick a calculator', detail: 'Type 2 + 3 × 4 into a calculator. Does it obey the order of operations? Try a phone vs a basic one.' },
          { icon: '✍️', label: 'Move the parentheses', detail: 'Put parentheses in 8 − 2 × 3 two different ways. Can you make it equal 18? equal 2?' },
          { icon: '🧩', label: 'Four 4s', detail: 'Using four 4s and any operations + parentheses, can you make every number from 0 to 10?' }
        ] }
    ]
  });
})();
