---
title: "Rearrangements and infinite products"
description: "Rearrangements of series, absolute and conditional convergence, and infinite products."
order: 6
tags: [Mathematical Analysis, Series]
---

**定义**: 我们给出$x_n^+$和$x_n^-$的定义:

1. $x_n^+ = \begin{cases} x_n, & x_n > 0 \\ 0, & x_n \leq 0 \end{cases}$
2. $x_n^- = \begin{cases} -x_n, & x_n < 0 \\ 0, & x_n \geq 0 \end{cases}$

则有$x_n = x_n^+ - x_n^-$且$|x_n| = x_n^+ + x_n^-$. 由此, 我们可以将任意级数$\sum_{n=1}^{\infty} x_n$拆分为两个正项级数$\sum_{n=1}^{\infty} x_n^+$和$\sum_{n=1}^{\infty} x_n^-$.

**定理**: 级数$\sum_{n=1}^{\infty} x_n$绝对收敛的充分必要条件是级数$\sum_{n=1}^{\infty} x_n^+$和$\sum_{n=1}^{\infty} x_n^-$均收敛.

**定理**: 若级数$\sum_{n=1}^{\infty} x_n$条件收敛, 则$\{x_n^+\}$和$\{x_n^-\}$均发散到$+\infty$.

**定义**: 更序列: 设$\sum_{n=1}^{\infty} x_n$为级数, 若存在一个双射$\pi: \mathbb{N} \to \mathbb{N}$, 使得级数$\sum_{n=1}^{\infty} x_{\pi(n)}$收敛, 则称级数$\sum_{n=1}^{\infty} x_{\pi(n)}$为级数$\sum_{n=1}^{\infty} x_n$的一个**重排**.

**定理**: 设级数$\sum_{n=1}^{\infty} x_n$绝对收敛, 则对于任意重排$\sum_{n=1}^{\infty} x_{\pi(n)}$, 都有:
$$
\sum_{n=1}^{\infty} x_{\pi(n)} = \sum_{n=1}^{\infty} x_n
$$

**定理(Riemann重排定理)**: 设级数$\sum_{n=1}^{\infty} x_n$条件收敛, 则对于任意$S \in \mathbb{R} \cup \{+\infty, -\infty\}$, 都存在级数$\sum_{n=1}^{\infty} x_{\pi(n)}$, 使得:
$$
\sum_{n=1}^{\infty} x_{\pi(n)} = S
$$

本定理的证明略, 可参考相关教材.

期末考试内容截止于此. 这部分内容除了正常的不定积分和黎曼积分外, 重点是对**无穷**的认知. 需要建立一个足够严谨的直觉, 来理解无穷小和无穷大的概念, 以及它们在极限、连续、导数、积分和级数中的应用.

**级数的乘法**: 设$\sum_{n=0}^{\infty} a_n$和$\sum_{n=0}^{\infty} b_n$为两个级数, 则它们的乘积定义为:
$$
\left( \sum_{n=0}^{\infty} a_n \right) \left( \sum_{n=0}^{\infty} b_n \right) = \sum_{n=0}^{\infty} c_n
$$

这一定义的本质, 就是下面这个矩阵中所有元素的和:

$$
\begin{pmatrix}
    a_1 b_1 & a_1 b_2 & a_1 b_3 & a_1 b_4 & \cdots \\
    a_2 b_1 & a_2 b_2 & a_2 b_3 & a_2 b_4 & \cdots \\
    a_3 b_1 & a_3 b_2 & a_3 b_3 & a_3 b_4 & \cdots \\
    a_4 b_1 & a_4 b_2 & a_4 b_3 & a_4 b_4 & \cdots \\
    \vdots   & \vdots   & \vdots   & \vdots   & \ddots
\end{pmatrix}
$$

我们知道, 对于两个有限部分和的乘积, 他们最终的结果与相加的次序没有关联, 那么对于无穷级数的乘积, 他们的结果是否也与相加的次序无关呢? 非常不幸, 它们的结果不一定与顺序无关. 我们需要规定一种或者几种相加的次序, 这里我们采用**对角线相加法**:

$$
\sum_{i=1}^{\infty} a_i \cdot \sum_{j=1}^{\infty} b_j = \sum_{n=2}^{\infty} \sum_{k=1}^{n-1} a_k b_{n-k} = a_1 b_1 + (a_1 b_2 + a_2 b_1) + (a_1 b_3 + a_2 b_2 + a_3 b_1) + \cdots
$$

