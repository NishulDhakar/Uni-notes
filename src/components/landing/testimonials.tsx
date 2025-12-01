"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Aarav Sharma",
        role: "CSE • 3rd Year",
        content:
            "UniNotes literally became my survival kit. Clean notes, solved PYQs, and zero confusion before exams.",
        avatar: "AS",
    },
    {
        name: "Meera Nair",
        role: "ECE • Final Year",
        content:
            "Their project guidance changed everything. I went from ‘no idea’ to presenting a working demo in my viva!",
        avatar: "MN",
    },
    {
        name: "Rohan Gupta",
        role: "Mechanical Engineering",
        content:
            "Finally, something built for students. Simple, fast, and genuinely helpful. Saved me so much time.",
        avatar: "RG",
    },
    {
        name: "Ishika Verma",
        role: "BCA Student",
        content:
            "The way concepts are explained is insane. It feels like a topper is sitting next to you breaking everything down.",
        avatar: "IV",
    },
    {
        name: "Devansh Singh",
        role: "IT • 2nd Year",
        content:
            "Completed my mini-project with their help in just days. Even my faculty praised the clarity.",
        avatar: "DS",
    },
    {
        name: "Sana Sheikh",
        role: "Civil Engineering",
        content:
            "UniNotes made PYQ revision so easy. No surprises in exams anymore — just confidence.",
        avatar: "SS",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 px-6 bg-white/80 ">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                        Loved by Students
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Real experiences. Real results. Here’s how UniNotes is helping thousands succeed.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            // whileHover removed to keep card static
                            transition={{ type: "spring", stiffness: 120 }}
                            className="relative p-[2px] border border-gray-800 rounded-3xl shadow-xl"
                        >
                            <div className="rounded-3xl bg-white p-8 h-full">
                                {/* Stars */}
                                <div className="flex items-center gap-1 mb-4 text-yellow-400 animate-pulse-slow">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-gray-700 mb-6 leading-relaxed italic">
                                    “{t.content}”
                                </p>

                                {/* Footer */}
                                <div className="flex items-center gap-4">
                                    {/* <div className="w-12 h-12 rounded-full overflow-hidden shadow-md">
                                        <img src={`/avatars/${t.avatar.toLowerCase()}.png`} alt={t.name} className="w-full h-full object-cover" />
                                    </div> */}
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{t.name}</h4>
                                        <p className="text-xs text-gray-500">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
