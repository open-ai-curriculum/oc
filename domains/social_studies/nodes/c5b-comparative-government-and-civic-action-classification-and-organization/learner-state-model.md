# C5B Learner State Model

```yaml
learner_id: string
node_id: C5B
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  C5A: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - C5B-FM-01 | C5B-FM-02 | C5B-FM-03 | C5B-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
