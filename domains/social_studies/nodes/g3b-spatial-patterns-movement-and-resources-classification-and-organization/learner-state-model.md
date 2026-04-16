# G3B Learner State Model

```yaml
learner_id: string
node_id: G3B
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  G3A: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - G3B-FM-01 | G3B-FM-02 | G3B-FM-03 | G3B-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
