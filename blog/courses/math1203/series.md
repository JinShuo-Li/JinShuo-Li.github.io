---
title: "Series and convergence tests"
description: "Numerical series: basic concepts, upper and lower limits, and convergence tests."
order: 5
tags: [Mathematical Analysis, Series]
---

## 数项级数

### 基本概念与性质

**定义**: 设$x_1, x_2, \cdots, x_n, \cdots$为一无穷可列个实数, 我们定义$\{x_n\}$为数列的**通项**.

数列的部分和序列为:
$$
S_n = x_1 + x_2 + \cdots + x_n
$$

无穷项级数(简称级数)定义为:
$$
S= x_1 + x_2 + \cdots + x_n + \cdots = \sum_{n=1}^{\infty} x_n
$$

若数列$\{S_n\}$收敛, 则称级数$S$收敛, 且其和为:
$$
S = \lim_{n \to \infty} S_n
$$
否则称级数$S$发散. 这就是相关概念的定义

**定理**: 级数$\sum_{n=1}^{\infty} x_n$收敛的必要条件是: $\lim_{n \to \infty} x_n = 0$.

本定理显然, 这里不予证明.

下面列举几种常见的级数:

1. **几何级数**: 形如$\sum_{n=0}^{\infty} ar^n$的级数, 其中$a$和$r$为常数. 当$|r| < 1$时, 该级数收敛, 且其和为:
$$
S = \frac{a}{1-r}
$$
2. **调和级数**: 形如$\sum_{n=1}^{\infty} \frac{1}{n}$的级数. 该级数发散.
3. **p级数**: 形如$\sum_{n=1}^{\infty} \frac{1}{n^p}$的级数, 其中$p$为常数.
   
   当$p > 1$时, 该级数收敛; 当$p \leq 1$时, 该级数发散.

**性质**: 下面列举无穷级数的几个性质:
- 若级数$\sum_{n=1}^{\infty} x_n$收敛, 则其任意加括号的级数也收敛, 且级数和相等.
- 若级数$\sum_{n=1}^{\infty} x_n$收敛, 则其任意有限项被去掉后的级数也收敛.
- 线性性质: 若级数$\sum_{n=1}^{\infty} x_n$和$\sum_{n=1}^{\infty} y_n$均收敛, 则对于任意常数$a$和$b$, 级数$\sum_{n=1}^{\infty} (a x_n + b y_n)$也收敛, 且有:
$$
\sum_{n=1}^{\infty} (a x_n + b y_n) = a \sum_{n=1}^{\infty} x_n + b \sum_{n=1}^{\infty} y_n
$$

### 上下极限

研究级数敛散性需要借助数列的敛散性, 但是有些数列并不收敛, 这时我们可以借助数列的上下极限来研究数列的性质.

先考虑有界数列的情形:

**定义**: 设$\{x_n\}$为有界数列, 若在这个数列中存在一个子列$\{x_{n_k}\}$, 使得:
$$
\lim_{k \to \infty} x_{n_k} = \xi
$$
则称$\xi$为数列$\{x_n\}$的一个**极限点**.

记$E$为数列$\{x_n\}$的全部极限点所组成的集合, 则E是一个非空有界集合.

**定理**: $E$的上确界$H$和下确界$h$都在集合$E$中, 即存在数列的子列$\{x_{n_k}\}$和$\{x_{m_k}\}$, 使得:
$$
\lim_{k \to \infty} x_{n_k} = H, \quad \lim_{k \to \infty} x_{m_k} = h
$$

**定义**: 数列$\{x_n\}$的上极限和下极限分别定义为:
$$
\overline{\lim_{n \to \infty}} x_n = H, \quad \underline{\lim_{n \to \infty}} x_n = h
$$
其中$H$和$h$分别为数列$\{x_n\}$的极限点集合的上确界和下确界.

**定理**: 设$\{x_n\}$为有界数列, 则数列收敛的充分必要条件是:
$$
\overline{\lim_{n \to \infty}} x_n = \underline{\lim_{n \to \infty}} x_n
$$

我们可以从这个定义出发定义无界数列的上下极限:

