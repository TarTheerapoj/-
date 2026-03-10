export type Division = "Men Rx" | "Women Rx" | "Men Scaled" | "Women Scaled" | "Men Masters 35-39" | "Women Masters 35-39" | "Men Masters 40-44" | "Women Masters 40-44";

export interface WorkoutScore {
  workoutId: string;
  score: string;
  rank: number;
  tiebreak?: number;
}

export interface Athlete {
  id: string;
  name: string;
  affiliate: string;
  division: Division;
  overallRank: number;
  overallScore: number;
  age: number;
  province: string;
  workoutScores: WorkoutScore[];
}

export const ATHLETES: Athlete[] = [
  {
    id: "a001",
    name: "ธนวัฒน์ ศรีสมบัติ",
    affiliate: "CrossFit Bangkok",
    division: "Men Rx",
    overallRank: 1,
    overallScore: 4,
    age: 28,
    province: "กรุงเทพฯ",
    workoutScores: [
      { workoutId: "25.1", score: "245 reps", rank: 1 },
      { workoutId: "25.2", score: "180 lb / 4:32", rank: 1 },
      { workoutId: "25.3", score: "320 reps", rank: 2 },
    ],
  },
  {
    id: "a002",
    name: "กฤษณ์ วงศ์สมุทร",
    affiliate: "CrossFit Chiang Mai",
    division: "Men Rx",
    overallRank: 2,
    overallScore: 7,
    age: 31,
    province: "เชียงใหม่",
    workoutScores: [
      { workoutId: "25.1", score: "238 reps", rank: 3 },
      { workoutId: "25.2", score: "180 lb / 4:45", rank: 2 },
      { workoutId: "25.3", score: "318 reps", rank: 2 },
    ],
  },
  {
    id: "a003",
    name: "ปิยะ มหาชัย",
    affiliate: "CrossFit Phuket",
    division: "Men Rx",
    overallRank: 3,
    overallScore: 10,
    age: 26,
    province: "ภูเก็ต",
    workoutScores: [
      { workoutId: "25.1", score: "240 reps", rank: 2 },
      { workoutId: "25.2", score: "155 lb / 5:12", rank: 5 },
      { workoutId: "25.3", score: "322 reps", rank: 3 },
    ],
  },
  {
    id: "a004",
    name: "สุรชัย ทองดี",
    affiliate: "CrossFit Bangkok",
    division: "Men Rx",
    overallRank: 4,
    overallScore: 15,
    age: 33,
    province: "กรุงเทพฯ",
    workoutScores: [
      { workoutId: "25.1", score: "225 reps", rank: 6 },
      { workoutId: "25.2", score: "180 lb / 5:01", rank: 4 },
      { workoutId: "25.3", score: "315 reps", rank: 5 },
    ],
  },
  {
    id: "a005",
    name: "อภิชัย รุ่งเรือง",
    affiliate: "CrossFit Korat",
    division: "Men Rx",
    overallRank: 5,
    overallScore: 18,
    age: 29,
    province: "นครราชสีมา",
    workoutScores: [
      { workoutId: "25.1", score: "228 reps", rank: 5 },
      { workoutId: "25.2", score: "155 lb / 4:58", rank: 3 },
      { workoutId: "25.3", score: "308 reps", rank: 10 },
    ],
  },
  {
    id: "a006",
    name: "นภาพร สุขใจ",
    affiliate: "CrossFit Bangkok",
    division: "Women Rx",
    overallRank: 1,
    overallScore: 3,
    age: 27,
    province: "กรุงเทพฯ",
    workoutScores: [
      { workoutId: "25.1", score: "198 reps", rank: 1 },
      { workoutId: "25.2", score: "125 lb / 5:21", rank: 1 },
      { workoutId: "25.3", score: "265 reps", rank: 1 },
    ],
  },
  {
    id: "a007",
    name: "วรรณิษา พลอยงาม",
    affiliate: "CrossFit Chiang Mai",
    division: "Women Rx",
    overallRank: 2,
    overallScore: 8,
    age: 24,
    province: "เชียงใหม่",
    workoutScores: [
      { workoutId: "25.1", score: "192 reps", rank: 3 },
      { workoutId: "25.2", score: "125 lb / 5:45", rank: 3 },
      { workoutId: "25.3", score: "258 reps", rank: 2 },
    ],
  },
  {
    id: "a008",
    name: "กมลวรรณ ใจดี",
    affiliate: "CrossFit Pattaya",
    division: "Women Rx",
    overallRank: 3,
    overallScore: 9,
    age: 30,
    province: "ชลบุรี",
    workoutScores: [
      { workoutId: "25.1", score: "195 reps", rank: 2 },
      { workoutId: "25.2", score: "105 lb / 5:33", rank: 4 },
      { workoutId: "25.3", score: "252 reps", rank: 3 },
    ],
  },
  {
    id: "a009",
    name: "ชนาภา วิไลรัตน์",
    affiliate: "CrossFit Phuket",
    division: "Women Rx",
    overallRank: 4,
    overallScore: 14,
    age: 32,
    province: "ภูเก็ต",
    workoutScores: [
      { workoutId: "25.1", score: "185 reps", rank: 6 },
      { workoutId: "25.2", score: "125 lb / 5:28", rank: 2 },
      { workoutId: "25.3", score: "244 reps", rank: 6 },
    ],
  },
  {
    id: "a010",
    name: "ปณิตา เจริญสุข",
    affiliate: "CrossFit Korat",
    division: "Women Rx",
    overallRank: 5,
    overallScore: 17,
    age: 25,
    province: "นครราชสีมา",
    workoutScores: [
      { workoutId: "25.1", score: "188 reps", rank: 4 },
      { workoutId: "25.2", score: "105 lb / 6:02", rank: 7 },
      { workoutId: "25.3", score: "248 reps", rank: 6 },
    ],
  },
];

