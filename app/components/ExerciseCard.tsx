"use client";

import { useState } from "react";
import type { Exercise } from "../data/training";

export function ExerciseCard({
  exercise,
  index,
}: {
  exercise: Exercise;
  index: number;
}) {
  const [tab, setTab] = useState<"exercise" | "setup">("exercise");

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-800">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 text-sm font-bold text-zinc-300">
          {index}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-zinc-100 truncate">
            {exercise.name}
          </h3>
          <p className="text-xs text-zinc-500">
            {exercise.sets} sets &times; {exercise.reps} reps
          </p>
        </div>
      </div>

      <div className="flex border-b border-zinc-800">
        <button
          onClick={() => setTab("exercise")}
          className={`flex-1 px-4 py-2.5 text-sm font-medium transition-colors ${
            tab === "exercise"
              ? "text-white bg-zinc-800"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          Exercise
        </button>
        <button
          onClick={() => setTab("setup")}
          className={`flex-1 px-4 py-2.5 text-sm font-medium transition-colors ${
            tab === "setup"
              ? "text-white bg-zinc-800"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          Setup
        </button>
      </div>

      <div className="p-5">
        {tab === "exercise" ? (
          <div className="space-y-4">
            {exercise.video && (
              <video
                src={exercise.video}
                controls
                playsInline
                preload="metadata"
                className="w-full rounded-xl bg-black aspect-video"
              />
            )}
            <p className="text-sm leading-relaxed text-zinc-300">
              {exercise.description}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Force USA Functional Trainer Setup
            </div>
            <p className="text-sm leading-relaxed text-zinc-300">
              {exercise.setup}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
