# F5 Failure Taxonomy

## Purpose

Classify the dominant ways `F5` breaks so intervention can be local and specific.

## Failure Modes

### F5-FM-01 Incorrect Common Denominator

Description:

- learner chooses a wrong common denominator or rewrites fractions inconsistently

Diagnostic signals:

- denominators rewritten to unrelated values
- one fraction rewritten correctly and the other incorrectly
- denominator selected by adding or guessing rather than scaling

Likely upstream causes:

- unstable `F2`
- weak multiplicative scaling sense

### F5-FM-02 Direct Addition Error

Description:

- learner adds or subtracts numerators and denominators directly

Diagnostic signals:

- outputs such as `3/4 + 1/8 = 4/12`
- explanation reveals denominator treated as another total to combine

Likely upstream causes:

- unstable `F1`
- incomplete understanding of denominator as unit size

### F5-FM-03 Equivalence Breakdown

Description:

- learner knows a common denominator is needed but cannot preserve value while rewriting

Diagnostic signals:

- numerator scaled without denominator or vice versa
- explanation is pattern-based but not quantity-based

Likely upstream causes:

- unstable `F2`
- weak meaning for equivalent fractions

### F5-FM-04 Mixed Number Loss

Description:

- learner loses the whole number, sign, or regrouping structure during bounded mixed-number work

Diagnostic signals:

- only fractional part is computed
- whole number vanishes during rewrite
- regrouping is attempted incorrectly

Likely upstream causes:

- weak mixed-number structure
- overload from too many simultaneous transformations

### F5-FM-05 Magnitude Blindness

Description:

- learner computes without checking whether the answer is plausible

Diagnostic signals:

- accepts a result larger or smaller than reasonable without noticing
- cannot compare the answer to benchmark values like `1/2` or `1`

Likely upstream causes:

- unstable `F3`
- overreliance on procedure without meaning

## Severity Guidance

- `blocking`
  - failure prevents legitimate `F5` closure
- `interfering`
  - learner can sometimes succeed, but instability is still instructional priority
- `monitoring`
  - learner succeeds overall but shows a recurring weakness worth watching

## Classification Rule

When multiple errors occur, classify the dominant failure mode by the earliest structural breakdown in the solution path, not by the final visible mistake alone.
