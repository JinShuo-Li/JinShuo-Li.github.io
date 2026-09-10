---
title: "Integrals with parameters"
description: "Integrals depending on a parameter, including improper parameter integrals and Euler integrals."
order: 6
tags: [Mathematical Analysis, Integration]
---

含参变量的积分本质上就是对一个多元函数, 但是积分变量只是对其中一个变量进行积分, 其他变量则被当作参数来处理. 比如:

$$
\begin{aligned}
    I(y) = \int_a^b f(x,y) dx \\
    J(x) = \int_a^b f(x,y) dy
\end{aligned}
$$

## 含参变量的常义积分

### 性质

**连续性定理**: 设$f(x,y)$在闭矩形$D=[a,b] \times [c,d]$
上连续, 则函数:

$$
I(y) = \int_a^b f(x,y) dx
$$

在$[c,d]$上连续.

由这个定理我们可以直接推出下面的表达式, 也就是极限运算和积分运算可交换:

$$
\lim_{y \to y_0} \int_a^b f(x,y) dx = \int_a^b \lim_{y \to y_0} f(x,y) dx
$$

**积分次序交换定理**: 设$f(x,y)$在$D=[a,b] \times [c,d]$上连续, 那么:

$$
\int_c^d dy \int_a^b f(x,y) dx = \int_a^b dx \int_c^d f(x,y) dy
$$

**积分号下求导定理**: 设$f(x,y)$和$f_y(x,y)$都在闭矩形$D=[a,b] \times [c,d]$上连续, 则$I_y = \int_a^b f(x,y) dx$在$[c,d]$上可导. 且:

$$
\frac{d}{dy} I(y) = \int_a^b f_y(x,y) dx
$$

## 含参变量的反常积分

类似传统的反常积分, 含参变量的反常积分也可以分成两类, 一类是积分区间无界, 另一类是被积函数存在瑕点.

### 反常积分的一致收敛性

在这里我们分成两类讨论. 类似函数项级数, 反常积分也有一致收敛性的概念. 反常积分的一致收敛性是指对于一个含参变量的反常积分, 当参数在某个区间内变化时, 反常积分的值能够以某种方式趋近于一个极限值, 并且这个极限值与参数无关.

- **无穷区间的反常积分的一致收敛性**

**定义**: 设$f(x,y)$在$[a,+\infty) \times [c,d]$上连续, 则反常积分$\int_a^{+\infty} f(x,y) dx$在$[c,d]$上一致收敛, 如果存在一个函数$F(y)$使得对于任意$\varepsilon > 0$, 存在一个常数$M > a$, 当$x > M$时, 对于任意$y \in [c,d]$, 都有:

$$
\left| \int_M^{+\infty} f(x,y) dx \right| < \varepsilon
$$

- **瑕点的反常积分的一致收敛性**

**定义**: 设$f(x,y)$在$(a,b] \times [c,d]$上连续, 则反常积分$\int_a^b f(x,y) dx$在$[c,d]$上一致收敛, 如果存在一个函数$F(y)$使得对于任意$\varepsilon > 0$, 存在一个常数$\delta > 0$, 当$0 < x - a < \delta$时, 对于任意$y \in [c,d]$, 都有:

$$
\left| \int_a^{a+\delta} f(x,y) dx \right| < \varepsilon
$$

### 一致收敛的判别法

**Cauchy判别法**:

含参变量的反常积分 $\int_a^{+\infty} f(x,y) dx$ 在 $[c,d]$ 上一致收敛的充要条件是：对于任意 $\varepsilon > 0$，存在常数 $M > a$，使得对于任意的 $A_1, A_2 > M$ 及任意的 $y \in [c,d]$，都有：
$$
\left| \int_{A_1}^{A_2} f(x,y) dx \right| < \varepsilon
$$

**Weierstrass M-test**:

设函数 $f(x,y)$ 在 $[a, +\infty) \times [c,d]$ 上连续。如果存在一个仅依赖于 $x$ 的非负函数 $g(x)$ (称为优函数)，使得对于所有的 $x \in [a, +\infty)$ 和 $y \in [c,d]$，都有 $|f(x,y)| \le g(x)$，并且反常积分 $\int_a^{+\infty} g(x) dx$ 收敛，则含参变量反常积分 $\int_a^{+\infty} f(x,y) dx$ 在 $[c,d]$ 上绝对收敛且一致收敛。

**Abel判别法**:

设 $f(x,y)$ 和 $g(x,y)$ 在 $[a, +\infty) \times [c,d]$ 上连续，且满足以下两个条件：
1. 积分 $\int_a^{+\infty} f(x,y) dx$ 在 $[c,d]$ 上一致收敛;
2. 对任意固定的 $y \in [c,d]$, 函数 $g(x,y)$ 关于 $x$ 单调，并且在 $[a, +\infty) \times [c,d]$ 上一致有界(即存在常数 $M > 0$，使得 $|g(x,y)| \le M$).

