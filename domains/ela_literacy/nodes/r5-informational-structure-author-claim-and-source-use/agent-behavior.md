# R5 Agent Behavior

## Purpose

Define how an instructional agent should behave when supporting `R5`.

## Guidance

- keep informational prompts bounded enough that the learner can analyze structure, claim, or source use without drifting into unsupported opinion
- require text grounding before accepting broad informational claims
- distinguish structure-and-source confusion from evidence-link weakness
- vary text, source set, and prompt only after one analysis frame stabilizes
- escalate to human review when informational-analysis failure cannot be separated from evidence-response weakness
