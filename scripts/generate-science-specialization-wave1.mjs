import fs from "fs";
import path from "path";

const repoRoot = "/Volumes/data/development/oc";
const nodesRoot = path.join(repoRoot, "domains/science/nodes");
const inputArg = process.argv[2];
const dataPath = inputArg
  ? path.resolve(inputArg)
  : path.join(repoRoot, "domains/science/specialization-wave1.json");
const today = "2026-04-15";
const statuses = ["blocked", "emerging", "provisional", "secure", "unstable"];

const nodes = JSON.parse(fs.readFileSync(dataPath, "utf8"));

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

for (const node of nodes) {
  const dir = path.join(nodesRoot, node.slug);
  fs.mkdirSync(dir, { recursive: true });

  const nameSnake = toSnakeTitle(node.title);
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

  const nodeConfig = `id: ${node.id}
name: ${nameSnake}
domain: science
support_tier: Incubation
maturity_state: Drafted
supported_profiles:
- science-secondary-node-package
evidence_class: Synthetic
dependencies:
${yamlList(node.deps)}
mastery:
  direct_accuracy_threshold: 0.9
  explanation_required: true
  transfer_required: true
  retention_check_days: 42
statuses:
${yamlList(statuses)}
verification_gates:
- id: G1
  type: direct_performance
  pass_rule: '>= 0.90 accuracy across ${gateTaskSurface}'
- id: G2
  type: meaning
  pass_rule: correct explanation in at least 2 of 3 prompts using bounded ${node.domainArea} reasoning
- id: G3
  type: transfer
  pass_rule: successful reasoning in at least one unfamiliar advanced science context
- id: G4
  type: retention
  pass_rule: '>= 0.85 delayed recheck accuracy after ~42 days'
failure_modes:
${yamlList(failureModeIds)}
`;

  const nodeSpec = `# ${node.id} Node Specification

## Node Identity

- id: \`${node.id}\`
- name: \`${nameSnake}\`
- domain: \`science\`
- support tier: \`Incubation\`
- current maturity state: \`Drafted\`
- supported profile: \`science-secondary-node-package\`
- evidence class: \`Synthetic\`

## Purpose

${node.purpose}

## Dependencies

${node.deps.map((dep) => `- \`${dep}\``).join("\n")}

## Exit Conditions

The learner is secure on \`${node.id}\` only when all of the following are true:

${node.exit.map((condition, index) => `${index + 1}. ${condition}`).join("\n")}

## Mastery Criteria

- direct accuracy threshold: \`0.90\`
- explanation required: \`true\`
- transfer required: \`true\`
- retention check days: \`42\`

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
3. Transfer gate: learner succeeds in at least one unfamiliar advanced science context.
4. Retention gate: learner reaches at least \`0.85\` accuracy on a delayed recheck after about \`42\` days.

## Verification Notes

- Vocabulary without mechanism or system reasoning is insufficient.
- Explanations must remain bounded to evidence and model constraints.
- Synthetic evidence supports package inspection only and cannot authorize learner-impacting claims.
`;

  const itemBankSchema = `# ${node.id} Item-Bank Schema

Each item in \`item-bank.json\` should include:

- \`item_id\`
- \`node_id\`
- \`prompt\`
- \`task_type\`
- \`answer_key\`
- \`scorable_traits\`
- \`target_failure_modes\`
- \`context_tags\`

The current bank is synthetic and intended for structural package validation only.
`;

  const itemBank = node.items.map((item, index) => ({
    item_id: `${node.id}-IB-0${index + 1}`,
    node_id: node.id,
    prompt: item[0],
    task_type: item[1],
    answer_key: item[2],
    scorable_traits: item[3],
    target_failure_modes: item[4].map((suffix) => `${node.id}-FM-${suffix}`),
    context_tags: item[5],
  }));

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

- dependency security on ${node.deps.map((dep) => `\`${dep}\``).join(", ")}
- direct accuracy on ${node.title.slice(3).toLowerCase()} tasks
- explanation quality for bounded ${node.domainArea} reasoning
- transfer performance across unfamiliar advanced science contexts
- delayed retention outcome

\`secure\` requires all verification gates to pass. Any delayed failure or dependency instability should move the learner to \`unstable\`.
`;

  const learnerStateSchema = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: `https://open-ai-curriculum.local/domains/science/${node.id.toLowerCase()}/learner-state.schema.json`,
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
      dependency_status: {
        type: "object",
        required: node.deps,
        properties: Object.fromEntries(
          node.deps.map((dep) => [dep, { enum: ["secure", "unstable", "blocked"] }]),
        ),
        additionalProperties: false,
      },
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

  const exampleStates = [
    {
      learner_id: `example-${node.id.toLowerCase()}-secure`,
      node_id: node.id,
      status: "secure",
      dependency_status: Object.fromEntries(node.deps.map((dep) => [dep, "secure"])),
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
      dependency_status: Object.fromEntries(node.deps.map((dep) => [dep, "secure"])),
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

  const transitionRules = `node_id: ${node.id}
version: 0.1
transitions:
  - from: blocked
    to: emerging
    when:
      - direct_accuracy_improves_meaningfully
      - dependencies_${dependencyPhrase(node.deps)}_are_not_both_blocked
  - from: emerging
    to: provisional
    when:
      - dependencies_${dependencyPhrase(node.deps)}_are_secure
      - direct_gate_passes
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
      - dependency_${node.deps.map((dep) => dep.toLowerCase()).join("_or_")}_becomes_unstable
`;

  const teacherObservability = `# ${node.id} Teacher Observability

Teachers should watch for:

${node.failure
  .map((failure) => `- signs of \`${node.id}-FM-${failure[0]}\` during explanation, modeling, and transfer tasks`)
  .join("\n")}

Teacher interpretations remain draft until human review.
`;

  const agentBehavior = `# ${node.id} Agent Behavior

The agent should:

- avoid rewarding answer fragments that bypass mechanism or system reasoning
- surface failure modes when explanations rely on slogans instead of bounded evidence
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

console.log(`Created ${nodes.length} science specialization node packages.`);
