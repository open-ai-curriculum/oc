# T2 Verification Model

## Gate Set

### G1. Direct Performance Gate

- purpose: reason about Earth-surface change, solar/lunar patterns, and water movement
- pass rule: at least 90% accuracy across Earth-system observation and explanation tasks

### G2. Meaning Gate

- purpose: explain what pattern or change the observations support
- pass rule: correct explanation in at least 2 of 3 opportunities

### G3. Transfer Gate

- purpose: use the same Earth-system reasoning in a changed context
- pass rule: one successful transfer task

### G4. Retention Gate

- purpose: confirm persistence after spacing
- pass rule: at least 85% delayed recheck accuracy after about 21 days

## Status Logic

- `blocked`: direct gate fails
- `emerging`: direct accuracy improves but meaning or transfer still fails
- `provisional`: direct, meaning, and transfer pass while retention is pending
- `secure`: all four gates pass
- `unstable`: a previously secure learner fails retention or later shows structural regression
