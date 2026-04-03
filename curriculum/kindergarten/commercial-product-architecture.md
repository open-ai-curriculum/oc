# Kindergarten Commercial Product Architecture

## Purpose

Define the target product model for a commercially credible kindergarten offering in this repository.

## Decision

The canonical kindergarten source products in this repository will be subject programs, not a single omnibus all-subject textbook/workbook pair.

The omnibus kindergarten program volumes under [program/](/Volumes/data/development/oc/curriculum/kindergarten/program/README.md) remain useful, but they should be treated as downstream reference compilations assembled from richer subject-program sources.

## Why This Decision

The market assessment in [research/15-market-assessment/kindergarten-commercial-gap-assessment.md](/Volumes/data/development/oc/research/15-market-assessment/kindergarten-commercial-gap-assessment.md) shows that current commercial and district-adoption baselines are typically multi-component subject programs with significantly more lesson volume, teacher support, assessments, and student-page design than the current repository omnibus books.

If the repository keeps treating the omnibus kindergarten textbook and workbook as the primary authoring target, it will continue to accumulate compressed summary content instead of lesson-scale instructional assets.

## Canonical Source Products

### Core subject programs

These should be treated as the highest-priority commercial-grade build targets:

1. Kindergarten ELA program
2. Kindergarten Math program

### Content and enrichment subject programs

These should be built as right-sized annual programs, but not necessarily as textbook-heavy products:

3. Kindergarten Science program
4. Kindergarten Social Studies program
5. Kindergarten Arts program
6. Kindergarten Health and Wellness program
7. Kindergarten Movement and PE program
8. Kindergarten Technology and Digital Citizenship program

## Package Shape By Subject Family

### ELA

Expected package shape:

- full-year scope and sequence
- module/unit teacher editions
- student-facing lesson pages
- read-aloud and shared-reading text architecture
- workbook and home-practice pages
- observational, formative, and benchmark assessments
- reproducibles and center materials

### Math

Expected package shape:

- full-year scope and sequence
- unit and lesson teacher materials
- student practice and problem-solving pages
- manipulative and center materials
- formative and unit assessments
- intervention and extension supports

### Science

Expected package shape:

- module-family program
- short visual texts or observation pages
- investigation cards
- teacher lesson cards and observation tools
- science notebook or journal pages
- performance or observation-based assessments

### Social Studies

Expected package shape:

- module-family program
- topical readers or short student magazines/pages
- picture-supported source materials
- discussion guides and family connections
- response sheets and observation tools

### Arts, Health, PE, Technology

Expected package shape:

- teacher-driven lesson-card systems
- student prompt pages or response sheets where useful
- visual supports, checklists, and take-home extensions
- observation-based assessment tools

## Downstream Assembled Products

These remain valid repository outputs, but should be assembled from the richer source products above:

- omnibus kindergarten textbook
- omnibus kindergarten workbook
- omnibus kindergarten teacher edition
- omnibus kindergarten grading key
- omnibus kindergarten assessment pack

## Required Artifact Stack For Every Subject Program

Every subject program should eventually include:

- annual scope and sequence
- unit map
- lesson map
- student-facing lesson pages or equivalent student materials
- teacher lesson narratives or lesson cards
- classroom tasks
- home practice where appropriate
- observation or formative assessment tools
- answer keys, exemplars, or scoring guidance where appropriate
- family communication assets
- reproducibles and copy masters

## Current Status Interpretation

Current kindergarten omnibus books should be described as:

- draft program reference volumes
- proof-of-concept assemblies
- not yet commercial-grade source products

They should not be described as:

- finished textbooks
- full-year adopted programs
- market-comparable HQIM

## Immediate Build Implication

The next serious content work should expand the kindergarten ELA and math subject programs first, because those are the most commercially consequential and the strongest current repository foundations.
