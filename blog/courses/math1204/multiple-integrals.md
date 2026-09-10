---
title: "Multiple integrals"
description: "Double and triple integrals, their properties, and change of variables."
order: 4
tags: [Mathematical Analysis, Integration]
---

为了讨论重积分, 我们需要先讨论一下$R^2$上的面积问题, 因为重积分的定义是基于面积的, 且$D \subset R^2$的面积并不一定存在.

## 定义

**定义**: 设$D \subset R^2$是一个有界区域, 设$U= [a,b] \times [c,d]$是一个矩形, 且$D \subset U$.

在$[a,b]$和$[c,d]$上分别取分点:
$$
a = x_0 < x_1 < \cdots < x_m = b
$$
$$
c = y_0 < y_1 < \cdots < y_n = d
$$
则$U$被划分成了$m \times n$个小矩形, 记为$R_{ij} = [x_{i-1}, x_i] \times [y_{j-1}, y_j]$.

对于点集$D$, 我们给出如下两条定义:

- 完全包含在$D$中的小矩形的面积之和:
$$
mA = \sum_{R_{ij} \subset D} \text{area}(R_{ij})
$$

- 与$D$交集非空的小矩形的面积之和:
$$
mB = \sum_{R_{ij} \cap D \neq \emptyset} \text{area}(R_{ij})
$$

若在原有划分的基础上, 继续增加分点加细, 且$mA$不减, $mB$不增, 记$mA$和$mB$的上确界和下确界分别为$mD_*$和$mD^*$, 则称$mD_*$为$D$的内面积, $mD^*$为$D$的外面积. 如果$mD_* = mD^*$, 则称$D$的面积存在, 记为$mD$.

下面给出一个定理, 作为面积存在的充分必要条件: (证明通过可数可加性完成):

**定理**: 设$D \subset R^2$是一个有界区域, 则$D$的面积存在的充分必要条件是它的边界$\partial D$的面积为$0$.

### 二重积分的概念

二重积分的讨论过程和讨论一元函数的定积分的讨论过程非常类似. 设二元函数$z=f(x,y)$在区域$D$上有定义, 且$D$的面积存在.

1. 将$D$划分为$n$个小区域$\Delta D_i$, 记$\Delta \sigma_i$为$\Delta D_i$的面积.
2. 在每个小区域$\Delta D_i$内任取一点$P_i$, 记$f(P_i)$为函数$f$在点$P_i$处的函数值.
3. 计算求和: $S = \sum_{i=1}^n f(P_i) \Delta \sigma_i$.
4. 记$\lambda = \max \{\text{diam}(\Delta D_i) : i=1,2,\cdots,n\}$, 则当$\lambda \to 0$时, 若$S$的极限存在且与划分方式无关, 则称函数$f$在区域$D$上可积, 记为:
$$
\iint_D f(x,y) d\sigma = \lim_{\lambda \to 0} \sum_{i=1}^n f(P_i) \Delta \sigma_i
$$

同理, 我们也可以利用Darboux大和和Darboux小和来讨论二重积分的存在性. 设$M_i = \sup \{f(x,y) : (x,y) \in \Delta D_i\}$, $m_i = \inf \{f(x,y) : (x,y) \in \Delta D_i\}$, 则Darboux大和和Darboux小和分别为:
$$
U = \sum_{i=1}^n M_i \Delta \sigma_i, \quad L = \sum_{i=1}^n m_i \Delta \sigma_i
$$
当$\lambda \to 0$时, 若$U$和$L$的极限存在且相等, 则称函数$f$在区域$D$上可积, 记为:
$$
\iint_D f(x,y) d\sigma = \lim_{\lambda \to 0} U = \lim_{\lambda \to 0} L
$$
其充要条件为:
$$
\lim_{\lambda \to 0} (U - L) = 0
$$

