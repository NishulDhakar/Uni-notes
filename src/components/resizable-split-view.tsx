"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GripVertical, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResizableSplitViewProps {
    children: React.ReactNode;
    sideContent: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    initialWidth?: number;
    minWidth?: number;
    maxWidth?: number;
}

export function ResizableSplitView({
    children,
    sideContent,
    isOpen,
    onClose,
    initialWidth = 600,
    minWidth = 400,
    maxWidth = 1200,
}: ResizableSplitViewProps) {
    const [width, setWidth] = React.useState(initialWidth);
    const [isResizing, setIsResizing] = React.useState(false);
    const sidebarRef = React.useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = React.useState(false);

    // Check for mobile on mount and resize
    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024); // lg breakpoint
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const startResizing = React.useCallback(() => {
        if (isMobile) return;
        setIsResizing(true);
        document.body.style.cursor = "col-resize";
        document.body.style.userSelect = "none";
    }, [isMobile]);

    const stopResizing = React.useCallback(() => {
        setIsResizing(false);
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
    }, []);

    const resize = React.useCallback(
        (mouseMoveEvent: MouseEvent) => {
            if (isResizing) {
                const newWidth = window.innerWidth - mouseMoveEvent.clientX;
                if (newWidth >= minWidth && newWidth <= maxWidth) {
                    setWidth(newWidth);
                }
            }
        },
        [isResizing, minWidth, maxWidth]
    );

    React.useEffect(() => {
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResizing);
        return () => {
            window.removeEventListener("mousemove", resize);
            window.removeEventListener("mouseup", stopResizing);
        };
    }, [resize, stopResizing]);

    return (
        <div className="relative flex flex-1 w-full h-full overflow-hidden">
            {/* Main Content Area */}
            <div className="flex-1 h-full overflow-y-auto transition-all duration-300 bg-gray-50/50">
                {children}
            </div>

            {/* Overlay for mobile/focus when open */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-gray-900/20 backdrop-blur-[2px] z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sliding Pane */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={sidebarRef}
                        initial={{ x: "100%", boxShadow: "none" }}
                        animate={{ x: 0, boxShadow: "-10px 0 40px -10px rgba(0,0,0,0.1)" }}
                        exit={{ x: "100%", boxShadow: "none" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        style={{ width: isMobile ? "100%" : `${width}px` }}
                        className="fixed inset-y-0 right-0 z-50 h-full bg-white border-l border-gray-200 flex flex-col lg:relative lg:h-full"
                    >
                        {/* Resize Handle (Desktop Only) */}
                        {!isMobile && (
                            <div
                                onMouseDown={startResizing}
                                className="absolute left-0 top-0 bottom-0 w-4 -ml-2 cursor-col-resize z-50 flex items-center justify-center group outline-none"
                            >
                                <div className={cn(
                                    "h-16 w-1.5 rounded-full transition-all duration-200",
                                    isResizing ? "bg-primary h-full opacity-50" : "bg-gray-300 group-hover:bg-primary group-hover:h-24"
                                )} />
                            </div>
                        )}

                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white sticky top-0 z-10">
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={onClose}
                                    className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900"
                                    title="Close panel"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-gray-900">Note Details</span>
                                    <span className="text-xs text-gray-500">Viewing content</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-600">
                                    Read Only
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 lg:p-8 bg-white">
                            {sideContent}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
