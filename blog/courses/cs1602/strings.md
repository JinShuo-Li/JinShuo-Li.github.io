---
title: "Strings and text processing"
description: "String indexing, methods, formatting, and raw and triple-quoted literals."
order: 11
tags: [Python, Programming]
---

字符串是**不可变 (Immutable)** 的字符序列。这意味着你不能直接修改字符串中的某个字符（如 `s[0] = 'a'` 是非法的）。

## 索引与切片

操作方式与列表、元组完全一致。
- **索引**: `s[0]`, `s[-1]`。
- **切片**: `s[start:stop:step]`。
- *注意*: 切片操作会返回一个新的字符串对象。

## 常用方法 (Methods)

- **.find/ .index**: 查找子串 `sub` 的索引。
  - `.find()`: 找不到返回 **-1** (安全)。
  - `.index()`: 找不到抛出 **ValueError**。

- **.count(sub)**: 统计子串出现的非重叠次数。

- **.replace**: 替换子串。 **注意**: 返回**新字符串**，原字符串不会变！

- **.split(sep)**: 将字符串按 `sep` 分割成**列表 (List)**。 `"a,b,c".split(",")` $\to$ `['a', 'b', 'c']`

- **.join(iterable)**: 将可迭代对象（如列表）拼接成字符串。 *语法*: `"分隔符".join(列表)` `"-".join(['a', 'b'])` $\to$ `"a-b"`

- **.upper/ .lower**: 全大写 / 全小写转换。

## 字符串格式化 (String Formatting)

### 1. 两种主要语法

- **.format() 方法**:

```
"Name: {}, Age: {}".format("Alice", 20)
"Name: {0}, Age: {1}".format("Alice", 20) # 指定位置
```

- **f-string (推荐)**: 在字符串前加 `f`，直接嵌入变量。

```
name = "Alice";
age = 20
f"Name: {name}, Age: {age}"
```

### 2. 格式说明符 (Format Specifiers)

语法格式：`{value:**格式控制符**}`。以下是考试必考的格式代码：

| **符号**  |  **含义**  |  **示例 (设 x=10, pi=3.14159)** |
| --- | --- | --- |
| `:.2f`  |  保留2位小数 (四舍五入)  |  `f"{pi:.2f}"` $\to$ `"3.14"` |
| `:b`  |  二进制 (Binary)  |  `f"{x:b}"` $\to$ `"1010"` |
| `:o`  |  八进制 (Octal)  |  `f"{x:o}"` $\to$ `"12"` |
| `:x`  |  十六进制 (Hex)  |  `f"{x:x}"` $\to$ `"a"` |
| `:10`  |  指定宽度 (默认右对齐)  |  `f"{x:5}"` $\to$ `"  10"` |
| `:<10`  |  左对齐  |  `f"{x:<5}"` $\to$ `"10  "` |
| `:>10`  |  右对齐  |  `f"{x:>5}"` $\to$ `"  10"` |
| `:^10`  |  居中对齐  |  `f"{x:^5}"` $\to$ `" 10 "` |

## 特殊字面量

### 1. 原始字符串 (Raw String)

在字符串前加 `r` 或 `R`。 **作用**: **忽略转义字符**（如 `\n`, `\t`）的特殊含义，将其视为普通文本。 *常用场景*: 正则表达式、Windows 文件路径。

```
print("a\nb")  # 输出两行
print(r"a\nb") # 输出原样: a\nb
```

### 2. 三引号 (Triple Quotes)

使用 `"""..."""` 或 `'''...'''`。 **作用**: 允许字符串跨越多行。常用于编写函数或类的文档字符串 (Docstring)。

```
s = """Line 1
Line 2"""
```
