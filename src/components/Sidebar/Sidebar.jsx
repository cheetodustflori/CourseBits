import React, { useState } from "react";
import "./styles.css";
import Star from '../../assets/Star';


export default function Sidebar () {

    return (
<div className="sidebar">
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
    )
}

