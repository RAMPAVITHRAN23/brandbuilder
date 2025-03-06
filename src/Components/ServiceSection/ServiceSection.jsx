import React from "react";
import { motion } from "framer-motion";
import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";

// Animation function for smooth fade-in effect
const fadeIn = (direction, delay) => ({
    hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, delay } },
});

const ServiceSection = () => {
    const services = [
        {
            icon: <BsStack className="w-8 h-8 text-indigo-600" />,
            title: "Web Design",
            description: "One for all and all for one, Muskehounds are always ready.",
            link: "#learn-more",
        },
        {
            icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
            title: "Ad-Creatives",
            description: "Alphabet Village and the subline of her own road.",
            link: "#learn-more",
        },
        {
            icon: <FiSettings className="w-8 h-8 text-red-400" />,
            title: "Automation",
            description: "Little Blind Text should turn around and return.",
            link: "#learn-more",
        },
        {
            icon: <BiTime className="w-8 h-8 text-cyan-400" />,
            title: "Infographics",
            description: "Nothing the copy said could convince her.",
            link: "#learn-more",
        },
    ];

    return (
        <section id="services" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">

                {/* Header Section */}
                <motion.div
                    className="md:w-1/3 w-full"
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold md:w-4/5">
                        Future of Support with New Shapes
                    </h2>
                    <p className="text-gray-600 text-lg mb-4 md:w-4/5">
                        Discuss your goals, determine success metrics, identify needs.
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-3">
                        {["UX Design content strategy", "UX Design content strategy"].map((text, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
                                </div>
                                <span className="text-gray-600">{text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action Button */}
                    <motion.button
                        className="bg-indigo-600 mt-8 rounded-full px-8 py-2 text-white cursor-pointer hover:bg-indigo-700 transition-colors shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started
                    </motion.button>
                </motion.div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white max-w-72 cursor-pointer rounded-2xl px-6 py-4 hover:shadow-xl transition-shadow duration-300"
                            variants={fadeIn(index % 2 === 0 ? "left" : "right", 0.3 + index * 0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {/* Icon */}
                            <div className="mb-4">{service.icon}</div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-4">{service.description}</p>

                            {/* Learn More Button */}
                            <a className="block text-indigo-600 hover:text-indigo-800 transition-colors py-2 px-3" href={service.link}>
                                LEARN MORE
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
