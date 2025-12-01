"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IndianRupee,
  User,
  Smile,
} from "lucide-react";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <motion.div
    className="relative p-[2px] rounded-3xl border border-gray-800 shadow-xl transition-all duration-300"
  >
    <div className="rounded-3xl bg-white/90 backdrop-blur-xl p-8 h-full">
      {/* Icon */}
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1 }}
        className="w-14 h-14 rounded-xl border border-gray-200 flex items-center justify-center text-primary mb-5 shadow-inner"
      >
        <Icon className="w-7 h-7 text-purple-900" />
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-extrabold mb-3 text-gray-900 tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

export function WhyUs() {
  return (
    <section className="relative py-28 px-6 bg-white/80 overflow-hidden">

      {/* Floating Background Shapes */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute top-10 left-16 w-40 h-40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute bottom-10 right-20 w-52 h-52 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5">
            Why Choose UniNotes?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            More than notes. A complete, student-first ecosystem for learning, revision, and projects.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <FeatureCard
            icon={IndianRupee}
            title="Completely Free"
            description="Most features cost nothing. Access notes, PYQs, and resources without paying a single rupee."
          />

          <FeatureCard
            icon={User}
            title="No Registration"
            description="You don't need to create an account to use UniNotes. Just open → learn → download → done."
          />

          <FeatureCard
            icon={Smile}
            title="Human Support Team"
            description="Need help? We're always here. Friendly guidance whenever you get stuck—just message us."
          />

        </div>
      </div>
    </section>
  );
}
