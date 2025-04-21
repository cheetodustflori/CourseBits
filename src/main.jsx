import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Course-Details/Details';
import Header from './components/Header/Header';
import Button from  './components/Buttons/buttons';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';


function HomePage() {
  return (
      <>
          <Header />
          <Button/>
          <Sidebar/>
          <Footer />
      </>
  );
}

function App() {
  return (
      <BrowserRouter basename="/CourseBits">

          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/course/:id" element={<Details />} />
          </Routes>
      </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));

