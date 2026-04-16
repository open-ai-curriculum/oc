# C2 Node Specification

## Node Identity

- id: `C2`
- name: `explanation_monitoring_and_question_generation`
- domain: `learning_to_learn`
- support tier: `Incubation`
- current maturity state: `Drafted`
- supported profile: `cross-domain-learning-support-node-package`
- evidence class: `Synthetic`

## Purpose

The learner checks whether an explanation makes sense and asks a targeted question about missing steps, meanings, or examples.

## Dependencies

- `C1` understanding checks and clarification signaling
- `A2` attention planning, distraction recovery, and task completion

## Exit Conditions

The learner is secure on `C2` only when all of the following are true:

1. notices when an explanation or model has a missing or unclear part
2. asks a question tied to that specific gap
3. distinguishes step, meaning, and example questions
4. succeeds across more than one task or domain context
5. remains stable on delayed recheck

## Mastery Criteria

- direct accuracy threshold: `0.80`
- explanation required: `false`
- transfer required: `true`
- retention check days: `14`

## Observable Evidence

The learner can:

- identify where an explanation stopped making sense
- ask for the missing step or example
- use the answer to continue the task

## Claim Boundary

This node package is an operational draft and not a classroom-release claim.
