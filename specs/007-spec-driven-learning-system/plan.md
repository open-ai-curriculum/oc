# Implementation Plan: Spec-Driven Learning System

## Objective

Reset the repository so that it is governed by a spec-driven learning-system architecture and anchored to a first math proof-of-method slice.

## Design Decisions

### 1. Treat The Repository As A Learning-System Lab

The repository is no longer framed primarily as a curriculum-product publishing effort. Curriculum is a downstream artifact class.

### 2. Use A Narrow Math Slice As The First Execution Domain

The first governed domain slice is:

- fractions
- signed numbers
- one-step equations
- multi-step equations
- variables on both sides

### 3. Separate System Specification From Domain Instantiation

The repository should have:

- one primary system specification
- domain-specific packages that instantiate the model

### 4. Remove Prior Direction From The Active Architecture

Prior curriculum-product and commercialization artifacts should be removed when they are no longer considered valuable or reusable, so they do not continue to distort the repository's direction by their mere presence.

## Deliverables

1. updated constitution
2. updated agent guidance
3. updated top-level README
4. this system spec package
5. a first domain package for mathematics, with algebra readiness as one downstream slice

## Risks

- the pivot could leave the repository in a mixed state unless the authority order is explicit
- the system may become too abstract unless the first domain package is concrete
- the model could drift toward over-standardization unless transfer and exploration are deliberately preserved

## Exit Condition

The repository should be understandable to a new contributor as:

- a spec-driven learning-system repository
- with a first math proof-of-method domain
- without stale curriculum-product architecture competing for authority
