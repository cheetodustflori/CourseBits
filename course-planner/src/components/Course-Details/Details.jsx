// Component of the entire details section of the page
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Details.module.css';

// Importing Prereqs and Reviews components
import { Reviews, Prereqs } from './SubComps';

export default function Details() {
    const { id } = useParams(); // Get the course ID from the URL
    const [course, setCourse] = useState(null);

    useEffect(() => {
        // Fetch or filter the course data by ID
        fetch('/path-to-your-json-file/courses.json')
            .then(response => response.json())
            .then(data => {
                // Find the course by ID, assuming IDs are numeric
                const courseData = data.find(course => course.id === parseInt(id));
                setCourse(courseData);
            })
            .catch(error => console.error("Error fetching course data:", error));
    }, [id]); // Rerun the effect when the ID changes

    if (!course) return <p>Loading...</p>; // Show a loading message while data is being fetched

    return (
        <div className={styles.detailsLayout}>
            {/* Details Section */}
            <h1>Details: {course.name}</h1>
            <h4>Typical Years: {course.years}</h4>
            <h4>Concurrent With: {course.concurrent}</h4>
            <h4>Sections: {course.sections}</h4>
            <br />

            {/* Prerequisites Section */}
            <h1> Prerequisites: </h1>
            <div className={styles.prereqsContainer}>
                {course.prereqs && course.prereqs.length > 0 ? (
                    course.prereqs.map((item, index) => (
                        <Prereqs key={index} preq={item} />
                    ))
                ) : (
                    <p>No prerequisites available</p>
                )}
            </div>
            <br />

            {/* Reviews Section */}
            <h1> Reviews: </h1>
            <div className={styles.reviewsContainer}>
                {course.reviews && course.reviews.length > 0 ? (
                    course.reviews.map((review, index) => (
                        <Reviews key={index} rev={review} />
                    ))
                ) : (
                    <p>No reviews available</p>
                )}
            </div>
            <br />
        </div>
    );
}