# W8 Node Specification

## Node Identity

- id: `W8`
- name: `chi_square_reasoning`
- domain: `mathematics`
- support tier: `Core release`
- current maturity state: `Drafted`
- supported profile: `upstream-readiness-node-package`
- evidence class: `Synthetic`

## Purpose

The learner uses chi-square reasoning to compare observed and expected categorical outcomes, connecting counts, expected structure, and evidence against chance models in bounded categorical-data settings.

## Dependencies

- `W4`
- `W3`


## Exit Conditions

The learner is secure on this node only when all of the following are true:

1. computes or interprets expected counts in bounded goodness-of-fit or independence settings and explains where those expectations come from
2. compares observed and expected categorical distributions using chi-square evidence logic rather than ad hoc visual judgment alone
3. interprets bounded categorical-data conclusions while preserving the study-design and assumption limits on the claim
4. distinguishes when a categorical-data question is better handled by chi-square reasoning than by proportion inference
5. passes a delayed recheck after spacing


## Mastery Criteria

- direct accuracy threshold: `0.84`
- explanation required: `true`
- transfer required: `true`
- retention check days: `21`

## Observable Evidence

The learner can:

- compute or interpret expected counts in bounded categorical-data settings
- explain what a chi-square comparison says about fit or association in categorical data
- distinguish observed-versus-expected evidence from stronger causal claims
- justify when categorical-data structure calls for chi-square reasoning instead of another inferential routine


## Claim Boundary

This node package is an operational draft and not a classroom-release claim.
