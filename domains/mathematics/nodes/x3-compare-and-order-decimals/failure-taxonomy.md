# X3 Failure Taxonomy

## Classified Failure Modes

- `longer_decimal_means_larger`: Assumes a decimal with more digits is automatically greater.
- `digit_by_digit_whole_number_bias`: Compares decimal digits as if they were whole-number strings.
- `alignment_loss`: Fails to align place values when comparing decimals.
- `benchmark_magnitude_gap`: Cannot use familiar benchmark values to estimate decimal size.
