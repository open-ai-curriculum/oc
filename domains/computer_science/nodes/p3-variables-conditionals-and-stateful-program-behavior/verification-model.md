# P3 Verification Model

## Verification Gates

`P3` requires all of the following before `secure` status can be assigned:

1. Direct performance gate: learner reaches at least `0.90` accuracy across variables, conditionals, and stateful program behavior tasks.
2. Meaning gate: learner explains the targeted stateful programming reasoning ideas in at least `2` of `3` prompts.
3. Transfer gate: learner succeeds in at least one unfamiliar computing context.
4. Retention gate: learner reaches at least `0.85` accuracy on a delayed recheck after about `28` days.

## Verification Notes

- Vocabulary without executable or causal reasoning is insufficient.
- Explanations must remain bounded to evidence and model constraints.
- Synthetic evidence supports package inspection only and cannot authorize learner-impacting claims.
