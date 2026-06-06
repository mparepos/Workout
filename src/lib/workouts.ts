export type Exercise = {
  key: string;
  name: string;
  sets: number;
  repRange: string;
};

export type Superset = {
  label: string;
  notes?: string;
  exercises: [Exercise, Exercise];
};

export type Workout = {
  id: 'A' | 'B' | 'C' | 'D';
  name: string;
  emphasis: string;
  supersets: Superset[];
};

export const WORKOUTS: Workout[] = [
  {
    id: 'A',
    name: 'Workout A',
    emphasis: 'Squat & Push',
    supersets: [
      {
        label: 'Superset 1',
        exercises: [
          { key: 'A_S1_A', name: 'Dumbbell Goblet Squats', sets: 3, repRange: '8–10' },
          { key: 'A_S1_B', name: 'Incline Dumbbell Bench Press', sets: 3, repRange: '8–10' },
        ],
      },
      {
        label: 'Superset 2',
        exercises: [
          { key: 'A_S2_A', name: 'Lat Pulldown / Pull-ups', sets: 3, repRange: '10–12' },
          { key: 'A_S2_B', name: 'Dumbbell Lateral Raises', sets: 3, repRange: '12–15' },
        ],
      },
      {
        label: 'Superset 3',
        exercises: [
          { key: 'A_S3_A', name: 'Incline Dumbbell Bicep Curls', sets: 3, repRange: '12–15' },
          { key: 'A_S3_B', name: 'Overhead Dumbbell Tricep Extension', sets: 3, repRange: '12–15' },
        ],
      },
    ],
  },
  {
    id: 'B',
    name: 'Workout B',
    emphasis: 'Lunge & Cable Row',
    supersets: [
      {
        label: 'Superset 1',
        notes: 'Saves grip so you can hit your back hard',
        exercises: [
          { key: 'B_S1_A', name: 'Dumbbell Walking Lunges', sets: 3, repRange: '10/leg' },
          { key: 'B_S1_B', name: 'Seated Cable Row', sets: 3, repRange: '8–10' },
        ],
      },
      {
        label: 'Superset 2',
        exercises: [
          { key: 'B_S2_A', name: 'Flat Dumbbell Bench Press', sets: 3, repRange: '10–12' },
          { key: 'B_S2_B', name: 'Hanging Knee Raises / Ab Wheel', sets: 3, repRange: '12–15' },
        ],
      },
      {
        label: 'Superset 3',
        exercises: [
          { key: 'B_S3_A', name: 'Lying / Seated Leg Curls', sets: 3, repRange: '12–15' },
          { key: 'B_S3_B', name: 'Face Pulls / Rear Delt Flies', sets: 3, repRange: '15' },
        ],
      },
    ],
  },
  {
    id: 'C',
    name: 'Workout C',
    emphasis: 'Squat & Hip Hinge',
    supersets: [
      {
        label: 'Superset 1',
        notes: 'Targets hamstrings from the hip for complete leg development',
        exercises: [
          { key: 'C_S1_A', name: 'Dumbbell Romanian Deadlifts', sets: 3, repRange: '8–10' },
          { key: 'C_S1_B', name: 'Standing Overhead Dumbbell Press', sets: 3, repRange: '8–10' },
        ],
      },
      {
        label: 'Superset 2',
        exercises: [
          { key: 'C_S2_A', name: 'Dumbbell Goblet Squats', sets: 3, repRange: '10–12' },
          { key: 'C_S2_B', name: 'Dumbbell Lateral Raises', sets: 3, repRange: '12–15' },
        ],
      },
      {
        label: 'Superset 3',
        exercises: [
          { key: 'C_S3_A', name: 'Cable Tricep Pushdowns', sets: 3, repRange: '12–15' },
          { key: 'C_S3_B', name: 'Hammer Curls', sets: 3, repRange: '12–15' },
        ],
      },
    ],
  },
  {
    id: 'D',
    name: 'Workout D',
    emphasis: 'Lunge & Upper Back',
    supersets: [
      {
        label: 'Superset 1',
        exercises: [
          { key: 'D_S1_A', name: 'Dumbbell Walking Lunges', sets: 3, repRange: '10/leg' },
          { key: 'D_S1_B', name: 'Lat Pulldown / Wide-Grip Cable Row', sets: 3, repRange: '10–12' },
        ],
      },
      {
        label: 'Superset 2',
        exercises: [
          { key: 'D_S2_A', name: 'Dumbbell Chest Flyes', sets: 3, repRange: '10–12' },
          { key: 'D_S2_B', name: 'Tricep Kickbacks / Skull Crushers', sets: 3, repRange: '12–15' },
        ],
      },
      {
        label: 'Superset 3',
        exercises: [
          { key: 'D_S3_A', name: 'Standing Calf Raises', sets: 3, repRange: '15' },
          { key: 'D_S3_B', name: 'Decline Crunches / Plank', sets: 3, repRange: 'To failure' },
        ],
      },
    ],
  },
];

export function getWorkout(id: string): Workout | undefined {
  return WORKOUTS.find((w) => w.id === id.toUpperCase());
}

export type Step = {
  supersetIndex: number;
  exerciseSlot: 0 | 1;
  setNumber: number;
};

export function buildSteps(workout: Workout): Step[] {
  return workout.supersets.flatMap((superset, si) => {
    const numSets = superset.exercises[0].sets;
    const steps: Step[] = [];
    for (let set = 1; set <= numSets; set++) {
      steps.push({ supersetIndex: si, exerciseSlot: 0, setNumber: set });
      steps.push({ supersetIndex: si, exerciseSlot: 1, setNumber: set });
    }
    return steps;
  });
}
