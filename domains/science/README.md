# Science Domain

## Purpose

This domain defines the repository's science learning spine and capability-graph architecture for kindergarten through Grade 12 science.

The domain slug is `science`. It is designed to preserve the same governed learning-system structure already used in mathematics and ELA/literacy while also respecting science's NGSS-informed three-dimensional character:

- science and engineering practices
- disciplinary core ideas
- crosscutting concepts

The domain should not flatten science into a disconnected topic list or a standards-only coverage map.

## Scope

The current scaffold covers the full intended K-12 territory at the family level:

- early observation, noticing, and question formation
- investigation, measurement, and data reliability
- modeling, mechanism, and systems reasoning
- explanation, argument from evidence, and critique
- engineering design and optimization
- life science progressions
- physical science progressions
- Earth and space science progressions
- advanced secondary integration across science disciplines

The intended target scope for this domain is:

- kindergarten through Grade 12 science capability modeling
- science and engineering practice dependencies across grade bands
- integrated life, physical, and Earth/space science pathways
- advanced secondary science reasoning and cross-disciplinary synthesis

## Current Status

Draft domain scaffold. The current package establishes:

- a governed domain README
- a K-12 science spine in Markdown and YAML
- a domain capability-graph scaffold in Markdown and YAML
- four implemented backbone node packages for the earliest science-entry wave
- an upstream build plan aligned to NGSS architecture

Current maturity posture:

- domain architecture scaffolded
- K-12 science families and dependency logic codified at the spine level
- NGSS structural posture preserved as a standards baseline rather than treated as the graph itself
- first science-entry wave implemented for `Q1`, `Q2`, `I1`, `E1`, `L1`, `P1`, and `T1`
- elementary bridge wave implemented for `Q3`, `I2`, `M1`, `E2`, and `D1`
- follow-on 3-5 content/design wave implemented for `D2`, `L2`, `P2`, and `T2`
- middle-grade mechanism/systems wave implemented for `I3`, `M2`, `M3`, `E3`, `D3`, `L3`, `L4`, `P3`, `P4`, `T3`, and `T4`
- secondary backbone wave implemented for `I4`, `I5`, `M4`, `M5`, `E4`, `E5`, and `D4`
- secondary life and physical content wave implemented for `L5`, `L6`, `P5`, and `P6`
- secondary Earth-space and capstone integration wave implemented for `T5`, `T6`, `A1`, and `A2`
- upper-secondary specialization extension implemented for biology, chemistry, physics, Earth/environment-space, research, forensics, electronics, and computational-science pathways
- standards inventory, node mapping, coverage reporting, and external-assessment overlay layer implemented to mathematics-parity depth
- no classroom-ready or learner-ready claims

## Included Artifacts

- `README.md`
- `prek12-science-spine.md`
- `prek12-science-spine.yaml`
- `capability-graph.md`
- `capability-graph.yaml`
- `first-node-target.md`
- `comparative-analysis-and-implementation-plan.md`
- `nodes/`
- `upstream-build-plan.md`
- `secondary-specialization-pathways.md`
- `secondary-specialization-pathways.yaml`

## Graph Authority

The current authoritative science graph scaffold is:

- [capability-graph.md](/Volumes/data/development/oc/domains/science/capability-graph.md)
- [capability-graph.yaml](/Volumes/data/development/oc/domains/science/capability-graph.yaml)

The governed developmental spine that anchors this scaffold is:

- [prek12-science-spine.md](/Volumes/data/development/oc/domains/science/prek12-science-spine.md)
- [prek12-science-spine.yaml](/Volumes/data/development/oc/domains/science/prek12-science-spine.yaml)

The science standards baseline relevant to this domain is:

- [NGSS overview](/Volumes/data/development/oc/docs/standards/ngss/next-generation-science-standards-overview.md)
- [NGSS core architecture](/Volumes/data/development/oc/docs/standards/ngss/next-generation-science-standards-core-architecture.md)

These standards artifacts support the domain. They do not replace node modeling, mastery design, verification gates, or human review.

The current upper-secondary specialization extension is:

- [secondary-specialization-pathways.md](/Volumes/data/development/oc/domains/science/secondary-specialization-pathways.md)
- [secondary-specialization-pathways.yaml](/Volumes/data/development/oc/domains/science/secondary-specialization-pathways.yaml)

## Standards And Assessment Parity Layer

The science domain now includes the maintained standards and external-assessment parity artifacts needed to match the mathematics domain's current repository posture:

- [Science standards inventory](/Volumes/data/development/oc/docs/standards/science-standards-inventory.md)
- [Science node standards map](/Volumes/data/development/oc/docs/standards/science-node-standards-map.md)
- [Science standards coverage report](/Volumes/data/development/oc/docs/standards/science-standards-coverage-report.md)
- [Science external assessment coverage scan](/Volumes/data/development/oc/domains/science/external-assessment-coverage-scan.md)
- [Science assessment overlay model](/Volumes/data/development/oc/domains/science/assessment-overlay-model.md)
- [Science assessment overlays index](/Volumes/data/development/oc/domains/science/assessment-overlays/index.md)

