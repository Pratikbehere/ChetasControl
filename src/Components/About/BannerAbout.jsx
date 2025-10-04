// Components/BannerAbout.jsx
import React from "react";
import { motion } from "framer-motion";

const BannerAbout = () => {
  return (
    <section className="relative w-full h-[30vh] bg-gradient-to-r from-cyan-800 via-slate-900 to-teal-800 flex items-center justify-center font-['Roboto'] overflow-hidden">
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-md">
          About Us
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="mt-3 w-24 md:w-32 h-1 bg-cyan-400 mx-auto rounded-full origin-left"
        ></motion.div>
        <p className="mt-4 text-gray-200 text-sm md:text-lg font-light max-w-lg mx-auto leading-relaxed">
          Driven by innovation, powered by expertise — building sustainable solutions for the future.
        </p>
      </motion.div>
    </section>
  );
};

export default BannerAbout;
