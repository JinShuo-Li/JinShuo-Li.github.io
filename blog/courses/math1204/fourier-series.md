---
title: "Fourier series"
description: "Fourier series: expansion, convergence tests, and the Dirichlet integral."
order: 7
tags: [Mathematical Analysis, Calculus, Fourier Analysis]
---

在前面章节的学习中我们接触了Taylor级数, 但是Taylor级数只能在函数的某个点附近进行展开, 因此它的适用范围非常有限. Fourier级数则是可以在一个区间内对函数进行展开, 因此它的适用范围更广.

## 函数的Fourier级数展开

**三角函数系**:

在区间 $[-L, L]$ (通常取 $L = \pi$) 上, 我们定义如下的函数列为三角函数系:

$$
1, \cos\frac{\pi x}{L}, \sin\frac{\pi x}{L}, \cos\frac{2\pi x}{L}, \sin\frac{2\pi x}{L}, \cdots, \cos\frac{n\pi x}{L}, \sin\frac{n\pi x}{L}, \cdots
$$

**三角函数的正交性**:

三角函数系具有正交性, 即在区间 $[-L, L]$ 上, **任意两个不同项的乘积的积分值都是 0**. 

具体的数学表达为以下几个积分公式:

1. 任意频率的正弦与余弦正交 (对任意正整数 $m, n$):
$$
\int_{-L}^{L}\sin\frac{n\pi x}{L}\cos\frac{m\pi x}{L}\,dx = 0
$$

2. 不同频率的正弦与正弦正交 (对任意正整数 $m \neq n$):
$$
\int_{-L}^{L}\sin\frac{n\pi x}{L}\sin\frac{m\pi x}{L}\,dx = 0
$$

3. 不同频率的余弦与余弦正交 (对任意正整数 $m \neq n$):
$$
\int_{-L}^{L}\cos\frac{n\pi x}{L}\cos\frac{m\pi x}{L}\,dx = 0
$$

4. 常数项 $1$ 与任意正弦、余弦项正交 (对任意正整数 $n$):
$$
\int_{-L}^{L} 1 \cdot \cos\frac{n\pi x}{L}\,dx = 0, \quad \int_{-L}^{L} 1 \cdot \sin\frac{n\pi x}{L}\,dx = 0
$$

*(附注: 若两项**相同**, 比如 $\sin\frac{n\pi x}{L} \cdot \sin\frac{n\pi x}{L}$, 它在 $[-L, L]$ 的积分值为 $L$; 若为 $1 \cdot 1$, 积分值为 $2L$.)*

**Fourier级数展开**:

设 $f(x)$ 是定义在区间 $[-L, L]$ 上的函数, 则 $f(x)$ 的 Fourier 级数展开式为:

$$
f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} \left( a_n \cos\frac{n\pi x}{L} + b_n \sin\frac{n\pi x}{L} \right)
$$

其中, Fourier 系数 $a_0, a_n, b_n$ 可以利用三角函数的正交性求得 (等式两边同乘对应的基底然后再在 $[-L, L]$ 上积分):

$$
a_0 = \frac{1}{L} \int_{-L}^{L} f(x) \, dx
$$

$$
a_n = \frac{1}{L} \int_{-L}^{L} f(x) \cos\frac{n\pi x}{L} \, dx \quad (n = 1, 2, \cdots)
$$

$$
b_n = \frac{1}{L} \int_{-L}^{L} f(x) \sin\frac{n\pi x}{L} \, dx \quad (n = 1, 2, \cdots)
$$

特别地, 当 $L = \pi$ 时, 周期为 $2\pi$ 的函数的 Fourier 级数为:
$$
f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} (a_n \cos nx + b_n \sin nx)
$$

对于非周期函数, 我们可以把它看作是一个周期为 $2L$ 的函数在 $[-L, L]$ 上的限制, 从而也可以进行 Fourier 级数展开.

**定理**:

1. 如果$f(x)$是定义在对称区间上的奇函数, 则它的 Fourier 级数展开式中只有正弦项, 即 $a_0 = a_n = 0$.
2. 如果$f(x)$是定义在对称区间上的偶函数, 则它的 Fourier 级数展开式中只有余弦项, 即 $b_n = 0$.

所以根据以上定理, 我们可以进行**正弦展开**或者**余弦展开**.

对于非对称区间, 我们可以通过延拓 (奇/偶) 延拓实现正弦展开/余弦展开.

## Fourier级数的收敛判别法与Dirichlet积分

记Fourier级数的部分和函数序列为:

$$
S_m(x) = \frac{a_0}{2} + \sum_{n=1}^m (a_n \cos nx + b_n \sin nx)
$$

将Fourier系数的公式 $a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(t) \cos nt dt$ 和 $b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(t) \sin nt dt$ 代入上式:

$$
\begin{aligned}
    S_m(x) &= \frac{1}{2\pi} \int_{-\pi}^{\pi} f(t) dt + \sum_{n=1}^m \left( \frac{\cos nx}{\pi} \int_{-\pi}^{\pi} f(t) \cos nt dt + \frac{\sin nx}{\pi} \int_{-\pi}^{\pi} f(t) \sin nt dt \right) \\
    &= \frac{1}{\pi} \int_{-\pi}^{\pi} f(t) \left( \frac{1}{2} + \sum_{n=1}^m (\cos nx \cos nt + \sin nx \sin nt) \right) dt \\
    &= \frac{1}{\pi} \int_{-\pi}^{\pi} f(t) \left( \frac{1}{2} + \sum_{n=1}^m \cos n(t-x) \right) dt
