import React, { useState } from "react";
import "./styles.css";
import CourseList from "../Course-Tile/CourseList.jsx";
import courseInfo from "../../assets/courses.json";

export default function Sidebar () {

    return (
<div className="sidebar">
        <h3>Difficulty Rating</h3>
        <div className="rating">
          <span className="difficulty-bar"></span>
        </div>
        <h3>Student Favorites</h3>
        <span className="favorite-icon">
          <img src="./src/assets/star.jpg" alt="Star" style={{ width: 25, height: 25 }} />
        </span>
        <h3>Course Topics</h3>
        <span className="course-topic">Topic</span>
      </div>
    )
}

