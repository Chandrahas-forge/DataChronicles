---
title: "PCA Series Part 2: Types of Linear Transformations"
description: "In this blog post, we'll dive deeper into the world of linear transformations, specifically focusing on different types such as scaling, rotation, reflection, shearing, and projection. To make this journey more engaging, we'll use various shapes drawn using Matplotlib along with grid lines to demonstrate these transformations.
"
date: 2024-06-25
author: Chandrahas Abburi
tags:
    - PCA
    - Linear Algebra
    - Linear Transformations
---

# Types of Linear Transformations (PCA Series Part 2)

Welcome back to the PCA series! In this continuation, we'll dive deeper into the world of linear transformations, specifically focusing on different types such as scaling, rotation, reflection, shearing, and projection. To make this journey more engaging, we'll use various shapes drawn using Matplotlib along with grid lines to demonstrate these transformations.

## Table of Contents:
1. [Introduction](#introduction)
2. [Scaling](#scaling)
3. [Rotation](#rotation)
4. [Reflection](#reflection)
5. [Shearing](#shearing)
6. [Projection](#projection)
7. [Conclusion](#conclusion)

---

## 1. Introduction

Linear transformations are mathematical functions that map vectors to other vectors in a way that preserves the operations of vector addition and scalar multiplication. These transformations are fundamental in fields like computer graphics, robotics, and data science. Understanding these transformations is crucial for techniques like Principal Component Analysis (PCA), which is widely used for dimensionality reduction and data analysis.

---

## 2. Scaling

**Matrix Representation:**
$$
S = \begin{pmatrix} 2 & 0 \\ 0 & 0.5 \end{pmatrix} 
$$
Scaling transformations change the magnitude of vectors, making them larger (stretching) or smaller (squishing) along specific directions. The scaling matrix above expands the points along the x-axis by a factor of 2 and shrinks the points along the y-axis by a factor of 0.5.

**Scientific Insight:**
Scaling can change the length of vectors but not their direction. This property is used in data normalization and standardization processes in machine learning to ensure that each feature contributes equally to the result.

**Visualization:**

<div class="responsive-video-container">
  <iframe src="https://drive.google.com/file/d/1-IAfaOukowNF7s3korPP6X1yh6SqmsI_/preview" allow="autoplay" class="responsive-iframe"></iframe>
</div>

---

## 3. Rotation

**Matrix Representation:**
$$
R = \begin{pmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{pmatrix}
$$
Rotation transformations change the direction of vectors by rotating them around the origin by a certain angle. The matrix above rotates the points by an angle \( $\theta\$ ).

**Scientific Insight:**
Rotation matrices are orthogonal, meaning the rows and columns are orthonormal vectors. This property preserves the Euclidean distance, making rotations useful for maintaining the structure of data during transformations.

**Visualization:**

<div class="responsive-video-container">
  <iframe src="https://drive.google.com/file/d/1-JZ8qxKL5iabpUX_UC2JNDPKTIiRBAM1/preview" allow="autoplay" class="responsive-iframe"></iframe>
</div>

---

## 4. Reflection

**Matrix Representation:**
Reflection across the x-axis:
$$
F_y = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}
$$

Reflection transformations flip vectors across a specified line through the origin, changing their orientation but not their size. The matrix above reflects the points across the x-axis.

**Scientific Insight:**
Reflections can change the handedness of a coordinate system (e.g., from left-handed to right-handed). In data science, reflections can be used to augment datasets, especially in image processing tasks.

**Visualization:**

<div class="responsive-video-container">
  <iframe src="https://drive.google.com/file/d/1-LY5Ij5yklC1PD8vCxBr_SYCQNnvbZ7w/preview" allow="autoplay" class="responsive-iframe"></iframe>
</div>

---

## 5. Shearing

**Matrix Representation:**
Shearing in the x-direction:
$$
Sh_x = \begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}
$$

Shearing transformations shift each point in a fixed direction, dependent on its position along another axis. The matrix above applies a shearing effect in the x-direction.

**Scientific Insight:**
Shearing can distort the shape of objects, making it appear as if the object is being "pushed" in one direction. In machine learning, shearing transformations can be applied to images to create more training data through data augmentation.

**Visualization:**

<div class="responsive-video-container">
  <iframe src="https://drive.google.com/file/d/1-Ma-0muVRvyd4HhYdzct4sSRGwKmS41u/preview" allow="autoplay" class="responsive-iframe"></iframe>
</div>

---

## 6. Projection

**Matrix Representation:**
Projection onto the x-axis:
$$
P = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}
$$

Projection transformations project vectors onto a subspace, reducing their dimensionality. The matrix above projects the points onto the x-axis.

**Scientific Insight:**
Projections are used in dimensionality reduction techniques like PCA. By projecting data onto principal components, we can reduce the number of features while preserving as much variability as possible.

**Visualization:**

<div class="responsive-video-container">
  <iframe src="https://drive.google.com/file/d/1-TZhFtajuYhRXS3uXf4gpz41FBrXuebZ/preview" allow="autoplay" class="responsive-iframe"></iframe>
</div>

---

## 7. Conclusion

In this blog post, we've explored various types of linear transformations, including scaling, rotation, reflection, shearing, and projection. By using different shapes and grid animations, we've illustrated how these transformations affect the dimensions and orientations of shapes by transforming their coordinates. Understanding these transformations is crucial for manipulating data in multidimensional spaces, which is foundational for techniques like PCA.

Stay tuned for the next part of this series, where we'll delve deeper into the mathematical foundations of PCA and how linear transformations play a critical role.

**Further Reading:**
- [Linear Algebra and Its Applications by Gilbert Strang](https://www.amazon.com/Linear-Algebra-Its-Applications-4th/dp/0030105676)
- [Understanding Linear Transformations](https://mathinsight.org/definition/linear_transformation)

---

This post builds on the previous one, enhancing your understanding of linear transformations through engaging animations.
