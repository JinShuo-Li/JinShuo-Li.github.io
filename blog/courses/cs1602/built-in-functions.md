---
title: "Built-in functions"
description: "Input and output, introspection, math, sequence operations, functional tools, and sorting."
order: 8
tags: [Python, Programming]
---

Python 提供了大量开箱即用的内置函数，考试中需重点掌握其参数行为及返回值类型。

## 输入输出与动态执行

- **print(*objects)**: $\quad$
输出对象到标准输出。
  - `sep`: 多个对象之间的分隔符，默认为空格。
  - `end`: 输出结束后的字符，默认为换行符。

```
print("A", "B", sep="-", end="!")
# 输出: A-B! (而不是 A B\n)
```

- **eval**:
将字符串作为 Python 表达式执行，并返回结果。 **功能强大**：可以处理复杂的字面量结构。

```
s = "[1, 2, 3]"
lst = eval(s)   # 将字符串转换为列表对象
print(lst[0])   # 输出 1
```

## 对象自省 (Introspection)

- **type(obj)**: 返回对象的类型对象。
- **id(obj)**: 返回对象的唯一标识符（通常是内存地址）。
- **len(obj)**: 返回容器（字符串、列表、字典等）的元素个数。

- **isinstance**: 判断 obj 是否是 class 的实例（**支持继承关系判定**）。
- **issubclass**: 判断 cls 是否是 class 的子类。

> **Note — type() vs isinstance()**
>
> 考试中常问两者的区别：
> - `type(x) == A`：**不考虑继承**。如果 x 是 A 的子类实例，结果为 False。
> - `isinstance(x, A)`：**考虑继承**。如果 x 是 A 的子类实例，结果为 True。（推荐使用）

## 数学运算与序列操作

- **sum**: 对序列进行求和。注意可指定起始值 `start`。
- **max/min**: 返回最大值/最小值。 **关键参数 key**: 类似于 sort，可以指定排序依据。 `max(["a", "abc"], key=len)` $\to$ `"abc"`

## 函数式编程与排序

- **sorted**:
返回一个新的**已排序列表**。 *区别*: `list.sort()` 是就地修改，返回 None；`sorted()` 返回新对象，原对象不变。

- **map**:
将 func 作用于 iterable 的每一个元素。

- **filter**:
将 iterable 中使得 `func(x)` 为 True 的元素保留下来。

> **Warning — Python 3 中的 map 和 filter**
>
> 在 Python 3 中，`map()` 和 `filter()` 返回的不再是列表，而是**迭代器 (Iterator)**。 它们是**惰性求值 (Lazy)** 的，只有在遍历或转换为 list 时才会计算。
>
> ```
> m = map(str, [1, 2, 3])
> print(m)        # <map object at ...> (不会直接打印内容)
> print(list(m))  # ['1', '2', '3'] (转换后可见)
> ```
