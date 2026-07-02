/* Life Explorer — topic: the Human Body Systems.
   A `kind:'diagram'` topic: a shaded, textbook-style front-view figure. Each
   organ is a <g class="part" data-part="id"> in its naturalistic colour; the
   body *system* it belongs to is shown in the info rail and the legend.        */
(function () {
  window.BIO = window.BIO || { topics: {} };

  const parts = [
    { id: 'brain', name: 'Brain', category: 'nervous',
      summary: 'The body’s control centre. It processes information, controls movement, and is the seat of thought, memory and emotion.',
      functions: ['Controls thought, memory and emotion', 'Coordinates movement and balance', 'Interprets signals from the senses'],
      facts: [['System', 'Nervous'], ['Neurons', '~86 billion'], ['Uses', '~20% of the body’s energy']],
      analogy: 'The body’s central computer.', related: ['spinal-cord'] },
    { id: 'spinal-cord', name: 'Spinal cord', category: 'nervous',
      summary: 'A bundle of nerves running down the spine that carries messages between the brain and the rest of the body.',
      functions: ['Relays signals to and from the brain', 'Controls reflexes'],
      facts: [['System', 'Nervous'], ['Protected by', 'The spine (vertebrae)']],
      analogy: 'The body’s main information highway.', related: ['brain'] },
    { id: 'heart', name: 'Heart', category: 'circulatory',
      summary: 'A muscular pump that pushes blood around the body, delivering oxygen and nutrients and carrying away waste.',
      functions: ['Pumps blood through the body', 'Delivers oxygen and nutrients', 'Beats ~100,000 times a day'],
      facts: [['System', 'Circulatory'], ['Chambers', '4'], ['Rate', '~60–100 beats/min']],
      analogy: 'The pump at the centre of the plumbing.', related: ['lungs'] },
    { id: 'lungs', name: 'Lungs', category: 'respiratory',
      summary: 'A pair of spongy organs that take in oxygen and remove carbon dioxide from the blood.',
      functions: ['Take in oxygen when you breathe in', 'Release carbon dioxide when you breathe out', 'Pass oxygen into the blood'],
      facts: [['System', 'Respiratory'], ['Count', '2'], ['Contain', '~300 million air sacs']],
      analogy: 'Bellows that trade stale air for fresh.', related: ['trachea', 'heart'] },
    { id: 'trachea', name: 'Trachea', category: 'respiratory',
      summary: 'The windpipe — the tube that carries air from the throat down to the lungs.',
      functions: ['Carries air to and from the lungs', 'Filters and warms incoming air'],
      facts: [['System', 'Respiratory'], ['Also called', 'The windpipe']],
      analogy: 'The air duct into the lungs.', related: ['lungs'] },
    { id: 'stomach', name: 'Stomach', category: 'digestive',
      summary: 'A muscular sac that mixes food with acid and enzymes to begin breaking it down.',
      functions: ['Stores swallowed food', 'Mixes food with digestive acid', 'Begins breaking down proteins'],
      facts: [['System', 'Digestive'], ['pH', 'Very acidic (~1.5–3.5)']],
      analogy: 'A churning mixing vat.', related: ['liver', 'intestines'] },
    { id: 'liver', name: 'Liver', category: 'digestive',
      summary: 'A large organ that processes nutrients, filters toxins from the blood and makes bile to digest fats.',
      functions: ['Filters toxins from the blood', 'Makes bile to digest fats', 'Stores energy and vitamins'],
      facts: [['System', 'Digestive'], ['Largest', 'Internal organ']],
      analogy: 'The body’s chemical processing plant.', related: ['stomach', 'intestines'] },
    { id: 'intestines', name: 'Intestines', category: 'digestive',
      summary: 'Long coiled tubes where most nutrients and water are absorbed from digested food.',
      functions: ['Absorb nutrients into the blood', 'Absorb water', 'Form and remove waste'],
      facts: [['System', 'Digestive'], ['Small intestine', '~6–7 m long']],
      analogy: 'A long absorption pipeline.', related: ['stomach', 'liver'] },
    { id: 'kidneys', name: 'Kidneys', category: 'excretory',
      summary: 'A pair of bean-shaped organs that filter waste and excess water from the blood to make urine.',
      functions: ['Filter waste from the blood', 'Balance water and salts', 'Produce urine'],
      facts: [['System', 'Excretory'], ['Count', '2'], ['Filter', '~180 L of blood/day']],
      analogy: 'The body’s water-treatment filters.', related: ['bladder'] },
    { id: 'bladder', name: 'Bladder', category: 'excretory',
      summary: 'A stretchy sac that stores urine until it leaves the body.',
      functions: ['Stores urine', 'Signals when it needs emptying'],
      facts: [['System', 'Excretory'], ['Holds', '~400–600 mL']],
      analogy: 'A holding tank before release.', related: ['kidneys'] },
    { id: 'ribcage', name: 'Ribcage', category: 'skeletal',
      summary: 'The cage of bones that protects the heart and lungs and supports the chest.',
      functions: ['Protects the heart and lungs', 'Supports breathing muscles', 'Gives the chest its shape'],
      facts: [['System', 'Skeletal'], ['Ribs', '12 pairs']],
      analogy: 'A protective cage around the vital organs.', related: ['heart', 'lungs'] },
    { id: 'muscles', name: 'Skeletal muscles', category: 'muscular',
      summary: 'Muscles attached to bones that contract to move the body. They work in pairs to pull joints.',
      functions: ['Contract to move the skeleton', 'Work in opposing pairs', 'Maintain posture and produce heat'],
      facts: [['System', 'Muscular'], ['Count', '~600 muscles']],
      analogy: 'The engines and cables that move the frame.', related: ['ribcage'] },
  ];

  const lab = (x, y, t, tx, ty, anchor) =>
    `<line class="lead-nat" x1="${x}" y1="${y}" x2="${tx}" y2="${ty}"/>` +
    `<circle class="pin-nat" cx="${tx}" cy="${ty}" r="3.4"/>` +
    `<text class="plabel" x="${x}" y="${y + 4}" text-anchor="${anchor}">${t}</text>`;

  const svg = `
  <svg viewBox="0 0 760 720" xmlns="http://www.w3.org/2000/svg" class="bio-diagram natural" role="img" aria-label="Human body systems diagram">
    <defs>
      <radialGradient id="b-skin" cx="42%" cy="26%" r="82%"><stop offset="0%" stop-color="#f7dcc2"/><stop offset="100%" stop-color="#e4b58e"/></radialGradient>
      <radialGradient id="b-brain" cx="40%" cy="32%" r="74%"><stop offset="0%" stop-color="#f6c8cd"/><stop offset="100%" stop-color="#d47f89"/></radialGradient>
      <radialGradient id="b-lung" cx="40%" cy="28%" r="80%"><stop offset="0%" stop-color="#f3aaa1"/><stop offset="100%" stop-color="#d56b60"/></radialGradient>
      <radialGradient id="b-heart" cx="38%" cy="28%" r="80%"><stop offset="0%" stop-color="#e65b52"/><stop offset="100%" stop-color="#a52e2a"/></radialGradient>
      <radialGradient id="b-liver" cx="38%" cy="28%" r="82%"><stop offset="0%" stop-color="#a25644"/><stop offset="100%" stop-color="#703426"/></radialGradient>
      <radialGradient id="b-stom" cx="40%" cy="30%" r="80%"><stop offset="0%" stop-color="#ecabb9"/><stop offset="100%" stop-color="#c26d82"/></radialGradient>
      <radialGradient id="b-intes" cx="42%" cy="30%" r="82%"><stop offset="0%" stop-color="#ebbf85"/><stop offset="100%" stop-color="#c8934c"/></radialGradient>
      <radialGradient id="b-kid" cx="38%" cy="30%" r="80%"><stop offset="0%" stop-color="#9d6e85"/><stop offset="100%" stop-color="#6c4257"/></radialGradient>
      <radialGradient id="b-blad" cx="40%" cy="30%" r="80%"><stop offset="0%" stop-color="#f0d97e"/><stop offset="100%" stop-color="#c9a836"/></radialGradient>
      <linearGradient id="b-nerve" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f2dd82"/><stop offset="100%" stop-color="#d2b544"/></linearGradient>
      <linearGradient id="b-bone" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f4ecd9"/><stop offset="100%" stop-color="#d9caa6"/></linearGradient>
      <radialGradient id="b-mus" cx="40%" cy="30%" r="80%"><stop offset="0%" stop-color="#c95d53"/><stop offset="100%" stop-color="#8c332d"/></radialGradient>
      <filter id="b-s" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#3a2418" flood-opacity="0.22"/></filter>
    </defs>

    <!-- silhouette (decorative, non-interactive) -->
    <g class="nolabels" fill="url(#b-skin)" stroke="#d8a681" stroke-width="3">
      <path d="M300 176 C300 150 460 150 460 176 L452 300 C450 340 442 372 434 404 L326 404 C318 372 310 340 308 300 Z"/>
      <circle cx="380" cy="92" r="54"/>
      <rect x="360" y="138" width="40" height="34" rx="12"/>
      <path d="M300 182 C280 190 268 210 264 250 L256 360 C255 380 285 382 288 362 L300 260 Z"/>
      <path d="M460 182 C480 190 492 210 496 250 L504 360 C505 380 475 382 472 362 L460 260 Z"/>
      <path d="M330 404 L350 404 L346 660 C345 678 315 678 314 660 Z"/>
      <path d="M410 404 L430 404 L446 660 C447 678 417 678 416 660 Z"/>
    </g>

    <!-- spinal cord (behind) -->
    <g class="part" data-part="spinal-cord">
      <path d="M380 150 L380 406" fill="none" stroke="url(#b-nerve)" stroke-width="10" stroke-linecap="round"/>
      <g stroke="url(#b-nerve)" stroke-width="4" stroke-linecap="round"><path d="M380 360 l22 16"/><path d="M380 384 l-22 14"/></g>
    </g>

    <!-- kidneys -->
    <g class="part" data-part="kidneys" filter="url(#b-s)">
      <path d="M336 330 C322 328 318 344 322 358 C326 370 340 368 342 356 C334 348 336 340 336 330Z" fill="url(#b-kid)"/>
      <path d="M424 330 C438 328 442 344 438 358 C434 370 420 368 418 356 C426 348 424 340 424 330Z" fill="url(#b-kid)"/>
    </g>

    <!-- lungs -->
    <g class="part" data-part="lungs" filter="url(#b-s)">
      <path d="M356 196 C316 200 300 240 302 286 C304 320 332 330 352 318 C366 310 366 250 362 214 Z" fill="url(#b-lung)"/>
      <path d="M404 196 C444 200 460 240 458 286 C456 320 428 330 408 318 C394 310 394 250 398 214 Z" fill="url(#b-lung)"/>
    </g>

    <!-- trachea + bronchi -->
    <g class="part" data-part="trachea">
      <path d="M380 150 L380 200 M380 200 q-4 20 -30 34 M380 200 q4 20 30 34" fill="none" stroke="#cf93a4" stroke-width="7" stroke-linecap="round"/>
    </g>

    <!-- heart -->
    <g class="part" data-part="heart" filter="url(#b-s)">
      <path d="M380 236 C370 222 350 224 348 244 C346 262 370 276 382 292 C394 276 416 262 414 244 C412 224 392 222 380 236Z" fill="url(#b-heart)"/>
    </g>

    <!-- ribcage (bone, over the chest) -->
    <g class="part" data-part="ribcage" opacity=".9">
      <g fill="none" stroke="url(#b-bone)" stroke-width="7" stroke-linecap="round">
        <path d="M320 182 q60 -20 120 0"/><path d="M316 206 q64 -20 128 0"/>
        <path d="M318 230 q62 -18 124 0"/><path d="M324 254 q56 -16 112 0"/>
      </g>
      <line x1="380" y1="176" x2="380" y2="262" stroke="url(#b-bone)" stroke-width="6" stroke-linecap="round"/>
    </g>

    <!-- liver -->
    <g class="part" data-part="liver" filter="url(#b-s)">
      <path d="M312 306 C356 296 404 300 420 312 C420 336 396 350 356 350 C328 350 314 332 312 306Z" fill="url(#b-liver)"/>
    </g>

    <!-- stomach -->
    <g class="part" data-part="stomach" filter="url(#b-s)">
      <path d="M410 302 C440 300 448 330 438 352 C430 370 404 368 402 348 C420 342 418 320 410 302Z" fill="url(#b-stom)"/>
    </g>

    <!-- intestines -->
    <g class="part" data-part="intestines" filter="url(#b-s)">
      <path d="M340 360 q40 -8 40 20 q0 24 -34 20 q40 4 40 26 q0 26 -38 22 q46 6 62 -6" fill="none" stroke="url(#b-intes)" stroke-width="18" stroke-linecap="round"/>
    </g>

    <!-- bladder -->
    <g class="part" data-part="bladder" filter="url(#b-s)">
      <path d="M380 396 C398 396 404 414 396 426 C388 436 372 436 364 426 C356 414 362 396 380 396Z" fill="url(#b-blad)"/>
    </g>

    <!-- brain -->
    <g class="part" data-part="brain" filter="url(#b-s)">
      <path d="M380 58 C346 58 340 84 348 100 C336 112 352 130 372 126 C382 138 404 132 402 116 C420 110 416 80 398 72 C398 58 380 58 380 58Z" fill="url(#b-brain)"/>
      <path d="M362 78 q10 8 0 18 M384 70 q8 12 -2 22 M372 104 q12 6 22 -2" fill="none" stroke="#b25f68" stroke-width="2" opacity=".55" stroke-linecap="round"/>
    </g>

    <!-- muscle (right upper arm) -->
    <g class="part" data-part="muscles" filter="url(#b-s)">
      <ellipse cx="484" cy="232" rx="20" ry="34" fill="url(#b-mus)"/>
      <path d="M474 214 q10 18 0 36 M492 214 q-10 18 0 36" fill="none" stroke="#f0b3ac" stroke-width="2" opacity=".55" stroke-linecap="round"/>
    </g>

    <!-- labels -->
    <g class="nolabels">
      ${lab(150, 92, 'Brain', 352, 92, 'end')}
      ${lab(150, 200, 'Lungs', 336, 244, 'end')}
      ${lab(150, 262, 'Ribcage', 322, 230, 'end')}
      ${lab(150, 322, 'Liver', 330, 322, 'end')}
      ${lab(150, 372, 'Kidney', 336, 346, 'end')}
      ${lab(150, 430, 'Intestines', 356, 392, 'end')}
      ${lab(610, 150, 'Trachea', 396, 170, 'start')}
      ${lab(610, 214, 'Muscles', 500, 232, 'start')}
      ${lab(610, 268, 'Heart', 396, 256, 'start')}
      ${lab(610, 322, 'Stomach', 430, 330, 'start')}
      ${lab(610, 376, 'Spinal cord', 388, 388, 'start')}
      ${lab(610, 424, 'Bladder', 396, 414, 'start')}
    </g>
  </svg>`;

  const quizzes = [
    { type: 'click', prompt: 'Click the organ that pumps blood around the body.', answerId: 'heart',
      feedback: { correct: 'Correct — the heart is the pump of the circulatory system.', incorrect: 'Look in the centre of the chest.' } },
    { type: 'multiple-choice', prompt: 'Which system do the lungs belong to?', options: ['Digestive', 'Nervous', 'Respiratory', 'Skeletal'], answer: 'Respiratory',
      feedback: { correct: 'Right — the lungs are part of the respiratory system.', incorrect: 'Think about breathing.' } },
    { type: 'click', prompt: 'Click the organ that filters waste from the blood to make urine.', answerId: 'kidneys',
      feedback: { correct: 'Correct — the kidneys filter the blood.', incorrect: 'Look for the pair of bean shapes.' } },
    { type: 'multiple-choice', prompt: 'Which organ is the control centre of the nervous system?', options: ['Heart', 'Liver', 'Brain', 'Stomach'], answer: 'Brain',
      feedback: { correct: 'Correct — the brain controls the body.', incorrect: 'It sits inside the skull.' } },
  ];

  window.BIO.topics['body-systems'] = {
    id: 'body-systems', name: 'Human Body', short: 'Body', kind: 'diagram', icon: '🫀',
    tagline: 'Organs and the systems they form',
    intro: 'Your body is run by organ systems that each handle a job — thinking, breathing, pumping blood, digesting food. Click an organ to see what it does and which system it belongs to.',
    categories: {
      nervous: 'Nervous', circulatory: 'Circulatory', respiratory: 'Respiratory',
      digestive: 'Digestive', excretory: 'Excretory', skeletal: 'Skeletal', muscular: 'Muscular'
    },
    viewBox: '0 0 760 720', svg, parts, quizzes
  };
})();
