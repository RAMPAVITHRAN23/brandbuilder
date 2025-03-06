import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../../Ultils/motion"; // ✅ Importing existing fadeIn function

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("Home");

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About Us" },
        { href: "#services", label: "Services" },
        { href: "#testimonials", label: "Testimonials" },
    ];

    return (
        <motion.nav 
            className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm"
            variants={fadeIn("down", 0.2)} // ✅ Navbar fades in from top
            initial="hidden"
            animate="show"
        >
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 md:h-20 h-16">
                
                {/* Logo with Animation */}
                <motion.div
                    className="flex items-center gap-1 relative"
                    variants={fadeIn("left", 0.4)} // ✅ Logo fades in from left
                    initial="hidden"
                    animate="show"
                >
                    <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                    <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
                    <span className="text-xl font-semibold text-gray-800 pl-3">Brand builder</span>
                </motion.div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <HiX className="size-7 text-gray-700" /> : <HiMenu className="size-7 text-gray-700" />}
                </button>

                {/* Navigation Links (Desktop) with Animation */}
                <motion.div 
                    className="hidden md:flex gap-8"
                    variants={fadeIn("up", 0.4)} // ✅ Links fade in from bottom
                    initial="hidden"
                    animate="show"
                >
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={() => setActiveLink(link.label)}
                            className={`relative text-sm font-medium transition-all duration-300 
                            ${activeLink === link.label ? "text-blue-600" : "text-gray-800 hover:text-gray-900"}
                            after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:transition-transform after:duration-300 
                            after:scale-x-0 hover:after:scale-x-100`}
                        >
                            {link.label}
                        </a>
                    ))}
                </motion.div>

                {/* Get in Touch Button (Desktop) with Animation */}
                <motion.a
                    href="newsletter"
                    className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:shadow-lg transition-all"
                    variants={fadeIn("right", 0.4)} // ✅ Button fades in from right
                    initial="hidden"
                    animate="show"
                >
                    Get in touch
                </motion.a>
            </div>

            {/* Mobile Navigation Menu with Animation */}
            <motion.div 
                className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transform transition-transform duration-300 ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"}`}
                variants={fadeIn("up", 0.3)} // ✅ Mobile menu fades in from bottom
                initial="hidden"
                animate={isMenuOpen ? "show" : "hidden"}
            >
                <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={() => {
                                setActiveLink(link.label);
                                setIsMenuOpen(false); // Close menu on click
                            }}
                            className="block text-sm font-medium py-2 text-gray-800 hover:text-blue-600 transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="newsletter"
                        className="block bg-blue-600 text-white px-10 py-2 rounded-md hover:bg-blue-700 hover:shadow-lg transition-all cursor-pointer"
                    >
                        Get in touch
                    </a>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