则反常积分 $\int_a^{+\infty} f(x,y)g(x,y) dx$ 在 $[c,d]$ 上一致收敛。

**Dirichlet判别法**:

设 $f(x,y)$ 和 $g(x,y)$ 在 $[a, +\infty) \times [c,d]$ 上连续，且满足以下两个条件:
1. 积分 $\int_a^A f(x,y) dx$ 在 $[c,d]$ 上一致有界(即存在常数 $M > 0$，使得对于所有 $A > a$ 和 $y \in [c,d]$ 都有 $\left| \int_a^A f(x,y) dx \right| \le M$);
2. 对任意固定的 $y \in [c,d]$，函数 $g(x,y)$ 关于 $x$ 单调, 并且当 $x \to +\infty$ 时, $g(x,y)$ 关于 $y$ 在 $[c,d]$ 上一致趋近于 0.

则反常积分 $\int_a^{+\infty} f(x,y)g(x,y) dx$ 在 $[c,d]$ 上一致收敛.

### 一致收敛的分析性质

1. **连续性**: 如果 $f(x,y)$ 在 $[a, +\infty) \times [c,d]$ 上连续, 且反常积分 $I(y) = \int_a^{+\infty} f(x,y) dx$ 在 $[c,d]$ 上一致收敛, 那么 $I(y)$ 是 $[c,d]$ 上的连续函数.
2. **可积性**: 如果 $f(x,y)$ 在 $[a, +\infty) \times [c,d]$ 上连续，且反常积分 $I(y) = \int_a^{+\infty} f(x,y) dx$ 在 $[c,d]$ 上一致收敛，那么 $I(y)$ 在 $[c,d]$ 上可积，且积分顺序可以交换:
$$
\int_c^d \left( \int_a^{+\infty} f(x,y) dx \right) dy = \int_a^{+\infty} \left( \int_c^d f(x,y) dy \right) dx
$$
3. **可微性**: 设 $f(x,y)$ 及 $\frac{\partial f}{\partial y}(x,y)$ 在 $[a, +\infty) \times [c,d]$ 上连续, 且满足:
   - 存在 $y_0 \in [c,d]$, 使得积分 $\int_a^{+\infty} f(x,y_0) dx$ 收敛;
   - 积分 $\int_a^{+\infty} \frac{\partial f}{\partial y}(x,y) dx$ 在 $[c,d]$ 上一致收敛.

   那么 $I(y) = \int_a^{+\infty} f(x,y) dx$ 在 $[c,d]$ 上可导，且求导与积分可以交换顺序:
$$
\frac{d}{dy} \int_a^{+\infty} f(x,y) dx = \int_a^{+\infty} \frac{\partial f}{\partial y}(x,y) dx
$$

## Euler积分

### Beta函数

$$
B(p,q) = \int_0^1 x^{p-1} (1-x)^{q-1} dx
$$

由于Beta函数可能存在两个瑕点, 我们按照中点$\frac{1}{2}$进行分割处理:

$$
B(p,q) = \int_0^{\frac{1}{2}} x^{p-1} (1-x)^{q-1} dx + \int_{\frac{1}{2}}^1 x^{p-1} (1-x)^{q-1} dx
$$

前面一项的敛散性主要由$x^{p-1}$决定, 后面一项的敛散性主要由$(1-x)^{q-1}$决定. 显然, 当$p>0$且$q>0$时, Beta函数收敛.

所以Beta函数的定义域为$(0, +\infty) \times (0, +\infty)$.

**性质**

- Beta函数在定义域上连续. (证明利用一致收敛性+Weierstrass M-test完成)
- 对称性: $B(p,q) = B(q,p)$. (证明通过变量代换$x = 1-t$完成)
- 递推公式: $B(p,q) = \frac{q-1}{p+q-1} B(p, q-1)$. (证明通过分部积分完成)

> 计算过程如下:
$$
\begin{aligned}
B(p,q) &= \int_0^1 \frac{1}{p} (1-x)^{q-1} d(x^p) \\
&= \frac{1}{p} (1-x)^{q-1} x^p \Big|_0^1 + \frac{q-1}{p} \int_0^1 x^p (1-x)^{q-2} dx \\
&= \frac{q-1}{p} \int_0^1 [1-(1-x)]x^{p-1}(1-x)^{q-2} dx \\
&= \frac{q-1}{p} \int_0^1 x^{p-1}(1-x)^{q-2} dx - \frac{q-1}{p} \int_0^1 x^{p-1}(1-x)^{q-1} dx \\
&= \frac{q-1}{p} B(p, q-1) - \frac{q-1}{p} B(p, q) \\
\end{aligned}
$$
可以解得:
$$
B(p,q) = \frac{q-1}{p+q-1} B(p, q-1)
$$
即为所求.

