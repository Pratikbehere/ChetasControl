import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Animation from "../Components/Home/Animation";
import New from "../Components/Home/New";
import StatsSection from "../Components/Home/StatsSection";
import ClientsSection from "../Components/Home/ClientsSection";

const Home = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Ref ensures animation runs only once per page load
  const animationStarted = useRef(false);

  // Wait until page is fully loaded
  useEffect(() => {
    const handleLoad = () => {
      if (!animationStarted.current) {
        animationStarted.current = true; // mark as started
        setShowIntro(true);
      }
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const handleAnimationComplete = () => {
    setShowIntro(false);
    setShowContent(true);
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Animation only once */}
      {showIntro && <Animation onComplete={handleAnimationComplete} />}

      {/* Main content mounts after animation finishes */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-0"
        >
          <New />
          <StatsSection />
          <ClientsSection />
        </motion.div>
      )}
    </div>
  );
};

export default Home;
