// Sub-components for sections of the details page
// Includes: prerequisites and reviews

import styles from './Details.module.css'

// component template for the prerequisites buttons of the course
export default function Prereqs ({preq}) {
    return (
        <div className={styles.prereqsLayout}> 
            {/* 
            Developer Notes:    - pull prerequisites from json files maybe? or manually add ~JL
             */}
            <h2>#FIX THIS COURSE NUMBER</h2>
            <h4>#FIX THIS COURSE NAME</h4>
            <p style="font-style: italic;">#FIX THIS COURSE HOURS</p>
        </div>
    );
}





// component template for the reviews of the course
export default function Reviews ({rev}) {
    return (
        <div className={styles.reviewsLayout}> 
            {/* 
            Developer Notes:    - pull reviews from json file 
                                - possibly its own json file for each course? 
                                - contains: student name; difficulty of course; interest in course; workload of course; usefulness of course for future
                                ~JL  
             */}
            <h2 style="text-decoration: underline;">{rev.studentName}</h2>

            <h4>Difficulty</h4>
            <p style="font-style: italic;">#FIX THIS RATING /5</p>
            <br></br>

            <h4>Interest</h4>            
            <p style="font-style: italic;">#FIX THIS RATING /5</p>
            <br></br>

            <h4>Workload</h4>
            <p style="font-style: italic;">#FIX THIS RATING /5</p>
            <br></br>

            <h4>Useful</h4>
            <p style="font-style: italic;">#FIX THIS RATING /5</p>
            <br></br>

        </div>
    );
}