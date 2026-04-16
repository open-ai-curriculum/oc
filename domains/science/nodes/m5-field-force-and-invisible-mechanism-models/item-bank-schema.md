# M5 Item Bank Schema

Each item in the `M5` bank should include:

- `item_id`
- `node_id`
- `prompt`
- `task_type`
- `answer_key`
- `scorable_traits`
- `target_failure_modes`
- `context_tags`

Allowed `task_type` values:

- `field_model_explanation`
- `invisible_mechanism_critique`
- `model_limit_analysis`
- `transfer_case`
