# ลุยดิวะ

**CrossFit Open Thailand 2026 — Analysis & Stats Web App**

วิเคราะห์ผลการแข่งขัน CrossFit Open 26 ของนักกีฬาไทย ครอบคลุมทุก Division พร้อมสถิติเชิงลึกจากข้อมูลจริง

---

## Pages & Status

| หน้า | สถานะ | หมายเหตุ |
|---|---|---|
| `/` Landing | ✅ Live | Hero, ticker, news cards, workout list, participation snapshot |
| `/dashboard` | ✅ Live | KPI strip, participation chart 2017–2026, affiliate growth chart |
| `/workouts` | ✅ Live | 26.1 (มีข้อมูล CSV), 26.2 (รอ scores), 26.3 (Coming Soon) |
| `/leaderboard` | 🔒 Coming Soon | UI พร้อม แต่ซ่อนรอข้อมูลจริง |
| `/provinces` | 🔒 Coming Soon | UI พร้อม แต่ซ่อนรอข้อมูลจริง |

---

## Stats (2026)

- **604** นักกีฬา (ชาย 308 · หญิง 296)
- **24** CrossFit Affiliates
- **8** Divisions: Men/Women Rx, Scaled, Masters 35-39, Masters 40-44
- ข้อมูลการแข่งขันย้อนหลัง 2017–2026

---

## Tech Stack

- **Framework**: Next.js 16 + TypeScript + App Router
- **Styling**: TailwindCSS v4 + shadcn/ui components
- **Charts**: Recharts (AreaChart, LineChart, BarChart)
- **Font**: Sarabun (Thai + Latin, Google Fonts)
- **Icons**: Lucide React
- **Data**: CSV (26.1 rankings) + static TypeScript data files

---

## Getting Started

```bash
git clone https://github.com/TarTheerapoj/Thailand-CrossFit-Open.git
cd Thailand-CrossFit-Open

npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

```bash
# Production build
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, Sarabun font, Navbar
│   ├── page.tsx            # Landing page
│   ├── dashboard/          # ภาพรวม — KPI + charts
│   ├── workouts/           # วิเคราะห์ Workouts 26.1–26.3
│   ├── leaderboard/        # ลีดเดอร์บอร์ด (Coming Soon)
│   └── provinces/          # สถิติรายจังหวัด (Coming Soon)
├── components/
│   ├── Navbar.tsx
│   ├── ComingSoonWrapper.tsx
│   └── charts/
│       ├── ParticipationChart.tsx   # AreaChart 2017–2026
│       ├── AffiliateGrowthChart.tsx # LineChart affiliates
│       └── OpenRegistrationChart.tsx
├── hooks/
│   └── useRankingsData.ts   # Fetch + parse CSV rankings
└── lib/
    └── data/
        ├── workouts.ts      # WORKOUTS + SUMMARY_STATS
        └── athletes.ts      # ATHLETES + PROVINCE_STATS + AFFILIATES

public/
├── data/
│   └── thailand-26-1-rankings.csv   # Real rankings data for 26.1
└── workouts/
    ├── 26-1.jpg
    └── 26-2.jpg
```

---

## Data Sources

| ข้อมูล | แหล่งที่มา | สถานะ |
|---|---|---|
| 26.1 Thailand Rankings | `public/data/thailand-26-1-rankings.csv` | ✅ จริง |
| Participation 2017–2026 | `SUMMARY_STATS.participationByYear` | ✅ จริง |
| Affiliate growth 2022–2026 | hardcoded in `AffiliateGrowthChart` | ✅ จริง |
| 26.2 / 26.3 scores | — | ⏳ รอ update |
| Leaderboard athletes | `athletes.ts` | ⏳ placeholder |
| Province breakdown | `athletes.ts` | ⏳ placeholder |

---

## Pending (Coming Soon)

- [ ] 26.2 · 26.3 score data เมื่อปิดรับผล
- [ ] Leaderboard จริงจาก CrossFit API / manual CSV
- [ ] Province breakdown map
- [ ] Athlete profile pages

---

**Made for Thai CrossFit Community · CrossFit Open 26**
