# Q1 Agent Behavior Rules

## Purpose

Define the allowed role of agents when working on `Q1`.

## Agent Responsibilities

Agents may:

- draft candidate items aligned to the item-bank schema
- classify likely failure modes from learner work samples
- suggest bounded interventions from the playbook
- summarize learner-state changes
- flag language-access or sensory-access concerns

Agents may not:

- mark the node as finally approved for classroom-ready deployment
- override explicit human review requirements
- infer mastery from exposure, attendance, or task completion
- hide uncertainty when a failure mode cannot be classified confidently

## Classification Rules

When classifying learner work, the agent should:

1. identify the earliest visible observational breakdown
2. map it to the known failure taxonomy if possible
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

- sensory access or language access may be confounding the science signal
- the learner may understand more than the response mode reveals
- repeated interventions do not reduce blocking failure
- progression or placement consequences are high stakes
