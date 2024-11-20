import React, { useState } from "react";
import "./styles.css";
import CourseList from "../Course-Tile/CourseList.jsx";
import courseInfo from "../../assets/courses.json";

export default function Header() {
  const [filteredCourses, setFilteredCourses] = useState(courseInfo);
  const [activeType, setActiveType] = useState("all"); // Default to "all" button being active

  const filterCourses = (type) => {
    if (type === "all") {
      setFilteredCourses(courseInfo); // Show all courses
    } else {
      const filtered = courseInfo.filter((course) => course["course-type"] === type);
      setFilteredCourses(filtered.length > 0 ? filtered : courseInfo);
    }
    setActiveType(type); // Set the active button type
  };

  return (
    <>
      <header>
        <div id="red-box"></div>
        <div id="circle" className="circle">
          <h3 id="uic-text">UIC</h3>
        </div>
        <div id="text">Computer Science Courses: By the Students</div>
      </header>

      <div className="button-container" id="buttonspot">
        <button
          className={`button ${activeType === "all" ? "active" : ""}`}
          onClick={() => filterCourses("all")}
        >
          All Courses
        </button>
        <button
          className={`button ${activeType === "engineering-requirement" ? "active" : ""}`}
          onClick={() => filterCourses("engineering-requirement")}
        >
          Engineering Requirements
        </button>
        <button
          className={`button ${activeType === "technical-elective" ? "active" : ""}`}
          onClick={() => filterCourses("technical-elective")}
        >
          Technical Electives
        </button>
      </div>

      <div className="sidebar">
        <h3>Difficulty Rating</h3>
        <div className="rating">
          <span className="difficulty-bar"></span>
        </div>
        <h3>Student Favorites</h3>
        <span className="favorite-icon">
          <img src="/../assets/star.jpg" alt="Star" style={{ width: 25, height: 25 }} />
        </span>
        <h3>Course Topics</h3>
        <span className="course-topic">Topic</span>
      </div>

      {/* Render the filtered course list */}
      <CourseList filteredCourses={filteredCourses} />
    </>
  );
}