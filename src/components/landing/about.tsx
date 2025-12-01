"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function About() {
    return (
        <section id="about" className="py-24 px-6 bg-white/80 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold">
                        About Us
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
                        Free Universal Access to <span className="text-primary">Knowledge</span>
                    </h2>
                    <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                        <p>
                            UniNotes is a digital library offering free universal access to E-books, Notes, Lab Manual, Assignments & Previous Year Question Papers. There is no mandatory fee for the students, they can freely use most of our services without paying even a single rupee.
                        </p>
                        <p>
                            All the study material is just one click away. With just a single click, you can either view or download study material from our ultra-fast servers. You don't have to register for most of the services we provide; mostly everything is available freely without any condition or restriction.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        <div className="space-y-2">
                            <h4 className="text-3xl font-bold text-gray-900">10k+</h4>
                            <p className="text-gray-500 text-sm">Active Students</p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-3xl font-bold text-gray-900">500+</h4>
                            <p className="text-gray-500 text-sm">Study Resources</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >

                    <DotLottieReact
                        src="https://lottie.host/03f3455e-6058-4e40-ae27-c67a4877a891/g3qhusH5w3.lottie"
                        loop
                        autoplay
                    />
                </motion.div>
            </div>
        </section>
    );
}
