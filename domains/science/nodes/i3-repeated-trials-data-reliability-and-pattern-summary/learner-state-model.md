# I3 Learner State Model

```yaml
learner_id: string
node_id: I3
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  I2: secure | unstable | blocked
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - I3-FM-01 | I3-FM-02 | I3-FM-03 | I3-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
