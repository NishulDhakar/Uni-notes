"use client";

import React from "react";
import { BookOpen, Twitter, Linkedin, Github, ArrowRight, MoreVertical, Paperclip, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="py-8 px-4 sm:px-6 bg-white overflow-hidden">
            <div className="max-w-8xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative rounded-[2.5rem] border border-gray-800 overflow-hidden p-8 md:p-12 lg:p-16 "
                >
                    {/* Animated Background */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
                        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-[120px] animate-pulse delay-1000" />
                    </div>

                    {/* Dot Pattern */}
                    <div className="absolute inset-0 opacity-[0.1]"
                        style={{
                            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                            backgroundSize: '32px 32px'
                        }}
                    />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                        {/* Left Column */}
                        <div className="space-y-12">
                            {/* Logo */}
                            {/* <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-3 font-bold text-2xl"
                            >
                                <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-primary shadow-lg border border-white/10">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                UniNotes
                            </motion.div> */}

                            {/* CTA */}
                            <div className="space-y-8">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight"
                                >
                                    START YOUR NEW <br />
                                    PROJECT WITH <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">UNINOTES</span>
                                </motion.h2>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-col sm:flex-row gap-4"
                                >
                                    {/* <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:scale-105 active:scale-95">
                                        Get Started Now
                                    </button> */}
                                    {/* <a href="mailto:support@uninotes.com" className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 group">
                                        <Mail className="w-5 h-5" />
                                        <span>Contact Support</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a> */}
                                </motion.div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col justify-between gap-12">
                            {/* Navigation */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="grid grid-cols-2 gap-12 lg:pl-20"
                            >
                                <div>
                                    <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Platform</h4>
                                    <ul className="space-y-4 text-sm font-medium">
                                        <li><Link href="#" className="hover:text-gray-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 hover:opacity-100 transition-opacity" /> Browse Notes</Link></li>
                                        <li><Link href="#" className="hover:text-gray-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 hover:opacity-100 transition-opacity" /> Question Papers</Link></li>
                                        <li><Link href="#" className="hover:text-gray-500 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 hover:opacity-100 transition-opacity" /> Syllabus</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
                                    <ul className="space-y-4 text-sm font-medium ">
                                        <li><Link href="#" className="hover:text-gray-500 transition-colors">Privacy Policy</Link></li>
                                        <li><Link href="#" className="hover:text-gray-500 transition-colors">Terms of Service</Link></li>
                                        <li><Link href="#" className="hover:text-gray-500 transition-colors">Cookie Policy</Link></li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Mockup Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
                                whileHover={{ scale: 1.05, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className="relative mt-auto lg:pl-20 hidden md:block"
                            >
                                <div className="absolute -top-12 -left-8 text-white/20 rotate-12">
                                    <Paperclip className="w-12 h-12" />
                                </div>

                                {/* <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-4 max-w-sm ml-auto">
                                    <div className="bg-white/5 rounded-xl p-4 mb-3 flex items-center justify-between border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                                <BookOpen className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-white text-sm">Discovery Call</div>
                                                <div className="text-xs text-gray-400">10:30 | Remote</div>
                                            </div>
                                        </div>
                                        <MoreVertical className="w-4 h-4 text-gray-500" />
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                                <BookOpen className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-white text-sm">Project Review</div>
                                                <div className="text-xs text-gray-400">14:30 | Remote</div>
                                            </div>
                                        </div>
                                        <MoreVertical className="w-4 h-4 text-gray-500" />
                                    </div>
                                </div> */}
                            </motion.div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="relative z-10 md:mt-2 mt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} UniNotes LLC. All rights reserved.</p>
                        <div className="flex items-center gap-6">
                            <Link target="_blank" href="https://x.com/nishuldhakar" className="hover:text-gray-500 transition-colors p-2 hover:bg-white/5 rounded-full"><Twitter className="w-4 h-4" /></Link>
                            <Link target="_blank" href="https://www.linkedin.com/in/nishuldhakar/" className="hover:text-gray-500 transition-colors p-2 hover:bg-white/5 rounded-full"><Linkedin className="w-4 h-4" /></Link>
                            <Link target="_blank" href="https://github.com/nishuldhakar" className="hover:text-gray-500 transition-colors p-2 hover:bg-white/5 rounded-full"><Github className="w-4 h-4" /></Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
