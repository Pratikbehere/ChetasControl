import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PARTICLE_COUNT = 120;
const PARTICLE_SIZE = 6;
const LOGO_SRC = "/Images/Navbar/ChetasLogo.png"; // your logo

const Animation = ({ onComplete }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      color: ["#00FFFF", "#0FF", "#00BFFF", "#0AF"][Math.floor(Math.random() * 4)],
    }));
    setParticles(arr);

    const timer = setTimeout(() => {
      onComplete(); // trigger showing the banner
    }, 3500); // animation duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black">
      {/* Particles */}
      {particles.map((p, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full"
          style={{
            width: PARTICLE_SIZE,
            height: PARTICLE_SIZE,
            backgroundColor: p.color,
            top: p.y,
            left: p.x,
          }}
          animate={{
            top: "50%",
            left: "50%",
            x: (Math.random() - 0.5) * 40,
            y: (Math.random() - 0.5) * 40,
            opacity: [1, 0.8, 0],
            scale: [1, 1.5, 0.8],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            delay: Math.random() * 0.5,
          }}
        />
      ))}

      {/* Logo only */}
      <motion.img
        src={LOGO_SRC}
        alt="Chetas Logo"
        className="w-48 md:w-64"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 1.5 }}
      />
    </div>
  );
};

export default Animation;
