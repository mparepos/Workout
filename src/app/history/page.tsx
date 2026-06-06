import Link from 'next/link';
import { supabase, Session } from '@/lib/supabase';
import { WORKOUTS } from '@/lib/workouts';

async function getSessions(): Promise<Session[]> {
  const { data } = await supabase
    .from('sessions')
    .select('*')
    .not('completed_at', 'is', null)
    .order('started_at', { ascending: false })
    .limit(50);
  return (data as Session[]) ?? [];
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function formatDuration(start: string, end: string): string {
  const ms = new Date(end).getTime() - new Date(start).getTime();
  const totalSec = Math.floor(ms / 1000);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}m ${String(s).padStart(2, '0')}s`;
}

const emphasisColors: Record<string, string> = {
  A: 'text-orange-400 bg-orange-500/10',
  B: 'text-sky-400 bg-sky-500/10',
  C: 'text-emerald-400 bg-emerald-500/10',
  D: 'text-violet-400 bg-violet-500/10',
};

export default async function HistoryPage() {
  const sessions = await getSessions();

  const workoutMap = Object.fromEntries(WORKOUTS.map((w) => [w.id, w]));

  return (
    <main className="min-h-screen flex flex-col">
      <header className="px-6 pt-14 pb-6 flex items-center gap-4">
        <Link href="/" className="text-gray-400 hover:text-white transition-colors">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">History</h1>
      </header>

      {sessions.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center px-8">
          <p className="text-gray-400 text-lg">No completed workouts yet.</p>
          <Link href="/" className="text-orange-400 text-sm hover:underline">
            Start your first workout →
          </Link>
        </div>
      ) : (
        <div className="px-4 pb-10 flex flex-col gap-3">
          {sessions.map((session) => {
            const workout = workoutMap[session.workout_id];
            return (
              <div key={session.id} className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${emphasisColors[session.workout_id]}`}
                    >
                      {session.workout_id}
                    </span>
                    <div>
                      <p className="font-semibold">{workout?.name ?? `Workout ${session.workout_id}`}</p>
                      <p className="text-gray-500 text-xs">{workout?.emphasis}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {session.completed_at && (
                      <p className="text-sm font-mono text-gray-300">
                        {formatDuration(session.started_at, session.completed_at)}
                      </p>
                    )}
                    <p className="text-xs text-gray-600 mt-0.5">{formatDate(session.started_at)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
