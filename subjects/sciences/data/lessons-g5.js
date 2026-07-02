/* Learning Atlas — Sciences · Grade 5 authored lessons (the reference slice).
   Two fully-built lessons on the 9-stage learning arc, mirroring Math's
   reference lessons: prior → discover → worked example → explore → practice →
   challenge → mastery → reflect → extend. The mastery step is the summative
   (graded) demonstration; its distractors are misconception-tagged so wrong
   picks surface on the completion screen and the coverage dashboard.

   Registered by concept id (see data/concepts.js) via SCI.Player.register.     */
(function () {
  const P = window.SCI.Player;

  /* ============================================================================
     5-PS1-1 · Matter Is Made of Particles
     Essential Standard. Big idea: everything is built from particles too small
     to see, with empty space between them, always moving — and that model
     explains what we observe (squeezing air, smells spreading, states of matter).
     ========================================================================== */
  P.register({
    concept: 'g5-particle-model',
    title: 'Matter Is Made of Particles',
    essentialQuestion: 'If matter is made of particles too small to see, how can we tell they’re there?',
    steps: [
      { kind: 'prior', title: 'Before we start',
        prompt: 'A clear balloon looks empty, but you can squeeze it and it pushes back. What do you think is inside?',
        options: ['Nothing — it’s empty', 'Air, made of tiny particles', 'A special gas with no parts', 'Just the balloon’s shape'] },

      { kind: 'discover', title: 'The particle model of matter',
        text: 'Everything around you — solid, liquid or gas — is made of <b>particles far too small to see</b>. Between the particles is <b>empty space</b>, and the particles are <b>always moving</b>. You can’t see a single particle, but you can see what a whole crowd of them <i>does</i>: air pushes back when squeezed, a smell drifts across a room, ice melts into water. This one idea — the <b>particle model</b> — explains all of it.',
        rule: 'Matter is made of particles too small to see, with space between them, always in motion.' },

      { kind: 'example', title: 'Reason it through', assess: 'formative',
        intro: 'Use the particle model to explain everyday things. Pick the best explanation for each.',
        component: 'workedExample',
        config: {
          problem: 'Why can you squeeze a sealed balloon, but not a full water bottle?',
          steps: [
            { text: 'A balloon is full of <b>gas</b> (air); the bottle is full of <b>liquid</b> (water). Both are made of particles.' },
            { ask: 'In which one do the particles have the MOST empty space between them?',
              choices: ['The gas in the balloon', 'The water in the bottle', 'They’re exactly the same'],
              answer: 'The gas in the balloon',
              why: 'Gas particles are spread far apart with lots of space — so they can be pushed closer together.',
              hint: 'Which can you squeeze into a smaller space?',
              misconceptions: { 'The water in the bottle': 'Liquids barely compress — their particles are already close together', 'They’re exactly the same': 'Gases have much more space between particles than liquids' } },
            { ask: 'So why can’t you squeeze the water bottle?',
              choices: ['Water particles are already packed close together', 'Water has no particles', 'The bottle is stronger'],
              answer: 'Water particles are already packed close together',
              why: 'With little space between them, liquid particles have almost nowhere to be pushed — so liquids barely compress.',
              hint: 'Think about the space between the particles.' }
          ],
          done: 'Same particle model, two different arrangements — that’s the power of the idea.'
        } },

      { kind: 'explore', title: 'Sort by particle arrangement',
        intro: 'Solids, liquids and gases are the SAME particles in different arrangements. Sort each example.',
        component: 'sortCards',
        config: {
          prompt: 'Tap a card, then tap the state its particles match.',
          bins: [
            { id: 'solid', label: 'Solid · packed & fixed' },
            { id: 'liquid', label: 'Liquid · close but sliding' },
            { id: 'gas', label: 'Gas · far apart & fast' }
          ],
          items: [
            { label: 'Ice cube', bin: 'solid', emoji: '🧊' },
            { label: 'Wooden block', bin: 'solid', emoji: '🧱' },
            { label: 'Water in a cup', bin: 'liquid', emoji: '💧' },
            { label: 'Juice', bin: 'liquid', emoji: '🧃' },
            { label: 'Air in a balloon', bin: 'gas', emoji: '🎈', misconception: 'A gas fills its container — its particles are spread far apart' },
            { label: 'Steam', bin: 'gas', emoji: '♨️' }
          ]
        } },

      { kind: 'practice', title: 'Check your thinking', assess: 'formative',
        component: 'problemSet',
        config: { problems: [
          { prompt: 'You smell cookies from another room. The particle model says…', choices: ['Smell particles travel through the air', 'The smell teleports', 'Air has no particles'], answer: 'Smell particles travel through the air', hint: 'Particles are always moving.' },
          { prompt: 'Which has the MOST empty space between its particles?', choices: ['A gas', 'A liquid', 'A solid'], answer: 'A gas', hint: 'Which one spreads to fill any container?' }
        ] } },

      { kind: 'challenge', title: 'Model it: heat up the particles', assess: 'formative', difficulty: 'challenge',
        intro: 'Add energy (heat) and watch the particles. Warm them until the matter becomes a gas.',
        component: 'simSlider',
        config: {
          prompt: 'Drag the temperature. Warmer particles move faster and spread out.',
          vars: [{ id: 'temp', label: 'Temperature', min: -20, max: 120, step: 5, value: 0, unit: '°C' }],
          outputs: [
            { id: 'speed', label: 'Particle speed', unit: '', max: 100, color: 'var(--m-3, #d97706)', fn: v => Math.round((v.temp + 20) / 140 * 100) },
            { id: 'spacing', label: 'Space between particles', unit: '', max: 100, color: 'var(--m-accent)', fn: v => Math.max(4, Math.round((v.temp) / 120 * 100)) }
          ],
          viz: v => v.temp < 0 ? '🧊 <b>Solid</b> — particles locked in place' : v.temp < 100 ? '💧 <b>Liquid</b> — particles sliding past each other' : '☁️ <b>Gas</b> — particles flying apart',
          goal: { text: 'Warm it past 100°C to boil it into a gas.', done: 'Boiling! The particles gained enough energy to spread into a gas.', test: v => v.temp >= 100 }
        } },

      { kind: 'mastery', title: 'Show what you know',
        component: 'problemSet',
        config: { problems: [
          { prompt: 'What is ALL matter made of?', choices: ['Particles too small to see', 'One solid piece', 'Only what we can see', 'Nothing at all'], answer: 'Particles too small to see',
            misconceptions: { 'One solid piece': 'Even solids are made of separate particles with space between them', 'Only what we can see': 'Particles are far too small to see — we infer them from what matter does' } },
          { prompt: 'Between the particles of matter there is mostly…', choices: ['Empty space', 'More solid stuff', 'Water', 'Nothing can be there'], answer: 'Empty space',
            misconceptions: { 'More solid stuff': 'The space between particles is empty — that’s why gases compress' } },
          { prompt: 'A balloon squashes because its gas particles…', choices: ['Have lots of space to be pushed closer', 'Disappear', 'Turn into liquid', 'Stop moving'], answer: 'Have lots of space to be pushed closer',
            misconceptions: { 'Disappear': 'Particles aren’t destroyed — they’re just pushed into the empty space between them' } },
          { prompt: 'Why can we NOT see a single particle of matter?', choices: ['It is far too small', 'It is invisible by magic', 'It is very fast only', 'It is made of light'], answer: 'It is far too small',
            misconceptions: { 'It is very fast only': 'Speed isn’t why — particles are simply far smaller than light can show' } }
        ] } },

      { kind: 'reflect', title: 'Think it over',
        prompt: 'You can’t see particles. What everyday evidence convinces you they’re real?',
        starters: ['I know particles are real because', 'A gas is different from a solid because', 'The particle model explains'] },

      { kind: 'extend', title: 'Go further',
        intro: 'Take the particle model further:',
        items: [
          { icon: '🔬', label: 'Brownian motion', detail: 'Watch pollen grains jiggle — pushed by particles you can’t see.' },
          { icon: '🎈', label: 'Try it at home', detail: 'Put a balloon over a bottle, warm the bottle in warm water, and watch the balloon inflate as the air particles spread out.' },
          { icon: '📈', label: 'Next: Conservation of matter', detail: 'If matter is particles, what happens to its weight when it melts or mixes?' }
        ] }
    ]
  });

  /* ============================================================================
     5-LS2-1 · Matter Cycles in Ecosystems
     Essential Standard. Big idea: matter is never used up — it moves in a cycle
     among producers, consumers, decomposers and the environment. Decomposers are
     the step learners most often forget.
     ========================================================================== */
  P.register({
    concept: 'g5-matter-cycle',
    title: 'Matter Cycles in Ecosystems',
    essentialQuestion: 'When a plant or animal dies, where does its matter go?',
    steps: [
      { kind: 'prior', title: 'Before we start',
        prompt: 'A fallen log slowly rots away to almost nothing over years. Where did all that material go?',
        options: ['It was destroyed', 'It became soil and nutrients that plants reuse', 'It floated into space', 'It turned into energy and vanished'] },

      { kind: 'discover', title: 'Matter moves in a cycle',
        text: 'Matter is <b>never created or destroyed</b> — it just moves. <b>Producers</b> (plants) build tissue from air, water and sunlight. <b>Consumers</b> (animals) eat producers or each other. When any organism dies, <b>decomposers</b> (fungi and bacteria) break it down into <b>nutrients in the soil</b> — which producers take up again. Round and round: the same matter is reused endlessly. The step people forget is the <b>decomposer</b> — without it, nutrients would never return to the soil.',
        rule: 'Producers → consumers → decomposers → soil nutrients → back to producers. Matter cycles; it is not used up.' },

      { kind: 'explore', title: 'Build the cycle',
        intro: 'Put one path of matter through an ecosystem in order — start with where the energy and matter enter.',
        component: 'orderList',
        config: {
          prompt: 'Tap the steps in order, from the sun back around to the soil.',
          arrow: '↓',
          items: ['☀️ Sun (energy in)', '🌿 Grass (producer)', '🐇 Rabbit (consumer)', '🦊 Fox (consumer)', '🍄 Decomposers break it down', '🟤 Nutrients return to soil']
        } },

      { kind: 'example', title: 'Trace the matter', assess: 'formative',
        intro: 'Follow one bit of matter as it cycles. Choose what happens at each step.',
        component: 'workedExample',
        config: {
          problem: 'A carbon-rich molecule starts inside a blade of grass. Trace where it goes.',
          steps: [
            { text: 'The grass is a <b>producer</b> — it built this molecule using air, water and sunlight.' },
            { ask: 'A rabbit eats the grass. The molecule is now…',
              choices: ['In the rabbit’s body', 'Destroyed', 'Turned into sunlight'],
              answer: 'In the rabbit’s body',
              why: 'Eating transfers matter — the molecule moves from producer to consumer.',
              hint: 'Eating moves matter from one organism to another.',
              misconceptions: { 'Destroyed': 'Matter isn’t destroyed by being eaten — it’s transferred', 'Turned into sunlight': 'Energy came FROM sunlight; matter doesn’t turn back into light' } },
            { ask: 'The rabbit dies. What returns its matter to the soil?',
              choices: ['Decomposers', 'Producers', 'The sun'],
              answer: 'Decomposers',
              why: 'Fungi and bacteria break the body down into nutrients the soil — and new plants — can use.',
              hint: 'Which organisms break down what’s dead?' }
          ],
          done: 'The molecule is back in the soil, ready for a new plant. The cycle is closed.'
        } },

      { kind: 'practice', title: 'Check your thinking', assess: 'formative',
        component: 'problemSet',
        config: { problems: [
          { prompt: 'Which organisms return matter to the soil?', choices: ['Decomposers', 'Producers', 'Predators'], answer: 'Decomposers', hint: 'Think fungi and bacteria.' },
          { prompt: 'In a matter cycle, the total amount of matter…', choices: ['Stays the same, it just moves', 'Slowly disappears', 'Is created by animals'], answer: 'Stays the same, it just moves', hint: 'Matter is not created or destroyed.' }
        ] } },

      { kind: 'challenge', title: 'Model it: remove the decomposers', assess: 'formative', difficulty: 'challenge',
        intro: 'Change how many decomposers are in the ecosystem and watch the soil. Find the healthy balance.',
        component: 'simSlider',
        config: {
          prompt: 'Fewer decomposers means dead matter piles up and nutrients don’t return.',
          vars: [{ id: 'decomp', label: 'Decomposers', min: 0, max: 100, step: 5, value: 0, unit: '%' }],
          outputs: [
            { id: 'nutrients', label: 'Soil nutrients', unit: '%', max: 100, color: 'var(--m-good)', fn: v => v.decomp },
            { id: 'deadpile', label: 'Dead matter piled up', unit: '%', max: 100, color: 'var(--m-3, #d97706)', fn: v => 100 - v.decomp }
          ],
          viz: v => v.decomp < 40 ? '🍂 Dead matter piling up — the cycle is stalling' : '🌱 Nutrients flowing — plants can grow again',
          goal: { text: 'Raise decomposers until soil nutrients reach at least 60%.', done: 'Balanced! Decomposers keep the matter cycling back to the plants.', test: v => v.decomp >= 60 }
        } },

      { kind: 'mastery', title: 'Show what you know',
        component: 'problemSet',
        config: { problems: [
          { prompt: 'What is the role of decomposers in the cycle of matter?', choices: ['Break down dead matter into soil nutrients', 'Make food from sunlight', 'Hunt other animals for energy', 'Destroy matter completely'], answer: 'Break down dead matter into soil nutrients',
            misconceptions: { 'Make food from sunlight': 'That’s producers (plants), not decomposers', 'Destroy matter completely': 'Decomposers move matter back to the soil — they don’t destroy it' } },
          { prompt: 'Producers (plants) get the matter to build their tissue mostly from…', choices: ['Air and water', 'Soil rocks only', 'Eating animals', 'Sunlight itself'], answer: 'Air and water',
            misconceptions: { 'Sunlight itself': 'Sunlight provides energy, not matter — the matter comes from air and water' } },
          { prompt: 'A field is sprayed so no decomposers survive. Over time, the soil will…', choices: ['Run low on nutrients as dead matter piles up', 'Get richer forever', 'Stay exactly the same', 'Turn into a gas'], answer: 'Run low on nutrients as dead matter piles up',
            misconceptions: { 'Get richer forever': 'Without decomposers, nutrients stay locked in dead matter instead of returning to the soil' } },
          { prompt: 'Following matter around an ecosystem, the total amount of matter…', choices: ['Is conserved — it cycles, never used up', 'Grows each cycle', 'Shrinks each cycle', 'Depends on the weather'], answer: 'Is conserved — it cycles, never used up',
            misconceptions: { 'Shrinks each cycle': 'Matter is conserved — it moves between organisms and the environment, it isn’t lost' } }
        ] } },

      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why are decomposers just as important to an ecosystem as plants and animals?',
        starters: ['Decomposers matter because', 'If matter didn’t cycle', 'The step I almost forgot was'] },

      { kind: 'extend', title: 'Go further',
        intro: 'Keep following the matter:',
        items: [
          { icon: '🪱', label: 'Start a compost jar', detail: 'Watch decomposers turn scraps into soil over a few weeks — the cycle in a jar.' },
          { icon: '🌍', label: 'The carbon cycle', detail: 'The same idea at planet scale — carbon moving among air, life, oceans and rock.' },
          { icon: '📈', label: 'Next: Earth’s systems interact', detail: 'How the living world (biosphere) trades matter with air, water and land.' }
        ] }
    ]
  });
})();
