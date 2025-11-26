"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Are the notes free to access?",
        answer: "Yes! The core notes, syllabus, and question papers are completely free for all students."
    },
    {
        question: "How does the project service work?",
        answer: "You choose a package (Minor or Major), and our expert mentors guide you through the design, coding, and documentation phases."
    },
    // {
    //     question: "Can I contribute my own notes?",
    //     answer: "Absolutely! We believe in community sharing. You can upload your notes through the dashboard after signing up."
    // },
    {
        question: "Is the content updated regularly?",
        answer: "Yes, we update our database every semester to ensure alignment with the latest university curriculum."
    }
];

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
            >
                <span className="text-lg font-semibold text-gray-900">{question}</span>
                <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform duration-300", isOpen ? "rotate-180" : "")} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-gray-500 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export function FAQ() {
    return (
        <section id="faq" className="py-24 px-6 bg-white">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-2">
                    {faqs.map((faq, idx) => (
                        <FaqItem key={idx} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
}
