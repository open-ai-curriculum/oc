# Pre-Fraction Frontier Structural Audit

## Purpose

Evaluate whether the implemented mathematics graph is structurally comprehensive for the territory from pre-kindergarten through the peer level of the current fraction spine segment.

This audit is narrower than a future K-12 review. It stays inside the leading graph edge defined by:

- the full pre-kindergarten through elementary territory that normally precedes `F5`
- the major peer branches that sit alongside the `F1` through `F5` fraction segment
- no new downstream extension beyond the already-modeled `S1` through `E3` slice

## Audit Standard

A graph can fail this review in three different ways:

1. missing territory
2. overcompressed capability nodes
3. mathematically weak dependency logic

The branch-coverage question is now mostly closed. The active question is structural quality.

## Overall Judgment

The graph is now broadly comprehensive at the branch-coverage level for pre-kindergarten through the fraction-peer boundary.

The dedicated structural refinements identified in this audit have now been addressed.

The remaining risks are now best understood as optional richness improvements rather than open structural blockers:

- some cross-branch integrations could still be richer in future versions
- some later execution work may justify additional bridge nodes beyond the current frontier

## Findings

### 1. Numeral Representation Is Still Too Compressed

Severity: high

Status: addressed in current remediation pass through `C5` and `C6`

The graph moves from:

- `Z2` match and sort objects
- to `C1` stable counting sequence
- to `C2` one-to-one correspondence
- to later number nodes such as `N5`, `N6`, and `V1`

What is present:

- numeral work appears inside `N5` and `V1`
- quantity-speech-symbol translation appears in later whole-number nodes

What was structurally weak:

- there was no explicit early node for numeral recognition and numeral-to-quantity correspondence before later whole-number structure work
- there was no explicit distinction between verbal counting competence and written-symbol competence

Why this matters:

- in real early mathematics, many learners can count verbally without reliably mapping numerals to quantities
- later place-value and multidigit work become unstable if numeral representation is only implied inside larger nodes

Remediation applied:

- added `C5` numeral recognition and writing readiness
- added `C6` quantity-symbol correspondence
- tightened `N5` so symbolic teen-number work now depends on `C6`

### 2. Mixed-Number And Improper-Fraction Magnitude Is Under-Modeled

Severity: high

Status: addressed in current remediation pass through `F6`

The fraction branch covers:

- `F1` fraction structure
- `F2` equivalence
- `F3` comparison
- `F4` like-denominator operations
- `F5` unlike-denominator operations

What is present:

- `L4` mentions simple improper fractions
- `F5` mentions bounded mixed-number and improper-fraction cases

What was structurally weak:

- there was no explicit node for mixed-number/improper-fraction magnitude and composition before such cases appeared inside location or operation work
- the graph therefore risked smuggling a real conceptual transition inside `L4` and `F5`

Why this matters:

- understanding fractions greater than one is not just a harder instance of earlier fraction work
- it is a distinct representational shift with consequences for number-line placement, comparison, and later operations

Remediation applied:

- added `F6` fraction magnitude beyond one whole
- tightened `L4` so fraction-greater-than-one number-line work depends on `F6`
- tightened `F5` so bounded mixed-number/improper-fraction operation work depends on `F6`

### 3. Measurement Conversion Dependencies Are Too Weak

Severity: medium

Status: addressed in current remediation pass through explicit `T4` dependency

`M14` originally depended on:

- `M8`
- `M13`
- `V2`

Its node specification explicitly requires:

- multiplicative relationship reasoning
- unit-size reasoning across conversions

What was structurally weak:

- `M14` did not depend on any explicit multiplicative node such as `T4` or later multiplicative structure
- `V2` comparison of multidigit numbers was not a sufficient stand-in for conversion reasoning

Why this matters:

- conversion is not primarily a number-order task
- it depends on scaling structure and inverse unit-size relationships

Remediation applied:

- strengthened `M14` by adding explicit dependency on `T4`
- preserved `V2` because comparison of magnitudes and numerical expressions is still relevant, but no longer treated as the main scaling prerequisite

### 4. Angle Readiness Uses A Possibly Over-Specific Dependency

Severity: medium

Status: addressed in current remediation pass by removing `M6` as a formal prerequisite

`G7` depends on:

- `G2`
- `G6`

What is strong:

- `G2` supports direction and spatial language
- `G6` supports formal shape-attribute language

What was questionable:

- `M6` time/calendar/sequence measurement readiness appeared to be carrying quarter-turn and clock-like movement support
- that may be a useful contextual scaffold, but it was not obviously the right conceptual prerequisite

Why this matters:

- angle as turn is principally a spatial-geometric idea
- anchoring it to time/calendar readiness may blur context support with true dependency

Remediation applied:

- removed `M6` as a formal dependency from `G7`
- retained benchmark-turn and clock-like examples only as contextual supports inside instruction and assessment

### 5. Branch Coverage Is Strong, But Cross-Branch Integration Is Still Sparse

Severity: medium

Status: addressed through dedicated cross-branch integration audit

The graph includes strong parallel branches for:

- whole numbers
- multiplication/division
- measurement
- geometry
- data
- number line
- decimals
- estimation
- fractions

What is still thin:

- some authentic cross-branch transitions appear only once, where they likely need broader support
- examples:
  - decimal-number-line work appears only in `X5`
  - fraction-measurement interaction appears mainly in `D6` and `Y4`
  - area/fraction connections are implicit rather than explicit

Why this matters:

- a real executable graph should expose major integration points deliberately
- otherwise later tooling will infer coherence that the graph does not actually model

Remediation applied:

- completed [cross-branch-integration-audit.md](/Volumes/data/development/oc/domains/mathematics/cross-branch-integration-audit.md)
- confirmed that the remaining thin areas are optional richness opportunities rather than unresolved structural blockers

## Areas That Now Look Strong

The following areas now appear substantively covered for the current boundary:

- zero-state through early counting and quantity
- whole-number composition and early operations
- base-ten and multidigit whole-number reasoning
- unitizing and sharing
- multiplicative reasoning through multidigit multiplication/division
- measurement through length, time, money, mass, volume, and conversion
- geometry through polygon hierarchy and angle-as-turn
- data through scaled bar graphs and line plots
- number-line reasoning for whole numbers, fractions, and decimals
- estimation and reasonableness
- fraction readiness through unlike-denominator operations

## Recommended Remediation Order

All previously identified structural remediations in this audit are now complete.

## Decision Guidance

If the question is:

"Do we still have major missing pre-frontier math territory?"

The answer is:

No.

If the question is:

"Can we already trust this graph as the final executable pre-K through fraction-peer graph without another structural pass?"

The answer is:

Broadly yes for the current frontier, with the usual caution that future execution work may still motivate finer-grained refinement.

The remaining work is now optional refinement of graph richness, not closure of open structural blockers.
