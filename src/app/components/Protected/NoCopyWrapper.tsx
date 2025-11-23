"use client";
import React from "react";
import useContentProtection from "@/hooks/useContentProtection";

export default function NoCopyWrapper({ children }: { children: React.ReactNode }) {
	useContentProtection();

	return (
		<div
			className="nocopy"
			onCopy={(e) => e.preventDefault()}
			onContextMenu={(e) => e.preventDefault()}
			onMouseDown={(e) => e.preventDefault()}
		>
			{children}
		</div>
	);
}
