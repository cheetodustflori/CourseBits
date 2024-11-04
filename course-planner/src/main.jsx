import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header/Header.jsx';
import './components/Header/styles.css';
import CourseList from './components/Course-Tile/CourseList.jsx';
import CourseTile from './components/Course-Tile/CourseTile.jsx';
import Details from './components/Course-Details/Details.jsx';

// NOTE CHANGE PATH FOR DETAILS PAGE LATER TO /details and 
// HEADER PAGE BACK TO / after incorporating navigation
// RN this just easiest way to see code
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Details />
    <CourseList />
  </StrictMode>
);