These artifacts establish repository parity for standards inventorying, node-level mapping, coverage accounting, and standardized-test overlay modeling. They do not claim reviewed one-to-one equivalence with every NGSS performance expectation or every state science testing blueprint.

## Initial Spine Families

The current science scaffold models the domain through these families:

- `Q` observation, question formation, and early sensemaking
- `I` investigation, measurement, and data quality
- `M` modeling, mechanism, and systems reasoning
- `E` explanation, evidence, and argument
- `D` engineering design and optimization
- `L` life science progressions
- `P` physical science progressions
- `T` Earth and space science progressions
- `A` advanced secondary science integration

This family structure is meant to preserve a core repository rule: science practices, conceptual models, and domain content must be learned as one governed system rather than as isolated strands.

## Initial Downstream Shape

The first maintained science scaffold spans K-12 and is organized so later node packages can be built within one continuous dependency-aware graph:

- K-2 sensemaking and evidence entry
- 3-5 investigation and model strengthening
- 6-8 mechanism, systems, and multivariable reasoning
- 9-12 quantitative explanation, disciplinary integration, and advanced design work

The earliest dependency-critical nodes currently prioritized for implementation planning are:

- `Q1` observation, noticing, and descriptive comparison
- `Q2` question formation and prediction language
- `I1` fair tests, tool use, and measurement routines
- `E1` observation-based explanation and evidence talk
- `L1` organisms, needs, traits, and habitats
- `P1` matter properties, motion, and contact interactions
- `T1` weather, sky patterns, and local Earth materials

These are the earliest science entry conditions for later explanation, modeling, engineering, and domain-specific reasoning.

## Current Implemented Node Packages

