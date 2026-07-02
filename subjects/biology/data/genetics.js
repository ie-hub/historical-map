/* Life Explorer — topic: Genetics & Inheritance.
   A `kind:'tool'` topic. Instead of a diagram it mounts an interactive Punnett
   square; the rail still carries a glossary of key terms (parts) and quizzes.  */
(function () {
  window.BIO = window.BIO || { topics: {} };

  const parts = [
    { id: 'gene', name: 'Gene', category: 'concept',
      summary: 'A section of DNA that carries the instructions for a particular trait, such as eye colour.',
      functions: ['Codes for a specific trait', 'Passed from parents to offspring'],
      facts: [['Made of', 'DNA'], ['Humans have', '~20,000 genes']], analogy: 'A single recipe in the body’s cookbook.', related: ['allele'] },
    { id: 'allele', name: 'Allele', category: 'concept',
      summary: 'One of the different versions of a gene. You inherit one allele from each parent.',
      functions: ['A variant form of a gene', 'Can be dominant or recessive'],
      facts: [['Example', 'B (brown) vs b (blue)'], ['Inherited', 'One from each parent']], analogy: 'Two versions of the same recipe.', related: ['dominant', 'recessive'] },
    { id: 'dominant', name: 'Dominant allele', category: 'concept',
      summary: 'An allele that shows its effect even when only one copy is present. Written as a capital letter.',
      functions: ['Masks the recessive allele', 'Only one copy needed to show'],
      facts: [['Written', 'Capital letter (B)'], ['Shows when', 'BB or Bb']], analogy: 'The louder voice that gets heard.', related: ['recessive', 'allele'] },
    { id: 'recessive', name: 'Recessive allele', category: 'concept',
      summary: 'An allele whose effect is hidden unless two copies are present. Written as a lower-case letter.',
      functions: ['Hidden when a dominant allele is present', 'Needs two copies to show'],
      facts: [['Written', 'Lower-case letter (b)'], ['Shows when', 'bb only']], analogy: 'The quieter voice, heard only when alone.', related: ['dominant', 'allele'] },
    { id: 'genotype', name: 'Genotype', category: 'concept',
      summary: 'The pair of alleles an organism carries for a trait — for example BB, Bb or bb.',
      functions: ['Describes the alleles present', 'Determines the phenotype'],
      facts: [['Examples', 'BB, Bb, bb'], ['You can’t', 'Always see it directly']], analogy: 'The genetic “code” behind the scenes.', related: ['phenotype', 'allele'] },
    { id: 'phenotype', name: 'Phenotype', category: 'concept',
      summary: 'The physical trait you can actually observe — such as brown or blue eyes.',
      functions: ['The visible/observable trait', 'Results from the genotype'],
      facts: [['Examples', 'Brown eyes, blue eyes'], ['Set by', 'Genotype + environment']], analogy: 'The finished dish you can see and taste.', related: ['genotype'] },
    { id: 'homozygous', name: 'Homozygous', category: 'concept',
      summary: 'Having two identical alleles for a trait — either BB (dominant) or bb (recessive).',
      functions: ['Two of the same allele', 'BB or bb'],
      facts: [['Means', 'Same alleles'], ['Examples', 'BB, bb']], analogy: 'A matching pair.', related: ['heterozygous', 'genotype'] },
    { id: 'heterozygous', name: 'Heterozygous', category: 'concept',
      summary: 'Having two different alleles for a trait — such as Bb. The dominant allele is expressed.',
      functions: ['Two different alleles', 'Shows the dominant trait'],
      facts: [['Means', 'Different alleles'], ['Example', 'Bb → brown']], analogy: 'A mismatched pair — the louder one wins.', related: ['homozygous', 'dominant'] },
  ];

  /* ---- interactive Punnett square ---------------------------------------- */
  const GENOS = ['BB', 'Bb', 'bb'];
  function mount(canvas, api) {
    let p1 = 'Bb', p2 = 'Bb';
    canvas.innerHTML = `
      <div class="punnett">
        <h2>Punnett square — eye colour</h2>
        <p class="pnote"><b>B</b> = brown (dominant) · <b>b</b> = blue (recessive). Pick each parent’s genotype and watch the offspring probabilities.</p>
        <div class="parents">
          <div class="parent"><span class="plab">Parent 1</span><div class="seg" data-p="1"></div></div>
          <div class="parent"><span class="plab">Parent 2</span><div class="seg" data-p="2"></div></div>
        </div>
        <div class="square-wrap"><table class="square" id="sq"></table></div>
        <div class="results" id="pres"></div>
        <p class="note">Tip: open the <b>Parts</b> tab for definitions of allele, genotype, phenotype and more.</p>
      </div>`;

    function seg(pnum, val) {
      return GENOS.map(g => `<button class="seg-btn ${g === val ? 'on' : ''}" data-p="${pnum}" data-g="${g}">${g}</button>`).join('');
    }
    function offspring() {
      const a = p1.split(''), b = p2.split(''), cells = [];
      for (const x of a) for (const y of b) cells.push([x, y].sort().join(''));
      return cells; // [c11,c12,c21,c22]
    }
    function pheno(g) { return g.includes('B') ? 'brown' : 'blue'; }
    function render() {
      canvas.querySelector('[data-p="1"]').innerHTML = seg(1, p1);
      canvas.querySelector('[data-p="2"]').innerHTML = seg(2, p2);
      const a = p1.split(''), b = p2.split(''), c = offspring();
      canvas.querySelector('#sq').innerHTML =
        `<tr><th class="corner"></th><th>${b[0]}</th><th>${b[1]}</th></tr>
         <tr><th>${a[0]}</th><td class="ph-${pheno(c[0])}">${c[0]}</td><td class="ph-${pheno(c[1])}">${c[1]}</td></tr>
         <tr><th>${a[1]}</th><td class="ph-${pheno(c[2])}">${c[2]}</td><td class="ph-${pheno(c[3])}">${c[3]}</td></tr>`;
      const gc = { BB: 0, Bb: 0, bb: 0 }; c.forEach(g => gc[g]++);
      const brown = c.filter(g => pheno(g) === 'brown').length, blue = 4 - brown;
      const gt = GENOS.filter(g => gc[g]).map(g => `${g} ×${gc[g]}`).join(' · ');
      canvas.querySelector('#pres').innerHTML =
        `<div class="rrow"><span class="rlab">Genotypes</span><span class="rval">${gt}</span></div>
         <div class="rrow"><span class="rlab">Phenotypes</span>
           <span class="rval"><span class="ph-chip brown">Brown ${brown}/4 · ${brown * 25}%</span>
           <span class="ph-chip blue">Blue ${blue}/4 · ${blue * 25}%</span></span></div>`;
    }
    canvas.addEventListener('click', e => {
      const btn = e.target.closest('.seg-btn'); if (!btn) return;
      if (btn.dataset.p === '1') p1 = btn.dataset.g; else p2 = btn.dataset.g;
      render();
    });
    render();
  }

  const quizzes = [
    { type: 'multiple-choice', prompt: 'Two Bb parents are crossed. What fraction of offspring are expected to have blue eyes (bb)?', options: ['1/4', '1/2', '3/4', 'All'], answer: '1/4',
      feedback: { correct: 'Correct — a Bb × Bb cross gives 1 BB : 2 Bb : 1 bb, so 1/4 are bb (blue).', incorrect: 'Set both parents to Bb in the tool and count the bb cells.' } },
    { type: 'multiple-choice', prompt: 'An allele whose effect is hidden when a dominant allele is present is called…', options: ['Dominant', 'Recessive', 'Phenotype', 'Homozygous'], answer: 'Recessive',
      feedback: { correct: 'Correct — recessive alleles only show as a pair (bb).', incorrect: 'It only shows when there are two copies.' } },
    { type: 'multiple-choice', prompt: 'An organism with two identical alleles (BB or bb) is…', options: ['Heterozygous', 'Homozygous', 'Dominant', 'A phenotype'], answer: 'Homozygous',
      feedback: { correct: 'Correct — “homo” means same.', incorrect: '“Homo” means same; “hetero” means different.' } },
    { type: 'multiple-choice', prompt: 'The visible trait you can observe — like brown eyes — is the…', options: ['Genotype', 'Allele', 'Phenotype', 'Gene'], answer: 'Phenotype',
      feedback: { correct: 'Correct — the phenotype is what you can see.', incorrect: 'It’s the observable, physical trait.' } },
  ];

  window.BIO.topics['genetics'] = {
    id: 'genetics', name: 'Genetics', short: 'Genetics', kind: 'tool', icon: '🧬', hideLegend: true,
    tagline: 'Alleles, genotypes and inheritance',
    intro: 'Traits pass from parents to offspring through alleles. A Punnett square predicts the chances of each combination. Try crossing two parents and see how the odds change.',
    categories: { concept: 'Key terms' },
    mount, parts, quizzes
  };
})();
