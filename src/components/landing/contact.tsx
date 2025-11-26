"use client";

import React from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Side - Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-10"
                    >
                        <div className="space-y-4">
                            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
                                Let's start a <br />
                                <span className="text-primary">conversation.</span>
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                                Whether you have a question about our services, pricing, or just want to say hello, we're ready to answer all your questions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: Mail, label: "Email", value: "support@uninotes.com" },
                                { icon: Phone, label: "Phone", value: "+91 7697468483" },
                                // { icon: MapPin, label: "Office", value: "University Campus, Tech Hub" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 shrink-0">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-gray-500 mb-0.5">{item.label}</div>
                                        <div className="text-lg font-semibold text-gray-900">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side - Minimal Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gray-50 rounded-3xl p-8 sm:p-10"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-900">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-900">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-900">Subject</label>
                                <input
                                    type="text"
                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-900">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group">
                                <span>Send Message</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
