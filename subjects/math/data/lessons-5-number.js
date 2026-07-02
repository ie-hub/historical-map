/* Learning Atlas — Mathematics · Grade 5 · Number Sense lessons.
   Indiana-aligned: decimal place value (5.NS.3), powers of 10 (5.NS.4),
   rounding decimals (5.NS.5), comparing & ordering (5.NS.1), percents (5.NS.6).
   Full 9-stage arc — Prior → Explore → Discover → (worked) Practice → Challenge →
   Mastery → Reflect → Extend — with misconception-tagged summative checks. */
(function () {
  const P = window.MATH.Player, U = window.MATH.util;
  const reg = P.register;

  /* ---------------------------------------------- 5.NS.3 · Decimal place value */
  reg({
    concept: 'decimal-place-value', title: 'Decimal Place Value',
    standards: ['5.NS.3'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'In the number <b>3.33</b>, the two 3s after the point look the same. Is the first 3 (tenths) worth <b>the same</b> as the second 3 (hundredths)?',
        options: ['Same — they’re both just 3', 'No — each place to the right is worth less', 'I’m not sure yet'] },
      { kind: 'explore', title: 'Build with golden beads', intro: 'Warm up on whole numbers: ten of one place always bundles into the next place left.', component: 'placeValue', config: { rounds: 3, max: 999 } },
      { kind: 'discover', title: 'Every place is ×10 the one to its right', rule: 'Move one place LEFT → ×10.   Move one place RIGHT → ÷10 (×1/10).',
        text: 'Places keep this rule going <b>right past the decimal point</b>: ones → tenths → hundredths → thousandths. Each place is worth <b>10 times</b> the place to its right, and <b>1/10</b> of the place to its left. So in <b>3.33</b> the first 3 means 3 tenths (0.3) but the second means 3 hundredths (0.03) — ten times smaller.' },
      { kind: 'example', title: 'Read a decimal place by place', component: 'workedExample',
        config: { problem: 'What is each digit worth in <b>2.845</b>?',
          intro: 'Name the place, then its value.',
          steps: [
            { text: 'The <b>2</b> is in the <b>ones</b> place.', math: '2 × 1 = 2' },
            { ask: 'The <b>8</b> is right after the point. Which place — and what value?', choices: ['tenths → 0.8', 'hundredths → 0.08', 'ones → 8'], answer: 'tenths → 0.8', why: 'The first place after the point is tenths: 8 × 1/10 = 0.8.', hint: 'First place after the point is tenths.', misconceptions: { 'hundredths → 0.08': 'That’s the SECOND place after the point — the first is tenths' } },
            { ask: 'What is the <b>4</b> worth?', choices: ['0.04 (hundredths)', '0.4 (tenths)', '0.004 (thousandths)'], answer: '0.04 (hundredths)', why: 'Second place after the point is hundredths: 4 × 1/100 = 0.04.', hint: 'One place further right than tenths.' },
            { text: 'The <b>5</b> is thousandths.', math: '5 × 1/1000 = 0.005', why: 'Each step right divides the value by 10 again.' },
            { text: 'Altogether: 2 + 0.8 + 0.04 + 0.005 = <b>2.845</b>.' }
          ], done: 'Same digit, very different value — it all depends on the place.' } },
      { kind: 'practice', difficulty: 'easy', title: 'Value of a digit', component: 'problemSet',
        config: { generate() { const places = [['tenths', 0.1], ['hundredths', 0.01], ['thousandths', 0.001]]; return U.range(4).map(() => { const d = U.rand(1, 9), pi = U.rand(0, 2); const val = +(d * places[pi][1]).toFixed(3); return { prompt: `A digit <b>${d}</b> sits in the <b>${places[pi][0]}</b> place. What is it worth?`, answer: String(val), hint: `${d} × ${places[pi][1]}.` }; }); } } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Ten times bigger or smaller', component: 'problemSet',
        config: { problems: [
          { prompt: 'The <b>7</b> in 0.7 is worth how many times the <b>7</b> in 0.07?', answer: '10', choices: ['10', '100', '1'], hint: 'One place to the LEFT is ×10.' },
          { prompt: 'The <b>2</b> in 4.2 is worth 1/10 of the 2 in which number?', answer: '42', choices: ['42', '4.02', '0.42'], hint: 'The bigger 2 is one place further LEFT (ones).' },
          { prompt: 'In 5.55, the middle 5 (tenths) is worth ___ times the last 5 (hundredths).', answer: '10', choices: ['10', '5', '2'], hint: 'Left is always ×10.' },
          { prompt: 'Moving a digit one place to the RIGHT makes it…', answer: '10 times smaller', choices: ['10 times smaller', '10 times bigger', 'the same'], hint: 'Right = ÷10.' }
        ] } },
      { kind: 'mastery', title: 'Place value check', component: 'problemSet',
        config: { problems: [
          { prompt: 'What is the value of the <b>6</b> in <b>3.164</b>?', answer: '0.06', choices: ['0.06', '0.6', '6'], hint: 'It’s in the hundredths place.', misconceptions: { '0.6': 'That’s tenths — the 6 is the second place after the point (hundredths)', '6': 'A digit after the point is less than one' } },
          { prompt: 'Which digit is in the <b>thousandths</b> place of 0.472?', answer: '2', choices: ['2', '4', '7'], hint: 'Third place after the point.' },
          { prompt: 'The 8 in 8.0 is worth how many times the 8 in 0.8?', answer: '10', choices: ['10', '100', '8'], hint: 'Ones vs tenths — one place apart.' },
          { prompt: 'Write the value of the underlined 9 in 1.<u>9</u>5.', answer: '0.9', choices: ['0.9', '0.09', '9'], hint: 'First place after the point is tenths.' }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'How does the value of a digit change as it moves from tenths to hundredths to thousandths? Why?',
        starters: ['Each step to the right', 'The place tells me', 'A 3 in tenths is not the same as'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Take place value further.',
        items: [
          { icon: '💰', label: 'Money is decimals', detail: 'A dollar is ones, a dime is tenths, a penny is hundredths. Show $3.47 with coins.' },
          { icon: '📏', label: 'Metric measuring', detail: 'On a ruler, 1 cm = 0.01 m. Find something 0.125 m long.' },
          { icon: '🔟', label: 'Thousandths and beyond', detail: 'What place comes after thousandths? Keep the ÷10 pattern going.' }
        ] }
    ]
  });

  /* -------------------------------------------------- 5.NS.4 · Powers of ten */
  reg({
    concept: 'powers-of-ten', title: 'Powers of 10',
    standards: ['5.NS.4'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'Multiplying by 10 keeps adding a zero: 4 → 40 → 400. What do you think happens to a <b>decimal</b> like 4.7 when you multiply it by 10?',
        options: ['You add a zero → 4.70', 'The point moves → 47', 'Nothing changes'] },
      { kind: 'explore', title: 'Spot the pattern', intro: 'Study the two hidden rules, then you’ll name them.', component: 'workedExample',
        config: { problem: 'Multiply, and watch the zeros and the point.',
          steps: [
            { text: '3 × 10 = 30, &nbsp; 3 × 100 = 300, &nbsp; 3 × 1000 = 3000.', why: 'One zero in the 10 → one zero in the answer.' },
            { text: '10 = 10¹, &nbsp; 100 = 10², &nbsp; 1000 = 10³.', math: '10ⁿ has n zeros', why: 'The exponent counts the zeros.' },
            { text: '4.7 × 10 = 47 &nbsp;(point moves 1 right). &nbsp; 4.7 × 100 = 470.', why: 'Multiplying moves the decimal point RIGHT.' },
            { text: '4.7 ÷ 10 = 0.47 &nbsp;(point moves 1 left).', why: 'Dividing moves the point LEFT.' }
          ], done: 'Two patterns: exponents count zeros, and ×/÷ by 10 slides the decimal point.' } },
      { kind: 'discover', title: 'The exponent tells you how far to move', rule: '× 10ⁿ → point moves n places RIGHT.   ÷ 10ⁿ → point moves n places LEFT.',
        text: '<b>10ⁿ</b> is just 1 followed by <b>n zeros</b> (10³ = 1000). Multiplying by 10ⁿ slides the decimal point <b>n places right</b>; dividing slides it <b>n places left</b>. You’re not really "adding zeros" — you’re moving the point, and zeros fill the empty places.' },
      { kind: 'practice', difficulty: 'easy', title: 'Move the point', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const base = +(U.rand(11, 99) / 10).toFixed(1); const p = U.pick([10, 100]); return { prompt: `<b class="m-big">${base} × ${p} = ?</b>`, answer: String(+(base * p).toFixed(2)), hint: `Move the point ${String(p).length - 1} place(s) right.` }; }); } } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Exponents & division', component: 'problemSet',
        config: { problems: [
          { prompt: 'Write 10 000 as a power of 10.', answer: '10^4', choices: ['10^4', '10^3', '10^5'], hint: 'Count the zeros.' },
          { prompt: '<b>2.5 × 10³ = ?</b>', answer: '2500', choices: ['2500', '250', '25000'], hint: '10³ = 1000; move the point 3 right.' },
          { prompt: '<b>36 ÷ 100 = ?</b>', answer: '0.36', choices: ['0.36', '3.6', '360'], hint: 'Dividing moves the point 2 left.' },
          { prompt: 'How many zeros are in the product 8 × 10⁵?', answer: '5', choices: ['5', '6', '4'], hint: 'The exponent counts the zeros.' }
        ] } },
      { kind: 'mastery', title: 'Powers of 10 check', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>0.6 × 100 = ?</b>', answer: '60', choices: ['60', '6', '600'], hint: 'Point moves 2 right.', misconceptions: { '6': 'That’s only ×10 — 100 moves the point TWO places', '600': 'Point moved 3 places — 100 = 10², only 2' } },
          { prompt: '<b>450 ÷ 10³ = ?</b>', answer: '0.45', choices: ['0.45', '4.5', '45'], hint: '10³ = 1000; move 3 left.', misconceptions: { '4.5': 'That’s ÷100 — 10³ means 3 places' } },
          { prompt: '10² equals…', answer: '100', choices: ['100', '20', '1000'], hint: '1 followed by 2 zeros.', misconceptions: { '20': '10² is 10×10, not 10×2' } },
          { prompt: '<b>7.02 × 10 = ?</b>', answer: '70.2', choices: ['70.2', '7.020', '702'], hint: 'Move the point ONE place right.' }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why does "adding a zero" work for whole numbers but not for decimals? What actually moves?',
        starters: ['When I multiply by 10', 'The exponent tells me', 'It’s really the decimal point that'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Powers of 10 are everywhere.',
        items: [
          { icon: '🌌', label: 'Scientific notation', detail: 'Scientists write huge numbers like 3 × 10⁸ (the speed of light in m/s). Why is that handy?' },
          { icon: '💵', label: 'Ten-times money', detail: 'A $10 bill is 10 ones; $100 is 10 tens. Climb the powers of ten with money.' },
          { icon: '📐', label: 'Metric ladder', detail: 'mm → cm → m → km each step is ×10 or ×1000. Trace the point moving.' }
        ] }
    ]
  });

  /* -------------------------------------------------- 5.NS.5 · Round decimals */
  reg({
    concept: 'round-decimals', title: 'Rounding Decimals',
    standards: ['5.NS.5'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'A bill comes to <b>$4.68</b>. Rounded to the nearest dollar, is that closer to $4 or $5?',
        options: ['$4 — it starts with 4', '$5 — 0.68 is past halfway', 'Exactly in between'] },
      { kind: 'example', title: 'Round step by step', component: 'workedExample',
        config: { problem: 'Round <b>4.68</b> to the nearest whole number.',
          intro: 'Rounding = which mark is it closest to?',
          steps: [
            { text: 'We’re rounding to the <b>ones</b> place, so look at the digit just after it — the <b>tenths</b>.', why: 'The next digit right decides which way to go.' },
            { ask: 'The tenths digit is <b>6</b>. Round up or stay?', choices: ['Round up (5 or more)', 'Stay down (less than 5)'], answer: 'Round up (5 or more)', why: '6 ≥ 5, so we round up.', hint: '5 or more rounds up.', misconceptions: { 'Stay down (less than 5)': '6 is 5 or more, so round up' } },
            { text: 'Round up: 4 becomes <b>5</b>.', math: '4.68 ≈ 5', why: '4.68 is nearer to 5 than to 4.' }
          ], done: 'Find the deciding digit → 5 or more rounds up, less than 5 stays.' } },
      { kind: 'discover', title: 'Look at the very next digit', rule: 'Next digit 5–9 → round UP.   Next digit 0–4 → round DOWN (stay).',
        text: 'To round to a place, find the digit <b>just to its right</b>. If that digit is <b>5 or more</b>, bump the rounding place up by one; if it’s <b>4 or less</b>, leave the rounding place alone. Everything to the right of the rounding place drops off.' },
      { kind: 'practice', difficulty: 'easy', title: 'Nearest whole number', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const n = +(U.rand(11, 89) / 10).toFixed(1); return { prompt: `Round <b>${n}</b> to the nearest whole number.`, answer: String(Math.round(n)), hint: 'Look at the tenths digit.' }; }); } } },
      { kind: 'challenge', difficulty: 'challenge', title: 'To the nearest tenth', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const n = +(U.rand(100, 999) / 100).toFixed(2); return { prompt: `Round <b>${n}</b> to the nearest <b>tenth</b>.`, answer: (Math.round(n * 10) / 10).toFixed(1), hint: 'Look at the hundredths digit.' }; }); } } },
      { kind: 'mastery', title: 'Rounding check', component: 'problemSet',
        config: { problems: [
          { prompt: 'Round <b>7.35</b> to the nearest tenth.', answer: '7.4', choices: ['7.4', '7.3', '8'], hint: 'Hundredths digit is 5 → round up.', misconceptions: { '7.3': '5 rounds UP, not down', '8': 'That’s the nearest whole number, not tenth' } },
          { prompt: 'Round <b>12.49</b> to the nearest whole number.', answer: '12', choices: ['12', '13', '12.5'], hint: 'Tenths digit is 4 → stay.', misconceptions: { '13': 'Look only at the tenths (4) — don’t round the 9 up first' } },
          { prompt: 'Round <b>0.863</b> to the nearest hundredth.', answer: '0.86', choices: ['0.86', '0.87', '0.9'], hint: 'Thousandths digit is 3 → stay.' },
          { prompt: 'Round <b>5.96</b> to the nearest tenth.', answer: '6.0', choices: ['6.0', '5.9', '5.10'], hint: '9 rounds up and carries into the ones.' }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why do we only need to look at ONE digit — the next one to the right — to round?',
        starters: ['I look at the digit', '5 or more means', 'Rounding 5.96 was tricky because'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Rounding shows up all the time.',
        items: [
          { icon: '🛒', label: 'Estimate a total', detail: 'Round each price to the nearest dollar to guess a shopping total before you add.' },
          { icon: '⚠️', label: 'When rounding misleads', detail: 'Round 0.49 and 0.51 to the nearest whole. Tiny difference, opposite answers — why care?' },
          { icon: '📊', label: 'Chained rounding', detail: 'Round 4.48 to a tenth, then to a whole. Do you get the same as rounding straight to a whole?' }
        ] }
    ]
  });

  /* -------------------------------------------- 5.NS.1 · Comparing & ordering */
  reg({
    concept: 'compare-order', title: 'Comparing & Ordering',
    standards: ['5.NS.1'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'Which is bigger, <b>0.7</b> or <b>0.65</b>? (Careful — 65 looks like a bigger number than 7.)',
        options: ['0.65 — 65 > 7', '0.7 — line up the places first', 'They’re equal'] },
      { kind: 'example', title: 'Compare by place value', component: 'workedExample',
        config: { problem: 'Which is greater, <b>0.7</b> or <b>0.65</b>?',
          intro: 'Line up the decimal points and compare place by place.',
          steps: [
            { text: 'Write 0.7 as <b>0.70</b> so both have the same number of places.', why: 'Adding a trailing zero doesn’t change the value, but makes the places line up.' },
            { ask: 'Compare the <b>tenths</b>: 7 vs 6. Which is bigger?', choices: ['0.70 (7 tenths)', '0.65 (6 tenths)'], answer: '0.70 (7 tenths)', why: '7 tenths beat 6 tenths — the tenths decide it before we even reach hundredths.', hint: 'Start from the LEFT-most place.', misconceptions: { '0.65 (6 tenths)': 'More digits doesn’t mean bigger — 7 tenths > 6 tenths' } },
            { text: 'So <b>0.7 > 0.65</b>.', math: '0.70 > 0.65' }
          ], done: 'Line up the points, then compare from the biggest place down.' } },
      { kind: 'discover', title: 'Compare place by place, left to right', rule: 'Line up the decimal points. Compare tenths first, then hundredths, then thousandths.',
        text: 'A longer string of digits is <b>not</b> automatically bigger. Line up the decimal points (pad with zeros so both have the same length), then compare starting at the <b>largest place</b>. The first place where they differ decides it. On a number line, greater numbers sit further right.' },
      { kind: 'practice', difficulty: 'easy', title: 'Which sign?', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const a = +(U.rand(10, 99) / 100).toFixed(2), b = +(U.rand(10, 99) / 100).toFixed(2); const ans = a > b ? '>' : a < b ? '<' : '='; return { prompt: `Which sign makes it true?<br><b class="m-big">${a} &nbsp;?&nbsp; ${b}</b>`, answer: ans, choices: ['<', '=', '>'], hint: 'Line up the points; compare tenths first.' }; }); } } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Order three numbers', component: 'problemSet',
        config: { problems: [
          { prompt: 'Which is the <b>largest</b>: 0.4, 0.39, 0.4 1?', answer: '0.41', choices: ['0.41', '0.4', '0.39'], hint: 'Pad to 0.40, 0.39, 0.41.' },
          { prompt: 'Put in order, smallest first: 1.2, 1.02, 1.2 0. Which comes first?', answer: '1.02', choices: ['1.02', '1.2', '1.20'], hint: '1.02 has 0 tenths.' },
          { prompt: 'Compare a fraction and a decimal: which is bigger, 1/2 or 0.45?', answer: '1/2', choices: ['1/2', '0.45', 'equal'], hint: '1/2 = 0.50.' },
          { prompt: 'Which is greatest: 3/4, 0.7, or 0.8?', answer: '0.8', choices: ['0.8', '3/4', '0.7'], hint: '3/4 = 0.75.' }
        ] } },
      { kind: 'mastery', title: 'Compare & order check', component: 'problemSet',
        config: { problems: [
          { prompt: 'True or false: <b>0.9 &lt; 0.85</b>', answer: 'false', choices: ['true', 'false'], hint: '9 tenths > 8 tenths.', misconceptions: { 'true': '85 looks bigger than 9, but 0.9 = 0.90 > 0.85' } },
          { prompt: 'Which sign? <b>0.300 ? 0.3</b>', answer: '=', choices: ['<', '=', '>'], hint: 'Trailing zeros don’t change value.', misconceptions: { '>': 'Extra zeros after the last digit add nothing — they’re equal' } },
          { prompt: 'Largest of: 2.09, 2.9, 2.19?', answer: '2.9', choices: ['2.9', '2.19', '2.09'], hint: 'Compare tenths: 9 > 1 > 0.' },
          { prompt: 'Which is greater, 3/5 or 0.55?', answer: '3/5', choices: ['3/5', '0.55', 'equal'], hint: '3/5 = 0.6.' }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why can a decimal with fewer digits (like 0.7) be greater than one with more digits (like 0.65)?',
        starters: ['To compare fairly I', 'The tenths place', 'More digits does not mean'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Ordering numbers in the real world.',
        items: [
          { icon: '🏅', label: 'Race times', detail: 'Sprint times like 10.09 s and 10.9 s decide medals. Which runner is faster? By how much?' },
          { icon: '🌡️', label: 'Line them up', detail: 'Write five temperatures with decimals and place them in order on a number line.' },
          { icon: '⚖️', label: 'Fractions vs decimals', detail: 'Turn 3/8 and 0.4 into the same form to compare. Which is bigger?' }
        ] }
    ]
  });

  /* ---------------------------------------------------- 5.NS.6 · Percents */
  reg({
    concept: 'percents-intro', title: 'Percents as Part of 100',
    standards: ['5.NS.6'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'A phone battery shows <b>50%</b>. What does the "%" tell you it’s 50 <b>out of</b>?',
        options: ['Out of 50', 'Out of 100', 'Out of 10'] },
      { kind: 'explore', title: 'Shade the hundred', intro: 'Percent means "per hundred". Shade parts of a whole to feel it.', component: 'fractionPizza', config: { rounds: 3, mode: 'build', maxDen: 10 } },
      { kind: 'discover', title: 'Per-cent means per hundred', rule: '30% = 30/100 = 0.30.   To go %→decimal, ÷100 (move the point 2 left).',
        text: 'A <b>percent</b> is a fraction with a denominator of <b>100</b>. "Cent" means hundred (like 100 cents in a dollar). So <b>30%</b> is 30 out of 100 = 30/100 = 0.30. A 10×10 grid makes it visible: shade 30 of the 100 squares.' },
      { kind: 'example', title: 'Three ways to say the same amount', component: 'workedExample',
        config: { problem: 'Show <b>25%</b> as a fraction and a decimal.',
          steps: [
            { text: 'Percent → fraction over 100.', math: '25% = 25/100' },
            { ask: 'Simplify 25/100. What fraction is it?', choices: ['1/4', '1/5', '2/5'], answer: '1/4', why: '25 and 100 both ÷25 give 1/4.', hint: 'Divide top and bottom by 25.' },
            { text: 'Percent → decimal: divide by 100.', math: '25% = 0.25', why: 'Move the point two places left.' },
            { text: 'So 25% = 25/100 = 1/4 = 0.25 — one amount, three outfits.' }
          ], done: 'Percent, fraction, decimal — all the same value dressed differently.' } },
      { kind: 'practice', difficulty: 'easy', title: 'Percent to decimal', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const p = U.rand(1, 9) * 10; return { prompt: `Write <b>${p}%</b> as a decimal.`, answer: String(+(p / 100).toFixed(2)), hint: 'Divide by 100 — move the point 2 left.' }; }); } } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Match the forms', component: 'problemSet',
        config: { problems: [
          { prompt: '1/2 written as a percent is…', answer: '50%', choices: ['50%', '5%', '20%'], hint: '1/2 = 50/100.' },
          { prompt: '0.07 as a percent is…', answer: '7%', choices: ['7%', '70%', '0.7%'], hint: 'Multiply by 100.' },
          { prompt: '100% of a pizza is…', answer: 'the whole pizza', choices: ['the whole pizza', 'half the pizza', 'none of it'], hint: '100/100 = 1.' },
          { prompt: '3/4 as a percent is…', answer: '75%', choices: ['75%', '34%', '43%'], hint: '3/4 = 75/100.' }
        ] } },
      { kind: 'mastery', title: 'Percent check', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>40%</b> as a fraction of 100 is…', answer: '40/100', choices: ['40/100', '100/40', '4/100'], hint: 'Percent = out of 100.', misconceptions: { '100/40': 'The 100 goes on the BOTTOM — 40 out of 100' } },
          { prompt: '<b>60%</b> as a decimal is…', answer: '0.6', choices: ['0.6', '6.0', '0.06'], hint: '60 ÷ 100.', misconceptions: { '0.06': 'That’s 6% — 60% means 60 hundredths = 0.60' } },
          { prompt: 'Which is the same as 0.25?', answer: '25%', choices: ['25%', '2.5%', '250%'], hint: '×100.' },
          { prompt: 'Shade 20 of 100 squares. What percent is shaded?', answer: '20%', choices: ['20%', '2%', '80%'], hint: '20 out of 100.' }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'How are a percent, a fraction, and a decimal all ways of saying the same thing?',
        starters: ['Percent means', 'To turn a percent into a decimal I', 'They are all just'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Percents are all around you.',
        items: [
          { icon: '🔋', label: 'Battery & downloads', detail: 'Find three "%" readings on a device today and say each as a fraction of 100.' },
          { icon: '🏷️', label: 'Sale signs', detail: 'A "50% off" sign — what fraction of the price do you still pay?' },
          { icon: '🍕', label: 'Grid it out', detail: 'Draw a 10×10 grid and shade 37 squares. That’s 37% — what decimal and fraction is it?' }
        ] }
    ]
  });
})();
