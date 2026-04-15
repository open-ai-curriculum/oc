# Y2 Node Specification

## Node Identity

- id: `Y2`
- name: `whole_number_operation_estimation`
- domain: `mathematics`
- support tier: `Core release`
- current maturity state: `Drafted`
- supported profile: `upstream-readiness-node-package`
- evidence class: `Synthetic`

## Purpose

The learner estimates whole-number operation results using benchmark numbers and structural reasoning to judge plausibility before or after exact computation.

## Dependencies

- `Y1`
- `V3`

## Exit Conditions

The learner is secure on `Y2` only when all of the following are true:

1. estimates whole-number operation outcomes with defensible strategies
2. uses estimation to check reasonableness of exact results
3. chooses benchmark or decomposition strategies appropriate to the operation
4. succeeds across symbolic, story, and error-diagnosis tasks
5. passes a delayed recheck after spacing

## Mastery Criteria

- direct accuracy threshold: `0.88`
- explanation required: `true`
- transfer required: `true`
- retention check days: `21`

## Observable Evidence

The learner can:

- estimates addition and subtraction results with reasonable benchmark strategies
- uses multiplication and division approximations in bounded cases
- judges whether exact answers are plausible relative to benchmark estimates
- explains the estimation method used and its limits

## Claim Boundary

This node package is an operational draft and not a classroom-release claim.
