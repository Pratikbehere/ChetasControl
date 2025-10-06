import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "./Components/Reuse/Navbar";
import Footer from "./Components/Reuse/Footer";
import Animation from "./Components/Home/Animation";

import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";

// Simple loader
const Loader = () => (
  <motion.div className="fixed inset-0 z-[200] flex items-center justify-center bg-white">
    <motion.div
      className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
  </motion.div>
);

function App() {
  const [isPageReady, setIsPageReady] = useState(false); // DOM + assets loaded
  const [animationDone, setAnimationDone] = useState(false);

  // Only trigger animation after page fully loaded
  useEffect(() => {
    const timer = setTimeout(() => {
      if (document.readyState === "complete") {
        setIsPageReady(true);
      } else {
        window.addEventListener("load", () => setIsPageReady(true));
      }
    }, 0); // schedule after first render
    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    setAnimationDone(true);
  };

  return (
    <Router>
      {/* Loader until DOM + assets are fully ready */}
      {!isPageReady && <Loader />}

      {/* Animation only after page is ready and not yet finished */}
      {isPageReady && !animationDone && (
        <Animation onComplete={handleAnimationComplete} />
      )}

      {/* Main App after animation */}
      {isPageReady && animationDone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col min-h-screen"
        >
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </motion.div>
      )}
    </Router>
  );
}

export default App;
