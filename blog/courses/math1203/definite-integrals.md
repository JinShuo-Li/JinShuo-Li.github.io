---
title: "Definite integrals and integrability"
description: "The Riemann integral, Darboux sums, and integrability conditions."
order: 2
tags: [Mathematical Analysis, Integration]
---

定积分和不定积分的起源不一样, 原理不一样, 思维不一样, 但是最后却通过Newton-Leibniz公式紧密结合在了一起. 注意本节仅讨论黎曼积分. 更广泛的积分比如反常积分我们将在后面介绍.

定积分的几何意义很明确, 就是求一个曲线$y=f(x)$和区间限$x=a$, $x=b$以及$x$轴本身围城的面积大小. 如果这个区域在x轴上方, 则定积分为正, 反之为负. 下面我们将基于这个朴素理解给出严格定义.

说到底定积分的严格定义本质上就是在细化什么情况下我们能**确定**积分值的大小, 什么时候不行. 我们可以先看两个例子, 对于函数$f(x)=x$在$[0,1]$上和x轴围成的面积大小, 这显然是可以确定的, 无论怎么求, 怎么处理, 我们都可以确定这个面积是$\frac{1}{2}$, 毫无疑问. 但是对于Dirichlet函数:

$$
f(x) =
\begin{cases}
    1, x\in \mathbb{Q} \\
    0, x\notin \mathbb{Q}\\
\end{cases}
$$

我们很明显难以确定其在$[0,1]$上和x轴围成的面积, 我们现在即将给出的定义就是要说明Dirichlet函数的这个面积是求不出来的. 下面我们具体说明.

## 定积分的定义和基本性质

**定义**: 设$f(x)$是定义在$[a,b]$上的有界函数, 在$[a,b]$上任意取分点$\{ x_i \}_{i=0}^n$形成一种划分:

$$
P: a=x_0 < x_1 < \cdots < x_n = b
$$

并在任意取点: $\xi_i \in [x_{i-1},x_i]$, 记小区间$[x_{i-1},x_i]的长度为\Delta x_i = x_i - x_{i-1}$, 令$\lambda = \max_{1 \le i \le n} \Delta x_i$, 若当$\lambda \rightarrow 0$时, 极限:

$$
\lim_{\lambda \rightarrow 0} \sum_{i=1}^{n}f(\xi_i) \Delta x_i
$$

存在, 且极限值既与划分$P$无关, 又与$\xi_i$的选取无关, 则称$f(x)$在$[a,b]$上黎曼可积.

$$
S_n = \sum^{n}_{i=1} f(\xi_i) \Delta x_i
$$

称为黎曼和, 其极限值$I$被称为$f(x)$在$[a,b]$上的定积分, 记作:

$$
I = \lim_{n \to \infty} S_n = \int_{a}^{b} f(x) dx
$$

$a$和$b$被称为下限和上限. 在上面的定义中, 我们要求$a < b$, 但是我们规定:

$$
\int_a^b g(x) dx = - \int_b^a g(x) dx
$$

并且不难推知: $\int_a^a f(x)dx = 0$. 上述定义的几何意义是非常明确的, 但是作为定义, 其用在判定可积性上不具有可操作性, 所以我们必须引入新的判定方式.

## 定积分的可积条件

在本部分, 我们关心的是定积分的可积性, 而定积分的可积性本质上就是极限的存在性问题. 而在处理极限的存在性的问题的时候, 一个重要的定理就是**夹逼定理**:

设$y_n$是我们要判断敛散性的数列, 而且对于另外两个无穷数列$x_n$和$z_n$恒有:
$x_n \le y_n \le z_n$, 那么$y_n$极限存在的一个条件就是:

$$
\lim_{n \to \infty}x_n = \lim_{n \to \infty} z_n = Y
$$

我们引入这个思想, 试着改变$\xi_i$的选取方式, 求出黎曼和在每个划分下的最大值和最小值(也就是我们后面要说的达布大和和达布小和), 然后证明$\lambda \to 0$的条件下最大值和最小值会相互无限逼近. 下面我们就是要用严谨的数学语言给出推导和证明:

回顾一下定义: 
$$
\int_{a}^{b} f(x) dx =\lim_{\lambda \to 0} \sum_{i=1}^{n} f(\xi_i)\Delta x_i
$$
极限过程和性质的关键在于 $\xi_i$ 取值的任意性. 因此, 我们考虑极端情况: 函数 $f(x)$ 在区间 $[x_{i-1},x_i]$ 上的上确界和下确界, 分别记为 $M_i$ 和 $m_i$. 于是我们得到两个极限: 

