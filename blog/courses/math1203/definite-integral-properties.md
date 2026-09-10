---
title: "Definite integrals: properties and the fundamental theorem"
description: "Properties of the definite integral, the fundamental theorem of calculus, and geometric applications."
order: 3
tags: [Mathematical Analysis, Integration]
---

在讨论了可积性的判定之后, 我们假设函数已经满足可积条件. 定积分作为一种特殊的极限 (或者说是线性泛函), 具有许多优良的代数和序性质.

### 1. 线性性质

定积分是线性的, 这意味着积分运算对加法和数乘封闭.

**定理**: 若 $f(x), g(x)$ 在 $[a,b]$ 上可积, 且 $k_1, k_2$ 为常数, 则:
$$
\int_a^b [k_1 f(x) + k_2 g(x)] dx = k_1 \int_a^b f(x) dx + k_2 \int_a^b g(x) dx
$$

这一性质直接由黎曼和 $\sum [k_1 f(\xi_i) + k_2 g(\xi_i)] \Delta x_i$ 的线性性取极限得到.

### 2. 乘积的可积性与注意事项

**定理**: 若 $f(x), g(x)$ 在 $[a,b]$ 上可积, 则它们的乘积 $f(x)g(x)$ 也在 $[a,b]$ 上可积.

> **警示 (Warning)**: 
> 虽然乘积函数是可积的, 但定积分**不满足**乘法的分配律. 即通常情况下:
>
$$
> \int_a^b f(x)g(x) dx \neq \left( \int_a^b f(x) dx \right) \cdot \left( \int_a^b g(x) dx \right)
>
$$
> 这一点必须时刻牢记, 这是初学者极易犯的错误.

### 3. 保序性 (Monotonicity)

定积分能够保持函数之间的大小关系.

**定理**: 若在 $[a,b]$ 上 $f(x) \le g(x)$, 则:
$$
\int_a^b f(x) dx \le \int_a^b g(x) dx
$$

**推论 (绝对值不等式)**:
若 $f(x)$ 在 $[a,b]$ 上可积, 则 $|f(x)|$ 也可积, 且成立:
$$
\left| \int_a^b f(x) dx \right| \le \int_a^b |f(x)| dx
$$
这个不等式在进行积分估值分析 (Estimate) 时非常有用.

积分第一中值定理

积分中值定理是将积分问题转化为函数值问题的重要桥梁, 它体现了积分作为“平均值”的某种推广意义.

**定理 (积分第一中值定理)**:
设 $f(x)$ 在 $[a,b]$ 上连续, $g(x)$ 在 $[a,b]$ 上可积且**不变号** (即在区间上始终 $\ge 0$ 或始终 $\le 0$), 则在 $[a,b]$ 上至少存在一点 $\xi$, 使得:
$$
\int_a^b f(x)g(x) dx = f(\xi) \int_a^b g(x) dx
$$

特别地, 当 $g(x) \equiv 1$ 时, 这就是我们熟悉的平均值公式:
$$
\int_a^b f(x) dx = f(\xi)(b-a)
$$

**证明**:
不妨假设 $g(x) \ge 0$.
因为 $f(x)$ 在闭区间 $[a,b]$ 上连续, 由最值定理, 存在 $m, M$ 分别为 $f(x)$ 的最小值和最大值.
即 $m \le f(x) \le M$.
由于 $g(x) \ge 0$, 我们可以同乘 $g(x)$ 而不改变不等号方向:
$$
m g(x) \le f(x)g(x) \le M g(x)
$$
根据定积分的保序性, 两边同时积分:
$$
m \int_a^b g(x) dx \le \int_a^b f(x)g(x) dx \le M \int_a^b g(x) dx
$$
1. 若 $\int_a^b g(x) dx = 0$, 则不等式变为 $0 \le \int f g \le 0$, 等式显然成立 (此时两边均为0).
2. 若 $\int_a^b g(x) dx > 0$, 则除以该积分值, 得:
$$
m \le \frac{\int_a^b f(x)g(x) dx}{\int_a^b g(x) dx} \le M
$$
根据**介值定理 (Intermediate Value Theorem)**, 连续函数 $f(x)$ 可以取到介于最小值 $m$ 和最大值 $M$ 之间的任意值. 因此, 必存在 $\xi \in [a,b]$, 使得:
$$
f(\xi) = \frac{\int_a^b f(x)g(x) dx}{\int_a^b g(x) dx}
$$
整理即得证.

