import '../../styles.css';

export default function Header() {
  return (
    <body>
      <header>
        <div id="red-box"></div>

        <div id="circle" className="circle">
          <h3 id="uic-text">UIC</h3>
        </div>

        <div id="text">Computer Science Courses: By the Students</div>
      </header>

      <div class="button-container" id="buttonspot">
        <button class="button"> Engineering Requirements</button>
        <button class="button"> Technical Electives</button>
      </div>

      <div class="sidebar">
        <h3>Difficulty Rating</h3>
        <div class="rating">
          <span class="difficulty-bar"></span>
        </div>
        <h3>Student Favorites</h3>
        <div class="favorite-icon">
          <img
            src="/../assets/star.jpg"
            style={{ width: 25, height: 25 }}
          ></img>
        </div>
        <h3>Course Topics</h3>
        <span class="course-topic">Topic</span>
      </div>
    </body>
  );
}
