# S4 Node Specification

## Node Identity

- id: `S4`
- name: `multi_strategy_planning_source_evaluation_and_self_directed_revision`
- domain: `learning_to_learn`
- support tier: `Incubation`
- current maturity state: `Drafted`
- supported profile: `cross-domain-learning-support-node-package`
- evidence class: `Synthetic`

## Purpose

The learner compares multiple strategies, evaluates the usefulness of available sources, and revises the learning approach independently when evidence shows the current strategy is insufficient.

## Dependencies

- `S3` error analysis, strategy revision, and resource selection
- `R4` metacognitive evaluation and adaptive learning decisions

## Exit Conditions

The learner is secure on `S4` only when all of the following are true:

1. plans from more than one plausible strategy or source
2. evaluates source quality and task fit explicitly
3. chooses a revised approach when evidence shows the first one is weak
4. sustains self-directed revision across more than one context
5. remains stable on delayed recheck

## Mastery Criteria

- direct accuracy threshold: `0.85`
- explanation required: `true`
- transfer required: `true`
- retention check days: `28`

## Observable Evidence

The learner can:

- compare strategy options before committing
- justify why one source or strategy is more reliable or useful
- revise the approach without waiting for external correction

## Claim Boundary

This node package is an operational draft and not a classroom-release claim.
