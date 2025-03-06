import React from "react";
import { FcAlarmClock } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa";
import heroImage from "../../assets/hero-image.png";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../Ultils/motion"; // ✅ Using predefined animation utils

const Hero = () => {
    return (
        <section
            id="home"
            className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 sm:px-6 lg:px-8"
        >
            {/* Left Column */}
            <div className="w-full md:w-1/2 space-y-8">
                {/* Star Badge */}
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full cursor-pointer group">
                        <span className="text-blue-600 group-hover:text-amber-400 group-hover:scale-110 transition-transform">
                            ⭐
                        </span>
                        <span className="text-sm font-medium">
                            Jump start your growth
                        </span>
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    variants={textVariant(0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                >
                    We boost the growth for
                    <span className="text-blue-600 inline-block">
                        {" "}
                        startup to Fortune 500{" "}
                    </span>
                    <span className="px-2 inline-block"> Companies </span>
                    <span className="inline-block ml-2 animate-pulse">
                        <FcAlarmClock className="text-2xl md:text-3xl" />
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-gray-600 text-lg md:text-xl"
                >
                    Get the most accurate leads, salespeople training, conversions, tools, and more - all within one billing plan.
                </motion.p>

                {/* Input & Button */}
                <motion.div
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-3 max-w-sm w-full"
                >
                    <motion.input
                        type="email"
                        placeholder="Email address"
                        className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-blue-600 transition-all"
                        whileFocus={{ scale: 1.02 }}
                    />
                    <motion.button
                        className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-300 cursor-pointer flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaArrowRight />
                    </motion.button>
                </motion.div>
            </div>

            {/* Right Column (Image) */}
            <motion.div
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full md:w-1/2 flex justify-center"
            >
                <motion.img
                    src={heroImage}
                    alt="Hero Section"
                    className="relative z-10 w-full max-w-md md:max-w-lg rounded-lg transition-transform duration-300 hover:scale-105"
                    animate={{
                        y: [50, 10, 50], // Floating effect
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
        </section>
    );
};

export default Hero;
