# AgentGreg 🤖



## Overview

AgentGreg allows you to configure and deploy Autonomous AI agents. Name your own custom AI and have it embark on any goal imaginable. The AI will attempt to reach the goal by thinking of tasks to do, executing those tasks, and learning from the results 🚀

### Features

- 🤖 **Autonomous AI Agents**: Create and deploy AI agents that can work independently
- 🧠 **Long-term Memory**: Agents can remember and learn from past interactions
- 🌐 **Web Browsing**: Agents can interact with websites and gather information
- 👨‍👩‍👦 **Human Interaction**: Agents can communicate and collaborate with users
- 🎯 **Goal-Oriented**: Set specific goals and watch your agent work towards them

## Quick Start

The easiest way to get started with AgentGreg is using the automatic setup CLI bundled with the project.

The CLI sets up the following for AgentGreg:
- 🔐 Environment variables (and API Keys)
- 🗂️ Database (MySQL)
- 🤖 Backend (FastAPI)
- 🎨 Frontend (Next.js)

### Prerequisites

- Node.js >= 18.0.0
- Docker and Docker Compose
- OpenAI API Key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jkeith10/AgentGreg.git
cd AgentGreg
```

2. Run the setup script:
```bash
./setup.sh
```

3. Start the application:
```bash
docker-compose up
```

4. Visit `http://localhost:3000` in your browser

## Manual Setup

If you prefer to set up manually:

1. Clone the repository:
```bash
git clone https://github.com/jkeith10/AgentGreg.git
cd AgentGreg
```

2. Copy the example environment files:
```bash
cp .env.example .env
cp next/.env.example next/.env
cp platform/.env.example platform/.env
```

3. Update the environment variables in each `.env` file with your configuration

4. Start the services:
```bash
# Start the backend
cd platform
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
python main.py

# Start the frontend
cd ../next
npm install
npm run dev
```

## Development

### Project Structure

```
AgentGreg/
├── next/           # Frontend (Next.js)
├── platform/       # Backend (FastAPI)
├── db/            # Database migrations
├── docs/          # Documentation
└── cli/           # Setup CLI
```

### Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please:
1. Check the [documentation](docs/)
2. Open an issue on GitHub
3. Join our community discussions

## Acknowledgments

- Built with ❤️ by [jkeith10](https://github.com/jkeith10)
- Inspired by the potential of Large Language Models
- Special thanks to all contributors and supporters 
