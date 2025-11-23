"use client";
import React from "react";

function slugify(s: string) {
	return s
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-");
}

export default function TOC({ mdx }: { mdx: string }) {
	const lines = mdx.split(/\r?\n/);
	const items: { level: number; text: string; id: string }[] = [];

	for (const line of lines) {
		const m = line.match(/^(#{1,6})\s+(.*)$/);
		if (m) {
			const level = m[1].length;
			const text = m[2].trim();
			items.push({ level, text, id: slugify(text) });
		}
	}

	if (items.length === 0) return <div className="text-sm text-gray-500">No headings</div>;

	return (
		<nav>
			<ul className="space-y-1">
				{items.map((it) => (
					<li key={it.id} className={`pl-${Math.min(6, it.level) * 2}`}>
						<a href={`#${it.id}`} className="text-sm text-gray-700 hover:underline">
							{it.text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
