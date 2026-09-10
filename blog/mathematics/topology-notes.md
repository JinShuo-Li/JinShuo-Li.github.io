---
description: A short path through compactness, from open covers to the Heine–Borel theorem and why the finite subcover condition is the right one.
date: 2026-07-18
tags: [Topology, Analysis]
---

# Compactness, one idea at a time

Compactness is one of those definitions that only feels natural after you have used it a few times. The statement is short, but each word is doing work.

## The definition

A topological space \(X\) is compact if every open cover of \(X\) has a finite subcover. Concretely, whenever

$$
X \subseteq \bigcup_{i \in I} U_i, \qquad U_i \text{ open},
$$

there is a finite set \(i_1, \dots, i_n\) with

$$
X \subseteq U_{i_1} \cup \cdots \cup U_{i_n}.
$$

The first time this is written down it looks like a technical condition. It is closer to a finiteness statement: the space is small enough that any attempt to cover it can be reduced to finitely many pieces.

## Why the finite subcover, and not just an open cover

Every space has an open cover — \(X\) covers itself. What compactness forbids is a cover that cannot be thinned to finitely many sets. Sequences make the contrast clear:

| Space | Open cover without finite subcover |
| --- | --- |
| \((0, 1)\) | \(\{(1/n, 1) : n \in \mathbb{N}\}\) |
| \(\mathbb{R}\) | \(\{(-n, n) : n \in \mathbb{N}\}\) |

In both cases the cover creeps toward a missing boundary or escapes to infinity. Compactness is exactly the property that rules out this behaviour.

## Heine–Borel

For subsets of Euclidean space the definition simplifies:

> A subset of \(\mathbb{R}^n\) is compact if and only if it is closed and bounded.

Closedness handles the missing boundary, and boundedness handles escape to infinity. The two failure modes above are precisely the two halves of the theorem.

The proof is worth doing carefully at least once. The bounded direction usually goes through the fact that a closed interval \([a, b]\) is compact, and then a closed bounded set is a closed subset of some large box. The clean statement hides a real amount of work.

## A working summary

When a proof needs compactness, it is usually because one of three things is required:

1. an open cover can be reduced to finitely many sets;
2. a continuous function attains its maximum and minimum;
3. a sequence has a convergent subsequence.

These are not separate facts so much as the same finiteness condition viewed from different angles. Seeing them as one idea is the point of the definition.
