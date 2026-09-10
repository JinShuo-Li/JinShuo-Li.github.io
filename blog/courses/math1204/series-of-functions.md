---
title: "Series of functions"
description: "Sequences and series of functions, uniform convergence, and power series."
order: 1
tags: [Mathematical Analysis, Calculus]
---

函数项级数是指由一列函数项组成的级数, 形式为:
$$
S(x) = \sum_{n=1}^{\infty} u_n(x)
$$

## 敛散性

在开始具体的数学推导之前, 让我们先思考一个直观的问题：为什么我们要研究函数项级数？

答案在于我们希望将简单函数的良好性质(例如连续、可导、可积)“传递”给稍微复杂的函数组合. 这就是为什么我们要研究**收敛性**——它使得这种“传递”成为可能. 

在这里, 我们将像探险一样, 从最基本的点态收敛出发, 逐步发现它的缺陷, 并最终引出更强大的工具：一致收敛. 

### 点态收敛

让我们从最自然的直觉开始. 既然函数项级数在每一个具体的点上都会退化成普通的数项级数, 那我们为什么不逐点考察它的行为呢？这就是**点态收敛**的思想. 

**点态收敛**: 如果对于一个固定的$x_0\in E$, 若*数项级数*$\sum_{n=1}^{\infty} u_n(x_0)$收敛, 则称函数项级数在$x_0$点态收敛. $x_0$称为函数项级数的收敛点.

- 全体收敛点的集合称为函数项级数的**收敛域**, 记为$D$.
- 定义在收敛域上的函数$S(x) = \sum_{n=1}^{\infty} u_n(x)$称为函数项级数的**和函数**. 我们称$\sum_{n=1}^{\infty} u_n(x)$在$D$上点态收敛于$S(x)$.
- 给出一个函数项级数, 可以作出它的**部分和函数**$S_n(x) = \sum_{k=1}^{n} u_k(x)$, 则函数项级数在$x_0$点态收敛于$S(x_0)$等价于$\lim_{n\to\infty} S_n(x_0) = S(x_0)$.

点态收敛不保证可以维持函数的诸多**分析性质**.



### 一致收敛

点态收敛时, 各个点之间的收敛速度可能**大相径庭**, 这就导致了函数项级数的和函数可能无法保持连续性、可微性等分析性质. 因此, 我们引入了**一致收敛**的概念. 我们将会**迫使**函数项级数在每个点上以**相近的速度**收敛, 从而保证和函数的分析性质.

回顾点态收敛的定义, 我们实际上想要表达的是:

$$
\forall \epsilon > 0, \exists N(x_0, \epsilon) \in \mathbb{N}^*, \text{s.t.} \forall n > N(x_0, \epsilon), |S_n(x_0) - S(x_0)| < \epsilon
$$

在点态收敛中, $N$是 **依赖于$x_0$** 的. 这就导致了不同的点可能有不同的收敛速度. 为了保证函数项级数在每个点上以相近的速度收敛, 我们需要**去掉**$N$对$x_0$的依赖, 从而得到一致收敛的定义:

**一致收敛**: 如果对于任意$\epsilon > 0$, 存在$N(\epsilon) \in \mathbb{N}^*$, 使得对于所有$n > N(\epsilon)$和所有$x \in D$, 都有$|S_n(x) - S(x)| < \epsilon$, 则称函数项级数在$D$上一致收敛于$S(x)$.

用类似的数理逻辑的语言来表达一致收敛的定义, 可以写成:
$$
\forall \epsilon > 0, \exists N(\epsilon) \in \mathbb{N}^*, \text{s.t.} \forall n > N(\epsilon), \forall x \in D, |S_n(x) - S(x)| < \epsilon
$$

换言之, $N$的选取**不依赖于$x$**, 这就保证了函数项级数在每个点上以相近的速度收敛.

由上述定义我们可以直接得到如下推论:

