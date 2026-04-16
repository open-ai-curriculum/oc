# C1 Node Specification

## Node Identity

- id: `C1`
- name: `understanding_checks_and_clarification_signaling`
- domain: `learning_to_learn`
- support tier: `Incubation`
- current maturity state: `Drafted`
- supported profile: `cross-domain-learning-support-node-package`
- evidence class: `Synthetic`

## Purpose

The learner signals confusion, requests repetition or clarification, and checks whether the task demand was actually understood before proceeding.

## Dependencies

- `A1` shared task entry, attention anchoring, and routine persistence

## Exit Conditions

The learner is secure on `C1` only when all of the following are true:

1. distinguishes not understanding from simply not finishing
2. signals confusion in a usable way
3. requests repetition, clarification, or an example when needed
4. uses the clarification to reattempt the task
5. remains stable across more than one task type and on delayed recheck

## Mastery Criteria

- direct accuracy threshold: `0.80`
- explanation required: `false`
- transfer required: `true`
- retention check days: `14`

## Observable Evidence

The learner can:

- indicate when instructions or content meaning are unclear
- ask a bounded clarification question or request a repeat
- resume the task after clarification instead of remaining globally stuck

## Claim Boundary

This node package is an operational draft and not a classroom-release claim.
