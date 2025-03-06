import React from 'react';
import slack from '../../assets/slack.png';
import amazon from '../../assets/amazon.png';
import woocommerce from '../../assets/woocommerce.png';
import stats from '../../assets/stats.png';
import meundies from '../../assets/meundies.png';
import sitepoint from '../../assets/sitepoint.png';

// Array of Logos
const logos = [slack, amazon, woocommerce, stats, meundies, sitepoint];

const CompanyLogo = () => {
    return (
        <div className="w-full container mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center overflow-hidden" >

            {/* Heading */}
            <div className="w-[300px] shrink-0 text-gray-600 border-l-4 px-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold">
                Proud Partners at <br /> HubSpot and Segment
            </div>

            {/* Logos Marquee Section */}
            <div className="relative w-full mt-6 sm:mt-0 overflow-hidden">
                <div className="flex w-max space-x-12 animate-marquee">
                    {logos.concat(logos).map((logo, index) => ( // Duplicate logos for seamless effect
                        <div key={index} className="flex-shrink-0">
                            <img
                                src={logo}
                                alt="Company logo"
                                className="h-10 w-28 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default CompanyLogo;
