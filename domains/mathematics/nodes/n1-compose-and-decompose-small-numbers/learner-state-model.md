# N1 Learner State Model

```yaml
learner_id: string
node_id: N1
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  C3: secure | unstable | blocked
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - N1-FM-01 | N1-FM-02 | N1-FM-03 | N1-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
