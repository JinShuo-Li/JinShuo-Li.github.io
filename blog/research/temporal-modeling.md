---
title: Temporal modelling in learning agents
description: Notes on carrying state through time in reinforcement-learning agents, and why sequence structure changes what a policy can learn.
date: 2026-08-24
tags: [Reinforcement Learning, Sequence Models]
---

Learning agents rarely see the world as independent snapshots. An animal that cannot remember the last few seconds cannot learn a policy that depends on motion, on a recent signal, or on the consequences of its own actions. Temporal modelling is the part of the design that decides how much of the past is available to the present decision.

## State, not snapshots

A reactive policy maps an observation \(o_t\) directly to an action distribution. A temporal policy instead conditions on a hidden state \(h_t\) that summarises the history:

$$
h_t = f_\theta(h_{t-1}, o_t), \qquad \pi(a_t \mid h_t).
$$

The same observation can then lead to different actions depending on what came before. In practice \(f_\theta\) is usually a recurrent network, and \(h_t\) is a vector carried across timesteps.

The choice of what enters the observation matters as much as the recurrent cell. If the encoder discards the variable that distinguishes two situations, no amount of recurrence will recover it.

## Credit assignment over time

Temporal models are trained with returns that reach across many steps. Truncated backpropagation through time (TBPTT) keeps this tractable by unrolling a fixed window and carrying the hidden state between windows:

```python
state = policy.initial_state(batch_size)
for window in replay.windows(length=64):
    outputs, state = policy.unroll(window.observations, state)
    loss = objective(outputs, window.returns)
    loss.backward()
    optimizer.step()
    # Detach the carried state so gradients do not grow without bound.
    state = state.detach()
```

Two details tend to dominate results:

- The unroll length controls how far credit can travel in one update.
- Whether the carried state is detached changes what the gradient sees, even when the forward pass is identical.

## A record worth keeping

For any sequential system it helps to log, at minimum:

| Quantity | Why it matters |
| --- | --- |
| Hidden-state norm | Detects drift and saturation |
| Return per timestep | Separates early reward from late reward |
| Entropy of the policy | Shows when exploration collapses |
| Update-to-data ratio | Guards against overfitting a small buffer |

> A recurrent policy is only as good as the state you allow it to keep, and only as stable as the way you train that state.

The interesting failures are usually not optimisation failures. They are representational ones: the state is carrying the wrong thing, or the reward is arriving too late for the window that is unrolled.
