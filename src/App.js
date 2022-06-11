import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import SingleAbout from './components/pages/SingleAbout';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="about/:slug" element={<SingleAbout />} />
      <Route path="*" element={<NotFound />} />
      <Route path="notfound" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
