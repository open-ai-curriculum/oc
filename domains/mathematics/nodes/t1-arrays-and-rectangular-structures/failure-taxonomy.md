# T1 Failure Taxonomy

## Classified Failure Modes

- `row_column_confusion`: Loses track of whether rows and columns represent distinct counts.
- `unequal_array_structure`: Builds or accepts nonuniform rows as if they were valid arrays.
- `total_without_structure`: Finds a total by counting all objects but cannot use the array structure to reason about it.
- `representation_disconnect`: Cannot match concrete arrays, drawings, and symbolic forms.
