# RC1 Learner State Model

```yaml
learner_id: string
node_id: RC1
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  O3: blocked | emerging | provisional | secure | unstable
  P1: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - RC1-FM-01 | RC1-FM-02 | RC1-FM-03 | RC1-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
