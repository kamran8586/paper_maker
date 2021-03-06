import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home_landing_page';
import CPHome from './pages/c_p_home';
import Documentation from './pages/documentation';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useEscape from './hooks/useEscape';
import MCQS from './components/MCQ';
import Questions from './components/Questions';
import Heading from './components/Heading';

function App () {

  const history = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800
    });
    AOS.refresh();
  }, []);

  useEscape(() => history('/'));
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/c_p_home" element={< CPHome />} >
          <Route index element={<Heading />} />
          <Route exact path="mcqs" element={<MCQS />} />
          <Route path = 'questions' element = { <Questions />} />
          <Route path = 'heading' element = { <Heading />} />
        </Route>
        <Route path="/c_p_documentation" element={< Documentation />} />
      </Routes>
    </>
  );
}

export default App;
