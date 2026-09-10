---
title: "Loops and iteration"
description: "for and while loops, loop else, and safely mutating containers during iteration."
order: 6
tags: [Python, Programming]
---

## 基础循环与控制

- **for 循环**: 用于遍历可迭代对象（如 List, String, Dict, Range）。
- **while 循环**: 当条件满足（True）时重复执行，适合不知道具体循环次数的场景。
- **break**: **跳出整个循环**。不再执行循环体内的后续代码，也不再进行后续迭代。
- **continue**: **跳出当次迭代**。忽略本次循环体剩余代码，直接开始下一次迭代。

## 循环中的 else 子句

Python 的 `for` 和 `while` 都可以搭配 `else` 使用。这是考试中的**逻辑陷阱**。

> **Note — else 什么时候执行？**
>
> **执行原则：** 只有当循环**正常结束**（即没有被 `break` 打断）时，`else` 块才会执行。

```
# --- 情况 1: 遇到 break ---
for i in range(5):
    if i == 3:
        break       # 强制退出
else:
    print("Done")   # 不会被执行！

# --- 情况 2: 正常跑完 ---
for i in range(5):
    pass
else:
    print("Done")   # 会被执行
```

## 循环中修改容器

在遍历列表或字典时修改它们，是极易出错的操作。需区分“修改值”和“修改大小”。

### 1. 修改 Value (安全)

如果容器的**长度 (Size) 保持不变**，仅修改内容是允许的。

```
nums = [1, 2, 3]
for i in range(len(nums)):
    nums[i] = nums[i] * 2   # Safe: 长度没变，只是改了值
```

### 2. 修改 Size (危险 - 添加/删除元素)

> **Warning — RuntimeError: dictionary changed size**
>
> 在 `for` 循环遍历 **Dict** 或 **Set** 时，如果**增加**或**删除**键值对，Python 会直接抛出 `RuntimeError`。 *注：List 虽然不会直接报错，但会导致索引混乱（漏删或越界），同样危险。*

**错误示范：**

```
d = {'a': 1, 'b': 2}
for k in d:
    if k == 'a':
        del d[k]  # 报错！RuntimeError
```

**正确解法：使用副本 (.copy())**
如果必须在循环中修改大小，请遍历容器的**副本**。

```
# 方案 A: 使用 .copy() (推荐)
d = {'a': 1, 'b': 2}
for k in d.copy():  # 遍历的是复制出来的 keys
    if k == 'a':
        del d[k]    # 修改的是原字典 d

# 方案 B: 使用 while 循环 (适合 List)
nums = [1, 2, 3, 4]
i = 0
while i < len(nums):
    if nums[i]
        del nums[i] # 删除后不移动指针
    else:
        i += 1      # 只有不删除时才移动指针
```
