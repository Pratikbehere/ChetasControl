import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Animation from "../Components/Home/Animation";
import New from "../Components/Home/New";
import StatsSection from "../Components/Home/StatsSection";
import ClientsSection from "../Components/Home/ClientsSection";

const Home = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Wait for the full page to load (all assets)
    const handlePageLoad = () => setIsPageLoaded(true);

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  useEffect(() => {
    if (isPageLoaded) {
      const hasSeenIntro = sessionStorage.getItem("seenIntro");
      if (!hasSeenIntro) {
        setShowIntro(true);
        sessionStorage.setItem("seenIntro", "true");
      } else {
        setShowContent(true);
      }
    }
  }, [isPageLoaded]);

  const handleAnimationComplete = () => {
    setShowIntro(false);
    setShowContent(true);
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Animation only after full page load */}
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
