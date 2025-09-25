// src/pages/ServicePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import ServiceImage from "./ServiceImage";

const Servicess = ({ heading1, heading2, content1, content3, content4, image }) => {


 
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
                <img
                    src='/images/service.jpg'
                    alt={heading1}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <h1 className="relative text-4xl md:text-5xl mx-auto text-center font-bold text-purple-400 z-10">
                    {heading1}
                </h1>
            </section>

            {/* Content Section */}

            <section className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl ">
                        {heading2}
                    </h2>
                    <p className=" leading-relaxed text-gray-700">{content1}</p>

                    <Link to="/contact" className="mt-4 px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-lg hover:bg-purple-700 transition">
                        Book Now!
                    </Link>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <img
                        src={image}
                        alt={heading2}
                        className="rounded-lg shadow-xl max-h-[450px] w-full object-cover"
                    />
                </div>
            </section>


            {/* Other Categories Section (Fixed Part) */}
            <ServiceImage />
        </div>
    );
};

export default Servicess;
