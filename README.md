
```markdown
# SDMIT25TODOLIST

Basic To-Do List Application  
A simple full-stack To-Do List project with a frontend and backend. Users can create, view, update, and delete tasks.

Table of Contents

1. Overview  
2. Features  
3. Project Structure  
4. Tech Stack  
5. Getting Started  
   - Prerequisites  
   - Installation  
6. Usage  
7. Contributing  
8. License  



1. Overview

This repository contains a basic To-Do List application split into two parts:

- Frontend — UI to interact with tasks
- Backend — API server to manage tasks

The app allows you to add tasks, mark them complete, and delete them.



2. Features

- Add new tasks  
- List all tasks  
- Mark tasks as completed  
- Delete tasks  



3. Project Structure

SDMIT25TODOLIST/
├── frontend/        # Frontend application (likely React/Vanilla JS)
├── backend/         # Backend API server (Node.js / Express / other)
├── .gitignore
└── README.md



4. Tech Stack

Frontend: HTML, CSS, JavaScript (or framework)  
Backend: JavaScript/Node.js (or another language if used)  
Database MongoDB, local JSON, etc.

Note: Details above should be edited if your project uses other tools or frameworks.



5. Getting Started

Prerequisites

Before you begin, make sure you have installed:

- Node.js (v20+ recommended)
- npm or yarn

Installation

1. Clone the repo


git clone https://github.com/RakeshdotKR/SDMIT25TODOLIST.git
cd SDMIT25TODOLIST
````

---

### Setup Backend

cd backend
npm install

Create .env file inside backend folder and paste the following contents:
MONGO_URI=mongodb://localhost:27017/testtodoapp
PORT=5000

Start the backend server:

npm run dev




### Setup Frontend

```bash
cd frontend
npm install
# or
yarn install
```

Start the frontend app:

```bash
npm run dev
# or
yarn start
```

> Default frontend will run on `http://localhost:5173/` (common) and backend on `http://localhost:5000`, adjust based on your config.

---

## 6. Usage

Once both frontend and backend are running:

1. Visit the app in your browser: `http://localhost:5173/`
2. Create a new task by entering text and submitting
3. Mark tasks complete or delete them using the app UI

---

## 7. Contributing

**Contributions are welcome!**
To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes and commit (`git commit -m 'Add feature'`)
4. Push to your fork (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 8. License

This project is open source and available under the **MIT License** unless otherwise specified.

---

## Contact

If you have questions or feedback, feel free to open an issue in this repository.

```

---

```
