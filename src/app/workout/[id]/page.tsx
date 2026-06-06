'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getWorkout, buildSteps } from '@/lib/workouts';
import ExerciseSVG from '@/components/ExerciseSVG';
import { supabase } from '@/lib/supabase';

function formatTime(ms: number): string {
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

export default function WorkoutPage() {
  const params = useParams();
  const router = useRouter();
  const id = (params.id as string).toUpperCase();
  const workout = getWorkout(id);

  const [stepIndex, setStepIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [done, setDone] = useState(false);
  const [finalTime, setFinalTime] = useState(0);
  const sessionIdRef = useRef<string | null>(null);
  const startTimeRef = useRef<number>(0);

  const steps = workout ? buildSteps(workout) : [];

  // WakeLock – prevent screen from sleeping
  useEffect(() => {
    if (!('wakeLock' in navigator)) return;
    let lock: WakeLockSentinel | null = null;
    navigator.wakeLock.request('screen').then((l) => { lock = l; }).catch(() => {});
    return () => { lock?.release(); };
  }, []);

  // Start session
  useEffect(() => {
    if (!workout) return;
    const now = Date.now();
    startTimeRef.current = now;

    supabase
      .from('sessions')
      .insert({ workout_id: id, started_at: new Date(now).toISOString() })
      .select('id')
      .single()
      .then(({ data }) => {
        if (data) sessionIdRef.current = data.id;
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Timer – recalculates from stored start time so app-switching is handled
  useEffect(() => {
    const tick = () => setElapsed(Date.now() - startTimeRef.current);
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleNext = useCallback(async () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex((i) => i + 1);
      return;
    }

    const total = Date.now() - startTimeRef.current;
    setFinalTime(total);

    if (sessionIdRef.current) {
      await supabase
        .from('sessions')
        .update({ completed_at: new Date().toISOString() })
        .eq('id', sessionIdRef.current);
    }

    setDone(true);
  }, [stepIndex, steps.length]);

  if (!workout) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Workout not found.</p>
      </div>
    );
  }

  if (done) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-8 gap-6">
        <div className="w-24 h-24 rounded-full bg-orange-500/20 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-12 h-12 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Workout Complete</h1>
          <p className="text-gray-400 text-lg">{workout.name} · {workout.emphasis}</p>
        </div>
        <div className="bg-gray-900 rounded-2xl px-10 py-6 text-center">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Total Time</p>
          <p className="text-4xl font-bold font-mono text-orange-400">{formatTime(finalTime)}</p>
        </div>
        <button
          onClick={() => router.push('/')}
          className="mt-2 w-full max-w-xs bg-orange-500 active:bg-orange-600 text-white font-bold py-5 rounded-2xl text-lg transition-colors"
        >
          Done
        </button>
      </div>
    );
  }

  const step = steps[stepIndex];
  const superset = workout.supersets[step.supersetIndex];
  const exercise = superset.exercises[step.exerciseSlot];
  const progress = (stepIndex + 1) / steps.length;

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-12 pb-4">
        <button
          onClick={async () => {
            if (sessionIdRef.current) {
              await supabase.from('sessions').delete().eq('id', sessionIdRef.current);
            }
            router.push('/');
          }}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 active:bg-gray-700"
          aria-label="Exit workout"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <span className="font-semibold text-gray-300">{workout.name}</span>

        <span className="font-mono text-orange-400 text-lg font-bold tabular-nums">
          {formatTime(elapsed)}
        </span>
      </div>

      {/* Progress bar */}
      <div className="px-5 mb-6">
        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-orange-500 rounded-full transition-all duration-300"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      {/* Superset + set info */}
      <div className="px-5 mb-2 flex items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-full">
          {superset.label}
        </span>
        <span className="text-gray-500 text-sm">
          Set {step.setNumber} of {exercise.sets}
        </span>
      </div>

      {superset.notes && (
        <p className="px-5 mb-2 text-xs text-gray-600 italic">{superset.notes}</p>
      )}

      {/* Exercise name + reps */}
      <div className="px-5 mb-6">
        <h2 className="text-2xl font-bold leading-tight">{exercise.name}</h2>
        <p className="text-orange-400 text-lg font-semibold mt-1">{exercise.repRange} reps</p>
      </div>

      {/* SVG illustration */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="opacity-90">
          <ExerciseSVG exerciseKey={exercise.key} />
        </div>
      </div>

      {/* Next button */}
      <div className="px-5 pb-12 pt-6">
        <button
          onClick={handleNext}
          className="w-full bg-orange-500 active:bg-orange-600 text-white font-bold py-5 rounded-2xl text-xl transition-colors select-none"
        >
          {stepIndex === steps.length - 1 ? 'Finish Workout' : 'Next'}
        </button>
      </div>
    </div>
  );
}
