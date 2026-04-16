# T1 Intervention Playbook

## Purpose

Map `T1` failure modes to bounded intervention responses.

## Intervention Rules

### For T1-FM-01 Context Lock

Primary interventions:

- compare the original task with one closely related new task
- name what stayed the same and what changed
- reuse the same strategy label across both tasks

Expected effect:

- learner applies the strategy beyond the original training context

Reverification target:

- one original-to-near-transfer pair

### For T1-FM-02 Representation Shift Breakdown

Primary interventions:

- bridge between two representations explicitly
- keep the underlying strategy constant while changing only one surface feature
- ask the learner to map the same move across the two forms

Expected effect:

- learner preserves the strategy across a representation change

Reverification target:

- one representation-bridge cycle

### For T1-FM-03 Transfer Without Monitoring

Primary interventions:

- add one explicit check for whether the transferred strategy still fits
- compare a successful and unsuccessful transfer attempt
- require one adaptation decision after the first transfer move

Expected effect:

- learner monitors whether the transfer move remains productive

Reverification target:

- one transfer-and-check cycle

## Escalation Rule

If the same dominant failure mode remains blocking after two bounded intervention cycles, escalate to human review of domain distance, representation demands, and task similarity assumptions rather than only offering more analogies.
