// Components/AboutMD.jsx
import React from "react";

const AboutMD = () => {
  return (
    <section className="w-full px-4 md:px-16 py-12 bg-white font-['Roboto']">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">

        {/* Right on Mobile: Image first */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0 md:order-2">
          <img
            src="/Images/AboutCompany/MDSir.jpg"
            alt="MD Sir"
            className="rounded-lg shadow-lg w-full sm:w-4/5 md:w-full h-auto object-contain"
          />
        </div>

        {/* Left on PC: Text */}
        <div className="w-full md:w-1/2 md:order-1 text-gray-800">
          {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 text-center md:text-left">
            About Chetas Control Systems
          </h2> */}
          
          <p className="mb-4 leading-relaxed text-justify">
            <span className="font-bold">Founded in 1989, Chetas Control Systems Pvt. Ltd.</span> has established itself as a pioneering force in flow instrumentation and advanced water management solutions across India. With a focus on sustainable resource management, we serve a diverse clientele, including central and state government agencies, municipal corporations, MIDC, and public sector enterprises.
          </p>
          
          <p className="mb-4 leading-relaxed text-justify">
            We specialize in providing innovative solutions in smart metering, SCADA automation, dam monitoring, energy audits, water audits, and IoT-based intelligent water management. Our expertise is driven by a commitment to enhance the efficiency and sustainability of water resource utilization, ensuring that urban and industrial infrastructure is supported by cutting-edge technology and reliable systems.
          </p>
          
          <p className="mb-4 leading-relaxed text-justify">
            At Chetas Control Systems, we integrate the latest advancements in automation and IoT to deliver scalable, efficient solutions that help cities and industries optimize resource management. Our goal is to empower organizations to embrace modern technology while ensuring long-term sustainability and operational excellence.
          </p>
          
          {/* <p className="leading-relaxed text-justify">
            We are committed to providing innovative, reliable, and future-ready solutions that support the growing demands of urbanization and industrialization, contributing to a smarter, more sustainable future.
          </p> */}
        </div>

      </div>
    </section>
  );
};

export default AboutMD;
