import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header/Header.jsx";
import CourseList from "./components/Course-Tile/CourseList.jsx";
// import CourseTile from "./components/Course-Tile/CourseTile.jsx";
import "./components/Header/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
        <Header/>
        <CourseList/>
  </StrictMode>
);
