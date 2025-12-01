"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronRight,
    Sparkles,
    ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import { FloatingLogo } from "@/components/floating-logo";
import { useSearchParams, useRouter } from "next/navigation";
import { label } from "framer-motion/client";

const universities = [
    { label: "RGPV", slug: "rgpv" },
    { label: "AKTU", slug: "aktu" },
];

const branches = [
    { label: "CSE", slug: "cse" },
    { label: "AIML", slug: "aiml" },
    { label: "IT", slug: "it" },
    { label: "Electronics", slug: "electronics" },
    { label: "Mechanical", slug: "mechanical" },
    { label: "Civil", slug: "civil" },
    { label: "Electrical", slug: "electrical" },
    { label: "Chemical", slug: "chemical" },
];

const semesters = [
    { label: "Semester 1", slug: "sem1" },
    { label: "Semester 2", slug: "sem2" },
    { label: "Semester 3", slug: "sem3" },
    { label: "Semester 4", slug: "sem4" },
    { label: "Semester 5", slug: "sem5" },
    { label: "Semester 6", slug: "sem6" },
    { label: "Semester 7", slug: "sem7" },
    { label: "Semester 8", slug: "sem8" },
];

export function Hero() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [step, setStep] = useState<"university" | "branch" | "semester">("university");
    const [selectedUniversity, setSelectedUniversity] = useState<string | null>(null);
    const [selectedBranch, setSelectedBranch] = useState<string | null>(null);
    const [showAllBranches, setShowAllBranches] = useState(false);

    // Sync state from URL on mount
    useEffect(() => {
        const university = searchParams.get("university");
        const branch = searchParams.get("branch");

        if (university) {
            setSelectedUniversity(university);
            if (branch) {
                setSelectedBranch(branch);
                setStep("semester");
            } else {
                setStep("branch");
            }
        } else {
            setStep("university");
        }
    }, [searchParams]);

    const updateUrl = (university: string | null, branch: string | null) => {
        const params = new URLSearchParams();
        if (university) params.set("university", university);
        if (branch) params.set("branch", branch);

        const newUrl = params.toString() ? `/?${params.toString()}` : "/";
        router.push(newUrl, { scroll: false });
    };

    const handleBranchSelect = (slug: string) => {
        setSelectedBranch(slug);
        setStep("semester");
        updateUrl(selectedUniversity, slug);
    };

    const handleUniversitySelect = (slug: string) => {
        setSelectedUniversity(slug);
        setStep("branch");
        updateUrl(slug, null);
    };

    const resetSelection = () => {
        setStep("university");
        setSelectedUniversity(null);
        setSelectedBranch(null);
        updateUrl(null, null);
    };

    const visibleBranches = showAllBranches ? branches : branches.slice(0, 6);

    return (
        <section className="flex-1  flex flex-col items-center justify-center px-4 py-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 pointer-events-none" />

            <FloatingLogo />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto space-y-8 relative z-10"
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-primary shadow-sm mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Now with AI-powered summaries</span>
                </div>

                <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
                    Notes for <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-indigo-600">
                        Btech students
                    </span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Access lecture notes, previous year papers, and syllabus copies in one organized place.
                    Built for students, by students.
                </p>
            </motion.div>

            {/* Selection Interface */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-16 w-full max-w-3xl relative z-10"
            >
                <div className=" border border-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.05)] bg-white/80 backdrop-blur-xl  rounded-3xl p-1 overflow-hidden ring-1 ring-gray-900/5">
                    {/* Progress Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white/50">
                        <div className="flex items-center gap-2 text-sm">
                            <span className={cn("font-semibold transition-colors", step === "university" ? "text-primary" : "text-gray-400")}>University</span>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className={cn("font-semibold transition-colors", step === "branch" ? "text-primary" : "text-gray-400")}>Branch</span>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                            <span className={cn("font-semibold transition-colors", step === "semester" ? "text-primary" : "text-gray-400")}>Semester</span>
                        </div>
                        {step !== "university" && (
                            <button
                                onClick={resetSelection}
                                className="text-xs font-medium text-gray-400 hover:text-gray-900 transition-colors"
                            >
                                Reset
                            </button>
                        )}
                    </div>

                    {/* Content Area */}
                    <div className="p-6 min-h-[300px] rounded-3xl border border-gray-800   flex flex-col justify-center bg-white/10">
                        <AnimatePresence mode="wait">
                            {step === "university" && (
                                <motion.div
                                    key="university"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-4"
                                >
                                    <div className="grid grid-cols-2 gap-4">
                                        {universities.map((uni) => (
                                            <button
                                                key={uni.slug}
                                                onClick={() => handleUniversitySelect(uni.slug)}
                                                className="group flex border border-gray-800 flex-col items-center justify-center p-24 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                                            >
                                                <span className="text-3xl font-black text-gray-400 group-hover:text-gray-500 mb-2 transition-colors">{uni.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                            {step === "branch" && (
                                <motion.div
                                    key="branch"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-4"
                                >
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                        {visibleBranches.map((branch) => (
                                            <button
                                                key={branch.slug}
                                                onClick={() => handleBranchSelect(branch.slug)}
                                                className="group border border-gray-800 flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                                            >
                                                <span className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{branch.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                    {branches.length > 6 && (
                                        <div className="flex justify-center pt-2">
                                            <button
                                                onClick={() => setShowAllBranches(!showAllBranches)}
                                                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                                            >
                                                {showAllBranches ? "Show Less" : "See More Branches"}
                                                <ChevronDown className={cn("w-4 h-4 transition-transform", showAllBranches ? "rotate-180" : "")} />
                                            </button>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                            {step === "semester" && (
                                <motion.div
                                    key="semester"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                                >
                                    {semesters.map((sem) => (
                                        <Link
                                            key={sem.slug}
                                            href={`/dashboard/btech/${selectedBranch}/${sem.slug}`}
                                            className="group border border-gray-800 flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                                        >
                                            <span className="text-3xl  font-black text-gray-200 group-hover:text-gray-500 mb-2 transition-colors">{sem.label.split(" ")[1]}</span>
                                            <span className="font-bold text-gray-900 group-hover:text-gray-800 transition-colors">Semester</span>
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
