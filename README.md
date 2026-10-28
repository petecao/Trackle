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

### 3. Song Guesser ("Heardle")
- Progressive audio unlock tiers (**0.1s → 0.5s → 2.0s → 8.0s → 15.0s**) across 249 official *Uma Musume* songs.
- Searchable by song title (English or Japanese) and character/artist vocalists (e.g. *Silence Suzuka*, *Oguri Cap*, *Mayano Top Gun*).
- Complete album artwork reveal and full audio playback upon round completion.

---

## 🚀 Running Locally

```bash
# Serve the directory locally
python3 -m http.server 8085

# Open in browser:
# http://localhost:8085
```

---

## 📁 Repository & Asset Structure
```
Trackle/
├── index.html           # Trackle Single-Page Application
├── style.css            # Dark/cyberpunk glassmorphism design system
├── app.js               # Game state, audio player, autocomplete, share generator
├── courses_data.js      # 138 official course datasets with late-race spurt points
├── races_data.js        # 304 official in-game races mapped to career calendar turns
├── tracks_data.js       # 17 track metadata definitions
├── songs_data.js        # 249 song catalog with metadata, singer mapping, and daily selector
├── audio/               # 249 clipped 30s song preview clips
├── covers/              # 223 album jacket cover images
├── icons/               # 512x512 full badges and 128x128 thumbnails for 17 tracks
├── ui_icons/            # Course markers (spurt start, slope up/down, corners, straights, direction arrows)
├── tracks/              # Full & simple diagrams for all 138 course configurations
├── racetrack_data.json  # Complete structured JSON catalog
└── README.md
```

---

## 🙏 Credits & Attributions

- **Song Previews & Album Artwork**: Gratefully sourced from [snep's Uma Musume Song Sorter](https://snep.pw/uma/songsorter).
- **Racetrack Data & Course Diagrams**: Sourced from [GameTora](https://gametora.com/umamusume/racetracks).
- **Discography & Lyrics Data**: Sourced from [Umamusume Wiki](https://umamusu.wiki).
- **Original IP & Audio**: © Cygames, Inc. / *Uma Musume: Pretty Derby*

