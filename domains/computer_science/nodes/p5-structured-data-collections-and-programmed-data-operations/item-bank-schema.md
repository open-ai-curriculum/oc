# P5 Item-Bank Schema

## Top-Level Fields

- `node_id`
- `policy_version`
- `version`
- `items`

## Required Item Fields

- `item_id`
- `node_id`
- `item_family`
- `prompt`
- `expected_evidence`
- `dominant_failure_mode_targets`
- `difficulty_band`
- `response_modes_allowed`
- `requires_human_scoring`
- `variant_role`
- `scoring_focus`
- `scoring_guidance`

## Optional Item Fields

- `dependency_target`
- `suspected_knowledge_gap_if_incorrect`

## Item Families

- `direct_execution`
- `explanation`
- `error_diagnosis`
- `transfer`
- `retention`
- `prerequisite_probe`

The current bank is synthetic and intended for structural package validation only.