**定义**: 设$\{x_n\}$为数列, 若存在一个子列$\{x_{n_k}\}$, 使得:
$$
\lim_{k \to \infty} x_{n_k} = \xi, \quad \xi \in \mathbb{R} \cup \{+\infty, -\infty\}
$$
则称$\xi$为数列$\{x_n\}$的一个**极限点**.

记$E$为数列$\{x_n\}$的全部极限点所组成的集合, 则E是一个非空集合.

**定义**: 数列$\{x_n\}$的上极限和下极限分别定义为:
$$
\overline{\lim_{n \to \infty}} x_n = \sup E, \quad \underline{\lim_{n \to \infty}} x_n = \inf E
$$
其中$\sup E$和$\inf E$分别为数列$\{x_n\}$的极限点集合的上确界和下确界. 当$\sup E = +\infty$或$\inf E = -\infty$时, 我们约定$\overline{\lim_{n \to \infty}} x_n = +\infty$或$\underline{\lim_{n \to \infty}} x_n = -\infty$.

上下极限的运算和普通代数运算有所不同:

- 加法: 设$\{x_n\}$和$\{y_n\}$为数列, 则有:
$$
\overline{\lim_{n \to \infty}} (x_n + y_n) \leq \overline{\lim_{n \to \infty}} x_n + \overline{\lim_{n \to \infty}} y_n
$$
$$
\underline{\lim_{n \to \infty}} (x_n + y_n) \geq \underline{\lim_{n \to \infty}} x_n + \underline{\lim_{n \to \infty}} y_n
$$
- 乘法: 设$\{x_n\}$和$\{y_n\}$为数列, 则有:
$$
\overline{\lim_{n \to \infty}} (x_n y_n) \leq \overline{\lim_{n \to \infty}} x_n \cdot \overline{\lim_{n \to \infty}} y_n
$$
$$
\underline{\lim_{n \to \infty}} (x_n y_n) \geq \underline{\lim_{n \to \infty}} x_n \cdot \underline{\lim_{n \to \infty}} y_n
$$

注意, 上述四个式子在$x_n$和$y_n$有一者收敛时取等.

其证明可以通过下面这个结论完成:

**定理**: 设$\{x_n\}$为数列, 则$\overline{\lim_{n \to \infty}} x_n = H$的充分必要条件为:
- 对任意$\epsilon > 0$, 存在$N_1$, 当$n > N_1$时, 有$x_n < H + \epsilon$;
- 对任意$\epsilon > 0$, $\{x_n\}$中有无穷多项,  $x_n > H - \epsilon$.

### 正项级数的审敛法

**定义**: 设$\{a_n\}$为非负数列, 则级数$\sum_{n=1}^{\infty} a_n$称为**正项级数**.

根据单增数列必有上界, 我们可以立即得到下面的定理:

**定理**: 正项级数$\sum_{n=1}^{\infty} a_n$收敛的充分必要条件是其部分和序列$\{S_n\}$有上界.

下面给出正项级数的几种常用审敛法:

1. 比较审敛法: 设$\{a_n\}$和$\{b_n\}$为非负数列, 且存在常数$K > 0$, 使得对于任意$n \in \mathbb{N}$, 有$a_n \leq K b_n$. 则:
- 若级数$\sum_{n=1}^{\infty} b_n$收敛, 则级数$\sum_{n=1}^{\infty} a_n$收敛.
- 若级数$\sum_{n=1}^{\infty} a_n$发散, 则级数$\sum_{n=1}^{\infty} b_n$发散.
  
2. 极限比较审敛法: 设$\{a_n\}$和$\{b_n\}$为非负数列, 且:
   $$
   \lim_{n \to \infty} \frac{a_n}{b_n} = L, \quad 0 \leq L \leq +\infty
   $$
   - 若$0 < L < +\infty$, 则级数$\sum_{n=1}^{\infty} a_n$和$\sum_{n=1}^{\infty} b_n$同敛散.
   - 若$L = 0$, 且级数$\sum_{n=1}^{\infty} b_n$收敛, 则级数$\sum_{n=1}^{\infty} a_n$收敛.
   - 若$L = +\infty$, 且级数$\sum_{n=1}^{\infty} b_n$发散, 则级数$\sum_{n=1}^{\infty} a_n$发散.