$$
M = \lim_{\lambda \to 0} \sum_{i=1}^{n}M_i \cdot \Delta x_i
$$
$$
m = \lim_{\lambda \to 0} \sum_{i=1}^{n}m_i \cdot \Delta x_i
$$
如果极限 $M$ 和 $m$ 都收敛且收敛于同一个值, 我们可以断言定积分存在, 因为: 
$$
\lim_{\lambda \to 0} \sum_{i=1}^{n}m_i \cdot \Delta x_i = m \leq \int_{a}^{b} f(x) dx =\lim_{\lambda \to 0} \sum_{i=1}^{n} f(\xi_i)\Delta x_i \leq M = \lim_{\lambda \to 0} \sum_{i=1}^{n}M_i \cdot \Delta x_i
$$
通过这种方式, 我们可以用函数 $f(x)$ 的上确界和下确界代替 $\xi_i$ 的随机选择, 这比原始定义更具可操作性. 下面我们将给出上述思想的严谨表述及证明. 定义 (达布和, Darboux Sum)对于一个划分 $P$ 及其每一个子区间 $[x_{i-1},x_i]$, 我们做如下标记: 
$$
M_i = \sup\{f(x)|x \in [x_{i-1},x_i]\}, \quad m_i = \inf\{f(x)|x \in [x_{i-1},x_i]\}
$$
显然它们与划分的选择有关. 选定划分 $P$ 后, 我们定义: 
$$
\overline{S}(P) = \sum_{i=1}^{n} M_i \cdot \Delta x_i , \quad \underline{S}(P) = \sum_{i=1}^{n} m_i \cdot \Delta x_i
$$
其中 $\overline{S}(P)$ 称为 达布大和 (Darboux upper sum), $\underline{S}(P)$ 称为 达布小和 (Darboux lower sum). 显而易见: 
$$
\underline{S}(P) \leq \sum_{i=1}^{n} f(\xi_i) \Delta x_i \leq \overline{S}(P)
$$
下一步是证明: 如果极限 $\lim_{\lambda \to 0} \overline{S}(P)$ 和 $\lim_{\lambda \to 0} \underline{S}(P)$ 存在且收敛于同一值, 则定积分存在. （其中 $\lambda = \max \{\Delta x_i\}$）引理在原有划分中增加分点形成新的划分；达布大和不会增加, 达布小和不会减少. 

**证明:**

