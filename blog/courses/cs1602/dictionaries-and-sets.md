---
title: "Dictionaries, sets, and containers"
description: "Dictionaries, sets, hashing, comprehensions, and cross-container rules."
order: 10
tags: [Python, Programming]
---

字典是 Python 中唯一的内置映射类型，存储无序的（Python 3.7+ 插入有序）键值对。

## 构造方法

除了字面量 `{'a': 1}` 外，常见以下三种构造方式：

- **关键字参数 (Keyword Args)**: 键必须是合法的标识符字符串。

```
d = dict(name='Alice', age=20)
# {'name': 'Alice', 'age': 20}
```

- **Zip 压缩**: 适合将两个列表组合成字典。

```
keys = ['a', 'b'];
vals = [1, 2]
d = dict(zip(keys, vals))
# {'a': 1, 'b': 2}
```

- **元组列表**: 包含 (key, value) 对的可迭代对象。

```
pairs = [('a', 1), ('b', 2)]
d = dict(pairs)
```

## 核心限制：Key 必须 Hashable

> **Warning — TypeError: unhashable type**
>
> 字典的 **Key** 必须是**不可变类型**（准确说是可哈希的）。
> - **合法 Key**: `int`, `float`, `str`, `tuple` (前提是 tuple 内元素也 hashable)。
> - **非法 Key**: `list`, `dict`, `set`。
> *注：Value 没有任何限制，可以是任意对象。*

## 访问、修改与查询

- **访问/新增**: `d[key] = value`。如果 Key 不存在则新增，存在则覆盖。
- **查询**: `key in d`。仅判断 **Key** 是否存在，不检查 Value。
- **视图方法 (View Objects)**:
  - `.keys()`: 返回所有键。
  - `.values()`: 返回所有值。
  - `.items()`: 返回所有 (key, value) 元组。常用于遍历：

```
for k, v in d.items():
    print(k, v)
```

## 字典合并 (Merging)

合并是常见操作，需区分“原地修改”和“返回新对象”。

| **语法**  |  **类型**  |  **说明** |
| --- | --- | --- |
| `a.update(b)`  |  **原地修改**  |  把 b 的内容更新到 a 中，返回 None。 |
| `{**a, **b}`  |  **新对象**  |  解包合并，如果有重复 Key，b 覆盖 a。 |
| `a \| b`  |  **新对象**  |  (Python 3.9+) 联合运算符，功能同上。 |

## 删除操作

- `del d[key]`: 删除指定键，Key 不存在报 `KeyError`。
- `.pop(key, [default])`: 删除并**返回**该 Key 对应的值。推荐使用，可提供 default 避免报错。
- `.popitem()`: **LIFO** (后进先出) 删除并返回 `(key, value)` 元组。
- `.clear()`: 清空字典。

## 字典推导式 (Dict Comprehension)

语法：`{key_expr: val_expr for item in iterable}`

```
# 交换键值对
old = {'a': 1, 'b': 2}
new = {v: k for k, v in old.items()}
# {1: 'a', 2: 'b'}
```

## 拷贝机制

与列表一致，**字典的构造函数和 copy 方法均为浅拷贝 (Shallow Copy)**。

```
d1 = {'a': [1, 2]}
d2 = dict(d1)      # 浅拷贝

d2['a'].append(3)  # 修改内部可变对象
print(d1['a'])     # [1, 2, 3] -> d1 受影响
```

集合是**无序**且**不重复**的元素集合，主要用于去重和数学集合运算。

## 表示与构造

- **表示**: 使用花括号 `{1, 2, 3}`。
- **构造函数**: `set(iterable)`。

> **Warning — 空集合的陷阱**
>
> **千万小心**: `{}` 表示的是**空字典 (Empty Dict)**，而不是空集合！ 创建空集合必须使用构造函数：`empty_set = set()`。

## 元素限制：必须 Hashable

与字典的 Key 一样，**集合内的元素必须是不可变类型 (Hashable)**。
- **合法**: `{1, (2, 3), "abc"}`
- **非法**: `{ [1, 2] }` (列表不可哈希), `{ {1} }` (集合本身也不可哈希)。

## 集合运算 (重点)

集合支持丰富的数学运算符号。

| **符号**  |  **含义**  |  **说明** |
| --- | --- | --- |
| `a \| b`  |  **并集** (Union)  |  包含 a 和 b 中所有的元素。 |
| `a & b`  |  **交集** (Intersection)  |  同时存在于 a 和 b 中的元素。 |
| `a ^ b`  |  **对称差集**  |  只在 a 或只在 b 中的元素 (异或)。 |
| `a - b`  |  **差集**  |  在 a 中但不在 b 中的元素。 |

## 比较运算

集合的比较是基于**包含关系**的：
- `a <= b`: 判断 a 是否是 b 的**子集**。
- `a < b`: 判断 a 是否是 b 的**真子集**。
- `a >= b`: 判断 a 是否是 b 的**超集**。

## 常用方法

- `.add(x)`: 添加元素 x。如果已存在则无视。
- `.remove(x)`: 删除元素 x。如果不存在会报错 `KeyError`。
- `.discard(x)`: 删除元素 x。如果不存在**不会**报错 (安全删除)。

## 集合推导式 (Set Comprehension)

语法与字典推导式类似，但只有值没有键。

```
nums = {1, 2, 3}
squares = {x**2 for x in nums}  # {1, 4, 9}
```

以下三条规则是 Python 容器系统的核心机制，常用于处理复杂的嵌套结构。

## 1. 嵌套规则 (Nesting Rules)

List, Dict, Set, Tuple 可以任意互相嵌套，但必须遵守**“底层的 Hashable 限制”**：

- **List/Tuple**: 内部可以放任意对象（包括 List, Set, Dict）。
  - `[ {1,2}, [3,4] ]` $\checkmark$ 合法 (列表里放集合和列表)。
- **Dict Key / Set Element**: 内部**必须**是不可变对象 (Hashable)。
  - `{ (1,2): "ok" }` $\checkmark$ 合法 (元组作 Key)。
  - `{ [1,2]: "no" }` $\times$ **报错** (列表作 Key)。
  - `set([ [1], [2] ])` $\times$ **报错** (集合里不能放列表)。

## 2. 构造函数与迭代行为

List, Set, Tuple 的构造函数均接受**任意 Iterable 对象**。 **特别注意 Dict 的迭代行为**：
当把一个字典传给 `list()` 或 `set()` 时，默认迭代的是 **Keys**。

```
d = {'a': 1, 'b': 2}
lst = list(d)
print(lst)  # ['a', 'b'] (忽略了 Value)
```

## 3. 构造函数总是创建新对象

所有的内置构造函数 (`list()`, `set()`, `dict()`) 在调用时，**一定会**在内存中创建一个全新的对象 (New Identity)。

```
a = [1, 2, 3]
b = list(a)     # 这是一个浅拷贝 (Shallow Copy)

print(a == b)   # True  (内容相等)
print(a is b)   # False (ID不同，是两个独立容器)
```
