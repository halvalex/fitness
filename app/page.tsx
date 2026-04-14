import Link from "next/link";
import { days, trainingRules } from "./data/training";

export default function Home() {
  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-lg px-4 py-10">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Training Week</h1>
          <p className="mt-2 text-sm text-zinc-500">
            Cable-only &middot; Force USA Functional Trainer
          </p>
        </header>

        <div className="space-y-3">
          {days.map((day) => (
            <Link
              key={day.slug}
              href={`/${day.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-5 py-4 transition-all hover:border-zinc-700 hover:bg-zinc-900 active:scale-[0.98]"
            >
              <span
                className="flex items-center justify-center w-12 h-12 rounded-xl text-lg font-bold text-white shrink-0"
                style={{ backgroundColor: day.color }}
              >
                {day.label.slice(0, 3).toUpperCase()}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-zinc-100">{day.label}</p>
                <p className="text-sm text-zinc-500 truncate">{day.focus}</p>
              </div>
              <div className="text-zinc-600 text-sm">
                {day.exercises.length} exercises
              </div>
              <svg
                className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-colors shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ))}
        </div>

        <div className="mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-zinc-300 flex items-center gap-2">
            <span>⚙️</span> Training Rules
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <RuleCard label="Sets" value={trainingRules.sets} />
            <RuleCard label="Reps" value={trainingRules.reps} />
            <RuleCard label="Progression" value={trainingRules.progression} />
            <RuleCard label="Tempo" value={trainingRules.tempo} />
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
          <h2 className="text-lg font-semibold text-zinc-300 flex items-center gap-2 mb-3">
            <span>🚴</span> Zwift
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Keep it <strong className="text-zinc-200">Zone 2</strong>{" "}
            (easy–moderate). You should still be able to talk. Supports fat loss
            without killing recovery.
          </p>
        </div>
      </div>
    </div>
  );
}

function RuleCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
        {label}
      </p>
      <p className="text-sm text-zinc-300 leading-relaxed">{value}</p>
    </div>
  );
}
