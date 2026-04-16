# E4 Item Bank Schema

Each item in the `E4` bank should include:

- `item_id`
- `node_id`
- `prompt`
- `task_type`
- `answer_key`
- `scorable_traits`
- `target_failure_modes`
- `context_tags`

Allowed `task_type` values:

- `quantitative_explanation`
- `data_critique`
- `uncertainty_calibration`
- `transfer_case`
