import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CourseList from './components/Course-Tile/CourseList';
import Details from './components/Course-Details/Details';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CourseList />} />
                <Route path="/course/:id" element={<Details />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));