假设 $\overline{S}(P)$ 和 $\underline{S}(P)$ 对应于某个划分 $P$, 且 $P: \{x_i\}_{i=1}^n$. 当增加一个新的分点后, 我们得到一个新的划分 $P'$, 其达布大和与达布小和分别为 $\overline{S}(P')$ 和 $\underline{S}(P')$. 我们需要证明的是: 

$$
\overline{S}(P') \leq \overline{S}(P), \quad \underline{S}(P) \leq \underline{S}(P')
$$

假设增加的点 $x'$ 落在区间 $(x_{i-1},x_i)$ 内, 我们记: 

$$
M_i = \sup \{f(x)|x \in (x_{i-1},x_i)\}, \quad M_i' = \sup \{f(x)|x \in (x_{i-1},x')\}, \quad M_i'' = \sup \{f(x)| x \in (x', x_i)\}
$$

因为 $(x_{i-1},x') \subset (x_{i-1},x_i)$ 且 $(x', x_i) \subset (x_{i-1},x_i)$, 所以有: 

$$
M_i' \leq M_i, \quad M_i'' \leq M_i
$$
$$
M_i'(x'-x_{i-1}) + M_i''(x_i-x') \leq M_i(x_i - x_{i-1})
$$
增加一个分点不会影响其他区间, 因此我们有 $\overline{S}(P') \leq \overline{S}(P)$. 同理可证 $\underline{S}(P) \leq \underline{S}(P')$. 由此我们可以推导出 $m(b-a) \leq \underline{S}(P_2) \leq \overline{S}(P_1) \leq M(b-a)$. 根据单调有界收敛定理, 我们可以断言极限 $\lim_{\lambda \to 0} \overline{S}(P)$ 和 $\lim_{\lambda \to 0} \underline{S}(P)$ 存在. 记: 
$$
\lim_{\lambda \to 0} \overline{S}(P)=L, \quad \lim_{\lambda \to 0} \underline{S}(P)=l
$$
现在我们要证明对于所有有界函数 $f(x)$, $L = \inf \{\overline{S}(P)|\overline{S}(P) \in \overline{\textbf{S}}\}$ 和 $l = \sup \{\underline{S}(P)|\underline{S}(P) \in \underline{\textbf{S}}\}$ 成立. 

**引理 (达布定理, Darboux Theorem):**
$$
\lim_{\lambda \to 0} \overline{S}(P) = \inf \{\overline{S}(P)|\overline{S}(P) \in \overline{\textbf{S}}\}
$$
$$
\lim_{\lambda \to 0} \underline{S}(P) = \sup \{\underline{S}(P)|\underline{S}(P) \in \underline{\textbf{S}}\}
$$
证明: 我们要给出达布大和的证明. 达布小和的情况类似. 基本思想是使用 $\epsilon - \delta$ 语言, 选取一个满足极限条件的达布大和, 并证明 $\forall P, \lambda = \max_{1 \leq i \leq n} (\Delta x_i) < \delta$, 都有 $0 \leq \overline{S}(P)-L < \epsilon$. 假设我们有一个划分 $P'$ 满足 $0 \leq \overline{S}(P') - L < \frac{\epsilon}{2}$. 且: 
$$
P' : a = x_0' <x_1' < x_2' < \cdots < x_p' = b
$$
我们要选取 $\delta = \min \{\Delta x_1', \Delta x_2', \cdots , \Delta x_p', \frac{\epsilon}{2(p-1)(M-m)}\}$. 现在假设我们有另一个划分 $P$ 满足 $\lambda = \max_{1 \leq i \leq n} (\Delta x_i) < \delta$: 
$$
P: a = x_0 < x_1 < x_2 < \cdots <x_n = b
$$
其达布大和为 $\overline{S}(P)$. 我们将 $P' = \{x_j'\}^p_{j=0}$ 插入到 $P = \{x_i\}^n_{i=0}$ 中形成一个新的划分 $P*$. 同样, 记其达布大和为 $\overline{S}(P*)$. 根据前面的引理, 我们有: 
$$
\overline{S}(P*)-\overline{S}(P') \leq 0
$$
对于所有区间 $(x_{i-1},x_i)$, 至多有 $p-1$ 个区间被插入了分点. 对于其他区间, 没有任何变化. 对于被插入分点的区间, 利用证明中用过的符号, 我们有: 
$$
M_i(x_i-x_{i-1})-[M_i'(x_j'-x_{i-1})+M_i''(x_i-x_j')] \leq (M-m) (x_i-x_{i-1}) < (M-m) \delta
$$
所以现在我们有: 
$$
0 \leq \overline{S}(P)-\overline{S}(P*)<(p-1)(M-m)\delta \leq \frac{\epsilon}{2}
$$
综上所述, 我们得出结论: 
$$
0 \leq \overline{S}(P)-L = [\overline{S}(P)-\overline{S}(P*)]+[\overline{S}(P*)-\overline{S}(P')]+[\overline{S}(P')-L]<\frac{\epsilon}{2}+\frac{\epsilon}{2}=\epsilon
$$
现在我们得到了可积的充要条件. 定理区间 $[a,b]$ 上的有界函数 $f(x)$ 可积的充要条件是: 对于任意划分 $P$, 当 $\lambda = \max_{1 \leq i \leq n} \Delta x_i \to 0$ 时, 有: 
$$
\lim_{\lambda \to 0} \overline{S}(P) = L = l = \lim_{\lambda \to 0} \underline{S}(P)
$$
证明: 现在我们完成定理的证明. 设 $f$ 为 $[a,b]$ 上的有界函数, 定义: 
$$
L = \lim_{\lambda \to 0} \overline{S}(P), \quad l = \lim_{\lambda \to 0} \underline{S}(P)
$$
由达布定理可知: 
$$
L = \inf \left\{ \overline{S}(P) \right\}, \quad l = \sup \left\{ \underline{S}(P) \right\}.
$$
必要性:  如果 $f$ 在 $[a,b]$ 上可积, 则存在一个数 $I$, 使得对于任意 $\epsilon > 0$, 存在 $\delta > 0$, 使得对于任何 $\lambda < \delta$ 的划分 $P$ 以及任意选取的样点 $\xi_i \in [x_{i-1}, x_i]$, 都有: 
$$
\left| \sum_{i=1}^{n} f(\xi_i) \Delta x_i - I \right| < \epsilon.
$$
特别地, 对于任意这样的划分 $P$, 我们可以选择样点使得 $f(\xi_i)$ 任意接近 $M_i$, 从而得到: 
$$
\left| \overline{S}(P) - I \right| \leq \epsilon.
$$
同理, 通过选择点使得 $f(\xi_i)$ 任意接近 $m_i$, 我们得到: 
$$
\left| \underline{S}(P) - I \right| \leq \epsilon.
$$
因此, 当 $\lambda \to 0$ 时, 我们有: 
$$
\overline{S}(P) \to I \quad \underline{S}(P) \to I
$$
这意味着 $L = l = I$. 充分性:  反之, 假设 $L = l = I$. 那么对于任意 $\epsilon > 0$, 存在 $\delta > 0$, 使得对于任何 $\lambda < \delta$ 的划分 $P$, 有: 
$$
\left| \overline{S}(P) - I \right| < \epsilon \quad \text{且} \quad \left| \underline{S}(P) - I \right| < \epsilon.
$$
对于对应于 $P$ 的任意黎曼和 $\sum_{i=1}^{n} f(\xi_i) \Delta x_i$, 我们有: 
$$
\underline{S}(P) \leq \sum_{i=1}^{n} f(\xi_i) \Delta x_i \leq \overline{S}(P).
$$
因此, 
$$
I - \epsilon < \underline{S}(P) \leq \sum_{i=1}^{n} f(\xi_i) \Delta x_i \leq \overline{S}(P) < I + \epsilon,
$$
这意味着: 
$$
\left| \sum_{i=1}^{n} f(\xi_i) \Delta x_i - I \right| < \epsilon.
$$
因此, $f$ 在 $[a,b]$ 上可积且积分为 $I$. 证明完毕. 从上述定理中, 我们可以推导出一个涉及函数振幅 (oscillation) 的更实用的判别法. 定义子区间 $[x_{i-1}, x_i]$ 上的振幅为 $\omega_i = M_i - m_i$. 条件 $L=l$ 等价于: 
$$
\lim_{\lambda \to 0} \sum_{i=1}^n \omega_i \Delta x_i = 0
$$
这个判别法依旧在说明可积性上依旧是充分必要的.

总体来说, 我们现在有三类判别法:

1. 定义判别法: 常用于否定可积性.
2. 达布和判别法: 常用于肯定可积性.
3. 振幅判别法: 肯定和否定可积性均可使用.

下面展示一些推论:

**推论**: 闭区间上的连续函数必可积.

证明:

由于闭区间上的连续函数必然一直连续, 那么存在$\delta>0$, 对任意$x', x'' \in [a,b]$, 只要$|x'-x''|<\delta$, 必有$|f(x')-f(x'')| < \frac{\epsilon}{b-a}$.  

所以对于划分$P$, 倘若$\lambda < \delta$, 必有$\omega_i < \frac{\epsilon}{b-a}$.  

所以$\sum_{i=1}^{n} \omega_i\Delta x_i < \epsilon$.

**推论**: 闭区间上的单调函数必可积.

证明:  
类似上面的证法, 只是需要取$\delta = \frac{\epsilon}{f(b)-f(a)} >0$, 假设$f(x)$单增的话. 后面推导一致. 这里省略不谈.

**推论**: 闭区间上仅有有限个不连续点的有界函数必可积.

我们给出这个定理的详细证明.

证明:

记$f(x)$在定义域上的不连续点有$k$个, 记为$a \le p_1' < \cdots < p_k' \le b$, 不妨设不连续点都在区间内. $M$和$m$为函数在全定义域上的上确界和下确界.

对$\forall \epsilon >0$, 取$\delta = \min \{\frac{p_1'-a}{2},\frac{b-p_k'}{2},\frac{d}{3},\frac{\epsilon}{4k(M-m)}\}$

>说明: 这里$\delta$的取法兼顾几个要素, 后面我们会划分出一些连续区段, 我们要保证这些连续区段既不能超出定义域, 也不能相互交叉, 还得有利于后面判定敛散性.

我们遍历每个不连续点, 先以$p_j'$的$\delta$领域的两个端点$p_j'-\delta,p_j'+\delta$为一个划分点, 将$[a,b]$(定义域)划分为$2k+1$个区段, 所以f(x)在$D^{(1)} = [a, p'_1-\delta]$, $D^{(k+1)} = [p_k'+\delta,b]$, $D^{(t)} = [p_{j-1}'+\delta , p_j'-\delta]$上连续($k+1$个连续区间), 我们在上面取分点, 使得:

$$
\sum_{i=1}^{l_j} \omega_i^{j} \Delta x_i^{j} < \frac{\epsilon}{2(k+1)}
$$

然后将所有小区间的分点合在一块看作是$[a,b]$上的一个分点.

我们考虑函数在全定义域上的划分情况, 我们可以看到连续区段对于表达式$\sum_{i=1}^n \omega_i \Delta x_i$的"贡献"不大于$(k+1) \cdot \frac{\epsilon}{2(k+1)}$, 而不连续区间的个数为$k$, 每个区间的长度满足$\text{lenth} = 2\delta < \frac{2\epsilon}{4k(M-m)}$, 每个区间的振幅一定小于函数的振幅. 所以我们有:

$$
\sum_{i=1}^{l_j} \omega_i^{j} \Delta x_i^{j} < \frac{\epsilon}{2(k+1)} + \frac{2\epsilon}{4k(M-m)} \cdot k(M-m) = \epsilon
$$

到这里便完成了证明. 可以发现在证明函数可积性的时候关键在$\delta$的选取.
