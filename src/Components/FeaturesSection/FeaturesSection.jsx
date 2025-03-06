import React from "react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
    const features = [
        {
            icon: "🔍",
            title: "Find out what you need",
            description: "We present you a proposal and discuss nitty-gritty like",
        },
        {
            icon: "⚙️",
            title: "Work out the details",
            description: "Communication protocols apart from engagement models",
        },
        {
            icon: "🚀",
            title: "We get to work fast",
            description: "Protocols apart from engagement models, pricing billing",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-7">
            {/* Heading */}
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <h2 className="text-3xl font-bold mb-4">
                    How can we help your business?
                </h2>
                <p className="text-gray-600">
                    When you resell Besnik, you build trust and increase success.
                </p>
            </motion.div>

            {/* Box Features */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { staggerChildren: 0.3, ease: "easeOut" },
                    },
                }}
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col text-center items-center p-6"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        <div
                            className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
                            style={{
                                backgroundColor:
                                    index === 0
                                        ? "#F1EFFD"
                                        : index === 1
                                        ? "#FEE7E7"
                                        : "#FFF3E4",
                            }}
                        >
                            <div className="text-3xl">{feature.icon}</div>
                        </div>

                        <h3 className="text-2xl font-medium mb-3">
                            {feature.title}
                        </h3>
                        <p className="text-medium text-gray-600 text-center">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Button */}
            <motion.div
                className="text-center p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <button
                    className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium 
                    hover:bg-blue-700 transition-all relative"
                >
                    Become a partner
                    <div className="absolute -z-10 w-full h-full rounded-full bg-blue-600/30 blur-xl top-0 left-0 opacity-15"></div>
                </button>
            </motion.div>
        </section>
    );
};

export default FeaturesSection;
