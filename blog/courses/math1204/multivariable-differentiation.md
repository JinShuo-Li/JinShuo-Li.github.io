---
title: "Differentiation of multivariable functions"
description: "Partial derivatives, differentiability, the chain rule, implicit functions, geometry, and extrema."
order: 3
tags: [Mathematical Analysis, Multivariable Calculus]
---

从现在开始, 我们将正式进入多元函数的微分学部分. 这里我们首先介绍一下多元函数的偏导数, 然后再介绍一下多元函数的全微分, 最后我们将介绍一下多元函数的可微性.

## 多元函数的偏导数

**定义**: 设函数$f(x_1, x_2, \cdots, x_n)$定义在$D$的某个邻域内, $x_0 = (x_{0,1}, x_{0,2}, \cdots, x_{0,n})$是$D$的一个内点. 如果对于任意$\epsilon > 0$, 存在$\delta > 0$, 使得对于所有$x_i \in \{x_i : (x_1, x_2, \cdots, x_n) \in D\}$且$0 < |x_i - x_{0,i}| < \delta$, 都有

$$
\left| \frac{f(x_1, x_2, \cdots, x_i, \cdots, x_n) - f(x_1, x_2, \cdots, x_{0,i}, \cdots, x_n)}{x_i - x_{0,i}} - A \right| < \epsilon
$$

则称函数$f(x_1, x_2, \cdots, x_n)$在$x_0$处关于第$i$个变量的偏导数为$A$, 记为:
$$
\frac{\partial f}{\partial x_i}(x_0) = A
$$

偏导数的定义和一元函数的导数的定义非常相似, 只是我们需要把绝对值替换成距离, 并且我们需要把函数值的变化量替换成函数值在某个方向上的变化量. 这里的思路非常清晰. 下面给出**方向导数**的定义:

**定义**: 设函数$f(x_1, x_2, \cdots, x_n)$定义在$D$的某个邻域内, $x_0 = (x_{0,1}, x_{0,2}, \cdots, x_{0,n})$是$D$的一个内点. 如果对于任意$\epsilon > 0$, 存在$\delta > 0$, 使得对于所有$t \in \{t : (x_0 + t\mathbf{u}) \in D\}$且$0 < |t| < \delta$, 都有
$$
\left| \frac{f(x_0 + t\mathbf{u}) - f(x_0)}{t} - A \right| < \epsilon
$$
则称函数$f(x_1, x_2, \cdots, x_n)$在$x_0$处关于方向$\mathbf{u}$的方向导数为$A$, 记为:
$$
D_{\mathbf{u}} f(x_0) = A
$$

另有常见的表达形式是借助三角函数表达, 但是这种表述一般局限于二元函数.

### 高阶偏导数

**定义**: 设$z=f(x,y)$是定义在$D \subset R^2$上的具有偏导数的函数:

$$
\frac{\partial z}{\partial x} = f_x(x,y), \quad \frac{\partial z}{\partial y} = f_y(x,y)
$$

假设这两个偏导数的偏导数也存在, 则称函数$z=f(x,y)$的二阶偏导数为:
$$
\begin{aligned}
&\frac{\partial^2 z}{\partial x^2} = f_{xx}(x,y) \quad \frac{\partial^2 z}{\partial y^2} = f_{yy}(x,y) \\
&\frac{\partial^2 z}{\partial x \partial y} = f_{xy}(x,y) \quad \frac{\partial^2 z}{\partial y \partial x} = f_{yx}(x,y)
\end{aligned}
$$

其中$\frac{\partial^2 z}{\partial x \partial y}$和$\frac{\partial^2 z}{\partial y \partial x}$分别表示先对$y$后对$x$以及先对$x$后对$y$的二阶偏导数.

计算法则完全一致. 类似的也可以得到更高阶的偏导数, 这里我们不再赘述.

**定理**: 若函数$z=f(x,y)$的二阶偏导数$\frac{\partial^2 z}{\partial x \partial y}$和$\frac{\partial^2 z}{\partial y \partial x}$在$D$内连续, 则对于任意$(x,y) \in D$, 都有:
$$
\frac{\partial^2 z}{\partial x \partial y} = \frac{\partial^2 z}{\partial y \partial x}
$$

**证明**: 我们考虑下面这个差商:

$$
I = \frac{[f(x_0+\Delta x, y_0+ \Delta y) - f(x_0+\Delta x,y_0)]-[f(x_0, y_0+\Delta y)-f(x_0,y_0)]}{\Delta x \Delta y}
$$

