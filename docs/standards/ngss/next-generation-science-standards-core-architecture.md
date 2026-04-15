---
id: ngss-core-architecture
type: standard
domain: ngss-science
status: draft
version: "0.1"
dependencies: [ngss-overview, standards-versioning-model]
tags: [standards, ngss, science, architecture]
last_updated: "2026-04-14"
related: [ngss-index, ngss-overview, ccss-mathematics, ccss-ela-literacy]
standard_family: next-generation-science-standards-core
standard_subject: science
standards_version: ngss-core-architecture-2026-04-14
standards_track: current
standards_effective_as_of: "2026-04-14"
supersedes_standards_version: []
---

# Next Generation Science Standards Core Architecture

## Purpose

This document codifies the structural model of NGSS so future repository science standards work can align to the actual NGSS grammar instead of flattening it into a generic content list.

## Structural Model

The official NGSS materials present standards primarily through:

- performance expectations
- science and engineering practices
- disciplinary core ideas
- crosscutting concepts

The standards also preserve the larger three-dimensional model from the NRC Framework for K-12 Science Education.

## Grade-Band Structure

NGSS is organized across:

- kindergarten through grade 2
- grades 3 through 5
- middle school
- high school

Repository relevance:

- future science node work should preserve NGSS grade-band logic rather than assume a purely grade-by-grade structure
- performance expectations may need bundling or topic-group metadata depending on how repository nodes are defined

## Arrangement Surfaces

The NGSS public source surfaces expose more than one useful arrangement:

- performance expectations search
- DCI arrangements
- topic arrangements
- appendices with design and implementation detail

Repository mapping records should be able to preserve:

- performance expectation identifier
- associated DCI
- associated science and engineering practice
- associated crosscutting concept
- arrangement context where helpful

## Appendices To Preserve

The NGSS appendices are a first-class part of the standards ecosystem for repository use. In particular, later repository work may need to reference:

- Appendix E: Disciplinary Core Idea Progressions
- Appendix F: Science and Engineering Practices
- Appendix G: Crosscutting Concepts
- Appendix K: Model Course Mapping in Middle and High School
- Appendix L: Connections to CCSS-Mathematics
- Appendix M: Connections to CCSS-Literacy in Science and Technical Subjects

## Relationship To CCSS

NGSS is not interchangeable with CCSS, but the official NGSS materials explicitly provide bridges to:

- CCSS-Mathematics
- CCSS-Literacy in Science and Technical Subjects

That means future repository crosswalk work should preserve these as explicit relationship layers rather than blending them into a single mixed standards record.

## Claim Boundary

This document codifies the structural model of NGSS for repository use. It does not yet define state adoption posture, science node packages, or node-to-NGSS mappings.
