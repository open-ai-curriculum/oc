# C2 Node Specification

## Node Identity

- id: `C2`
- name: `debugging_strategy_trace_reasoning_and_test_cases`
- domain: `computer_science`
- support tier: `Incubation`
- current maturity state: `Drafted`
- supported profile: `computer-science-middle-grade-node-package`
- evidence class: `Synthetic`

## Purpose

The learner traces program behavior, isolates errors, and uses simple test cases intentionally without treating debugging as repeated guessing.

## Dependencies

- `C1`
- `P3`

## Exit Conditions

The learner is secure on `C2` only when all of the following are true:

1. traces a bounded program to identify likely error locations
2. uses a simple test case intentionally to check program behavior
3. revises code or logic with a stated debugging reason
4. succeeds across more than one bounded debugging context
5. passes a delayed recheck after spacing

## Mastery Criteria

- direct accuracy threshold: `0.90`
- explanation required: `true`
- transfer required: `true`
- retention check days: `28`

## Observable Evidence

The learner can:

- trace values and control flow through a simple program
- choose or explain a test case that checks a specific behavior
- separate bug location from bug repair in a bounded case
- avoid random code changes without a stated hypothesis

## Claim Boundary

This node package is an operational draft and not a classroom-release claim.
