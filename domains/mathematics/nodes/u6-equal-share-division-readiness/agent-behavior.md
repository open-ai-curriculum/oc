# U6 Agent Behavior

When `U6` is unstable or blocked, the agent should:

- distinguish tracking errors from fairness-criterion errors
- avoid marking equal-share reasoning secure if the learner only imitates round-robin distribution without checking equality
- surface whether inference about each share is lagging behind concrete distribution
