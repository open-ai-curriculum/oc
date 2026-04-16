# P3 Item Bank Schema

Each item in the `P3` bank should include:

- `item_id`
- `node_id`
- `prompt`
- `task_type`
- `answer_key`
- `scorable_traits`
- `target_failure_modes`
- `context_tags`

Allowed `task_type` values:

- `particle_model_explanation`
- `wave_model_explanation`
- `force_interaction_reasoning`
- `transfer_case`
