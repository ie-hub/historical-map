/* Learning Atlas — Mathematics · Algebra I lessons: the functions strand.
   Two knowledge-graph lessons that teach the LANGUAGE of functions before
   testing it. Domain & Range (AI.F.3) grounds input/output with a function
   machine, then reasons out the two classic legal restrictions (no dividing by
   zero, no square-rooting a negative). Interpreting Graphs (AI.F.4) reads a
   story off a curve — flat means stopped, steep means fast, intercepts and
   max/min carry plain-English meaning. Teaching-first: every lesson interleaves
   worked examples (workedExample — reveal or supply each line) with focused
   discover cards BEFORE the practice, and every summative distractor is tagged
   with the misconception it reveals. Registered on MATH.Player.               */
(function () {
  const P = window.MATH.Player, U = window.MATH.util;
  const reg = P.register;

  /* ---- AI.F.3 · Domain & Range ------------------------------------------- */
  reg({
    concept: 'domain-range', title: 'Domain & Range',
    standards: ['AI.F.3'],
    steps: [
      { kind: 'teach', title: 'What domain and range actually name',
        lead: 'A function is a <b>machine</b>: you feed it an input, it hands back an output. The <b>domain</b> is the full list of inputs the machine will <b>accept</b>; the <b>range</b> is every output it can <b>produce</b>. The whole trick to a domain is spotting the inputs that would <b>break</b> the machine — everything else is allowed.',
        anatomy: {
          expr: '<span class="tint-y">y</span> = f(<span class="tint-x">x</span>)',
          parts: [
            { sym: 'x', tone: 'x', name: 'the input', desc: 'the value you feed in — every legal x together is the <b>domain</b>' },
            { sym: 'y', tone: 'y', name: 'the output', desc: 'what comes back out — every possible y together is the <b>range</b>' },
            { sym: '÷0', tone: 'm', name: 'a denominator', desc: 'if an x makes the bottom <b>0</b>, that input is banned — you can’t divide by zero' },
            { sym: '√−', tone: 'b', name: 'a radicand', desc: 'the stuff under a √ can’t go <b>negative</b>, so those inputs are banned too' }
          ]
        },
        moves: [
          { label: 'Denominator hits 0', text: '→ that one input is excluded — 1/(x−3) bans only x = 3, punching a single hole.' },
          { label: 'Radicand goes negative', text: '→ a whole stretch is excluded — √(x−2) needs x ≥ 2, cutting off everything below.' },
          { label: 'No bottom, no root', text: '→ nothing can break, so the domain is <b>all real numbers</b> (like 2x + 1).' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'For <b>f(x) = 1/(x − 3)</b>, ask “which input is illegal?” The bottom is 0 exactly at x = 3, so that lone input is banned and every other real number sails through.',
          math: 'domain: all real x, x ≠ 3'
        },
        takeaway: 'x goes IN (domain), y comes OUT (range) — and a domain is what’s left after you remove the inputs that break the machine.' },

      { kind: 'prior', title: 'What do you think?',
        prompt: 'A function is a machine: you feed it an <b>input</b> x, it hands back an <b>output</b> y. For <b>f(x) = 1/x</b>, is there any number you simply <b>cannot</b> feed in?',
        options: ['Yes — 0, because 1 ÷ 0 is undefined', 'No — any number is fine', 'Only negative numbers are banned'] },

      { kind: 'example', title: 'Which inputs are illegal?', component: 'workedExample',
        intro: 'Domain is just the list of inputs the machine can actually handle. To find it, hunt for the inputs that would BREAK the machine — everything else is allowed.',
        config: {
          problem: 'Find the domain of f(x) = 1/(x − 3)',
          steps: [
            { text: 'The only way this machine breaks is if the denominator becomes 0 — you can never divide by zero.',
              math: 'danger: x − 3 = 0' },
            { ask: 'Which single input makes the denominator zero?',
              choices: ['x = 3', 'x = −3', 'x = 0'], answer: 'x = 3',
              why: 'x − 3 = 0 exactly when x = 3, so that one input is banned.',
              hint: 'Set x − 3 equal to 0 and solve.',
              misconceptions: { 'x = −3': 'That’s the sign flipped — x − 3 = 0 gives x = +3, not −3', 'x = 0': 'x = 0 gives a denominator of −3, which is fine — 1/(−3) is a real number' },
              math: 'x − 3 = 0 → x = 3' },
            { text: 'Every OTHER real number works. So the domain is all reals except that one hole.',
              math: 'domain: all real x, x ≠ 3', note: 'One banned input does not shrink the domain to a single value — it just punches one hole in it.' },
            { text: 'In interval language, the number line is cut at 3:',
              math: '(−∞, 3) ∪ (3, ∞)' }
          ],
          done: 'To find a domain, ask “what inputs are illegal?” Here only x = 3 breaks it, so the domain is every real number except 3.'
        } },

      { kind: 'discover', title: 'In goes to the domain, out to the range',
        text: 'The <b>domain</b> is the set of every <b>input</b> (x-value) the function can accept; the <b>range</b> is the set of every <b>output</b> (y-value) it can produce. Find the domain by asking <b>“which inputs are illegal?”</b> — then the domain is everything else. Keep the words straight: <b>x is IN, y comes OUT</b>. A domain (or range) is almost always a <b>set or interval</b>, not one lonely number.',
        rule: 'domain = allowed inputs (x) · range = possible outputs (y)' },

      { kind: 'explore', title: 'Feed the machine', intro: 'Ground the language first: you type the INPUT, the machine returns the OUTPUT. Every legal input you try is part of the domain; every answer that comes back is part of the range.', component: 'functionMachine', config: { mode: 'apply', rounds: 3 } },

      { kind: 'example', title: 'A square root has its own rule', component: 'workedExample',
        intro: 'A second machine breaks differently. You can never take the square root of a negative number, so whatever sits UNDER the root must stay ≥ 0.',
        config: {
          problem: 'Find the domain of g(x) = √(x − 2)',
          steps: [
            { text: 'The radicand — the stuff under the root — must be zero or positive. Negative inside is illegal.',
              math: 'require: x − 2 ≥ 0' },
            { ask: 'Solve x − 2 ≥ 0. Which inputs are allowed?',
              choices: ['x ≥ 2', 'x ≤ 2', 'x ≠ 2'], answer: 'x ≥ 2',
              why: 'Add 2 to both sides: x ≥ 2. At x = 2 the inside is 0 (√0 = 0, allowed); below 2 it goes negative.',
              hint: 'Add 2 to both sides of x − 2 ≥ 0.',
              misconceptions: { 'x ≤ 2': 'That lets the inside go negative — try x = 0: √(0 − 2) = √(−2) is not real', 'x ≠ 2': 'That’s the divide-by-zero rule from the LAST problem — a root bans negatives, not the single value 2' },
              math: 'x − 2 ≥ 0 → x ≥ 2' },
            { text: 'So the domain starts at 2 and runs upward, including 2 itself:',
              math: 'domain: x ≥ 2, or [2, ∞)' },
            { text: 'And the range? A square root never returns a negative, and its smallest output is √0 = 0.',
              math: 'range: y ≥ 0, or [0, ∞)', note: 'Reading a range off a curve is the same idea: find the LOWEST and HIGHEST y the graph ever reaches.' }
          ],
          done: 'Under a root: set the inside ≥ 0 and solve. Here x ≥ 2, and because a root never returns a negative, the range is y ≥ 0.'
        } },

      { kind: 'discover', title: 'Two rules that break a machine',
        text: 'Only two things restrict the domain of the functions you meet now. <b>Denominators can’t be zero</b> — set the bottom ≠ 0 and exclude those inputs (1/(x−3) bans x = 3). <b>Radicands can’t be negative</b> — set what’s under the √ to ≥ 0 (√(x−2) needs x ≥ 2). To read the <b>range from a graph</b>, sweep from the <b>lowest</b> y the curve reaches to the <b>highest</b>: a parabola opening up from vertex (1, −4) has range y ≥ −4.',
        rule: 'denominator ≠ 0 · radicand ≥ 0 · range = lowest y up to highest y' },

      { kind: 'practice', difficulty: 'easy', title: 'Find the domain', component: 'problemSet',
        config: { problems: [
          { prompt: 'Domain of <b>f(x) = 1/(x − 5)</b>?', answer: 'all reals except x = 5', choices: ['all reals except x = 5', 'all reals except x = −5', 'x ≥ 5'], hint: 'What input makes the bottom zero?' },
          { prompt: 'Domain of <b>g(x) = √(x − 4)</b>?', answer: 'x ≥ 4', choices: ['x ≥ 4', 'x ≤ 4', 'all real numbers'], hint: 'The inside of the root must be ≥ 0.' },
          { prompt: 'Domain of <b>h(x) = 2x + 1</b>?', answer: 'all real numbers', choices: ['all real numbers', 'x ≠ 0', 'x ≥ 0'], hint: 'No denominator and no root — nothing to break.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Domain and range together', component: 'problemSet',
        config: { problems: [
          { prompt: 'A parabola opens upward with vertex (0, 3). Its <b>range</b> is…', answer: 'y ≥ 3', choices: ['y ≥ 3', 'y ≤ 3', 'x ≥ 3'], hint: 'The vertex is the LOWEST point; sweep upward from there.' },
          { prompt: 'Domain of <b>f(x) = √(x + 6)</b>?', answer: 'x ≥ −6', choices: ['x ≥ −6', 'x ≥ 6', 'x ≤ −6'], hint: 'x + 6 ≥ 0 → subtract 6 from both sides.' }
        ] } },
      { kind: 'mastery', title: 'Domain & range check', component: 'problemSet',
        config: { problems: [
          { prompt: 'Domain of <b>f(x) = 1/(x + 2)</b>?', answer: 'all reals except x = −2', choices: ['all reals except x = −2', 'all reals except x = 2', 'x ≥ −2', 'y ≠ −2'], hint: 'Set the denominator to zero.', misconceptions: { 'all reals except x = 2': 'Sign slip — x + 2 = 0 gives x = −2, not +2', 'x ≥ −2': 'That’s the square-root rule — a denominator bans one value, it doesn’t cut off a whole half-line', 'y ≠ −2': 'Domain is about INPUTS (x), not outputs (y)' } },
          { prompt: 'Domain of <b>g(x) = √(x − 1)</b>?', answer: 'x ≥ 1', choices: ['x ≥ 1', 'x ≤ 1', 'x ≠ 1', 'all real numbers'], hint: 'Inside the root must be ≥ 0.', misconceptions: { 'x ≤ 1': 'That makes the inside negative — √(negative) is not real', 'x ≠ 1': 'That’s the denominator rule — a root restricts a whole range, not one point', 'all real numbers': 'Forgot the radicand rule — negatives under a root are illegal' } },
          { prompt: 'The RANGE of a function is the set of all its…', answer: 'outputs (y-values)', choices: ['outputs (y-values)', 'inputs (x-values)', 'x-intercepts', 'slopes'], hint: 'Which side comes OUT of the machine?', misconceptions: { 'inputs (x-values)': 'You swapped them — inputs are the DOMAIN; the range is the outputs' } },
          { prompt: 'A parabola opens downward with vertex (2, 5). Its range is…', answer: 'y ≤ 5', choices: ['y ≤ 5', 'y ≥ 5', 'x ≤ 5', 'all real numbers'], hint: 'Opening down means the vertex is the HIGHEST point.', misconceptions: { 'y ≥ 5': 'Opening DOWN makes 5 the maximum — outputs go 5 and below', 'x ≤ 5': 'Range is about y (outputs), not x', 'all real numbers': 'The graph never rises above y = 5, so the range is capped' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'How do you decide a function’s domain? What are the two things that can make an input illegal, and how do you find the range from a graph?',
        starters: ['The domain is every input except', 'A denominator restricts the domain when', 'To read the range off a graph I look for'] },
      { kind: 'extend', title: 'Go further', intro: 'Push the input/output idea.',
        items: [
          { icon: '🚫', label: 'Both rules at once', detail: 'What’s the domain of √(x − 2) / (x − 5)? Two restrictions apply: the inside ≥ 0 AND the bottom ≠ 0. Combine them.' },
          { icon: '🌡️', label: 'Domain in real life', detail: 'A phone’s battery percent is a function of time. What’s the natural range of the outputs, no matter the phone?' },
          { icon: '🔁', label: 'Swap them', detail: 'When you find the inverse of a function, the domain and range trade places. Try it with f(x) = √x — why does that happen?' }
        ] }
    ]
  });

  /* ---- AI.F.4 · Interpreting Graphs -------------------------------------- */
  reg({
    concept: 'interpret-graphs', title: 'Interpreting Graphs',
    standards: ['AI.F.4'],
    steps: [
      { kind: 'teach', title: 'A graph is a story you can read',
        lead: 'A graph isn’t just dots — it’s a <b>story told in shape</b>. Where the curve climbs, the quantity is growing; where it falls, shrinking; where it goes flat, nothing is changing. Learn to read the shape and the picture tells you exactly what’s happening, moment by moment.',
        anatomy: {
          expr: 'the <span class="tint-x">shape</span> → the <span class="tint-y">story</span>',
          parts: [
            { sym: '↗', tone: 'm', name: 'rising', desc: 'the curve goes uphill → the function is <b>increasing</b> (output growing)' },
            { sym: '↘', tone: 'x', name: 'falling', desc: 'the curve goes downhill → the function is <b>decreasing</b> (output shrinking)' },
            { sym: '—', tone: 'b', name: 'flat', desc: 'a horizontal stretch → <b>no change</b>; steepness 0, not necessarily zero height' },
            { sym: '●', tone: 'y', name: 'intercepts & turns', desc: 'y-intercept = the <b>start</b> (x = 0); x-intercepts = <b>zeros</b>; a peak is a max, a valley a min' }
          ]
        },
        moves: [
          { label: 'Steeper segment', text: '→ the quantity is changing FASTER — on a distance–time graph, that’s more speed.' },
          { label: 'Flat segment', text: '→ the value holds steady: on a walk, you’ve <b>stopped</b> — flat means no change, not zero.' },
          { label: 'Reach a peak, then fall', text: '→ that peak is the <b>maximum</b>; its y is HOW MUCH, its x is WHEN it happens.' }
        ],
        example: {
          lead: 'A concrete picture',
          text: 'A cyclist’s distance–time graph rises steeply, then goes flat, then rises gently. Read straight off the shape: fast, then <b>stopped</b>, then slow — no numbers needed.',
          math: 'steep = fast · flat = stopped · gentle = slow'
        },
        takeaway: 'Don’t confuse steep with high — steepness is the RATE of change, height is the VALUE.' },

      { kind: 'prior', title: 'What do you think?',
        prompt: 'On a <b>distance–time</b> graph of a walk, a segment goes perfectly <b>flat</b> (horizontal) for a while. What is happening during that flat stretch?',
        options: ['Standing still — distance isn’t changing', 'Walking at top speed', 'Walking backward'] },

      { kind: 'example', title: 'Read a journey off the curve', component: 'workedExample',
        intro: 'On a distance–time graph, the STEEPNESS of a segment is the speed. Flat means no distance is piling up — you’re stopped. The steepest climb is the fastest.',
        config: {
          problem: 'A cyclist’s ride: A rises steeply, B is flat, C rises gently, then D rises steeply again. Read each part.',
          steps: [
            { text: 'Height on this graph is distance from home; going right is time passing. The slope of each piece is how fast distance grows — the speed.',
              math: 'steepness of the line = speed' },
            { ask: 'Segment B is perfectly horizontal. What is the cyclist doing?',
              choices: ['Stopped — distance stays the same', 'Riding fastest', 'Turning around'], answer: 'Stopped — distance stays the same',
              why: 'A flat line means the distance value never changes as time passes — no ground is covered, so speed is 0.',
              hint: 'If the height (distance) isn’t rising, how much ground is being covered?',
              misconceptions: { 'Riding fastest': 'Fastest is the STEEPEST segment, not the flat one — flat means no change', 'Turning around': 'Heading back home would make distance DECREASE (the line drops), not stay flat' },
              math: 'flat → distance constant → speed = 0' },
            { ask: 'Segments A and D are both the steepest. What does that tell you?',
              choices: ['Those are the fastest parts of the ride', 'Those are the highest points', 'Those are where it stops'], answer: 'Those are the fastest parts of the ride',
              why: 'Steeper means distance grows faster per unit time — a bigger slope is a bigger speed.',
              hint: 'Speed is the slope — steeper line, more speed.',
              misconceptions: { 'Those are the highest points': 'Steep is about the SLOPE, not the height — a steep segment can start low', 'Those are where it stops': 'Stopping is a FLAT segment; steep is the opposite' } },
            { text: 'Put the story together — the whole ride, read straight from the shape:',
              math: 'A fast · B stopped · C slow · D fast again' }
          ],
          done: 'On a distance–time graph: flat = stopped, steepest = fastest, downhill = returning. The slope is the speed.'
        } },

      { kind: 'discover', title: 'Every feature tells a story',
        text: 'A graph is a sentence in pictures. The <b>y-intercept</b> is the <b>starting value</b> (where x = 0). The <b>x-intercepts</b> (zeros) are where the output is 0 — the graph crosses the axis. Where the curve <b>rises</b> it is <b>increasing</b>; where it <b>falls</b> it is <b>decreasing</b>. A peak is a <b>maximum</b>, a valley a <b>minimum</b>. And <b>steepness = rate</b>: the faster the line climbs, the faster the quantity is changing.',
        rule: 'y-intercept = start · x-intercepts = zeros · up/down = increasing/decreasing · steepness = rate' },

      { kind: 'explore', title: 'Match the feature', intro: 'Warm up the vocabulary: match each graph description to its plain-English meaning before you read a full curve.', component: 'problemSet',
        config: { problems: [
          { prompt: 'A graph <b>crosses the y-axis</b> at (0, 8). That 8 is the…', answer: 'starting value', choices: ['starting value', 'maximum', 'a zero of the function'], hint: 'The y-intercept is the value when x = 0.' },
          { prompt: 'A curve <b>crosses the x-axis</b> at x = 3. At that point the output is…', answer: '0', choices: ['0', '3', 'the maximum'], hint: 'On the x-axis, y = 0.' },
          { prompt: 'A section of a graph goes <b>downhill</b> from left to right. There the function is…', answer: 'decreasing', choices: ['decreasing', 'increasing', 'negative'], hint: 'Falling as x grows means the output is shrinking.' }
        ] } },

      { kind: 'example', title: 'Read the key features of a curve', component: 'workedExample',
        intro: 'A parabola-shaped profit curve. The same vocabulary — intercepts, max, increasing/decreasing — turns the picture into meaning.',
        config: {
          problem: 'A profit curve (in $1000s) starts at (0, −2), crosses zero at x = 1 and x = 5, peaks at (3, 4), then falls. Read its features.',
          steps: [
            { text: 'The y-intercept is the value at x = 0 — the starting point of the story.',
              math: 'y-intercept: (0, −2) → started $2000 in the red' },
            { ask: 'The curve crosses the x-axis at x = 1 and x = 5. What is true there?',
              choices: ['Profit is exactly 0 (break-even)', 'Profit is at its maximum', 'Time is 0'], answer: 'Profit is exactly 0 (break-even)',
              why: 'An x-intercept is where the output y = 0 — here, where profit is neither positive nor negative.',
              hint: 'On the x-axis the output value is 0.',
              misconceptions: { 'Profit is at its maximum': 'The maximum is the PEAK at (3, 4), not a crossing', 'Time is 0': 'Time 0 is the y-intercept at x = 0 — these crossings are at x = 1 and 5' } },
            { ask: 'The high point is (3, 4). What is the MAXIMUM PROFIT, and WHEN does it happen?',
              choices: ['$4000, at x = 3', '$3000, at x = 4', 'x = 3 is the profit'], answer: '$4000, at x = 3',
              why: 'The peak’s y-value (4, i.e. $4000) is the maximum profit; its x-value (3) is WHEN it happens. Read both coordinates.',
              hint: 'The height (y) is HOW MUCH; the horizontal position (x) is WHEN.',
              misconceptions: { '$3000, at x = 4': 'You swapped the coordinates — the point is (3, 4): x = 3, y = 4', 'x = 3 is the profit': 'x = 3 is WHEN the max happens; the profit amount is the y-value, 4' } },
            { text: 'After the peak the curve heads downhill — profit is falling. Name that interval:',
              math: 'decreasing for x > 3', note: 'Before the peak (x < 3) it was increasing; the max is exactly where it switches.' }
          ],
          done: 'y-intercept = start, x-intercepts = break-even zeros, the peak’s y is the max VALUE and its x is WHEN, and past the peak the curve decreases.'
        } },

      { kind: 'discover', title: 'Steep is not the same as high',
        text: 'The classic trap: confusing <b>steepness</b> with <b>height</b>. A line can be very <b>steep but still low</b> (climbing fast from near the bottom), or nearly <b>flat but very high</b> (barely changing, way up the axis). Steepness is the <b>rate of change</b>; height is the <b>value</b>. And a <b>flat</b> line does NOT mean zero — it means <b>no change</b>: a horizontal line at y = 100 sits at 100 the whole time, it just isn’t moving.',
        rule: 'steepness = how FAST it changes · height = the VALUE · flat = no change, not zero' },

      { kind: 'practice', difficulty: 'easy', title: 'Read the graph', component: 'problemSet',
        config: { problems: [
          { prompt: 'On a distance–time graph, the <b>steepest</b> segment is where the object moves…', answer: 'fastest', choices: ['fastest', 'slowest', 'backward'], hint: 'Steeper slope means more distance per unit time.' },
          { prompt: 'A function <b>rises</b> from left to right across an interval. There it is…', answer: 'increasing', choices: ['increasing', 'decreasing', 'at a maximum'], hint: 'Going uphill as x grows.' },
          { prompt: 'A graph’s <b>y-intercept</b> tells you the…', answer: 'starting value (at x = 0)', choices: ['starting value (at x = 0)', 'zero of the function', 'maximum'], hint: 'The y-intercept is where x = 0.' }
        ] } },
      { kind: 'challenge', difficulty: 'challenge', title: 'Careful reading', component: 'problemSet',
        config: { problems: [
          { prompt: 'A distance–time graph is <b>flat</b> at height 50 m for 10 seconds. During that time the object is…', answer: 'stopped, 50 m from the start', choices: ['stopped, 50 m from the start', 'moving at 50 m/s', 'at the start line'], hint: 'Flat = no change in distance; the height 50 is WHERE it waits.' },
          { prompt: 'Curve A is steep but sits low; curve B is nearly flat but sits high. Which is changing FASTER?', answer: 'A — steepness is the rate', choices: ['A — steepness is the rate', 'B — it’s higher up', 'They change at the same rate'], hint: 'Rate of change is steepness, not height.' }
        ] } },
      { kind: 'mastery', title: 'Graph-reading check', component: 'problemSet',
        config: { problems: [
          { prompt: 'A distance–time graph runs <b>horizontal</b> for 5 seconds at 20 m. The object is…', answer: 'stopped (no change in distance)', choices: ['stopped (no change in distance)', 'moving at 20 m/s', 'at distance 0', 'speeding up'], hint: 'Horizontal means the distance value is not changing.', misconceptions: { 'moving at 20 m/s': 'Confusing height with rate — a FLAT line has slope 0, so speed is 0', 'at distance 0': 'A flat line at 20 means the value is 20, not 0 — flat is “no change,” not “zero”', 'speeding up': 'Speeding up would make the line get STEEPER, not stay flat' } },
          { prompt: 'A curve peaks at the point (4, 9). Its MAXIMUM VALUE is…', answer: '9, occurring at x = 4', choices: ['9, occurring at x = 4', '4, occurring at x = 9', 'both 4 and 9', '13'], hint: 'The value is the y-coordinate; when it happens is the x-coordinate.', misconceptions: { '4, occurring at x = 9': 'Coordinates swapped — (4, 9) means x = 4, y = 9, so the max value is 9', 'both 4 and 9': 'One number is WHEN (x = 4), the other is the value (y = 9) — they aren’t interchangeable' } },
          { prompt: 'A graph crosses the <b>x-axis</b> at x = −3 and x = 2. These are the function’s…', answer: 'zeros (x-intercepts)', choices: ['zeros (x-intercepts)', 'y-intercepts', 'maximum points', 'the starting values'], hint: 'Where the graph meets the x-axis, the output is 0.', misconceptions: { 'y-intercepts': 'The y-intercept is where x = 0 (one point); these are where y = 0', 'maximum points': 'Crossings are where y = 0, not the peak' } },
          { prompt: 'Line P is steep and low; line Q is flat and high. Which statement is correct?', answer: 'P changes faster; Q has larger values', choices: ['P changes faster; Q has larger values', 'Q changes faster because it’s higher', 'P has larger values because it’s steep', 'They are identical'], hint: 'Separate rate (steepness) from value (height).', misconceptions: { 'Q changes faster because it’s higher': 'Height is not rate — a flat line barely changes no matter how high it sits', 'P has larger values because it’s steep': 'Steepness is the rate of change, not the value — P is described as low' } }
        ] } },
      { kind: 'reflect', title: 'Think it over',
        prompt: 'How do you translate a graph’s shape into a story? What does a flat segment mean, and why is steep different from high?',
        starters: ['A flat segment means', 'Steepness tells me the rate because', 'The y-intercept and x-intercepts mean'] },
      { kind: 'extend', title: 'Go further', intro: 'Read graphs in the wild.',
        items: [
          { icon: '🚗', label: 'Sketch your commute', detail: 'Draw a distance–time graph of a trip with a stop at a red light. Which segment is flat? Which is steepest?' },
          { icon: '📉', label: 'Positive vs negative', detail: 'Find where a curve is ABOVE the x-axis (function positive) and BELOW it (negative). How do the zeros mark the switch?' },
          { icon: '📰', label: 'Spot a misleading graph', detail: 'News charts sometimes exaggerate steepness by cropping the y-axis. Find one and explain how the trick works.' }
        ] }
    ]
  });
})();
