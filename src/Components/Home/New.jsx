import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { FaChartBar, FaWater, FaIndustry } from "react-icons/fa";
import { MdOutlineAnalytics, MdOutlineWater } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    name: "Chetas Control Systems",
    desc: "Innovating automation solutions for a smarter tomorrow.",
    isCompany: true,
    services: [
      { name: "Bulk meter", icon: <FaChartBar />, href: "#bulk" },
      { name: "Dam automation", icon: <FaWater />, href: "#dam" },
      { name: "Flow meters", icon: <MdOutlineWater />, href: "#flow" },
      { name: "Scada", icon: <MdOutlineAnalytics />, href: "#scada" },
      { name: "Water audits", icon: <FaIndustry />, href: "#audits" },
    ],
  },
  {
    name: "Bulk meter",
    desc: "High-accuracy bulk metering solutions built for industrial-grade performance.",
    img: "/Images/Home/Banner/BulkMeter.jpg",
  },
  {
    name: "Dam automation",
    desc: "Smart monitoring and control systems for intelligent dam automation.",
    img: "/Images/Home/Banner/DamAutomation.jpeg",
  },
  {
    name: "Flow meters",
    desc: "Reliable flow measurement systems engineered for precision and durability.",
    img: "/Images/Home/Banner/FlowMeters.jpg",
  },
  {
    name: "Scada",
    desc: "Comprehensive SCADA systems enabling centralized, seamless monitoring and control.",
    img: "/Images/Home/Banner/Scada.jpg",
  },
  {
    name: "Water audits",
    desc: "Optimizing water usage with intelligent, data-driven audit solutions.",
    img: "/Images/Home/Banner/WaterAudits.jpg",
  },
];

const serviceIcons = {
  "Bulk meter": <FaChartBar />,
  "Dam automation": <FaWater />,
  "Flow meters": <MdOutlineWater />,
  Scada: <MdOutlineAnalytics />,
  "Water audits": <FaIndustry />,
};

const BannerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div
      className="w-full relative overflow-hidden z-10 font-[Inter]"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1200}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* ---------- FIRST SLIDE ---------- */}
            {slide.isCompany ? (
              <div className="relative w-full h-full">
                {/* Background animation */}
                <motion.div
                  className="w-full h-full bg-gradient-to-r from-cyan-800 via-slate-900 to-teal-800"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 200%" }}
                />
                <div className="absolute inset-0 bg-black/60" />

                {/* Floating glow orbs */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-cyan-400/15 blur-3xl"
                    style={{ top: `${15 + i * 15}%`, left: `${10 + i * 20}%` }}
                    animate={{
                      y: [0, 40, 0],
                      x: [0, 25, -25, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 10 + i * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 z-10">
                  <AnimatePresence mode="wait">
                    {activeIndex === index && (
                      <motion.div
                        key={`slide-${index}`}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative w-full max-w-5xl flex flex-col items-center gap-6"
                      >
                        <motion.h1
                          variants={itemVariants}
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-snug sm:leading-tight"
                        >
                          {slide.name}
                        </motion.h1>

                        <motion.p
                          variants={itemVariants}
                          className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-xl sm:max-w-2xl md:max-w-3xl leading-relaxed font-medium px-2 sm:px-4"
                        >
                          {slide.desc}
                        </motion.p>

                        <motion.h2
                          variants={itemVariants}
                          className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-wide drop-shadow-md"
                        >
                          Our Services
                        </motion.h2>

                        <motion.div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
                          {slide.services.map((service, idx) => (
                            <motion.a
                              key={idx}
                              href={service.href}
                              variants={itemVariants}
                              className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-md rounded-2xl px-4 sm:px-6 py-3 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300"
                            >
                              <div className="text-cyan-400">
                                {React.cloneElement(service.icon, { size: 36 })}
                              </div>
                              <span className="text-white text-sm sm:text-base md:text-lg font-medium">
                                {service.name}
                              </span>
                            </motion.a>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ) : (
              /* ---------- OTHER SLIDES ---------- */
              <div className="relative w-full h-full">
                {/* Desktop layout (split panel) */}
                <div className="hidden md:flex w-full h-full">
                  {/* Left Gradient Panel (25%) */}
                  <motion.div
                    className="w-1/4 h-full bg-gradient-to-br from-cyan-800 via-slate-900 to-teal-800 flex flex-col justify-center items-center px-6 sm:px-8 text-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="flex flex-col items-center gap-4"
                    >
                      <motion.div variants={itemVariants} className="text-cyan-400">
                        {React.cloneElement(serviceIcons[slide.name], { size: 64 })}
                      </motion.div>
                      <motion.h2
                        variants={itemVariants}
                        className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold tracking-wide"
                      >
                        {slide.name}
                      </motion.h2>
                      <motion.p
                        variants={itemVariants}
                        className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-[200px]"
                      >
                        {slide.desc}
                      </motion.p>
                    </motion.div>
                  </motion.div>

                  {/* Right Image (75%) */}
                  <motion.div
                    className="w-3/4 h-full relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <img
                      src={slide.img}
                      alt={slide.name}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </motion.div>
                </div>

                {/* Mobile layout (same as first slide style) */}
                <div className="flex md:hidden absolute inset-0 items-center justify-center text-center px-4">
                  <img
                    src={slide.img}
                    alt={slide.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="relative z-10 flex flex-col items-center gap-4"
                  >
                    <motion.div variants={itemVariants} className="text-cyan-400">
                      {React.cloneElement(serviceIcons[slide.name], { size: 48 })}
                    </motion.div>
                    <motion.h2
                      variants={itemVariants}
                      className="text-3xl font-semibold text-white"
                    >
                      {slide.name}
                    </motion.h2>
                    <motion.p
                      variants={itemVariants}
                      className="text-gray-200 text-base leading-relaxed max-w-sm"
                    >
                      {slide.desc}
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
