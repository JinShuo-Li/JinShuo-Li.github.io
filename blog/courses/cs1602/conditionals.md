---
title: "Conditionals and pattern matching"
description: "if/elif/else, truthiness, conditional expressions, and structural pattern matching."
order: 5
tags: [Python, Programming]
---

## 判定标准：is 与 ==

在 `if` 判断中，必须分清“值相等”与“身份相同”。

- `==`：判断**值 (Value)** 是否相等（调用 `__eq__`）。绝大多数业务逻辑使用此符号。
- `is`：判断**身份 (Identity)** 是否相同（即内存地址是否一致，`id(a) == id(b)`）。通常用于判断 `None`。

```
a = [1, 2]
b = [1, 2]
if a == b:
    print("值相等")      # 会输出
if a is b:
    print("是同一个对象") # 不会输出 (两个独立的列表)
```

## 真值判定 (Truthiness)

Python 中不仅仅是 `True/False` 可以作为条件，**任何对象**都可以放在 `if` 后面进行判定。

> **Warning — 什么会被视为 False？**
>
> 除了明确的 `False`，以下值在布尔上下文中也被视为 **假 (False)**：
> - **None**
> - **数字零**: `0`, `0.0`, `0j`
> - **空序列**: `''`, `""` (空字符串), `[]` (空列表), `()` (空元组)
> - **空集合**: `{}` (空字典), `set()`
> **除上述情况外，其他所有值通常都视为 True。**

**示例：**

```
name = "Alice"
if name:          # 字符串非空，判定为 True
    print("Hi")

mylist = []
if mylist:        # 列表为空，判定为 False，不执行
    print("Full")
```

## 基本语法结构

### 1. if-elif-else 结构

最基础的逻辑控制。注意缩进必须一致。

```
score = 85
if score >= 90:
    print("A")
elif score >= 80:  # 可以有多个 elif
    print("B")
else:              # 可选
    print("C")
```

### 2. 结构化模式匹配 (Match-Case)

*(Python 3.10+ 新特性，类似 C 语言的 switch，但更强大)*

```
status = 404
match status:
    case 200:
        print("Success")
    case 404:
        print("Not Found")
    case _:        # 相当于 default/else，匹配所有剩余情况
        print("Unknown error")
```

## 条件表达式 (三元运算符)

Python 中没有 `expression ? true : false` 语法，而是使用更像自然语言的结构。

> **Note — 语法格式**
>
> `**变量 = 值1 if 条件 else 值2**`

**示例：**

```
age = 20
# 如果 age > 18，status 为 'Adult'，否则为 'Teen'
status = "Adult" if age > 18 else "Teen"
```

Python 3.10+ 引入的新特性，类似于 Switch-Case 但更强大，支持结构解构。

```
point = (0, 10)

match point:
    case (0, 0):
        print("Origin")
    case (0, y):  # 捕获 y
        print(f"Y-axis at {y}")
    case (x, 0):  # 捕获 x
        print(f"X-axis at {x}")
    case (x, y) if x == y: # 带守卫条件 (Guard)
        print("Diagonal")
    case _:
        print("Something else")
```
