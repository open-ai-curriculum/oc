# E2 Learner State Model

```yaml
learner_id: string
node_id: E2
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  E1: secure | unstable | blocked
  I2: secure | unstable | blocked
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - E2-FM-01 | E2-FM-02 | E2-FM-03 | E2-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
