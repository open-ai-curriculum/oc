# Fraction Spine Cross-Domain Routing Guide

## Purpose

This guide makes the `F1` through `F5` cross-domain runtime slice operational for mathematics reviewers, runtime authors, and future adaptive routing work.

It answers a practical question: when a learner fails a fraction node, should the system stay entirely on the mathematics node, or should it also route to a `learning_to_learn` support surface?

## Core Rule

The mathematics node remains primary.

Routing to `learning_to_learn` is allowed only when:

- the mathematics failure remains visible and classified locally
- the cross-domain attachment contract indicates a relevant support surface
- the routed learning-process support explains how the learner will re-enter the mathematics node more productively

## Fraction Slice Summary

### F1 Fraction Structure

Primary attachments:

- `C1` understanding checks and clarification signaling
- `M1` encoding through chunking, representation, and rehearsal

Use these when:

- symbolic-visual meaning mismatch persists because misunderstanding is not being surfaced
- the learner cannot hold fraction-part structure across representation shifts

Do not use these to:

- close `F1` without fraction-meaning evidence

### F2 Equivalent Fractions

Primary attachments:

- `M1`
- `S1`

Use these when:

- scaling structure does not hold through the rewrite
- the learner repeats additive distortion without checking preserved value

### F3 Compare Fractions

Primary attachments:

- `C1`
- `S1`

Use these when:

- the learner silently persists with whole-number comparison rules
- the learner keeps applying an unfit comparison routine without checking whether it matches the quantity task

### F4 Like-Denominator Fraction Addition And Subtraction

Primary attachments:

- `S1`
- `R1`

Use these when:

- denominator-adding persists because practice is not checked against unit-size meaning
- corrective feedback is given but not used for revision

### F5 Unlike-Denominator Fraction Addition And Subtraction

Primary attachments:

- `M1`
- `S1`
- `R1`

Use these when:

- common-denominator rewriting does not hold across steps
- a broken procedure is being reinforced through unchecked repetition
- mixed-number or plausibility feedback is not turned into a revised attempt

## Operational Questions

When evaluating a fraction failure, the runtime should ask in this order:

1. What is the dominant mathematics failure mode?
2. Does the fraction node remain the correct primary node?
3. Is there a declared cross-domain attachment for this failure pattern?
4. Is the support surface informing, intervention-only, or co-gating?
5. What evidence would show that the learner can now re-enter the mathematics node productively?

## Claim Boundary

This guide operationalizes the current fraction-slice cross-domain routing model. It does not yet claim that a production engine or reviewed classroom workflow is executing these routes automatically.