构造下面两个一元函数:

$$
\phi(x) = f(x, y_0 + \Delta y) - f(x, y_0)
$$
$$
\psi(y) = f(x_0 + \Delta x, y) - f(x_0, y)
$$

则差商 $I$ 可以被表示为两者的增量形式:
$$
I = \frac{\phi(x_0+\Delta x) - \phi(x_0)}{\Delta x \Delta y} = \frac{\psi(y_0+\Delta y) - \psi(y_0)}{\Delta x \Delta y}
$$

对 $\phi(x)$ 在 $[x_0, x_0+\Delta x]$ 上应用拉格朗日中值定理(不妨设 $\Delta x > 0$):
$$
\phi(x_0+\Delta x) - \phi(x_0) = \phi'(\xi_1)\Delta x
$$
其中 $\xi_1$ 介于 $x_0$ 与 $x_0+\Delta x$ 之间. 而 $\phi'(x) = f_x(x, y_0+\Delta y) - f_x(x, y_0)$, 故
$$
\phi'(\xi_1) = f_x(\xi_1, y_0+\Delta y) - f_x(\xi_1, y_0)
$$
将上式看作关于 $y$ 的函数在 $[y_0, y_0+\Delta y]$ 上的增量, 再次应用拉格朗日中值定理:
$$
f_x(\xi_1, y_0+\Delta y) - f_x(\xi_1, y_0) = f_{xy}(\xi_1, \eta_1)\Delta y
$$
其中 $\eta_1$ 介于 $y_0$ 与 $y_0+\Delta y$ 之间. 因此 $I = f_{xy}(\xi_1, \eta_1)$.

同理, 对 $\psi(y)$ 在 $[y_0, y_0+\Delta y]$ 上应用拉格朗日中值定理, 然后再对 $x$ 应用拉格朗日中值定理, 可得:
$$
\psi(y_0+\Delta y) - \psi(y_0) = \psi'(\eta_2)\Delta y = [f_y(x_0+\Delta x, \eta_2) - f_y(x_0, \eta_2)]\Delta y = f_{yx}(\xi_2, \eta_2)\Delta x \Delta y
$$
其中 $\eta_2$ 介于 $y_0$ 与 $y_0+\Delta y$ 之间, $\xi_2$ 介于 $x_0$ 与 $x_0+\Delta x$ 之间. 因此 $I = f_{yx}(\xi_2, \eta_2)$.

于是我们有:
$$
f_{xy}(\xi_1, \eta_1) = f_{yx}(\xi_2, \eta_2)
$$

令 $\Delta x \to 0, \Delta y \to 0$, 由于 $\xi_1, \xi_2 \to x_0$, $\eta_1, \eta_2 \to y_0$, 且二阶混合偏导数 $f_{xy}$ 和 $f_{yx}$ 在点 $(x_0, y_0)$ 处连续, 取极限即得:
$$
f_{xy}(x_0, y_0) = f_{yx}(x_0, y_0)
$$


## 全微分与可微性

**定义**: 一般的, 对于函数$z = f(x_1, x_2, \cdots, x_n)$在点$(x_1, x_2, \cdots, x_n)$处的全微分定义为:
$$
df = \frac{\partial f}{\partial x_1}dx_1 + \frac{\partial f}{\partial x_2}dx_2 + \cdots + \frac{\partial f}{\partial x_n}dx_n
$$

如果函数$f(x_1, x_2, \cdots, x_n)$在点$(x_1, x_2, \cdots, x_n)$处可微, 则称函数在该点处的全微分为:
$$
df = f'(x_1, x_2, \cdots, x_n)
$$


**定义**(可微条件): 设函数$f(x_1, x_2, \cdots, x_n)$定义在$D$的某个邻域内, $x_0 = (x_{0,1}, x_{0,2}, \cdots, x_{0,n})$是$D$的一个内点. 考虑函数的全增量:

$$
\Delta f = f(x_{0,1} + \Delta x_1, x_{0,2} + \Delta x_2, \cdots, x_{0,n} + \Delta x_n) - f(x_{0,1}, x_{0,2}, \cdots, x_{0,n})
$$

若存在只与$(x_1, x_2, \cdots, x_n)$有关的参数$A_1, A_2, \cdots, A_n$, 使得:
$$
\Delta f = A_1 \Delta x_1 + A_2 \Delta x_2 + \cdots + A_n \Delta x_n + o(\sqrt{\Delta x_1^2 + \Delta x_2^2 + \cdots + \Delta x_n^2})
$$

