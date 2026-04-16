# M2 Learner State Model

```yaml
learner_id: string
node_id: M2
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  M1: met | unmet | unknown
  S1: met | unmet | unknown
direct_accuracy: number
explanation_status: not_applicable
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - M2-FM-01 | M2-FM-02 | M2-FM-03
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
