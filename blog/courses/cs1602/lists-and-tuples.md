---
title: "Lists and tuples"
description: "Sequences, indexing and slicing, methods, comprehensions, and shallow versus deep copy."
order: 9
tags: [Python, Programming]
---

列表是 Python 中最常用的**可变 (Mutable)** 序列类型。

## 基本操作与构造

- **表示**: 使用方括号 `[]`, 元素间用逗号分隔。
- **构造函数**: `list(iterable)`。可将元组、字符串、range 等转换为列表。
- **运算**:
  - **加法 (+)**: `[1, 2] + [3]` $\to$ `[1, 2, 3]` (连接，产生新列表)。
  - **乘法 (*)**: `[1] * 3` $\to$ `[1, 1, 1]` (重复，产生新列表)。
- **成员判定**: `x in lst` (时间复杂度 O(n))。

## 索引与切片 (Indexing & Slicing)

### 1. 访问 (Access)

- **Index**: `a[i]`。支持负数索引（-1 为最后一个）。
- **Slice**: `a[start:stop:step]`。 **缺省值**: `start`默认为0，`stop`默认为长度，`step`默认为1。 *常用技巧*: `a[::-1]` (反转列表), `a[:]` (浅拷贝整个列表)。

### 2. 修改 (Modification) - 重点

列表是可变的，支持原位修改。

```
lst = [0, 1, 2, 3, 4]

# 索引修改 (必须存在)
lst[0] = 99         # -> [99, 1, 2, 3, 4]

# 切片修改 (功能强大：可替换、插入、删除)
# 将索引 1 到 3 的片段替换为新的列表
lst[1:3] = ['a', 'b', 'c']
# 结果: [99, 'a', 'b', 'c', 3, 4] (长度可以改变)

# 即使是切片赋值，右侧也必须是 Iterable
lst[1:2] = [100]    # 正确
# lst[1:2] = 100    # 报错！TypeError
```

## 常用方法 (Methods) 与删除

| **方法/操作**  |  **说明** |
| --- | --- |
| `.append(x)`  |  在末尾添加元素 x。 |
| `.extend(iterable)`  |  将 iterable 中的所有元素追加到末尾。 |
| `.insert(i, x)`  |  在索引 i 处插入 x。 |
| `.remove(x)`  |  删除**第一个**值为 x 的元素。如果不存在则报错。 |
| `.pop([i])`  |  删除并返回索引 i 处的元素（默认最后一个）。 |
| `.clear()`  |  清空列表，变为 `[]`。 |
| `.index(x)`  |  返回第一个 x 的索引。 |
| `.count(x)`  |  统计 x 出现的次数。 |
| `.sort(key=.., reverse=..)`  |  **就地排序 (In-place)**，无返回值 (None)。 |
| `.reverse()`  |  **就地反转**，无返回值。 |
| `del lst[i]`  |  删除指定索引的元素。 |
| `del lst[start:stop]`  |  删除切片范围内的元素。 |

## 列表推导式 (List Comprehension)

一种简洁构建列表的方法，通常比 for 循环更快。

- **基础语法**: `[expression for item in iterable if condition]`
- **嵌套 (Nested)**: 对应嵌套的 for 循环。

```
# 目标: 展平二维数组 matrix = [[1, 2], [3, 4]]
flat = [num for row in matrix for num in row]
# 等价于:
# for row in matrix:
#     for num in row: ...
```

## 核心难点：拷贝机制 (Shallow vs Deep Copy)

这是列表最容易出错的地方，必须严格区分三种拷贝层级。

### 1. 引用赋值 (Reference)

`b = a`。不创建新对象，`a` 和 `b` 指向同一块内存。

### 2. 浅拷贝 (Shallow Copy)

创建一个**新列表容器**，但列表里面的元素依然是**原对象的引用**。 **触发方式**:
- `b = a[:]` (切片)
- `b = a.copy()`
- `b = list(a)`

```
a = [[1], [2]]      # 嵌套列表
b = a.copy()        # 浅拷贝

b[0].append(9)      # 修改内部对象
print(a)            # [[1, 9], [2]] -> 原列表 a 也变了！
# 因为 b[0] 和 a[0] 指向的是同一个小列表对象
```

### 3. 深拷贝 (Deep Copy)

递归地拷贝列表及其包含的所有子对象。需导入 `copy` 模块。

```
import copy
c = copy.deepcopy(a) # 完全独立，修改 c 不会影响 a
```

### 4. 乘法操作符 `*` 的陷阱

`lst * n` 执行的是**浅拷贝**。

