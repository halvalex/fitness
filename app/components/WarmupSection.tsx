"use client";

import { useState } from "react";
import { warmup } from "../data/training";

export function WarmupSection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">🔥</span>
          <div>
            <h3 className="font-semibold text-zinc-100">Warm-Up</h3>
            <p className="text-xs text-zinc-500">
              10 exercises — do these first
            </p>
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-zinc-500 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-zinc-800 pt-4">
          <ol className="space-y-2">
            {warmup.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-800 text-xs font-bold text-zinc-400">
                  {i + 1}
                </span>
                <span className="text-zinc-300">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
