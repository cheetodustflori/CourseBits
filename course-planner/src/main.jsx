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
import CourseTile from './components/Course-Tile/CourseTile.jsx'


// NOTE CHANGE PATH FOR DETAILS PAGE LATER TO /details and 
// HEADER PAGE BACK TO / after incorporating navigation
// RN this just easiest way to see code
createRoot(document.getElementById('root')).render(
  <StrictMode>
// <<<<<<< course-details
    
//     <Router>
//       <Routes>
//         {/* Route for Header page */}
//         <Route path="/temp" element={<Header />} />

//         {/* Route for Details page */}
//         <Route path="/" element={<Details />} />
//       </Routes>
//     </Router>
//   </StrictMode>
// );
    <Header/>
    <CourseList/>
  </StrictMode>,
)
