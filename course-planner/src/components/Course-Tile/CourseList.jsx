import styles from './CourseTile.module.css';
import courseInfo from '../../assets/courses.json'
import CourseTile from './CourseTile'

export default function CourseList() {
    return(
        <>
            <div className={styles.courseList}>
               {courseInfo.map (item => (
                    <CourseTile courseTile={item}></CourseTile>     
               ))}
            </div>
        </>
    );
}