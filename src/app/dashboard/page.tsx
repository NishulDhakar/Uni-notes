"use client";
import { NoteCard } from "@/components/note-card";
import { motion } from "framer-motion";
import { Clock, BookOpen, Star, TrendingUp } from "lucide-react";

const StatCard = ({ icon: Icon, label, value, trend }: { icon: any, label: string, value: string, trend?: string }) => (
    <motion.div
        whileHover={{ y: -2 }}
        className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
    >
        <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-primary/5 rounded-lg text-primary">
                <Icon className="w-5 h-5" />
            </div>
            {trend && (
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> {trend}
                </span>
            )}
        </div>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="text-sm text-gray-500 font-medium">{label}</div>
    </motion.div>
);

export default function DashboardPage() {
    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Dashboard</h1>
                <p className="text-gray-500 font-medium">
                    Welcome back! Track your progress and jump back into learning.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon={BookOpen} label="Notes Accessed" value="24" trend="+12%" />
                <StatCard icon={Clock} label="Study Hours" value="18h" trend="+2.5h" />
                <StatCard icon={Star} label="Favorites" value="7" />
                <StatCard icon={TrendingUp} label="Current Streak" value="5 Days" trend="Keep it up!" />
            </div>

            {/* Recent Notes Grid */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        Recent Activity
                    </h2>
                    <button className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                        View all history
                    </button>
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

            {/* Quick Access */}
            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Access</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {["First Year", "Second Year", "Third Year", "Fourth Year"].map((year, i) => (
                        <motion.button
                            key={year}
                            whileHover={{ scale: 1.02, backgroundColor: "var(--primary)", color: "white" }}
                            whileTap={{ scale: 0.98 }}
                            className="group p-6 bg-white hover:bg-primary rounded-2xl border border-gray-100 hover:border-primary shadow-sm hover:shadow-lg transition-all duration-300 text-left"
                        >
                            <div className="text-3xl font-black text-gray-200 group-hover:text-white/20 mb-2 transition-colors">
                                0{i + 1}
                            </div>
                            <div className="font-bold text-gray-900 group-hover:text-white transition-colors">
                                {year}
                            </div>
                        </motion.button>
                    ))}
                </div>
            </section>
        </div>
    );
}
