/* Historical Wars Explorer — dataset: American Civil War (1861–1865)
   PURE DATA, same shape as american-revolution.js. It registers itself on
   window.HWE.wars and the app picks it up with no code changes — the second
   conflict that proves the engine is genuinely war-agnostic.

   Geometry note: this war is fought *inside* one country, so the map colors U.S.
   STATES by allegiance rather than world polities. We use modern state outlines
   (a deliberate, labeled simplification — West Virginia is shown split from
   Virginia throughout, and 1860s territories appear with today's state shapes).
   Faction is resolved per year, so the seceded South only turns Confederate from
   1861 onward.                                                                  */
(function () {
  window.HWE = window.HWE || { wars: {} };

  const S = {
    mcpherson: { id: 'src:mcpherson', type: 'book', citation: 'James M. McPherson, Battle Cry of Freedom: The Civil War Era (Oxford University Press, 1988)', reliability: 'high' },
    foote: { id: 'src:foote', type: 'book', citation: 'Shelby Foote, The Civil War: A Narrative (3 vols.)', reliability: 'medium' },
    catton: { id: 'src:catton', type: 'book', citation: 'Bruce Catton, The Civil War (American Heritage)', reliability: 'medium' },
    abt: { id: 'src:abt', type: 'archive', citation: 'American Battlefield Trust — battle summaries and casualty figures', url: 'https://www.battlefields.org/', reliability: 'high' },
    nps: { id: 'src:nps', type: 'archive', citation: 'U.S. National Park Service — Civil War', url: 'https://www.nps.gov/subjects/civilwar/', reliability: 'high' },
    loc: { id: 'src:loc-cw', type: 'archive', citation: 'U.S. Library of Congress — Civil War primary documents', url: 'https://www.loc.gov/', reliability: 'high' },
    britannica: { id: 'src:britannica-cw', type: 'reference', citation: 'Encyclopædia Britannica', url: 'https://www.britannica.com/', reliability: 'medium' },
    census: { id: 'src:census1860', type: 'archive', citation: 'U.S. Census of 1860 (population figures)', reliability: 'high' },
    geo: { id: 'src:us-states-geo', type: 'archive', citation: 'U.S. state boundaries (PublicaMundi/MappingAPI, derived from U.S. Census TIGER) — modern outlines used as a teaching approximation', url: 'https://github.com/PublicaMundi/MappingAPI', reliability: 'medium' }
  };

  const r = (low, high) => ({ low, high });
  const v = (value) => ({ value });

  /* ---- NATIONS (factions) ----------------------------------------------- */
  /* geoNames list the U.S. STATES (by the geometry's `name` property) that
     belong to each side. Anything unlisted (western territories) stays neutral. */
  const nations = [
    {
      id: 'nation:union', type: 'nation', name: 'The Union', short: 'Union',
      side: 'union', entered: 1861, exited: 1865, factionKey: 'union',
      capital: { name: 'Washington, D.C.', lon: -77.04, lat: 38.91 },
      geoNames: ['California', 'Connecticut', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Maine', 'Massachusetts',
        'Michigan', 'Minnesota', 'Nevada', 'New Hampshire', 'New Jersey', 'New York', 'Ohio', 'Oregon',
        'Pennsylvania', 'Rhode Island', 'Vermont', 'Wisconsin', 'West Virginia', 'District of Columbia'],
      geoSubjects: [],
      summary: 'The federal United States under Abraham Lincoln, fighting to preserve the Union and — from 1863 — to end slavery. Its advantages in population, industry and naval power proved decisive over four years of attrition.',
      objectives: ['Preserve the Union and reject secession', 'Restore federal authority across the South', 'After 1862, end slavery as a war aim (Emancipation Proclamation)'],
      facts: [
        { attr: 'government', value: 'Federal republic under President Lincoln', from: 1861, to: 1865, confidence: 'high', sources: ['src:loc-cw'] },
        { attr: 'leader', value: 'President Abraham Lincoln (r. 1861–1865)', from: 1861, to: 1865, confidence: 'high', sources: ['src:mcpherson'] },
        { attr: 'population', value: r(22000000, 23000000), from: 1861, to: 1865, confidence: 'high', sources: ['src:census1860'], note: 'Free states + loyal border states, 1860 census' },
        { attr: 'army', value: 'U.S. Army + volunteers — ~2.1 million served over the war', from: 1861, to: 1865, confidence: 'high', sources: ['src:mcpherson'] },
        { attr: 'navy', value: 'U.S. Navy — blockaded 3,500 miles of Confederate coast (the Anaconda Plan)', from: 1861, to: 1865, confidence: 'high', sources: ['src:nps'] }
      ]
    },
    {
      id: 'nation:confederacy', type: 'nation', name: 'The Confederacy', short: 'Confederacy',
      side: 'confederate', entered: 1861, exited: 1865, factionKey: 'confederate',
      capital: { name: 'Richmond, Virginia', lon: -77.46, lat: 37.54 },
      geoNames: ['South Carolina', 'Mississippi', 'Florida', 'Alabama', 'Georgia', 'Louisiana', 'Texas',
        'Virginia', 'Arkansas', 'North Carolina', 'Tennessee'],
      geoSubjects: [],
      summary: 'The eleven seceding slave states formed the Confederate States of America in 1861 to defend slavery and states’ rights. Outmatched in men and industry, it fought a largely defensive war until its armies collapsed in 1865.',
      objectives: ['Win recognition as an independent nation', 'Preserve slavery and the plantation economy', 'Defend Southern territory until the North gave up'],
      facts: [
        { attr: 'government', value: 'Confederate republic under President Davis', from: 1861, to: 1865, confidence: 'high', sources: ['src:loc-cw'] },
        { attr: 'leader', value: 'President Jefferson Davis (r. 1861–1865)', from: 1861, to: 1865, confidence: 'high', sources: ['src:mcpherson'] },
        { attr: 'population', value: r(9000000, 9100000), from: 1861, to: 1865, confidence: 'high', sources: ['src:census1860'], note: 'Incl. ~3.5 million enslaved people (1860 census)' },
        { attr: 'army', value: v('Confederate States Army — ~750,000–900,000 served'), from: 1861, to: 1865, confidence: 'medium', sources: ['src:mcpherson'] },
        { attr: 'entryEvent', value: 'Formed February 1861; war began at Fort Sumter, April 1861', from: 1861, to: 1865, confidence: 'high', sources: ['src:nps'] }
      ]
    },
    {
      id: 'nation:border', type: 'nation', name: 'Border states', short: 'Border states',
      side: 'union', entered: 1861, exited: 1865, factionKey: 'border',
      capital: { name: '(Union-aligned slave states)', lon: -85.76, lat: 38.20 },
      geoNames: ['Delaware', 'Maryland', 'Kentucky', 'Missouri'],
      geoSubjects: [],
      summary: 'Slaveholding states that did not secede. Keeping Kentucky, Missouri, Maryland and Delaware in the Union was one of Lincoln’s central strategic aims — they guarded the capital, the Ohio River and key rail lines.',
      objectives: ['Remain in the Union while permitting slavery', 'Avoid becoming a battleground (with mixed success)'],
      facts: [
        { attr: 'government', value: 'Union-aligned states permitting slavery', from: 1861, to: 1865, confidence: 'high', sources: ['src:mcpherson'] },
        { attr: 'population', value: r(2500000, 3000000), from: 1861, to: 1865, confidence: 'medium', sources: ['src:census1860'] },
        { attr: 'entryEvent', value: 'Chose to stay in the Union, 1861', from: 1861, to: 1865, confidence: 'high', sources: ['src:mcpherson'] }
      ]
    }
  ];

  /* ---- LEADERS ---------------------------------------------------------- */
  const leaders = [
    { id: 'person:lincoln', name: 'Abraham Lincoln', nationId: 'nation:union', role: 'President of the United States', years: '1809–1865', side: 'union',
      bio: 'Led the Union through the war, reframed it as a struggle to end slavery with the 1863 Emancipation Proclamation, and defined its purpose at Gettysburg. He was assassinated days after the Confederate surrender.',
      relatedBattles: ['battle:gettysburg'], confidence: 'high', sources: ['src:mcpherson'] },
    { id: 'person:grant', name: 'Ulysses S. Grant', nationId: 'nation:union', role: 'General-in-Chief, U.S. Army (1864–65)', years: '1822–1885', side: 'union',
      bio: 'Victor at Forts Henry and Donelson, Shiloh and Vicksburg, he took overall Union command in 1864 and ground down Lee’s army in Virginia until its surrender at Appomattox. Later the 18th U.S. president.',
      relatedBattles: ['battle:shiloh', 'battle:vicksburg', 'battle:appomattox'], confidence: 'high', sources: ['src:mcpherson'] },
    { id: 'person:sherman', name: 'William T. Sherman', nationId: 'nation:union', role: 'Union General, Western Theater', years: '1820–1891', side: 'union',
      bio: 'Captured Atlanta in 1864 and led the “March to the Sea,” pioneering a hard war against the South’s economic capacity to keep fighting.',
      relatedBattles: ['battle:atlanta', 'battle:savannah-1864'], confidence: 'high', sources: ['src:mcpherson'] },
    { id: 'person:meade', name: 'George G. Meade', nationId: 'nation:union', role: 'Commander, Army of the Potomac', years: '1815–1872', side: 'union',
      bio: 'Took command days before Gettysburg and defeated Lee’s invasion of Pennsylvania in the war’s largest battle.',
      relatedBattles: ['battle:gettysburg'], confidence: 'high', sources: ['src:abt'] },
    { id: 'person:mcclellan', name: 'George B. McClellan', nationId: 'nation:union', role: 'Union General (1861–62)', years: '1826–1885', side: 'union',
      bio: 'Organized the Army of the Potomac superbly but was cautious in the field; his check of Lee at Antietam gave Lincoln the moment to issue the Emancipation Proclamation. He ran against Lincoln in 1864.',
      relatedBattles: ['battle:antietam'], confidence: 'high', sources: ['src:mcpherson'] },
    { id: 'person:davis', name: 'Jefferson Davis', nationId: 'nation:confederacy', role: 'President of the Confederate States', years: '1808–1889', side: 'confederate',
      bio: 'Former U.S. senator and war secretary who led the Confederacy throughout its existence. Captured in 1865, he became a symbol of the “Lost Cause.”', confidence: 'high', sources: ['src:mcpherson'] },
    { id: 'person:lee', name: 'Robert E. Lee', nationId: 'nation:confederacy', role: 'Commander, Army of Northern Virginia', years: '1807–1870', side: 'confederate',
      bio: 'The Confederacy’s most celebrated general. His audacious victories prolonged the war, but his two invasions of the North failed at Antietam and Gettysburg; he surrendered to Grant at Appomattox in April 1865.',
      relatedBattles: ['battle:antietam', 'battle:gettysburg', 'battle:chancellorsville', 'battle:appomattox'], confidence: 'high', sources: ['src:mcpherson'] },
    { id: 'person:jackson', name: 'Thomas “Stonewall” Jackson', nationId: 'nation:confederacy', role: 'Confederate General', years: '1824–1863', side: 'confederate',
      bio: 'Lee’s hard-hitting lieutenant, famed for the 1862 Shenandoah Valley campaign. Mortally wounded by his own men at Chancellorsville — a loss the Confederacy never replaced.',
      relatedBattles: ['battle:chancellorsville', 'battle:bull-run-1'], confidence: 'high', sources: ['src:foote'] },
    { id: 'person:johnston', name: 'Joseph E. Johnston', nationId: 'nation:confederacy', role: 'Confederate General', years: '1807–1891', side: 'confederate',
      bio: 'Commanded in Virginia and later opposed Sherman in the Atlanta campaign and the Carolinas, conducting a skilled fighting retreat before surrendering in 1865.',
      relatedBattles: ['battle:atlanta'], confidence: 'medium', sources: ['src:abt'] }
  ];

  /* ---- BATTLES ---------------------------------------------------------- */
  const B = (id, name, y, m, d, lon, lat, place, victor, sig, opts) => Object.assign(
    { id, type: 'battle', name, date: { y, m, d }, location: { lon, lat, place }, victor, significance: sig, confidence: 'high', sources: ['src:abt'] }, opts || {});
  const battles = [
    B('battle:fort-sumter', 'Fort Sumter', 1861, 4, 12, -79.87, 32.75, 'Charleston, South Carolina', 'Confederate', 'The bombardment that opened the war; the Union garrison surrendered after 34 hours.', { casualties: { union: v(0), confederate: v(0) }, note: 'No deaths in the bombardment itself' }),
    B('battle:bull-run-1', 'First Bull Run (Manassas)', 1861, 7, 21, -77.52, 38.81, 'Virginia', 'Confederate', 'The first major battle shattered hopes of a short war; “Stonewall” Jackson earned his nickname.', { commanders: ['person:jackson'], casualties: { union: r(2900, 3000), confederate: r(1980, 2000) } }),
    B('battle:shiloh', 'Shiloh', 1862, 4, 6, -88.34, 35.14, 'Tennessee', 'Union', 'A shockingly bloody two-day fight in the West that proved the war would be long and costly.', { commanders: ['person:grant'], casualties: { union: r(13000, 13050), confederate: r(10690, 10700) } }),
    B('battle:antietam', 'Antietam (Sharpsburg)', 1862, 9, 17, -77.74, 39.47, 'Maryland', 'Union (strategic)', 'The bloodiest single day in American history; halting Lee’s invasion let Lincoln issue the Emancipation Proclamation.', { decisive: true, commanders: ['person:mcclellan', 'person:lee'], casualties: { union: r(12400, 12500), confederate: r(10300, 10320) } }),
    B('battle:fredericksburg', 'Fredericksburg', 1862, 12, 13, -77.47, 38.30, 'Virginia', 'Confederate', 'A lopsided Confederate defensive victory as Union troops charged stone walls at Marye’s Heights.', { commanders: ['person:lee'], casualties: { union: r(12600, 12700), confederate: r(5300, 5400) } }),
    B('battle:chancellorsville', 'Chancellorsville', 1863, 5, 2, -77.64, 38.31, 'Virginia', 'Confederate', 'Lee’s tactical masterpiece against a larger army — but Stonewall Jackson was mortally wounded by friendly fire.', { commanders: ['person:lee', 'person:jackson'], casualties: { union: r(17000, 17300), confederate: r(13000, 13300) } }),
    B('battle:gettysburg', 'Gettysburg', 1863, 7, 3, -77.23, 39.81, 'Pennsylvania', 'Union', 'The war’s turning point and largest battle: Lee’s second invasion of the North was decisively repulsed.', { decisive: true, commanders: ['person:meade', 'person:lee'], casualties: { union: r(23000, 23050), confederate: r(23000, 28000) }, note: 'Confederate losses are estimated as a range' }),
    B('battle:vicksburg', 'Siege of Vicksburg', 1863, 7, 4, -90.85, 32.35, 'Mississippi', 'Union', 'Grant’s capture of Vicksburg gave the Union the entire Mississippi River, splitting the Confederacy in two.', { decisive: true, commanders: ['person:grant'], date: { y: 1863, m: 5, d: 18, end: { y: 1863, m: 7, d: 4 } }, casualties: { confederate: { captured: 29000 } } }),
    B('battle:chickamauga', 'Chickamauga', 1863, 9, 20, -85.26, 34.94, 'Georgia', 'Confederate', 'The Confederacy’s greatest Western victory, though it failed to reverse the tide; among the war’s costliest battles.', { casualties: { union: r(16000, 16200), confederate: r(18000, 18500) } }),
    B('battle:atlanta', 'Fall of Atlanta', 1864, 9, 2, -84.39, 33.75, 'Georgia', 'Union', 'Sherman’s capture of Atlanta boosted Northern morale and helped secure Lincoln’s re-election.', { commanders: ['person:sherman', 'person:johnston'], date: { y: 1864, m: 7, d: 22, end: { y: 1864, m: 9, d: 2 } } }),
    B('battle:savannah-1864', 'March to the Sea (Savannah)', 1864, 12, 21, -81.09, 32.08, 'Georgia', 'Union', 'Sherman marched from Atlanta to the sea, destroying the South’s capacity to wage war and reaching Savannah.', { commanders: ['person:sherman'], date: { y: 1864, m: 11, d: 15, end: { y: 1864, m: 12, d: 21 } } }),
    B('battle:appomattox', 'Appomattox Court House', 1865, 4, 9, -78.80, 37.38, 'Virginia', 'Union', 'Lee surrendered the Army of Northern Virginia to Grant, effectively ending the war.', { decisive: true, commanders: ['person:grant', 'person:lee'], casualties: { confederate: { captured: 28000 } } })
  ];

  /* ---- "TREATIES" (war's end) ------------------------------------------- */
  const treaties = [
    { id: 'treaty:appomattox', type: 'treaty', name: 'Surrender at Appomattox', date: { y: 1865, m: 4, d: 9 },
      signatories: ['nation:union', 'nation:confederacy'], summary: 'Robert E. Lee surrendered the Army of Northern Virginia to Ulysses S. Grant on generous terms. Remaining Confederate forces surrendered over the following weeks, ending the war. There was no peace treaty — the Confederacy simply ceased to exist.', confidence: 'high', sources: ['src:nps'] }
  ];

  /* ---- CITIES ----------------------------------------------------------- */
  const cities = [
    { id: 'city:washington', name: 'Washington, D.C.', lon: -77.04, lat: 38.91, capitalOf: 'nation:union', note: 'The Union capital, ringed by forts and only ~100 miles from the Confederate capital.' },
    { id: 'city:richmond', name: 'Richmond', lon: -77.46, lat: 37.54, capitalOf: 'nation:confederacy', note: 'Confederate capital from May 1861 and the target of repeated Union campaigns; it fell in April 1865.' },
    { id: 'city:new-york-cw', name: 'New York', lon: -74.01, lat: 40.71, note: 'The Union’s largest city and industrial-financial engine; site of the 1863 draft riots.' },
    { id: 'city:new-orleans', name: 'New Orleans', lon: -90.07, lat: 29.95, note: 'The Confederacy’s largest city and port, captured by Union forces in 1862.' },
    { id: 'city:charleston-cw', name: 'Charleston', lon: -79.93, lat: 32.78, note: 'Where secession and the war began; besieged by the Union for much of the conflict.' },
    { id: 'city:atlanta', name: 'Atlanta', lon: -84.39, lat: 33.75, note: 'Confederate rail and manufacturing hub; its 1864 fall was a strategic and political turning point.' },
    { id: 'city:vicksburg', name: 'Vicksburg', lon: -90.85, lat: 32.35, note: 'The fortress city whose 1863 fall gave the Union control of the Mississippi.' },
    { id: 'city:gettysburg', name: 'Gettysburg', lon: -77.23, lat: 39.81, note: 'Pennsylvania town where the war’s largest battle was fought and Lincoln gave his address.' }
  ];

  /* ---- TIMELINE --------------------------------------------------------- */
  const T = (y, m, d, type, title, desc) => ({ id: `event:cw-${y}-${m}-${d}-${type}`, date: { y, m, d }, type, title, desc });
  const timeline = [
    T(1861, 4, 12, 'battle', 'Fort Sumter', 'Confederate guns fire on Fort Sumter; the war begins.'),
    T(1861, 7, 21, 'battle', 'First Bull Run', 'A Confederate victory ends hopes of a quick war.'),
    T(1862, 4, 6, 'battle', 'Shiloh', 'A bloody Union victory in the West.'),
    T(1862, 9, 17, 'battle', 'Antietam', 'The bloodiest single day in U.S. history halts Lee’s first invasion.'),
    T(1863, 1, 1, 'political', 'Emancipation Proclamation', 'Lincoln declares enslaved people in rebel states to be free.'),
    T(1863, 7, 3, 'battle', 'Gettysburg', 'Lee’s second invasion is turned back — the war’s turning point.'),
    T(1863, 7, 4, 'battle', 'Vicksburg falls', 'The Union wins control of the Mississippi River.'),
    T(1863, 11, 19, 'political', 'Gettysburg Address', 'Lincoln redefines the war’s purpose in 272 words.'),
    T(1864, 3, 9, 'political', 'Grant takes command', 'Grant is made General-in-Chief of all Union armies.'),
    T(1864, 9, 2, 'battle', 'Atlanta falls', 'Sherman captures Atlanta, aiding Lincoln’s re-election.'),
    T(1864, 11, 8, 'political', 'Lincoln re-elected', 'Lincoln wins a second term, ensuring the war continues to victory.'),
    T(1864, 12, 21, 'battle', 'March to the Sea', 'Sherman reaches Savannah, having cut a path of destruction.'),
    T(1865, 4, 9, 'treaty', 'Surrender at Appomattox', 'Lee surrenders to Grant; the war effectively ends.'),
    T(1865, 4, 14, 'political', 'Lincoln assassinated', 'Lincoln is shot by John Wilkes Booth and dies the next morning.'),
    T(1865, 12, 6, 'political', 'Thirteenth Amendment', 'Slavery is abolished throughout the United States.')
  ];

  /* ---- WORLD AT THIS TIME ----------------------------------------------- */
  const worldContext = {
    _default: {
      worldPopulation: { low: 1200000000, high: 1300000000, confidence: 'low' },
      largestEmpires: ['British Empire', 'Qing China', 'Russian Empire', 'French (Second) Empire'],
      largestCities: ['London', 'Beijing', 'Paris', 'Guangzhou (Canton)'],
      otherConflicts: ['Taiping Rebellion in China (1850–64)', 'French intervention in Mexico (1861–67)', 'Italian unification (Risorgimento)'],
      science: ['Darwin’s On the Origin of Species (1859) reshapes biology', 'Pasteur advances the germ theory of disease'],
      culture: ['Dickens and the Victorian novel at their height', 'Verdi and Wagner dominate opera']
    },
    1863: { science: ['Construction begins on the London Underground (world’s first, opened Jan 1863)'], culture: ['Manet’s Le Déjeuner sur l’herbe scandalizes Paris'] },
    1865: { science: ['Mendel presents his laws of inheritance', 'Lister introduces antiseptic surgery'], culture: ['Lewis Carroll publishes Alice’s Adventures in Wonderland'] }
  };

  /* ---- QUIZZES ---------------------------------------------------------- */
  const quizzes = [
    { id: 'quiz:cw-start', type: 'set-year', prompt: 'Move the timeline to the year the Civil War began at Fort Sumter.', accept: { year: 1861 }, feedback: { correct: 'Correct — Confederate forces fired on Fort Sumter in April 1861.', incorrect: 'Try the very start of the war.' } },
    { id: 'quiz:cw-turning', type: 'multiple-choice', prompt: 'Which 1863 battle is regarded as the turning point of the Civil War?', options: ['Bull Run', 'Antietam', 'Gettysburg', 'Appomattox'], accept: { option: 'Gettysburg' }, feedback: { correct: 'Correct — Gettysburg (July 1863) turned back Lee’s invasion of the North.', incorrect: 'Not that one — it was Lee’s failed second invasion, in Pennsylvania.' } },
    { id: 'quiz:cw-confederacy', type: 'click-map', prompt: 'Click a state that joined the Confederacy.', accept: { entityId: 'nation:confederacy' }, feedback: { correct: 'Correct — that state seceded and joined the Confederate States.', incorrect: 'Look to the Deep South — try South Carolina, Georgia or Mississippi.' } },
    { id: 'quiz:cw-end', type: 'set-year', prompt: 'Set the timeline to the year Lee surrendered at Appomattox.', accept: { year: 1865 }, feedback: { correct: 'Correct — Lee surrendered to Grant in April 1865.', incorrect: 'Move to the final year of the war.' } },
    { id: 'quiz:cw-union', type: 'click-map', prompt: 'Click a state that fought for the Union.', accept: { entityId: 'nation:union' }, feedback: { correct: 'Correct — that state stayed loyal to the Union.', incorrect: 'Try the North — New York, Pennsylvania or Ohio.' } }
  ];

  /* ---- ASSEMBLED WAR ---------------------------------------------------- */
  window.HWE.wars['american-civil-war'] = {
    id: 'war:american-civil-war', schemaVersion: 1,
    meta: {
      name: 'American Civil War',
      altNames: ['War Between the States', 'War of the Rebellion'],
      years: { start: 1861, end: 1865 }, defaultYear: 1863,
      duration: '4 years (1861–1865)',
      summary: 'A war between the United States (the Union) and eleven Southern slave states that seceded as the Confederacy. The Union’s victory preserved the nation and ended slavery, at the cost of more American lives than any other war.',
      background: 'Decades of conflict over slavery and its expansion into the western territories split the nation. Lincoln’s 1860 election triggered secession, and war followed at Fort Sumter in April 1861.',
      causesLong: ['Slavery and its expansion into new territories', 'Sectional economic and cultural divergence between North and South', 'Disputes over states’ rights versus federal authority'],
      causesImmediate: ['Lincoln’s election in November 1860', 'Secession of South Carolina and the Deep South (1860–61)', 'The clash at Fort Sumter (April 1861)'],
      turningPoints: ['Antietam (1862) → Emancipation Proclamation', 'Gettysburg and Vicksburg (July 1863)', 'Fall of Atlanta and Lincoln’s re-election (1864)'],
      outcome: 'Union victory; the Confederacy collapsed and slavery was abolished.',
      victor: 'union', peaceTreaty: 'treaty:appomattox',
      territorialChanges: 'No territory changed hands; the seceded states were restored to the Union under federal control, beginning the era of Reconstruction.',
      significance: 'Preserved the United States as one nation, ended slavery, and vastly strengthened federal power — at a cost of roughly 620,000–750,000 dead.',
      humanCost: 'Total deaths are traditionally given as about <strong>620,000</strong>, with recent scholarship arguing for <strong>up to 750,000</strong> <span class="conf low">low confidence</span> — more American deaths than any other war. Disease killed roughly twice as many as combat.',
      consequences: ['Abolition of slavery (13th Amendment, 1865)', 'A stronger, more centralized federal government', 'A difficult Reconstruction and a century-long struggle over civil rights']
    },
    factions: {
      union: { label: 'Union', colorVar: '--union' },
      confederate: { label: 'Confederacy', colorVar: '--confederate' },
      border: { label: 'Border states', colorVar: '--border' },
      neutral: { label: 'Territories', colorVar: '--neutral' }
    },
    legendOrder: ['union', 'confederate', 'border', 'neutral'],
    sides: {
      union: { label: 'Union', factionKey: 'union' },
      confederate: { label: 'Confederacy', factionKey: 'confederate' }
    },
    sources: S, nations, leaders, battles, treaties, cities, timeline, worldContext, quizzes,
    /* U.S. state outlines, colored by allegiance. `fit:'data'` frames the map to
       the states; Alaska/Hawaii/Puerto Rico are dropped so the view stays on the
       contiguous U.S. */
    geo: {
      borderSnapshots: { 1861: 'https://cdn.jsdelivr.net/gh/PublicaMundi/MappingAPI@master/data/geojson/us-states.json' },
      nameProp: 'name', subjectProp: 'name', fit: 'data', projection: 'robinson', rewind: true,
      exclude: ['Alaska', 'Hawaii', 'Puerto Rico'],
      note: 'Modern state outlines, shown as a teaching approximation; 1860s territories appear in grey.'
    }
  };
})();
