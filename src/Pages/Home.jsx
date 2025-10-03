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
import New from "../Components/Home/New";
import StatsSection from "../Components/Home/StatsSection";
import ClientsSection from "../Components/Home/ClientsSection";
import Animation from "../Components/Home/Animation";

const Home = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [shouldMountContent, setShouldMountContent] = useState(false);

  useEffect(() => {
    // Check if animation has already been shown in this session
    const hasSeenIntro = sessionStorage.getItem("seenIntro");

    if (!hasSeenIntro) {
      setShowIntro(true);
      sessionStorage.setItem("seenIntro", "true");
    } else {
      setShouldMountContent(true); // skip animation
    }
  }, []);

  const handleAnimationComplete = () => {
    setShowIntro(false);
    setShouldMountContent(true); // show content
  };

  return (
    <div className="w-full relative">
      {showIntro && <Animation onComplete={handleAnimationComplete} />}

      {shouldMountContent && (
        <div className="relative z-0 transition-opacity duration-500">
          <New />
          <StatsSection />
          <ClientsSection />
        </div>
      )}
    </div>
  );
};

export default Home;


