# N5 Node Specification

## Node Identity

- id: `N5`
- name: `cybersecurity_mechanisms_threat_models_and_defensive_reasoning`
- domain: `computer_science`
- support tier: `Incubation`
- current maturity state: `Drafted`
- supported profile: `computer-science-advanced-secondary-node-package`
- evidence class: `Synthetic`

## Purpose

The learner reasons about defensive mechanisms, likely threats, and security tradeoffs without reducing cybersecurity to a checklist of tools or slogans.

## Dependencies

- `N4`
- `C3`

## Exit Conditions

The learner is secure on `N5` only when all of the following are true:

1. identifies a bounded threat model for a computing scenario
2. explains how one or more defensive mechanisms address the modeled threat
3. discusses at least one security tradeoff or limitation in a bounded case
4. succeeds across more than one cybersecurity reasoning context
5. passes a delayed recheck after spacing

## Mastery Criteria

- direct accuracy threshold: `0.90`
- explanation required: `true`
- transfer required: `true`
- retention check days: `42`

## Observable Evidence

The learner can:

- describe who or what the system is being protected from in a bounded scenario
- connect a defensive mechanism to the specific threat it is intended to reduce
- recognize that security controls can involve usability, cost, or performance tradeoffs
- avoid naming tools without explaining what attack surface or risk they address

## Claim Boundary

This node package is an operational draft and not a classroom-release claim.
