import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home_landing_page'
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';
function App () {
  useEffect(() => {
    AOS.init({
      duration: 800
    });
    AOS.refresh();

  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
