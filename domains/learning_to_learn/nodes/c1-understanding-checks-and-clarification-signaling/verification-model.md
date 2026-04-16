# C1 Verification Model

## Gate Set

### G1. Direct Performance Gate

- purpose: confirm usable confusion signaling and clarification request behavior
- pass rule: successful confusion signaling and clarification request in at least 4 of 5 supported opportunities

### G2. Transfer Gate

- purpose: confirm that the behavior survives a changed task or subject context
- pass rule: one successful changed-context clarification routine

### G3. Retention Gate

- purpose: confirm persistence after spacing
- pass rule: stable delayed recheck after about 14 days

## Status Logic

- `blocked`: direct gate fails
- `emerging`: direct performance improves but remains inconsistent
- `provisional`: direct and transfer gates pass while retention is pending
- `secure`: all gates pass
- `unstable`: a previously secure learner fails delayed recheck or regresses structurally
