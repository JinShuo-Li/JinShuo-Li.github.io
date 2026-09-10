---
title: "Classes and objects"
description: "Classes, self, class versus instance variables, magic methods, and inheritance."
order: 12
tags: [Python, Programming]
---

## 基本定义与 Self

Python 中一切皆对象。定义类使用 `class` 关键字。

- **构造函数**: `__init__(self, ...)`。在实例化对象时自动调用，用于初始化属性。
- **self**: 代表**实例对象本身**（类似于 Java/C++ 的 this）。
- **成员函数**: 定义在类内部，第一个参数必须是 `self`。

> **Warning — 忘记写 self 的后果**
>
> 如果在类内部定义函数时忘记加 `self`：
>
> ```
> class A:
>     def func():  # 错误！没有 self
>         print("Hi")
> a = A()
> a.func() # 报错！TypeError
> # 原因: a.func() 等价于 A.func(a)，但定义中不接受参数
> ```

## 类变量 vs 实例变量

- **实例变量 (Instance Variable)**: 绑定在 `self` 上（如 `self.x`），每个对象独有。
- **类变量 (Class Variable)**: 定义在类体中（函数之外），所有实例**共享**。

```
class Dog:
    kind = 'Canine'      # 类变量 (共享)
    def __init__(self, name):
        self.name = name  # 实例变量 (独有)

d1 = Dog('A');
d2 = Dog('B')
d1.kind = 'Wolf'          # 注意！这不会修改类变量，而是创建了一个新的实例变量 d1.kind
print(d1.kind)            # Wolf
print(d2.kind)            # Canine (依然共享类的原值)
print(Dog.kind)           # Canine
```

## 方法类型：@classmethod

- **实例方法**: `def f(self): ...`
- **类方法**: 使用 `@classmethod` 装饰器。第一个参数约定为 `cls` (代表类本身，而非实例)。常用于实现**工厂模式**。

## 魔术方法 (Magic Methods)

Python 通过双下划线方法实现运算符重载和特定行为。

### 1. 字符串表示

- `__str__(self)`: 用户友好的字符串。被 `print()` 和 `str()` 调用。
- `__repr__(self)`: 开发者视角的字符串（通常用于调试）。被交互式命令行直接回显调用。
- *原则*: 如果只定义了 `__repr__`，`__str__` 也会默认调用它。

### 2. 比较运算

- `__eq__` (==), `__ne__` (!=)
- `__lt__` (<), `__le__` (<=), `__gt__` (>), `__ge__` (>=)

### 3. 算术运算 (重点)

- `__add__(self, other)`: 实现 `self + other`。
- `__radd__(self, other)`: 实现 `other + self` (右加)。 **触发机制**: 当左操作数不支持 `__add__` 时，Python 会尝试调用右操作数的 `__radd__`。
- `__iadd__(self, other)`: 实现 `self += other` (就地修改)。

### 4. 容器模拟

- `__getitem__(self, key)`: 实现 `obj[key]` 读取。
- `__setitem__(self, key, value)`: 实现 `obj[key] = value` 写入。

## 继承 (Inheritance)

- **语法**: `class Child(Parent): ...`
- **super()**: 用于调用父类的方法，特别是构造函数。

```
class Parent:
    def __init__(self):
        self.x = 1

class Child(Parent):
    def __init__(self):
        super().__init__() # 必须显式调用，否则父类属性不会初始化
        self.y = 2
```
