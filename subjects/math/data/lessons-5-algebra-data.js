/* Learning Atlas — Mathematics · Grade 5 · Algebraic Thinking & Data lessons.
   Indiana-aligned: writing & evaluating expressions with variables (5.AT.8) and
   measures of center — mean, median, mode (5.DS.2). The coordinate-plane lesson
   (5.AT.6) lives in lessons-3-plus.js. */
(function () {
  const P = window.MATH.Player, U = window.MATH.util;
  const reg = P.register;

  /* -------------------------------------------------- 5.AT.8 · Variable expressions */
  reg({
    concept: 'variable-expressions', title: 'Expressions with Variables',
    standards: ['5.AT.8'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'Apples cost $2 each. If you don’t know how many you’ll buy, how could you write the total cost?',
        options: ['$2 exactly', '2 × n, where n is the number of apples', 'You can’t write it without a number'] },
      { kind: 'discover', title: 'A letter can stand for a number', rule: 'A variable is a letter that holds an unknown or changing number. 2 × n = 2n means "$2 for each of n apples".',
        text: 'A <b>variable</b> is a letter (like n or x) that stands for a number you don’t know yet, or one that can change. An <b>expression</b> combines variables and numbers with operations: <b>2n</b> means 2 × n. Writing the rule with a variable captures <b>every</b> case at once — then you can <b>evaluate</b> it by substituting a value: if n = 5, then 2n = 2 × 5 = 10.' },
      { kind: 'example', title: 'From words to an expression', component: 'workedExample',
        config: { problem: 'A taxi charges a <b>$3</b> flat fee plus <b>$2 per mile</b>. Write and use an expression.',
          intro: 'Let m = the number of miles.',
          steps: [
            { ask: 'What does the "$2 per mile" part look like with the variable m?', choices: ['2m', 'm + 2', '2 + m'], answer: '2m', why: '$2 for each of m miles is 2 × m.', hint: '"Per mile" means multiply by miles.', misconceptions: { 'm + 2': '"Per mile" is multiplication, not adding 2 once' } },
            { text: 'Add the flat $3 fee: the total is 2m + 3.', math: 'cost = 2m + 3', why: 'A per-mile part plus a one-time fee.' },
            { ask: 'Evaluate the cost for a 4-mile trip (m = 4).', choices: ['11', '9', '24'], answer: '11', why: '2×4 + 3 = 8 + 3 = 11.', hint: 'Substitute 4 for m, then use order of operations.', misconceptions: { '24': 'Multiply 2×4 first (=8), THEN add 3 — order of operations' } },
            { text: 'So a 4-mile ride costs <b>$11</b>.' }
          ], done: 'Translate words → expression, then substitute to evaluate.' } },
      { kind: 'practice', difficulty: 'easy', title: 'Evaluate the expression', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const c = U.rand(2, 6), b = U.rand(1, 9), n = U.rand(2, 8); return { prompt: `Evaluate <b class="m-big">${c}n + ${b}</b> when n = ${n}.`, answer: c * n + b, hint: `${c}×${n} first, then + ${b}.` }; }); } } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Write & evaluate', component: 'problemSet',
        config: { problems: [
          { prompt: 'Pencils cost $1 each and a box is $2. Cost of p pencils + a box?', answer: 'p + 2', choices: ['p + 2', '2p', 'p × 2'], hint: '$1 each → p, plus the $2 box.' },
          { prompt: 'Evaluate 3x − 4 when x = 5.', answer: '11', choices: ['11', '23', '15'], hint: '3×5 − 4.' },
          { prompt: 'A rectangle is L long and 4 wide. Its area expression is…', answer: '4L', choices: ['4L', 'L + 4', '4 + L'], hint: 'Area = length × width.' },
          { prompt: 'With two variables: evaluate 2a + b when a = 3, b = 5.', answer: '11', choices: ['11', '13', '16'], hint: '2×3 + 5.' }
        ] } },
      { kind: 'mastery', title: 'Expressions check', component: 'problemSet',
        config: { problems: [
          { prompt: 'Evaluate 5n when n = 6.', answer: '30', choices: ['30', '56', '11'], hint: '5 × 6.', misconceptions: { '56': '5n means 5 × n, not the digits stuck together', '11': '5n is multiply, not 5 + n' } },
          { prompt: '"7 more than a number x" is written…', answer: 'x + 7', choices: ['x + 7', '7x', '7 − x'], hint: '"More than" = add.', misconceptions: { '7x': '"7 more than" means +7, not ×7' } },
          { prompt: 'Evaluate 2k + 3 when k = 10.', answer: '23', choices: ['23', '26', '25'], hint: '2×10 + 3.' },
          { prompt: 'A movie ticket is $t. Cost for 4 tickets?', answer: '4t', choices: ['4t', 't + 4', 't/4'], hint: '4 of them → multiply.' }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why is writing a rule with a variable (like 2m + 3) more powerful than just using numbers?',
        starters: ['A variable lets me', 'To evaluate an expression I', 'One expression can stand for'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Variables describe patterns.',
        items: [
          { icon: '🚕', label: 'Your own formula', detail: 'Invent a price rule (a fee plus a per-item cost) and write it with a variable. Test it for 3 items.' },
          { icon: '📈', label: 'Make a table', detail: 'For 2n + 1, make a table of n = 1,2,3,4. What pattern do the outputs follow?' },
          { icon: '🔤', label: 'Two variables', detail: 'Write an expression for the total when you buy a apples at $2 and b bananas at $1.' }
        ] }
    ]
  });

  /* ----------------------------------------------------- 5.DS.2 · Mean, median, mode */
  reg({
    concept: 'measures-of-center', title: 'Mean, Median & Mode',
    standards: ['5.DS.2'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'Five friends have 2, 3, 3, 4, and 8 stickers. What single number best describes "a typical amount"?',
        options: ['The biggest, 8', 'Somewhere in the middle', 'The smallest, 2'] },
      { kind: 'discover', title: 'Three ways to find the center', rule: 'Mean = sum ÷ count (balance point). Median = middle when ordered. Mode = most frequent value.',
        text: 'A <b>measure of center</b> sums up a whole data set with one number. The <b>mean</b> (average) evens everything out: add all values, divide by how many. The <b>median</b> is the middle value once you put the data <b>in order</b>. The <b>mode</b> is the value that appears <b>most often</b>. Different measures can give different "centers" — especially when one value is unusually big.' },
      { kind: 'example', title: 'Find all three', component: 'workedExample',
        config: { problem: 'Data: <b>2, 3, 3, 4, 8</b>. Find the mean, median, and mode.',
          steps: [
            { ask: 'Mean: add them (2+3+3+4+8 = 20), then divide by 5. What’s the mean?', choices: ['4', '5', '3'], answer: '4', why: '20 ÷ 5 = 4.', hint: 'Sum ÷ count.', misconceptions: { '5': 'Divide by the COUNT (5 values), giving 20÷5 = 4' } },
            { ask: 'Median: the data is already in order. What’s the middle value?', choices: ['3', '4', '8'], answer: '3', why: 'The 3rd of 5 ordered values is 3.', hint: 'Middle of 2,3,3,4,8.' },
            { ask: 'Mode: which value appears most?', choices: ['3', '8', '2'], answer: '3', why: '3 shows up twice; everything else once.', hint: 'Most frequent.' },
            { text: 'Mean = 4, median = 3, mode = 3. The 8 pulls the mean above the median.' }
          ], done: 'Mean averages, median is the middle, mode is the most common.' } },
      { kind: 'practice', difficulty: 'easy', title: 'Find the mean', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const n = 4; const vals = U.range(n).map(() => U.rand(1, 9)); const sum = vals.reduce((a, b) => a + b, 0); while (sum % n !== 0) { vals[0] = U.rand(1, 9); } const s2 = vals.reduce((a, b) => a + b, 0); return { prompt: `Mean of <b>${vals.join(', ')}</b>?`, answer: s2 / n, hint: `Add them (${s2}), divide by ${n}.` }; }); } } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Median & mode', component: 'problemSet',
        config: { problems: [
          { prompt: 'Median of 5, 2, 9, 4, 7 (order them first)?', answer: '5', choices: ['5', '7', '4'], hint: 'Ordered: 2,4,5,7,9 — middle is 5.' },
          { prompt: 'Mode of 6, 2, 6, 4, 6, 2?', answer: '6', choices: ['6', '2', '4'], hint: 'Which appears most?' },
          { prompt: 'Mean of 10, 20, 30?', answer: '20', choices: ['20', '30', '60'], hint: '60 ÷ 3.' },
          { prompt: 'Median of 4 numbers 3, 5, 9, 11 (average the middle two)?', answer: '7', choices: ['7', '5', '9'], hint: '(5 + 9) ÷ 2.' }
        ] } },
      { kind: 'mastery', title: 'Measures of center check', component: 'problemSet',
        config: { problems: [
          { prompt: 'Mean of 4, 8, 6, 2?', answer: '5', choices: ['5', '6', '20'], hint: 'Sum 20 ÷ 4.', misconceptions: { '20': 'That’s the sum — divide by how many (4)' } },
          { prompt: 'Median of 7, 3, 9, 1, 5?', answer: '5', choices: ['5', '9', '3'], hint: 'Order first: 1,3,5,7,9.', misconceptions: { '9': 'Order the data before picking the middle' } },
          { prompt: 'Mode of 2, 2, 5, 7, 7, 7?', answer: '7', choices: ['7', '2', '5'], hint: 'Most frequent.' },
          { prompt: 'Which measure is the "average"?', answer: 'mean', choices: ['mean', 'median', 'mode'], hint: 'Add and divide.' }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'When one value is much bigger than the rest, does it change the mean or the median more? Why?',
        starters: ['The mean is affected by', 'The median only depends on', 'I would describe a typical value with'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Summarize real data.',
        items: [
          { icon: '📏', label: 'Class heights', detail: 'Collect a few classmates’ heights. Find the mean, median, and mode. Which fits best?' },
          { icon: '🎲', label: 'Roll and average', detail: 'Roll a die 10 times, record the results, and find all three measures of center.' },
          { icon: '⚠️', label: 'The outlier effect', detail: 'Add one huge value to a data set. Watch the mean jump but the median barely move.' }
        ] }
    ]
  });
})();