- [Q1 observation, noticing, and descriptive comparison](/Volumes/data/development/oc/domains/science/nodes/q1-observation-noticing-and-descriptive-comparison/README.md)
- [Q2 question formation, prediction language, and pattern noticing](/Volumes/data/development/oc/domains/science/nodes/q2-question-formation-prediction-language-and-pattern-noticing/README.md)
- [I1 fair tests, tool use, and measurement routines](/Volumes/data/development/oc/domains/science/nodes/i1-fair-tests-tool-use-and-measurement-routines/README.md)
- [E1 observation-based explanation and evidence talk](/Volumes/data/development/oc/domains/science/nodes/e1-observation-based-explanation-and-evidence-talk/README.md)
- [L1 organisms, needs, traits, and habitats](/Volumes/data/development/oc/domains/science/nodes/l1-organisms-needs-traits-and-habitats/README.md)
- [P1 matter properties, motion, and contact interactions](/Volumes/data/development/oc/domains/science/nodes/p1-matter-properties-motion-and-contact-interactions/README.md)
- [T1 weather, sky patterns, and local Earth materials](/Volumes/data/development/oc/domains/science/nodes/t1-weather-sky-patterns-and-local-earth-materials/README.md)
- [Q3 phenomenon framing and shared sensemaking routines](/Volumes/data/development/oc/domains/science/nodes/q3-phenomenon-framing-and-shared-sensemaking-routines/README.md)
- [I2 variable awareness, data recording, and basic comparison](/Volumes/data/development/oc/domains/science/nodes/i2-variable-awareness-data-recording-and-basic-comparison/README.md)
- [M1 part-whole structure, function, and simple system models](/Volumes/data/development/oc/domains/science/nodes/m1-part-whole-structure-function-and-simple-system-models/README.md)
- [E2 claim-evidence-reasoning and competing explanations](/Volumes/data/development/oc/domains/science/nodes/e2-claim-evidence-reasoning-and-competing-explanations/README.md)
- [D1 problem definition, criteria, constraints, and solution sketching](/Volumes/data/development/oc/domains/science/nodes/d1-problem-definition-criteria-constraints-and-solution-sketching/README.md)
- [D2 prototype testing, redesign, and tradeoff recording](/Volumes/data/development/oc/domains/science/nodes/d2-prototype-testing-redesign-and-tradeoff-recording/README.md)
- [L2 life cycles, inheritance, and ecosystem relationships](/Volumes/data/development/oc/domains/science/nodes/l2-life-cycles-inheritance-and-ecosystem-relationships/README.md)
- [P2 matter change, energy transfer, and observable forces](/Volumes/data/development/oc/domains/science/nodes/p2-matter-change-energy-transfer-and-observable-forces/README.md)
- [T2 Earth surface change, solar/lunar patterns, and water movement](/Volumes/data/development/oc/domains/science/nodes/t2-earth-surface-change-solar-lunar-patterns-and-water-movement/README.md)
- [I3 repeated trials, data reliability, and pattern summary](/Volumes/data/development/oc/domains/science/nodes/i3-repeated-trials-data-reliability-and-pattern-summary/README.md)
- [M2 mechanism, cause-effect, and process models](/Volumes/data/development/oc/domains/science/nodes/m2-mechanism-cause-effect-and-process-models/README.md)
- [M3 scale, proportion, and system interaction models](/Volumes/data/development/oc/domains/science/nodes/m3-scale-proportion-and-system-interaction-models/README.md)
- [E3 model-based argument, revision, and source comparison](/Volumes/data/development/oc/domains/science/nodes/e3-model-based-argument-revision-and-source-comparison/README.md)
- [D3 systems design tradeoffs, optimization, and failure analysis](/Volumes/data/development/oc/domains/science/nodes/d3-systems-design-tradeoffs-optimization-and-failure-analysis/README.md)
- [L3 cells, body systems, and interdependent organism functions](/Volumes/data/development/oc/domains/science/nodes/l3-cells-body-systems-and-interdependent-organism-functions/README.md)
- [L4 populations, ecosystems, and matter/energy in living systems](/Volumes/data/development/oc/domains/science/nodes/l4-populations-ecosystems-and-matter-energy-in-living-systems/README.md)
- [P3 particle models, waves, and force interactions](/Volumes/data/development/oc/domains/science/nodes/p3-particle-models-waves-and-force-interactions/README.md)
- [P4 chemical reactions, energy conservation, and wave behavior](/Volumes/data/development/oc/domains/science/nodes/p4-chemical-reactions-energy-conservation-and-wave-behavior/README.md)
- [T3 climate, resources, Earth-Sun-Moon systems, and map scale](/Volumes/data/development/oc/domains/science/nodes/t3-climate-resources-earth-sun-moon-systems-and-map-scale/README.md)
- [T4 plate processes, water cycle, and space system interactions](/Volumes/data/development/oc/domains/science/nodes/t4-plate-processes-water-cycle-and-space-system-interactions/README.md)
- [I4 multivariable investigation, sampling, and error awareness](/Volumes/data/development/oc/domains/science/nodes/i4-multivariable-investigation-sampling-and-error-awareness/README.md)
- [I5 quantitative investigation design, uncertainty, and method critique](/Volumes/data/development/oc/domains/science/nodes/i5-quantitative-investigation-design-uncertainty-and-method-critique/README.md)
- [M4 conservation, cycle, and energy flow models](/Volumes/data/development/oc/domains/science/nodes/m4-conservation-cycle-and-energy-flow-models/README.md)
- [M5 field, force, and invisible mechanism models](/Volumes/data/development/oc/domains/science/nodes/m5-field-force-and-invisible-mechanism-models/README.md)
- [E4 quantitative explanation, data critique, and uncertainty reasoning](/Volumes/data/development/oc/domains/science/nodes/e4-quantitative-explanation-data-critique-and-uncertainty-reasoning/README.md)
- [E5 cross-domain synthesis using multiple models and evidence streams](/Volumes/data/development/oc/domains/science/nodes/e5-cross-domain-synthesis-using-multiple-models-and-evidence-streams/README.md)
- [D4 evidence-driven optimization under constraints](/Volumes/data/development/oc/domains/science/nodes/d4-evidence-driven-optimization-under-constraints/README.md)
- [L5 genetics, evolution, and homeostasis models](/Volumes/data/development/oc/domains/science/nodes/l5-genetics-evolution-and-homeostasis-models/README.md)
- [L6 molecular biology, complex ecology, and biological systems integration](/Volumes/data/development/oc/domains/science/nodes/l6-molecular-biology-complex-ecology-and-biological-systems-integration/README.md)
- [P5 fields, atomic interactions, and quantitative conservation models](/Volumes/data/development/oc/domains/science/nodes/p5-fields-atomic-interactions-and-quantitative-conservation-models/README.md)
- [P6 advanced chemistry, physics, and multiscale physical systems](/Volumes/data/development/oc/domains/science/nodes/p6-advanced-chemistry-physics-and-multiscale-physical-systems/README.md)
- [T5 geologic time, climate systems, and human impact models](/Volumes/data/development/oc/domains/science/nodes/t5-geologic-time-climate-systems-and-human-impact-models/README.md)
- [T6 Earth-space evolution, planetary systems, and global change synthesis](/Volumes/data/development/oc/domains/science/nodes/t6-earth-space-evolution-planetary-systems-and-global-change-synthesis/README.md)
- [A1 interdisciplinary phenomenon modeling and scientific synthesis](/Volumes/data/development/oc/domains/science/nodes/a1-interdisciplinary-phenomenon-modeling-and-scientific-synthesis/README.md)
- [A2 advanced research design, computational analysis, and engineering-science integration](/Volumes/data/development/oc/domains/science/nodes/a2-advanced-research-design-computational-analysis-and-engineering-science-integration/README.md)

These packages establish the reusable operational contract for the science domain:

- verification gates
- item-bank surfaces
- failure taxonomies
- intervention mappings
- learner-state schemas
- teacher-observability and agent-behavior rules

## Claim Boundary

This domain package establishes governed structure for a K-12 science capability graph. It does not by itself constitute:

- classroom-ready science curriculum
- validated learner-state logic for science
- production-grade science sequencing
- reviewed node-to-NGSS mappings
- final learner-impacting science artifacts
