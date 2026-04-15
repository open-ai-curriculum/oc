# F5 Learner State Model

## Purpose

Define the learner-state representation for `F5`.

## State Record

```yaml
learner_id: string
node_id: F5
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  F2: secure | unstable | blocked
  F3: secure | unstable | blocked
  F4: secure | unstable | blocked
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes: []
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```

## State Transition Rules

### `blocked` -> `emerging`

Allowed when:

- direct accuracy improves meaningfully
- at least one prior blocking failure mode weakens

### `emerging` -> `provisional`

Allowed when:

- direct gate passes
- meaning gate passes
- transfer gate passes
- retention still pending

### `provisional` -> `secure`

Allowed when:

- retention gate passes
- no dependency is currently blocking

### `secure` -> `unstable`

Triggered when:

- delayed recheck fails
- an upstream dependency becomes blocking
- a repeated dominant failure mode reappears at significant intensity

### `unstable` -> `secure`

Allowed when:

- instability is corrected
- reverification confirms restored performance

## Review Boundary

Any automated learner-state update that materially affects a high-stakes progression decision should be reviewable by a human.
