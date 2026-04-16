# I4 Item Bank Schema

Each item in the `I4` bank should include:

- `item_id`
- `node_id`
- `prompt`
- `task_type`
- `answer_key`
- `scorable_traits`
- `target_failure_modes`
- `context_tags`

Allowed `task_type` values:

- `multivariable_design_critique`
- `sampling_reasoning`
- `error_source_analysis`
- `transfer_case`
