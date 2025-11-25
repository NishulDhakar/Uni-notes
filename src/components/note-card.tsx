"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Book, Clock, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface NoteCardProps {
    title: string;
    description: string;
    href: string;
    date?: string;
    tag?: string;
    color?: "blue" | "green" | "purple" | "orange";
    scroll?: boolean;
}

export function NoteCard({
    title,
    description,
    href,
    date = "Just now",
    tag = "Note",
    color = "blue",
    scroll = true
}: NoteCardProps) {
    const colorStyles = {
        blue: "text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 bg-blue-500/10",
        green: "text-green-600 dark:text-green-400 border-green-200 dark:border-green-800 bg-green-500/10",
        purple: "text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800 bg-purple-500/10",
        orange: "text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800 bg-orange-500/10",
    };

    return (
        <motion.div
            whileHover={{ y: -4 }}
            className="group relative glass-card rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:border-primary/50 overflow-hidden"
        >
            {/* Gradient Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div className={cn("px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-md", colorStyles[color])}>
                        {tag}
                    </div>
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                    </button>
                </div>

                <Link href={href} scroll={scroll} className="block">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {description}
                    </p>
                </Link>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        {date}
                    </div>
                    <Link
                        href={href}
                        scroll={scroll}
                        className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0"
                    >
                        Read Note <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