\end{aligned}
$$

其中，大括号内的和式被称为 **Dirichlet核 (Dirichlet Kernel)**，记为 $D_m(u)$ (此处 $u = t - x$):
$$
D_m(u) = \frac{1}{2} + \sum_{n=1}^m \cos nu
$$

利用三角恒等式对 $D_m(u)$ 进行求和，将两边同乘 $2\sin \frac{u}{2}$:
$$
\begin{aligned}
2 D_m(u) \sin \frac{u}{2} &= \sin \frac{u}{2} + \sum_{n=1}^m 2\cos nu \sin \frac{u}{2} \\
&= \sin \frac{u}{2} + \sum_{n=1}^m \left( \sin\left(n + \frac{1}{2}\right)u - \sin\left(n - \frac{1}{2}\right)u \right) \\
&= \sin \frac{u}{2} + \left( \sin \frac{3}{2}u - \sin \frac{1}{2}u \right) + \dots + \left( \sin\left(m + \frac{1}{2}\right)u - \sin\left(m - \frac{1}{2}\right)u \right) \\
&= \sin\left(m + \frac{1}{2}\right)u
\end{aligned}
$$
(这里利用了裂项相消)，因此得到:
$$
D_m(u) = \frac{\sin \left(m+\frac{1}{2}\right)u}{2 \sin \frac{u}{2}}
$$

将其代回 $S_m(x)$ 的表达式中，并利用变量代换 $u = t - x \Rightarrow t = x + u, dt = du$:

$$
\begin{aligned}
    S_m(x) &= \frac{1}{\pi} \int_{-\pi}^{\pi} f(t) \frac{\sin \left(m+\frac{1}{2}\right)(t-x)}{2 \sin \frac{t-x}{2}} dt \\
    &= \frac{1}{\pi} \int_{-\pi-x}^{\pi-x} f(x+u) \frac{\sin \left(m+\frac{1}{2}\right)u}{2 \sin \frac{u}{2}} du
\end{aligned}
$$

考虑到被积函数 $d(u) = f(x+u) D_m(u)$ 是以 $2\pi$ 为周期的函数，它在一个完整周期区间 $[-\pi-x, \pi-x]$ 上的积分等于在 $[-\pi, \pi]$ 上的积分。并且由于 $D_m(u)$ 是偶函数，我们可将积分区间拆分为 $[-\pi, 0]$ 和 $[0, \pi]$ 来推导 **Dirichlet积分**:

$$
\begin{aligned}
    S_m(x) &= \frac{1}{\pi} \int_{-\pi}^{\pi} f(x+t) \frac{\sin \left(m+\frac{1}{2}\right)t}{2 \sin \frac{t}{2}} dt \\
    &= \frac{1}{\pi} \left( \int_{-\pi}^0 f(x+t) D_m(t) dt + \int_0^\pi f(x+t) D_m(t) dt \right)
\end{aligned}
$$

在第一个积分中作代换 $t = -u$，利用 $D_m(-u) = D_m(u)$:
$$
\int_{-\pi}^0 f(x+t) D_m(t) dt = \int_{\pi}^0 f(x-u) D_m(-u) (-du) = \int_0^\pi f(x-u) D_m(u) du
$$

两部分合并，即可将部分和表示为：
$$
S_m(x) = \frac{1}{\pi} \int_0^\pi [f(x+t) + f(x-t)] \frac{\sin \left(m+\frac{1}{2}\right)t}{2 \sin \frac{t}{2}} dt
$$

为了研究极限定理，假设级数在 $x$ 处收敛到某个值 $\sigma(x)$。我们希望证明:
$$
\lim_{m \to +\infty} (S_m(x) - \sigma(x)) = 0
$$

注意到对 Dirichlet 核在 $[0, \pi]$ 上直接积分，根据其定义式有:
$$
\frac{1}{\pi} \int_0^\pi 2 D_m(t) dt = \frac{1}{\pi} \int_0^\pi \left( 1 + 2 \sum_{n=1}^m \cos nt \right) dt = \frac{1}{\pi} (\pi + 0) = 1
$$
我们可以在 $\sigma(x)$ 乘上这个恒为1的积分表达式：
$$
\sigma(x) = \sigma(x) \cdot 1 = \frac{1}{\pi} \int_0^\pi 2\sigma(x) \frac{\sin \left(m+\frac{1}{2}\right)t}{2 \sin \frac{t}{2}} dt
$$

将 $S_m(x)$ 和 $\sigma(x)$ 带有相同积分核的表达式相减，我们得到：
$$
S_m(x) - \sigma(x) = \frac{1}{\pi} \int_0^\pi [f(x+t) + f(x-t) - 2\sigma(x)] \frac{\sin \left(m+\frac{1}{2}\right)t}{2 \sin \frac{t}{2}} dt
$$

那么级数收敛 $\lim_{m \to +\infty} S_m(x) = \sigma(x)$，就等价于必须满足:
$$
\lim_{m \to +\infty} \int_0^\pi [f(x+t) + f(x-t) - 2\sigma(x)] \frac{\sin \left(m+\frac{1}{2}\right)t}{2 \sin \frac{t}{2}} dt = 0
$$

**Riemann-Lebesgue引理**: 设$f(x)$在$[a,b]$上可积, 则:
$$
\lim_{n \to +\infty} \int_a^b f(x) \sin nx dx = 0, \quad \lim_{n \to +\infty} \int_a^b f(x) \cos nx dx = 0
$$



---
