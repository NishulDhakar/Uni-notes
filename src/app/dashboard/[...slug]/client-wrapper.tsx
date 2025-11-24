"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ResizableSplitView } from "@/components/resizable-split-view";

interface ClientSplitViewWrapperProps {
    children: React.ReactNode;
    sideContent: React.ReactNode;
    isOpen: boolean;
    basePath: string;
}

export function ClientSplitViewWrapper({
    children,
    sideContent,
    isOpen,
    basePath,
}: ClientSplitViewWrapperProps) {
    const router = useRouter();

    const handleClose = () => {
        router.push(basePath);
    };

    return (
        <ResizableSplitView
            isOpen={isOpen}
            onClose={handleClose}
            sideContent={sideContent}
        >
            {children}
        </ResizableSplitView>
    );
}
