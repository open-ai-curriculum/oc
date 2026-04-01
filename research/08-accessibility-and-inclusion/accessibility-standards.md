# Accessibility Standards for Open Curriculum

## Purpose

This document defines the accessibility baseline the repository should use when developing and publishing curriculum materials.

It is not limited to web pages. It applies to:

- lesson documents
- teacher guides
- assessments
- slide decks
- worksheets
- downloadable files
- multimedia content
- any future digital tools associated with the curriculum

## Core Position

Accessibility is not an add-on review step after content is complete. It is a design requirement from the start.

For this repository, accessibility means:

- reducing barriers for diverse learners
- publishing materials that are usable across modalities
- designing for assistive technology compatibility
- supporting access in digital, printable, and low-bandwidth contexts

## Project Accessibility Baseline

The project should use three layers together:

### Layer 1: UDL as design approach

Use UDL to guide:

- multiple means of representation
- multiple means of engagement
- multiple means of action and expression

Project implication:

- curriculum should not assume one mode of access, one mode of participation, or one mode of demonstrating learning

### Layer 2: WCAG 2.2 as digital accessibility standard

For digital content and interfaces, WCAG 2.2 should be the technical baseline.

Project implication:

- if the project publishes web-based curriculum or interactive tools, WCAG 2.2 Level AA should be the default target

### Layer 3: Accessible documents and media practice

Even when a resource is not a web app, it should still follow accessible structure and media rules.

Project implication:

- PDFs, docs, slides, images, video, and audio need their own accessibility controls

## Minimum Accessibility Requirements

### 1. Structure and Navigation

All documents should use clear structure:

- real headings, not only visual styling
- logical reading order
- descriptive section labels
- lists and tables used semantically
- meaningful link text

### 2. Text and Readability

Materials should:

- use plain, direct language where possible
- define specialized vocabulary when needed
- avoid unnecessary text density
- preserve readability at zoom or on small screens

This does not mean oversimplifying academic rigor. It means removing avoidable presentation barriers.

### 3. Images and Visual Information

When images convey meaning, provide:

- alt text for simple images
- adjacent explanatory text for complex visuals
- text alternatives for diagrams, charts, and infographics

Do not rely on color alone to communicate meaning.

### 4. Audio and Video

Provide:

- captions for video
- transcripts for audio
- descriptions or equivalent explanation when visuals carry essential meaning

### 5. Tables, Charts, and Data Displays

Ensure:

- proper headers
- clear labels
- explanation of patterns or conclusions in text
- color-independent interpretation

### 6. Interactive Materials

If the project publishes interactive materials, they should support:

- keyboard access
- visible focus
- clear labels and instructions
- screen-reader compatibility
- error prevention and recovery where inputs are required

### 7. Print and Offline Access

Open curriculum should not assume constant broadband or device access.

Publish materials in ways that support:

- printable use
- low-bandwidth download
- device-independent access where possible
- classroom reuse without platform lock-in

## Accessibility Implications for Curriculum Design

Accessibility is partly technical and partly instructional.

The repository should therefore design curriculum that:

- offers more than one way to access key content
- offers more than one way to practice and show understanding
- reduces unnecessary sensory, linguistic, or motor barriers
- supports multilingual and diverse learner contexts where feasible

## Special Rules for Assessments

Assessments should be reviewed for accessibility separately from content quality.

Check for:

- inaccessible instructions
- unnecessary reading load unrelated to the standard being measured
- inaccessible diagrams or item formats
- reliance on one response mode when alternatives are reasonable

## Delivery Format Guidance

### Markdown and HTML

Preferred when feasible because:

- they support semantic structure
- they are easier to audit and improve
- they convert well into multiple output forms

### PDF

Allowed, but should not be the only source of truth.

Reason:

- PDFs are often harder to maintain accessibly
- source files should remain editable and structurally rich

### Images of Text

Avoid unless there is a compelling reason.

Reason:

- they are difficult to access
- they often fail OCR and assistive technology workflows

## Review Standard Recommendation

Until a fuller checklist is added, reviewers should confirm at minimum:

1. headings and structure are semantic
2. links are descriptive
3. images have usable text alternatives
4. color is not the only signal
5. multimedia has captions or transcripts
6. documents can be read in a logical order
7. the instructional design offers reasonable flexibility in access or expression

## Immediate Repository Policy Recommendation

The project should adopt this default position now:

- UDL 3.0 informs curriculum design decisions
- WCAG 2.2 Level AA informs digital publication decisions
- no major curriculum release should proceed without an accessibility review

## Open Questions for Phase 2

- what file formats will be official release formats
- whether the repository will require accessibility checks in CI or release review
- what minimum support will be expected for multilingual variants
- how printable and offline releases will be packaged

## Sources

- CAST. *UDL Guidelines*. [https://udlguidelines.cast.org/](https://udlguidelines.cast.org/)
- CAST update context noting UDL Guidelines 3.0 launch on July 30, 2024. [https://udlguidelines.cast.org/static/udlg2.2-text-a11y.pdf](https://udlguidelines.cast.org/static/udlg2.2-text-a11y.pdf)
- W3C. *Web Content Accessibility Guidelines (WCAG) 2.2*. [https://www.w3.org/TR/WCAG22/](https://www.w3.org/TR/WCAG22/)
- W3C WAI. *WCAG 2 Overview*. [https://www.w3.org/WAI/standards-guidelines/wcag/](https://www.w3.org/WAI/standards-guidelines/wcag/)
- Section508.gov. *ICT Testing Baseline Portfolio*. [https://www.section508.gov/test/ict-testing-baseline-portfolio/](https://www.section508.gov/test/ict-testing-baseline-portfolio/)

## Confidence

High confidence.

Reason:

- the baseline relies on durable official standards and established accessibility practice
- repository-specific implementation details still need follow-on checklist work
