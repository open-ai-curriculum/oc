#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const nodesRoot = path.join(repoRoot, 'domains', 'mathematics', 'nodes');
const ROBUST_POLICY_VERSION = '1.0';

function loadYamlAsJson(absolutePath) {
  const script = [
    'import json, sys, yaml',
    'from pathlib import Path',
    'path = Path(sys.argv[1])',
    'print(json.dumps(yaml.safe_load(path.read_text())))',
  ].join('\n');

  return JSON.parse(
    childProcess.execFileSync('python3', ['-c', script, absolutePath], {
      cwd: repoRoot,
      encoding: 'utf8',
    })
  );
}

function read(relativeOrAbsolutePath) {
  return fs.readFileSync(relativeOrAbsolutePath, 'utf8');
}

function slugToWords(value) {
  return String(value || '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function displayLabel(config, directory) {
  const candidates = [config.name, config.slug, directory].filter(Boolean);

  for (const candidate of candidates) {
    const cleaned = slugToWords(candidate).replace(new RegExp(`^${String(config.id || '').toLowerCase()}\\s+`), '');
    if (cleaned) {
      return cleaned;
    }
  }

  return slugToWords(directory);
}

function extractSectionBullets(markdown, heading) {
  const lines = markdown.split('\n');
  const bullets = [];
  let inSection = false;

  for (const line of lines) {
    if (line.startsWith('## ')) {
      inSection = line.trim() === `## ${heading}`;
      continue;
    }

    if (!inSection) {
      continue;
    }

    const match = line.match(/^\s*-\s+(.*)$/);
    if (match) {
      bullets.push(match[1].trim().replace(/`/g, ''));
    }
  }

  return bullets;
}

function extractPurpose(markdown) {
  const match = markdown.match(/## Purpose\s+([\s\S]*?)(?:\n## |\n# |$)/);
  if (!match) {
    return '';
  }

  return match[1]
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join(' ');
}

function parseFailureModes(markdown) {
  const headingModes = [];
  for (const match of markdown.matchAll(/^###\s+([A-Za-z0-9-]+)\s+(.+)$/gm)) {
    const id = match[1].trim();
    const label = match[2].trim();
    const blockPattern = new RegExp(`^###\\s+${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s+${label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\n([\\s\\S]*?)(?=^###\\s|\\Z)`, 'm');
    const blockMatch = markdown.match(blockPattern);
    let description = '';
    if (blockMatch) {
      const descMatch = blockMatch[1].match(/Description:\s*\n\s*-\s+(.*)/);
      description = descMatch ? descMatch[1].trim() : '';
    }
    headingModes.push({ id, label, description });
  }

  if (headingModes.length > 0) {
    return headingModes;
  }

  const bulletModes = [];
  for (const match of markdown.matchAll(/^\s*-\s+`([^`]+)`:\s+(.*)$/gm)) {
    bulletModes.push({
      id: match[1].trim(),
      label: slugToWords(match[1]).replace(/\b\w/g, (c) => c.toUpperCase()),
      description: match[2].trim(),
    });
  }

  return bulletModes;
}

function detectRetentionRequirement(config, verificationModelText) {
  if (config.mastery && Number(config.mastery.retention_check_days || 0) > 0) {
    return true;
  }

  return /G4|retention|delayed recheck/i.test(verificationModelText);
}

function detectRichSchema(configText) {
  return /^mastery:/m.test(configText) && /^verification_gates:/m.test(configText);
}

function readNodeContext(directory) {
  const nodeRoot = path.join(nodesRoot, directory);
  const configPath = path.join(nodeRoot, 'node-config.yaml');
  const nodeSpecPath = path.join(nodeRoot, 'node-spec.md');
  const verificationPath = path.join(nodeRoot, 'verification-model.md');
  const failurePath = path.join(nodeRoot, 'failure-taxonomy.md');
  const config = loadYamlAsJson(configPath);
  const configText = read(configPath);
  const nodeSpecText = read(nodeSpecPath);
  const verificationText = read(verificationPath);
  const failureText = read(failurePath);
  const evidenceBullets = extractSectionBullets(nodeSpecText, 'Observable Evidence');
  const evidenceTargets = extractSectionBullets(verificationText, 'Evidence Targets');
  const failureModes = parseFailureModes(failureText);

  return {
    directory,
    nodeRoot,
    config,
    configText,
    nodeSpecText,
    verificationText,
    failureModes,
    purpose: extractPurpose(nodeSpecText) || extractPurpose(verificationText),
    label: displayLabel(config, directory),
    evidence: [...evidenceBullets, ...evidenceTargets].filter(Boolean),
    dependencies: config.dependencies || [],
    dependency_names: [],
    retentionRequired: detectRetentionRequirement(config, verificationText),
    richSchema: detectRichSchema(configText),
  };
}

function chooseRepresentations(context) {
  const label = context.label.toLowerCase();
  const words = label.split(/\s+/);

  if (words.includes('equation') || words.includes('expressions') || words.includes('expression')) {
    return {
      direct: 'symbolic form',
      explanation: 'why the inverse or structural move preserves the relationship',
      transfer: 'a balance, word-problem, or missing-value representation',
      retention: 'a fresh symbolic equation after spacing',
    };
  }

  if (words.includes('fraction') || words.includes('share') || words.includes('partitioning')) {
    return {
      direct: 'fraction notation, an area model, or equal-share representation',
      explanation: 'how equal units are preserved and why the representation is valid',
      transfer: 'a recipe, length, or number-line context',
      retention: 'a fresh fraction task after spacing',
    };
  }

  if (words.includes('decimal') || words.includes('place') || words.includes('value')) {
    return {
      direct: 'notation, expanded form, or place-value-chart form',
      explanation: 'how unit relationships change across adjacent places',
      transfer: 'money, measurement, or number-line form',
      retention: 'a fresh decimal-structure task after spacing',
    };
  }

  if (words.includes('measure') || words.includes('length') || words.includes('area') || words.includes('volume') || words.includes('mass') || words.includes('time')) {
    return {
      direct: 'a measurement tool, drawing, or numeric record',
      explanation: 'which unit or attribute controls the reasoning',
      transfer: 'a comparison, conversion, or estimation context',
      retention: 'a fresh measurement task after spacing',
    };
  }

  if (words.includes('data') || words.includes('probability') || words.includes('sampling') || words.includes('inference') || words.includes('distribution')) {
    return {
      direct: 'a bounded table, plot, study summary, or probability model',
      explanation: 'what the representation supports and what it does not support',
      transfer: 'a less-familiar study, graph, or chance context',
      retention: 'a fresh data-analysis task after spacing',
    };
  }

  if (words.includes('graph') || words.includes('coordinate') || words.includes('function') || words.includes('slope') || words.includes('linear')) {
    return {
      direct: 'a table, graph, ordered-pair, or rule form',
      explanation: 'how the representation captures the relationship',
      transfer: 'a contextual or multi-representation variant',
      retention: 'a fresh relationship task after spacing',
    };
  }

  if (words.includes('shape') || words.includes('triangle') || words.includes('circle') || words.includes('polygon') || words.includes('symmetry') || words.includes('transformation')) {
    return {
      direct: 'a labeled diagram or coordinate representation',
      explanation: 'which geometric features stay the same and why',
      transfer: 'a rotated, reflected, or less-familiar diagram',
      retention: 'a fresh geometric task after spacing',
    };
  }

  return {
    direct: 'a bounded symbolic, visual, or contextual form',
    explanation: 'why the structure is valid and what the quantities mean',
    transfer: 'a changed surface form or representation',
    retention: 'a fresh task after spacing',
  };
}

function dedupe(values) {
  return [...new Set(values.filter(Boolean))];
}

function familyBucket(value) {
  const normalized = String(value || '').toLowerCase();
  if (normalized.startsWith('direct')) {
    return 'direct';
  }
  if (normalized === 'explanation') {
    return 'explanation';
  }
  if (normalized === 'error_diagnosis') {
    return 'error_diagnosis';
  }
  if (normalized === 'transfer') {
    return 'transfer';
  }
  if (normalized === 'retention') {
    return 'retention';
  }
  return normalized;
}

function detectCategory(context) {
  const text = `${context.label} ${context.purpose} ${context.evidence.join(' ')}`.toLowerCase();

  if (context.config.id === 'F5') {
    return 'f5';
  }
  if (/equation|inequalit|variable|expression|like term|distribut/.test(text)) {
    return 'algebra';
  }
  if (/fraction|mixed number|equal share|partition/.test(text)) {
    return 'fractions';
  }
  if (/decimal|tenths|hundredths|place[- ]value/.test(text)) {
    return 'decimals';
  }
  if (/signed|integer|absolute value|rational number/.test(text)) {
    return 'signed';
  }
  if (/ratio|rate|percent|proportion|scale/.test(text)) {
    return 'proportional';
  }
  if (/probability|compound event|sample space|independence|conditional/.test(text)) {
    return 'probability';
  }
  if (/probability|sample|inference|distribution|data|study|regression|chi-square|variability/.test(text)) {
    return 'statistics';
  }
  if (/graph|coordinate|function|slope|ordered pair|linear|system/.test(text)) {
    return 'functions';
  }
  if (/triangle|circle|polygon|shape|congruence|similarity|transform|symmetry|angle|trigon/.test(text)) {
    return 'geometry';
  }
  if (/multiply|division|divisibility|factor|multiple|array|equal group/.test(text)) {
    return 'multiplication';
  }
  if (/count|cardinality|numeral|compare small|compose and decompose small|teen|two-digit|multidigit|rounding|estimation/.test(text)) {
    return 'number';
  }
  if (/measure|length|area|perimeter|volume|mass|money|time|clock|unit conversion/.test(text)) {
    return 'measurement';
  }
  if (/pattern|sequence|rule language/.test(text)) {
    return 'patterns';
  }

  return 'generic';
}

function failureLabel(mode) {
  if (!mode) {
    return 'a structural breakdown';
  }
  return slugToWords(mode.label || mode.id).toLowerCase();
}

const promptCatalog = {
  f5: {
    direct: [
      'Compute `3/4 + 1/8` by rewriting to common units and show the equivalent fractions you used.',
      'Compute `5/6 - 1/4` and justify the common denominator choice.',
      'Compute `1 1/2 + 2/3` and show how you preserve the whole-number and fraction structure.',
      'Compute `7/8 - 1/3` and explain how you know the difference is less than 1.',
      'Compute `5/4 + 1/6` and rewrite the result in a mathematically valid form.',
      'Compute `2 1/5 - 3/10` and explain the equivalent-fraction step before subtracting.',
    ],
    explanation: [
      'Explain why `3/4` can be rewritten as `6/8` without changing its value.',
      'Explain why fractions can only be combined directly when they refer to equal-sized parts.',
    ],
    error_diagnosis: [
      'A student says `3/4 + 1/8 = 4/12`. Diagnose the first structural mistake.',
      'A student rewrites `2/3` as `3/4` before adding. Identify the equivalence error.',
    ],
    transfer: [
      'A recipe uses `3/4` cup of oats and `1/8` cup of seeds. How much is used altogether?',
      'A hiker walks `5/6` mile in the morning and `1/4` mile less in the afternoon. How much farther was the morning walk?',
    ],
    retention: [
      'After a delay, solve `2/3 + 1/6` and explain why the rewrite keeps the quantity unchanged.',
    ],
  },
  algebra: {
    direct: [
      'Solve `x + 7 = 19` and show how each step preserves equality.',
      'Solve `4x = 28`, then check the solution by substitution.',
      'Match the equation `n - 5 = 12` to a balance or missing-value situation and solve it.',
    ],
    explanation: [
      'Explain why subtracting the same value from both sides of an equation preserves the solution set.',
      'Explain what the variable represents and why inverse operations help isolate it.',
    ],
    error_diagnosis: [
      'A student solves `x + 5 = 13` by writing `x = 13 + 5`. Diagnose the first structural mistake.',
      'A student solves `3x = 18` by dividing only the `x`. Explain what went wrong.',
    ],
    transfer: [
      'A gym charges a $12 signup fee plus $5 per class. Write and solve an equation for the number of classes if the total was $32.',
      'A balance model has three equal bags and 6 loose counters on one side and 24 counters on the other. Write and solve the equation.',
    ],
    retention: [
      'Two weeks later, solve `m/3 = 8` and explain how you know the result is reasonable.',
    ],
  },
  fractions: {
    direct: [
      'Compute `3/4 + 1/8` by rewriting to common units and show the equivalent fractions you used.',
      'Compute `5/6 - 1/4` and justify the common denominator choice.',
      'Place `2/3` and `5/8` on the same number line and determine which is greater.',
    ],
    explanation: [
      'Explain why `3/4` can be rewritten as `6/8` without changing its value.',
      'Explain why fractions can only be combined directly when they refer to equal-sized parts.',
    ],
    error_diagnosis: [
      'A student says `3/4 + 1/8 = 4/12`. Diagnose the first structural mistake.',
      'A student rewrites `2/3` as `3/4` before adding. Identify the equivalence error.',
    ],
    transfer: [
      'A recipe uses `3/4` cup of oats and `1/8` cup of seeds. How much is used altogether?',
      'A hiker walks `5/6` mile in the morning and `1/4` mile less in the afternoon. How much farther was the morning walk?',
    ],
    retention: [
      'After a delay, solve `2/3 + 1/6` and explain why the rewrite keeps the quantity unchanged.',
    ],
  },
  decimals: {
    direct: [
      'Write `0.47` in expanded form and identify the value of each digit.',
      'Compare `0.6` and `0.57` and justify the comparison with place-value language.',
      'Plot `0.35` on a number line between `0.3` and `0.4`.',
    ],
    explanation: [
      'Explain why the `5` in `0.5` represents a larger value than the `5` in `0.05`.',
      'Explain how moving one place to the right changes the unit value in decimal notation.',
    ],
    error_diagnosis: [
      'A student says `0.8 < 0.35` because 8 is less than 35. Diagnose the place-value mistake.',
      'A student writes `0.4 = 4/100`. Identify the unit mismatch.',
    ],
    transfer: [
      'A runner completes `0.75` km of a 1 km lap. Represent the distance with a decimal, fraction, and place-value description.',
      'A price tag shows `$0.65`. Explain the same amount using ones, tenths, and hundredths language.',
    ],
    retention: [
      'On a delayed check, decompose `1.08` into place-value units and explain how you know each part.',
    ],
  },
  signed: {
    direct: [
      'Compute `-7 + 12` and explain the sign of the result.',
      'Compute `-4(3)` and compare the result to `4(-3)`.',
      'Evaluate `6 - 9` on a number line and with a signed-distance interpretation.',
    ],
    explanation: [
      'Explain why subtracting a negative can increase a quantity.',
      'Explain how sign and magnitude work together in signed-number operations.',
    ],
    error_diagnosis: [
      'A student says `-3 + -5 = 2`. Diagnose the sign reasoning error.',
      'A student computes `6 - (-2)` as `4`. Explain the inverse-structure mistake.',
    ],
    transfer: [
      'A submarine is at `-120` meters and rises `35` meters. Write and solve the signed-number expression.',
      'A team loses 4 yards on one play and gains 11 on the next. Model the net change with signed numbers.',
    ],
    retention: [
      'After a delay, compute `-8 - 5` and justify both the sign and the magnitude.',
    ],
  },
  proportional: {
    direct: [
      'Decide whether the table `(2, 6), (4, 12), (7, 21)` is proportional and justify the constant of proportionality.',
      'Find the unit rate for 18 miles in 3 hours and explain what it means.',
      'Find 15% of 80 and explain how the percent is acting as a rate per hundred.',
    ],
    explanation: [
      'Explain why equal differences alone do not prove a relationship is proportional.',
      'Explain how a unit rate and a constant of proportionality describe the same multiplicative structure.',
    ],
    error_diagnosis: [
      'A student says a table is proportional because it increases by 3 each row. Diagnose the additive-pattern error.',
      'A student scales one quantity by 2 but the other by 3 and still claims proportionality. Identify the breakdown.',
    ],
    transfer: [
      'A map uses 1 cm for every 5 km. How far does 7.2 cm represent, and why is the relationship proportional?',
      'A recipe uses 3 cups of flour for 2 batches. Write an equation relating flour to batches and find the amount for 5 batches.',
    ],
    retention: [
      'On a delayed check, determine whether 4 notebooks for $6 and 10 notebooks for $15 are proportional and justify your reasoning.',
    ],
  },
  statistics: {
    direct: [
      'Classify the study as survey, observational study, or experiment and state what claim is supported.',
      'Use a two-way table or probability model to find the probability of a compound event.',
      'Describe the center and spread of a distribution using the given plot.',
    ],
    explanation: [
      'Explain how sample design affects what can be inferred about a population.',
      'Explain why theoretical probability and short-run experimental results can differ.',
    ],
    error_diagnosis: [
      'A student uses an observational study to claim causation. Diagnose the study-design error.',
      'A student adds overlapping events as if they were disjoint. Identify the double-counting mistake.',
    ],
    transfer: [
      'Read a less-familiar graph or study summary and decide whether the reported conclusion is supported.',
      'Given a probability simulation result, explain whether the difference from theory is surprising or expected.',
    ],
    retention: [
      'After a delay, interpret a new sample summary and state one supported inference and one unsupported claim.',
    ],
  },
  probability: {
    direct: [
      'A spinner has 4 equal red sections, 3 blue sections, and 1 green section. Find the probability of blue or green.',
      'Draw or describe the sample space for flipping a coin and rolling a number cube, then find the probability of heads and an even number.',
      'A bag contains 5 red marbles and 3 yellow marbles. Find the probability of not drawing yellow.',
    ],
    explanation: [
      'Explain why probabilities for all outcomes in a sample space must total 1.',
      'Explain the difference between independent events and overlapping events in a probability model.',
    ],
    error_diagnosis: [
      'A student adds probabilities for two overlapping events as if they were disjoint. Diagnose the double-counting error.',
      'A student says experimental results must match theoretical probability exactly after only 8 trials. Explain the reasoning error.',
    ],
    transfer: [
      'Use a tree diagram, table, or simulation summary to justify the probability of a compound event in a less-familiar context.',
      'Given an experimental probability result, compare it to the theoretical probability and decide whether the difference is plausible.',
    ],
    retention: [
      'After a delay, model a new compound-event situation and justify the probability calculation from the sample space.',
    ],
  },
  functions: {
    direct: [
      'Plot the point `(3, -2)` and explain what each coordinate controls.',
      'Find the slope between `(1, 4)` and `(5, 12)` and interpret it as a rate of change.',
      'Determine whether the table represents a function and justify your decision.',
    ],
    explanation: [
      'Explain how a table, graph, and equation can represent the same linear relationship.',
      'Explain what slope means in both graphical and contextual terms.',
    ],
    error_diagnosis: [
      'A student reverses the coordinates and plots `(3, -2)` as `(-2, 3)`. Diagnose the mapping error.',
      'A student says every straight-looking graph is proportional. Identify the misclassification.',
    ],
    transfer: [
      'A ride-share charges a fixed fee plus a cost per mile. Write a rule, make a table, and interpret the slope and intercept.',
      'Given a graph and a verbal description, decide whether they could represent the same relationship and justify the match.',
    ],
    retention: [
      'On a delayed check, move between a rule, a table, and a graph for a linear relationship and explain the connection.',
    ],
  },
  geometry: {
    direct: [
      'Describe the rigid transformation that maps one figure onto the other on a coordinate grid.',
      'Classify the triangle and justify the classification using its defining attributes.',
      'Find a missing angle or side measure using the structure of the diagram.',
    ],
    explanation: [
      'Explain which properties remain unchanged under a rigid transformation and why that supports congruence.',
      'Explain why the figure belongs to a category in the shape hierarchy.',
    ],
    error_diagnosis: [
      'A student claims two figures are congruent because they look the same size by eye. Diagnose the justification gap.',
      'A student reflects a point across the x-axis but changes both coordinates. Identify the transformation error.',
    ],
    transfer: [
      'Use a transformation or coordinate argument to justify whether two figures are congruent in a less-familiar diagram.',
      'Apply angle or triangle reasoning in a contextual or composite-figure setting.',
    ],
    retention: [
      'After a delay, describe a rigid motion on a grid and explain which measurements are preserved.',
    ],
  },
  multiplication: {
    direct: [
      'Represent `6 × 4` with an array or equal-group drawing and find the product.',
      'Find `7 × 8` using a known fact or decomposition strategy and explain the structure used.',
      'Interpret `24 ÷ 6` as both equal sharing and number of groups.',
    ],
    explanation: [
      'Explain what the two factors mean in an equal-groups or array model.',
      'Explain how a known multiplication fact can help derive a nearby fact.',
    ],
    error_diagnosis: [
      'A student says `3 × 5` means 3 objects total arranged in 5 groups. Diagnose the factor-role confusion.',
      'A student solves `24 ÷ 6` with repeated subtraction but cannot explain what the quotient means. Identify the meaning gap.',
    ],
    transfer: [
      'A classroom has 6 rows of 4 chairs. Represent the situation with an equation, a drawing, and a verbal interpretation.',
      'A baker packs 24 muffins equally into 6 boxes. Explain both the operation and the meaning of the quotient.',
    ],
    retention: [
      'On a delayed check, solve `8 × 6` or `42 ÷ 7` and explain the structure, not just the fact recall.',
    ],
  },
  number: {
    direct: [
      'Count the collection accurately and state how you know the final count represents the whole set.',
      'Compose and decompose the number 14 in two different ways.',
      'Compare 348 and 384 and justify the comparison by place value.',
    ],
    explanation: [
      'Explain why the last counting word tells how many objects are in the set.',
      'Explain how the value of a digit depends on its place.',
    ],
    error_diagnosis: [
      'A student counts objects twice and reports the larger total. Diagnose the one-to-one correspondence error.',
      'A student says 402 is greater than 39 because 2 is greater than 9. Identify the place-value mistake.',
    ],
    transfer: [
      'Use the same number idea with objects, numerals, and spoken language in a less-familiar representation.',
      'Show the same quantity with a drawing, a numeral, and a decomposition statement.',
    ],
    retention: [
      'After a delay, compare or compose a new whole number and explain the reasoning used.',
    ],
  },
  measurement: {
    direct: [
      'Measure the object to the nearest unit and explain the starting point and unit choice.',
      'Find the area or perimeter of the figure and state which attribute you computed.',
      'Convert a quantity within the same measurement system and justify the conversion factor.',
    ],
    explanation: [
      'Explain why the chosen unit fits the attribute being measured.',
      'Explain the difference between measuring length, area, and volume in this situation.',
    ],
    error_diagnosis: [
      'A student starts measuring from the 1 mark instead of 0 and reports the raw endpoint. Diagnose the measurement error.',
      'A student adds all side lengths to find area. Identify the attribute confusion.',
    ],
    transfer: [
      'Use the measurement idea in a real context such as elapsed time, money, area, or conversion.',
      'Estimate first, then measure or compute, and explain whether the result is reasonable.',
    ],
    retention: [
      'On a delayed check, solve a fresh measurement task and explain why the units make sense.',
    ],
  },
  patterns: {
    direct: [
      'Extend the pattern and state the next two terms.',
      'Identify the missing term in the growing pattern and explain the rule.',
      'Sort examples into repeating and growing patterns and justify the classification.',
    ],
    explanation: [
      'Explain the rule that generates the pattern and how you know it continues.',
      'Explain the difference between a repeating pattern and a growing pattern.',
    ],
    error_diagnosis: [
      'A student extends a growing pattern by copying the last shape only. Diagnose the rule-tracking error.',
      'A student calls any pattern with color changes “repeating.” Identify the classification mistake.',
    ],
    transfer: [
      'Apply the same rule in a new representation such as numbers, shapes, or words.',
      'Describe the pattern rule so another student could continue it without seeing the original.',
    ],
    retention: [
      'After a delay, identify and justify the rule of a new pattern representation.',
    ],
  },
  generic: {
    direct: [
      'Complete a bounded task for this node and show the governing mathematical structure clearly.',
      'Solve a second task for the same node using a different representation or entry point.',
    ],
    explanation: [
      'Explain why the structure used in this node is mathematically valid.',
    ],
    error_diagnosis: [
      'Diagnose a peer response and identify the earliest structural mistake.',
    ],
    transfer: [
      'Apply the same capability in a changed surface form or representation.',
    ],
    retention: [
      'On a delayed recheck, complete a fresh task for this node and justify why the result is reasonable.',
    ],
  },
};

function catalogPrompt(context, bucket, variantIndex) {
  const category = detectCategory(context);
  const prompts = promptCatalog[category][bucket] || promptCatalog.generic[bucket];
  return prompts[variantIndex % prompts.length];
}

function dependencyProbePrompt(context, dependencyLabel, variantIndex) {
  const category = detectCategory(context);
  const dependencyText = dependencyLabel || 'the prerequisite node';

  if (category === 'algebra') {
    return variantIndex === 0
      ? `Before solving ${context.label}, complete a prerequisite check on ${dependencyText} and explain how it supports the current equation work.`
      : `Use a quick ${dependencyText} check to explain whether the learner is blocked by prerequisite structure or by ${context.label} itself.`;
  }

  if (category === 'fractions' || category === 'f5') {
    return variantIndex === 0
      ? `Before closing ${context.label}, complete a prerequisite check on ${dependencyText} and explain how that prior understanding supports the fraction reasoning.`
      : `Use a quick ${dependencyText} probe to determine whether the error belongs to the prerequisite or to ${context.label}.`;
  }

  if (category === 'decimals') {
    return `Complete a prerequisite probe on ${dependencyText} to determine whether the decimal error is really a place-value dependency gap.`;
  }

  if (category === 'signed') {
    return `Use a prerequisite check on ${dependencyText} to decide whether the learner’s signed-number error comes from upstream whole-number structure or from current-node reasoning.`;
  }

  if (category === 'proportional') {
    return `Probe ${dependencyText} before diagnosing ${context.label}, and state whether the learner is missing multiplicative structure or only the current proportional application.`;
  }

  if (category === 'probability' || category === 'statistics') {
    return `Run a prerequisite check on ${dependencyText} to determine whether the reported error reflects upstream representation limits or current ${context.label} reasoning.`;
  }

  if (category === 'functions') {
    return `Use a prerequisite probe on ${dependencyText} to see whether the learner is blocked by graph/coordinate foundations or by ${context.label} itself.`;
  }

  if (category === 'geometry') {
    return `Check ${dependencyText} first so the system can distinguish an upstream spatial-structure gap from a true ${context.label} misunderstanding.`;
  }

  if (category === 'multiplication') {
    return `Use a prerequisite check on ${dependencyText} to tell whether the learner is missing equal-group structure or the current multiplication/division idea.`;
  }

  if (category === 'number' || category === 'measurement' || category === 'patterns') {
    return `Probe ${dependencyText} before closing ${context.label}, and state whether the learner is blocked by an upstream knowledge gap.`;
  }

  return `Complete a prerequisite probe on ${dependencyText} and determine whether the learner’s error is upstream or belongs to ${context.label}.`;
}

function familyPrompt(context, family, variantIndex = 0) {
  const bucket = familyBucket(family);
  const base = catalogPrompt(context, bucket, variantIndex);
  const mode = context.failureModes[variantIndex % Math.max(1, context.failureModes.length)];

  if (bucket === 'error_diagnosis') {
    return `${base} Focus on ${failureLabel(mode)}.`;
  }

  return base;
}

function expectedEvidence(context, variantIndex = 0) {
  return context.evidence[variantIndex] || context.evidence[0] || context.purpose || `shows secure reasoning in ${context.label}`;
}

function scoringGuidance(context, family, variantIndex = 0) {
  const bucket = familyBucket(family);
  const evidence = expectedEvidence(context, variantIndex);
  if (bucket === 'error_diagnosis') {
    return `Meets when the learner identifies the dominant breakdown, names the structural issue accurately, and redirects the work toward ${evidence}.`;
  }

  if (bucket === 'retention') {
    return `Meets when the learner still demonstrates ${evidence} on a delayed recheck without a blocking recurrence.`;
  }

  if (bucket === 'transfer') {
    return `Meets when the learner preserves ${evidence} in a changed surface form or representation.`;
  }

  if (bucket === 'explanation') {
    return `Meets when the learner explains the structure coherently and ties the explanation back to ${evidence}.`;
  }

  return `Meets when the learner demonstrates ${evidence} with mathematically valid structure.`;
}

function buildSimpleItem(context, family, variantIndex, failureMode, overrides = {}) {
  const idMap = {
    direct_execution: 'DIR',
    explanation: 'EXP',
    error_diagnosis: 'ERR',
    transfer: 'TRA',
    retention: 'RET',
    prerequisite_probe: 'PRE',
  };
  return {
    item_id: `${context.config.id}-${idMap[family] || 'ITM'}-${String(variantIndex + 1).padStart(3, '0')}`,
    node_id: context.config.id,
    item_family: family,
    prompt: overrides.prompt || familyPrompt(context, family, variantIndex),
    expected_evidence: overrides.expected_evidence || expectedEvidence(context, variantIndex),
    dominant_failure_mode: failureMode ? failureMode.id : undefined,
    scoring_guidance: overrides.scoring_guidance || scoringGuidance(context, family, variantIndex),
    difficulty_band: overrides.difficulty_band,
    variant_role: overrides.variant_role,
    dependency_target: overrides.dependency_target,
    suspected_knowledge_gap_if_incorrect: overrides.suspected_knowledge_gap_if_incorrect,
  };
}

function buildRichItem(context, family, variantIndex, failureModes, overrides = {}) {
  const idMap = {
    direct_execution: 'D',
    explanation: 'E',
    error_diagnosis: 'C',
    transfer: 'T',
    retention: 'R',
    prerequisite_probe: 'P',
  };
  return {
    item_id: `${context.config.id}-${idMap[family] || 'I'}-${String(variantIndex + 1).padStart(3, '0')}`,
    family,
    prompt: overrides.prompt || familyPrompt(context, family, variantIndex),
    target_node: context.config.id,
    secondary_dependency_targets: context.dependencies,
    difficulty_band:
      overrides.difficulty_band ||
      (family === 'transfer' ? 'transfer' : family === 'retention' ? 'retention' : variantIndex > 1 ? 'stretch' : 'core'),
    response_modes_allowed:
      overrides.response_modes_allowed ||
      family === 'explanation'
        ? ['oral_explanation', 'written_explanation', 'diagram_annotation']
        : family === 'error_diagnosis'
          ? ['multiple_choice', 'oral_explanation', 'written_explanation']
          : ['written_symbolic', 'oral_explanation'],
    dominant_failure_modes_if_incorrect: dedupe(failureModes.map((mode) => mode.id)),
    requires_human_scoring: family === 'explanation' || family === 'transfer' || family === 'retention',
    variant_role: overrides.variant_role,
    dependency_target: overrides.dependency_target,
    suspected_knowledge_gap_if_incorrect: overrides.suspected_knowledge_gap_if_incorrect,
    scoring_focus: overrides.scoring_focus,
  };
}

function countPlan(context) {
  const prerequisiteProbeCount = Math.min(2, context.dependencies.length);
  if (context.config.id === 'F5') {
    return {
      direct: 6,
      explanation: 2,
      error_diagnosis: 2,
      transfer: 2,
      retention: 1,
      prerequisite_probe: prerequisiteProbeCount,
    };
  }

  if (context.richSchema) {
    return {
      direct: 4,
      explanation: 2,
      error_diagnosis: 2,
      transfer: 2,
      retention: 1,
      prerequisite_probe: prerequisiteProbeCount,
    };
  }

  return {
    direct: 3,
    explanation: 2,
    error_diagnosis: 2,
    transfer: 2,
    retention: 1,
    prerequisite_probe: prerequisiteProbeCount,
  };
}

function buildDependencyProbe(context, variantIndex, failureMode) {
  const dependencyId = context.dependencies[variantIndex % Math.max(1, context.dependencies.length)];
  const dependencyLabel = context.dependency_names[variantIndex % Math.max(1, context.dependency_names.length)] || dependencyId;
  const overrides = {
    prompt: dependencyProbePrompt(context, dependencyLabel, variantIndex),
    expected_evidence: `shows whether ${dependencyLabel} is secure enough to support ${context.label}`,
    scoring_guidance: `Meets when the learner response makes it possible to distinguish an upstream gap in ${dependencyLabel} from a current-node issue in ${context.label}.`,
    dependency_target: dependencyId,
    suspected_knowledge_gap_if_incorrect: dependencyLabel,
    variant_role: 'prerequisite_probe',
  };

  if (context.richSchema) {
    return buildRichItem(
      context,
      'prerequisite_probe',
      variantIndex,
      [failureMode],
      {
        ...overrides,
        difficulty_band: 'prerequisite',
        response_modes_allowed: ['written_symbolic', 'oral_explanation', 'written_explanation'],
        scoring_focus: 'dependency_disambiguation',
      }
    );
  }

  return buildSimpleItem(context, 'prerequisite_probe', variantIndex, failureMode, overrides);
}

function ensureFailureModeCoverage(items, context) {
  const targetedCounts = new Map(context.failureModes.map((mode) => [mode.id, 0]));

  for (const item of items) {
    const values = dedupe([
      ...(item.dominant_failure_modes_if_incorrect || []),
      ...(item.dominant_failure_mode_targets || []),
      ...(item.dominant_failure_mode ? [item.dominant_failure_mode] : []),
    ]);
    for (const value of values) {
      if (targetedCounts.has(value)) {
        targetedCounts.set(value, targetedCounts.get(value) + 1);
      }
    }
  }

  let supplementIndex = 0;
  for (const mode of context.failureModes) {
    while ((targetedCounts.get(mode.id) || 0) < 2) {
      items.push(
        context.richSchema
          ? buildRichItem(context, 'error_diagnosis', 50 + supplementIndex, [mode], {
              prompt: `A student response shows ${failureLabel(mode)} in ${context.label}. Identify the earliest sign that this failure mode is present.`,
              difficulty_band: 'diagnostic',
              variant_role: 'supplemental_failure_mode_probe',
              scoring_focus: 'failure_mode_confirmation',
            })
          : buildSimpleItem(context, 'error_diagnosis', 50 + supplementIndex, mode, {
              prompt: `A student response shows ${failureLabel(mode)} in ${context.label}. Identify the earliest sign that this failure mode is present.`,
              expected_evidence: `confirms whether ${mode.label} is the dominant breakdown in ${context.label}`,
              scoring_guidance: `Meets when the learner or evaluator can distinguish ${mode.label} from adjacent failure modes.`,
              variant_role: 'supplemental_failure_mode_probe',
            })
      );
      targetedCounts.set(mode.id, (targetedCounts.get(mode.id) || 0) + 1);
      supplementIndex += 1;
    }
  }

  return items;
}

function createItems(context) {
  const plan = countPlan(context);
  const failureModes = context.failureModes.length > 0 ? context.failureModes : [{ id: `${context.config.id}-FM-01`, label: 'structural breakdown' }];
  const items = [];

  const directModes = failureModes.slice(0, Math.max(2, plan.direct));
  for (let i = 0; i < plan.direct; i += 1) {
    const mode = directModes[i % directModes.length];
    const isEdgeVariant = i >= Math.ceil(plan.direct / 2);
    if (context.richSchema) {
      items.push(
        buildRichItem(context, 'direct_execution', i, [mode, failureModes[(i + 1) % failureModes.length]].filter(Boolean), {
          difficulty_band: isEdgeVariant ? 'stretch' : 'core',
          variant_role: isEdgeVariant ? 'edge_case_direct' : 'core_direct',
          scoring_focus: isEdgeVariant ? 'edge_case_stability' : 'core_mastery',
        })
      );
    } else {
      items.push(
        buildSimpleItem(context, 'direct_execution', i, mode, {
          difficulty_band: isEdgeVariant ? 'stretch' : 'core',
          variant_role: isEdgeVariant ? 'edge_case_direct' : 'core_direct',
        })
      );
    }
  }

  for (let i = 0; i < plan.explanation; i += 1) {
    const mode = failureModes[(i + 1) % failureModes.length];
    if (context.richSchema) {
      items.push(buildRichItem(context, 'explanation', i, [mode], { variant_role: 'meaning_probe', scoring_focus: 'meaning_and_justification' }));
    } else {
      items.push(buildSimpleItem(context, 'explanation', i, mode, { difficulty_band: 'core', variant_role: 'meaning_probe' }));
    }
  }

  for (let i = 0; i < plan.error_diagnosis; i += 1) {
    const mode = failureModes[i % failureModes.length];
    if (context.richSchema) {
      items.push(buildRichItem(context, 'error_diagnosis', i, [mode], { difficulty_band: 'diagnostic', variant_role: 'misconception_probe', scoring_focus: 'misconception_disambiguation' }));
    } else {
      items.push(buildSimpleItem(context, 'error_diagnosis', i, mode, { difficulty_band: 'diagnostic', variant_role: 'misconception_probe' }));
    }
  }

  for (let i = 0; i < plan.transfer; i += 1) {
    const mode = failureModes[(i + 2) % failureModes.length];
    if (context.richSchema) {
      items.push(buildRichItem(context, 'transfer', i, [mode], { variant_role: 'transfer_probe', scoring_focus: 'representation_transfer' }));
    } else {
      items.push(buildSimpleItem(context, 'transfer', i, mode, { difficulty_band: 'transfer', variant_role: 'transfer_probe' }));
    }
  }

  for (let i = 0; i < plan.retention; i += 1) {
    const mode = failureModes[(i + 3) % failureModes.length];
    if (context.richSchema) {
      items.push(buildRichItem(context, 'retention', i, [mode], { variant_role: 'retention_recheck', scoring_focus: 'retention_stability' }));
    } else {
      items.push(buildSimpleItem(context, 'retention', i, mode, { difficulty_band: 'retention', variant_role: 'retention_recheck' }));
    }
  }

  for (let i = 0; i < plan.prerequisite_probe; i += 1) {
    const mode = failureModes[(i + 1) % failureModes.length];
    items.push(buildDependencyProbe(context, i, mode));
  }

  return ensureFailureModeCoverage(items, context);
}

function normalizeItem(item) {
  return Object.fromEntries(Object.entries(item).filter(([, value]) => value !== undefined));
}

function buildBank(context) {
  return {
    node_id: context.config.id,
    policy_version: ROBUST_POLICY_VERSION,
    ...(context.richSchema ? { version: '0.3' } : {}),
    items: createItems(context).map(normalizeItem),
  };
}

function main() {
  const directories = fs
    .readdirSync(nodesRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  const contexts = directories.map((directory) => readNodeContext(directory));
  const nameById = new Map(contexts.map((context) => [context.config.id, context.label]));

  for (const context of contexts) {
    context.dependency_names = context.dependencies.map((dependencyId) => nameById.get(dependencyId) || dependencyId);
  }

  for (const context of contexts) {
    const bank = buildBank(context);
    const bankPath = path.join(context.nodeRoot, 'item-bank.json');
    fs.writeFileSync(bankPath, `${JSON.stringify(bank, null, 2)}\n`, 'utf8');
  }

  console.log(`Upgraded mathematics item banks to robust policy ${ROBUST_POLICY_VERSION} for ${directories.length} node packages.`);
}

main();
