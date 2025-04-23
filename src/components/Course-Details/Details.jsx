import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CourseCard from "../Course-Description/course-description";
import styles from "./Details.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Prereqs } from "./SubComps";

export default function Details() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}courses.json`)
    .then((res) => {
        if (!res.ok) {
          throw new Error('courses.json not found or failed to load');
        }
        return res.json();
      })
      .then((data) => {
        const foundCourse = data.find((c) => c.id === id);
        setCourse(foundCourse);
        setAllCourses(data);
      })
      .catch((error) => console.error("Error fetching course data:", error));
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className={styles.coursePageLayout}>
        {/* Left Side */}
        <div className={styles.courseDescription}>
          <CourseCard
            course={{
              ...course,
              imageUrl: course["image-url"],
            }}
          />
        </div>

        {/* Right Side */}
        <div className={styles.courseDetails}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1 style={{ fontSize: 25, margin: 0 }}>Details</h1>
            <div style={{ flexGrow: 1 }}></div>
            <Link to="/">
              <button className={styles.goBackButton}>Go back</button>
            </Link>
          </div>

          <div className={styles.infoSection}>
            <p>
              <strong>Typical Year:</strong> {course.typicalYear}
            </p>
            <p>
              <strong>Difficulty:</strong> {course.difficulty}/5
            </p>
            <p>
              <strong>Course Type:</strong> {course["course-type"]}
            </p>
          </div>

          <div className={styles.prereqsSection}>
            <h2>Prerequisites</h2>
            {course.prereqs.length > 0 ? (
              <ul>
                {course.prereqs.map((prereq, index) => {
                  const coursePrereq = allCourses.find(
                    (item) => item.id === prereq
                  ); // ✅ fixed
                  return coursePrereq ? (
                    <Prereqs key={index} preq={coursePrereq} />
                  ) : (
                    <div key={index} className={styles.prereqsLayout}>
                      CS {prereq}
                    </div>
                  );
                })}
              </ul>
            ) : (
              <p>No prerequisites for this course.</p>
            )}
          </div>

          <div className={styles.sectionsSection}>
            <h2>Course Sections</h2>
            <ul>
              {course.sections.map((section, index) => (
                <li key={index} style={{ margin: "1rem" }}>
                  {section}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
