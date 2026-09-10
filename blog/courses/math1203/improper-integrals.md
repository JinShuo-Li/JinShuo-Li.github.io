---
title: "Improper integrals"
description: "Convergence and tests for improper integrals of the first and second kind."
order: 4
tags: [Mathematical Analysis, Integration]
---

在前面的章节中, 我们讨论了定积分的定义和性质. 然而, 在实际应用中, 我们经常会遇到一些函数在某些点上不满足有界性, 或者积分区间是无限的. 这些情况下, 我们需要引入广义积分的概念.

## 第一类广义积分的定义与审敛法

**定义**: 设 $f(x)$ 在区间 $[a, +\infty)$ 上有定义. 如果对于任意 $A > a$, $f(x)$ 在 $[a, A]$ 上可积, 并且极限:
$$
\lim_{A \to +\infty} \int_a^A f(x) dx
$$
存在(有限), 则称该极限为 $f(x)$ 在 $[a, +\infty)$ 上的广义积分, 广义积分收敛, 其积分值为:
$$
\int_a^{+\infty} f(x) dx = \lim_{A \to +\infty} \int_a^A f(x) dx
$$
对于区间 $(-\infty, b]$ 和 $(-\infty, +\infty)$ 上的广义积分, 定义类似:
$$
\int_{-\infty}^b f(x) dx = \lim_{A \to -\infty} \int_A^b f(x) dx
$$
$$
\int_{-\infty}^{+\infty} f(x) dx = \int_{-\infty}^c f(x) dx + \int_c^{+\infty} f(x) dx
$$
注意, 我们这里在计算 $(-\infty, +\infty)$ 上的广义积分时, 需要选择一个中间点 $c$ 将积分区间分成两个部分, 分别计算后再相加. 不能直接用下面的方法计算:
$$
\int_{-\infty}^{+\infty} f(x) dx = \lim_{A \to +\infty} \int_{-A}^{A} f(x) dx
$$
因为后者的存在并不意味着前者的存在. 极限的计算对于无穷大的选取是任意的, 如果我们发现改变无穷大的阶数和选取方式会影响极限的值, 那么我们就可以断定该广义积分发散. 反之, 如果无论如何选取无穷大, 极限值都相同, 那么我们就可以断定该广义积分收敛. 然而, 上面这种极限并非毫无价值, 它被称作**柯西主值 (Cauchy Principal Value)**, 在某些情形下具有重要的应用价值, 其定义为:
$$
\text{(cpv)} \int_{-\infty}^{+\infty} f(x) dx = \lim_{A \to +\infty} \int_{-A}^{A} f(x) dx
$$

显然有: 广义积分存在 $\Rightarrow$ 柯西主值存在, 反之不成立.

**定理**: 两个反常积分的和收敛当且仅当各自收敛. 证明略.

