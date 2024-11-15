import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './course-description-mod.css';

// Function is passing a .json object in parameters so we can grab it's data and distribute accordinly
export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="container">
        {/* Image of class flow */}
        <img src={course.imageUrl}/>
      </div>
      <div className="course-info">
        <div className="course-header">
          <h1 className="course-id">CS {course.id}</h1>
          <div className="favorite-icon">
            {/* If course is labeled a class favorite show a gold star next to it  */}
            {course.favorite === "true" && <FaStar color="gold" />}
          </div>
        </div>
        <div className="course-name">
              <div className = "course-title">{course.name}</div>  
              <div className = "course-credit"><i>{course.credit_hours} Credit Hours</i></div>  
        </div>
        <div className="course-description">
          <h3>Description</h3>
          <p>{course.description}</p>
        </div>
        <div className="course-topics">
          <h3>Topics</h3>
          <div className="topics-container">
            {/* Grabbing the topics data and populating via index. A className is created to modify css */}
            {course.topics.map((topic, index) => (
              <span key={index} className="topic-tag">{topic}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

//Setting requirements for each data type
CourseCard.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    credit_hours: PropTypes.string.isRequired,
    topics: PropTypes.arrayOf(PropTypes.string).isRequired,
    favorite: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};
