import fs from "fs";
import path from "path";

const repoRoot = "/Volumes/data/development/oc";
const nodesRoot = path.join(repoRoot, "domains/computer_science/nodes");
const inputArg = process.argv[2];
const dataPath = inputArg
  ? path.resolve(inputArg)
  : path.join(repoRoot, "domains/computer_science/entry-wave.json");
const today = "2026-04-15";
const statuses = ["blocked", "emerging", "provisional", "secure", "unstable"];

const nodes = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const catalogPaths = [
  path.join(repoRoot, "domains/computer_science/entry-wave.json"),
  path.join(repoRoot, "domains/computer_science/elementary-bridge-wave.json"),
  path.join(repoRoot, "domains/computer_science/middle-grade-wave.json"),
  path.join(repoRoot, "domains/computer_science/advanced-secondary-wave.json"),
];
const nodeCatalog = new Map();

for (const catalogPath of catalogPaths) {
  if (!fs.existsSync(catalogPath)) continue;
  const catalogNodes = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
  for (const catalogNode of catalogNodes) {
    nodeCatalog.set(catalogNode.id, catalogNode);
  }
}

function yamlList(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function toSnakeTitle(title) {
  return title
    .slice(3)
    .toLowerCase()
    .replace(/[,&]/g, "")
    .replace(/\//g, " ")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
}

function dependencyPhrase(deps) {
  return deps.map((dep) => dep.toLowerCase()).join("_and_");
}

function sentenceCase(text) {
  return text.charAt(0).toLowerCase() + text.slice(1);
}

function normalizePhrase(text) {
  if (!text) return "";
  return text.replace(/[.]+$/, "").toLowerCase();
}

function dependencyName(dep) {
  const depNode = nodeCatalog.get(dep);
  return depNode ? depNode.title.slice(3).toLowerCase() : dep.toLowerCase();
}

function responseModesForFamily(family) {
  const mapping = {
    direct_execution: ["constructed_response", "code_trace", "diagram_annotation"],
    explanation: ["oral_explanation", "written_explanation", "diagram_annotation"],
    error_diagnosis: ["multiple_choice", "oral_explanation", "written_explanation"],
    transfer: ["written_explanation", "code_trace", "diagram_annotation"],
    retention: ["written_explanation", "constructed_response"],
    prerequisite_probe: ["oral_explanation", "written_explanation", "diagram_annotation"],
  };

  return mapping[family];
}

function scoringFocusForFamily(family) {
  const mapping = {
    direct_execution: "core_mastery",
    explanation: "meaning_and_justification",
    error_diagnosis: "misconception_disambiguation",
    transfer: "representation_transfer",
    retention: "retention_stability",
    prerequisite_probe: "dependency_diagnosis",
  };

  return mapping[family];
}

function familyLabel(node) {
  return node.id[0];
}

function artifactBlock(label, body) {
  return `${label}\n\`\`\`\n${body}\n\`\`\``;
}

function scenarioPrompt(node, family, index, evidence, failure, dep) {
  const prefix = familyLabel(node);
  const title = normalizePhrase(node.title.slice(3));
  const ev = normalizePhrase(evidence);
  const depReadable = dep ? dependencyName(dep) : null;
  const failureLabel = failure ? failure[1] : null;
  const failureDescription = failure ? normalizePhrase(failure[2]) : null;

  const templates = {
    D: {
      direct_execution: [
        `A learner opens a classroom drawing app and must label a plant diagram.

${artifactBlock("UI state", "Toolbar: pointer | text | brush\nCanvas: unlabeled plant image\nGoal: add the text 'stem' next to the correct part")}
Explain the intended sequence of interface actions and show how they would ${ev}.`,
        `A learner starts on a tablet home screen, opens the reading app, searches for "frogs", and returns home.

${artifactBlock("Observed screens", "1. Home screen with app icons\n2. Reading app library page\n3. Search results for 'frogs'\n4. Home screen again")}
Describe what changed after each action and how the learner would ${ev}.`,
        `A student is trying to submit a photo to a classroom app but keeps tapping unrelated icons.

${artifactBlock("Icon row", "camera | classroom app | settings | weather")}
Use the UI state and goal to show how they should ${ev}.`,
      ],
      transfer: [
        `A learner who usually works on a tablet now must complete the same task on a laptop.

${artifactBlock("Task", "Open the slide deck\nInsert one text box\nType 'Water cycle'\nSave and close")}
Explain how they would ${ev} in the new interface.`,
        `A classroom switches from one drawing app to another with different icon shapes but the same core actions.

${artifactBlock("Old app icons", "text | image | save")}
${artifactBlock("New app icons", "T | photo | disk")}
Explain how a learner would ${ev} without relying on random clicking.`,
      ],
      retention: `After a delay, the learner returns to a shared classroom device and must reopen yesterday's app, add a missing label, and confirm the change saved.

${artifactBlock("Checklist", "1. Open the correct app\n2. Find the slide with the missing label\n3. Add 'roots'\n4. Save")}
Show how they would ${ev}.`,
      prerequisite_probe: null,
    },
    P: {
      direct_execution: [
        `A robot on a grid must reach the star without hitting the wall.

${artifactBlock("Grid task", "S . .\n# # .\n. . *")}
Write or describe the bounded program steps needed to ${ev}.`,
        `A small game should move a sprite when the space bar is pressed.

${artifactBlock("Starter code", "when key 'space' pressed\n  move ? steps\n  say 'jump!'")}
Use the snippet to show how the learner would ${ev}.`,
        `A short program is split into parts that pass values and update state.

${artifactBlock("Program", "score = 0\nfunction addBonus(points) {\n  return points + 5\n}\nscore = addBonus(score)\nif (score > 3) {\n  show 'win'\n}")}
Trace the program and show how the learner would ${ev}.`,
      ],
      transfer: [
        `A learner who used blocks now has to reason through the same idea in text.

${artifactBlock("Text version", "repeat 4 times {\n  moveForward()\n  turnRight()\n}")}
Explain how they would ${ev} in the changed representation.`,
        `A classroom app changes from a game context to a data-processing context.

${artifactBlock("New context", "scores = [4, 7, 2]\ntotal = 0\nfor each score in scores {\n  total = total + score\n}")}
Show how the learner would ${ev}.`,
      ],
      retention: `After a delay, the learner revisits a bounded program and must explain one function call, loop, event, or state change.

${artifactBlock("Program to revisit", "lives = 2\nwhen click\n  lives = lives - 1\n  if lives == 0\n    show 'game over'")}
Show how they would ${ev}.`,
      prerequisite_probe: `Before closing ${title}, run a short check on ${depReadable} using this bounded programming artifact:

${artifactBlock("Probe artifact", "start = 1\nrepeat 3 times\n  start = start + 2")}
Determine whether the current error is really an upstream dependency issue.`,
    },
    A: {
      direct_execution: [
        `A class is designing steps for a character to collect objects in a maze.

${artifactBlock("Maze rules", "Collect 3 gems\nAvoid lava tiles\nReach exit after final gem")}
Break the task into a workable strategy and show how the learner would ${ev}.`,
        `Two different solution plans are proposed for the same problem.

${artifactBlock("Plan A", "Check every item in order until target is found")}
${artifactBlock("Plan B", "Split the list and eliminate half each step")}
Compare them and show how the learner would ${ev}.`,
        `A learner must formalize a small problem before choosing an approach.

${artifactBlock("Problem brief", "Input: a list of homework scores\nOutput: highest score\nConstraint: explain why your method works")}
Use the conditions and show how they would ${ev}.`,
      ],
      transfer: [
        `A sorting idea learned with cards is now shown with playlist titles.

${artifactBlock("Playlist data", "['Zoo', 'Apple', 'Moon', 'Beach']")}
Explain how the learner would ${ev} without losing the underlying structure.`,
        `A learner must compare two unfamiliar algorithm sketches in a new context.

${artifactBlock("Sketch 1", "Recalculate every result from scratch")}
${artifactBlock("Sketch 2", "Store intermediate results and reuse them")}
Show how they would ${ev}.`,
      ],
      retention: `After a delay, the learner is given a fresh bounded problem and must choose or compare a strategy rather than repeat a memorized one.

${artifactBlock("New problem", "Find whether a name appears in a sorted class roster of 32 students")}
Show how they would ${ev}.`,
      prerequisite_probe: `Probe ${depReadable} with a short decomposition artifact before closing ${title}.

${artifactBlock("Probe task", "Break 'make a quiz app' into smaller executable parts")}
Decide whether the current weakness is upstream or truly algorithmic.`,
    },
    R: {
      direct_execution: [
        `A class collects survey data and needs to organize it.

${artifactBlock("Raw data", "pet\ndog\ncat\ndog\nfish\ncat")}
Show how the learner would ${ev}.`,
        `A small dataset is transformed in a spreadsheet.

${artifactBlock("Table", "name,score\nAva,7\nLuis,4\nMina,9")}
${artifactBlock("Rule", "add a new column called passed where score >= 5")}
Trace the change and show how the learner would ${ev}.`,
        `A computed output is produced from earlier data-handling steps.

${artifactBlock("Pipeline brief", "collect step counts -> remove blanks -> average by day -> graph results")}
Explain the pipeline and show how the learner would ${ev}.`,
      ],
      transfer: [
        `The same data idea is presented once as a table and once as a chart.

${artifactBlock("Table view", "Mon 12\nTue 15\nWed 10")}
${artifactBlock("Chart view", "bar chart with three bars labeled Mon Tue Wed")}
Explain how the learner would ${ev} across the changed representation.`,
        `A familiar classroom dataset is replaced with weather data.

${artifactBlock("Weather data", "day,temp\nMon,68\nTue,71\nWed,65")}
Show how the learner would still ${ev}.`,
      ],
      retention: `After a delay, the learner revisits a new dataset and must explain what changed and what can be inferred.

${artifactBlock("Delayed-check table", "student,minutes_read\nAva,20\nLuis,35\nMina,15")}
Show how they would ${ev}.`,
      prerequisite_probe: `Check ${depReadable} using this bounded data display before closing ${title}.

${artifactBlock("Probe display", "favorite fruit counts shown in a two-column table")}
Determine whether the present error is really an upstream representation issue.`,
    },
    N: {
      direct_execution: [
        `A student sends a file across a school network.

${artifactBlock("Path options", "Chromebook -> Wi-Fi router -> school server -> teacher laptop")}
Show how the learner would ${ev}.`,
        `A classroom app stops working because a login or system layer matters.

${artifactBlock("System note", "App says: 'Cannot load assignment data'\nStatus page: network online, login token expired")}
Explain the setup and show how the learner would ${ev}.`,
        `A security scenario involves access control and a possible attack.

${artifactBlock("Security brief", "Shared club account password was posted in a group chat.\nOne student changed the page settings.")}
Show how the learner would ${ev}.`,
      ],
      transfer: [
        `A network or security idea learned with classroom file sharing is now embedded in cloud storage.

${artifactBlock("Cloud case", "Phone uploads photo -> cloud storage -> shared album -> friend views image")}
Explain how the learner would ${ev}.`,
        `A learner must move from a visible device-level description to a more abstract threat-model case.

${artifactBlock("Threat-model prompt", "Asset: grades database\nThreat: stolen staff password\nDefense options: MFA, stronger password, unplug Wi-Fi")}
Show how they would ${ev}.`,
      ],
      retention: `After a delay, the learner is given a fresh connected-system or security case and must explain the pathway, layer, risk, or defense involved.

${artifactBlock("Delayed case", "Student tablet -> hotspot -> video app -> streaming server")}
Show how they would ${ev}.`,
      prerequisite_probe: `Use this short systems or access-control artifact on ${depReadable} before closing ${title}.

${artifactBlock("Probe artifact", "Login page -> app dashboard -> cloud document -> share settings")}
Decide whether the current problem is actually an upstream dependency gap.`,
    },
    C: {
      direct_execution: [
        `A short program does not produce the intended result.

${artifactBlock("Code", "count = 1\nrepeat 3 times\n  count = count + 2\nprint(count)")}
Use the code or trace to show how the learner would ${ev}.`,
        `A learner is given a specification and a small set of tests.

${artifactBlock("Spec", "Input: a score from 0 to 10\nOutput: 'pass' if score >= 6 else 'retry'")}
${artifactBlock("Tests", "score 8 -> pass\nscore 6 -> pass\nscore 4 -> retry")}
Show how they would ${ev}.`,
        `A team reviews an existing code change.

${artifactBlock("Diff summary", "- duplicated score logic in three places\n+ new helper function scoreMessage(score)")}
Show how the learner would ${ev}.`,
      ],
      transfer: [
        `A debugging idea learned in blocks is now shown in text.

${artifactBlock("Text snippet", "if score > 5 {\n  show 'pass'\n} else {\n  show 'retry'\n}")}
Explain how the learner would ${ev} in the new context.`,
        `A learner must evaluate a changed codebase artifact.

${artifactBlock("Review comment", "The new helper removed duplication, but no test covers score = 6")}
Show how they would ${ev}.`,
      ],
      retention: `After a delay, the learner revisits a fresh bounded bug or specification case and must justify the next step rather than guess.

${artifactBlock("Delayed bug", "name = 'Ada'\nprint('Hello' + user)")}
Show how they would ${ev}.`,
      prerequisite_probe: `Check ${depReadable} with this short program-trace artifact before closing ${title}.

${artifactBlock("Probe artifact", "x = 2\nx = x + 3\nprint(x)")}
Determine whether the present quality issue is actually upstream.`,
    },
    I: {
      direct_execution: [
        `A class discussion presents a digital sharing or messaging case.

${artifactBlock("Message draft", "Can u send me the quiz answers before class?")}
Show how the learner would ${ev}.`,
        `A learner must decide how to credit a source or communicate to an audience.

${artifactBlock("Slide footer", "Photo of eclipse copied from the web with no source listed")}
Show how they would ${ev}.`,
        `A school technology policy case raises questions about privacy or governance.

${artifactBlock("Policy brief", "District wants hallway cameras to use face recognition for attendance")}
Show how they would ${ev}.`,
      ],
      transfer: [
        `A digital citizenship idea learned in classroom chat is now presented in a public video comment thread.

${artifactBlock("Comment thread", "First comment: 'This app is trash.'\nReply box is open.")}
Explain how the learner would ${ev}.`,
        `A learner must move from a personal-use case to a broader public-system case.

${artifactBlock("Public-system case", "A city app ranks neighborhoods for service priority using reported complaints")}
Show how they would ${ev}.`,
      ],
      retention: `After a delay, the learner is given a new communication, attribution, impact, or governance case and must justify the responsible choice.

${artifactBlock("Delayed case", "Student reposts a classmate's artwork to a shared channel without naming the artist")}
Show how they would ${ev}.`,
      prerequisite_probe: `Probe ${depReadable} through this short audience, impact, or systems artifact before closing ${title}.

${artifactBlock("Probe artifact", "A shared class document is visible to 'anyone with the link'")}
Decide whether the current issue is really upstream.`,
    },
    X: {
      direct_execution: [
        `A learner reviews a bounded AP-style performance task.

${artifactBlock("Artifact brief", "App: lunch picker\nData: student preferences\nSystem: shared web app\nImpact claim: reduces food waste")}
Show how they would ${ev}.`,
        `A class is evaluating an object-oriented or multi-component design for an AP-style task.

${artifactBlock("Design sketch", "Class Menu stores meal options\nClass VoteCounter totals choices\nProgram writes results to a file")}
Show how they would ${ev}.`,
        `A capstone team proposes a cross-domain computing project.

${artifactBlock("Project brief", "Users: school garden club\nGoal: track soil moisture\nConstraints: one tablet, intermittent Wi-Fi, shared student logins")}
Show how they would ${ev}.`,
      ],
      transfer: [
        `A learner moves from an AP-style classroom prompt to an authentic design-review case.

${artifactBlock("Design-review prompt", "A mobile app shares location data with a city dashboard to suggest safer walking routes")}
Explain how they would still ${ev}.`,
        `A bounded project changes domains, but the computing requirements still matter.

${artifactBlock("New domain brief", "Original: library check-in tool\nNew: marine biology field log\nShared constraints: offline entry, shared data, teacher review")}
Explain how the learner would ${ev}.`,
      ],
      retention: `After a delay, the learner is given a fresh AP-style synthesis or capstone-review case and must justify the design or critique using integrated computing reasoning.

${artifactBlock("Delayed brief", "App tracks bus arrival times\nInputs: GPS pings\nOutputs: rider alerts\nConcern: location privacy for student riders")}
Show how they would ${ev}.`,
      prerequisite_probe: `Before closing ${title}, run a short synthesis check on ${depReadable}.

${artifactBlock("Probe artifact", "Code snippet + one data table + one system-impact claim appear in the same prompt")}
Determine whether the learner is blocked by an upstream readiness gap rather than the current integration target.`,
    },
  };

  if (family === "error_diagnosis") {
    if (prefix === "C") {
      return `A learner runs a short program, sees the wrong output, and responds in a way that suggests this breakdown: ${failureDescription}.

${artifactBlock("Code artifact", "value = 3\nif value > 5 {\n  show 'big'\n} else {\n  show 'small'\n}")}
Diagnose the debugging or quality mistake. Focus on ${failureLabel}.`;
    }
    if (prefix === "N") {
      return `In a network or security scenario, a learner responds in a way that suggests this breakdown: ${failureDescription}.

${artifactBlock("Security artifact", "Asset: shared class account\nEvent: password posted publicly\nResult: settings changed by another user")}
Diagnose the systems or cybersecurity mistake. Focus on ${failureLabel}.`;
    }
    if (prefix === "I") {
      return `In a digital communication or computing-impact case, a learner responds in a way that suggests this breakdown: ${failureDescription}.

${artifactBlock("Case artifact", "A student reposts a classmate's image without credit and says 'it was already online'")}
Diagnose the ethical or participation mistake. Focus on ${failureLabel}.`;
    }
    if (prefix === "X") {
      return `During an AP-style synthesis or project review, a learner gives a response that suggests this breakdown: ${failureDescription}.

${artifactBlock("Project-review artifact", "Proposal includes code, data, and users, but offers no verification or risk analysis")}
Diagnose the integration mistake. Focus on ${failureLabel}.`;
    }
    return `A learner response in ${title} suggests this breakdown: ${failureDescription}.

${artifactBlock("Artifact", "Use the bounded case description above to point to the exact misunderstanding or unstable dependency")}
Diagnose the likely misconception or structural error. Focus on ${failureLabel}.`;
  }

  if (family === "explanation") {
    return node.items[index][0];
  }

  if (family === "prerequisite_probe") {
    return templates[prefix].prerequisite_probe;
  }

  if (family === "retention") {
    return templates[prefix].retention;
  }

  return templates[prefix][family][index];
}

function variantRoleForFamily(family, index) {
  const mapping = {
    direct_execution: index === 0 ? "core_direct" : index === 1 ? "core_direct" : "edge_case_direct",
    explanation: "meaning_probe",
    error_diagnosis: "misconception_probe",
    transfer: "transfer_probe",
    retention: "retention_recheck",
    prerequisite_probe: "prerequisite_probe",
  };

  return mapping[family];
}

function difficultyBandForFamily(family, index) {
  const mapping = {
    direct_execution: index < 2 ? "core" : "stretch",
    explanation: "core",
    error_diagnosis: "diagnostic",
    transfer: "transfer",
    retention: "retention",
    prerequisite_probe: "prerequisite",
  };

  return mapping[family];
}

function buildScoringGuidance(family, expectedEvidence, nodeTitle, depName) {
  const normalizedEvidence = normalizePhrase(expectedEvidence);
  const normalizedNodeTitle = normalizePhrase(nodeTitle);
  const normalizedDepName = depName ? normalizePhrase(depName) : null;

  if (family === "error_diagnosis") {
    return `Meets when the learner identifies the dominant breakdown, names the structural issue accurately, and redirects the work toward ${normalizedEvidence}.`;
  }

  if (family === "transfer") {
    return `Meets when the learner preserves ${normalizedEvidence} in a changed computing context or representation.`;
  }

  if (family === "retention") {
    return `Meets when the learner still demonstrates ${normalizedEvidence} on a delayed recheck without a blocking recurrence.`;
  }

  if (family === "prerequisite_probe") {
    return `Meets when the learner response makes it possible to distinguish an upstream gap in ${normalizedDepName} from a current-node issue in ${normalizedNodeTitle}.`;
  }

  if (family === "explanation") {
    return `Meets when the learner explains the structure coherently and ties the explanation back to ${normalizedEvidence}.`;
  }

  return `Meets when the learner demonstrates ${normalizedEvidence} with bounded and technically valid computing reasoning.`;
}

for (const node of nodes) {
  const dir = path.join(nodesRoot, node.slug);
  fs.mkdirSync(dir, { recursive: true });

  const nameSnake = toSnakeTitle(node.title);
  const supportedProfile = node.supportedProfile || "computer-science-entry-node-package";
  const retentionDays = node.retentionDays || 14;
  const failureModeIds = node.failure.map((f) => `${node.id}-FM-${f[0]}`);
  const interventionIds = node.failure.map((f) => `${node.id}-INT-${f[0]}`);
  const gateTaskSurface = `${node.title.slice(3).toLowerCase()} tasks`;

  const readme = `# ${node.id} ${node.title.slice(3)}

This package defines the governed draft node for ${node.short}.

Included artifacts:

- \`node-config.yaml\`
- \`node-spec.md\`
- \`verification-model.md\`
- \`item-bank-schema.md\`
- \`item-bank.json\`
- \`failure-taxonomy.md\`
- \`intervention-playbook.md\`
- \`intervention-map.json\`
- \`learner-state-model.md\`
- \`learner-state.schema.json\`
- \`example-learner-states.json\`
- \`transition-rules.yaml\`
- \`teacher-observability.md\`
- \`agent-behavior.md\`
`;

  const dependencyYaml = node.deps.length
    ? `dependencies:\n${yamlList(node.deps)}`
    : "dependencies: []";

  const nodeConfig = `id: ${node.id}
name: ${nameSnake}
domain: computer_science
support_tier: Incubation
maturity_state: Drafted
supported_profiles:
- ${supportedProfile}
evidence_class: Synthetic
${dependencyYaml}
mastery:
  direct_accuracy_threshold: 0.9
  explanation_required: true
  transfer_required: true
  retention_check_days: ${retentionDays}
statuses:
${yamlList(statuses)}
verification_gates:
- id: G1
  type: direct_performance
  pass_rule: '>= 0.90 accuracy across ${gateTaskSurface}'
- id: G2
  type: meaning
  pass_rule: correct explanation in at least 2 of 3 prompts using bounded ${node.domainArea}
- id: G3
  type: transfer
  pass_rule: successful reasoning in at least one unfamiliar computing context
- id: G4
  type: retention
  pass_rule: '>= 0.85 delayed recheck accuracy after ~${retentionDays} days'
failure_modes:
${yamlList(failureModeIds)}
`;

  const dependencyBlock = node.deps.length
    ? node.deps.map((dep) => `- \`${dep}\``).join("\n")
    : "None";

  const nodeSpec = `# ${node.id} Node Specification

## Node Identity

- id: \`${node.id}\`
- name: \`${nameSnake}\`
- domain: \`computer_science\`
- support tier: \`Incubation\`
- current maturity state: \`Drafted\`
- supported profile: \`${supportedProfile}\`
- evidence class: \`Synthetic\`

## Purpose

${node.purpose}

## Dependencies

${dependencyBlock}

## Exit Conditions

The learner is secure on \`${node.id}\` only when all of the following are true:

${node.exit.map((condition, index) => `${index + 1}. ${condition}`).join("\n")}

## Mastery Criteria

- direct accuracy threshold: \`0.90\`
- explanation required: \`true\`
- transfer required: \`true\`
- retention check days: \`${retentionDays}\`

## Observable Evidence

The learner can:

${node.evidence.map((item) => `- ${item}`).join("\n")}

## Claim Boundary

This node package is an operational draft and not a classroom-release claim.
`;

  const verification = `# ${node.id} Verification Model

## Verification Gates

\`${node.id}\` requires all of the following before \`secure\` status can be assigned:

1. Direct performance gate: learner reaches at least \`0.90\` accuracy across ${gateTaskSurface}.
2. Meaning gate: learner explains the targeted ${node.domainArea} ideas in at least \`2\` of \`3\` prompts.
3. Transfer gate: learner succeeds in at least one unfamiliar computing context.
4. Retention gate: learner reaches at least \`0.85\` accuracy on a delayed recheck after about \`${retentionDays}\` days.

## Verification Notes

- Vocabulary without executable or causal reasoning is insufficient.
- Explanations must remain bounded to evidence and model constraints.
- Synthetic evidence supports package inspection only and cannot authorize learner-impacting claims.
`;

  const itemBankSchema = `# ${node.id} Item-Bank Schema

## Top-Level Fields

- \`node_id\`
- \`policy_version\`
- \`version\`
- \`items\`

## Required Item Fields

- \`item_id\`
- \`node_id\`
- \`item_family\`
- \`prompt\`
- \`expected_evidence\`
- \`dominant_failure_mode_targets\`
- \`difficulty_band\`
- \`response_modes_allowed\`
- \`requires_human_scoring\`
- \`variant_role\`
- \`scoring_focus\`
- \`scoring_guidance\`

## Optional Item Fields

- \`dependency_target\`
- \`suspected_knowledge_gap_if_incorrect\`

## Item Families

- \`direct_execution\`
- \`explanation\`
- \`error_diagnosis\`
- \`transfer\`
- \`retention\`
- \`prerequisite_probe\`

The current bank is synthetic and intended for structural package validation only.
`;

  const itemBankItems = [];
  const primaryEvidence = node.evidence.slice(0, 3);
  const explanationPrompts = node.items.slice(0, 2);
  const transferEvidence = node.evidence.slice(-2);

  for (const [index, evidence] of primaryEvidence.entries()) {
    const failure = node.failure[index % node.failure.length];
    itemBankItems.push({
      item_id: `${node.id}-DIR-00${index + 1}`,
      node_id: node.id,
      item_family: "direct_execution",
      prompt: scenarioPrompt(node, "direct_execution", index, evidence, failure),
      expected_evidence: evidence,
      dominant_failure_mode_targets: [`${node.id}-FM-${failure[0]}`],
      difficulty_band: difficultyBandForFamily("direct_execution", index),
      response_modes_allowed: responseModesForFamily("direct_execution"),
      requires_human_scoring: false,
      variant_role: variantRoleForFamily("direct_execution", index),
      scoring_focus: scoringFocusForFamily("direct_execution"),
      scoring_guidance: buildScoringGuidance(
        "direct_execution",
        evidence,
        sentenceCase(node.title.slice(3)),
      ),
    });
  }

  for (const [index, item] of explanationPrompts.entries()) {
    const failureTargets = item[4].map((suffix) => `${node.id}-FM-${suffix}`);
    itemBankItems.push({
      item_id: `${node.id}-EXP-00${index + 1}`,
      node_id: node.id,
      item_family: "explanation",
      prompt: item[0],
      expected_evidence: sentenceCase(item[2]),
      dominant_failure_mode_targets: failureTargets,
      difficulty_band: difficultyBandForFamily("explanation", index),
      response_modes_allowed: responseModesForFamily("explanation"),
      requires_human_scoring: true,
      variant_role: variantRoleForFamily("explanation", index),
      scoring_focus: scoringFocusForFamily("explanation"),
      scoring_guidance: buildScoringGuidance(
        "explanation",
        sentenceCase(item[2]),
        sentenceCase(node.title.slice(3)),
      ),
    });
  }

  for (const [index, failure] of node.failure.slice(0, 2).entries()) {
    const failureLabel = failure[1];
    const expectedEvidence = node.evidence[index % node.evidence.length];
    itemBankItems.push({
      item_id: `${node.id}-ERR-00${index + 1}`,
      node_id: node.id,
      item_family: "error_diagnosis",
      prompt: scenarioPrompt(node, "error_diagnosis", index, expectedEvidence, failure),
      expected_evidence: expectedEvidence,
      dominant_failure_mode_targets: [`${node.id}-FM-${failure[0]}`],
      difficulty_band: difficultyBandForFamily("error_diagnosis", index),
      response_modes_allowed: responseModesForFamily("error_diagnosis"),
      requires_human_scoring: false,
      variant_role: variantRoleForFamily("error_diagnosis", index),
      scoring_focus: scoringFocusForFamily("error_diagnosis"),
      scoring_guidance: buildScoringGuidance(
        "error_diagnosis",
        expectedEvidence,
        sentenceCase(node.title.slice(3)),
      ),
    });
  }

  for (const [index, evidence] of transferEvidence.entries()) {
    const failure = node.failure[(index + 2) % node.failure.length];
    itemBankItems.push({
      item_id: `${node.id}-TRA-00${index + 1}`,
      node_id: node.id,
      item_family: "transfer",
      prompt: scenarioPrompt(node, "transfer", index, evidence, failure),
      expected_evidence: evidence,
      dominant_failure_mode_targets: [`${node.id}-FM-${failure[0]}`],
      difficulty_band: difficultyBandForFamily("transfer", index),
      response_modes_allowed: responseModesForFamily("transfer"),
      requires_human_scoring: true,
      variant_role: variantRoleForFamily("transfer", index),
      scoring_focus: scoringFocusForFamily("transfer"),
      scoring_guidance: buildScoringGuidance(
        "transfer",
        evidence,
        sentenceCase(node.title.slice(3)),
      ),
    });
  }

  itemBankItems.push({
    item_id: `${node.id}-RET-001`,
    node_id: node.id,
    item_family: "retention",
    prompt: scenarioPrompt(node, "retention", 0, node.evidence[0], node.failure[node.failure.length - 1]),
    expected_evidence: node.evidence[0],
    dominant_failure_mode_targets: [`${node.id}-FM-${node.failure[node.failure.length - 1][0]}`],
    difficulty_band: difficultyBandForFamily("retention", 0),
    response_modes_allowed: responseModesForFamily("retention"),
    requires_human_scoring: true,
    variant_role: variantRoleForFamily("retention", 0),
    scoring_focus: scoringFocusForFamily("retention"),
    scoring_guidance: buildScoringGuidance(
      "retention",
      node.evidence[0],
      sentenceCase(node.title.slice(3)),
    ),
  });

  for (const [index, dep] of node.deps.entries()) {
    const depReadable = dependencyName(dep);
    const failure = node.failure[index % node.failure.length];
    itemBankItems.push({
      item_id: `${node.id}-PRE-00${index + 1}`,
      node_id: node.id,
      item_family: "prerequisite_probe",
      prompt: scenarioPrompt(node, "prerequisite_probe", index, null, failure, dep),
      expected_evidence: `shows whether ${depReadable} is secure enough to support ${node.title.slice(3).toLowerCase()}`,
      dominant_failure_mode_targets: [`${node.id}-FM-${failure[0]}`],
      difficulty_band: difficultyBandForFamily("prerequisite_probe", index),
      response_modes_allowed: responseModesForFamily("prerequisite_probe"),
      requires_human_scoring: true,
      variant_role: variantRoleForFamily("prerequisite_probe", index),
      scoring_focus: scoringFocusForFamily("prerequisite_probe"),
      scoring_guidance: buildScoringGuidance(
        "prerequisite_probe",
        `shows whether ${depReadable} is secure enough to support ${node.title.slice(3).toLowerCase()}`,
        sentenceCase(node.title.slice(3)),
        depReadable,
      ),
      dependency_target: dep,
      suspected_knowledge_gap_if_incorrect: depReadable,
    });
  }

  const itemBank = {
    node_id: node.id,
    policy_version: "1.0",
    version: "0.4",
    items: itemBankItems,
  };

  const failureTaxonomy = `# ${node.id} Failure Taxonomy

${node.failure
  .map((failure) => `- \`${node.id}-FM-${failure[0]}\` ${failure[1]}: ${failure[2]}`)
  .join("\n")}
`;

  const interventionPlaybook = `# ${node.id} Intervention Playbook

${node.interventions
  .map((intervention, index) => `- For \`${node.id}-FM-0${index + 1}\`, use ${intervention}.`)
  .join("\n")}
`;

  const interventionMap = {
    node_id: node.id,
    interventions: node.failure.map((failure, index) => ({
      intervention_id: `${node.id}-INT-${failure[0]}`,
      name: `${node.id} Intervention ${index + 1}`,
      addresses_failure_modes: [`${node.id}-FM-${failure[0]}`],
      summary: node.interventions[index],
    })),
  };

  const learnerStateModel = `# ${node.id} Learner State Model

The learner-state for \`${node.id}\` tracks:

- dependency security on ${node.deps.length ? node.deps.map((dep) => `\`${dep}\``).join(", ") : "no upstream nodes"}
- direct accuracy on ${node.title.slice(3).toLowerCase()} tasks
- explanation quality for bounded ${node.domainArea} reasoning
- transfer performance across unfamiliar computing contexts
- delayed retention outcome

