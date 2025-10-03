import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Cpu, Droplets, Waves, BarChart3, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GradientText = ({ children, className }) => (
  <h1
    className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-teal-400 ${className}`}
    style={{ fontFamily: `"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif` }}
  >
    {children}
  </h1>
);

const slides = [
  {
    name: "Chetas Control Systems",
    desc: "Innovating automation solutions for a smarter tomorrow.",
    img: "/Images/Home/Banner/mainbanner.jpg",
    isCompany: true,
    services: [
      { name: "Bulk meter", icon: <BarChart3 />, href: "#bulk" },
      { name: "Dam automation", icon: <Waves />, href: "#dam" },
      { name: "Flow meters", icon: <Droplets />, href: "#flow" },
      { name: "Scada", icon: <Settings />, href: "#scada" },
      { name: "Water audits", icon: <Cpu />, href: "#audits" },
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
  "Bulk meter": <BarChart3 className="text-cyan-400" />,
  "Dam automation": <Waves className="text-cyan-400" />,
  "Flow meters": <Droplets className="text-cyan-400" />,
  Scada: <Settings className="text-cyan-400" />,
  "Water audits": <Cpu className="text-cyan-400" />,
};

const BannerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  return (
    <div
      className="w-full relative font-sans overflow-hidden z-10"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1200}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.img}
                alt={slide.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/60" />

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
                      {/* Title */}
                      <motion.div variants={titleVariants}>
                        <GradientText className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide break-words leading-tight">
                          {slide.name}
                        </GradientText>
                      </motion.div>

                      {/* Description */}
                      <motion.p
                        variants={itemVariants}
                        className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 max-w-3xl leading-relaxed font-medium drop-shadow-md px-2 sm:px-4"
                      >
                        {slide.desc}
                      </motion.p>

                      {/* Services */}
                      {slide.isCompany && (
                        <>
                          <motion.h2
                            variants={itemVariants}
                            className="mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-wide drop-shadow-md"
                          >
                            Our Services
                          </motion.h2>

                          <motion.div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-12 px-2">
                            {slide.services.map((service, idx) => (
                              <motion.a
                                key={`${service.name}-${activeIndex}`}
                                href={service.href}
                                variants={itemVariants}
                                className="flex flex-col items-center gap-1 sm:gap-2 cursor-pointer hover:scale-110 transition-transform duration-300"
                              >
                                <div className="text-cyan-400 flex items-center justify-center">
                                  {React.cloneElement(service.icon, {
                                    size: 36, // smaller icon for mobile
                                  })}
                                </div>
                                <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold hover:text-cyan-300 transition-colors duration-300">
                                  {service.name}
                                </span>
                              </motion.a>
                            ))}
                          </motion.div>
                        </>
                      )}

                      {/* Non-company slides */}
                      {!slide.isCompany && (
                        <motion.div
                          variants={itemVariants}
                          className="flex flex-col items-center gap-4 mt-4 sm:mt-6"
                        >
                          <div className="text-cyan-400 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                            {React.cloneElement(serviceIcons[slide.name], { size: 48 })}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
