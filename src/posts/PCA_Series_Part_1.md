---
title: "PCA Series Part 1: Linear Transformations – Preserving Vector Addition and Scalar Multiplication"
description: "Linear transformations are mathematical functions that map vectors to vectors while preserving the operations of vector addition and scalar multiplication. They play a fundamental role in linear algebra and are essential for understanding many data analysis techniques, including Principal Component Analysis (PCA)."
date: 2024-07-25
author: Chandrahas Abburi
tags:
   - PCA
   - Linear Algebra
   - Linear Transformations
---


# Introduction to Linear Transformations

## What are Linear Transformations?

Linear transformations are functions between two vector spaces that preserve vector addition and scalar multiplication. This means that if you transform two vectors and then add them, the result is the same as adding the vectors first and then transforming the sum. This property makes linear transformations fundamental in linear algebra and essential for many real-world applications.

### Why are Linear Transformations Important?

Understanding linear transformations is crucial because they allow us to change the position, direction, or scale of vectors in space while preserving the structure of the data. This property is widely used in various fields such as computer graphics, engineering, physics, and more.

## Linear Transformations: Preserving Vector Addition and Scalar Multiplication

### Definition of Linear Transformations

A linear transformation \( $T$ \) is a function between two vector spaces that preserves vector addition and scalar multiplication. Formally, for vectors \( $\mathbf{u}$ \) and \( $\mathbf{v}$ \), and scalar \( $c$ \):
$$
T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})
$$
$$
T(c \mathbf{u}) = c T(\mathbf{u})
$$

### Preserving Vector Addition

Preserving vector addition means that the transformation of the sum of two vectors is the same as the sum of their transformations. This ensures that the linear combination of vectors is maintained.

#### Example of Vector Addition Preservation

Consider vectors \( $\mathbf{u}$ \) and \( $\mathbf{v}$ \) in 2D space:
$$
\mathbf{u} = \begin{pmatrix} 1 \\ 3 \end{pmatrix}, \quad \mathbf{v} = \begin{pmatrix} 4 \\ 1 \end{pmatrix}
$$

A linear transformation \( $T$ \) represented by the matrix:
$$
T = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}
$$

Applying \( $T$ \) to \( $\mathbf{u}$ \) and \( $\mathbf{v}$ \):
$$
T(\mathbf{u}) = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 1 \\ 3 \end{pmatrix} = \begin{pmatrix} 5 \\ 7 \end{pmatrix}
$$
$$
T(\mathbf{v}) = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 4 \\ 1 \end{pmatrix} = \begin{pmatrix} 9 \\ 6 \end{pmatrix}
$$

Sum of the original vectors:
$$
\mathbf{u} + \mathbf{v} = \begin{pmatrix} 1 \\ 3 \end{pmatrix} + \begin{pmatrix} 4 \\ 1 \end{pmatrix} = \begin{pmatrix} 5 \\ 4 \end{pmatrix}
$$

Transformation of the sum:
$$
T(\mathbf{u} + \mathbf{v}) = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 5 \\ 4 \end{pmatrix} = \begin{pmatrix} 14 \\ 13 \end{pmatrix}
$$

Sum of the transformed vectors:
$$
T(\mathbf{u}) + T(\mathbf{v}) = \begin{pmatrix} 5 \\ 7 \end{pmatrix} + \begin{pmatrix} 9 \\ 6 \end{pmatrix} = \begin{pmatrix} 14 \\ 13 \end{pmatrix}
$$

Both methods yield the same result, demonstrating that \( $T$ \) preserves vector addition.

Animation of the above example to help understand vector addition:

<div class="responsive-video-container">
   <iframe src="https://drive.google.com/file/d/1-GSqTrfapAG1qn3HBEEjW35ai7Ob6WCI/preview" allow="autoplay" class="responsive-iframe"></iframe>
</div>

### Preserving Scalar Multiplication

Preserving scalar multiplication means that the transformation of a scalar multiple of a vector is the same as the scalar multiple of the transformation of the vector. This property ensures that scaling vectors by a constant factor is consistent before and after the transformation.

#### Example of Scalar Multiplication Preservation

Consider vector \( $\mathbf{u}$ \) and scalar \( $c$ \):
$$
\mathbf{u} = \begin{pmatrix} 1 \\ 3 \end{pmatrix}, \quad c = 3
$$

A linear transformation \( $T$ \) represented by the matrix:
$$
T = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}
$$

Applying \( $T$ \) to \( $\mathbf{u}$ \):
$$
T(\mathbf{u}) = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 1 \\ 3 \end{pmatrix} = \begin{pmatrix} 5 \\ 7 \end{pmatrix}
$$

Scaling the original vector:
$$
c \mathbf{u} = 3 \begin{pmatrix} 1 \\ 3 \end{pmatrix} = \begin{pmatrix} 3 \\ 9 \end{pmatrix}
$$

Transformation of the scaled vector:
$$
T(c \mathbf{u}) = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 3 \\ 9 \end{pmatrix} = \begin{pmatrix} 15 \\ 21 \end{pmatrix}
$$

Scaled transformation of the vector:
$$
c T(\mathbf{u}) = 3 \begin{pmatrix} 5 \\ 7 \end{pmatrix} = \begin{pmatrix} 15 \\ 21 \end{pmatrix}
$$

Both methods yield the same result, demonstrating that \( $T$ \) preserves scalar multiplication.

## Summary of Part 1

In this first part of our series, we explored the fundamental concept of linear transformations. We learned how these transformations preserve vector addition and scalar multiplication, ensuring the consistency of vector operations before and after transformation. These principles are essential in various fields, including computer graphics, engineering, and physics.

## Goals of This Blog Series

The goal of this blog series is to provide a comprehensive understanding of linear transformations and their applications. In future posts, we will delve into more advanced topics such as different types of linear transformations, their visualizations, and real-world applications. By the end of this series, you will have a solid grasp of how linear transformations work and how they can be applied to solve complex problems.

Stay tuned for the next part, where we will explore different types of linear transformations and their mathematical representations.

---
