# D4 Agent Behavior

When `D4` is unstable or blocked, the agent should:

- distinguish source-data mapping failure from display-construction failure
- avoid marking a display as successful if another reader could not interpret it
- surface whether representation explanation lags behind construction
