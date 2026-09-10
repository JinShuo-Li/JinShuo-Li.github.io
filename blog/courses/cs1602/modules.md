---
title: "Modules and random numbers"
description: "Import syntax, module execution and caching, __name__, and the random module."
order: 13
tags: [Python, Programming]
---

## 导入语法 (Import Syntax)

- `import math`: 使用 `math.sqrt(4)` 调用。
- `import math as m`: 别名，使用 `m.sqrt(4)`。
- `from math import sqrt`: 直接导入符号，使用 `sqrt(4)`。
- `from math import *`: 导入所有（不推荐，易污染命名空间）。

## 导入机制 (Execution & Caching)

> **Note — Import 发生了什么？**
>
> - **执行代码**: `import A` 会将模块 A 中的顶层代码**从头到尾执行一遍**。
> - **缓存机制**: Python 会把导入过的模块缓存在 `sys.modules` 中。 **多次 import 只执行一次**: 如果在一个程序中多次写了 `import A`，后续的导入直接使用缓存，**不会**重新执行模块代码（除非手动使用 `importlib.reload`）。

## `__name__` 与 `'__main__'`

每个模块都有一个内置属性 `__name__`。

- 如果模块是被 **直接运行** 的 (例如 `python my_script.py`)： `__name__` 的值为 `'__main__'`。
- 如果模块是被 **导入** 的 (例如 `import my_script`)： `__name__` 的值为模块本身的名字 (即 `'my_script'`)。

**经典用法 (测试代码保护):**

```
def func():
    print("Function logic")

# 以下代码只有在直接运行此文件时才执行
# 被别人 import 时不会执行
if __name__ == '__main__':
    func()
```

使用前需导入：`import random`。

## 数值生成 (Floats & Integers)

- **.random()**:
返回 `[0.0, 1.0)` 之间的浮点数 (包含0，不包含1)。

- **.uniform(a, b)**:
返回 `[a, b]` 之间的浮点数 (通常包含边界 b)。

- **.randint(a, b)**:
返回 `[a, b]` 之间的整数。 **注意**: **包含**右边界 `b`！这是 Python 中少有的闭区间。

- **.randrange**:
从 `range(start, stop, step)` 中随机选取一个整数。 **注意**: **不包含**右边界 `stop` (左闭右开)。

> **Warning — 边界陷阱：randint vs randrange**
>
> - `randint(1, 3)` 可能返回: 1, 2, **3**。
> - `randrange(1, 3)` 可能返回: 1, 2 (绝不会返回 3)。

## 序列操作 (Sequences)

假设序列为 `seq = [1, 2, 3, 4, 5]`。

- **.choice(seq)**:
从序列中随机返回**一个**元素。

- **.shuffle(seq)**:
**就地打乱 (In-place)** 序列顺序。 **返回 None**！千万不要写 `seq = random.shuffle(seq)`。

- **.sample(seq, k)**:
从序列中随机抽取 k 个元素。 **特征**: **无放回抽样** (No Replacement)。结果中元素不重复。 *限制*: k 不能大于序列长度 `len(seq)`，否则报错。

- **.choices(seq, k)**:
(Python 3.6+) 从序列中随机抽取 k 个元素。 **特征**: **有放回抽样** (With Replacement)。结果可能重复。 *功能*: 支持权重参数 `weights`。

> **Note — sample vs choices**
>
> - 想要“不重复”的抽奖？用 **sample**。
> - 想要“抛硬币/掷骰子”（独立重复实验）？用 **choices**。

## 随机种子 (Reproducibility)

- **.seed(a=None)**:
初始化伪随机数生成器。 **意义**: 如果种子相同，生成的随机数序列**完全一致**。常用于调试或作业中固定结果。

```
random.seed(10)
print(random.random())  # 假设输出 0.571...

random.seed(10)         # 再次设置相同的种子
print(random.random())  # 输出完全一样 0.571...
```
