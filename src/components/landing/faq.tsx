"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// ✨ Expanded & Better FAQs
const faqs = [
  {
    question: "Are the notes free to access?",
    answer:
      "Yes! All core notes, PYQs, and syllabus documents are completely free for every student.",
  },
  {
    question: "How does the project assistance work?",
    answer:
      "You select your project type, book a mentor session, and get guided step-by-step through concept, development, and documentation.",
  },
  {
    question: "Do you offer help for viva and presentations?",
    answer:
      "Yes! We provide PPT templates, demo scripts, and practice questions to boost your confidence.",
  },
  {
    question: "Is the content updated regularly?",
    answer:
      "Our database is refreshed every semester with the latest university curriculum and PYQs.",
  },
  {
    question: "Can I request notes for a specific subject?",
    answer:
      "Absolutely! You can submit a request, and our team prioritizes based on student demand.",
  },
  {
    question: "Do you offer video explanations?",
    answer:
      "Yes, we’re rolling out chapter-wise micro lectures and quick revision videos.",
  },
  {
    question: "Can I contribute my own notes?",
    answer:
      "Definitely! After signup, you can upload notes, and contributors with quality uploads get rewarded.",
  },
  {
    question: "Are these notes valid for all universities?",
    answer:
      "Most notes are universal, but we fine-tune versions for major universities and branches.",
  },
  {
    question: "Do you provide sample mini and major projects?",
    answer:
      "Yes — including source code, reports, UML diagrams, and presentation decks.",
  },
  {
    question: "Is there a premium version?",
    answer:
      "We’re launching UniNotes Plus soon with priority mentorship, exclusive notes & project reviews.",
  },
];

// ✨ Faq Component (with glow + animation)
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group rounded-2xl p-[2px] border border-gray-800 mb-4"
    >
      <div className="rounded-2xl bg-white px-6 py-5 shadow-sm transition-all duration-300 ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-left"
        >
          <span className="text-lg font-semibold text-gray-900 flex-1">
            {question}
          </span>
          <ChevronDown
            className={cn(
              "w-5 h-5 text-gray-400 transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <p className="text-gray-600 mt-4 pb-2 leading-relaxed">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// ✨ Main Component
export function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 px-6 bg-white/80"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Have Questions?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here’s everything students usually ask before getting started.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div>
          {faqs.map((faq, index) => (
            <FaqItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
