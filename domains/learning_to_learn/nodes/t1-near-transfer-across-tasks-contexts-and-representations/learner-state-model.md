# T1 Learner State Model

```yaml
learner_id: string
node_id: T1
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  C2: met | unmet | unknown
  M2: met | unmet | unknown
  S2: met | unmet | unknown
  R2: met | unmet | unknown
direct_accuracy: number
explanation_status: not_applicable
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - T1-FM-01 | T1-FM-02 | T1-FM-03
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
