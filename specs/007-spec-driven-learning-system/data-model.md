# Data Model: Spec-Driven Learning System

## Capability Node

Fields:

- `id`
- `name`
- `domain`
- `depends_on`
- `mastery_criteria`
- `verification_gates`
- `evidence_families`
- `failure_modes`
- `intervention_rules`
- `review_status`

## Mastery Criteria

Fields:

- `direct_accuracy_threshold`
- `explanation_required`
- `transfer_required`
- `retention_window_days`

## Verification Gate

Fields:

- `type`
- `purpose`
- `pass_rule`
- `evidence_required`

Supported initial types:

- `direct_performance`
- `meaning`
- `transfer`
- `retention`

## Failure Mode

Fields:

- `id`
- `name`
- `description`
- `diagnostic_signal`
- `common_upstream_causes`
- `allowed_interventions`

## Intervention Rule

Fields:

- `id`
- `trigger_failure_mode`
- `required_action`
- `expected_effect`
- `reverification_target`

## Learner State

Fields:

- `learner_id`
- `node_id`
- `status`
- `dependency_status`
- `direct_accuracy`
- `explanation_status`
- `transfer_status`
- `retention_status`
- `dominant_failure_modes`
- `recommended_interventions`
- `last_verified_at`
- `human_review_notes`

## Domain Slice

Fields:

- `id`
- `name`
- `description`
- `node_order`
- `entry_assumptions`
- `exit_assumptions`
- `proof_of_method_target`
