/* Learning Atlas — Mathematics · Algebra I lessons: the Number & Expressions
   strand (AI.NE) — radicals, polynomials, and the complex number system.
   Teaching-first, mirroring the quadratics reference: every lesson interleaves
   worked examples (workedExample — reveal or supply each line) with focused
   discover cards between the manipulatives, so the learner is TAUGHT the method
   before being tested on it. Summative checks tag their distractors with the
   misconception each one reveals. Registered on MATH.Player.                    */
(function () {
  const P = window.MATH.Player, U = window.MATH.util;
  const reg = P.register;

  /* ---- AI.NE.3 · Simplifying Radicals ----------------------------------- */
  reg({
    concept: 'radicals', title: 'Simplifying Radicals',
    standards: ['AI.NE.3'],
    steps: [
      { kind: 'teach', title: 'What a radical is really asking',
        lead: 'A square root is a <b>question</b>: <b>√n</b> asks “<i>what number, squared, gives n?</i>” Simplifying doesn’t change that answer — it just <b>rewrites</b> it in the cleanest form by pulling any <b>perfect-square</b> factor out from under the sign.',
        anatomy: {
          expr: '√<span class="tint-x">72</span> = √(<span class="tint-m">36</span> · <span class="tint-b">2</span>) = <span class="tint-m">6</span>√<span class="tint-b">2</span>',
          parts: [
            { sym: '√', tone: 'y', name: 'the radical', desc: 'asks “what squared gives this?” — the whole expression under it is the <b>radicand</b>' },
            { sym: '36', tone: 'm', name: 'the perfect square', desc: 'the <b>largest</b> square factor hiding inside — its root <b>6</b> walks out front' },
            { sym: '2', tone: 'b', name: 'the leftover', desc: 'has no square factor, so it <b>stays</b> under the sign' },
            { sym: '72', tone: 'x', name: 'the radicand', desc: 'the number you’re taking the root of, split as <b>square × leftover</b>' }
          ]
        },
        moves: [
          { label: 'Bigger perfect square', text: '→ more comes out front, less stays under. Grab the LARGEST so you finish in one pass.' },
          { label: 'No square factor left', text: '→ it’s fully simplified — 6√2 is done because 2 hides no square.' },
          { label: '√ over a sum', text: '→ does NOT split: √(9 + 16) = √25 = 5, not 3 + 4. The root only breaks over ×, never over +.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'Think of √72 as an area of 72 laid out as a rectangle. Pull off the biggest square tile — a 6×6 block of area 36 — and the root of that tile, <b>6</b>, steps outside:',
          math: '√72 = √36 · √2 = 6√2'
        },
        takeaway: 'Simplifying a radical = pull out the biggest perfect square; the leftover — and any + inside — stays put.' },

      { kind: 'prior', title: 'What do you think?',
        prompt: '√72 isn’t a whole number, but it isn’t “finished” either. What does <b>simplifying</b> a square root mean?',
        options: ['Pulling a perfect square out from under the root', 'Rounding it to a decimal', 'Making the root sign disappear'] },

      { kind: 'example', title: 'Pull out the perfect square', component: 'workedExample',
        intro: 'A square root simplifies when a <b>perfect square</b> hides inside it. The whole trick is spotting the LARGEST one.',
        config: {
          problem: 'Simplify √72',
          steps: [
            { text: 'Hunt for the biggest perfect square that divides 72. The perfect squares are 4, 9, 16, 25, 36, 49… — and 36 goes into 72.',
              math: '72 = 36 · 2' },
            { text: 'Split the root across the product — the root of a product is the product of the roots:',
              math: '√72 = √(36 · 2) = √36 · √2' },
            { ask: '√36 is a whole number. Which line is right?',
              choices: ['6√2', '36√2', '√6 · √2'], answer: '6√2',
              why: '√36 = 6, and √2 stays under the root because 2 has no perfect-square factor. So √72 = 6√2.',
              hint: 'What whole number squares to 36?',
              misconceptions: { '36√2': 'You pulled out 36 instead of its ROOT — √36 = 6, not 36', '√6 · √2': '√36 is a perfect square, so it comes OUT as 6 — don’t leave it under a root' },
              math: '√36 · √2 = 6√2' },
            { text: 'Check that nothing is left to pull: 2 has no perfect-square factor, so 6√2 is fully simplified.',
              math: '√72 = 6√2', note: 'If you’d used 4 (72 = 4·18) you’d get 2√18 — still not done, because 18 = 9·2 hides another square. Always grab the LARGEST square.' }
          ],
          done: 'Find the biggest perfect-square factor, take its root out front, and leave the rest under the sign.'
        } },

      { kind: 'discover', title: 'The product rule for roots',
        text: 'The engine of simplifying is <b>√(a · b) = √a · √b</b>. Break the number into a <b>perfect square × leftover</b>, then the square’s root walks out front: √50 = √(25 · 2) = <b>5√2</b>. Keep the perfect squares memorised — <b>4, 9, 16, 25, 36, 49, 64, 81, 100</b> — and always pull out the largest one so you only simplify once.',
        rule: '√(ab) = √a · √b → pull out the LARGEST perfect square' },

      { kind: 'explore', title: 'Find the biggest square', intro: 'Simplifying starts with one decision: which perfect square divides the number? Pick the largest each time.', component: 'problemSet',
        config: { problems: [
          { prompt: 'The largest perfect-square factor of <b>48</b> is…', answer: '16', choices: ['16', '4', '9'], hint: '48 = 16 · 3, and 16 is a perfect square.' },
          { prompt: 'Simplify: <b>√50</b>', answer: '5√2', choices: ['5√2', '2√5', '25√2'], hint: '50 = 25 · 2.' },
          { prompt: 'Simplify: <b>√12</b>', answer: '2√3', choices: ['2√3', '3√2', '4√3'], hint: '12 = 4 · 3.' }
        ] } },

      { kind: 'example', title: 'Combine, multiply, and rationalize', component: 'workedExample',
        intro: 'Once each root is simplified, radicals behave like variables: only LIKE radicals combine, and a root in the denominator has to be cleared.',
        config: {
          problem: 'Simplify √48 + √3, then √6 · √2, then 1/√2',
          steps: [
            { text: 'Simplify first — √48 hides a perfect square, √3 does not:', math: '√48 = √(16 · 3) = 4√3' },
            { ask: 'Now add: 4√3 + √3. What do you get?',
              choices: ['5√3', '5√6', '4√6'], answer: '5√3',
              why: 'Same radical √3, so add the counts like terms: 4√3 + 1√3 = 5√3. The √3 itself doesn’t change.',
              hint: 'Think 4 apples + 1 apple. The “apple” is √3.',
              misconceptions: { '5√6': 'You added the numbers UNDER the root — but like radicals keep the same root; only the counts out front add', '4√6': 'You multiplied 3 into the 4 somehow — 4√3 + √3 just counts the √3’s' },
              math: '4√3 + √3 = 5√3' },
            { text: 'Multiplying is easier — combine under one root, then simplify:', math: '√6 · √2 = √12 = √(4 · 3) = 2√3' },
            { ask: 'Rationalize 1/√2 — multiply top and bottom by √2. The result is…',
              choices: ['√2/2', '2/√2', '1/2'], answer: '√2/2',
              why: '(1 · √2)/(√2 · √2) = √2/√4 = √2/2. Multiplying by √2/√2 (which is 1) clears the root from the bottom.',
              hint: '√2 · √2 = √4 = 2, so the denominator becomes a whole number.',
              misconceptions: { '2/√2': 'That still has a root in the denominator — the whole point is to clear it', '1/2': 'You dropped the √2 on top — the numerator becomes √2, not 1' },
              math: '1/√2 · √2/√2 = √2/2' }
          ],
          done: 'Simplify each root first, add only LIKE radicals, multiply under one root, and never leave a root in the denominator.'
        } },

      { kind: 'discover', title: 'Like radicals, and clearing the bottom',
        text: 'Radicals add like terms: <b>only LIKE radicals combine</b> — 2√5 + 3√5 = 5√5, but 2√5 + 3√2 stays as it is. Beware the classic trap: <b>√a + √b ≠ √(a + b)</b> (√9 + √16 = 3 + 4 = 7, not √25 = 5). And a radical in a denominator isn’t simplified — <b>rationalize</b> it by multiplying top and bottom by that radical: 3/√5 = 3√5/5.',
        rule: 'like radicals add · √a + √b ≠ √(a+b) · rationalize by ×(√/√)' },

      { kind: 'practice', difficulty: 'easy', title: 'Simplify these', component: 'problemSet',
        config: { problems: [
          { prompt: 'Simplify: <b>√18</b>', answer: '3√2', choices: ['3√2', '2√3', '9√2'], hint: '18 = 9 · 2.' },
          { prompt: 'Simplify: <b>√8 + √2</b>', answer: '3√2', choices: ['3√2', '√10', '2√2'], hint: '√8 = 2√2, then add the √2.' },
          { prompt: 'Simplify: <b>√3 · √12</b>', answer: '6', choices: ['6', '√15', '6√3'], hint: '√3 · √12 = √36.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Watch the traps', component: 'problemSet',
        config: { problems: [
          { prompt: 'Simplify fully: <b>2√18</b>', answer: '6√2', choices: ['6√2', '2√18', '36√2'], hint: '18 still hides 9 · 2 → 2√18 = 2 · 3√2.' },
          { prompt: 'Rationalize: <b>1/√3</b>', answer: '√3/3', choices: ['√3/3', '3/√3', '1/3'], hint: 'Multiply top and bottom by √3.' }
        ] } },
      { kind: 'mastery', title: 'Radicals check', component: 'problemSet',
        config: { problems: [
          { prompt: 'Simplify: <b>√75</b>', answer: '5√3', choices: ['5√3', '3√5', '25√3'], hint: '75 = 25 · 3.', misconceptions: { '3√5': 'You split it as 9 · … — 75 = 25 · 3, and √25 = 5', '25√3': 'You pulled out 25 instead of its root √25 = 5' } },
          { prompt: 'Simplify: <b>√2 + √8</b>', answer: '3√2', choices: ['3√2', '√10', '√16'], hint: 'Simplify √8 = 2√2 first, then combine.', misconceptions: { '√10': 'You added under the root — √a + √b ≠ √(a+b). Simplify then combine like radicals', '√16': 'You multiplied instead of added; and √8 = 2√2 is the like radical here' } },
          { prompt: 'Which is FALSE?', answer: '√(9 + 16) = √9 + √16', choices: ['√(9 + 16) = √9 + √16', '√(9 · 16) = √9 · √16', '√36 = 6'], hint: 'The root splits over × but not over +.', misconceptions: { '√(9 · 16) = √9 · √16': 'This one is TRUE — the product rule holds. It’s addition that breaks', '√36 = 6': 'This is true — 6² = 36' } },
          { prompt: 'Rationalize: <b>5/√5</b>', answer: '√5', choices: ['√5', '5/√5', '5√5/5'], hint: 'Multiply by √5/√5, then simplify the fraction.', misconceptions: { '5/√5': 'Still a root in the denominator — not simplified', '5√5/5': 'Right first move, but 5√5/5 reduces to √5 — finish the simplification' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why is √72 = 6√2 “simpler” than √72, and why do 2√5 and 3√5 add but 2√5 and 3√2 don’t?',
        starters: ['Pulling out the perfect square helps because', 'Like radicals add because', '√a + √b is not √(a+b) because'] },
      { kind: 'extend', title: 'Go further', intro: 'Push the radical idea.',
        items: [
          { icon: '📏', label: 'Roots on the number line', detail: 'Locate √2, √8, and 3√2 on a number line. Notice √8 = 2√2 sits exactly where you’d expect between them.' },
          { icon: '🧊', label: 'Cube roots too', detail: 'The same idea works for ∛: pull out perfect CUBES. Try ∛54 = ∛(27 · 2) = 3∛2.' },
          { icon: '➗', label: 'Conjugates', detail: 'To rationalize 1/(1 + √2), multiply by (1 − √2)/(1 − √2). Why does that clear the root?' }
        ] }
    ]
  });

  /* ---- AI.NE.5 · Polynomials --------------------------------------------- */
  reg({
    concept: 'polynomials', title: 'Polynomials',
    standards: ['AI.NE.5'],
    steps: [
      { kind: 'teach', title: 'What a polynomial is made of',
        lead: 'A polynomial is just a <b>sum of terms</b> — each term is a number times a power of x. The word looks scary, but it’s only <b>addition of building blocks</b>, and the one rule that governs it is: you can only combine <b>LIKE terms</b> — terms with the same variable AND same exponent.',
        anatomy: {
          expr: '<span class="tint-m">3</span><span class="tint-x">x²</span> <span class="tint-y">−</span> <span class="tint-m">2</span><span class="tint-x">x</span> <span class="tint-y">+</span> <span class="tint-b">3</span>',
          parts: [
            { sym: '3x²', tone: 'x', name: 'leading term', desc: 'the term with the <b>highest exponent</b>; its exponent (2) is the polynomial’s <b>degree</b>' },
            { sym: '3', tone: 'm', name: 'coefficients', desc: 'the numbers out front — these are what you <b>add</b> when combining like terms' },
            { sym: '3', tone: 'b', name: 'constant', desc: 'the lone number with no x — the term of degree 0' },
            { sym: '+ −', tone: 'y', name: 'the glue', desc: 'terms are <b>added</b> together; standard form runs highest exponent → lowest' }
          ]
        },
        moves: [
          { label: 'Same variable & exponent', text: '→ LIKE terms — add the coefficients: 4x² + 7x² = 11x².' },
          { label: 'Different exponent', text: '→ UNLIKE — they can’t merge: 2x² + 3x is already as short as it gets.' },
          { label: 'Highest exponent', text: '→ sets the degree and the leading term; write terms from that one down to the constant.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'Sort the terms like coins: x²’s in one pile, x’s in another, plain numbers in a third. You add within a pile, never across. So 2x² + 3x + (x² − 5x) groups to:',
          math: '(2x² + x²) + (3x − 5x) = 3x² − 2x'
        },
        takeaway: 'A polynomial is a sum of terms; only like terms (same variable, same exponent) ever combine.' },

      { kind: 'prior', title: 'What do you think?',
        prompt: 'To add <b>2x² + 3x</b> and <b>x² − 5x</b>, what can you legally combine?',
        options: ['x² with x², and x with x — matching terms only', 'Everything into one big term', 'Only the numbers in front'] },

      { kind: 'example', title: 'Add by combining like terms', component: 'workedExample',
        intro: 'Adding polynomials is just tidying up: line up the terms that MATCH, then add their coefficients. Nothing else moves.',
        config: {
          problem: 'Add (2x² + 3x − 1) + (x² − 5x + 4)',
          steps: [
            { text: 'Drop the brackets — a plus sign in front changes nothing:', math: '2x² + 3x − 1 + x² − 5x + 4' },
            { text: 'Group the LIKE terms — same variable AND same exponent go together:', math: '(2x² + x²) + (3x − 5x) + (−1 + 4)' },
            { ask: 'Combine the x-terms: 3x − 5x = ?',
              choices: ['−2x', '2x', '−2x²'], answer: '−2x',
              why: 'Add the coefficients: 3 + (−5) = −2. The variable x stays as x — it never gains an exponent.',
              hint: 'Just add the numbers in front: 3 − 5.',
              misconceptions: { '2x': 'Sign slip — 3 − 5 = −2, not +2', '−2x²': 'Combining x-terms keeps them as x — the exponent doesn’t change when you add' },
              math: '3x − 5x = −2x' },
            { text: 'Finish the other groups: 2x² + x² = 3x², and −1 + 4 = 3.', math: '3x² − 2x + 3' },
            { text: 'Write it in <b>standard form</b> — highest exponent first:', math: '3x² − 2x + 3',
              note: 'The degree is 2 (the biggest exponent). Standard form always runs high → low.' }
          ],
          done: 'Same variable, same exponent → add the coefficients. Everything else stays untouched.'
        } },

      { kind: 'discover', title: 'Like terms, degree, standard form',
        text: 'Only <b>like terms</b> combine — they must share the <b>same variable AND the same exponent</b>: 4x² and 7x² combine, but 4x² and 7x do NOT (2x² + 3x is already as short as it gets). The <b>degree</b> of a polynomial is its highest exponent, and <b>standard form</b> lists terms from highest degree down to the constant. That ordering is how every polynomial should be written.',
        rule: 'combine same variable & exponent · degree = top exponent · standard form = descending' },

      { kind: 'explore', title: 'A product is an area', intro: 'Multiplying (x + a)(x + b) is the area of a rectangle with those side lengths — every sub-rectangle is one term of the answer.', component: 'areaModel', config: { rounds: 3 } },

      { kind: 'example', title: 'Subtract, and multiply binomials', component: 'workedExample',
        intro: 'Two places polynomials trip people: the minus sign in a subtraction, and distributing every term in a product. Watch both.',
        config: {
          problem: 'Compute (3x² + 2x − 5) − (x² − 4x + 1), then (2x + 3)(x − 4)',
          steps: [
            { text: 'Subtraction means the minus hits EVERY term in the second polynomial — flip all three signs:', math: '3x² + 2x − 5 − x² + 4x − 1' },
            { ask: 'After the sign flip, combine the x-terms: 2x + 4x = ?',
              choices: ['6x', '−2x', '6x²'], answer: '6x',
              why: 'The −(−4x) became +4x, so 2x + 4x = 6x. Forgetting to flip that sign is the #1 subtraction error.',
              hint: 'The second polynomial’s −4x turns into +4x.',
              misconceptions: { '−2x': 'You forgot to flip −4x to +4x — subtraction changes EVERY sign in the second group', '6x²': 'Combining x-terms keeps them as x, not x²' },
              math: '2x + 4x = 6x' },
            { text: 'Finish: 3x² − x² = 2x², and −5 − 1 = −6:', math: '2x² + 6x − 6' },
            { text: 'Now the product — distribute every term of the first to every term of the second (FOIL):', math: '(2x + 3)(x − 4) = 2x·x + 2x·(−4) + 3·x + 3·(−4)' },
            { ask: 'The four pieces are 2x², −8x, 3x, −12. Combine the middle: −8x + 3x = ?',
              choices: ['−5x', '−11x', '−5x²'], answer: '−5x',
              why: '−8x + 3x = −5x. Note 2x · x = 2x² — multiplying ADDS exponents (x¹ · x¹ = x²).',
              hint: 'Add the two x-terms: −8 + 3.',
              misconceptions: { '−11x': 'You subtracted instead of adding — −8 + 3 = −5', '−5x²': 'The middle terms are x-terms; only 2x · x makes the x²' },
              math: '−8x + 3x = −5x → 2x² − 5x − 12' }
          ],
          done: 'Subtraction flips every sign in the second polynomial; multiplication distributes each term and ADDS exponents.'
        } },

      { kind: 'discover', title: 'Signs on subtraction, exponents on products',
        text: 'Two rules do the heavy lifting. <b>Subtraction flips every sign</b> in the polynomial being subtracted: −(x² − 4x + 1) = −x² + 4x − 1. And when you <b>multiply</b>, exponents <b>add</b> (x² · x = x³, since 2 + 1 = 3) while you <b>distribute every term to every term</b>. Don’t confuse the two: adding COMBINES like terms; multiplying grows the exponents.',
        rule: 'subtract → flip all signs · multiply → add exponents, distribute all' },

      { kind: 'practice', difficulty: 'easy', title: 'Combine and multiply', component: 'problemSet',
        config: { problems: [
          { prompt: 'Add: <b>(x² + 2x) + (3x² + 5x)</b>', answer: '4x² + 7x', choices: ['4x² + 7x', '4x² + 7x²', '5x³ + 7x'], hint: 'x² with x², x with x.' },
          { prompt: 'Simplify: <b>x² · x³</b>', answer: 'x⁵', choices: ['x⁵', 'x⁶', 'x²·³'], hint: 'Multiplying adds exponents: 2 + 3.' },
          { prompt: 'Multiply: <b>(x + 2)(x + 3)</b>', answer: 'x² + 5x + 6', choices: ['x² + 5x + 6', 'x² + 6x + 5', 'x² + 6'], hint: 'FOIL: outer + inner = 3x + 2x.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Mind the minus', component: 'problemSet',
        config: { problems: [
          { prompt: 'Subtract: <b>(4x² + x) − (x² − 3x)</b>', answer: '3x² + 4x', choices: ['3x² + 4x', '3x² − 2x', '3x² + 4x²'], hint: 'Flip the second polynomial’s signs: −x² + 3x.' },
          { prompt: 'Multiply: <b>(2x − 1)(x + 5)</b>', answer: '2x² + 9x − 5', choices: ['2x² + 9x − 5', '2x² − 9x − 5', '2x² + 11x − 5'], hint: 'FOIL: 10x − 1x = 9x.' }
        ] } },
      { kind: 'mastery', title: 'Polynomials check', component: 'problemSet',
        config: { problems: [
          { prompt: 'Add: <b>(2x² + 3x) + (4x² − x)</b>', answer: '6x² + 2x', choices: ['6x² + 2x', '6x⁴ + 2x', '6x² + 2x²'], hint: 'Combine like terms only.', misconceptions: { '6x⁴ + 2x': 'You multiplied the exponents — adding like terms keeps the exponent (x² + x² = 2x², still degree 2)', '6x² + 2x²': 'The 3x − x part is an x-term, not x²' } },
          { prompt: 'Simplify: <b>2x² + 3x</b>', answer: 'already simplified', choices: ['already simplified', '5x³', '5x²'], hint: 'Are x² and x like terms?', misconceptions: { '5x³': 'x² and x are UNLIKE (different exponents) — they can’t be combined, and you never multiply exponents by adding', '5x²': 'Different exponents don’t combine — 2x² + 3x stays as it is' } },
          { prompt: 'Subtract: <b>(5x² − 2x + 1) − (2x² + x − 3)</b>', answer: '3x² − 3x + 4', choices: ['3x² − 3x + 4', '3x² − x − 2', '3x² − 3x − 2'], hint: 'Flip all three signs of the second group.', misconceptions: { '3x² − x − 2': 'You didn’t flip the signs — subtraction negates every term: −2x² − x + 3', '3x² − 3x − 2': 'The constant: 1 − (−3) = 1 + 3 = 4, not −2' } },
          { prompt: 'Multiply: <b>(x + 4)(x − 2)</b>', answer: 'x² + 2x − 8', choices: ['x² + 2x − 8', 'x² − 2x − 8', 'x² + 2x + 8'], hint: 'FOIL: outer −2x + inner 4x = +2x; last 4 · (−2) = −8.', misconceptions: { 'x² − 2x − 8': 'Middle sign: −2x + 4x = +2x, not −2x', 'x² + 2x + 8': 'The last term is 4 · (−2) = −8, a NEGATIVE' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why can’t you combine 2x² and 3x into one term, and why does subtraction change signs you didn’t “touch”?',
        starters: ['Like terms must share', 'Subtraction flips every sign because', 'When I multiply x² · x I get x³ because'] },
      { kind: 'extend', title: 'Go further', intro: 'Stretch the polynomial idea.',
        items: [
          { icon: '🟦', label: 'The area picture', detail: 'Draw (x + 3)(x + 5) as a rectangle split into four pieces. Which piece is the x²? Which give the middle 8x?' },
          { icon: '📊', label: 'Name the degree', detail: 'Classify x³ − 2x + 7, 5x², and 4 by degree (cubic, quadratic, constant). What’s the degree of a plain number?' },
          { icon: '✳️', label: 'Squaring a binomial', detail: 'Expand (x + 3)² by FOIL. Why is it x² + 6x + 9 and NOT x² + 9? Where does the 6x come from?' }
        ] }
    ]
  });

  /* ---- AI.NE.1 · The Complex Number System ------------------------------- */
  reg({
    concept: 'complex-numbers', title: 'The Complex Number System',
    standards: ['AI.NE.1'],
    steps: [
      { kind: 'teach', title: 'Why i exists, and what a + bi means',
        lead: 'No real number squares to a negative — so √−1 had no answer. Mathematicians <b>defined one</b>: a new number <b>i</b> with the single property <b>i² = −1</b>. That one definition unlocks square roots of negatives, and every complex number then has the form <b>a + bi</b> — a real piece and an imaginary piece living side by side.',
        anatomy: {
          expr: '<span class="tint-m">a</span> + <span class="tint-b">b</span><span class="tint-y">i</span>',
          parts: [
            { sym: 'i', tone: 'y', name: 'the imaginary unit', desc: 'defined by <b>i² = −1</b> — it’s what √−1 becomes, the thing no real number could be' },
            { sym: 'a', tone: 'm', name: 'the real part', desc: 'an ordinary real number — the part with no i' },
            { sym: 'b', tone: 'b', name: 'the imaginary part', desc: 'the <b>coefficient of i</b> (sign included) — how much imaginary the number carries' }
          ]
        },
        moves: [
          { label: 'Negative under a root', text: '→ pull out √−1 as i: √−9 = √9 · √−1 = 3i.' },
          { label: 'Meet an i²', text: '→ replace it with −1: −3i² = −3(−1) = +3 — an imaginary term turns real.' },
          { label: 'a and b are separate', text: '→ 3 + 2i does NOT collapse to 5; the real and imaginary parts never merge.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'Think of a + bi as a point on a map: <b>a</b> steps east (real axis), <b>b</b> steps north (imaginary axis). The number 3 + 2i lands 3 across and 2 up — two coordinates that stay distinct, just like the x and y of a point.',
          math: '√−9 = 3i,   (3 + 2i) is the point (3, 2)'
        },
        takeaway: 'i is invented so i² = −1; every complex number is a + bi — one real part, one imaginary part, kept separate.' },

      { kind: 'prior', title: 'What do you think?',
        prompt: 'No real number squares to a negative — so <b>x² + 1 = 0</b> has no real solution. What did mathematicians do about it?',
        options: ['Invented a new number i with i² = −1', 'Declared the equation has no answer, ever', 'Rounded to the nearest real number'] },

      { kind: 'example', title: 'The imaginary unit, and adding', component: 'workedExample',
        intro: 'Everything starts with one definition: i = √−1, so i² = −1. From there, roots of negatives simplify and complex numbers add just like binomials.',
        config: {
          problem: 'Simplify √−9, then add (3 + 2i) + (1 − 5i)',
          steps: [
            { text: 'Split the −1 out from under the root — that’s where i comes from:', math: '√−9 = √9 · √−1' },
            { ask: 'Since √9 = 3 and √−1 = i, what is √−9?',
              choices: ['3i', '−3', '9i'], answer: '3i',
              why: '√9 = 3 and √−1 = i, so √−9 = 3i. It is NOT −3 — squaring −3 gives +9, not −9.',
              hint: 'Pull out the √−1 as i, then take √9.',
              misconceptions: { '−3': 'Check it: (−3)² = +9, not −9. The root of a NEGATIVE needs i', '9i': 'You forgot to take the square root of 9 — √9 = 3, so it’s 3i' },
              math: '√−9 = 3i' },
            { text: 'Now the sum. Add REAL to real and IMAGINARY to imaginary — like combining like terms:', math: '(3 + 1) + (2i − 5i)' },
            { ask: 'Combine: real 3 + 1 = 4, imaginary 2i − 5i = ?',
              choices: ['−3i', '3i', '−7i'], answer: '−3i',
              why: '2i − 5i = −3i (add the coefficients: 2 − 5 = −3). So the sum is 4 − 3i.',
              hint: 'Just the i-coefficients: 2 − 5.',
              misconceptions: { '3i': 'Sign slip — 2 − 5 = −3, not +3', '−7i': 'You added 2 + 5; but it’s 2 − 5 = −3' },
              math: '4 − 3i' }
          ],
          done: 'i = √−1 makes √−9 = 3i, and complex numbers add by matching real with real, imaginary with imaginary.'
        } },

      { kind: 'discover', title: 'i and the form a + bi',
        text: 'The whole system rests on <b>i = √−1</b>, which means <b>i² = −1</b>. Every complex number is written <b>a + bi</b>: <b>a</b> is the <b>real part</b> and <b>b</b> is the <b>imaginary part</b>. A root of a negative pulls out i: √−25 = √25 · √−1 = <b>5i</b>. And a and b stay <b>separate</b> — 3 + 2i is a single number with two parts, not something you can merge into 5.',
        rule: 'i = √−1 · i² = −1 · complex number = a + bi (real a, imaginary b)' },

      { kind: 'explore', title: 'Real part, imaginary part', intro: 'Every complex number has two coordinates: the real part and the imaginary part. Read them off, and simplify roots of negatives.', component: 'problemSet',
        config: { problems: [
          { prompt: 'In <b>7 − 4i</b>, the imaginary part is…', answer: '−4', choices: ['−4', '4', '−4i'], hint: 'b is the coefficient of i, sign included.' },
          { prompt: 'Simplify: <b>√−16</b>', answer: '4i', choices: ['4i', '−4', '16i'], hint: '√16 · √−1 = 4i.' },
          { prompt: '<b>i²</b> equals…', answer: '−1', choices: ['−1', '1', 'i'], hint: 'i = √−1, so i² = (√−1)².' }
        ] } },

      { kind: 'example', title: 'Multiply complex numbers', component: 'workedExample',
        intro: 'Multiplying is FOIL again — with one extra move: wherever i² appears, swap it for −1. That swap is what makes the answer come out complex.',
        config: {
          problem: 'Multiply (2 + 3i)(1 − i)',
          steps: [
            { text: 'FOIL — distribute every term, exactly like binomials:', math: '(2 + 3i)(1 − i) = 2·1 + 2·(−i) + 3i·1 + 3i·(−i)' },
            { text: 'Work out the four pieces:', math: '2 − 2i + 3i − 3i²' },
            { ask: 'Here’s the key step: −3i² becomes what?',
              choices: ['+3', '−3', '−3i'], answer: '+3',
              why: 'i² = −1, so −3i² = −3(−1) = +3. Replacing i² with −1 is the move that turns an imaginary term real.',
              hint: 'Substitute i² = −1 into −3i².',
              misconceptions: { '−3': 'You used i² = +1 — but i² = −1, so −3(−1) = +3', '−3i': 'i² is not i — it equals −1, a real number, so −3i² is real' },
              math: '−3i² = −3(−1) = +3' },
            { text: 'Combine the reals (2 + 3) and the imaginaries (−2i + 3i):', math: '(2 + 3) + (−2i + 3i) = 5 + i' }
          ],
          done: 'FOIL as usual, replace every i² with −1, then gather real and imaginary parts into a + bi.'
        } },

      { kind: 'discover', title: 'Where complex numbers come from',
        text: 'Add and subtract by <b>combining like parts</b> (reals together, imaginaries together). Multiply like binomials, then <b>replace every i² with −1</b> — that single substitution is the heart of complex arithmetic. Why bother? Because equations like <b>x² + 1 = 0</b> give x² = −1, which has <b>no REAL solution</b> — but with i, the solutions are x = ±i. Complex numbers complete the system so EVERY polynomial equation has answers.',
        rule: 'add like parts · multiply then i² → −1 · x² + 1 = 0 → x = ±i' },

      { kind: 'practice', difficulty: 'easy', title: 'Work with i', component: 'problemSet',
        config: { problems: [
          { prompt: 'Simplify: <b>√−49</b>', answer: '7i', choices: ['7i', '−7', '49i'], hint: '√49 · √−1.' },
          { prompt: 'Add: <b>(4 + i) + (2 + 3i)</b>', answer: '6 + 4i', choices: ['6 + 4i', '6 + 3i', '10i'], hint: 'Reals together, imaginaries together.' },
          { prompt: 'Simplify: <b>3i · 2i</b>', answer: '−6', choices: ['−6', '6', '6i²'], hint: '3 · 2 = 6, and i · i = i² = −1.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Combine and multiply', component: 'problemSet',
        config: { problems: [
          { prompt: 'Subtract: <b>(5 − 2i) − (1 + 3i)</b>', answer: '4 − 5i', choices: ['4 − 5i', '4 + i', '6 + i'], hint: 'Flip signs of the second: −1 − 3i.' },
          { prompt: 'Multiply: <b>(1 + 2i)(3 − i)</b>', answer: '5 + 5i', choices: ['5 + 5i', '3 + 5i', '1 + 5i'], hint: 'FOIL, then −2i² = +2 adds to the real part.' }
        ] } },
      { kind: 'mastery', title: 'Complex numbers check', component: 'problemSet',
        config: { problems: [
          { prompt: '<b>i²</b> equals…', answer: '−1', choices: ['−1', '1', 'i', '−i'], hint: 'From i = √−1.', misconceptions: { '1': 'i² is −1, not +1 — that sign is the whole point of the imaginary unit', 'i': 'i · i is i², which is a real number: −1' } },
          { prompt: 'Simplify: <b>√−9</b>', answer: '3i', choices: ['3i', '−3', '3', '9i'], hint: 'A negative under the root needs i.', misconceptions: { '−3': '(−3)² = +9, not −9 — the root of a negative is imaginary: 3i', '3': 'That’s √9 — you dropped the √−1 = i' } },
          { prompt: 'Add: <b>(2 + 5i) + (3 − 2i)</b>', answer: '5 + 3i', choices: ['5 + 3i', '8i', '5 + 7i'], hint: 'Match real with real, imaginary with imaginary.', misconceptions: { '8i': 'You merged the real and imaginary parts — 2 + 3 stays REAL (5), separate from the i-part', '5 + 7i': 'Imaginary part: 5i − 2i = 3i, not 7i' } },
          { prompt: 'Multiply: <b>(2 + i)(3 + i)</b>', answer: '5 + 5i', choices: ['5 + 5i', '6 + 5i', '7 + 5i'], hint: 'FOIL: last term i · i = i² = −1.', misconceptions: { '6 + 5i': 'You forgot the i² term — i · i = −1, so the real part is 6 + (−1) = 5', '7 + 5i': 'i² adds −1 to the real part, not +1' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why did mathematicians NEED to invent i, and why does replacing i² with −1 turn part of a product back into a real number?',
        starters: ['x² + 1 = 0 has no real solution because', 'Defining i = √−1 lets me', 'When I multiply and get i², I replace it with −1 because'] },
      { kind: 'extend', title: 'Go further', intro: 'Explore the complex plane and beyond.',
        items: [
          { icon: '🧭', label: 'The complex plane', detail: 'Plot a + bi as a point (a, b): real part across, imaginary part up. Where does 3 + 2i land? Where is i itself?' },
          { icon: '🔁', label: 'Powers of i cycle', detail: 'Work out i¹, i², i³, i⁴ — they cycle i, −1, −i, 1 and repeat. What is i¹⁰⁰?' },
          { icon: '🌉', label: 'Conjugates', detail: 'The conjugate of 2 + 3i is 2 − 3i. Multiply them: (2 + 3i)(2 − 3i) = 13, a real number. Why does the i vanish?' }
        ] }
    ]
  });
})();
