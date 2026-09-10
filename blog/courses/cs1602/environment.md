---
title: "The command line and the Python environment"
description: "Linux file and process commands, the Python interpreter, and pip package management."
order: 2
tags: [Python, Programming]
---

在计算导论与实验课程中，掌握基础的命令行操作是进行编程开发的前提。本节涵盖了文件系统操作、系统管理、网络通信以及 Python 环境管理的核心命令。

## Linux 文件与目录管理

文件操作是 Linux 交互中最基础的部分，常见路径的相对与绝对引用以及文件权限的理解。

- **ls (List)**: 列出目录内容。
  - `ls`：仅列出文件名。
  - `ls -l`：长格式显示（包含权限、大小、时间）。
  - `ls -a`：显示所有文件（包含以 `.` 开头的隐藏文件）。

- **cd**: 切换当前工作目录。
  - `cd /path/to/dir`：跳转到绝对路径。
  - `cd ..`：返回上一级目录。
  - `cd ~`：返回当前用户的家目录（Home）。

- **mkdir**: 创建新目录。常用参数 `-p` 可递归创建多级目录（例如 `mkdir -p a/b/c`）。

- **touch**: 用于修改文件时间戳，若文件不存在则创建一个空文件。

- **cp**: 复制文件或目录。

```bash
# 将 file1 复制为 file2
cp file1.txt file2.txt
# 递归复制目录（注意 -r 参数）
cp -r source_folder/ destination_folder/
```

- **mv**: 移动文件或重命名文件。
  - `mv old.txt new.txt`：重命名。
  - `mv file.txt ./folder/`：移动文件。

- **rm**: 删除文件或目录。

> **Warning — rm 命令的危险性**
>
> 在使用 `rm` 时需格外小心，Linux 下删除通常无法恢复！
> - `rm -r`：递归删除目录。
> - `rm -f`：强制删除，不提示确认。
> - **绝对禁忌**：`rm -rf /` （这将删除整个系统文件，实战中极度危险）。

## 系统管理与网络命令

此类命令用于查看系统状态、安装软件及处理网络请求。

- **ps**: 查看当前进程快照。
  - `ps al`: 显示所有进程的详细信息。
  - `ps aux`：显示所有用户的所有进程详细信息。
  - 常配合 `grep` 使用查找特定进程（例如 `ps aux | grep python`）。

- **apt**: Debian/Ubuntu 系 Linux 的包管理器。

```bash
sudo apt update        # 更新软件源列表
sudo apt install git   # 安装 git 软件
sudo apt upgrade       # 升级所有已安装软件
```

- **ssh**: 安全远程登录协议。
  - 语法：`ssh user@hostname`
  - 示例：`ssh student@192.168.1.100`

- **ping**: 测试网络连通性。通过发送 ICMP 数据包检测目标主机是否可达。

- **wget**: 从网络下载文件。
  - 示例：`wget http://example.com/file.zip`

## Python 环境与包管理命令

### python 命令

用于执行 Python 脚本或进入交互式环境。

- **查看版本**：`python --version` 或 `python -V`
- **运行脚本**：`python main.py`
- **模块运行**：`python -m http.server` (例如启动简易服务器)

### pip 命令

Python 的包安装程序 (Package Installer for Python)。

| **命令**  |  **功能说明** |
| --- | --- |
| `pip install numpy`  |  安装 numpy 包 |
| `pip uninstall pandas`  |  卸载 pandas 包 |
| `pip list`  |  列出已安装的所有包 |
| `pip freeze > requirements.txt`  |  将当前环境包列表导出到文件 |
| `pip install -r requirements.txt`  |  根据文件批量安装依赖 |

> **Note — Pip 下载速度慢怎么办？**
>
> 国内网络环境下，直接使用默认源下载速度可能较慢。可以使用 `-i` 参数指定国内镜像源（如清华源）：
>
> ```bash
> pip install matplotlib -i https://pypi.tuna.tsinghua.edu.cn/simple
> ```
>
> 或者配置永久换源。

## 命令功能速查表

| **命令**  |  **全称/含义**  |  **核心功能** |
| --- | --- | --- |
| `ls`  |  List  |  列出当前目录下的文件 |
| `cd`  |  Change Directory  |  切换目录 |
| `pwd`  |  Print Working Directory  |  显示当前所在路径 |
| `cp`  |  Copy  |  复制文件或文件夹（需加 -r） |
| `mv`  |  Move  |  移动或重命名文件 |
| `rm`  |  Remove  |  删除文件（不可逆） |
| `mkdir`  |  Make Directory  |  创建文件夹 |
| `touch`  |  Touch  |  创建空文件或更新时间戳 |
| `cat`  |  Concatenate  |  查看文件内容 |
| `ps`  |  Process Status  |  查看进程状态 |
| `apt`  |  Advanced Package Tool  |  软件安装与管理 |
| `ssh`  |  Secure Shell  |  远程登录 |
| `ping`  |  Packet Internet Groper  |  测试网络连通性 |
| `wget`  |  World Wide Web Get  |  命令行下载工具 |
