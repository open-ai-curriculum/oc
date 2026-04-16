# RC5 Node Specification

## Node Identity

- id: `RC5`
- name: `evidence_selection_from_text`
- domain: `ela_literacy`
- support tier: `Core release`
- current maturity state: `Drafted`
- supported profile: `text-response-node-package`
- evidence class: `Synthetic`

## Purpose

The learner selects relevant textual evidence for a response without yet requiring full explanation of how that evidence supports the claim.

## Dependencies

- `RC4`
- `O3`

## Exit Conditions

The learner is secure on `RC5` only when all of the following are true:

1. selects or cites relevant text details in response to a prompt
2. distinguishes relevant from irrelevant details
3. succeeds across changed texts or question types
4. remains stable on delayed recheck

## Mastery Criteria

- direct accuracy threshold: `0.85`
- explanation required: `true`
- transfer required: `true`
- retention check days: `14`

## Observable Evidence

The learner can:

- choose a relevant detail from a text to answer a question
- separate relevant evidence from distractor details
- support later evidence explanation work

## Claim Boundary

This node package is an operational draft and not a classroom-release claim.
