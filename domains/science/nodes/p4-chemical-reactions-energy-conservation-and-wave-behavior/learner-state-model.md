# P4 Learner State Model

The learner-state for `P4` tracks:

- dependency security on `P3`, `I3`, and `M3`
- direct accuracy on reaction, conservation, and wave-behavior tasks
- explanation quality for model-based physical reasoning
- transfer performance in unfamiliar physical contexts
- delayed retention outcome

`secure` requires all verification gates to pass. Any delayed failure or dependency instability should move the learner to `unstable`.
