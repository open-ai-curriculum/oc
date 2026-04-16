# P5 Item Bank Schema

Each item in the `P5` bank should include:

- `item_id`
- `node_id`
- `prompt`
- `task_type`
- `answer_key`
- `scorable_traits`
- `target_failure_modes`
- `context_tags`

Allowed `task_type` values:

- `field_model_reasoning`
- `atomic_interaction_explanation`
- `quantitative_conservation_analysis`
- `transfer_case`
