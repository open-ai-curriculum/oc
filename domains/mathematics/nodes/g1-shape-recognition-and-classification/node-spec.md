# G1 Node Specification

## Node Identity

- id: `G1`
- name: `shape_recognition_and_classification`
- domain: `mathematics`
- support tier: `Core release`
- current maturity state: `Drafted`
- supported profile: `upstream-readiness-node-package`
- evidence class: `Synthetic`

## Purpose

The learner recognizes common shapes and classifies them by visible geometric attributes rather than by superficial context alone.

## Dependencies

- `Z2`

## Exit Conditions

The learner is secure on `G1` only when all of the following are true:

1. identifies common two-dimensional and simple three-dimensional shapes
2. sorts shapes by visible attributes such as sides, corners, curved edges, or faces
3. explains what makes shapes belong to the same class
4. succeeds across concrete objects, drawings, and reoriented examples
5. passes a delayed recheck after spacing

## Mastery Criteria

- direct accuracy threshold: `0.90`
- explanation required: `true`
- transfer required: `true`
- retention check days: `14`

## Observable Evidence

The learner can:

- identify circles, triangles, rectangles, squares, and common solids in familiar and unfamiliar orientations
- sort shapes by shared visible attributes
- reject classifications based only on color, size, or orientation
- explain one attribute that unites a shape group

## Claim Boundary

This node package is an operational draft and not a classroom-release claim.
