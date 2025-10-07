import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "./Components/Reuse/Navbar";
import Footer from "./Components/Reuse/Footer";

import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";

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
  const [pageReady, setPageReady] = useState(false);
  const [animationRunning, setAnimationRunning] = useState(false);

  useEffect(() => {
    const handleLoad = () => setPageReady(true);

    if (document.readyState === "complete") handleLoad();
    else window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <Router>
      {!pageReady && <Loader />}

      {/* App always rendered, appVisible removed */}
      <div className="flex flex-col min-h-screen">
        {/* Navbar only hidden if animation is running */}
        {!animationRunning && <Navbar />}

        <main className="flex-grow pt-16">
          <Routes>
            <Route
              path="/"
              element={<Home onAnimation={setAnimationRunning} />}
            />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {!animationRunning && <Footer />}
      </div>
    </Router>
  );
}

export default App;
