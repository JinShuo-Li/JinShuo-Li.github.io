---
title: "Functions"
description: "Defining functions, parameter kinds, argument passing, closures, decorators, and recursion."
order: 7
tags: [Python, Programming]
---

## 定义与调用基础

- **定义**: 使用 `def` 关键字。
- **Return**:
  - `return` 语句执行后，函数**立即终止**。
  - 如果函数体执行完毕没有遇到 `return`，或者写了 `return` 但后面没跟值，默认返回 `None`。
- **对象方法调用**: 语法为 `obj.method(args)`，例如 `lst.count(1)`。这实际上是将 `obj` 作为隐含的第一个参数传递给函数。

## 参数类型与规则

Python 的参数处理非常灵活，需严格掌握以下四种类型及其顺序。

### 1. 参数分类

- **Positional Args**: 位置参数。按顺序对应。
- **Keyword Args**: 关键字参数。调用时指定 `name=value`。
- **Arbitrary Posi.**: `*args`。接收多余的位置参数，打包成 **Tuple**。
- **Arbitrary Key.**: `**kwargs`。接收多余的关键字参数，打包成 **Dict**。

> **Note — 缺省参数 (Default Arguments) 的限制**
>
> - **位置限制**：在函数定义时，**缺省参数必须放在非缺省参数之后**。 *错误示例*: `def f(a=1, b): ...` (SyntaxError) *正确示例*: `def f(b, a=1): ...`
> - **调用限制**：一旦在调用中使用了关键字参数，其后的所有参数都必须使用关键字形式。

## 参数传递机制

Python 的参数传递既不是纯粹的“传值”，也不是“传引用”，而是**“传对象引用 (Call by Object Reference)”**。即传入的是对象的**内存地址**。

> **Warning — 重新赋值 vs 修改对象**
>
> 函数内部的操作是否影响外部变量，取决于操作类型：
> - **重新赋值 (Re-assignment) - 不影响外部** `x = ...` 只是让局部变量 `x` 指向了新对象，原外部对象不动。
>
> - **修改对象 (Mutation) - 影响外部** `x[0] = ...`, `x.append()`, `x.attr = ...` 是顺着地址修改了**原对象**的内容。

```
def modify(a_list, b_list):
    # 1. 重新赋值 (Re-assignment)
    a_list = [99, 99]      # a_list 贴到了新列表上，断开了与外部的联系

    # 2. 修改内容 (Mutation)
    b_list.append(100)     # 顺着地址修改了外部传入的那个列表对象

x = [1, 2]
y = [1, 2]
modify(x, y)

print(x)  # [1, 2]       -> 未变
print(y)  # [1, 2, 100]  -> 已变
```

## 高阶特性：嵌套、装饰器与 Lambda

### 1. 嵌套函数 (Nested Functions)

函数内部可以定义函数，也可以将内部函数作为返回值返回（闭包的基础）。

### 2. 装饰器 (Decorator)

本质上是一个接收函数作为参数并返回新函数的高阶函数。

```
@my_decorator
def my_func():
    pass
# 等价于: my_func = my_decorator(my_func)
```

### 3. Lambda 表达式

匿名函数，通常用于简单的单行逻辑。
- **语法**: `lambda arguments: expression`
- **注意**: 只能包含一个表达式，不能包含复杂的语句（如赋值、循环）。隐式返回表达式的结果。

```
f = lambda x, y: x + y
print(f(1, 2))  # 输出 3

# 常用于排序
pairs = [(1, 'one'), (3, 'three'), (2, 'two')]
pairs.sort(key=lambda p: p[1]) # 按第二个元素排序
```

## 递归 (Recursion)

函数调用自身。
- 必须有**基准情况 (Base Case)** 以结束递归，否则会导致栈溢出 (RecursionError)。
- 每次递归调用都会在内存栈中开辟新的帧 (Frame)，保存当次调用的局部变量。

## 变量作用域 (Scope)

遵循 **LEGB** 规则：Local $\to$ Enclosing (闭包) $\to$ Global $\to$ Built-in。

### 修改外部变量

默认情况下，在函数内赋值会创建新的局部变量。如需修改外部变量，需声明：

- **global x**: 声明 x 是**全局变量**。
- **nonlocal x**: 声明 x 是**外层嵌套函数**（非全局）的变量。

```
count = 0  # Global

def outer():
    count = 10  # Enclosing (Outer Local)

    def inner():
        nonlocal count
        count += 1  # 修改的是 outer 的 count (变为 11)

        # global count # 语法错误！不能同时声明
        # 若用 global count，则修改的是最上面的 count (变为 1)

    inner()
    print(count) # 11
```

## 嵌套定义与闭包

函数内部可以定义函数，并返回内部函数。如果内部函数引用了外部函数的变量，则形成**闭包 (Closure)**。

## 装饰器 (Decorator)

装饰器本质上是一个**高阶函数**：接收一个函数，返回一个新函数（通常是对原函数的增强）。

- **语法糖**: `@decorator`

```
def my_decorator(func):
    def wrapper():
        print("Before calling")
        func()
        print("After calling")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

# 等价于:
# say_hello = my_decorator(say_hello)
```
