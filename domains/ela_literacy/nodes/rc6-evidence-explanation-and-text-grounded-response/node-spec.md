# RC6 Node Specification

## Node Identity

- id: `RC6`
- name: `evidence_explanation_and_text_grounded_response`
- domain: `ela_literacy`
- support tier: `Core release`
- current maturity state: `Drafted`
- supported profile: `text-response-node-package`
- evidence class: `Synthetic`

## Purpose

The learner explains how selected textual evidence supports a response, establishing a full text-grounded response boundary.

## Dependencies

- `RC5`

## Exit Conditions

The learner is secure on `RC6` only when all of the following are true:

1. answers a text-dependent prompt with relevant evidence and explanation
2. links the chosen detail to the response claim or conclusion
3. maintains performance across changed texts and question formats
4. remains stable on delayed recheck

## Mastery Criteria

- direct accuracy threshold: `0.85`
- explanation required: `true`
- transfer required: `true`
- retention check days: `14`

## Observable Evidence

The learner can:

- answer text-dependent prompts with relevant evidence and reasoning
- explain how a chosen detail supports the answer
- support later literary and informational analysis nodes

## Claim Boundary

This node package is an operational draft and not a classroom-release claim.
