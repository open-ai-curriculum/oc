# D3 Learner State Model

```yaml
learner_id: string
node_id: D3
status: blocked | emerging | provisional | secure | unstable
dependency_status:
  D2: secure | unstable | blocked
  E3: secure | unstable | blocked
  M3: secure | unstable | blocked
direct_accuracy: number
explanation_status: not_met | weak | met
transfer_status: not_met | weak | met
retention_status: not_due | not_met | met
dominant_failure_modes:
  - D3-FM-01 | D3-FM-02 | D3-FM-03 | D3-FM-04
recommended_interventions: []
last_verified_at: YYYY-MM-DD
review_state: draft | human-reviewed
notes: string
```
