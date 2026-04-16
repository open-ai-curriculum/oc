# Q4A Learner State Model

```yaml
learner_id: string
node_id: Q4A
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  none: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - Q4A-FM-01 | Q4A-FM-02 | Q4A-FM-03 | Q4A-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