**定理**: 设 $f(x)$ 在 $[a, +\infty)$ 上有定义. 则 $f(x)$ 在 $[a, +\infty)$ 上的广义积分收敛的充分必要条件是: 对任意 $\epsilon > 0$, 存在 $\delta > 0$, 使得对于任意 $A', A'' > \delta$, 有:
$$
\left| \int_{A'}^{A''} f(x) dx \right| < \epsilon
$$
**证明**: 必要性: 设 $f(x)$ 在 $[a, +\infty)$ 上的广义积分收敛, 记其积分值为 $I$. 那么对于任意 $\epsilon > 0$, 存在 $\delta > 0$, 使得对于任意 $A > \delta$, 有:
$$
\left| \int_a^A f(x) dx - I \right| < \frac{\epsilon}{2}
$$
对于任意 $A', A'' > \delta$, 我们有:
$$
\left| \int_{A'}^{A''} f(x) dx \right| = \left| \int_a^{A''} f(x) dx - \int_a^{A'} f(x) dx \right| \leq \left| \int_a^{A''} f(x) dx - I \right| + \left| \int_a^{A'} f(x) dx - I \right| < \frac{\epsilon}{2} + \frac{\epsilon}{2} = \epsilon
$$
充分性: 设对于任意 $\epsilon > 0$, 存在 $\delta > 0$, 使得对于任意 $A', A'' > \delta$, 有:
$$
\left| \int_{A'}^{A''} f(x) dx \right| < \epsilon
$$
对于任意 $A > \delta$, 取 $A' = \delta, A'' = A$, 则有:
$$
\left| \int_{\delta}^{A} f(x) dx \right| < \epsilon
$$
因此, $\int_a^A f(x) dx$ 在 $A \to +\infty$ 时是柯西列, 故存在极限 $I$. 于是, $f(x)$ 在 $[a, +\infty)$ 上的广义积分收敛且积分值为 $I$. 证明完毕.

这一定理的叙述本质上是柯西收敛准则在广义积分情形下的应用. 我们在这里称之为**广义积分的柯西判别法**.

**定义**: 设$f(x)$在任意有限区间$[a,b]$上可积, 且$\int_a^{+\infty} |f(x)|dx$收敛, 则称$f(x)$在$[a,+\infty)$上**绝对可积**. 否则称为**条件可积**.

显然, 绝对可积$\Rightarrow$ 可积, 反之不成立.

### 非负函数第一类广义积分的审敛法

1. **比较审敛法**: 设$f(x)$和$g(x)$在$[a,+\infty)$上有定义, 且$0 \le f(x) \le K \cdot g(x)$. 则:

- 若$\int_a^{+\infty} g(x) dx$收敛, 则$\int_a^{+\infty} f(x) dx$收敛.
- 若$\int_a^{+\infty} f(x) dx$发散, 则$\int_a^{+\infty} g(x) dx$发散.

2. **极限比较审敛法**: 设$f(x)$和$g(x)$在$[a,+\infty)$上有定义, 且:

$$
\lim_{x \to +\infty} \frac{f(x)}{g(x)} = L, \quad 0 < L < +\infty
$$
- 若$\int_a^{+\infty} g(x) dx$收敛, 则$\int_a^{+\infty} f(x) dx$收敛.
- 若$\int_a^{+\infty} g(x) dx$发散, 则$\int_a^{+\infty} f(x) dx$发散.
  
注: 在这里我们允许$x=+\infty$的写法.

3. **Cauchy判别法**: 设在$[a, +\infty) \subset (0, +\infty)$ 上恒有$f(x) \ge 0$, 且 $K$ 为常数. 则:
- 若$f(x) \leq \frac{K}{x^p}$, 且$p>1$, 则$\int_a^{+\infty} f(x) dx$收敛.
- 若$f(x) \geq \frac{K}{x^p}$, 且$p \leq 1$, 则$\int_a^{+\infty} f(x) dx$发散.

4. **Cauchy判别法的极限形式**: 设在$[a, +\infty) \subset (0, +\infty)$ 上恒有$f(x) \ge 0$. 且:
$$
\lim_{x \to +\infty} f(x) x^p = L
$$
- 若$0 \leq L < +\infty$, 且$p>1$, 则$\int_a^{+\infty} f(x) dx$收敛.
- 若$0 < L \leq +\infty$, 且$p \leq 1$, 则$\int_a^{+\infty} f(x) dx$发散.

### 一般函数第一类广义积分的审敛法

**引理**: 第二积分中值定理: 设$f(x)$在$[a,b]$上可积, $g(x)$在$[a,b]$上单调, 则存在$\xi \in [a,b]$, 使得下式成立:
$$
\int_a^b f(x)g(x) dx = g(a) \int_a^{\xi} f(x) dx + g(b) \int_{\xi}^b f(x) dx
$$

证明: 我们这里仅对$f(x)$在$[a,b]$上连续, g(x)在$[a,b]$上单调$, $g'(x)$在定义域上可积的情形进行证明, 其他情形的证明类似.

对于$\int_a^b f(x)g(x) dx$，先进行分部积分, 然后运用第一积分中值定理, 记:

$$
F(x) = \int_a^x f(t) dt
$$

$$
\int_a^b f(x)g(x) dx = \int_a^b g(x) dF(x) = g(b)\int_a^bf(x)dx - \int_a^b F(x) g'(x) dx
$$

$$
= g(b)\int_a^bf(x)dx - [g(b)-g(a)]\int_a^{\xi} f(x) dx
$$

$$
= g(a)\int_a^{\xi} f(x) dx + g(b)\int_{\xi}^b f(x) dx
$$

**Abel判别法**: 设$f(x)$在$[a,+\infty)$上可积, 且$\int_a^{+\infty} f(x) dx$收敛. $g(x)$在$[a,+\infty)$上单调且有界, 则$\int_a^{+\infty} f(x)g(x) dx$收敛.

证明: 运用第二积分中值定理, 对任意$A > a$, 存在$\xi \in [a,A]$, 使得:
$$
\int_a^A f(x)g(x) dx = g(a) \int_a^{\xi} f(x) dx + g(A) \int_{\xi}^A f(x) dx
$$
由于$\int_a^{+\infty} f(x) dx$收敛, 故对于任意$\epsilon > 0$, 存在$\delta > 0$, 使得对于任意$A', A'' > \delta$, 有:
$$
\left| \int_{A'}^{A''} f(x) dx \right|
    < \epsilon
$$
又由于$g(x)$在$[a,+\infty)$上有界,
故存在常数$K$, 使得对于任意$x \in [a,+\infty)$, 有$|g(x)| \le K$. 于是, 对于任意$A', A'' > \delta$, 我们有:
$$
\left| \int_{A'}^{A''} f(x)g(x) dx \right| \leq |g(a)| \left| \int_{A'}^{\xi} f(x) dx \right| + |g(A'')| \left| \int_{\xi}^{A''} f(x) dx \right| < (|g(a)| + K) \epsilon
$$
由广义积分的柯西判别法, 可知$\int_a^{+\infty} f(x)g(x) dx$收敛. 证明完毕.

**Dirichlet判别法**: 设$f(x)$在$[a,+\infty)$上连续, 且对于任意$A > a$, $\left| \int_a^A f(x) dx \right| \le K$, $g(x)$在$[a,+\infty)$上单调且$\lim_{x \to +\infty} g(x) = 0$, 则$\int_a^{+\infty} f(x)g(x) dx$收敛.

证明: 运用第二积分中值定理, 对任意$A > a$, 存在$\xi \in [a,A]$, 使得:
$$
\int_a^A f(x)g(x) dx = g(a) \int_a^{\xi} f(x) dx + g(A) \int_{\xi}^A f(x) dx
$$
由于对于任意$A > a$, $\left| \int_a^A f(x) dx \right| \le K$, 故对于任意$A', A'' > a$, 我们有:
$$
\left| \int_{A'}^{A''} f(x)g(x) dx \right| \leq |g(a)| \left| \int_{A'}^{\xi} f(x) dx \right| + |g(A'')| \left| \int_{\xi}^{A''} f(x) dx \right| \leq |g(a)| \cdot 2K + |g(A'')| \cdot 2K
$$
由于$\lim_{x \to +\infty} g(x) = 0$, 故对于任意$\epsilon > 0$, 存在$\delta > 0$, 使得对于任意$A'' > \delta$, 有$|g(A'')| < \frac{\epsilon}{2K}$. 于是, 对于任意$A', A'' > \delta$, 我们有:
$$
\left| \int_{A'}^{A''} f(x)g(x) dx \right| < |g(a)| \cdot 2K + \frac{\epsilon}{2K} \cdot 2K = |g(a)| \cdot 2K + \epsilon \leq \epsilon'
$$
由广义积分的柯西判别法, 可知$\int_a^{+\infty} f(x)g(x) dx$收敛. 证明完毕.

上述两类积分判别法统称为**Dirichlet-Abel判别法**.

## 第二类广义积分的定义与审敛法
**定义**: 设 $f(x)$ 在区间 $(a, b]$ 上有定义. 如果对于任意 $A \in (a, b]$, $f(x)$ 在 $[A, b]$ 上可积, 并且极限:
$$
\lim_{\epsilon \to 0^+} \int_{a+\epsilon}^b f(x) dx
$$
存在(有限), 则称该极限为 $f(x)$ 在 $(a, b]$ 上的广义积分, 广义积分收敛, 其积分值为:
$$
\int_a^b f(x) dx = \lim_{\epsilon \to 0^+} \int_{a+\epsilon}^b f(x) dx
$$

对于区间 $[a, b)$ 上的广义积分, 定义类似.

类似于第一类广义积分, 第二类广义积分也有对应的柯西主值的概念:
$$
\text{(cpv)} \int_a^b f(x) dx = \lim_{\epsilon \to 0^+} \int_{a+\epsilon}^{b-\epsilon} f(x) dx
$$
显然有: 广义积分存在 $\Rightarrow$ 柯西主值存在, 反之不成立.

**定理**: 两个反常积分的和收敛当且仅当各自收敛. 证明略.

**定理**: 设 $f(x)$ 在 $(a, b]$ 上有定义. 则 $f(x)$ 在 $(a, b]$ 上的广义积分收敛的充分必要条件是: 对任意 $\epsilon > 0$, 存在 $\delta > 0$, 使得对于任意 $0 < \epsilon', \epsilon'' < \delta$, 有:
$$
\left| \int_{a+\epsilon'}^{a+\epsilon''} f(x) dx \right| < \epsilon
$$
**证明**: 

必要性: 设 $f(x)$ 在 $(a, b]$ 上的广义积分收敛, 记其积分值为 $I$. 那么对于任意 $\epsilon > 0$, 存在 $\delta > 0$, 使得对于任意 $0 < \epsilon < \delta$, 有:
$$
\left| \int_{a+\epsilon}^b f(x) dx - I \right| < \frac{\epsilon}{2}
$$

对于任意 $0 < \epsilon', \epsilon'' < \delta$, 我们有:
$$
\left| \int_{a+\epsilon'}^{a+\epsilon''} f(x) dx \right| = \left| \int_{a+\epsilon''}^b f(x) dx - \int_{a+\epsilon'}^b f(x) dx \right| \leq \left| \int_{a+\epsilon''}^b f(x) dx - I \right| + \left| \int_{a+\epsilon'}^b f(x) dx - I \right| < \frac{\epsilon}{2} + \frac{\epsilon}{2} = \epsilon
$$
充分性: 设对于任意 $\epsilon > 0$, 存在 $\delta > 0$, 使得对于任意 $0 < \epsilon', \epsilon'' < \delta$, 有:
$$
\left| \int_{a+\epsilon'}^{a+\epsilon''} f(x) dx \right| < \epsilon
$$
对于任意 $0 < \epsilon < \delta$, 取 $\epsilon' = \delta, \epsilon'' = \epsilon$, 则有:
$$
\left| \int_{a+\delta}^{a+\epsilon} f(x) dx \right| < \epsilon
$$
因此, $\int_{a+\epsilon}^b f(x) dx$ 在 $\epsilon \to 0^+$ 时是柯西列, 故存在极限 $I$. 于是, $f(x)$ 在 $(a, b]$ 上的广义积分收敛且积分值为 $I$. 证明完毕.

这一定理的叙述本质上是柯西收敛准则在广义积分情形下的应用. 我们在这里称之为**广义积分的柯西判别法**.

### 非负函数第二类广义积分的审敛法

1. **比较审敛法**: 设$f(x)$和$g(x)$在$(a,b]$上有定义, 且$0 \le f(x) \le K \cdot g(x)$. 则:
- 若$\int_a^{b} g(x) dx$收敛, 则$\int_a^{b} f(x) dx$收敛.
- 若$\int_a^{b} f(x) dx$发散, 则$\int_a^{b} g(x) dx$发散.
  
2. **极限比较审敛法**: 设$f(x)$和$g(x)$在$(a,b]$上有定义, 且:
$$
\lim_{x \to a^+} \frac{f(x)}{g(x)} = L, \quad 0 < L < +\infty
$$
- 若$\int_a^{b} g(x) dx$收敛, 则$\int_a^{b} f(x) dx$收敛.
- 若$\int_a^{b} g(x) dx$发散, 则$\int_a^{b} f(x) dx$发散.

3. **Cauchy判别法**: 设在$(a, b] \subset (0, +\infty)$ 上恒有$f(x) \ge 0$, 且 $K$ 为常数. 则:
- 若$f(x) \leq \frac{K}{(x-a)^p}$, 且$p<1$, 则$\int_a^{b} f(x) dx$收敛.
- 若$f(x) \geq \frac{K}{(x-a)^p}$, 且$p \geq 1$, 则$\int_a^{b} f(x) dx$发散.

4. **Cauchy判别法的极限形式**: 设在$(a, b] \subset (0, +\infty)$ 上恒有$f(x) \ge 0$. 且:
$$
\lim_{x \to a^+} f(x) (x-a)^p = L
$$
- 若$0 \leq L < +\infty$, 且$p<1$, 则$\int_a^{b} f(x) dx$收敛.
- 若$0 < L \leq +\infty$, 且$p \geq 1$, 则$\int_a^{b} f(x) dx$发散.

### 一般函数第二类广义积分的审敛法

**Abel判别法**: 设$f(x)$在$(a,b]$上可积, 且$\int_a^{b} f(x) dx$收敛. $g(x)$在$(a,b]$上单调且有界, 则$\int_a^{b} f(x)g(x) dx$收敛. 证明从略.

**Dirichlet判别法**: 设$f(x)$在$(a,b]$上连续, 且对于任意$A \in (a,b]$, $\left| \int_A^b f(x) dx \right| \le K$, $g(x)$在$(a,b]$上单调且$\lim_{x \to a^+} g(x) = 0$, 则$\int_a^{b} f(x)g(x) dx$收敛. 证明从略.

上述两类积分判别法统称为**Dirichlet-Abel判别法**.
