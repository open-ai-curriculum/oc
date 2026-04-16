# H4C Learner State Model

```yaml
learner_id: string
node_id: H4C
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  H4B: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - H4C-FM-01 | H4C-FM-02 | H4C-FM-03 | H4C-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
