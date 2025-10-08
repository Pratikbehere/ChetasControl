import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [hoverAbout, setHoverAbout] = useState(false); // Desktop About hover
  const [mobileAbout, setMobileAbout] = useState(false); // Mobile About toggle
  const hoverTimeout = useRef(null);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    {
      label: "About ",
      subMenu: [
        { path: "/aboutCompanyPage", label: "About Company" },
        { path: "/aboutTeamPage", label: "About Team" },
        { path: "/awardsPage", label: "Awards" },
      ],
    },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact" },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/chetascontrolsystem", label: "Facebook", color: "#1877F2" },
    { icon: <FaTwitter />, link: "https://x.com/Chetascontrol", label: "Twitter", color: "#1DA1F2" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/company/chetas-control/", label: "LinkedIn", color: "#0A66C2" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/chetascontrolsystems/", label: "Instagram", color: "#E4405F" },
  ];

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoverAbout(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setHoverAbout(false), 150);
  };

  return (
    <nav className="fixed w-full z-50 bg-sky-100 border-b border-black/20 h-24 font-['Roboto']" role="navigation" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-full">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" aria-label="Chetas Control Systems Home">
            <img
              src="/Images/Navbar/ChetasLogo.png"
              alt="Chetas Control Systems Logo"
              className="h-20 w-auto transform hover:scale-110 transition-transform duration-300 drop-shadow-lg"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-1 justify-center space-x-16 relative">
          {navItems.map((item, idx) => (
            <li key={idx} className="relative">
              {item.subMenu ? (
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="inline-block relative"
                >
                  <span className="relative text-black text-xl font-medium tracking-wide cursor-pointer transition duration-300">
                    {item.label}
                  </span>

                  {/* Hover underline */}
                  <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 w-0 group-hover:w-full transition-all duration-500"></span>

                  {/* Dropdown */}
                  {hoverAbout && (
                    <ul className="absolute left-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-44 py-2 z-50">
                      {item.subMenu.map((sub, i) => (
                        <li key={i}>
                          <Link
                            to={sub.path}
                            className="block px-4 py-2 text-gray-800 hover:bg-sky-100 hover:text-indigo-700 transition-colors duration-200"
                            onClick={() => setHoverAbout(false)} // CLOSE dropdown on click
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className="relative text-black text-xl font-medium tracking-wide transition duration-300"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 w-0 group-hover:w-full transition-all duration-500"></span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-5 flex-shrink-0">
          {socialIcons.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              style={{ color: item.color }}
              className="text-xl hover:scale-110 transition-transform duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black hover:text-indigo-700 focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-sky-100 border-t border-black/20 shadow-md px-4 pt-4 pb-6 space-y-3">
          {navItems.map((item, idx) => (
            <li key={idx}>
              {item.subMenu ? (
                <>
                  <button
                    onClick={() => setMobileAbout(!mobileAbout)}
                    className="w-full text-left text-black text-lg font-medium px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                  >
                    {item.label}
                  </button>
                  {mobileAbout && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.subMenu.map((sub, i) => (
                        <li key={i}>
                          <Link
                            to={sub.path}
                            className="block text-gray-800 text-base px-4 py-2 rounded-md hover:bg-sky-200 transition"
                            onClick={() => {
                              setIsOpen(false);
                              setMobileAbout(false);
                            }}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className="block text-black text-lg font-medium transition duration-300 rounded-lg px-4 py-2 shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}

          {/* Mobile Social Icons */}
          <div className="flex items-center space-x-4 mt-4 justify-center">
            {socialIcons.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                style={{ color: item.color }}
                className="text-xl hover:scale-110 transition-transform duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </ul>
      )}
    </nav>
  );
}