这种乘积也叫做**Cauchy乘积**.

另一种常见的乘积方式定义如下:

$$
\sum_{i=1}^{\infty} a_i \cdot \sum_{j=1}^{\infty} b_j = \sum_{n=1}^{\infty} \left(\sum_{i=1}^{n}(a_i b_n+ a_n b_i) - a_n b_n \right)
$$

这种乘积被称为**正方形乘积**.

**定理**: 只要级数$\sum_{n=0}^{\infty} a_n$和$\sum_{n=0}^{\infty} b_n$收敛, 则他们的正方形乘积收敛.

然而Cauchy乘积并不一定满足上述的性质, 下面给出一个反例:

**反例**: 设$a_n = b_n = \frac{(-1)^{n+1}}{\sqrt{n}}$, 则级数$\sum_{n=1}^{\infty} a_n$和$\sum_{n=1}^{\infty} b_n$均收敛(根据莱布尼茨判别法). 但是他们的Cauchy乘积的一般项为:

$$
c_n = (-1)^{n+1} \sum_{i+j= n+1} \frac{1}{\sqrt{ij}} \geq (-1)^{n+1} \sum_{i+j=n+1} \frac{2}{i+j} = (-1)^{n+1} \sum_{i+j=n+1} \frac{2}{n+1} = (-1)^{n+1} n \cdot \frac{2}{n+1}
$$

由于通项不趋近于0, 必然发散.

**定理**: 设级数$\sum_{n=0}^{\infty} a_n$和$\sum_{n=0}^{\infty} b_n$绝对收敛, 则他们的Cauchy乘积和正方形乘积(甚至任意方式进行加法)均绝对收敛, 且乘积均等于:

$$
\left( \sum_{n=0}^{\infty} a_n \right) \left( \sum_{n=0}^{\infty} b_n \right) 
$$

证明: 设$a_{i_k} b_{j_k}$是所有$a_i b_j$的一个排列, 则有对任意的$n$, 取:

$$
N = \max_{1 \leq k \leq n} \{i_k, j_k\}
$$

$$
\sum_{k=1}^n |a_{i_k} b_{j_k}| \leq \sum_{i=1}^N \sum_{j=1}^N |a_i b_j| = \left( \sum_{i=1}^N |a_i| \right) \left( \sum_{j=1}^N |b_j| \right) \leq \left( \sum_{i=1}^{\infty} |a_i| \right) \left( \sum_{j=1}^{\infty} |b_j| \right)
$$

因为$\sum_{i=1}^{\infty} |a_i|$和$\sum_{j=1}^{\infty} |b_j|$均收敛, 故存在常数$M > 0$, 使得对于任意$n \in \mathbb{N}$, 有:
$$
\sum_{k=1}^n |a_{i_k} b_{j_k}| \leq M
$$

所以任意排列的部分乘积序列的绝对值一定单增有上界, 必然绝对收敛. 证明完毕.

由d'Alembert比值判别法, 我们可以得到下面这个定理:

**定理**: 对任意$x \in \mathbb{R}$, 我们一定有:
$$
T = \sum_{n=0}^{\infty} \frac{x^n}{n!}
$$
这个级数$T$必然收敛. 且根据后面的知识我们可以知道, 这个级数的和就是$e^x$.

证明: 我们采用Cauchy乘积, 由于其绝对收敛, 我们可以得到:

$$
\left( \sum_{n=1}^{\infty} \frac{x^n}{n!} \right) \left( \sum_{n=1}^{\infty} \frac{y^n}{n!} \right) = \sum_{n=0}^{\infty} \sum_{k=0}^{n} \frac{x^k}{k!} \cdot \frac{y^{n-k}}{(n-k)!} = \sum_{n=0}^{\infty} \frac{(x+y)^n}{n!}
$$

也就是$f(x+y) = f(x)f(y)$, 满足这个式子的只有$f(x) = e^x$. 所以收敛.

### 无穷乘积

**定义**: 设$\{p_n\}$为无穷可列个非零实数, 我们称他们的积:

$$
p_1 \cdot p_2 \cdot p_3 \cdots p_n \cdots = \prod_{n=1}^{\infty} p_n
$$

为无穷乘积, $p_n$称为通项, 我们可以类似的定义部分积$\{P_n\}$:

$$
P_n = p_1 \cdot p_2 \cdot p_3 \cdots p_n = \prod_{k=1}^{n} p_k
$$

