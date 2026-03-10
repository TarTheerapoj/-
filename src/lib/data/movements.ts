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
];

// ─────────────────────────────────────────────────────────────────────────────
// MOVEMENT CATALOG — All 127 movements from CSV (stubs, no detailed data yet)
// Detailed entries in MOVEMENTS above take precedence via getAllMovements()
// ─────────────────────────────────────────────────────────────────────────────

export const MOVEMENT_CATALOG: MovementCatalogEntry[] = [
  // WEIGHTLIFTING — BARBELL — OLYMPIC LIFTS
  { slug:"muscle-snatch",         name:"Muscle Snatch",                    category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Snatch",        equipment:["barbell"],              difficulty:3 },
  { slug:"power-snatch",          name:"Power Snatch",                     category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Snatch",        equipment:["barbell"],              difficulty:4 },
  { slug:"squat-snatch",          name:"Squat Snatch",                     category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Snatch",        equipment:["barbell"],              difficulty:5 },
  { slug:"hang-snatch",           name:"Hang Snatch",                      category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Snatch",        equipment:["barbell"],              difficulty:4 },
  { slug:"snatch-balance",        name:"Snatch Balance",                   category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Snatch",        equipment:["barbell"],              difficulty:4 },
  { slug:"snatch-pull",           name:"Snatch Pull",                      category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Snatch",        equipment:["barbell"],              difficulty:3 },
  { slug:"muscle-clean",          name:"Muscle Clean",                     category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Clean",         equipment:["barbell"],              difficulty:3 },
  { slug:"power-clean",           name:"Power Clean",                      category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Clean",         equipment:["barbell"],              difficulty:3 },
  { slug:"squat-clean",           name:"Squat Clean",                      category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Clean",         equipment:["barbell"],              difficulty:4 },
  { slug:"hang-clean",            name:"Hang Clean",                       category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Clean",         equipment:["barbell"],              difficulty:3 },
  { slug:"clean-pull",            name:"Clean Pull",                       category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Clean",         equipment:["barbell"],              difficulty:3 },
  { slug:"push-jerk",             name:"Push Jerk",                        category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Jerk",          equipment:["barbell"],              difficulty:3 },
  { slug:"split-jerk",            name:"Split Jerk",                       category:"weightlifting", subcategory:"Barbell",            group:"Olympic Lifts",          subgroup:"Jerk",          equipment:["barbell"],              difficulty:4 },
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
  { slug:"conventional-deadlift", name:"Conventional Deadlift",           category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Deadlift",      equipment:["barbell"],              difficulty:2 },
  { slug:"sumo-deadlift",         name:"Sumo Deadlift",                    category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Deadlift",      equipment:["barbell"],              difficulty:2 },
  { slug:"romanian-deadlift",     name:"Romanian Deadlift (RDL)",         category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Deadlift",      equipment:["barbell"],              difficulty:2 },
  { slug:"stiff-legged-deadlift", name:"Stiff Legged Deadlift",           category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Deadlift",      equipment:["barbell"],              difficulty:2 },
  { slug:"deficit-deadlift",      name:"Deficit Deadlift",                 category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Deadlift",      equipment:["barbell","plates"],     difficulty:3 },
  { slug:"trap-bar-deadlift",     name:"Trap Bar Deadlift",                category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Deadlift",      equipment:["trap bar"],             difficulty:2 },
  { slug:"strict-press",          name:"Strict Press",                     category:"weightlifting", subcategory:"Barbell",            group:"Powerlifting & Strength", subgroup:"Press",         equipment:["barbell"],              difficulty:2 },
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
  { slug:"kb-swing",              name:"Kettlebell Swing",                 category:"weightlifting", subcategory:"Kettlebell",         group:"",                        subgroup:"",              equipment:["kettlebell"],           difficulty:1 },
  { slug:"goblet-squat",          name:"Goblet Squat",                     category:"weightlifting", subcategory:"Kettlebell",         group:"",                        subgroup:"",              equipment:["kettlebell"],           difficulty:1 },
  { slug:"kb-snatch",             name:"Kettlebell Snatch",                category:"weightlifting", subcategory:"Kettlebell",         group:"",                        subgroup:"",              equipment:["kettlebell"],           difficulty:3 },
  { slug:"kb-clean-and-press",    name:"Kettlebell Clean & Press",        category:"weightlifting", subcategory:"Kettlebell",         group:"",                        subgroup:"",              equipment:["kettlebell"],           difficulty:3 },
  { slug:"turkish-get-up",        name:"Turkish Get-Up (TGU)",            category:"weightlifting", subcategory:"Kettlebell",         group:"",                        subgroup:"",              equipment:["kettlebell"],           difficulty:4 },
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
  { slug:"butterfly-pull-up",     name:"Butterfly Pull-Up",               category:"gymnastics",    subcategory:"Upper Body - Pulling",group:"Vertical Pull",          subgroup:"Pull-up",       equipment:["pull-up bar"],          difficulty:4 },
  { slug:"strict-chest-to-bar",   name:"Strict Chest-to-Bar",             category:"gymnastics",    subcategory:"Upper Body - Pulling",group:"Vertical Pull",          subgroup:"Chest-to-Bar",  equipment:["pull-up bar"],          difficulty:4 },
  { slug:"chest-to-bar",          name:"Kipping Chest-to-Bar",            category:"gymnastics",    subcategory:"Upper Body - Pulling",group:"Vertical Pull",          subgroup:"Chest-to-Bar",  equipment:["pull-up bar"],          difficulty:4 },
  { slug:"butterfly-chest-to-bar",name:"Butterfly Chest-to-Bar",          category:"gymnastics",    subcategory:"Upper Body - Pulling",group:"Vertical Pull",          subgroup:"Chest-to-Bar",  equipment:["pull-up bar"],          difficulty:5 },
  { slug:"strict-muscle-up",      name:"Strict Muscle-Up",                category:"gymnastics",    subcategory:"Upper Body - Pulling",group:"Vertical Pull",          subgroup:"Muscle-up",     equipment:["pull-up bar","rings"],  difficulty:5 },
  { slug:"kipping-muscle-up",     name:"Kipping Muscle-Up",               category:"gymnastics",    subcategory:"Upper Body - Pulling",group:"Vertical Pull",          subgroup:"Muscle-up",     equipment:["pull-up bar","rings"],  difficulty:5 },
  { slug:"rope-climb",            name:"Rope Climb",                       category:"gymnastics",    subcategory:"Upper Body - Pulling",group:"Climbing",               subgroup:"",              equipment:["rope"],                 difficulty:4 },
  { slug:"pegboard",              name:"Pegboard Ascents",                 category:"gymnastics",    subcategory:"Upper Body - Pulling",group:"Climbing",               subgroup:"",              equipment:["pegboard"],             difficulty:5 },
  { slug:"ring-row",              name:"Ring Row",                         category:"gymnastics",    subcategory:"Upper Body - Pulling",group:"Horizontal Pull",        subgroup:"",              equipment:["rings"],                difficulty:1 },
  // GYMNASTICS — UPPER BODY PUSHING
  { slug:"handstand-push-up",     name:"Strict HSPU",                      category:"gymnastics",    subcategory:"Upper Body - Pushing",group:"Vertical Push",          subgroup:"HSPU",          equipment:["wall"],                 difficulty:4 },
  { slug:"kipping-hspu",          name:"Kipping HSPU",                     category:"gymnastics",    subcategory:"Upper Body - Pushing",group:"Vertical Push",          subgroup:"HSPU",          equipment:["wall"],                 difficulty:4 },
  { slug:"deficit-hspu",          name:"Deficit HSPU",                     category:"gymnastics",    subcategory:"Upper Body - Pushing",group:"Vertical Push",          subgroup:"HSPU",          equipment:["wall","plates"],        difficulty:5 },
  { slug:"push-up",               name:"Push-Up",                          category:"gymnastics",    subcategory:"Upper Body - Pushing",group:"Horizontal Push",        subgroup:"Push-up",       equipment:[],                       difficulty:1 },
  { slug:"hand-release-push-up",  name:"Hand Release Push-Up",            category:"gymnastics",    subcategory:"Upper Body - Pushing",group:"Horizontal Push",        subgroup:"Push-up",       equipment:[],                       difficulty:1 },
  { slug:"deficit-push-up",       name:"Deficit Push-Up",                  category:"gymnastics",    subcategory:"Upper Body - Pushing",group:"Horizontal Push",        subgroup:"Push-up",       equipment:["plates"],               difficulty:2 },
  { slug:"strict-dip",            name:"Strict Dip",                       category:"gymnastics",    subcategory:"Upper Body - Pushing",group:"Horizontal Push",        subgroup:"Dip",           equipment:["dip bar","rings"],      difficulty:2 },
  { slug:"kipping-dip",           name:"Kipping Dip",                      category:"gymnastics",    subcategory:"Upper Body - Pushing",group:"Horizontal Push",        subgroup:"Dip",           equipment:["dip bar","rings"],      difficulty:3 },
  // GYMNASTICS — MIDLINE
  { slug:"handstand-walk",        name:"Handstand Walk",                   category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Handstand",              subgroup:"",              equipment:[],                       difficulty:5 },
  { slug:"handstand-hold",        name:"Handstand Hold",                   category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Handstand",              subgroup:"",              equipment:[],                       difficulty:4 },
  { slug:"handstand-obstacle-walk",name:"Handstand Obstacle Walk",        category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Handstand",              subgroup:"",              equipment:[],                       difficulty:5 },
  { slug:"knees-to-elbows",       name:"Knees-to-Elbows",                  category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Hanging",                subgroup:"",              equipment:["pull-up bar"],          difficulty:2 },
  { slug:"toes-to-bar",           name:"Toes-to-Bar",                      category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Hanging",                subgroup:"",              equipment:["pull-up bar"],          difficulty:3 },
  { slug:"strict-toes-to-bar",    name:"Strict Toes-to-Bar",              category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Hanging",                subgroup:"",              equipment:["pull-up bar"],          difficulty:4 },
  { slug:"l-sit",                 name:"L-Sit / Tuck Sit",                category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Hanging",                subgroup:"",              equipment:["pull-up bar","parallettes"],difficulty:3 },
  { slug:"abmat-sit-up",          name:"AbMat Sit-Up",                     category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Floor",                  subgroup:"",              equipment:["abmat"],                difficulty:1 },
  { slug:"v-up",                  name:"V-Up / Tuck-Up",                  category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Floor",                  subgroup:"",              equipment:[],                       difficulty:2 },
  { slug:"hollow-rock",           name:"Hollow Rock / Hold",              category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Floor",                  subgroup:"",              equipment:[],                       difficulty:2 },
  { slug:"superman-rock",         name:"Superman Rock / Hold",            category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Floor",                  subgroup:"",              equipment:[],                       difficulty:1 },
  { slug:"plank",                 name:"Plank",                            category:"gymnastics",    subcategory:"Midline & Trunk",      group:"Floor",                  subgroup:"",              equipment:[],                       difficulty:1 },
  { slug:"ghd-sit-up",            name:"GHD Sit-Up",                       category:"gymnastics",    subcategory:"Midline & Trunk",      group:"GHD",                    subgroup:"",              equipment:["GHD"],                  difficulty:2 },
  { slug:"ghd-hip-extension",     name:"GHD Hip Extension",               category:"gymnastics",    subcategory:"Midline & Trunk",      group:"GHD",                    subgroup:"",              equipment:["GHD"],                  difficulty:2 },
  { slug:"ghd-back-extension",    name:"GHD Back Extension",              category:"gymnastics",    subcategory:"Midline & Trunk",      group:"GHD",                    subgroup:"",              equipment:["GHD"],                  difficulty:2 },
  { slug:"sorensen-hold",         name:"Sorensen Hold",                    category:"gymnastics",    subcategory:"Midline & Trunk",      group:"GHD",                    subgroup:"",              equipment:["GHD"],                  difficulty:3 },
  // GYMNASTICS — LOWER BODY
  { slug:"air-squat",             name:"Air Squat",                        category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Squatting",            subgroup:"",              equipment:[],                       difficulty:1 },
  { slug:"pistol-squat",          name:"Pistol Squat",                     category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Squatting",            subgroup:"",              equipment:[],                       difficulty:4 },
  { slug:"shrimp-squat",          name:"Shrimp / Skater Squat",           category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Squatting",            subgroup:"",              equipment:[],                       difficulty:3 },
  { slug:"cossack-squat",         name:"Cossack Squat",                    category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Squatting",            subgroup:"",              equipment:[],                       difficulty:3 },
  { slug:"walking-lunge",         name:"Walking Lunge",                    category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Lunging",              subgroup:"",              equipment:[],                       difficulty:1 },
  { slug:"reverse-lunge",         name:"Reverse Lunge",                    category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Lunging",              subgroup:"",              equipment:[],                       difficulty:1 },
  { slug:"jumping-lunge",         name:"Jumping Lunge",                    category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Lunging",              subgroup:"",              equipment:[],                       difficulty:2 },
  { slug:"box-jump",              name:"Box Jump",                         category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Jumping",              subgroup:"",              equipment:["box"],                  difficulty:2 },
  { slug:"box-jump-over",         name:"Box Jump Over",                    category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Jumping",              subgroup:"",              equipment:["box"],                  difficulty:2 },
  { slug:"broad-jump",            name:"Broad Jump",                       category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Jumping",              subgroup:"",              equipment:[],                       difficulty:2 },
  { slug:"burpee",                name:"Burpee",                           category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Burpee",               subgroup:"",              equipment:[],                       difficulty:1 },
  { slug:"bar-facing-burpee",     name:"Bar-Facing Burpee",               category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Burpee",               subgroup:"",              equipment:["barbell"],              difficulty:2 },
  { slug:"burpee-box-jump-over",  name:"Burpee Box Jump Over",            category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Burpee",               subgroup:"",              equipment:["box"],                  difficulty:2 },
  { slug:"burpee-over-bar",       name:"Burpee Over Bar",                  category:"gymnastics",    subcategory:"Lower Body & Plyometrics",group:"Burpee",               subgroup:"",              equipment:["barbell"],              difficulty:2 },
  // MONOSTRUCTURAL
  { slug:"sprint",                name:"Sprint",                           category:"monostructural",subcategory:"Running",            group:"",                        subgroup:"",              equipment:[],                       difficulty:1 },
  { slug:"distance-run",          name:"Distance Run",                     category:"monostructural",subcategory:"Running",            group:"",                        subgroup:"",              equipment:[],                       difficulty:1 },
  { slug:"shuttle-run",           name:"Shuttle Run",                      category:"monostructural",subcategory:"Running",            group:"",                        subgroup:"",              equipment:[],                       difficulty:1 },
  { slug:"hill-run",              name:"Hill Run",                         category:"monostructural",subcategory:"Running",            group:"",                        subgroup:"",              equipment:[],                       difficulty:2 },
  { slug:"rowing",                name:"Concept2 Rowing",                  category:"monostructural",subcategory:"Rowing",             group:"",                        subgroup:"",              equipment:["rower"],                difficulty:1 },
  { slug:"bike-erg",              name:"Concept2 BikeErg",                 category:"monostructural",subcategory:"Cycling",            group:"",                        subgroup:"",              equipment:["bike erg"],             difficulty:1 },
  { slug:"assault-bike",          name:"Assault Bike / Echo Bike",        category:"monostructural",subcategory:"Cycling",            group:"",                        subgroup:"",              equipment:["assault bike"],         difficulty:1 },
  { slug:"single-under",          name:"Single Under",                     category:"monostructural",subcategory:"Skipping",           group:"",                        subgroup:"",              equipment:["jump rope"],            difficulty:1 },
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