**推论**: 若函数项级数$\sum_{n=1}^{\infty} u_n(x)$在$D$上一致收敛, 则函数项序列$\{u_n(x)\}$在$D$上一致收敛于0.

然而一致收敛是一个过强的条件, 因此我们引入了**内闭一致收敛**的概念. 内闭一致收敛只要求函数项级数在$D$的每个**闭区间**上以相近的速度收敛, 从而保证和函数在$D$的每个内点上保持连续性、可微性等分析性质.

**内闭一致收敛**: 若对于任意$[a,b] \subset D$, 函数项级数$\sum_{n=1}^{\infty} u_n(x)$在$[a,b]$上一致收敛, 则称函数项级数在$D$上内闭一致收敛.

一致收敛有两个等价的充要条件:

- 设函数项序列$\{S_n(x)\}$在$D$上一致收敛于$S(x)$, 定义$S_n(x)$和$S(x)$之间的距离为:
$$
d(S_n, S) = \sup_{x \in D} |S_n(x) - S(x)|
$$
则函数项级数$\sum_{n=1}^{\infty} u_n(x)$在$D$上一致收敛于$S(x)$当且仅当:
$$
\lim_{n\to\infty} d(S_n, S) = 0
$$
本定理的证明非常简单, 直接利用一致收敛的定义即可. 这里从略.



- 设函数项序列$\{S_n(x)\}$在$D$上点态收敛于$S(x)$, 那么函数项级数$\sum_{n=1}^{\infty} u_n(x)$在$D$上一致收敛于$S(x)$当且仅当对于任意数列$\{x_n\},x_n \in D$且:
$$
\lim_{n\to\infty} (S_n(x_n) - S(x_n)) = 0
$$
下面给出该定理的证明.  
**必要性**: 通过上一个等价条件的定义, 可以直接得到充分性.
**充分性**: 反证法.   
即假设函数项级数$\sum_{n=1}^{\infty} u_n(x)$在$D$上不一致收敛于$S(x)$.
$$
\exists \epsilon_0 > 0, \forall N >0, \exists n > N, \exists x \in D, \text{s.t.} |S_n(x) - S(x)| \geq \epsilon_0
$$
我们依次取$N=1,2,3,\cdots$, 可以得到数列$\{n_k\}$和$\{x_k\}$, 使得对于任意$k \in \mathbb{N}^*$, 都有$|S_{n_k}(x_k) - S(x_k)| \geq \epsilon_0$. 从而得到数列$\{x_n\}$, 使得对于任意$k \in \mathbb{N}^*$, 都有$|S_{n_k}(x_k) - S(x_k)| \geq \epsilon_0$. 从而得到:
$$
\lim_{n\to\infty} (S_n(x_n) - S(x_n)) \neq 0
$$
与充分性矛盾. 因此函数项级数$\sum_{n=1}^{\infty} u_n(x)$在$D$上一致收敛于$S(x)$.   
本定理常用于说明函数项级数不一致收敛.



### 一致收敛级数的判别

1. Cauchy一致收敛判别法
函数项级数$\sum_{n=1}^{\infty} u_n(x)$在$D$上一致收敛的充分必要条件是, 对于任意$\epsilon > 0$, 存在$N(\epsilon) \in \mathbb{N}^*$, 使得:
$$
\left| u_{n+1}(x) + u_{n+2}(x) + \cdots + u_{n+p}(x) \right| < \epsilon, \forall n > N(\epsilon), \forall p \in \mathbb{N}^*, \forall x \in D
$$
证明与其他Cauchy判别法类似, 这里从略.



2. Weierstrass 判别法
设函数项级数$\sum_{n=1}^{\infty} u_n(x)$满足$|u_n(x)| \leq a_n$对于所有$n \in \mathbb{N}^*$和所有$x \in D$, 其中$\sum_{n=1}^{\infty} a_n$是一个收敛的数项级数, 则函数项级数$\sum_{n=1}^{\infty} u_n(x)$在$D$上一致收敛.
证明: 直接利用Cauchy一致收敛判别法即可. 这里从略.



