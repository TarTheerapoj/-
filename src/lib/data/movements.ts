// ─────────────────────────────────────────────────────────────────────────────
// CrossFit Movement Library — Data Model & Seed Data
// ─────────────────────────────────────────────────────────────────────────────

export type MovementCategory =
  | "gymnastics"
  | "weightlifting"
  | "monostructural";

export type MovementPattern =
  | "squat"
  | "hinge"
  | "push"
  | "pull"
  | "jump"
  | "carry"
  | "cyclical"
  | "inversion"
  | "rotation";

export type DifficultyLevel = 1 | 2 | 3 | 4 | 5;

export const DIFFICULTY_LABEL: Record<DifficultyLevel, string> = {
  1: "พื้นฐาน",
  2: "เริ่มต้น",
  3: "กลาง",
  4: "ก้าวหน้า",
  5: "ระดับสูง",
};

export const CATEGORY_LABEL: Record<MovementCategory, string> = {
  gymnastics:    "Gymnastics",
  weightlifting: "Weightlifting",
  monostructural:"Monostructural",
};

export const CATEGORY_COLOR: Record<MovementCategory, string> = {
  gymnastics:    "#3b82f6",
  weightlifting: "#f59e0b",
  monostructural:"#22c55e",
};

export interface MovementCatalogEntry {
  slug: string;
  name: string;
  category: MovementCategory;
  subcategory: string;
  group: string;
  subgroup: string;
  equipment: string[];
  difficulty: DifficultyLevel;
  youtubeId?: string;
}

