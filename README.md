# Terminus 中文本地化版

这是 Terminus 的中文本地化修改版，主要面向中文学习者，用游戏方式入门 Linux / Unix 风格命令行。

## 原项目与作者

- 原项目：Terminus
- 原项目地址：https://github.com/mprat/Terminus
- 在线原版：http://mprat.github.io/Terminus/
- 原作者：Shawn Conrad, Michele Pratusevich
- 原许可证：GNU General Public License v2.0，见 `LICENSE.md`

本仓库不是原作者官方版本，而是在原项目基础上进行的中文本地化和可用性调整。请保留原作者、原项目地址和 GPLv2 许可证信息。

## 中文化内容

- 翻译了主要剧情、教程、命令提示、房间说明和 NPC 对话。
- 保留命令和对象名英文，例如 `cd Cave`、`less Professor`、`grep password= U_txt`。
- 保留部分英文搜索材料，因为它们用于 `grep` 谜题。
- 修复中文长文本在旧版终端控件里可能卡死的问题。

## 本地运行

进入本仓库根目录后启动一个静态服务器：

```powershell
python -m http.server 8000 --bind 127.0.0.1 --directory Web
```

然后打开：

```text
http://127.0.0.1:8000/
```

也可以直接使用任意静态网页服务器托管 `Web` 目录。

## 学到的命令

游戏主要覆盖：

```text
ls cd pwd less man help mv cp rm touch mkdir grep sudo
```

还有少量游戏专用命令：

```text
tellme add terminus IHTFP exit
```

## 许可证

本项目基于 GPLv2 授权的 Terminus 修改。发布、分发或再修改时，请遵守 `LICENSE.md` 中的 GPLv2 条款，并提供对应源代码。
