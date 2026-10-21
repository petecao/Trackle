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
Trackle/
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

---

## 🏟️ Racetracks & Catalog Overview

| ID | Racetrack | Region | League | Courses | Sublink |
|---|---|---|---|---|---|
| 10001 | **Sapporo** | Hokkaido | JRA | 8 | [GameTora Sapporo](https://gametora.com/umamusume/racetracks/sapporo) |
| 10002 | **Hakodate** | Hokkaido | JRA | 8 | [GameTora Hakodate](https://gametora.com/umamusume/racetracks/hakodate) |
| 10003 | **Niigata** | Chubu | JRA | 12 | [GameTora Niigata](https://gametora.com/umamusume/racetracks/niigata) |
| 10004 | **Fukushima** | Tohoku | JRA | 7 | [GameTora Fukushima](https://gametora.com/umamusume/racetracks/fukushima) |
| 10005 | **Nakayama** | Kanto | JRA | 11 | [GameTora Nakayama](https://gametora.com/umamusume/racetracks/nakayama) |
| 10006 | **Tokyo** | Kanto | JRA | 13 | [GameTora Tokyo](https://gametora.com/umamusume/racetracks/tokyo) |
| 10007 | **Chukyo** | Chubu | JRA | 9 | [GameTora Chukyo](https://gametora.com/umamusume/racetracks/chukyo) |
| 10008 | **Kyoto** | Kansai | JRA | 15 | [GameTora Kyoto](https://gametora.com/umamusume/racetracks/kyoto) |
| 10009 | **Hanshin** | Kansai | JRA | 14 | [GameTora Hanshin](https://gametora.com/umamusume/racetracks/hanshin) |
| 10010 | **Kokura** | Kyushu | JRA | 7 | [GameTora Kokura](https://gametora.com/umamusume/racetracks/kokura) |
| 10101 | **Ooi** | Kanto | NAR | 3 | [GameTora Ooi](https://gametora.com/umamusume/racetracks/ooi) |
| 10103 | **Kawasaki** | Kanto | NAR | 3 | [GameTora Kawasaki](https://gametora.com/umamusume/racetracks/kawasaki) |
| 10104 | **Funabashi** | Kanto | NAR | 4 | [GameTora Funabashi](https://gametora.com/umamusume/racetracks/funabashi) |
| 10105 | **Morioka** | Tohoku | NAR | 4 | [GameTora Morioka](https://gametora.com/umamusume/racetracks/morioka) |
| 10201 | **ParisLongchamp** | Overseas (France) | International | 1 | [GameTora Longchamp](https://gametora.com/umamusume/racetracks/longchamp) |
| 10202 | **Santa Anita Park** | Overseas (USA) | International | 10 | [GameTora Santa Anita](https://gametora.com/umamusume/racetracks/santa_anita) |
| 10203 | **Del Mar** | Overseas (USA) | International | 9 | [GameTora Del Mar](https://gametora.com/umamusume/racetracks/del_mar) |

*Detailed per-course metrics, coordinates, diagrams, and in-game race schedules are indexed in [`courses_data.js`](courses_data.js), [`races_data.js`](races_data.js), and [`racetrack_data.json`](racetrack_data.json).*
