# D4 Item Bank Schema

Each item in the `D4` bank should include:

- `item_id`
- `node_id`
- `prompt`
- `task_type`
- `answer_key`
- `scorable_traits`
- `target_failure_modes`
- `context_tags`

Allowed `task_type` values:

- `optimization_justification`
- `tradeoff_analysis`
- `design_claim_critique`
- `transfer_case`
