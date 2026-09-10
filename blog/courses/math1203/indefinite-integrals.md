---
title: "Indefinite integrals"
description: "Antiderivatives, substitution, integration by parts, and integration of rational functions."
order: 1
tags: [Mathematical Analysis, Integration]
---

不定积分本质上就是在求导函数的原函数, 概念上很简单, 但是技术性内容较多, 我们主要介绍一些技术性的细节

## 定义和基本性质

**定义**: 一个函数$f(x)$若在某个区间上和另一个函数$F(x)$有如下关系: 
$$
F'(x) = f(x)
$$
则称$F(x)$是$f(x)$的一个原函数.

**定义**: 一个函数$f(x)$的原函数的全体称为这个函数的不定积分, 记为: 
$$
\int f(x)  dx
$$
特别的, 我们可以根据定义得出: 
$$
\int f(x) dx = F(x) + C
$$
倘若$F(x)$是$f(x)$的一个原函数.

**性质**: 不定积分具有线性性质
$$
\int [k_1f(x)+k_2g(x)]dx = k_1\int F(x) +k_2\int G(x) +C
$$

## 基本方法和技巧
在不定积分中, 常用的技巧是**换元积分法**和**分部积分法**, 其中换元积分法分为第一类和第二类两种.

### 换元积分法

**第一类换元积分法**:
$$
\int f(x) dx = \int h(g(x))g'(x)dx = \int h(g(x))d(g(x)) = \int h(u) du, (u = g(x))
$$
这种换元积分法把对$f(x)$的积分转化为了对$h(u)$的积分, 倘若后者更容易计算, 便可以借助换元积分法完成简化计算. 换元积分法的核心在于寻找$u = g(x)$.

下面介绍一些技巧:

线性换元: 即$g(x) = ax+b$的形式, 这种形式是最简单的换元积分.

>e.g. 求$\int \frac{dx}{2x-1}$.  
解:
$$
\int \frac{dx}{2x-1} = \frac{1}{2}\int \frac{d(2x-1)}{2x-1}=\frac{1}{2} \ln (2x-1) +C
$$

三角换元: 利用三角函数间的代换关系实现换元积分.

>e.g. 求$\int \tan x dx$.  

$$
\int \tan x dx = \int \frac{\sin x}{\cos x} dx = -\int \frac{d(\cos x)}{\cos x} = -\ln |\cos x| + C
$$

>e.g. 求$\int \sec x dx$.  

$$
\int \sec x dx = \int \frac{1}{\cos x} dx = \int \frac{\cos x}{\cos ^2 x} dx = \frac{d(\sin x)}{1-\sin^2 x}
$$
令$u = \sin x$, 我们可以得到: 
$$
\int \sec x dx = \frac{1}{2} \ln \frac{1+\sin x}{1 - \sin x} +C
$$

>e.g. 求$\int \tan^nx dx +\int \tan^{n+2}x dx$

$$
\int \tan^nx dx +\int \tan^{n+2}x dx = \int \tan^n x (\tan^2 x+1)dx
$$

因为$\sec^2x = \tan^2x+1$, 而且$\frac{d}{dx} \tan x = \sec^2 x$. 我们进行变量代换:

$$
\int \tan^nx dx +\int \tan^{n+2}x dx = \int \tan^n x d(\tan x)
$$

我们至此把问题转化为了幂函数的积分问题, 下面的过程省略不谈.

**第二类换元积分法**

第二类换元积分法本质上是第一类换元积分法的逆过程, 写作:

$$
\int f(x)dx = \int f(\phi (x))d(\phi (x)) = \int f(\phi (x))\phi'(x)dx
$$

下面依旧介绍一些方法和技巧: 

三角换元: 第二类换元积分法最常用的方法就是三角换元法.

>e.g. 求$\int \sqrt{a^2 - x^2}dx$.

令$x = \phi (t) = a \sin t$, 于是我们只需要求:

$$
\int \sqrt{a^2 - x^2}dx =a^2 \int \cos^2 t dt= \frac{a^2}{2}\int (1+\cos 2t)dt = \frac{a^2}{2} (t + \frac{\sin 2t}{2}) +C
$$

代回$t = \phi^{-1} (x) = \arcsin \frac{x}{a}$

$$
\therefore \int \sqrt{a^2 - x^2}dx = \frac{1}{2} x \sqrt{a^2 - x^2} + \frac{a^2}{2} \arcsin\frac{x}{a} +C
$$

如果我们在被积函数的表达式中看到诸如: $\sqrt{a^2 - x^2}$, $\sqrt{x^2-a^2}$, $\sqrt{x^2 + a^2}$的格式, 可以用分别用 $x = a\sin t$, $x = a \sec t$, $x = a \tan t$来进行代换, 从而简化积分运算.

而对于在分子分母含有复杂带三角函数分式的函数, 我们可以用"万能代换"进行计算处理, 具体思想就是设$t = \tan \frac{\alpha}{2}$, 然后进行代换操作.

常用的公式如下:

