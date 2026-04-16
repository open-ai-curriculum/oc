# Q1 Agent Behavior Rules

## Purpose

Define the allowed role of agents when working on `Q1`.

## Agent Responsibilities

Agents may:

- draft candidate items aligned to the item-bank schema
- classify likely failure modes from learner work samples
- suggest bounded interventions from the playbook
- summarize learner-state changes
- flag access-risk or language-risk confounds

Agents may not:

- mark the node as finally approved for classroom-ready deployment
- override explicit human review requirements
- infer mastery from exposure, attendance, or task completion
- hide uncertainty when access or language demands may be distorting the signal

## Human Escalation Triggers

The agent must explicitly escalate for human attention when:

- the learner may not be able to access the source through the chosen mode
- language demand may be exceeding the intended inquiry demand
- repeated interventions do not reduce blocking failure
- progression or placement consequences are high stakes
