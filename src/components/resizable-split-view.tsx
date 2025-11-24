"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GripVertical } from "lucide-react";
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

    const startResizing = React.useCallback(() => {
        setIsResizing(true);
    }, []);

    const stopResizing = React.useCallback(() => {
        setIsResizing(false);
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
            <div className="flex-1 h-full overflow-y-auto transition-all duration-300">
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
                        className="absolute inset-0 bg-background/20 backdrop-blur-[1px] z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sliding Pane */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={sidebarRef}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        style={{ width: `${width}px` }}
                        className={cn(
                            "fixed inset-y-0 right-0 z-50 h-full bg-background shadow-2xl border-l border-border flex flex-col",
                            "lg:relative lg:h-full lg:shadow-none" // On large screens, it pushes content or overlays depending on preference. 
                            // For "Notion style", it usually overlays or pushes. Let's make it fixed overlay on right for now to match the "slide from right" request exactly.
                        )}
                    >
                        {/* Resize Handle */}
                        <div
                            onMouseDown={startResizing}
                            className="absolute left-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-primary/50 transition-colors z-50 flex items-center justify-center group"
                        >
                            <div className="h-8 w-1 bg-muted-foreground/20 rounded-full group-hover:bg-primary" />
                        </div>

                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <GripVertical className="w-4 h-4 opacity-50" />
                                <span className="text-xs font-medium uppercase tracking-wider">Note Details</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={onClose}
                                    className="p-1 hover:bg-muted rounded-md transition-colors text-muted-foreground hover:text-foreground"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
                            {sideContent}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
