# FR1 Learner State Model

```yaml
learner_id: string
node_id: FR1
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  P3: blocked | emerging | provisional | secure | unstable
  P4: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - FR1-FM-01 | FR1-FM-02 | FR1-FM-03 | FR1-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
