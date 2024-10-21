// Component of the entire details section of the page

import styles from './Details.module.css'

// components for prerequisites and reviews
import { Reviews, Prereqs } from './SubComps';



// making a template for the entire details section of the page
export default function Details ({course}) {
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
            <h1> Details: #FIX THIS TEXT</h1>
            <h4> Typical Years: #FIX THIS TEXT</h4>
            <h4> Concurrent With: #FIX THIS TEXT</h4>
            <h4> Sections: #FIX THIS TEXT</h4> 
            <br></br>


            {/* Prerequisites Section */}
            <h1> Prerequisites: </h1>
            {/* Dev Note: not sure how to pull info for this; below is what was done with individual json files but that will be very inefficient ~JL */}
            {/* <div className={styles.prereqsContainer}>
                {prereqsInfo.map (item => (
                    <Prereqs preq={item}></Prereqs>
                ))}
            </div> */}
            <br></br>


            {/* Reviews Section */}
            <h1> Reviews: </h1>
             <h1> Reviews: </h1>
            {/* Dev Note: not sure how to pull info for this ~JL */}
            <br></br>
        </div>
    );
}