export const AFFILIATES = [
  // ภาคกลาง — กรุงเทพฯ
  { name: "Crossfit Naga",             athletes: 64, province: "กรุงเทพฯ",        region: "ภาคกลาง" },
  { name: "Thonglor CrossFit",         athletes: 58, province: "กรุงเทพฯ",        region: "ภาคกลาง" },
  { name: "East West CrossFit",        athletes: 42, province: "กรุงเทพฯ",        region: "ภาคกลาง" },
  { name: "CrossFit Peak 365",         athletes: 36, province: "กรุงเทพฯ",        region: "ภาคกลาง" },
  { name: "IAOT CrossFit",             athletes: 31, province: "กรุงเทพฯ",        region: "ภาคกลาง" },
  { name: "Hundred Ten CrossFit",      athletes: 31, province: "กรุงเทพฯ",        region: "ภาคกลาง" },
  { name: "CrossFit Ten500",           athletes: 28, province: "กรุงเทพฯ",        region: "ภาคกลาง" },
  { name: "Power Up CrossFit",         athletes: 23, province: "กรุงเทพฯ",        region: "ภาคกลาง" },
  { name: "CrossFit TenFive Bangwa",   athletes: 9,  province: "กรุงเทพฯ",        region: "ภาคกลาง" },
  { name: "Arbkk CrossFit",            athletes: 7,  province: "กรุงเทพฯ",        region: "ภาคกลาง" },
  { name: "Podium Gym CrossFit",       athletes: 2,  province: "กรุงเทพฯ",        region: "ภาคกลาง" },
  // ภาคเหนือ
  { name: "TNB CrossFit",              athletes: 33, province: "เชียงใหม่",       region: "ภาคเหนือ" },
  { name: "CrossFit Pulmo",            athletes: 64, province: "เชียงใหม่",       region: "ภาคเหนือ" },
  { name: "CrossFit Chiang Mai",       athletes: 44, province: "เชียงใหม่",       region: "ภาคเหนือ" },
  // ภาคใต้ — ภูเก็ต
  { name: "Motus Cultura CrossFit",    athletes: 42, province: "ภูเก็ต",          region: "ภาคใต้" },
  { name: "CrossFit DCHKT",            athletes: 32, province: "ภูเก็ต",          region: "ภาคใต้" },
  { name: "CrossFit Pirate Camp",      athletes: 16, province: "ภูเก็ต",          region: "ภาคใต้" },
  { name: "CrossFit Phuket",           athletes: 3,  province: "ภูเก็ต",          region: "ภาคใต้" },
  { name: "Lyuten Fitness",            athletes: 0,  province: "ภูเก็ต",          region: "ภาคใต้" },
  { name: "CrossFit Siam 31",          athletes: 0,  province: "ภูเก็ต",          region: "ภาคใต้" },
  // ภาคใต้ — สุราษฎร์ธานี
  { name: "Lamai Beach CrossFit",      athletes: 6,  province: "สุราษฎร์ธานี",   region: "ภาคใต้" },
  { name: "Koh Samui CrossFit",        athletes: 4,  province: "สุราษฎร์ธานี",   region: "ภาคใต้" },
  { name: "Koh Tao CrossFit",          athletes: 0,  province: "สุราษฎร์ธานี",   region: "ภาคใต้" },
  // ภาคตะวันตก
  { name: "CrossFit Hua Hin",          athletes: 23, province: "ประจวบคีรีขันธ์", region: "ภาคตะวันตก" },
];

export const PROVINCE_STATS = [
  { province: "กรุงเทพฯ",        region: "ภาคกลาง",     athletes: 331, affiliates: 11 },
  { province: "เชียงใหม่",       region: "ภาคเหนือ",    athletes: 141, affiliates: 3  },
  { province: "ภูเก็ต",          region: "ภาคใต้",      athletes: 93,  affiliates: 6  },
  { province: "ประจวบคีรีขันธ์", region: "ภาคตะวันตก",  athletes: 23,  affiliates: 1  },
  { province: "สุราษฎร์ธานี",   region: "ภาคใต้",      athletes: 10,  affiliates: 3  },
];
