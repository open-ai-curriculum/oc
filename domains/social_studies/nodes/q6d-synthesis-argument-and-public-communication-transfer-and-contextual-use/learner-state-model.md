# Q6D Learner State Model

```yaml
learner_id: string
node_id: Q6D
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  Q6C: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - Q6D-FM-01 | Q6D-FM-02 | Q6D-FM-03 | Q6D-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
