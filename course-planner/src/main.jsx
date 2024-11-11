import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// <<<<<<< course-details
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// import Header from './components/Header/Header.jsx';
// import Details from './components/Course-Details/Details.jsx';
// // Router -> wraps entire app and allows routing
// // Routes & Route -> define individual routes for different components
import Header from './components/Header/Header.jsx'
import './components/Header/styles.css'
import CourseList from './components/Course-Tile/CourseList.jsx'


// NOTE CHANGE PATH FOR DETAILS PAGE LATER TO /details and 
// HEADER PAGE BACK TO / after incorporating navigation
// RN this just easiest way to see code
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <CourseList/>
  </StrictMode>,
)