其中$o(\sqrt{\Delta x_1^2 + \Delta x_2^2 + \cdots + \Delta x_n^2})$表示$\sqrt{\Delta x_1^2 + \Delta x_2^2 + \cdots + \Delta x_n^2}$的高阶无穷小量. 换言之:

$$
\lim_{\sqrt{\Delta x_1^2 + \Delta x_2^2 + \cdots + \Delta x_n^2} \to 0} \frac{o(\sqrt{\Delta x_1^2 + \Delta x_2^2 + \cdots + \Delta x_n^2})}{\sqrt{\Delta x_1^2 + \Delta x_2^2 + \cdots + \Delta x_n^2}} = 0
$$

则称函数$f(x_1, x_2, \cdots, x_n)$在$x_0$处可微, 记为:
$$
f'(x_0) = (A_1, A_2, \cdots, A_n)
$$

**定理**: 可微必定可导.

证明略, 这里的思路非常清晰. 可微的定义要求函数的增量可以被一个线性函数所近似, 因此, 可微必定可导. 但是可导不一定可微, 这里我们可以给出一个反例:
$$
f(x,y) = \begin{cases}\frac{x^2y}{x^4+y^2}, & (x,y) \neq (0,0) \\ 0, & (x,y) = (0,0) \end{cases}
$$

函数$f(x,y)$在点$(0,0)$处的偏导数存在且等于0, 但是函数$f(x,y)$在点$(0,0)$处不可微. 因此, 可导不一定可微.

### 高阶微分

**定义**: 设函数$z=f(x,y)$是定义在$D \subset R^2$上的一个二元函数, 则函数$z=f(x,y)$的二阶微分定义为:
$$
d^2f = f_{xx}dx^2 + 2f_{xy}dxdy + f_{yy}dy^2
$$

**证明**: 用定义即可. 只需注意, 在可微的条件下, 恒有:

$$
f_{xy} f(x,y) = f_{yx} f(x,y)
$$

## *向量值函数的微分学

本部分不会在期中考试中有所涉及, 但是出于完整性的考虑, 我们给出不带证明的介绍.

我们讨论的是$R^n$上, 在区域$D$中的$n$元$m$维向量值函数:

$$
\boldsymbol{f}: D \to R^m
$$

我们可以把它写成坐标分量的形式:

$$
\boldsymbol{f}(x) = \begin{pmatrix}
f_1(x_1, x_2, \cdots, x_n) \\
f_2(x_1, x_2, \cdots, x_n) \\
\vdots \\
f_m(x_1, x_2, \cdots, x_n)
\end{pmatrix}
$$

### Jacobi矩阵与可微性

对于向量值函数, 我们可以类比一元函数的导数, 来定义向量值函数的可微性. 若存在一个 $m \times n$ 的矩阵 $\boldsymbol{A}$, 使得当 $\Delta x \to 0$ 时, 成立:

$$
\boldsymbol{f}(x_0 + \Delta x) - \boldsymbol{f}(x_0) = \boldsymbol{A} \Delta x + o(\|\Delta x\|)
$$

则称向量值函数 $\boldsymbol{f}$ 在点 $x_0$ 处**可微**, 并且矩阵 $\boldsymbol{A}$ 被称为向量值函数 $\boldsymbol{f}$ 在点 $x_0$ 处的**导数**.

事实表明, 当 $\boldsymbol{f}$ 可微时, 矩阵 $\boldsymbol{A}$ 是唯一确定的, 并且它恰好是由各分量函数的偏导数排成的矩阵, 称为 **Jacobi矩阵** (Jacobian matrix):

$$
J_{\boldsymbol{f}}(x_0) = \begin{pmatrix}
\frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} & \cdots & \frac{\partial f_1}{\partial x_n} \\
\frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} & \cdots & \frac{\partial f_2}{\partial x_n} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial f_m}{\partial x_1} & \frac{\partial f_m}{\partial x_2} & \cdots & \frac{\partial f_m}{\partial x_n}
\end{pmatrix}
$$

这就将标量函数的可微性自然地推广到了向量值函数. 一般我们也直接记为 $\boldsymbol{f}'(x_0)$.

### 向量值函数的链式法则

向量值函数的微分学最漂亮的结果之一就是链式法则的矩阵形式. 它与一元函数的链式法则在形式上完全一致.

