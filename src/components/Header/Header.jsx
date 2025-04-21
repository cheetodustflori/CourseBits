
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import styles from "./styles.module.css";
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
        <div id={styles.redBox}></div>
        <Link to="/">
          <div id={styles.circle} className={styles.circle}>
            <h3 id={styles.uicText}>UIC</h3>
          </div>
        </Link>
        <div id={styles.text}>Course Bits: Made By the Students For the Students</div>

      </header>


      

    </>
  );
}