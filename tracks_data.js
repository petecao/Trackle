// Racetrack dataset for Trackle with all attributes and comparison logic
const RACETRACKS = [
  {
    id: 10001,
    slug: "sapporo",
    name: "Sapporo",
    japanese: "札幌競馬場",
    region: "Hokkaido",
    league: "JRA",
    country: "Japan",
    terrains: "Turf & Dirt",
    direction: "Right",
    straight: 266,
    courses_count: 8,
    has_g1: false,
    grade1_races: [],
    famous_races: ["Sapporo Kinen (G2)", "Elm Stakes (G3)", "Sapporo 2yo Stakes (G3)"],
    icon: "icons/sapporo_icon.png",
    thumb: "icons/sapporo_thumb.png",
    sublink: "https://gametora.com/umamusume/racetracks/sapporo",
    fun_fact: "Sapporo features a flat, circular turf track using European cool-season grasses. Its final straight is only 266m!"
  },
  {
    id: 10002,
    slug: "hakodate",
    name: "Hakodate",
    japanese: "函館競馬場",
    region: "Hokkaido",
    league: "JRA",
    country: "Japan",
    terrains: "Turf & Dirt",
    direction: "Right",
    straight: 262,
    courses_count: 8,
    has_g1: false,
    grade1_races: [],
    famous_races: ["Hakodate Kinen (G3)", "Hakodate Sprint Stakes (G3)", "Hakodate 2yo Stakes (G3)"],
    icon: "icons/hakodate_icon.png",
    thumb: "icons/hakodate_thumb.png",
    sublink: "https://gametora.com/umamusume/racetracks/hakodate",
    fun_fact: "The oldest racetrack in Japan (founded 1896) with the shortest final straight among all 10 JRA courses at 262m."
  },
  {
    id: 10003,
    slug: "niigata",
    name: "Niigata",
    japanese: "新潟競馬場",
    region: "Chubu",
    league: "JRA",
    country: "Japan",
    terrains: "Turf & Dirt",
    direction: "Left / Straight",
    straight: 659,
    courses_count: 12,
    has_g1: false,
    grade1_races: [],
    famous_races: ["Ibis Summer Dash (G3)", "Niigata Kinen (G3)", "Sekiya Kinen (G3)"],
    icon: "icons/niigata_icon.png",
    thumb: "icons/niigata_thumb.png",
    sublink: "https://gametora.com/umamusume/racetracks/niigata",
    fun_fact: "Home of Japan's longest final straight (659m Outer Turf) and the legendary 1,000m Straight course (no corners!)."
  },
  {
    id: 10004,
    slug: "fukushima",
    name: "Fukushima",
    japanese: "福島競馬場",
    region: "Tohoku",
    league: "JRA",
    country: "Japan",
    terrains: "Turf & Dirt",
    direction: "Right",
    straight: 295,
    courses_count: 7,
    has_g1: false,
    grade1_races: [],
    famous_races: ["Tanabata Sho (G3)", "Fukushima Kinen (G3)", "Fukushima Minyu Cup"],
    icon: "icons/fukushima_icon.png",
    thumb: "icons/fukushima_thumb.png",
    sublink: "https://gametora.com/umamusume/racetracks/fukushima",
    fun_fact: "Famous for its undulating, wavy terrain with sharp dips and rises throughout the backstretch and homestretch."
  },
  {
    id: 10005,
    slug: "nakayama",
    name: "Nakayama",
    japanese: "中山競馬場",
    region: "Kanto",
    league: "JRA",
    country: "Japan",
    terrains: "Turf & Dirt",
    direction: "Right",
    straight: 310,
    courses_count: 11,
    has_g1: true,
    grade1_races: ["Arima Kinen", "Satsuki Sho", "Sprinters Stakes", "Hopeful Stakes", "Nakayama Grand Jump"],
    famous_races: ["Arima Kinen (G1)", "Satsuki Sho (G1)", "Sprinters Stakes (G1)"],
    icon: "icons/nakayama_icon.png",
    thumb: "icons/nakayama_thumb.png",
    sublink: "https://gametora.com/umamusume/racetracks/nakayama",
    fun_fact: "Features the infamous 2.2-meter steep uphill slope right in the final straight before the finish line!"
  },
  {
    id: 10006,
    slug: "tokyo",
    name: "Tokyo (Fuchu)",
    japanese: "東京競馬場",
    region: "Kanto",
    league: "JRA",
    country: "Japan",
    terrains: "Turf & Dirt",
    direction: "Left",
    straight: 525,
    courses_count: 13,
    has_g1: true,
    grade1_races: ["Japan Cup", "Tokyo Yushun (Derby)", "Tenno Sho (Autumn)", "Yasuda Kinen", "Yushun Himba (Oaks)", "February Stakes", "Victoria Mile"],
    famous_races: ["Japan Cup (G1)", "Japanese Derby (G1)", "Tenno Sho Autumn (G1)"],
    icon: "icons/tokyo_icon.png",
    thumb: "icons/tokyo_thumb.png",
    sublink: "https://gametora.com/umamusume/racetracks/tokyo",
    fun_fact: "The premier temple of Japanese horse racing, featuring a massive 525.9m homestretch and the Doushinzaka slope."
  },
  {
    id: 10007,
    slug: "chukyo",
    name: "Chukyo",
    japanese: "中京競馬場",
    region: "Chubu",
    league: "JRA",
    country: "Japan",
    terrains: "Turf & Dirt",
    direction: "Left",
    straight: 412,
    courses_count: 9,
    has_g1: true,
    grade1_races: ["Takamatsunomiya Kinen", "Champions Cup"],
    famous_races: ["Takamatsunomiya Kinen (G1)", "Champions Cup (G1)"],
    icon: "icons/chukyo_icon.png",
    thumb: "icons/chukyo_thumb.png",
    sublink: "https://gametora.com/umamusume/racetracks/chukyo",
    fun_fact: "The only counter-clockwise (left-handed) JRA track in western Japan, featuring a steep 2.0m hill in its 412.5m straight."
  },
  {
    id: 10008,
    slug: "kyoto",
    name: "Kyoto (Yodo)",
    japanese: "京都競馬場",
    region: "Kansai",
    league: "JRA",
    country: "Japan",
    terrains: "Turf & Dirt",
    direction: "Right",
    straight: 403,
    courses_count: 15,
    has_g1: true,
    grade1_races: ["Kikuka Sho", "Tenno Sho (Spring)", "Shuka Sho", "Mile Championship", "Queen Elizabeth II Cup"],
    famous_races: ["Kikuka Sho (G1)", "Tenno Sho Spring (G1)", "Mile Championship (G1)"],
    icon: "icons/kyoto_icon.png",
    thumb: "icons/kyoto_thumb.png",
    sublink: "https://gametora.com/umamusume/racetracks/kyoto",
    fun_fact: "Famous for the massive Yodo Hill on the 3rd corner where jockeys must heed the proverb: 'Climb slowly, descend gently'."
  },
  {
    id: 10009,
    slug: "hanshin",
    name: "Hanshin",
    japanese: "阪神競馬場",
    region: "Kansai",
    league: "JRA",
    country: "Japan",
    terrains: "Turf & Dirt",
    direction: "Right",
    straight: 473,
    courses_count: 14,
    has_g1: true,
    grade1_races: ["Takarazuka Kinen", "Oka Sho (Japanese 1000 Guineas)", "Osaka Hai", "Asahi Hai FS", "Hanshin JF"],
    famous_races: ["Takarazuka Kinen (G1)", "Oka Sho (G1)", "Osaka Hai (G1)"],
    icon: "icons/hanshin_icon.png",
    thumb: "icons/hanshin_thumb.png",
    sublink: "https://gametora.com/umamusume/racetracks/hanshin",
    fun_fact: "Home of the majestic 473.6m Outer Turf straight and a sudden 1.8m steep hill 200m before the finish wire."
  },
  {
    id: 10010,
    slug: "kokura",
    name: "Kokura",
    japanese: "小倉競馬場",
    region: "Kyushu",
    league: "JRA",
    country: "Japan",
    terrains: "Turf & Dirt",
    direction: "Right",
    straight: 293,
    courses_count: 7,
    has_g1: false,
    grade1_races: [],
    famous_races: ["Kokura Kinen (G3)", "Kokura Daishoten (G3)", "Kokura 2yo Stakes (G3)"],
    icon: "icons/kokura_icon.png",
    thumb: "icons/kokura_thumb.png",
    sublink: "https://gametora.com/umamusume/racetracks/kokura",
    fun_fact: "The sole JRA racetrack situated on the southern island of Kyushu, with downhill slopes that encourage lightning-fast early paces."
  },
  {
    id: 10101,
    slug: "ooi",
    name: "Ooi (TCK)",
    japanese: "大井競馬場 (TCK)",
    region: "Kanto",
    league: "NAR",
    country: "Japan",
    terrains: "Dirt Only",
    direction: "Right",
    straight: 386,
    courses_count: 3,
    has_g1: true,
    grade1_races: ["Tokyo Daishoten", "Teio Sho", "JBC Classic", "Haneda Hai", "Tokyo Derby"],
    famous_races: ["Tokyo Daishoten (G1)", "Teio Sho (Jpn1)"],
    icon: "icons/ooi_icon.png",
    thumb: "icons/ooi_thumb.png",
    sublink: "https://gametora.com/umamusume/racetracks/ooi",
    fun_fact: "Tokyo City Keiba (TCK) is Japan's premier nighttime 'Twinkle Race' dirt track and host to the year-end international G1 Tokyo Daishoten."
  },
  {
    id: 10103,
    slug: "kawasaki",
    name: "Kawasaki",
    japanese: "川崎競馬場",
    region: "Kanto",
    league: "NAR",
    country: "Japan",
    terrains: "Dirt Only",
    direction: "Left",
    straight: 300,
    courses_count: 3,
    has_g1: true,
    grade1_races: ["Kawasaki Kinen", "Zen-Nippon Nisai Yushun", "Kanto Oaks"],
    famous_races: ["Kawasaki Kinen (Jpn1)", "Zen-Nippon Nisai Yushun (Jpn1)"],
    icon: "icons/kawasaki_icon.png",
    thumb: "icons/kawasaki_thumb.png",
    sublink: "https://gametora.com/umamusume/racetracks/kawasaki",
    fun_fact: "Features unusually tight and sharp corners where positioning around bends is crucial to victory."
  },
  {
    id: 10104,
    slug: "funabashi",
    name: "Funabashi",
    japanese: "船橋競馬場",
    region: "Kanto",
    league: "NAR",
    country: "Japan",
    terrains: "Dirt Only",
    direction: "Left",
    straight: 308,
    courses_count: 4,
    has_g1: true,
    grade1_races: ["Kashiwa Kinen", "Marine Cup", "Diolite Kinen"],
    famous_races: ["Kashiwa Kinen (Jpn1)", "Diolite Kinen (Jpn2)"],
    icon: "icons/funabashi_icon.png",
    thumb: "icons/funabashi_thumb.png",
    sublink: "https://gametora.com/umamusume/racetracks/funabashi",
    fun_fact: "Features spiral curves at both turns designed to ease centrifugal forces, helping maintain momentum into the homestretch."
  },
  {
    id: 10105,
    slug: "morioka",
    name: "Morioka (ORO Park)",
    japanese: "盛岡競馬場 (OROパーク)",
    region: "Tohoku",
    league: "NAR",
    country: "Japan",
    terrains: "Dirt Only",
    direction: "Left",
    straight: 300,
    courses_count: 4,
    has_g1: true,
    grade1_races: ["Mile Championship Nambu Hai", "JBC Classic"],
    famous_races: ["Mile Championship Nambu Hai (Jpn1)", "Derby Grand Prix"],
    icon: "icons/morioka_icon.png",
    thumb: "icons/morioka_thumb.png",
    sublink: "https://gametora.com/umamusume/racetracks/morioka",
    fun_fact: "Known as 'ORO Park', surrounded by scenic Iwate mountains with a steady 4.4m elevation climb on the backstretch."
  },
  {
    id: 10201,
    slug: "longchamp",
    name: "ParisLongchamp",
    japanese: "ロンシャン競馬場",
    region: "Overseas (France)",
    league: "International",
    country: "France",
    terrains: "Turf Only",
    direction: "Right",
    straight: 533,
    courses_count: 1,
    has_g1: true,
    grade1_races: ["Prix de l'Arc de Triomphe"],
    famous_races: ["Prix de l'Arc de Triomphe (G1)"],
    icon: "icons/longchamp_icon.png",
    thumb: "icons/longchamp_thumb.png",
    sublink: "https://gametora.com/umamusume/racetracks/longchamp",
    fun_fact: "Home to the pinnacle of world turf racing: Prix de l'Arc de Triomphe, with its grueling uphill ascent to the Windmill and descent into the 'Fausse Ligne Droite'."
  },
  {
    id: 10202,
    slug: "santa_anita",
    name: "Santa Anita Park",
    japanese: "サンタアニタパーク競馬場",
    region: "Overseas (USA)",
    league: "International",
    country: "USA",
    terrains: "Turf & Dirt",
    direction: "Left",
    straight: 310,
    courses_count: 10,
    has_g1: true,
    grade1_races: ["Breeders' Cup Classic", "Santa Anita Derby", "Santa Anita Handicap"],
    famous_races: ["Breeders' Cup Classic (G1)", "Santa Anita Handicap (G1)"],
    icon: "icons/santa_anita_icon.png",
    thumb: "icons/santa_anita_thumb.png",
    sublink: "https://gametora.com/umamusume/racetracks/santa_anita",
    fun_fact: "Iconic Southern California track with the stunning San Gabriel Mountains backdrop and its famous hillside turf course."
  },
  {
    id: 10203,
    slug: "del_mar",
    name: "Del Mar",
    japanese: "デルマー競馬場",
    region: "Overseas (USA)",
    league: "International",
    country: "USA",
    terrains: "Turf & Dirt",
    direction: "Left",
    straight: 280,
    courses_count: 9,
    has_g1: true,
    grade1_races: ["Breeders' Cup Classic", "Pacific Classic"],
    famous_races: ["Pacific Classic (G1)", "Breeders' Cup Classic (G1)"],
    icon: "icons/del_mar_icon.png",
    thumb: "icons/del_mar_thumb.png",
    sublink: "https://gametora.com/umamusume/racetracks/del_mar",
    fun_fact: "Founded by Bing Crosby in 1937 under the famous slogan: 'Where the Turf Meets the Surf' right along the Pacific Ocean."
  }
];

