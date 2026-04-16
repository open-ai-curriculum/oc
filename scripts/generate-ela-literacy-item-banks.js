#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const nodesRoot = path.join(repoRoot, 'domains', 'ela_literacy', 'nodes');
const POLICY_VERSION = '1.0';
const BANK_VERSION = '0.3';

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

function read(absolutePath) {
  return fs.readFileSync(absolutePath, 'utf8');
}

function slugToWords(value) {
  return String(value || '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function titleCase(words) {
  return slugToWords(words)
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function cleanSentence(value) {
  return String(value || '')
    .replace(/[`"]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\.$/, '');
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
      bullets.push(cleanSentence(match[1]));
    }
  }

  return bullets;
}

function extractPurpose(markdown) {
  const match = markdown.match(/## Purpose\s+([\s\S]*?)(?:\n## |\n# |$)/);
  if (!match) {
    return '';
  }

  return cleanSentence(
    match[1]
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .join(' ')
  );
}

function parseFailureModes(markdown) {
  const headingModes = [];
  for (const match of markdown.matchAll(/^###\s+([A-Za-z0-9-]+)\s+(.+)$/gm)) {
    const id = match[1].trim();
    const label = cleanSentence(match[2]);
    const blockPattern = new RegExp(
      `^###\\s+${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s+${label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\n([\\s\\S]*?)(?=^###\\s|\\Z)`,
      'm'
    );
    const blockMatch = markdown.match(blockPattern);
    let description = '';
    if (blockMatch) {
      const descMatch = blockMatch[1].match(/description:\s*\n\s*-\s+(.*)/i);
      description = descMatch ? cleanSentence(descMatch[1]) : '';
    }
    headingModes.push({ id, label, description });
  }

  if (headingModes.length > 0) {
    return headingModes;
  }

  return [...markdown.matchAll(/^\s*-\s+`([^`]+)`:\s+(.*)$/gm)].map((match) => ({
    id: match[1].trim(),
    label: titleCase(match[1]),
    description: cleanSentence(match[2]),
  }));
}

function buildDependencyNameMap(directories) {
  const map = new Map();
  for (const directory of directories) {
    const config = loadYamlAsJson(path.join(nodesRoot, directory, 'node-config.yaml'));
    map.set(config.id, titleCase(config.name || directory));
  }
  return map;
}

function detectRetentionRequirement(config, verificationText) {
  if (config.mastery && Number(config.mastery.retention_check_days || 0) > 0) {
    return true;
  }

  return /G4|retention|delayed recheck/i.test(verificationText);
}

function familyProfile(nodeId) {
  const prefix = String(nodeId || '').replace(/[0-9].*$/, '');

  const profiles = {
    O: {
      context: 'oral-language routine',
      changedSurface: 'a new partner, routine, or interaction cue',
      responseModes: ['observed_performance', 'oral_response', 'gesture_or_pointing'],
      explanationModes: ['teacher_annotation', 'oral_response', 'gesture_or_pointing'],
    },
    P: {
      context: 'print-awareness task',
      changedSurface: 'a changed book, page layout, or tracking surface',
      responseModes: ['observed_performance', 'pointing_or_tracking', 'oral_response'],
      explanationModes: ['teacher_annotation', 'oral_response', 'pointing_or_tracking'],
    },
    F: {
      context: 'alphabetic-principle task',
      changedSurface: 'a changed word set, letter pattern, or encoding surface',
      responseModes: ['oral_response', 'written_marking', 'manipulative_selection'],
      explanationModes: ['oral_response', 'teacher_annotation', 'written_marking'],
    },
    FR: {
      context: 'foundational reading task',
      changedSurface: 'a changed word pattern, text surface, or encoding demand',
      responseModes: ['oral_response', 'written_marking', 'pointing_or_tracking'],
      explanationModes: ['oral_response', 'teacher_annotation', 'written_marking'],
    },
    RC: {
      context: 'text-comprehension task',
      changedSurface: 'a changed short text, prompt format, or evidence demand',
      responseModes: ['oral_response', 'written_response', 'teacher_annotation'],
      explanationModes: ['oral_explanation', 'written_explanation', 'teacher_annotation'],
    },
    R: {
      context: 'reading-analysis task',
      changedSurface: 'a changed text set, genre, or analytic prompt',
      responseModes: ['written_response', 'oral_response', 'annotation'],
      explanationModes: ['written_explanation', 'oral_explanation', 'annotation'],
    },
    L: {
      context: 'language-control task',
      changedSurface: 'a changed sentence set, revision demand, or usage context',
      responseModes: ['written_response', 'editing_marks', 'oral_explanation'],
      explanationModes: ['written_explanation', 'oral_explanation', 'editing_marks'],
    },
    W: {
      context: 'writing-composition task',
      changedSurface: 'a changed prompt, audience, or source-support demand',
      responseModes: ['written_response', 'dictation', 'oral_planning'],
      explanationModes: ['oral_explanation', 'written_explanation', 'teacher_annotation'],
    },
    WC: {
      context: 'structured writing task',
      changedSurface: 'a changed source set, genre, or response structure',
      responseModes: ['written_response', 'oral_planning', 'annotation'],
      explanationModes: ['written_explanation', 'oral_explanation', 'annotation'],
    },
    AC: {
      context: 'advanced analysis task',
      changedSurface: 'a changed source set, discipline, or rhetorical frame',
      responseModes: ['written_response', 'annotation', 'oral_explanation'],
      explanationModes: ['written_explanation', 'oral_explanation', 'annotation'],
    },
    A: {
      context: 'advanced analysis task',
      changedSurface: 'a changed source set, genre pairing, or synthesis frame',
      responseModes: ['written_response', 'annotation', 'oral_explanation'],
      explanationModes: ['written_explanation', 'oral_explanation', 'annotation'],
    },
  };

  return profiles[prefix] || {
    context: 'literacy task',
    changedSurface: 'a changed text, prompt, or response mode',
    responseModes: ['written_response', 'oral_response', 'teacher_annotation'],
    explanationModes: ['written_explanation', 'oral_explanation', 'teacher_annotation'],
  };
}

function pickEvidence(nodeSpecText, verificationText) {
  const combined = [
    ...extractSectionBullets(nodeSpecText, 'Observable Evidence'),
    ...extractSectionBullets(verificationText, 'Evidence Targets'),
  ].filter(Boolean);

  return [...new Set(combined)];
}

function buildContext(directory, dependencyNameMap) {
  const nodeRoot = path.join(nodesRoot, directory);
  const config = loadYamlAsJson(path.join(nodeRoot, 'node-config.yaml'));
  const nodeSpecText = read(path.join(nodeRoot, 'node-spec.md'));
  const verificationText = read(path.join(nodeRoot, 'verification-model.md'));
  const failureText = read(path.join(nodeRoot, 'failure-taxonomy.md'));
  const failureModes = parseFailureModes(failureText);

  return {
    directory,
    nodeRoot,
    config,
    nodeSpecText,
    verificationText,
    label: titleCase(config.name || directory),
    purpose: extractPurpose(nodeSpecText),
    evidence: pickEvidence(nodeSpecText, verificationText),
    failureModes,
    dependencyIds: Array.isArray(config.dependencies) ? config.dependencies : [],
    dependencyNames: (Array.isArray(config.dependencies) ? config.dependencies : []).map(
      (dependencyId) => dependencyNameMap.get(dependencyId) || dependencyId
    ),
    profile: familyProfile(config.id),
    retentionRequired: detectRetentionRequirement(config, verificationText),
  };
}

function ensureLength(values, fallback, targetLength) {
  const result = [...values];
  while (result.length < targetLength) {
    result.push(fallback);
  }
  return result.slice(0, targetLength);
}

function failureIdAt(context, index) {
  return context.failureModes[index % context.failureModes.length].id;
}

function failurePair(context, firstIndex, secondIndex) {
  const first = failureIdAt(context, firstIndex);
  let second = failureIdAt(context, secondIndex);
  if (second === first && context.failureModes.length > 1) {
    second = failureIdAt(context, secondIndex + 1);
  }
  return [first, second];
}

function promptStem(context, index) {
  const evidence = ensureLength(context.evidence, context.purpose || `demonstrate ${context.label.toLowerCase()}`, 4);
  return evidence[index % evidence.length];
}

function directPrompt(context, index) {
  const evidence = promptStem(context, index).toLowerCase();
  const variants = [
    `Complete a bounded ${context.profile.context} that requires the learner to ${evidence}.`,
    `Show ${context.label.toLowerCase()} in a fresh but controlled ${context.profile.context} and make the learner ${evidence}.`,
    `Use a slightly less-routine ${context.profile.context} to determine whether the learner can still ${evidence}.`,
    `Perform ${context.label.toLowerCase()} under a changed format within the same boundary and verify the learner can still ${evidence}.`,
  ];
  return variants[index % variants.length];
}

function explanationPrompt(context, index) {
  const evidence = promptStem(context, index).toLowerCase();
  const variants = [
    `Explain or annotate how the learner shows that they can ${evidence}, and identify which evidence in the response demonstrates the intended meaning.`,
    `Ask for a brief justification, annotation, or teacher-scored explanation showing why the response used for ${context.label.toLowerCase()} is valid rather than routine only.`,
  ];
  return variants[index % variants.length];
}

function diagnosticPrompt(context, failureMode, index) {
  const description = cleanSentence(failureMode.description || failureMode.label).toLowerCase();
  const variants = [
    `A learner attempt shows ${description}. Diagnose the earliest breakdown and state what evidence separates it from secure ${context.label.toLowerCase()}.`,
    `Review a mismatched response that reflects ${description}. Identify the dominant failure mode and explain why this is not just a minor performance slip.`,
  ];
  return variants[index % variants.length];
}

function transferPrompt(context, index) {
  const variants = [
    `Use ${context.label.toLowerCase()} in ${context.profile.changedSurface} and judge whether the learner preserves the same underlying capability.`,
    `Shift the learner into ${context.profile.changedSurface} and require a response that still demonstrates ${context.label.toLowerCase()} without relying on the original routine.`,
  ];
  return variants[index % variants.length];
}

function retentionPrompt(context) {
  const days = Number(context.config.mastery && context.config.mastery.retention_check_days) || 14;
  return `After approximately ${days} days, run a fresh ${context.profile.context} to confirm the learner still demonstrates ${context.label.toLowerCase()} without re-teaching inside the check.`;
}

function prerequisitePrompt(context, dependencyId, dependencyName, index) {
  const variants = [
    `Before assigning ${context.label.toLowerCase()}, probe whether ${dependencyName.toLowerCase()} is secure enough to support the current task.`,
    `Use a quick dependency check on ${dependencyName.toLowerCase()} to decide whether weak performance on ${context.label.toLowerCase()} is upstream or node-specific.`,
  ];
  return variants[index % variants.length];
}

function buildSchema(context) {
  const prerequisiteTarget = Math.min(2, context.dependencyIds.length);
  const lines = [
    `# ${context.config.id} Item Bank Schema`,
    '',
    'Each item must include:',
    '',
    '- `item_id`',
    '- `family`',
    '- `prompt`',
    '- `target_node`',
    '- `secondary_dependency_targets`',
    '- `difficulty_band`',
    '- `response_modes_allowed`',
    '- `dominant_failure_modes_if_incorrect`',
    '- `requires_human_scoring`',
    '',
    'Coverage minimums for this node:',
    '',
    '- 4 direct execution items',
    '- 2 explanation items',
    '- 2 error diagnosis items',
    '- 2 transfer items',
    '- 1 retention item',
  ];

  if (prerequisiteTarget > 0) {
    lines.push(`- ${prerequisiteTarget} prerequisite probe item${prerequisiteTarget === 1 ? '' : 's'}`);
  }

  lines.push('', 'The current bank is synthetic and intended for structural package validation only.');
  return `${lines.join('\n')}\n`;
}

function buildItem(context, suffix, family, prompt, options = {}) {
  return {
    item_id: `${context.config.id}-${suffix}`,
    family,
    prompt,
    target_node: context.config.id,
    secondary_dependency_targets: context.dependencyIds,
    difficulty_band: options.difficultyBand || 'core',
    response_modes_allowed: options.responseModes || context.profile.responseModes,
    dominant_failure_modes_if_incorrect: options.failureModes || [],
    requires_human_scoring: Boolean(options.requiresHumanScoring),
    variant_role: options.variantRole,
    scoring_focus: options.scoringFocus,
    ...(options.dependencyTarget ? { dependency_target: options.dependencyTarget } : {}),
    ...(options.knowledgeGap ? { suspected_knowledge_gap_if_incorrect: options.knowledgeGap } : {}),
  };
}

function buildBank(context) {
  const items = [];
  const failureModes = context.failureModes;

  items.push(
    buildItem(context, 'D-001', 'direct_execution', directPrompt(context, 0), {
      difficultyBand: 'core',
      failureModes: failurePair(context, 0, 1),
      requiresHumanScoring: false,
      variantRole: 'core_direct',
      scoringFocus: 'core_mastery',
    })
  );
  items.push(
    buildItem(context, 'D-002', 'direct_execution', directPrompt(context, 1), {
      difficultyBand: 'core',
      failureModes: failurePair(context, 1, 2),
      requiresHumanScoring: false,
      variantRole: 'core_direct',
      scoringFocus: 'core_mastery',
    })
  );
  items.push(
    buildItem(context, 'D-003', 'direct_execution', directPrompt(context, 2), {
      difficultyBand: 'stretch',
      failureModes: failurePair(context, 2, 3),
      requiresHumanScoring: true,
      variantRole: 'edge_case_direct',
      scoringFocus: 'edge_case_stability',
    })
  );
  items.push(
    buildItem(context, 'D-004', 'direct_execution', directPrompt(context, 3), {
      difficultyBand: 'stretch',
      failureModes: failurePair(context, 3, 0),
      requiresHumanScoring: true,
      variantRole: 'edge_case_direct',
      scoringFocus: 'edge_case_stability',
    })
  );

  items.push(
    buildItem(context, 'E-001', 'explanation', explanationPrompt(context, 0), {
      difficultyBand: 'core',
      responseModes: context.profile.explanationModes,
      failureModes: [failureModes[0].id],
      requiresHumanScoring: true,
      variantRole: 'meaning_probe',
      scoringFocus: 'meaning_and_justification',
    })
  );
  items.push(
    buildItem(context, 'E-002', 'explanation', explanationPrompt(context, 1), {
      difficultyBand: 'core',
      responseModes: context.profile.explanationModes,
      failureModes: [failureModes[1 % failureModes.length].id],
      requiresHumanScoring: true,
      variantRole: 'meaning_probe',
      scoringFocus: 'meaning_and_justification',
    })
  );

  items.push(
    buildItem(context, 'C-001', 'error_diagnosis', diagnosticPrompt(context, failureModes[0], 0), {
      difficultyBand: 'diagnostic',
      responseModes: ['multiple_choice', 'oral_explanation', 'teacher_annotation'],
      failureModes: [failureModes[0].id],
      requiresHumanScoring: false,
      variantRole: 'misconception_probe',
      scoringFocus: 'misconception_disambiguation',
    })
  );
  items.push(
    buildItem(context, 'C-002', 'error_diagnosis', diagnosticPrompt(context, failureModes[1 % failureModes.length], 1), {
      difficultyBand: 'diagnostic',
      responseModes: ['multiple_choice', 'oral_explanation', 'teacher_annotation'],
      failureModes: [failureModes[1 % failureModes.length].id],
      requiresHumanScoring: false,
      variantRole: 'misconception_probe',
      scoringFocus: 'misconception_disambiguation',
    })
  );

  items.push(
    buildItem(context, 'T-001', 'transfer', transferPrompt(context, 0), {
      difficultyBand: 'transfer',
      failureModes: [failureModes[2 % failureModes.length].id],
      requiresHumanScoring: true,
      variantRole: 'transfer_probe',
      scoringFocus: 'representation_transfer',
    })
  );
  items.push(
    buildItem(context, 'T-002', 'transfer', transferPrompt(context, 1), {
      difficultyBand: 'transfer',
      failureModes: [failureModes[3 % failureModes.length].id],
      requiresHumanScoring: true,
      variantRole: 'transfer_probe',
      scoringFocus: 'representation_transfer',
    })
  );

  if (context.retentionRequired) {
    items.push(
      buildItem(context, 'R-001', 'retention', retentionPrompt(context), {
        difficultyBand: 'retention',
        failureModes: [failureModes[3 % failureModes.length].id],
        requiresHumanScoring: true,
        variantRole: 'retention_recheck',
        scoringFocus: 'retention_stability',
      })
    );
  }

  for (const [index, dependencyId] of context.dependencyIds.slice(0, 2).entries()) {
    const dependencyName = context.dependencyNames[index] || dependencyId;
    const failureMode = failureModes[index % failureModes.length];
    items.push(
      buildItem(
        context,
        `P-00${index + 1}`,
        'prerequisite_probe',
        prerequisitePrompt(context, dependencyId, dependencyName, index),
        {
          difficultyBand: 'prerequisite',
          responseModes: context.profile.explanationModes,
          failureModes: [failureMode.id],
          requiresHumanScoring: false,
          variantRole: 'prerequisite_probe',
          dependencyTarget: dependencyId,
          knowledgeGap: dependencyName.toLowerCase(),
          scoringFocus: 'dependency_disambiguation',
        }
      )
    );
  }

  return {
    node_id: context.config.id,
    policy_version: POLICY_VERSION,
    version: BANK_VERSION,
    items,
  };
}

function main() {
  const directories = fs
    .readdirSync(nodesRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  const dependencyNameMap = buildDependencyNameMap(directories);

  for (const directory of directories) {
    const context = buildContext(directory, dependencyNameMap);
    const schema = buildSchema(context);
    const bank = buildBank(context);

    fs.writeFileSync(path.join(context.nodeRoot, 'item-bank-schema.md'), schema);
    fs.writeFileSync(path.join(context.nodeRoot, 'item-bank.json'), `${JSON.stringify(bank, null, 2)}\n`);
  }

  console.log(`Generated ELA/literacy item banks for ${directories.length} node packages.`);
}

main();
