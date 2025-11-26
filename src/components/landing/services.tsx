"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Minor Project",
        price: "₹999",
        features: [
            "Topic Selection",
            "Synopsis Preparation",
            "Basic Implementation",
            "Code Explanation",
            "Report Assistance",
        ],
        recommended: false,
    },
    {
        title: "Major Project",
        price: "₹1,999",
        features: [
            "End-to-End Development",
            "Research Paper Support",
            "Advanced Tech Stack",
            "Live Deployment",
            "Viva Preparation",
        ],
        recommended: true,
    },
];

const ServiceCard = ({ title, price, features, recommended }: any) => (
    <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={cn(
            "relative p-8 rounded-2xl border bg-white",
            "transition-all duration-200",
            recommended
                ? "border-gray-900 shadow-sm"
                : "border-gray-200 shadow-sm hover:border-gray-300"
        )}
    >
        {recommended && (
            <div className="absolute top-4 right-4 text-xs font-semibold bg-gray-900 text-white px-3 py-1 rounded-full">
                Recommended
            </div>
        )}

        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        <div className="text-4xl font-bold mb-6">
            {price}
            <span className="text-sm font-normal text-gray-500 ml-1">/project</span>
        </div>

        <ul className="space-y-3 mb-8">
            {features.map((feature: string, i: number) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-gray-900" />
                    <span className="text-sm">{feature}</span>
                </li>
            ))}
        </ul>

        <button
            className={cn(
                "w-full py-3 rounded-lg text-sm font-semibold border transition-all",
                recommended
                    ? "bg-gray-900 text-white border-gray-900 hover:bg-gray-800"
                    : "bg-white text-gray-900 border-gray-300 hover:border-gray-400"
            )}
        >
            Get Started
        </button>
    </motion.div>
);

export function Services() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Project Assistance
                    </h2>

                    <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
                        A clean, minimal and professional service section designed for clarity and trust.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, i) => (
                        <ServiceCard key={i} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
