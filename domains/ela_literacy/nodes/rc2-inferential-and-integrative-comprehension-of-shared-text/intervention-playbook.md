# RC2 Intervention Playbook

## Purpose

Map `RC2` failure modes to bounded intervention responses.

## Intervention Rules

### For RC2-FM-01 Inference Without Anchor

Primary interventions:

- tighten the task around inference so the target is more visible
- keep the text or prompt surface small enough to isolate inference without anchor
- rerun a bounded recheck on a changed but comparable text or prompt

Expected effect:

- learner resolves the dominant `inference without anchor` pattern without changing the core node demand

Reverification target:

- one bounded changed-surface task

### For RC2-FM-02 Single-Detail Fixation

Primary interventions:

- tighten the task around single-detail so the target is more visible
- keep the text or prompt surface small enough to isolate single-detail fixation
- rerun a bounded recheck on a changed but comparable text or prompt

Expected effect:

- learner resolves the dominant `single-detail fixation` pattern without changing the core node demand

Reverification target:

- one bounded changed-surface task

### For RC2-FM-03 Overgeneralized Background Knowledge

Primary interventions:

- tighten the task around overgeneralized so the target is more visible
- keep the text or prompt surface small enough to isolate overgeneralized background knowledge
- rerun a bounded recheck on a changed but comparable text or prompt

Expected effect:

- learner resolves the dominant `overgeneralized background knowledge` pattern without changing the core node demand

Reverification target:

- one bounded changed-surface task

### For RC2-FM-04 Question-Language Confound

Primary interventions:

- tighten the task around question-language so the target is more visible
- keep the text or prompt surface small enough to isolate question-language confound
- rerun a bounded recheck on a changed but comparable text or prompt

Expected effect:

- learner resolves the dominant `question-language confound` pattern without changing the core node demand

Reverification target:

- one bounded changed-surface task

## Escalation Rule

If the same dominant failure mode remains blocking after two bounded intervention cycles, escalate to human review of dependency integrity, prompt design, and text-task alignment.
