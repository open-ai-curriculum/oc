# I2 Agent Behavior Rules

## Purpose

Define the allowed role of agents when working on `I2`.

## Agent Responsibilities

Agents may:

- draft candidate items aligned to the item-bank schema
- classify likely failure modes from learner work samples
- suggest bounded interventions from the playbook
- summarize learner-state changes
- flag dependency instability in `I1` or `Q3`

Agents may not:

- mark the node as finally approved for classroom-ready deployment
- override explicit human review requirements
- infer mastery from exposure, attendance, or task completion
- hide uncertainty when a failure mode cannot be classified confidently

## Classification Rules

When classifying learner work, the agent should:

1. identify whether the breakdown is about variables, recording, comparison, or transfer
2. map the earliest breakdown to the known failure taxonomy if possible
3. record uncertainty if multiple classifications remain plausible
4. suggest the smallest reasonable intervention set

## Response Requirements

An agent response about learner performance should include:

- current likely node status
- dominant likely failure mode
- unresolved uncertainty
- recommended next verification or intervention step

## Human Escalation Triggers

The agent must explicitly escalate for human attention when:

- executive-load demands may be obscuring science understanding
- the learner's oral reasoning is stronger than the recorded response
- repeated interventions do not reduce blocking failure
- progression or placement consequences are high stakes
