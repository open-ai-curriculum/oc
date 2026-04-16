# WC7 Item Bank Schema

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

Coverage minimums for this node:

- 4 direct execution items
- 2 explanation items
- 2 error diagnosis items
- 2 transfer items
- 1 retention item
- 2 prerequisite probe items

The current bank is synthetic and intended for structural package validation only.
