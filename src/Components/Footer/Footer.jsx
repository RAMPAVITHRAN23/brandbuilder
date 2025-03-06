import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const footerLinks = {
    "Company": ["About", "Terms of Use", "Privacy Policy", "How it Works", "Contact Us"],
    "Get Help": ["Support Career", "24h Service", "Quick Chat"],
    "Support": ["FAQ", "Policy", "Business"],
    "Contact": ["WhatsApp", "Support 24"]
};

const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Footer = () => {
    return (
        <motion.footer 
            className="bg-gray-50 py-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-6 flex flex-wrap justify-between items-start">
                
                {/* Brand Info - Fades in on scroll */}
                <motion.div 
                    className="w-full md:w-2/5 mb-6 md:mb-0"
                    variants={fadeInVariants}
                >
                    <div className="flex items-center gap-2">
                        {/* Colored Dots */}
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <div className="w-3 h-3 bg-red-500 rounded-full -ml-2"></div>
                        <span className="text-lg font-semibold text-gray-800">Brand Builder</span>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm">
                        The copy warned the Little Blind Text, that where it came from 
                        it would have been rewritten a thousand times.
                    </p>
                    
                    {/* Social Icons with Hover Effects */}
                    <div className="flex gap-4 mt-4">
                        {[FaFacebookF, FaTwitter, FaLinkedin].map((Icon, index) => (
                            <motion.a 
                                key={index}
                                href="#" 
                                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-300 rounded-full transition"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Icon size={16} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Footer Links - Fades in on scroll */}
                <motion.div 
                    className="w-full md:w-3/5 flex flex-wrap justify-between"
                    variants={fadeInVariants}
                >
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="w-1/4 text-left">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                            <ul className="space-y-1 text-sm">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-gray-600 hover:text-blue-600 transition">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Copyright Section */}
            <motion.div 
                className="text-center text-gray-400 py-2 border-t mt-6"
                variants={fadeInVariants}
            >
                Copyright © {new Date().getFullYear()} BrandBuilder.com
            </motion.div>
        </motion.footer>
    );
};

export default Footer;
