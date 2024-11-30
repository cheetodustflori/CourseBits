import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CourseCard from './CourseCard';
import styles from './Details.module.css';

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
                <h1>{course.name}</h1>
                <img src={course['image-url']} alt={course.name} className={styles.courseImage} />
                <p className={styles.description}>{course.description}</p>

                <div className={styles.infoSection}>
                    <p>
                        <strong>Credit Hours:</strong> {course.credit_hours}
                    </p>
                    <p>
                        <strong>Difficulty:</strong> {course.difficulty}/5
                    </p>
                    <p>
                        <strong>Typical Year:</strong> {course.typical_yr}
                    </p>
                    <p>
                        <strong>Favorite:</strong> {course.favorite ? 'Yes' : 'No'}
                    </p>
                    <p>
                        <strong>Course Type:</strong> {course['course-type']}
                    </p>
                </div>

                <div className={styles.topicsSection}>
                    <h2>Topics Covered</h2>
                    {course.topics.length > 0 ? (
                        <ul>
                            {course.topics.map((topic, index) => (
                                <li key={index}>{topic}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No topics listed for this course.</p>
                    )}
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
            </div>
        </div>
    );
}