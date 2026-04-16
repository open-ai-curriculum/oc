# FR5 Learner State Model

```yaml
learner_id: string
node_id: FR5
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  FR4: blocked | emerging | provisional | secure | unstable
direct_accuracy: number
automaticity_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - FR5-FM-01 | FR5-FM-02 | FR5-FM-03 | FR5-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
