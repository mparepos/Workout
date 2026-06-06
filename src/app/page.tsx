import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { WORKOUTS } from '@/lib/workouts';

async function getLastSessionDates(): Promise<Record<string, string>> {
  const { data } = await supabase
    .from('sessions')
    .select('workout_id, started_at')
    .not('completed_at', 'is', null)
    .order('started_at', { ascending: false });

  const last: Record<string, string> = {};
  data?.forEach((s) => {
    if (!last[s.workout_id]) last[s.workout_id] = s.started_at;
  });
  return last;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

const emphasisColors: Record<string, string> = {
  A: 'text-orange-400',
  B: 'text-sky-400',
  C: 'text-emerald-400',
  D: 'text-violet-400',
};

const borderColors: Record<string, string> = {
  A: 'border-orange-500/30 hover:border-orange-500',
  B: 'border-sky-500/30 hover:border-sky-500',
  C: 'border-emerald-500/30 hover:border-emerald-500',
  D: 'border-violet-500/30 hover:border-violet-500',
};

export default async function HomePage() {
  const lastDates = await getLastSessionDates();

  return (
    <main className="min-h-screen flex flex-col">
      <header className="px-6 pt-14 pb-8">
        <h1 className="text-4xl font-bold tracking-tight">Workouts</h1>
        <p className="text-gray-400 mt-1 text-sm">Select a workout to begin</p>
      </header>

      <div className="flex-1 px-4 pb-8 flex flex-col gap-4">
        {WORKOUTS.map((workout) => {
          const last = lastDates[workout.id];
          return (
            <Link
              key={workout.id}
              href={`/workout/${workout.id}`}
              className={`block rounded-2xl border bg-gray-900 p-6 transition-all duration-200 active:scale-[0.98] ${borderColors[workout.id]}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl font-bold">{workout.name}</span>
                    <span
                      className={`text-xs font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-gray-800 ${emphasisColors[workout.id]}`}
                    >
                      {workout.id}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{workout.emphasis}</p>
                </div>
                <div className="text-right">
                  {last ? (
                    <>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Last done</p>
                      <p className="text-sm font-medium text-gray-300 mt-0.5">{formatDate(last)}</p>
                    </>
                  ) : (
                    <p className="text-xs text-gray-600">Never done</p>
                  )}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {workout.supersets.map((ss) => (
                  <span key={ss.label} className="text-xs bg-gray-800 text-gray-400 rounded-lg px-2 py-1">
                    {ss.exercises[0].name.split(' ').slice(0, 2).join(' ')} + {ss.exercises[1].name.split(' ').slice(0, 2).join(' ')}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="px-6 pb-10 flex justify-center">
        <Link href="/history" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
          View history →
        </Link>
      </div>
    </main>
  );
}
