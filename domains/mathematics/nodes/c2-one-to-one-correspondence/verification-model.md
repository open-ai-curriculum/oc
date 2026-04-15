# C2 Verification Model

## Gate Set

### G1. Direct Performance Gate

- purpose: count objects with one count word per object
- pass rule: at least 90% accuracy across one-to-one tasks

### G2. Meaning Gate

- purpose: explain that each object is counted once
- pass rule: correct explanation in at least 2 of 3 opportunities

### G3. Transfer Gate

- purpose: handle changed layouts such as scattered, lined-up, and moved sets
- pass rule: one successful transfer task

### G4. Retention Gate

- purpose: confirm persistence after spacing
- pass rule: at least 85% delayed recheck accuracy after about 14 days

## Status Logic

- `blocked`: direct gate fails
- `emerging`: direct accuracy improves but meaning or transfer still fails
- `provisional`: direct, meaning, and transfer pass while retention is pending
- `secure`: all four gates pass
- `unstable`: a previously secure learner fails retention or later shows structural regression
