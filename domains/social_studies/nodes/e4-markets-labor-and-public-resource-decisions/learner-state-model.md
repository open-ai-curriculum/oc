# E4 Learner State Model

```yaml
learner_id: string
node_id: E4
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  E3: blocked | emerging | provisional | secure | unstable
  C2: blocked | emerging | provisional | secure | unstable
  Q4: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - E4-FM-01 | E4-FM-02 | E4-FM-03 | E4-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
