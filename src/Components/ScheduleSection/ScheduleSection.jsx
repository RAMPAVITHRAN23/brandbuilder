import React from "react";
import stats from "../../assets/stats.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const ScheduleSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
                
                {/* Left Section (Image) */}
                <motion.div
                    className="md:w-1/2 w-full"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <img src={stats} alt="schedule img" className="w-full h-auto" />
                </motion.div>

                {/* Right Section (Text & Button) */}
                <motion.div
                    className="md:w-1/2 w-full"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <p className="text-orange-500 font-semibold">SCHEDULE</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                        Streamline Your Business <br />
                        with Smart Scheduling Solutions
                    </h2>
                    <p className="text-gray-600 mb-8 py-2">
                        Take control of your time and boost productivity with our intelligent
                        scheduling system. Automate appointments, manage team availability, and deliver exceptional
                        customer experiences through seamless calendar management.
                    </p>

                    {/* Button */}
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
            </div>
        </section>
    );
};

export default ScheduleSection;
