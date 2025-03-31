# AgentGreg 🤖

<div align="center">
  <img src="https://raw.githubusercontent.com/jkeith10/AgentGreg/main/next/public/banner.png" height="300" alt="AgentGreg Logo"/>
  
  <p>
    <strong>在浏览器中配置和部署自主AI代理</strong>
  </p>

  <p>
    <a href="https://github.com/jkeith10/AgentGreg/blob/master/README.md"><img src="https://img.shields.io/badge/lang-English-blue.svg" alt="English"></a>
    <a href="https://github.com/jkeith10/AgentGreg/blob/master/docs/README.zh-HANS.md"><img src="https://img.shields.io/badge/lang-简体中文-red.svg" alt="简体中文"></a>
    <a href="https://github.com/jkeith10/AgentGreg/blob/master/docs/README.hu-Cs4K1Sr4C.md"><img src="https://img.shields.io/badge/lang-Hungarian-red.svg" alt="Hungarian"></a>
  </p>
</div>

## 概述

AgentGreg允许您配置和部署自主AI代理。为您的自定义AI命名，并让它实现任何可以想象的目标。AI将通过思考要执行的任务、执行这些任务并从结果中学习来尝试实现目标 🚀

### 功能

- 🤖 **自主AI代理**: 创建和部署可以独立工作的AI代理
- 🧠 **长期记忆**: 代理可以记住并学习过去的交互
- 🌐 **网页浏览**: 代理可以与网站交互并收集信息
- 👨‍👩‍👦 **人际互动**: 代理可以与用户沟通和协作
- 🎯 **目标导向**: 设定具体目标并观察您的代理为之努力

## 快速开始

使用AgentGreg最简单的方法是使用项目附带的自动设置CLI。

CLI为AgentGreg设置了以下内容：
- 🔐 环境变量（和API密钥）
- 🗂️ 数据库（MySQL）
- 🤖 后端（FastAPI）
- 🎨 前端（Next.js）

### 先决条件

- Node.js >= 18.0.0
- Docker和Docker Compose
- OpenAI API密钥

### 安装

1. 克隆仓库：
```bash
git clone https://github.com/jkeith10/AgentGreg.git
cd AgentGreg
```

2. 运行设置脚本：
```bash
./setup.sh
```

3. 启动应用：
```bash
docker-compose up
```

4. 在浏览器中访问 `http://localhost:3000`

## 手动设置

如果您想手动设置：

1. 克隆仓库：
```bash
git clone https://github.com/jkeith10/AgentGreg.git
cd AgentGreg
```

2. 复制示例环境文件：
```bash
cp .env.example .env
cp next/.env.example next/.env
cp platform/.env.example platform/.env
```

3. 在每个`.env`文件中更新环境变量

4. 启动服务：
```bash
# 启动后端
cd platform
python -m venv venv
source venv/bin/activate  # Windows: .\venv\Scripts\activate
pip install -r requirements.txt
python main.py

# 启动前端
cd ../next
npm install
npm run dev
```

## 开发

### 项目结构

```
AgentGreg/
├── next/           # 前端 (Next.js)
├── platform/       # 后端 (FastAPI)
├── db/            # 数据库迁移
├── docs/          # 文档
└── cli/           # 设置CLI
```

### 贡献

1. Fork仓库
2. 创建您的功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m '添加一些很棒的功能'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开Pull Request

## 许可证

本项目采用MIT许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 支持

如果您遇到任何问题或有疑问，请：
1. 查看[文档](docs/)
2. 在GitHub上提出问题
3. 加入我们的社区讨论

## 致谢

- 由 [jkeith10](https://github.com/jkeith10) 用❤️构建
- 灵感来自大型语言模型的潜力
- 特别感谢所有贡献者和支持者
