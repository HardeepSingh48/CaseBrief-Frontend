# ⚖️ CaseBrief Frontend: AI-Powered Legal Research Assistant

CaseBrief Frontend is a modern, **AI-powered legal research platform** that provides a responsive and intuitive interface for interacting with legal documents, extracting insights, and managing research notes.

---

## ✨ Core Features

* **Interactive AI Chat**
  Engage in conversations with your legal documents. Ask complex legal questions in natural language and receive contextually accurate answers.

* **Dynamic Document Viewer**
  Upload and view PDF documents seamlessly, with tools for **analysis** and **note-taking**.

* **Automated Insights**
  Get **AI-generated summaries**, extracted statutes, and predicted case outcomes directly in the sidebar.

* **Integrated Notebook**
  Create, edit, and organize research notes in one centralized place.

* **Secure User Authentication**
  Complete **registration & login system** to keep your research safe and private.

* **Responsive Design**
  Clean and modern UI built with **Tailwind CSS**, optimized for all devices.

---

## 🚀 Technology Stack

* **Framework:** React
* **Build Tool:** Vite
* **State Management:** Redux Toolkit
* **Routing:** React Router
* **Styling:** Tailwind CSS
* **HTTP Client:** Axios

---

## ⚙️ Getting Started

### 🔑 Prerequisites

* [Node.js](https://nodejs.org/) & npm installed
* The **Node.js Backend** and **Django AI Backend** must be running

---

### 📥 Installation & Setup

1. **Clone the Repository**

   ```bash
   git clone <your-repository-url>
   cd sihfrontend
   ```

2. **Install Dependencies**
   This project uses packages with peer dependency conflicts. Use the flag below:

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root of the project:

   ```env
   # URL for the Node.js server
   VITE_NODE_API_URL=http://localhost:4000

   # URL for the Django AI server
   VITE_DJANGO_API_URL=http://localhost:8000
   ```

---

### ▶️ Running the Application

Start the development server:

```bash
npm run dev
```

The app will be accessible at:
👉 [http://localhost:5173](http://localhost:5173)

---

## 📌 Notes

* Ensure both **Node.js backend** and **Django AI backend** are running before starting the frontend.
* Tailwind CSS ensures mobile responsiveness out of the box.

---

## 📜 License

This project is licensed under the **MIT License**.
