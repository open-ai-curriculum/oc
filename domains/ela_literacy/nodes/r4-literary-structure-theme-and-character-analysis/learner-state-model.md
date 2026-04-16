# R4 Learner State Model

```yaml
learner_id: string
node_id: R4
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  RC6: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - R4-FM-01 | R4-FM-02 | R4-FM-03 | R4-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
