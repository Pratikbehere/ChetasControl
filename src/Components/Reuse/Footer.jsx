// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 pt-10 pb-6 mt-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">About Chetas</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Established in 1989, Chetas Control Systems Pvt Ltd is a pioneer in ultrasonic flow metering, SCADA automation, smart metering and audits across water & wastewater sectors in India.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white transition-colors duration-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors duration-200">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors duration-200">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors duration-200">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
          <p className="text-sm text-gray-300">
            <strong>Address:</strong><br />
            Chetas House, Plot No.1, Survey No.8+9,<br />
            Shree Siddhatek Society, Sutarwadi, Pashan,<br />
            Pune , 411 021, Maharashtra, India
          </p>
          <p className="mt-4 text-sm text-gray-300">
            <strong>Phone:</strong> 020-25871111 / 25870370
          </p>
          <p className="mt-2 text-sm text-gray-300">
            <strong>Email:</strong> <a href="mailto:info@chetascontrol.com" className="hover:text-white">info@chetascontrol.com</a>
          </p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 mt-6 pt-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Chetas Control Systems Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
