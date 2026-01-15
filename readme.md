# 📚 **Books Notes**

**Books Notes** is a simple full-stack web application for managing books and their notes.
Users can add, view, sort, and delete books, as well as create and remove notes for each book.

---

## 🎯 Project Purpose

I built this project to strengthen my full-stack fundamentals using **vanilla JavaScript, HTML, CSS, Express, and PostgreSQL**.
The goal was to understand how everything works together without relying on heavy frontend frameworks.

This project helped me practice:

* 🧩 DOM manipulation and event handling
* 🗄️ Database queries and relationships
* 🛣️ Backend structure with routes and controllers
* 🔗 Connecting frontend and backend through APIs

This is the final project in my fundamentals phase before moving to **React and full-on TypeScript**.

---

## ✨ Features

* ➕ Add new books with ratings
* 👀 View all books with their details
* 🔤 Sort books by name (A–Z) or rating
* 📝 Add notes to individual books
* 🗑️ Delete notes or entire books
* 📱 Simple interactive UI

---

## 🛠 Technology Stack

**Frontend**

* HTML
* CSS
* Vanilla JavaScript

**Backend**

* Node.js
* Express
* TypeScript

**Database**

* PostgreSQL (hosted with Neon or similar services)

---

## ⚠️ Important Notes

* 💻 This application is **not responsive**. It is best viewed on a **laptop or desktop screen**.
* 🗄️ The database is hosted on a managed PostgreSQL service. All data is **automatically deleted every 24 hours** and replaced with a **fresh sample dataset** to keep the demo clean and consistent.

---

## 🌍 Live Demo

The project is deployed and accessible online:

> 🔗 **Live Demo:** *[Book Notes Live](https://book-notes-wh8c.onrender.com)

---

## 📦 Prerequisites

* Node.js
* pnpm
* A hosted PostgreSQL database (Neon, Supabase, Railway, or pgAdmin-managed server)

---

## ⚙️ Installation & Setup

```bash
# 1. Create a PostgreSQL database using a hosted service (Neon, Supabase, Railway, etc.)
#    Copy the provided connection string.
#    Example format:
#    postgres://username:password@host/database?sslmode=require

# 2. Create a .env file in the project root and add:
#    DATABASE_URL=your_postgres_connection_string_here

# Example:
# DATABASE_URL=postgres://soham:password@neon.tech/booksdb?sslmode=require

# 3. Install all dependencies
pnpm install

# 4. Build the TypeScript backend
pnpm run build

# 5. Start the development server
pnpm run dev

# 6. Open the app in your browser
# http://localhost:3000
```

---

## 📂 Project Structure

```
books-notes/
├─ public/          # Frontend (HTML, CSS, JS)
├─ src/
│  ├─ controller/   # Express controllers
│  ├─ db/           # PostgreSQL connection & queries
│  └─ route/        # Express routes
├─ server.ts
├─ .env
├─ package.json
└─ README.md
```

---

## 📜 License

This project has no license and is shared only for **learning and personal reference**.
You are free to explore the code, but reuse, redistribution, or commercial use should only be done with my permission.

---

## 🙏 Thanks

Thanks for checking out **Books Notes**.
This project helped me build strong backend and frontend fundamentals before moving on to more modern stacks 🚀
