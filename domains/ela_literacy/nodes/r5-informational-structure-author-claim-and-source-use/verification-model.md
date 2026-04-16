# R5 Verification Model

## Gate Set

### G1. Direct Performance Gate

- purpose: analyze informational structure, author claims, and source use with relevant text grounding
- pass rule: successful informational analysis in at least 5 of 6 structured opportunities

### G2. Meaning Gate

- purpose: confirm that the learner explains how text structure, claim, or source detail supports the analysis
- pass rule: correct analysis-to-evidence explanation in at least 4 of 5 prompts

### G3. Transfer Gate

- purpose: confirm performance across changed informational texts, source sets, or prompt types
- pass rule: one successful changed-text, changed-source, or changed-prompt analysis task

### G4. Retention Gate

- purpose: confirm persistence after spacing
- pass rule: stable delayed recheck after about 14 days

## Status Logic

- `blocked`: direct gate fails
- `emerging`: direct accuracy improves but meaning or transfer still fails
- `provisional`: direct, meaning, and transfer pass while retention is pending
- `secure`: all four gates pass
- `unstable`: a previously secure learner fails delayed recheck or reverts to summary-only informational response
