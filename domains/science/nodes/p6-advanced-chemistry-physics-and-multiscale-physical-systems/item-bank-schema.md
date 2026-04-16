# P6 Item Bank Schema

Each item in the `P6` bank should include:

- `item_id`
- `node_id`
- `prompt`
- `task_type`
- `answer_key`
- `scorable_traits`
- `target_failure_modes`
- `context_tags`

Allowed `task_type` values:

- `multiscale_physical_explanation`
- `model_coordination_analysis`
- `physical_evidence_critique`
- `transfer_case`
