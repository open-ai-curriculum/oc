# C4 Learner State Model

```yaml
learner_id: string
node_id: C4
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  C3: secure | unstable | blocked
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - C4-FM-01 | C4-FM-02 | C4-FM-03 | C4-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
