// ==========================================================================
// TRACKLE - Multi-Game Controller (Course Guesser & Race Guesser)
// ==========================================================================

(function() {
  const MAX_GUESSES = 6;
  
  // App state
  let currentGameType = "course"; // "course" or "race"
  let currentPlayMode = "daily";  // "daily" or "practice"
  
  let secretTarget = null;
  let guesses = [];
  let isGameOver = false;
  let selectedSuggestionIndex = -1;
  let soundEnabled = true;

  // Audio Context (Synthesized sound effects)
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playSound(type) {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      if (type === "flip") {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(560, now + 0.08);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.09);
      } else if (type === "win") {
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, now + idx * 0.12);
          gain.gain.setValueAtTime(0.12, now + idx * 0.12);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.12);
          osc.stop(now + idx * 0.12 + 0.36);
        });
      } else if (type === "loss") {
        const notes = [380, 320, 260];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(freq, now + idx * 0.18);
          gain.gain.setValueAtTime(0.1, now + idx * 0.18);
          gain.gain.linearRampToValueAtTime(0.001, now + idx * 0.18 + 0.2);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.18);
          osc.stop(now + idx * 0.18 + 0.21);
        });
      }
    } catch (e) {
      console.warn("Audio not supported or blocked", e);
    }
  }

  // DOM Elements
  const trackInput = document.getElementById("track-input");
  const submitBtn = document.getElementById("submit-guess-btn");
  const suggestionsList = document.getElementById("suggestions-list");
  const guessesTable = document.getElementById("guesses-table");
  const guessesTbody = document.getElementById("guesses-tbody");
  const currentGuessNum = document.getElementById("current-guess-num");
  const modeText = document.getElementById("mode-text");
  
  const btnGameCourse = document.getElementById("btn-game-course");
  const btnGameRace = document.getElementById("btn-game-race");
  const btnModeDaily = document.getElementById("btn-mode-daily");
  const btnModePractice = document.getElementById("btn-mode-practice");
  
  const btnHelp = document.getElementById("btn-help");
  const btnStats = document.getElementById("btn-stats");
  const btnSound = document.getElementById("btn-sound");
  const helpModal = document.getElementById("help-modal");
  const statsModal = document.getElementById("stats-modal");
  const gameOverModal = document.getElementById("game-over-modal");
  const btnShareResult = document.getElementById("btn-share-result");
  const btnPlayAgain = document.getElementById("btn-play-again");

  const SOUND_KEY = "trackle_sound_v1";
  const LAST_GAME_TYPE_KEY = "trackle_last_game_type_v1";
  const LAST_PLAY_MODE_KEY = "trackle_last_play_mode_v1";

  function getDailyStorageKey(type, dateStr) {
    return `trackle_daily_${type}_${dateStr}`;
  }

  function getDailyState(type, dateStr) {
    try {
      const raw = localStorage.getItem(getDailyStorageKey(type, dateStr));
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn("Could not read daily state", e);
    }
    return null;
  }

  function saveDailyState(type, dateStr, state) {
    try {
      localStorage.setItem(getDailyStorageKey(type, dateStr), JSON.stringify(state));
    } catch (e) {
      console.warn("Could not save daily state", e);
    }
  }

  function saveCurrentDailyState() {
    if (currentPlayMode !== "daily" || !secretTarget) return;
    const todayStr = new Date().toISOString().slice(0, 10);
    const guessedIdentifiers = guesses.map(g => {
      return currentGameType === "course" ? g.guess.id : g.guess.name;
    });
    const state = {
      date: todayStr,
      gameType: currentGameType,
      guessedIdentifiers: guessedIdentifiers,
      isGameOver: isGameOver,
      isWin: isGameOver && guesses.length > 0 && guesses[guesses.length - 1].isWin
    };
    saveDailyState(currentGameType, todayStr, state);
  }

  function getStatsKey() {
    return `trackle_${currentGameType}_stats_v1`;
  }

  // Initialize
  function init() {
    loadPreferences();
    setupEventListeners();
    const savedGameType = localStorage.getItem(LAST_GAME_TYPE_KEY) || "course";
    const savedPlayMode = localStorage.getItem(LAST_PLAY_MODE_KEY) || "daily";
    currentPlayMode = savedPlayMode;
    switchGameType(savedGameType);
  }

  function loadPreferences() {
    const savedSound = localStorage.getItem(SOUND_KEY);
    if (savedSound !== null) {
      soundEnabled = savedSound === "true";
      btnSound.textContent = soundEnabled ? "🔊" : "🔇";
    }
  }

  function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem(SOUND_KEY, soundEnabled);
    btnSound.textContent = soundEnabled ? "🔊" : "🔇";
  }

  // Switch between Course Guesser and Race Guesser
  function switchGameType(type) {
    currentGameType = type;
    localStorage.setItem(LAST_GAME_TYPE_KEY, type);
    if (type === "course") {
      btnGameCourse.classList.add("active");
      btnGameRace.classList.remove("active");
      document.querySelector(".logo-text .subtitle").textContent = "Track & Distance Course Guesser";
      trackInput.placeholder = "Search course (e.g. 'Niigata 2000 Outer', 'Hanshin 3200', 'Tokyo 2400')...";
      setupTableHeadersForCourse();
    } else {
      btnGameRace.classList.add("active");
      btnGameCourse.classList.remove("active");
      document.querySelector(".logo-text .subtitle").textContent = "Uma Musume Race Name Guesser";
      trackInput.placeholder = "Search race (e.g. 'Arima Kinen', 'Japan Cup', 'Derby', 'February Stakes')...";
      setupTableHeadersForRace();
    }
    startNewGame(currentPlayMode);
  }

  function setupTableHeadersForCourse() {
    const thead = guessesTable.querySelector("thead");
    thead.innerHTML = `
      <tr>
        <th style="width: 22%;">Guessed Course</th>
        <th style="width: 12%;">Racetrack</th>
        <th style="width: 11%;">Distance</th>
        <th style="width: 11%;">Distance Type</th>
        <th style="width: 9%;">Surface</th>
        <th style="width: 9%;">Direction</th>
        <th style="width: 11%;">Late Race</th>
        <th style="width: 7%;">Corners</th>
        <th style="width: 10%;">Final Straight</th>
      </tr>
    `;
  }

  function setupTableHeadersForRace() {
    const thead = guessesTable.querySelector("thead");
    thead.innerHTML = `
      <tr>
        <th style="width: 20%;">Guessed Race</th>
        <th style="width: 8%;">Grade</th>
        <th style="width: 12%;">Racetrack</th>
        <th style="width: 10%;">Distance</th>
        <th style="width: 10%;">Distance Type</th>
        <th style="width: 8%;">Surface</th>
        <th style="width: 11%;">Turn</th>
        <th style="width: 10%;">Late Race</th>
        <th style="width: 11%;">Fan Gain</th>
      </tr>
    `;
  }

  // Start a round
  function startNewGame(playMode) {
    currentPlayMode = playMode;
    localStorage.setItem(LAST_PLAY_MODE_KEY, playMode);
    guesses = [];
    isGameOver = false;
    trackInput.value = "";
    trackInput.disabled = false;
    submitBtn.disabled = true;
    closeAllModals();

    const dailyNotice = document.getElementById("daily-completed-notice");
    const searchWrapper = document.getElementById("search-input-wrapper");
    if (dailyNotice) dailyNotice.style.display = "none";
    if (searchWrapper) searchWrapper.style.display = "flex";

    const todayStr = new Date().toISOString().slice(0, 10);

    if (playMode === "daily") {
      btnModeDaily.classList.add("active");
      btnModePractice.classList.remove("active");
      if (currentGameType === "course") {
        secretTarget = window.getDailyCourse(todayStr);
        modeText.textContent = `Daily Course (${todayStr})`;
      } else {
        secretTarget = window.getDailyRace(todayStr);
        modeText.textContent = `Daily Race (${todayStr})`;
      }

      // Check if there is an existing saved daily session for today
      const savedState = getDailyState(currentGameType, todayStr);
      if (savedState && Array.isArray(savedState.guessedIdentifiers) && savedState.guessedIdentifiers.length > 0) {
        savedState.guessedIdentifiers.forEach(idVal => {
          const choice = currentGameType === "course"
            ? window.ALL_COURSES.find(c => c.id === idVal)
            : window.ALL_RACES.find(r => r.name === idVal);
          if (choice) {
            const evaluation = currentGameType === "course"
              ? window.evaluateCourseGuess(choice, secretTarget)
              : window.evaluateRaceGuess(choice, secretTarget);
            guesses.push(evaluation);
          }
        });

        const hasWin = guesses.length > 0 && guesses[guesses.length - 1].isWin;
        const reachedMax = guesses.length >= MAX_GUESSES;

        if (savedState.isGameOver || hasWin || reachedMax) {
          isGameOver = true;
          trackInput.disabled = true;
          submitBtn.disabled = true;
          renderBoard();
          updateCounter();
          updateCompletedBanner(hasWin);
          showGameOverModal(hasWin);
          return;
        }
      }
    } else {
      btnModePractice.classList.add("active");
      btnModeDaily.classList.remove("active");
      const roundNum = Math.floor(Math.random() * 900) + 100;
      if (currentGameType === "course") {
        const idx = Math.floor(Math.random() * window.ALL_COURSES.length);
        secretTarget = window.ALL_COURSES[idx];
        modeText.textContent = `Course Practice (Round #${roundNum})`;
      } else {
        // In practice mode, pick from all unique races
        const idx = Math.floor(Math.random() * window.ALL_RACES.length);
        secretTarget = window.ALL_RACES[idx];
        modeText.textContent = `Race Practice (Round #${roundNum})`;
      }
    }

    renderBoard();
    updateCounter();
  }

  function updateCompletedBanner(isWin) {
    const dailyNotice = document.getElementById("daily-completed-notice");
    const searchWrapper = document.getElementById("search-input-wrapper");
    const completedIcon = document.getElementById("completed-icon");
    const completedText = document.getElementById("completed-text");
    const counterDisplay = document.getElementById("guess-counter-display");

    if (dailyNotice && searchWrapper) {
      dailyNotice.style.display = "block";
      searchWrapper.style.display = "none";
      if (isWin) {
        if (completedIcon) completedIcon.textContent = "🏆";
        if (completedText) completedText.textContent = `You solved today's daily ${currentGameType} in ${guesses.length}/6!`;
        if (counterDisplay) counterDisplay.innerHTML = `Solved in <span style="color: var(--color-exact); font-weight: 700;">${guesses.length}/${MAX_GUESSES}</span> 🏆`;
      } else {
        if (completedIcon) completedIcon.textContent = "🏁";
        if (completedText) completedText.textContent = `Today's daily ${currentGameType} puzzle is complete!`;
        if (counterDisplay) counterDisplay.innerHTML = `Finished (<span style="color: var(--text-muted); font-weight: 700;">${guesses.length}/${MAX_GUESSES}</span>) 🏁`;
      }
    }
  }

  // Render guess rows & empty placeholders
  function renderBoard() {
    guessesTbody.innerHTML = "";
    const colCount = 9;

    // Existing guesses
    guesses.forEach((guessEval) => {
      const row = createGuessRow(guessEval, false);
      guessesTbody.appendChild(row);
    });

    // Empty placeholder rows
    const remaining = MAX_GUESSES - guesses.length;
    for (let i = 0; i < remaining; i++) {
      const emptyRow = document.createElement("tr");
      emptyRow.className = "guess-row empty-row";
      let dashes = `<td class="guess-cell"><div class="empty-cell-dash">${guesses.length + i + 1}</div></td>`;
      for (let c = 1; c < colCount; c++) {
        dashes += `<td class="guess-cell"><div class="empty-cell-dash">-</div></td>`;
      }
      emptyRow.innerHTML = dashes;
      guessesTbody.appendChild(emptyRow);
    }
  }

  // Create an animated guess row
  function createGuessRow(guessEval, animate = true) {
    const row = document.createElement("tr");
    row.className = "guess-row";
    const res = guessEval.results;
    const g = guessEval.guess;

    let cellsData = [];

    if (currentGameType === "course") {
      cellsData = [
        {
          html: `
            <div class="track-cell-content">
              <img src="${g.thumb}" alt="${g.track_name}" class="cell-thumb" onerror="this.style.display='none'">
              <div>
                <div class="cell-track-name">${g.full_name}</div>
                <div class="cell-track-jp">${g.region}・${g.league}</div>
              </div>
            </div>
          `
        },
        { status: res.track.status, val: res.track.val },
        { status: res.distance.status, val: res.distance.val, arrow: res.distance.arrow },
        { status: res.distance_type.status, val: res.distance_type.val },
        { status: res.terrain.status, val: res.terrain.val },
        { status: res.direction.status, val: res.direction.val },
        { status: res.late_race.status, val: res.late_race.val },
        { status: res.corners.status, val: res.corners.val, arrow: res.corners.arrow },
        { status: res.straight.status, val: res.straight.val, arrow: res.straight.arrow }
      ];
    } else {
      // Race mode row
      const gradeTagClass = g.grade === "G1" ? "tag-g1" : (g.grade === "G2" ? "tag-g2" : (g.grade === "G3" ? "tag-g3" : "tag-op"));
      cellsData = [
        {
          html: `
            <div class="track-cell-content">
              <img src="${g.thumb}" alt="${g.track_name}" class="cell-thumb" onerror="this.style.display='none'">
              <div>
                <div class="cell-track-name">${g.name}</div>
                <div class="cell-track-jp">${g.name_ja}</div>
              </div>
            </div>
          `
        },
        { status: res.grade.status, val: res.grade.val, arrow: res.grade.arrow },
        { status: res.track.status, val: res.track.val },
        { status: res.distance.status, val: res.distance.val, arrow: res.distance.arrow },
        { status: res.distance_type.status, val: res.distance_type.val },
        { status: res.terrain.status, val: res.terrain.val },
        { status: res.turn.status, val: res.turn.val, arrow: res.turn.arrow },
        { status: res.late_race.status, val: res.late_race.val },
        { status: res.fans.status, val: res.fans.val, arrow: res.fans.arrow }
      ];
    }

    cellsData.forEach((cellData, idx) => {
      const td = document.createElement("td");
      td.className = "guess-cell";

      if (idx === 0) {
        td.innerHTML = cellData.html;
      } else {
        const arrowHtml = cellData.arrow ? `<span class="attr-arrow">${cellData.arrow}</span>` : "";
        td.innerHTML = `
          <div class="attr-box ${cellData.status}">
            <span>${cellData.val}</span>
            ${arrowHtml}
          </div>
        `;
      }

      if (animate) {
        td.style.opacity = "0";
        setTimeout(() => {
          td.classList.add("flip-in");
          td.style.opacity = "1";
          playSound("flip");
        }, idx * 120);
      }

      row.appendChild(td);
    });

    return row;
  }

  // Autocomplete search
  function updateSuggestions(query) {
    query = query.trim().toLowerCase();
    suggestionsList.innerHTML = "";
    selectedSuggestionIndex = -1;

    if (!query) {
      suggestionsList.classList.remove("open");
      submitBtn.disabled = true;
      return;
    }

    const tokens = query.split(/\s+/).filter(Boolean);

    if (currentGameType === "course") {
      const guessedIds = new Set(guesses.map(g => g.guess.id));
      const matches = window.ALL_COURSES.filter(course => {
        if (guessedIds.has(course.id)) return false;
        const searchableText = [
          course.full_name,
          course.short_name,
          course.track_name,
          course.region,
          course.terrain,
          course.division,
          course.late_race,
          `${course.length}m`,
          `${course.length}`,
          ...(course.famous_races || [])
        ].join(" ").toLowerCase();
        return tokens.every(tok => searchableText.includes(tok));
      });

      if (matches.length === 0) {
        suggestionsList.classList.remove("open");
        submitBtn.disabled = true;
        return;
      }

      submitBtn.disabled = false;

      matches.slice(0, 15).forEach(course => {
        const item = document.createElement("div");
        item.className = "suggestion-item";
        item.dataset.id = course.id;
        const leagueClass = course.league === "JRA" ? "tag-jra" : (course.league === "NAR" ? "tag-nar" : "tag-intl");
        const famousSnippet = course.famous_races && course.famous_races.length > 0 
          ? `<span style="color: #fbbf24; font-size: 0.72rem;">★ ${course.famous_races[0]}</span>` 
          : "";

        item.innerHTML = `
          <img src="${course.thumb}" class="suggestion-thumb" alt="${course.track_name}" onerror="this.style.display='none'">
          <div style="flex: 1;">
            <div class="suggestion-name">${course.full_name}</div>
            <div class="suggestion-meta">
              <span class="tag-badge ${leagueClass}">${course.league}</span>
              <span>${course.division}</span>
              <span>Late Race: <strong>${course.late_race}</strong></span>
              <span>${course.direction} turn</span>
              ${famousSnippet}
            </div>
          </div>
        `;

        item.addEventListener("click", () => selectChoice(course));
        suggestionsList.appendChild(item);
      });
    } else {
      // Race mode autocomplete
      const guessedNames = new Set(guesses.map(g => g.guess.name));
      const matches = window.ALL_RACES.filter(race => {
        if (guessedNames.has(race.name)) return false;
        const searchableText = [
          race.name,
          race.name_ja,
          race.grade,
          race.track_name,
          race.region,
          race.turn,
          race.season,
          race.division,
          race.terrain,
          `${race.length}m`,
          `${race.length}`,
          `${race.fans || 0} fans`,
          `${race.fans || 0}`
        ].join(" ").toLowerCase();
        return tokens.every(tok => searchableText.includes(tok));
      });

      if (matches.length === 0) {
        suggestionsList.classList.remove("open");
        submitBtn.disabled = true;
        return;
      }

      submitBtn.disabled = false;

      matches.slice(0, 15).forEach(race => {
        const item = document.createElement("div");
        item.className = "suggestion-item";
        item.dataset.id = race.name;
        const gradeTagClass = race.grade === "G1" ? "tag-g1" : (race.grade === "G2" ? "tag-g2" : (race.grade === "G3" ? "tag-g3" : "tag-op"));

        item.innerHTML = `
          <img src="${race.thumb}" class="suggestion-thumb" alt="${race.track_name}" onerror="this.style.display='none'">
          <div style="flex: 1;">
            <div class="suggestion-name">${race.name} <span style="font-size: 0.8rem; color: var(--text-muted);">(${race.name_ja})</span></div>
            <div class="suggestion-meta">
              <span class="tag-badge ${gradeTagClass}">${race.grade}</span>
              <span>${race.track_name}</span>
              <span>${race.length}m ${race.terrain}</span>
              <span style="color: #a5b4fc; font-weight: 600;">📅 ${race.turn}</span>
              <span>Late Race: <strong>${race.late_race}</strong></span>
              <span style="color: #34d399; font-weight: 600;">👥 ${(race.fans || 0).toLocaleString()} fans</span>
            </div>
          </div>
        `;

        item.addEventListener("click", () => selectChoice(race));
        suggestionsList.appendChild(item);
      });
    }

    suggestionsList.classList.add("open");
  }

  function selectChoice(choice) {
    trackInput.value = choice.name || choice.short_name;
    suggestionsList.classList.remove("open");
    submitBtn.disabled = false;
    submitGuess(choice);
  }

  function submitCurrentInput() {
    if (isGameOver) return;
    const items = suggestionsList.querySelectorAll(".suggestion-item");
    if (selectedSuggestionIndex >= 0 && items[selectedSuggestionIndex]) {
      const idVal = items[selectedSuggestionIndex].dataset.id;
      const choice = currentGameType === "course"
        ? window.ALL_COURSES.find(c => c.id === parseInt(idVal))
        : window.ALL_RACES.find(r => r.name === idVal);
      if (choice) {
        selectChoice(choice);
        return;
      }
    }
    if (items.length > 0) {
      const idVal = items[0].dataset.id;
      const choice = currentGameType === "course"
        ? window.ALL_COURSES.find(c => c.id === parseInt(idVal))
        : window.ALL_RACES.find(r => r.name === idVal);
      if (choice) {
        selectChoice(choice);
        return;
      }
    }
    const rawVal = trackInput.value.trim().toLowerCase();
    if (rawVal) {
      const exactMatch = currentGameType === "course"
        ? window.ALL_COURSES.find(c => c.full_name.toLowerCase() === rawVal || c.short_name.toLowerCase() === rawVal)
        : window.ALL_RACES.find(r => r.name.toLowerCase() === rawVal || r.name_ja.toLowerCase() === rawVal);
      if (exactMatch) {
        selectChoice(exactMatch);
      }
    }
  }

  function handleInputKeydown(e) {
    const items = suggestionsList.querySelectorAll(".suggestion-item");
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (items.length > 0) {
        selectedSuggestionIndex = (selectedSuggestionIndex + 1) % items.length;
        highlightSuggestion(items);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (items.length > 0) {
        selectedSuggestionIndex = (selectedSuggestionIndex - 1 + items.length) % items.length;
        highlightSuggestion(items);
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      submitCurrentInput();
    } else if (e.key === "Escape") {
      suggestionsList.classList.remove("open");
    }
  }

  function highlightSuggestion(items) {
    items.forEach((it, idx) => {
      if (idx === selectedSuggestionIndex) {
        it.classList.add("highlighted");
        it.scrollIntoView({ block: "nearest" });
      } else {
        it.classList.remove("highlighted");
      }
    });
  }

  // Submit guess
  function submitGuess(choice) {
    if (isGameOver || !choice) return;

    const evaluation = currentGameType === "course"
      ? window.evaluateCourseGuess(choice, secretTarget)
      : window.evaluateRaceGuess(choice, secretTarget);

    guesses.push(evaluation);

    renderBoard();
    const rows = guessesTbody.querySelectorAll(".guess-row");
    const targetRow = rows[guesses.length - 1];
    if (targetRow) {
      const animatedRow = createGuessRow(evaluation, true);
      guessesTbody.replaceChild(animatedRow, targetRow);
    }

    trackInput.value = "";
    submitBtn.disabled = true;
    updateCounter();

    const isWin = evaluation.isWin;
    const isLoss = guesses.length >= MAX_GUESSES && !isWin;

    if (isWin || isLoss) {
      isGameOver = true;
      trackInput.disabled = true;

      if (currentPlayMode === "daily") {
        saveCurrentDailyState();
      }

      const staggerMs = 9 * 120 + 300;
      setTimeout(() => {
        try {
          recordGameOverStats(isWin);
        } catch (e) {
          console.warn("Could not record stats", e);
        }
        showGameOverModal(isWin);
        if (currentPlayMode === "daily") {
          updateCompletedBanner(isWin);
        }
      }, staggerMs);
    } else {
      if (currentPlayMode === "daily") {
        saveCurrentDailyState();
      }
    }
  }

  function updateCounter() {
    const counterDisplay = document.getElementById("guess-counter-display");
    if (isGameOver) {
      const isWin = guesses.length > 0 && guesses[guesses.length - 1].isWin;
      if (isWin) {
        if (counterDisplay) counterDisplay.innerHTML = `Solved in <span style="color: var(--color-exact); font-weight: 700;">${guesses.length}/${MAX_GUESSES}</span> 🏆`;
      } else {
        if (counterDisplay) counterDisplay.innerHTML = `Finished (<span style="color: var(--text-muted); font-weight: 700;">${guesses.length}/${MAX_GUESSES}</span>) 🏁`;
      }
    } else {
      if (counterDisplay) {
        counterDisplay.innerHTML = `Guess: <span id="current-guess-num">${Math.min(guesses.length + 1, MAX_GUESSES)}</span> of <span>${MAX_GUESSES}</span>`;
      }
    }
  }

  // Game over modal
  function recordGameOverStats(isWin) {
    const stats = getStats();
    stats.played += 1;
    if (isWin) {
      stats.wins += 1;
      stats.currentStreak += 1;
      if (stats.currentStreak > stats.maxStreak) stats.maxStreak = stats.currentStreak;
      stats.distribution[guesses.length] = (stats.distribution[guesses.length] || 0) + 1;
      playSound("win");
      launchConfetti();
    } else {
      stats.currentStreak = 0;
      stats.distribution["X"] = (stats.distribution["X"] || 0) + 1;
      playSound("loss");
    }
    saveStats(stats);
  }

  function showGameOverModal(isWin) {
    if (!secretTarget) return;

    const statusTitle = document.getElementById("reveal-status-title");
    const statusSub = document.getElementById("reveal-status-sub");
    if (isWin) {
      statusTitle.textContent = "Splendid Victory! 🏆";
      statusTitle.className = "reveal-status win";
      statusSub.textContent = `You deduced the secret ${currentGameType} in ${guesses.length} attempt${guesses.length > 1 ? "s" : ""}!`;
    } else {
      statusTitle.textContent = "Better Luck Next Time! 🏁";
      statusTitle.className = "reveal-status loss";
      const answerName = currentGameType === "course" ? secretTarget.full_name : secretTarget.name;
      statusSub.textContent = `The secret ${currentGameType} was ${answerName}.`;
    }

    document.getElementById("reveal-track-badge").src = secretTarget.icon;
    
    if (currentGameType === "course") {
      document.getElementById("reveal-course-name").textContent = secretTarget.full_name;
      document.getElementById("reveal-track-region").textContent = `${secretTarget.track_name} Racetrack (${secretTarget.region})・${secretTarget.league}`;
      const tagsContainer = document.getElementById("reveal-course-tags");
      tagsContainer.innerHTML = `
        <span class="tag-badge tag-jra">${secretTarget.length}m</span>
        <span class="tag-badge tag-intl">${secretTarget.division}</span>
        <span class="tag-badge tag-nar">${secretTarget.terrain}</span>
        <span class="tag-badge tag-intl">${secretTarget.direction} turn</span>
        <span class="tag-badge tag-nar" style="background: rgba(236,72,153,0.25); color: #f472b6;">Late Race: <strong>${secretTarget.late_race}</strong> (${secretTarget.spurt_meter}m)</span>
        <span class="tag-badge tag-intl">${secretTarget.corners} corners</span>
        <span class="tag-badge tag-jra">Straight: ${secretTarget.final_straight}m</span>
      `;
      const racesContainer = document.getElementById("reveal-course-races");
      if (secretTarget.famous_races && secretTarget.famous_races.length > 0) {
        racesContainer.innerHTML = `<strong>Races Held Here:</strong> ${secretTarget.famous_races.join(", ")}`;
      } else {
        racesContainer.innerHTML = "";
      }
    } else {
      // Race mode reveal
      const gradeTagClass = secretTarget.grade === "G1" ? "tag-g1" : (secretTarget.grade === "G2" ? "tag-g2" : (secretTarget.grade === "G3" ? "tag-g3" : "tag-op"));
      document.getElementById("reveal-course-name").textContent = `${secretTarget.name} (${secretTarget.name_ja})`;
      document.getElementById("reveal-track-region").textContent = `${secretTarget.track_name} Racetrack (${secretTarget.region})・${secretTarget.turn}`;
      const tagsContainer = document.getElementById("reveal-course-tags");
      tagsContainer.innerHTML = `
        <span class="tag-badge ${gradeTagClass}">${secretTarget.grade}</span>
        <span class="tag-badge tag-jra">${secretTarget.length}m</span>
        <span class="tag-badge tag-intl">${secretTarget.division}</span>
        <span class="tag-badge tag-nar">${secretTarget.terrain}</span>
        <span class="tag-badge tag-jra" style="background: rgba(99,102,241,0.25); color: #818cf8;">📅 <strong>${secretTarget.turn}</strong></span>
        <span class="tag-badge tag-nar" style="background: rgba(236,72,153,0.25); color: #f472b6;">Late Race: <strong>${secretTarget.late_race}</strong></span>
        <span class="tag-badge tag-intl">${secretTarget.direction} turn</span>
        <span class="tag-badge tag-jra" style="background: rgba(16,185,129,0.25); color: #34d399;">👥 <strong>${(secretTarget.fans || 0).toLocaleString()} Fans</strong></span>
      `;
      const racesContainer = document.getElementById("reveal-course-races");
      if (secretTarget.factor) {
        racesContainer.innerHTML = `<strong>Race Factor Spark:</strong> ${secretTarget.factor}`;
      } else {
        racesContainer.innerHTML = "";
      }
    }

    const courseImg = document.getElementById("preview-course-img");
    courseImg.src = secretTarget.diagram_img;
    const externalLink = document.getElementById("gametora-external-link");
    externalLink.href = secretTarget.sublink;

    gameOverModal.classList.add("open");
  }

  // Copy result for sharing
  function copyShareResult() {
    const todayStr = new Date().toISOString().slice(0, 10);
    const gameLabel = currentGameType === "course" ? "Course Guesser" : "Race Guesser";
    const modeHeader = currentPlayMode === "daily" ? `Trackle: ${gameLabel} (Daily ${todayStr})` : `Trackle: ${gameLabel} (Practice)`;
    const scoreStr = isGameOver && guesses[guesses.length - 1].isWin ? `${guesses.length}/${MAX_GUESSES}` : `X/${MAX_GUESSES}`;

    let emojiBoard = `${modeHeader} ${scoreStr}\n\n`;

    guesses.forEach(g => {
      const res = g.results;
      let rowEmojis = [];
      if (currentGameType === "course") {
        rowEmojis = [
          emojiForStatus(res.track.status),
          res.distance.arrow || emojiForStatus(res.distance.status),
          emojiForStatus(res.distance_type.status),
          emojiForStatus(res.terrain.status),
          emojiForStatus(res.direction.status),
          emojiForStatus(res.late_race.status),
          res.corners.arrow || emojiForStatus(res.corners.status),
          res.straight.arrow || emojiForStatus(res.straight.status)
        ];
      } else {
        rowEmojis = [
          res.grade.arrow || emojiForStatus(res.grade.status),
          emojiForStatus(res.track.status),
          res.distance.arrow || emojiForStatus(res.distance.status),
          emojiForStatus(res.distance_type.status),
          emojiForStatus(res.terrain.status),
          res.turn.arrow || emojiForStatus(res.turn.status),
          emojiForStatus(res.late_race.status),
          res.fans.arrow || emojiForStatus(res.fans.status)
        ];
      }
      emojiBoard += rowEmojis.join("") + "\n";
    });

    const playUrl = window.location.origin.includes("localhost") 
      ? "https://petecao.github.io/Trackle/" 
      : window.location.href.split("?")[0];
    emojiBoard += `\nPlay at: ${playUrl}`;

    navigator.clipboard.writeText(emojiBoard).then(() => {
      btnShareResult.textContent = "✅ Copied to Clipboard!";
      setTimeout(() => {
        btnShareResult.textContent = "📋 Share Result";
      }, 2500);
    }).catch(() => {
      alert("Score:\n" + emojiBoard);
    });
  }

  function emojiForStatus(status) {
    if (status === "exact") return "🟩";
    if (status === "partial") return "🟨";
    return "⬛";
  }

  // Statistics
  function getStats() {
    try {
      const raw = localStorage.getItem(getStatsKey());
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          return {
            played: Number(parsed.played) || 0,
            wins: Number(parsed.wins) || 0,
            currentStreak: Number(parsed.currentStreak) || 0,
            maxStreak: Number(parsed.maxStreak) || 0,
            distribution: Object.assign({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, X: 0 }, parsed.distribution || {})
          };
        }
      }
    } catch (e) {}
    return {
      played: 0,
      wins: 0,
      currentStreak: 0,
      maxStreak: 0,
      distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, X: 0 }
    };
  }

  function saveStats(stats) {
    try {
      localStorage.setItem(getStatsKey(), JSON.stringify(stats));
    } catch (e) {}
  }

  function renderStatsModal() {
    const stats = getStats();
    document.getElementById("stat-played").textContent = stats.played;
    const winRate = stats.played > 0 ? Math.round((stats.wins / stats.played) * 100) : 0;
    document.getElementById("stat-winrate").textContent = `${winRate}%`;
    document.getElementById("stat-streak").textContent = stats.currentStreak;
    document.getElementById("stat-max-streak").textContent = stats.maxStreak;

    const barsContainer = document.getElementById("guess-distribution-bars");
    barsContainer.innerHTML = "";
    const maxVal = Math.max(1, ...Object.values(stats.distribution));

    [1, 2, 3, 4, 5, 6].forEach(num => {
      const count = stats.distribution[num] || 0;
      const pct = Math.max(8, Math.round((count / maxVal) * 100));
      const row = document.createElement("div");
      row.className = "dist-bar-row";
      row.innerHTML = `
        <span class="dist-index">${num}</span>
        <div class="dist-bar-track">
          <div class="dist-bar-fill" style="width: ${count > 0 ? pct : 0}%;">${count}</div>
        </div>
      `;
      barsContainer.appendChild(row);
    });

    statsModal.classList.add("open");
  }

  function closeAllModals() {
    helpModal.classList.remove("open");
    statsModal.classList.remove("open");
    gameOverModal.classList.remove("open");
  }

  function launchConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ["#10b981", "#38bdf8", "#ec4899", "#fbbf24", "#a855f7", "#ffffff"];

    for (let i = 0; i < 90; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height * 0.5,
        w: Math.random() * 8 + 6,
        h: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 4 + 3,
        rot: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 6
      });
    }

    let frames = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vRot;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });

      frames++;
      if (frames < 200) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    requestAnimationFrame(animate);
  }

  // Event Listeners
  function setupEventListeners() {
    trackInput.addEventListener("input", (e) => {
      updateSuggestions(e.target.value);
    });

    trackInput.addEventListener("keydown", handleInputKeydown);

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-section")) {
        suggestionsList.classList.remove("open");
      }
    });

    // Guess submit button
    submitBtn.addEventListener("click", submitCurrentInput);

    const btnViewDailyResult = document.getElementById("btn-view-daily-result");
    if (btnViewDailyResult) {
      btnViewDailyResult.addEventListener("click", () => {
        const isWin = guesses.length > 0 && guesses[guesses.length - 1].isWin;
        showGameOverModal(isWin);
      });
    }

    const btnSwitchPractice = document.getElementById("btn-switch-practice");
    if (btnSwitchPractice) {
      btnSwitchPractice.addEventListener("click", () => {
        startNewGame("practice");
      });
    }

    // Game type buttons (Course vs Race)
    btnGameCourse.addEventListener("click", () => {
      if (currentGameType !== "course") switchGameType("course");
    });

    btnGameRace.addEventListener("click", () => {
      if (currentGameType !== "race") switchGameType("race");
    });

    btnModeDaily.addEventListener("click", () => {
      if (currentPlayMode !== "daily") startNewGame("daily");
    });

    btnModePractice.addEventListener("click", () => {
      startNewGame("practice");
    });

    btnHelp.addEventListener("click", () => {
      helpModal.classList.add("open");
    });

    btnStats.addEventListener("click", () => {
      renderStatsModal();
    });

    btnSound.addEventListener("click", toggleSound);
    btnShareResult.addEventListener("click", copyShareResult);
    btnPlayAgain.addEventListener("click", () => {
      startNewGame("practice");
    });

    document.getElementById("close-help-btn").addEventListener("click", closeAllModals);
    document.getElementById("close-stats-btn").addEventListener("click", closeAllModals);
    document.getElementById("close-game-over-btn").addEventListener("click", closeAllModals);

    [helpModal, statsModal, gameOverModal].forEach(modal => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeAllModals();
      });
    });

    window.addEventListener("resize", () => {
      const canvas = document.getElementById("confetti-canvas");
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