若部分积数列$\{P_n\}$收敛于一个非零的有限数$P$(**也就是说如果收敛到$0$, 我们称此数列发散**), 则称无穷乘积$\prod_{n=1}^{\infty} p_n$收敛, 且其积为:
$$
\prod_{n=1}^{\infty} p_n = \lim_{n \to \infty} P_n = P
$$

否则称无穷乘积$\prod_{n=1}^{\infty} p_n$发散(包括收敛到$0$的情况).

**定理**: 无穷乘积收敛的必要条件如下:

$$
\lim_{n \to \infty} p_n = 1 \quad \quad
$$

$$
\lim_{n\to \infty} \prod_{k=n+1}^{\infty} p_k = 1
$$

这个判别法和级数和的定义类似.

证明: 我们永远可以写出这个表达式: 取极限即可.

$$
\lim_{k \to \infty} p_k = \lim_{k \to \infty}\frac{\prod_{n=1}^k p_n}{\prod_{n=1}^{k-1} p_n} =\lim_{k \to \infty} \frac{P_k}{P_{k-1}} = 1
$$

第二个必要条件的证法类似, 这里不再赘述.

**提示**: 我们经常把$p_n = 1+ a_n$, 这个表达式更利于分析问题.

显然我们可以得到:$\prod_{n=1}^{\infty} (1+a_n)$收敛的必要条件是: $\lim_{n \to \infty} a_n = 0$

例: 设$p_n = 1 - \frac{1}{(2n)^2}$, 判断无穷乘积的敛散性.

$$
P_n = \prod_{k=1}^n[1-\frac{1}{(2k)^2}] = \prod_{k=1}^n \frac{(2k-1)(2k+1)}{2k \cdot 2k} = \frac{1 \cdot 3 \cdot 3 \cdot 5 \cdots (2n-1)(2n+1)}{2 \cdot 2 \cdot 4 \cdot 4 \cdots (2n)(2n)}
$$

$$
\therefore P_n =\frac{(2n-1)!!}{(2n)!!}(2n+1)!! = \frac{2}{\pi} \frac{I_{2n}}{I_{2n+1}} 
$$

其中, $I_n = \int_0^{\frac{\pi}{2}} \sin^n x dx$, 因为$I_{2n+1} < I_{2n} <I_{2n-1}$:

$$
1 < \frac{I_{2n}}{I_{2n+1}} < \frac{I_{2n-1}}{I_{2n+1}} = \frac{2n+1}{2n}
\therefore \lim_{n \to \infty} P_n = \frac{2}{\pi}
$$

**Wallice**公式: 设$p_n = \frac{(2n)^2}{(2n-1)(2n+1)}$, 则无穷乘积:
$$
\prod_{n=1}^{\infty} \frac{(2n)^2}{(2n-1)(2n+1)} = \frac{\pi}{2}
$$
$$
\frac{2 \cdot 2 \cdot 4 \cdot 4 \cdots (2n) \cdot (2n)}{1 \cdot 3 \cdot 3 \cdot 5 \cdots (2n-1)(2n+1)} = \frac{\pi}{2}
$$

例: 设$p_n = \cos \frac{x}{2^n}$

$$
\sin x = 2 \cos \frac{x}{2} \sin \frac{x}{2} = 2^2 \cos \frac{x}{2} \cos \frac{x}{2^2} \sin \frac{x}{2^2} = \cdots = 2^n \left( \prod_{k=1}^n \cos \frac{x}{2^k} \right) \sin \frac{x}{2^n}
$$

$$
P_n = \prod_{k=1}^n \cos \frac{x}{2^k} = \frac{\sin x}{2^n \sin \frac{x}{2^n}}
$$

$$
\therefore \lim_{n \to \infty} P_n =\lim_{n \to \infty} \frac{\sin x}{2^n \sin \frac{x}{2^n}} =\lim_{n \to \infty} \frac{\sin x}{x} = 1
$$

**Viete**公式: 设$p_n = \cos \frac{\pi}{2^{n+1}}$, 对上式, 令$x = \frac{\pi}{2}$, 则无穷乘积:
$$
\prod_{n=1}^{\infty} \cos \frac{\pi}{2^{n+1}} = \frac{2}{\pi}
$$

**定理**: 设$p_n = 1 - a_n$, 且$a_n \geq 0$, 则无穷乘积$\prod_{n=1}^{\infty} p_n$收敛的充分必要条件是级数$\sum_{n=1}^{\infty} a_n$收敛. 这个转化的过程就是在无穷乘积等式两侧取对数.

