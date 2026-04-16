# H4 Learner State Model

```yaml
learner_id: string
node_id: H4
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  H3: blocked | emerging | provisional | secure | unstable
  Q4: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - H4-FM-01 | H4-FM-02 | H4-FM-03 | H4-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
