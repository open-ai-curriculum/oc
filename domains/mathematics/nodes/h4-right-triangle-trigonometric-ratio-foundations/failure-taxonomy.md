# Failure Taxonomy

- `ratio_selection_mismatch`: Chooses sine, cosine, or tangent inconsistently with the available angle and side information.
- `similarity_ratio_opacity`: Uses trigonometric labels mechanically without understanding their stability through similar triangles.
- `side_reference_drift`: Misidentifies opposite, adjacent, or hypotenuse because the chosen reference angle is not tracked correctly.
- `inverse_reasonableness_gap`: Computes an answer but does not check whether the resulting side or angle is plausible for the diagram or context.