3. $p$-级数判别法: 设$\{a_n\}$为非负数列, 且$K$为常数. 则:
   - 若$a_n \leq \frac{K}{n^p}$, 且$p>1$, 则级数$\sum_{n=1}^{\infty} a_n$收敛.
   - 若$a_n \geq \frac{K}{n^p}$, 且$p \leq 1$, 则级数$\sum_{n=1}^{\infty} a_n$发散.

4. Cauchy根值判别法: 设$\{a_n\}$为非负数列, 则:
   - 若$\lim_{n \to \infty} \sqrt[n]{a_n} = L < 1$, 则级数$\sum_{n=1}^{\infty} a_n$收敛.
   - 若$\lim_{n \to \infty} \sqrt[n]{a_n} = L > 1$, 则级数$\sum_{n=1}^{\infty} a_n$发散.
   - 若$\lim_{n \to \infty} \sqrt[n]{a_n} = 1$, 则该判别法无法判断级数$\sum_{n=1}^{\infty} a_n$的敛散性.

5. D'Alembert比值判别法: 设$\{a_n\}$为非负数列, 则:
   - 若$\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = L < 1$, 则级数$\sum_{n=1}^{\infty} a_n$收敛.
   - 若$\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = L > 1$, 则级数$\sum_{n=1}^{\infty} a_n$发散.
   - 若$\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = 1$, 则该判别法无法判断级数$\sum_{n=1}^{\infty} a_n$的敛散性.

证明: 本定理的证明需要一个引理:

**引理**: 设$\{x_n\}$为数列, 那么一定存在:
$$
\underline{\lim_{n \to \infty}} \frac{x_{n+1}}{x_n} \leq \underline{\lim_{n \to \infty}} \sqrt[n]{x_n} \leq \overline{\lim_{n \to \infty}} \sqrt[n]{x_n} \leq \overline{\lim_{n \to \infty}} \frac{x_{n+1}}{x_n}
$$

**证明**: 设$\overline{r} = \overline{\lim_{n \to \infty}} \frac{x_{n+1}}{x_n}$, 则对于任意$\epsilon > 0$, 存在$N$, 当$n > N$时, 有:
$$
\frac{x_{n+1}}{x_n} < \overline{r} + \epsilon
$$
因此, 对于任意$m > n > N$, 有:
$$
x_m = \frac{x_m}{x_{m-1}} \cdot \frac{x_{m-1}}{x_{m-2}} \cdots \frac{x_{n+1}}{x_n} x_n < (\overline{r} + \epsilon)^{m-n} x_n
$$
即:
$$
\sqrt[m]{x_m} < \sqrt[m]{(\overline{r} + \epsilon)^{m-n} x_n} = (\overline{r} + \epsilon)^{1 - \frac{n}{m}} \sqrt[m]{x_n}
$$
令$m \to \infty$, 则有:
$$
\overline{\lim_{n \to \infty}} \sqrt[n]{x_n} \leq \overline{r} + \epsilon
$$
由于$\epsilon$任意, 故有:
$$
\overline{\lim_{n \to \infty}} \sqrt[n]{x_n} \leq \overline{\lim_{n \to \infty}} \frac{x_{n+1}}{x_n}
$$

类似地, 可以证明下极限部分的不等式.

利用上述引理, 我们可以证明D'Alembert比值判别法:

**证明**: 设$\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = L < 1$, 则由引理可知:
$$
\lim_{n \to \infty} \sqrt[n]{a_n} = L < 1
$$
由Cauchy根值判别法可知, 级数$\sum_{n=1}^{\infty} a_n$收敛.

同理, 若$\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = L > 1$, 则由引理可知:
$$
\lim_{n \to \infty} \sqrt[n]{a_n} = L > 1
$$
由Cauchy根值判别法可知, 级数$\sum_{n=1}^{\infty} a_n$发散. 证明完毕.

