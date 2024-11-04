// Component of the entire details section of the page
import React from 'react';
import styles from './Details.module.css'

// importing Prereqs and Reviews components
import { Reviews, Prereqs } from './SubComps';

// making a template for the entire details section of the page
export default function Details ({course}) {
    let courseName = "$FIX THIS TEXT";
    let courseYears = "$FIX THIS TEXT";
    let courseConcurrent = "$FIX THIS TEXT";
    let courseSections = "$FIX THIS TEXT";
    let prereqsContent;
    let reviewsContent;

    if (course) {
        if (course.name) {
        courseName = course.name;
        }
        if (course.years) {
        courseYears = course.years;
        }
        if (course.concurrent) {
        courseConcurrent = course.concurrent;
        }
        if (course.sections) {
        courseSections = course.sections;
        }
    }

    // pre-req section
    if (course && course.prereqs && course.prereqs.length > 0) {
        prereqsContent = course.prereqs.map((item, index) => (
            <Prereqs key={index} preq={item} />
        ));
        } else {
        prereqsContent = <p>No prerequisites available</p>;
    }

    // review section
    if (course && course.reviews && course.reviews.length > 0) {
        reviewsContent = course.reviews.map((review, index) => (
          <Reviews key={index} rev={review} />
        ));
      } else {
        reviewsContent = <p>No reviews available</p>;
    }

    return (
        <div className={styles.detailsLayout}> 
            {/* Details Section */}
            {/* 
            Developer Notes:    - how can we test out individual components? merging them with other components? 
                                - pull information from json files into the areas necessary !!!!
                                - typical years: generally when the course is taken (freshman, sophomore, junior, senior)
                                - concurrent with: the courses that this specific course can be taken concurrent with
                                - sections: does this course have lecture/lab/discussion
                                ~JL
             */}
            <h1>Details: {courseName}</h1>
            <h4>Typical Years: {courseYears}</h4>
            <h4>Concurrent With: {courseConcurrent}</h4>
            <h4>Sections: {courseSections}</h4>
            <br />


            {/* Prerequisites Section */}
            <h1> Prerequisites: </h1>
            {/* Dev Note: not sure how to pull info for this; below is what was done with individual json files but that will be very inefficient ~JL */}
            {/* <div className={styles.prereqsContainer}>
                {prereqsInfo.map (item => (
                    <Prereqs preq={item}></Prereqs>
                ))}
            </div> */}
            <div className = {styles.prereqsContainer}>
                {prereqsContent}
            </div>
            <br />


            {/* Reviews Section */}
            <h1> Reviews: </h1>
            {/* <h1> Reviews: </h1> */}
            {/* Dev Note: not sure how to pull info for this ~JL */}
            <div className = {styles.reviewsContainer}>
                {reviewsContent}
            </div>
            <br />
        </div>
    );
}