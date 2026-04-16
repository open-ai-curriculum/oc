# Q1 Verification Model

## Gate Set

### G1. Direct Performance Gate

- purpose: notice relevant features and ask connected questions
- pass rule: at least 85% accuracy across observation and question-generation tasks

### G2. Meaning Gate

- purpose: distinguish observed detail from unsupported guesswork
- pass rule: usable distinction in at least 2 of 3 opportunities

### G3. Transfer Gate

- purpose: handle changed contexts such as pictures, artifacts, maps, natural objects, or social scenes
- pass rule: one successful transfer task

### G4. Retention Gate

- purpose: confirm persistence after spacing
- pass rule: at least 80% delayed recheck accuracy after about 14 days

## Status Logic

- `blocked`: direct gate fails
- `emerging`: direct accuracy improves but meaning or transfer still fails
- `provisional`: direct, meaning, and transfer pass while retention is pending
- `secure`: all four gates pass
- `unstable`: a previously secure learner fails retention or later shows structural regression
