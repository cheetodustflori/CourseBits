import { Link } from 'react-router-dom';
import styles from './CourseTile.module.css';
import courseInfo from '../../assets/courses.json';

function Tag() {
    const topicList = courseInfo[0].topics;
    return (
        <div className={styles.tag}>
            {topicList.map((item, index) => (
                <div key={index}>
                    <p className={styles.tag}>{item}</p>
                </div>
            ))}
        </div>
    );
}

export default function CourseTile({ courseTile }) {
    return (
        <div className={styles.layout}>
            <div className={styles.top}>
                <Link to={`/course/${courseTile.id}`} className={styles.courseLink}>
                    CS {courseTile.id}
                </Link>
                <meter></meter>
                <span className={styles.credithours}>{courseTile.credit_hours}</span>
            </div>
            <p className={styles.courseName}>{courseTile.name}</p>
            <Tag />
        </div>
    );
}