# Trackle - Uma Musume Racetrack & Race Guesser 🏇

An interactive Wordle-style daily guessing game and comprehensive racetrack asset archive for **Uma Musume Pretty Derby**, built with data and diagrams from [GameTora](https://gametora.com/umamusume/racetracks) and Cygames' in-game database.

---

## 🎮 Game Modes

### 1. Course Guesser ("Trackle")
- Guess the mystery **Racetrack + Distance Combo** (e.g. *Niigata 2000m Outer* or *Hanshin 3200m*) in 6 tries.
- Color feedback on 8 attributes:
  - **Racetrack**: 🟩 Exact match, 🟨 Same region (e.g. Hokkaido, Kanto, Kansai).
  - **Distance**: 🟩 Exact length, 🟨 Within ±200m, ⬆️/⬇️ distance arrow.
  - **Distance Type**: *Short*, *Mile*, *Medium*, *Long* (strict Green/Gray).
  - **Surface**: *Turf* or *Dirt*.
  - **Direction**: *Right*, *Left*, or *Straight*.
  - **Late Race Start (終盤入り)**: 2/3 distance acceleration activation point (*C2*, *C3*, *C4*, *Backstretch*, *Homestretch*). 🟨 indicates matching type (Corner vs Corner, or Straight vs Straight).
  - **Corners**: Total corner count with ⬆️/⬇️ arrow.
  - **Final Straight**: Length in meters with ⬆️/⬇️ arrow.

### 2. Race Guesser
- Guess the exact in-game race name (e.g. *Arima Kinen*, *Tokyo Yushun / Japanese Derby*, *February Stakes*).
- Feedback attributes include:
  - **Grade**: *G1*, *G2*, *G3*, *OP* with ⬆️/⬇️ prestige arrow.
  - **Racetrack**: 🟩 Exact, 🟨 Same region.
  - **Distance & Type**: Meters and division category.
  - **Surface**: Turf vs Dirt.
  - **Turn**: Exact half-month calendar schedule (e.g. *Late December*, *Early May*). 🟨 Within ±2 turns (1 month). ⬆️/⬇️ indicates whether the race is earlier or later in the calendar year.
  - **Late Race**: Exact acceleration phase start.

---

## 🚀 Running Locally

```bash
# Serve the directory locally
python3 -m http.server 8080

# Open in browser:
# http://localhost:8080
```

---

## 📁 Repository & Asset Structure
```
gametora_racetracks/
├── index.html           # Trackle Single-Page Application
├── style.css            # Dark/cyberpunk glassmorphism design system
├── app.js               # Game state, audio synthesis, autocomplete, share generator
├── courses_data.js      # 138 official course datasets with late-race spurt points
├── races_data.js        # 304 official in-game races mapped to career calendar turns
├── tracks_data.js       # 17 track metadata definitions
├── icons/               # 512x512 full badges and 128x128 thumbnails for 17 tracks
├── ui_icons/            # Course markers (spurt start, slope up/down, corners, straights, direction arrows)
├── tracks/              # Full & simple diagrams for all 138 course configurations
├── racetrack_data.json  # Complete structured JSON catalog
└── README.md
```

## Racetracks & Sublinks

| ID | Racetrack | Sublink | Courses | Track Icon |
|---|---|---|---|---|
| 10001 | **Sapporo** | [https://gametora.com/umamusume/racetracks/sapporo](https://gametora.com/umamusume/racetracks/sapporo) | 8 | `[icons/sapporo_thumb.png]` |
| 10002 | **Hakodate** | [https://gametora.com/umamusume/racetracks/hakodate](https://gametora.com/umamusume/racetracks/hakodate) | 8 | `[icons/hakodate_thumb.png]` |
| 10003 | **Niigata** | [https://gametora.com/umamusume/racetracks/niigata](https://gametora.com/umamusume/racetracks/niigata) | 12 | `[icons/niigata_thumb.png]` |
| 10004 | **Fukushima** | [https://gametora.com/umamusume/racetracks/fukushima](https://gametora.com/umamusume/racetracks/fukushima) | 7 | `[icons/fukushima_thumb.png]` |
| 10005 | **Nakayama** | [https://gametora.com/umamusume/racetracks/nakayama](https://gametora.com/umamusume/racetracks/nakayama) | 11 | `[icons/nakayama_thumb.png]` |
| 10006 | **Tokyo** | [https://gametora.com/umamusume/racetracks/tokyo](https://gametora.com/umamusume/racetracks/tokyo) | 13 | `[icons/tokyo_thumb.png]` |
| 10007 | **Chukyo** | [https://gametora.com/umamusume/racetracks/chukyo](https://gametora.com/umamusume/racetracks/chukyo) | 9 | `[icons/chukyo_thumb.png]` |
| 10008 | **Kyoto** | [https://gametora.com/umamusume/racetracks/kyoto](https://gametora.com/umamusume/racetracks/kyoto) | 15 | `[icons/kyoto_thumb.png]` |
| 10009 | **Hanshin** | [https://gametora.com/umamusume/racetracks/hanshin](https://gametora.com/umamusume/racetracks/hanshin) | 14 | `[icons/hanshin_thumb.png]` |
| 10010 | **Kokura** | [https://gametora.com/umamusume/racetracks/kokura](https://gametora.com/umamusume/racetracks/kokura) | 7 | `[icons/kokura_thumb.png]` |
| 10101 | **Ooi (Tokyo City Keiba)** | [https://gametora.com/umamusume/racetracks/ooi](https://gametora.com/umamusume/racetracks/ooi) | 3 | `[icons/ooi_thumb.png]` |
| 10103 | **Kawasaki** | [https://gametora.com/umamusume/racetracks/kawasaki](https://gametora.com/umamusume/racetracks/kawasaki) | 3 | `[icons/kawasaki_thumb.png]` |
| 10104 | **Funabashi** | [https://gametora.com/umamusume/racetracks/funabashi](https://gametora.com/umamusume/racetracks/funabashi) | 4 | `[icons/funabashi_thumb.png]` |
| 10105 | **Morioka** | [https://gametora.com/umamusume/racetracks/morioka](https://gametora.com/umamusume/racetracks/morioka) | 4 | `[icons/morioka_thumb.png]` |
| 10201 | **ParisLongchamp** | [https://gametora.com/umamusume/racetracks/longchamp](https://gametora.com/umamusume/racetracks/longchamp) | 1 | `[icons/longchamp_thumb.png]` |
| 10202 | **Santa Anita Park** | [https://gametora.com/umamusume/racetracks/santa_anita](https://gametora.com/umamusume/racetracks/santa_anita) | 10 | `[icons/santa_anita_thumb.png]` |
| 10203 | **Del Mar** | [https://gametora.com/umamusume/racetracks/del_mar](https://gametora.com/umamusume/racetracks/del_mar) | 9 | `[icons/del_mar_thumb.png]` |

## Detailed Course Breakdown

### Sapporo (Sapporo)
- **Sublink:** [https://gametora.com/umamusume/racetracks/sapporo](https://gametora.com/umamusume/racetracks/sapporo)
- **Total Courses:** 8
- **Track Badge (Full):** `icons/sapporo_icon.png`
- **Track Badge (Thumb):** `icons/sapporo_thumb.png`

| Course ID | Distance | Terrain | In/Out | Diagram Files |
|---|---|---|---|---|
| 10101 | 1200m | Turf | Standard | `tracks/sapporo/sapporo_1200m_turf_10101_full.png`<br>`tracks/sapporo/sapporo_1200m_turf_10101_simple.png` |
| 10102 | 1500m | Turf | Standard | `tracks/sapporo/sapporo_1500m_turf_10102_full.png`<br>`tracks/sapporo/sapporo_1500m_turf_10102_simple.png` |
| 10103 | 1800m | Turf | Standard | `tracks/sapporo/sapporo_1800m_turf_10103_full.png`<br>`tracks/sapporo/sapporo_1800m_turf_10103_simple.png`<br>`tracks/sapporo/sapporo_1800m_turf_10103_lap1_full.png`<br>`tracks/sapporo/sapporo_1800m_turf_10103_lap1_simple.png`<br>`tracks/sapporo/sapporo_1800m_turf_10103_lap2_full.png`<br>`tracks/sapporo/sapporo_1800m_turf_10103_lap2_simple.png` |
| 10104 | 2000m | Turf | Standard | `tracks/sapporo/sapporo_2000m_turf_10104_full.png`<br>`tracks/sapporo/sapporo_2000m_turf_10104_simple.png`<br>`tracks/sapporo/sapporo_2000m_turf_10104_lap1_full.png`<br>`tracks/sapporo/sapporo_2000m_turf_10104_lap1_simple.png`<br>`tracks/sapporo/sapporo_2000m_turf_10104_lap2_full.png`<br>`tracks/sapporo/sapporo_2000m_turf_10104_lap2_simple.png` |
| 10105 | 2600m | Turf | Standard | `tracks/sapporo/sapporo_2600m_turf_10105_full.png`<br>`tracks/sapporo/sapporo_2600m_turf_10105_simple.png`<br>`tracks/sapporo/sapporo_2600m_turf_10105_lap1_full.png`<br>`tracks/sapporo/sapporo_2600m_turf_10105_lap1_simple.png`<br>`tracks/sapporo/sapporo_2600m_turf_10105_lap2_full.png`<br>`tracks/sapporo/sapporo_2600m_turf_10105_lap2_simple.png` |
| 10106 | 1000m | Dirt | Standard | `tracks/sapporo/sapporo_1000m_dirt_10106_full.png`<br>`tracks/sapporo/sapporo_1000m_dirt_10106_simple.png` |
| 10107 | 1700m | Dirt | Standard | `tracks/sapporo/sapporo_1700m_dirt_10107_full.png`<br>`tracks/sapporo/sapporo_1700m_dirt_10107_simple.png`<br>`tracks/sapporo/sapporo_1700m_dirt_10107_lap1_full.png`<br>`tracks/sapporo/sapporo_1700m_dirt_10107_lap1_simple.png`<br>`tracks/sapporo/sapporo_1700m_dirt_10107_lap2_full.png`<br>`tracks/sapporo/sapporo_1700m_dirt_10107_lap2_simple.png` |
| 10108 | 2400m | Dirt | Standard | `tracks/sapporo/sapporo_2400m_dirt_10108_full.png`<br>`tracks/sapporo/sapporo_2400m_dirt_10108_simple.png`<br>`tracks/sapporo/sapporo_2400m_dirt_10108_lap1_full.png`<br>`tracks/sapporo/sapporo_2400m_dirt_10108_lap1_simple.png`<br>`tracks/sapporo/sapporo_2400m_dirt_10108_lap2_full.png`<br>`tracks/sapporo/sapporo_2400m_dirt_10108_lap2_simple.png` |

### Hakodate (Hakodate)
- **Sublink:** [https://gametora.com/umamusume/racetracks/hakodate](https://gametora.com/umamusume/racetracks/hakodate)
- **Total Courses:** 8
- **Track Badge (Full):** `icons/hakodate_icon.png`
- **Track Badge (Thumb):** `icons/hakodate_thumb.png`

| Course ID | Distance | Terrain | In/Out | Diagram Files |
|---|---|---|---|---|
| 10201 | 1000m | Turf | Standard | `tracks/hakodate/hakodate_1000m_turf_10201_full.png`<br>`tracks/hakodate/hakodate_1000m_turf_10201_simple.png` |
| 10202 | 1200m | Turf | Standard | `tracks/hakodate/hakodate_1200m_turf_10202_full.png`<br>`tracks/hakodate/hakodate_1200m_turf_10202_simple.png` |
| 10203 | 1800m | Turf | Standard | `tracks/hakodate/hakodate_1800m_turf_10203_full.png`<br>`tracks/hakodate/hakodate_1800m_turf_10203_simple.png`<br>`tracks/hakodate/hakodate_1800m_turf_10203_lap1_full.png`<br>`tracks/hakodate/hakodate_1800m_turf_10203_lap1_simple.png`<br>`tracks/hakodate/hakodate_1800m_turf_10203_lap2_full.png`<br>`tracks/hakodate/hakodate_1800m_turf_10203_lap2_simple.png` |
| 10204 | 2000m | Turf | Standard | `tracks/hakodate/hakodate_2000m_turf_10204_full.png`<br>`tracks/hakodate/hakodate_2000m_turf_10204_simple.png`<br>`tracks/hakodate/hakodate_2000m_turf_10204_lap1_full.png`<br>`tracks/hakodate/hakodate_2000m_turf_10204_lap1_simple.png`<br>`tracks/hakodate/hakodate_2000m_turf_10204_lap2_full.png`<br>`tracks/hakodate/hakodate_2000m_turf_10204_lap2_simple.png` |
| 10205 | 2600m | Turf | Standard | `tracks/hakodate/hakodate_2600m_turf_10205_full.png`<br>`tracks/hakodate/hakodate_2600m_turf_10205_simple.png`<br>`tracks/hakodate/hakodate_2600m_turf_10205_lap1_full.png`<br>`tracks/hakodate/hakodate_2600m_turf_10205_lap1_simple.png`<br>`tracks/hakodate/hakodate_2600m_turf_10205_lap2_full.png`<br>`tracks/hakodate/hakodate_2600m_turf_10205_lap2_simple.png` |
| 10206 | 1000m | Dirt | Standard | `tracks/hakodate/hakodate_1000m_dirt_10206_full.png`<br>`tracks/hakodate/hakodate_1000m_dirt_10206_simple.png` |
| 10207 | 1700m | Dirt | Standard | `tracks/hakodate/hakodate_1700m_dirt_10207_full.png`<br>`tracks/hakodate/hakodate_1700m_dirt_10207_simple.png`<br>`tracks/hakodate/hakodate_1700m_dirt_10207_lap1_full.png`<br>`tracks/hakodate/hakodate_1700m_dirt_10207_lap1_simple.png`<br>`tracks/hakodate/hakodate_1700m_dirt_10207_lap2_full.png`<br>`tracks/hakodate/hakodate_1700m_dirt_10207_lap2_simple.png` |
| 10208 | 2400m | Dirt | Standard | `tracks/hakodate/hakodate_2400m_dirt_10208_full.png`<br>`tracks/hakodate/hakodate_2400m_dirt_10208_simple.png`<br>`tracks/hakodate/hakodate_2400m_dirt_10208_lap1_full.png`<br>`tracks/hakodate/hakodate_2400m_dirt_10208_lap1_simple.png`<br>`tracks/hakodate/hakodate_2400m_dirt_10208_lap2_full.png`<br>`tracks/hakodate/hakodate_2400m_dirt_10208_lap2_simple.png` |

### Niigata (Niigata)
- **Sublink:** [https://gametora.com/umamusume/racetracks/niigata](https://gametora.com/umamusume/racetracks/niigata)
- **Total Courses:** 12
- **Track Badge (Full):** `icons/niigata_icon.png`
- **Track Badge (Thumb):** `icons/niigata_thumb.png`

| Course ID | Distance | Terrain | In/Out | Diagram Files |
|---|---|---|---|---|
| 10301 | 1000m | Turf | Standard | `tracks/niigata/niigata_1000m_turf_10301_full.png`<br>`tracks/niigata/niigata_1000m_turf_10301_simple.png` |
| 10302 | 1200m | Turf | Inner | `tracks/niigata/niigata_1200m_turf_inner_10302_full.png`<br>`tracks/niigata/niigata_1200m_turf_inner_10302_simple.png` |
| 10303 | 1400m | Turf | Inner | `tracks/niigata/niigata_1400m_turf_inner_10303_full.png`<br>`tracks/niigata/niigata_1400m_turf_inner_10303_simple.png` |
| 10304 | 1600m | Turf | Outer | `tracks/niigata/niigata_1600m_turf_outer_10304_full.png`<br>`tracks/niigata/niigata_1600m_turf_outer_10304_simple.png` |
| 10305 | 1800m | Turf | Outer | `tracks/niigata/niigata_1800m_turf_outer_10305_full.png`<br>`tracks/niigata/niigata_1800m_turf_outer_10305_simple.png` |
| 10306 | 2000m | Turf | Inner | `tracks/niigata/niigata_2000m_turf_inner_10306_full.png`<br>`tracks/niigata/niigata_2000m_turf_inner_10306_simple.png`<br>`tracks/niigata/niigata_2000m_turf_inner_10306_lap1_full.png`<br>`tracks/niigata/niigata_2000m_turf_inner_10306_lap1_simple.png`<br>`tracks/niigata/niigata_2000m_turf_inner_10306_lap2_full.png`<br>`tracks/niigata/niigata_2000m_turf_inner_10306_lap2_simple.png` |
| 10307 | 2000m | Turf | Outer | `tracks/niigata/niigata_2000m_turf_outer_10307_full.png`<br>`tracks/niigata/niigata_2000m_turf_outer_10307_simple.png` |
| 10308 | 2200m | Turf | Inner | `tracks/niigata/niigata_2200m_turf_inner_10308_full.png`<br>`tracks/niigata/niigata_2200m_turf_inner_10308_simple.png`<br>`tracks/niigata/niigata_2200m_turf_inner_10308_lap1_full.png`<br>`tracks/niigata/niigata_2200m_turf_inner_10308_lap1_simple.png`<br>`tracks/niigata/niigata_2200m_turf_inner_10308_lap2_full.png`<br>`tracks/niigata/niigata_2200m_turf_inner_10308_lap2_simple.png` |
| 10309 | 2400m | Turf | Inner | `tracks/niigata/niigata_2400m_turf_inner_10309_full.png`<br>`tracks/niigata/niigata_2400m_turf_inner_10309_simple.png`<br>`tracks/niigata/niigata_2400m_turf_inner_10309_lap1_full.png`<br>`tracks/niigata/niigata_2400m_turf_inner_10309_lap1_simple.png`<br>`tracks/niigata/niigata_2400m_turf_inner_10309_lap2_full.png`<br>`tracks/niigata/niigata_2400m_turf_inner_10309_lap2_simple.png` |
| 10310 | 1200m | Dirt | Standard | `tracks/niigata/niigata_1200m_dirt_10310_full.png`<br>`tracks/niigata/niigata_1200m_dirt_10310_simple.png` |
| 10311 | 1800m | Dirt | Standard | `tracks/niigata/niigata_1800m_dirt_10311_full.png`<br>`tracks/niigata/niigata_1800m_dirt_10311_simple.png`<br>`tracks/niigata/niigata_1800m_dirt_10311_lap1_full.png`<br>`tracks/niigata/niigata_1800m_dirt_10311_lap1_simple.png`<br>`tracks/niigata/niigata_1800m_dirt_10311_lap2_full.png`<br>`tracks/niigata/niigata_1800m_dirt_10311_lap2_simple.png` |
| 10312 | 2500m | Dirt | Standard | `tracks/niigata/niigata_2500m_dirt_10312_full.png`<br>`tracks/niigata/niigata_2500m_dirt_10312_simple.png`<br>`tracks/niigata/niigata_2500m_dirt_10312_lap1_full.png`<br>`tracks/niigata/niigata_2500m_dirt_10312_lap1_simple.png`<br>`tracks/niigata/niigata_2500m_dirt_10312_lap2_full.png`<br>`tracks/niigata/niigata_2500m_dirt_10312_lap2_simple.png` |

### Fukushima (Fukushima)
- **Sublink:** [https://gametora.com/umamusume/racetracks/fukushima](https://gametora.com/umamusume/racetracks/fukushima)
- **Total Courses:** 7
- **Track Badge (Full):** `icons/fukushima_icon.png`
- **Track Badge (Thumb):** `icons/fukushima_thumb.png`

| Course ID | Distance | Terrain | In/Out | Diagram Files |
|---|---|---|---|---|
| 10401 | 1200m | Turf | Standard | `tracks/fukushima/fukushima_1200m_turf_10401_full.png`<br>`tracks/fukushima/fukushima_1200m_turf_10401_simple.png` |
| 10402 | 1800m | Turf | Standard | `tracks/fukushima/fukushima_1800m_turf_10402_full.png`<br>`tracks/fukushima/fukushima_1800m_turf_10402_simple.png`<br>`tracks/fukushima/fukushima_1800m_turf_10402_lap1_full.png`<br>`tracks/fukushima/fukushima_1800m_turf_10402_lap1_simple.png`<br>`tracks/fukushima/fukushima_1800m_turf_10402_lap2_full.png`<br>`tracks/fukushima/fukushima_1800m_turf_10402_lap2_simple.png` |
| 10403 | 2000m | Turf | Standard | `tracks/fukushima/fukushima_2000m_turf_10403_full.png`<br>`tracks/fukushima/fukushima_2000m_turf_10403_simple.png`<br>`tracks/fukushima/fukushima_2000m_turf_10403_lap1_full.png`<br>`tracks/fukushima/fukushima_2000m_turf_10403_lap1_simple.png`<br>`tracks/fukushima/fukushima_2000m_turf_10403_lap2_full.png`<br>`tracks/fukushima/fukushima_2000m_turf_10403_lap2_simple.png` |
| 10404 | 2600m | Turf | Standard | `tracks/fukushima/fukushima_2600m_turf_10404_full.png`<br>`tracks/fukushima/fukushima_2600m_turf_10404_simple.png`<br>`tracks/fukushima/fukushima_2600m_turf_10404_lap1_full.png`<br>`tracks/fukushima/fukushima_2600m_turf_10404_lap1_simple.png`<br>`tracks/fukushima/fukushima_2600m_turf_10404_lap2_full.png`<br>`tracks/fukushima/fukushima_2600m_turf_10404_lap2_simple.png` |
| 10405 | 1150m | Dirt | Standard | `tracks/fukushima/fukushima_1150m_dirt_10405_full.png`<br>`tracks/fukushima/fukushima_1150m_dirt_10405_simple.png` |
| 10406 | 1700m | Dirt | Standard | `tracks/fukushima/fukushima_1700m_dirt_10406_full.png`<br>`tracks/fukushima/fukushima_1700m_dirt_10406_simple.png`<br>`tracks/fukushima/fukushima_1700m_dirt_10406_lap1_full.png`<br>`tracks/fukushima/fukushima_1700m_dirt_10406_lap1_simple.png`<br>`tracks/fukushima/fukushima_1700m_dirt_10406_lap2_full.png`<br>`tracks/fukushima/fukushima_1700m_dirt_10406_lap2_simple.png` |
| 10407 | 2400m | Dirt | Standard | `tracks/fukushima/fukushima_2400m_dirt_10407_full.png`<br>`tracks/fukushima/fukushima_2400m_dirt_10407_simple.png`<br>`tracks/fukushima/fukushima_2400m_dirt_10407_lap1_full.png`<br>`tracks/fukushima/fukushima_2400m_dirt_10407_lap1_simple.png`<br>`tracks/fukushima/fukushima_2400m_dirt_10407_lap2_full.png`<br>`tracks/fukushima/fukushima_2400m_dirt_10407_lap2_simple.png` |

### Nakayama (Nakayama)
- **Sublink:** [https://gametora.com/umamusume/racetracks/nakayama](https://gametora.com/umamusume/racetracks/nakayama)
- **Total Courses:** 11
- **Track Badge (Full):** `icons/nakayama_icon.png`
- **Track Badge (Thumb):** `icons/nakayama_thumb.png`

| Course ID | Distance | Terrain | In/Out | Diagram Files |
|---|---|---|---|---|
| 10501 | 1200m | Turf | Outer | `tracks/nakayama/nakayama_1200m_turf_outer_10501_full.png`<br>`tracks/nakayama/nakayama_1200m_turf_outer_10501_simple.png` |
| 10502 | 1600m | Turf | Outer | `tracks/nakayama/nakayama_1600m_turf_outer_10502_full.png`<br>`tracks/nakayama/nakayama_1600m_turf_outer_10502_simple.png` |
| 10503 | 1800m | Turf | Inner | `tracks/nakayama/nakayama_1800m_turf_inner_10503_full.png`<br>`tracks/nakayama/nakayama_1800m_turf_inner_10503_simple.png`<br>`tracks/nakayama/nakayama_1800m_turf_inner_10503_lap1_full.png`<br>`tracks/nakayama/nakayama_1800m_turf_inner_10503_lap1_simple.png`<br>`tracks/nakayama/nakayama_1800m_turf_inner_10503_lap2_full.png`<br>`tracks/nakayama/nakayama_1800m_turf_inner_10503_lap2_simple.png` |
| 10504 | 2000m | Turf | Inner | `tracks/nakayama/nakayama_2000m_turf_inner_10504_full.png`<br>`tracks/nakayama/nakayama_2000m_turf_inner_10504_simple.png`<br>`tracks/nakayama/nakayama_2000m_turf_inner_10504_lap1_full.png`<br>`tracks/nakayama/nakayama_2000m_turf_inner_10504_lap1_simple.png`<br>`tracks/nakayama/nakayama_2000m_turf_inner_10504_lap2_full.png`<br>`tracks/nakayama/nakayama_2000m_turf_inner_10504_lap2_simple.png` |
| 10505 | 2200m | Turf | Outer | `tracks/nakayama/nakayama_2200m_turf_outer_10505_full.png`<br>`tracks/nakayama/nakayama_2200m_turf_outer_10505_simple.png`<br>`tracks/nakayama/nakayama_2200m_turf_outer_10505_lap1_full.png`<br>`tracks/nakayama/nakayama_2200m_turf_outer_10505_lap1_simple.png`<br>`tracks/nakayama/nakayama_2200m_turf_outer_10505_lap2_full.png`<br>`tracks/nakayama/nakayama_2200m_turf_outer_10505_lap2_simple.png` |
| 10506 | 2500m | Turf | Inner | `tracks/nakayama/nakayama_2500m_turf_inner_10506_full.png`<br>`tracks/nakayama/nakayama_2500m_turf_inner_10506_simple.png`<br>`tracks/nakayama/nakayama_2500m_turf_inner_10506_lap1_full.png`<br>`tracks/nakayama/nakayama_2500m_turf_inner_10506_lap1_simple.png`<br>`tracks/nakayama/nakayama_2500m_turf_inner_10506_lap2_full.png`<br>`tracks/nakayama/nakayama_2500m_turf_inner_10506_lap2_simple.png` |
| 10507 | 3600m | Turf | Inner | `tracks/nakayama/nakayama_3600m_turf_inner_10507_full.png`<br>`tracks/nakayama/nakayama_3600m_turf_inner_10507_simple.png`<br>`tracks/nakayama/nakayama_3600m_turf_inner_10507_lap1_full.png`<br>`tracks/nakayama/nakayama_3600m_turf_inner_10507_lap1_simple.png`<br>`tracks/nakayama/nakayama_3600m_turf_inner_10507_lap2_full.png`<br>`tracks/nakayama/nakayama_3600m_turf_inner_10507_lap2_simple.png`<br>`tracks/nakayama/nakayama_3600m_turf_inner_10507_lap3_full.png`<br>`tracks/nakayama/nakayama_3600m_turf_inner_10507_lap3_simple.png` |
| 10508 | 1200m | Dirt | Standard | `tracks/nakayama/nakayama_1200m_dirt_10508_full.png`<br>`tracks/nakayama/nakayama_1200m_dirt_10508_simple.png` |
| 10509 | 1800m | Dirt | Standard | `tracks/nakayama/nakayama_1800m_dirt_10509_full.png`<br>`tracks/nakayama/nakayama_1800m_dirt_10509_simple.png`<br>`tracks/nakayama/nakayama_1800m_dirt_10509_lap1_full.png`<br>`tracks/nakayama/nakayama_1800m_dirt_10509_lap1_simple.png`<br>`tracks/nakayama/nakayama_1800m_dirt_10509_lap2_full.png`<br>`tracks/nakayama/nakayama_1800m_dirt_10509_lap2_simple.png` |
| 10510 | 2400m | Dirt | Standard | `tracks/nakayama/nakayama_2400m_dirt_10510_full.png`<br>`tracks/nakayama/nakayama_2400m_dirt_10510_simple.png`<br>`tracks/nakayama/nakayama_2400m_dirt_10510_lap1_full.png`<br>`tracks/nakayama/nakayama_2400m_dirt_10510_lap1_simple.png`<br>`tracks/nakayama/nakayama_2400m_dirt_10510_lap2_full.png`<br>`tracks/nakayama/nakayama_2400m_dirt_10510_lap2_simple.png` |
| 10511 | 2500m | Dirt | Standard | `tracks/nakayama/nakayama_2500m_dirt_10511_full.png`<br>`tracks/nakayama/nakayama_2500m_dirt_10511_simple.png`<br>`tracks/nakayama/nakayama_2500m_dirt_10511_lap1_full.png`<br>`tracks/nakayama/nakayama_2500m_dirt_10511_lap1_simple.png`<br>`tracks/nakayama/nakayama_2500m_dirt_10511_lap2_full.png`<br>`tracks/nakayama/nakayama_2500m_dirt_10511_lap2_simple.png` |

### Tokyo (Tokyo)
- **Sublink:** [https://gametora.com/umamusume/racetracks/tokyo](https://gametora.com/umamusume/racetracks/tokyo)
- **Total Courses:** 13
- **Track Badge (Full):** `icons/tokyo_icon.png`
- **Track Badge (Thumb):** `icons/tokyo_thumb.png`

| Course ID | Distance | Terrain | In/Out | Diagram Files |
|---|---|---|---|---|
| 10601 | 1400m | Turf | Standard | `tracks/tokyo/tokyo_1400m_turf_10601_full.png`<br>`tracks/tokyo/tokyo_1400m_turf_10601_simple.png` |
| 10602 | 1600m | Turf | Standard | `tracks/tokyo/tokyo_1600m_turf_10602_full.png`<br>`tracks/tokyo/tokyo_1600m_turf_10602_simple.png` |
| 10603 | 1800m | Turf | Standard | `tracks/tokyo/tokyo_1800m_turf_10603_full.png`<br>`tracks/tokyo/tokyo_1800m_turf_10603_simple.png` |
| 10604 | 2000m | Turf | Standard | `tracks/tokyo/tokyo_2000m_turf_10604_full.png`<br>`tracks/tokyo/tokyo_2000m_turf_10604_simple.png` |
| 10605 | 2300m | Turf | Standard | `tracks/tokyo/tokyo_2300m_turf_10605_full.png`<br>`tracks/tokyo/tokyo_2300m_turf_10605_simple.png`<br>`tracks/tokyo/tokyo_2300m_turf_10605_lap1_full.png`<br>`tracks/tokyo/tokyo_2300m_turf_10605_lap1_simple.png`<br>`tracks/tokyo/tokyo_2300m_turf_10605_lap2_full.png`<br>`tracks/tokyo/tokyo_2300m_turf_10605_lap2_simple.png` |
| 10606 | 2400m | Turf | Standard | `tracks/tokyo/tokyo_2400m_turf_10606_full.png`<br>`tracks/tokyo/tokyo_2400m_turf_10606_simple.png`<br>`tracks/tokyo/tokyo_2400m_turf_10606_lap1_full.png`<br>`tracks/tokyo/tokyo_2400m_turf_10606_lap1_simple.png`<br>`tracks/tokyo/tokyo_2400m_turf_10606_lap2_full.png`<br>`tracks/tokyo/tokyo_2400m_turf_10606_lap2_simple.png` |
| 10607 | 2500m | Turf | Standard | `tracks/tokyo/tokyo_2500m_turf_10607_full.png`<br>`tracks/tokyo/tokyo_2500m_turf_10607_simple.png`<br>`tracks/tokyo/tokyo_2500m_turf_10607_lap1_full.png`<br>`tracks/tokyo/tokyo_2500m_turf_10607_lap1_simple.png`<br>`tracks/tokyo/tokyo_2500m_turf_10607_lap2_full.png`<br>`tracks/tokyo/tokyo_2500m_turf_10607_lap2_simple.png` |
| 10608 | 3400m | Turf | Standard | `tracks/tokyo/tokyo_3400m_turf_10608_full.png`<br>`tracks/tokyo/tokyo_3400m_turf_10608_simple.png`<br>`tracks/tokyo/tokyo_3400m_turf_10608_lap1_full.png`<br>`tracks/tokyo/tokyo_3400m_turf_10608_lap1_simple.png`<br>`tracks/tokyo/tokyo_3400m_turf_10608_lap2_full.png`<br>`tracks/tokyo/tokyo_3400m_turf_10608_lap2_simple.png` |
| 10609 | 1300m | Dirt | Standard | `tracks/tokyo/tokyo_1300m_dirt_10609_full.png`<br>`tracks/tokyo/tokyo_1300m_dirt_10609_simple.png` |
| 10610 | 1400m | Dirt | Standard | `tracks/tokyo/tokyo_1400m_dirt_10610_full.png`<br>`tracks/tokyo/tokyo_1400m_dirt_10610_simple.png` |
| 10611 | 1600m | Dirt | Standard | `tracks/tokyo/tokyo_1600m_dirt_10611_full.png`<br>`tracks/tokyo/tokyo_1600m_dirt_10611_simple.png` |
| 10612 | 2100m | Dirt | Standard | `tracks/tokyo/tokyo_2100m_dirt_10612_full.png`<br>`tracks/tokyo/tokyo_2100m_dirt_10612_simple.png`<br>`tracks/tokyo/tokyo_2100m_dirt_10612_lap1_full.png`<br>`tracks/tokyo/tokyo_2100m_dirt_10612_lap1_simple.png`<br>`tracks/tokyo/tokyo_2100m_dirt_10612_lap2_full.png`<br>`tracks/tokyo/tokyo_2100m_dirt_10612_lap2_simple.png` |
| 10613 | 2400m | Dirt | Standard | `tracks/tokyo/tokyo_2400m_dirt_10613_full.png`<br>`tracks/tokyo/tokyo_2400m_dirt_10613_simple.png`<br>`tracks/tokyo/tokyo_2400m_dirt_10613_lap1_full.png`<br>`tracks/tokyo/tokyo_2400m_dirt_10613_lap1_simple.png`<br>`tracks/tokyo/tokyo_2400m_dirt_10613_lap2_full.png`<br>`tracks/tokyo/tokyo_2400m_dirt_10613_lap2_simple.png` |

### Chukyo (Chukyo)
- **Sublink:** [https://gametora.com/umamusume/racetracks/chukyo](https://gametora.com/umamusume/racetracks/chukyo)
- **Total Courses:** 9
- **Track Badge (Full):** `icons/chukyo_icon.png`
- **Track Badge (Thumb):** `icons/chukyo_thumb.png`

| Course ID | Distance | Terrain | In/Out | Diagram Files |
|---|---|---|---|---|
| 10701 | 1200m | Turf | Standard | `tracks/chukyo/chukyo_1200m_turf_10701_full.png`<br>`tracks/chukyo/chukyo_1200m_turf_10701_simple.png` |
| 10702 | 1400m | Turf | Standard | `tracks/chukyo/chukyo_1400m_turf_10702_full.png`<br>`tracks/chukyo/chukyo_1400m_turf_10702_simple.png` |
| 10703 | 1600m | Turf | Standard | `tracks/chukyo/chukyo_1600m_turf_10703_full.png`<br>`tracks/chukyo/chukyo_1600m_turf_10703_simple.png` |
| 10704 | 2000m | Turf | Standard | `tracks/chukyo/chukyo_2000m_turf_10704_full.png`<br>`tracks/chukyo/chukyo_2000m_turf_10704_simple.png`<br>`tracks/chukyo/chukyo_2000m_turf_10704_lap1_full.png`<br>`tracks/chukyo/chukyo_2000m_turf_10704_lap1_simple.png`<br>`tracks/chukyo/chukyo_2000m_turf_10704_lap2_full.png`<br>`tracks/chukyo/chukyo_2000m_turf_10704_lap2_simple.png` |
| 10705 | 2200m | Turf | Standard | `tracks/chukyo/chukyo_2200m_turf_10705_full.png`<br>`tracks/chukyo/chukyo_2200m_turf_10705_simple.png`<br>`tracks/chukyo/chukyo_2200m_turf_10705_lap1_full.png`<br>`tracks/chukyo/chukyo_2200m_turf_10705_lap1_simple.png`<br>`tracks/chukyo/chukyo_2200m_turf_10705_lap2_full.png`<br>`tracks/chukyo/chukyo_2200m_turf_10705_lap2_simple.png` |
| 10706 | 1200m | Dirt | Standard | `tracks/chukyo/chukyo_1200m_dirt_10706_full.png`<br>`tracks/chukyo/chukyo_1200m_dirt_10706_simple.png` |
| 10707 | 1400m | Dirt | Standard | `tracks/chukyo/chukyo_1400m_dirt_10707_full.png`<br>`tracks/chukyo/chukyo_1400m_dirt_10707_simple.png` |
| 10708 | 1800m | Dirt | Standard | `tracks/chukyo/chukyo_1800m_dirt_10708_full.png`<br>`tracks/chukyo/chukyo_1800m_dirt_10708_simple.png`<br>`tracks/chukyo/chukyo_1800m_dirt_10708_lap1_full.png`<br>`tracks/chukyo/chukyo_1800m_dirt_10708_lap1_simple.png`<br>`tracks/chukyo/chukyo_1800m_dirt_10708_lap2_full.png`<br>`tracks/chukyo/chukyo_1800m_dirt_10708_lap2_simple.png` |
| 10709 | 1900m | Dirt | Standard | `tracks/chukyo/chukyo_1900m_dirt_10709_full.png`<br>`tracks/chukyo/chukyo_1900m_dirt_10709_simple.png`<br>`tracks/chukyo/chukyo_1900m_dirt_10709_lap1_full.png`<br>`tracks/chukyo/chukyo_1900m_dirt_10709_lap1_simple.png`<br>`tracks/chukyo/chukyo_1900m_dirt_10709_lap2_full.png`<br>`tracks/chukyo/chukyo_1900m_dirt_10709_lap2_simple.png` |

### Kyoto (Kyoto)
- **Sublink:** [https://gametora.com/umamusume/racetracks/kyoto](https://gametora.com/umamusume/racetracks/kyoto)
- **Total Courses:** 15
- **Track Badge (Full):** `icons/kyoto_icon.png`
- **Track Badge (Thumb):** `icons/kyoto_thumb.png`

| Course ID | Distance | Terrain | In/Out | Diagram Files |
|---|---|---|---|---|
| 10801 | 1200m | Turf | Inner | `tracks/kyoto/kyoto_1200m_turf_inner_10801_full.png`<br>`tracks/kyoto/kyoto_1200m_turf_inner_10801_simple.png` |
| 10802 | 1400m | Turf | Inner | `tracks/kyoto/kyoto_1400m_turf_inner_10802_full.png`<br>`tracks/kyoto/kyoto_1400m_turf_inner_10802_simple.png` |
| 10803 | 1400m | Turf | Outer | `tracks/kyoto/kyoto_1400m_turf_outer_10803_full.png`<br>`tracks/kyoto/kyoto_1400m_turf_outer_10803_simple.png` |
| 10804 | 1600m | Turf | Inner | `tracks/kyoto/kyoto_1600m_turf_inner_10804_full.png`<br>`tracks/kyoto/kyoto_1600m_turf_inner_10804_simple.png` |
| 10805 | 1600m | Turf | Outer | `tracks/kyoto/kyoto_1600m_turf_outer_10805_full.png`<br>`tracks/kyoto/kyoto_1600m_turf_outer_10805_simple.png` |
| 10806 | 1800m | Turf | Outer | `tracks/kyoto/kyoto_1800m_turf_outer_10806_full.png`<br>`tracks/kyoto/kyoto_1800m_turf_outer_10806_simple.png` |
| 10807 | 2000m | Turf | Inner | `tracks/kyoto/kyoto_2000m_turf_inner_10807_full.png`<br>`tracks/kyoto/kyoto_2000m_turf_inner_10807_simple.png`<br>`tracks/kyoto/kyoto_2000m_turf_inner_10807_lap1_full.png`<br>`tracks/kyoto/kyoto_2000m_turf_inner_10807_lap1_simple.png`<br>`tracks/kyoto/kyoto_2000m_turf_inner_10807_lap2_full.png`<br>`tracks/kyoto/kyoto_2000m_turf_inner_10807_lap2_simple.png` |
| 10808 | 2200m | Turf | Outer | `tracks/kyoto/kyoto_2200m_turf_outer_10808_full.png`<br>`tracks/kyoto/kyoto_2200m_turf_outer_10808_simple.png`<br>`tracks/kyoto/kyoto_2200m_turf_outer_10808_lap1_full.png`<br>`tracks/kyoto/kyoto_2200m_turf_outer_10808_lap1_simple.png`<br>`tracks/kyoto/kyoto_2200m_turf_outer_10808_lap2_full.png`<br>`tracks/kyoto/kyoto_2200m_turf_outer_10808_lap2_simple.png` |
| 10809 | 2400m | Turf | Outer | `tracks/kyoto/kyoto_2400m_turf_outer_10809_full.png`<br>`tracks/kyoto/kyoto_2400m_turf_outer_10809_simple.png`<br>`tracks/kyoto/kyoto_2400m_turf_outer_10809_lap1_full.png`<br>`tracks/kyoto/kyoto_2400m_turf_outer_10809_lap1_simple.png`<br>`tracks/kyoto/kyoto_2400m_turf_outer_10809_lap2_full.png`<br>`tracks/kyoto/kyoto_2400m_turf_outer_10809_lap2_simple.png` |
| 10810 | 3000m | Turf | Outer | `tracks/kyoto/kyoto_3000m_turf_outer_10810_full.png`<br>`tracks/kyoto/kyoto_3000m_turf_outer_10810_simple.png`<br>`tracks/kyoto/kyoto_3000m_turf_outer_10810_lap1_full.png`<br>`tracks/kyoto/kyoto_3000m_turf_outer_10810_lap1_simple.png`<br>`tracks/kyoto/kyoto_3000m_turf_outer_10810_lap2_full.png`<br>`tracks/kyoto/kyoto_3000m_turf_outer_10810_lap2_simple.png` |
| 10811 | 3200m | Turf | Outer | `tracks/kyoto/kyoto_3200m_turf_outer_10811_full.png`<br>`tracks/kyoto/kyoto_3200m_turf_outer_10811_simple.png`<br>`tracks/kyoto/kyoto_3200m_turf_outer_10811_lap1_full.png`<br>`tracks/kyoto/kyoto_3200m_turf_outer_10811_lap1_simple.png`<br>`tracks/kyoto/kyoto_3200m_turf_outer_10811_lap2_full.png`<br>`tracks/kyoto/kyoto_3200m_turf_outer_10811_lap2_simple.png` |
| 10812 | 1200m | Dirt | Standard | `tracks/kyoto/kyoto_1200m_dirt_10812_full.png`<br>`tracks/kyoto/kyoto_1200m_dirt_10812_simple.png` |
| 10813 | 1400m | Dirt | Standard | `tracks/kyoto/kyoto_1400m_dirt_10813_full.png`<br>`tracks/kyoto/kyoto_1400m_dirt_10813_simple.png` |
| 10814 | 1800m | Dirt | Standard | `tracks/kyoto/kyoto_1800m_dirt_10814_full.png`<br>`tracks/kyoto/kyoto_1800m_dirt_10814_simple.png`<br>`tracks/kyoto/kyoto_1800m_dirt_10814_lap1_full.png`<br>`tracks/kyoto/kyoto_1800m_dirt_10814_lap1_simple.png`<br>`tracks/kyoto/kyoto_1800m_dirt_10814_lap2_full.png`<br>`tracks/kyoto/kyoto_1800m_dirt_10814_lap2_simple.png` |
| 10815 | 1900m | Dirt | Standard | `tracks/kyoto/kyoto_1900m_dirt_10815_full.png`<br>`tracks/kyoto/kyoto_1900m_dirt_10815_simple.png`<br>`tracks/kyoto/kyoto_1900m_dirt_10815_lap1_full.png`<br>`tracks/kyoto/kyoto_1900m_dirt_10815_lap1_simple.png`<br>`tracks/kyoto/kyoto_1900m_dirt_10815_lap2_full.png`<br>`tracks/kyoto/kyoto_1900m_dirt_10815_lap2_simple.png` |

### Hanshin (Hanshin)
- **Sublink:** [https://gametora.com/umamusume/racetracks/hanshin](https://gametora.com/umamusume/racetracks/hanshin)
- **Total Courses:** 14
- **Track Badge (Full):** `icons/hanshin_icon.png`
- **Track Badge (Thumb):** `icons/hanshin_thumb.png`

| Course ID | Distance | Terrain | In/Out | Diagram Files |
|---|---|---|---|---|
| 10901 | 1200m | Turf | Inner | `tracks/hanshin/hanshin_1200m_turf_inner_10901_full.png`<br>`tracks/hanshin/hanshin_1200m_turf_inner_10901_simple.png` |
| 10902 | 1400m | Turf | Inner | `tracks/hanshin/hanshin_1400m_turf_inner_10902_full.png`<br>`tracks/hanshin/hanshin_1400m_turf_inner_10902_simple.png` |
| 10903 | 1600m | Turf | Outer | `tracks/hanshin/hanshin_1600m_turf_outer_10903_full.png`<br>`tracks/hanshin/hanshin_1600m_turf_outer_10903_simple.png` |
| 10904 | 1800m | Turf | Outer | `tracks/hanshin/hanshin_1800m_turf_outer_10904_full.png`<br>`tracks/hanshin/hanshin_1800m_turf_outer_10904_simple.png` |
| 10905 | 2000m | Turf | Inner | `tracks/hanshin/hanshin_2000m_turf_inner_10905_full.png`<br>`tracks/hanshin/hanshin_2000m_turf_inner_10905_simple.png`<br>`tracks/hanshin/hanshin_2000m_turf_inner_10905_lap1_full.png`<br>`tracks/hanshin/hanshin_2000m_turf_inner_10905_lap1_simple.png`<br>`tracks/hanshin/hanshin_2000m_turf_inner_10905_lap2_full.png`<br>`tracks/hanshin/hanshin_2000m_turf_inner_10905_lap2_simple.png` |
| 10906 | 2200m | Turf | Inner | `tracks/hanshin/hanshin_2200m_turf_inner_10906_full.png`<br>`tracks/hanshin/hanshin_2200m_turf_inner_10906_simple.png`<br>`tracks/hanshin/hanshin_2200m_turf_inner_10906_lap1_full.png`<br>`tracks/hanshin/hanshin_2200m_turf_inner_10906_lap1_simple.png`<br>`tracks/hanshin/hanshin_2200m_turf_inner_10906_lap2_full.png`<br>`tracks/hanshin/hanshin_2200m_turf_inner_10906_lap2_simple.png` |
| 10907 | 2400m | Turf | Outer | `tracks/hanshin/hanshin_2400m_turf_outer_10907_full.png`<br>`tracks/hanshin/hanshin_2400m_turf_outer_10907_simple.png`<br>`tracks/hanshin/hanshin_2400m_turf_outer_10907_lap1_full.png`<br>`tracks/hanshin/hanshin_2400m_turf_outer_10907_lap1_simple.png`<br>`tracks/hanshin/hanshin_2400m_turf_outer_10907_lap2_full.png`<br>`tracks/hanshin/hanshin_2400m_turf_outer_10907_lap2_simple.png` |
| 10908 | 2600m | Turf | Outer | `tracks/hanshin/hanshin_2600m_turf_outer_10908_full.png`<br>`tracks/hanshin/hanshin_2600m_turf_outer_10908_simple.png`<br>`tracks/hanshin/hanshin_2600m_turf_outer_10908_lap1_full.png`<br>`tracks/hanshin/hanshin_2600m_turf_outer_10908_lap1_simple.png`<br>`tracks/hanshin/hanshin_2600m_turf_outer_10908_lap2_full.png`<br>`tracks/hanshin/hanshin_2600m_turf_outer_10908_lap2_simple.png` |
| 10909 | 3000m | Turf | Inner | `tracks/hanshin/hanshin_3000m_turf_inner_10909_full.png`<br>`tracks/hanshin/hanshin_3000m_turf_inner_10909_simple.png`<br>`tracks/hanshin/hanshin_3000m_turf_inner_10909_lap1_full.png`<br>`tracks/hanshin/hanshin_3000m_turf_inner_10909_lap1_simple.png`<br>`tracks/hanshin/hanshin_3000m_turf_inner_10909_lap2_full.png`<br>`tracks/hanshin/hanshin_3000m_turf_inner_10909_lap2_simple.png` |
| 10910 | 1200m | Dirt | Standard | `tracks/hanshin/hanshin_1200m_dirt_10910_full.png`<br>`tracks/hanshin/hanshin_1200m_dirt_10910_simple.png` |
| 10911 | 1400m | Dirt | Standard | `tracks/hanshin/hanshin_1400m_dirt_10911_full.png`<br>`tracks/hanshin/hanshin_1400m_dirt_10911_simple.png` |
| 10912 | 1800m | Dirt | Standard | `tracks/hanshin/hanshin_1800m_dirt_10912_full.png`<br>`tracks/hanshin/hanshin_1800m_dirt_10912_simple.png`<br>`tracks/hanshin/hanshin_1800m_dirt_10912_lap1_full.png`<br>`tracks/hanshin/hanshin_1800m_dirt_10912_lap1_simple.png`<br>`tracks/hanshin/hanshin_1800m_dirt_10912_lap2_full.png`<br>`tracks/hanshin/hanshin_1800m_dirt_10912_lap2_simple.png` |
| 10913 | 2000m | Dirt | Standard | `tracks/hanshin/hanshin_2000m_dirt_10913_full.png`<br>`tracks/hanshin/hanshin_2000m_dirt_10913_simple.png`<br>`tracks/hanshin/hanshin_2000m_dirt_10913_lap1_full.png`<br>`tracks/hanshin/hanshin_2000m_dirt_10913_lap1_simple.png`<br>`tracks/hanshin/hanshin_2000m_dirt_10913_lap2_full.png`<br>`tracks/hanshin/hanshin_2000m_dirt_10913_lap2_simple.png` |
| 10914 | 3200m | Turf | Outer_to_inner | `tracks/hanshin/hanshin_3200m_turf_outer_to_inner_10914_full.png`<br>`tracks/hanshin/hanshin_3200m_turf_outer_to_inner_10914_simple.png`<br>`tracks/hanshin/hanshin_3200m_turf_outer_to_inner_10914_lap1_full.png`<br>`tracks/hanshin/hanshin_3200m_turf_outer_to_inner_10914_lap1_simple.png`<br>`tracks/hanshin/hanshin_3200m_turf_outer_to_inner_10914_lap2_full.png`<br>`tracks/hanshin/hanshin_3200m_turf_outer_to_inner_10914_lap2_simple.png` |

### Kokura (Kokura)
- **Sublink:** [https://gametora.com/umamusume/racetracks/kokura](https://gametora.com/umamusume/racetracks/kokura)
- **Total Courses:** 7
- **Track Badge (Full):** `icons/kokura_icon.png`
- **Track Badge (Thumb):** `icons/kokura_thumb.png`

| Course ID | Distance | Terrain | In/Out | Diagram Files |
|---|---|---|---|---|
| 11001 | 1200m | Turf | Standard | `tracks/kokura/kokura_1200m_turf_11001_full.png`<br>`tracks/kokura/kokura_1200m_turf_11001_simple.png` |
| 11002 | 1800m | Turf | Standard | `tracks/kokura/kokura_1800m_turf_11002_full.png`<br>`tracks/kokura/kokura_1800m_turf_11002_simple.png`<br>`tracks/kokura/kokura_1800m_turf_11002_lap1_full.png`<br>`tracks/kokura/kokura_1800m_turf_11002_lap1_simple.png`<br>`tracks/kokura/kokura_1800m_turf_11002_lap2_full.png`<br>`tracks/kokura/kokura_1800m_turf_11002_lap2_simple.png` |
| 11003 | 2000m | Turf | Standard | `tracks/kokura/kokura_2000m_turf_11003_full.png`<br>`tracks/kokura/kokura_2000m_turf_11003_simple.png`<br>`tracks/kokura/kokura_2000m_turf_11003_lap1_full.png`<br>`tracks/kokura/kokura_2000m_turf_11003_lap1_simple.png`<br>`tracks/kokura/kokura_2000m_turf_11003_lap2_full.png`<br>`tracks/kokura/kokura_2000m_turf_11003_lap2_simple.png` |
| 11004 | 2600m | Turf | Standard | `tracks/kokura/kokura_2600m_turf_11004_full.png`<br>`tracks/kokura/kokura_2600m_turf_11004_simple.png`<br>`tracks/kokura/kokura_2600m_turf_11004_lap1_full.png`<br>`tracks/kokura/kokura_2600m_turf_11004_lap1_simple.png`<br>`tracks/kokura/kokura_2600m_turf_11004_lap2_full.png`<br>`tracks/kokura/kokura_2600m_turf_11004_lap2_simple.png` |
| 11005 | 1000m | Dirt | Standard | `tracks/kokura/kokura_1000m_dirt_11005_full.png`<br>`tracks/kokura/kokura_1000m_dirt_11005_simple.png` |
| 11006 | 1700m | Dirt | Standard | `tracks/kokura/kokura_1700m_dirt_11006_full.png`<br>`tracks/kokura/kokura_1700m_dirt_11006_simple.png`<br>`tracks/kokura/kokura_1700m_dirt_11006_lap1_full.png`<br>`tracks/kokura/kokura_1700m_dirt_11006_lap1_simple.png`<br>`tracks/kokura/kokura_1700m_dirt_11006_lap2_full.png`<br>`tracks/kokura/kokura_1700m_dirt_11006_lap2_simple.png` |
| 11007 | 2400m | Dirt | Standard | `tracks/kokura/kokura_2400m_dirt_11007_full.png`<br>`tracks/kokura/kokura_2400m_dirt_11007_simple.png`<br>`tracks/kokura/kokura_2400m_dirt_11007_lap1_full.png`<br>`tracks/kokura/kokura_2400m_dirt_11007_lap1_simple.png`<br>`tracks/kokura/kokura_2400m_dirt_11007_lap2_full.png`<br>`tracks/kokura/kokura_2400m_dirt_11007_lap2_simple.png` |

### Ooi (Tokyo City Keiba) (Ooi)
- **Sublink:** [https://gametora.com/umamusume/racetracks/ooi](https://gametora.com/umamusume/racetracks/ooi)
- **Total Courses:** 3
- **Track Badge (Full):** `icons/ooi_icon.png`
- **Track Badge (Thumb):** `icons/ooi_thumb.png`

| Course ID | Distance | Terrain | In/Out | Diagram Files |
|---|---|---|---|---|
| 11101 | 1200m | Dirt | Standard | `tracks/ooi/ooi_1200m_dirt_11101_full.png`<br>`tracks/ooi/ooi_1200m_dirt_11101_simple.png` |
| 11102 | 1800m | Dirt | Standard | `tracks/ooi/ooi_1800m_dirt_11102_full.png`<br>`tracks/ooi/ooi_1800m_dirt_11102_simple.png`<br>`tracks/ooi/ooi_1800m_dirt_11102_lap1_full.png`<br>`tracks/ooi/ooi_1800m_dirt_11102_lap1_simple.png`<br>`tracks/ooi/ooi_1800m_dirt_11102_lap2_full.png`<br>`tracks/ooi/ooi_1800m_dirt_11102_lap2_simple.png` |
| 11103 | 2000m | Dirt | Standard | `tracks/ooi/ooi_2000m_dirt_11103_full.png`<br>`tracks/ooi/ooi_2000m_dirt_11103_simple.png`<br>`tracks/ooi/ooi_2000m_dirt_11103_lap1_full.png`<br>`tracks/ooi/ooi_2000m_dirt_11103_lap1_simple.png`<br>`tracks/ooi/ooi_2000m_dirt_11103_lap2_full.png`<br>`tracks/ooi/ooi_2000m_dirt_11103_lap2_simple.png` |

### Kawasaki (Kawasaki)
- **Sublink:** [https://gametora.com/umamusume/racetracks/kawasaki](https://gametora.com/umamusume/racetracks/kawasaki)
- **Total Courses:** 3
- **Track Badge (Full):** `icons/kawasaki_icon.png`
- **Track Badge (Thumb):** `icons/kawasaki_thumb.png`

| Course ID | Distance | Terrain | In/Out | Diagram Files |
|---|---|---|---|---|
| 11301 | 1400m | Dirt | Standard | `tracks/kawasaki/kawasaki_1400m_dirt_11301_full.png`<br>`tracks/kawasaki/kawasaki_1400m_dirt_11301_simple.png`<br>`tracks/kawasaki/kawasaki_1400m_dirt_11301_lap1_full.png`<br>`tracks/kawasaki/kawasaki_1400m_dirt_11301_lap1_simple.png`<br>`tracks/kawasaki/kawasaki_1400m_dirt_11301_lap2_full.png`<br>`tracks/kawasaki/kawasaki_1400m_dirt_11301_lap2_simple.png` |
| 11302 | 1600m | Dirt | Standard | `tracks/kawasaki/kawasaki_1600m_dirt_11302_full.png`<br>`tracks/kawasaki/kawasaki_1600m_dirt_11302_simple.png`<br>`tracks/kawasaki/kawasaki_1600m_dirt_11302_lap1_full.png`<br>`tracks/kawasaki/kawasaki_1600m_dirt_11302_lap1_simple.png`<br>`tracks/kawasaki/kawasaki_1600m_dirt_11302_lap2_full.png`<br>`tracks/kawasaki/kawasaki_1600m_dirt_11302_lap2_simple.png` |
| 11303 | 2100m | Dirt | Standard | `tracks/kawasaki/kawasaki_2100m_dirt_11303_full.png`<br>`tracks/kawasaki/kawasaki_2100m_dirt_11303_simple.png`<br>`tracks/kawasaki/kawasaki_2100m_dirt_11303_lap1_full.png`<br>`tracks/kawasaki/kawasaki_2100m_dirt_11303_lap1_simple.png`<br>`tracks/kawasaki/kawasaki_2100m_dirt_11303_lap2_full.png`<br>`tracks/kawasaki/kawasaki_2100m_dirt_11303_lap2_simple.png` |

### Funabashi (Funabashi)
- **Sublink:** [https://gametora.com/umamusume/racetracks/funabashi](https://gametora.com/umamusume/racetracks/funabashi)
- **Total Courses:** 4
- **Track Badge (Full):** `icons/funabashi_icon.png`
- **Track Badge (Thumb):** `icons/funabashi_thumb.png`

| Course ID | Distance | Terrain | In/Out | Diagram Files |
|---|---|---|---|---|
| 11401 | 1000m | Dirt | Standard | `tracks/funabashi/funabashi_1000m_dirt_11401_full.png`<br>`tracks/funabashi/funabashi_1000m_dirt_11401_simple.png` |
| 11402 | 1600m | Dirt | Standard | `tracks/funabashi/funabashi_1600m_dirt_11402_full.png`<br>`tracks/funabashi/funabashi_1600m_dirt_11402_simple.png`<br>`tracks/funabashi/funabashi_1600m_dirt_11402_lap1_full.png`<br>`tracks/funabashi/funabashi_1600m_dirt_11402_lap1_simple.png`<br>`tracks/funabashi/funabashi_1600m_dirt_11402_lap2_full.png`<br>`tracks/funabashi/funabashi_1600m_dirt_11402_lap2_simple.png` |
| 11403 | 1800m | Dirt | Standard | `tracks/funabashi/funabashi_1800m_dirt_11403_full.png`<br>`tracks/funabashi/funabashi_1800m_dirt_11403_simple.png`<br>`tracks/funabashi/funabashi_1800m_dirt_11403_lap1_full.png`<br>`tracks/funabashi/funabashi_1800m_dirt_11403_lap1_simple.png`<br>`tracks/funabashi/funabashi_1800m_dirt_11403_lap2_full.png`<br>`tracks/funabashi/funabashi_1800m_dirt_11403_lap2_simple.png` |
| 11404 | 2400m | Dirt | Standard | `tracks/funabashi/funabashi_2400m_dirt_11404_full.png`<br>`tracks/funabashi/funabashi_2400m_dirt_11404_simple.png`<br>`tracks/funabashi/funabashi_2400m_dirt_11404_lap1_full.png`<br>`tracks/funabashi/funabashi_2400m_dirt_11404_lap1_simple.png`<br>`tracks/funabashi/funabashi_2400m_dirt_11404_lap2_full.png`<br>`tracks/funabashi/funabashi_2400m_dirt_11404_lap2_simple.png` |

### Morioka (Morioka)
- **Sublink:** [https://gametora.com/umamusume/racetracks/morioka](https://gametora.com/umamusume/racetracks/morioka)
- **Total Courses:** 4
- **Track Badge (Full):** `icons/morioka_icon.png`
- **Track Badge (Thumb):** `icons/morioka_thumb.png`

| Course ID | Distance | Terrain | In/Out | Diagram Files |
|---|---|---|---|---|
| 11501 | 1200m | Dirt | Standard | `tracks/morioka/morioka_1200m_dirt_11501_full.png`<br>`tracks/morioka/morioka_1200m_dirt_11501_simple.png` |
| 11502 | 1600m | Dirt | Standard | `tracks/morioka/morioka_1600m_dirt_11502_full.png`<br>`tracks/morioka/morioka_1600m_dirt_11502_simple.png` |
| 11503 | 1800m | Dirt | Standard | `tracks/morioka/morioka_1800m_dirt_11503_full.png`<br>`tracks/morioka/morioka_1800m_dirt_11503_simple.png`<br>`tracks/morioka/morioka_1800m_dirt_11503_lap1_full.png`<br>`tracks/morioka/morioka_1800m_dirt_11503_lap1_simple.png`<br>`tracks/morioka/morioka_1800m_dirt_11503_lap2_full.png`<br>`tracks/morioka/morioka_1800m_dirt_11503_lap2_simple.png` |
| 11504 | 2000m | Dirt | Standard | `tracks/morioka/morioka_2000m_dirt_11504_full.png`<br>`tracks/morioka/morioka_2000m_dirt_11504_simple.png`<br>`tracks/morioka/morioka_2000m_dirt_11504_lap1_full.png`<br>`tracks/morioka/morioka_2000m_dirt_11504_lap1_simple.png`<br>`tracks/morioka/morioka_2000m_dirt_11504_lap2_full.png`<br>`tracks/morioka/morioka_2000m_dirt_11504_lap2_simple.png` |

### ParisLongchamp (Longchamp)
- **Sublink:** [https://gametora.com/umamusume/racetracks/longchamp](https://gametora.com/umamusume/racetracks/longchamp)
- **Total Courses:** 1
- **Track Badge (Full):** `icons/longchamp_icon.png`
- **Track Badge (Thumb):** `icons/longchamp_thumb.png`

| Course ID | Distance | Terrain | In/Out | Diagram Files |
|---|---|---|---|---|
| 11203 | 2400m | Turf | Standard | `tracks/longchamp/longchamp_2400m_turf_11203_full.png`<br>`tracks/longchamp/longchamp_2400m_turf_11203_simple.png` |

### Santa Anita Park (Santa_anita)
- **Sublink:** [https://gametora.com/umamusume/racetracks/santa_anita](https://gametora.com/umamusume/racetracks/santa_anita)
- **Total Courses:** 10
- **Track Badge (Full):** `icons/santa_anita_icon.png`
- **Track Badge (Thumb):** `icons/santa_anita_thumb.png`

| Course ID | Distance | Terrain | In/Out | Diagram Files |
|---|---|---|---|---|
| 11612 | 2000m | Turf | Standard | `tracks/santa_anita/santa_anita_2000m_turf_11612_full.png`<br>`tracks/santa_anita/santa_anita_2000m_turf_11612_simple.png`<br>`tracks/santa_anita/santa_anita_2000m_turf_11612_lap1_full.png`<br>`tracks/santa_anita/santa_anita_2000m_turf_11612_lap1_simple.png`<br>`tracks/santa_anita/santa_anita_2000m_turf_11612_lap2_full.png`<br>`tracks/santa_anita/santa_anita_2000m_turf_11612_lap2_simple.png` |
| 11613 | 1000m | Turf | Standard | `tracks/santa_anita/santa_anita_1000m_turf_11613_full.png`<br>`tracks/santa_anita/santa_anita_1000m_turf_11613_simple.png` |
| 11614 | 1600m | Turf | Standard | `tracks/santa_anita/santa_anita_1600m_turf_11614_full.png`<br>`tracks/santa_anita/santa_anita_1600m_turf_11614_simple.png` |
| 11615 | 2000m | Turf | Standard | `tracks/santa_anita/santa_anita_2000m_turf_11615_full.png`<br>`tracks/santa_anita/santa_anita_2000m_turf_11615_simple.png` |
| 11616 | 2400m | Turf | Standard | `tracks/santa_anita/santa_anita_2400m_turf_11616_full.png`<br>`tracks/santa_anita/santa_anita_2400m_turf_11616_simple.png` |
| 11617 | 1200m | Dirt | Standard | `tracks/santa_anita/santa_anita_1200m_dirt_11617_full.png`<br>`tracks/santa_anita/santa_anita_1200m_dirt_11617_simple.png` |
| 11618 | 1400m | Dirt | Standard | `tracks/santa_anita/santa_anita_1400m_dirt_11618_full.png`<br>`tracks/santa_anita/santa_anita_1400m_dirt_11618_simple.png` |
| 11619 | 1600m | Dirt | Standard | `tracks/santa_anita/santa_anita_1600m_dirt_11619_full.png`<br>`tracks/santa_anita/santa_anita_1600m_dirt_11619_simple.png` |
| 11620 | 1800m | Dirt | Standard | `tracks/santa_anita/santa_anita_1800m_dirt_11620_full.png`<br>`tracks/santa_anita/santa_anita_1800m_dirt_11620_simple.png` |
| 11621 | 2000m | Dirt | Standard | `tracks/santa_anita/santa_anita_2000m_dirt_11621_full.png`<br>`tracks/santa_anita/santa_anita_2000m_dirt_11621_simple.png` |

### Del Mar (Del_mar)
- **Sublink:** [https://gametora.com/umamusume/racetracks/del_mar](https://gametora.com/umamusume/racetracks/del_mar)
- **Total Courses:** 9
- **Track Badge (Full):** `icons/del_mar_icon.png`
- **Track Badge (Thumb):** `icons/del_mar_thumb.png`

| Course ID | Distance | Terrain | In/Out | Diagram Files |
|---|---|---|---|---|
| 11701 | 1000m | Turf | Standard | `tracks/del_mar/del_mar_1000m_turf_11701_full.png`<br>`tracks/del_mar/del_mar_1000m_turf_11701_simple.png` |
| 11702 | 1600m | Turf | Standard | `tracks/del_mar/del_mar_1600m_turf_11702_full.png`<br>`tracks/del_mar/del_mar_1600m_turf_11702_simple.png`<br>`tracks/del_mar/del_mar_1600m_turf_11702_lap1_full.png`<br>`tracks/del_mar/del_mar_1600m_turf_11702_lap1_simple.png`<br>`tracks/del_mar/del_mar_1600m_turf_11702_lap2_full.png`<br>`tracks/del_mar/del_mar_1600m_turf_11702_lap2_simple.png` |
| 11703 | 2200m | Turf | Standard | `tracks/del_mar/del_mar_2200m_turf_11703_full.png`<br>`tracks/del_mar/del_mar_2200m_turf_11703_simple.png` |
| 11704 | 2400m | Turf | Standard | `tracks/del_mar/del_mar_2400m_turf_11704_full.png`<br>`tracks/del_mar/del_mar_2400m_turf_11704_simple.png`<br>`tracks/del_mar/del_mar_2400m_turf_11704_lap1_full.png`<br>`tracks/del_mar/del_mar_2400m_turf_11704_lap1_simple.png`<br>`tracks/del_mar/del_mar_2400m_turf_11704_lap2_full.png`<br>`tracks/del_mar/del_mar_2400m_turf_11704_lap2_simple.png` |
| 11705 | 1200m | Dirt | Standard | `tracks/del_mar/del_mar_1200m_dirt_11705_full.png`<br>`tracks/del_mar/del_mar_1200m_dirt_11705_simple.png` |
| 11706 | 1400m | Dirt | Standard | `tracks/del_mar/del_mar_1400m_dirt_11706_full.png`<br>`tracks/del_mar/del_mar_1400m_dirt_11706_simple.png` |
| 11707 | 1600m | Dirt | Standard | `tracks/del_mar/del_mar_1600m_dirt_11707_full.png`<br>`tracks/del_mar/del_mar_1600m_dirt_11707_simple.png`<br>`tracks/del_mar/del_mar_1600m_dirt_11707_lap1_full.png`<br>`tracks/del_mar/del_mar_1600m_dirt_11707_lap1_simple.png`<br>`tracks/del_mar/del_mar_1600m_dirt_11707_lap2_full.png`<br>`tracks/del_mar/del_mar_1600m_dirt_11707_lap2_simple.png` |
| 11708 | 1800m | Dirt | Standard | `tracks/del_mar/del_mar_1800m_dirt_11708_full.png`<br>`tracks/del_mar/del_mar_1800m_dirt_11708_simple.png`<br>`tracks/del_mar/del_mar_1800m_dirt_11708_lap1_full.png`<br>`tracks/del_mar/del_mar_1800m_dirt_11708_lap1_simple.png`<br>`tracks/del_mar/del_mar_1800m_dirt_11708_lap2_full.png`<br>`tracks/del_mar/del_mar_1800m_dirt_11708_lap2_simple.png` |
| 11709 | 2000m | Dirt | Standard | `tracks/del_mar/del_mar_2000m_dirt_11709_full.png`<br>`tracks/del_mar/del_mar_2000m_dirt_11709_simple.png` |
