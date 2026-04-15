# E2 Node Specification

## Node Identity

- id: `E2`
- name: `multi_step_equations`
- domain: `mathematics`
- support tier: `Core release`
- current maturity state: `Drafted`
- supported profile: `upstream-readiness-node-package`
- evidence class: `Synthetic`

## Purpose

The learner coordinates multiple reversible operations in sequence while preserving equality and maintaining coherent intermediate states.

## Dependencies

- `E1`

## Exit Conditions

The learner is secure on `E2` only when all of the following are true:

1. solves multi-step equations with coherent step sequence and equality preservation
2. explains intermediate transformations rather than treating them as opaque notation
3. maintains accuracy across signed-number and fraction cases appropriate to the slice
4. succeeds across symbolic equations, structured errors, and contextual tasks
5. passes a delayed recheck after spacing

## Mastery Criteria

- direct accuracy threshold: `0.88`
- explanation required: `true`
- transfer required: `true`
- retention check days: `21`

## Observable Evidence

The learner can:

- solves equations requiring multiple inverse steps in a defensible sequence
- keeps sign, operation, and transcription accuracy across intermediate lines
- justifies why a chosen sequence of steps is valid
- checks completed solutions against the original equation

## Claim Boundary

This node package is an operational draft and not a classroom-release claim.