$$
\sin \alpha = \frac{2 \tan \frac{\alpha}{2}}{1+\tan^2 \frac{\alpha}{2}}, \cos x = \frac{1-\tan^2 \frac{\alpha}{2}}{1+\tan^2 \frac{\alpha}{2}}, \tan x = \frac{2 \tan \frac{\alpha}{2}}{1-\tan^2 \frac{\alpha}{2}}
$$

所以任意三角有理函数的积分都可以重写为:

$$
\int R(\sin x, \cos x) dx = \int R(\frac{2t}{1+t^2},\frac{1-t^2}{1+t^2}) \frac{2}{1+t^2}dt
$$

这个代换在处理形如$\int \frac{1+\sin x}{1+\cos x}dx$的不定积分时十分有效, 这里省略具体计算.

### 分部积分法

分部积分法本质上可以被认为是函数乘积求导的逆运算

由于对任意两个可导的函数$u(x)$, $v(x)$, 都存在下列关系式:
$$
d[u(x)v(x)] = v(x)d[u(x)]+u(x)d[v(x)]
$$

我们可以反推出:

$$
\int u(x)v'(x)dx = u(x)v(x)- \int v(x)u'(x)dx
$$

这就是**分部积分**公式.

分部积分法的威力体现在它可以把积分问题部分的转化为对$u(x)$求导数的问题, 然后在一定程度上这就可以简化运算.

>e.g.求$\int x \cos x dx$.

$$
\int x \cos x dx = \int x d(\sin x) = x \sin x - \int \sin x dx = x \sin x + \cos x +C
$$

在运用分部积分法的时候, 选取谁作为$u(x)$是一门艺术, 一般来说, 我们会选取具有某种"重复"性质的函数作为$u(x)$, 然后多次运用分部积分法, 最终用解方程的方法解出来积分式的答案. 具体来说, 我们希望指数函数, 三角函数作为$u(x)$, 而我们在选择通过求导化简的函数的时候, 我们总是希望把对数函数, 幂函数选择作为$v(x)$, 然后通过一次或者多次运用分部积分将他们化作有理函数的形式.

我们也可以进一步推导得到多次运用分部积分法得到的一个表达式:

$$
\int u v^{(n+1)} dx = u v^{(n)} - u'v^{(n-1)} +u''v^{(n-2)} - u^{(3)}v^{(n-3)} + \cdots + (-1)^n u^{(n)} v + (-1)^{n+1} \int u^{n+1} v dx
$$

同时, 很多时候在运用分部积分法的时候还可以直接把$u(x)$设为$1$, 这样可能会方便计算. 比如下面这个例子:

>e.g.求$\int \ln x dx$.

$$
\int \ln x dx = \int 1 \cdot \ln x dx = x\ln x - \int x \cdot \frac{1}{x} dx =x\ln x - x +C
$$

下面提供一个基本积分表, 供参考.