6. Raabe判别法: 设$\{a_n\}$为非负数列, 则:
   - 若存在常数$r > 1$, 且对于下面这个极限表达式:
   $$
   \lim_{n \to \infty} n \left( \frac{a_n}{a_{n+1}} - 1 \right) = r 
   $$
   * 当$r > 1$时, 级数$\sum_{n=1}^{\infty} a_n$收敛.
   * 当$r < 1$时, 级数$\sum_{n=1}^{\infty} a_n$发散.
   * 当$r = 1$时, 该判别法无法判断级数$\sum_{n=1}^{\infty} a_n$的敛散性.

Raabe判别法是D'Alembert比值判别法的推广. 主要思想是对比$\frac{a_{n+1}}{a_n}$与$1 - \frac{1}{n}$的大小关系, 因为$\sum_{n=1}^{\infty} \frac{1}{n}$发散, 而$\sum_{n=1}^{\infty} \frac{1}{n^p}$在$p > 1$时收敛. 若$\frac{a_{n+1}}{a_n}$与$1 - \frac{1}{n}$的差距足够大, 则可以判断级数的敛散性.

**证明**:

先证明第一个结论: 

$$
\because r > 1, \therefore \exists s,t \in \mathbb{R}, r > s > t > 1
$$
$$
\therefore \exists N \in \mathbb{N}, \text{s.t. } \forall n > N, n\left(\frac{a_n}{a_{n+1}} - 1\right) > s
$$
$$
\therefore \forall n > N, \frac{a_n}{a_{n+1}} > 1 + \frac{s}{n}
$$
$$
\because 1 + \frac{s}{n} > \left(1 + \frac{1}{n}\right)^t, \therefore \forall n > N, \frac{a_n}{a_{n+1}} > \left(1 + \frac{1}{n}\right)^t = \left(\frac{n+1}{n}\right)^t
$$

所以我们得到: $a_n n^t > a_{n+1} (n+1)^t$.

因此, $a_n n^t$递减, 必有上界, 设其上界为$M$, 则对于任意$n \in \mathbb{N}$, 有$a_n n^t \leq M$, 即$a_n \leq \frac{M}{n^t}$. 由于$t > 1$, 故级数$\sum_{n=1}^{\infty} a_n$收敛.

对于第二个结论:

$$
 \because r < 1, \therefore \exist n > N, \text{s.t. } < 1+\frac{r}{n} < 1 + \frac{1}{n}
$$

$$
\therefore \frac{x_n}{x_{n+1}} < \frac{n+1}{n}, \quad x_n n < x_{n+1} (n+1)
$$

因此, $x_n n$递增, 故级数$\sum_{n=1}^{\infty} a_n$发散. 证明完毕.

1. 积分判别法: 设$f(x)$在$[a,+\infty)$上有定义, 且对任意$A\in (a,+\infty)$, $f(x)$在$[a,A]$上Riemann可积, 那么我们取一单增且发散的数列, 同时定义:
   $$
   \{a_n\} \quad \text{s.t.} \quad a = a_1 < a_2 < \cdots < a_n < \cdots,  \quad
   u_n = \int_{a_n}^{a_{n+1}}f(x)dx
   $$
   那么$\sum_{n=1}^{\infty} u_n$和$\int_{a}^{+\infty}f(x)dx$敛散性相同.

   特别的, 若$f(x)$单调下降, 取$a_n = n$, 那么反常积分$\int_a^{+\infty} f(x)dx$ 与正项技术$\sum_{n=N}^{\infty}, N = [a]+1$敛散性相同.

   **证明提示***: 设$S_k = \sum_{i=1}^{k} u_i$, 对下面这个式子取极限:
$$
\forall A > a, \exist n, \text{s.t.} S_{n-1} \leq \int_a^Af(x)dx < S_{n+1}
$$

   本定理也可以反向证明反常积分的敛散性.

### 任意级数的审敛法

*交错级数的审敛法*

**定义**: 设$\{a_n\}$为非负数列, 则级数$\sum_{n=1}^{\infty} (-1)^{n-1} a_n$称为**交错级数**.

1. Leibniz判别法: 设$\{a_n\}$为单调递减且趋于零的非负数列, 则交错级数$\sum_{n=1}^{\infty} (-1)^{n-1} a_n$收敛.

