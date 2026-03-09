"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ImageIcon } from "lucide-react";
import { WORKOUTS, type WorkoutDivision } from "@/lib/data/workouts";
import { useRankingsData } from "@/hooks/useRankingsData";
import { cn } from "@/lib/utils";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

const DIVISION_COLORS: Record<WorkoutDivision["name"], { bg: string; text: string; border: string }> = {
  Rx:          { bg: "#9BEC00", text: "#111", border: "#9BEC00" },
  Scaled:      { bg: "#111",    text: "#9BEC00", border: "#333" },
  Foundations: { bg: "#3b82f6", text: "#fff", border: "#3b82f6" },
};

type GenderFilter = "all" | "men" | "women";

const GENDER_FILTERS: { key: GenderFilter; label: string; color: string; text: string }[] = [
  { key: "all",   label: "ทั้งหมด", color: "#9BEC00", text: "#111" },
  { key: "men",   label: "ชาย ♂",  color: "#3b82f6", text: "#fff" },
  { key: "women", label: "หญิง ♀", color: "#f472b6", text: "#fff" },
];

const BIN_SIZE = 20;

function buildSharedBins(menReps: number[], womenReps: number[], gender: GenderFilter) {
  const all = [...menReps, ...womenReps];
  if (!all.length) return [];
  const globalMin = Math.floor(Math.min(...all) / BIN_SIZE) * BIN_SIZE;
  const globalMax = Math.ceil(Math.max(...all) / BIN_SIZE) * BIN_SIZE;
  const bins = [];
  for (let start = globalMin; start < globalMax; start += BIN_SIZE) {
    const label = `${start}`;
    bins.push({
      label,
      ชาย: gender !== "women" ? menReps.filter(r => r >= start && r < start + BIN_SIZE).length : undefined,
      หญิง: gender !== "men" ? womenReps.filter(r => r >= start && r < start + BIN_SIZE).length : undefined,
    });
  }
  return bins;
}

function ScoreDistributionChart({
  menReps, womenReps, gender,
}: {
  menReps: number[];
  womenReps: number[];
  gender: GenderFilter;
}) {
  const bins = useMemo(
    () => buildSharedBins(menReps, womenReps, gender),
    [menReps, womenReps, gender]
  );

  if (!bins.length) return (
    <div className="flex items-center justify-center h-36 text-xs text-muted-foreground">
      ยังไม่มีข้อมูล
    </div>
  );

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={bins} barGap={2} barCategoryGap="20%"
        margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" vertical={false} />
        <XAxis
          dataKey="label"
          tick={{ fontSize: 10, fill: "#888" }}
          axisLine={false}
          tickLine={false}
          label={{ value: "reps", position: "insideBottom", offset: -2, fontSize: 10, fill: "#aaa" }}
        />
        <YAxis
          tick={{ fontSize: 10, fill: "#888" }}
          axisLine={false}
          tickLine={false}
          allowDecimals={false}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--color-card, #fff)",
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: 8,
            fontSize: 12,
          }}
          cursor={{ fill: "rgba(0,0,0,0.04)" }}
          formatter={(value, name) => [`${value ?? 0} คน`, name as string]}
          labelFormatter={(label) => `${label}–${Number(label) + BIN_SIZE - 1} reps`}
        />
        {gender !== "women" && (
          <Bar dataKey="ชาย" fill="#3b82f6" radius={[3, 3, 0, 0]} maxBarSize={28} />
        )}
        {gender !== "men" && (
          <Bar dataKey="หญิง" fill="#f472b6" radius={[3, 3, 0, 0]} maxBarSize={28} />
        )}
        {gender === "all" && <Legend wrapperStyle={{ fontSize: 11, paddingTop: 8 }} />}
      </BarChart>
    </ResponsiveContainer>
  );
}

function RxStatsBar({ label, value, color, sub }: { label: string; value: string; color: string; sub?: string }) {
  return (
    <div className="rounded-xl border border-border/50 p-4 space-y-1">
      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{label}</p>
      <p className="text-2xl font-black" style={{ color }}>{value}</p>
      {sub && <p className="text-[10px] text-muted-foreground">{sub}</p>}
    </div>
  );
}