**定理** (链式法则): 设 $\boldsymbol{f}: R^n \to R^m$, $\boldsymbol{g}: R^m \to R^p$. 若 $\boldsymbol{f}$ 在 $x_0$ 处可微, $\boldsymbol{g}$ 在 $y_0 = \boldsymbol{f}(x_0)$ 处可微, 则复合函数 $\boldsymbol{h} = \boldsymbol{g} \circ \boldsymbol{f}$ 在 $x_0$ 处可微, 且其导数 (Jacobi矩阵) 为两者Jacobi矩阵的乘积:

$$
J_{\boldsymbol{g} \circ \boldsymbol{f}}(x_0) = J_{\boldsymbol{g}}(y_0) \cdot J_{\boldsymbol{f}}(x_0)
$$

这个定理不仅形式优美, 而且十分实用, 各类多元复合函数求导法则, 都可以看作是这一矩阵乘法法则的具体分量展开.

## 梯度

**定义**: 设$D \subset R^2$, 若函数$z=f(x,y)$在$(x_0,y_0)$处可偏导, 则称函数$z=f(x,y)$在$(x_0,y_0)$处的梯度为:
$$
\nabla f(x_0,y_0) = \left( \frac{\partial f}{\partial x}(x_0,y_0), \frac{\partial f}{\partial y}(x_0,y_0) \right)
$$

也可以写作:

$$
\text{grad} f(x_0,y_0) = f_x(x_0,y_0) \hat{i} + f_y(x_0,y_0) \hat{j}
$$

梯度具有一系列类似导数的基本性质:

- 线性性质: $\nabla (af + bg) = a\nabla f + b\nabla g$, 其中$a$和$b$是常数.
- 积的求导法则: $\nabla (fg) = f\nabla g + g\nabla f$.
- 商的求导法则: $\nabla \left( \frac{f}{g} \right) = \frac{g\nabla f - f\nabla g}{g^2}$, 其中$g \neq 0$.

## 多元复合函数的求导法则

**定理**: 设$g$在$(u_0, v_0) \in D_g$处可导, 即$x=x(u,v), y=y(u,v)$在$(u_0, v_0)$处可偏导. 记$x_0 = x(u_0, v_0), y_0 = y(u_0, v_0)$, 若$f$在$(x_0, y_0) \in D_f$处可微, 那么:

$$
\begin{aligned}
&\frac{\partial}{\partial u}z = \frac{\partial}{\partial x}f \cdot \frac{\partial}{\partial u}x + \frac{\partial}{\partial y} f \cdot \frac{\partial}{\partial u}y \\
&\frac{\partial}{\partial v}z = \frac{\partial}{\partial x} f \cdot \frac{\partial}{\partial v}x + \frac{\partial}{\partial y} f \cdot \frac{\partial}{\partial v}y
\end{aligned}
$$

这条定理也叫做**链式法则**. 这里的思路非常清晰, 只需要把复合函数的增量表示成内外函数增量的乘积, 然后再对内外函数分别应用可微的定义即可. 这里我们不再赘述.

### 一阶全微分的形式不变性

**定理**: 我们假设$z=f(x,y), x=x(u,v), y=y(u,v)$, 如果$f$在$(x_0,y_0)$处可微, $x(u,v), y(u,v)$在$(u_0,v_0)$处可偏导, 那么:

$$
dz = \frac{\partial f}{\partial x}dx + \frac{\partial f}{\partial y}dy = \frac{\partial f}{\partial x}\left(\frac{\partial x}{\partial u}du + \frac{\partial x}{\partial v}dv\right) + \frac{\partial f}{\partial y}\left(\frac{\partial y}{\partial u}du + \frac{\partial y}{\partial v}dv\right)
$$

$$
dz= \frac{\partial f}{\partial x}dx + \frac{\partial f}{\partial y}dy = \frac{\partial f}{\partial u}du + \frac{\partial f}{\partial v}dv
$$

这条定理也叫做**一阶全微分的形式不变性**. 这意味着无论$x,y$是$u,v$的函数还是其他变量的函数, 一阶全微分的表达式都是一样的.

## 二元函数的Taylor公式

**定理**: 假设$f(x,y)$在点$(x_0,y_0)$处具有$k+1$阶连续偏导数, 则对于小邻域内任意$(x,y)=(x_0+\Delta x, y_0+\Delta y)$, 都有:

