import React, { useState } from "react";
import "./styles.css";
import CourseList from "../Course-Tile/CourseList.jsx";
import courseInfo from "../../assets/courses.json";

export default function Button() {
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

      <CourseList filteredCourses={filteredCourses} />
    </>
  );
}