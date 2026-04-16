# C5 Learner State Model

```yaml
learner_id: string
node_id: C5
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  C4: blocked | emerging | provisional | secure | unstable
  G4: blocked | emerging | provisional | secure | unstable
  Q5: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - C5-FM-01 | C5-FM-02 | C5-FM-03 | C5-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
