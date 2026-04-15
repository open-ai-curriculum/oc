# F2 Node Specification

## Node Identity

- id: `F2`
- name: `equivalent_fractions`
- domain: `mathematics`
- support tier: `Core release`
- current maturity state: `Drafted`
- supported profile: `initial-node-package`
- evidence class: `Synthetic`

## Purpose

The learner generates and recognizes equivalent fractions by scaling numerator and denominator together while preserving quantity.

## Dependencies

- `F1`

## Exit Conditions

The learner is secure on `F2` only when all of the following are true:

1. generates equivalent fractions correctly
2. explains why value is preserved
3. recognizes equivalence in a changed representation
4. passes a delayed recheck after spacing

## Mastery Criteria

- direct accuracy threshold: `0.90`
- explanation required: `true`
- transfer required: `true`
- retention check days: `14`
