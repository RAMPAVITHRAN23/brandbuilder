import React, { useState } from "react";
import { motion } from "framer-motion";

// Function to create fade-in effect from left or right
const fadeIn = (direction, delay) => ({
    hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, delay } },
});

const PricingSection = () => {
    const [productCount, setProductCount] = useState(1);

    // Pricing based on product count (ensuring reasonable minimum values)
    const starterPrice = Math.max(10, Math.round((4000 / 500) * productCount));
    const businessPrice = Math.max(15, Math.round((7500 / 500) * productCount));

    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">

                {/* Section Heading */}
                <motion.h2
                    className="text-3xl font-bold mb-10"
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    Pricing Plans
                </motion.h2>

                {/* Pricing Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Starter Plan */}
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-md"
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-lg text-gray-600">Starter Plan</h3>
                        <p className="text-2xl font-bold text-blue-600">${starterPrice}/mon</p>
                    </motion.div>

                    {/* Business Plan */}
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-md"
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-lg text-gray-600">Business Plan</h3>
                        <p className="text-2xl font-bold text-blue-600">${businessPrice}/mon</p>
                    </motion.div>
                </div>

                {/* Product Count Display */}
                <motion.div
                    className="text-gray-600 py-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                >
                    {productCount} Products
                </motion.div>

                {/* Product Slider */}
                <motion.div
                    className="flex items-center gap-2 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: false }}
                >
                    <span className="text-sm text-gray-600">1</span>
                    <input
                        type="range"
                        min="1"
                        max="50"
                        value={productCount}
                        onChange={(e) => setProductCount(parseInt(e.target.value))}
                        className="w-64 h-2 bg-gray-200 rounded-lg cursor-pointer"
                    />
                    <span className="text-sm text-gray-600">50</span>
                </motion.div>

                {/* Call to Action Button */}
                <motion.div className="mt-10">
                    <p className="text-lg text-gray-600">Ready to get started?</p>
                    <motion.button
                        className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingSection;
