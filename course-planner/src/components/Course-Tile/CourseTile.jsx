import { Link } from 'react-router-dom';
import styles from './CourseTile.module.css';
import courseInfo from '../../assets/courses.json';

/* Course topics tags */
function Tag() {
    const topicList = courseInfo[0].topics;
    return (
        <div className={styles.tag}>
            {topicList.map((item, index) => (
                <div key={index}>
                    <p className={`${styles.tag} ${styles["tag-text"]}`}>{item}</p>
                </div>
            ))}
        </div>
    );
}

/*Function to display star if course is a student favorite*/
// function StudentFavorite(){
//     const isStudentFavorite = courseInfo[0].favorite;
//     if (isStudentFavorite === "true"){
//         <img src="/../../assets/student_favorite.png" width={20} height={20}/>
//     }
// }

export default function CourseTile({ courseTile }) {
    return (
        <Link to={`/course/${courseTile.id}`} className={styles.layout} style={{ textDecoration: 'none' }}>
            <div className={styles.top}>
                <span>CS {courseTile.id}</span>
                <span>CS {courseTile.id}</span>
                <meter max={5.0} min={0.0} value={difficulty_value} low={3}
                  high={.75} optimum={0.5}></meter>
                <StudentFavorite/>
                <span className={styles.creditHours}>{courseTile.credit_hours}</span>
            </div>
            <p className={styles.courseName}>{courseTile.name}</p>
            <Tag />
        </Link>
    );
}