$$
f(x+\Delta x, y+\Delta y) = f(x,y) + \sum_{n=1}^k \frac{1}{n!} \left( \Delta x \frac{\partial}{\partial x} + \Delta y \frac{\partial}{\partial y} \right)^n f(x,y) + R_k
$$
其中$R_k$是余项, 满足:
$$
\lim_{\sqrt{\Delta x^2 + \Delta y^2} \to 0} \frac{R_k}{\sqrt{\Delta x^2 + \Delta y^2}^k} = 0
$$
这条定理也叫做**二元函数的Taylor公式**. 常见的余项称作拉格朗日余项:
$$
R_k = \frac{1}{(k+1)!} \left( \Delta x \frac{\partial}{\partial x} + \Delta y \frac{\partial}{\partial y} \right)^{k+1} f(x+\theta_1 \Delta x, y+\theta_2 \Delta y)
$$

我们取$k=0$, 就可以得到二元函数的**微分中值定理**:

**定理**: 设函数$f(x,y)$在$D$内具有连续偏导数, $P_0=(x_0,y_0)$和$P=(x,y)$是$D$内的两点, 则存在$\theta \in (0,1)$使得:
$$
f(x_0+\Delta x,y_0+\Delta y) - f(x_0,y_0) = f_x(x_0+\theta \Delta x, y_0+\theta \Delta y) \Delta x + f_y(x_0+\theta \Delta x, y_0+\theta \Delta y) \Delta y
$$

## 隐函数

很多时候, 用显示的, 分离好的函数来描述一个关系是非常困难的, 这时候我们就需要用到隐函数. 隐函数就是用一个二元函数方程来描述一个关系, 即:
$$
F(x,y) = 0
$$

**定理**(一元隐函数存在定理): 若二元函数$F(x,y)$满足条件:
- $F(x_0,y_0) = 0$
- 在闭矩形$R = \{(x,y) : |x-x_0| \leq a, |y-y_0| \leq b\}$上连续且具有连续偏导数
- $F_y(x_0,y_0) \neq 0$

那么在$(x_0,y_0)$**附近**可以唯一确定隐函数$y=f(x)$, 使得$F(x,f(x)) = 0$. 这里的**附近**是指存在一个开区间$(x_0 - \delta, x_0 + \delta)$, 使得对于任意$x \in (x_0 - \delta, x_0 + \delta)$, 都有$F(x,f(x)) = 0$. 并且进一步的我们可以得到:

$$
\frac{dy}{dx} = - \frac{F_x(x,y)}{F_y(x,y)}
$$

这里的证明我们略过. 同时, 我们可以很轻易的把上述结论推广到多元隐函数的情况:

**定理**(多元隐函数存在定理): 若 $n+1$ 元函数 $F(x_1, x_2, \dots, x_n, y)$ 满足条件:
- $F(x_1^0, x_2^0, \dots, x_n^0, y_0) = 0$
- 在点 $(x_1^0, x_2^0, \dots, x_n^0, y_0)$ 的某邻域内具有连续的偏导数
- $F_y(x_1^0, x_2^0, \dots, x_n^0, y_0) \neq 0$

那么在点 $(x_1^0, x_2^0, \dots, x_n^0)$ 的某邻域内, 方程 $F(x_1, x_2, \dots, x_n, y) = 0$ 可以唯一确定一个连续且具有连续偏导数的隐函数 $y = f(x_1, x_2, \dots, x_n)$ 使得 $y_0 = f(x_1^0, x_2^0, \dots, x_n^0)$. 并且其偏导数为:

$$
\frac{\partial y}{\partial x_i} = - \frac{F_{x_i}(x_1, x_2, \dots, x_n, y)}{F_y(x_1, x_2, \dots, x_n, y)}, \quad (i = 1, 2, \dots, n)
$$

### 多元函数方程组

很多时候, 我们需要处理多个隐函数方程组成的方程组, 例如著名的外包络线问题:

$$
\begin{cases}
F(x,y,z) = 0 \\
\frac{\partial F}{\partial z} = 0
\end{cases}
$$

我们可以把上述定理推广到多元函数方程组的情况:

