# T2 Learner State Model

```yaml
learner_id: string
node_id: T2
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  T1: met | unmet | unknown
  A3: met | unmet | unknown
  M4: met | unmet | unknown
  S4: met | unmet | unknown
  R4: met | unmet | unknown
direct_accuracy: number
explanation_status: not_met | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - T2-FM-01 | T2-FM-02 | T2-FM-03
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
