---
title: Hand reconstruction from images
description: Reading notes on recovering 3D hand pose and mesh from a single image, and why the problem is harder than it first looks.
date: 2026-08-03
tags: [Computer Vision, 3D Reconstruction]
---

Recovering a hand from a single image looks like a landmark problem until you notice how much is hidden. Fingers occlude each other, the palm is nearly textureless, and the same silhouette can come from several poses. Reconstruction usually means predicting a parametric model rather than free-form geometry.

## The parametric route

The MANO model provides a low-dimensional description of the hand:

$$
M(\beta, \theta) = W(T(\beta), J(\beta), \theta, \mathcal{W}),
$$

where \(\beta\) controls shape, \(\theta\) controls pose, and \(W\) is linear blend skinning. Predicting \(M\) means the output is always a plausible hand, which is a strong prior when the image evidence is weak.

The cost is that the model cannot represent what it does not contain: jewellery, unusual anatomy, or a hand holding an object against the fingers.

## What a transformer adds

A vision transformer can attend across the whole hand instead of pooling local patches. That helps with the parts that are genuinely ambiguous:

- the relation between a fingertip and the joint two steps away;
- disambiguating a finger from its neighbour under occlusion;
- keeping the pose consistent with the projected 2D landmarks.

Attention over the whole image also tends to be more robust when the hand occupies a small part of the frame, because the token for the hand region is not washed out by global pooling.

## Reading notes

A few questions are worth asking of any reconstruction system:

1. Is the evaluation on in-the-wild images or on clean lab captures?
2. Are the joints supervised directly, or only through the recovered mesh?
3. Does the method predict a single hypothesis, or a distribution over poses?

> The failure cases are the useful part of a reconstruction paper. A method that is accurate on the easy half of the dataset and confidently wrong on the hard half tells you where the next idea has to go.

The reason I keep coming back to this problem is that it sits exactly where geometry, learning, and evaluation meet: a parametric model defines the space, a network predicts a point in it, and the metric decides what "correct" means.
