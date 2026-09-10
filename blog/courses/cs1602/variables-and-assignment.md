---
title: "Variables, objects, and assignment"
description: "References, mutable and immutable objects, interning, and the += operator."
order: 4
tags: [Python, Programming]
---

理解 Python 的变量本质（引用语义）是掌握语言核心的关键。Python 中的变量更像是贴在对象上的**便利贴（标签）**，而不是装数据的盒子。

## 指向关系与赋值分类

- **变量 (Variable)**: 仅仅是一个名字（引用），指向内存中的对象。
- **对象 (Object)**: 存储实际数据的实体，拥有类型 (type)、值 (value) 和 唯一标识 (id)。

- **重新赋值 (Re-assignment)**: 形式为 `a = ...`。 改变的是**变量的指向**，让变量指向一个新的对象。原对象如果引用计数为0会被回收。

- **修改赋值 (Mutation)**: 形式为 `a[i] = ...` 或 `a.x = ...`。 变量指向的**对象本身发生了改变**（内容更新），但变量依然指向该对象（ID不变）。**前提是该对象支持修改（即 Mutable）**。

```
a = [1, 2, 3]   # a 指向列表对象 <Obj_1>
b = a           # b 也指向 <Obj_1>

# 1. 修改赋值 (Mutation)
a[0] = 99       # <Obj_1> 内容变为 [99, 2, 3]
print(b)        # [99, 2, 3] -> b 受到影响，因为指向同一个对象

# 2. 重新赋值 (Re-assignment)
a = [4, 5]      # a 撕掉标签，贴到了新对象 <Obj_2> 上
print(b)        # [99, 2, 3] -> b 依然指向 <Obj_1>，不受影响
```

## 不可变 (Immutable) vs 可变 (Mutable)

| **类型**  |  **常见数据结构**  |  **特点** |
| --- | --- | --- |
| **不可变 (Immutable)**  |  `int`, `float`, `str`, `tuple`, `bool`  |  一旦创建，内容不可改。 |
| **可变 (Mutable)**  |  `list`, `dict`, `set`  |  内容可以就地修改，ID 保持不变。 |

## 对象创建与复用规则

### 1. 赋值语句中的对象创建

原则上，赋值语句右侧的表达式每次运算都会创建一个**新对象**。
- **可变对象不复用**：即使内容相同，每次创建的 List/Dict 都是独立的。
- **变量传递无拷贝**：如果表达式只是单个变量 `b = a`，则**不创建新对象，也不进行拷贝**，仅仅是传递引用（多了一个标签）。

```
x = [1, 2]
y = [1, 2]
print(x == y)  # True (值相等)
print(x is y)  # False (不是同一个对象，内存地址不同)

z = x
print(z is x)  # True (直接指向，不产生拷贝)
```

### 2. 不可变对象的特殊共享 (Interning)

为了优化性能，Python 对**小整数**（通常是 -5 到 256）和**短字符串**会进行缓存复用。

```
a = 100; b = 100
print(a is b)  # True (触发了小整数缓存机制)
```

## `+=` 的区别

`+=` (In-place Add) 对于可变和不可变对象有截然不同的行为，这是一个容易出错的**坑点**。

> **Warning — += 操作符的陷阱**
>
> - **对于 Immutable (如 int, str)**：
> `a += b` 等价于 `a = a + b`。
> **效果**：创建新对象，重新赋值。变量 `a` 的 ID 会改变。
>
> - **对于 Mutable (如 list)**：
> `a += b` 等价于 `a.extend(b)`。
> **效果**：**就地修改**原对象。变量 `a` 的 ID **保持不变**。
>
> **示例：**
>
> ```Python
> # --- Case 1: List (Mutable) ---
> a = [1, 2]
> b = a
> a += [3]      # 在原列表追加，a 依然指向原对象
> print(b)      # 输出 [1, 2, 3] (b 被"连累"了)
>
> # --- Case 2: Int (Immutable) ---
> x = 10
> y = x
> x += 1        # 计算 11，x 指向新对象 11
> print(y)      # 输出 10 (y 依然指向旧对象 10)
> ```
