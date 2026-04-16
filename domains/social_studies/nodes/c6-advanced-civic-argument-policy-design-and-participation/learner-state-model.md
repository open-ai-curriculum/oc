# C6 Learner State Model

```yaml
learner_id: string
node_id: C6
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  C5: blocked | emerging | provisional | secure | unstable
  E5: blocked | emerging | provisional | secure | unstable
  Q6: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - C6-FM-01 | C6-FM-02 | C6-FM-03 | C6-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
