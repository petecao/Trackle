// Uma Musume Complete Discography Song Catalog (247 Songs)
// Song previews and covers sourced from https://snep.pw/uma/songsorter and official CD releases
// Metadata and character vocalists sourced from Umamusume Wiki (https://umamusu.wiki)
const ALL_SONGS = [
  {
    "id": "00c104fa-f2fe-4359-879d-ac17c8a51098",
    "name": "Silent Star",
    "name_ja": "Silent Star",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/9722f623f.mp3",
    "cover_file": "covers/43e8406c9.png",
    "preview_hash": "9722f623f",
    "cover_hash": "43e8406c9",
    "singer": "Silence Suzuka",
    "name_en": "Silent Star"
  },
  {
    "id": "0306151a-a7fb-41aa-bd78-bde2e61086af",
    "name": "Tokimeki Scramble",
    "name_ja": "ときめきスクランブル",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/fdaf02cfe.mp3",
    "cover_file": "covers/f0a596303.png",
    "preview_hash": "fdaf02cfe",
    "cover_hash": "f0a596303",
    "singer": "Mayano Top Gun",
    "name_en": "Heart-Fluttering Scramble"
  },
  {
    "id": "031121b0-d168-4bec-bb24-e1314a9d0759",
    "name": "∞ (infinity)",
    "name_ja": "∞ (infinity)",
    "tags": {
      "solo": true,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/83b6ea0c8.mp3",
    "cover_file": "covers/22db75fd9.png",
    "preview_hash": "83b6ea0c8",
    "cover_hash": "22db75fd9",
    "singer": "Oguri Cap",
    "name_en": "∞ (infinity)"
  },
  {
    "id": "03ec58be-cc5e-458c-b3cf-5e56526f63a9",
    "name": "Ace, Sunawachi",
    "name_ja": "エース、すなわち",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/769878ff9.mp3",
    "cover_file": "covers/caaf5f8c2.png",
    "preview_hash": "769878ff9",
    "cover_hash": "caaf5f8c2",
    "singer": "Katsuragi Ace",
    "name_en": "Ace of Japan"
  },
  {
    "id": "04c68d37-cfc6-4952-91ad-6fa54bd7ebb6",
    "name": "Hajimari no Signal",
    "name_ja": "はじまりのSignal",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/660fa3ae8.mp3",
    "cover_file": "covers/104f71376.png",
    "preview_hash": "660fa3ae8",
    "cover_hash": "104f71376",
    "singer": "Mejiro McQueen",
    "name_en": "Signal of Something New"
  },
  {
    "id": "059316ea-a2c6-4433-9b6b-f0c0ef594448",
    "name": "Yukoma Roman Junjoha",
    "name_ja": "ゆこまロマン純情派",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/556074473.mp3",
    "cover_file": "covers/aa6dfea24.png",
    "preview_hash": "556074473",
    "cover_hash": "aa6dfea24",
    "singer": "Tokai Teio, Mihono Bourbon, Transcend, Hokko Tarumae, Wonder Acute",
    "name_en": "Yukoma Thermae"
  },
  {
    "id": "07a22113-c84c-4cc0-893d-18f770f41228",
    "name": "Kanjo no Reimei",
    "name_ja": "感情ノ黎明",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/547e34b66.mp3",
    "cover_file": "covers/bf72c7a3d.png",
    "preview_hash": "547e34b66",
    "cover_hash": "bf72c7a3d",
    "singer": "Narita Taishin",
    "name_en": "Dawn of Emotions"
  },
  {
    "id": "07e5ac4d-70f9-4a3a-ab44-ed1f03eb7564",
    "name": "#UmaRAP",
    "name_ja": "#ウマRAP",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/3360a0fb3.mp3",
    "cover_file": "covers/96dd82fd0.png",
    "preview_hash": "3360a0fb3",
    "cover_hash": "96dd82fd0",
    "singer": "Grass Wonder, T.M. Opera O, Yukino Bijin, Winning Ticket, Narita Taishin",
    "name_en": "#Uma Rap"
  },
  {
    "id": "083bf4ca-4ddf-4e70-9135-a00bc8ce3497",
    "name": "transforming",
    "name_ja": "transforming",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/7b4c1061c.mp3",
    "cover_file": "covers/518e87a09.png",
    "preview_hash": "7b4c1061c",
    "cover_hash": "518e87a09",
    "singer": "Silence Suzuka, Agnes Tachyon",
    "name_en": "Transforming"
  },
  {
    "id": "0a426407-9c4a-411f-a7fc-d6a767d15a1a",
    "name": "L'Arc de gloire",
    "name_ja": "L'Arc de gloire",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/f9668ada7.mp3",
    "cover_file": "covers/e6cf77be1.png",
    "preview_hash": "f9668ada7",
    "cover_hash": "e6cf77be1",
    "singer": "Gold Ship, Vodka, El Condor Pasa, Manhattan Cafe, Air Shakur, Eishin Flash, Nakayama Festa, Satono Diamond, Kitasan Black, Sirius Symboli, Sakura Laurel, Neo Universe, Tap Dance City",
    "name_en": "L'Arc de gloire"
  },
  {
    "id": "0bcd5bab-6c1b-4df1-a4e0-49b8c020b814",
    "name": "Seishun ga Matteru",
    "name_ja": "青春が待ってる",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/2d7b2efec.mp3",
    "cover_file": "covers/93b8497b9.png",
    "preview_hash": "2d7b2efec",
    "cover_hash": "93b8497b9",
    "singer": "Fine Motion, Mejiro Ryan, Smart Falcon",
    "name_en": "Here Comes Our Time"
  },
  {
    "id": "0d8fa11a-1795-4d5e-a948-bf22061c7de9",
    "name": "Koisuru Sekai",
    "name_ja": "恋する世界",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/4d604f383.mp3",
    "cover_file": "covers/06b9e217a.png",
    "preview_hash": "4d604f383",
    "cover_hash": "06b9e217a",
    "singer": "Fine Motion",
    "name_en": "The World When in Love"
  },
  {
    "id": "100f01a9-b717-4945-961e-a844f8a652a7",
    "name": "Hai no memoire",
    "name_ja": "灰のmemoire",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/2c68331f8.mp3",
    "cover_file": "covers/3c7345357.png",
    "preview_hash": "2c68331f8",
    "cover_hash": "3c7345357",
    "singer": "Oguri Cap, Gold Ship, Mejiro McQueen, Seiun Sky, Tamamo Cross, Biwa Hayahide, Curren Chan, Hishi Miracle, Chrono Genesis",
    "name_en": "Ashen Memoir"
  },
  {
    "id": "10bbf2f3-d06c-4a81-9cd8-9ea487a68c10",
    "name": "Never Looking Back",
    "name_ja": "Never Looking Back",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/a397fe0e1.mp3",
    "cover_file": "covers/4eab95bfb.png",
    "preview_hash": "a397fe0e1",
    "cover_hash": "4eab95bfb",
    "singer": "Daiwa Scarlet, Grass Wonder, T.M. Opera O, Narita Brian, Symboli Rudolf, Air Groove, Mayano Top Gun, Mihono Bourbon",
    "name_en": "Never Looking Back"
  },
  {
    "id": "112ba661-b0a8-4fd6-a4fd-39465eb5fd70",
    "name": "Gaze on Me!",
    "name_ja": "Gaze on Me!",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/1e3365cc3.mp3",
    "cover_file": "covers/538be435c.png",
    "preview_hash": "1e3365cc3",
    "cover_hash": "538be435c",
    "singer": "Vodka, Daiwa Scarlet, Mayano Top Gun, Smart Falcon, Daitaku Helios, Sakura Laurel, Yamanin Zephyr, Daiichi Ruby, Aston Machan, K.S.Miracle, Copano Rickey, Hokko Tarumae, Wonder Acute",
    "name_en": "Gaze on Me!"
  },
  {
    "id": "12610ae4-b26d-4b3b-9db3-b3db11b7dac0",
    "name": "Out of Triangle",
    "name_ja": "アウト・オブ・トライアングル",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/ab31f1e69.mp3",
    "cover_file": "covers/71cd9a43c.png",
    "preview_hash": "ab31f1e69",
    "cover_hash": "71cd9a43c",
    "singer": "Nice Nature",
    "name_en": "Out of This Triangle"
  },
  {
    "id": "14831685-2d90-499d-bd69-a8244afa1e97",
    "name": "Torikago no Lonely Bird",
    "name_ja": "鳥かごのロンリーバード",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/aa9d0426c.mp3",
    "cover_file": "covers/ee93115c6.png",
    "preview_hash": "aa9d0426c",
    "cover_hash": "ee93115c6",
    "singer": "Hishi Amazon",
    "name_en": "Lonely Bird in the Cage"
  },
  {
    "id": "14c29581-32a5-4cea-a513-06c75e998cf0",
    "name": "Fanfare for Future!",
    "name_ja": "Fanfare for Future!",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/0fcd4f2e7.mp3",
    "cover_file": "covers/43e8406c9.png",
    "preview_hash": "0fcd4f2e7",
    "cover_hash": "43e8406c9",
    "singer": "Special Week, Silence Suzuka, Tokai Teio",
    "name_en": "Fanfare for the Future!"
  },
  {
    "id": "157ab627-9c04-4282-8324-52aeb05f9c19",
    "name": "Inari no Hana",
    "name_ja": "稲荷ノ華",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/1942af790.mp3",
    "cover_file": "covers/caaf5f8c2.png",
    "preview_hash": "1942af790",
    "cover_hash": "caaf5f8c2",
    "singer": "Inari One",
    "name_en": "Flower of Inari"
  },
  {
    "id": "15ccd855-a5fa-4689-bdd3-216621ff0c89",
    "name": "Ambitious World",
    "name_ja": "Ambitious World",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/260cec76d.mp3",
    "cover_file": "covers/5ea0972ff.png",
    "preview_hash": "260cec76d",
    "cover_hash": "5ea0972ff",
    "singer": "Satono Diamond, Kitasan Black",
    "name_en": "Ambitious World"
  },
  {
    "id": "18378549-dd48-42f4-80c4-d228b007c646",
    "name": "VOLTAGE",
    "name_ja": "VOLTAGE",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/b64785bd7.mp3",
    "cover_file": "covers/bc5cbe9d3.png",
    "preview_hash": "b64785bd7",
    "cover_hash": "bc5cbe9d3",
    "singer": "Taiki Shuttle, Grass Wonder, Hishi Amazon, El Condor Pasa, Seeking the Pearl, Espoir City, Symboli Kris S, Tap Dance City, Cesario, Loves Only You, Red Desire, Forever Young, Marche Lorraine",
    "name_en": "VOLTAGE"
  },
  {
    "id": "19af0aa1-e1e3-4268-9bb3-bd6d998387db",
    "name": "Unite!!",
    "name_ja": "Unite!!",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/de9e7fcd3.mp3",
    "cover_file": "covers/05c44f8b4.png",
    "preview_hash": "de9e7fcd3",
    "cover_hash": "05c44f8b4",
    "singer": "Still in Love, Rhein Kraft, Cesario, Air Messiah, Daring Heart",
    "name_en": "Unite!!"
  },
  {
    "id": "19ce01a3-4412-4da6-9042-a278630a0463",
    "name": "(Oyasumi Haishin) Minna to Love Hojuu Shita~i",
    "name_ja": "【おやすみ配信】みんなとラヴ補充した～い",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/a918e3e47.mp3",
    "cover_file": "covers/e1fe73715.png",
    "preview_hash": "a918e3e47",
    "cover_hash": "e1fe73715",
    "singer": "Loves Only You",
    "name_en": "[GOODNIGHT ZATSU] Let's recharge our love together"
  },
  {
    "id": "19d9b813-fa3c-46c6-aeca-ebd793db9fa4",
    "name": "Find My Only Way",
    "name_ja": "Find My Only Way",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/70149f208.mp3",
    "cover_file": "covers/3658a9696.png",
    "preview_hash": "70149f208",
    "cover_hash": "3658a9696",
    "singer": "Special Week, Silence Suzuka, Tokai Teio, Vodka, Daiwa Scarlet, Mejiro McQueen, Gold Ship",
    "name_en": "Find My Only Way"
  },
  {
    "id": "1aa416e0-042c-4cef-93dc-75c2c93e06e3",
    "name": "City Princess!",
    "name_ja": "シティプリンセス!",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/dabe5328c.mp3",
    "cover_file": "covers/adab79e96.png",
    "preview_hash": "dabe5328c",
    "cover_hash": "adab79e96",
    "singer": "Yukino Bijin",
    "name_en": "City Princess!"
  },
  {
    "id": "1b7ae431-c9c4-40b6-a768-29e7c7608210",
    "name": "Go This Way",
    "name_ja": "Go This Way",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/1772bc95b.mp3",
    "cover_file": "covers/b2b1043ac.png",
    "preview_hash": "1772bc95b",
    "cover_hash": "b2b1043ac",
    "singer": "Manhattan Cafe, Air Shakur, Nice Nature",
    "name_en": "Go This Way"
  },
  {
    "id": "1d24a079-8010-42bf-9ca9-58034ea70cc1",
    "name": "Genkai Made Pom Pon!!",
    "name_ja": "限界までPom Pon！！",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/babeea8ef.mp3",
    "cover_file": "covers/e26b4d71b.png",
    "preview_hash": "babeea8ef",
    "cover_hash": "e26b4d71b",
    "singer": "Sakura Bakushin O, Matikanefukukitaru, Nice Nature, King Halo, Matikanetannhauser, Rhein Kraft, Cesario, Win Variation, Calstone Light O, Durandal",
    "name_en": "Pom-Pom Cheer!"
  },
  {
    "id": "1d9512e3-73bc-480e-9d46-b5779d810f52",
    "name": "AmpReFire",
    "name_ja": "AmpReFire",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/f2e8e81f4.mp3",
    "cover_file": "covers/267929af8.png",
    "preview_hash": "f2e8e81f4",
    "cover_hash": "267929af8",
    "singer": "Gold Ship, Narita Brian, Biwa Hayahide, Super Creek, Mr. C.B., Sakura Chiyono O, Yaeno Muteki, Orfevre",
    "name_en": "AmpReignition"
  },
  {
    "id": "1eee32a8-6a9e-4521-9007-7c5b313ecb53",
    "name": "Soshite Minna no",
    "name_ja": "ソシテミンナノ",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/68e8047cc.mp3",
    "cover_file": "covers/8f36105ca.png",
    "preview_hash": "68e8047cc",
    "cover_hash": "8f36105ca",
    "singer": "Satono Diamond, Kitasan Black, Satono Crown, Cheval Grand, Sounds of Earth, Duramente",
    "name_en": "Be Their Beloved"
  },
  {
    "id": "1f4bf340-d54e-4454-936f-cf4a7f076e14",
    "name": "Komorebi no Yell",
    "name_ja": "木漏れ日のエール",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/487ab56fd.mp3",
    "cover_file": "covers/cd2a45cba.png",
    "preview_hash": "487ab56fd",
    "cover_hash": "cd2a45cba",
    "singer": "Tokai Teio, Mejiro McQueen",
    "name_en": "Sunbeam Cheer"
  },
  {
    "id": "1fec8560-84b3-446a-8a4b-a4bb77f89545",
    "name": "Sasayaka na Inori",
    "name_ja": "ささやかな祈り",
    "tags": {
      "solo": true,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/85341f311.mp3",
    "cover_file": "covers/6a111193e.png",
    "preview_hash": "85341f311",
    "cover_hash": "6a111193e",
    "singer": "Rice Shower",
    "name_en": "A Little Prayer"
  },
  {
    "id": "24d9b93c-10a8-4b5b-abbb-397f3ea553a5",
    "name": "Reimei ni Saku Hana",
    "name_ja": "黎明に咲く華",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/c21e8d2b0.mp3",
    "cover_file": "covers/f8cfcb423.png",
    "preview_hash": "c21e8d2b0",
    "cover_hash": "f8cfcb423",
    "singer": "Daring Tact, Mejiro Ramonu, Vivlos, Still in Love, Gentildonna, Almond Eye, Gran Alegria, Loves Only You, Chrono Genesis",
    "name_en": "Blooming at Dawn"
  },
  {
    "id": "256ab509-c0f4-49fb-a773-c90a92fc1791",
    "name": "Shake The World!!",
    "name_ja": "Shake The World!!",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/e471cfb72.mp3",
    "cover_file": "covers/2609753cc.png",
    "preview_hash": "e471cfb72",
    "cover_hash": "2609753cc",
    "singer": "Blast Onepiece, Almond Eye, Lucky Lilac, Gran Alegria, Loves Only You, Chrono Genesis, Curren Bouquetd'or",
    "name_en": "Shake The World!!"
  },
  {
    "id": "26943766-4284-46d2-836b-c9d02ca9df5b",
    "name": "Akogare Challenge Dash!!",
    "name_ja": "アコガレChallenge Dash!!",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/7374f41a4.mp3",
    "cover_file": "covers/f395cf448.png",
    "preview_hash": "7374f41a4",
    "cover_hash": "f395cf448",
    "singer": "Special Week, Silence Suzuka, Tokai Teio, Daiwa Scarlet, Vodka, Mejiro McQueen, Gold Ship, Kitasan Black",
    "name_en": "Dream On! Challenge Dash!!"
  },
  {
    "id": "28bee54e-360f-43b3-90fe-43dbf503f012",
    "name": "Goal To My SHIP",
    "name_ja": "Goal To My SHIP",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/65c1099a6.mp3",
    "cover_file": "covers/447499e2f.png",
    "preview_hash": "65c1099a6",
    "cover_hash": "447499e2f",
    "singer": "Gold Ship",
    "name_en": "Goal to My Ship"
  },
  {
    "id": "2aa6b866-53a8-4de5-8d6c-3bb502a58467",
    "name": "DANCE! DANCE! \"ROMAN\"",
    "name_ja": "DANCE! DANCE! \"ROMAN\"",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/302efcb83.mp3",
    "cover_file": "covers/890d385d9.png",
    "preview_hash": "302efcb83",
    "cover_hash": "890d385d9",
    "singer": "Tap Dance City",
    "name_en": "Dance! Dance! ADVENTURE!"
  },
  {
    "id": "2afda098-b30e-4160-bc3f-b705fae90f30",
    "name": "Yume no Kotae",
    "name_ja": "夢のこたえ",
    "tags": {
      "solo": true,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/56a21fd35.mp3",
    "cover_file": "covers/eed2da0b2.png",
    "preview_hash": "56a21fd35",
    "cover_hash": "eed2da0b2",
    "singer": "Satono Diamond",
    "name_en": "Answer to My Dream"
  },
  {
    "id": "2b7a6bec-264e-401b-9d82-e444dbb8317b",
    "name": "TM Opera ~Tataeyo Towa ni~",
    "name_ja": "帝笑歌劇〜讃えよ永久に〜",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/b845d5e72.mp3",
    "cover_file": "covers/3049deb65.png",
    "preview_hash": "b845d5e72",
    "cover_hash": "3049deb65",
    "singer": "T.M. Opera O",
    "name_en": "T.M. Opera: the Ever Exalted"
  },
  {
    "id": "2cd331dd-9ea8-41ad-a4e6-5857fcbc3cf3",
    "name": "Aogeba Touto Mission!",
    "name_ja": "仰げば尊Mission!",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/1de7265be.mp3",
    "cover_file": "covers/a75f45aee.png",
    "preview_hash": "1de7265be",
    "cover_hash": "a75f45aee",
    "singer": "Agnes Digital",
    "name_en": "My Sacred Mission!"
  },
  {
    "id": "2f3d0828-de2c-4f7a-8e30-793de08448ee",
    "name": "BLAZE",
    "name_ja": "BLAZE",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/39c48d760.mp3",
    "cover_file": "covers/5edd2bcf1.png",
    "preview_hash": "39c48d760",
    "cover_hash": "5edd2bcf1",
    "singer": "Narita Brian",
    "name_en": "BLAZE"
  },
  {
    "id": "30181c7f-64fc-446a-878c-eaed20d704fd",
    "name": "Namida Hikatte Asu ni Nare!",
    "name_ja": "涙ひかって明日になれ！",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/db98475ab.mp3",
    "cover_file": "covers/ba3000097.png",
    "preview_hash": "db98475ab",
    "cover_hash": "ba3000097",
    "singer": "Biwa Hayahide, Winning Ticket, Narita Taishin",
    "name_en": "Those Tears Are for Tomorrow's Sake!"
  },
  {
    "id": "31dd5a8c-d3b1-40d5-95e2-e48a87dc0fb6",
    "name": "Ms. VICTORIA",
    "name_ja": "Ms. VICTORIA",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/b2d9d48b6.mp3",
    "cover_file": "covers/860c86f17.png",
    "preview_hash": "b2d9d48b6",
    "cover_hash": "860c86f17",
    "singer": "Tokai Teio, Oguri Cap, Vodka, Taiki Shuttle, El Condor Pasa, T.M. Opera O, Narita Brian, Air Groove, Tamamo Cross, Biwa Hayahide, Mayano Top Gun, Mihono Bourbon, Inari One, Kitasan Black",
    "name_en": "Ms. Victoria"
  },
  {
    "id": "32b51107-a07e-461a-ad5a-385715b37952",
    "name": "Close my eyes",
    "name_ja": "Close my eyes",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/eadc3b0b3.mp3",
    "cover_file": "covers/801c3822f.png",
    "preview_hash": "eadc3b0b3",
    "cover_hash": "801c3822f",
    "singer": "Cheval Grand, Verxina, Vivlos",
    "name_en": "Close my eyes"
  },
  {
    "id": "356b8b66-78df-4c12-92df-af1188aeac6f",
    "name": "TAILWIND",
    "name_ja": "TAILWIND",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/7ac9f5e48.mp3",
    "cover_file": "covers/473df5fe3.png",
    "preview_hash": "7ac9f5e48",
    "cover_hash": "473df5fe3",
    "singer": "Matikanetannhauser",
    "name_en": "TAILWIND"
  },
  {
    "id": "363a2131-f482-4b24-9972-70b1e3a832c3",
    "name": "STARTING FORCE",
    "name_ja": "STARTING FORCE",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/bf8f4e726.mp3",
    "cover_file": "covers/085847277.png",
    "preview_hash": "bf8f4e726",
    "cover_hash": "085847277",
    "singer": "Gold Ship, Nakayama Festa, Daring Tact, Rhein Kraft, Daring Heart, Fusaichi Pandora, Orfevre, Dream Journey, Fenomeno, Blast Onepiece, Almond Eye, Lucky Lilac, Gran Alegria, Loves Only You, Chrono Genesis, Curren Bouquetd'or",
    "name_en": "STARTING FORCE"
  },
  {
    "id": "3988a9c5-c06c-444c-a980-8a017afad8f1",
    "name": "Dodo tto Yuushou! Dai Kanshasai!!!",
    "name_ja": "どどっと優勝！大感謝祭！！！",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/96ee27cb1.mp3",
    "cover_file": "covers/0463a5153.png",
    "preview_hash": "96ee27cb1",
    "cover_hash": "0463a5153",
    "singer": "Party Dash#Team Cosmos, Party Dash#Team Freesia, Party Dash#Team Rose, Party Dash#Team Lily, Party Dash:Mr. C.B., Party Dash:Oguri Cap, Party Dash:Kitasan Black, Party Dash:Satono Diamond, Party Dash:Happy Meek",
    "name_en": "Hip Hip Victory! It's the Fan Fest!!!"
  },
  {
    "id": "3a762456-6686-4f27-8d27-2ed0c0eeae9b",
    "name": "Watashi ga Shuyaku ja Dame Desu ka?",
    "name_ja": "私が主役じゃダメですか？",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/98a246fa5.mp3",
    "cover_file": "covers/7f5731190.png",
    "preview_hash": "98a246fa5",
    "cover_hash": "7f5731190",
    "singer": "Dantsu Flame",
    "name_en": "Can't I Be No. 1?"
  },
  {
    "id": "3c1172fa-b1c9-4aa9-8534-84017258b831",
    "name": "Exercise the Right",
    "name_ja": "Exercise the Right",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/4db145dc0.mp3",
    "cover_file": "covers/0d1d4d6a1.png",
    "preview_hash": "4db145dc0",
    "cover_hash": "0d1d4d6a1",
    "singer": "King Halo",
    "name_en": "Exercise the Right"
  },
  {
    "id": "3c372766-732b-4617-9e7e-bd62bbfda42d",
    "name": "Youthful Eyes",
    "name_ja": "ユースフルアイズ",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/62fcd8006.mp3",
    "cover_file": "covers/d845adb72.png",
    "preview_hash": "62fcd8006",
    "cover_hash": "d845adb72",
    "singer": "Sakura Laurel",
    "name_en": "Youthful Eyes"
  },
  {
    "id": "3c3c6750-8413-4430-9486-8b5f710556ed",
    "name": "Nanairo no Keshiki",
    "name_ja": "七色の景色",
    "tags": {
      "solo": true,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/3facb5dfe.mp3",
    "cover_file": "covers/86f68490a.png",
    "preview_hash": "3facb5dfe",
    "cover_hash": "86f68490a",
    "singer": "Silence Suzuka",
    "name_en": "Seven Colors Scenery"
  },
  {
    "id": "3cadf386-96c3-4ab8-a92b-48025a567c98",
    "name": "Precious Star Dreamer",
    "name_ja": "Precious Star Dreamer",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/a52094ef1.mp3",
    "cover_file": "covers/77a70b2bb.png",
    "preview_hash": "a52094ef1",
    "cover_hash": "77a70b2bb",
    "singer": "Special Week, Silence Suzuka, Gold Ship, Mejiro McQueen, Narita Brian, Rice Shower, Winning Ticket",
    "name_en": "Precious Star Dreamer"
  },
  {
    "id": "3cec85d3-d913-4908-aa55-20d1353592c4",
    "name": "Everlasting BEATS",
    "name_ja": "Everlasting BEATS",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/13f1a53dd.mp3",
    "cover_file": "covers/4dd29d623.png",
    "preview_hash": "13f1a53dd",
    "cover_hash": "4dd29d623",
    "singer": "Tokai Teio, Vodka, Symboli Rudolf, Tsurumaru Tsuyoshi, Tanino Gimlet",
    "name_en": "Everlasting BEATS"
  },
  {
    "id": "3d2140cf-0574-4d6f-99b7-ece6fc1e498b",
    "name": "Pyoitto ♪ Hallelujah!",
    "name_ja": "ぴょいっと♪はれるや！",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/de817341e.mp3",
    "cover_file": "covers/ac8d2ad72.png",
    "preview_hash": "de817341e",
    "cover_hash": "ac8d2ad72",
    "singer": "Special Week, Grass Wonder, El Condor Pasa, Seiun Sky, King Halo",
    "name_en": "Hoppity Sunny Days ♪"
  },
  {
    "id": "3d984330-ae0c-4848-a763-f21d2fb9990c",
    "name": "Hat on your Head!",
    "name_ja": "Hat on your Head!",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/a18a95d21.mp3",
    "cover_file": "covers/9a9d50fce.png",
    "preview_hash": "a18a95d21",
    "cover_hash": "9a9d50fce",
    "singer": "Rice Shower, Mr. C.B., Matikanetannhauser, Cheval Grand, Hokko Tarumae",
    "name_en": "Hat on your Head!"
  },
  {
    "id": "3e9bd54f-ba40-4304-a8c6-bba775faa0d1",
    "name": "Spurt Syndromer",
    "name_ja": "スパートシンドローマー",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/cb7d24ccc.mp3",
    "cover_file": "covers/504357913.png",
    "preview_hash": "cb7d24ccc",
    "cover_hash": "504357913",
    "singer": "10-FEET",
    "name_en": "Spurt Syndromer"
  },
  {
    "id": "3f0e029f-d8ee-48ff-a536-186a1664832a",
    "name": "DREAM JACK",
    "name_ja": "DREAM JACK",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/4ace357ec.mp3",
    "cover_file": "covers/47e1c0629.png",
    "preview_hash": "4ace357ec",
    "cover_hash": "47e1c0629",
    "singer": "Fuji Kiseki",
    "name_en": "Dream Jack"
  },
  {
    "id": "3f655337-8489-4696-a5aa-061df8032666",
    "name": "GOCHISO Sama",
    "name_ja": "GOCHISO様",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/697f0c6ec.mp3",
    "cover_file": "covers/c7e64f80d.png",
    "preview_hash": "697f0c6ec",
    "cover_hash": "c7e64f80d",
    "singer": "Sakura Chiyono O, Katsuragi Ace, Hishi Amazon, Cesario",
    "name_en": "GOCHISO-SAMA"
  },
  {
    "id": "3fcd6161-a2d0-4e08-be8b-d4de387bd425",
    "name": "Pakatube! Desu ga, Nani ka?",
    "name_ja": "ぱかチューブっ! ですが、何か?",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/0ee65603c.mp3",
    "cover_file": "covers/cbbe13bea.png",
    "preview_hash": "0ee65603c",
    "cover_hash": "cbbe13bea",
    "singer": "Gold Ship",
    "name_en": "Pakatube! But, What is it?"
  },
  {
    "id": "4046bfd0-2d9b-4d0f-b08f-f1fe1222f6ce",
    "name": "Waracchao!",
    "name_ja": "笑っちゃお!",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/a91daf368.mp3",
    "cover_file": "covers/96ad8e883.png",
    "preview_hash": "a91daf368",
    "cover_hash": "96ad8e883",
    "singer": "Daitaku Helios",
    "name_en": "Let's Just Smile!"
  },
  {
    "id": "405d625b-e7ea-4fb7-87e7-cf5e141e4497",
    "name": "Hikari no Ushiro Sugata",
    "name_ja": "光の後ろ姿",
    "tags": {
      "solo": true,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/44ce634c6.mp3",
    "cover_file": "covers/783fffd2e.png",
    "preview_hash": "44ce634c6",
    "cover_hash": "783fffd2e",
    "singer": "Cheval Grand",
    "name_en": "A Shining Silhouette"
  },
  {
    "id": "415dd560-4213-4fbb-bb6a-932082d13cd1",
    "name": "KIRARI MAGIC SHOW",
    "name_ja": "KIRARI MAGIC SHOW",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/912a81309.mp3",
    "cover_file": "covers/132d56919.png",
    "preview_hash": "912a81309",
    "cover_hash": "132d56919",
    "singer": "Oguri Cap, Inari One, Smart Falcon, Copano Rickey, Hokko Tarumae, Wonder Acute",
    "name_en": "Sparkly Magic Show"
  },
  {
    "id": "423046f9-2afb-4ec0-8d74-8fb784988dc9",
    "name": "Yumezora",
    "name_ja": "ユメゾラ",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/3f800b6de.mp3",
    "cover_file": "covers/32c5da49f.png",
    "preview_hash": "3f800b6de",
    "cover_hash": "32c5da49f",
    "singer": "Tamamo Cross, Sakura Bakushin O, Biko Pegasus",
    "name_en": "Dream Sky"
  },
  {
    "id": "44e411ea-1d64-413d-a9dd-b46c527001fd",
    "name": "O-Rorize",
    "name_ja": "O - ロライズ",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/2cd586a85.mp3",
    "cover_file": "covers/512a336db.png",
    "preview_hash": "2cd586a85",
    "cover_hash": "512a336db",
    "singer": "Biwa Hayahide, Air Shakur, Narita Taishin, Symboli Kris S, Tanino Gimlet, ST-2",
    "name_en": "Aurorize"
  },
  {
    "id": "47d87b96-e1be-425c-a082-c00e5cbc6878",
    "name": "Love Will Come Through",
    "name_ja": "Love Will Come Through",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/bf21b6341.mp3",
    "cover_file": "covers/4c3584f11.png",
    "preview_hash": "bf21b6341",
    "cover_hash": "4c3584f11",
    "singer": "Mejiro Ramonu",
    "name_en": "Love Will Come Through"
  },
  {
    "id": "480db559-1e67-4d20-970d-11791791e4eb",
    "name": "Absolute Faith",
    "name_ja": "Absolute Faith",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/f611e96c4.mp3",
    "cover_file": "covers/fea71e2ef.png",
    "preview_hash": "f611e96c4",
    "cover_hash": "fea71e2ef",
    "singer": "Mihono Bourbon",
    "name_en": "Absolute Faith"
  },
  {
    "id": "481eaec0-9e47-40b7-96d3-b6c5d702899c",
    "name": "Stay on Course",
    "name_ja": "Stay on Course",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/57f9a1577.mp3",
    "cover_file": "covers/6db0674e4.png",
    "preview_hash": "57f9a1577",
    "cover_hash": "6db0674e4",
    "singer": "Dream Journey",
    "name_en": "Stay on Course"
  },
  {
    "id": "494aff2d-6cc3-4b0e-917b-a02a6f3de580",
    "name": "Dokomade Hashireba",
    "name_ja": "どこまで走れば",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/ae7331ba5.mp3",
    "cover_file": "covers/e9f079be9.png",
    "preview_hash": "ae7331ba5",
    "cover_hash": "e9f079be9",
    "singer": "Win Variation",
    "name_en": "How Far Must I Run?"
  },
  {
    "id": "4afb8f30-d88d-4f11-aa5d-5517e8f5f8a3",
    "name": "Kyou mo Urara ka Que Sera, Sera!",
    "name_ja": "今日もウララかケセラセラ!",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/0c1e63b37.mp3",
    "cover_file": "covers/dc2da6a0c.png",
    "preview_hash": "0c1e63b37",
    "cover_hash": "dc2da6a0c",
    "singer": "Haru Urara",
    "name_en": "Urara la la, Que Sera Sera Days!"
  },
  {
    "id": "4baabf18-c111-462d-b2e6-118676508492",
    "name": "Dance 2 Endless Beat",
    "name_ja": "Dance 2 Endless Beat",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/0ad820810.mp3",
    "cover_file": "covers/b2dccd5be.png",
    "preview_hash": "0ad820810",
    "cover_hash": "b2dccd5be",
    "singer": "Maruzensky, Daiwa Scarlet, Air Shakur, Twin Turbo, Happy Meek",
    "name_en": "Dance 2 Endless Beat"
  },
  {
    "id": "4bce7ed8-a4e2-4f39-a369-2c3ef92fc3d5",
    "name": "Kawaii tte Itte?",
    "name_ja": "#カワイイって言って？",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/cc23ec07e.mp3",
    "cover_file": "covers/4c68106f6.png",
    "preview_hash": "cc23ec07e",
    "cover_hash": "4c68106f6",
    "singer": "Curren Chan",
    "name_en": "#Saykawaii"
  },
  {
    "id": "4d56bdd1-d67b-4f4d-86e2-717fa09b2625",
    "name": "Daisuki no Takarabako",
    "name_ja": "大好きのタカラバコ",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/c6eb71941.mp3",
    "cover_file": "covers/078ca8284.png",
    "preview_hash": "c6eb71941",
    "cover_hash": "078ca8284",
    "singer": "Narita Brian, Symboli Rudolf, Air Groove",
    "name_en": "Precious Treasure Box"
  },
  {
    "id": "4e93902b-eaa5-4422-90f2-9566222f9409",
    "name": "ONCE MORE, I CAN",
    "name_ja": "ONCE MORE, I CAN",
    "tags": {
      "solo": true,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/058cbb174.mp3",
    "cover_file": "covers/2fa40a639.png",
    "preview_hash": "058cbb174",
    "cover_hash": "2fa40a639",
    "singer": "Narita Top Road",
    "name_en": "Give It Another Shot"
  },
  {
    "id": "4f18e216-3fb2-4d2d-b4e9-1b31e8b3a9e2",
    "name": "▷▷▷▶︎Buttobi Kattobi Zenkai Engine!",
    "name_ja": "▷▷▷▶︎ぶっとび かっとび 全開エンジン！",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/fc01db7f1.mp3",
    "cover_file": "covers/21120611d.png",
    "preview_hash": "fc01db7f1",
    "cover_hash": "21120611d",
    "singer": "Twin Turbo",
    "name_en": "▷▷▷▶︎Hyper Ultra Turbo Booooost!"
  },
  {
    "id": "4f8b8d2e-5e2a-4182-9061-ed89d5ee14d7",
    "name": "Yuru Paka HAPPY DAYS!",
    "name_ja": "ゆるパカHAPPY DAYS!",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/f24ab792c.mp3",
    "cover_file": "covers/a1ed93d12.png",
    "preview_hash": "f24ab792c",
    "cover_hash": "a1ed93d12",
    "singer": "Vodka, Daiwa Scarlet, Tsurumaru Tsuyoshi, Symboli Kris S, Tanino Gimlet",
    "name_en": "Yuru Paka Happy Days!"
  },
  {
    "id": "50c2f64d-7293-4254-81d7-0efb09e10862",
    "name": "Enjoy and Join",
    "name_ja": "Enjoy and Join",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/97b03c436.mp3",
    "cover_file": "covers/6badbe1ee.png",
    "preview_hash": "97b03c436",
    "cover_hash": "6badbe1ee",
    "singer": "Gold Ship, T.M. Opera O, Seiun Sky, Mihono Bourbon, Agnes Tachyon, Air Shakur, Narita Taishin",
    "name_en": "Enjoy and Join"
  },
  {
    "id": "51b1e6f2-c6b2-4c34-8243-2ae3025723db",
    "name": "Legend-Changer",
    "name_ja": "Legend-Changer",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/280106855.mp3",
    "cover_file": "covers/7cbc0dc07.png",
    "preview_hash": "280106855",
    "cover_hash": "7cbc0dc07",
    "singer": "Oguri Cap, El Condor Pasa, Narita Brian, Symboli Rudolf, Seeking the Pearl, Smart Falcon, Mr. C.B., Kitasan Black, Sirius Symboli, Mejiro Ramonu, Hokko Tarumae, Cesario, Orfevre, Gentildonna, Almond Eye, Commentator (Male)",
    "name_en": "Legend-Changer"
  },
  {
    "id": "5223a46d-ae42-40b5-93d4-01bddd926a2f",
    "name": "Rising Girl",
    "name_ja": "Rising Girl",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/e6852b710.mp3",
    "cover_file": "covers/447499e2f.png",
    "preview_hash": "e6852b710",
    "cover_hash": "447499e2f",
    "singer": "Daiwa Scarlet",
    "name_en": "Rising Girl"
  },
  {
    "id": "52694030-e714-4d5b-a90f-5db0434bb432",
    "name": "Ai Mai, Kurai.",
    "name_ja": "愛舞い、喰らい。",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/228a5fdb1.mp3",
    "cover_file": "covers/537c95478.png",
    "preview_hash": "228a5fdb1",
    "cover_hash": "537c95478",
    "singer": "Still in Love",
    "name_en": "Love, Devour, and Cry"
  },
  {
    "id": "54bcc2a8-b9f1-4206-a159-25ff6ae3e4e9",
    "name": "Kindan Burning Heart",
    "name_ja": "禁断Burning Heart",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/631c58391.mp3",
    "cover_file": "covers/47e1c0629.png",
    "preview_hash": "631c58391",
    "cover_hash": "47e1c0629",
    "singer": "Maruzensky",
    "name_en": "Forbidden Burning Heart"
  },
  {
    "id": "553440bb-2410-4c4f-8459-1232e2b41f41",
    "name": "CATCH THE VICTORY!",
    "name_ja": "CATCH THE VICTORY!",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/5f0c2887c.mp3",
    "cover_file": "covers/1c19c29df.png",
    "preview_hash": "5f0c2887c",
    "cover_hash": "1c19c29df",
    "singer": "Vodka",
    "name_en": "Catch the Victory!"
  },
  {
    "id": "55c85daa-5536-4e90-8384-07937411d4be",
    "name": "Arigatou, Kami-sama",
    "name_ja": "ありがとう、神様",
    "tags": {
      "solo": true,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/62616e515.mp3",
    "cover_file": "covers/6d1597b35.png",
    "preview_hash": "62616e515",
    "cover_hash": "6d1597b35",
    "singer": "Special Week",
    "name_en": "Thanks to the Goddesses"
  },
  {
    "id": "57c2b6af-21e0-49b8-9058-71dc21d1151c",
    "name": "QueenBee",
    "name_ja": "QueenBee",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/e30f39270.mp3",
    "cover_file": "covers/10c4087da.png",
    "preview_hash": "e30f39270",
    "cover_hash": "10c4087da",
    "singer": "Daring Heart",
    "name_en": "Queen Bee"
  },
  {
    "id": "581c79fe-43d3-46dc-a5c0-10fac0f57add",
    "name": "Yume o Kakeru!",
    "name_ja": "ユメヲカケル！",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/a76ba34e1.mp3",
    "cover_file": "covers/563b67144.png",
    "preview_hash": "a76ba34e1",
    "cover_hash": "563b67144",
    "singer": "Special Week, Silence Suzuka, Tokai Teio, Daiwa Scarlet, Vodka, Mejiro McQueen, Gold Ship",
    "name_en": "Run for Our Dream!"
  },
  {
    "id": "5bdb0dfd-8eb0-4736-aa2c-21999f99977c",
    "name": "Mahou ga Nakucha Hajimaranai Desho?",
    "name_ja": "魔法がなくちゃはじまらないでしょ？",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/7f164ca2d.mp3",
    "cover_file": "covers/961453785.png",
    "preview_hash": "7f164ca2d",
    "cover_hash": "961453785",
    "singer": "Sweep Tosho",
    "name_en": "That Magic Spark"
  },
  {
    "id": "5cff7bab-57fc-49d9-8584-a34bc0c2036b",
    "name": "I Can't Choose to Give Up!",
    "name_ja": "I Can't Choose to Give Up!",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/1d2aa7e20.mp3",
    "cover_file": "covers/385801da2.png",
    "preview_hash": "1d2aa7e20",
    "cover_hash": "385801da2",
    "singer": "Verxina",
    "name_en": "I Can't Choose to Give Up!"
  },
  {
    "id": "5d639e7b-d154-458f-bdda-5a81866ed03a",
    "name": "Hokori o Kono Te ni",
    "name_ja": "誇りをこの手に",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/39bf0dd52.mp3",
    "cover_file": "covers/049f73d8e.png",
    "preview_hash": "39bf0dd52",
    "cover_hash": "049f73d8e",
    "singer": "Eishin Flash",
    "name_en": "Pride in My Hands"
  },
  {
    "id": "5de60cc4-55ff-4203-b9e0-93442c58b136",
    "name": "Yute Neta Dakan ne♡",
    "name_ja": "ゆーてネタだかんね♡",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/bfb90b097.mp3",
    "cover_file": "covers/a72dc778d.png",
    "preview_hash": "bfb90b097",
    "cover_hash": "a72dc778d",
    "singer": "Tosen Jordan",
    "name_en": "JK♡"
  },
  {
    "id": "5fcd34e9-238a-41ec-88d9-39f1736ac95f",
    "name": "You know me",
    "name_ja": "You know me",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/654706d17.mp3",
    "cover_file": "covers/ce078a95f.png",
    "preview_hash": "654706d17",
    "cover_hash": "ce078a95f",
    "singer": "Nakayama Festa",
    "name_en": "You know me"
  },
  {
    "id": "636bac6f-6180-46f4-ab10-ff003f082ca4",
    "name": "PRESENT MARCH♪",
    "name_ja": "PRESENT MARCH♪",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/863fed0ba.mp3",
    "cover_file": "covers/22fd431bf.png",
    "preview_hash": "863fed0ba",
    "cover_hash": "22fd431bf",
    "singer": "Super Creek, Haru Urara, Matikanefukukitaru",
    "name_en": "Present March"
  },
  {
    "id": "63928bbe-bd2a-4f63-b44c-140f256990d5",
    "name": "Ichibanboshi ga Kakeru Sora",
    "name_ja": "イチバン星が駆ける空",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/998bb9947.mp3",
    "cover_file": "covers/14eea941a.png",
    "preview_hash": "998bb9947",
    "cover_hash": "14eea941a",
    "singer": "T.M. Opera O, Admire Vega, Narita Top Road",
    "name_en": "The First Star Across the Sky"
  },
  {
    "id": "658a8b0b-1280-495a-8d9f-b0ec91cb80bb",
    "name": "Lucky Happy Fantastic",
    "name_ja": "ラキハピファンタスティック",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/552e73711.mp3",
    "cover_file": "covers/db31b5613.png",
    "preview_hash": "552e73711",
    "cover_hash": "db31b5613",
    "singer": "Copano Rickey",
    "name_en": "Lucky Happy Fantastic"
  },
  {
    "id": "66ee1f0d-7424-4c19-be4e-37ae25d854ec",
    "name": "Beyond the Finale",
    "name_ja": "Beyond the Finale",
    "tags": {
      "solo": true,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/1b7554b4e.mp3",
    "cover_file": "covers/aa30c04fd.png",
    "preview_hash": "1b7554b4e",
    "cover_hash": "aa30c04fd",
    "singer": "Jungle Pocket",
    "name_en": "Beyond the Finale"
  },
  {
    "id": "67e0207d-6e94-40e6-b614-cd2dc86eb695",
    "name": "GSK☆",
    "name_ja": "GSK☆",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/ce1618329.mp3",
    "cover_file": "covers/0ee582278.png",
    "preview_hash": "ce1618329",
    "cover_hash": "0ee582278",
    "singer": "Gold City, Tosen Jordan, Daitaku Helios, Mejiro Palmer",
    "name_en": "GSK☆"
  },
  {
    "id": "6a443554-87b3-470b-b836-b48843686cef",
    "name": "Grow-up Shine!",
    "name_ja": "グロウアップ・シャイン！",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/4fa20b577.mp3",
    "cover_file": "covers/6d1597b35.png",
    "preview_hash": "4fa20b577",
    "cover_hash": "6d1597b35",
    "singer": "Special Week, Silence Suzuka, Tokai Teio, Daiwa Scarlet, Vodka, Mejiro McQueen, Gold Ship",
    "name_en": "Grow Up and Shine!"
  },
  {
    "id": "6b20b80e-4550-4d56-85f0-1ff67426f283",
    "name": "Ready!! Steady!! Derby!!",
    "name_ja": "Ready!! Steady!! Derby!!",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/3e164870b.mp3",
    "cover_file": "covers/666bdf26e.png",
    "preview_hash": "3e164870b",
    "cover_hash": "666bdf26e",
    "singer": "Jungle Pocket, Agnes Tachyon, Manhattan Cafe, Dantsu Flame",
    "name_en": "Ready!! Steady!! Derby!!"
  },
  {
    "id": "6d93326f-8390-4c07-aa5f-b6129a0736c0",
    "name": "Hashire Umamusume",
    "name_ja": "走れウマ娘",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/3f4ab7f79.mp3",
    "cover_file": "covers/cbbe13bea.png",
    "preview_hash": "3f4ab7f79",
    "cover_hash": "cbbe13bea",
    "singer": "Special Week, Silence Suzuka, Tokai Teio, Gold Ship, Tamamo Cross, Winning Ticket",
    "name_en": "Run, Umamusume"
  },
  {
    "id": "6de082c8-82ee-47c4-8f5b-400bb6f51da5",
    "name": "ZOKZOK",
    "name_ja": "ZOKZOK",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/649937748.mp3",
    "cover_file": "covers/0df2107f2.png",
    "preview_hash": "649937748",
    "cover_hash": "0df2107f2",
    "singer": "Transcend",
    "name_en": "ZOKZOK"
  },
  {
    "id": "6eea2fd9-7dcb-450e-a0b9-4799c39a37d7",
    "name": "Glorious Moment!",
    "name_ja": "Glorious Moment！",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/d2a949860.mp3",
    "cover_file": "covers/c5e60982b.png",
    "preview_hash": "d2a949860",
    "cover_hash": "c5e60982b",
    "singer": "T.M. Opera O, Admire Vega, Narita Top Road",
    "name_en": "Glorious Moment!"
  },
  {
    "id": "72f1cc27-55ee-4a26-b06b-fc69a18fbf6a",
    "name": "My Against Fight",
    "name_ja": "My Against Fight",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/dedfd0b29.mp3",
    "cover_file": "covers/490be1879.png",
    "preview_hash": "dedfd0b29",
    "cover_hash": "490be1879",
    "singer": "Tamamo Cross",
    "name_en": "My Resistance"
  },
  {
    "id": "744641c5-e813-4017-889a-08e3f2e01960",
    "name": "Para Siempre",
    "name_ja": "パラ・シエンプレ",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/f9ae697fe.mp3",
    "cover_file": "covers/eaa6031b3.png",
    "preview_hash": "f9ae697fe",
    "cover_hash": "eaa6031b3",
    "singer": "Buena Vista",
    "name_en": "Para Siempre"
  },
  {
    "id": "74c82b0d-4e41-4016-9e00-71be1b1d11d1",
    "name": "Boukyaku Nite",
    "name_ja": "忘却にて",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/aab2c9529.mp3",
    "cover_file": "covers/5a949a1fb.png",
    "preview_hash": "aab2c9529",
    "cover_hash": "5a949a1fb",
    "singer": "Aston Machan",
    "name_en": "Memory Lapse"
  },
  {
    "id": "75d7a850-8fdd-4dd7-96e0-079479a2e9b3",
    "name": "Tokaeri no Hana",
    "name_ja": "十帰りの花",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/06b143e35.mp3",
    "cover_file": "covers/2e6a59404.png",
    "preview_hash": "06b143e35",
    "cover_hash": "2e6a59404",
    "singer": "Air Messiah",
    "name_en": "The Bloom of an Era"
  },
  {
    "id": "763f4c0a-0c36-4e8d-a7b6-bd2d80e06e40",
    "name": "WINnin' 5 -Winning☆Five-",
    "name_ja": "WINnin’ 5 －ウイニング☆ファイヴ－",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/5f6e8889f.mp3",
    "cover_file": "covers/165f4205b.png",
    "preview_hash": "5f6e8889f",
    "cover_hash": "165f4205b",
    "singer": "Taiki Shuttle, Mihono Bourbon, Rice Shower, Haru Urara, Matikanefukukitaru",
    "name_en": "WINnin' 5"
  },
  {
    "id": "76595cda-1ece-43b3-9ef2-e5d8d0491e50",
    "name": "Ring Ring Diary",
    "name_ja": "Ring Ring ダイアリー",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/2cfc1373a.mp3",
    "cover_file": "covers/3c767c76e.png",
    "preview_hash": "2cfc1373a",
    "cover_hash": "3c767c76e",
    "singer": "Tokai Teio, Fuji Kiseki, Hishi Amazon, Symboli Rudolf, Air Groove",
    "name_en": "Ring Ring Diary"
  },
  {
    "id": "769bbf3f-59ac-493a-ab4f-466cd6d9aa83",
    "name": "GALACTIC PLAYER",
    "name_ja": "GALACTIC PLAYER",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/1e5c9ce05.mp3",
    "cover_file": "covers/3d53e8ab9.png",
    "preview_hash": "1e5c9ce05",
    "cover_hash": "3d53e8ab9",
    "singer": "Sirius Symboli",
    "name_en": "GALACTIC PLAYER"
  },
  {
    "id": "775f7df8-62b8-4dbd-a29a-df0bf0e598f7",
    "name": "Sekai wa Bokura no Iinari Sa",
    "name_ja": "世界は僕らの言いなりさ",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/82d9bf1db.mp3",
    "cover_file": "covers/7c67ec543.png",
    "preview_hash": "82d9bf1db",
    "cover_hash": "7c67ec543",
    "singer": "Mejiro McQueen, El Condor Pasa, T.M. Opera O",
    "name_en": "The World's at Our Whim"
  },
  {
    "id": "77a14b8d-f6dd-4f3c-99c2-9871fe7971ce",
    "name": "Mejiro Sanka",
    "name_ja": "メジロ讃歌",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/5dc85d137.mp3",
    "cover_file": "covers/1bee84a4d.png",
    "preview_hash": "5dc85d137",
    "cover_hash": "1bee84a4d",
    "singer": "Mejiro McQueen, Mejiro Ryan, Mejiro Dober, Mejiro Palmer, Mejiro Ardan, Mejiro Bright",
    "name_en": "The Mejiro Anthem"
  },
  {
    "id": "784392cf-0fb6-480c-b455-20032a4ae9d9",
    "name": "Bokura no Bluebird Days",
    "name_ja": "ぼくらのブルーバードデイズ",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/b817da3d7.mp3",
    "cover_file": "covers/447499e2f.png",
    "preview_hash": "b817da3d7",
    "cover_hash": "447499e2f",
    "singer": "Vodka, Daiwa Scarlet, Gold Ship",
    "name_en": "Our Blue Bird Days"
  },
  {
    "id": "7889d09e-22de-4edd-abd3-0a2e6de6d21c",
    "name": "We are DREAMERS!!",
    "name_ja": "We are DREAMERS!!",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/f76e4201a.mp3",
    "cover_file": "covers/13d22fcdd.png",
    "preview_hash": "f76e4201a",
    "cover_hash": "13d22fcdd",
    "singer": "Special Week, Silence Suzuka, Tokai Teio, Oguri Cap, Gold Ship, Mejiro McQueen, T.M. Opera O, Narita Brian, Symboli Rudolf, Tamamo Cross, Mejiro Ryan, Admire Vega, Sakura Bakushin O, Mr. C.B., Mejiro Dober, Matikanetannhauser, Satono Diamond, Kitasan Black, Sakura Chiyono O, Mejiro Ardan, Yaeno Muteki, Narita Top Road",
    "name_en": "We are DREAMERS!!"
  },
  {
    "id": "7a423d13-46d8-49c1-8738-6569a3a869d1",
    "name": "Lucky Comes True!",
    "name_ja": "Lucky Comes True!",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/bd66145f0.mp3",
    "cover_file": "covers/b53c67b23.png",
    "preview_hash": "bd66145f0",
    "cover_hash": "b53c67b23",
    "singer": "Matikanefukukitaru",
    "name_en": "Luck Comes True!"
  },
  {
    "id": "7b5d4962-55e3-48f6-9af6-05b734cf2ed1",
    "name": "Futari",
    "name_ja": "ふたり",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/910d472fc.mp3",
    "cover_file": "covers/6c7c20695.png",
    "preview_hash": "910d472fc",
    "cover_hash": "6c7c20695",
    "singer": "Oguri Cap, Tamamo Cross",
    "name_en": "The two of us"
  },
  {
    "id": "7bc219cb-b53a-4091-bcd1-516f649296cd",
    "name": "A・NO・NE",
    "name_ja": "A・NO・NE",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/fdfabd4f2.mp3",
    "cover_file": "covers/adab79e96.png",
    "preview_hash": "fdfabd4f2",
    "cover_hash": "adab79e96",
    "singer": "Seiun Sky, Yukino Bijin, Gold City",
    "name_en": "Hey, Guess What!"
  },
  {
    "id": "7d3c68db-1b9d-4899-892e-70c677daf5fa",
    "name": "EXCEED",
    "name_ja": "EXCEED",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/3e4e4c360.mp3",
    "cover_file": "covers/f1b48497a.png",
    "preview_hash": "3e4e4c360",
    "cover_hash": "f1b48497a",
    "singer": "Duramente",
    "name_en": "EXCEED"
  },
  {
    "id": "7da17c46-ba4a-4fa6-bbcf-a5e2010cd2cf",
    "name": "Kakushinteki⇔Supernova",
    "name_ja": "確信的⇔Supernova",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/51ff73934.mp3",
    "cover_file": "covers/59f7bbcd4.png",
    "preview_hash": "51ff73934",
    "cover_hash": "59f7bbcd4",
    "singer": "Epiphaneia",
    "name_en": "Supernova of Belief"
  },
  {
    "id": "7ffaf49e-844b-469a-b750-cb03744ee9bc",
    "name": "Kiseki o Shinjite!",
    "name_ja": "奇跡を信じて!",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/b25d86c8c.mp3",
    "cover_file": "covers/ee93115c6.png",
    "preview_hash": "b25d86c8c",
    "cover_hash": "ee93115c6",
    "singer": "Taiki Shuttle, Grass Wonder, Hishi Amazon",
    "name_en": "Believe in Miracles!"
  },
  {
    "id": "80190825-12d8-4949-a6cf-57d1f9f66827",
    "name": "Honnou Speed",
    "name_ja": "本能スピード",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/1168ee1e1.mp3",
    "cover_file": "covers/e1050762d.png",
    "preview_hash": "1168ee1e1",
    "cover_hash": "e1050762d",
    "singer": "Oguri Cap, Vodka, Taiki Shuttle, El Condor Pasa, Sakura Bakushin O, Biko Pegasus, Nice Nature, King Halo",
    "name_en": "Instinctive Speed"
  },
  {
    "id": "803f3daa-4e94-4a38-b9e0-5f3a7189a232",
    "name": "Bokura no Kaerimichi",
    "name_ja": "僕らの帰り道",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/4e2e9f375.mp3",
    "cover_file": "covers/61dfa6bbf.png",
    "preview_hash": "4e2e9f375",
    "cover_hash": "61dfa6bbf",
    "singer": "Dantsu Flame, K.S.Miracle, Hishi Miracle, Calstone Light O, Durandal",
    "name_en": "Our Way Home"
  },
  {
    "id": "8113ad41-2efd-4aea-bfa3-4c5a80fec01c",
    "name": "Sora no Hohoemi Kata",
    "name_ja": "空のほほえみ方",
    "tags": {
      "solo": true,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/d9e5536af.mp3",
    "cover_file": "covers/40a578d20.png",
    "preview_hash": "d9e5536af",
    "cover_hash": "40a578d20",
    "singer": "Kitasan Black",
    "name_en": "Why the Sky Makes Me Smile"
  },
  {
    "id": "813c2fb9-8aa2-47ad-a791-c1c80b0a7785",
    "name": "Air Race",
    "name_ja": "Air Race",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/1c26e5693.mp3",
    "cover_file": "covers/2e52f549c.png",
    "preview_hash": "1c26e5693",
    "cover_hash": "2e52f549c",
    "singer": "Air Shakur",
    "name_en": "Air Race"
  },
  {
    "id": "82764067-efcd-4b24-9c3c-5307039e7ae4",
    "name": "Nigekiri! Fallin' Love",
    "name_ja": "逃げ切りっ! Fallin' Love",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/a65024d82.mp3",
    "cover_file": "covers/0ee58ef05.png",
    "preview_hash": "a65024d82",
    "cover_hash": "0ee58ef05",
    "singer": "Silence Suzuka, Maruzensky, Mihono Bourbon, Ines Fujin, Smart Falcon",
    "name_en": "Getaway! Fallin' Love"
  },
  {
    "id": "85e4a14a-fb71-4c98-bb13-7578b5fd909d",
    "name": "Make debut!",
    "name_ja": "Make debut!",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/22913f67d.mp3",
    "cover_file": "covers/a1382cb90.png",
    "preview_hash": "22913f67d",
    "cover_hash": "a1382cb90",
    "singer": "Special Week, Silence Suzuka, Tokai Teio, Daiwa Scarlet, Vodka, Mejiro McQueen, Gold Ship",
    "name_en": "Make Debut!"
  },
  {
    "id": "86c2b3b3-f4ee-48a7-9c40-6474e373b535",
    "name": "Mile×Rule Star",
    "name_ja": "Mile×Rule Star",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/7d8cb13c2.mp3",
    "cover_file": "covers/25f865f10.png",
    "preview_hash": "7d8cb13c2",
    "cover_hash": "25f865f10",
    "singer": "Gran Alegria",
    "name_en": "Mile×Rule Star"
  },
  {
    "id": "8706a24b-8a32-41fd-ad68-c234c34c5a33",
    "name": "Tachiichi Zeroban! Juni wa Ichiban!",
    "name_ja": "立ち位置ゼロ番!順位は一番!",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/2bb4020a2.mp3",
    "cover_file": "covers/f69a7b105.png",
    "preview_hash": "2bb4020a2",
    "cover_hash": "f69a7b105",
    "singer": "Smart Falcon",
    "name_en": "Zero is where the Center Stands!"
  },
  {
    "id": "875d2e6d-4538-4d77-9adf-914e23b86d51",
    "name": "Uzumibi no Eiyuu",
    "name_ja": "埋火の英雄",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/13a59359f.mp3",
    "cover_file": "covers/1ed71d57b.png",
    "preview_hash": "13a59359f",
    "cover_hash": "1ed71d57b",
    "singer": "Zenno Rob Roy",
    "name_en": "Smoldering Hero's Soul"
  },
  {
    "id": "89729a42-f14e-495e-966a-37f459cc71e9",
    "name": "Yuyukankan",
    "name_ja": "悠々閑々",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/66085ebee.mp3",
    "cover_file": "covers/8f425cd33.png",
    "preview_hash": "66085ebee",
    "cover_hash": "8f425cd33",
    "singer": "Wonder Acute",
    "name_en": "Composed Leisure"
  },
  {
    "id": "8cde214b-eac1-43fd-894e-61faefdd6924",
    "name": "L's Surprise!!",
    "name_ja": "L's Surprise!!",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/f282e34b5.mp3",
    "cover_file": "covers/7c67ec543.png",
    "preview_hash": "f282e34b5",
    "cover_hash": "7c67ec543",
    "singer": "El Condor Pasa",
    "name_en": "El's Surprise!!"
  },
  {
    "id": "8d4197a6-2371-48df-ba14-a54188bdf3b1",
    "name": "UNLIMITED IMPACT",
    "name_ja": "UNLIMITED IMPACT",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/7bc7ef544.mp3",
    "cover_file": "covers/e344f1ccc.png",
    "preview_hash": "7bc7ef544",
    "cover_hash": "e344f1ccc",
    "singer": "Maruzensky, Fuji Kiseki, Oguri Cap",
    "name_en": "UNLIMITED IMPACT"
  },
  {
    "id": "8d592559-a72f-4ac8-bbcf-af9883ae6f8f",
    "name": "Just a little bit",
    "name_ja": "Just a little bit",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/1aac2e6d6.mp3",
    "cover_file": "covers/0d1d4d6a1.png",
    "preview_hash": "1aac2e6d6",
    "cover_hash": "0d1d4d6a1",
    "singer": "Mejiro Dober",
    "name_en": "Just a Little Bit"
  },
  {
    "id": "91eae091-21e8-4e02-9225-5b582882e3bc",
    "name": "Seeking The Pearl ~Shinju o Sagashite~",
    "name_ja": "Seeking The Pearl ～真珠を探して〜",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/41397a1c6.mp3",
    "cover_file": "covers/c05905795.png",
    "preview_hash": "41397a1c6",
    "cover_hash": "c05905795",
    "singer": "Seeking the Pearl",
    "name_en": "Seeking The Pearl"
  },
  {
    "id": "92ea78cb-86d3-40d3-9041-f18b5b4482b9",
    "name": "BLOW my GALE",
    "name_ja": "BLOW my GALE",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/f557ec80a.mp3",
    "cover_file": "covers/16fc53395.png",
    "preview_hash": "f557ec80a",
    "cover_hash": "16fc53395",
    "singer": "Maruzensky, Mejiro McQueen, Narita Brian, Symboli Rudolf, Tamamo Cross, Manhattan Cafe, Eishin Flash",
    "name_en": "Blow My Gale"
  },
  {
    "id": "9355d373-7a80-4a19-bcba-d1e38b8762a0",
    "name": "UMA IN AMERICA",
    "name_ja": "UMA IN AMERICA",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/ac883a576.mp3",
    "cover_file": "covers/0e085808d.png",
    "preview_hash": "ac883a576",
    "cover_hash": "0e085808d",
    "singer": "Taiki Shuttle, Grass Wonder, Hishi Amazon, El Condor Pasa, Seeking the Pearl, Espoir City, Symboli Kris S, Tap Dance City, Cesario, Loves Only You, Red Desire, Forever Young, Marche Lorraine",
    "name_en": "UMA IN AMERICA"
  },
  {
    "id": "945c507a-0229-45b6-b503-4ce5fb9459cd",
    "name": "Kibou Discovery",
    "name_ja": "希望ディスカバリー",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/c97fb10b0.mp3",
    "cover_file": "covers/93b8497b9.png",
    "preview_hash": "c97fb10b0",
    "cover_hash": "93b8497b9",
    "singer": "Mejiro Ryan",
    "name_en": "Hopeful Discovery"
  },
  {
    "id": "94ec87cb-cb9e-4feb-b653-d09f3f8455a6",
    "name": "THE SUPER STRONG S",
    "name_ja": "THE SUPER STRONG S",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/20c84ef75.mp3",
    "cover_file": "covers/d54c98827.png",
    "preview_hash": "20c84ef75",
    "cover_hash": "d54c98827",
    "singer": "Symboli Kris S",
    "name_en": "THE SUPER STRONG S"
  },
  {
    "id": "94fdd685-d3b0-4e47-9d82-4bf2f594a22c",
    "name": "Me ni Shuki ♡ Rush-shu!",
    "name_ja": "めにしゅき♡ラッシュっしゅ！",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/471fd5f1b.mp3",
    "cover_file": "covers/ee609e32e.png",
    "preview_hash": "471fd5f1b",
    "cover_hash": "ee609e32e",
    "singer": "Curren Chan, Still in Love, Fusaichi Pandora, Admire Groove, Lucky Lilac, Loves Only You, Stay Gold",
    "name_en": "Super Suki♡Shuki Rush!"
  },
  {
    "id": "98874b36-a98e-42eb-9316-9e1c12577673",
    "name": "Tracen Ondo",
    "name_ja": "トレセン音頭",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/c144c9f47.mp3",
    "cover_file": "covers/3c2682d6c.png",
    "preview_hash": "c144c9f47",
    "cover_hash": "3c2682d6c",
    "singer": "Narita Brian, Mayano Top Gun, Admire Vega, Inari One, Satono Diamond, Kitasan Black, Yaeno Muteki, Sakura Laurel, Narita Top Road, Satono Crown, Cheval Grand, Neo Universe, Hishi Miracle",
    "name_en": "Tracen Dance"
  },
  {
    "id": "9a7e8b5c-f45c-4981-ab1c-7d0b0e89170d",
    "name": "Kimagure Tuning Heart",
    "name_ja": "気まぐれTuning Heart",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/2fcba2b2a.mp3",
    "cover_file": "covers/adab79e96.png",
    "preview_hash": "2fcba2b2a",
    "cover_hash": "adab79e96",
    "singer": "Seiun Sky",
    "name_en": "Whimsical Tuning Heart"
  },
  {
    "id": "9ae36db4-101a-49b2-b2d6-6b30a386afe5",
    "name": "Cosmo Puella Ginga Boukentan",
    "name_ja": "宇宙走娘＜コスモピュエラ＞ 銀河冒険譚",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/1b73835a5.mp3",
    "cover_file": "covers/d7a19338b.png",
    "preview_hash": "1b73835a5",
    "cover_hash": "d7a19338b",
    "singer": "Neo Universe, Agnes Tachyon, Vivlos, Admire Vega, Mihono Bourbon",
    "name_en": "Cosmo Puella Galactic Adventure"
  },
  {
    "id": "9d436979-d8f0-4bcf-89a2-3839161a5629",
    "name": "Logue",
    "name_ja": "Logue",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/0e8de1aa9.mp3",
    "cover_file": "covers/42fe19a16.png",
    "preview_hash": "0e8de1aa9",
    "cover_hash": "42fe19a16",
    "singer": "Chrono Genesis",
    "name_en": "Logos"
  },
  {
    "id": "9e1099ea-b757-4c47-b31e-602f75d8d140",
    "name": "Unbreakable",
    "name_ja": "unbreakable",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/82143f190.mp3",
    "cover_file": "covers/eb89fe4f3.png",
    "preview_hash": "82143f190",
    "cover_hash": "eb89fe4f3",
    "singer": "Oguri Cap",
    "name_en": "Unbreakable"
  },
  {
    "id": "9e2c24f6-8b8a-40c1-9d24-25c11ebb23f9",
    "name": "Glory Eyes",
    "name_ja": "Glory Eyes",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/4f9518a90.mp3",
    "cover_file": "covers/a8409afa7.png",
    "preview_hash": "4f9518a90",
    "cover_hash": "a8409afa7",
    "singer": "Almond Eye",
    "name_en": "Eyes on Glory"
  },
  {
    "id": "9f602ff5-e910-48c3-a91b-0ece227c598d",
    "name": "Marvelous Sunday Time☆★",
    "name_ja": "マーベラスサンデータイム☆★",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/071fe1bbf.mp3",
    "cover_file": "covers/15dad39c5.png",
    "preview_hash": "071fe1bbf",
    "cover_hash": "15dad39c5",
    "singer": "Marvelous Sunday",
    "name_en": "Marvelous Sunday Time"
  },
  {
    "id": "a10e165e-0bdc-4f10-a14b-839d7e60bea3",
    "name": "Koi wa Derby☆",
    "name_ja": "恋はダービー☆",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/3c6736edf.mp3",
    "cover_file": "covers/43e8406c9.png",
    "preview_hash": "3c6736edf",
    "cover_hash": "43e8406c9",
    "singer": "Tokai Teio",
    "name_en": "Love Is at the Derby☆"
  },
  {
    "id": "a1c0d366-faa1-429c-b486-7ddd8a6dd2d0",
    "name": "Destroy for Dasein",
    "name_ja": "Destroy for Dasein",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/add89416f.mp3",
    "cover_file": "covers/0d46b30a5.png",
    "preview_hash": "add89416f",
    "cover_hash": "0d46b30a5",
    "singer": "Tanino Gimlet",
    "name_en": "Destroy for Dasein"
  },
  {
    "id": "a243fa4e-fb48-4a68-a13e-dffd4a5ce3fe",
    "name": "EMPRESS GAME",
    "name_ja": "EMPRESS GAME",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/ed611e152.mp3",
    "cover_file": "covers/078ca8284.png",
    "preview_hash": "ed611e152",
    "cover_hash": "078ca8284",
    "singer": "Air Groove",
    "name_en": "Empress Game"
  },
  {
    "id": "a2aa7c31-d082-4dd1-81b7-f62697d832d5",
    "name": "Heibon, Toki ni Miracle",
    "name_ja": "平凡、時にミラクル",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/a30dec451.mp3",
    "cover_file": "covers/ec1e0fd21.png",
    "preview_hash": "a30dec451",
    "cover_hash": "ec1e0fd21",
    "singer": "Hishi Miracle",
    "name_en": "From Ordinary to Extraordinary"
  },
  {
    "id": "a3ae1915-91a9-479c-b9eb-e08f18304b2d",
    "name": "Special Record!",
    "name_ja": "Special Record!",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/a5aa22099.mp3",
    "cover_file": "covers/c7852f092.png",
    "preview_hash": "a5aa22099",
    "cover_hash": "c7852f092",
    "singer": "Special Week, Silence Suzuka, Tokai Teio, Maruzensky, Fuji Kiseki, Oguri Cap, Gold Ship, Vodka, Daiwa Scarlet, Grass Wonder, Hishi Amazon, Mejiro McQueen, El Condor Pasa, T.M. Opera O, Narita Brian, Symboli Rudolf, Air Groove, Biwa Hayahide",
    "name_en": "Special Record!"
  },
  {
    "id": "a4feeb54-6cf1-4897-ad9c-26775663f2a9",
    "name": "Gold-Triumph",
    "name_ja": "Gold-Triumph",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/8ef5749e6.mp3",
    "cover_file": "covers/27e8dd3e5.png",
    "preview_hash": "8ef5749e6",
    "cover_hash": "27e8dd3e5",
    "singer": "Gold Ship, Nakayama Festa, Dream Journey, Orfevre, Fenomeno, Stay Gold",
    "name_en": "Gold-Triumph"
  },
  {
    "id": "a5b1c413-433c-46c5-a15a-d9bcc1d915f4",
    "name": "Gift",
    "name_ja": "ギフト",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/9c44b4548.mp3",
    "cover_file": "covers/ba30bb49c.png",
    "preview_hash": "9c44b4548",
    "cover_hash": "ba30bb49c",
    "singer": "Rhein Kraft, Fusaichi Pandora",
    "name_en": "Gift"
  },
  {
    "id": "a72f148f-d1ae-40f3-aaf6-e1e30ba84c6a",
    "name": "Sugao no Kokoro",
    "name_ja": "素顔のココロ",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/93aa2c663.mp3",
    "cover_file": "covers/711664346.png",
    "preview_hash": "93aa2c663",
    "cover_hash": "711664346",
    "singer": "Gold City",
    "name_en": "Bare-Faced Heart"
  },
  {
    "id": "a7699f25-2925-49cc-a57c-e8e811e94bab",
    "name": "Beyond",
    "name_ja": "Beyond",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/c6cc72cf9.mp3",
    "cover_file": "covers/a51732135.png",
    "preview_hash": "c6cc72cf9",
    "cover_hash": "a51732135",
    "singer": "Special Week, Narita Brian, Biwa Hayahide, Transcend, Duramente, Buena Vista, Epiphaneia, Logotype, Victoire Pisa, Rulership, Efforia, Titleholder, Phalaenopsis",
    "name_en": "Beyond"
  },
  {
    "id": "a87aacca-d542-4e12-b1c6-d018ec6e0bc8",
    "name": "BRIGHTEST HEART",
    "name_ja": "BRIGHTEST HEART",
    "tags": {
      "solo": true,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/fa5973a18.mp3",
    "cover_file": "covers/2f3037b55.png",
    "preview_hash": "fa5973a18",
    "cover_hash": "2f3037b55",
    "singer": "Oguri Cap",
    "name_en": "BRIGHTEST HEART"
  },
  {
    "id": "aac1bf32-ca92-4af3-9677-2a27a1ab29dd",
    "name": "Comeback Story V",
    "name_ja": "Comeback Story V",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/c5f010953.mp3",
    "cover_file": "covers/f128dc0ae.png",
    "preview_hash": "c5f010953",
    "cover_hash": "f128dc0ae",
    "singer": "Special Week, Rice Shower, Smart Falcon, Tosen Jordan, Nice Nature, King Halo, Mejiro Palmer, Tsurumaru Tsuyoshi, Sakura Laurel, Hishi Miracle",
    "name_en": "Comeback Story V"
  },
  {
    "id": "ac588f9b-0e19-4832-bbcb-50aeffb04f35",
    "name": "Yappa Atashi Tensai Jan Ne♡",
    "name_ja": "やっぱあたし天才じゃんねっ♡",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/5e370f030.mp3",
    "cover_file": "covers/59f7bbcd4.png",
    "preview_hash": "5e370f030",
    "cover_hash": "59f7bbcd4",
    "singer": "Fusaichi Pandora",
    "name_en": "A Genius for Real"
  },
  {
    "id": "ad47d8ad-d6ae-4809-9a84-9155a60c1169",
    "name": "Umapyoi Densetsu",
    "name_ja": "うまぴょい伝説",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": true,
      "startingGate": true
    },
    "audio_file": "audio/e277c4cbe.mp3",
    "cover_file": "covers/2375c1ae1.png",
    "preview_hash": "e277c4cbe",
    "cover_hash": "2375c1ae1",
    "singer": "Various / All Umamusume",
    "name_en": "Umapyoi Legend"
  },
  {
    "id": "ada2ea1a-60a5-4476-bf21-9d82f97f158a",
    "name": "Koeru",
    "name_ja": "超える",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/c59253f94.mp3",
    "cover_file": "covers/f918858f9.png",
    "preview_hash": "c59253f94",
    "cover_hash": "f918858f9",
    "singer": "Oguri Cap, Tamamo Cross",
    "name_en": "Transcend"
  },
  {
    "id": "adc8786e-66d4-4ef3-b5fc-fd09be122513",
    "name": "Gingakei Philosophy",
    "name_ja": "銀河系フィロソフィー",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/47e8826e7.mp3",
    "cover_file": "covers/1ed71d57b.png",
    "preview_hash": "47e8826e7",
    "cover_hash": "1ed71d57b",
    "singer": "Neo Universe",
    "name_en": "Galactic Philosophy"
  },
  {
    "id": "ae5192d1-c3c8-414c-bcec-32c28668cf22",
    "name": "UMA Summer",
    "name_ja": "UMA Summer",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/ab23caa84.mp3",
    "cover_file": "covers/02a16cf28.png",
    "preview_hash": "ab23caa84",
    "cover_hash": "02a16cf28",
    "singer": "Smart Falcon, Nakayama Festa, Mejiro Palmer, Daitaku Helios, Transcend, Dantsu Flame, Jungle Pocket, Copano Rickey, Hokko Tarumae, Wonder Acute, Rhein Kraft, Gentildonna, Dream Journey, Calstone Light O",
    "name_en": "UMA Summer"
  },
  {
    "id": "ae97afc9-f5cd-4f2d-b1cf-b6eab33e62f0",
    "name": "Hello Polaris",
    "name_ja": "ハロー・ポラリス",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/a490202b1.mp3",
    "cover_file": "covers/11486aa54.png",
    "preview_hash": "a490202b1",
    "cover_hash": "11486aa54",
    "singer": "Oguri Cap, Tamamo Cross",
    "name_en": "Hello Polaris"
  },
  {
    "id": "b00c1814-8972-4c18-85e7-d44f31ba9d29",
    "name": "Waiting for Tomorrow",
    "name_ja": "Waiting for Tomorrow",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/a030a0691.mp3",
    "cover_file": "covers/7c67ec543.png",
    "preview_hash": "a030a0691",
    "cover_hash": "7c67ec543",
    "singer": "Mejiro McQueen",
    "name_en": "Waiting for Tomorrow"
  },
  {
    "id": "b0b508d6-8a49-497a-b9bf-04f6104f3a4f",
    "name": "BoC-izm",
    "name_ja": "BoC-izm",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/0243fa6a3.mp3",
    "cover_file": "covers/dec261ccb.png",
    "preview_hash": "0243fa6a3",
    "cover_hash": "dec261ccb",
    "singer": "Rice Shower, Nakayama Festa, North Flight, Cheval Grand, Verxina, Vivlos, Loves Only You",
    "name_en": "BoC-izm"
  },
  {
    "id": "b6ec29cf-b528-4c65-8614-298ab83b2962",
    "name": "Bumei Shisso!",
    "name_ja": "武名疾走!",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/35b4a427a.mp3",
    "cover_file": "covers/924928b3e.png",
    "preview_hash": "35b4a427a",
    "cover_hash": "924928b3e",
    "singer": "Yaeno Muteki",
    "name_en": "Glory Run!"
  },
  {
    "id": "b81494e9-571d-47b8-8f88-1d8a6b082d1e",
    "name": "Chokkan No Problem!",
    "name_ja": "直感ノープロブレム!",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/1afc5b381.mp3",
    "cover_file": "covers/ee93115c6.png",
    "preview_hash": "1afc5b381",
    "cover_hash": "ee93115c6",
    "singer": "Taiki Shuttle",
    "name_en": "Trust Your Gut, No Problem!"
  },
  {
    "id": "b9a4e32b-b59e-46a7-ad21-3e3b16a97bb2",
    "name": "Saikyo ROARING",
    "name_ja": "最強ROARING",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/601909268.mp3",
    "cover_file": "covers/138f1ce98.png",
    "preview_hash": "601909268",
    "cover_hash": "138f1ce98",
    "singer": "Jungle Pocket",
    "name_en": "Roar of the Strongest"
  },
  {
    "id": "bf9dd165-0ba9-4139-b08b-fa2b62a2a4dc",
    "name": "PisuPisu☆SupiSupi Golshi-chan no Uta",
    "name_ja": "ピスピス☆スピスピ ゴルシちゃんのうた",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/e22264360.mp3",
    "cover_file": "covers/0f1838ed3.png",
    "preview_hash": "e22264360",
    "cover_hash": "0f1838ed3",
    "singer": "Gold Ship",
    "name_en": "Peace, Yo! It's Golshi!"
  },
  {
    "id": "c1b06e5a-4879-4ea4-bb7b-8984fff88441",
    "name": "Forever gold",
    "name_ja": "Forever gold",
    "tags": {
      "solo": true,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/337f6adec.mp3",
    "cover_file": "covers/9f8afe591.png",
    "preview_hash": "337f6adec",
    "cover_hash": "9f8afe591",
    "singer": "T.M. Opera O",
    "name_en": "Forever Gold"
  },
  {
    "id": "c1b986a9-e709-4335-9d03-56274c82720b",
    "name": "NEXT FRONTIER",
    "name_ja": "NEXT FRONTIER",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/6ec50c583.mp3",
    "cover_file": "covers/9cddd6040.png",
    "preview_hash": "6ec50c583",
    "cover_hash": "9cddd6040",
    "singer": "Oguri Cap, Tamamo Cross, Dicta Striker",
    "name_en": "NEXT FRONTIER"
  },
  {
    "id": "c380c993-4aac-4bbb-aaeb-b67e215c95f9",
    "name": "WINNING MELODY",
    "name_ja": "WINNING MELODY",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/96dd08345.mp3",
    "cover_file": "covers/f7c7bd189.png",
    "preview_hash": "96dd08345",
    "cover_hash": "f7c7bd189",
    "singer": "Winning Ticket",
    "name_en": "WINNING MELODY"
  },
  {
    "id": "c61b4350-22ef-4141-a616-91183bc2d272",
    "name": "CAN’T STOP Waru Joutou!",
    "name_ja": "CAN’T STOP ワル上等！",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/2fe1c9ee6.mp3",
    "cover_file": "covers/59f7bbcd4.png",
    "preview_hash": "2fe1c9ee6",
    "cover_hash": "59f7bbcd4",
    "singer": "Shinko Windy",
    "name_en": "CAN'T STOP WICKED WINDY!"
  },
  {
    "id": "c61dd3ab-7127-40be-badd-dc15edee0b0c",
    "name": "Ichigeki Nyuukon ☆ Pegasus Punch",
    "name_ja": "一撃入魂☆ペガサスパンチ",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/475986c8c.mp3",
    "cover_file": "covers/d83364e0b.png",
    "preview_hash": "475986c8c",
    "cover_hash": "d83364e0b",
    "singer": "Biko Pegasus",
    "name_en": "Soulful Fist Pegasus Punch"
  },
  {
    "id": "c64cbfec-ebb1-4c18-a014-455df2d5dcf9",
    "name": "Gold-Recollection",
    "name_ja": "Gold-Recollection",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/de78c249e.mp3",
    "cover_file": "covers/926c9c845.png",
    "preview_hash": "de78c249e",
    "cover_hash": "926c9c845",
    "singer": "Stay Gold",
    "name_en": "Gold-Recollection"
  },
  {
    "id": "c692e930-e733-44e4-9dfb-feed96e181da",
    "name": "Haruzora BLUE",
    "name_ja": "春空BLUE",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/4cd0bd7a0.mp3",
    "cover_file": "covers/bf72c7a3d.png",
    "preview_hash": "4cd0bd7a0",
    "cover_hash": "bf72c7a3d",
    "singer": "Biwa Hayahide, Winning Ticket, Narita Taishin",
    "name_en": "Sky-blue Spring"
  },
  {
    "id": "c6d263bb-a3cc-4383-86cc-9096b439181f",
    "name": "LADY G DONNA",
    "name_ja": "LADY G DONNA",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/d909010c4.mp3",
    "cover_file": "covers/4ea601d8f.png",
    "preview_hash": "d909010c4",
    "cover_hash": "4ea601d8f",
    "singer": "Gentildonna",
    "name_en": "LADY G DONNA"
  },
  {
    "id": "c712e2e0-6260-4ee7-bf83-647f473d3afd",
    "name": "Mystery × Chemistry",
    "name_ja": "Mystery × Chemistry",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/d43514c03.mp3",
    "cover_file": "covers/c22192898.png",
    "preview_hash": "d43514c03",
    "cover_hash": "c22192898",
    "singer": "Manhattan Cafe, Agnes Tachyon",
    "name_en": "Mystery × Chemistry"
  },
  {
    "id": "c72e2b0f-5a88-451a-8834-8ed400b10aa7",
    "name": "Play Again",
    "name_ja": "Play Again",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/87c20cd8f.mp3",
    "cover_file": "covers/a88f98e04.png",
    "preview_hash": "87c20cd8f",
    "cover_hash": "a88f98e04",
    "singer": "Tsurumaru Tsuyoshi",
    "name_en": "Play Again"
  },
  {
    "id": "c7beece5-f6fa-4501-9aab-38b8d953cb2a",
    "name": "Rakuen",
    "name_ja": "楽園",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/a1645afeb.mp3",
    "cover_file": "covers/9f99296dc.png",
    "preview_hash": "a1645afeb",
    "cover_hash": "9f99296dc",
    "singer": "Manhattan Cafe",
    "name_en": "Paradise"
  },
  {
    "id": "c8db0e26-74ab-409a-9411-3701c06bf8cd",
    "name": "SEVEN",
    "name_ja": "SEVEN",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/5608f177a.mp3",
    "cover_file": "covers/03795f3e5.png",
    "preview_hash": "5608f177a",
    "cover_hash": "03795f3e5",
    "singer": "Symboli Rudolf",
    "name_en": "SEVEN"
  },
  {
    "id": "c8f4f1d5-8504-4daf-9269-58dcff32b9ee",
    "name": "Dear My Dream",
    "name_ja": "Dear My Dream",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/f9139b619.mp3",
    "cover_file": "covers/d3392bd28.png",
    "preview_hash": "f9139b619",
    "cover_hash": "d3392bd28",
    "singer": "Furioso",
    "name_en": "Dear Dream of Mine"
  },
  {
    "id": "c90a86d6-997d-49c0-b323-533fa6966ec0",
    "name": "Negai no Katachi",
    "name_ja": "願いのカタチ",
    "tags": {
      "solo": true,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/a851d0119.mp3",
    "cover_file": "covers/6badbe1ee.png",
    "preview_hash": "a851d0119",
    "cover_hash": "6badbe1ee",
    "singer": "Tokai Teio",
    "name_en": "Shape of Our Wish"
  },
  {
    "id": "ca3c036c-4ba7-4395-946e-b08dcc92df17",
    "name": "U.M.A. NEW WORLD!!",
    "name_ja": "U.M.A. NEW WORLD!!",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/6e4e2f2bd.mp3",
    "cover_file": "covers/5b8dbb685.png",
    "preview_hash": "6e4e2f2bd",
    "cover_hash": "5b8dbb685",
    "singer": "Special Week, Oguri Cap, Gold Ship, Narita Brian, Tamamo Cross, Manhattan Cafe, Agnes Tachyon, Satono Diamond, Kitasan Black, Sakura Laurel, Verxina, Jungle Pocket, Duramente, Rhein Kraft, Cesario, Orfevre, Gentildonna, Win Variation",
    "name_en": "U.M.A. New World!"
  },
  {
    "id": "cb21310b-58da-4803-86b2-2df217e1d653",
    "name": "Ika, Chokumei",
    "name_ja": "以下、勅命",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/5fe398049.mp3",
    "cover_file": "covers/ad3b9d857.png",
    "preview_hash": "5fe398049",
    "cover_hash": "ad3b9d857",
    "singer": "Orfevre",
    "name_en": "By My Decree"
  },
  {
    "id": "cda485c3-0b9f-4e1f-8c37-3553c6f88481",
    "name": "winning the soul",
    "name_ja": "winning the soul",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/a97210de2.mp3",
    "cover_file": "covers/45ccbd8e8.png",
    "preview_hash": "a97210de2",
    "cover_hash": "45ccbd8e8",
    "singer": "Tokai Teio",
    "name_en": "Winning the Soul"
  },
  {
    "id": "ced2fe63-0519-4cad-87db-ca5b0d4cbe62",
    "name": "DRAMATIC JOURNEY",
    "name_ja": "DRAMATIC JOURNEY",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/2fe6f86d0.mp3",
    "cover_file": "covers/f0adbf931.png",
    "preview_hash": "2fe6f86d0",
    "cover_hash": "f0adbf931",
    "singer": "Special Week, Tokai Teio, T.M. Opera O, Narita Brian, Symboli Rudolf, Mayano Top Gun, Manhattan Cafe, Agnes Tachyon, Admire Vega, Marvelous Sunday, Mr. C.B., Twin Turbo, Satono Diamond, Kitasan Black, Sakura Laurel, Narita Top Road, Symboli Kris S, Tanino Gimlet, Mejiro Ramonu, Satono Crown, Cheval Grand, Jungle Pocket, Katsuragi Ace",
    "name_en": "DRAMATIC JOURNEY"
  },
  {
    "id": "cf464081-c44e-4146-b481-7be70c7e57a2",
    "name": "Boku ga Akogareta Ao",
    "name_ja": "僕が憧れた青",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/fa26f9fa8.mp3",
    "cover_file": "covers/97bc618ca.png",
    "preview_hash": "fa26f9fa8",
    "cover_hash": "97bc618ca",
    "singer": "Cheval Grand",
    "name_en": "My Endless Blue Dreams"
  },
  {
    "id": "cf785192-aa17-47b9-b20e-941d89ca770e",
    "name": "Lost Shine",
    "name_ja": "ロストシャイン",
    "tags": {
      "solo": true,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/1d74f6a37.mp3",
    "cover_file": "covers/0ccaaf956.png",
    "preview_hash": "1d74f6a37",
    "cover_hash": "0ccaaf956",
    "singer": "Kitasan Black",
    "name_en": "Lost Shine"
  },
  {
    "id": "d03f6e5e-2acb-44e6-a5d4-6cc3f44823c4",
    "name": "Chotto Dake no Yuuki.",
    "name_ja": "ちょっとだけの勇気。",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/74a395c19.mp3",
    "cover_file": "covers/3efdf4e1c.png",
    "preview_hash": "74a395c19",
    "cover_hash": "3efdf4e1c",
    "singer": "Marche Lorraine",
    "name_en": "A Glimmer of Courage"
  },
  {
    "id": "d0f883b1-8365-40b5-8f53-f1bb4ef41a79",
    "name": "O-Light-O",
    "name_ja": "O-Light-O",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/57cce66b8.mp3",
    "cover_file": "covers/e87b79c82.png",
    "preview_hash": "57cce66b8",
    "cover_hash": "e87b79c82",
    "singer": "Calstone Light O",
    "name_en": "O-Light-O"
  },
  {
    "id": "d1d983e8-4bfe-4fe1-8ced-5257d9025d0e",
    "name": "Secret GRADUATION",
    "name_ja": "Secret GRADUATION",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/050216230.mp3",
    "cover_file": "covers/0882ca984.png",
    "preview_hash": "050216230",
    "cover_hash": "0882ca984",
    "singer": "Grass Wonder",
    "name_en": "Secret Graduation"
  },
  {
    "id": "d26c1e12-be7f-42d7-961e-2e7fcf1ee8f1",
    "name": "Piyoppiyo ni Shiteyanyo!",
    "name_ja": "ピヨッピヨにしてやんよッ！",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/a8ed86a15.mp3",
    "cover_file": "covers/51accc571.png",
    "preview_hash": "a8ed86a15",
    "cover_hash": "51accc571",
    "singer": "Espoir City",
    "name_en": "Peep Peep Pow!"
  },
  {
    "id": "d609a246-7d33-40b2-b847-fa3e0a95b0d8",
    "name": "Bright Melody",
    "name_ja": "Bright Melody",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/3bb42244f.mp3",
    "cover_file": "covers/672c66761.png",
    "preview_hash": "3bb42244f",
    "cover_hash": "672c66761",
    "singer": "Vodka, Tanino Gimlet, Agnes Digital, Symboli Rudolf, Air Groove",
    "name_en": "Bright Melody"
  },
  {
    "id": "d82456d1-b1f8-4451-8de2-3209c6abaddb",
    "name": "RUN×RUN!",
    "name_ja": "RUN×RUN!",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/391f9f16b.mp3",
    "cover_file": "covers/302695e98.png",
    "preview_hash": "391f9f16b",
    "cover_hash": "302695e98",
    "singer": "Agnes Digital, Mayano Top Gun, Smart Falcon, Nishino Flower, Haru Urara, Marvelous Sunday, Nice Nature, Twin Turbo",
    "name_en": "Run n' Run!"
  },
  {
    "id": "d875c82b-0513-43b6-9d00-ed514c37778e",
    "name": "Zettai Tonari...!",
    "name_ja": "ゼッタイトナリ...!",
    "tags": {
      "solo": true,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/1b28eabff.mp3",
    "cover_file": "covers/3d947847e.png",
    "preview_hash": "1b28eabff",
    "cover_hash": "3d947847e",
    "singer": "Meisho Doto",
    "name_en": "I'll Be Right Beside You...!"
  },
  {
    "id": "d90d46b8-745a-44db-b209-1f73b6a74873",
    "name": "Tracen Ramen Retsuden",
    "name_ja": "トレセンラーメン列伝",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/8f21de784.mp3",
    "cover_file": "covers/1913b1352.png",
    "preview_hash": "8f21de784",
    "cover_hash": "1913b1352",
    "singer": "Fine Motion, Meisho Doto, Nice Nature, Narita Top Road, Calstone Light O",
    "name_en": "TRACEN RAMEN"
  },
  {
    "id": "d9647c9a-be3e-4184-8b22-1b353380a063",
    "name": "Marine Blue Magic♡",
    "name_ja": "マリンブルー・マジック♡",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/478aef924.mp3",
    "cover_file": "covers/f9ceaf26b.png",
    "preview_hash": "478aef924",
    "cover_hash": "f9ceaf26b",
    "singer": "Vivlos",
    "name_en": "Marine Blue Magic♡"
  },
  {
    "id": "dc32a9e8-bd23-4257-a157-34513daed9d3",
    "name": "PRISMATIC SPURT!!!!",
    "name_ja": "PRISMATIC SPURT!!!!",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/94e0d1283.mp3",
    "cover_file": "covers/cc9acd288.png",
    "preview_hash": "94e0d1283",
    "cover_hash": "cc9acd288",
    "singer": "Jungle Pocket, Agnes Tachyon, Manhattan Cafe, Dantsu Flame",
    "name_en": "PRISMATIC SPURT!!!!"
  },
  {
    "id": "dd4d167b-dd60-4482-81db-85d7b65bc419",
    "name": "Yumehayate",
    "name_ja": "夢疾風",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/7e2fce9c4.mp3",
    "cover_file": "covers/4fcae823c.png",
    "preview_hash": "7e2fce9c4",
    "cover_hash": "4fcae823c",
    "singer": "Mr. C.B.",
    "name_en": "Dreaming in the Wind"
  },
  {
    "id": "ded28c42-535b-41cc-9d22-618290ce2783",
    "name": "Excellent Condition",
    "name_ja": "Excellent Condition",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/fc77600bf.mp3",
    "cover_file": "covers/f560ec1da.png",
    "preview_hash": "fc77600bf",
    "cover_hash": "f560ec1da",
    "singer": "Ikuno Dictus",
    "name_en": "Excellent Condition"
  },
  {
    "id": "dee2789f-3d79-4096-823a-4e9ab6fda90f",
    "name": "Kibou yo Towa ni",
    "name_ja": "希望よ永遠に",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/80e6dc79e.mp3",
    "cover_file": "covers/7c63be582.png",
    "preview_hash": "80e6dc79e",
    "cover_hash": "7c63be582",
    "singer": "Victoire Pisa",
    "name_en": "Hope Everlasting"
  },
  {
    "id": "e0940991-05c1-486c-9870-55f2129cc157",
    "name": "Irodori Phantasia",
    "name_ja": "彩 Phantasia",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/a0c653980.mp3",
    "cover_file": "covers/274b88f8c.png",
    "preview_hash": "a0c653980",
    "cover_hash": "274b88f8c",
    "singer": "Air Groove, Kawakami Princess, Sweep Tosho, Nishino Flower, Mejiro Dober",
    "name_en": "Brilliant Phantasia"
  },
  {
    "id": "e127ee76-c339-48af-87c6-0ecd53e64dd7",
    "name": "LIKE THE WIND",
    "name_ja": "LIKE THE WIND",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/ba7dec09b.mp3",
    "cover_file": "covers/1f0e97e91.png",
    "preview_hash": "ba7dec09b",
    "cover_hash": "1f0e97e91",
    "singer": "Yamanin Zephyr",
    "name_en": "Like the Wind"
  },
  {
    "id": "e27b4248-8e17-470e-a8c3-601b2e4039eb",
    "name": "Eien no Shikisai",
    "name_ja": "永遠の色彩",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/cfc79188d.mp3",
    "cover_file": "covers/898e1b867.png",
    "preview_hash": "cfc79188d",
    "cover_hash": "898e1b867",
    "singer": "Special Week, Oguri Cap, Fine Motion, Air Shakur, Matikanetannhauser",
    "name_en": "Eternity's Palette"
  },
  {
    "id": "e3d9fbe9-d72e-4950-80ba-c04f60178cf3",
    "name": "Asatsuyu wa Taiga no Yume o Miru",
    "name_ja": "朝露は大河の夢を見る",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/a454bb6c4.mp3",
    "cover_file": "covers/8760680b1.png",
    "preview_hash": "a454bb6c4",
    "cover_hash": "8760680b1",
    "singer": "Cesario",
    "name_en": "The Dew Runs as the River Rushes"
  },
  {
    "id": "e4923164-a10e-4694-afde-0fa10397ac64",
    "name": "Hitamuki My Note",
    "name_ja": "ひたむきマイノート",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/99acc67f7.mp3",
    "cover_file": "covers/924928b3e.png",
    "preview_hash": "99acc67f7",
    "cover_hash": "924928b3e",
    "singer": "Sakura Chiyono O",
    "name_en": "My Diligent Notes"
  },
  {
    "id": "e7c7a0fe-dedd-4d20-bf7b-a6644b45ed62",
    "name": "Gokai Toppa☆Princess!",
    "name_ja": "豪快突破☆プリンセス！",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/3960e5b58.mp3",
    "cover_file": "covers/f05107488.png",
    "preview_hash": "3960e5b58",
    "cover_hash": "f05107488",
    "singer": "Kawakami Princess",
    "name_en": "Heroic Burst Princess!"
  },
  {
    "id": "e8447703-d0d9-4feb-b477-80b6838f9646",
    "name": "UmaSugi! Gourmet Parade",
    "name_ja": "ウマすぎ！グルメパレード",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/886ad59a0.mp3",
    "cover_file": "covers/83c9ab559.png",
    "preview_hash": "886ad59a0",
    "cover_hash": "83c9ab559",
    "singer": "Special Week, Mihono Bourbon, Hishi Akebono, Rice Shower, Nishino Flower, Biko Pegasus, Cheval Grand, Katsuragi Ace, Hishi Miracle, Cesario",
    "name_en": "Umalicious! Gourmet Parade"
  },
  {
    "id": "e88dfbbe-2805-4fd8-9549-2a49c6b90ea3",
    "name": "Tucker's Skill-up Island",
    "name_ja": "タッカー's スキルアップアイランド",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/47bd21cad.mp3",
    "cover_file": "covers/b4ceba7ea.png",
    "preview_hash": "47bd21cad",
    "cover_hash": "b4ceba7ea",
    "singer": "Tucker Bryne",
    "name_en": "Tucker's Grindin' Island"
  },
  {
    "id": "e89c11de-1c08-409f-b38d-332687bb6652",
    "name": "SHAKEROCK",
    "name_ja": "SHAKEROCK",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/5a891cc8e.mp3",
    "cover_file": "covers/885168c71.png",
    "preview_hash": "5a891cc8e",
    "cover_hash": "885168c71",
    "singer": "Mayano Top Gun, Matikanefukukitaru, Seeking the Pearl",
    "name_en": "SHAKEROCK"
  },
  {
    "id": "e95d81d5-f5fa-4249-9adb-8eeb27187a61",
    "name": "Over a Tiara",
    "name_ja": "Over a Tiara",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/92548d856.mp3",
    "cover_file": "covers/f205d1bc2.png",
    "preview_hash": "92548d856",
    "cover_hash": "f205d1bc2",
    "singer": "Rhein Kraft",
    "name_en": "Over a Tiara"
  },
  {
    "id": "ed3f9caa-dc53-48c5-8c23-25f7019e9971",
    "name": "GIRLS' LEGEND U",
    "name_ja": "GIRLS' LEGEND U",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/f3db85741.mp3",
    "cover_file": "covers/e7ede453f.png",
    "preview_hash": "f3db85741",
    "cover_hash": "e7ede453f",
    "singer": "Special Week, Silence Suzuka, Tokai Teio, Maruzensky, Oguri Cap, Gold Ship, Vodka, Daiwa Scarlet, Taiki Shuttle, Grass Wonder, Mejiro McQueen, El Condor Pasa, Symboli Rudolf, Air Groove, Mayano Top Gun, Mejiro Ryan, Rice Shower, Agnes Tachyon, Winning Ticket, Sakura Bakushin O, Super Creek, Haru Urara, Matikanefukukitaru, Nice Nature, King Halo",
    "name_en": "Girls' Legend U"
  },
  {
    "id": "eeb3685c-4874-4794-b839-a0674f9d9675",
    "name": "Watashi no Shirushi wa Daihonmei◎",
    "name_ja": "わたしの印は大本命◎",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/a099169a1.mp3",
    "cover_file": "covers/0091fd3d0.png",
    "preview_hash": "a099169a1",
    "cover_hash": "0091fd3d0",
    "singer": "Special Week",
    "name_en": "My Mark's a Top Favorite ◎"
  },
  {
    "id": "eefc493c-5e64-442a-a236-33f9f05c16cf",
    "name": "Chototsumoshin Bakushin-chuu!!",
    "name_ja": "猪突猛進爆進中!!",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/df7566494.mp3",
    "cover_file": "covers/32c5da49f.png",
    "preview_hash": "df7566494",
    "cover_hash": "32c5da49f",
    "singer": "Sakura Bakushin O",
    "name_en": "In a Reckless Rush!!"
  },
  {
    "id": "ef287c5b-a72b-40ce-8f2b-3b9b6c9fda62",
    "name": "Confident",
    "name_ja": "Confident",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/b0e1b22c0.mp3",
    "cover_file": "covers/cde70edb6.png",
    "preview_hash": "b0e1b22c0",
    "cover_hash": "cde70edb6",
    "singer": "Satono Crown",
    "name_en": "Confident"
  },
  {
    "id": "f0630389-b7d1-41a7-b3db-46ffbdc08a9e",
    "name": "Egao no Takaramono -Beyond The Future!-",
    "name_ja": "笑顔の宝物 -Beyond The Future!-",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/d93b9c74f.mp3",
    "cover_file": "covers/012673a7a.png",
    "preview_hash": "d93b9c74f",
    "cover_hash": "012673a7a",
    "singer": "Special Week, Silence Suzuka, Gold Ship, Mejiro McQueen, Narita Brian, Rice Shower, Winning Ticket",
    "name_en": "Precious Smiles (Beyond The Future!)"
  },
  {
    "id": "f2291f56-47f7-4f99-8288-96e462a42b80",
    "name": "Shadow Roll no Chikai",
    "name_ja": "シャドーロールの誓い",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/24f4eafd3.mp3",
    "cover_file": "covers/954745ae1.png",
    "preview_hash": "24f4eafd3",
    "cover_hash": "954745ae1",
    "singer": "Narita Brian",
    "name_en": "Vow of the Shadow Roll"
  },
  {
    "id": "f2d3c510-399a-4ab8-84b1-6ca6656119f5",
    "name": "Funwari Slowly",
    "name_ja": "ふんわりSlowly",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/7587efda9.mp3",
    "cover_file": "covers/e9fb161ee.png",
    "preview_hash": "7587efda9",
    "cover_hash": "e9fb161ee",
    "singer": "Super Creek",
    "name_en": "Softly, Slowly"
  },
  {
    "id": "f430a5dd-1590-4fec-b6df-148b438af948",
    "name": "Midnight Epilogue",
    "name_ja": "ミッドナイト・エピローグ",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/b62c07f3a.mp3",
    "cover_file": "covers/d16600280.png",
    "preview_hash": "b62c07f3a",
    "cover_hash": "d16600280",
    "singer": "Tokai Teio, Mejiro McQueen, Twin Turbo, Agnes Tachyon, Matikanefukukitaru",
    "name_en": "Midnight Epilogue"
  },
  {
    "id": "f4926272-4462-4042-9169-24676e9c7213",
    "name": "ENDLESS DREAM!!",
    "name_ja": "ENDLESS DREAM!!",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/94e8ac153.mp3",
    "cover_file": "covers/dd6d271bd.png",
    "preview_hash": "94e8ac153",
    "cover_hash": "dd6d271bd",
    "singer": "Special Week, Silence Suzuka, Tokai Teio",
    "name_en": "Endless Dream!!"
  },
  {
    "id": "f4b375f7-3998-44a4-95b3-cb164d11e316",
    "name": "Tazuna to Kizuna",
    "name_ja": "手綱と絆",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/2bdadb066.mp3",
    "cover_file": "covers/7abb0dfc1.png",
    "preview_hash": "2bdadb066",
    "cover_hash": "7abb0dfc1",
    "singer": "Biwa Hayahide",
    "name_en": "Reins and Bonds"
  },
  {
    "id": "f76a05ec-efd4-40d0-9db3-39f5f66d1305",
    "name": "Zensoku! Zenshin! Umadol Power☆",
    "name_ja": "全速！前進！ウマドルパワー☆",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": true
    },
    "audio_file": "audio/920c39483.mp3",
    "cover_file": "covers/22e516b92.png",
    "preview_hash": "920c39483",
    "cover_hash": "22e516b92",
    "singer": "Smart Falcon",
    "name_en": "Full Speed Ahead! Umadol Power☆"
  },
  {
    "id": "f784be9c-10f4-448e-97c8-1029e05c5dda",
    "name": "Garasu no Etoile",
    "name_ja": "硝子のエトワール",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/7e0940ff9.mp3",
    "cover_file": "covers/26d628daf.png",
    "preview_hash": "7e0940ff9",
    "cover_hash": "26d628daf",
    "singer": "Mejiro Ardan",
    "name_en": "Glass Étoile"
  },
  {
    "id": "fb8c5460-83c5-4bb6-97dd-25fcef91724c",
    "name": "Bakunetsu My Soul",
    "name_ja": "爆熱マイソウル",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/38f6481ca.mp3",
    "cover_file": "covers/c55d0abc7.png",
    "preview_hash": "38f6481ca",
    "cover_hash": "c55d0abc7",
    "singer": "Mejiro Ryan, Ines Fujin, Winning Ticket, Tosen Jordan, Biko Pegasus, Ikuno Dictus, Yaeno Muteki, Narita Top Road, Wonder Acute, Duramente",
    "name_en": "Big Bang! My Soul"
  },
  {
    "id": "fbeb6120-eb32-4d17-aa5d-dfd7fab23871",
    "name": "Overrunner!",
    "name_ja": "Overrunner!",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/c47d2c012.mp3",
    "cover_file": "covers/5c87b5d51.png",
    "preview_hash": "c47d2c012",
    "cover_hash": "5c87b5d51",
    "singer": "Daitaku Helios, Yamanin Zephyr, Daiichi Ruby, K.S.Miracle",
    "name_en": "Overrunner!"
  },
  {
    "id": "fe5a1651-b71e-443b-85c3-08089c2d9078",
    "name": "Lightless",
    "name_ja": "ライトレス",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/919d6ff81.mp3",
    "cover_file": "covers/bdb24060f.png",
    "preview_hash": "919d6ff81",
    "cover_hash": "bdb24060f",
    "singer": "Agnes Tachyon",
    "name_en": "Lightless"
  },
  {
    "id": "fefd5711-c2e2-426e-b1c3-26bbc6531dd0",
    "name": "Like a Shooting Star",
    "name_ja": "Like a Shooting Star",
    "tags": {
      "solo": true,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/a3add0404.mp3",
    "cover_file": "covers/023ef484d.png",
    "preview_hash": "a3add0404",
    "cover_hash": "023ef484d",
    "singer": "Admire Vega",
    "name_en": "Like a Shooting Star"
  },
  {
    "id": "ff35c473-3263-4e91-88b1-d58e5c76c8ff",
    "name": "Keppare! Kagayaki Straight",
    "name_ja": "けっぱれ! 輝きストレート",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/f7e09d34f.mp3",
    "cover_file": "covers/2511c26e7.png",
    "preview_hash": "f7e09d34f",
    "cover_hash": "2511c26e7",
    "singer": "Hokko Tarumae",
    "name_en": "Do Your Best! Shining Straight Ahead"
  },
  {
    "id": "e366eb35-efd7-4791-b774-0cb3d5e90dfa",
    "name": "Joyful Jamboree!",
    "name_ja": "Joyful Jamboree!",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/28a77f245.mp3",
    "cover_file": "covers/34c3f7afe.png",
    "preview_hash": "28a77f245",
    "cover_hash": "34c3f7afe",
    "singer": "Daitaku Helios, Daiichi Ruby",
    "name_en": "Joyful Jamboree!"
  },
  {
    "id": "6784ab56-f6fe-4cd1-a443-727baf9c246a",
    "name": "Lightning Fast",
    "name_ja": "Lightning Fast",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/95b53c8c3.mp3",
    "cover_file": "covers/e5f80e5f8.png",
    "preview_hash": "95b53c8c3",
    "cover_hash": "e5f80e5f8",
    "singer": "Hishi Akebono, Curren Chan, Seeking the Pearl",
    "name_en": "Lightning Fast"
  },
  {
    "id": "0643d8cd-e88f-4f74-9469-9378f3d739dc",
    "name": "You! Aim! A!!",
    "name_ja": "You! Aim! A!!",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/ec42d9c61.mp3",
    "cover_file": "covers/903255d37.png",
    "preview_hash": "ec42d9c61",
    "cover_hash": "903255d37",
    "singer": "Nakayama Festa, Espoir City, Symboli Kris S, Gentildonna, Almond Eye, Kiseki, Forever Young",
    "name_en": "You! Aim! A!!"
  },
  {
    "id": "910b0b56-ee1a-410e-8778-5339e81f0184",
    "name": "Gochuumon wa Okimaridesuka?",
    "name_ja": "ご注文はお決まりですか？",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/6b02273b0.mp3",
    "cover_file": "covers/6b3de3b0a.png",
    "preview_hash": "6b02273b0",
    "cover_hash": "6b3de3b0a",
    "singer": "Fine Motion, Meisho Doto, Nice Nature, Narita Top Road, Calstone Light O",
    "name_en": "May I Take Your Order?"
  },
  {
    "id": "2481e1b3-3908-48e5-a3d5-30ca52d04f4d",
    "name": "Shabondama",
    "name_ja": "しゃぼん玉",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/a4055b7d3.mp3",
    "cover_file": "covers/8f9669548.png",
    "preview_hash": "a4055b7d3",
    "cover_hash": "8f9669548",
    "singer": "K.S.Miracle",
    "name_en": "Soap Bubbles"
  },
  {
    "id": "e6a3f541-278e-4ea9-a94c-ae9d50cd4556",
    "name": "Hachimii no Uta",
    "name_ja": "はちみーのうた",
    "tags": {
      "solo": true,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/da377c98e.mp3",
    "cover_file": "covers/ae81661ca.png",
    "preview_hash": "da377c98e",
    "cover_hash": "ae81661ca",
    "singer": "Tokai Teio",
    "name_en": "Hachimi Song"
  },
  {
    "id": "d3283407-1c82-4647-a1dc-a1bbb2d901d0",
    "name": "Aston Machan no Itomaki no Uta",
    "name_ja": "アストンマーちゃんのいとまきのうた",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/ad277e390.mp3",
    "cover_file": "covers/cd7bae7be.png",
    "preview_hash": "ad277e390",
    "cover_hash": "cd7bae7be",
    "singer": "Aston Machan",
    "name_en": "Aston Machan's Spool Song"
  },
  {
    "id": "908af00e-36f3-4fba-8cf9-9957d38b81e2",
    "name": "Gabutto!",
    "name_ja": "ガブッと！",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/048ed1420.mp3",
    "cover_file": "covers/0e49c781a.png",
    "preview_hash": "048ed1420",
    "cover_hash": "0e49c781a",
    "singer": "Gold Ship, Manhattan Cafe, Agnes Tachyon, Dantsu Flame, Buena Vista, Lucky Lilac, Stay Gold, Red Desire",
    "name_en": "Bite Big!"
  },
  {
    "id": "9d06519a-467c-485d-ad5f-877a1d9306f1",
    "name": "Grass Wonder no Chatsumi no Uta",
    "name_ja": "グラスワンダーの茶つみのうた",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/ff2f884a9.mp3",
    "cover_file": "covers/1bbd49804.png",
    "preview_hash": "ff2f884a9",
    "cover_hash": "1bbd49804",
    "singer": "Grass Wonder",
    "name_en": "Grass Wonder's Tea-Picking Song"
  },
  {
    "id": "f3391313-fbb7-4da7-81f8-34b72e832ee1",
    "name": "Golshi Rap -It's Muri Muri-",
    "name_ja": "ゴルシでラップ -It's むりむり-",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/49fab2973.mp3",
    "cover_file": "covers/5b37675ac.png",
    "preview_hash": "49fab2973",
    "cover_hash": "5b37675ac",
    "singer": "Gold Ship",
    "name_en": "Golshi Rap -It's Impossible-"
  },
  {
    "id": "391af25a-46f7-46db-adbd-106772138eee",
    "name": "Gorushin Gorushin Gorushinshin",
    "name_ja": "ゴルシンゴルシンゴルシンシン",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/293bde3b6.mp3",
    "cover_file": "covers/51a88ea76.png",
    "preview_hash": "293bde3b6",
    "cover_hash": "51a88ea76",
    "singer": "Gold Ship",
    "name_en": "Golshin Golshin Golshinshin"
  },
  {
    "id": "19342805-5637-4a76-8e1b-e7504077ed91",
    "name": "Chiyono O no Onayami Soudanshitsu no Uta",
    "name_ja": "チヨノオーのお悩み相談室のうた",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/1677d78cf.mp3",
    "cover_file": "covers/f353b9597.png",
    "preview_hash": "1677d78cf",
    "cover_hash": "f353b9597",
    "singer": "Sakura Chiyono O",
    "name_en": "Ask Chiyono O!"
  },
  {
    "id": "aeb2cbb0-2227-42b5-a1d2-0f296a9eb1ac",
    "name": "Teio Teio Teiteio",
    "name_ja": "テイオーテイオーテイテイオー",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/8399556a0.mp3",
    "cover_file": "covers/6e7246b92.png",
    "preview_hash": "8399556a0",
    "cover_hash": "6e7246b92",
    "singer": "Tokai Teio",
    "name_en": "Teio Teio Teiteio"
  },
  {
    "id": "4826727a-d838-4e46-8920-29fe86c9af2f",
    "name": "Tokai Teio no Obake Nante Nai sa no Uta",
    "name_ja": "トウカイテイオーのおばけなんてないさのうた",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/177c45118.mp3",
    "cover_file": "covers/049b94b58.png",
    "preview_hash": "177c45118",
    "cover_hash": "049b94b58",
    "singer": "Tokai Teio",
    "name_en": "Tokai Teio's Ghosts Aren't Real Song"
  },
  {
    "id": "b2c069d6-ebaf-41cb-9c2d-e3c5570b5eaf",
    "name": "Tracen Taiso",
    "name_ja": "トレセン体操",
    "tags": {
      "solo": false,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/6ccd4e0cf.mp3",
    "cover_file": "covers/f2561cab2.png",
    "preview_hash": "6ccd4e0cf",
    "cover_hash": "f2561cab2",
    "singer": "Tokai Teio, Maruzensky, Taiki Shuttle, Grass Wonder, Mejiro Ryan, Nice Nature, Sakura Chiyono O, Tsurumaru Tsuyoshi",
    "name_en": "Tracen Exercises"
  },
  {
    "id": "30d83687-9db6-41a0-8b2d-f1ff831ed9d9",
    "name": "Nishino Flower no Obento Bako no Uta♪",
    "name_ja": "ニシノフラワーのおべんとうばこのうた♪",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/2d224c2be.mp3",
    "cover_file": "covers/dcc8d9b6f.png",
    "preview_hash": "2d224c2be",
    "cover_hash": "dcc8d9b6f",
    "singer": "Nishino Flower",
    "name_en": "Nishino Flower's Lunch Box Song♪"
  },
  {
    "id": "8a26e53e-52bd-4577-bcbf-49676ff722ed",
    "name": "Haru Urara no Shiawase Nara Te o Tatakou no Uta",
    "name_ja": "ハルウララの幸せなら手をたたこうのうた",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/a0c77055e.mp3",
    "cover_file": "covers/5c76021d0.png",
    "preview_hash": "a0c77055e",
    "cover_hash": "5c76021d0",
    "singer": "Haru Urara",
    "name_en": "Haru Urara's If You're Happy and You Know It Song"
  },
  {
    "id": "bf34a587-4ff7-4041-98fd-895fe9f5b227",
    "name": "Bakushin Bakushin Bakushinshin",
    "name_ja": "バクシンバクシンバクシンシン",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/c7153c0dd.mp3",
    "cover_file": "covers/7d9aa4f54.png",
    "preview_hash": "c7153c0dd",
    "cover_hash": "7d9aa4f54",
    "singer": "Sakura Bakushin O",
    "name_en": "Bakushin Bakushin Bakushinshin"
  },
  {
    "id": "3c5c42ef-c339-487c-b841-157d68851827",
    "name": "Homemeteo",
    "name_ja": "ホメメテオ",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/4195ca16e.mp3",
    "cover_file": "covers/0666771a6.png",
    "preview_hash": "4195ca16e",
    "cover_hash": "0666771a6",
    "singer": "Durandal",
    "name_en": "Meteo-Right!"
  },
  {
    "id": "fec1f58b-dc5a-47fa-9acd-07ad3e29642a",
    "name": "Meisho Doto no Kobutanukitsuneko no Uta",
    "name_ja": "メイショウドトウのこぶたぬきつねこのうた",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/fbb2cd547.mp3",
    "cover_file": "covers/bdfac82f4.png",
    "preview_hash": "fbb2cd547",
    "cover_hash": "bdfac82f4",
    "singer": "Meisho Doto",
    "name_en": "Meisho Doto's Pig Racoon Fox Cat Song"
  },
  {
    "id": "2feee4b1-69c2-4cd0-a6e0-10cef07ff947",
    "name": "Rice Shower no Obento Bako no Uta♪",
    "name_ja": "ライスシャワーのおべんとうばこのうた♪",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/32e2ed058.mp3",
    "cover_file": "covers/186842984.png",
    "preview_hash": "32e2ed058",
    "cover_hash": "186842984",
    "singer": "Rice Shower",
    "name_en": "Rice Shower's Lunch Box Song♪"
  },
  {
    "id": "dd499751-b542-4d35-ba47-e2edc16ffcb9",
    "name": "Kochouran wa Musubu",
    "name_ja": "胡蝶蘭は結ぶ",
    "tags": {
      "solo": true,
      "anime": false,
      "winningLive": true,
      "startingGate": false
    },
    "audio_file": "audio/b461410f5.mp3",
    "cover_file": "covers/29f805534.png",
    "preview_hash": "b461410f5",
    "cover_hash": "29f805534",
    "singer": "Phalaenopsis",
    "name_en": "Bloom Forth, Phalaenopsis"
  },
  {
    "id": "f9dfaf8e-82a8-4fc9-8e17-a9c9f20e54e5",
    "name": "Shiba Haeru wa~",
    "name_ja": "芝生えるわ～",
    "tags": {
      "solo": false,
      "anime": true,
      "winningLive": false,
      "startingGate": false
    },
    "audio_file": "audio/cd12c8e39.mp3",
    "cover_file": "covers/3fa324c1d.png",
    "preview_hash": "cd12c8e39",
    "cover_hash": "3fa324c1d",
    "singer": "Special Week, Winning Ticket, Sakura Chiyono O, Verxina, Samson Big, Royce and Royce, Win Variation, Phalaenopsis",
    "name_en": "Grass Grows~"
  }
];

const SONG_TIERS = [0.1, 0.5, 2.0, 8.0, 15.0];

// Deterministic daily song selector (FNV-1a + Murmur3 bit-mixer with legacy preservation)
function getDailySong(dateString) {
  if (!dateString) dateString = new Date().toISOString().slice(0, 10);
  if (dateString <= "2026-10-26") {
    let hash = 0;
    for (let i = 0; i < dateString.length; i++) {
      hash = (hash * 47 + dateString.charCodeAt(i)) & 0x7fffffff;
    }
    const index = hash % ALL_SONGS.length;
    return ALL_SONGS[index];
  }
  let h = 0x811c9dc5 ^ 0x37465564;
  for (let i = 0; i < dateString.length; i++) {
    h ^= dateString.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  h ^= h >>> 16;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  h = Math.imul(h, 0xc2b2ae35);
  h ^= h >>> 16;
  const index = (h >>> 0) % ALL_SONGS.length;
  return ALL_SONGS[index];
}

window.ALL_SONGS = ALL_SONGS;
window.SONG_TIERS = SONG_TIERS;
window.getDailySong = getDailySong;
