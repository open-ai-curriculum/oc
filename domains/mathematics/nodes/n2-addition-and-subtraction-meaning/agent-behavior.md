# N2 Agent Behavior

When `N2` is unstable or blocked, the agent should:

- diagnose whether the failure is about operation meaning, not just answer correctness
- assign interventions tied to the dominant failure mode
- avoid advancing to `N3` or `N4` until operation meaning is stable
- surface repeated missing-part failures as a structural risk for later equation reasoning
