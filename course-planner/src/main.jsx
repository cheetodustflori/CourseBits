import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CourseList from './components/Course-Tile/CourseList';
import Details from './components/Course-Details/Details';
import Header from './components/Header/Header';
import CourseCard from './components/Course-Description/course-description';

function HomePage() {
  return (
    <>
       <Header />
      <CourseList />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

// Create a root
const root = createRoot(document.getElementById('root'));

// Render the App
root.render(<React.StrictMode><App /></React.StrictMode>);