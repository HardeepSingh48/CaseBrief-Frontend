CaseBrief Frontend: AI-Powered Legal Research Assistant
This is the frontend for CaseBrief, a modern, AI-powered legal research platform. It provides a responsive and intuitive user interface for interacting with legal documents, getting AI-driven insights, and managing research notes.

✨ Core Features
Interactive AI Chat: Engage in a conversation with your legal documents. Ask complex questions in natural language and receive contextually accurate answers.

Dynamic Document Viewer: Upload and view PDF documents seamlessly within the application, with tools for analysis and note-taking.

Automated Insights: Automatically view AI-generated summaries, extracted legal statutes, and predicted case outcomes directly in the sidebar.

Integrated Notebook: A built-in feature to create, edit, and organize your research notes, keeping all your work in one place.

Secure User Authentication: A complete authentication system with registration and login to keep your research private and secure.

Responsive Design: A clean and modern UI built with Tailwind CSS that works beautifully on all devices.

🚀 Technology Stack
Framework: React

Build Tool: Vite

State Management: Redux Toolkit

Routing: React Router

Styling: Tailwind CSS

HTTP Client: Axios

⚙️ Getting Started
Prerequisites
Node.js and npm

The Node.js Backend and Django AI Backend must be running.

Installation & Setup
Clone the Repository:

git clone <your-repository-url>
cd sihfrontend

Install Dependencies:
This project uses some packages with peer dependency conflicts. Use the --legacy-peer-deps flag to resolve them.

npm install --legacy-peer-deps

Configure Environment Variables:
Create a .env file in the root of the sihfrontend directory. This file will tell your frontend where to find the backend servers.

# URL for the Node.js server
VITE_NODE_API_URL=http://localhost:4000

# URL for the Django AI server
VITE_DJANGO_API_URL=http://localhost:8000

Running the Application
Once the dependencies are installed and the environment variables are set, you can start the development server.

npm run dev

The application will now be running and accessible in your web browser, typically at http://localhost:5173.