# F5 Teacher Observability View

## Purpose

Define the minimum teacher-facing view for `F5` so the system supports instructional judgment rather than obscuring it.

## Required Teacher Signals

For each learner, the view should show:

- current `F5` status
- dependency status for `F2`, `F3`, and `F4`
- direct accuracy snapshot
- explanation, transfer, and retention posture
- dominant failure mode
- current recommended intervention
- review notes

## Class-Level View

At class level, the system should show:

- percentage of learners by `F5` status
- top three dominant failure modes across the group
- number of learners blocked by each dependency
- retention recheck queue
- learners whose current status may be language-access affected

## Teacher Decision Use

The view should help a teacher decide:

- whether to intervene locally at `F5`
- whether to drop back to an upstream dependency
- whether a learner is ready to progress
- whether a supposed math problem may actually be a language or communication-access problem

## Anti-Patterns

The teacher view should not reduce to:

- a single percentage score
- green/yellow/red with no explanatory state
- activity completion counts mistaken for capability state

## Minimum Grouping Views

The view should support grouping by:

- dominant failure mode
- unstable dependency
- retention risk
- response-mode need
