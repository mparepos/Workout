'use client';

const W = '#ffffff';
const OR = '#f97316';
const BENCH = '#4b5563';
const CABLE = '#374151';

const sw: React.SVGProps<SVGLineElement> = {
  stroke: W,
  strokeWidth: 3,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const keyToScene: Record<string, string> = {
  A_S1_A: 'goblet-squat',
  A_S1_B: 'incline-bench',
  A_S2_A: 'lat-pulldown',
  A_S2_B: 'lateral-raises',
  A_S3_A: 'incline-curls',
  A_S3_B: 'overhead-tricep',
  B_S1_A: 'lunge',
  B_S1_B: 'cable-row',
  B_S2_A: 'bench-press',
  B_S2_B: 'hanging-knee',
  B_S3_A: 'leg-curls',
  B_S3_B: 'face-pulls',
  C_S1_A: 'rdl',
  C_S1_B: 'overhead-press',
  C_S2_A: 'goblet-squat',
  C_S2_B: 'lateral-raises',
  C_S3_A: 'cable-pushdowns',
  C_S3_B: 'hammer-curls',
  D_S1_A: 'lunge',
  D_S1_B: 'lat-pulldown',
  D_S2_A: 'chest-flyes',
  D_S2_B: 'tricep-kickbacks',
  D_S3_A: 'calf-raises',
  D_S3_B: 'decline-crunches',
};

function GobletSquat() {
  return (
    <>
      <circle cx="60" cy="22" r="10" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
      {/* torso leaning slightly forward */}
      <line x1="60" y1="32" x2="57" y2="68" {...sw} />
      {/* arms holding weight at chest */}
      <line x1="57" y1="46" x2="43" y2="56" {...sw} />
      <line x1="57" y1="46" x2="71" y2="56" {...sw} />
      <rect x="37" y="52" width="28" height="9" rx="3" fill={OR} />
      {/* left leg – squat wide */}
      <line x1="57" y1="68" x2="33" y2="85" {...sw} />
      <line x1="33" y1="85" x2="20" y2="115" {...sw} />
      {/* right leg */}
      <line x1="57" y1="68" x2="81" y2="85" {...sw} />
      <line x1="81" y1="85" x2="94" y2="115" {...sw} />
    </>
  );
}

function InclineBench() {
  return (
    <>
      {/* bench */}
      <line x1="12" y1="122" x2="98" y2="62" stroke={BENCH} strokeWidth="6" strokeLinecap="round" />
      {/* head */}
      <circle cx="90" cy="54" r="9" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
      {/* body along bench */}
      <line x1="82" y1="62" x2="32" y2="105" {...sw} />
      {/* arms pressing up */}
      <line x1="70" y1="70" x2="58" y2="46" {...sw} />
      <line x1="60" y1="70" x2="48" y2="46" {...sw} />
      <circle cx="56" cy="41" r="6" fill={OR} />
      <circle cx="46" cy="41" r="6" fill={OR} />
    </>
  );
}

function LatPulldown() {
  return (
    <>
      {/* overhead bar */}
      <line x1="22" y1="14" x2="98" y2="14" stroke={BENCH} strokeWidth="5" strokeLinecap="round" />
      <line x1="60" y1="14" x2="60" y2="28" stroke="#6b7280" strokeWidth="2" />
      {/* head */}
      <circle cx="60" cy="37" r="9" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
      {/* torso – seated */}
      <line x1="60" y1="46" x2="62" y2="85" {...sw} />
      {/* arms reaching up to bar */}
      <line x1="60" y1="52" x2="32" y2="18" {...sw} />
      <line x1="60" y1="52" x2="88" y2="18" {...sw} />
      {/* seat */}
      <line x1="38" y1="92" x2="85" y2="92" stroke={BENCH} strokeWidth="5" strokeLinecap="round" />
      {/* legs */}
      <line x1="62" y1="85" x2="50" y2="92" {...sw} />
      <line x1="62" y1="85" x2="74" y2="92" {...sw} />
      <line x1="50" y1="92" x2="47" y2="120" {...sw} />
      <line x1="74" y1="92" x2="77" y2="120" {...sw} />
    </>
  );
}

function LateralRaises() {
  return (
    <>
      <circle cx="60" cy="18" r="10" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="28" x2="60" y2="70" {...sw} />
      {/* arms horizontal */}
      <line x1="60" y1="40" x2="18" y2="44" {...sw} />
      <line x1="60" y1="40" x2="102" y2="44" {...sw} />
      <circle cx="13" cy="44" r="7" fill={OR} />
      <circle cx="107" cy="44" r="7" fill={OR} />
      {/* legs */}
      <line x1="60" y1="70" x2="50" y2="102" {...sw} />
      <line x1="50" y1="102" x2="48" y2="128" {...sw} />
      <line x1="60" y1="70" x2="70" y2="102" {...sw} />
      <line x1="70" y1="102" x2="72" y2="128" {...sw} />
    </>
  );
}

function InclineCurls() {
  return (
    <>
      {/* bench */}
      <line x1="12" y1="122" x2="98" y2="62" stroke={BENCH} strokeWidth="6" strokeLinecap="round" />
      {/* head */}
      <circle cx="90" cy="54" r="9" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
      {/* body */}
      <line x1="82" y1="62" x2="32" y2="105" {...sw} />
      {/* arms hanging down then curled up */}
      <line x1="65" y1="76" x2="54" y2="100" {...sw} />
      <line x1="54" y1="100" x2="44" y2="80" {...sw} />
      <line x1="55" y1="76" x2="44" y2="100" {...sw} />
      <line x1="44" y1="100" x2="34" y2="80" {...sw} />
      <circle cx="42" cy="76" r="6" fill={OR} />
      <circle cx="32" cy="76" r="6" fill={OR} />
    </>
  );
}

function OverheadTricep() {
  return (
    <>
      <circle cx="60" cy="20" r="10" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="30" x2="60" y2="72" {...sw} />
      {/* arm overhead – elbow up, forearm behind head */}
      <line x1="60" y1="42" x2="62" y2="14" {...sw} />
      <line x1="62" y1="14" x2="75" y2="32" {...sw} />
      {/* other arm bracing */}
      <line x1="60" y1="42" x2="40" y2="60" {...sw} />
      <circle cx="77" cy="35" r="7" fill={OR} />
      {/* legs */}
      <line x1="60" y1="72" x2="50" y2="104" {...sw} />
      <line x1="50" y1="104" x2="48" y2="130" {...sw} />
      <line x1="60" y1="72" x2="70" y2="104" {...sw} />
      <line x1="70" y1="104" x2="72" y2="130" {...sw} />
    </>
  );
}

function Lunge() {
  return (
    <>
      <circle cx="58" cy="20" r="10" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
      {/* torso upright */}
      <line x1="58" y1="30" x2="58" y2="72" {...sw} />
      {/* arms with weights */}
      <line x1="58" y1="42" x2="42" y2="68" {...sw} />
      <line x1="58" y1="42" x2="74" y2="68" {...sw} />
      <circle cx="41" cy="72" r="6" fill={OR} />
      <circle cx="75" cy="72" r="6" fill={OR} />
      {/* front leg – knee bent */}
      <line x1="58" y1="72" x2="38" y2="95" {...sw} />
      <line x1="38" y1="95" x2="28" y2="125" {...sw} />
      {/* back leg – knee low */}
      <line x1="58" y1="72" x2="84" y2="88" {...sw} />
      <line x1="84" y1="88" x2="98" y2="118" {...sw} />
    </>
  );
}

function CableRow() {
  return (
    <>
      {/* cable machine on right */}
      <line x1="110" y1="18" x2="110" y2="128" stroke={CABLE} strokeWidth="6" strokeLinecap="round" />
      <line x1="110" y1="78" x2="76" y2="76" stroke="#6b7280" strokeWidth="2" strokeDasharray="4 3" />
      {/* head */}
      <circle cx="40" cy="34" r="9" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
      {/* torso seated upright */}
      <line x1="40" y1="43" x2="42" y2="84" {...sw} />
      {/* arms pulling */}
      <line x1="40" y1="58" x2="76" y2="72" {...sw} />
      <line x1="40" y1="64" x2="76" y2="80" {...sw} />
      {/* seat */}
      <line x1="18" y1="90" x2="66" y2="90" stroke={BENCH} strokeWidth="5" strokeLinecap="round" />
      {/* legs */}
      <line x1="42" y1="84" x2="30" y2="90" {...sw} />
      <line x1="42" y1="84" x2="56" y2="90" {...sw} />
      <line x1="30" y1="90" x2="18" y2="122" {...sw} />
      <line x1="56" y1="90" x2="62" y2="122" {...sw} />
    </>
  );
}

function BenchPress() {
  return (
    <>
      {/* flat bench */}
      <line x1="10" y1="96" x2="110" y2="96" stroke={BENCH} strokeWidth="6" strokeLinecap="round" />
      {/* head */}
      <circle cx="90" cy="83" r="9" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
      {/* body horizontal */}
      <line x1="81" y1="90" x2="28" y2="92" {...sw} />
      {/* arms pressing up */}
      <line x1="68" y1="90" x2="60" y2="62" {...sw} />
      <line x1="52" y1="90" x2="44" y2="62" {...sw} />
      <circle cx="60" cy="56" r="7" fill={OR} />
      <circle cx="44" cy="56" r="7" fill={OR} />
    </>
  );
}

function HangingKnee() {
  return (
    <>
      {/* bar */}
      <line x1="22" y1="14" x2="98" y2="14" stroke={BENCH} strokeWidth="5" strokeLinecap="round" />
      {/* arms */}
      <line x1="44" y1="14" x2="46" y2="30" {...sw} />
      <line x1="76" y1="14" x2="74" y2="30" {...sw} />
      {/* head */}
      <circle cx="60" cy="38" r="9" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
      {/* torso hanging */}
      <line x1="60" y1="47" x2="60" y2="84" {...sw} />
      {/* knees raised up */}
      <line x1="60" y1="84" x2="44" y2="98" {...sw} />
      <line x1="44" y1="98" x2="48" y2="116" {...sw} />
      <line x1="60" y1="84" x2="76" y2="98" {...sw} />
      <line x1="76" y1="98" x2="72" y2="116" {...sw} />
    </>
  );
}

function LegCurls() {
  return (
    <>
      {/* bench */}
      <line x1="8" y1="68" x2="112" y2="68" stroke={BENCH} strokeWidth="6" strokeLinecap="round" />
      {/* head – prone */}
      <circle cx="20" cy="58" r="9" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
      {/* body horizontal face down */}
      <line x1="29" y1="63" x2="82" y2="62" {...sw} />
      {/* arms folded */}
      <line x1="28" y1="62" x2="14" y2="54" {...sw} />
      {/* legs curling up */}
      <line x1="82" y1="62" x2="97" y2="60" {...sw} />
      <line x1="97" y1="60" x2="103" y2="36" {...sw} />
      <line x1="80" y1="63" x2="94" y2="62" {...sw} />
      <line x1="94" y1="62" x2="100" y2="44" {...sw} />
      <circle cx="103" cy="30" r="6" fill={OR} />
      <circle cx="101" cy="40" r="5" fill={OR} />
    </>
  );
}

function FacePulls() {
  return (
    <>
      {/* cable machine right */}
      <line x1="110" y1="18" x2="110" y2="128" stroke={CABLE} strokeWidth="6" strokeLinecap="round" />
      <line x1="110" y1="46" x2="76" y2="46" stroke="#6b7280" strokeWidth="2" strokeDasharray="4 3" />
      {/* head */}
      <circle cx="42" cy="28" r="9" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
      {/* torso */}
      <line x1="42" y1="37" x2="42" y2="78" {...sw} />
      {/* arms bent pulling to face */}
      <line x1="42" y1="46" x2="76" y2="42" {...sw} />
      <line x1="42" y1="50" x2="76" y2="50" {...sw} />
      {/* legs */}
      <line x1="42" y1="78" x2="32" y2="110" {...sw} />
      <line x1="32" y1="110" x2="30" y2="135" {...sw} />
      <line x1="42" y1="78" x2="52" y2="110" {...sw} />
      <line x1="52" y1="110" x2="54" y2="135" {...sw} />
    </>
  );
}

function RDL() {
  return (
    <>
      {/* head – bent over */}
      <circle cx="88" cy="28" r="9" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
      {/* torso horizontal */}
      <line x1="80" y1="34" x2="38" y2="58" {...sw} />
      {/* arms hanging with weights */}
      <line x1="66" y1="44" x2="56" y2="80" {...sw} />
      <line x1="56" y1="44" x2="46" y2="80" {...sw} />
      <circle cx="56" cy="86" r="7" fill={OR} />
      <circle cx="46" cy="86" r="7" fill={OR} />
      {/* legs – hip hinge, mostly straight */}
      <line x1="38" y1="58" x2="36" y2="96" {...sw} />
      <line x1="36" y1="96" x2="33" y2="132" {...sw} />
      <line x1="42" y1="58" x2="48" y2="96" {...sw} />
      <line x1="48" y1="96" x2="52" y2="132" {...sw} />
    </>
  );
}

function OverheadPress() {
  return (
    <>
      <circle cx="60" cy="42" r="10" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="52" x2="60" y2="92" {...sw} />
      {/* arms fully overhead */}
      <line x1="60" y1="62" x2="40" y2="20" {...sw} />
      <line x1="60" y1="62" x2="80" y2="20" {...sw} />
      <circle cx="38" cy="13" r="8" fill={OR} />
      <circle cx="82" cy="13" r="8" fill={OR} />
      {/* legs */}
      <line x1="60" y1="92" x2="50" y2="120" {...sw} />
      <line x1="50" y1="120" x2="48" y2="142" {...sw} />
      <line x1="60" y1="92" x2="70" y2="120" {...sw} />
      <line x1="70" y1="120" x2="72" y2="142" {...sw} />
    </>
  );
}

function CablePushdowns() {
  return (
    <>
      {/* cable from top */}
      <line x1="38" y1="8" x2="82" y2="8" stroke={BENCH} strokeWidth="5" strokeLinecap="round" />
      <line x1="60" y1="8" x2="60" y2="30" stroke="#6b7280" strokeWidth="2" strokeDasharray="4 3" />
      {/* head */}
      <circle cx="60" cy="22" r="10" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
      {/* torso */}
      <line x1="60" y1="32" x2="60" y2="74" {...sw} />
      {/* arms – elbows tucked, pushing down */}
      <line x1="60" y1="46" x2="46" y2="46" {...sw} />
      <line x1="46" y1="46" x2="42" y2="74" {...sw} />
      <line x1="60" y1="46" x2="74" y2="46" {...sw} />
      <line x1="74" y1="46" x2="78" y2="74" {...sw} />
      {/* handle/bar being pushed */}
      <line x1="36" y1="74" x2="84" y2="74" stroke={OR} strokeWidth="4" strokeLinecap="round" />
      {/* legs */}
      <line x1="60" y1="74" x2="50" y2="106" {...sw} />
      <line x1="50" y1="106" x2="48" y2="132" {...sw} />
      <line x1="60" y1="74" x2="70" y2="106" {...sw} />
      <line x1="70" y1="106" x2="72" y2="132" {...sw} />
    </>
  );
}

function HammerCurls() {
  return (
    <>
      <circle cx="60" cy="18" r="10" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="28" x2="60" y2="70" {...sw} />
      {/* left arm curled, neutral grip */}
      <line x1="60" y1="40" x2="40" y2="54" {...sw} />
      <line x1="40" y1="54" x2="38" y2="36" {...sw} />
      {/* right arm curled */}
      <line x1="60" y1="40" x2="80" y2="54" {...sw} />
      <line x1="80" y1="54" x2="82" y2="36" {...sw} />
      {/* weights – vertical (neutral grip) */}
      <rect x="34" y="27" width="8" height="16" rx="2" fill={OR} />
      <rect x="78" y="27" width="8" height="16" rx="2" fill={OR} />
      {/* legs */}
      <line x1="60" y1="70" x2="50" y2="102" {...sw} />
      <line x1="50" y1="102" x2="48" y2="128" {...sw} />
      <line x1="60" y1="70" x2="70" y2="102" {...sw} />
      <line x1="70" y1="102" x2="72" y2="128" {...sw} />
    </>
  );
}

function ChestFlyes() {
  return (
    <>
      {/* flat bench */}
      <line x1="10" y1="96" x2="110" y2="96" stroke={BENCH} strokeWidth="6" strokeLinecap="round" />
      {/* head */}
      <circle cx="90" cy="83" r="9" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
      {/* body */}
      <line x1="81" y1="90" x2="28" y2="92" {...sw} />
      {/* arms wide – flye position */}
      <line x1="62" y1="88" x2="18" y2="66" {...sw} />
      <line x1="48" y1="89" x2="8" y2="72" {...sw} />
      <circle cx="14" cy="62" r="7" fill={OR} />
      <circle cx="6" cy="68" r="7" fill={OR} />
    </>
  );
}

function TricepKickbacks() {
  return (
    <>
      {/* head – bent over */}
      <circle cx="82" cy="30" r="9" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
      {/* torso hinged forward */}
      <line x1="74" y1="36" x2="36" y2="60" {...sw} />
      {/* working arm – extended back */}
      <line x1="58" y1="46" x2="62" y2="58" {...sw} />
      <line x1="62" y1="58" x2="98" y2="52" {...sw} />
      <circle cx="103" cy="51" r="7" fill={OR} />
      {/* support arm – on knee */}
      <line x1="62" y1="46" x2="42" y2="64" {...sw} />
      {/* legs */}
      <line x1="36" y1="60" x2="30" y2="96" {...sw} />
      <line x1="30" y1="96" x2="26" y2="130" {...sw} />
      <line x1="40" y1="60" x2="52" y2="96" {...sw} />
      <line x1="52" y1="96" x2="56" y2="130" {...sw} />
    </>
  );
}

function CalfRaises() {
  return (
    <>
      <circle cx="60" cy="18" r="10" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="28" x2="60" y2="70" {...sw} />
      {/* arms at sides */}
      <line x1="60" y1="40" x2="42" y2="62" {...sw} />
      <line x1="60" y1="40" x2="78" y2="62" {...sw} />
      {/* legs – raised on toes */}
      <line x1="60" y1="70" x2="50" y2="100" {...sw} />
      <line x1="50" y1="100" x2="44" y2="118" {...sw} />
      {/* toes on ground – elevated heel */}
      <line x1="44" y1="118" x2="56" y2="124" {...sw} />
      <line x1="60" y1="70" x2="70" y2="100" {...sw} />
      <line x1="70" y1="100" x2="76" y2="118" {...sw} />
      <line x1="76" y1="118" x2="64" y2="124" {...sw} />
      {/* raised heel indicator lines */}
      <line x1="44" y1="118" x2="38" y2="112" stroke={OR} strokeWidth="2" strokeLinecap="round" />
      <line x1="76" y1="118" x2="82" y2="112" stroke={OR} strokeWidth="2" strokeLinecap="round" />
    </>
  );
}

function DeclineCrunches() {
  return (
    <>
      {/* decline bench */}
      <line x1="14" y1="58" x2="106" y2="110" stroke={BENCH} strokeWidth="6" strokeLinecap="round" />
      {/* figure – torso raised in crunch position */}
      {/* hips anchored at bottom right of bench */}
      {/* legs flat on upper left */}
      <line x1="28" y1="64" x2="50" y2="76" {...sw} />
      <line x1="22" y1="66" x2="44" y2="78" {...sw} />
      {/* hips */}
      <line x1="50" y1="76" x2="68" y2="88" {...sw} />
      {/* torso raised – crunching up */}
      <line x1="62" y1="84" x2="44" y2="58" {...sw} />
      {/* head raised */}
      <circle cx="38" cy="50" r="9" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" />
      {/* arms behind head */}
      <line x1="38" y1="40" x2="30" y2="52" {...sw} />
      <line x1="38" y1="40" x2="48" y2="52" {...sw} />
    </>
  );
}

const sceneMap: Record<string, React.ReactNode> = {
  'goblet-squat': <GobletSquat />,
  'incline-bench': <InclineBench />,
  'lat-pulldown': <LatPulldown />,
  'lateral-raises': <LateralRaises />,
  'incline-curls': <InclineCurls />,
  'overhead-tricep': <OverheadTricep />,
  'lunge': <Lunge />,
  'cable-row': <CableRow />,
  'bench-press': <BenchPress />,
  'hanging-knee': <HangingKnee />,
  'leg-curls': <LegCurls />,
  'face-pulls': <FacePulls />,
  'rdl': <RDL />,
  'overhead-press': <OverheadPress />,
  'cable-pushdowns': <CablePushdowns />,
  'hammer-curls': <HammerCurls />,
  'chest-flyes': <ChestFlyes />,
  'tricep-kickbacks': <TricepKickbacks />,
  'calf-raises': <CalfRaises />,
  'decline-crunches': <DeclineCrunches />,
};

export default function ExerciseSVG({ exerciseKey }: { exerciseKey: string }) {
  const scene = sceneMap[keyToScene[exerciseKey] ?? ''];
  if (!scene) return null;

  return (
    <svg
      viewBox="0 0 120 150"
      width={220}
      height={220}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {scene}
    </svg>
  );
}
