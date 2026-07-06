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
      { kind: 'teach', title: 'What 4 × 3 really means',
        lead: 'Multiplying is just <b>fast adding of equal groups</b>. Instead of adding the same number over and over, you say it once and count how many groups. <b>4 × 3</b> means <b>4 groups of 3</b> — so 3 + 3 + 3 + 3.',
        anatomy: {
          expr: '<span class="tint-m">4</span> × <span class="tint-x">3</span>',
          parts: [
            { sym: '4', tone: 'm', name: 'how many groups', desc: 'the number of equal groups you have — <b>4 groups</b>' },
            { sym: '3', tone: 'x', name: 'size of each group', desc: 'how many are in <b>each</b> group — <b>3 in every group</b>' }
          ]
        },
        moves: [
          { label: 'More groups', text: '→ a bigger answer. 5 × 3 is one more group of 3 than 4 × 3.' },
          { label: 'Bigger groups', text: '→ also a bigger answer. 4 × 5 puts more in each group.' },
          { label: 'Swap the numbers', text: '→ same total. 4 × 3 and 3 × 4 both make 12 — the array just turns sideways.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'Picture <b>4 rows with 3 donuts in each row</b>. You could count all the donuts one by one, or just add the rows:',
          math: '3 + 3 + 3 + 3 = 12,  so 4 × 3 = 12'
        },
        takeaway: 'Multiplication counts equal groups — one number is how many groups, the other is how big each group is.' },
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
      { kind: 'teach', title: 'Why area is length × width',
        lead: 'Area is <b>how many unit squares it takes to cover a shape</b> — like counting the floor tiles in a room. For a rectangle you don’t have to count them all: the rows and columns line up in a neat grid, so you can <b>multiply</b> instead.',
        anatomy: {
          expr: 'Area = <span class="tint-m">length</span> × <span class="tint-x">width</span>',
          parts: [
            { sym: 'length', tone: 'm', name: 'how long', desc: 'how many squares fit along one side — the length of a <b>row</b>' },
            { sym: 'width', tone: 'x', name: 'how wide', desc: 'how many rows there are stacked up — the width' }
          ]
        },
        moves: [
          { label: 'Longer', text: '→ each row is longer, so more squares fit. The area grows.' },
          { label: 'Wider', text: '→ more rows stack up, so the area grows again.' },
          { label: 'Double one side', text: '→ the area doubles. Double both sides and the area is four times as big.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'A floor <b>5 tiles wide and 3 tiles deep</b> has 3 rows of 5 tiles. That’s the same as 5 × 3 — you never have to count all 15:',
          math: '5 × 3 = 15 square tiles'
        },
        takeaway: 'Area counts the squares that cover a shape; for a rectangle, length × width counts them for you.' },
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
      { kind: 'teach', title: 'What the top and bottom mean',
        lead: 'A fraction names <b>equal parts of one whole</b>. First you cut the whole into <b>equal</b> pieces — that word matters — then you count how many of those pieces you’re talking about. The two numbers answer two different questions.',
        anatomy: {
          expr: '<span class="tint-m">3</span>&frasl;<span class="tint-x">4</span>',
          parts: [
            { sym: '3', tone: 'm', name: 'numerator (top)', desc: '<b>how many parts you have</b> — you took 3 of them' },
            { sym: '4', tone: 'x', name: 'denominator (bottom)', desc: '<b>how many equal parts the whole was cut into</b> — 4 in all' }
          ]
        },
        moves: [
          { label: 'Bigger top', text: '→ you have more of the pieces, so the fraction is bigger. 3/4 > 1/4.' },
          { label: 'Bigger bottom', text: '→ the pieces are cut smaller, so each one is worth less. 1/8 < 1/4.' },
          { label: 'Top equals bottom', text: '→ you have every part, which makes one whole. 4/4 = 1.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'Break a chocolate bar into <b>4 equal chunks</b> and eat <b>3</b> of them. The bottom is 4 (equal chunks), the top is 3 (chunks eaten):',
          math: '3 of 4 equal parts = 3/4'
        },
        takeaway: 'Bottom = how many equal parts the whole is cut into; top = how many of them you have.' },
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
      { kind: 'teach', title: 'Why the same digit can mean different amounts',
        lead: 'A digit’s <b>place</b> tells you its <b>value</b>. The digit 7 isn’t always worth 7 — it depends where it sits. Each step to the <b>left</b> makes a digit worth <b>ten times more</b>, because ten of one place bundle up into the next.',
        anatomy: {
          expr: '<span class="tint-m">7</span><span class="tint-b">2</span><span class="tint-x">6</span>',
          parts: [
            { sym: '7', tone: 'm', name: 'hundreds', desc: '7 hundreds = <b>700</b>' },
            { sym: '2', tone: 'b', name: 'tens', desc: '2 tens = <b>20</b>' },
            { sym: '6', tone: 'x', name: 'ones', desc: '6 ones = <b>6</b>' }
          ]
        },
        moves: [
          { label: 'Move one place left', text: '→ the digit is worth ten times more. A 7 in the tens (70) becomes 700 in the hundreds.' },
          { label: 'Move one place right', text: '→ ten times less. 700 becomes 70, then 7.' },
          { label: 'Ten of a place', text: '→ bundle into one of the next place. Ten tens make one hundred.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'The number <b>726</b> is really 700 + 20 + 6 hiding inside three digits. The 7 means 700, not 7:',
          math: '726 = 700 + 20 + 6'
        },
        takeaway: 'The value of a digit is the digit times its place — and each place left is ten times bigger.' },
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
      { kind: 'teach', title: 'A point is an address',
        lead: 'An <b>ordered pair (x, y)</b> is an address for a point on the grid. It tells you two things in order: how far <b>across</b>, then how far <b>up</b>. The word <b>ordered</b> is the key — swap the two numbers and you land somewhere else.',
        anatomy: {
          expr: '( <span class="tint-x">x</span> , <span class="tint-y">y</span> )',
          parts: [
            { sym: 'x', tone: 'x', name: 'across (first)', desc: 'how far to go <b>right</b> from the corner — always counted first' },
            { sym: 'y', tone: 'y', name: 'up (second)', desc: 'how far to go <b>up</b> after that' }
          ]
        },
        moves: [
          { label: 'Bigger x', text: '→ the point moves further right.' },
          { label: 'Bigger y', text: '→ the point moves further up.' },
          { label: 'Swap x and y', text: '→ a totally different spot. (3, 5) is not the same point as (5, 3).' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'To find <b>(3, 5)</b>, start at the corner, walk <b>3 across</b>, then <b>5 up</b>. Across first, up second — every time:',
          math: '(3, 5): 3 across → 5 up'
        },
        takeaway: 'x, then y — across, then up. The order is the whole point.' },
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
      { kind: 'teach', title: 'What lives left of zero',
        lead: 'Numbers don’t stop at zero. To the <b>left of zero</b> live the <b>negative numbers</b> — they measure the <b>opposite</b> or <b>below</b>: money you owe, degrees below freezing, floors below ground. On the number line, the further <b>left</b> you go, the <b>smaller</b> the number.',
        anatomy: {
          expr: '<span class="tint-x">−3</span>  …  0  …  <span class="tint-y">+3</span>',
          parts: [
            { sym: '−3', tone: 'x', name: 'negative', desc: '3 steps <b>left</b> of zero — below the start, like owing 3 or 3° below zero' },
            { sym: '0', tone: 'b', name: 'zero', desc: 'the middle — the dividing line between below and above' },
            { sym: '+3', tone: 'y', name: 'positive', desc: '3 steps <b>right</b> of zero — above the start' }
          ]
        },
        moves: [
          { label: 'Move right', text: '→ the number gets bigger (you add).' },
          { label: 'Move left', text: '→ the number gets smaller (you subtract), even past zero.' },
          { label: 'Further left', text: '→ smaller, not bigger. −7 is <b>less</b> than −2, even though 7 looks larger.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'It’s <b>5°</b> and drops <b>8°</b>. Start at 5, walk 8 steps left, and you pass zero into the negatives:',
          math: '5 − 8 = −3   (three below zero)'
        },
        takeaway: 'Negatives are the mirror image below zero — and further left always means smaller.' },
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
      { kind: 'teach', title: 'A function is a machine',
        lead: 'A <b>function</b> is a rule — think of a little machine. You <b>feed in</b> a number, the machine follows its rule, and it <b>hands back</b> exactly one number. The important promise: the same input always gives the <b>same one output</b>.',
        anatomy: {
          expr: '<span class="tint-x">input</span> → [ <span class="tint-m">rule</span> ] → <span class="tint-y">output</span>',
          parts: [
            { sym: 'input', tone: 'x', name: 'what goes in', desc: 'the number you feed the machine' },
            { sym: 'rule', tone: 'm', name: 'the rule', desc: 'what the machine <b>does</b> to it — like “×2, then +1”' },
            { sym: 'output', tone: 'y', name: 'what comes out', desc: 'the one answer it hands back' }
          ]
        },
        moves: [
          { label: 'Change the input', text: '→ you usually get a different output. Feed in 5 instead of 2 and out comes a new number.' },
          { label: 'Change the rule', text: '→ the whole machine behaves differently. “×2” and “×3” send the same input to different places.' },
          { label: 'Same input again', text: '→ the same output every time. That’s what makes it a function.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'The machine <b>“×2, then +1”</b> takes 2 and hands back 5; give it 3 and it hands back 7. Once you know the rule, you can predict any input:',
          math: '2 → 5,   3 → 7,   10 → 21'
        },
        takeaway: 'A function is a rule that turns each input into exactly one output — same input, same answer.' },
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