// Comparison evaluation between guess and mystery target
function evaluateGuess(guess, target) {
  // 1. Region
  let regionStatus = "mismatch";
  if (guess.region === target.region) {
    regionStatus = "exact";
  } else if (guess.country === target.country) {
    // Both in Japan or both in USA
    regionStatus = "partial";
  }

  // 2. League
  let leagueStatus = "mismatch";
  if (guess.league === target.league) {
    leagueStatus = "exact";
  } else if ((guess.league === "JRA" && target.league === "NAR") || (guess.league === "NAR" && target.league === "JRA")) {
    leagueStatus = "partial"; // both are Japanese domestic leagues
  }

  // 3. Terrains
  let terrainStatus = "mismatch";
  if (guess.terrains === target.terrains) {
    terrainStatus = "exact";
  } else if (guess.terrains.includes("Dirt") && target.terrains.includes("Dirt")) {
    terrainStatus = "partial";
  } else if (guess.terrains.includes("Turf") && target.terrains.includes("Turf")) {
    terrainStatus = "partial";
  }

  // 4. Direction
  let directionStatus = "mismatch";
  if (guess.direction === target.direction) {
    directionStatus = "exact";
  } else if (guess.direction.includes("Left") && target.direction.includes("Left")) {
    directionStatus = "partial";
  }

  // 5. Final Straight (with higher / lower)
  let straightStatus = "mismatch";
  const straightDiff = Math.abs(guess.straight - target.straight);
  if (straightDiff === 0) {
    straightStatus = "exact";
  } else if (straightDiff <= 40) {
    straightStatus = "partial";
  }
  let straightArrow = "";
  if (target.straight > guess.straight) straightArrow = "⬆️";
  else if (target.straight < guess.straight) straightArrow = "⬇️";

  // 6. Total Courses count (with higher / lower)
  let coursesStatus = "mismatch";
  const coursesDiff = Math.abs(guess.courses_count - target.courses_count);
  if (coursesDiff === 0) {
    coursesStatus = "exact";
  } else if (coursesDiff <= 2) {
    coursesStatus = "partial";
  }
  let coursesArrow = "";
  if (target.courses_count > guess.courses_count) coursesArrow = "⬆️";
  else if (target.courses_count < guess.courses_count) coursesArrow = "⬇️";

  // 7. Has G1
  let g1Status = (guess.has_g1 === target.has_g1) ? "exact" : "mismatch";

  const isWin = guess.id === target.id;

  return {
    isWin,
    guess,
    target,
    results: {
      region: { val: guess.region, status: regionStatus },
      league: { val: guess.league, status: leagueStatus },
      terrains: { val: guess.terrains, status: terrainStatus },
      direction: { val: guess.direction, status: directionStatus },
      straight: { val: `${guess.straight}m`, arrow: straightArrow, status: straightStatus, diff: target.straight - guess.straight },
      courses: { val: guess.courses_count, arrow: coursesArrow, status: coursesStatus, diff: target.courses_count - guess.courses_count },
      has_g1: { val: guess.has_g1 ? "Yes" : "No", status: g1Status }
    }
  };
}

// Deterministic hash based on date string (YYYY-MM-DD)
function getDailyTrack(dateString) {
  let hash = 0;
  for (let i = 0; i < dateString.length; i++) {
    hash = (hash * 31 + dateString.charCodeAt(i)) & 0xffffffff;
  }
  const index = Math.abs(hash) % RACETRACKS.length;
  return RACETRACKS[index];
}

// Export for browser
window.RACETRACKS = RACETRACKS;
window.evaluateGuess = evaluateGuess;
window.getDailyTrack = getDailyTrack;