**证明**: 设$S_n = \sum_{k=1}^{n} (-1)^{k-1} a_k$为交错级数的部分和序列, 则对于任意$n \in \mathbb{N}$, 有:
$$
S_{2n} = (a_1 - a_2) + (a_3 - a_4) + \cdots + (a_{2n-1} - a_{2n}) \leq a_1
$$
$$
S_{2n+1} = S_{2n} + a_{2n+1} \geq S_{2n}
$$
因此, $\{S_{2n}\}$为单调递增且有上界的数列, 故存在极限$S_{2n} \to S$. 由于$\{S_{2n+1}\}$为单调递减且有下界的数列, 故存在极限$S_{2n+1} \to S'$. 由于$a_n \to 0$, 故$S' = S$. 因此, 部分和序列$\{S_n\}$收敛, 故交错级数$\sum_{n=1}^{\infty} (-1)^{n-1} a_n$收敛. 证明完毕.

2. 绝对收敛与条件收敛: 设$\sum_{n=1}^{\infty} x_n$为级数, 若级数$\sum_{n=1}^{\infty} |x_n|$收敛, 则称级数$\sum_{n=1}^{\infty} x_n$**绝对收敛**; 若级数$\sum_{n=1}^{\infty} |x_n|$发散, 但级数$\sum_{n=1}^{\infty} x_n$收敛, 则称级数$\sum_{n=1}^{\infty} x_n$**条件收敛**.

**定理**: 绝对收敛的级数必收敛.

**A-D判别法**: 若下列两个条件之一成立, 则级数$\sum_{n=1}^{\infty} x_n y_n$收敛:
1. 数列$\{x_n\}$的部分和序列$\{S_n\}$有界, 且数列$\{y_n\}$单调且趋于零.
2. 数列$\{x_n\}$单调有界, 且数列$\{y_n\}$的部分和序列$\{T_n\}$收敛.
   
   这两个条件分别称为Dirichlet判别法和Abel判别法.

证明: 先证明Abel引理, 先推出一个Abel变换公式:
$$
\sum_{k=1}^{p} a_k b_k = a_p B_p - \sum_{k=1}^{p-1} B_k (a_{k+1} - a_k)
$$

其中$B_k = \sum_{i=1}^{k} b_i$.

这个公式可以如下推出:

$$
\sum_{k=1}^{p} a_k b_k = a_1B_1 + \sum_{k=2}^{p}a_kb_k = a_1B_1 + \sum_{k=2}^p a_k (B_k-B_{k-1}) = a_1B_1 + \sum_{k=2}^p a_k B_k - \sum_{k=2}^p a_k B_{k-1}
$$
$$
= a_1B_1 + \sum_{k=2}^p a_k B_k - \sum_{k=1}^{p-1} a_{k+1} B_k = a_p B_p - \sum_{k=1}^{p-1} B_k (a_{k+1} - a_k)
$$

**Abel引理**: $\{a_k\}$为单调数列, $\{B_k\}$为有界数列, 则存在常数$M > 0$, 使得$\forall p \in \mathbb{N}$:
$$
\left| \sum_{k=1}^{p} a_k b_k \right| \leq M (|a_1|+2|a_p|)
$$

**证明**: 由Abel变换公式, 有:
$$
\left| \sum_{k=1}^{p} a_k b_k \right| = \left| a_p B_p - \sum_{k=1}^{p-1} B_k (a_{k+1} - a_k) \right| \leq |a_p||B_p| + \sum_{k=1}^{p-1} |B_k| |a_{k+1} - a_k|
$$
由于$\{B_k\}$有界, 故存在常数$M > 0$, 使得对于任意$k \in \mathbb{N}$, 有$|B_k| \leq M$. 因此, 上式右端继续估计:
$$
\leq M |a_p| + M \sum_{k=1}^{p-1} |a_{k+1} - a_k| = M |a_p| + M (|a_1 - a_2| + |a_2 - a_3| + \cdots + |a_{p-1} - a_p|)
$$
$$
= M |a_p| + M (|a_1| + |a_p|) = M (|a_1| + 2 |a_p|)
$$

利用Abel引理, 我们可以证明A-D判别法. 这里不再赘述.
