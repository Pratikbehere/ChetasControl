// Components/Home/Animation.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Animation = ({ onComplete }) => {
  const text = "Welcome to Chetas";
  const letters = text.split("");
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Show logo after letters finish typing
    const logoTimer = setTimeout(() => setShowLogo(true), letters.length * 120 + 500);
    return () => clearTimeout(logoTimer);
  }, [letters.length]);

  const handleLogoComplete = () => {
    if (onComplete) onComplete();
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.5,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center text-white overflow-hidden"
      initial={{ backgroundColor: "#001f3f" }}
      animate={{
        background: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)",
      }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      {/* Keep vertical space stable to prevent text jumping */}
      <div className="flex flex-col items-center justify-center min-h-[300px]">
        {/* Smooth handwriting letters */}
        <motion.h1
          className="text-5xl md:text-6xl font-[Great_Vibes] flex flex-wrap justify-center mb-6 tracking-wider"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {letters.map((char, idx) => (
            <motion.span key={idx} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Logo fades in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={showLogo ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          onAnimationComplete={showLogo ? handleLogoComplete : undefined}
        >
          <img
            src="/Images/Navbar/ChetasLogo.png"
            alt="Chetas Logo"
            className="w-44 md:w-56 mt-4"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Animation;
