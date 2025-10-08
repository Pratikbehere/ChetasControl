import React from "react";
import { FaWater, FaBolt, FaIndustry, FaCog } from "react-icons/fa";

const services = [
  { id: 1, title: "Smart Metering", desc: "Real-time measurement", img: "/Images/Services/smart-metering.jpeg", icon: <FaWater />, color: "text-blue-500", bullets: ["Monitor flow", "Track usage", "Reduce waste"] },
  { id: 2, title: "SCADA Automation", desc: "Centralized monitoring", img: "/Images/Services/scada.jpeg", icon: <FaCog />, color: "text-green-500", bullets: ["Remote control", "Instant alerts", "Data logging"] },
  { id: 3, title: "Water Audits", desc: "Reduce water losses", img: "/Images/Services/water-audits.jpeg", icon: <FaWater />, color: "text-teal-500", bullets: ["Leak detection", "Usage report", "Optimize supply"] },
  { id: 4, title: "IoT Deployment", desc: "Smart sensors", img: "/Images/Services/iot.jpeg", icon: <FaBolt />, color: "text-yellow-500", bullets: ["Easy setup", "Realtime data", "Remote monitoring"] },
  { id: 5, title: "Energy Audits", desc: "System energy analysis", img: "/Images/Services/energy-audits.jpeg", icon: <FaBolt />, color: "text-orange-500", bullets: ["Consumption tracking", "Efficiency tips", "Cost savings"] },
  { id: 6, title: "Dam Monitoring", desc: "Remote structural health", img: "/Images/Services/dam.jpeg", icon: <FaIndustry />, color: "text-purple-500", bullets: ["Structural check", "Alerts & alarms", "Remote access"] },
  { id: 7, title: "Bulk Metering", desc: "Large-scale measurement", img: "/Images/Services/bulk-metering.jpeg", icon: <FaIndustry />, color: "text-pink-500", bullets: ["High capacity", "Accurate data", "Automated reports"] },
  { id: 8, title: "AMR", desc: "Automated meter reading", img: "/Images/Services/amr.jpeg", icon: <FaCog />, color: "text-indigo-500", bullets: ["Automatic readings", "Reduced errors", "Time-saving"] },
];

export default function ServicesMasonry() {
  return (
<div className="w-full bg-gray-50 py-8 px-4 font-roboto">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div key={service.id} className="group perspective">
            <div className="relative w-full h-72 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              
              {/* Front */}
              <div className="absolute w-full h-full backface-hidden rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-white via-gray-50 to-white border-2 border-gray-500 flex flex-col items-center justify-center p-4">
                <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden p-4">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col items-center text-center">
                  <div className={`${service.color} text-4xl mb-3`}>{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
                </div>
              </div>

              {/* Back */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-3xl overflow-hidden shadow-lg bg-white border-2 border-gray-500 flex flex-col items-center justify-center p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{service.desc}</p>
                <ul className="text-gray-700 text-sm mb-4 list-disc list-inside">
                  {service.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300">
                  Learn More
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Tailwind classes for 3D flip */}
      <style jsx>{`
      
        .perspective {

          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
