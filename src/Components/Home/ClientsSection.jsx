// ClientsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const clients = [
  { name: "Ahmedabad Municipal Corporation", image: "/Images/Home/client/ahmedabad.png", review: "Chetas provided excellent SCADA and water automation solutions for our city projects." },
  { name: "CIDCO", image: "/Images/Home/client/cidco.png", review: "Reliable and efficient automation systems, delivered on time with great support." },
  { name: "DVC", image: "/Images/Home/client/dvc.png", review: "Professional team and high-quality water management solutions for our industrial projects." },
  { name: "Jal Jivan Mission", image: "/Images/Home/client/jaljivan.png", review: "Innovative and effective automation solutions for rural water supply projects." },
  { name: "MIDC", image: "/Images/Home/client/midc.png", review: "Smart and accurate flow monitoring systems, enhancing operational efficiency." },
  { name: "Maharashtra Jeevan Pradhikaran", image: "/Images/Home/client/mjp.png", review: "Excellent service and modern technology implementation for water infrastructure." },
  { name: "NHP", image: "/Images/Home/client/nhp.png", review: "High-quality solutions with great support and timely project delivery." },
  { name: "Navi Mumbai Mahanagarpalika", image: "/Images/Home/client/navi.png", review: "Trusted partner for advanced water management and monitoring solutions." },
  { name: "Government of Telangana", image: "/Images/Home/client/telangana.png", review: "Chetas provided top-notch dam automation systems for state projects." },
  { name: "UP Jal Nigam", image: "/Images/Home/client/upjal.png", review: "Reliable, efficient, and innovative water management solutions delivered consistently." },
];

const ClientsSection = () => {
  const marqueeClients = [...clients, ...clients]; // duplicate for smooth loop

  return (
    <section className="relative w-full py-5 overflow-hidden bg-sky-100 font-['Roboto']">
      {/* Heading */}
      <div className="text-center mb-16 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-black drop-shadow-lg">
          Our Clients
        </h2>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-black/90 max-w-3xl mx-auto tracking-wide drop-shadow-sm">
          Trusted by government and public sector organizations across India.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 13, ease: "linear" }}
        >
          {marqueeClients.map((client, idx) => (
            <div
              key={idx}
              className="flex flex-shrink-0 w-[250px] sm:w-[300px] md:w-[350px] bg-gradient-to-br from-white/90 to-sky-50 rounded-3xl p-4 sm:p-6 md:p-6 shadow-lg border-2 border-blue-400/70"
            >
              {/* Inner content scales on hover */}
              <div className="flex items-center gap-4 w-full transform transition-transform duration-300 hover:scale-105">
                {/* Client Logo */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Name & Review */}
                <div className="flex flex-col">
                  <h3 className="text-black text-sm sm:text-base md:text-lg font-bold mb-1 drop-shadow-md">
                    {client.name}
                  </h3>
                  <h4 className="text-blue-600 text-xs sm:text-sm md:text-base font-semibold mb-1">
                    Review
                  </h4>
                  <p className="text-gray-800 text-xs sm:text-sm md:text-base drop-shadow-sm">
                    {client.review}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
