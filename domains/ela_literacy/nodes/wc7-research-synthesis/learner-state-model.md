# WC7 Learner State Model

```yaml
learner_id: string
node_id: WC7
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  WC6: blocked | emerging | provisional | secure | unstable
  R6: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - WC7-FM-01 | WC7-FM-02 | WC7-FM-03 | WC7-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
