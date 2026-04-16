# FR6 Learner State Model

```yaml
learner_id: string
node_id: FR6
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  FR5: blocked | emerging | provisional | secure | unstable
  P2: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
fluency_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - FR6-FM-01 | FR6-FM-02 | FR6-FM-03 | FR6-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
