# P4 Item Bank Schema

Each item in the `P4` bank should include:

- `item_id`
- `node_id`
- `prompt`
- `task_type`
- `answer_key`
- `scorable_traits`
- `target_failure_modes`
- `context_tags`

Allowed `task_type` values:

- `reaction_evidence_explanation`
- `conservation_reasoning`
- `wave_behavior_explanation`
- `transfer_case`
