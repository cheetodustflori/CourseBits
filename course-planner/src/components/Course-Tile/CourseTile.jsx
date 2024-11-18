import { Link } from 'react-router-dom';
import styles from './CourseTile.module.css';
import courseInfo from '../../assets/courses.json';

function Tag({ courseId }) {
    // Find the course based on the given ID
    const course = courseInfo.find(course => course.id === courseId);

    if (!course) {
        return <div className={styles.tag}><p>Course not found</p></div>;
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

/* Function to display star if course is a student favorite */
function StudentFavorite({ courseId }) {
    // Find the course based on the given ID
    const course = courseInfo.find(course => course.id === courseId);

    if (course?.favorite) {
        return <img src="/../assets/star.jpg" style={{ width: 20, height: 20 }} alt="Favorite" />;
    }

    return null;
}

export default function CourseTile({ courseTile }) {
    // Find the course info based on the ID
    const course = courseInfo.find(course => course.id === courseTile.id);

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <Link to={`/course/${courseTile.id}`} className={styles.courseTileLayout} style={{ textDecoration: 'none' }}>
            <div className={styles.top}>
                <span>CS {courseTile.id}</span>
                <meter max={5.0} min={0.0} value={course.difficulty} low={3} high={0.75} optimum={0.5}></meter>
                <StudentFavorite courseId={courseTile.id} />
                <span className={styles.creditHours}>{courseTile.credit_hours}</span>
            </div>
            <p className={styles.courseName}>{courseTile.name}</p>
            <Tag courseId={courseTile.id} />
        </Link>
    );
}