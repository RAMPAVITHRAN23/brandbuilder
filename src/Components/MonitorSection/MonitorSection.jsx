import React from "react";
import monitorImg from "../../assets/monitor-card.webp";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const fadeIn = (direction, delay) => ({
    hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
    show: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.8, delay, ease: "easeOut" }
    }
});

const MonitorSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-6 md:py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
                
                {/* Left Section (Text) */}
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }} // Ensures animation triggers on scroll & refresh
                    className="md:w-1/2 w-full"
                >
                    <p className="text-green-500 font-semibold">MONITOR</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
                        Introducing the Best Mobile Carousels
                    </h2>
                    <p className="text-gray-600 py-1 leading-relaxed">
                        Take control of your time and boost productivity with our intelligent
                        scheduling system. Automate appointments, manage team availability, and
                        deliver exceptional customer experiences through seamless calendar management.
                    </p>

                    <motion.a
                        href="#"
                        className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore Scheduling Features
                        <IoIosArrowRoundForward className="size-8" />
                    </motion.a>
                </motion.div>

                {/* Right Section (Image) */}
                <motion.div
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }} // Ensures animation replays when in view
                    className="md:w-1/2 w-full"
                >
                    <img
                        src={monitorImg}
                        alt="Monitor Section"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default MonitorSection;
