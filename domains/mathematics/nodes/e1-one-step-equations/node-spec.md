# E1 Node Specification

## Node Identity

- id: `E1`
- name: `one_step_equations`
- domain: `mathematics`
- support tier: `Core release`
- current maturity state: `Drafted`
- supported profile: `upstream-readiness-node-package`
- evidence class: `Synthetic`

## Purpose

The learner solves one-step equations by preserving equality through inverse reasoning rather than by moving symbols without meaning.

## Dependencies

- `S2`

## Exit Conditions

The learner is secure on `E1` only when all of the following are true:

1. solves one-step equations while preserving equality
2. uses inverse reasoning rather than unsupported transposition habits
3. verifies solutions explicitly in direct and contextual cases
4. succeeds across symbolic, balance, and word-problem representations
5. passes a delayed recheck after spacing

## Mastery Criteria

- direct accuracy threshold: `0.90`
- explanation required: `true`
- transfer required: `true`
- retention check days: `21`

## Observable Evidence

The learner can:

- solves addition, subtraction, multiplication, and division one-step equations accurately
- explains why the same inverse operation must apply to both sides of the equation
- checks solutions by substitution or structural verification
- matches symbolic equations to balance, context, or missing-value representations

## Claim Boundary

This node package is an operational draft and not a classroom-release claim.