\`secure\` requires all verification gates to pass. Any delayed failure or dependency instability should move the learner to \`unstable\`.
`;

  const dependencySchema =
    node.deps.length === 0
      ? {
          type: "object",
          maxProperties: 0,
          additionalProperties: false,
        }
      : {
          type: "object",
          required: node.deps,
          properties: Object.fromEntries(
            node.deps.map((dep) => [dep, { enum: ["secure", "unstable", "blocked"] }]),
          ),
          additionalProperties: false,
        };

  const learnerStateSchema = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: `https://open-ai-curriculum.local/domains/computer_science/${node.id.toLowerCase()}/learner-state.schema.json`,
    title: `${node.id} Learner State`,
    type: "object",
    required: [
      "learner_id",
      "node_id",
      "status",
      "dependency_status",
      "direct_accuracy",
      "explanation_status",
      "transfer_status",
      "retention_status",
      "dominant_failure_modes",
      "recommended_interventions",
      "last_verified_at",
      "review_state",
    ],
    properties: {
      learner_id: { type: "string", minLength: 1 },
      node_id: { const: node.id },
      status: { enum: statuses },
      dependency_status: dependencySchema,
      direct_accuracy: { type: "number", minimum: 0, maximum: 1 },
      explanation_status: { enum: ["not_met", "weak", "met"] },
      transfer_status: { enum: ["not_met", "weak", "met"] },
      retention_status: { enum: ["not_due", "not_met", "met"] },
      dominant_failure_modes: {
        type: "array",
        items: { enum: failureModeIds },
        uniqueItems: true,
      },
      recommended_interventions: {
        type: "array",
        items: { type: "string", minLength: 1 },
      },
      last_verified_at: { type: "string", pattern: "^[0-9]{4}-[0-9]{2}-[0-9]{2}$" },
      review_state: { enum: ["draft", "human-reviewed"] },
      notes: { type: "string" },
    },
    additionalProperties: false,
  };

  const secureDependencies = Object.fromEntries(node.deps.map((dep) => [dep, "secure"]));
  const exampleStates = [
    {
      learner_id: `example-${node.id.toLowerCase()}-secure`,
      node_id: node.id,
      status: "secure",
      dependency_status: secureDependencies,
      direct_accuracy: 0.93,
      explanation_status: "met",
      transfer_status: "met",
      retention_status: "met",
      dominant_failure_modes: [],
      recommended_interventions: [],
      last_verified_at: today,
      review_state: "draft",
      notes: node.noteSecure,
    },
    {
      learner_id: `example-${node.id.toLowerCase()}-emerging`,
      node_id: node.id,
      status: "emerging",
      dependency_status: secureDependencies,
      direct_accuracy: 0.7,
      explanation_status: "weak",
      transfer_status: "not_met",
      retention_status: "not_due",
      dominant_failure_modes: [failureModeIds[0], failureModeIds[1]],
      recommended_interventions: [interventionIds[0], interventionIds[1]],
      last_verified_at: today,
      review_state: "draft",
      notes: node.noteEmerging,
    },
  ];

  const blockedCondition = node.deps.length
    ? `      - dependencies_${dependencyPhrase(node.deps)}_are_not_both_blocked\n`
    : "";
  const secureCondition = node.deps.length
    ? `      - dependencies_${dependencyPhrase(node.deps)}_are_secure\n`
    : "";
  const unstableCondition = node.deps.length
    ? `      - dependency_${node.deps.map((dep) => dep.toLowerCase()).join("_or_")}_becomes_unstable\n`
    : "";

  const transitionRules = `node_id: ${node.id}
version: 0.1
transitions:
  - from: blocked
    to: emerging
    when:
      - direct_accuracy_improves_meaningfully
${blockedCondition}  - from: emerging
    to: provisional
    when:
${secureCondition}      - direct_gate_passes
      - meaning_gate_passes
      - transfer_gate_passes
      - retention_not_yet_due
  - from: provisional
    to: secure
    when:
      - retention_gate_passes
  - from: secure
    to: unstable
    when:
      - delayed_recheck_fails
${unstableCondition}`;

  const teacherObservability = `# ${node.id} Teacher Observability

Teachers should watch for:

${node.failure
  .map((failure) => `- signs of \`${node.id}-FM-${failure[0]}\` during explanation, execution, and transfer tasks`)
  .join("\n")}

