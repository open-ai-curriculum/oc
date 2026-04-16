# AC4 Learner State Model

```yaml
learner_id: string
node_id: AC4
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  R4: blocked | emerging | provisional | secure | unstable
  WC6: blocked | emerging | provisional | secure | unstable
  L3: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - AC4-FM-01 | AC4-FM-02 | AC4-FM-03 | AC4-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