> **Warning — 千万别这样初始化二维数组！**
>
> **错误写法：**
>
> ```
> # 创建一个 3x3 矩阵
> matrix = [[0] * 3] * 3
> # 结果: [[0,0,0], [0,0,0], [0,0,0]]
> # 问题: 这3个内部列表其实是同一个对象的引用！
>
> matrix[0][0] = 99
> print(matrix)
> # 结果: [[99,0,0], [99,0,0], [99,0,0]] -> 3行全变了
> ```
>
> **正确写法 (List Comprehension)：**
>
> ```
> # 推导式每次循环都会重新计算表达式 -> 创建新的列表对象
> matrix = [[0] * 3 for _ in range(3)]
> ```

> **Note — List Comprehension 的求值特性**
>
> 推导式中的表达式（expression）在每次迭代时都会**重新求值 (Re-evaluates)**。
> - `[[1] for _ in range(3)]`: 循环3次，每次都创建一个新的 `[1]`。相当于对 `[1]` 做了 **Deep Copy** 的效果（虽然技术上不是通过 deepcopy 实现的）。

元组可以被视为**不可变的列表 (Immutable List)**。一旦创建，其长度和内部元素的指向都不能改变。

## 表示与构造

- **符号**: 使用圆括号 `()`。
- **构造函数**: `tuple(iterable)`。
- **空元组**: `t = ()`。

> **Warning — 单元素元组的陷阱**
>
> 创建只有一个元素的元组时，**必须在元素后加逗号**，否则 Python 会将其识别为普通的数学运算括号（即该元素本身的类型）。
>
> ```
> t1 = (1)    # <class 'int'> (整数 1)
> t2 = (1,)   # <class 'tuple'> (元组)
> ```

## 基本操作

元组支持大部分列表的**只读**操作：

- **索引 (Indexing)**: `t[0]`, `t[-1]`。
- **切片 (Slicing)**: `t[1:3]`。返回一个新的元组。
- **成员判定**: `x in t`。
- **运算**:
  - **加法**: `(1, 2) + (3,)` $\to$ `(1, 2, 3)` (创建新元组)。
  - **乘法**: `(1,) * 3` $\to$ `(1, 1, 1)`。

## 常用方法

由于不可变，元组**没有** `append`, `extend`, `remove` 等修改方法。仅支持查询：

- `.count(x)`: 统计 x 出现的次数。
- `.index(x)`: 返回 x 第一次出现的索引。

## 特殊考点：没有"元组推导式"

> **Note — Tuple Comprehension 不存在**
>
> 在 Python 中，使用圆括号包裹的推导式语法 `(x for x in ...)` **并不是**元组推导式，而是创建一个**生成器对象 (Generator Expression)**。
>
> 如果需要通过推导逻辑创建元组，必须显式调用 `tuple()`：
>
> ```
> # 错误理解：以为这是元组
> g = (i * 2 for i in range(3))
> print(type(g))  # <class 'generator'>
>
> # 正确创建元组
> t = tuple(i * 2 for i in range(3))
> print(t)        # (0, 2, 4)
> ```

## 进阶：元组真的"不可变"吗？

元组的不可变性指的是**“其存储的引用（内存地址）不可变”**。如果元组内部包含可变对象（如列表），该内部对象的内容是可以修改的。

```
t = (1, [2, 3])
# t[0] = 2       # 报错！TypeError (不能修改引用)
# t[1] = [4]     # 报错！TypeError (不能修改引用)

t[1].append(4)   # 合法！修改了内部列表的内容
print(t)         # (1, [2, 3, 4])
```


## Practice examples

```python
#####list_lasted
#list_comprehention
print([x**2 for x in range(1,11) if x%2 == 0])
print([x**2 for x in range(1,11)])

#nested_comprehension
matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
print([[row[i] for row in matrix] for i in range(4)])

#built-in function
list_test = [2,1,3,4]
#-len
print(len(list_test))
#-min/max
print(min(list_test),max(list_test))
#-sum
print(sum(list_test))
#-sorted
print(sorted(list_test))
#-reversed
print(list(reversed(list_test)))
print("".join(str(x)for x in list_test),end="")

#emurate
lst = [1,2,3,4]
for i,_ in enumerate(lst):
    print(i,_)

#####dictionary
#merge: the last one will cover the first one if they shared the same keywords.
a = {1:0,2:1,3:2,4:3}
b = {1:1,2:1,3:2}
c = {**a,**b}
print(c)

#loop through dictionaries
dictionary = {1:0,2:1,3:2,4:3}
for x in dictionary:
    print(x)
for x in dictionary:
    print(dictionary[x])
for x in dictionary.values():
    print(x)
for x,y in dictionary.items():
    print(x,y)

#upper函数不会自动修改，而是返回修改值
#lst.sort不会返回修改值，而是自动修改
```
