---
title: "PCA Series Part 3: Eigenvectors and Eigenvalues"
description: "In this blog post, we will delve into the concept of eigenvectors and eigenvalues, which are pivotal in understanding how linear transformations can be analyzed and utilized. We will explore the equation Ax = λx, find eigenvectors and eigenvalues, and discuss their properties and geometric interpretation. Join us on this journey to deepen your understanding of linear transformations!"
date: 2024-06-27
author: Chandrahas Abburi
tags:
    - PCA
    - Linear Algebra
    - Eigenvectors
    - Eigenvalues
    - Linear Transformations
---
# PCA Series Part 3: Eigenvectors and Eigenvalues

## Introduction
In the previous parts of our PCA series, we explored linear transformations and different types of these transformations. In this part, we will delve into the concept of eigenvectors and eigenvalues, which are pivotal in understanding how these transformations can be analyzed and utilized.

## Understanding the Equation $Ax = \lambda x$
In the previous blogs, we focused on the left-hand side (LHS) of the equation $Ax$, examining how different types of matrices $A$ perform various transformations. Now, we introduce a condition on the right-hand side (RHS) of the equation, $\lambda x$, which leads to the discovery of interesting vectors known as eigenvectors. These eigenvectors and their corresponding eigenvalues provide deep insights into the nature of these transformations.

$$
Ax = \lambda x
$$

This equation implies that when $A$ acts on $x$, the output is a scaled version of $x$.

### Example
Consider the matrix $A$:

$$
A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}
$$

Use the input boxes to add up to 10 unique points within the range [-10, 10] and observe how they transform when you click 'Apply Transformation'. Pay attention to points that do not change direction, as they hint at the eigenvectors of the matrix \( A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} \). Try to identify these invariant directions by experimenting with different points.

<div class="plotly-container">
    <iframe class="plotly-iframe" src="{{ baseUrl }}/static/plots/matrix_transformation.html" ></iframe>
</div>


To find the eigenvectors and eigenvalues, we solve $Ax = \lambda x$:

$$
\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \lambda \begin{pmatrix} x_1 \\ x_2 \end{pmatrix}
$$

Rewriting the equation:

$$
\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} - \lambda \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = 0
$$

$$
\left( \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} - \lambda \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \right) \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = 0
$$

$$
\begin{pmatrix} 2 - \lambda & 1 \\ 1 & 2 - \lambda \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = 0
$$

For non-trivial solutions, the determinant of the matrix must be zero:

$$
\det\begin{pmatrix} 2 - \lambda & 1 \\ 1 & 2 - \lambda \end{pmatrix} = 0
$$

Solving the determinant:

$$
(2 - \lambda)(2 - \lambda) - 1 = 0
$$

$$
\lambda^2 - 4\lambda + 3 = 0
$$

$$
(\lambda - 3)(\lambda - 1) = 0
$$

Thus, the eigenvalues are:

$$
\lambda_1 = 3, \quad \lambda_2 = 1
$$

For $\lambda_1 = 3$:

$$
\begin{pmatrix} 2 - 3 & 1 \\ 1 & 2 - 3 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = 0
$$

Solving for the eigenvector:

$$
-x_1 + x_2 = 0 \implies x_1 = x_2
$$

The eigenvector corresponding to $\lambda_1 = 3$ is:

$$
v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}
$$

For $\lambda_2 = 1$:

$$
\begin{pmatrix} 2 - 1 & 1 \\ 1 & 2 - 1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = 0
$$

Solving for the eigenvector:

$$
x_1 + x_2 = 0 \implies x_1 = -x_2
$$

The eigenvector corresponding to $\lambda_2 = 1$ is:

$$
v_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}
$$

Now that we have identified the eigenvectors and eigenvalues of the matrix $A$, we understand that the points lying along the lines \( $x = y$ \) and \( $x = y$ \) do not change direction when the matrix \($A$\) is applied. This is because these lines correspond to the eigenvectors of \($A$\) with eigenvalues \($\lambda_1 = 3$\) and \($\lambda_2 = 1$\), respectively. You can quickly check this in the previous animation

## Properties of Eigenvectors
Eigenvectors have unique properties:
- **Direction Preservation:** They preserve their line of action, scaling by the eigenvalue. Positive eigenvalues preserve direction, while negative eigenvalues flip direction.
- **Linearity:** Eigenvectors of a matrix form a linear space.
- **Invariant Subspace:** The span of the eigenvectors is an invariant subspace under $A$.

## Geometric Interpretation
Eigenvectors represent directions in which a linear transformation acts by stretching or compressing. For our example:
- $v_1$ represents the direction along which $A$ scales by 3.
- $v_2$ represents the direction along which $A$ scales by 1.

## Connecting Eigenvectors to Previous Concepts

Previously, we examined how matrices $A$ transform vectors through various operations, altering their directions and magnitudes. By imposing $Ax = \lambda x$, we introduce a special condition where certain vectors, called eigenvectors, retain their direction \(or flip if the eigenvalue \($\lambda$\) is negative\), scaled by\($\lambda$\). This reveals invariant subspaces where eigenvectors remain in their span, showcasing directions that the transformation \($A$\) leaves unchanged. Thus, the eigenvalue equation identifies special vectors that provide simplified and insightful views of the transformation, maintaining proportional scaling rather than altering directions.


### Examples
- **Scaling:** Consider a scaling matrix $A = \begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$. The eigenvectors are along the x-axis and y-axis, scaled by factors of 3 and 2, respectively.
- **Reflection:** For a reflection across the line $x = y$, the matrix is $A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$. The eigenvectors are $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ and $\begin{pmatrix} 1 \\ -1 \end{pmatrix}$, corresponding to eigenvalues 1 and -1, respectively. This means vectors along the line $x = y$ remain unchanged, while those perpendicular to this line flip direction.
- **Shearing:** In a horizontal shear $A = \begin{pmatrix} 1 & 0.5 \\ 0 & 1 \end{pmatrix}$, eigenvectors remain invariant under shearing. Observe that this has one eigenvector only i.e along x axis.
- **Rotation:** Rotation matrices often have complex eigenvalues and eigenvectors, indicating more advanced transformations.

<div class="plotly-container">
    <iframe class="plotly-iframe" src="{{ baseUrl }}/static/plots/eigen_vector_transformation.html" ></iframe>
</div>

## Conclusion
Understanding eigenvectors and eigenvalues is essential for grasping linear transformations deeply. They provide insights into how matrices act on vectors, preserving or flipping their direction through scaling. In the next part, we will continue our exploration of these concepts and their applications.