3. A-D判别法
若函数项级数$\sum_{n=1}^{\infty} a_n(x)\cdot b_n(x)$满足下面两个条件之一, 则函数项级数$\sum_{n=1}^{\infty} a_n(x)\cdot b_n(x)$在$D$上一致收敛.
- $a_n(x)$在$D$上对固定的$x$, 随着$n$的增大单调, 且一致有界. 且函数项级数$\sum_{n=1}^{\infty} b_n(x)$在$D$上一致收敛.
- $a_n(x)$在$D$上对固定的$x$, 随着$n$的增大单调, 且一致收敛于0. 且函数项级数$\sum_{n=1}^{\infty} b_n(x)$在$D$上一致有界.
这里的证明需要用到Abel引理, 即:
**Abel引理**: 设数列$\{a_n\}$满足对于任意$n \in \mathbb{N}^*$, 都有$|a_n| \leq M$且对于任意$n \in \mathbb{N}^*$, 都有$a_{n+1} \leq a_n$. 设数列$\{b_n\}$满足对于任意$n \in \mathbb{N}^*$, 都有$|b_1 + b_2 + \cdots + b_n| \leq N$. 则对于任意$n \in \mathbb{N}^*$, 都有:
$$
|a_1 b_1 + a_2 b_2 + \cdots + a_n b_n| \leq 2MN
$$
证明: 直接利用数列的单调性和有界性即可. 这里从略.





### 一致收敛级数的分析性质

一致收敛的函数项级数可以保持连续性、可微性、可积性等分析性质. 下面我们将分别介绍这些分析性质.

**连续性**: 若函数项级数$\sum_{n=1}^{\infty} u_n(x)$在$D$上一致收敛于$S(x)$, 且对于任意$n \in \mathbb{N}^*$, $u_n(x)$在$D$上连续, 则和函数$S(x)$在$D$上连续.

**证明**: 我们很容易可以得到下面三个表达式:

$$
\begin{aligned}
&|S_N(x_0) - S(x_0)| < \frac{\epsilon}{3} \\
&|S_N(x_0 + h) - S(x_0+h)| < \frac{\epsilon}{3} \\
&|S_N(x_0 + h) - S_N(x_0)| < \frac{\epsilon}{3}
\end{aligned}
$$

其中$N$是根据一致收敛的定义选取的. 由三角不等式, 可以得到:
$$
|S(x_0 + h) - S(x_0)| \leq |S_N(x_0 + h) - S(x_0+h)| + |S_N(x_0 + h) - S_N(x_0)| + |S_N(x_0) - S(x_0)| < \epsilon
$$

连续性定理也可以看作是**可以交换极限**. 即为:
$$
\lim_{x \to x_0} \left( \lim_{n \to \infty} S_n(x) \right) = \lim_{n \to \infty} \left( \lim_{x \to x_0} S_n(x) \right)
$$

**可积性**: 若函数项级数$\sum_{n=1}^{\infty} u_n(x)$在$[a,b]$上一致收敛于$S(x)$, 对于任意$n$都有$u_n(x)$连续, 且对于任意$n \in \mathbb{N}^*$, $u_n(x)$在$[a,b]$上可积, 则和函数$S(x)$在$[a,b]$上可积, 且:
$$
\int_a^b S(x) dx = \sum_{n=1}^{\infty} \int_a^b u_n(x) dx
$$

本定理同样可以表达为: 积分运算可以与无限求和运算交换次序. 即为:
$$
\int_a^b \left( \lim_{n \to \infty} S_n(x) \right) dx = \lim_{n \to \infty} \left( \int_a^b S_n(x) dx \right)
$$

**证明**: 由已知, 根据一致连续性的定义, 我们可以得到:

$$
\left| S_n(x) - S(x) \right| < \epsilon
$$

