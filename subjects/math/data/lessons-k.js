/* Learning Atlas — Mathematics · Kindergarten lessons.
   Each lesson follows the platform flow: a curiosity Hook, hands-on Explore,
   a short Discover that names what the learner just did, then Practice, an
   optional Challenge (for the 3rd star) and a Mastery check. Registered by
   concept id on MATH.Player.                                                    */
(function () {
  const P = window.MATH.Player, U = window.MATH.util;
  const reg = P.register;

  /* ---- Reference lesson: the full 9-stage learning arc, standards-aligned. ----
     Hook → Prior knowledge → Explore → Discover (guided instruction) → Practice →
     Challenge → Mastery (assessment) → Reflection → Extension. Aligned to Indiana
     K.NS.4 (one-to-one correspondence & cardinality) and K.NS.5 (counting objects
     in arrangements). Other lessons use the shorter core flow; this is the model. */
  reg({
    concept: 'count-10', title: 'Counting to 10',
    standards: ['K.NS.4', 'K.NS.5'],
    hook: { emoji: '🍪', text: 'How many cookies are on the table?', sub: 'And is a longer row always more?' },
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'If one row of blocks is longer than another row, does the longer row <b>always</b> have more blocks?',
        options: ['Yes — longer always means more', 'Not always — you have to count', 'I’m not sure yet'] },
      { kind: 'explore', title: 'Meet the number rods', intro: 'Longer rods hold more. Find each length by counting its red and blue parts.', component: 'numberRods', config: { mode: 'identify', max: 10, rounds: 3 } },
      { kind: 'discover', title: 'Number is amount', text: 'Each rod is one part longer than the last. Whether you count parts on a rod or objects on a table, the <b>last number you say is how many</b> — that is counting. And the amount stays the same no matter how you arrange the objects or which one you start with.', rule: 'The last number you count = how many there are' },
      { kind: 'practice', difficulty: 'easy', title: 'Count the turtles', component: 'counter', config: { emoji: '🐢', min: 4, max: 8, rounds: 3 } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Bigger groups', intro: 'Now count all the way up to 10.', component: 'counter', config: { emoji: '⭐', min: 7, max: 10, rounds: 3 } },
      { kind: 'mastery', title: 'How many?', intro: 'Look and tell how many — quick as you can.', component: 'problemSet',
        config: { generate(d) { const n = d === 'challenge' ? [6, 10] : [3, 8]; return U.range(4).map(() => { const k = U.rand(n[0], n[1]); return { prompt: `How many? <div class="m-emoji-row">${U.range(k).map(() => '🍎').join('')}</div>`, answer: k, hint: 'Count each apple once.' }; }); } } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'How do you know how many objects are in a group? Did your first guess about the longer row turn out to be right?',
        starters: ['I know how many because', 'The last number I count tells me', 'A longer row does not always'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Try these away from the screen to stretch your counting even further.',
        items: [
          { icon: '🔢', label: 'Count past 10', detail: 'Line up 20 small objects at home and count each one exactly once.' },
          { icon: '👀', label: 'Count without counting', detail: 'Glance at the dots on a die — can you say how many without counting them one by one?' },
          { icon: '🔀', label: 'Rearrange and re-count', detail: 'Count a group, then move the objects around. Is it still the same number? Why?' }
        ] }
    ]
  });

  reg({
    concept: 'compare-qty', title: 'Comparing Quantities',
    standards: ['K.NS.7', 'K.NS.9'],
    hook: { emoji: '🐘', text: 'Which group has more?', sub: 'The elephants or the mice — how can you be sure?' },
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'Here are 3 huge elephants 🐘 and 5 tiny mice 🐭. Which group has <b>more animals</b>?',
        options: ['The elephants — they’re bigger', 'The mice — there are more of them', 'You can’t tell until you count'] },
      { kind: 'explore', title: 'More, fewer, or the same', component: 'compare', config: { rounds: 4, max: 6, emoji: '🍓' } },
      { kind: 'discover', title: 'The bigger number wins', text: 'Count each group. The one with the bigger number has <b>more</b>. We write <b>&gt;</b> (greater than) and <b>&lt;</b> (less than) — the open mouth always points at the bigger number.' },
      { kind: 'practice', difficulty: 'easy', title: 'Pick the sign', component: 'compare', config: { rounds: 4, max: 9, emoji: '🐟' } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Trickier groups', component: 'compare', config: { rounds: 5, max: 12, emoji: '🎈' } },
      { kind: 'mastery', title: 'Which sign?', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const a = U.rand(1, 12), b = U.rand(1, 12); const ans = a > b ? '>' : a < b ? '<' : '='; const misc = {}; if (ans === '>') misc['<'] = 'Sign reversed — the open side must face the bigger number'; else if (ans === '<') misc['>'] = 'Sign reversed — the open side must face the bigger number'; return { prompt: `Which sign makes it true?<br><b class="m-big">${a} &nbsp;?&nbsp; ${b}</b>`, answer: ans, choices: ['<', '=', '>'], hint: 'The open side points at the bigger number.', misconceptions: misc }; }); } } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'How can you be sure which group has more, even when the things are different sizes?',
        starters: ['I can be sure by', 'The group with more has', 'Bigger things do not always'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Try these away from the screen.',
        items: [
          { icon: '🍽️', label: 'Set the table', detail: 'Put out one fork for each plate. More plates, more forks, or the same? (matching)' },
          { icon: '✋', label: 'More or fewer fingers', detail: 'Hold up fingers on each hand. Which hand shows more? How many more?' },
          { icon: '🔢', label: 'Draw the signs', detail: 'Practise drawing &gt; and &lt; — the open mouth always eats the bigger number.' }
        ] }
    ]
  });

  reg({
    concept: 'patterns-k', title: 'Patterns',
    standards: ['K.CA.5'],
    hook: { emoji: '🔺', text: 'Can you predict what comes next?', sub: '🔺 🔵 🔺 🔵 🔺 …' },
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'Look at this: 🔴 🟡 🟡 🔴 🟡 🟡 🔴 … What do you think comes <b>next</b>?',
        options: ['🔴 red', '🟡 yellow', 'I need to find the repeating part first'] },
      { kind: 'explore', title: 'Find what repeats', component: 'pattern', config: { rounds: 3 } },
      { kind: 'discover', title: 'Patterns repeat', text: 'A pattern has a part that <b>repeats</b> over and over. Once you spot the repeating part, you can always tell what comes next.' },
      { kind: 'practice', difficulty: 'easy', title: 'Keep it going', component: 'pattern', config: { rounds: 4 } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Longer patterns', component: 'pattern', config: { rounds: 5 } },
      { kind: 'mastery', title: 'What comes next?', component: 'pattern', config: { rounds: 3 } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'How do you figure out what comes next in a pattern?',
        starters: ['I look for', 'The part that repeats is', 'Once I find the pattern I can'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Make patterns of your own.',
        items: [
          { icon: '👏', label: 'Clap a pattern', detail: 'Clap-clap-stomp, clap-clap-stomp… make a sound pattern and ask someone to continue it.' },
          { icon: '🎨', label: 'Colour a pattern', detail: 'Use two colours for an AB pattern, then try a harder AAB or ABC pattern.' },
          { icon: '🧦', label: 'Pattern hunt', detail: 'Find a repeating pattern at home — on clothes, tiles, or a fence.' }
        ] }
    ]
  });

  reg({
    concept: 'shapes-2d', title: '2D Shapes',
    standards: ['K.G.2'],
    hook: { emoji: '🔺', text: 'Which of these is a triangle?', sub: 'Look at the sides and corners.' },
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'What makes a shape a <b>triangle</b>, no matter how big it is or which way it points?',
        options: ['It has 3 sides and 3 corners', 'It points up', 'It is small'] },
      { kind: 'explore', title: 'Meet the shapes', intro: 'First learn their names, then prove you know them.', component: 'threePeriod', config: { items: [{ id: 'circle', label: 'circle', shape: 'circle' }, { id: 'square', label: 'square', shape: 'square' }, { id: 'triangle', label: 'triangle', shape: 'triangle' }] } },
      { kind: 'discover', title: 'Shapes have names', text: 'We name flat shapes by their <b>sides</b>. A <b>triangle</b> has 3 sides, a <b>square</b> has 4 equal sides, and a <b>circle</b> has no sides at all — it is perfectly round.' },
      { kind: 'practice', difficulty: 'easy', title: 'Sort the shapes', component: 'shapeSort', config: { kinds: ['circle', 'square', 'triangle', 'star'], perKind: 2 } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Every shape', component: 'shapeSort', config: { kinds: ['circle', 'square', 'triangle', 'star', 'hexagon', 'diamond'], perKind: 2 } },
      { kind: 'mastery', title: 'Know your shapes', component: 'problemSet',
        config: { problems: [
          { prompt: 'How many sides does a <b>triangle</b> have?', answer: '3', choices: ['2', '3', '4'], hint: 'Tri- means three.', misconceptions: { '4': 'Counting a triangle like a square — a triangle has 3 sides', '2': 'A flat closed shape needs at least 3 sides' } },
          { prompt: 'How many sides does a <b>square</b> have?', answer: '4', choices: ['3', '4', '5'], hint: 'Count the corners.', misconceptions: { '3': 'That would be a triangle — a square has 4 equal sides' } },
          { prompt: 'Which shape is perfectly round with no sides?', answer: 'circle', choices: ['circle', 'square', 'triangle'], hint: 'It has no corners.' },
          { prompt: 'A shape with 6 sides is a…', answer: 'hexagon', choices: ['pentagon', 'hexagon', 'triangle'], hint: 'Hex- means six.', misconceptions: { 'pentagon': 'A pentagon has 5 sides — hex- means six', 'triangle': 'A triangle has only 3 sides' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'How can you tell two shapes apart, like a square and a triangle?',
        starters: ['I can tell shapes apart by', 'A triangle always has', 'The number of sides tells me'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Look for shapes in the real world.',
        items: [
          { icon: '🔺', label: 'Shape hunt', detail: 'Find a circle, a square, and a triangle somewhere in your room.' },
          { icon: '✏️', label: 'Count sides & corners', detail: 'Draw a shape, then count its sides and its corners (vertices). Do the numbers match?' },
          { icon: '🧩', label: 'Build a bigger shape', detail: 'Put two triangles together — what bigger shape can you make? (K.G.4)' }
        ] }
    ]
  });

  reg({
    concept: 'add-10', title: 'Adding within 10',
    standards: ['K.CA.1', 'K.CA.2'],
    hook: { emoji: '🍎', text: 'You have 3 apples and get 2 more.', sub: 'How many apples do you have now?' },
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'You have 4 stickers. A friend gives you 3 more. Do you have <b>more</b> stickers or <b>fewer</b> than before?',
        options: ['More — adding makes the group bigger', 'Fewer — some go away', 'The same number'] },
      { kind: 'explore', title: 'Join two rods', intro: 'Lay one rod after another — where do they reach?', component: 'numberRods', config: { mode: 'add', max: 10, rounds: 3 } },
      { kind: 'discover', title: 'That is addition', text: 'Adding means joining two amounts and measuring the whole. Laying a rod of 3 and a rod of 2 end-to-end reaches 5: we write <b>3 + 2 = 5</b>.' },
      { kind: 'practice', difficulty: 'easy', title: 'Fill the frames', component: 'tenFrame', config: { mode: 'add', rounds: 3 } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Add in your head', component: 'problemSet',
        config: { generate() { return U.range(4).map(() => { const a = U.rand(2, 6), b = U.rand(2, 10 - a); return { prompt: `<b class="m-big">${a} + ${b} = ?</b>`, answer: a + b, hint: 'Count on from the bigger number.' }; }); } } },
      { kind: 'mastery', title: 'Sums to 10', component: 'problemSet',
        config: { generate() { return U.range(5).map(() => { const a = U.rand(1, 5), b = U.rand(1, 5); return { prompt: `<b class="m-big">${a} + ${b} = ?</b>`, answer: a + b, hint: 'Use your fingers or a ten frame.' }; }); } } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'What does it mean to add two groups together? How do you find the total?',
        starters: ['Adding means', 'To find how many in all I', 'When I put groups together the number gets'] },
      { kind: 'extend', title: 'Keep exploring', intro: 'Add real things around you.',
        items: [
          { icon: '🍎', label: 'Snack math', detail: 'Put 3 crackers on one plate and 2 on another. How many in all? Try other amounts up to 10.' },
          { icon: '✋', label: 'Finger sums', detail: 'Show a number on each hand, then count them all — that is the sum.' },
          { icon: '🔟', label: 'Ways to make 10', detail: 'How many pairs add up to 10? 5+5, 6+4, 7+3… (K.CA.4)' }
        ] }
    ]
  });
})();
