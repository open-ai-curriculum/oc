# A2 Learner State Model

```yaml
learner_id: string
node_id: A2
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  W4: blocked | emerging | provisional | secure | unstable
  R4: blocked | emerging | provisional | secure | unstable
  L3: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - A2-FM-01 | A2-FM-02 | A2-FM-03 | A2-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
