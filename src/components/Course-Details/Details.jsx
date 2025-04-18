import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CourseCard from '../Course-Description/course-description'; 
import styles from './Details.module.css';
import Header from '../Header/Header';

export default function Details() {
    const { id } = useParams(); // Get the course ID from the URL
    const [course, setCourse] = useState(null);

    useEffect(() => {
        // Fetch the data
        fetch('/src/assets/courses.json') // Update the path to your actual JSON file location
            .then((response) => response.json())
            .then((data) => {
                const foundCourse = data.find((course) => course.id === id);
                setCourse(foundCourse);
            })
            .catch((error) => console.error('Error fetching course data:', error));
    }, [id]);

    if (!course) {
        return <div>Loading...</div>;
    }

    return (
        <div>
        <Header/>
        <div className={styles.coursePageLayout}>
            
            {/* Left Side - Course Description */}
            <div className={styles.courseDescription}>
                <CourseCard
                    course={{
                        ...course,
                        imageUrl: course['image-url'], // Map 'image-url' to 'imageUrl' for CourseCard compatibility
                    }}
                />
            </div>

            {/* Right Side - Course Details */}
            <div className={styles.courseDetails}>
                <h1>Details</h1>
               
                <div className={styles.infoSection}>
                <p>
                        <strong>Typical Year:</strong> {course.typical_yr}
                    </p>
                    <p>
                        <strong>Difficulty:</strong> {course.difficulty}/5
                    </p>
                    
                    <p>
                        <strong>Course Type:</strong> {course['course-type']}
                    </p>
                </div>


                <div className={styles.prereqsSection}>
                    <h2>Prerequisites</h2>
                    {course.prereqs.length > 0 ? (
                        <ul>
                            {course.prereqs.map((prereq, index) => (
                                <li className={styles.prereqsItem} key={index}>CS {prereq}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No prerequisites for this course.</p>
                    )}
                </div>

                <div className={styles.sectionsSection}>
                    <h2>Course Sections</h2>
                    <ul>
                        {course.sections.map((section, index) => (
                            <li key={index}>{section}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.sectionsSection}>
                    <h2>Student Reviews</h2>

                </div>
            </div>
        </div>
        </div>
    );
}