我们直接两侧积分, 就可以得到:

$$
\left| \int_a^b S_n(x) dx - \int_a^b S(x) dx \right| < (b-a) \epsilon
$$

也就是说, 考虑如下的数项级数:

$$
I_n = \int_a^b S_n(x) dx
$$

我们可以得到:
$$
\left| I_n - \int_a^b S(x) dx \right| < (b-a) \epsilon
$$

换言之, 数项级数$\{I_n\}$收敛于$\int_a^b S(x) dx$. 由数项级数的定义, 可以得到:
$$
\lim_{n\to\infty} I_n = \lim_{n\to\infty} \int_a^b S_n(x) dx = \int_a^b \lim_{n \to \infty} S_n(x) dx
$$

到这里即完成证明. 思路非常清晰.

**可微性**(可导性): 对于函数序列$\{S_n(x)\}$, 如果它满足下面三条:
- $S_n(x)$在$[a,b]$上可微且有连续的导函数;
- $S_n'(x)$在$[a,b]$上一致收敛于$\sigma(x)$;
- $S_n(a) $在$[a,b]$上点态收敛于$S(x)$.

那么$S(x)$在$[a,b]$上可微, 且$S'(x) = \sigma(x)$.

**证明**: 由于$S_n'(x)$在$[a,b]$上一致收敛于$\sigma(x)$, 根据一致连续性的可积性质:

$$
\int_a^x \sigma (t) dt = \lim_{n\to\infty} \int_a^x S_n'(t) dt = \lim_{n\to\infty} (S_n(x) - S_n(a)) = S(x) - S(a)
$$

由已知条件, 等式两侧均可导. 因此, 可以得到:
$$
\sigma(x) = S'(x)
$$

同理, 这个定理也可以理解为: 对于一致收敛的函数项级数, 导数运算可以与无限求和运算交换次序. 即为:
$$
\left( \lim_{n \to \infty} S_n(x) \right)' = \lim_{n \to \infty} S_n'(x)
$$

**Dini定理**: 设函数序列$\{S_n(x)\}$在闭区间$[a,b]$上点态收敛于$S(x)$. 如果:

- $S_n(x)$在$[a,b]$上连续;
- $S(x)$在$[a,b]$上连续;
- 对于任意$x \in [a,b]$, $S_n(x)$单调趋近于$S(x)$.

则函数项级数$\sum_{n=1}^{\infty} u_n(x)$在$[a,b]$上一致收敛于$S(x)$.

这里的证明不要求掌握, 从略.

## 幂级数

前文中我们讨论的函数项级数的一般形式是非常宽泛的, 在实际中, 如果对于每一种函数都要从头判断一致收敛与否, 难免有些繁琐. 于是, 数学家们开始思考：有没有一种特殊而又非常基本的函数组合, 能够自动满足上述优秀的分析性质？

答案是肯定的, 那就是像多项式一样简单而优美的**幂级数**. 

**定义**: 形如
$$
\sum_{n=0}^{\infty} a_n (x - x_0)^n
$$
的级数称为以$x_0$为中心的幂级数, 其中$a_n$是常数.

为了方便讨论, 我们更多的时候会讨论以0为中心的幂级数, 即:
$$
\sum_{n=0}^{\infty} a_n x^n
$$

**收敛半径**: 根据Cauchy收敛准则, 我们可以知道对于任意固定的$x$, 数项级数$\sum_{n=0}^{\infty} a_n x^n$收敛当且仅当:
$$
\lim_{n\to\infty} \sqrt[n]{|a_n x^n|} = \lim_{n\to\infty} \sqrt[n]{|a_n|} \cdot |x| < 1
$$

我们约定:

$$
A = \varlimsup_{n \to \infty} \sqrt[n]{|a_n|}
$$

因此, 定义幂级数$\sum_{n=0}^{\infty} a_n x^n$的**收敛半径**为:

