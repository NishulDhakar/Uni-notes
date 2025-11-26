"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-100">
            <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={32}
                        height={32}
                        className="rounded-lg"
                    />
                    UniNotes
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <a href="#about" className="hover:text-primary transition-colors">About</a>
                    <Link
                        href="/dashboard"
                        className="px-5 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl font-semibold"
                    >
                        Dashboard
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-gray-100 bg-white overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6 text-lg font-medium text-gray-600">
                            <a
                                href="#about"
                                className="hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </a>
                            <Link
                                href="/dashboard"
                                className="px-5 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all shadow-lg text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Dashboard
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
