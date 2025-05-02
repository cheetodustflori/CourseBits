# 🎓 CourseBits

**CourseBits** is WiCS's take on a course planning tool for UIC students — primarily focused on **Computer Science majors**, but helpful for anyone navigating UIC's curriculum. Designed to make course planning intuitive, informative, and tailored to student needs.

---

## 🧠 Overview

This app provides a structured, interactive way to explore and visualize course options, including:
- Course headers
- Course tiles
- Detailed course descriptions
- Extra metadata like prerequisites or credits

Built using **JSX**, with layout and styling handled through **CSS**, **HTML**, and supporting **JSON** data for course info.

---

## ⚛️ React + Vite

This project uses **React with Vite** for a fast and modern development experience, including hot module replacement (HMR) and ESLint integration.

Currently, two official Vite plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) – uses [Babel](https://babeljs.io/) for Fast Refresh  
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) – uses [SWC](https://swc.rs/) for Fast Refresh

This setup gives you a clean development workflow and speedy builds.

---

## 📁 Technologies Used

- **React / JSX** — for building reusable UI components  
- **Vite** — fast bundler and dev server  
- **CSS** — for styling  
- **HTML** — page structure  
- **JSON** — storing and loading course data

---

## 🚀 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/yourusername/coursebits.git
cd coursebits
npm install
npm run dev
```

> Make sure you have Node.js and npm installed.

---

## 🖱️ Usage

Once the app is running:

- Browse through course tiles
- Click to view descriptions and details
- Use filters (if applicable) to plan out your schedule

---

## 🔧 Components

- `Header`: Navigation and branding  
- `CourseTile`: Preview of individual courses  
- `CourseDescription`: Quick overview of each course  
- `CourseDetails`: Full breakdown including prerequisites, credits, etc.

---

## ✨ Features

- Clean, student-focused UI  
- Modular React components  
- Built with modern tooling (Vite + React)  
- Easy to update with new course info via JSON  
- Focused on UIC's CS major path

---
