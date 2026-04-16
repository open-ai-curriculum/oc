# C2A Learner State Model

```yaml
learner_id: string
node_id: C2A
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  none: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - C2A-FM-01 | C2A-FM-02 | C2A-FM-03 | C2A-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