Holder 不等式 (Hölder's Inequality)

Holder 不等式是柯西-施瓦茨不等式 (Cauchy-Schwarz Inequality) 的推广, 也是泛函分析中 $L^p$ 空间理论的基石. 在处理积分的估值和收敛性问题时极具威力.

**定理**: 
设 $p, q$ 为共轭指数, 即 $p>1, q>1$ 且满足 $\frac{1}{p} + \frac{1}{q} = 1$. 若 $|f(x)|^p$ 和 $|g(x)|^q$ 在 $[a,b]$ 上可积, 则 $|f(x)g(x)|$ 也可积, 且满足:
$$
\int_a^b |f(x)g(x)| dx \le \left( \int_a^b |f(x)|^p dx \right)^{\frac{1}{p}} \left( \int_a^b |g(x)|^q dx \right)^{\frac{1}{q}}
$$

特别地, 当 $p=q=2$ 时, 这就是著名的 **Cauchy-Schwarz 不等式**:
$$
\int_a^b |fg| dx \le \sqrt{\int_a^b f^2 dx} \cdot \sqrt{\int_a^b g^2 dx}
$$

**证明**:
证明的核心在于利用 **Young 不等式**: 对于 $a, b \ge 0$, 有 $ab \le \frac{a^p}{p} + \frac{b^q}{q}$.

记 $A = \left( \int_a^b |f(x)|^p dx \right)^{\frac{1}{p}}$, $B = \left( \int_a^b |g(x)|^q dx \right)^{\frac{1}{q}}$.

如果 $A=0$ 或 $B=0$, 则 $f(x)$ 或 $g(x)$ 几乎处处为0, 不等式两边均为0, 显然成立.
现假设 $A > 0, B > 0$.

对任意 $x \in [a,b]$, 令 $a = \frac{|f(x)|}{A}, b = \frac{|g(x)|}{B}$, 代入 Young 不等式:
$$
\frac{|f(x)g(x)|}{AB} \le \frac{1}{p} \frac{|f(x)|^p}{A^p} + \frac{1}{q} \frac{|g(x)|^q}{B^q}
$$
对两边在 $[a,b]$ 上积分:
$$
\frac{1}{AB} \int_a^b |f(x)g(x)| dx \le \frac{1}{p} \frac{\int_a^b |f(x)|^p dx}{A^p} + \frac{1}{q} \frac{\int_a^b |g(x)|^q dx}{B^q}
$$
注意到 $A^p = \int_a^b |f(x)|^p dx$, $B^q = \int_a^b |g(x)|^q dx$, 代入上式右边:
$$
\text{右边} = \frac{1}{p} \cdot 1 + \frac{1}{q} \cdot 1 = 1
$$
因此:
$$
\frac{1}{AB} \int_a^b |f(x)g(x)| dx \le 1
$$
$$
\int_a^b |f(x)g(x)| dx \le AB = \left( \int_a^b |f(x)|^p dx \right)^{\frac{1}{p}} \left( \int_a^b |g(x)|^q dx \right)^{\frac{1}{q}}
$$
以上就是定积分的性质的全部内容

## 微积分基本定理

对于定积分问题, 我们针对其可积性问题进行了深入的讨论, 下面我们将对定积分如何求解的问题进行深入探讨. 在讨论积分值的求解的过程中, 我们必须借助一类辅助函数, 也就是变限函数, 即上限或者下限为变量的函数.

**定义**设$f(x)$在$[a,b]$上可积, 作函数:

$$
F(x) = \int_a^x f(t) dt, x \in [a,b]
$$

显然$F(x)$在定义域上连续(**在计算的时候这是一个强制性的要求**). 倘若$f(x)$在定义域上连续, 则$F(x)$可导. 我们下面给出其导数的表达式:

$$
F'(x) = \lim_{\Delta x \to 0}\frac{F(x+\Delta x)-F(x)}{\Delta x} = \lim_{\Delta x \to 0} \frac{1}{\Delta x}(\int_a^{x+\Delta x}f(t)-\int_a^xf(t)) = \lim_{\Delta \to 0} f(\xi)
$$

由积分中值定理$\xi \in (x, x+\Delta x)$. 当$\Delta \to 0$时, 我们一定可以得到:

$$
F'(x) = \lim_{\Delta \to 0}f(\xi) = f(x)
$$

也就是说, 变上限函数$F(x)$本质上是$f(x)$的原函数. 我们根据不定积分的定义:

$$
\int_a^x f(t) dt = F(x) + C
$$

取$x=a$, 我们可以求出$C= - F(a)$. 所以:

$$
\int_a^x f(t) dt = F(x) - F(a) 
$$

进一步的, 我们取$x=b$, 我们得到一个表达式:

$$
\int_a^b f(t) dt = F(b) - F(a) = F(x) |^{b}_{a}
$$

这个公式被称为Newton-Leibniz公式, 也被称作微积分基本定理, 它优雅的把导数, 不定积分, 定积分三者结合起来了, 是数学分析和微积分学中非常优雅的结论.

微积分基本定理是求解定积分的最佳武器.

由Newton-Leibniz公式可以推出以下规律:

设$f(x)$, $g(x)$分别为奇函数和偶函数, $a>0$, 那么对于对称区间上的积分:

$$
\int_{-a}^a f(x)dx = 0 \quad \int_{-a}^{a}g(x)dx = 2 \int_0^a g(x)dx
$$

设$h(x)$是以$T$为周期的可积函数, 那么对任意$a$, 都有:

$$
\int_a^{a+T}h(x)dx = \int_0^Th(x)dx
$$

这两个定理的证明略.

在应用微积分基本定理将定积分转化为不定积分问题时, 我们依旧可以采用分部积分法和换元积分法来解决问题, 而且换元积分时我们反而不需要关注单调性问题, 这是因为我们无需再通过求反函数代回积分后的表达式, 而是直接换上下限就可以.

最后再来看一个例子: 求定积分:

$$
\int_0^2\frac{(x-1)^2+1}{(x-1)^2+x^2(x-2)^2}dx
$$

观察到:

$$
\int \frac{(x-1)^2+1}{(x-1)^2+x^2(x-2^2)}dx = \arctan \frac{x(x-2)}{x-1} = F(x)
$$

所以我们便得到:

$$
\int_0^2\frac{(x-1)^2+1}{(x-1)^2+x^2(x-2)^2}dx = \arctan \frac{x(x-2)}{x-1} \bigg|_0^2 = 0
$$

但是这是不可能, 因为被积函数在定义域上恒正, 是哪里出了问题呢?

经过观察, 我们发现经过不定积分得到的函数$F(x)$在$x=1$处竟然是不连续的. 这就是导致问题的所在.

因为$\{1\}$是一个$\mathbb{R}$上的零测集, 所以我们可以在$x=1$的两侧分别积分:

$$
\int_0^2\frac{(x-1)^2+1}{(x-1)^2+x^2(x-2)^2}dx = \arctan \frac{x(x-2)}{x-1} \bigg|_0^1+ \arctan \frac{x(x-2)}{x-1} \bigg|_1^2=\pi
$$

即为所求. 这提示我们在计算的时候务必关注微积分基本定理的适用条件.

## 微元法与几何计算

让我们看看一元函数微积分在几何计算中的应用

### 求平面图形的面积

由定积分的几何意义我们可以轻易推出平面图形的面积的表达式.

$S_1$是$f(x)$和x轴围成的面积, $S_2$是$f(x)$和$g(x)$围成的面积

$$
S_1 = \int_a^b |f(x)| dx \quad S_2=\int_a^b|f(x)-g(x)|dx
$$

倘若$f(x)$是用参数方程形式写成的: 那么:

$$
\begin{cases}
    x = x(t) \\
    y = y(t)
\end{cases}

\quad t \in [T_1,T_2]

\quad S_1 = \int_{T_1}^{T_2}|y(t) \cdot x'(t)|dt
$$

而若曲线是由极坐标方程$r = r(\theta)$表示的, 那么它和两条边界极径$\theta = \alpha, \theta = \beta$围成的图形面积可以表示为:

$$
S = \frac{1}{2} \int_{\alpha}^{\beta}r^2(\theta)d\theta
$$

### 求光滑曲线的弧长

我们在曲线上取一小段弧长, 我们可以近似的把它看作是一段直线. 那么由勾股定理, 我们可以得到: $\Delta s = \sqrt{\Delta^2 x+\Delta^2y}$. 进而得到:

倘若$f(x)$是由参数方式写成的, 那么:

$$
\begin{cases}
    x = x(t) \\
    y = y(t)
\end{cases}

\quad t \in [T_1,T_2]

\quad L=\int_{T_1}^{T_2}\sqrt{[x'(t)]^2+[y'(t)]^2} dt

$$

用$f(x)$显性表示则可以写作:

$$
L = \int_a^b\sqrt{1+[f'(x)]^2}dx
$$

用$r = r(\theta)$表示则可以写作:

$$
L = \int_{\alpha}^{\beta} \sqrt{[r(\theta)]^2+[r'(\theta)]^2}d\theta
$$

### 求旋转体的体积

考虑平面曲线 $y = f(x)$ 在区间 $[a, b]$ 上绕 $x$ 轴旋转一周所形成的旋转体。利用微元法，取微小区间 $[x, x+dx]$，对应薄片体积近似为 $\pi [f(x)]^2 dx$，因此总体积为：

$$
V_x = \pi \int_a^b [f(x)]^2 dx
$$

类似地，若曲线绕 $y$ 轴旋转，且由 $x = g(y)$ 表示，$y \in [c, d]$，则体积为：

$$
V_y = \pi \int_c^d [g(y)]^2 dy
$$

对于参数方程 $\begin{cases} x = x(t) \\ y = y(t) \end{cases}$，$t \in [T_1, T_2]$，绕 $x$ 轴旋转的体积公式为（假设 $x(t)$ 单调变化）：

$$
V_x = \pi \int_{T_1}^{T_2} [y(t)]^2 \cdot x'(t) \, dt
$$

注意，实际计算时需根据旋转轴和参数范围确定积分表达式.

### 求旋转曲面的面积

旋转曲面面积是指曲线旋转一周所形成曲面的侧面积。对于曲线 $y = f(x)$ 在 $[a, b]$ 上绕 $x$ 轴旋转, 我们进行如下推导:

将光滑曲线上一段无穷小的弧长 $ds$ 绕坐标轴旋转一周，所得曲面可近似视为一个圆台的侧面。圆台的侧面积公式为：

$$
S_{\text{侧}} = \pi (r_1 + r_2) l
$$

其中 $r_1$、$r_2$ 是上下底半径，$l$ 是母线长。当弧长趋于无穷小时，$r_1 \approx r_2 \approx r$（旋转半径），且母线长 $l = ds$，因此面积微元为：

$$
dA = 2\pi r \cdot ds
$$

这里 $r$ 是弧上点到旋转轴的垂直距离，$ds$ 是弧长微元。

**具体情形推导**

1. 曲线 $y = f(x)$ 绕 $x$ 轴旋转

- **旋转半径**：点 $(x, f(x))$ 到 $x$ 轴的距离为 $|f(x)|$，故 $r = |f(x)|$。
- **弧长微元**：$ds = \sqrt{1 + \left( \frac{dy}{dx} \right)^2} dx = \sqrt{1 + [f'(x)]^2} dx$。
- **面积微元**：代入 $dA = 2\pi r \cdot ds$ 得：

$$
dA = 2\pi |f(x)| \sqrt{1 + [f'(x)]^2} dx
$$

2. 曲线 $x = g(y)$ 绕 $y$ 轴旋转

- **旋转半径**：点 $(g(y), y)$ 到 $y$ 轴的距离为 $|g(y)|$，故 $r = |g(y)|$。
- **弧长微元**：$ds = \sqrt{1 + \left( \frac{dx}{dy} \right)^2} dy = \sqrt{1 + [g'(y)]^2} dy$。
- **面积微元**：代入 $dA = 2\pi r \cdot ds$ 得：

$$
dA = 2\pi |g(y)| \sqrt{1 + [g'(y)]^2} dy
$$

3. 参数方程 $\begin{cases} x = x(t) \\ y = y(t) \end{cases}$ 绕 $x$ 轴旋转

- **旋转半径**：点 $(x(t), y(t))$ 到 $x$ 轴的距离为 $|y(t)|$，故 $r = |y(t)|$。
- **弧长微元**：$ds = \sqrt{ \left( \frac{dx}{dt} \right)^2 + \left( \frac{dy}{dt} \right)^2 } dt = \sqrt{ [x'(t)]^2 + [y'(t)]^2 } dt$。
- **面积微元**：代入 $dA = 2\pi r \cdot ds$ 得：

$$
dA = 2\pi |y(t)| \sqrt{ [x'(t)]^2 + [y'(t)]^2 } dt
$$

4. 参数方程 $\begin{cases} x = x(t) \\ y = y(t) \end{cases}$ 绕 $y$ 轴旋转

- **旋转半径**：点 $(x(t), y(t))$ 到 $y$ 轴的距离为 $|x(t)|$，故 $r = |x(t)|$。
- **弧长微元**：同上，$ds = \sqrt{ [x'(t)]^2 + [y'(t)]^2 } dt$。
- **面积微元**：代入 $dA = 2\pi r \cdot ds$ 得：

$$
dA = 2\pi |x(t)| \sqrt{ [x'(t)]^2 + [y'(t)]^2 } dt
$$

所有公式统一为 $dA = 2\pi r \cdot ds$，其中 $r$ 是旋转半径，$ds$ 是弧长微元，具体表达式取决于曲线方程和旋转轴。推导基于几何直观的圆台近似，并假设曲线光滑且旋转时不自交。下面给出部分的积分表达式.

$$
A_x = 2\pi \int_a^b |f(x)| \sqrt{1 + [f'(x)]^2} \, dx
$$

类似地，绕 $y$ 轴旋转，由 $x = g(y)$ 表示，$y \in [c, d]$，则：

$$
A_y = 2\pi \int_c^d |g(y)| \sqrt{1 + [g'(y)]^2} \, dy
$$

对于参数方程 $\begin{cases} x = x(t) \\ y = y(t) \end{cases}$，$t \in [T_1, T_2]$，绕 $x$ 轴旋转的曲面面积为：

$$
A_x = 2\pi \int_{T_1}^{T_2} |y(t)| \sqrt{[x'(t)]^2 + [y'(t)]^2} \, dt
$$

绕 $y$ 轴旋转时，公式类似，只需交换 $x$ 和 $y$ 的角色。这些公式均假设曲线光滑，且旋转过程中无自交.
