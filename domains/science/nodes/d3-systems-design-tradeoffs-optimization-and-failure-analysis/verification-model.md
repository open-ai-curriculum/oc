# D3 Verification Model

## Gate Set

### G1. Direct Performance Gate

- purpose: analyze system-level failure and optimization
- pass rule: at least 90% accuracy across failure-analysis and optimization tasks

### G2. Meaning Gate

- purpose: explain why a design feature improves or harms system performance
- pass rule: correct explanation in at least 2 of 3 opportunities

### G3. Transfer Gate

- purpose: use the same systems-design logic in a changed engineering context
- pass rule: one successful transfer task

### G4. Retention Gate

- purpose: confirm persistence after spacing
- pass rule: at least 85% delayed recheck accuracy after about 28 days

## Status Logic

- `blocked`: direct gate fails
- `emerging`: direct accuracy improves but meaning or transfer still fails
- `provisional`: direct, meaning, and transfer pass while retention is pending
- `secure`: all four gates pass
- `unstable`: a previously secure learner fails retention or later shows structural regression
