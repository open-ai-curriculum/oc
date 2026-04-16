# W2 Verification Model

## Gate Set

### G1. Direct Performance Gate

- purpose: generate and transcribe complete written sentences that carry intended meaning
- pass rule: successful sentence generation and transcription in at least 5 of 6 structured opportunities

### G2. Meaning Gate

- purpose: confirm that the written sentence communicates the intended idea without heavy live interpretation
- pass rule: at least 4 of 5 written sentences are interpretable and match the intended message

### G3. Transfer Gate

- purpose: confirm performance across changed prompts or sentence-writing contexts
- pass rule: one successful changed-context sentence-writing task

### G4. Retention Gate

- purpose: confirm persistence after spacing
- pass rule: stable delayed recheck after about 14 days

## Status Logic

- `blocked`: direct gate fails
- `emerging`: direct accuracy improves but meaning or transfer still fails
- `provisional`: direct, meaning, and transfer pass while retention is pending
- `secure`: all four gates pass
- `unstable`: a previously secure learner fails delayed recheck or sentence-writing collapses under normal transcription demands
