import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Importing Router components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header/Header.jsx';
import Details from './components/Course-Details/Details.jsx';

// Router -> wraps entire app and allows routing
// Routes & Route -> define individual routes for different components


// NOTE CHANGE PATH FOR DETAILS PAGE LATER TO /details and 
// HEADER PAGE BACK TO / after incorporating navigation
// RN this just easiest way to see code
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Router>
      <Routes>
        {/* Route for Header page */}
        <Route path="/temp" element={<Header />} />

        {/* Route for Details page */}
        <Route path="/" element={<Details />} />
      </Routes>
    </Router>
  </StrictMode>
);
