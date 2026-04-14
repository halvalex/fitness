import { notFound } from "next/navigation";
import Link from "next/link";
import { days, getDayBySlug } from "../data/training";
import { ExerciseCard } from "../components/ExerciseCard";
import { WarmupSection } from "../components/WarmupSection";

export function generateStaticParams() {
  return days.map((d) => ({ day: d.slug }));
}

export default async function DayPage(props: PageProps<"/[day]">) {
  const { day: slug } = await props.params;
  const day = getDayBySlug(slug);

  if (!day) notFound();

  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-lg px-4 py-6">
        <div className="flex items-center gap-3 mb-8">
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold tracking-tight">{day.label}</h1>
            <p className="text-sm text-zinc-500">{day.focus}</p>
          </div>
          <span
            className="w-4 h-4 rounded-full shrink-0"
            style={{ backgroundColor: day.color }}
          />
        </div>

        <div className="space-y-4">
          <WarmupSection />
          {day.exercises.map((exercise, i) => (
            <ExerciseCard key={i} exercise={exercise} index={i + 1} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            &larr; Back to overview
          </Link>
        </div>
      </div>
    </div>
  );
}
