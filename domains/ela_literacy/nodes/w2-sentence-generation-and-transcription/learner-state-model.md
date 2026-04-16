# W2 Learner State Model

```yaml
learner_id: string
node_id: W2
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  FR4: blocked | emerging | provisional | secure | unstable
  L1: blocked | emerging | provisional | secure | unstable
  W1: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - W2-FM-01 | W2-FM-02 | W2-FM-03 | W2-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
