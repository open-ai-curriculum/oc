# AC4 Intervention Playbook

## Purpose

Map `AC4` failure modes to bounded intervention responses.

## Intervention Rules

### For AC4-FM-01 Interpretation-Without-Comparison

Primary interventions:

- tighten the task around interpretation-without-comparison so the target is more visible
- keep the response surface bounded enough to isolate the real bottleneck
- rerun a changed-surface check after one short intervention cycle

Expected effect:

- learner resolves the dominant failure pattern without lowering the node demand

Reverification target:

- one bounded changed-surface task

### For AC4-FM-02 Comparison-Without-Claim

Primary interventions:

- tighten the task around comparison-without-claim so the target is more visible
- keep the response surface bounded enough to isolate the real bottleneck
- rerun a changed-surface check after one short intervention cycle

Expected effect:

- learner resolves the dominant failure pattern without lowering the node demand

Reverification target:

- one bounded changed-surface task

### For AC4-FM-03 Text-Groundedness Drift

Primary interventions:

- tighten the task around text-groundedness drift so the target is more visible
- keep the response surface bounded enough to isolate the real bottleneck
- rerun a changed-surface check after one short intervention cycle

Expected effect:

- learner resolves the dominant failure pattern without lowering the node demand

Reverification target:

- one bounded changed-surface task

### For AC4-FM-04 Prompt-Transfer Fragility

Primary interventions:

- tighten the task around prompt-transfer fragility so the target is more visible
- keep the response surface bounded enough to isolate the real bottleneck
- rerun a changed-surface check after one short intervention cycle

Expected effect:

- learner resolves the dominant failure pattern without lowering the node demand

Reverification target:

- one bounded changed-surface task

## Escalation Rule

If the same dominant failure mode remains blocking after two bounded intervention cycles, escalate to human review of dependency integrity, prompt design, and task-surface validity.