**定理**(多元函数方程组存在定理): 设$F(x,y,u,v)$和$G(x,y,u,v)$是定义在$D \subset R^4$上的两个四元函数, 满足条件:
- $F(x_0,y_0,u_0,v_0) = 0, G(x_0,y_0,u_0,v_0) = 0$
- 在闭长方体$R = \{(x,y,u,v) : |x-x_0| \leq a, |y-y_0| \leq b, |u-u_0| \leq c, |v-v_0| \leq d\}$上连续且具有连续偏导数
- $\frac{\partial(F,G)}{\partial(u,v)} = \begin{vmatrix} F_u & F_v \\ G_u & G_v \end{vmatrix} \neq 0$
那么在点$(x_0,y_0)$的某邻域内, 方程组
$$
\begin{cases}
F(x,y,u,v) = 0 \\
G(x,y,u,v) = 0
\end{cases}
$$
可以唯一确定一个连续且具有连续偏导数的隐函数组:
$$
\begin{cases}
u = f(x,y) \\
v = g(x,y)
\end{cases}
$$

而且我们可以得到隐函数组的偏导数:
$$
\begin{pmatrix}
\frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\
\frac{\partial v}{\partial x} & \frac{\partial v}{\partial y}
\end{pmatrix}
= - \begin{pmatrix}
F_u & F_v \\
G_u & G_v
\end{pmatrix}^{-1} \cdot \begin{pmatrix}F_x & F_y \\
G_x & G_y
\end{pmatrix}
$$

但是实际上我们在求解的时候, 更方便的方式是两个方程直接对$x$和$y$求偏导数, 然后再解出$\frac{\partial u}{\partial x}, \frac{\partial u}{\partial y}, \frac{\partial v}{\partial x}, \frac{\partial v}{\partial y}$. 而不是利用线性代数的方法去求解. 这里我们不再赘述.

## 多元函数的几何应用

### 空间中的切线和法平面

**空间曲线的参数方程**: 设空间曲线$C$的参数方程为:
$$
\begin{cases}
x = x(t) \\
y = y(t) \\
z = z(t)
\end{cases}
$$

也可以写成向量值函数的形式:
$$
\boldsymbol{r}(t) = x(t)\hat{i} + y(t)\hat{j} + z(t)\hat{k}
$$