**一些代换**

1. 我们对Beta函数做一次变量代换: $x=\cos^2 \phi$, 得到:

$$
B(p,q) = 2 \int_0^{\frac{\pi}{2}} \sin^{2q-1} \phi \cos^{2p-1} \phi d\phi
$$

我们不难观察到: $B(\frac{1}{2}, \frac{1}{2}) = \pi$

2. 我们再令$x = \frac{t}{1+t}$, 得到:

$$
B(p,q) = \int_0^{+\infty} \frac{t^{p-1}+t^{q-1}}{(1+t)^{p+q}} dt
$$

从这个表达式可以非常明显的观察到对称性.

### Gamma函数

$$
\Gamma(s) = \int_0^{+\infty} x^{s-1} e^{-x} dx
$$

同样, 由于Gamma函数可能存在一个瑕点, 在无穷点的敛散性也可能遇到问题, 因此我们按照$1$进行分割处理:

$$
\Gamma(s) = \int_0^1 x^{s-1} e^{-x} dx + \int_1^{+\infty} x^{s-1} e^{-x} dx
$$

后面一项必然收敛. 所以Gamma函数的定义域为$(0, +\infty)$.

**性质**

- Gamma函数连续且可导. 且任意阶导数都存在. (证明利用一致收敛性+Weierstrass M-test完成, 任意阶导数证明类似)
- 递推公式: $\Gamma(s+1) = s \Gamma(s)$. (证明通过分部积分完成)

> 计算过程如下:
$$
\begin{aligned}
\Gamma(s+1) &= \int_0^{+\infty} x^s e^{-x} dx \\
&= -\int_0^{+\infty} x^s d(e^{-x}) \\
&= -x^s e^{-x} \Big|_0^{+\infty} + s \int_0^{+\infty} x^{s-1} e^{-x} dx \\
&= s \Gamma(s)
\end{aligned}
$$

当然, 根据递推公式, 我们可以知道:

$$
\Gamma(n+1) = n!, \quad n \in \mathbb{N}
$$

**一些变换**

我们对Gamma函数做一次变量代换: $x = t^2$, 得到:

$$
\Gamma(s) = 2 \int_0^{+\infty} t^{2s-1} e^{-t^2} dt
$$

我们很容易知道: $\Gamma(\frac{1}{2}) = \sqrt{\pi}$

**定义域的延拓**

由递推公式我们可以得到:

$$
\Gamma(s) = \frac{\Gamma(s+1)}{s}
$$

我们可以把$\Gamma(s)$的定义域从$(0, +\infty)$无限延拓到$(-\infty, +\infty) \setminus \{0, -1, -2, \cdots\}$

### Beta函数与Gamma函数的关系

$$
B(p,q) = \frac{\Gamma(p) \Gamma(q)}{\Gamma(p+q)}
$$

> *证明*
$$
\Gamma(p) = 2 \int_0^{+\infty} t^{2p-1} e^{-t^2} dt, \quad \Gamma(q) = 2 \int_0^{+\infty} t^{2q-1} e^{-t^2} dt
$$
$$
\begin{aligned}
\Gamma(p) \Gamma(q) &= 4 \int_0^{+\infty} \int_0^{+\infty} t^{2p-1} s^{2q-1} e^{-t^2 - s^2} dt ds \\
&= 4 \iint_{\Omega} t^{2p-1} s^{2q-1} e^{-t^2 - s^2} dt ds
\end{aligned}
$$
我们做一次极坐标变换: $t = r \cos \theta$, $s = r \sin \theta$, 则有:
$$
\begin{aligned}
\Gamma(p) \Gamma(q) &= 2 \int_0^{\frac{\pi}{2}} \cos^{2p-1} \theta \sin^{2q-1} \theta d\theta \cdot 2 \int_0^{+\infty} r^{2p+2q-1} e^{-r^2} dr \\
&= 2 \int_0^{\frac{\pi}{2}} \cos^{2p-1} \theta \sin^{2q-1} \theta d\theta \cdot \Gamma(p+q) \\
&= B(p,q) \cdot \Gamma(p+q)
\end{aligned}
$$

**关于Gamma函数的三个重要结论**

- Legendre公式

$$
\Gamma(s) \Gamma(s+\frac{1}{2}) = \frac{\sqrt{\pi}}{2^{2s-1}} \Gamma(2s)
$$

- 余元公式

$$
\Gamma(s) \Gamma(1-s) = \frac{\pi}{\sin \pi s}
$$

- Stirling公式

$$
\Gamma(s+1) = \sqrt{2\pi s} \left( \frac{s}{e} \right)^s e^{\frac{\theta}{12s}}
$$

这三个公式完全不需要记住, 证明也不需要掌握, 因为考试**根本不考**.
