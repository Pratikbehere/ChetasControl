import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from "./Components/Reuse/Navbar";
import Home from './Pages/Home';
import Footer from './Components/Reuse/Footer';
import Services from './Pages/Services'; 
import About from './Pages/About';
import Products from './Pages/Products';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/About" element={<About/>}/>
            <Route path="/Products" element={<Products />} />
            <Route path="/Contact" element={<Contact/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
