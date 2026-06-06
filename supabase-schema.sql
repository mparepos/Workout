create table sessions (
  id uuid default gen_random_uuid() primary key,
  workout_id text not null check (workout_id in ('A', 'B', 'C', 'D')),
  started_at timestamptz not null default now(),
  completed_at timestamptz
);

create index sessions_workout_started on sessions (workout_id, started_at desc);
