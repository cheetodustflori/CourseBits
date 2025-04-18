import React, { useState } from "react";
import "./styles.css";
import CourseList from "../Course-Tile/CourseList.jsx";
import courseInfo from "../../assets/courses.json";

export default function Header() {
  const [filteredCourses, setFilteredCourses] = useState(courseInfo);
  const [activeType, setActiveType] = useState("all"); 

  const filterCourses = (type) => {
    if (type === "all") {
      setFilteredCourses(courseInfo); 
    } else {
      const filtered = courseInfo.filter((course) => course["course-type"] === type);
      setFilteredCourses(filtered.length > 0 ? filtered : courseInfo);
    }
    setActiveType(type); 
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


      

    </>
  );
}