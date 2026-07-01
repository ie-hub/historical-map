/* Learning Atlas — Mathematics · Grade 1–2 lessons. */
(function () {
  const P = window.MATH.Player, U = window.MATH.util;
  const reg = P.register;

  reg({
    concept: 'numberline', title: 'Number Lines',
    hook: { emoji: '📏', text: 'Where does 7 live on the line?', sub: 'Every number has its own spot in order.' },
    steps: [
      { kind: 'explore', title: 'Find the number', component: 'numberLine', config: { min: 0, max: 10, mode: 'place', rounds: 3 } },
      { kind: 'discover', title: 'Numbers live in order', text: 'A number line puts numbers in <b>order</b>, evenly spaced. The further right you go, the bigger the number. This is the ruler behind almost all of math.' },
      { kind: 'practice', difficulty: 'easy', title: 'Up to 20', component: 'numberLine', config: { min: 0, max: 20, step: 2, mode: 'place', rounds: 3 } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Count by 1s to 20', component: 'numberLine', config: { min: 0, max: 20, step: 1, mode: 'place', rounds: 4 } },
      { kind: 'mastery', title: 'Which is bigger?', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const a = U.rand(0, 20), b = U.rand(0, 20); const ans = a === b ? String(a) : String(Math.max(a, b)); return { prompt: `On the number line, which is further right (bigger)?<br><b class="m-big">${a} or ${b}</b>`, answer: ans, choices: [String(a), String(b)].filter((v, i, arr) => arr.indexOf(v) === i), hint: 'Bigger numbers sit further right.' }; }); } } }
    ]
  });

  reg({
    concept: 'place-value-tens', title: 'Place Value: Tens & Ones',
    hook: { emoji: '🧱', text: 'What makes 24 different from 42?', sub: 'Same digits — but they mean different amounts.' },
    steps: [
      { kind: 'explore', title: 'Build with blocks', intro: 'Add tens and ones to build the target number.', component: 'placeValue', config: { rounds: 3, max: 99 } },
      { kind: 'discover', title: 'Position gives value', text: 'A digit\'s <b>place</b> tells its value. In <b>24</b> the 2 means 2 <b>tens</b> (20) and the 4 means 4 <b>ones</b>. Ten ones make one ten — that is how we bundle.' },
      { kind: 'practice', difficulty: 'easy', title: 'Build more numbers', component: 'placeValue', config: { rounds: 4, max: 99 } },
      { kind: 'challenge', difficulty: 'challenge', title: 'How many tens?', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const n = U.rand(11, 99); return { prompt: `In the number <b class="m-big">${n}</b>, how many <b>tens</b>?`, answer: Math.floor(n / 10), hint: 'The left digit is the tens.' }; }); } } },
      { kind: 'mastery', title: 'Tens and ones', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const t = U.rand(1, 9), o = U.rand(0, 9); return { prompt: `What number is <b>${t} tens and ${o} ones</b>?`, answer: t * 10 + o, hint: `${t} tens = ${t * 10}, then add ${o}.` }; }); } } }
    ]
  });

  reg({
    concept: 'sub-10', title: 'Subtracting within 10',
    hook: { emoji: '🎈', text: 'You have 8 balloons and 3 pop.', sub: 'How many are still floating?' },
    steps: [
      { kind: 'explore', title: 'Take away', component: 'problemSet',
        config: { generate() { return U.range(3).map(() => { const a = U.rand(4, 9), b = U.rand(1, a - 1); return { prompt: `🎈×${a} … ${b} pop! <b class="m-big">${a} − ${b} = ?</b>`, answer: a - b, hint: 'Start at the big number and count back.' }; }); } } },
      { kind: 'discover', title: 'That is subtraction', text: 'Subtraction means <b>taking away</b> and finding how many are left. It is the opposite of adding: since 5 + 3 = 8, we know 8 − 3 = 5.' },
      { kind: 'practice', difficulty: 'easy', title: 'Count back', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const a = U.rand(3, 9), b = U.rand(1, a); return { prompt: `<b class="m-big">${a} − ${b} = ?</b>`, answer: a - b, hint: 'Count back from ' + a + '.' }; }); } } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Find the missing part', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const a = U.rand(5, 10), b = U.rand(1, a - 1); return { prompt: `<b class="m-big">${a} − ? = ${a - b}</b>`, answer: b, hint: 'What was taken away to leave ' + (a - b) + '?' }; }); } } },
      { kind: 'mastery', title: 'Differences to 10', component: 'problemSet',
        config: { generate() { return U.range(5).map(() => { const a = U.rand(2, 10), b = U.rand(0, a); return { prompt: `<b class="m-big">${a} − ${b} = ?</b>`, answer: a - b, hint: 'Take away ' + b + '.' }; }); } } }
    ]
  });

  reg({
    concept: 'skip-count', title: 'Skip Counting',
    hook: { emoji: '👣', text: 'Count your fingers — but only by twos.', sub: '2, 4, 6, 8… where do you land?' },
    steps: [
      { kind: 'explore', title: 'Jump along the line', intro: 'Click the ticks to make equal jumps.', component: 'numberLine', config: { min: 0, max: 20, step: 1, mode: 'jump', rounds: 3 } },
      { kind: 'discover', title: 'Equal jumps', text: 'Skip counting is making <b>equal jumps</b>. Three jumps of 2 lands on 6 — and that is exactly 2 + 2 + 2. This is the secret doorway to multiplication.' },
      { kind: 'practice', difficulty: 'easy', title: 'More jumps', component: 'numberLine', config: { min: 0, max: 20, step: 1, mode: 'jump', rounds: 3 } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Skip by 5s', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const k = U.pick([2, 5, 10]), j = U.rand(3, 6); return { prompt: `Count by <b>${k}s</b>, ${j} times. Where do you land?<br><b class="m-big">${U.range(j).map((_, i) => k * (i + 1)).slice(0, j - 1).join(', ')}, ?</b>`, answer: k * j, hint: `Add ${k} each time.` }; }); } } },
      { kind: 'mastery', title: 'Skip-count patterns', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const k = U.pick([2, 5, 10]), start = k * U.rand(1, 4); return { prompt: `Skip counting by ${k}: <b class="m-big">${start}, ${start + k}, ${start + 2 * k}, ?</b>`, answer: start + 3 * k, hint: `The step is ${k}.` }; }); } } }
    ]
  });

  reg({
    concept: 'arrays', title: 'Arrays',
    hook: { emoji: '🥚', text: 'How many eggs in the carton?', sub: 'Do you have to count every single one?' },
    steps: [
      { kind: 'explore', title: 'Build rows and columns', intro: 'Make the rows and columns shown, then count them all.', component: 'arrayBuilder', config: { mode: 'multiply', rounds: 3, maxR: 4, maxC: 5 } },
      { kind: 'discover', title: 'Rows of equal groups', text: 'An <b>array</b> lines things up in equal rows. 3 rows of 4 is 4 + 4 + 4 = 12. Instead of counting one by one, you count by <b>equal groups</b>.' },
      { kind: 'practice', difficulty: 'easy', title: 'More arrays', component: 'arrayBuilder', config: { mode: 'multiply', rounds: 3, maxR: 5, maxC: 5 } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Read the array', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const r = U.rand(2, 5), c = U.rand(2, 5); return { prompt: `${r} rows of ${c} — how many in all?<br><div class="m-emoji-row">${U.range(r).map(() => '<div>' + U.range(c).map(() => '🔵').join('') + '</div>').join('')}</div>`, answer: r * c, hint: `Count by ${c}s, ${r} times.` }; }); } } },
      { kind: 'mastery', title: 'Rows × columns', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const r = U.rand(2, 5), c = U.rand(2, 5); return { prompt: `An array has <b>${r} rows</b> of <b>${c}</b>. How many total?`, answer: r * c, hint: `${r} groups of ${c}.` }; }); } } }
    ]
  });

  reg({
    concept: 'fractions-intro', title: 'Fractions: Equal Parts',
    hook: { emoji: '🍕', text: 'Can you split this pizza evenly?', sub: 'Two friends, one pizza — fair shares only!' },
    steps: [
      { kind: 'explore', title: 'Make equal parts', intro: 'Shade the pizza to match the fraction.', component: 'fractionPizza', config: { mode: 'build', rounds: 3, maxDen: 4 } },
      { kind: 'discover', title: 'Equal parts of a whole', text: 'A fraction splits a whole into <b>equal parts</b>. The bottom number (denominator) says how many equal parts; the top (numerator) says how many you take. Half a pizza is <b>1/2</b>.' },
      { kind: 'practice', difficulty: 'easy', title: 'Shade the fraction', component: 'fractionPizza', config: { mode: 'build', rounds: 3, maxDen: 6 } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Trickier slices', component: 'fractionPizza', config: { mode: 'build', rounds: 4, maxDen: 8 } },
      { kind: 'mastery', title: 'Fraction sense', component: 'problemSet',
        config: { problems: [
          { prompt: 'A whole split into 2 equal parts — one part is…', answer: '1/2', choices: ['1/2', '1/3', '1/4'], hint: '2 equal parts.' },
          { prompt: 'A pizza cut into 4 equal slices — one slice is…', answer: '1/4', choices: ['1/2', '1/3', '1/4'], hint: '4 equal parts.' },
          { prompt: 'Which is bigger?', answer: '1/2', choices: ['1/2', '1/4'], hint: 'Fewer parts = bigger pieces.' },
          { prompt: 'The bottom number of a fraction tells you…', answer: 'how many equal parts', choices: ['how many equal parts', 'how many you take', 'the total slices eaten'], hint: 'It is the denominator.' }
        ] } }
    ]
  });
})();
