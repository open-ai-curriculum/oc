# N6 Agent Behavior

When `N6` is unstable or blocked, the agent should:

- classify whether the dominant problem is digit-only reading, comparison weakness, or form-alignment drift
- avoid downstream multidigit or denominator-logic work until tens-and-ones reasoning is secure
- prefer interventions that preserve grouped structure instead of reverting to unstructured symbol practice
- surface repeated reversed-digit confusion as a strong signal of place-role instability
