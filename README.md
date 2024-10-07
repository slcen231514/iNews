# 项目名称: iNews

## 1. 项目概述
iNews 是一个基于 React 的新闻聚合平台，旨在为用户提供最新、最热门的新闻内容。用户可以根据不同的分类（如娱乐、体育、财经等）进行浏览和搜索。

## 2. 技术栈
- 前端: React, React Router, Axios
- 样式: CSS
- 第三方库: react-slick（用于轮播图）

## 3. 主要功能
- **分类浏览**: 用户可以通过按钮选择不同的新闻类别。
- **搜索功能**: 提供搜索框，用户可以输入关键词查找相关新闻。
- **分页功能**: 每次显示一定数量的新闻，并支持翻页。
- **评论功能**: 在新闻详情页下方可进行评论，需连接后端完善功能。
- **轮播图**: 显示热门新闻的轮播图。
- **热点功能**: 显示热点新闻列表。
- **登录对话框**: 用户可通过点击登录按钮打开登录界面，需连接后端完善功能。

## 4. 组件结构
- **App**: 应用的主组件，负责路由和状态管理。
- **News**: 新闻列表组件，负责获取和显示新闻。
- **Video**: 视频组件，展示精选视频。
- **LoginDialog**: 登录对话框组件，管理用户登录状态。
- **各类别新闻组件**: 针对不同类别的新闻展示。

## 5. 数据来源
新闻数据从 `NewsData.json` 文件中获取。该文件包含不同类别的新闻信息，包括标题、描述、图片链接等。

## 6. 使用说明
- **安装依赖**: 运行 `npm install` 安装项目依赖。
- **启动项目**: 运行 `npm start` 启动开发服务器。
- **浏览新闻**: 通过点击导航按钮查看不同类别的新闻/视频。
- **搜索新闻**: 在搜索框输入关键词并按回车进行搜索。
- **登录**: 右下角登录按钮进行登录，需连接后端

## 7. 开发和维护
在开发过程中，使用了 Git 进行版本控制，保持代码的可追溯性。定期更新和维护新闻数据，以确保内容的新鲜和相关性。

## 8. 未来计划
- 连接后端完善新闻，评论，登录等功能

## 9. 结语
iNews 项目前端页面精简大方，欢迎给出修改建议！！！
