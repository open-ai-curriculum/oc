# G6 Learner State Model

```yaml
learner_id: string
node_id: G6
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  G5: blocked | emerging | provisional | secure | unstable
  C4: blocked | emerging | provisional | secure | unstable
  Q6: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - G6-FM-01 | G6-FM-02 | G6-FM-03 | G6-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
