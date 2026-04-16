# WC1 Node Specification

## Node Identity

- id: `WC1`
- name: `sentence_planning_and_generation`
- domain: `ela_literacy`
- support tier: `Core release`
- current maturity state: `Drafted`
- supported profile: `sentence-writing-node-package`
- evidence class: `Synthetic`

## Purpose

The learner turns an intended idea into a complete sentence before transcription burden becomes the main demand.

## Dependencies

- `L1`
- `W1`

## Exit Conditions

The learner is secure on `WC1` only when all of the following are true:

1. plans and states a complete sentence aligned to the prompt
2. maintains sentence meaning without fragment or run-on collapse
3. succeeds across changed sentence prompts or frames
4. remains stable on delayed recheck

## Mastery Criteria

- direct accuracy threshold: `0.85`
- explanation required: `true`
- transfer required: `true`
- retention check days: `14`

## Observable Evidence

The learner can:

- generate complete sentences before full transcription is required
- separate sentence quality from transcription load
- support the bridge into written sentence execution

## Claim Boundary

This node package is an operational draft and not a classroom-release claim.
