/* Learning Atlas — Mathematics · Algebra I lessons: the data & statistics strand
   (AI.DS). Teaching-first: every lesson interleaves worked examples
   (workedExample — reveal or supply each line) and focused discover cards, so the
   learner is TAUGHT how to reason about data before being tested on it. These
   lessons build statistical REASONING — reading real (small, invented but
   realistic) datasets, charts and tables — so the worked examples walk through
   interpreting them line by line. Summative checks tag their distractors with the
   misconception each reveals. Registered on MATH.Player.                        */
(function () {
  const P = window.MATH.Player, U = window.MATH.util;
  const reg = P.register;

  /* ---- AI.DS.3 · Scatter Plots & Trend Lines ---------------------------- */
  reg({
    concept: 'scatter-plots', title: 'Scatter Plots & Trend Lines',
    standards: ['AI.DS.3'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'A class records <b>hours studied</b> and <b>test score</b> for each student, then plots one dot per student. What would you expect the cloud of dots to show?',
        options: ['More study tends to go with higher scores — dots drift upward', 'Study time has nothing to do with the score', 'Every student who studied more scored exactly higher'] },

      { kind: 'example', title: 'Read a trend line', component: 'workedExample',
        intro: 'A <b>scatter plot</b> puts one dot per person: x = hours studied, y = test score. The dots drift upward, so we summarise the cloud with a <b>trend line</b> (line of best fit). Here it is: <b>score ≈ 5·(hours) + 60</b>.',
        config: {
          problem: 'Trend line: score ≈ 5·(hours) + 60. Interpret and predict.',
          steps: [
            { text: 'The dots rise from lower-left to upper-right — as hours go up, score goes up. That is a <b>positive</b> relationship.',
              math: 'more hours → higher score = positive correlation' },
            { ask: 'Use the trend line to predict a student’s score after <b>4 hours</b> of study: score ≈ 5·(4) + 60 = ?',
              choices: ['80', '69', '260'], answer: '80',
              why: '5 × 4 = 20, and 20 + 60 = 80. Multiply the slope by the hours, then add the intercept.',
              hint: 'Do the multiplication first: 5 × 4, then add 60.',
              misconceptions: { '69': 'You added 4 + 5 + 60 — the 5 must be MULTIPLIED by the hours', '260': 'You multiplied (5 + 60) × 4 — only the 5 is the per-hour rate' },
              math: 'score ≈ 5·(4) + 60 = 20 + 60 = 80' },
            { ask: 'The slope is 5. What does that 5 MEAN in this context?',
              choices: ['Each extra hour of study is worth about +5 points', 'A student with no study scores 5', 'The best score is 5'],
              answer: 'Each extra hour of study is worth about +5 points',
              why: 'Slope is the RATE — the change in score for each one-hour increase in study.',
              hint: 'Slope = how much y changes for each +1 in x.',
              misconceptions: { 'A student with no study scores 5': 'The value at zero study is the INTERCEPT (60), not the slope', 'The best score is 5': 'Slope isn’t a ceiling — it’s the per-hour increase' } },
            { text: 'The intercept 60 is the value where the line meets the y-axis — the predicted score at <b>0 hours</b> of study.',
              math: 'score at 0 hours ≈ 5·(0) + 60 = 60',
              note: 'Slope = rate (per-hour change). Intercept = starting value (at x = 0).' }
          ],
          done: 'A trend line turns a cloud of dots into a rule: slope is the rate, intercept is the starting value, and you plug in x to predict y.'
        } },

      { kind: 'discover', title: 'Direction and strength',
        text: 'A scatter plot shows two things at once. <b>Direction</b>: dots rising left-to-right = <b>positive</b> correlation; falling = <b>negative</b>; no drift = <b>no</b> correlation. <b>Strength</b>: how tightly the dots hug a line — a thin, tidy band is <b>strong</b>; a fat, scattered cloud is <b>weak</b>. Strength is about the SCATTER, not how steep the line is. A trend line just summarises the whole cloud in one rule.',
        rule: 'direction = rising / falling / flat · strength = tight band vs loose cloud' },

      { kind: 'explore', title: 'Read the clouds', intro: 'Name the direction and strength from a description of the dots.', component: 'problemSet',
        config: { problems: [
          { prompt: 'Dots form a tight band rising left-to-right. This is…', answer: 'strong positive', choices: ['strong positive', 'weak positive', 'strong negative'], hint: 'Rising = positive; tight band = strong.' },
          { prompt: 'As x rises, y falls, but the dots are widely scattered around the trend. This is…', answer: 'weak negative', choices: ['weak negative', 'strong negative', 'no correlation'], hint: 'Falling = negative; wide scatter = weak.' },
          { prompt: 'The dots are a shapeless blob — no upward or downward drift at all. This is…', answer: 'no correlation', choices: ['no correlation', 'weak positive', 'strong negative'], hint: 'No drift in either direction.' }
        ] } },

      { kind: 'example', title: 'Negative trend — and the danger of extrapolating', component: 'workedExample',
        intro: 'A café records the <b>outdoor temperature</b> (°C) vs <b>cups of hot cocoa</b> sold. The dots fall left-to-right, and the fitted line is <b>cocoa ≈ −2·(temp) + 50</b>. The data only covers temperatures from 0 °C to 20 °C.',
        config: {
          problem: 'cocoa ≈ −2·(temp) + 50, data from 0 °C to 20 °C.',
          steps: [
            { ask: 'The slope is −2. What is the relationship?',
              choices: ['Negative — hotter days sell fewer cocoas', 'Positive — hotter days sell more cocoas', 'No relationship'],
              answer: 'Negative — hotter days sell fewer cocoas',
              why: 'A negative slope means y goes DOWN as x goes up: each extra degree ≈ 2 fewer cocoas.',
              hint: 'A minus slope means the line falls.',
              misconceptions: { 'Positive — hotter days sell more cocoas': 'A NEGATIVE slope falls — cocoa sales drop as it warms', 'No relationship': 'There is a clear downward trend; the slope isn’t zero' } },
            { text: 'Predict WITHIN the data — a 10 °C day is inside the 0–20 range, so this is a safe <b>interpolation</b>:',
              math: 'cocoa ≈ −2·(10) + 50 = −20 + 50 = 30 cups' },
            { ask: 'Now plug in <b>40 °C</b> — far outside the 0–20 °C data. The line predicts cocoa ≈ −2·(40) + 50 = −30. What’s the problem?',
              choices: ['−30 cups is impossible — extrapolating that far is unreliable', 'The café really will sell −30 cups', 'The slope must be wrong'],
              answer: '−30 cups is impossible — extrapolating that far is unreliable',
              why: 'A line fit to 0–20 °C says nothing trustworthy about 40 °C. Pushed far enough it gives nonsense like negative cups.',
              hint: 'The model was only fit to a limited range of x.',
              misconceptions: { 'The café really will sell −30 cups': 'You can’t sell negative cups — the model has left the range where it holds', 'The slope must be wrong': 'The slope is fine INSIDE the data; the error is trusting it far OUTSIDE it' } },
            { text: 'Interpolation (inside the data) is safe; extrapolation (far beyond it) is a guess.',
              math: '10 °C: trust it · 40 °C: don’t',
              note: 'And a trend, even a strong one, is not proof of cause — see the next card.' }
          ],
          done: 'Read the slope’s sign for direction, predict safely INSIDE the data, and distrust predictions pushed far beyond where the line was fit.'
        } },

      { kind: 'discover', title: 'Interpolate safely, extrapolate carefully — and mind causation',
        text: 'Predicting <b>inside</b> the range of the data is <b>interpolation</b> — usually safe. Predicting <b>far outside</b> it is <b>extrapolation</b> — risky, because you have no evidence the pattern continues (and it can spit out impossible values). And beware the biggest trap: a correlation, even a strong one, does <b>not</b> prove one thing CAUSES the other. Ice-cream sales and drownings rise together — both are driven by hot weather, not by each other. <b>Correlation ≠ causation.</b>',
        rule: 'inside the data = interpolate (safe) · far outside = extrapolate (risky) · correlation ≠ cause' },

      { kind: 'practice', difficulty: 'easy', title: 'Use the trend line', component: 'problemSet',
        config: { problems: [
          { prompt: 'Trend line <b>y ≈ 3x + 10</b>. Predict y when x = 5.', answer: '25', choices: ['25', '18', '65'], hint: '3 × 5 = 15, then + 10.' },
          { prompt: 'A scatter plot’s dots rise steadily left-to-right in a tidy band. The correlation is…', answer: 'strong positive', choices: ['strong positive', 'strong negative', 'no correlation'], hint: 'Rising and tight.' },
          { prompt: 'In <b>y ≈ 4x + 20</b>, the number <b>20</b> is the…', answer: 'starting value (y when x = 0)', choices: ['starting value (y when x = 0)', 'rate of change', 'largest possible y'], hint: 'Set x = 0.' }
        ] } },

      { kind: 'challenge', difficulty: 'challenge', title: 'Read it carefully', component: 'problemSet',
        config: { problems: [
          { prompt: 'A line fit to data from x = 1 to x = 10 is used to predict y at x = 100. This is…', answer: 'extrapolation — unreliable', choices: ['extrapolation — unreliable', 'interpolation — safe', 'always exactly right'], hint: 'x = 100 is far outside 1–10.' },
          { prompt: 'Cities with more firefighters have more fire damage. Best conclusion?', answer: 'Bigger fires cause both more firefighters AND more damage — not cause and effect between them', choices: ['Bigger fires cause both more firefighters AND more damage — not cause and effect between them', 'Firefighters cause fire damage', 'Removing firefighters would cut damage'], hint: 'A hidden third factor drives both.' }
        ] } },

      { kind: 'mastery', title: 'Scatter plot check', component: 'problemSet',
        config: { problems: [
          { prompt: 'Line A is steep; Line B is gentle. Both clouds hug their line equally tightly. Which correlation is STRONGER?', answer: 'Equally strong — steepness isn’t strength', choices: ['Equally strong — steepness isn’t strength', 'Line A — it’s steeper', 'Line B — it’s gentler'], hint: 'Strength is about scatter, not slope.', misconceptions: { 'Line A — it’s steeper': 'Steepness is the SLOPE (rate); strength is how tightly dots hug the line', 'Line B — it’s gentler': 'A gentle line can be just as strong — strength is about the scatter, not the slope' } },
          { prompt: 'Trend line <b>y ≈ 2x + 7</b>. Predict y at x = 6.', answer: '19', choices: ['19', '15', '84'], hint: '2 × 6 = 12, then + 7.', misconceptions: { '15': 'You added 2 + 6 + 7 — the 2 must be MULTIPLIED by x', '84': 'You did (2 + 7) × ... — only the 2 is the per-x rate' } },
          { prompt: 'A trend line predicts 82 for a student. She actually scored 75. What does this show?', answer: 'A trend line predicts a TYPICAL value, not an exact one', choices: ['A trend line predicts a TYPICAL value, not an exact one', 'The trend line is broken', 'She should have scored 82'], hint: 'Real dots scatter around the line.', misconceptions: { 'The trend line is broken': 'Individual dots always scatter around a line of best fit — that’s normal', 'She should have scored 82': 'The line gives an average expectation, not a guarantee for any one person' } },
          { prompt: 'More sunscreen sold correlates with more sunburns. This means…', answer: 'Both rise on sunny days — correlation isn’t causation', choices: ['Both rise on sunny days — correlation isn’t causation', 'Sunscreen causes sunburns', 'Sunburns cause sunscreen sales'], hint: 'A hidden cause (sunshine) drives both.', misconceptions: { 'Sunscreen causes sunburns': 'Correlation ≠ causation — sunny weather drives both up together', 'Sunburns cause sunscreen sales': 'Reversing the arrow is still confusing correlation with cause' } }
        ] } },

      { kind: 'reflect', title: 'Think it over',
        prompt: 'Two scatter plots both slope upward. One is a thin tidy band, the other a fat cloud. How do their DIRECTION and STRENGTH compare — and why isn’t slope the same as strength?',
        starters: ['Both have a positive direction because', 'The tight band is stronger because', 'Slope tells me the rate, but strength tells me'] },

      { kind: 'extend', title: 'Go further', intro: 'Take scatter plots into the world.',
        items: [
          { icon: '📊', label: 'Plot your own', detail: 'Record daily screen-time vs sleep for a week. Plot the dots — do they drift up, down, or nowhere?' },
          { icon: '🚫', label: 'Spot a fake cause', detail: 'Find a headline claiming X causes Y from a correlation. What third factor might drive both?' },
          { icon: '📐', label: 'Fit it two ways', detail: 'Sketch a line by eye through a cloud, then have a spreadsheet compute the line of best fit. How close were you?' }
        ] }
    ]
  });

  /* ---- AI.DS.5 · Two-Way Tables ----------------------------------------- */
  reg({
    concept: 'two-way-tables', title: 'Two-Way Tables',
    standards: ['AI.DS.5'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'You survey 60 students about two yes/no questions — <b>plays a sport?</b> and <b>has a job?</b> How many numbers do you need to show every combination?',
        options: ['Four — one count for each Yes/No pair', 'Two — just the two totals', 'One — the total of 60'] },

      { kind: 'example', title: 'Read joint and marginal counts', component: 'workedExample',
        intro: 'A <b>two-way table</b> crosses two categorical variables. Here are 60 students by <b>plays a sport</b> (rows) and <b>has a job</b> (columns):<br><table border="1" cellpadding="6" style="border-collapse:collapse;margin-top:6px"><tr><th></th><th>Job: Yes</th><th>Job: No</th><th>Total</th></tr><tr><th>Sport: Yes</th><td>12</td><td>18</td><td>30</td></tr><tr><th>Sport: No</th><td>8</td><td>22</td><td>30</td></tr><tr><th>Total</th><td>20</td><td>40</td><td>60</td></tr></table>',
        config: {
          problem: '60 students · Sport (Yes/No) × Job (Yes/No).',
          steps: [
            { ask: 'A <b>joint</b> frequency is a single inner cell. How many students play a sport AND have a job?',
              choices: ['12', '30', '20'], answer: '12',
              why: 'It’s the one cell where Sport: Yes meets Job: Yes — 12 students.',
              hint: 'Find the row Sport: Yes and the column Job: Yes; read where they cross.',
              misconceptions: { '30': '30 is the ROW total for Sport: Yes (a marginal), not the single AND cell', '20': '20 is the COLUMN total for Job: Yes (a marginal), not the single AND cell' } },
            { text: 'A <b>marginal</b> frequency is a row or column total — a variable on its own. The Job: Yes column totals 20.',
              math: 'students with a job = 12 + 8 = 20 (marginal)' },
            { ask: 'Convert the joint cell to a percent of the WHOLE group of 60: 12 ÷ 60 = ?',
              choices: ['20%', '40%', '12%'], answer: '20%',
              why: '12 ÷ 60 = 0.20 = 20% of ALL students both play a sport and have a job.',
              hint: 'Divide the cell (12) by the grand total (60).',
              misconceptions: { '40%': 'That’s 12 ÷ 30 — dividing by a row total, not the whole 60', '12%': 'The 12 is a count, not already a percent — divide by 60 first' },
              math: '12 / 60 = 0.20 = 20%' }
          ],
          done: 'A single inner cell is a JOINT count; a row or column total is a MARGINAL count. Divide by the grand total for a percent of everyone.'
        } },

      { kind: 'discover', title: 'Joint cells vs marginal totals',
        text: 'Every two-way table has two kinds of number. A <b>joint</b> frequency is one inner cell — it counts people in BOTH categories at once (Sport: Yes AND Job: Yes = 12). A <b>marginal</b> frequency lives in the margins — the row and column TOTALS — and counts one variable by itself (30 play a sport; 20 have a job). The grand total (60) sits in the bottom corner.',
        rule: 'joint = one inner cell (both) · marginal = a row/column total (one variable)' },

      { kind: 'explore', title: 'Find the numbers', intro: 'Using the same 60-student table (Sport×Job: cells 12, 18, 8, 22), name each kind of number.', component: 'problemSet',
        config: { problems: [
          { prompt: 'How many students play a sport but do NOT have a job? (Sport: Yes, Job: No cell)', answer: '18', choices: ['18', '30', '22'], hint: 'Row Sport: Yes, column Job: No.' },
          { prompt: 'The number 40 (Job: No column total) is a…', answer: 'marginal frequency', choices: ['marginal frequency', 'joint frequency', 'grand total'], hint: 'It’s a column total — one variable alone.' },
          { prompt: 'How many students do NOT play a sport? (a marginal total)', answer: '30', choices: ['30', '8', '22'], hint: 'Add the Sport: No row: 8 + 22.' }
        ] } },

      { kind: 'example', title: 'Conditional frequency — the denominator matters', component: 'workedExample',
        intro: 'Same table. Now the question narrows to a subgroup: <b>“Of the students who play a sport, what fraction have a job?”</b> That’s a <b>conditional</b> frequency — and the trick is choosing the right denominator.',
        config: {
          problem: 'Sport: Yes row = 12 (Job) + 18 (no Job) = 30 students.',
          steps: [
            { text: 'The condition is “play a sport,” so we ONLY look at that row. Its total is the denominator, not 60.',
              math: 'among sport-players: 30 students total' },
            { ask: 'Of those 30 sport-players, how many have a job? Give the conditional fraction.',
              choices: ['12 / 30 = 40%', '12 / 60 = 20%', '12 / 20 = 60%'], answer: '12 / 30 = 40%',
              why: 'Divide the joint cell (12) by the ROW total for sport-players (30): 12/30 = 40%.',
              hint: 'The condition “play a sport” fixes the denominator to that row’s total, 30.',
              misconceptions: { '12 / 60 = 20%': 'That’s the percent of EVERYONE — but we conditioned on sport-players, so divide by 30', '12 / 20 = 60%': '20 is the job-holder column total — the wrong subgroup for “of sport-players”' },
              math: 'P(job | plays sport) = 12 / 30 = 40%' },
            { ask: 'Now reverse it: <b>“Of the students who have a job, what fraction play a sport?”</b> The job column totals 20.',
              choices: ['12 / 20 = 60%', '12 / 30 = 40%', '12 / 60 = 20%'], answer: '12 / 20 = 60%',
              why: 'Now the condition is “have a job,” so divide by the COLUMN total 20: 12/20 = 60%. Same cell, different denominator, different meaning.',
              hint: 'The new condition “have a job” fixes the denominator to the job column total, 20.',
              misconceptions: { '12 / 30 = 40%': 'That answers the FIRST question (of sport-players) — the condition switched to job-holders', '12 / 60 = 20%': 'That divides by everyone — but we conditioned on the 20 job-holders' },
              math: 'P(plays sport | job) = 12 / 20 = 60%' },
            { text: 'Same cell (12), two conditionals: 40% vs 60%. The denominator you pick — row total or column total — is the whole question.',
              math: '12/30 = 40%  ·  12/20 = 60%',
              note: '“P(A given B)” means: restrict to the B group, then find the fraction that are A.' }
          ],
          done: 'A conditional frequency divides a cell by the total of the group you conditioned on — the row total or the column total, never the grand total.'
        } },

      { kind: 'discover', title: 'Conditional = cell ÷ the right total',
        text: 'A <b>conditional</b> (relative) frequency answers “<i>of this subgroup</i>, what fraction…?” It divides one cell by the total of the group named in the condition — a <b>row</b> total or a <b>column</b> total, <b>not</b> the grand total. Crucially, <b>P(A given B)</b> and <b>P(B given A)</b> use DIFFERENT denominators, so they’re usually different numbers. Ask yourself: which group am I inside? That group’s total is your denominator.',
        rule: 'conditional = cell ÷ (row or column) total of the condition · P(A|B) ≠ P(B|A)' },

      { kind: 'practice', difficulty: 'easy', title: 'Name the number', component: 'problemSet',
        config: { problems: [
          { prompt: 'The count in a single inner cell is a…', answer: 'joint frequency', choices: ['joint frequency', 'marginal frequency', 'conditional frequency'], hint: 'One cell = both categories at once.' },
          { prompt: 'A row total or column total is a…', answer: 'marginal frequency', choices: ['marginal frequency', 'joint frequency', 'grand total'], hint: 'It’s in the margin — one variable alone.' },
          { prompt: '“Of the students with a job, the fraction who play a sport” is a…', answer: 'conditional frequency', choices: ['conditional frequency', 'joint frequency', 'marginal frequency'], hint: 'It restricts to a subgroup first.' }
        ] } },

      { kind: 'challenge', difficulty: 'challenge', title: 'Choose the denominator', component: 'problemSet',
        config: { problems: [
          { prompt: 'Table: 40 pets — Cat/Dog × Indoor/Outdoor. Dogs: 10 indoor, 14 outdoor (24 dogs). Of the DOGS, what fraction is indoor?', answer: '10 / 24 ≈ 42%', choices: ['10 / 24 ≈ 42%', '10 / 40 = 25%', '10 / 20 = 50%'], hint: 'Condition = dogs → divide by 24.' },
          { prompt: 'Same table. Which pair of questions gives DIFFERENT answers from the SAME cell?', answer: '“Of dogs, fraction indoor” vs “of indoor pets, fraction dogs”', choices: ['“Of dogs, fraction indoor” vs “of indoor pets, fraction dogs”', '“How many dogs” vs “how many dogs”', '“Grand total” vs “grand total”'], hint: 'P(A|B) vs P(B|A) swap the denominator.' }
        ] } },

      { kind: 'mastery', title: 'Two-way table check', component: 'problemSet',
        config: { problems: [
          { prompt: 'Table of 60: Sport×Job with cells 12, 18, 8, 22 (totals 30/30, 20/40). What fraction of ALL 60 students have a job?', answer: '20 / 60 ≈ 33%', choices: ['20 / 60 ≈ 33%', '20 / 30 ≈ 67%', '12 / 60 = 20%'], hint: 'Marginal 20 ÷ grand total 60.', misconceptions: { '20 / 30 ≈ 67%': 'Dividing by 30 conditions on one row — the question asks about ALL 60', '12 / 60 = 20%': '12 is only the sport-AND-job cell, not everyone with a job (20)' } },
          { prompt: 'Same table. Of the students WITH a job (20 of them), what fraction play a sport?', answer: '12 / 20 = 60%', choices: ['12 / 20 = 60%', '12 / 30 = 40%', '12 / 60 = 20%'], hint: 'Condition = has a job → divide by 20.', misconceptions: { '12 / 30 = 40%': 'That conditions on sport-players (row total 30), but the condition here is “has a job”', '12 / 60 = 20%': 'Dividing by 60 ignores the condition — restrict to the 20 job-holders first' } },
          { prompt: 'Which uses the GRAND total as its denominator?', answer: 'A cell as a percent of everyone', choices: ['A cell as a percent of everyone', 'A conditional on a row', 'A conditional on a column'], hint: 'Only “of everyone” uses the whole group.', misconceptions: { 'A conditional on a row': 'A row conditional divides by that ROW total, not the grand total', 'A conditional on a column': 'A column conditional divides by that COLUMN total, not the grand total' } },
          { prompt: 'Why can “of A, fraction B” differ from “of B, fraction A”?', answer: 'They divide the same cell by different totals', choices: ['They divide the same cell by different totals', 'One of them is always wrong', 'They are always equal'], hint: 'Row total vs column total.', misconceptions: { 'One of them is always wrong': 'Both are valid — they just answer different questions', 'They are always equal': 'They’re only equal by coincidence; the denominators differ' } }
        ] } },

      { kind: 'reflect', title: 'Think it over',
        prompt: 'The cell “Sport: Yes, Job: Yes” never changes. So how can “of sport-players, fraction with a job” and “of job-holders, fraction who play a sport” give different percents?',
        starters: ['A joint cell differs from a marginal total because', 'The denominator I choose changes the answer because', 'P(A given B) is not P(B given A) because'] },

      { kind: 'extend', title: 'Go further', intro: 'Push two-way tables further.',
        items: [
          { icon: '🧮', label: 'Build your own', detail: 'Poll 20 classmates on two yes/no questions and fill a 2×2 table. Do the margins add to 20?' },
          { icon: '🔀', label: 'Both conditionals', detail: 'From any cell, compute P(A|B) and P(B|A). Why are they almost never the same number?' },
          { icon: '📉', label: 'Simpson’s paradox', detail: 'Look up how a trend in a whole table can REVERSE inside every subgroup — the denominator strikes again.' }
        ] }
    ]
  });

  /* ---- AI.DS.1 · Sampling & Studies ------------------------------------- */
  reg({
    concept: 'stats-process', title: 'Sampling & Studies',
    standards: ['AI.DS.1'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'You want to know what fraction of a whole <b>school</b> of 1,000 students exercises daily, but you can only ask 50. Whom should you ask?',
        options: ['50 students chosen at RANDOM from the whole school', '50 students leaving the gym after practice', 'The first 50 who volunteer to answer'] },

      { kind: 'example', title: 'Population, sample, and bias', component: 'workedExample',
        intro: 'You can rarely measure everyone (the <b>population</b>), so you study a <b>sample</b> and generalise. That only works if the sample REPRESENTS the population.',
        config: {
          problem: 'Goal: estimate the fraction of a 1,000-student school that exercises daily.',
          steps: [
            { ask: 'A student surveys 50 people leaving the GYM. What is the population and what is the sample?',
              choices: ['Population = all 1,000 students; sample = the 50 gym-goers', 'Population = the 50 gym-goers; sample = all 1,000', 'Both are the 50 gym-goers'],
              answer: 'Population = all 1,000 students; sample = the 50 gym-goers',
              why: 'The population is the whole group you want to describe (all 1,000). The sample is the subset you actually measure (the 50).',
              hint: 'Population = everyone you care about; sample = the few you measure.',
              misconceptions: { 'Population = the 50 gym-goers; sample = all 1,000': 'Reversed — the population is the big group (1,000), the sample is the small one (50)', 'Both are the 50 gym-goers': 'The population is the whole school you want to describe, not just who you asked' } },
            { ask: 'Why is surveying only gym-goers a BIASED method?',
              choices: ['Gym-goers exercise more than average, so the sample isn’t representative', 'Fifty is too small a number', 'Gyms are always crowded'],
              answer: 'Gym-goers exercise more than average, so the sample isn’t representative',
              why: 'A convenience/voluntary-response sample of gym-goers systematically over-represents active students — it will overstate the true rate.',
              hint: 'Who is SYSTEMATICALLY left out or over-counted?',
              misconceptions: { 'Fifty is too small a number': 'Size isn’t the flaw here — the flaw is WHO’s in the sample; a bigger gym-only sample is just as biased', 'Gyms are always crowded': 'Crowding isn’t the issue — it’s that gym-goers aren’t typical of the whole school' } },
            { text: 'The fix isn’t “ask more gym-goers” — it’s to give <b>every</b> student an equal chance of selection: a <b>random sample</b> of the whole school.',
              math: 'random sample → represents the population',
              note: 'A bigger sample of the wrong group is still biased. Randomness, not size, fights bias.' }
          ],
          done: 'Name the population (everyone) and the sample (whom you measured), then check the sample isn’t systematically skewed. Random selection is the cure for bias.'
        } },

      { kind: 'discover', title: 'A sample must represent the population',
        text: 'A sample is trustworthy only if it <b>represents</b> the population. <b>Random sampling</b> — everyone has an equal chance of being picked — is the best defence against <b>bias</b>. Two classic biased methods: <b>convenience</b> sampling (asking whoever’s easy to reach, like gym-goers) and <b>voluntary-response</b> (only strong-opinion people bother to reply). And a warning: making a biased sample BIGGER doesn’t fix it — a huge sample of the wrong people is still wrong. <b>Bigger ≠ unbiased.</b>',
        rule: 'random sample represents the population · convenience & voluntary-response are biased · size ≠ fairness' },

      { kind: 'explore', title: 'Spot the bias', intro: 'Each sampling method has a flaw — name it.', component: 'problemSet',
        config: { problems: [
          { prompt: 'A radio host asks listeners to call in with their opinion. This is…', answer: 'voluntary-response bias', choices: ['voluntary-response bias', 'a random sample', 'no bias at all'], hint: 'Only people with strong opinions call.' },
          { prompt: 'A reporter interviews people at the nearest coffee shop. This is…', answer: 'convenience bias', choices: ['convenience bias', 'a random sample', 'an experiment'], hint: 'It samples whoever is easy to reach.' },
          { prompt: 'Names are drawn from a hat containing EVERY student. This is…', answer: 'a random sample', choices: ['a random sample', 'convenience bias', 'voluntary-response bias'], hint: 'Everyone has an equal chance.' }
        ] } },

      { kind: 'example', title: 'Observational study or experiment?', component: 'workedExample',
        intro: 'How you gather data decides what you can CONCLUDE. Three types: a <b>survey</b> asks questions; an <b>observational study</b> watches without interfering; an <b>experiment</b> imposes a treatment. Only a randomized experiment can establish CAUSE.',
        config: {
          problem: 'Does a new study app raise test scores?',
          steps: [
            { text: 'Version A: researchers note that students who ALREADY use the app score higher. Nobody was assigned anything — the researchers only watched.',
              math: 'no treatment imposed → observational study' },
            { ask: 'From Version A (observational), what can we conclude?',
              choices: ['The app is ASSOCIATED with higher scores, but may not cause them', 'The app definitely causes higher scores', 'The app definitely lowers scores'],
              answer: 'The app is ASSOCIATED with higher scores, but may not cause them',
              why: 'Motivated students may both choose the app AND study more anyway. Observation shows association, not cause.',
              hint: 'Nobody was randomly assigned — a hidden difference could explain it.',
              misconceptions: { 'The app definitely causes higher scores': 'Observational data can’t prove cause — keen students might self-select into the app', 'The app definitely lowers scores': 'Nothing suggests that; and either way, observation can’t prove causation' } },
            { text: 'Version B: researchers RANDOMLY assign half the students to use the app (treatment) and half not (control), then compare.',
              math: 'treatment imposed + randomized + control group → experiment' },
            { ask: 'From Version B (a randomized experiment), what’s justified?',
              choices: ['If the app group scores higher, the app likely CAUSED the gain', 'Still only an association', 'Nothing — experiments prove nothing'],
              answer: 'If the app group scores higher, the app likely CAUSED the gain',
              why: 'Random assignment balances hidden differences between the groups, so a difference in the outcome can be pinned on the treatment.',
              hint: 'Randomizing WHO gets the treatment removes the self-selection problem.',
              misconceptions: { 'Still only an association': 'Randomized assignment with a control group is exactly what LETS you claim cause', 'Nothing — experiments prove nothing': 'A well-designed randomized experiment is the gold standard for showing cause' } }
          ],
          done: 'Observe without interfering → association only. Randomly IMPOSE a treatment with a control group → you can argue cause.'
        } },

      { kind: 'discover', title: 'Experiments can show cause; observation cannot',
        text: 'An <b>experiment</b> IMPOSES a treatment on subjects, ideally with <b>random assignment</b> to a treatment and a <b>control</b> group. Randomizing balances the hidden differences between groups, so a difference in the outcome can be blamed on the treatment — that’s why an experiment can establish <b>cause</b>. An <b>observational study</b> only watches what’s already there; it can reveal an <b>association</b> but never prove one thing caused another, because some lurking difference might explain it.',
        rule: 'experiment: impose + randomize + control → cause · observational: watch only → association' },

      { kind: 'practice', difficulty: 'easy', title: 'Classify it', component: 'problemSet',
        config: { problems: [
          { prompt: 'Researchers randomly give half the plants a new fertiliser, half none, and compare growth. This is a(n)…', answer: 'experiment', choices: ['experiment', 'observational study', 'survey'], hint: 'A treatment is imposed and randomized.' },
          { prompt: 'A scientist records the diets people already eat and tracks their health. This is a(n)…', answer: 'observational study', choices: ['observational study', 'experiment', 'random sample'], hint: 'Nobody was assigned a diet — only observed.' },
          { prompt: 'To fight bias, a sample should be chosen…', answer: 'at random', choices: ['at random', 'from wherever is convenient', 'from volunteers only'], hint: 'Equal chance for everyone.' }
        ] } },

      { kind: 'challenge', difficulty: 'challenge', title: 'What’s justified?', component: 'problemSet',
        config: { problems: [
          { prompt: 'An observational study finds coffee drinkers live longer. The safest conclusion is…', answer: 'Coffee is associated with longer life; it may not be the cause', choices: ['Coffee is associated with longer life; it may not be the cause', 'Coffee causes longer life', 'Coffee has no effect'], hint: 'Observation → association only.' },
          { prompt: 'A poll of 100,000 people is still biased if…', answer: 'the 100,000 were a self-selected, unrepresentative group', choices: ['the 100,000 were a self-selected, unrepresentative group', 'the number is odd', 'it uses a computer'], hint: 'Bigger doesn’t mean fairer.' }
        ] } },

      { kind: 'mastery', title: 'Sampling & studies check', component: 'problemSet',
        config: { problems: [
          { prompt: 'A website poll gets 50,000 responses but only from people who chose to click. This sample is…', answer: 'biased — a big sample doesn’t fix voluntary response', choices: ['biased — a big sample doesn’t fix voluntary response', 'unbiased because it’s huge', 'unbiased because it’s online'], hint: 'Who opted in?', misconceptions: { 'unbiased because it’s huge': 'Size never cures bias — 50,000 self-selected clickers are still unrepresentative', 'unbiased because it’s online': 'The medium isn’t the issue; the self-selection is' } },
          { prompt: 'An observational study links video games to aggression. This proves…', answer: 'an association, not that games cause aggression', choices: ['an association, not that games cause aggression', 'that games cause aggression', 'that aggression causes gaming'], hint: 'Observation can’t isolate cause.', misconceptions: { 'that games cause aggression': 'Observational studies can’t prove cause — a lurking factor may drive both', 'that aggression causes gaming': 'Reversing the arrow is still a causal claim observation can’t support' } },
          { prompt: 'What single feature lets an EXPERIMENT establish cause?', answer: 'Randomly assigning subjects to treatment vs control', choices: ['Randomly assigning subjects to treatment vs control', 'Having a very large sample', 'Asking clear questions'], hint: 'Randomization balances hidden differences.', misconceptions: { 'Having a very large sample': 'Size helps precision but doesn’t create cause — random assignment does', 'Asking clear questions': 'Good questions matter for surveys, but cause comes from random assignment' } },
          { prompt: 'Voluntary-response samples are…', answer: 'usually biased toward strong opinions', choices: ['usually biased toward strong opinions', 'representative by default', 'the same as random samples'], hint: 'Who bothers to respond?', misconceptions: { 'representative by default': 'People who opt in tend to have stronger feelings — not typical of everyone', 'the same as random samples': 'Random gives everyone an equal chance; voluntary response lets people self-select' } }
        ] } },

      { kind: 'reflect', title: 'Think it over',
        prompt: 'Why can a randomized experiment claim “X causes Y,” while an observational study of the same X and Y can only say they’re “associated”? And why doesn’t a bigger sample fix bias?',
        starters: ['Random assignment matters because', 'An observational study can only show association because', 'A bigger biased sample is still biased because'] },

      { kind: 'extend', title: 'Go further', intro: 'Study design in the real world.',
        items: [
          { icon: '💊', label: 'Placebo & blinding', detail: 'Look up why drug trials give a control group a placebo — and why neither patients nor doctors are told who got which.' },
          { icon: '🗳️', label: 'The 1936 poll disaster', detail: 'A magazine polled millions but predicted the wrong election winner. Research how its sampling was biased.' },
          { icon: '🎲', label: 'Design one yourself', detail: 'Plan an experiment to test whether music helps studying: what’s the treatment, control, and how do you randomize?' }
        ] }
    ]
  });

  /* ---- AI.DS.2 · Misleading Data ---------------------------------------- */
  reg({
    concept: 'data-nonneutral', title: 'Misleading Data',
    standards: ['AI.DS.2'],
    steps: [
      { kind: 'prior', title: 'What do you think?',
        prompt: 'Two bars look wildly different in height — one seems to TOWER over the other. But the values are 92 and 94. How can that be?',
        options: ['The y-axis probably doesn’t start at 0, exaggerating the gap', 'The 94 really is twice the 92', 'Bar charts can’t be trusted at all, ever'] },

      { kind: 'example', title: 'The truncated-axis trick', component: 'workedExample',
        intro: 'A chart is a set of CHOICES, and those choices can mislead. The most common trick is a y-axis that doesn’t start at zero.',
        config: {
          problem: 'Bar chart: Brand A = 92%, Brand B = 94%, y-axis starts at 90%.',
          steps: [
            { text: 'On the chart, Brand B’s bar looks about TWICE as tall as Brand A’s — a dramatic difference.',
              math: 'looks like: B ≈ 2 × A' },
            { ask: 'But the real values are 92% and 94%. How big is the actual difference?',
              choices: ['Just 2 percentage points', 'Double — B is twice A', 'About 90%'],
              answer: 'Just 2 percentage points',
              why: '94 − 92 = 2. The bars only differ by 2 points — the chart makes it look enormous.',
              hint: 'Subtract the two values.',
              misconceptions: { 'Double — B is twice A': 'That’s the VISUAL illusion — the numbers 92 and 94 are nearly identical', 'About 90%': '90 is only where the axis starts, not the difference between the bars' } },
            { ask: 'Why does the chart exaggerate such a tiny gap?',
              choices: ['The y-axis starts at 90, not 0, so it magnifies the 2-point gap', 'The bars are the wrong colour', 'There are too few bars'],
              answer: 'The y-axis starts at 90, not 0, so it magnifies the 2-point gap',
              why: 'Starting the axis at 90 chops off the bottom 90% of every bar, so a 2-point difference fills most of the visible height.',
              hint: 'Look at where the vertical scale begins.',
              misconceptions: { 'The bars are the wrong colour': 'Colour doesn’t distort size — the truncated axis does', 'There are too few bars': 'The count of bars isn’t the issue; the axis start is' } },
            { text: 'The fix: start the y-axis at <b>0</b>. Then both bars are nearly full height and the 2-point gap looks as small as it really is.',
              math: 'axis from 0 → honest heights',
              note: 'Always check where the axis starts before you trust a bar chart’s heights.' }
          ],
          done: 'A truncated y-axis magnifies small differences. Start bar-chart axes at 0 so the visual heights match the real values.'
        } },

      { kind: 'discover', title: 'Check the axis and the baseline',
        text: 'Before trusting any chart, interrogate its axes. Does the y-axis <b>start at 0</b>? A truncated axis magnifies tiny differences into cliffs — for BAR charts, a zero baseline is the honest choice. Are the intervals <b>equal</b> (does 10→20 take the same space as 20→30)? Uneven spacing warps trends. And is there a <b>baseline</b> to compare against at all? A number with nothing to compare it to can be spun any way. The picture can lie even when the numbers are true.',
        rule: 'axis starts at 0? · intervals equal? · is there a baseline to compare?' },

      { kind: 'explore', title: 'Spot the distortion', intro: 'Each chart trick has a name — identify it.', component: 'problemSet',
        config: { problems: [
          { prompt: 'A bar chart’s y-axis runs from 90 to 100, making small gaps look huge. The trick is…', answer: 'truncated y-axis', choices: ['truncated y-axis', 'too many colours', 'a fair chart'], hint: 'Where does the axis start?' },
          { prompt: 'A line chart shows only Jan–Mar (a rising blip) though the year-long trend falls. This is…', answer: 'a cherry-picked time range', choices: ['a cherry-picked time range', 'a truncated axis', 'a random sample'], hint: 'A slice was chosen to tell one story.' },
          { prompt: 'A 3-D pie chart tilts so the front slice looks bigger than an equal back slice. This is…', answer: 'area/perspective distortion', choices: ['area/perspective distortion', 'a fair comparison', 'a cherry-picked range'], hint: 'The tilt inflates the near slice.' }
        ] } },

      { kind: 'example', title: 'The misleading “average”', component: 'workedExample',
        intro: 'Even a single number can mislead. A company boasts its “average salary is $95,000.” The nine employees actually earn (in $1,000s): 30, 32, 34, 35, 36, 38, 40, 40, and one boss at 570.',
        config: {
          problem: 'Salaries ($1,000s): 30, 32, 34, 35, 36, 38, 40, 40, 570. Which “average” is honest?',
          steps: [
            { text: 'The <b>mean</b> adds everything and divides by 9. The total is 855, so mean = 855 ÷ 9 = 95 (i.e. $95,000) — dragged way up by the one 570.',
              math: 'mean = 855 / 9 = 95 ($95k)' },
            { ask: 'The <b>median</b> is the MIDDLE value once sorted (the 5th of 9). What is it?',
              choices: ['36 ($36k)', '95 ($95k)', '570 ($570k)'],
              answer: '36 ($36k)',
              why: 'Sorted, the 5th of the nine values is 36. Half earn less, half more — the typical worker earns about $36k, not $95k.',
              hint: 'Order them and take the middle (5th) value.',
              misconceptions: { '95 ($95k)': 'That’s the MEAN, inflated by the boss — the median ignores that outlier’s size', '570 ($570k)': 'That’s the single highest salary (the outlier), not the middle value' } },
            { ask: 'The boss’s $570k is an <b>outlier</b>. Which average better describes a TYPICAL employee?',
              choices: ['The median ($36k) — outliers barely move it', 'The mean ($95k) — it uses every value', 'Neither is any use'],
              answer: 'The median ($36k) — outliers barely move it',
              why: 'One huge value yanks the mean upward but hardly touches the median, so with a skewed set the median is the honest summary of “typical.”',
              hint: 'Which one does the single giant salary distort?',
              misconceptions: { 'The mean ($95k) — it uses every value': 'Using every value is exactly why the outlier distorts the mean — no typical worker earns $95k', 'Neither is any use': 'The median is very useful here — it resists the outlier’s pull' } },
            { text: 'Same data, two “averages”: $95k (mean) sounds impressive but misleads; $36k (median) is honest when one outlier skews the set.',
              math: 'mean $95k (skewed) vs median $36k (typical)',
              note: 'And beware cherry-picked date ranges too: a short window can reverse the real long-run trend.' }
          ],
          done: 'When outliers or skew are present, the mean can mislead — ask for the median, which describes the typical value more honestly.'
        } },

      { kind: 'discover', title: 'Ask who made it — and mean vs median',
        text: 'A chart is made by someone with a purpose, so ask: <b>who made this, and what do they want me to feel?</b> Watch the summary too. The <b>mean</b> (add-and-divide) gets dragged toward <b>outliers</b> and long tails; the <b>median</b> (the middle value) resists them. With a skewed set — a few giant salaries, one huge house price — the <b>median</b> is usually the honest “typical.” And distrust a <b>cherry-picked</b> time window: a short slice can show the opposite of the real long-run trend.',
        rule: 'who made it & why? · mean is pulled by outliers, median resists · beware cherry-picked windows' },

      { kind: 'practice', difficulty: 'easy', title: 'Read it critically', component: 'problemSet',
        config: { problems: [
          { prompt: 'A bar chart’s y-axis starts at 50 instead of 0. This tends to…', answer: 'exaggerate the differences between bars', choices: ['exaggerate the differences between bars', 'shrink the differences', 'change nothing'], hint: 'It chops off the bottom of every bar.' },
          { prompt: 'Data: 4, 5, 6, 7, 8, 100. Which summary is distorted by the outlier?', answer: 'the mean', choices: ['the mean', 'the median', 'both equally'], hint: 'One giant value pulls the average.' },
          { prompt: 'To judge whether a trend is real, you should look at…', answer: 'the full time range, not a cherry-picked slice', choices: ['the full time range, not a cherry-picked slice', 'only the most recent week', 'only the best-looking part'], hint: 'A slice can tell any story.' }
        ] } },

      { kind: 'challenge', difficulty: 'challenge', title: 'Catch the spin', component: 'problemSet',
        config: { problems: [
          { prompt: 'House prices ($1,000s): 180, 190, 200, 210, 2000. A report cites the “average” as $556k. That figure is the…', answer: 'mean — inflated by the $2M outlier', choices: ['mean — inflated by the $2M outlier', 'median — the typical home', 'a fair summary'], hint: '(180+190+200+210+2000)/5 = 556.' },
          { prompt: 'A chart shows sales “up 300%!” but the y-axis starts at 99. The real rise is from 100 to 103. This is…', answer: 'a truncated axis exaggerating a tiny 3-unit rise', choices: ['a truncated axis exaggerating a tiny 3-unit rise', 'genuine explosive growth', 'a cherry-picked sample'], hint: 'The axis starts at 99, so 100→103 fills the frame.' }
        ] } },

      { kind: 'mastery', title: 'Misleading data check', component: 'problemSet',
        config: { problems: [
          { prompt: 'A bar chart makes 51% look 3× taller than 49%. The most likely cause is…', answer: 'the y-axis doesn’t start at 0', choices: ['the y-axis doesn’t start at 0', '51 really is 3× 49', 'the bars are 3-D'], hint: 'Two-point gap, huge visual.', misconceptions: { '51 really is 3× 49': '51 and 49 are almost equal — the visual is a truncated-axis illusion', 'the bars are 3-D': '3-D can distort, but a 3× illusion from 51 vs 49 screams truncated axis' } },
          { prompt: 'Salaries: 20, 22, 24, 25, 300 (in $1,000s). The HONEST “typical” summary is the…', answer: 'median ($24k)', choices: ['median ($24k)', 'mean ($78.2k)', 'maximum ($300k)'], hint: 'One outlier skews the mean.', misconceptions: { 'mean ($78.2k)': 'The single $300k value drags the mean above every typical earner — no one earns $78k here', 'maximum ($300k)': 'The max is the outlier itself, not a typical value' } },
          { prompt: 'A company shows only its 3 best months out of a declining year. This is…', answer: 'a cherry-picked time range', choices: ['a cherry-picked time range', 'a fair full-year view', 'a truncated axis'], hint: 'A slice was chosen to hide the trend.', misconceptions: { 'a fair full-year view': 'It’s only 3 of 12 months — the full year actually declines', 'a truncated axis': 'The axis isn’t the trick here; the chosen TIME WINDOW is' } },
          { prompt: 'The safest habit when reading any chart is to…', answer: 'ask who made it and check the axes and baseline', choices: ['ask who made it and check the axes and baseline', 'trust it because it’s a chart', 'trust the biggest number'], hint: 'Charts encode choices.', misconceptions: { 'trust it because it’s a chart': 'A chart is a set of choices — it can mislead even with true numbers', 'trust the biggest number': 'The biggest number is often the outlier being used to mislead' } }
        ] } },

      { kind: 'reflect', title: 'Think it over',
        prompt: 'The numbers on a chart can all be TRUE and the chart can still mislead. Give two ways that happens, and how you’d catch each one.',
        starters: ['A truncated y-axis fools me because', 'The mean misleads when', 'Before I trust a chart I check'] },

      { kind: 'extend', title: 'Go further', intro: 'Become a chart sceptic.',
        items: [
          { icon: '🔎', label: 'Find a bad chart', detail: 'Hunt for a real chart with a truncated axis in an ad or news story. Redraw it with the axis starting at 0.' },
          { icon: '⚖️', label: 'Mean vs median race', detail: 'Take any list, then add one huge outlier. Watch the mean leap while the median barely moves.' },
          { icon: '🎨', label: 'Mislead on purpose', detail: 'Make one honest chart and one deceptive chart from the SAME data. Which tricks were easiest to pull?' }
        ] }
    ]
  });
})();