更进一步的, 我们同样可以用振幅$\omega_i$来讨论二重积分的存在性. 设$\omega_i = M_i - m_i$, 则当$\lambda \to 0$时, 若$\sum_{i=1}^n \omega_i \Delta \sigma_i$的极限存在且为$0$, 则称函数$f$在区域$D$上可积, 记为:
$$
\iint_D f(x,y) d\sigma = \lim_{\lambda \to 0} \sum_{i=1}^n M_i \Delta \sigma_i = \lim_{\lambda \to 0} \sum_{i=1}^n m_i \Delta \sigma_i
$$
其充要条件为:
$$
\lim_{\lambda \to 0} \sum_{i=1}^n \omega_i \Delta \sigma_i = 0
$$

根据上述定义我们很容易得到:

**若函数$f$在零边界闭区域$D$上连续, 则$f$在$D$上可积.**

### 多重积分的概念与性质

多重积分的定义与二重积分的定义完全类似, 只是我们需要把区域$D$替换成$R^n$中的一个区域, 把面积$\Delta \sigma_i$替换成体积$\Delta V_i$, 把二重积分$\iint_D f(x,y) d\sigma$替换成$n$重积分$\iiint_D f(x_1,x_2,\cdots,x_n) dV$. 这里我们不再赘述.

**质心的计算**:

$$
\begin{aligned}
&\bar{x} = \frac{1}{mD} \iint_D x f(x,y) d\sigma \\
&\bar{y} = \frac{1}{mD} \iint_D y f(x,y) d\sigma
\end{aligned}
$$

$$
mD = \iint_D f(x,y) d\sigma
$$

其中$f(x,y)$是区域$D$上每个点的密度函数.

对于三维物体:

$$
\begin{aligned}
&\bar{x} = \frac{1}{mD} \iiint_D x f(x,y,z) dV \\
&\bar{y} = \frac{1}{mD} \iiint_D y f(x,y,z) dV \\
&\bar{z} = \frac{1}{mD} \iiint_D z f(x,y,z) dV
\end{aligned}
$$

$$
mD = \iiint_D f(x,y,z) dV
$$

其中$f(x,y,z)$是区域$D$上每个点的密度函数.

## 性质

我们主要以二重积分为例讨论.

- **线性性质**: 设函数$f$和$g$在区域$D$上可积, 则对于任意常数$a$和$b$, 函数$af + bg$在区域$D$上也可积, 且有:
$$
\iint_D (af + bg) d\sigma = a \iint_D f d\sigma + b \iint_D g d\sigma
$$

- **区域可加性**: 设$\Omega_1$和$\Omega_2$是区域$D$的两个子区域, 且$\Omega_1 \cap \Omega_2 = \emptyset$, 则对于任意函数$f$在区域$D$上可积, 都有:
$$
\iint_D f d\sigma = \iint_{\Omega_1} f d\sigma + \iint_{\Omega_2} f d\sigma
$$

- **保序性质**: 设函数$f$和$g$在区域$D$上可积, 且对于任意$(x,y) \in D$, 都有$f(x,y) \leq g(x,y)$, 则有:
$$
\iint_D f d\sigma \leq \iint_D g d\sigma
$$

- **绝对可积性**: 设函数$f$在区域$D$上可积, 则函数$|f|$在区域$D$上也可积, 且有:
$$
\left| \iint_D f d\sigma \right| \leq \iint_D |f| d\sigma
$$

- **积分中值定理**: 设$f$和$g$在区域$D$上可积, 且$g$不变号, 则存在$\xi \in [\inf_{(x,y) \in D} f(x,y), \sup_{(x,y) \in D} f(x,y)]$, 使得:
$$
\iint_D f g d\sigma = \xi \iint_D g d\sigma
$$
进一步的, 若函数$f$在区域$D$上连续, 则存在$(x_0,y_0) \in D$, 使得:
$$
\iint_D f g d\sigma = f(x_0,y_0) \iint_D g d\sigma
$$

### 计算

- **矩形区域上的重积分计算**:

设函数$f$在矩形区域$D = [a,b] \times [c,d]$上可积, 则有:
$$
\iint_D f(x,y) d\sigma = \int_c^d \left( \int_a^b f(x,y) dx \right) dy = \int_a^b \left( \int_c^d f(x,y) dy \right) dx
$$

采用更一般的记号, 我们可以写作:
$$
\iint_D f(x,y) d\sigma = \int_c^d dy \int_a^b f(x,y) dx = \int_a^b dx \int_c^d f(x,y) dy
$$

