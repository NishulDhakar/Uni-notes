"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Aarav Sharma",
        role: "Computer Science Student",
        content: "UniNotes saved my semester! The notes are concise and the previous year papers are a goldmine.",
        avatar: "AS"
    },
    {
        name: "Priya Patel",
        role: "Electronics Engineering",
        content: "The project guidance service is incredible. They helped me build a working prototype in weeks.",
        avatar: "PP"
    },
    {
        name: "Rohan Gupta",
        role: "Mechanical Engineering",
        content: "Finally, a platform that understands what engineering students actually need. Highly recommended!",
        avatar: "RG"
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Student Stories</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what your peers are saying.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl bg-white shadow-lg shadow-gray-200/40 border border-gray-100"
                        >
                            <div className="flex items-center gap-1 mb-4 text-yellow-400">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed">"{t.content}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-sm">
                                    {t.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                                    <p className="text-xs text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
