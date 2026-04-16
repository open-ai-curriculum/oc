# A1 Node Specification

## Node Identity

- id: `A1`
- name: `shared_task_entry_attention_anchoring_and_routine_persistence`
- domain: `learning_to_learn`
- support tier: `Incubation`
- current maturity state: `Drafted`
- supported profile: `cross-domain-learning-support-node-package`
- evidence class: `Synthetic`

## Purpose

The learner joins a bounded task, orients to the target, and remains engaged long enough for instruction or practice to start.

## Dependencies

None

## Exit Conditions

The learner is secure on `A1` only when all of the following are true:

1. enters a bounded learning task within the expected routine
2. orients attention to the relevant person, object, prompt, or workspace
3. remains engaged long enough to complete an initial task segment
4. re-enters the task after brief drift with light support rather than full reset
5. remains stable across more than one task format and on delayed recheck

## Mastery Criteria

- direct accuracy threshold: `0.85`
- explanation required: `false`
- transfer required: `true`
- retention check days: `14`

## Observable Evidence

The learner can:

- start a task without extended refusal or unrelated diversion
- orient to the correct target for the task
- sustain participation through the first bounded routine
- recover from brief drift with minimal prompting

## Claim Boundary

This node package is an operational draft and not a classroom-release claim.
