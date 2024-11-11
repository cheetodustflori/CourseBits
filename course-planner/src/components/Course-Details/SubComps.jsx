// Sub-components for sections of the details page
// Includes: prerequisites and reviews

import styles from './Details.module.css';

// Component template for the prerequisites buttons of the course
export function Prereqs({ preq }) {
    return (
        <div className={styles.prereqsLayout}> 
            <h2>{preq.courseNumber}</h2>
            <h4>{preq.courseName}</h4>
            <p style={{ fontStyle: "italic" }}>{preq.courseHours}</p>
        </div>
    );
}

// Component template for the reviews of the course
export function Reviews({ rev }) {
    return (
        <div className={styles.reviewsLayout}> 
            <h2 style={{ textDecoration: "underline" }}>{rev.studentName}</h2>

            <h4>Difficulty</h4>
            <p style={{ fontStyle: "italic" }}>{rev.difficulty} /5</p>
            <br />

            <h4>Interest</h4>            
            <p style={{ fontStyle: "italic" }}>{rev.interest} /5</p>
            <br />

            <h4>Workload</h4>
            <p style={{ fontStyle: "italic" }}>{rev.workload} /5</p>
            <br />

            <h4>Useful</h4>
            <p style={{ fontStyle: "italic" }}>{rev.usefulness} /5</p>
            <br />
        </div>
    );
}