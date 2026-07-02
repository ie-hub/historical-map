/* Learning Atlas — Mathematics · Grade 3+ lessons (Grade 3 → Grade 8).
   Shows the same engine scaling to older concepts: multiplication, area,
   naming fractions, large numbers, the coordinate plane, integers, functions. */
(function () {
  const P = window.MATH.Player, U = window.MATH.util;
  const reg = P.register;

  reg({
    concept: 'multiply', title: 'Multiplication',
    hook: { emoji: '🍩', text: '4 boxes, 6 donuts each. How many donuts?', sub: 'There has to be a faster way than counting…' },
    steps: [
      { kind: 'explore', title: 'Build the array', intro: 'Rows of equal groups — build it and count.', component: 'arrayBuilder', config: { mode: 'multiply', rounds: 3, maxR: 5, maxC: 6 } },
      { kind: 'discover', title: 'Multiplication is repeated addition', text: '<b>4 × 6</b> means 4 groups of 6, or 6 + 6 + 6 + 6 = 24. The × sign is a shortcut for adding equal groups. Order does not matter: 4 × 6 = 6 × 4.' },
      { kind: 'practice', difficulty: 'easy', title: 'Times tables', component: 'problemSet',
        config: { generate() { return U.range(5).map(() => { const a = U.rand(2, 6), b = U.rand(2, 9); return { prompt: `<b class="m-big">${a} × ${b} = ?</b>`, answer: a * b, hint: `${a} groups of ${b}.` }; }); } } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Bigger facts', component: 'problemSet',
        config: { generate() { return U.range(5).map(() => { const a = U.rand(6, 12), b = U.rand(6, 12); return { prompt: `<b class="m-big">${a} × ${b} = ?</b>`, answer: a * b, hint: 'Break it up: ' + a + '×' + b + ' = ' + a + '×' + (b - 1) + ' + ' + a + '.' }; }); } } },
      { kind: 'mastery', title: 'Master the facts', component: 'problemSet',
        config: { generate() { return U.range(6).map(() => { const a = U.rand(2, 9), b = U.rand(2, 9); return { prompt: `<b class="m-big">${a} × ${b} = ?</b>`, answer: a * b, hint: 'Skip count by ' + a + '.' }; }); } } }
    ]
  });

  reg({
    concept: 'area', title: 'Area',
    hook: { emoji: '🟦', text: 'How many tiles cover this floor?', sub: 'A rectangle 5 tiles wide and 3 tiles deep…' },
    steps: [
      { kind: 'explore', title: 'Cover the rectangle', intro: 'Build the rectangle, then count the squares inside.', component: 'arrayBuilder', config: { mode: 'area', rounds: 3, maxR: 5, maxC: 6 } },
      { kind: 'discover', title: 'Area = length × width', text: 'Area is the number of unit squares that fit inside a shape. For a rectangle that is just <b>length × width</b> — the same array idea, now measuring space.' },
      { kind: 'practice', difficulty: 'easy', title: 'Find the area', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const l = U.rand(2, 8), w = U.rand(2, 8); return { prompt: `A rectangle is <b>${l}</b> long and <b>${w}</b> wide. Area = ? square units`, answer: l * w, hint: 'Multiply length × width.' }; }); } } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Find the missing side', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const l = U.rand(2, 9), w = U.rand(2, 9); return { prompt: `A rectangle has area <b>${l * w}</b> and width <b>${w}</b>. How long is it?`, answer: l, hint: 'Area ÷ width = length.' }; }); } } },
      { kind: 'mastery', title: 'Area check', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const l = U.rand(2, 10), w = U.rand(2, 10); return { prompt: `Area of a ${l} × ${w} rectangle?`, answer: l * w, hint: 'length × width' }; }); } } }
    ]
  });

  reg({
    concept: 'fractions-name', title: 'Naming Fractions',
    hook: { emoji: '🍫', text: 'You ate 3 of 4 equal chunks.', sub: 'How do you write how much you ate?' },
    steps: [
      { kind: 'explore', title: 'Read the fraction', intro: 'Count the shaded slices out of the total.', component: 'fractionPizza', config: { mode: 'read', rounds: 3, maxDen: 6 } },
      { kind: 'discover', title: 'Numerator over denominator', text: 'We write a fraction as <b>numerator/denominator</b>. The denominator (bottom) is how many equal parts in the whole; the numerator (top) is how many you have. 3 of 4 parts is <b>3/4</b>.' },
      { kind: 'practice', difficulty: 'easy', title: 'Name more fractions', component: 'fractionPizza', config: { mode: 'read', rounds: 3, maxDen: 8 } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Compare fractions', component: 'problemSet',
        config: { problems: [
          { prompt: 'Which is bigger: 3/4 or 1/2?', answer: '3/4', choices: ['3/4', '1/2'], hint: 'Picture the pizzas.' },
          { prompt: 'Which is bigger: 2/3 or 5/6?', answer: '5/6', choices: ['2/3', '5/6'], hint: '2/3 = 4/6.' },
          { prompt: '2/4 is the same as…', answer: '1/2', choices: ['1/2', '1/4', '3/4'], hint: 'Simplify.' },
          { prompt: 'Which equals one whole?', answer: '4/4', choices: ['3/4', '4/4', '5/4'], hint: 'All parts shaded.' }
        ] } },
      { kind: 'mastery', title: 'Fraction fluency', component: 'fractionPizza', config: { mode: 'read', rounds: 4, maxDen: 8 } }
    ]
  });

  reg({
    concept: 'place-value-1000', title: 'Large Numbers',
    hook: { emoji: '🔢', text: 'What does the 7 mean in 726?', sub: 'Same digit, very different value.' },
    steps: [
      { kind: 'explore', title: 'Build with hundreds', intro: 'Use hundreds, tens and ones to build the number.', component: 'placeValue', config: { rounds: 3, max: 999 } },
      { kind: 'discover', title: 'Every place is ×10 bigger', text: 'Each place to the left is worth <b>ten times</b> more. In <b>726</b>: 7 hundreds (700) + 2 tens (20) + 6 ones (6). Ten tens bundle into a hundred.' },
      { kind: 'practice', difficulty: 'easy', title: 'Build more', component: 'placeValue', config: { rounds: 3, max: 999 } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Value of a digit', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const n = U.rand(100, 999), s = String(n), pos = U.rand(0, 2), place = [100, 10, 1][pos]; return { prompt: `In <b class="m-big">${n}</b>, what is the value of the <b>${['hundreds', 'tens', 'ones'][pos]}</b> digit?`, answer: +s[pos] * place, hint: `${s[pos]} × ${place}.` }; }); } } },
      { kind: 'mastery', title: 'Place value check', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const h = U.rand(1, 9), t = U.rand(0, 9), o = U.rand(0, 9); return { prompt: `What number is <b>${h} hundreds, ${t} tens, ${o} ones</b>?`, answer: h * 100 + t * 10 + o, hint: `${h * 100} + ${t * 10} + ${o}.` }; }); } } }
    ]
  });

  reg({
    concept: 'coordinate-plane', title: 'The Coordinate Plane',
    standards: ['5.AT.6'],
    hook: { emoji: '🗺️', text: 'How would you describe an exact spot on a map?', sub: 'Two numbers can pin down any point.' },
    steps: [
      { kind: 'explore', title: 'Plot the point', intro: 'Go across (x), then up (y).', component: 'coordinatePlane', config: { mode: 'plot', rounds: 4, max: 6 } },
      { kind: 'discover', title: 'Across, then up', text: 'A point is named by an ordered pair <b>(x, y)</b>. The first number is how far <b>across</b> (right), the second is how far <b>up</b>. Always across before up.' },
      { kind: 'practice', difficulty: 'easy', title: 'Name the point', component: 'coordinatePlane', config: { mode: 'name', rounds: 4, max: 6 } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Bigger grid', component: 'coordinatePlane', config: { mode: 'plot', rounds: 4, max: 8 } },
      { kind: 'mastery', title: 'Coordinates check', component: 'problemSet',
        config: { problems: [
          { prompt: 'In the pair (3, 5), which number is how far <b>up</b>?', answer: '5', choices: ['3', '5'], hint: 'y comes second.' },
          { prompt: 'Which do you count first?', answer: 'across (x)', choices: ['across (x)', 'up (y)'], hint: 'x before y.' },
          { prompt: 'The point (0, 0) is called the…', answer: 'origin', choices: ['origin', 'axis', 'grid'], hint: 'Where the axes meet.' }
        ] } }
    ]
  });

  reg({
    concept: 'integers', title: 'Integers & Negatives',
    hook: { emoji: '🌡️', text: 'It is 5°, then drops 8°. What now?', sub: 'Numbers can go below zero.' },
    steps: [
      { kind: 'explore', title: 'Below zero', intro: 'Find the number — even the negative ones.', component: 'numberLine', config: { min: -10, max: 10, step: 1, mode: 'place', rounds: 4 } },
      { kind: 'discover', title: 'The line goes both ways', text: 'The number line extends <b>left of zero</b> into negative numbers. −3 is 3 steps left of 0. Moving right adds; moving left subtracts. Negatives are how we measure below a starting point.' },
      { kind: 'practice', difficulty: 'easy', title: 'Order negatives', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const a = U.rand(-9, 9), b = U.rand(-9, 9); const ans = a === b ? String(a) : String(Math.max(a, b)); return { prompt: `Which is <b>greater</b>?<br><b class="m-big">${a}  or  ${b}</b>`, answer: ans, choices: [String(a), String(b)].filter((v, i, arr) => arr.indexOf(v) === i), hint: 'Further right = greater. −2 > −7.' }; }); } } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Add & subtract with negatives', component: 'problemSet',
        config: { generate() { return U.range(5).map(() => { const a = U.rand(-8, 8), b = U.rand(1, 9); return { prompt: `<b class="m-big">${a} − ${b} = ?</b>`, answer: a - b, hint: 'Move ' + b + ' steps left from ' + a + '.' }; }); } } },
      { kind: 'mastery', title: 'Integer check', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const a = U.rand(-9, 9), b = U.rand(-9, 9); return { prompt: `<b class="m-big">${a} + (${b}) = ?</b>`, answer: a + b, hint: 'Adding a negative moves left.' }; }); } } }
    ]
  });

  reg({
    concept: 'functions', title: 'Functions',
    hook: { emoji: '⚙️', text: 'A machine turns 2 into 5, and 3 into 7.', sub: 'What will it do to 10?' },
    steps: [
      { kind: 'explore', title: 'Feed the machine', intro: 'Apply the rule to each input.', component: 'functionMachine', config: { mode: 'apply', rounds: 4 } },
      { kind: 'discover', title: 'One input, one output', text: 'A <b>function</b> is a rule that gives exactly one output for each input. The machine "×2 + 1" turns 2→5 and 3→7. Once you know the rule, you can predict any output.' },
      { kind: 'practice', difficulty: 'easy', title: 'Find the rule', component: 'functionMachine', config: { mode: 'infer', rounds: 4 } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Harder rules', component: 'functionMachine',
        config: { mode: 'infer', rounds: 4, rules: [{ label: '×3', fn: x => x * 3 }, { label: '×3 − 2', fn: x => x * 3 - 2 }, { label: 'x²', fn: x => x * x }, { label: '×4 + 1', fn: x => x * 4 + 1 }] } },
      { kind: 'mastery', title: 'Function check', component: 'problemSet',
        config: { problems: [
          { prompt: 'A function gives each input exactly one…', answer: 'output', choices: ['output', 'rule', 'graph'], hint: 'in → out.' },
          { prompt: 'Rule "×2+1": input 4 → ?', answer: '9', choices: ['8', '9', '10'], hint: '4×2 then +1.' },
          { prompt: 'If f(x)=x+5, then f(10) = ?', answer: '15', choices: ['5', '15', '50'], hint: 'Add 5 to 10.' },
          { prompt: 'Inputs 1→3, 2→6, 3→9. The rule is…', answer: '×3', choices: ['+2', '×3', '×2'], hint: 'Each output is 3 times the input.' }
        ] } }
    ]
  });
})();
