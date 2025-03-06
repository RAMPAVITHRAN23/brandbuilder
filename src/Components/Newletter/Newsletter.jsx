import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const Newsletter = () => {
    return (
        <motion.section 
            id='newsletter' 
            className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="bg-blue-600 rounded-2xl overflow-hidden">
                <div className="relative md:px-16 py-16 px-6 md:py-24">
                    {/* Gradient */}
                    <div
                        className="absolute top-0 right-0 w-1/2 h-full bg-blue-800 hidden md:block"
                        style={{ clipPath: "polygon(100% 0, 100% 100%, 50% 100%, 0% 0%)" }}
                    ></div>

                    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                        {/* Left content */}
                        <motion.div 
                            className="text-white max-w-lg text-center md:text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">
                                Subscribe Newsletter
                            </h2>
                            <p className="text-blue-100 text-sm sm:text-base">
                                Best cooks and best delivery guys all at your service. Hot tasty food.
                            </p>
                        </motion.div>

                        {/* Right content (Email + Button) */}
                        <motion.div 
                            className="flex w-full sm:w-auto md:w-96 bg-white rounded-xl overflow-hidden"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {/* Input field */}
                            <input
                                type="text"
                                placeholder="Enter your email address"
                                className="w-full px-4 py-3 outline-none text-gray-800 placeholder-gray-400"
                            />

                            {/* Button */}
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-green-500 text-white px-6 flex items-center gap-2"
                            >
                                <span>Discover</span>
                                <HiArrowRight className="size-5" />
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Newsletter;
