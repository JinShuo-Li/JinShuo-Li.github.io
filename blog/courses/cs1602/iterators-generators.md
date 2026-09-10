---
title: "Iterators, generators, and unpacking"
description: "The iterator protocol, generators and yield, generator expressions, and unpacking."
order: 15
tags: [Python, Programming]
---

## 迭代器协议

Python 的 `for` 循环底层依赖于迭代器协议。

- **可迭代对象 (Iterable)**: 实现了 `__iter__()` 方法的对象。例如 List, Tuple, Dict, Str。 **作用**: 可以被 `for` 循环遍历，或者通过 `iter(obj)` 获取迭代器。

- **迭代器 (Iterator)**: 实现了 `__iter__()` 和 `__next__()` 方法的对象。 **作用**: 负责维护遍历的状态（游标）。

## iter() 与 next() 的工作机制

- `it = iter(iterable)`: 调用对象的 `__iter__()`，返回一个迭代器。
- `val = next(it)`: 调用迭代器的 `__next__()`，返回下一个值。
- **StopIteration**: 当没有更多元素时，`next()` 会抛出此异常，通知 `for` 循环停止。

```
s = "ABC"
it = iter(s)        # 获取迭代器
while True:
    try:
        val = next(it)  # 获取值
        print(val)
    except StopIteration:
        break           # 捕获异常退出循环
```

## 解包 (Unpacking)

- **序列解包 (*a)**: 用于 List/Tuple。

```
head, *mid, tail = [1, 2, 3, 4, 5]
# head=1, mid=[2,3,4], tail=5
```

- **字典解包 (**b)**: 用于函数参数或字典合并。

```
def func(a, b): pass
d = {'a': 1, 'b': 2}
func(**d)  # 等价于 func(a=1, b=2)
```

生成器是一种特殊的迭代器，通过函数动态生成值，**省内存**。

## 基本语法：yield

如果函数中包含 `yield` 关键字，该函数就变成了**生成器函数**。

- **return**: 终止函数，返回结果，销毁局部变量。
- **yield**: **暂停**函数执行，返回结果，**保留**局部变量状态。下次调用 `next()` 时从暂停处继续执行。

```
def count_down(n):
    while n > 0:
        yield n   # 产出 n 并暂停
        n -= 1

g = count_down(3)
print(next(g)) # 3
print(next(g)) # 2
```

## 生成器表达式 (Generator Expression)

> **Warning — 不是元组推导式**
>
> 使用圆括号 `()` 包裹的推导式是生成器表达式。Python 中**不存在** Tuple Comprehension。
>
> ```
> g = (x**2 for x in range(10))
> # <generator object ...>
> ```
