# W2 Node Specification

## Node Identity

- id: `W2`
- name: `sentence_generation_and_transcription`
- domain: `ela_literacy`
- support tier: `Core release`
- current maturity state: `Drafted`
- supported profile: `sentence-writing-node-package`
- evidence class: `Synthetic`

## Purpose

The learner generates and transcribes complete written sentences well enough to support paragraphing, response to text, and later composition.

## Dependencies

- `FR4` word-level decoding generalization
- `L1` sentence formation and basic conventions
- `W1` drawing, dictation, labeling, and idea capture

## Exit Conditions

The learner is secure on `W2` only when all of the following are true:

1. generates complete written sentences that carry intended meaning
2. manages transcription demands well enough that idea generation does not collapse entirely
3. uses enough basic conventions for the sentence to remain interpretable
4. succeeds across changed prompts or sentence-production contexts
5. remains stable on delayed recheck

## Mastery Criteria

- direct accuracy threshold: `0.85`
- explanation required: `true`
- transfer required: `true`
- retention check days: `14`

## Observable Evidence

The learner can:

- produce complete written sentences
- translate an intended idea into a sentence on the page
- manage transcription and sentence structure together in bounded tasks
- support later paragraph-level and source-based writing work

## Claim Boundary

This node package is an operational draft and not a classroom-release claim.
