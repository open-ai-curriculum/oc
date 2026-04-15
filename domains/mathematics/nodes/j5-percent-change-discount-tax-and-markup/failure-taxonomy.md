# Failure Taxonomy

- `base_value_tracking_breakdown`: Loses track of which quantity is the original base for the percent calculation.
- `additive_percent_misread`: Treats percent change as a flat additive move rather than as a multiplicative rate of the original amount.
- `result_direction_confusion`: Computes the percent amount but adds when the context requires subtracting, or subtracts when it requires adding.
- `context_reasonableness_breakdown`: Can perform symbolic steps but cannot judge whether the resulting amount is sensible in context.
