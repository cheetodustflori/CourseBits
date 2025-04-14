import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Course-Details/Details';
import Header from './components/Header/Header';
import Button from  './components/Buttons/Buttons';
import Sidebar from './components/Sidebar/Sidebar';

function HomePage() {
  return (
      <>
          <Header />
          <Button/>
          <Sidebar/>
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
ReactDOM.render(<App />, document.getElementById('root'));