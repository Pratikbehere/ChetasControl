import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


import Navbar from "./Components/Reuse/Navbar";
import Home from './Pages/Home';
import Footer from './Components/Reuse/Footer'




function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
           
            { <Route path="/" element={<Home />} />
            /*
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ongoing" element={<Ongoing />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
