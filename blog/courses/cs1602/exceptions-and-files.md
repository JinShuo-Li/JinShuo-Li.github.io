---
title: "Exceptions and file I/O"
description: "Exception handling, finally, assertions, and reading and writing files."
order: 14
tags: [Python, Programming]
---

## 异常捕获机制

Python 使用 `try...except...else...finally` 结构来处理运行时错误。

```
try:
    # 可能抛出异常的代码
    res = 1 / 0
except ZeroDivisionError:
    # 当捕获到特定异常时执行
    print("除数不能为0")
except (IndexError, KeyError) as e:
    # 捕获多种异常，并获取异常对象 e
    print(f"索引或Key错误: {e}")
else:
    # 【仅在】try 块没有抛出任何异常时执行
    print("一切正常")
finally:
    # 【无论如何】都会执行 (常用于关闭文件、释放锁)
    print("清理工作")
```

## finally 的绝对执行权

`finally` 块具有极高的优先级。即使在 `try` 块中执行了 `return`, `break` 或 `continue`，`finally` **依然会在跳转前被执行**。

> **Warning — 循环中的 finally 与 break**
>
> 一个常见问题：`break` 是否会跳过 `finally`？答案是**不会**。
>
> ```
> def test_loop():
>     for i in range(3):
>         try:
>             if i == 1:
>                 print("即将 Break")
>                 break  # 准备跳出
>         finally:
>             print(f"Finally 执行: {i}")
>
> test_loop()
> # 输出顺序:
> # Finally 执行: 0
> # 即将 Break
> # Finally 执行: 1  <-- 即使 break 了，finally 依然执行！
> ```

## 常见异常类型速查

根据报错信息判断异常类型。

| **异常类型**  |  **触发场景与示例** |
| --- | --- |
| `ZeroDivisionError`  |  除数为 0。 |
|  |  `1 / 0`, `1 % 0` |
| `IndexError`  |  序列索引越界 (List/Tuple/String)。 |
|  |  `lst = [1]; lst[10]` |
| `KeyError`  |  字典中查找不存在的键。 |
|  |  `d = {'a':1}; d['b']` |
| `ValueError`  |  **类型正确但数值不合法**。 |
|  |  `int("abc")` (字符串不能转数字) |
|  |  `list.remove(x)` (删除不存在的元素) |
| `TypeError`  |  **操作类型不匹配**。 |
|  |  `1 + "1"` (整数加字符串) |
|  |  `len(5)` (整数没有长度) |
|  |  `list((1))` (整数不可迭代，构造失败) |
| `AttributeError`  |  访问对象不存在的属性或方法。 |
|  |  `[].add(1)` (列表没有 add 方法，只有 append) |
| `NameError`  |  使用了未定义的变量名。 |
|  |  `print(undefined_var)` |
| `UnboundLocalError`  |  **作用域陷阱**：在函数内引用局部变量前对其赋值（导致全局屏蔽）。 |
|  |  lstlisting[basicstyle=, numbers=none, frame=none]
x = 10
def f():
 print(x) # 报错! Python发现下面有赋值，
 x = 5  # 认为x是局部变量，但print时还没赋值
lstlisting |
| `AssertionError`  |  `assert` 语句失败时抛出。 |

## 断言 (Assertion)

用于调试和防御性编程，确保程序在某个特定状态下是正确的。如果条件为假，程序崩溃。

- **语法**: `assert expression [, message]`
- **逻辑**: 等价于：

```
if not expression:
    raise AssertionError(message)
```

```
def apply_discount(price, discount):
    # 确保价格和折扣合理，否则直接报错
    assert price >= 0, "Price cannot be negative"
    assert 0 <= discount <= 1, "Discount must be 0-1"
    return price * (1 - discount)
```

## 字节序列 (Byte Sequence)

在计算机底层，所有文件本质上都是字节。Python 提供了专门处理二进制数据的类型。

- **bytes (不可变)**: 语法: `b'hello'` 或 `bytes([65, 66, 67])`。 只能包含 ASCII 字符或十六进制转义符 (如 `\xff`)。
- **意义**: 用于处理二进制文件（图片、音频）或网络数据包。
- **转换**: `str.encode('utf-8')` $\to$ `bytes` `bytes.decode('utf-8')` $\to$ `str`

## 打开与关闭 (Open & Close)

### 1. open() 函数

语法: `f = open(file, mode='r', encoding='utf-8')`

| **模式**  |  **说明** |
| --- | --- |
| `'r'`  |  **只读** (默认)。如果文件不存在抛出 `FileNotFoundError`。 |
| `'w'`  |  **只写**。如果文件存在，**先清空内容** (Truncate) 再写入；不存在则创建。 |
| `'a'`  |  **追加**。写入的数据会被加到文件末尾。 |
| `'b'`  |  **二进制模式** (Binary)。如 `'rb'`, `'wb'`。读写对象为 `bytes` 而非 `str`。 |
| `'+'`  |  **更新模式** (读写)。如 `'r+'` (读写，不清除), `'w+'` (读写，先清除)。 |

> **Warning — 'w' 模式的危险性**
>
> 使用 `'w'` 模式打开文件时，**无论是否写入内容，原文件的内容都会立即被清空**。如果只想修改部分内容或追加，请使用 `'r+'` 或 `'a'`。

### 2. with 语句 (Context Manager)

即使发生异常，也能保证文件被正确关闭。这是实战中的**标准写法**。

```
# 不推荐
f = open("data.txt", "r")
data = f.read()
f.close() # 如果上面出错，这行可能不执行 -> 资源泄露

# 推荐 (with)
with open("data.txt", "r") as f:
    data = f.read()
# 离开缩进块后，f.close() 会自动被调用
```

## 读写方法

假设文件对象为 `f`。

### 1. 读取 (Read)

- `f.read(size=-1)`: 读取整个文件（或指定 `size` 个字符/字节）。返回字符串。
- `f.readline()`: 读取**一行**（包含末尾的 `\n`）。读到 EOF 返回空字符串 `''`。
- `f.readlines()`: 读取所有行，返回一个**列表** `['Line1\n', 'Line2\n']`。

> **Note — 最佳遍历方式**
>
> 不要用 `readlines()` 遍历大文件（耗内存）。直接在文件对象上迭代：
>
> ```
> for line in f:
>     print(line.strip()) # 高效，逐行读取
> ```

### 2. 写入 (Write)

- `f.write(s)`: 将字符串 `s` 写入文件。返回写入的字符数。
- `f.writelines(lines)`: 将字符串列表写入文件。

> **Warning — writelines 不会自动换行**
>
> `writelines` **不会**在每个元素后面自动添加换行符，需要手动处理。
>
> ```
> lines = ["A", "B"]
> f.writelines(lines) # 写入 "AB"
> f.writelines([l + '\n' for l in lines]) # 写入 "A\nB\n"
> ```

## 指针操作与缓冲

- `f.tell()`: 返回当前文件指针的位置 (字节偏移量)。
- `f.seek(offset, whence=0)`: 移动指针。
  - `whence=0`: 从文件开头算 (默认)。
  - `whence=1`: 从当前位置算 (仅二进制模式)。
  - `whence=2`: 从文件末尾算 (仅二进制模式)。
  - *常用*: `f.seek(0)` (回到开头)。
- `f.flush()`: 强制将缓冲区的数据写入硬盘，不关闭文件。
