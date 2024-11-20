import React from "react";
import styles from "./CourseTile.module.css";
import CourseTile from "./CourseTile";

export default function CourseList({ filteredCourses }) {
  return (
    <div className={styles.courseList}>
      {filteredCourses.map((item) => (
        <CourseTile key={item.id} courseTile={item} />
      ))}
    </div>
  );
}