export interface Movement extends MovementCatalogEntry {
  id: string;
  nameTH: string;
  tags: string[];
  patterns: MovementPattern[];
  shortDesc: string;
  whyMatters: string;
  prerequisites: string[];
  regressions: string[];
  progressions: string[];
  related: string[];
  faults: string[];
  cues: string[];
  mobilityNeeds: string[];
  strengthNeeds: string[];
  beginnerNote: string;
  scalingNote: string;
  safetyNote?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// SEED DATA — 15 Movements
// Chain: ring-row → strict-pull-up → kipping-pull-up → chest-to-bar
//        air-squat → front-squat → overhead-squat
//        push-up → handstand-push-up
//        kipping-swing → toes-to-bar
//        power-clean → squat-clean
//        power-snatch → squat-snatch
//        + burpee, double-under
// ─────────────────────────────────────────────────────────────────────────────

export const MOVEMENTS: Movement[] = [
  // ── FUNCTIONAL BODYWEIGHT ──────────────────────────────────────────────────

  {
    id: "m001",
    slug: "air-squat",
    name: "Air Squat",
    nameTH: "สควอทน้ำหนักตัว",
    youtubeId: "C_VtOYc6j5c",
    category: "gymnastics",
    subcategory: "Lower Body & Plyometrics",
    group: "Squatting",
    subgroup: "",
    tags: ["no equipment", "foundational", "lower body", "bilateral"],
    equipment: [],
    difficulty: 1,
    patterns: ["squat"],
    shortDesc:
      "ท่าสควอทพื้นฐานที่สุดในทุกกีฬา เป็นรากฐานของ Front Squat, Back Squat และ Overhead Squat ทั้งหมด",
    whyMatters:
      "CrossFit ใช้ท่า squat ในเกือบทุก workout — clean, snatch, thruster ล้วนต้องการ squat mechanics ที่ดี Air Squat ที่ถูกต้องคือสิ่งแรกที่ต้องทำให้ได้",
    prerequisites: [],
    regressions: [],
    progressions: ["front-squat", "overhead-squat"],
    related: ["burpee", "front-squat"],
    faults: [
      "เข่าพับเข้าด้านใน (knee cave)",
      "ส้นเท้าลอยขณะนั่งลง",
      "หลังงอไปข้างหน้า (forward lean มากเกินไป)",
      "ไม่นั่งลึกถึง hip crease below knee",
    ],
    cues: [
      "กางเข่าออก ให้เข่าตามแนวนิ้วเท้า",
      "น้ำหนักอยู่ที่ส้นเท้า — ยกนิ้วเท้าได้ตลอดเวลา",
      "อก up ตลอดการเคลื่อนไหว",
      "นั่งลงลึกจนสะโพกต่ำกว่าเข่า",
    ],
    mobilityNeeds: ["ankle dorsiflexion", "hip flexion", "thoracic extension"],
    strengthNeeds: ["quad", "glute", "core stability"],
    beginnerNote:
      "ถ้ายังทำไม่ได้หรือส้นเท้าลอย ให้วางแผ่นรองใต้ส้นเท้า หรือฝึกกับ box squat ก่อน นั่งลงบน box แล้วยืนขึ้น",
    scalingNote: "Box Squat (กำหนดความลึก), Goblet Squat ถือ KB ช่วย counterbalance",
  },

  {
    id: "m002",
    slug: "front-squat",
    name: "Front Squat",
    nameTH: "ฟรอนต์สควอท",
    youtubeId: "uYumuL_G_V0",
    category: "weightlifting",
    subcategory: "Barbell",
    group: "Powerlifting & Strength",
    subgroup: "Squat",
    tags: ["barbell", "lower body", "rack position", "bilateral"],
    equipment: ["barbell", "rack"],
    difficulty: 2,
    patterns: ["squat"],
    shortDesc:
      "Squat ที่บาร์อยู่ด้านหน้า ต้องการ thoracic mobility และ rack position ที่แข็งแกร่ง — เป็นรากฐานของ Clean",
    whyMatters:
      "ทุกครั้งที่ catch clean คือ front squat หากไม่มี front squat ที่ดี clean จะล้มเหลวเสมอ",
    prerequisites: ["air-squat"],
    regressions: ["air-squat"],
    progressions: ["overhead-squat"],
    related: ["squat-clean", "thruster"],
    faults: [
      "ข้อศอกหล่น ทำให้บาร์หน้าตก",
      "Forward lean มากเกินไป",
      "เข่าพับเข้า",
      "ส้นเท้าลอย",
    ],
    cues: [
      "ข้อศอกขึ้นสูง — fingertip grip ไม่ต้องกำมือเต็ม",
      "อกออก ไหล่ขึ้น",
      "เข่ากางออกตลอด descent",
    ],
    mobilityNeeds: ["wrist extension", "thoracic extension", "ankle dorsiflexion", "hip flexion"],
    strengthNeeds: ["quad dominant", "upper back", "core"],
    beginnerNote:
      "ถ้า rack position ยังไม่ได้ ให้ฝึก wrist mobility + ใช้ cross-arm grip ก่อน หรือใช้ KB goblet squat แทน",
    scalingNote: "Goblet Squat, Zercher Squat เป็น stepping stone ก่อน barbell front squat",
  },

  {
    id: "m003",
    slug: "overhead-squat",
    name: "Overhead Squat",
    nameTH: "โอเวอร์เฮดสควอท",
    youtubeId: "RD_vUnqwqqI",
    category: "weightlifting",
    subcategory: "Barbell",
    group: "Powerlifting & Strength",
    subgroup: "Squat",
    tags: ["barbell", "overhead", "stability", "advanced", "bilateral"],
    equipment: ["barbell"],
    difficulty: 4,
    patterns: ["squat", "push"],
    shortDesc:
      "ท่าสควอทที่บาร์อยู่เหนือหัว ต้องการ mobility, stability และ strength พร้อมกันทุกส่วน เป็น king of all squats",
    whyMatters:
      "OHS เปิดเผย weakness ทุกอย่างในร่างกาย — mobility เข่า, สะโพก, shoulder, thoracic คือ base ของ snatch",
    prerequisites: ["front-squat", "air-squat"],
    regressions: ["front-squat", "air-squat"],
    progressions: ["squat-snatch"],
    related: ["squat-snatch", "push-press"],
    faults: [
      "บาร์หน้าหรือหลังเส้น midline",
      "Shoulder shrug ลง (ต้อง active elevation)",
      "Torso ล้มไปข้างหน้า",
      "เข่าพับเข้า",
    ],
    cues: [
      "ดันบาร์ขึ้นหาเพดาน ตลอดเวลา",
      "หมุน armpit ออกข้างหน้า (external rotation)",
      "Sit into the squat — อย่า forward lean",
    ],
    mobilityNeeds: ["thoracic extension", "shoulder external rotation", "ankle dorsiflexion", "hip flexion"],
    strengthNeeds: ["shoulder stability", "lat", "core", "quad"],
    beginnerNote:
      "เริ่มด้วย PVC pipe หรือ dowel ก่อนบาร์จริง ฝึก lat stretch, ankle mob และ thoracic rotation ทุกวัน",
    scalingNote: "PVC OHS, Broomstick OHS — อย่าใส่น้ำหนักจนกว่า form จะ solid",
    safetyNote: "หาก shoulder impingement หรือเจ็บ wrist ให้หยุดและปรึกษาโค้ช ก่อนใส่น้ำหนัก",
  },

  // ── GYMNASTICS — PUSH ──────────────────────────────────────────────────────

  {
    id: "m004",
    slug: "push-up",
    name: "Push-Up",
    nameTH: "วิดพื้น",
    youtubeId: "IODxDxX7oi4",
    category: "gymnastics",
    subcategory: "Upper Body - Pushing",
    group: "Horizontal Push",
    subgroup: "Push-up",
    tags: ["no equipment", "foundational", "push", "upper body"],
    equipment: [],
    difficulty: 1,
    patterns: ["push"],
    shortDesc:
      "ท่า push พื้นฐาน ต้องการ plank position ที่แข็งแรง — เป็น prerequisite ของ HSPU และ ring push-up",
    whyMatters:
      "CrossFit Open มักมี push-up ใน scaled versions และเป็น base ของ pressing strength ทั้งหมด",
    prerequisites: [],
    regressions: [],
    progressions: ["handstand-push-up"],
    related: ["handstand-push-up", "burpee"],
    faults: [
      "สะโพกยกขึ้น (pike position แทน plank)",
      "สะโพกหย่อนลง (sagging hips)",
      "ข้อศอกบานออกมากเกินไป",
      "ไม่ลงจนอกแตะพื้น",
    ],
    cues: [
      "Rigid plank ตลอด — ear, shoulder, hip, ankle อยู่แนวเดียว",
      "ข้อศอกชี้ไปข้างหลัง 45° ไม่ใช่ตั้งฉากกับลำตัว",
      "Chest touches floor — full range",
    ],
    mobilityNeeds: ["wrist extension", "shoulder flexion"],
    strengthNeeds: ["pec", "tricep", "anterior deltoid", "core"],
    beginnerNote:
      "ถ้ายังทำไม่ได้ ให้เริ่มด้วย elevated push-up (มือบน box หรือ bench) ค่อยๆ ลดความสูงลงเรื่อยๆ",
    scalingNote: "Elevated push-up → knee push-up (ไม่แนะนำระยะยาว เพราะ mechanics ต่างกัน)",
  },

  {
    id: "m005",
    slug: "handstand-push-up",
    name: "Handstand Push-Up (HSPU)",
    nameTH: "ยืนหัวด้วยมือแล้ววิดพื้น",
    youtubeId: "XPjzgHbxoMk",
    category: "gymnastics",
    subcategory: "Upper Body - Pushing",
    group: "Vertical Push",
    subgroup: "HSPU",
    tags: ["overhead", "inversion", "advanced", "wall"],
    equipment: ["wall"],
    difficulty: 4,
    patterns: ["push", "inversion"],
    shortDesc:
      "วิดพื้นในท่า handstand ติดผนัง — ต้องการ pressing strength, shoulder stability และ core control ขั้นสูง",
    whyMatters:
      "HSPU ปรากฏใน CrossFit Open ทุกปี เป็นตัวแบ่ง athlete level ที่ชัดเจน",
    prerequisites: ["push-up"],
    regressions: ["push-up"],
    progressions: [],
    related: ["push-up", "overhead-squat"],
    faults: [
      "Kipping มากเกินไปโดยไม่มี strict strength",
      "Head position ผิด — ควรมอง forward ไม่ใช่ floor",
      "ไม่ full lockout ด้านบน",
      "Hip ห่อเข้า (pike) แทน hollow body",
    ],
    cues: [
      "ฝึก strict ก่อนเสมอ",
      "มือห่างผนัง ~15-20cm",
      "Head ลงระหว่างมือ สร้าง tripod",
      "Press tall — shrug ears หนีไหล่",
    ],
    mobilityNeeds: ["shoulder flexion", "thoracic extension", "wrist extension"],
    strengthNeeds: ["deltoid", "tricep", "upper trap", "core"],
    beginnerNote:
      "เริ่มจาก Pike Push-Up, Box Pike Push-Up ก่อน แล้วค่อย wall walk + hold ก่อนทำ full HSPU",
    scalingNote: "Pike push-up → Box HSPU (เพิ่มความสูง box ทีละน้อย) → Wall HSPU strict → Kipping HSPU",
    safetyNote: "ฝึก strict HSPU ให้ได้อย่างน้อย 5 reps ก่อนเพิ่ม kipping ป้องกัน neck/shoulder injury",
  },

  // ── GYMNASTICS — PULL ──────────────────────────────────────────────────────

  {
    id: "m006",
    slug: "ring-row",
    name: "Ring Row",
    nameTH: "โรว์บนวงแหวน",
    youtubeId: "B-NeO3DF3ls",
    category: "gymnastics",
    subcategory: "Upper Body - Pulling",
    group: "Horizontal Pull",
    subgroup: "",
    tags: ["rings", "pull", "beginner", "upper body"],
    equipment: ["rings"],
    difficulty: 1,
    patterns: ["pull"],
    shortDesc:
      "Horizontal pull โดยใช้ gymnastics rings — เป็น stepping stone ที่ดีที่สุดสำหรับคนที่ยัง pull-up ไม่ได้",
    whyMatters:
      "Ring row สร้าง pulling strength และ scapular retraction ซึ่งจำเป็นต่อ pull-up mechanics",
    prerequisites: [],
    regressions: [],
    progressions: ["strict-pull-up"],
    related: ["strict-pull-up"],
    faults: [
      "Body ไม่ตรง — sagging hips",
      "ไม่ pull rings ถึงอก",
      "ข้อศอกบานออกมากเกินไป",
    ],
    cues: [
      "ยิ่ง body เอียงแนวราบมาก ยิ่งยาก — ปรับ difficulty ด้วย foot position",
      "Pull rings ถึงอก ข้อศอกชี้ไปด้านหลัง",
      "Squeeze shoulder blades ที่จุดสูงสุด",
    ],
    mobilityNeeds: ["shoulder extension"],
    strengthNeeds: ["lat", "rhomboid", "bicep", "rear deltoid"],
    beginnerNote: "เริ่มด้วย foot อยู่ด้านหน้า body ตั้งตรงขึ้น (ง่ายกว่า) ค่อยๆ เอียง body ลงเรื่อยๆ",
    scalingNote: "ปรับ angle — ยิ่งนอน horizontal ยิ่งยาก เหมาะสำหรับทุก level",
  },

  {
    id: "m007",
    slug: "strict-pull-up",
    name: "Strict Pull-Up",
    nameTH: "พูลอัพแบบเส้นตรง (ไม่แกว่ง)",
    youtubeId: "eGo4IYlbE5g",
    category: "gymnastics",
    subcategory: "Upper Body - Pulling",
    group: "Vertical Pull",
    subgroup: "Pull-up",
    tags: ["pull-up bar", "strict", "upper body", "pull"],
    equipment: ["pull-up bar"],
    difficulty: 2,
    patterns: ["pull"],
    shortDesc:
      "Pull-up แบบ strict — ไม่มี kip หรือ swing ต้องการ pulling strength จริงๆ เป็น prerequisite ของ kipping pull-up",
    whyMatters:
      "Strict pull-up คือ foundation ของ gymnastic pulling ทั้งหมด คนที่ไม่มี strict pull-up แต่ kip ได้ คือกำลังสร้างความเสี่ยงให้ shoulder",
    prerequisites: ["ring-row"],
    regressions: ["ring-row"],
    progressions: ["kipping-pull-up", "chest-to-bar"],
    related: ["ring-row", "kipping-pull-up"],
    faults: [
      "ใช้ kip แอบ",
      "ไม่ full lockout ด้านล่าง (dead hang)",
      "Chin ไม่ข้ามบาร์",
      "Shrug ไหล่ขึ้นหาหู (ควร depress scapula ก่อน pull)",
    ],
    cues: [
      "เริ่มจาก dead hang จริงๆ — ไหล่ยืดออกเต็มที่",
      "Pack the shoulder ก่อน pull — depress และ retract",
      "Pull elbows down to pockets",
      "Chin clears the bar",
    ],
    mobilityNeeds: ["shoulder flexion", "lat lengthening"],
    strengthNeeds: ["lat", "bicep", "rear deltoid", "core"],
    beginnerNote:
      "ถ้ายัง strict pull-up ไม่ได้ ให้ฝึก ring row + banded pull-up + eccentric pull-up (ขึ้น box แล้วค่อยๆ ลงช้าๆ 5 วินาที)",
    scalingNote: "Band-assisted pull-up, Jumping pull-up with slow eccentric, Ring row",
  },

  {
    id: "m008",
    slug: "kipping-pull-up",
    name: "Kipping Pull-Up",
    nameTH: "พูลอัพแบบแกว่ง (Kipping)",
    youtubeId: "XpB-3HsHOJ8",
    category: "gymnastics",
    subcategory: "Upper Body - Pulling",
    group: "Vertical Pull",
    subgroup: "Pull-up",
    tags: ["pull-up bar", "kipping", "gymnastics", "open"],
    equipment: ["pull-up bar"],
    difficulty: 3,
    patterns: ["pull"],
    shortDesc:
      "Pull-up ที่ใช้ hip drive และ kipping swing ช่วย — ให้ทำได้จำนวนมากขึ้นต่อเนื่อง แต่ต้องมี strict pull-up ก่อน",
    whyMatters:
      "Kipping pull-up ปรากฏเกือบทุก Open และ WOD รูปแบบ kipping ช่วยเพิ่ม metabolic demand และ rep count",
    prerequisites: ["strict-pull-up"],
    regressions: ["strict-pull-up"],
    progressions: ["chest-to-bar"],
    related: ["strict-pull-up", "chest-to-bar", "toes-to-bar"],
    faults: [
      "ทำโดยไม่มี strict pull-up — เสี่ยง shoulder injury",
      "Kip swing ไม่ smooth — รีบ pull ก่อน swing เต็มที่",
      "ไม่ full extension ที่ด้านล่าง",
      "Landing จาก kip แรงเกินไป",
    ],
    cues: [
      "Arch → Hollow → Arch — kip timing คือทุกอย่าง",
      "Hip drive ขึ้นก่อน แล้ว pull",
      "Release บาร์ลงสู่ full hang ระหว่าง reps",
    ],
    mobilityNeeds: ["shoulder flexion", "thoracic extension"],
    strengthNeeds: ["lat", "core", "hip flexor"],
    beginnerNote:
      "ต้องมี strict pull-up อย่างน้อย 3-5 reps ก่อนเริ่ม kip ฝึก hollow/arch swing บนบาร์ก่อนเพิ่ม pull",
    scalingNote: "Band-assisted kipping, Ring row + jumping pull-up",
    safetyNote: "ห้าม kip ก่อนมี strict base — shoulder labrum เสียหายได้ง่ายมาก",
  },

  {
    id: "m009",
    slug: "chest-to-bar",
    name: "Chest-to-Bar Pull-Up",
    nameTH: "พูลอัพให้อกแตะบาร์",
    youtubeId: "ao1_fZBIlME",
    category: "gymnastics",
    subcategory: "Upper Body - Pulling",
    group: "Vertical Pull",
    subgroup: "Chest-to-Bar",
    tags: ["pull-up bar", "advanced", "gymnastics", "open"],
    equipment: ["pull-up bar"],
    difficulty: 4,
    patterns: ["pull"],
    shortDesc:
      "Pull-up ที่ต้องดึงขึ้นสูงจนอกแตะบาร์ — ต้องการ lat strength และ kipping mechanics ที่แม่นยำมากขึ้น",
    whyMatters:
      "C2B เป็น movement ที่แบ่ง intermediate กับ advanced อย่างชัดเจนใน CrossFit Open",
    prerequisites: ["kipping-pull-up", "strict-pull-up"],
    regressions: ["kipping-pull-up"],
    progressions: [],
    related: ["kipping-pull-up", "bar-muscle-up"],
    faults: [
      "Pull ถึงแค่ chin ไม่ถึงอก",
      "Kip swing ไม่แรงพอ",
      "Elbow flare ออกแทนที่จะ pull ลง",
    ],
    cues: [
      "Aggressive hip drive — ส่ง hips ขึ้นหาบาร์",
      "Pull elbows ลงและออก — ให้อกนำ",
      "Chest bone แตะบาร์ — ไม่ใช่แค่ไหล่",
    ],
    mobilityNeeds: ["shoulder flexion", "thoracic extension"],
    strengthNeeds: ["lat", "lower trap", "core", "hip flexor"],
    beginnerNote:
      "ต้องมี kipping pull-up อย่างน้อย 10 reps unbroken ก่อน ฝึก high pull (pull ให้สูงมากกว่าเดิม) ทีละน้อย",
    scalingNote: "Kipping pull-up, Jumping C2B with slow eccentric",
  },

  {
    id: "m010",
    slug: "toes-to-bar",
    name: "Toes-to-Bar",
    nameTH: "ยกขาแตะบาร์",
    youtubeId: "_03pCKOv4l4",
    category: "gymnastics",
    subcategory: "Midline & Trunk",
    group: "Hanging",
    subgroup: "",
    tags: ["pull-up bar", "core", "gymnastics", "hip flexor"],
    equipment: ["pull-up bar"],
    difficulty: 3,
    patterns: ["pull", "rotation"],
    shortDesc:
      "แขวนบาร์แล้วยกขาขึ้นแตะบาร์ — ต้องการ core compression และ shoulder stability สูง",
    whyMatters:
      "TTB ปรากฏบ่อยใน Open และ WODs ทดสอบ hip flexor strength, core compression และ kipping coordination",
    prerequisites: ["kipping-pull-up"],
    regressions: ["hanging-knee-raise"],
    progressions: [],
    related: ["kipping-pull-up", "knees-to-elbow"],
    faults: [
      "ขา swing แต่ core ไม่ engaged — ใช้ momentum ล้วน",
      "ไม่ทำ full kip cycle — toes ไม่ถึงบาร์",
      "ไม่ return กลับ full extension ระหว่าง reps",
    ],
    cues: [
      "Arch → Hollow → compress — เหมือน kip แต่เพิ่ม hip flexion",
      "Pull ไหล่ลง (scapular depression) ขณะยกขา",
      "ปลายเท้าแตะบาร์ — ไม่ใช่แค่ส้นเท้า",
    ],
    mobilityNeeds: ["hamstring flexibility", "shoulder flexion", "thoracic extension"],
    strengthNeeds: ["hip flexor", "core compression", "lat", "grip"],
    beginnerNote:
      "เริ่มจาก hanging knee raise ก่อน ฝึก hollow body hold บนพื้น แล้วค่อยขยับไป knees-to-elbow และ TTB",
    scalingNote: "Hanging knee raise, Knees-to-elbow, Single-leg TTB",
  },

  // ── GYMNASTICS — MONOSTRUCTURAL ─────────────────────────────────────────────

  {
    id: "m011",
    slug: "burpee",
    name: "Burpee",
    nameTH: "เบอร์พี",
    youtubeId: "dZgVxmf6jkA",
    category: "gymnastics",
    subcategory: "Lower Body & Plyometrics",
    group: "Burpee",
    subgroup: "",
    tags: ["no equipment", "foundational", "conditioning", "full body"],
    equipment: [],
    difficulty: 1,
    patterns: ["push", "jump"],
    shortDesc:
      "ลงพื้น push-up แล้วกระโดดขึ้น — เป็นท่า conditioning พื้นฐานที่ทดสอบ endurance และ coordination",
    whyMatters:
      "Burpee ปรากฏใน CrossFit Open ทุกปี เป็น equalizer ที่ทุก level ต้องทำ ฝึก aerobic capacity + movement efficiency",
    prerequisites: ["push-up", "air-squat"],
    regressions: [],
    progressions: [],
    related: ["push-up", "air-squat"],
    faults: [
      "ไม่ full extension ที่จุดกระโดด",
      "landing จากกระโดดด้วยแรงกระแทกสูง",
      "ไม่ hip extension เต็มที่ขณะกระโดด",
    ],
    cues: [
      "ลงนอน chest แตะพื้น — อย่า dive bomb",
      "กระโดดขึ้น arms overhead — full extension",
      "clap หรือ jump over target ตาม standard ของ WOD",
    ],
    mobilityNeeds: ["hip flexion", "ankle dorsiflexion"],
    strengthNeeds: ["full body conditioning"],
    beginnerNote:
      "ถ้า push-up ยังไม่ได้ ให้ step down แทน jump down และ step up แทน jump up",
    scalingNote: "No push-up burpee (แค่ squat thrust), Step-over แทน jump-over",
  },

  // ── MONOSTRUCTURAL ──────────────────────────────────────────────────────────

  {
    id: "m012",
    slug: "double-under",
    name: "Double-Under",
    nameTH: "กระโดดเชือกสองรอบ",
    youtubeId: "82igH5lNyIY",
    category: "monostructural",
    subcategory: "Skipping",
    group: "",
    subgroup: "",
    tags: ["jump rope", "coordination", "conditioning"],
    equipment: ["jump rope"],
    difficulty: 3,
    patterns: ["jump", "cyclical"],
    shortDesc:
      "กระโดดเชือก 1 jump แต่เชือกผ่านใต้เท้า 2 รอบ — ต้องการ timing, wrist speed และ jump height ที่แม่นยำ",
    whyMatters:
      "Double-under ปรากฏใน CrossFit Open บ่อยมาก เป็น skill ที่ฝึกได้ด้วยตัวเองและ payoff สูงมาก",
    prerequisites: [],
    regressions: ["single-under"],
    progressions: [],
    related: [],
    faults: [
      "กระโดดสูงมากเกินไป — เหมือนกระโดด hurdle",
      "งอเข่าเยอะ — donkey kick",
      "หมุน arms จาก shoulder แทน wrist",
      "ดูเชือกแทนดูข้างหน้า",
    ],
    cues: [
      "กระโดดสูงแค่พอให้เชือกผ่าน 2 รอบ — ประมาณ 1 นิ้วเหนือพื้น",
      "Wrist speed คือกุญแจ — ไม่ใช่ arm circles",
      "ตัวตรง core engaged ตลอด",
      "ดูตรงไปข้างหน้า ไม่ก้มดูเชือก",
    ],
    mobilityNeeds: ["ankle plantar flexion"],
    strengthNeeds: ["calf endurance", "wrist endurance"],
    beginnerNote:
      "ฝึก single-under ให้ smooth ก่อน แล้วค่อย attempt DU 1 ครั้ง หยุด แล้วซ้ำ ใช้ rope ที่ความยาวถูกต้อง (ยืนกลางเชือก จับปลายขึ้นถึงรักแร้)",
    scalingNote: "Single-under x3 แทน DU x1, Penguin jump (2 slaps ต้นขาต่อ jump)",
  },

  // ── WEIGHTLIFTING ───────────────────────────────────────────────────────────

  {
    id: "m013",
    slug: "power-clean",
    name: "Power Clean",
    nameTH: "เพาเวอร์คลีน",
    youtubeId: "_IiAMEY4IL8",
    category: "weightlifting",
    subcategory: "Barbell",
    group: "Olympic Lifts",
    subgroup: "Clean",
    tags: ["barbell", "hinge", "pull", "olympic", "hip extension"],
    equipment: ["barbell", "bumper plates"],
    difficulty: 3,
    patterns: ["hinge", "pull", "squat"],
    shortDesc:
      "Clean ที่รับบาร์ในท่า partial squat (สะโพกเหนือเข่า) — สอน hip extension และ catch mechanics ก่อนไป squat clean",
    whyMatters:
      "Power clean ปรากฏใน Open บ่อย เป็น gateway movement สู่ Olympic lifting ทั้งหมด",
    prerequisites: ["front-squat", "air-squat"],
    regressions: ["deadlift", "hang-power-clean"],
    progressions: ["squat-clean"],
    related: ["squat-clean", "power-snatch"],
    faults: [
      "Bar path ออกห่างจากตัว (bar swing away)",
      "Early arm pull — arms bend ก่อน hip extension",
      "ไม่ triple extension — เข่า, สะโพก, ปลายเท้า",
      "Elbows ช้า — catch ไม่ทัน",
    ],
    cues: [
      "Bar ติดตัวตลอด — legs kick bar up",
      "Jump and shrug — ก่อน pull arms",
      "Elbows fast through — rack position ทันที",
      "Receive ด้วย athletic stance",
    ],
    mobilityNeeds: ["hip flexion", "wrist extension", "thoracic extension"],
    strengthNeeds: ["posterior chain", "trap", "lat", "quad"],
    beginnerNote:
      "เริ่มจาก hang power clean (บาร์เริ่มที่ knee) ก่อน เพื่อ isolate hip extension โดยไม่ต้องกังวล bar path ตั้งแต่พื้น",
    scalingNote: "DB power clean, Hang power clean, Muscle clean",
    safetyNote: "ฝึกกับโค้ชหรือดู video อย่างน้อยก่อน attempt น้ำหนักหนัก",
  },

  {
    id: "m014",
    slug: "squat-clean",
    name: "Squat Clean (Clean)",
    nameTH: "สควอทคลีน",
    youtubeId: "EKRiW9Yt3ps",
    category: "weightlifting",
    subcategory: "Barbell",
    group: "Olympic Lifts",
    subgroup: "Clean",
    tags: ["barbell", "olympic", "advanced", "full body"],
    equipment: ["barbell", "bumper plates"],
    difficulty: 4,
    patterns: ["hinge", "pull", "squat"],
    shortDesc:
      "Full clean — รับบาร์ใน full squat position ให้ได้น้ำหนักมากที่สุด ต้องการ mobility, timing และ strength พร้อมกัน",
    whyMatters:
      "Squat clean คือ foundational movement ของ CrossFit ระดับสูง ใช้ใน Open, Regionals และ Games",
    prerequisites: ["power-clean", "front-squat"],
    regressions: ["power-clean"],
    progressions: [],
    related: ["power-clean", "clean-and-jerk", "front-squat"],
    faults: [
      "Soft catch — ไม่ squat ลึกพอ",
      "Bar path ออกห่าง",
      "Elbow ช้า — ทำให้ forward lean",
      "ลุกขึ้นจาก catch ไม่ได้ (ขาอ่อน)",
    ],
    cues: [
      "ทุกอย่างเหมือน power clean แต่ squat ลงรับ",
      "Elbows fast — rack ก่อนถึง bottom",
      "Stand up through heels",
    ],
    mobilityNeeds: ["full hip flexion", "wrist extension", "thoracic extension", "ankle dorsiflexion"],
    strengthNeeds: ["full posterior chain", "quad", "upper back"],
    beginnerNote:
      "ต้องมี power clean ที่ดีก่อน และ front squat ที่ลึกได้ก่อน ฝึก squat clean + pause ที่ catch เพื่อ build confidence",
    scalingNote: "Power clean แทน squat clean ได้เสมอใน WODs",
    safetyNote: "ห้ามฝึกน้ำหนักหนักโดยไม่มีโค้ช — wrist และ back เสี่ยงสูงถ้า form ผิด",
  },

  {
    id: "m015",
    slug: "power-snatch",
    name: "Power Snatch",
    nameTH: "เพาเวอร์สแนทช์",
    youtubeId: "tuOiNeTvLJs",
    category: "weightlifting",
    subcategory: "Barbell",
    group: "Olympic Lifts",
    subgroup: "Snatch",
    tags: ["barbell", "olympic", "overhead", "hip extension", "advanced"],
    equipment: ["barbell", "bumper plates"],
    difficulty: 4,
    patterns: ["hinge", "pull", "push"],
    shortDesc:
      "Snatch ที่รับบาร์ overhead ใน partial squat — ต้องการ overhead stability และ hip explosion สูง",
    whyMatters:
      "Snatch ปรากฏใน Open และ testing ทั่วไป วัด full-body power, mobility และ coordination พร้อมกัน",
    prerequisites: ["overhead-squat", "power-clean"],
    regressions: ["overhead-squat", "snatch-balance"],
    progressions: ["squat-snatch"],
    related: ["squat-snatch", "overhead-squat", "power-clean"],
    faults: [
      "Bar path ออกห่างมาก (bar swing)",
      "Receiving position ไม่ stable — arm bend",
      "Early arm pull",
      "ไม่ triple extension ก่อน pull overhead",
    ],
    cues: [
      "Wide grip — คำนวณ hook grip width: hang bar ใน hip crease",
      "Bar ติดตัว — drag up the body",
      "Punch up to receive — ไม่ใช่ pull overhead",
      "Active shoulder ตลอดใน overhead position",
    ],
    mobilityNeeds: ["shoulder external rotation", "thoracic extension", "hip flexion", "ankle dorsiflexion"],
    strengthNeeds: ["posterior chain", "shoulder stability", "lat", "trap"],
    beginnerNote:
      "เริ่มจาก snatch balance และ overhead squat ก่อน เพื่อ build receiving position ก่อนเพิ่มน้ำหนักและ complexity",
    scalingNote: "DB snatch (1-arm), Hang power snatch, PVC snatch drills",
    safetyNote: "ท่า snatch เสี่ยงสูงสุดใน CrossFit ถ้า form ผิด ต้องฝึกกับโค้ชก่อนใส่น้ำหนักจริง",
  },

  // ── WALL BALL ─────────────────────────────────────────────────────────────
  {
    id: "m016",
    slug: "wall-ball",
    name: "Wall Ball Shot",
    nameTH: "วอลบอล",
    youtubeId: "fpUD0mcFp_0",
    category: "weightlifting",
    subcategory: "Odd Objects",
    group: "Medicine Ball",
    subgroup: "",
    tags: ["medicine ball", "foundational", "full body", "Open staple"],
    equipment: ["medicine ball", "target"],
    difficulty: 1,
    patterns: ["squat", "push"],
    shortDesc:
      "ท่า Thruster ในรูปแบบลูกบอล — นั่ง squat ลงแล้วโยนบอลขึ้นไปแตะเป้าหมายบนผนัง เป็นท่าที่ปรากฏใน CrossFit Open แทบทุกปี",
    whyMatters:
      "Wall Ball เป็น conditioning classic ของ CrossFit — ทดสอบทั้ง squat mechanics, timing, และ cardiovascular endurance พร้อมกัน เป็นท่าสำคัญใน 26.1",
    prerequisites: ["air-squat"],
    regressions: [],
    progressions: ["thruster"],
    related: ["air-squat", "thruster", "front-squat"],
    faults: [
      "นั่ง squat ไม่ลึกพอก่อนโยน (ลดพลังงาน)",
      "โยนบอลด้วยแขนอย่างเดียว ไม่ใช้ขา",
      "จับบอลสูงเกินไป ทำให้หลังก้ม",
      "หยุดพักรอบบอลตก แทนที่จะรักษา rhythm",
      "มองลงต่ำแทนที่จะมองเป้าหมาย",
    ],
    cues: [
      "Squat ลึกก่อน — hip crease ต่ำกว่า knee ทุกครั้ง",
      "Drive ด้วยขา — บอลลอยขึ้นเพราะขา ไม่ใช่แขน",
      "จับบอลที่ระดับคาง — เตรียม squat ทันที",
      "มองเป้าหมายตลอด — ไม่มองบอล",
    ],
    mobilityNeeds: ["ankle dorsiflexion", "thoracic extension", "shoulder flexion"],
    strengthNeeds: ["quad", "glute", "shoulder", "core"],
    beginnerNote:
      "ใช้ medicine ball น้ำหนักเบาก่อน และฝึก squat timing แยกก่อนจะโยนบอลจริง ฝึกช้าๆ ให้จังหวะ squat-drive-toss ชัดเจน",
    scalingNote: "ลดน้ำหนักบอล, ลดความสูงเป้าหมาย, Medicine Ball Clean แทน",
  },

  // ── BOX JUMP OVER ──────────────────────────────────────────────────────────
  {
    id: "m017",
    slug: "box-jump-over",
    name: "Box Jump Over",
    nameTH: "กระโดดข้ามกล่อง",
    youtubeId: "52QAqpzdtS0",
    category: "gymnastics",
    subcategory: "Lower Body & Plyometrics",
    group: "Jumping",
    subgroup: "",
    tags: ["box", "plyometric", "conditioning", "Open staple"],
    equipment: ["box"],
    difficulty: 2,
    patterns: ["jump"],
    shortDesc:
      "กระโดดขึ้นบนกล่องแล้วลงอีกด้านหนึ่ง ต่างจาก Box Jump ตรงที่ต้องข้ามฝ่าออกไป ใช้ใน Open 26.1",
    whyMatters:
      "Box Jump Over เป็นท่า conditioning ที่ทดสอบทั้ง power, coordination และ ความกล้า ถ้าทำ step-over ได้คล่อง จะประหยัดพลังงานได้มากในรอบหลัง",
    prerequisites: ["air-squat"],
    regressions: [],
    progressions: [],
    related: ["box-jump", "burpee-box-jump-over", "broad-jump"],
    faults: [
      "กระโดดสั้นเกินไป เท้าเกือบติดขอบกล่อง",
      "ลงไม่นิ่ม — เข่าล็อคขณะลง",
      "หยุดค้างบนกล่องนานเกินไปก่อนลง",
      "ก้าวเดียวข้ามแทนการกระโดดทั้งสองเท้า (ใน Rx)",
    ],
    cues: [
      "Two-foot takeoff — กระโดดพร้อมกันทั้งสองเท้า",
      "Soft landing — งอเข่ารับแรง ไม่ตกกระแทก",
      "มองเป้าหมายบนกล่อง ไม่มองเท้า",
      "Step down ถ้าเหนื่อย — ปลอดภัยกว่า jump down",
    ],
    mobilityNeeds: ["ankle dorsiflexion", "hip flexion"],
    strengthNeeds: ["quad", "glute", "calf", "core stability"],
    beginnerNote:
      "เริ่มจาก Box Step Over ก่อน — ก้าวขึ้นทีละข้างแล้วก้าวลง ไม่ต้องกระโดด ปลอดภัยและสร้าง confidence ก่อนพัฒนาเป็น jump",
    scalingNote: "Box Step Over (ก้าวขึ้นก้าวลง), ลดความสูงกล่อง",
  },

  // ── DUMBBELL SNATCH ────────────────────────────────────────────────────────
  {
    id: "m018",
    slug: "db-snatch",
    name: "Dumbbell Snatch",
    nameTH: "ดัมเบลสแนทช์",
    youtubeId: "qFTBjCgAlv0",
    category: "weightlifting",
    subcategory: "Dumbbell",
    group: "",
    subgroup: "",
    tags: ["dumbbell", "unilateral", "Open staple", "power"],
    equipment: ["dumbbell"],
    difficulty: 2,
    patterns: ["hinge", "push"],
    shortDesc:
      "ดึง dumbbell จากพื้นขึ้นเหนือศีรษะในท่าเดียว สลับมือทุกครั้ง เป็นท่าสำคัญใน Open 26.2 ทั้ง Rx, Scaled และ Foundations",
    whyMatters:
      "DB Snatch เป็นท่าที่ง่ายกว่า Barbell Snatch มาก แต่ยังสอน triple extension และ overhead stability — ฝึกทักษะ Olympic lifting แบบปลอดภัย",
    prerequisites: ["air-squat"],
    regressions: [],
    progressions: ["power-snatch"],
    related: ["power-snatch", "kb-swing", "thruster"],
    faults: [
      "ไม่ triple extension — ไม่ดึงสะโพกออกเต็มที่ก่อน punch up",
      "บิดลำตัวมากเกินไปขณะ snatch",
      "วางดัมเบลไม่ลงพื้นระหว่าง rep (ใน alternating)",
      "แขนงออกก่อน legs drive เสร็จ",
    ],
    cues: [
      "Hinge กดสะโพกกลับ — ดัมเบลใกล้ขา",
      "Explode สะโพก ก่อน pull แขน",
      "Punch up ตรง — ข้อศอกล็อคเหนือศีรษะ",
      "วางดัมเบลลงพื้นทุก rep — รักษา form",
    ],
    mobilityNeeds: ["shoulder flexion", "thoracic extension", "hip hinge mobility"],
    strengthNeeds: ["posterior chain", "shoulder stability", "lat", "core"],
    beginnerNote:
      "เริ่มน้ำหนักเบามากก่อน ฝึก hinge pattern แยกก่อน (KB swing ช่วยได้) จากนั้นค่อยเพิ่มความเร็วและน้ำหนัก",
    scalingNote: "ลดน้ำหนัก DB, Hang DB Snatch, KB Swing แทน",
  },

  // ── DUMBBELL WALKING LUNGE ─────────────────────────────────────────────────
  {
    id: "m019",
    slug: "db-walking-lunge",
    name: "DB Overhead Walking Lunge",
    nameTH: "ลันจ์เดินถือดัมเบลเหนือศีรษะ",
    youtubeId: "tXLqkO_S3PI",
    category: "weightlifting",
    subcategory: "Dumbbell",
    group: "",
    subgroup: "",
    tags: ["dumbbell", "unilateral", "overhead", "Open staple", "stability"],
    equipment: ["dumbbell"],
    difficulty: 3,
    patterns: ["squat", "carry"],
    shortDesc:
      "เดิน lunge พร้อมถือ dumbbell เหนือศีรษะ ทดสอบทั้ง shoulder stability, core stability และ unilateral leg strength ใน Open 26.2",
    whyMatters:
      "Overhead lunge เปิดโปงจุดอ่อนทุกอย่างพร้อมกัน — ถ้า shoulder ไม่แข็งแรง, thoracic mobility ไม่ดี หรือ core ไม่ stable จะเห็นทันที",
    prerequisites: ["walking-lunge", "push-up"],
    regressions: ["walking-lunge"],
    progressions: [],
    related: ["walking-lunge", "overhead-squat", "db-snatch"],
    faults: [
      "ดัมเบลเอียงหรือลอยไปข้างหน้า — shoulder ล้ม",
      "หน้าอกก้มตาม — thoracic mobility ไม่พอ",
      "ก้าวสั้นเกินไป — knee แตะพื้นไม่ถึง",
      "เดินคดเคี้ยว ไม่เป็นเส้นตรง",
    ],
    cues: [
      "Lock out ข้อศอก — แขนตรงสนิท",
      "Brace core ตลอด — อย่าให้หลังแอ่น",
      "ก้าวยาว — knee หน้าไม่เลยปลายเท้า",
      "ตาตรง — ช่วย balance และ shoulder alignment",
    ],
    mobilityNeeds: ["shoulder flexion", "thoracic extension", "hip flexor"],
    strengthNeeds: ["shoulder stability", "core", "quad", "glute"],
    beginnerNote:
      "เริ่มจาก Walking Lunge ไม่ถืออะไรก่อน จากนั้นถือ KB goblet style แล้วค่อยเพิ่มเป็น overhead เมื่อ shoulder พร้อม",
    scalingNote: "Walking Lunge ไม่ถืออะไร, Front Rack Lunge, ลดน้ำหนัก DB",
  },

  // ── BACK SQUAT ────────────────────────────────────────────────────────────
  {
    id: "m020",
    slug: "back-squat",
    name: "Back Squat",
    nameTH: "แบ็คสควอท",
    youtubeId: "ultWZbUMPL8",
    category: "weightlifting",
    subcategory: "Barbell",
    group: "Powerlifting & Strength",
    subgroup: "Squat",
    tags: ["barbell", "rack", "foundational", "strength", "lower body"],
    equipment: ["barbell", "rack"],
    difficulty: 2,
    patterns: ["squat"],
    shortDesc:
      "ท่า squat พื้นฐานของ powerlifting — บาร์อยู่บน trapezius ด้านหลัง เป็นท่าสร้าง leg strength มากที่สุดใน CrossFit",
    whyMatters:
      "Back Squat คือ foundation ของทุก squatting movement ใน CrossFit — Front Squat, Clean, Thruster ล้วนต้องการ squat mechanics ที่ดีเช่นกัน การ back squat แข็งแรงทำให้ทุกท่าดีขึ้น",
    prerequisites: ["air-squat"],
    regressions: ["air-squat", "goblet-squat"],
    progressions: ["front-squat", "thruster"],
    related: ["front-squat", "overhead-squat", "thruster", "air-squat"],
    faults: [
      "หัวเข่าพับเข้าด้านใน (valgus collapse) ขณะลุกขึ้น",
      "หลังล้มไปข้างหน้ามากเกินไป (excessive forward lean)",
      "ส้นเท้าลอยขณะนั่งลง",
      "นั่งไม่ลึกถึง parallel",
      "bar position เลื่อนจาก traps",
    ],
    cues: [
      "Bar อยู่บน traps — ไม่ใช่บนคอ",
      "กางเข่าออก — ตามแนวนิ้วเท้า",
      "อก up ตลอด — ไม่ให้หน้าอกก้ม",
      "Drive ขึ้นจากส้นเท้า — push the floor away",
    ],
    mobilityNeeds: ["ankle dorsiflexion", "hip flexion", "thoracic extension"],
    strengthNeeds: ["quad", "glute", "hamstring", "core", "upper back"],
    beginnerNote:
      "ฝึก Air Squat ให้ลึกและถูกต้องก่อนใส่ barbell เมื่อใส่บาร์แล้ว เริ่มน้ำหนักเบาและฝึกกับ rack ที่มี safety bar ป้องกัน",
    scalingNote: "Goblet Squat, Box Squat, Air Squat",
    safetyNote: "ต้องมี spotter หรือ safety bar เสมอเมื่อฝึก Back Squat หนัก ไม่ควรฝึก max effort โดยไม่มีคนช่วย",
  },

  // ── THRUSTER ──────────────────────────────────────────────────────────────
  {
    id: "m021",
    slug: "thruster",
    name: "Thruster",
    nameTH: "ทรัสเตอร์",
    youtubeId: "L219ltVEF0E",
    category: "weightlifting",
    subcategory: "Barbell",
    group: "Olympic Lifts",
    subgroup: "Complexes",
    tags: ["barbell", "full body", "conditioning", "foundational", "Open staple"],
    equipment: ["barbell"],
    difficulty: 3,
    patterns: ["squat", "push"],
    shortDesc:
      "Front Squat + Push Press รวมในท่าเดียว ใช้ momentum จากการลุกขึ้นของ squat ส่งบาร์ขึ้นเหนือศีรษะ — เป็นท่าที่อยู่ในทุก level ของ CrossFit",
    whyMatters:
      "Thruster ทดสอบ full-body coordination, power output และ metabolic capacity พร้อมกัน มักปรากฏใน Fran (21-15-9 Thrusters + Pull-ups) ซึ่งเป็น benchmark WOD สำคัญ",
    prerequisites: ["front-squat", "push-up"],
    regressions: ["front-squat", "wall-ball"],
    progressions: [],
    related: ["front-squat", "wall-ball", "db-thruster", "cluster"],
    faults: [
      "หยุดที่ด้านล่างแล้วค่อย press — ต้องเป็น continuous movement",
      "press ก่อน triple extension เสร็จ",
      "bar path ออกข้างหน้าแทนที่จะตรงขึ้น",
      "hip hinge ไม่พอ — ไม่นั่งลึกใน squat",
    ],
    cues: [
      "Squat ลึก — แล้ว drive ขึ้นต่อเนื่อง ไม่หยุด",
      "ใช้ momentum จากขา — ไม่ใช่กด press เอง",
      "Lock out แขน ข้อศอกตรงสนิทด้านบน",
      "บาร์ผ่านหน้าใบหน้า — ไม่ใช่หน้าหัว",
    ],
    mobilityNeeds: ["ankle dorsiflexion", "thoracic extension", "shoulder flexion", "wrist flexion"],
    strengthNeeds: ["quad", "glute", "shoulder", "tricep", "core"],
    beginnerNote:
      "เริ่มจาก Wall Ball Shot ก่อน — สอนจังหวะ squat-to-press เหมือนกัน แล้วค่อยเปลี่ยนมาใช้ barbell เมื่อ front rack position ดีแล้ว",
    scalingNote: "DB Thruster, Wall Ball, PVC Thruster, ลดน้ำหนัก",
  },

  // ── ROWING ────────────────────────────────────────────────────────────────
  {
    id: "m022",
    slug: "rowing",
    name: "Concept2 Rowing",
    nameTH: "พายเรือ (Rowing)",
    youtubeId: "zQ2-QFSAGoo",
    category: "monostructural",
    subcategory: "Rowing",
    group: "",
    subgroup: "",
    tags: ["rower", "conditioning", "full body", "low impact"],
    equipment: ["rower"],
    difficulty: 1,
    patterns: ["hinge", "pull"],
    shortDesc:
      "พายเรือบน Concept2 erg — ท่าที่ทดสอบทั้ง aerobic capacity และ technique พร้อมกัน ใช้ทั้งขา, core และแขนอย่างต่อเนื่อง",
    whyMatters:
      "Rowing เป็น full-body cardio ที่ไม่กระแทกข้อต่อ (low-impact) เหมาะสำหรับ warm-up, conditioning และ recovery เป็นส่วนหนึ่งของ CrossFit benchmark WODs หลายตัว",
    prerequisites: [],
    regressions: [],
    progressions: [],
    related: ["assault-bike", "ski-erg", "double-under"],
    faults: [
      "Sequence ผิด — ดึงแขนก่อนขาเหยียด (ควรเป็น legs → body → arms)",
      "หลังโค้งงอขณะดึง — ไม่ใช้ core bracing",
      "Slide กลับเร็วเกินไป — เสียจังหวะ recovery",
      "จับ handle แน่นเกินไป — เปลืองแรงแขนโดยใช่เหตุ",
      "Seat ไปชน heels ก่อนที่แขนจะ extend กลับ",
    ],
    cues: [
      "Legs first — ดันขาก่อน ไม่ใช้แขน",
      "Body lean back เล็กน้อย — ประมาณ 11 นาฬิกา",
      "Elbows ลงต่ำ — draw to lower ribs ไม่ใช่คาง",
      "Recovery ช้ากว่า drive — arms → body → legs กลับ",
    ],
    mobilityNeeds: ["hip hinge mobility", "ankle dorsiflexion", "thoracic extension"],
    strengthNeeds: ["quad", "glute", "hamstring", "core", "lat", "bicep"],
    beginnerNote:
      "ฝึก technique ก่อนความเร็ว — ลอง row 500m ช้าๆ โดยเน้น sequence ที่ถูกต้อง หลังจาก sequence ดีแล้วค่อยเพิ่ม intensity",
    scalingNote: "ลด pace/damper setting, ลดระยะทาง, BikeErg แทน",
  },

  // ── WALKING LUNGE ─────────────────────────────────────────────────────────
  {
    id: "m023",
    slug: "walking-lunge",
    name: "Walking Lunge",
    nameTH: "ลันจ์เดิน",
    youtubeId: "L8fvypPrzzs",
    category: "gymnastics",
    subcategory: "Lower Body & Plyometrics",
    group: "Lunging",
    subgroup: "",
    tags: ["no equipment", "foundational", "unilateral", "lower body"],
    equipment: [],
    difficulty: 1,
    patterns: ["squat"],
    shortDesc:
      "ก้าว lunge ไปข้างหน้าสลับขา — ท่า unilateral leg ที่พื้นฐานที่สุด ใช้เป็น prerequisite ของ Overhead Walking Lunge ใน Open 26.2",
    whyMatters:
      "Walking Lunge สร้าง unilateral strength และ balance ที่จำเป็นสำหรับ CrossFit — ถ้า lunge พื้นฐานไม่ดี การทำ Overhead Lunge หรือ DB Lunge จะยิ่งยากและเสี่ยง",
    prerequisites: [],
    regressions: [],
    progressions: ["db-walking-lunge", "jumping-lunge"],
    related: ["reverse-lunge", "db-walking-lunge", "air-squat"],
    faults: [
      "เข่าหน้าเลยปลายเท้าไปมาก",
      "ลำตัวเอนไปข้างหน้ามากเกินไป",
      "เข่าหลังแตะพื้นแรงเกินไป",
      "ก้าวสั้นเกินไป — ไม่ได้ stretch hip flexor หลัง",
    ],
    cues: [
      "Upright torso — หน้าอกตั้ง ไม่ก้ม",
      "เข่าหน้า 90° — ไม่เลยปลายนิ้วเท้า",
      "เข่าหลังต่ำ — เกือบแตะพื้น แต่ไม่ตกกระแทก",
      "Step ยาวพอ — ก้าวให้รู้สึก hip flexor ด้านหลังยืดออก",
    ],
    mobilityNeeds: ["hip flexor", "ankle dorsiflexion"],
    strengthNeeds: ["quad", "glute", "core stability"],
    beginnerNote:
      "ถ้า balance ยังไม่ดี ให้ฝึก Reverse Lunge (ก้าวถอยหลัง) แทนก่อน — ควบคุมได้ง่ายกว่า จากนั้นค่อยพัฒนาเป็น forward lunge",
    scalingNote: "Reverse Lunge, Stationary Lunge (ไม่เดิน), Goblet Lunge",
  },

  // ── KIPPING MUSCLE-UP ─────────────────────────────────────────────────────
  {
    id: "m024",
    slug: "kipping-muscle-up",
    name: "Kipping Muscle-Up",
    nameTH: "มัสเซิลอัพแบบแกว่ง",
    youtubeId: "Ves4UOvpBqQ",
    category: "gymnastics",
    subcategory: "Upper Body - Pulling",
    group: "Vertical Pull",
    subgroup: "Muscle-up",
    tags: ["rings", "pull-up bar", "advanced", "Open staple"],
    equipment: ["pull-up bar", "rings"],
    difficulty: 5,
    patterns: ["pull", "push"],
    shortDesc:
      "กระโดดขึ้นเหนือบาร์หรือ rings ด้วย kipping swing — ท่าที่รวม Pull-Up + Dip ในท่าเดียว เป็นท่า advanced ใน Open 26.2 Rx",
    whyMatters:
      "Muscle-Up คือจุดหมายของ gymnastics progression ใน CrossFit — ต้องการทั้ง pulling strength, transition skill และ timing ที่แม่นยำ ปรากฏใน Open ทุกปี",
    prerequisites: ["strict-pull-up", "kipping-pull-up", "strict-dip"],
    regressions: ["chest-to-bar", "strict-pull-up", "strict-dip"],
    progressions: [],
    related: ["kipping-pull-up", "chest-to-bar", "strict-muscle-up"],
    faults: [
      "Pull ก่อน kip swing ถึงจุดสูงสุด — timing ผิด",
      "ไม่ transition เหนือ bar/rings — ค้างใต้",
      "ข้อมือไม่หมุนผ่านท่า transition (rings)",
      "ออก false grip ก่อน muscle-up เสร็จ (rings)",
      "Dip ไม่ lock out ด้านบน",
    ],
    cues: [
      "Aggressive kip — swing ให้ใหญ่ก่อน pull",
      "Pull early — เริ่ม pull ขณะ feet สูงสุด",
      "Hips to bar — ดึงสะโพกขึ้นก่อน chest",
      "Turn wrists over — transition เหนือ bar",
      "Lock out ด้านบน — แขนตรงสนิท",
    ],
    mobilityNeeds: ["shoulder flexion", "shoulder external rotation", "thoracic extension"],
    strengthNeeds: ["lat", "bicep", "tricep", "shoulder stability", "core"],
    beginnerNote:
      "ต้องทำ Strict Pull-Up ได้ 5+ reps และ Strict Dip ได้ 5+ reps ก่อน จากนั้นฝึก Chest-to-Bar ให้ชำนาญ แล้วค่อยเรียน transition แยกบน low rings",
    scalingNote: "Chest-to-Bar Pull-Up, Jumping Muscle-Up (low rings), Band-assisted Muscle-Up",
    safetyNote: "อย่าพยายาม kipping muscle-up โดยไม่มี strict foundation — เสี่ยง shoulder injury สูง",
  },

  // ── BOX JUMP ──────────────────────────────────────────────────────────────
  {
    id: "m025",
    slug: "box-jump",
    name: "Box Jump",
    nameTH: "กระโดดขึ้นกล่อง",
    youtubeId: "52QAqpzdtS0",
    category: "gymnastics",
    subcategory: "Lower Body & Plyometrics",
    group: "Jumping",
    subgroup: "",
    tags: ["box", "plyometric", "power", "foundational"],
    equipment: ["box"],
    difficulty: 2,
    patterns: ["jump"],
    shortDesc:
      "กระโดดสองเท้าขึ้นบนกล่องและยืนตัวตรง ท่า plyometric พื้นฐานที่สอน explosive power และ landing mechanics",
    whyMatters:
      "Box Jump สร้าง lower body power ที่ใช้ใน clean, snatch และทุก athletic movement — ถ้ากระโดดและลงนิ่มได้ดี แสดงว่า fast-twitch muscle fiber และ coordination ดี",
    prerequisites: ["air-squat"],
    regressions: [],
    progressions: ["box-jump-over", "burpee-box-jump-over"],
    related: ["box-jump-over", "broad-jump", "jumping-lunge"],
    faults: [
      "กระโดดด้วยขาข้างเดียว (one-foot takeoff)",
      "ลงกระแทก — เข่าตรงไม่งอรับแรง",
      "กระโดดสั้น แล้ว shuffle เท้าขึ้น",
      "ยืนบนกล่องไม่ตรง — สะโพกไม่ extend เต็มที่",
    ],
    cues: [
      "Two feet พร้อมกัน — takeoff และ landing",
      "Soft landing — งอเข่าและสะโพกรับ",
      "Stand tall บนกล่อง — hip extension เต็ม",
      "Step down — ไม่ต้องกระโดดลง (ป้องกัน Achilles)",
    ],
    mobilityNeeds: ["ankle dorsiflexion", "hip flexion"],
    strengthNeeds: ["quad", "glute", "calf", "core stability"],
    beginnerNote:
      "เริ่มจากกล่องเตี้ย (12-16 นิ้ว) ฝึก landing ให้นิ่มก่อน แล้วค่อยเพิ่มความสูง ถ้ากลัว ให้ฝึก Box Step Up ก่อน",
    scalingNote: "Box Step Up, ลดความสูงกล่อง, Broad Jump",
  },

  // ── CONVENTIONAL DEADLIFT ─────────────────────────────────────────────────
  {
    id: "m026",
    slug: "conventional-deadlift",
    name: "Conventional Deadlift",
    nameTH: "เดดลิฟต์แบบคอนเวนชันนอล",
    youtubeId: "op9kVnSso6Q",
    category: "weightlifting",
    subcategory: "Barbell",
    group: "Powerlifting & Strength",
    subgroup: "Deadlift",
    tags: ["barbell", "foundational", "posterior chain", "strength"],
    equipment: ["barbell"],
    difficulty: 2,
    patterns: ["hinge"],
    shortDesc:
      "ยกบาร์เบลจากพื้นขึ้นโดยใช้ hinge pattern — เป็นท่าที่สร้าง posterior chain strength มากที่สุดในทุก CrossFit movement",
    whyMatters:
      "Deadlift แข็งแรงทำให้ clean, snatch, และทุก hinge movement ดีขึ้นทันที — เป็น foundation ของ posterior chain ทั้งหมด ถ้า deadlift ดี back injury น้อยลงมาก",
    prerequisites: [],
    regressions: [],
    progressions: ["conventional-deadlift", "romanian-deadlift"],
    related: ["power-clean", "kb-swing", "romanian-deadlift", "sumo-deadlift"],
    faults: [
      "หลังกลมขณะยก (rounded back) — อันตรายมากสุด",
      "บาร์ไม่ชิดขา — เคลื่อนออกข้างหน้า",
      "สะโพกขึ้นก่อนไหล่ (hip shooting up)",
      "ล็อคเข่าก่อนสะโพก extend เสร็จ",
      "มองลงต่ำ — cervical spine ผิดแนว",
    ],
    cues: [
      "Proud chest — ยกอก ไม่ให้หลังกลม",
      "Bar ชิดขา ตลอดทาง — scrape the shins",
      "Push the floor away — คิดว่าดันพื้นออก ไม่ใช่ดึงบาร์ขึ้น",
      "Lock hips and knees พร้อมกัน ด้านบน",
    ],
    mobilityNeeds: ["hip hinge mobility", "hamstring flexibility", "thoracic extension"],
    strengthNeeds: ["hamstring", "glute", "erector spinae", "lat", "core"],
    beginnerNote:
      "เริ่มน้ำหนักเบาๆ ฝึก hinge pattern ด้วย KB swing หรือ Romanian Deadlift ก่อน เมื่อ pattern ดีแล้วค่อยเพิ่มน้ำหนัก",
    scalingNote: "Romanian Deadlift (RDL), KB Deadlift, Trap Bar Deadlift",
    safetyNote: "อย่า round back ไม่ว่าน้ำหนักจะเบาแค่ไหน — นิสัยที่ไม่ดีจะเป็นปัญหาเมื่อน้ำหนักหนักขึ้น",
  },

  // ── STRICT PRESS ──────────────────────────────────────────────────────────
  {
    id: "m027",
    slug: "strict-press",
    name: "Strict Press",
    nameTH: "เพรสแบบเส้นตรง (ไม่ใช้ขา)",
    youtubeId: "J5EJ-z5JCDk",
    category: "weightlifting",
    subcategory: "Barbell",
    group: "Powerlifting & Strength",
    subgroup: "Press",
    tags: ["barbell", "foundational", "shoulder", "overhead"],
    equipment: ["barbell"],
    difficulty: 2,
    patterns: ["push"],
    shortDesc:
      "ดัน barbell ขึ้นเหนือศีรษะโดยใช้แรงไหล่และ tricep อย่างเดียว ไม่ใช้ขาหรือสะโพกช่วย — ท่าพื้นฐานของ overhead strength",
    whyMatters:
      "Strict Press สร้าง overhead strength ที่จำเป็นสำหรับ HSPU, Push Jerk, Push Press ทั้งหมด — ถ้า strict press ดี ท่า overhead อื่นๆ จะ safer และ stronger",
    prerequisites: [],
    regressions: [],
    progressions: ["push-press", "push-jerk", "split-jerk"],
    related: ["push-jerk", "push-press", "handstand-push-up"],
    faults: [
      "ใช้ขา/สะโพก dip ช่วย — ไม่ใช่ strict press แล้ว",
      "บาร์ path ออกหน้าแทนที่จะตรงขึ้น",
      "หลังแอ่นมากเกินไป (overextend lumbar)",
      "ไม่ lock out ข้อศอกด้านบน",
      "Grip กว้างหรือแคบเกินไป",
    ],
    cues: [
      "Brace core และ glutes ตลอด — ไม่ให้หลังแอ่น",
      "Press ตรงขึ้น — บาร์ผ่านหน้าใบหน้า",
      "Lock out ด้านบน — ข้อศอกตรงสนิท",
      "Chin back ขณะบาร์ผ่านไป แล้ว chin forward เมื่อบาร์เหนือศีรษะ",
    ],
    mobilityNeeds: ["shoulder flexion", "thoracic extension", "wrist extension"],
    strengthNeeds: ["shoulder", "tricep", "upper trap", "core"],
    beginnerNote:
      "เริ่มน้ำหนักเบาๆ ฝึก strict ก่อนเสมอ ก่อนจะเรียน push press หรือ push jerk — foundation ที่ดีสำคัญกว่าน้ำหนักที่ยกได้",
    scalingNote: "DB Strict Press, ลดน้ำหนัก, PVC Strict Press",
  },

  // ── PUSH JERK ─────────────────────────────────────────────────────────────
  {
    id: "m028",
    slug: "push-jerk",
    name: "Push Jerk",
    nameTH: "พุชเจิร์ก",
    youtubeId: "V-hKuAfWNUY",
    category: "weightlifting",
    subcategory: "Barbell",
    group: "Olympic Lifts",
    subgroup: "Jerk",
    tags: ["barbell", "overhead", "power", "olympic"],
    equipment: ["barbell"],
    difficulty: 3,
    patterns: ["push", "squat"],
    shortDesc:
      "ใช้ dip-drive จากขาส่งบาร์ขึ้น แล้ว drop ใต้บาร์ในท่า partial squat — เร็วกว่า Push Press และใช้น้ำหนักได้มากกว่า",
    whyMatters:
      "Push Jerk เป็นท่า jerk ที่ CrossFit ใช้มากที่สุด — ถ้าทำได้ดีจะยกน้ำหนักได้มากกว่า Strict Press 30-40% และเป็นรากฐานของ Split Jerk",
    prerequisites: ["strict-press", "front-squat"],
    regressions: ["strict-press", "push-press"],
    progressions: ["split-jerk"],
    related: ["split-jerk", "push-press", "strict-press", "thruster"],
    faults: [
      "Dip ไปข้างหน้า — torso เอนระหว่าง dip",
      "Drive ไม่พอก่อน punch under",
      "ไม่ punch under บาร์ — ยังใช้แขนดัน",
      "ลงรับบาร์โดยไม่ lock out ข้อศอก",
      "เท้า shuffle ผิดจังหวะ",
    ],
    cues: [
      "Dip ตรง — torso vertical ตลอด",
      "Drive ขึ้น explosive — สะโพก extend เต็มที่ก่อน",
      "Punch under — drop ตัวลงรับบาร์พร้อมกัน",
      "Lock out แขน — รับในท่า partial squat ขา soft",
    ],
    mobilityNeeds: ["shoulder flexion", "thoracic extension", "wrist extension", "ankle dorsiflexion"],
    strengthNeeds: ["shoulder", "tricep", "quad", "core"],
    beginnerNote:
      "ต้องทำ Push Press ได้คล่องก่อน จากนั้นฝึก drop ใต้บาร์ด้วยน้ำหนักเบาๆ ก่อนเพิ่มน้ำหนัก",
    scalingNote: "Push Press, Strict Press, DB Push Jerk",
  },

  // ── SPLIT JERK ────────────────────────────────────────────────────────────
  {
    id: "m029",
    slug: "split-jerk",
    name: "Split Jerk",
    nameTH: "สปลิตเจิร์ก",
    youtubeId: "5_8BmSBmDlQ",
    category: "weightlifting",
    subcategory: "Barbell",
    group: "Olympic Lifts",
    subgroup: "Jerk",
    tags: ["barbell", "overhead", "advanced", "olympic"],
    equipment: ["barbell"],
    difficulty: 4,
    patterns: ["push", "squat"],
    shortDesc:
      "Jerk ที่รับบาร์ด้วยการก้าว lunge split — ให้ base ของการรับที่กว้างและมั่นคงที่สุด ใช้ในการแข่งขัน Olympic Weightlifting",
    whyMatters:
      "Split Jerk ใช้ได้กับน้ำหนักสูงสุดในบรรดา jerk ทุกรูปแบบ เพราะ receiving position ลึกและมั่นคงกว่า ถ้าอยากยก barbell หนักเหนือศีรษะ Split Jerk คือคำตอบ",
    prerequisites: ["push-jerk", "strict-press", "walking-lunge"],
    regressions: ["push-jerk", "push-press"],
    progressions: [],
    related: ["push-jerk", "push-press", "squat-clean"],
    faults: [
      "Front foot ก้าวออกข้างแทนที่จะตรงหน้า",
      "Back knee ไม่งอ — ไม่ drop ลงพอ",
      "บาร์ไม่ lock out ก่อน split",
      "ฟื้นตัวกลับไม่ถูกต้อง — front foot ก่อน หรือ back foot ก่อน",
    ],
    cues: [
      "Dip-drive ตรง — เหมือน Push Jerk",
      "Split กว้างพอ — both feet ตามแนว sagittal plane",
      "Lock out แขน ทันทีที่ split",
      "ฟื้น: back foot ก่อน แล้ว front foot เข้ามา",
    ],
    mobilityNeeds: ["shoulder flexion", "hip flexor", "ankle dorsiflexion", "thoracic extension"],
    strengthNeeds: ["shoulder", "tricep", "quad", "hip flexor"],
    beginnerNote:
      "ฝึก footwork แยกก่อน (ไม่ต้องถือบาร์) — ฝึก split position ให้ชำนาญก่อน แล้วเพิ่มบาร์ทีหลัง",
    scalingNote: "Push Jerk, Push Press, ลดน้ำหนัก",
    safetyNote: "อย่าพยายาม max effort split jerk โดยไม่มีโค้ชดู — wrist และ shoulder เสี่ยงสูงถ้า form ผิด",
  },

  // ── HANG CLEAN ────────────────────────────────────────────────────────────
  {
    id: "m030",
    slug: "hang-clean",
    name: "Hang Clean",
    nameTH: "แฮงก์คลีน",
    youtubeId: "c5IpCzDDIEo",
    category: "weightlifting",
    subcategory: "Barbell",
    group: "Olympic Lifts",
    subgroup: "Clean",
    tags: ["barbell", "hang position", "olympic", "power"],
    equipment: ["barbell"],
    difficulty: 3,
    patterns: ["hinge", "squat"],
    shortDesc:
      "Clean ที่เริ่มจาก hang position (บาร์ที่ระดับต้นขา) แทนที่จะยกจากพื้น — ง่ายกว่า Power Clean ในแง่ technique เริ่มต้น",
    whyMatters:
      "Hang Clean เป็นท่าที่สอน clean mechanics ได้ดีมาก เพราะเน้น hip drive และ extension โดยไม่ต้องกังวล off the floor position — ใช้เป็น drill ให้นักกีฬาทุกระดับ",
    prerequisites: ["front-squat", "conventional-deadlift"],
    regressions: ["front-squat", "romanian-deadlift"],
    progressions: ["power-clean", "squat-clean"],
    related: ["power-clean", "squat-clean", "hang-snatch"],
    faults: [
      "ยกแขนก่อน extend สะโพกเสร็จ",
      "บาร์ห่างจากตัว — bar path ไม่ตรง",
      "ไม่ shrug เต็มที่ก่อน pull under",
      "Catch position ข้อศอกต่ำ — front rack ไม่ดี",
    ],
    cues: [
      "Hip back ลง — เหมือน RDL",
      "Explode สะโพกขึ้น — hip drive ก่อนทุกอย่าง",
      "Shrug ขึ้น แล้ว pull under",
      "ข้อศอก high และ fast ใน catch",
    ],
    mobilityNeeds: ["hip hinge mobility", "thoracic extension", "wrist extension", "shoulder flexion"],
    strengthNeeds: ["hamstring", "glute", "trap", "lat", "core"],
    beginnerNote:
      "ฝึก hang position ก่อน — ยืนถือบาร์ที่ hang แล้วฝึก hip hinge กลับไปมา จากนั้นเพิ่ม explosive drive เข้ามา",
    scalingNote: "DB Hang Clean, Hang Power Clean, ลดน้ำหนัก",
  },

  // ── KETTLEBELL SWING ──────────────────────────────────────────────────────
  {
    id: "m031",
    slug: "kb-swing",
    name: "Kettlebell Swing",
    nameTH: "สวิงเคตเทิลเบล",
    youtubeId: "GRiHSO-tAqA",
    category: "weightlifting",
    subcategory: "Kettlebell",
    group: "",
    subgroup: "",
    tags: ["kettlebell", "foundational", "hip hinge", "conditioning"],
    equipment: ["kettlebell"],
    difficulty: 1,
    patterns: ["hinge"],
    shortDesc:
      "Swing kettlebell จาก between legs ขึ้นไปในระดับ hip หรือ overhead โดยใช้ explosive hip hinge — สอน hinge pattern ที่ดีที่สุดท่าหนึ่ง",
    whyMatters:
      "KB Swing สอน hip hinge และ hip extension ในแบบที่ fun และ explosive — ทักษะนี้ transfer ไปที่ deadlift, clean, snatch ทั้งหมด เป็นท่าที่เหมาะมากสำหรับผู้เริ่มต้น",
    prerequisites: [],
    regressions: [],
    progressions: ["conventional-deadlift", "db-snatch", "kb-snatch"],
    related: ["conventional-deadlift", "db-snatch", "power-clean"],
    faults: [
      "Squat swing — นั่ง squat แทนที่จะ hinge",
      "ใช้แขนดึง KB ขึ้น — แทนที่จะใช้สะโพก",
      "ไม่ extend สะโพกเต็มที่ที่ด้านบน",
      "หลังกลมขณะ KB swing ลงด้านล่าง",
    ],
    cues: [
      "Hinge ไม่ใช่ Squat — สะโพกไปข้างหลัง ไม่ลง",
      "Snap สะโพก — explosive extension ที่ top",
      "แขนเป็นแค่ rope — สะโพกส่ง KB",
      "Brace core ที่ top — plank ยืน",
    ],
    mobilityNeeds: ["hip hinge mobility", "hamstring flexibility", "thoracic extension"],
    strengthNeeds: ["hamstring", "glute", "core", "lat"],
    beginnerNote:
      "เริ่มน้ำหนักเบาๆ ฝึก hip hinge ก่อน (ยืนดันสะโพกไปข้างหลัง ไม่ใช่นั่งลง) จนกว่า pattern จะชัดเจนก่อนเพิ่มน้ำหนัก",
    scalingNote: "ลดน้ำหนัก KB, Romanian Deadlift สอน hinge ก่อน",
  },

  // ── GOBLET SQUAT ─────────────────────────────────────────────────────────
  {
    id: "m032",
    slug: "goblet-squat",
    name: "Goblet Squat",
    nameTH: "ก็อบเล็ตสควอท",
    youtubeId: "AmjPkExSoBw",
    category: "weightlifting",
    subcategory: "Kettlebell",
    group: "",
    subgroup: "",
    tags: ["kettlebell", "dumbbell", "foundational", "lower body", "beginner-friendly"],
    equipment: ["kettlebell"],
    difficulty: 1,
    patterns: ["squat"],
    shortDesc:
      "Squat โดยถือ kettlebell หรือ dumbbell ไว้หน้าอก — น้ำหนักด้านหน้าช่วย counterbalance ให้นั่งลึกได้ง่ายขึ้น",
    whyMatters:
      "Goblet Squat เป็นท่าที่ดีที่สุดสำหรับสอน squat mechanics ให้ผู้เริ่มต้น — น้ำหนักด้านหน้าบังคับให้ torso ตั้ง ลึกได้ และ knee track ดี",
    prerequisites: ["air-squat"],
    regressions: ["air-squat"],
    progressions: ["front-squat", "back-squat", "thruster"],
    related: ["air-squat", "front-squat", "back-squat"],
    faults: [
      "KB ห้อยลงแทนที่จะประกบหน้าอก",
      "ส้นเท้าลอย — ankle mobility ไม่พอ",
      "เข่าพับเข้าใน (valgus)",
      "ไม่นั่งลึกพอ — hip crease ยังสูงกว่า knee",
    ],
    cues: [
      "KB ชิดหน้าอก — ข้อศอกชี้ลงระหว่างเข่า",
      "กางเข่าออก — elbow ดัน knee ออกด้านนอก",
      "นั่งลงระหว่างขา — ไม่ใช่ลงข้างหน้า",
      "อก up ตลอด — ไม่ให้ทรุด",
    ],
    mobilityNeeds: ["ankle dorsiflexion", "hip flexion", "thoracic extension"],
    strengthNeeds: ["quad", "glute", "core"],
    beginnerNote:
      "ท่านี้คือก้าวแรกที่ดีที่สุดสำหรับผู้ที่นั่ง squat ไม่ได้หรือไม่ลึก ลอง Goblet Squat ด้วย KB เบาๆ แล้วจะเห็นความแตกต่างทันที",
    scalingNote: "Air Squat ก่อน หรือใช้ resistance band รอบเข่า",
  },

  // ── PISTOL SQUAT ──────────────────────────────────────────────────────────
  {
    id: "m033",
    slug: "pistol-squat",
    name: "Pistol Squat",
    nameTH: "สควอทขาเดียว (พิสตอล)",
    youtubeId: "B4nNqm6KIpA",
    category: "gymnastics",
    subcategory: "Lower Body & Plyometrics",
    group: "Squatting",
    subgroup: "",
    tags: ["bodyweight", "unilateral", "advanced", "balance"],
    equipment: [],
    difficulty: 4,
    patterns: ["squat"],
    shortDesc:
      "Squat ขาเดียวลงจนก้นเกือบพื้น ขาอีกข้างยื่นตรงไปข้างหน้า — ทดสอบทั้ง strength, mobility และ balance ในท่าเดียว",
    whyMatters:
      "Pistol Squat เปิดโปงความแตกต่างระหว่างขาสองข้าง, ankle mobility, hip mobility และ balance ได้พร้อมกัน เป็น benchmark ของ unilateral leg strength ใน CrossFit",
    prerequisites: ["air-squat", "walking-lunge"],
    regressions: ["air-squat", "walking-lunge", "goblet-squat"],
    progressions: [],
    related: ["air-squat", "walking-lunge", "shrimp-squat"],
    faults: [
      "ส้นเท้าลอย — ankle mobility ไม่พอ",
      "ล้มไปข้างใดข้างหนึ่ง — core ไม่ stable",
      "ขาที่ยื่นออกไปงอ — hamstring flexibility ไม่พอ",
      "ลงไม่ถึง full depth",
    ],
    cues: [
      "ยื่นขาไว้ข้างหน้า — counterbalance ด้วยแขนหรือขา",
      "ส้นเท้าลงพื้น — น้ำหนักที่ส้น ไม่ใช่นิ้วเท้า",
      "Knee track ตามนิ้วเท้า — ไม่พับเข้าใน",
      "ลงช้าๆ — control eccentric ก่อน",
    ],
    mobilityNeeds: ["ankle dorsiflexion", "hip flexion", "hamstring flexibility"],
    strengthNeeds: ["quad", "glute", "core stability", "hip flexor"],
    beginnerNote:
      "ฝึก Box Pistol (นั่งลงบน box สูงๆ) ก่อน ค่อยๆ ลด box ความสูงลง หรือฝึก assisted pistol โดยจับเสาช่วย",
    scalingNote: "Box Pistol, Band-assisted Pistol, Single-leg Box Squat",
  },

  // ── ROPE CLIMB ────────────────────────────────────────────────────────────
  {
    id: "m034",
    slug: "rope-climb",
    name: "Rope Climb",
    nameTH: "ปีนเชือก",
    youtubeId: "Ao_1K3KbeMM",
    category: "gymnastics",
    subcategory: "Upper Body - Pulling",
    group: "Climbing",
    subgroup: "",
    tags: ["rope", "advanced", "upper body", "pulling"],
    equipment: ["rope"],
    difficulty: 4,
    patterns: ["pull"],
    shortDesc:
      "ปีนเชือกขึ้นไปสูง 15 ฟุต (4.6 เมตร) โดยใช้แขนและขาช่วย — ทดสอบ upper body pulling strength และ technique",
    whyMatters:
      "Rope Climb ทดสอบ grip strength, pulling endurance และ body coordination ได้อย่างสมบูรณ์แบบ เป็นท่าที่ปรากฏใน CrossFit Games และ Open หลายปี",
    prerequisites: ["strict-pull-up", "ring-row"],
    regressions: ["strict-pull-up", "ring-row"],
    progressions: [],
    related: ["strict-pull-up", "toes-to-bar", "pegboard"],
    faults: [
      "ใช้แขนอย่างเดียว — ไม่ใช้ขา clamp ช่วย",
      "J-hook หรือ S-wrap ขาไม่แน่น",
      "ลงมาโดยไม่ควบคุม — เสี่ยง rope burn",
      "ปล่อยมือก่อนขายึดแน่น",
    ],
    cues: [
      "Clamp ขา — J-hook หรือ S-wrap ให้แน่น",
      "Sit into the feet — ยืนบนเชือกแล้ว reach up",
      "Pull then clamp — pull แขนขึ้น แล้ว clamp ขาใหม่",
      "ลงช้าๆ — slide อย่า drop",
    ],
    mobilityNeeds: ["shoulder flexion", "hip flexion"],
    strengthNeeds: ["grip", "lat", "bicep", "core"],
    beginnerNote:
      "เริ่มจาก Ring Row และ Strict Pull-Up เพิ่ม grip strength ด้วย dead hang ก่อน ฝึก foot lock บนพื้นก่อนขึ้นเชือกจริง",
    scalingNote: "Rope Pull from Floor, Rope Pull to Seated, Band-assisted",
    safetyNote: "ลงเชือกช้าๆ เสมอ — rope burn เจ็บมากและอาจติดเชื้อได้",
  },

  // ── TURKISH GET-UP ────────────────────────────────────────────────────────
  {
    id: "m035",
    slug: "turkish-get-up",
    name: "Turkish Get-Up (TGU)",
    nameTH: "เตอร์กิชเก็ตอัพ",
    youtubeId: "_2YFm9vKLpE",
    category: "weightlifting",
    subcategory: "Kettlebell",
    group: "",
    subgroup: "",
    tags: ["kettlebell", "advanced", "full body", "stability", "rehabilitation"],
    equipment: ["kettlebell"],
    difficulty: 4,
    patterns: ["carry", "push"],
    shortDesc:
      "ลุกจากนอนราบขึ้นยืนพร้อมถือ KB เหนือศีรษะตลอดเวลา ทดสอบ shoulder stability, hip mobility และ total-body coordination",
    whyMatters:
      "TGU เป็นท่าที่ครบที่สุดในโลก — ทดสอบและพัฒนา mobility ทุกข้อต่อ, stability ของ shoulder และ core พร้อมกัน ใช้ใน rehab และ high-performance training เหมือนกัน",
    prerequisites: ["push-up"],
    regressions: [],
    progressions: [],
    related: ["kb-swing", "strict-press", "overhead-squat"],
    faults: [
      "KB เอียง — ไม่ lock out ข้อศอก",
      "มองลงแทนที่จะมอง KB ตลอด",
      "ข้ามขั้นตอน — รีบลุกโดยไม่ผ่าน half-kneeling",
      "สะโพกตกระหว่าง bridge",
    ],
    cues: [
      "มอง KB ตลอดเวลา — ไม่มองลง",
      "Lock out ข้อศอก ตลอดทุกขั้นตอน",
      "ทำทุกขั้นตอนให้ชัดเจน — ไม่รีบ",
      "Packed shoulder — ไหล่ไม่ shrug ขึ้น",
    ],
    mobilityNeeds: ["shoulder external rotation", "thoracic extension", "hip flexor", "ankle dorsiflexion"],
    strengthNeeds: ["shoulder stability", "core", "glute", "hip flexor"],
    beginnerNote:
      "เริ่มด้วย shoe แทน KB วางบนมือ เพื่อ learn pattern ก่อน จากนั้นใช้ KB เบาๆ และทำช้าๆ ทุกขั้นตอน",
    scalingNote: "TGU with shoe (ไม่ถือน้ำหนัก), ลดน้ำหนัก KB, Partial TGU",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// MOVEMENT CATALOG — All 127 movements from CSV (stubs, no detailed data yet)
// Detailed entries in MOVEMENTS above take precedence via getAllMovements()
// ─────────────────────────────────────────────────────────────────────────────

export const MOVEMENT_CATALOG: MovementCatalogEntry[] = [
  // WEIGHTLIFTING — BARBELL — OLYMPIC LIFTS
  { slug:"muscle-snatch",         name:"Muscle Snatch",                    category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Snatch",        equipment:["barbell"],              difficulty:3 },
  { slug:"power-snatch",          name:"Power Snatch",                     category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Snatch",        equipment:["barbell"],              difficulty:4 },
  { slug:"squat-snatch",          name:"Squat Snatch",                     category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Snatch",        equipment:["barbell"],              difficulty:5, youtubeId:"M5VMzJGCDhg" },
  { slug:"hang-snatch",           name:"Hang Snatch",                      category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Snatch",        equipment:["barbell"],              difficulty:4, youtubeId:"J96iv7dEgcQ" },
  { slug:"snatch-balance",        name:"Snatch Balance",                   category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Snatch",        equipment:["barbell"],              difficulty:4 },
  { slug:"snatch-pull",           name:"Snatch Pull",                      category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Snatch",        equipment:["barbell"],              difficulty:3 },
  { slug:"muscle-clean",          name:"Muscle Clean",                     category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Clean",         equipment:["barbell"],              difficulty:3 },
  { slug:"power-clean",           name:"Power Clean",                      category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Clean",         equipment:["barbell"],              difficulty:3 },
  { slug:"squat-clean",           name:"Squat Clean",                      category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Clean",         equipment:["barbell"],              difficulty:4 },
  { slug:"hang-clean",            name:"Hang Clean",                       category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Clean",         equipment:["barbell"],              difficulty:3, youtubeId:"c5IpCzDDIEo" },
  { slug:"clean-pull",            name:"Clean Pull",                       category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Clean",         equipment:["barbell"],              difficulty:3 },
  { slug:"push-jerk",             name:"Push Jerk",                        category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Jerk",          equipment:["barbell"],              difficulty:3, youtubeId:"V-hKuAfWNUY" },
  { slug:"split-jerk",            name:"Split Jerk",                       category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Jerk",          equipment:["barbell"],              difficulty:4, youtubeId:"5_8BmSBmDlQ" },
  { slug:"squat-jerk",            name:"Squat Jerk",                       category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Jerk",          equipment:["barbell"],              difficulty:5 },
  { slug:"bear-complex",          name:"Bear Complex",                     category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Complexes",     equipment:["barbell"],              difficulty:4 },
  { slug:"thruster",              name:"Thruster",                         category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Complexes",     equipment:["barbell"],              difficulty:3 },
  { slug:"cluster",               name:"Cluster",                          category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Complexes",     equipment:["barbell"],              difficulty:4 },
  // WEIGHTLIFTING — BARBELL — POWERLIFTING
  { slug:"back-squat",            name:"Back Squat",                       category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Squat",         equipment:["barbell","rack"],       difficulty:2 },
  { slug:"front-squat",           name:"Front Squat",                      category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Squat",         equipment:["barbell","rack"],       difficulty:2 },
  { slug:"overhead-squat",        name:"Overhead Squat (OHS)",             category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Squat",         equipment:["barbell"],              difficulty:4 },
  { slug:"zercher-squat",         name:"Zercher Squat",                    category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Squat",         equipment:["barbell"],              difficulty:3 },
  { slug:"box-squat",             name:"Box Squat",                        category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Squat",         equipment:["barbell","box"],        difficulty:2 },
  { slug:"conventional-deadlift", name:"Conventional Deadlift",           category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Deadlift",      equipment:["barbell"],              difficulty:2, youtubeId:"op9kVnSso6Q" },
  { slug:"sumo-deadlift",         name:"Sumo Deadlift",                    category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Deadlift",      equipment:["barbell"],              difficulty:2 },
  { slug:"romanian-deadlift",     name:"Romanian Deadlift (RDL)",         category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Deadlift",      equipment:["barbell"],              difficulty:2 },
  { slug:"stiff-legged-deadlift", name:"Stiff Legged Deadlift",           category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Deadlift",      equipment:["barbell"],              difficulty:2 },
  { slug:"deficit-deadlift",      name:"Deficit Deadlift",                 category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Deadlift",      equipment:["barbell","plates"],     difficulty:3 },
  { slug:"trap-bar-deadlift",     name:"Trap Bar Deadlift",                category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Deadlift",      equipment:["trap bar"],             difficulty:2 },
  { slug:"strict-press",          name:"Strict Press",                     category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Press",         equipment:["barbell"],              difficulty:2, youtubeId:"J5EJ-z5JCDk" },
  { slug:"bench-press",           name:"Bench Press",                      category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Press",         equipment:["barbell","bench"],      difficulty:2 },
  { slug:"floor-press",           name:"Floor Press",                      category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Press",         equipment:["barbell"],              difficulty:2 },
  { slug:"good-morning",          name:"Good Morning",                     category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Other",         equipment:["barbell"],              difficulty:2 },
  { slug:"bent-over-row",         name:"Bent Over Row",                    category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Other",         equipment:["barbell"],              difficulty:2 },
  { slug:"pendlay-row",           name:"Pendlay Row",                      category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Other",         equipment:["barbell"],              difficulty:2 },
  // WEIGHTLIFTING — DUMBBELL
  { slug:"db-snatch",             name:"Dumbbell Snatch",                  category:"weightlifting", subcategory:"Dumbbell",           group:"",                        subgroup:"",              equipment:["dumbbell"],             difficulty:2 },
  { slug:"db-clean-and-jerk",     name:"Dumbbell Clean & Jerk",           category:"weightlifting", subcategory:"Dumbbell",           group:"",                        subgroup:"",              equipment:["dumbbell"],             difficulty:3 },
  { slug:"db-thruster",           name:"Dumbbell Thruster",                category:"weightlifting", subcategory:"Dumbbell",           group:"",                        subgroup:"",              equipment:["dumbbell"],             difficulty:2 },
  { slug:"devil-press",           name:"Devil Press",                      category:"weightlifting", subcategory:"Dumbbell",           group:"",                        subgroup:"",              equipment:["dumbbell"],             difficulty:3 },
  { slug:"db-overhead-squat",     name:"Dumbbell Overhead Squat",         category:"weightlifting", subcategory:"Dumbbell",           group:"",                        subgroup:"",              equipment:["dumbbell"],             difficulty:3 },
  { slug:"db-walking-lunge",      name:"Dumbbell Walking Lunge",          category:"weightlifting", subcategory:"Dumbbell",           group:"",                        subgroup:"",              equipment:["dumbbell"],             difficulty:2 },
  { slug:"push-press",            name:"Push Press",                       category:"weightlifting", subcategory:"Dumbbell",           group:"",                        subgroup:"",              equipment:["dumbbell"],             difficulty:2 },
  { slug:"renegade-row",          name:"Renegade Row",                     category:"weightlifting", subcategory:"Dumbbell",           group:"",                        subgroup:"",              equipment:["dumbbell"],             difficulty:3 },
  // WEIGHTLIFTING — KETTLEBELL
  { slug:"kb-swing",              name:"Kettlebell Swing",                 category:"weightlifting", subcategory:"Kettlebell",         group:"",                        subgroup:"",              equipment:["kettlebell"],           difficulty:1, youtubeId:"GRiHSO-tAqA" },
  { slug:"goblet-squat",          name:"Goblet Squat",                     category:"weightlifting", subcategory:"Kettlebell",         group:"",                        subgroup:"",              equipment:["kettlebell"],           difficulty:1, youtubeId:"AmjPkExSoBw" },
  { slug:"kb-snatch",             name:"Kettlebell Snatch",                category:"weightlifting", subcategory:"Kettlebell",         group:"",                        subgroup:"",              equipment:["kettlebell"],           difficulty:3 },
  { slug:"kb-clean-and-press",    name:"Kettlebell Clean & Press",        category:"weightlifting", subcategory:"Kettlebell",         group:"",                        subgroup:"",              equipment:["kettlebell"],           difficulty:3 },
  { slug:"turkish-get-up",        name:"Turkish Get-Up (TGU)",            category:"weightlifting", subcategory:"Kettlebell",         group:"",                        subgroup:"",              equipment:["kettlebell"],           difficulty:4, youtubeId:"_2YFm9vKLpE" },
  { slug:"single-leg-rdl",        name:"Single Leg RDL",                   category:"weightlifting", subcategory:"Kettlebell",         group:"",                        subgroup:"",              equipment:["kettlebell"],           difficulty:2 },
  { slug:"farmers-carry",         name:"Farmers Carry",                    category:"weightlifting", subcategory:"Kettlebell",         group:"",                        subgroup:"",              equipment:["kettlebell"],           difficulty:1 },
  // WEIGHTLIFTING — ODD OBJECTS
  { slug:"wall-ball",             name:"Wall Ball Shot",                   category:"weightlifting", subcategory:"Odd Objects",        group:"Medicine Ball",          subgroup:"",              equipment:["medicine ball","target"],difficulty:1 },
  { slug:"medicine-ball-clean",   name:"Medicine Ball Clean",             category:"weightlifting", subcategory:"Odd Objects",        group:"Medicine Ball",          subgroup:"",              equipment:["medicine ball"],        difficulty:2 },
  { slug:"sled-push",             name:"Sled Push",                        category:"weightlifting", subcategory:"Odd Objects",        group:"Sled",                   subgroup:"",              equipment:["sled"],                 difficulty:2 },
  { slug:"sled-drag",             name:"Sled Drag",                        category:"weightlifting", subcategory:"Odd Objects",        group:"Sled",                   subgroup:"",              equipment:["sled"],                 difficulty:2 },
  { slug:"sandbag-carry",         name:"Sandbag Carry",                    category:"weightlifting", subcategory:"Odd Objects",        group:"Sandbag",                subgroup:"",              equipment:["sandbag"],              difficulty:2 },
  { slug:"sandbag-squat",         name:"Sandbag Squat",                    category:"weightlifting", subcategory:"Odd Objects",        group:"Sandbag",                subgroup:"",              equipment:["sandbag"],              difficulty:2 },
  { slug:"sandbag-over-shoulder", name:"Sandbag Over Shoulder",           category:"weightlifting", subcategory:"Odd Objects",        group:"Sandbag",                subgroup:"",              equipment:["sandbag"],              difficulty:3 },
  { slug:"yoke-carry",            name:"Yoke Carry",                       category:"weightlifting", subcategory:"Odd Objects",        group:"Yoke / Axle / Log",      subgroup:"",              equipment:["yoke"],                 difficulty:3 },
  { slug:"axle-bar-clean-press",  name:"Axle Bar Clean & Press",          category:"weightlifting", subcategory:"Odd Objects",        group:"Yoke / Axle / Log",      subgroup:"",              equipment:["axle bar"],             difficulty:4 },
  { slug:"log-clean-press",       name:"Log Clean & Press",               category:"weightlifting", subcategory:"Odd Objects",        group:"Yoke / Axle / Log",      subgroup:"",              equipment:["log"],                  difficulty:4 },
  { slug:"tire-flip",             name:"Tire Flip",                        category:"weightlifting", subcategory:"Odd Objects",        group:"Yoke / Axle / Log",      subgroup:"",              equipment:["tire"],                 difficulty:3 },
  { slug:"farmers-carry-handles", name:"Farmers Carry (Handles)",         category:"weightlifting", subcategory:"Odd Objects",        group:"Other",                  subgroup:"",              equipment:["farmers handles"],      difficulty:2 },
  // WEIGHTLIFTING — TEAM
  { slug:"synchro-lifts",         name:"Synchro Lifts",                    category:"weightlifting", subcategory:"Team & Partner",     group:"",                        subgroup:"",              equipment:[],                       difficulty:3 },
  { slug:"partner-deadlift",      name:"Partner Deadlift",                 category:"weightlifting", subcategory:"Team & Partner",     group:"",                        subgroup:"",              equipment:["barbell"],              difficulty:2 },
  { slug:"worm-carry",            name:"Worm Carry / Thruster / Clean",   category:"weightlifting", subcategory:"Team & Partner",     group:"",                        subgroup:"",              equipment:["worm"],                 difficulty:3 },
  { slug:"worm-squat",            name:"Worm Squat / Push Press",         category:"weightlifting", subcategory:"Team & Partner",     group:"",                        subgroup:"",              equipment:["worm"],                 difficulty:3 },
  // GYMNASTICS — UPPER BODY PULLING
  { slug:"strict-pull-up",        name:"Strict Pull-Up",                   category:"gymnastics",    subcategory:"Upper Body - Pulling",group:"Vertical Pull",          subgroup:"Pull-up",       equipment:["pull-up bar"],          difficulty:2 },
  { slug:"kipping-pull-up",       name:"Kipping Pull-Up",                  category:"gymnastics",    subcategory:"Upper Body - Pulling",group:"Vertical Pull",          subgroup:"Pull-up",       equipment:["pull-up bar"],          difficulty:3 },
  { slug:"butterfly-pull-up",     name:"Butterfly Pull-Up",               category:"gymnastics",    subcategory:"Upper Body - Pulling",group:"Vertical Pull",          subgroup:"Pull-up",       equipment:["pull-up bar"],          difficulty:4, youtubeId:"oMqXmP3IBLE" },
  { slug:"strict-chest-to-bar",   name:"Strict Chest-to-Bar",             category:"gymnastics",    subcategory:"Upper Body - Pulling",group:"Vertical Pull",          subgroup:"Chest-to-Bar",  equipment:["pull-up bar"],          difficulty:4 },
  { slug:"chest-to-bar",          name:"Kipping Chest-to-Bar",            category:"gymnastics",    subcategory:"Upper Body - Pulling",group:"Vertical Pull",          subgroup:"Chest-to-Bar",  equipment:["pull-up bar"],          difficulty:4 },
  { slug:"butterfly-chest-to-bar",name:"Butterfly Chest-to-Bar",          category:"gymnastics",    subcategory:"Upper Body - Pulling",group:"Vertical Pull",          subgroup:"Chest-to-Bar",  equipment:["pull-up bar"],          difficulty:5 },
  { slug:"strict-muscle-up",      name:"Strict Muscle-Up",                category:"gymnastics",    subcategory:"Upper Body - Pulling",group:"Vertical Pull",          subgroup:"Muscle-up",     equipment:["pull-up bar","rings"],  difficulty:5, youtubeId:"Wa_5RrS-MG8" },
  { slug:"kipping-muscle-up",     name:"Kipping Muscle-Up",               category:"gymnastics",    subcategory:"Upper Body - Pulling",group:"Vertical Pull",          subgroup:"Muscle-up",     equipment:["pull-up bar","rings"],  difficulty:5 },
  { slug:"rope-climb",            name:"Rope Climb",                       category:"gymnastics",    subcategory:"Upper Body - Pulling",group:"Climbing",               subgroup:"",              equipment:["rope"],                 difficulty:4, youtubeId:"Ao_1K3KbeMM" },
  { slug:"pegboard",              name:"Pegboard Ascents",                 category:"gymnastics",    subcategory:"Upper Body - Pulling",group:"Climbing",               subgroup:"",              equipment:["pegboard"],             difficulty:5 },
  { slug:"ring-row",              name:"Ring Row",                         category:"gymnastics",    subcategory:"Upper Body - Pulling",group:"Horizontal Pull",        subgroup:"",              equipment:["rings"],                difficulty:1 },
  // GYMNASTICS — UPPER BODY PUSHING
  { slug:"handstand-push-up",     name:"Strict HSPU",                      category:"gymnastics",    subcategory:"Upper Body - Pushing",group:"Vertical Push",          subgroup:"HSPU",          equipment:["wall"],                 difficulty:4 },
  { slug:"kipping-hspu",          name:"Kipping HSPU",                     category:"gymnastics",    subcategory:"Upper Body - Pushing",group:"Vertical Push",          subgroup:"HSPU",          equipment:["wall"],                 difficulty:4, youtubeId:"oPBIKgdOTwg" },
  { slug:"deficit-hspu",          name:"Deficit HSPU",                     category:"gymnastics",    subcategory:"Upper Body - Pushing",group:"Vertical Push",          subgroup:"HSPU",          equipment:["wall","plates"],        difficulty:5 },
  { slug:"push-up",               name:"Push-Up",                          category:"gymnastics",    subcategory:"Upper Body - Pushing",group:"Horizontal Push",        subgroup:"Push-up",       equipment:[],                       difficulty:1 },
  { slug:"hand-release-push-up",  name:"Hand Release Push-Up",            category:"gymnastics",    subcategory:"Upper Body - Pushing",group:"Horizontal Push",        subgroup:"Push-up",       equipment:[],                       difficulty:1 },
  { slug:"deficit-push-up",       name:"Deficit Push-Up",                  category:"gymnastics",    subcategory:"Upper Body - Pushing",group:"Horizontal Push",        subgroup:"Push-up",       equipment:["plates"],               difficulty:2 },
  { slug:"strict-dip",            name:"Strict Dip",                       category:"gymnastics",    subcategory:"Upper Body - Pushing",group:"Horizontal Push",        subgroup:"Dip",           equipment:["dip bar","rings"],      difficulty:2, youtubeId:"QHHbJqn7CaE" },
  { slug:"kipping-dip",           name:"Kipping Dip",                      category:"gymnastics",    subcategory:"Upper Body - Pushing",group:"Horizontal Push",        subgroup:"Dip",           equipment:["dip bar","rings"],      difficulty:3 },
  // GYMNASTICS — MIDLINE
  { slug:"handstand-walk",        name:"Handstand Walk",                   category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Handstand",              subgroup:"",              equipment:[],                       difficulty:5, youtubeId:"OOGBxH-gXVQ" },
  { slug:"handstand-hold",        name:"Handstand Hold",                   category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Handstand",              subgroup:"",              equipment:[],                       difficulty:4 },
  { slug:"handstand-obstacle-walk",name:"Handstand Obstacle Walk",        category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Handstand",              subgroup:"",              equipment:[],                       difficulty:5 },
  { slug:"knees-to-elbows",       name:"Knees-to-Elbows",                  category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Hanging",                subgroup:"",              equipment:["pull-up bar"],          difficulty:2, youtubeId:"9e0SXPBG1VE" },
  { slug:"toes-to-bar",           name:"Toes-to-Bar",                      category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Hanging",                subgroup:"",              equipment:["pull-up bar"],          difficulty:3 },
  { slug:"strict-toes-to-bar",    name:"Strict Toes-to-Bar",              category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Hanging",                subgroup:"",              equipment:["pull-up bar"],          difficulty:4 },
  { slug:"l-sit",                 name:"L-Sit / Tuck Sit",                category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Hanging",                subgroup:"",              equipment:["pull-up bar","parallettes"],difficulty:3 },
  { slug:"abmat-sit-up",          name:"AbMat Sit-Up",                     category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Floor",                  subgroup:"",              equipment:["abmat"],                difficulty:1 },
  { slug:"v-up",                  name:"V-Up / Tuck-Up",                  category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Floor",                  subgroup:"",              equipment:[],                       difficulty:2 },
  { slug:"hollow-rock",           name:"Hollow Rock / Hold",              category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Floor",                  subgroup:"",              equipment:[],                       difficulty:2, youtubeId:"kSovZFurqkE" },
  { slug:"superman-rock",         name:"Superman Rock / Hold",            category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Floor",                  subgroup:"",              equipment:[],                       difficulty:1 },
  { slug:"plank",                 name:"Plank",                            category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Floor",                  subgroup:"",              equipment:[],                       difficulty:1 },
  { slug:"ghd-sit-up",            name:"GHD Sit-Up",                       category:"gymnastics",    subcategory:"Midline & Trunk",      group:"GHD",                    subgroup:"",              equipment:["GHD"],                  difficulty:2 },
  { slug:"ghd-hip-extension",     name:"GHD Hip Extension",               category:"gymnastics",    subcategory:"Midline & Trunk",      group:"GHD",                    subgroup:"",              equipment:["GHD"],                  difficulty:2 },
  { slug:"ghd-back-extension",    name:"GHD Back Extension",              category:"gymnastics",    subcategory:"Midline & Trunk",      group:"GHD",                    subgroup:"",              equipment:["GHD"],                  difficulty:2 },
  { slug:"sorensen-hold",         name:"Sorensen Hold",                    category:"gymnastics",    subcategory:"Midline & Trunk",      group:"GHD",                    subgroup:"",              equipment:["GHD"],                  difficulty:3 },
  // GYMNASTICS — LOWER BODY
  { slug:"air-squat",             name:"Air Squat",                        category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Squatting",            subgroup:"",              equipment:[],                       difficulty:1 },
  { slug:"pistol-squat",          name:"Pistol Squat",                     category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Squatting",            subgroup:"",              equipment:[],                       difficulty:4, youtubeId:"B4nNqm6KIpA" },
  { slug:"shrimp-squat",          name:"Shrimp / Skater Squat",           category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Squatting",            subgroup:"",              equipment:[],                       difficulty:3 },
  { slug:"cossack-squat",         name:"Cossack Squat",                    category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Squatting",            subgroup:"",              equipment:[],                       difficulty:3 },
  { slug:"walking-lunge",         name:"Walking Lunge",                    category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Lunging",              subgroup:"",              equipment:[],                       difficulty:1 },
  { slug:"reverse-lunge",         name:"Reverse Lunge",                    category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Lunging",              subgroup:"",              equipment:[],                       difficulty:1 },
  { slug:"jumping-lunge",         name:"Jumping Lunge",                    category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Lunging",              subgroup:"",              equipment:[],                       difficulty:2 },
  { slug:"box-jump",              name:"Box Jump",                         category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Jumping",              subgroup:"",              equipment:["box"],                  difficulty:2 },
  { slug:"box-jump-over",         name:"Box Jump Over",                    category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Jumping",              subgroup:"",              equipment:["box"],                  difficulty:2 },
  { slug:"broad-jump",            name:"Broad Jump",                       category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Jumping",              subgroup:"",              equipment:[],                       difficulty:2 },
  { slug:"burpee",                name:"Burpee",                           category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Burpee",               subgroup:"",              equipment:[],                       difficulty:1 },
  { slug:"bar-facing-burpee",     name:"Bar-Facing Burpee",               category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Burpee",               subgroup:"",              equipment:["barbell"],              difficulty:2, youtubeId:"CwF0cJvOvnI" },
  { slug:"burpee-box-jump-over",  name:"Burpee Box Jump Over",            category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Burpee",               subgroup:"",              equipment:["box"],                  difficulty:2 },
  { slug:"burpee-over-bar",       name:"Burpee Over Bar",                  category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Burpee",               subgroup:"",              equipment:["barbell"],              difficulty:2 },
  // MONOSTRUCTURAL
  { slug:"sprint",                name:"Sprint",                           category:"monostructural",subcategory:"Running",            group:"",                        subgroup:"",              equipment:[],                       difficulty:1 },
  { slug:"distance-run",          name:"Distance Run",                     category:"monostructural",subcategory:"Running",            group:"",                        subgroup:"",              equipment:[],                       difficulty:1 },
  { slug:"shuttle-run",           name:"Shuttle Run",                      category:"monostructural",subcategory:"Running",            group:"",                        subgroup:"",              equipment:[],                       difficulty:1 },
  { slug:"hill-run",              name:"Hill Run",                         category:"monostructural",subcategory:"Running",            group:"",                        subgroup:"",              equipment:[],                       difficulty:2 },
  { slug:"rowing",                name:"Concept2 Rowing",                  category:"monostructural",subcategory:"Rowing",             group:"",                        subgroup:"",              equipment:["rower"],                difficulty:1 },
  { slug:"bike-erg",              name:"Concept2 BikeErg",                 category:"monostructural",subcategory:"Cycling",            group:"",                        subgroup:"",              equipment:["bike erg"],             difficulty:1 },
  { slug:"assault-bike",          name:"Assault Bike / Echo Bike",        category:"monostructural",subcategory:"Cycling",            group:"",                        subgroup:"",              equipment:["assault bike"],         difficulty:1, youtubeId:"HGolqRm6uS0" },
  { slug:"single-under",          name:"Single Under",                     category:"monostructural",subcategory:"Skipping",           group:"",                        subgroup:"",              equipment:["jump rope"],            difficulty:1, youtubeId:"BkHioMQlXGI" },
  { slug:"double-under",          name:"Double Under",                     category:"monostructural",subcategory:"Skipping",           group:"",                        subgroup:"",              equipment:["jump rope"],            difficulty:3 },
  { slug:"crossovers",            name:"Crossovers",                       category:"monostructural",subcategory:"Skipping",           group:"",                        subgroup:"",              equipment:["jump rope"],            difficulty:4 },
  { slug:"heavy-rope",            name:"Heavy Rope",                       category:"monostructural",subcategory:"Skipping",           group:"",                        subgroup:"",              equipment:["heavy rope"],           difficulty:3 },
  { slug:"freestyle-swimming",    name:"Freestyle Swimming",              category:"monostructural",subcategory:"Swimming",           group:"",                        subgroup:"",              equipment:[],                       difficulty:2 },
  { slug:"open-water-swimming",   name:"Open Water Swimming",             category:"monostructural",subcategory:"Swimming",           group:"",                        subgroup:"",              equipment:[],                       difficulty:3 },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helper utilities
// ─────────────────────────────────────────────────────────────────────────────

const DETAILED_SLUGS = new Set(MOVEMENTS.map(m => m.slug));

/** All movements: detailed MOVEMENTS entries + catalog stubs (no duplicates) */
export function getAllMovements(): MovementCatalogEntry[] {
  const stubs = MOVEMENT_CATALOG.filter(m => !DETAILED_SLUGS.has(m.slug));
  return [...MOVEMENTS, ...stubs];
}

/** Returns full Movement if detail exists, otherwise catalog stub */
export function getMovementBySlug(slug: string): MovementCatalogEntry | undefined {
  return MOVEMENTS.find(m => m.slug === slug) ?? MOVEMENT_CATALOG.find(m => m.slug === slug);
}

/** Returns full Movement detail (or undefined if only stub) */
export function getMovementDetail(slug: string): Movement | undefined {
  return MOVEMENTS.find(m => m.slug === slug);
}

export function getMovementsByCategory(category: MovementCategory): MovementCatalogEntry[] {
  return getAllMovements().filter(m => m.category === category);
}

export function getRelatedMovements(movement: Movement): MovementCatalogEntry[] {
  const slugs = new Set([
    ...movement.prerequisites,
    ...movement.regressions,
    ...movement.progressions,
    ...movement.related,
  ]);
  return getAllMovements().filter(m => slugs.has(m.slug));
}
