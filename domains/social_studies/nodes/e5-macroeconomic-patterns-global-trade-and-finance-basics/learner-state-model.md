# E5 Learner State Model

```yaml
learner_id: string
node_id: E5
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  E4: blocked | emerging | provisional | secure | unstable
  G4: blocked | emerging | provisional | secure | unstable
  Q5: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - E5-FM-01 | E5-FM-02 | E5-FM-03 | E5-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
