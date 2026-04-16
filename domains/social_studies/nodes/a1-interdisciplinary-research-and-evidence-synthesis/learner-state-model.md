# A1 Learner State Model

```yaml
learner_id: string
node_id: A1
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  H5: blocked | emerging | provisional | secure | unstable
  C5: blocked | emerging | provisional | secure | unstable
  G5: blocked | emerging | provisional | secure | unstable
  E5: blocked | emerging | provisional | secure | unstable
  Q6: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - A1-FM-01 | A1-FM-02 | A1-FM-03 | A1-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
