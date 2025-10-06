import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Animation from "../Components/Home/Animation";
import New from "../Components/Home/New";
import StatsSection from "../Components/Home/StatsSection";
import ClientsSection from "../Components/Home/ClientsSection";
import LoadingDots from "../Components/Reuse/LoadingDots"; // import it here

const Home = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  const animationStarted = useRef(false);

  // Wait until full page load
  useEffect(() => {
    const handleLoad = () => setPageLoaded(true);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Start animation once
  useEffect(() => {
    if (!animationStarted.current) {
      animationStarted.current = true;
      setShowIntro(true);
    }
  }, []);

  const handleAnimationComplete = () => {
    setShowIntro(false);
    if (pageLoaded) setShowContent(true);
  };

  useEffect(() => {
    if (pageLoaded && !showIntro) {
      setShowContent(true);
    }
  }, [pageLoaded, showIntro]);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* Animation */}
      {showIntro && (
        <div className="flex flex-col items-center justify-center">
          <Animation onComplete={handleAnimationComplete} />
        </div>
      )}

      {/* Loading dots while animation finished but page still loading */}
      {!showIntro && !showContent && !pageLoaded && <LoadingDots />}

      {/* Main content */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-0 w-full"
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
