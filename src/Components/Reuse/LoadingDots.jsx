import React from "react";
import { motion } from "framer-motion";

const LoadingDots = ({ className }) => {
  return (
    <div className={`flex justify-center mt-4 space-x-2 ${className || ""}`}>
      <motion.span
        className="w-2 h-2 bg-white rounded-full"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.span
        className="w-2 h-2 bg-white rounded-full"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 0.6, delay: 0.2, ease: "easeInOut" }}
      />
      <motion.span
        className="w-2 h-2 bg-white rounded-full"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 0.6, delay: 0.4, ease: "easeInOut" }}
      />
    </div>
  );
};

export default LoadingDots;