$$
\int \frac{1}{a^2 + x^2}dx = \frac{1}{a}\arctan\left(\frac{x}{a}\right) + C 
$$
$$
\int \frac{1}{x^2 - a^2} \, dx = \frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right| + C
$$
$$
\int \frac{1}{a^2 - x^2} \, dx = \frac{1}{2a}\ln\left|\frac{a+x}{a-x}\right| + C 
$$
$$
\int \frac{x}{a^2 + x^2} \, dx = \frac{1}{2}\ln(a^2 + x^2) + C
$$
$$
\int \frac{1}{\sqrt{a^2 - x^2}} \, dx = \arcsin\left(\frac{x}{a}\right) + C
$$
$$
\int \frac{1}{\sqrt{x^2 + a^2}} \, dx = \ln|x + \sqrt{x^2 + a^2}| + C
$$
$$
\int \frac{1}{\sqrt{x^2 - a^2}} \, dx = \ln|x + \sqrt{x^2 - a^2}| + C
$$
$$
\int \frac{1}{x\sqrt{x^2 - a^2}} \, dx = \frac{1}{a}\text{arcsec}\left|\frac{x}{a}\right| + C
$$
$$
\int \sqrt{a^2 - x^2} \, dx = \frac{x}{2}\sqrt{a^2 - x^2} + \frac{a^2}{2}\arcsin\left(\frac{x}{a}\right) + C
$$
$$
\int \frac{1}{x\sqrt{a^2 - x^2}} \, dx = \frac{1}{a}\ln\left|\frac{a - \sqrt{a^2 - x^2}}{x}\right| + C
$$
$$
\int \sqrt{x^2 + a^2} \, dx = \frac{x}{2}\sqrt{x^2 + a^2} + \frac{a^2}{2}\ln|x + \sqrt{x^2 + a^2}| + C
$$
$$
\int \frac{1}{x\sqrt{a^2 + x^2}} \, dx = -\frac{1}{a}\ln\left|\frac{a + \sqrt{a^2 + x^2}}{x}\right| + C
$$
$$
\int \sqrt{x^2 - a^2} \, dx = \frac{x}{2}\sqrt{x^2 - a^2} - \frac{a^2}{2}\ln|x + \sqrt{x^2 - a^2}| + C 
$$
$$
\int \sin^2 x \, dx = \frac{x}{2} - \frac{\sin(2x)}{4} + C 
$$
$$
\int \cos^2 x \, dx = \frac{x}{2} + \frac{\sin(2x)}{4} + C
$$
$$
\int \tan^2 x \, dx = \tan x - x + C
$$
$$
\int \cot^2 x \, dx = -\cot x - x + C
$$
$$
\int \sec^3 x \, dx = \frac{1}{2}(\sec x \tan x + \ln|\sec x + \tan x|) + C
$$
$$
\int \csc^3 x \, dx = \frac{1}{2}(-\csc x \cot x + \ln|\csc x - \cot x|) + C
$$
$$
\int \arcsin x \, dx = x\arcsin x + \sqrt{1-x^2} + C
$$
$$
\int \arccos x \, dx = x\arccos x - \sqrt{1-x^2} + C
$$
$$
\int \arctan x \, dx = x\arctan x - \frac{1}{2}\ln(1+x^2) + C
$$
$$
\int \text{arcsec} x \, dx = x\text{arcsec} x - \ln|x + \sqrt{x^2 - 1}| + C
$$
$$
\int \text{arccot} x \, dx = x\text{arccot} x + \frac{1}{2}\ln(1+x^2) + C
$$
$$
\int \sinh x \, dx = \cosh x + C
$$
$$
\int \cosh x \, dx = \sinh x + C
$$
$$
\int \tanh x \, dx = \ln(\cosh x) + C 
$$
$$
\int \coth x \, dx = \ln|\sinh x| + C
$$
$$
\int \text{sech}^2 x \, dx = \tanh x + C 
$$
$$
\int \text{csch}^2 x \, dx = -\coth x + C 
$$
$$
\int \text{sech} x \, dx = \arctan(\sinh x) + C 
$$
$$
\int \text{csch} x \, dx = \ln\left|\tanh\left(\frac{x}{2}\right)\right| + C
$$
$$
\int \sinh^2 x \, dx = \frac{\sinh(2x)}{4} - \frac{x}{2} + C 
$$
$$
\int \cosh^2 x \, dx = \frac{\sinh(2x)}{4} + \frac{x}{2} + C
$$
$$
\int e^{ax} \sin(bx) \, dx = \frac{e^{ax}}{a^2+b^2}(a\sin(bx) - b\cos(bx)) + C 
$$
$$
\int e^{ax} \cos(bx) \, dx = \frac{e^{ax}}{a^2+b^2}(a\cos(bx) + b\sin(bx)) + C
$$

## 有理函数的积分

刚才的部分中, 我们系统性的介绍了两种积分法的基本运用. 然而, 我们在具体实践中会发现, 不是所有的函数都能显性的写出其原函数的表达式. 但是对于一类称为有理函数的特殊函数, 我们总是能写出其积分的数学表达式. 本部分将特别介绍有理函数的积分.

**定义**: 对于多项式$p_m(x)$和$q_n(x)$, 分别为$m$次多项式和$n$次多项式, 形如$R(x) = \frac{p_m(x)}{q_n(x)}$的函数被称为有理函数. 

特别的, 当$m<n$ 时我们称$R(x)$为真分式, 反之为假分式. 

在后面的问题中, 我们总假定有理函数$R(x)$是真分式. 否则我们总可以通过带余除法把假分式转化为真分式和一个多项式的和. 同时, 我们假设$q_n(x)$的最高次项系数为$1$.

由**代数学基本定理**可以知道, n次方程必有n个根. 由于复根必共轭存在, 我们一定可以把一个多项式$q_n(x)$唯一的分解为:

$$
q_n(x) = \prod^{i}_{k=1} (x-\alpha_k)^{m_k} \cdot \prod^{j}_{k=1}(x^2 + 2\xi_kx+\eta_k^2)^{n_k}
$$

**定理**: 设有理函数$R(x)$中$q_n(x)$有$k$重实根$\alpha$, 那么一定存在实数$\lambda$和多项式$p_1(x)$, 而且$p_1(x)$的次数低于$(x-\alpha)^{k-1} q_1(x)$的次数, 成立:

$$
\frac{p(x)}{q(x)} = \frac{\lambda}{(x-\alpha)^k}+\frac{p_1(x)}{(x-\alpha)^{k-1} q_1(x)}
$$

证明: 我们只需要令$\frac{p(\alpha)}{q_1(\alpha)} = \lambda$, 则$x=\alpha$是多项式$p(x)-\lambda q_1(x)$的根, 所以:

$$
p(x)-\lambda q_1(x) = (x-a)p_1(x)
$$

代回表达式即可推出.

同理我们也可以知道:

$$
\frac{p(x)}{q(x)} = \frac{\mu x + \upsilon}{(x^2+2\xi x + \eta^2)^l}+\frac{p^*(x)}{(x^2+2\xi x + \eta^2)^{l-1} q^*(x)}
$$

这意味着我们可以把任何一个有理函数写成上面分离出来的两种形式的和. 分别计算上面两种形式的积分并不是难事. 此略.
