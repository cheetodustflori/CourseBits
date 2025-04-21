import { Link } from 'react-router-dom';
import styles from './CourseTile.module.css';
import courseInfo from '../../assets/courses.json';



export default function CourseTile({ courseTile }) {
    const course = courseInfo.find(course => course.id === courseTile.id);
    
    if (!course){
        return <div>Course not found</div>
    }
    
    // const difficulty_value = courseInfo[0].difficulty
    return (
        <Link to={`/course/${courseTile.id}`} className={styles.courseTileLayout} style={{ textDecoration: 'none' }}>
            <div className={styles.top}>
                <span>CS {courseTile.id}</span>
                <meter max={5.0} min={0.0} value={course.difficulty} low={2} high={3} optimum={0.5}></meter>

                <StudentFavorite courseId={courseTile.id} />
                <span className={styles.creditHours}>{courseTile.credit_hours}</span>
            </div>
            <p className={styles.courseName}>{courseTile.name}</p>
            <Tag courseId={courseTile.id}/>
        </Link>
    );
}

/* Course topics tags */
function Tag({ courseId}) {
    //const topicList = courseInfo[0].topics;
    const course = courseInfo.find(course => course.id === courseId);
    
    if (!course){
        return <div className={styles.tag}><p>Course not found</p></div>
    }
    
    return (
        <div className={styles.tag}>
            {course.topics.map((item, index) => (
                <div key={index}>
                    <p className={`${styles.tag} ${styles["tag-text"]}`}>{item}</p>
                </div>
            ))}
        </div>
    );
}


/*Function to display star if course is a student favorite*/
function StudentFavorite({courseId}){
    const course = courseInfo.find(course => course.id === courseId);
    // const isStudentFavorite = courseInfo[0].favorite;
    if (course?.favorite){
        return <img src="/../../../assets/star.jpg" style={{ width: 20, height: 20 }}/>
    }
    
    return null;
}
