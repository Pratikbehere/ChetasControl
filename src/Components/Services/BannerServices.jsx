// Components/BannerServices.jsx
import React from "react";
import { motion } from "framer-motion";

const BannerServices = () => {
  return (
    <section className="relative w-full h-[30vh] bg-gradient-to-r from-cyan-800 via-slate-900 to-teal-800 flex items-center justify-center font-['Roboto'] overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-md">
          Our Specialized Services
        </h2>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-3 h-1 bg-cyan-400 mx-auto rounded-full origin-left"
        ></motion.div>

        <p className="mt-4 text-gray-200 text-sm md:text-lg font-light max-w-lg mx-auto leading-relaxed">
          Empowering smart cities and industries through automation, data, and sustainable water management.
        </p>
      </motion.div>
    </section>
  );
};

export default BannerServices;
