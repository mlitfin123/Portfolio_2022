import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
