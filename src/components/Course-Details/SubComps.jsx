
import { Link } from 'react-router-dom';

// Sub-components for sections of the details page
// Includes: prerequisites and reviews

import styles from "./Details.module.css";

// Component template for the prerequisites buttons of the course
export function Prereqs({ preq }) {
  return (
    <Link style={{textDecoration: 'none'}} to={`/course/${preq.id}`}>
      <div className={styles.prereqsLayout}>
        <p className={styles.prereqsCourseNumber}>CS {preq.id}</p>
        <p className={styles.prereqsCourseName}>{preq.name}</p>
        <p className={styles.prereqsCourseHours}>{preq.credit_hours}</p>
      </div>
    </Link>
  );
}

// Component template for the reviews of the course
export function Reviews({ rev }) {
  return (
    <div className={styles.reviewsLayout}>
      <p style={{ textDecoration: "underline" }}>{rev.studentName}</p>
      <p>Difficulty: {rev.difficulty}/5</p>

      <p>Interest: {rev.interest}/5</p>

      <p>Workload: {rev.workload}/5</p>

      <p>Useful: {rev.usefulness}/5</p>
    </div>
  );
}
