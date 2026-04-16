# RC5 Verification Model

## Gate Set

### G1. Direct Performance Gate

- purpose: confirm the main target performance on this node
- pass rule: selects relevant evidence or details for a text-dependent prompt in at least 5 of 6 supported opportunities

### G2. Meaning Gate

- purpose: confirm that the learner demonstrates the intended meaning relationship rather than routine success alone
- pass rule: shows that the chosen detail is text-relevant in at least 4 of 5 prompts

### G3. Transfer Gate

- purpose: confirm the learner can carry the target into a changed text or task surface
- pass rule: succeeds across at least one changed text, question type, or response format

### G4. Retention Gate

- purpose: confirm persistence after spacing
- pass rule: stable delayed recheck after approximately 14 days

## Status Logic

- `blocked`: direct gate fails
- `emerging`: direct gate improves but meaning or transfer still fails
- `provisional`: direct, meaning, and transfer pass while retention is pending
- `secure`: all required gates pass
- `unstable`: previously secure performance regresses on delayed recheck