在我们会遇到的情况中, 由于函数$f$在矩形区域$D$上连续, 因此函数$f$在矩形区域$D$上可积, 上述公式中的积分都存在且相等. **重积分可以利用累次积分来计算.**

由本定理直接得到:

假设$f(x)$在$x\in [a,b]$上可积, $g(y)$在$y \in [c,d]$上可积, 则函数$f(x)g(y)$在矩形区域$D = [a,b] \times [c,d]$上可积, 且有:
$$
\iint_D f(x)g(y) d\sigma = \int_c^d g(y) dy \cdot \int_a^b f(x) dx
$$

- **一般区域上的重积分计算**

设函数$f$在区域$D$上可积, 且区域$D$满足如下条件:
$$
D = \{ (x,y) | y_1(x) \leq y \leq y_2(x), a \leq x \leq b \}
$$

其中函数$y_1(x)$和$y_2(x)$在区间$[a,b]$上连续, 则有:
$$
\iint_D f(x,y) d\sigma = \int_a^b dx \int_{y_1(x)}^{y_2(x)} f(x,y) dy
$$

推导如下: 我们记$c=\min_{x \in [a,b]} y_1(x)$, $d = \max_{x \in [a,b]} y_2(x)$, 则$D$被包含在矩形区域$[a,b] \times [c,d]$内. 因为原来的函数在定义域上会产生冲突, 我们重新定义一个函数$\tilde{f}(x,y)$:

$$
\tilde{f}(x,y) = \begin{cases}
f(x,y), & y_1(x) \leq y \leq y_2(x) \\
0, & \text{Otherwise}
\end{cases}
$$

则函数$\tilde{f}$在矩形区域$[a,b] \times [c,d]$上连续, 因此函数$\tilde{f}$在矩形区域$[a,b] \times [c,d]$上可积. 因为:

$$
\int_a^b \tilde{f} (x,y) dy = \int_{c}^{y_1(x)} 0 dy + \int_{y_1(x)}^{y_2(x)} f(x,y) dy + \int_{y_2(x)}^d 0 dy = \int_{y_1(x)}^{y_2(x)} f(x,y) dy
$$

我们很容易可以推出:

$$
\iint_D f(x,y) d\sigma = \iint_{[a,b] \times [c,d]} \tilde{f}(x,y) d\sigma = \int_a^b dx \int_c^d \tilde{f}(x,y) dy = \int_a^b dx \int_{y_1(x)}^{y_2(x)} f(x,y) dy
$$

即为我们想要的结果.

## 变量代换

由于二维与更高维的变换具有和一维上的变换不同的性质, 我们先介绍**曲线坐标**.

### 曲线坐标

设$U$为$uv$平面上的一个开集, $V$为$xy$平面上的一个开集, 映射:

$$
T: x = x(u,v), y = y(u,v)
$$

是一个从$U$到$V$的一一映射, 则称$T$为一个曲线坐标变换. 相应的有逆变换$T^{-1}$.

在$U$中取直线$u=u_0$和$v=v_0$, 则在$V$中分别得到两条曲线, 分别称作$v$线和$u$线. 由于映射$T$是一一对应的, 因此$V$中的每个点既可以用$xy$坐标表示, 也可以用$uv$坐标表示. 那么我们称两个坐标系之间的关系为**曲线坐标变换**.

### 二重积分的变量代换

设$x=x(u,v), y=y(u,v)$是一个从$U$到$V$的曲线坐标变换, 且具有连续偏导数. 且$\frac{\partial (x,y)}{\partial (u,v)} \neq 0$, 假设$f(x,y)$在区域$T(D)$上可积, 则有:

$$
\iint_{T(D)} f(x,y) dxdy = \iint_D f(x(u,v), y(u,v)) \left| \frac{\partial (x,y)}{\partial (u,v)} \right| du dv
$$

这里可以说明一下, Jacobi行列式:
$$
\frac{\partial (x,y)}{\partial (u,v)} = \begin{vmatrix}\frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{vmatrix}
$$

