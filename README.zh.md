一个更好的 OneTab 扩展

### 功能

想要更多功能？在这里告诉我吧

 - [x] OneTab 中的所有基本功能
 - [x] 弹出式的简易列表
 - [x] 固定标签页列表
 - [x] 键盘快捷键
 - [x] 自定义的设置
 - [x] 通过拖拽操作来重新排列标签页
 - [x] 数据和选项的同步
 - [x] 导入及导出
 - [x] 将储存的标签页加入浏览器历史中
 - [x] 国际化支持（当前只有英语和简体中文）

### 安装

从 Google 扩展商店安装

在发布页面下载发布的.crx文件并将其拖至chrome扩展页面。

### 开发

0. Clone 这个仓库
0. 安装依赖 (使用 `yarn` 命令)
0. 自动重新加载 (使用 `yarn dev` 命令)
0. 点击 `加载已解压的扩展程序` 按钮并选择 `./dist` 目录
0. 编译并打包 (使用 `yarn build` 命令)

- UI：Vue.js（参见 src/app）
- 后端：Node.js（参见 src/common）
- 数据库：MongoDB（参见data/）
- CI/CD：Docker + CircleCI

### 许可

MIT LICENSE
