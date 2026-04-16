# S4 Learner State Model

```yaml
learner_id: string
node_id: S4
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  S3: met | unmet | unknown
  R4: met | unmet | unknown
direct_accuracy: number
explanation_status: not_met | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - S4-FM-01 | S4-FM-02 | S4-FM-03
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
