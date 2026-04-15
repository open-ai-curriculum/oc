# Failure Taxonomy

- `constraint_intersection_misread`: Treats a system solution as belonging to one equation only instead of the intersection of both constraints.
- `simultaneous_satisfaction_gap`: Can compute procedurally but cannot explain why a solution must satisfy both equations or inequalities at once.
- `elimination_substitution_drift`: Breaks equation equivalence or loses structural meaning while using symbolic solve methods.
- `inequality_region_misclassification`: Reverses inequality direction, shades the wrong side, or misreads overlap regions in simple systems.
