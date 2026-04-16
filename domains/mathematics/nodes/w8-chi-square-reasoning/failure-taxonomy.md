# Failure Taxonomy

- `sample_space_model_fragmentation`: Builds or reads the event model inconsistently, so probability computations no longer match the actual sample space.
- `independence_conditioning_opacity`: Uses multiplication, addition, or conditional notation mechanically without understanding the dependency structure.
- `overlap_double_counting`: Counts overlapping outcomes twice or fails to separate disjoint and non-disjoint events correctly.
- `short_run_variation_overreaction`: Treats short-run experimental results as if they must match theoretical probability exactly.
