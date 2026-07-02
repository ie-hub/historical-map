/* Historical Wars Explorer — dataset: Napoleonic Wars (1803–1815)
   PURE DATA in the same shape as the other war files. Registers itself on
   window.HWE.wars. The engine is war-agnostic; presentation reads factions,
   sides and geometry from this object.

   Alliances shifted constantly in this war (Russia and Prussia were French
   allies for stretches; Spain switched sides in 1808). Each nation is placed on
   the side it is best remembered for, with `entered` set to its durable entry
   into the coalitions against France. See meta.background for the caveat.      */
(function () {
  window.HWE = window.HWE || { wars: {} };

  const S = {
    esdaile: { id: 'src:esdaile', type: 'book', citation: 'Charles Esdaile, Napoleon’s Wars: An International History, 1803–1815', reliability: 'high' },
    lieven: { id: 'src:lieven', type: 'book', citation: 'Dominic Lieven, Russia Against Napoleon', reliability: 'high' },
    chandler: { id: 'src:chandler', type: 'book', citation: 'David G. Chandler, The Campaigns of Napoleon', reliability: 'high' },
    roberts: { id: 'src:roberts', type: 'book', citation: 'Andrew Roberts, Napoleon: A Life', reliability: 'high' },
    britannica: { id: 'src:britannica', type: 'reference', citation: 'Encyclopædia Britannica', url: 'https://www.britannica.com/', reliability: 'medium' },
    ne: { id: 'src:naturalearth', type: 'archive', citation: 'Natural Earth — public-domain map data', url: 'https://www.naturalearthdata.com/', reliability: 'high' },
    hbm: { id: 'src:historical-basemaps', type: 'archive', citation: 'aourednik/historical-basemaps (world_1800, world_1815), curated', url: 'https://github.com/aourednik/historical-basemaps', reliability: 'medium' }
  };

  const r = (low, high) => ({ low, high });
  const v = (value) => ({ value });

  /* ---- NATIONS ---------------------------------------------------------- */
  const nations = [
    {
      id: 'nation:france', type: 'nation', name: 'French Empire', short: 'France',
      side: 'french', entered: 1803, exited: 1815, factionKey: 'empire',
      capital: { name: 'Paris', lon: 2.35, lat: 48.85 },
      /* Named explicitly rather than by SUBJECTO:'France' — the 1800 basemap
         mis-tags Quebec and stretches French Louisiana across North America,
         which a broad subject match would paint blue. */
      geoNames: ['France', 'Batavian Republic', 'Helvetic Republic'], geoSubjects: [],
      summary: 'Under Napoleon Bonaparte — First Consul, then Emperor from 1804 — France dominated continental Europe through a ring of conquered and satellite states, fighting a shifting series of coalitions led and financed by Britain.',
      objectives: ['Secure French hegemony over Europe', 'Break British power and enforce the Continental System', 'Place allied and family rulers on European thrones'],
      facts: [
        { attr: 'government', value: 'Consulate, then Empire (from 1804)', from: 1803, to: 1815, confidence: 'high', sources: ['src:roberts'] },
        { attr: 'monarch', value: 'Napoleon I, Emperor of the French', from: 1804, to: 1815, confidence: 'high', sources: ['src:roberts'] },
        { attr: 'leader', value: 'Napoleon Bonaparte, First Consul', from: 1803, to: 1804, confidence: 'high', sources: ['src:roberts'] },
        { attr: 'population', value: r(29000000, 31000000), from: 1803, to: 1815, confidence: 'medium', sources: ['src:britannica'], note: 'Metropolitan France; the Empire and satellites were far larger.' },
        { attr: 'army', value: 'La Grande Armée — the dominant land force in Europe', from: 1805, to: 1815, confidence: 'high', sources: ['src:chandler'] }
      ]
    },
    {
      id: 'nation:united-kingdom', type: 'nation', name: 'United Kingdom', short: 'Britain',
      side: 'coalition', entered: 1803, exited: 1815, factionKey: 'coalition',
      capital: { name: 'London', lon: -0.13, lat: 51.5 },
      geoNames: ['United Kingdom', 'United Kingdom of Great Britain and Ireland', 'Kingdom of Ireland', 'Hanover'],
      geoSubjects: ['UK', 'United Kingdom of Great Britain and Ireland'],
      summary: 'Britain was the one constant enemy of Napoleon, at war for almost the entire period. Ruler of the seas after Trafalgar, it financed successive coalitions and fought France on land in the Peninsular War.',
      objectives: ['Prevent French domination of Europe', 'Preserve naval and commercial supremacy', 'Subsidise and sustain the anti-French coalitions'],
      facts: [
        { attr: 'government', value: 'Constitutional monarchy', from: 1803, to: 1815, confidence: 'high', sources: ['src:britannica'] },
        { attr: 'monarch', value: 'King George III (Prince Regent from 1811)', from: 1803, to: 1815, confidence: 'high', sources: ['src:britannica'] },
        { attr: 'headOfGovernment', value: 'William Pitt the Younger, then successors (Perceval, Liverpool)', from: 1803, to: 1815, confidence: 'medium', sources: ['src:esdaile'] },
        { attr: 'navy', value: 'Royal Navy — unmatched after Trafalgar (1805)', from: 1805, to: 1815, confidence: 'high', sources: ['src:chandler'] },
        { attr: 'population', value: r(16000000, 18000000), from: 1803, to: 1815, confidence: 'medium', sources: ['src:britannica'] }
      ]
    },
    {
      id: 'nation:russia', type: 'nation', name: 'Russian Empire', short: 'Russia',
      side: 'coalition', entered: 1805, exited: 1815, factionKey: 'coalition',
      capital: { name: 'Saint Petersburg', lon: 30.34, lat: 59.93 },
      geoNames: ['Russian Empire'], geoSubjects: ['Russian Empire'],
      summary: 'Russia fought France in the Third and Fourth Coalitions, made peace at Tilsit (1807) and even allied with Napoleon — until his catastrophic 1812 invasion, which destroyed the Grande Armée and turned the tide of the whole war.',
      objectives: ['Resist French expansion in central Europe', 'Defend Russian territory (invaded 1812)', 'Lead the final coalition into France'],
      facts: [
        { attr: 'government', value: 'Absolute monarchy (Tsardom)', from: 1803, to: 1815, confidence: 'high', sources: ['src:britannica'] },
        { attr: 'monarch', value: 'Tsar Alexander I (r. 1801–1825)', from: 1803, to: 1815, confidence: 'high', sources: ['src:lieven'] },
        { attr: 'population', value: r(40000000, 45000000), from: 1803, to: 1815, confidence: 'low', sources: ['src:britannica'] },
        { attr: 'entryEvent', value: 'Joined the Third Coalition (1805); allied with France 1807–1812; decisive after 1812', from: 1805, to: 1815, confidence: 'high', sources: ['src:lieven'] }
      ]
    },
    {
      id: 'nation:austria', type: 'nation', name: 'Austrian Empire', short: 'Austria',
      side: 'coalition', entered: 1805, exited: 1815, factionKey: 'coalition',
      capital: { name: 'Vienna', lon: 16.37, lat: 48.21 },
      geoNames: ['Austrian Empire', 'Austrian Netherlands'], geoSubjects: ['Austrian Empire', 'Habsburg Austria'],
      summary: 'The Habsburg monarchy was defeated by Napoleon three times (1805, 1809) before its foreign minister Metternich steered it into the winning coalition of 1813–14 and hosted the Congress of Vienna.',
      objectives: ['Contain France and preserve Habsburg power', 'Recover territory lost in earlier defeats', 'Shape the post-war European order'],
      facts: [
        { attr: 'government', value: 'Habsburg monarchy (Empire of Austria from 1804)', from: 1803, to: 1815, confidence: 'high', sources: ['src:britannica'] },
        { attr: 'monarch', value: 'Emperor Francis I (formerly Holy Roman Emperor Francis II)', from: 1804, to: 1815, confidence: 'high', sources: ['src:britannica'] },
        { attr: 'keyMinister', value: 'Prince Klemens von Metternich, Foreign Minister (from 1809)', from: 1809, to: 1815, confidence: 'high', sources: ['src:esdaile'] },
        { attr: 'population', value: r(20000000, 24000000), from: 1803, to: 1815, confidence: 'low', sources: ['src:britannica'] }
      ]
    },
    {
      id: 'nation:prussia', type: 'nation', name: 'Kingdom of Prussia', short: 'Prussia',
      side: 'coalition', entered: 1806, exited: 1815, factionKey: 'coalition',
      capital: { name: 'Berlin', lon: 13.40, lat: 52.52 },
      geoNames: ['Prussia'], geoSubjects: ['Prussia'],
      summary: 'Prussia was crushed at Jena–Auerstedt in 1806 and forced into Napoleon’s orbit, but reformed its army and rose again in 1813, playing a decisive role at Leipzig and — under Blücher — at Waterloo.',
      objectives: ['Restore Prussian independence and territory', 'Drive French power from Germany', 'Rebuild as a leading German state'],
      facts: [
        { attr: 'government', value: 'Absolute monarchy', from: 1803, to: 1815, confidence: 'high', sources: ['src:britannica'] },
        { attr: 'monarch', value: 'King Frederick William III (r. 1797–1840)', from: 1803, to: 1815, confidence: 'high', sources: ['src:britannica'] },
        { attr: 'population', value: r(9000000, 11000000), from: 1803, to: 1815, confidence: 'low', sources: ['src:britannica'] },
        { attr: 'entryEvent', value: 'Joined the Fourth Coalition (1806); resurgent in the War of 1813', from: 1806, to: 1815, confidence: 'high', sources: ['src:esdaile'] }
      ]
    },
    {
      id: 'nation:spain', type: 'nation', name: 'Spain', short: 'Spain',
      side: 'coalition', entered: 1808, exited: 1814, factionKey: 'coalition',
      capital: { name: 'Madrid', lon: -3.70, lat: 40.42 },
      geoNames: ['Spain'], geoSubjects: [],
      summary: 'Spain was Napoleon’s ally until 1808, when he deposed its king and installed his brother Joseph. A national uprising and a brutal guerrilla war — the Peninsular War — followed, tying down huge French forces alongside a British army.',
      objectives: ['Expel the French and restore the Spanish crown', 'Wage guerrilla resistance across the peninsula'],
      facts: [
        { attr: 'government', value: 'Bourbon monarchy; occupied and contested 1808–1814', from: 1808, to: 1814, confidence: 'high', sources: ['src:esdaile'] },
        { attr: 'entryEvent', value: 'National uprising against French occupation (1808)', from: 1808, to: 1814, confidence: 'high', sources: ['src:esdaile'] },
        { attr: 'population', value: r(10000000, 12000000), from: 1808, to: 1814, confidence: 'low', sources: ['src:britannica'] }
      ]
    },
    {
      id: 'nation:portugal', type: 'nation', name: 'Kingdom of Portugal', short: 'Portugal',
      side: 'coalition', entered: 1807, exited: 1814, factionKey: 'coalition',
      capital: { name: 'Lisbon', lon: -9.14, lat: 38.72 },
      geoNames: ['Portugal'], geoSubjects: ['Portugal'],
      summary: 'Britain’s oldest ally, Portugal was invaded in 1807 for refusing the Continental System. It became the base for Wellington’s army, whose lines of Torres Vedras and long campaign helped win the Peninsular War.',
      objectives: ['Resist French invasion and occupation', 'Anchor the British war effort in the Peninsula'],
      facts: [
        { attr: 'government', value: 'Braganza monarchy (court in Brazil from 1808)', from: 1807, to: 1814, confidence: 'high', sources: ['src:britannica'] },
        { attr: 'entryEvent', value: 'Invaded by France (1807); allied to Britain throughout', from: 1807, to: 1814, confidence: 'high', sources: ['src:esdaile'] },
        { attr: 'population', value: r(3000000, 3500000), from: 1807, to: 1814, confidence: 'low', sources: ['src:britannica'] }
      ]
    }
  ];

  /* ---- LEADERS ---------------------------------------------------------- */
  const leaders = [
    { id: 'person:napoleon', name: 'Napoleon Bonaparte', nationId: 'nation:france', role: 'Emperor of the French', years: '1769–1821', side: 'french',
      bio: 'Soldier of the Revolution who seized power in 1799, crowned himself Emperor in 1804, and reshaped Europe through a decade of brilliant campaigns. His invasion of Russia in 1812 broke his army; defeat at Leipzig and Waterloo ended his reign and sent him into exile.',
      relatedBattles: ['battle:austerlitz', 'battle:borodino', 'battle:leipzig', 'battle:waterloo'], confidence: 'high', sources: ['src:roberts'] },
    { id: 'person:wellington', name: 'Duke of Wellington', nationId: 'nation:united-kingdom', role: 'British commander, Peninsula & Waterloo', years: '1769–1852', side: 'coalition',
      bio: 'Arthur Wellesley, Duke of Wellington, drove the French from Spain in the Peninsular War and, with Blücher’s Prussians, defeated Napoleon at Waterloo — the battle that ended the wars.',
      relatedBattles: ['battle:vitoria', 'battle:waterloo'], confidence: 'high', sources: ['src:esdaile'] },
    { id: 'person:nelson', name: 'Horatio Nelson', nationId: 'nation:united-kingdom', role: 'Vice-Admiral, Royal Navy', years: '1758–1805', side: 'coalition',
      bio: 'Britain’s greatest admiral, whose annihilating victory at Trafalgar in 1805 secured British command of the seas for the rest of the wars. He was killed at the moment of triumph.',
      relatedBattles: ['battle:trafalgar'], confidence: 'high', sources: ['src:chandler'] },
    { id: 'person:alexander', name: 'Tsar Alexander I', nationId: 'nation:russia', role: 'Emperor of Russia', years: '1777–1825', side: 'coalition',
      bio: 'Ruler of Russia who fought, then allied with, then finally defeated Napoleon. His refusal to make peace after Moscow fell in 1812 doomed the French invasion and made him a leading architect of the post-war order.',
      relatedBattles: ['battle:austerlitz', 'battle:borodino'], relatedTreaties: ['treaty:tilsit-1807', 'treaty:vienna-1815'], confidence: 'high', sources: ['src:lieven'] },
    { id: 'person:kutuzov', name: 'Mikhail Kutuzov', nationId: 'nation:russia', role: 'Russian Field Marshal', years: '1745–1813', side: 'coalition',
      bio: 'The wily Russian commander who traded space for time against Napoleon in 1812, fought the bloody stand at Borodino, and harried the Grande Armée to destruction on its retreat from Moscow.',
      relatedBattles: ['battle:austerlitz', 'battle:borodino'], confidence: 'high', sources: ['src:lieven'] },
    { id: 'person:metternich', name: 'Klemens von Metternich', nationId: 'nation:austria', role: 'Austrian Foreign Minister', years: '1773–1859', side: 'coalition',
      bio: 'Austria’s foreign minister and master diplomat, who brought his country into the winning coalition in 1813 and dominated the Congress of Vienna, shaping a conservative European order that lasted for decades.',
      relatedTreaties: ['treaty:vienna-1815'], confidence: 'high', sources: ['src:esdaile'] },
    { id: 'person:blucher', name: 'Gebhard von Blücher', nationId: 'nation:prussia', role: 'Prussian Field Marshal', years: '1742–1819', side: 'coalition',
      bio: 'Aggressive and relentless, the old Prussian marshal “Marschall Vorwärts” fought at Leipzig and arrived at Waterloo in the late afternoon, tipping the battle decisively against Napoleon.',
      relatedBattles: ['battle:leipzig', 'battle:waterloo'], confidence: 'high', sources: ['src:esdaile'] }
  ];

  /* ---- BATTLES ---------------------------------------------------------- */
  const B = (id, name, y, m, d, lon, lat, place, victor, sig, opts) => Object.assign(
    { id, type: 'battle', name, date: { y, m, d }, location: { lon, lat, place }, victor, significance: sig, confidence: 'high', sources: ['src:chandler'] }, opts || {});
  const battles = [
    B('battle:trafalgar', 'Battle of Trafalgar', 1805, 10, 21, -6.03, 36.28, 'off Cape Trafalgar, Spain', 'British', 'Nelson’s fleet destroyed the Franco-Spanish navy, securing British command of the seas for the rest of the wars.', { naval: true, decisive: true, commanders: ['person:nelson'] }),
    B('battle:ulm', 'Battle of Ulm', 1805, 10, 20, 9.99, 48.40, 'Ulm, Bavaria', 'French', 'A masterpiece of manoeuvre: an entire Austrian army was surrounded and forced to surrender almost without a fight.', { commanders: ['person:napoleon'] }),
    B('battle:austerlitz', 'Battle of Austerlitz', 1805, 12, 2, 16.88, 49.13, 'Austerlitz (Slavkov), Moravia', 'French', 'The “Battle of the Three Emperors” — Napoleon’s greatest victory, shattering the Third Coalition of Austria and Russia.', { decisive: true, commanders: ['person:napoleon', 'person:kutuzov'] }),
    B('battle:jena', 'Jena–Auerstedt', 1806, 10, 14, 11.59, 50.93, 'Jena, Saxony', 'French', 'Twin battles that destroyed the Prussian army in a single day and left Berlin open to occupation.', { commanders: ['person:napoleon'] }),
    B('battle:friedland', 'Battle of Friedland', 1807, 6, 14, 21.01, 54.44, 'Friedland, East Prussia', 'French', 'A crushing defeat of the Russian army that led directly to the Treaty of Tilsit and the peak of French power.', { commanders: ['person:napoleon'] }),
    B('battle:bailen', 'Battle of Bailén', 1808, 7, 19, -3.77, 38.10, 'Bailén, Andalusia', 'Spanish', 'A Spanish army forced a French corps to surrender — Napoleon’s first major land defeat, igniting resistance across Europe.', {}),
    B('battle:wagram', 'Battle of Wagram', 1809, 7, 6, 16.57, 48.30, 'near Vienna, Austria', 'French', 'A costly victory over Austria that ended the Fifth Coalition, though it showed Napoleon’s enemies were learning.', { commanders: ['person:napoleon'] }),
    B('battle:borodino', 'Battle of Borodino', 1812, 9, 7, 35.82, 55.52, 'Borodino, Russia', 'French (Pyrrhic)', 'The bloodiest single day of the wars. Napoleon took the field and Moscow, but at a ruinous cost that his invasion never recovered from.', { commanders: ['person:napoleon', 'person:kutuzov'], casualties: { french: r(28000, 35000), russian: r(38000, 45000) } }),
    B('battle:leipzig', 'Battle of Leipzig', 1813, 10, 16, 12.37, 51.34, 'Leipzig, Saxony', 'Coalition', 'The “Battle of the Nations” — the largest battle in Europe before WWI. A combined coalition drove Napoleon out of Germany.', { decisive: true, commanders: ['person:napoleon', 'person:blucher'], casualties: { french: r(60000, 73000), coalition: r(52000, 54000) } }),
    B('battle:vitoria', 'Battle of Vitoria', 1813, 6, 21, -2.67, 42.85, 'Vitoria, Spain', 'Coalition', 'Wellington’s victory broke French power in Spain and effectively won the Peninsular War.', { commanders: ['person:wellington'] }),
    B('battle:waterloo', 'Battle of Waterloo', 1815, 6, 18, 4.41, 50.68, 'Waterloo, near Brussels', 'Coalition', 'Napoleon’s final defeat. Wellington held until Blücher’s Prussians arrived, ending the Hundred Days and the wars for good.', { decisive: true, commanders: ['person:napoleon', 'person:wellington', 'person:blucher'] })
  ];

  /* ---- TREATIES --------------------------------------------------------- */
  const treaties = [
    { id: 'treaty:pressburg-1805', type: 'treaty', name: 'Treaty of Pressburg', date: { y: 1805, m: 12, d: 26 },
      signatories: ['nation:france', 'nation:austria'], summary: 'After Austerlitz, Austria ceded territory and left the war. The treaty hastened the end of the Holy Roman Empire and the creation of the French-led Confederation of the Rhine.', confidence: 'high', sources: ['src:esdaile'] },
    { id: 'treaty:tilsit-1807', type: 'treaty', name: 'Treaties of Tilsit', date: { y: 1807, m: 7, d: 7 },
      signatories: ['nation:france', 'nation:russia', 'nation:prussia'], summary: 'Marking the height of Napoleon’s power, Russia allied with France and Prussia was stripped of half its territory. Europe was effectively divided between Paris and Saint Petersburg.', confidence: 'high', sources: ['src:esdaile'] },
    { id: 'treaty:fontainebleau-1814', type: 'treaty', name: 'Treaty of Fontainebleau', date: { y: 1814, m: 4, d: 11 },
      signatories: ['nation:france', 'nation:austria', 'nation:russia', 'nation:prussia'], summary: 'Napoleon abdicated unconditionally and was exiled to the island of Elba. The coalition restored the Bourbon monarchy in France — a settlement that lasted until his return in 1815.', confidence: 'high', sources: ['src:roberts'] },
    { id: 'treaty:vienna-1815', type: 'treaty', name: 'Congress of Vienna (Final Act)', date: { y: 1815, m: 6, d: 9 },
      signatories: ['nation:united-kingdom', 'nation:russia', 'nation:austria', 'nation:prussia', 'nation:france'], summary: 'The great powers redrew the map of Europe, restored monarchies, and built a balance of power designed to contain France. Its conservative order shaped Europe for a generation.', confidence: 'high', sources: ['src:esdaile'] }
  ];

  /* ---- CITIES ----------------------------------------------------------- */
  const cities = [
    { id: 'city:paris', name: 'Paris', lon: 2.35, lat: 48.85, capitalOf: 'nation:france', note: 'Imperial capital of Napoleon’s Europe.' },
    { id: 'city:london', name: 'London', lon: -0.13, lat: 51.5, capitalOf: 'nation:united-kingdom', note: 'Heart of the coalition that financed the war against France.' },
    { id: 'city:vienna', name: 'Vienna', lon: 16.37, lat: 48.21, capitalOf: 'nation:austria', note: 'Habsburg capital; host of the 1814–15 Congress that remade Europe.' },
    { id: 'city:berlin', name: 'Berlin', lon: 13.40, lat: 52.52, capitalOf: 'nation:prussia', note: 'Prussian capital, occupied by France after Jena in 1806.' },
    { id: 'city:st-petersburg', name: 'Saint Petersburg', lon: 30.34, lat: 59.93, capitalOf: 'nation:russia', note: 'Capital of Tsar Alexander I’s Russia.' },
    { id: 'city:madrid', name: 'Madrid', lon: -3.70, lat: 40.42, capitalOf: 'nation:spain', note: 'Spanish capital; its 1808 uprising opened the Peninsular War.' },
    { id: 'city:lisbon', name: 'Lisbon', lon: -9.14, lat: 38.72, capitalOf: 'nation:portugal', note: 'Base of Wellington’s army, shielded by the Lines of Torres Vedras.' },
    { id: 'city:moscow', name: 'Moscow', lon: 37.62, lat: 55.75, note: 'Reached and burned in 1812; its loss did not break Russia, and the retreat destroyed the Grande Armée.' }
  ];

  /* ---- TIMELINE --------------------------------------------------------- */
  const T = (y, m, d, type, title, desc) => ({ id: `event:${y}-${m}-${d}-${type}`, date: { y, m, d }, type, title, desc });
  const timeline = [
    T(1803, 5, 18, 'political', 'War resumes', 'The Peace of Amiens collapses; Britain and France are at war again.'),
    T(1804, 12, 2, 'political', 'Napoleon crowned Emperor', 'Bonaparte crowns himself Emperor of the French in Notre-Dame.'),
    T(1805, 10, 21, 'battle', 'Trafalgar', 'Nelson secures British command of the sea.'),
    T(1805, 12, 2, 'battle', 'Austerlitz', 'Napoleon shatters the Third Coalition in his greatest victory.'),
    T(1806, 10, 14, 'battle', 'Jena–Auerstedt', 'Prussia’s army is destroyed in a single day.'),
    T(1807, 7, 7, 'treaty', 'Treaties of Tilsit', 'France and Russia divide Europe; the Empire reaches its height.'),
    T(1808, 5, 2, 'political', 'Spain rises', 'A Spanish revolt against French occupation begins the Peninsular War.'),
    T(1809, 7, 6, 'battle', 'Wagram', 'Napoleon defeats Austria and ends the Fifth Coalition.'),
    T(1812, 6, 24, 'political', 'Invasion of Russia', 'The Grande Armée crosses the Niemen with ~600,000 men.'),
    T(1812, 9, 7, 'battle', 'Borodino', 'The bloodiest day of the wars; Moscow falls a week later.'),
    T(1813, 10, 16, 'battle', 'Leipzig', 'The Battle of the Nations drives France out of Germany.'),
    T(1814, 4, 11, 'treaty', 'Napoleon abdicates', 'Exiled to Elba; the Bourbons are restored in France.'),
    T(1815, 6, 9, 'treaty', 'Congress of Vienna', 'The powers redraw the map of Europe.'),
    T(1815, 6, 18, 'battle', 'Waterloo', 'Napoleon’s final defeat ends the Hundred Days and the wars.')
  ];

  /* ---- WORLD AT THIS TIME ---------------------------------------------- */
  const worldContext = {
    _default: {
      worldPopulation: { low: 950000000, high: 1000000000, confidence: 'low' },
      largestEmpires: ['Qing China', 'British Empire', 'Russian Empire', 'French Empire'],
      largestCities: ['Beijing', 'London', 'Canton (Guangzhou)', 'Edo (Tokyo)', 'Constantinople'],
      otherConflicts: ['War of 1812 (1812–15)', 'Spanish American wars of independence (from 1808)', 'Russo-Turkish War (1806–12)'],
      science: ['Volta’s electric battery (1800)', 'Dalton’s atomic theory of matter', 'Early steam power and canals'],
      culture: ['Beethoven at his height', 'Goya paints the horrors of war', 'Romanticism sweeps European art and letters']
    },
    1804: { science: ['Trevithick runs the first steam locomotive (1804)'] },
    1808: { culture: ['Goethe publishes Faust, Part One (1808)'] },
    1815: { science: ['Tambora’s 1815 eruption brings the “Year Without a Summer” in 1816'] }
  };

  /* ---- QUIZZES ---------------------------------------------------------- */
  const quizzes = [
    { id: 'quiz:napo-empire', type: 'click-map', prompt: 'Click the empire ruled by Napoleon at the centre of these wars.', accept: { entityId: 'nation:france' }, feedback: { correct: 'Correct — the French Empire dominated continental Europe.', incorrect: 'Look to the heart of western Europe.' } },
    { id: 'quiz:napo-waterloo', type: 'set-year', prompt: 'Move the timeline to the year Napoleon was finally defeated at Waterloo.', accept: { year: 1815 }, feedback: { correct: 'Right — Waterloo, 18 June 1815.', incorrect: 'Try the very last year of the wars.' } },
    { id: 'quiz:napo-trafalgar', type: 'multiple-choice', prompt: 'Which 1805 battle gave Britain command of the seas for the rest of the wars?', options: ['Austerlitz', 'Trafalgar', 'Leipzig', 'Borodino'], accept: { option: 'Trafalgar' }, feedback: { correct: 'Correct — Nelson’s victory at Trafalgar.', incorrect: 'It was a naval battle off the coast of Spain.' } },
    { id: 'quiz:napo-russia', type: 'set-year', prompt: 'Set the timeline to the year Napoleon invaded Russia — the turning point of the wars.', accept: { year: 1812 }, feedback: { correct: 'Correct — the disastrous 1812 invasion of Russia.', incorrect: 'It was the year of Borodino and the burning of Moscow.' } },
    { id: 'quiz:napo-britain', type: 'click-map', prompt: 'Click Napoleon’s one constant enemy — the island power that financed every coalition.', accept: { entityId: 'nation:united-kingdom' }, feedback: { correct: 'Correct — Britain fought France for almost the entire war.', incorrect: 'Look to the islands off north-west Europe.' } }
  ];

  /* ---- ASSEMBLED WAR ---------------------------------------------------- */
  window.HWE.wars['napoleonic-wars'] = {
    id: 'war:napoleonic-wars', schemaVersion: 1,
    meta: {
      name: 'Napoleonic Wars',
      altNames: ['Napoleonic Era', 'War of the Coalitions'],
      years: { start: 1803, end: 1815 }, defaultYear: 1812,
      duration: '12 years (1803–1815)',
      summary: 'A series of wars pitting Napoleon’s French Empire and its satellites against shifting coalitions led and financed by Britain. At its height France dominated Europe; the disastrous 1812 invasion of Russia, defeat at Leipzig and finally Waterloo brought it down.',
      background: 'Growing from the French Revolutionary Wars, the conflict resumed in 1803 after the brief Peace of Amiens. Alliances shifted constantly — Russia and Prussia were French allies for stretches, and Spain switched sides in 1808 — so each nation here is shown on the side it is best remembered for.',
      causesLong: ['French revolutionary expansion and the ambitions of Napoleon', 'A century of Anglo-French rivalry for global power', 'The clash between French hegemony and the European balance of power'],
      causesImmediate: ['Collapse of the Peace of Amiens (1803)', 'Napoleon’s reorganisation of Germany and Italy', 'British refusal to accept French domination of the Continent'],
      turningPoints: ['Trafalgar (1805) secures British seas', 'The Spanish uprising and Peninsular War (from 1808)', 'The catastrophic invasion of Russia (1812)', 'Leipzig (1813) → Waterloo (1815)'],
      outcome: 'Coalition victory; Napoleon defeated, abdicated and exiled; the monarchy restored in France.',
      victor: 'coalition', peaceTreaty: 'treaty:vienna-1815',
      territorialChanges: 'The Holy Roman Empire was abolished and Germany consolidated; the Congress of Vienna redrew Europe’s borders and built a balance of power to contain France.',
      significance: 'Spread the ideas of the French Revolution and the Napoleonic Code across Europe, stirred nationalism, confirmed British naval and imperial dominance, and set the conservative order that governed Europe until 1848.',
      humanCost: 'Total deaths are debated and usually estimated at <strong>3.5–6 million</strong> military and civilian <span class="conf low">low confidence</span> across more than a decade of continental war, disease and famine.',
      consequences: ['The end of the Holy Roman Empire and a consolidated Germany', 'The spread of the Napoleonic Code and modern administration', 'Rising nationalism across Europe and Latin America', 'A British-led century of naval and imperial supremacy']
    },
    factions: {
      empire: { label: 'French Empire & allies', colorVar: '--france' },
      coalition: { label: 'Coalition powers', colorVar: '--central' },
      neutral: { label: 'Neutral / uninvolved', colorVar: '--neutral' }
    },
    legendOrder: ['empire', 'coalition', 'neutral'],
    sides: {
      french: { label: 'French Empire', factionKey: 'empire' },
      coalition: { label: 'Coalition', factionKey: 'coalition' }
    },
    sources: S, nations, leaders, battles, treaties, cities, timeline, worldContext, quizzes,
    /* Two snapshots: the ~1800 map (a France expanding across western Europe with
       its satellite republics) for 1803–1813, then the post-Napoleon 1815 map
       from 1814 — so scrubbing to the end shows the Empire collapse into the
       Congress of Vienna settlement. */
    geo: {
      borderSnapshots: {
        1803: 'https://cdn.jsdelivr.net/gh/aourednik/historical-basemaps@master/geojson/world_1800.geojson',
        1814: 'https://cdn.jsdelivr.net/gh/aourednik/historical-basemaps@master/geojson/world_1815.geojson'
      },
      nameProp: 'NAME', subjectProp: 'SUBJECTO', fit: 'sphere', projection: 'robinson',
      note: 'Borders: an ~1800 basemap for 1803–1813, then the post-war 1815 map from 1814 — so the Empire’s collapse into the Vienna settlement is visible.'
    }
  };
})();