function WorkoutStats({ workout }: { workout: typeof WORKOUTS[0] }) {
  const [gender, setGender] = useState<GenderFilter>("all");
  const { data: raw, loading } = useRankingsData();

  const { men, women, menReps, womenReps } = useMemo(() => {
    const isValid = (reps: string, div: string) =>
      reps && reps !== "0" && reps !== "Null" && div && div !== "-";

    const menReps = raw
      .filter(r => isValid(r["Reps Men"], r["Division Men"]) && r["Division Men"] === "RX")
      .map(r => Number(r["Reps Men"]));

    const womenReps = raw
      .filter(r => isValid(r["Reps Women"], r["Division Women"]) && r["Division Women"] === "RX")
      .map(r => Number(r["Reps Women"]));

    const avg = (arr: number[]) =>
      arr.length ? Math.round(arr.reduce((s, v) => s + v, 0) / arr.length) : 0;

    return {
      men:   { count: menReps.length,   avg: avg(menReps),   top: Math.max(0, ...menReps)   },
      women: { count: womenReps.length, avg: avg(womenReps), top: Math.max(0, ...womenReps) },
      menReps,
      womenReps,
    };
  }, [raw]);

  const hasData = workout.id === "26.1";
  const showMen   = gender !== "women";
  const showWomen = gender !== "men";

  if (!hasData) {
    return (
      <div className="rounded-xl border border-dashed border-border/40 bg-secondary/20 px-6 py-8 flex flex-col items-center gap-3 text-center">
        <div className="w-10 h-10 rounded-full border border-border/30 flex items-center justify-center">
          <Clock className="w-5 h-5 text-muted-foreground/40" />
        </div>
        <div>
          <p className="text-sm font-black text-muted-foreground/50 uppercase tracking-widest">รอ Update คะแนน</p>
          <p className="text-xs text-muted-foreground/40 mt-1">ข้อมูลสถิติ RX จะแสดงหลังจากปิดรับคะแนน</p>
        </div>
        <div className="flex gap-4 mt-1">
          {[
            { label: "ค่าเฉลี่ย ชาย", color: "#3b82f6" },
            { label: "สูงสุด ชาย",    color: "#3b82f6" },
            { label: "ค่าเฉลี่ย หญิง", color: "#f472b6" },
            { label: "สูงสุด หญิง",   color: "#f472b6" },
          ].map(({ label, color }) => (
            <div key={label} className="rounded-lg border border-border/30 bg-secondary/30 px-4 py-3 text-center min-w-[80px]">
              <p className="text-[9px] text-muted-foreground/40 uppercase tracking-widest mb-1">{label}</p>
              <p className="text-xl font-black text-muted-foreground/20">—</p>
              <p className="text-[9px] text-muted-foreground/30 mt-0.5">reps</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Section header + filter */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="text-xs font-black text-foreground/50 uppercase tracking-widest">
            สถิติ RX · Thailand {workout.name}
          </p>
          {!loading && (
            <p className="text-[10px] text-muted-foreground mt-0.5">
              ชาย {men.count} คน · หญิง {women.count} คน
            </p>
          )}
        </div>
        <div className="flex gap-1.5">
          {GENDER_FILTERS.map(f => (
            <button key={f.key} onClick={() => setGender(f.key)}
              className="px-3 py-1 rounded text-xs font-bold transition-all"
              style={{
                backgroundColor: gender === f.key ? f.color : "transparent",
                color: gender === f.key ? f.text : "#888",
                border: `1.5px solid ${gender === f.key ? f.color : "#ccc"}`,
              }}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="py-8 flex items-center justify-center">
          <p className="text-xs text-muted-foreground">กำลังโหลดข้อมูล...</p>
        </div>
      ) : (
        <>
          {/* Stat cards: avg + top per gender */}
          <div className={cn("grid gap-3", showMen && showWomen ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2")}>
            {showMen && <>
              <RxStatsBar label="ค่าเฉลี่ย ชาย" value={`${men.avg}`} color="#3b82f6" sub="reps" />
              <RxStatsBar label="สูงสุด ชาย" value={`${men.top}`} color="#3b82f6" sub="reps" />
            </>}
            {showWomen && <>
              <RxStatsBar label="ค่าเฉลี่ย หญิง" value={`${women.avg}`} color="#f472b6" sub="reps" />
              <RxStatsBar label="สูงสุด หญิง" value={`${women.top}`} color="#f472b6" sub="reps" />
            </>}
          </div>

          {/* Score distribution bar chart */}
          <div className="rounded-xl border border-border/50 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">การกระจายคะแนน · Rx</p>
              <div className="flex gap-3">
                {showMen   && <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground"><span className="w-2.5 h-2.5 rounded-sm inline-block bg-blue-500" />ชาย</span>}
                {showWomen && <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground"><span className="w-2.5 h-2.5 rounded-sm inline-block bg-pink-400" />หญิง</span>}
              </div>
            </div>
            <ScoreDistributionChart menReps={menReps} womenReps={womenReps} gender={gender} />
          </div>
        </>
      )}
    </div>
  );
}

function WorkoutCard({ workout }: { workout: typeof WORKOUTS[0] }) {
  const [activeDivision, setActiveDivision] = useState<WorkoutDivision["name"]>("Rx");
  const div = workout.divisions.find(d => d.name === activeDivision) ?? workout.divisions[0];

  return (
    <Card className="border-border/50 bg-card overflow-hidden">
      <div className="h-1" style={{ background: "linear-gradient(to right, #9BEC00, #9BEC0060, transparent)" }} />

      <CardHeader className="pb-3">
        <div className="flex items-start gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <CardTitle className="text-2xl font-black tracking-tight">{workout.name}</CardTitle>
              <Badge className="bg-primary/15 text-primary border-primary/20 text-xs" variant="outline">
                {workout.type}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                <Clock className="w-3 h-3 mr-1" />
                {workout.timeCapMinutes} นาที
              </Badge>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {workout.movements.map(m => (
                <Badge key={m} variant="outline" className="text-xs border-border/50 text-muted-foreground">{m}</Badge>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">

        {/* Row 1: Image + Division description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Image + Notes */}
          <div className="space-y-3">
            {workout.image ? (
              <div className="w-full rounded-xl overflow-hidden border border-border/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={workout.image} alt={`CrossFit Open ${workout.name}`}
                  className="w-full object-cover object-center" style={{ maxHeight: 280 }} />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center w-full min-h-[220px] rounded-xl border-2 border-dashed border-border/40 bg-secondary/30">
                <ImageIcon className="w-8 h-8 text-muted-foreground/30 mb-2" />
                <p className="text-xs text-muted-foreground/50">อัปโหลดรูปประกอบ workout</p>
              </div>
            )}

            {/* Notes */}
            {workout.notes && workout.notes.length > 0 && (
              <div className="rounded-lg border border-border/50 overflow-hidden">
                <div className="px-3 py-2 bg-secondary/50 border-b border-border/40">
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">NOTES</p>
                </div>
                <div className="px-3 py-2.5 space-y-1.5">
                  {workout.notes.map((note, i) => (
                    <p key={i} className="text-xs text-muted-foreground leading-relaxed">• {note}</p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Division tabs + description + equipment */}
          <div className="space-y-3">
            <div className="flex gap-2">
              {workout.divisions.map(d => {
                const c = DIVISION_COLORS[d.name];
                const isActive = activeDivision === d.name;
                return (
                  <button key={d.name} onClick={() => setActiveDivision(d.name)}
                    className="px-3 py-1 rounded-md text-xs font-black tracking-wide transition-all"
                    style={{
                      backgroundColor: isActive ? c.bg : "transparent",
                      color: isActive ? c.text : "#888",
                      border: `1.5px solid ${isActive ? c.border : "#ccc"}`,
                    }}>
                    {d.name}
                  </button>
                );
              })}
            </div>

            <pre className="text-xs text-muted-foreground whitespace-pre-wrap bg-secondary/50 rounded-lg p-3 font-sans leading-relaxed border border-border/50">
              {div.description}
            </pre>

            <div className="rounded-lg border border-border/50 overflow-hidden">
              <div className="px-3 py-2 bg-secondary/50 border-b border-border/40">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">อุปกรณ์ · {activeDivision}</p>
              </div>
              <div className="grid grid-cols-2 divide-x divide-border/40">
                <div className="px-3 py-2.5">
                  <p className="text-[10px] font-bold text-muted-foreground mb-1">♀ หญิง</p>
                  <p className="text-xs leading-snug">{div.equipment.women}</p>
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-[10px] font-bold text-muted-foreground mb-1">♂ ชาย</p>
                  <p className="text-xs leading-snug">{div.equipment.men}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Stats + chart (full width) */}
        <WorkoutStats workout={workout} />

      </CardContent>
    </Card>
  );
}

function ComingSoonWorkoutCard({ workout }: { workout: typeof WORKOUTS[0] }) {
  return (
    <Card className="border-border/50 bg-card overflow-hidden">
      <div className="h-1" style={{ background: "linear-gradient(to right, #9BEC0040, transparent)" }} />
      <CardContent className="py-12 flex flex-col items-center justify-center gap-4 text-center">
        <div className="w-14 h-14 rounded-full border-2 border-dashed border-border/40 flex items-center justify-center">
          <Clock className="w-6 h-6 text-muted-foreground/40" />
        </div>
        <div>
          <p className="text-2xl font-black tracking-tight text-muted-foreground/30">{workout.name}</p>
          <p className="text-sm font-bold text-muted-foreground/50 mt-1">รอประกาศ Workout</p>
          <p className="text-xs text-muted-foreground/40 mt-0.5">Coming Soon · CrossFit Open 2026</p>
        </div>
        <Badge variant="outline" className="text-xs border-border/30 text-muted-foreground/40">
          ยังไม่ประกาศ
        </Badge>
      </CardContent>
    </Card>
  );
}

export default function WorkoutsPage() {
  return (
    <div className="space-y-8">
      {/* Dark hero header */}
      <section className="bg-[#111] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5" style={{ backgroundColor: "#9BEC00" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-black tracking-[0.25em] uppercase" style={{ color: "#9BEC00" }}>CrossFit Open 2026 · Thailand</span>
            <div className="h-px w-8" style={{ backgroundColor: "#9BEC00", opacity: 0.4 }} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            <span style={{ color: "#9BEC00" }}>Workouts</span> วิเคราะห์เวิร์คเอาท์
          </h1>
          <p className="text-white/50 text-sm mt-2">
            รายละเอียดและสถิติแต่ละ Workout ใน CrossFit Open 2026
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-10">
          {WORKOUTS.map((workout) =>
            workout.comingSoon ? (
              <ComingSoonWorkoutCard key={workout.id} workout={workout} />
            ) : (
              <WorkoutCard key={workout.id} workout={workout} />
            )
          )}
        </div>
      </div>
    </div>
  );
}
