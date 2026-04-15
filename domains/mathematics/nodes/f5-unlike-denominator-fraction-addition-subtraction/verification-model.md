# F5 Verification Model

## Purpose

Define the local gate logic used to decide whether `F5` is blocked, emerging, provisional, or secure.

## Gate Set

### G1. Direct Performance Gate

Question:

- Can the learner correctly add or subtract unlike-denominator fractions?

Pass rule:

- at least 90% accuracy across direct execution items
- at least one addition and one subtraction item
- no dominant arithmetic pattern suggesting a lucky pass

Evidence families:

- symbolic tasks
- visual-representation tasks
- mixed-number bounded tasks

### G2. Meaning Gate

Question:

- Does the learner understand why the rewrite to common denominators preserves value?

Pass rule:

- gives a correct verbal, symbolic, or visual justification in at least 2 of 3 explanation opportunities
- explanation does not collapse into "because that is the rule"

Evidence families:

- explain-why prompts
- diagram annotation
- error diagnosis of a wrong method

### G3. Transfer Gate

Question:

- Can the learner solve the capability when the surface form changes?

Pass rule:

- solves at least one contextual or non-routine variant successfully
- does not fail merely because the fractions appear in words, pictures, or a decision task

Evidence families:

- recipe or measurement context
- comparison-before-computation task
- choose-the-correct-method item

### G4. Retention Gate

Question:

- Does the capability persist after spacing?

Pass rule:

- delayed recheck at approximately 21 days
- at least 85% accuracy on retention items
- no recurrence of the previously dominant failure mode at blocking intensity

Evidence families:

- short symbolic set
- one explanation prompt
- one transfer prompt

## Node Status Logic

- `blocked`
  - direct gate fails, or dependency instability is present at blocking level
- `emerging`
  - direct performance is improving, but meaning or transfer still fails
- `provisional`
  - direct, meaning, and transfer gates pass, but retention is not yet met
- `secure`
  - all four gates pass
- `unstable`
  - node was previously secure but retention or dependency recheck fails later

## Dependency Override Rule

If `F2`, `F3`, or `F4` becomes unstable at blocking severity, `F5` may not remain `secure` even if recent direct task performance looked acceptable.

## Language-Access Safeguard

A learner may demonstrate the meaning gate using:

- oral explanation
- diagram annotation
- gesture-supported teacher interview
- home-language mediated explanation with appropriate review

The system must not infer a math failure solely from a language-production barrier.
