# FR1 Verification Model

## Gate Set

### G1. Direct Performance Gate

- purpose: confirm accurate supported phoneme-grapheme mapping
- pass rule: successful mapping in at least 5 of 6 structured opportunities

### G2. Transfer Gate

- purpose: confirm mapping persists across small target-set changes
- pass rule: one successful changed-set mapping task without cue collapse

### G3. Retention Gate

- purpose: confirm persistence after spacing
- pass rule: stable delayed recheck after about 14 days

## Status Logic

- `blocked`: direct gate fails
- `emerging`: direct accuracy improves but transfer still fails
- `provisional`: direct and transfer pass while retention is pending
- `secure`: all three gates pass
- `unstable`: previously secure mapping regresses on delayed recheck
