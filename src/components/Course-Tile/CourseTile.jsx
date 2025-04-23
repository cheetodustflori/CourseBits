import { Link } from 'react-router-dom';
import styles from './CourseTile.module.css';
import Star from '../../assets/Star';

export default function CourseTile({ courseTile }) {
    let levelTint = `#DADADA`
    switch (Math.floor(courseTile.id / 100)) {
      case 1:
        levelTint = `#DADADA`
        break;
      case 2:
        levelTint = `#CACACA`
        break;
      case 3:
        levelTint = `#BABABA`
          break;
      case 4:
        levelTint = `#AAAAAA`
        break;
      default:
        levelTint = `#D9D9D9`
        break;
    }

    return (
      <Link to={`/course/${courseTile.id}`} className={styles.courseTileLayout} style={{ textDecoration: 'none', backgroundColor: `${levelTint}` }}>
        <div className={styles.top}>
          <span>CS {courseTile.id}</span>
          <meter max={5.0} min={0.0} value={courseTile.difficulty} low={2} high={3} optimum={0.5}></meter>
  
          <StudentFavorite isFavorite={courseTile.favorite} />
          <span className={styles.creditHours}>{courseTile.credit_hours}</span>
        </div>
        <p className={styles.courseName}>{courseTile.name}</p>
        <Tag topics={courseTile.topics} />
      </Link>
    );
  }
  

  function StudentFavorite({ isFavorite }) {
    if (isFavorite) {
      return <Star />;
    }
    return null;
  }
  
  function Tag({ topics = [] }) {
    return (
      <div className={styles.tag}>
        {topics.map((item, index) => (
          <div key={index}>
            <p className={`${styles.tag} ${styles["tag-text"]}`}>{item}</p>
          </div>
        ))}
      </div>
    );
  }


// /* Course topics tags */
// function Tag({ courseId}) {
//     //const topicList = courseInfo[0].topics;
//     const course = courseInfo.find(course => course.id === courseId);
    
//     if (!course){
//         return <div className={styles.tag}><p>Course not found</p></div>
//     }
    
//     return (
//         <div className={styles.tag}>
//             {course.topics.map((item, index) => (
//                 <div key={index}>
//                     <p className={`${styles.tag} ${styles["tag-text"]}`}>{item}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }


// /*Function to display star if course is a student favorite*/
// function StudentFavorite({courseId}){
//     const course = courseInfo.find(course => course.id === courseId);
//     // const isStudentFavorite = courseInfo[0].favorite;
//     if (course?.favorite){
//         return <Star /> // <img src="./src/assets/star.jpg" style={{ width: 20, height: 20 }}/>
//     }
    
//     return null;
// }
