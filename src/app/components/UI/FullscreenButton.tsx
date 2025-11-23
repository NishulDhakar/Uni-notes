"use client";
import React from "react";

export default function FullscreenButton({ isFull, onToggle }: { isFull: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="px-3 py-1 border rounded text-sm bg-gray-100 hover:bg-gray-200"
      aria-pressed={isFull}
    >
      {isFull ? "Exit Fullscreen" : "Fullscreen"}
    </button>
  );
}
