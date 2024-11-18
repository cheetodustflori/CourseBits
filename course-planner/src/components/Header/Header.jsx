import React, { useState } from "react";
import "./styles.css";

const [filtered, setFiltered] = useState([]);

const filteredCourses = (catagory) => {
  const filtered = courses.filter((course) => course.catagory === catagory);
  setFiltered(filtered);
};


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
        
        <div class = "button-container" id = "buttonspot">
          <button class = "button" onClick={() => filteredCourses("engineering-requirement")}> Engineering Requirements</button>
          <button class = "button" onClick={() => filteredCourses("technical-elective")}> Technical Electives</button>
        </div>

        <div class = "sidebar">
          <h3>Difficulty Rating</h3>
        <div class = "rating">
          <span class = "difficulty-bar"></span>
        </div>
          <h3>Student Favorites</h3>
          <span class = "favorite-icon"><img src="/../assets/star.jpg" style={{width: 25, height: 25}}></img></span>
          <h3>Course Topics</h3>
          <span class = "course-topic">Topic</span>
        </div> 

        </body>
  );
}
