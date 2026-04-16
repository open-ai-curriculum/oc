# WC4 Verification Model

## Gate Set

### G1. Direct Performance Gate

- purpose: confirm the main target performance on this node
- pass rule: integrates relevant source support into a structured written response in at least 5 of 6 supported opportunities

### G2. Meaning Gate

- purpose: confirm the learner demonstrates the intended meaning relationship rather than routine success alone
- pass rule: source use remains coherent and text-grounded in at least 4 of 5 prompts

### G3. Transfer Gate

- purpose: confirm the learner can carry the target into a changed text or task surface
- pass rule: succeeds across at least one changed source, prompt type, or response structure

### G4. Retention Gate

- purpose: confirm persistence after spacing
- pass rule: stable delayed recheck after approximately 14 days

## Status Logic

- `blocked`: direct gate fails
- `emerging`: direct gate improves but meaning or transfer still fails
- `provisional`: direct, meaning, and transfer pass while retention is pending
- `secure`: all required gates pass
- `unstable`: previously secure performance regresses on delayed recheck
