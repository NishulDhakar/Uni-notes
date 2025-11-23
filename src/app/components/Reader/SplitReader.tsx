"use client";
import { useState } from "react";
import MDXRenderer from "./MDXRenderer";
import TOC from "./TOC";
import NoCopyWrapper from "@/app/components/Protected/NoCopyWrapper";
import FullscreenButton from "../UI/FullscreenButton";

export default function SplitReader({ mdx }: { mdx: string }) {
  const [fontSize, setFontSize] = useState(16);
  const [isFull, setIsFull] = useState(false);

  return (
    <div className={`flex h-full ${isFull ? "fixed inset-0 z-50 bg-white" : ""}`}>
      <aside className="w-72 border-r p-4 overflow-auto">
        <TOC mdx={mdx} />
      </aside>

      <main className="flex-1 p-6 overflow-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2 items-center">
            <label>Font</label>
            <input type="range" min={14} max={22} value={fontSize} onChange={e=>setFontSize(+e.target.value)} />
          </div>
          <FullscreenButton onToggle={()=>setIsFull(v=>!v)} isFull={isFull} />
        </div>

        <div style={{ fontSize: `${fontSize}px` }}>
          <NoCopyWrapper>
            <MDXRenderer mdx={mdx} />
          </NoCopyWrapper>
        </div>
      </main>
    </div>
  );
}
