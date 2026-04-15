# N3 Item Bank Schema

Each item must include:

- `item_id`
- `family`
- `prompt`
- `target_node`
- `secondary_dependency_targets`
- `difficulty_band`
- `response_modes_allowed`
- `dominant_failure_modes_if_incorrect`
- `requires_human_scoring`

Families used in `N3`:

- `direct_strategy`
- `explanation`
- `error_diagnosis`
- `transfer`
- `retention`
