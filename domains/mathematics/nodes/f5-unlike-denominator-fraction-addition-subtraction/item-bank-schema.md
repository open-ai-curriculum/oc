# F5 Item Bank Schema

## Purpose

Define the minimum item families required to verify `F5` rigorously and consistently.

## Required Item Families

### Family A. Direct Execution

Purpose:

- assess procedural accuracy on unlike-denominator fraction addition and subtraction

Required coverage:

- addition
- subtraction
- proper fractions
- bounded mixed-number or improper-fraction cases

Example forms:

- `3/4 + 1/8`
- `5/6 - 1/4`

### Family B. Explanation

Purpose:

- assess whether the learner knows why rewriting to common units is valid

Example forms:

- explain why `3/4` can become `6/8`
- explain why denominator rewriting is required before combining

### Family C. Error Diagnosis

Purpose:

- determine whether the learner can identify a known failure mode

Example forms:

- a student says `3/4 + 1/8 = 4/12`; what went wrong?
- a student rewrites `2/3` as `3/4`; identify the issue

### Family D. Transfer

Purpose:

- verify that the capability holds across changed surface forms

Example forms:

- measurement context
- recipe context
- number-line or area-model context
- compare-plausibility item before solving

## Minimum Verification Mix

For one full `F5` verification cycle, the item set should include at least:

- 6 direct execution items
- 2 explanation items
- 2 error diagnosis items
- 2 transfer items

## Item Metadata

Each item should declare:

- `item_id`
- `family`
- `target_node`
- `secondary_dependency_targets`
- `difficulty_band`
- `response_modes_allowed`
- `dominant_failure_modes_if_incorrect`
- `requires_human_scoring`

## Response Modes

Allowed response modes may include:

- written symbolic response
- oral explanation
- multiple choice for diagnosis
- diagram annotation
- teacher-recorded interview response

## Human Scoring Guidance

Explanation and some transfer items should be flagged for human scoring or review, especially when a learner uses nonstandard but mathematically valid reasoning.
