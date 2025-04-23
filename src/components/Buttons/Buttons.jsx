import React, { useState, useEffect } from "react";
import "./styles.css";
import CourseList from "../Course-Tile/CourseList.jsx";
// import courseInfo from "/courses.json";

export default function Button() {
  const [courseInfo, setCourseInfo] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [activeType, setActiveType] = useState("all"); 

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}courses.json`)
    .then((response) => response.json())
    .then((data) => {
      setCourseInfo(data);
      setFilteredCourses(data);
    })
    .catch((error) => console.error('Error fetching course data:', error));
    filterCourses("all");
  }, [])

  const filterCourses = (type) => {
    if (type === "all") {
      setFilteredCourses(courseInfo); 
      console.log(filteredCourses)
    } else {
      const filtered = courseInfo.filter((course) => course["course-type"] === type);
      setFilteredCourses(filtered.length > 0 ? filtered : courseInfo);
    }
    setActiveType(type); 
  }

  if (!courseInfo) {
      return <div>Loading...</div>;
  }
  
  console.log(courseInfo)
  console.log(filteredCourses)
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