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
        <Link to={`/course/${courseTile.id}`} className={styles.layout}>
            <div className={styles.top}>
                <span>CS {courseTile.id}</span> 
                <meter></meter> 
                <span className={styles.credithours}>{courseTile.credit_hours}</span>
            </div>
            <p>{courseTile.name}</p>
            <Tag />
        </Link>
    );
}