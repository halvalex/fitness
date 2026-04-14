export type Exercise = {
  name: string;
  sets: string;
  reps: string;
  video: string | null;
  description: string;
  setup: string;
};

export type TrainingDay = {
  slug: string;
  label: string;
  color: string;
  colorClass: string;
  emoji: string;
  focus: string;
  exercises: Exercise[];
};

export const warmup = [
  "Body Bounces",
  "Trunk Twist",
  "Arm Swings",
  "Body Waves",
  "McGregors",
  "DAS Reach (Left & Right)",
  "90/90",
  "Straddle",
  "Yogi",
  "Horse",
];

export const trainingRules = {
  sets: "1 warm-up set + 2 working sets",
  reps: "6–10 (main lifts) / 8–15 (isolation)",
  progression:
    "Hit 10 reps → increase weight. Can't reach 6 → reduce weight.",
  tempo: "Controlled — no rushing.",
};

export const days: TrainingDay[] = [
  {
    slug: "monday",
    label: "Monday",
    color: "#3b82f6",
    colorClass: "bg-blue-500",
    emoji: "🔵",
    focus: "Push — Chest Focus",
    exercises: [
      {
        name: "Cable Chest Press",
        sets: "2",
        reps: "6–10",
        video: "/videos/Cable Bench Press.mp4",
        description:
          "Stand centered between both pulleys. Press handles forward at chest height, squeezing your chest at the top. Control the weight back slowly. Keep your core braced and a slight forward lean.",
        setup:
          "Set both pulleys to mid-chest height (roughly hole 8–10 from the bottom). Use the D-handle attachments. Stand one step forward from the center of the rack to create tension at the start.",
      },
      {
        name: "Cable Chest Fly",
        sets: "2",
        reps: "8–12",
        video: "/videos/Cable Chest Fly Standing.mp4",
        description:
          "Stand centered with arms wide, slight bend in elbows. Bring hands together in a hugging arc. Squeeze at the front, then open slowly. Keep elbows slightly bent throughout.",
        setup:
          "Set both pulleys to shoulder height (roughly hole 10–12). Use D-handle attachments. Step one foot forward for balance. Arms should be roughly parallel to the floor at the start.",
      },
      {
        name: "Incline Cable Press",
        sets: "2",
        reps: "6–10",
        video: "/videos/Cable Incline Bench Press.mp4",
        description:
          "Place a bench at ~30–45° incline inside the rack. Press handles upward and together, targeting upper chest. Lower with control.",
        setup:
          "Set both pulleys to the lowest position (hole 1–2). Place the adjustable bench at a 30–45° incline centered in the rack. Use D-handles. The cable should pull from below and behind you.",
      },
      {
        name: "Cable Tricep Pushdown",
        sets: "2",
        reps: "8–12",
        video: "/videos/Cable Pushdown.mp4",
        description:
          "Face the pulley. Keep elbows pinned at your sides. Extend your forearms down until arms are straight. Squeeze triceps at the bottom, then return slowly.",
        setup:
          "Set one pulley to the highest position (top hole). Attach the straight bar or V-bar. Stand close to the stack facing the pulley.",
      },
      {
        name: "Overhead Cable Tricep Extension",
        sets: "2",
        reps: "8–12",
        video: "/videos/Cable Overhead Triceps Extension Rope attachment.mp4",
        description:
          "Face away from the pulley with the rope behind your head. Extend your arms overhead until straight. Keep elbows close to your ears. Return slowly behind your head.",
        setup:
          "Set one pulley to the lowest position (hole 1–2). Attach the rope. Face away from the stack and step forward to create tension. Stagger your stance for balance.",
      },
      {
        name: "Cable Lateral Raise",
        sets: "2",
        reps: "10–15",
        video: "/videos/Cable Lateral Raise.mp4",
        description:
          "Stand sideways to the pulley, cable crossing in front of your body. Raise your arm out to the side until shoulder height. Lower with control. Switch sides.",
        setup:
          "Set one pulley to the lowest position (hole 1–2). Use a D-handle. Stand sideways so the cable crosses in front of your body. Your working arm is the one farther from the stack.",
      },
    ],
  },
  {
    slug: "tuesday",
    label: "Tuesday",
    color: "#22c55e",
    colorClass: "bg-green-500",
    emoji: "🟢",
    focus: "Pull — Upper Back",
    exercises: [
      {
        name: "Cable Row (Neutral Grip)",
        sets: "2",
        reps: "6–10",
        video: "/videos/Cable Seated Row.mp4",
        description:
          "Sit or stand facing the pulley. Pull handles toward your lower ribcage, squeezing shoulder blades together. Keep your chest up and core braced. Return slowly.",
        setup:
          "Set both pulleys to belly-button height (hole 6–8). Use D-handles or a close-grip V-bar on one side. If seated, place a bench in front of the stack.",
      },
      {
        name: "High Cable Row",
        sets: "2",
        reps: "8–12",
        video: "/videos/Cable Front Seated Row.mp4",
        description:
          "Pull from face level toward your upper chest/neck. Focus on retracting shoulder blades and squeezing upper back. Keep elbows high. This targets the upper back and rear delts.",
        setup:
          "Set both pulleys to face/eye height (hole 12–14). Use D-handles or a rope attachment. Stand or sit facing the stack.",
      },
      {
        name: "Lat Pulldown",
        sets: "2",
        reps: "6–10",
        video: "/videos/Cable Pulldown.mp4",
        description:
          "Grab the bar with a wide grip. Pull down to your upper chest while leaning slightly back. Squeeze your lats at the bottom. Return with control — don't let the weight yank your arms up.",
        setup:
          "Set one or both pulleys to the highest position (top hole). Attach the lat pulldown bar. Kneel on the floor or sit on a low bench beneath the bar to create a vertical pulling angle.",
      },
      {
        name: "Cable Face Pull",
        sets: "2",
        reps: "10–15",
        video: "/videos/Cable Standing Face Pull.mp4",
        description:
          "Pull the rope toward your face, splitting the ends past your ears. Squeeze rear delts and external rotators. Keep elbows high and wide. Great for shoulder health and posture.",
        setup:
          "Set one pulley to upper chest/face height (hole 12–14). Attach the rope. Stand facing the stack, step back for tension.",
      },
      {
        name: "Cable Bicep Curl",
        sets: "2",
        reps: "8–12",
        video: "/videos/Cable Curl.mp4",
        description:
          "Stand facing the low pulley. Curl the handle toward your shoulders, squeezing your biceps at the top. Keep elbows pinned at your sides. Lower with control.",
        setup:
          "Set one pulley to the lowest position (hole 1–2). Attach the straight bar, EZ-bar, or D-handles. Stand facing the stack.",
      },
      {
        name: "Hammer Curl (Rope)",
        sets: "2",
        reps: "8–12",
        video: null,
        description:
          "Use a rope attachment from the low pulley. Curl with a neutral (hammer) grip — thumbs pointing up. Squeeze at the top. This targets the brachialis and forearms in addition to biceps.",
        setup:
          "Set one pulley to the lowest position (hole 1–2). Attach the rope. Stand facing the stack. Grip each end of the rope with thumbs up (neutral grip).",
      },
    ],
  },
  {
    slug: "wednesday",
    label: "Wednesday",
    color: "#eab308",
    colorClass: "bg-yellow-500",
    emoji: "🟡",
    focus: "Legs",
    exercises: [
      {
        name: "Cable Squat",
        sets: "2",
        reps: "6–10",
        video: null,
        description:
          "Hold a handle or cable belt at chest height. Squat down with weight in your heels, chest up, knees tracking over toes. Drive up through your heels. The cable helps with balance and adds resistance.",
        setup:
          "Set one or both pulleys to the lowest position (hole 1–2). Attach a straight bar, rope, or use D-handles held together at chest height. Face the stack and step back to create tension.",
      },
      {
        name: "Bulgarian Split Squat",
        sets: "2",
        reps: "8–10 each leg",
        video: null,
        description:
          "Place your rear foot on a bench behind you. Lower your back knee toward the floor while keeping your front shin mostly vertical. Drive up through the front heel. Bodyweight or hold a cable for extra resistance.",
        setup:
          "Place a bench behind you for your rear foot. Optional: set one pulley low (hole 1–2) and hold a D-handle in goblet position for added resistance. Stand sideways or facing away from the stack.",
      },
      {
        name: "Cable Leg Curl (Ankle Strap)",
        sets: "2",
        reps: "10–12",
        video: "/videos/Cable Assisted Inverse Leg Curl.mp4",
        description:
          "Attach an ankle strap to one ankle. Face the stack and curl your heel toward your glute, squeezing your hamstring. Lower slowly. Keep your thigh stationary.",
        setup:
          "Set one pulley to the lowest position (hole 1–2). Attach the ankle strap. Face the stack, hold onto the frame for balance. Work one leg at a time.",
      },
      {
        name: "Cable Leg Extension",
        sets: "2",
        reps: "10–12",
        video: null,
        description:
          "Attach the ankle strap to one ankle. Face away from the stack. Extend your leg forward, squeezing your quad at the top. Lower slowly. If not possible, do slow bodyweight squats instead.",
        setup:
          "Set one pulley to the lowest position (hole 1–2). Attach the ankle strap. Face away from the stack, hold the frame for balance. Kick forward against the resistance.",
      },
      {
        name: "Calf Raises",
        sets: "3",
        reps: "12–20",
        video: null,
        description:
          "Stand on a slight ledge or flat on the floor. Rise up onto your toes, squeezing calves at the top. Lower slowly below the ledge for a full stretch. Bodyweight or hold cables for added resistance.",
        setup:
          "No specific cable setup needed. Stand near the rack frame and hold it for balance. Place a weight plate on the floor to stand on for extra range of motion if desired.",
      },
    ],
  },
  {
    slug: "friday",
    label: "Friday",
    color: "#a855f7",
    colorClass: "bg-purple-500",
    emoji: "🟣",
    focus: "Push — Shoulders",
    exercises: [
      {
        name: "Cable Shoulder Press",
        sets: "2",
        reps: "6–10",
        video: null,
        description:
          "Stand centered between the pulleys. Press handles straight overhead, locking out at the top. Lower to shoulder height with control. Keep your core tight and avoid arching your back.",
        setup:
          "Set both pulleys to the lowest position (hole 1–2). Use D-handles. Stand centered in the rack. The cables should come from below and behind you as you press overhead.",
      },
      {
        name: "Cable Lateral Raise",
        sets: "2",
        reps: "10–15",
        video: "/videos/Cable Lateral Raise.mp4",
        description:
          "Stand sideways to the pulley, cable crossing in front. Raise arm to the side until shoulder height. Control the negative. Switch sides.",
        setup:
          "Set one pulley to the lowest position (hole 1–2). Use a D-handle. Stand sideways so the cable crosses in front of your body.",
      },
      {
        name: "Cable Rear Delt Fly",
        sets: "2",
        reps: "10–15",
        video: "/videos/Cable Incline Fly.mp4",
        description:
          "Face the stack with cables set high and crossed. Pull handles outward and back, squeezing rear delts. Keep a slight bend in elbows. This is essential for shoulder balance and posture.",
        setup:
          "Set both pulleys to face/head height (hole 12–14). Cross the cables — grab the left cable with your right hand and vice versa. Stand centered facing the stack.",
      },
      {
        name: "Cable Tricep Pushdown",
        sets: "2",
        reps: "8–12",
        video: "/videos/Cable Pushdown Rope Attachment.mp4",
        description:
          "Face the high pulley. Push the rope or bar down until arms are fully extended. Squeeze triceps at the bottom. Return with control, keeping elbows locked at your sides.",
        setup:
          "Set one pulley to the highest position (top hole). Attach rope or straight bar. Stand close to the stack facing the pulley.",
      },
      {
        name: "Overhead Cable Tricep Extension",
        sets: "2",
        reps: "8–12",
        video: "/videos/Cable Overhead Triceps Extension Rope attachment.mp4",
        description:
          "Face away from a low pulley, rope behind your head. Extend arms overhead. Keep elbows close to your ears throughout. Squeeze at full extension.",
        setup:
          "Set one pulley to the lowest position (hole 1–2). Attach the rope. Face away, step forward, stagger stance for balance.",
      },
    ],
  },
  {
    slug: "saturday",
    label: "Saturday",
    color: "#f43f5e",
    colorClass: "bg-rose-500",
    emoji: "🔴",
    focus: "Pull — Lats Focus",
    exercises: [
      {
        name: "Lat Pulldown",
        sets: "2",
        reps: "6–10",
        video: "/videos/Cable Pulldown.mp4",
        description:
          "Wide grip on the bar, pull down to upper chest. Lean back slightly, drive elbows down and back. Squeeze lats at the bottom. Control the return.",
        setup:
          "Set one or both pulleys to the highest position (top hole). Attach the lat pulldown bar. Kneel or sit on a low bench to create a vertical pull angle.",
      },
      {
        name: "Single-Arm Cable Row",
        sets: "2",
        reps: "8–12 each arm",
        video: "/videos/Cable Seated Row.mp4",
        description:
          "Pull one handle toward your hip, rotating slightly. Squeeze your lat and mid-back. Keep your torso stable — avoid excessive twisting. Alternate arms.",
        setup:
          "Set one pulley to belly-button height (hole 6–8). Use a D-handle. Stand or place a bench facing the stack. Work one arm at a time.",
      },
      {
        name: "Straight-Arm Pulldown",
        sets: "2",
        reps: "10–15",
        video: "/videos/Cable Pulldown.mp4",
        description:
          "Face the stack with arms extended overhead, slight bend in elbows. Pull the bar or rope down to your thighs in an arc, keeping arms nearly straight. Squeeze lats hard at the bottom. Great lat isolation exercise.",
        setup:
          "Set one pulley to the highest position (top hole). Attach a straight bar or rope. Stand facing the stack, step back slightly. Keep arms almost straight throughout.",
      },
      {
        name: "Cable Bicep Curl",
        sets: "2",
        reps: "8–12",
        video: "/videos/Cable Curl.mp4",
        description:
          "Curl from the low pulley, squeezing biceps at the top. Keep elbows pinned. Lower with a 2–3 second negative.",
        setup:
          "Set one pulley to the lowest position (hole 1–2). Attach straight bar or D-handles. Stand facing the stack.",
      },
      {
        name: "Hammer Curl (Rope)",
        sets: "2",
        reps: "8–12",
        video: null,
        description:
          "Use the rope from a low pulley with neutral grip (thumbs up). Curl and squeeze at the top. Targets brachialis and forearms alongside biceps.",
        setup:
          "Set one pulley to the lowest position (hole 1–2). Attach the rope. Stand facing the stack. Grip each rope end with thumbs up.",
      },
    ],
  },
];

export function getDayBySlug(slug: string): TrainingDay | undefined {
  return days.find((d) => d.slug === slug);
}