实际上可以视作从$D$中的一个小矩形$\Delta u \times \Delta v$到$T(D)$中的一个小平行四边形的面积的比值. 这实际上也和行列式的几何意义不谋而合.

一种非常常见的代换是**极坐标变换**. 设$x=r \cos \theta$, $y = r \sin \theta$, 则有:

$$
\iint_D f(x,y) dx dy = \iint_{D'} f(r \cos \theta, r \sin \theta) r dr d\theta
$$

这里的Jacobi行列式可以写作:

$$
\frac{\partial (x,y)}{\partial (r,\theta)} = \begin{vmatrix}\cos \theta & -r \sin \theta \\ \sin \theta & r \cos \theta \end{vmatrix} = r
$$

### 多重积分的变量代换

设$x_1 = x_1(u_1,u_2,\cdots,u_n), x_2 = x_2(u_1,u_2,\cdots,u_n), \cdots, x_n = x_n(u_1,u_2,\cdots,u_n)$是一个从$U$到$V$的曲线坐标变换, 且具有连续偏导数. 且$\frac{\partial (x_1,x_2,\cdots,x_n)}{\partial (u_1,u_2,\cdots,u_n)} \neq 0$, 假设$f(x_1,x_2,\cdots,x_n)$在区域$T(D)$上可积, 则有:
$$
\iiint_{T(D)} f(x_1,x_2,\cdots,x_n) dx_1 dx_2 \cdots dx_n = \iiint_D f(x_1(u_1,u_2,\cdots,u_n), x_2(u_1,u_2,\cdots,u_n), \cdots, x_n(u_1,u_2,\cdots,u_n)) \left| \frac{\partial (x_1,x_2,\cdots,x_n)}{\partial (u_1,u_2,\cdots,u_n)} \right| du_1 du_2 \cdots du_n
$$

其中Jacobi行列式为:
$$
\frac{\partial (x_1,x_2,\cdots,x_n)}{\partial (u_1,u_2,\cdots,u_n)} = \begin{vmatrix}\frac{\partial x_1}{\partial u_1} & \frac{\partial x_1}{\partial u_2} & \cdots & \frac{\partial x_1}{\partial u_n} \\ \frac{\partial x_2}{\partial u_1} & \frac{\partial x_2}{\partial u_2} & \cdots & \frac{\partial x_2}{\partial u_n} \\ \vdots & \vdots & \ddots & \vdots \\ \frac{\partial x_n}{\partial u_1} & \frac{\partial x_n}{\partial u_2} & \cdots & \frac{\partial x_n}{\partial u_n} \end{vmatrix}
$$

在多重积分中有两类非常常见的代换, 分别是**柱面坐标变换**和**球坐标变换**.

柱面坐标变换: 设$x = r \cos \theta$, $y = r \sin \theta$, $z = z$, 则有:
$$
\iiint_D f(x,y,z) dx dy dz = \iiint_{D'} f(r \cos \theta, r \sin \theta, z) r dr d\theta dz
$$

球坐标变换: 设$x = r \sin \varphi \cos \theta$, $y = r \sin \varphi \sin \theta$, $z = r \cos \varphi$, 则有:
$$
\iiint_D f(x,y,z) dx dy dz = \iiint_{D'} f(r \sin \varphi \cos \theta, r \sin \varphi \sin \theta, r \cos \varphi) r^2 \sin \varphi dr d\varphi d\theta
$$

它们的Jacobi行列式分别为:
$$
\frac{\partial (x,y,z)}{\partial (r,\theta,z)} = \begin{vmatrix}\cos \theta & -r \sin \theta & 0 \\ \sin \theta & r \cos \theta & 0 \\ 0 & 0 & 1 \end{vmatrix} = r
$$

$$
\frac{\partial (x,y,z)}{\partial (r,\varphi,\theta)} = \begin{vmatrix}\sin \varphi \cos \theta & r \cos \varphi \cos \theta & -r \sin \varphi \sin \theta \\ \sin \varphi \sin \theta & r \cos \varphi \sin \theta & r \sin \varphi \cos \theta \\ \cos \varphi & -r \sin \varphi & 0\end{vmatrix} = r^2 \sin \varphi
$$
