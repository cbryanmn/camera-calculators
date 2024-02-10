import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pinhole from './components/Pinhole';
import './App.css';
import SimpleLens from './components/SimpleLens';
import Home from './components/Home';
import CameraObscura from './components/CameraObscura';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pinhole" element={<Pinhole />} />
          <Route path="/simplelens" element={<SimpleLens />} />
          <Route path="/cameraobscura" element={<CameraObscura />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
