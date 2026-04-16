# P3 Learner State Model

```yaml
learner_id: string
node_id: P3
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  O2: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_applicable
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - P3-FM-01 | P3-FM-02 | P3-FM-03 | P3-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