Teacher interpretations remain draft until human review.
`;

  const agentBehavior = `# ${node.id} Agent Behavior

The agent should:

- avoid rewarding answer fragments that bypass execution, causal, or systems reasoning
- surface failure modes when explanations rely on slogans or lucky clicks instead of bounded evidence
- require explicit evidence and model coordination in accepted ${node.domainArea} explanations
- preserve draft review state for all learner-impacting interpretations
`;

  const files = {
    "README.md": readme,
    "node-config.yaml": nodeConfig,
    "node-spec.md": nodeSpec,
    "verification-model.md": verification,
    "item-bank-schema.md": itemBankSchema,
    "item-bank.json": `${JSON.stringify(itemBank, null, 2)}\n`,
    "failure-taxonomy.md": failureTaxonomy,
    "intervention-playbook.md": interventionPlaybook,
    "intervention-map.json": `${JSON.stringify(interventionMap, null, 2)}\n`,
    "learner-state-model.md": learnerStateModel,
    "learner-state.schema.json": `${JSON.stringify(learnerStateSchema, null, 2)}\n`,
    "example-learner-states.json": `${JSON.stringify(exampleStates, null, 2)}\n`,
    "transition-rules.yaml": transitionRules,
    "teacher-observability.md": teacherObservability,
    "agent-behavior.md": agentBehavior,
  };

  for (const [fileName, content] of Object.entries(files)) {
    fs.writeFileSync(path.join(dir, fileName), content);
  }
}

console.log(`Created ${nodes.length} computer science entry node packages.`);
