# E3 Node Specification

## Node Identity

- id: `E3`
- name: `variables_both_sides`
- domain: `mathematics`
- support tier: `Core release`
- current maturity state: `Drafted`
- supported profile: `upstream-readiness-node-package`
- evidence class: `Synthetic`

## Purpose

The learner solves equations with variables on both sides and classifies one-solution, no-solution, and infinitely-many-solution cases structurally.

## Dependencies

- `E2`

## Exit Conditions

The learner is secure on `E3` only when all of the following are true:

1. solves variables-on-both-sides equations with structurally valid transformations
2. classifies outcome types correctly and explains their meaning
3. distinguishes arithmetic error from a legitimate contradiction or identity case
4. succeeds across symbolic equations, diagnostic tasks, and short contextual representations
5. passes a delayed recheck after spacing

## Mastery Criteria

- direct accuracy threshold: `0.85`
- explanation required: `true`
- transfer required: `true`
- retention check days: `28`

## Observable Evidence

The learner can:

- solves variables-on-both-sides equations by simplifying structure systematically
- distinguishes contradiction, identity, and one-solution outcomes
- explains what no solution and infinitely many solutions mean in equation terms
- checks structural class and solution result against the original equation

## Claim Boundary

This node package is an operational draft and not a classroom-release claim.
