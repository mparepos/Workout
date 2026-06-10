import Link from 'next/link';
import { WORKOUTS } from '@/lib/workouts';

const emphasisColors: Record<string, string> = {
  A: 'text-orange-400',
  B: 'text-sky-400',
  C: 'text-emerald-400',
  D: 'text-violet-400',
  E: 'text-rose-400',
};

const borderColors: Record<string, string> = {
  A: 'border-orange-500/30 hover:border-orange-500',
  B: 'border-sky-500/30 hover:border-sky-500',
  C: 'border-emerald-500/30 hover:border-emerald-500',
  D: 'border-violet-500/30 hover:border-violet-500',
  E: 'border-rose-500/30 hover:border-rose-500',
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="px-6 pt-14 pb-8">
        <h1 className="text-4xl font-bold tracking-tight">Workouts</h1>
        <p className="text-gray-400 mt-1 text-sm">Select a workout to begin</p>
      </header>

      <div className="flex-1 px-4 pb-8 flex flex-col gap-4">
        {WORKOUTS.map((workout) => (
          <Link
            key={workout.id}
            href={`/workout/${workout.id}`}
            className={`block rounded-2xl border bg-gray-900 p-6 transition-all duration-200 active:scale-[0.98] ${borderColors[workout.id]}`}
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="text-2xl font-bold">{workout.name}</span>
              <span
                className={`text-xs font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-gray-800 ${emphasisColors[workout.id]}`}
              >
                {workout.id}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">{workout.emphasis}</p>

            <div className="flex flex-wrap gap-2">
              {workout.supersets.map((ss) => (
                <span key={ss.label} className="text-xs bg-gray-800 text-gray-400 rounded-lg px-2 py-1">
                  {ss.exercises[0].name} + {ss.exercises[1].name}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