$$
R = \begin{cases}
0, & A = +\infty \\
+\infty, & A = 0 \\
\frac{1}{A}, & 0 < A < +\infty
\end{cases}
$$

或者我们可以简记为$R = \frac{1}{A}$, 当然这种标记是不标准的, 笔者也不推荐. 但是确实方便记忆. 所以不失为一种不错的记忆方法.

**定理**(Cauchy-Hadamard定理): 幂级数$\sum_{n=0}^{\infty} a_n x^n$的收敛半径为$R = \frac{1}{A}$, 其中$A = \varlimsup_{n \to \infty} \sqrt[n]{|a_n|}$.

**证明**: 直接利用Cauchy收敛准则即可. 这里从略.



**定理**(d'Alembert定理): 若幂级数$\sum_{n=0}^{\infty} a_n x^n$满足$\lim_{n\to\infty} \frac{|a_{n+1}|}{|a_n|} = A$, 则幂级数的收敛半径为$R = \frac{1}{A}$.

**证明**: 这里的证明需要采用下面的不等式:

$$
\varliminf_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| \leq \varliminf_{n \to \infty} \sqrt[n]{|a_n|} \leq \varlimsup_{n \to \infty} \sqrt[n]{|a_n|} \leq \varlimsup_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right|
$$

因此, 由已知条件, 可以得到:
$$
A = \lim_{n\to\infty} \frac{|a_{n+1}|}{|a_n|} = \varliminf_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = \varlimsup_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right|
$$

因此, 可以得到:
$$
A = \varliminf_{n \to \infty} \sqrt[n]{|a_n|} = \varlimsup_{n \to \infty} \sqrt[n]{|a_n|}
$$

因此, 可以得到:
$$
R = \frac{1}{A}
$$

### 幂函数的性质

**定理**(Abel第二定理): 设幂级数$\sum_{n=0}^{\infty} a_n x^n$的收敛半径为$R > 0$, 则幂级数在$(-R,R)$上内闭一致收敛于和函数$S(x)$.

证明: 我们直接放缩到绝对值最大的边界, 并说明这一边界的绝对值小于$R$. 这里从略.



同理, 根据前面提及的三大性质, 可以得到幂级数在$(-R,R)$上保持连续性、可微性、可积性等分析性质. 这里从略.



### 幂级数的展开

**定理**: 设函数$f(x)$在$(-R,R)$上无穷阶可微, 则函数$f(x)$在$(-R,R)$上可以展开成幂级数, 即存在数列$\{a_n\}$使得对于任意$x \in (-R,R)$, 都有:
$$
f(x) = \sum_{n=0}^{\infty} a_n x^n
$$

实际上我们得到的就是**Taylor级数**. 其中$a_n$可以通过下面的公式计算得到:
$$
a_n = \frac{f^{(n)}(0)}{n!}
$$

换言之, 函数$f(x)$在$(-R,R)$上的Taylor级数为:
$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n
$$

当然我们完全可以要求函数$f(x)$在$(-R,R)$上以$x_0$为中心展开成幂级数, 即存在数列$\{a_n\}$使得对于任意$x \in (-R+x_0,R+x_0)$, 都有:
$$
f(x) = \sum_{n=0}^{\infty} a_n (x - x_0)^n
$$

其中$a_n$可以通过下面的公式计算得到:
$$
a_n = \frac{f^{(n)}(x_0)}{n!}
$$

换言之, 函数$f(x)$在$(-R+x_0,R+x_0)$上的Taylor级数为:
$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(x_0)}{n!} (x - x_0)^n
$$

由于Taylor级数要求函数$f(x)$在$(-R,R)$上无穷阶可微, 因此Taylor级数的展开是一个非常强的条件. 我们未来还会介绍更多的级数, 比如Fourier级数. 这些级数的展开条件相对弱得多, 因此它们的应用范围也更广泛. 这里暂时不会涉及.

---
