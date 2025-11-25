"use client";

import { NoteCard } from "@/components/note-card";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">
                    Welcome back! Here are your recent notes and study materials.
                </p>
            </div>

            {/* Recent Notes Grid */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Recent Notes</h2>
                    <button className="text-sm text-primary hover:underline">View all</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <NoteCard
                        title="Introduction to Machine Learning"
                        description="Basics of supervised and unsupervised learning, including regression and classification."
                        href="/btech/year3/sem5/ml"
                        tag="AIML"
                        color="blue"
                        date="2 hours ago"
                    />
                    <NoteCard
                        title="Data Structures & Algorithms"
                        description="Understanding trees, graphs, and dynamic programming concepts."
                        href="/btech/year2/sem3/dsa"
                        tag="CS"
                        color="purple"
                        date="Yesterday"
                    />
                    <NoteCard
                        title="Digital Electronics"
                        description="Boolean algebra, logic gates, and circuit design fundamentals."
                        href="/btech/year2/sem3/de"
                        tag="ECE"
                        color="orange"
                        date="2 days ago"
                    />
                </div>
            </section>

            {/* Quick Access / Categories */}
            <section>
                <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {["First Year", "Second Year", "Third Year", "Fourth Year"].map((year, i) => (
                        <motion.div
                            key={year}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="p-6 bg-secondary/50 hover:bg-secondary rounded-xl border border-border cursor-pointer text-center transition-colors"
                        >
                            <div className="text-2xl font-bold mb-1 text-primary">{i + 1}</div>
                            <div className="text-sm font-medium text-muted-foreground">{year}</div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
