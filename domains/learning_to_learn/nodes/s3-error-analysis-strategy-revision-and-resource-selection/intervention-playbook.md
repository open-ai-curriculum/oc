# S3 Intervention Playbook

## Purpose

Map `S3` failure modes to bounded intervention responses.

## Intervention Rules

### For S3-FM-01 Error Without Diagnosis

Primary interventions:

- compare the failed attempt to a successful one
- require naming one specific mismatch
- keep the error analysis target to one feature at a time

Expected effect:

- learner identifies why the attempt failed

Reverification target:

- one compare-and-diagnose routine

### For S3-FM-02 Same-Strategy Repetition

Primary interventions:

- require a different second move after failure
- limit the revision menu to two distinct options
- make repeated same-strategy use visible

Expected effect:

- learner changes strategy after failure

Reverification target:

- one fail-then-revise cycle

### For S3-FM-03 Resource Mismatch

Primary interventions:

- classify resources by the kind of problem they solve
- match one resource to one diagnosed breakdown
- compare a good and bad resource choice

Expected effect:

- learner selects a resource that fits the actual breakdown

Reverification target:

- one diagnose-then-resource-select routine

## Escalation Rule

If the same dominant failure mode remains blocking after two bounded intervention cycles, escalate to human review of task complexity, resource design, and self-evaluation load rather than only adding more correction attempts.