**空间曲线的切线**: 设空间曲线$C$的参数方程为$\boldsymbol{r}(t)$, 则空间曲线$C$在点$\boldsymbol{r}(t_0)$处的切线方程为:
$$
\frac{x - x(t_0)}{x'(t_0)} = \frac{y - y(t_0)}{y'(t_0)} = \frac{z - z(t_0)}{z'(t_0)}
$$

**空间曲线的切向量**: 设空间曲线$C$的参数方程为$\boldsymbol{r}(t)$, 则空间曲线$C$在点$\boldsymbol{r}(t_0)$处的切向量为:
$$
\boldsymbol{r}'(t_0) = x'(t_0)\hat{i} + y'(t_0)\hat{j} + z'(t_0)\hat{k}
$$

**空间曲线的法平面**: 也就是以切向量为法向量的平面. 设空间曲线$C$的切向量为$\boldsymbol{r}'(t_0)$, 则空间曲线$C$在点$\boldsymbol{r}(t_0)$处的法平面方程为:
$$
x'(t_0)(x - x(t_0)) + y'(t_0)(y - y(t_0)) + z'(t_0)(z - z(t_0)) = 0
$$

我们有时候不仅会使用参数方程来表达空间中的曲线, 我们也会使用两个空间中的曲面来表达空间中的曲线. 比如说:

$$
\begin{cases}
    F(x, y, z) = 0 \\
    G(x, y, z) = 0
\end{cases}
$$

我们假定它的Jacobi矩阵始终行满秩:

$$
\text{rank}
\begin{pmatrix}
F_x & F_y & F_z \\
G_x & G_y & G_z
\end{pmatrix} = 2
$$

根据前面在微分部分的知识, 我们显然有:

$$
\frac{\partial (F,G)}{\partial (x,y)} = \begin{vmatrix}
    F_x & F_y \\
    G_x & G_y
\end{vmatrix}, \quad
\frac{\partial (F,G)}{\partial (y,z)} = \begin{vmatrix}
    F_y & F_z \\
    G_y & G_z
\end{vmatrix}, \quad
\frac{\partial (F,G)}{\partial (z,x)} = \begin{vmatrix}
    F_z & F_x \\
    G_z & G_x
\end{vmatrix}
$$

则空间曲线$C$在点$P(x_0,y_0,z_0)$处的切向量为:
$$
\boldsymbol{r}'(P_0) = \frac{\partial (F,G)}{\partial (y,z)}\hat{i} + \frac{\partial (F,G)}{\partial (z,x)}\hat{j} + \frac{\partial (F,G)}{\partial (x,y)}\hat{k}
$$

>
> **理解这些雅可比记号的几何意义：**
> 
> 这个记号 $\frac{\partial (F,G)}{\partial (x,y)}$ 本质上是雅可比(Jacobian)行列式的简写. 在这里，它不仅是为了简化二阶行列式的书写，更是为了表达**两个法向量的外积（叉乘）**.
> 
> 空间曲线是由曲面 $F(x,y,z)=0$ 和 $G(x,y,z)=0$ 相交构成的。因为曲线同时在这两个曲面上，所以曲线的切向量一定同时垂直于这两个曲面的法向量 $\nabla F = (F_x, F_y, F_z)$ 和 $\nabla G = (G_x, G_y, G_z)$.
> 
> 求同时垂直于这两个向量的方向，可以直接用外积表示：
>
> $$
> \nabla F \times \nabla G = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ F_x & F_y & F_z \\ G_x & G_y & G_z \end{vmatrix}
> $$
>
> 将该行列式按第一行展开，$\hat{i}$, $\hat{j}$, $\hat{k}$ 前的系数刚好就是这三个雅可比行列式：$\frac{\partial (F,G)}{\partial (y,z)}$, $\frac{\partial (F,G)}{\partial (z,x)}$, $\frac{\partial (F,G)}{\partial (x,y)}$。这就是切向量公式的本质来源.
> 

### 空间中的切平面和法线

空间中的曲面可以用一个二元函数来表示也可以用一个隐函数来表示. 一般的:

$$
F(x,y,z) = 0
$$

表达式中的$F$是一个三元函数, 其零点集就是我们要讨论的曲面. 设$P_0=(x_0,y_0,z_0)$是曲面上的一个点, 则曲面在点$P_0$处的切平面方程为:
$$
F_x(x_0,y_0,z_0)(x-x_0) + F_y(x_0,y_0,z_0)(y-y_0) + F_z(x_0,y_0,z_0)(z-z_0) = 0
$$

这个切平面的法向量是:
$$
\boldsymbol{n} = F_x(x_0,y_0,z_0)\hat{i} + F_y(x_0,y_0,z_0)\hat{j} + F_z(x_0,y_0,z_0)\hat{k}
$$

这本质上是因为曲面在点$P_0$处的切平面与曲面在点$P_0$处的梯度垂直, 因此切平面的法向量就是曲面在点$P_0$处的梯度. 这里我们不再赘述.

## 极值问题

### 无条件极值

**极值的必要条件**：设函数 $z=f(x,y)$ 在点 $(x_0,y_0)$ 处具有偏导数, 且在该点取得极值, 则有：
$$
f_x(x_0,y_0) = 0, \quad f_y(x_0,y_0) = 0
$$
满足此条件的点 $(x_0,y_0)$ 称为函数 $f(x,y)$ 的**驻点**. 

**极值的充分条件**：设函数 $z=f(x,y)$ 在驻点 $(x_0,y_0)$ 的某邻域内具有连续的二阶偏导数, 记：
$$
A = f_{xx}(x_0,y_0), \quad B = f_{xy}(x_0,y_0), \quad C = f_{yy}(x_0,y_0)
$$
且 $\Delta = AC - B^2$, 则：
1. 当 $\Delta > 0$ 时, 函数在 $(x_0,y_0)$ 处取得极值. 其中, 当 $A < 0$ 时取得**极大值**；当 $A > 0$ 时取得**极小值**. 
2. 当 $\Delta < 0$ 时, 函数在 $(x_0,y_0)$ 处**不取得极值**(此点称为鞍点). 
3. 当 $\Delta = 0$ 时, 可能是极值点也可能不是, 需要进一步判定. 

**一些说明**: 关于表达式$AC-B^2$的来源:

我们现在对$f(x+h, y+k)$进行二阶Taylor展开, 可以得到:
$$
f(x+h, y+k) = f(x,y) + f_x h + f_y k + \frac{1}{2} (f_{xx} h^2 + 2f_{xy} hk + f_{yy} k^2) + o(h^2 + k^2)
$$

由于一阶偏微分在驻点处为$0$，因此我们可以把增量表示为:

$$
f(x+h, y+k) - f(x,y) = \frac{1}{2} (f_{xx} h^2 + 2f_{xy} hk + f_{yy} k^2) + o(h^2 + k^2)
$$

换言之, 我们实际上是在讨论二次型 $Q(h,k) = f_{xx} h^2 + 2f_{xy} hk + f_{yy} k^2$ 的正定性. 我们把二次型 $Q(h,k)$ 写成矩阵的形式:

$$
Q(h,k) = \begin{pmatrix} h & k \end{pmatrix} \begin{pmatrix} f_{xx} & f_{xy} \\ f_{xy} & f_{yy} \end{pmatrix} \begin{pmatrix} h \\ k \end{pmatrix} = \begin{pmatrix} h & k \end{pmatrix} \begin{pmatrix} A & B \\ B & C \end{pmatrix} \begin{pmatrix} h \\ k \end{pmatrix}
$$

讨论矩阵:

$$
H = \begin{pmatrix} A & B \\ B & C \end{pmatrix}
$$

行列式:

$$
|H| = \begin{vmatrix} A & B \\ B & C \end{vmatrix} = AC - B^2
$$

由于$H$为实对称矩阵, 因此它的正定性可以通过行列式来判定. 当$|H| > 0$且$A > 0$时, $H$为正定矩阵, 因此二次型$Q(h,k)$为正定, 函数在驻点处取得极小值. 当$|H| > 0$且$A < 0$时, $H$为负定矩阵, 因此二次型$Q(h,k)$为负定, 函数在驻点处取得极大值. 当$|H| < 0$时, $H$为不定矩阵, 因此二次型$Q(h,k)$为不定, 函数在驻点处不取得极值(鞍点). 当$|H| = 0$时, $H$为半正定或半负定矩阵, 因此二次型$Q(h,k)$可能是半正定或半负定, 函数在驻点处可能取得极值也可能不取得极值.


### 条件极值

条件极值是指在某些约束条件下求目标函数的极值. 通常使用**拉格朗日乘数法**. 

**【拉格朗日乘数法原理与几何直观】**
* **等值线相切**：以二维条件 $g(x,y)=0$ (约束曲线) 下求 $f(x,y)$ 极值为例，观察 $f(x,y)=c$ 的一系列等值线。当在约束曲线上探寻极值时，极值点必须是约束曲线与某条等值线**恰好相切**的位置（若相交，则说明还可顺着约束曲线走向更高或更低的等值线）.
* **梯度共线**：由于在极值点处两曲线相切，且梯度（$\nabla f$和$\nabla g$）始终垂直于各自所在的等值线，故在极值点两者的**梯度法向量必然共线（互相平行）**。用公式表达即 $\nabla f = -\lambda \nabla g$.
* **辅助函数的构造**：为了将“有约束的寻找问题”统一转化为“无约束寻找极值点”的计算步骤，构造了辅助函数 $L(x,y,\lambda) = f(x,y) + \lambda g(x,y)$。对自变量求偏导并令其为 $0$ ($L_x=0, L_y=0$) 其实就是在应用“梯度共线”的条件（$f_x+\lambda g_x=0$）；对 $\lambda$ 求导令其为 $0$ ($L_\lambda=0$)，则是补回了“落在约束回线”的前提($g=0$)
* **多约束情况**：多约束(如面和面相交成一条线作为约束)同理，在极值点处目标函数 $f$ 的梯度须平躺在 $g$ 和 $h$ 的梯度所张成的法平面内部。即 $\nabla f = -\lambda \nabla g - \mu \nabla h$。也就对应了多乘子构造：$L = f + \lambda g + \mu h$.

**单约束条件**：求目标函数 $f(x,y,z)$ 在约束条件 $g(x,y,z) = 0$ 下的极值. 
构造拉格朗日函数：
$$
L(x,y,z,\lambda) = f(x,y,z) + \lambda g(x,y,z)
$$
求 $L$ 驻点的方程组：
$$
\begin{cases}
L_x = f_x + \lambda g_x = 0 \\
L_y = f_y + \lambda g_y = 0 \\
L_z = f_z + \lambda g_z = 0 \\
L_\lambda = g(x,y,z) = 0
\end{cases}
$$
解此方程组得到的 $(x,y,z)$ 即为可能的条件极值点.

**多约束条件**：若有多个约束, 如 $g(x,y,z) = 0$ 和 $h(x,y,z) = 0$, 则构造：
$$
L(x,y,z,\lambda,\mu) = f(x,y,z) + \lambda g(x,y,z) + \mu h(x,y,z)
$$
并按照同样的方法对所有变量(包含 $\lambda, \mu$)求偏导并令其为0即可求解.
