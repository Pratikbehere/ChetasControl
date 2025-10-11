import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { FaAward, FaWater, FaCogs, FaTrophy } from "react-icons/fa";

const timelineEvents = [
  {
    year: "1989",
    title: "Incorporation",
    desc: "Chetas Control Pvt. Ltd. was founded, focusing on flow metering, instrumentation, and automation — emphasizing user-friendly systems over complex controls.",
    img: "/Images/AboutCompany/TimeLine/MD.png",
  },
  {
    year: "Early 1990s",
    title: "Flow Measurement Experiments",
    desc: "Experimented with multiple flow measurement technologies before finalizing on ultrasonic transit-time technology.",
    img: "/Images/AboutCompany/TimeLine/FlowMeasure.png",
  },
  {
    year: "1995–2000",
    title: "Shift to Water Utility Industry",
    desc: "With growing national awareness about water management, Chetas shifted focus to the water utility sector, forming a strong R&D team.",
    img: "/Images/AboutCompany/TimeLine/SaveWater.jpg",
  },
  {
    year: "2001",
    title: "First Indian Ultrasonic Flow Meter Prototype",
    desc: "Developed India’s first ultrasonic transit-time flow meter, targeting large-pipe water measurement. Introduced PicoSonic range.",
    img: "/Images/AboutCompany/TimeLine/Ultrasonic.jpg",
  },
  {
    year: "2001",
    title: "Pioneering Domestic Metering Concept",
    desc: "Introduced the privatized metering and consumption-based revenue model—a first in India’s municipal water sector.",
    img: "/Images/AboutCompany/TimeLine/DomesticMeter.jpg",
  },
  {
    year: "2004",
    title: "Second-Generation PicoSonic",
    desc: "Launched 2nd generation PicoSonic flow meters with remote communication and inbuilt printer.",
    img: "/Images/AboutCompany/TimeLine/PicoSonic.jpg",
  },
  {
    year: "2006",
    title: "National Recognition",
    desc: "Received the G.S. Parkhe Industrial Merit Award for import-substitute ultrasonic flow meter manufacturing.",
    img: "/Images/AboutCompany/TimeLine/Parkhe.png",
  },
  {
    year: "2007–2009",
    title: "Innovation in Bulk Metering",
    desc: "Developed JalSonic – a battery-operated ultrasonic water meter with GSM connectivity and tamper-proof design. Executed one of the largest ultrasonic meter orders.",
    img: "/Images/AboutCompany/TimeLine/BulkMeters.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 80, rotate: -5 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.8, type: "spring", stiffness: 60 },
  },
};

export default function ChetasTimeline_Temp() {
  const { scrollYProgress } = useViewportScroll();
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Main heading */}
      <h2 className="font-roboto text-4xl font-extrabold text-center text-gray-800 mb-24">
      Decades of Precision and Innovation
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Center Line (only for PC view) */}
        <div className="hidden md:block">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 rounded" />
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 rounded origin-top"
            style={{ scaleY }}
          />
        </div>

        {timelineEvents.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className={`mb-24 flex flex-col md:flex-row items-center justify-between gap-10 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              {/* Image Card */}
              <motion.div
                className="w-full md:w-1/2 rounded-2xl overflow-hidden cursor-pointer border-2 border-blue-500 bg-blue-50 shadow-xl"
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  boxShadow: "0px 25px 50px rgba(0,0,0,0.25)",
                }}
              >
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-72 md:h-80 object-cover"
                />
              </motion.div>

              {/* Text Card */}
              <motion.div
                className="w-full md:w-1/2 relative p-8 rounded-2xl border-2 border-blue-500 bg-white shadow-xl text-center md:text-left font-roboto"
                initial={{
                  opacity: 0,
                  x: isLeft ? 120 : -120,
                  rotate: isLeft ? -5 : 5,
                }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 60,
                }}
                whileHover={{
                  scale: 1.03,
                  rotate: isLeft ? 1 : -1,
                  boxShadow: "0px 25px 50px rgba(0,0,0,0.25)",
                }}
              >
                {/* Removed milestone icons entirely */}

                <h3 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4 font-roboto">
                  {event.year}
                </h3>
                <h4 className="text-2xl font-semibold text-gray-800 mb-3 font-roboto">
                  {event.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg font-roboto">
                  {event.desc}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
