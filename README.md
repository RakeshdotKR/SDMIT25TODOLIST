# SDMIT25TODOLIST

**Basic To-Do List Application**

A simple **full-stack To-Do List project** with a frontend and backend.  
Users can **create, view, update, and delete tasks**.

---

## 📑 Table of Contents

1. Overview  
2. Features  
3. Project Structure  
4. Tech Stack  
5. Getting Started  
6. Usage  
7. Contributing  
8. License  
9. Contact  

---

## 1. Overview

This repository contains a **basic To-Do List application** split into two parts:

- **Frontend** — User Interface to interact with tasks  
- **Backend** — API server to manage tasks  

The application allows users to add, complete, and delete tasks.

---

## 2. Features

- Add new tasks  
- List all tasks  
- Mark tasks as completed  
- Delete tasks  

---

## 3. Project Structure

```
SDMIT25TODOLIST/
├── frontend/        # Frontend application
├── backend/         # Backend API server
├── .gitignore
└── README.md
```

---

## 4. Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js / JavaScript  
- **Database:** MongoDB / Local JSON  

---

## 5. Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm or yarn

Check installation:

```
node --version
npm --version
```

If not installed, download from:  
https://nodejs.org/en/download (LTS recommended)

---

### Installation

Clone the repository:

```
git clone https://github.com/RakeshdotKR/SDMIT25TODOLIST.git
cd SDMIT25TODOLIST
```

---

### Backend Setup

```
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```
MONGO_URI=mongodb://localhost:27017/testtodoapp
PORT=5000
```

Start backend server:

```
npm run dev
```

---

### Frontend Setup

```
cd frontend
npm install
```

Start frontend server:

```
npm run dev
```

Frontend runs on `http://localhost:5173/`  
Backend runs on `http://localhost:5000`

---

## 6. Usage

1. Open `http://localhost:5173/`
2. Add a new task
3. Mark tasks as completed or delete them

---

## 7. Contributing

Contributions are welcome.

Steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your fork
5. Open a Pull Request

---

## 8. License

This project is licensed under the **MIT License**.

---

## Contact

For questions or issues, please open an issue in this repository.
