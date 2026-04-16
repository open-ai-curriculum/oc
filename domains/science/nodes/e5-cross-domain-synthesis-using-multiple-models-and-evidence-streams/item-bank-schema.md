# E5 Item Bank Schema

Each item in the `E5` bank should include:

- `item_id`
- `node_id`
- `prompt`
- `task_type`
- `answer_key`
- `scorable_traits`
- `target_failure_modes`
- `context_tags`

Allowed `task_type` values:

- `evidence_stream_synthesis`
- `multi_model_comparison`
- `integrated_explanation_critique`
- `transfer_case`
