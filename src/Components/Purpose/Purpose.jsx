import React from "react";
import { motion } from "framer-motion";

const Purpose = () => {
    const features = [
        {
            icon: "🟣", // Replace with an actual icon/image if needed
            title: "Built for impact",
            description:
                "We identify and nurture a truly diverse team of designers, developers, and marketers.",
        },
        {
            icon: "🔴", // Replace with an actual icon/image if needed
            title: "In sync with you",
            description:
                "We work the way you do by adapting to your workflows and rhythm to blend in seamlessly.",
        },
    ];

    return (
        <section
            id="about"
            className="w-full bg-gray-100 py-16 px-4 sm:px-6 md:px-8"
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                    {/* Heading Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }} // Triggers every time it enters view
                    >
                        <p className="text-sm text-purple-600 font-medium mb-2">
                            Achieve more
                        </p>
                        <h2 className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900">
                            Purpose of a convoy is to keep your team
                        </h2>
                    </motion.div>

                    {/* Bullet Points */}
                    <motion.div
                        className="col-span-2 grid md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 justify-between"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }} // Re-triggers when scrolling back
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
                            },
                        }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="flex space-x-4"
                            >
                                <div className="w-12 h-12 flex items-center justify-start">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Purpose;
