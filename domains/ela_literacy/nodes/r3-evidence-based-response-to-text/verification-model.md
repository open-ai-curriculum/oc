# R3 Verification Model

## Gate Set

### G1. Direct Performance Gate

- purpose: answer text-dependent prompts with relevant evidence
- pass rule: successful evidence-based response in at least 5 of 6 structured opportunities

### G2. Meaning Gate

- purpose: confirm that the learner explains how the evidence supports the response
- pass rule: correct evidence-to-claim connection in at least 4 of 5 prompts

### G3. Transfer Gate

- purpose: confirm performance across changed texts, prompts, or response formats
- pass rule: one successful changed-text or changed-format evidence-response task

### G4. Retention Gate

- purpose: confirm persistence after spacing
- pass rule: stable delayed recheck after about 14 days

## Status Logic

- `blocked`: direct gate fails
- `emerging`: direct accuracy improves but meaning or transfer still fails
- `provisional`: direct, meaning, and transfer pass while retention is pending
- `secure`: all four gates pass
- `unstable`: a previously secure learner fails delayed recheck or returns to unsupported opinion-only response
