/* Life Explorer — topic: the Human Body Systems.
   A `kind:'diagram'` topic. A simplified body silhouette with the major organs;
   each organ is a data-part coloured by the body system it belongs to.         */
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

  const label = (x, y, t, tx, ty, anchor) =>
    `<line class="leader" x1="${x}" y1="${y}" x2="${tx}" y2="${ty}"/>` +
    `<text class="plabel" x="${x}" y="${y + 4}" text-anchor="${anchor}">${t}</text>`;

  const svg = `
  <svg viewBox="0 0 560 680" xmlns="http://www.w3.org/2000/svg" class="bio-diagram" role="img" aria-label="Human body systems diagram">
    <!-- decorative silhouette -->
    <g class="body-bg">
      <circle cx="280" cy="70" r="44"/>
      <rect x="266" y="108" width="28" height="26" rx="10"/>
      <rect x="196" y="128" width="168" height="248" rx="52"/>
      <rect x="150" y="150" width="30" height="176" rx="15"/>
      <rect x="380" y="150" width="30" height="176" rx="15"/>
      <rect x="214" y="360" width="42" height="256" rx="20"/>
      <rect x="304" y="360" width="42" height="256" rx="20"/>
    </g>

    <!-- spinal cord (behind) -->
    <g class="part cat-nervous" data-part="spinal-cord">
      <rect class="shape" x="274" y="118" width="12" height="250" rx="6"/>
    </g>
    <!-- kidneys (behind intestines) -->
    <g class="part cat-excretory" data-part="kidneys">
      <path class="shape" d="M232 286 q-20 -4 -20 20 q0 24 20 20 q-6 -20 0 -40Z"/>
      <path class="shape" d="M328 286 q20 -4 20 20 q0 24 -20 20 q6 -20 0 -40Z"/>
    </g>
    <!-- ribcage (light overlay on chest) -->
    <g class="part cat-skeletal" data-part="ribcage">
      <path class="shape stroke" d="M214 170 q66 -22 132 0"/>
      <path class="shape stroke" d="M212 192 q68 -22 136 0"/>
      <path class="shape stroke" d="M214 214 q66 -20 132 0"/>
      <path class="shape stroke" d="M218 236 q62 -18 124 0"/>
    </g>
    <!-- lungs -->
    <g class="part cat-respiratory" data-part="lungs">
      <path class="shape" d="M262 150 q-46 6 -50 70 q-2 34 26 40 q22 4 24 -20 Z"/>
      <path class="shape" d="M298 150 q46 6 50 70 q2 34 -26 40 q-22 4 -24 -20 Z"/>
    </g>
    <!-- trachea -->
    <g class="part cat-respiratory" data-part="trachea">
      <rect class="shape" x="272" y="120" width="16" height="44" rx="7"/>
    </g>
    <!-- heart -->
    <g class="part cat-circulatory" data-part="heart">
      <path class="shape" d="M280 178 q-16 -20 -32 -6 q-14 14 4 32 l28 28 l28 -28 q18 -18 4 -32 q-16 -14 -32 6Z"/>
    </g>
    <!-- liver -->
    <g class="part cat-digestive" data-part="liver">
      <path class="shape" d="M210 250 q66 -16 120 0 q-4 34 -60 34 q-52 0 -60 -34Z"/>
    </g>
    <!-- stomach -->
    <g class="part cat-digestive" data-part="stomach">
      <path class="shape" d="M300 262 q34 4 30 42 q-4 34 -40 30 q22 -14 14 -40 q-6 -22 -4 -32Z"/>
    </g>
    <!-- intestines -->
    <g class="part cat-digestive" data-part="intestines">
      <path class="shape stroke intestine" d="M240 316 q80 -10 80 26 q0 26 -60 20 q60 6 60 30 q0 28 -70 22"/>
    </g>
    <!-- bladder -->
    <g class="part cat-excretory" data-part="bladder">
      <path class="shape" d="M280 360 q26 0 26 22 q0 22 -26 22 q-26 0 -26 -22 q0 -22 26 -22Z"/>
    </g>
    <!-- brain -->
    <g class="part cat-nervous" data-part="brain">
      <path class="shape" d="M280 48 q-34 0 -34 26 q0 22 34 22 q34 0 34 -22 q0 -26 -34 -26Z"/>
    </g>
    <!-- muscles (upper arm) -->
    <g class="part cat-muscular" data-part="muscles">
      <ellipse class="shape" cx="395" cy="196" rx="16" ry="30"/>
    </g>

    <!-- labels -->
    <g class="labels">
      ${label(120, 62, 'Brain', 250, 66, 'end')}
      ${label(120, 132, 'Trachea', 272, 140, 'end')}
      ${label(120, 196, 'Lungs', 224, 196, 'end')}
      ${label(120, 256, 'Liver', 214, 258, 'end')}
      ${label(120, 320, 'Intestines', 244, 330, 'end')}
      ${label(120, 388, 'Bladder', 258, 380, 'end')}
      ${label(440, 120, 'Spinal cord', 288, 150, 'start')}
      ${label(486, 168, 'Muscles', 412, 192, 'start')}
      ${label(440, 205, 'Heart', 300, 198, 'start')}
      ${label(440, 245, 'Ribcage', 346, 220, 'start')}
      ${label(440, 285, 'Stomach', 326, 270, 'start')}
      ${label(440, 325, 'Kidneys', 344, 300, 'start')}
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
    viewBox: '0 0 560 680', svg, parts, quizzes
  };
})();