**证明**: 设$P_n = \prod_{k=1}^{n} p_k$, 则有:
$$
\ln P_n = \ln \left( \prod_{k=1}^{n} p_k \right) = \sum_{k=1}^{n} \ln p_k
$$

**推论**: 设$p_n = 1 + a_n$, 且$a_n$不变号, 则无穷乘积$\prod_{n=1}^{\infty} p_n$收敛的充分必要条件是级数$\sum_{n=1}^{\infty} a_n$收敛. 本推论的证明略.

**推论**: 设$p_n = 1 + a_n$, 若$\sum_{n=1}^{\infty}a_n$收敛, 那么无穷乘积$\prod_{n=1}^{\infty} p_n$收敛的充分必要条件是$\sum_{n=1}^{\infty}a_n^2$收敛. 下面给出本推论的证明:

**证明**: 设$P_n = \prod_{k=1}^{n} p_k$, 则有:
$$
\ln P_n = \ln \left( \prod_{k=1}^{n} p_k \right) = \sum_{k=1}^{n} \ln (1 + a_k)
$$
由于$\sum_{n=1}^{\infty} a_n$收敛, 故$a_n \to 0$. 因此, 对于充分大的$n$, 有:
$$
\ln (1 + a_n) = a_n - \frac{a_n^2}{2} + o(a_n^2)
$$
因此, 当$n$充分大时, 有:
$$
\ln P_n = \sum_{k=1}^{n} \left( a_k - \frac{a_k^2}{2} + o(a_k^2) \right) = \sum_{k=1}^{n} a_k - \frac{1}{2} \sum_{k=1}^{n} a_k^2 + \sum_{k=1}^{n} o(a_k^2)
$$
由于$\sum_{n=1}^{\infty} a_n$收敛, 故$\sum_{n=1}^{\infty} o(a_n^2)$也收敛. 因此, 无穷乘积$\prod_{n=1}^{\infty} p_n$收敛的充分必要条件是级数$\sum_{n=1}^{\infty} a_n^2$收敛. 证明完毕.

**注意**: 我们要求$\sum_{k=1}^{\infty} a_n^2$收敛, 而不是$\sum_{k=1}^{\infty} a_n$收敛, 因为这样可以推出$a_n^k$均收敛, 进而保证对数级数的收敛性.

**绝对收敛**: 当级数$\sum_{n=1}^{\infty} |a_n|$收敛时, 称级数$\prod_{n=1}^{\infty} p_n$**绝对收敛**; 否则称为**条件收敛**.

绝对数列的无穷乘积具有交换性, 任意重排后的无穷乘积均收敛且等于原无穷乘积的值. 而收敛但是不绝对收敛的无穷乘积则不具有交换性, 任意重排后的无穷乘积可能收敛到不同的值, 甚至发散.

**定理**: 若$a_n > -1$, 下面三个定理等价:
- $\prod_{n=1}^{\infty} (1+a_n)$绝对收敛.
- $\prod_{n=1}^{\infty} (1+|a_n|)$收敛.
- $\sum_{n=1}^{\infty} a_n$收敛.

**Stirling公式**: 当$n \to \infty$, 有近似公式:

$$
n! \sim \sqrt{2 \pi n} \left( \frac{n}{e} \right)^n \quad n \to \infty 
$$

证明提示: 设$p_n = \frac{(n+1)! e^{n+1}}{(n+1)^{n+1} n! e^n} = \frac{e}{(1 + \frac{1}{n})^{n+1}}$

至此, 课程MATH1203数学分析I的内容全部结束. 


$$
F(x) = \int_0^{x^3} t^3 \sin t dt - x^3 \int_0^x t^3 \sin t dt
$$

$$
\begin{aligned}
    \frac{d}{dx}F(x) &= \frac{d}{dx} \int_0^{x^3} t^3 \sin t dt - \frac{d}{dx} \left( x^3 \int_0^{x^3} t^3 \sin t dt \right) \\
    &= 3x^2 \cdot (x^3)^3 \sin (x^3) - 3x^2 \int_0^{x^3} \sin t dt - 3x^2 \cdot x^3 \sin x \\
    &= 3x^5(x^6-1) \sin (x^3) - 3x^2 \int_0^{x^3} \sin t dt \\
    &= 3x^5(x^6-1) \sin (x^3) - 3x^2 \cdot (-\cos x^3 + 1) \\
    &= 3x^5(x^6-1) \sin (x^3) + 3x^2 \cos x^3 - 3x^2
\end{aligned}
$$
