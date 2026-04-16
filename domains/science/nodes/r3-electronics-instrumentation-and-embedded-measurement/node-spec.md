# R3 Node Specification

## Node Identity

- id: `R3`
- name: `electronics_instrumentation_and_embedded_measurement`
- domain: `science`
- support tier: `Incubation`
- current maturity state: `Drafted`
- supported profile: `science-secondary-node-package`
- evidence class: `Synthetic`

## Purpose

The learner uses circuits, sensors, and instrumentation in measurement and design settings without treating devices as black boxes that produce automatically trustworthy data.

## Dependencies

- `R1`
- `F4`
- `D4`

## Exit Conditions

The learner is secure on `R3` only when all of the following are true:

1. explains sensor and instrumentation behavior using circuit and measurement models
2. uses electronics and embedded measurement in bounded design or inquiry settings
3. evaluates calibration, noise, and setup quality before trusting the data stream
4. succeeds across more than one electronics or instrumentation context
5. passes a delayed recheck after spacing

## Mastery Criteria

- direct accuracy threshold: `0.90`
- explanation required: `true`
- transfer required: `true`
- retention check days: `42`

## Observable Evidence

The learner can:

- connect circuit behavior to sensing or instrumentation outcomes
- reason about measurement quality, calibration, and signal limitations explicitly
- use devices as part of a modeled system rather than as black boxes only
- avoid treating collected data as valid without setup checks

## Claim Boundary

This node package is an operational draft and not a classroom-release claim.
