# O2 Learner State Model

```yaml
learner_id: string
node_id: O2
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  O1: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_applicable
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - O2-FM-01 | O2-FM-02 | O2-FM-03 | O2-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
