# M4 Item Bank Schema

Each item in the `M4` bank should include:

- `item_id`
- `node_id`
- `prompt`
- `task_type`
- `answer_key`
- `scorable_traits`
- `target_failure_modes`
- `context_tags`

Allowed `task_type` values:

- `conservation_model_critique`
- `cycle_model_reasoning`
- `energy_flow_model_reasoning`
- `transfer_case`
