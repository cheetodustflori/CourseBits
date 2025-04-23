import React, { useState, useEffect } from "react";
import "./styles.css";
import Star from '../../assets/Star';


export default function Sidebar () {
  const [isOpen, setOpenState] = useState(true);

  function toggleSideBar() {
    setOpenState(!isOpen)
  }

  return (
      <div className="sidebar" style={{display: 'flex', alignItems: 'center'}}>
        <button style={{height: 'fit-content', padding: '15px 10px', fontSize: '35px', backgroundColor: '#EEEEEE', border: 'none 20px'}} onClick={toggleSideBar} >{isOpen ? `≫` : `≪`}</button>

        {isOpen ? 
          <div style={{padding:'15px', backgroundColor: 'rgb(238, 238, 238)', borderRadius: '20px', boxShadow: '0px 10px 10px rgb(183, 183, 183)'}}>
            <h3>Difficulty Rating</h3>
            <div className="rating">
              <span className="difficulty-bar"></span>
            </div>
            <h3>Student Favorites</h3>
            <span className="favorite-icon">
              <Star style={{ width: 25, height: 25, cursor: 'default' }} />
            </span>
            <h3>Course Topics</h3>
            <span className="course-topic">Topic</span>
          </div>
         : <div style={{height: '150px'}}></div>}
      </div>
    )
}

