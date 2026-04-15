# N3 Agent Behavior

When `N3` is unstable or blocked, the agent should:

- classify whether the barrier is recount dependence, directional confusion, or jump tracking drift
- keep the learner inside bounded count-on and count-back ranges until stability is demonstrated
- avoid marking `N4` ready if strategic counting remains fragile
- log whether subtraction instability is materially worse than addition instability
