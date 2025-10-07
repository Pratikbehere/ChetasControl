// import React from "react";
// import BannerCarousel from "../Components/Home/BannerCarousel";
// import StatsSection from "../Components/Home/StatsSection";
// import ClientsSection from "../Components/Home/ClientsSection";
// import Test from "../Components/Home/Test"
// import New from "../Components/Home/New"
// import ParticleIntro from "../Components/Home/ParticleIntro";
// const Home = () => {
//     return (
//         <div className="w-full">

//             {/* <BannerCarousel /> */}
//             {/* <Test/> */}
//             <New/>
//             <StatsSection />
//             <ClientsSection/>

//             <div className="mt-5">

//             </div>
//         </div>
//     );
// };

// export default Home;
// -----------------------------------------------------------------
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Animation from "../Components/Home/Animation";
import New from "../Components/Home/New";
import StatsSection from "../Components/Home/StatsSection";
import ClientsSection from "../Components/Home/ClientsSection";

const Home = ({ onAnimation }) => {
  const [showIntro, setShowIntro] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("seenIntro");

    if (!hasSeenIntro) {
      setShowIntro(true);
      onAnimation?.(true); // tell parent: animation running
      sessionStorage.setItem("seenIntro", "true");
    } else {
      setShowContent(true);
      onAnimation?.(false); // skip animation
    }
  }, [onAnimation]);

  const handleAnimationComplete = () => {
    setShowIntro(false);
    setShowContent(true);
    onAnimation?.(false); // animation finished
  };

  return (
    <div className="w-full relative">
      {showIntro && <Animation onComplete={handleAnimationComplete} />}

      {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
