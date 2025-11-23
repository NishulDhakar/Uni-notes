"use client";
import React from "react";

function escapeHtml(s: string) {
	return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function slugify(s: string) {
	return s
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-");
}

export default function MDXRenderer({ mdx }: { mdx: string }) {
	// Very small markdown/MDX -> HTML renderer for headings, paragraphs and code fences.
	const lines = mdx.split(/\r?\n/);
	let inCode = false;
	let codeLang = "";
	const out: string[] = [];

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];

		// fenced code block
		const codeFence = line.match(/^```\s*(\w+)?/);
		if (codeFence) {
			if (!inCode) {
				inCode = true;
				codeLang = codeFence[1] || "";
				out.push(`<pre><code data-lang="${escapeHtml(codeLang)}">`);
			} else {
				inCode = false;
				out.push(`</code></pre>`);
			}
			continue;
		}

		if (inCode) {
			out.push(escapeHtml(line) + "\n");
			continue;
		}

		// headings
		const h = line.match(/^(#{1,6})\s+(.*)$/);
		if (h) {
			const level = h[1].length;
			const text = h[2].trim();
			const id = slugify(text);
			out.push(`<h${level} id="${id}">${escapeHtml(text)}</h${level}>`);
			continue;
		}

		// horizontal rule
		if (/^---+$/.test(line)) {
			out.push("<hr />");
			continue;
		}

		// simple list
		const ul = line.match(/^\s*[-*+]\s+(.*)$/);
		if (ul) {
			// if previous not a ul, open
			const prev = out[out.length - 1] || "";
			if (!prev.endsWith("</ul>")) {
				out.push("<ul>");
			}
			out.push(`<li>${escapeHtml(ul[1])}</li>`);
			// lookahead: if next is not list item, close ul
			const next = lines[i + 1] || "";
			if (!/^\s*[-*+]\s+/.test(next)) out.push("</ul>");
			continue;
		}

		// paragraph / inline formatting
		if (line.trim() === "") {
			out.push("");
			continue;
		}

		let text = escapeHtml(line);
		// links [text](url)
		text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, t, u) => `<a href="${u}">${t}</a>`);
		// bold **text**
		text = text.replace(/\*\*([^*]+)\*\*/g, (_m, t) => `<strong>${t}</strong>`);
		// italic *text*
		text = text.replace(/\*([^*]+)\*/g, (_m, t) => `<em>${t}</em>`);
		// inline code `code`
		text = text.replace(/`([^`]+)`/g, (_m, t) => `<code>${escapeHtml(t)}</code>`);

		out.push(`<p>${text}</p>`);
	}

	const html = out.join("\n");

	return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
