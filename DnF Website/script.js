const episodes = {
    Season1: [
      { title: "Ep. 1: FeK DoLandZ 🧐🥸", id: "1090658556" },
      { title: "Ep. 2: FrEe TenDiEz 🆓🍗🐔", id: "1090658576" },
      { title: "Ep. 3: dUh BTC MaXis 💰🐳🟧", id: "1090658580" },
      { title: "Ep. 4: OpeRaTiOn U.S.H.E.R. ✈️❓🏆", id: "1090658595" },
      { title: "Ep. 5: FrEE RoSS 🆓🆓🆓", id: "1090658604" },
      { title: "Ep. 6: A SeA oF DiAmOnD DicKed GiGa ChAdZ 💎🍌💎", id: "1090658613" },
      { title: "Ep. 7: A VeRy BASED RoAdTriP 🪽🫵😹", id: "1090658620" },
      { title: "Ep. 8: FRIED ON ROONIES 👽😑🥴", id: "1090658632" },
      { title: "Ep. 9: PIZZA NINJA CABAL 🤝🧑‍⚖️❓", id: "1090658644" },
      { title: "Ep. 10: MIKE'S BIG YACHT PARTY ⛵️⛵️⛵️", id: "1090658654" },
      { title: "Ep. 11: WHORUNE'S SECRET🤰🧡🔮", id: "1090664894" },
      { title: "Ep. 12: MR. WALL STREET 📽️🌞📽️", id: "1090666676" },
      { title: "Ep. 13: HERE KITTY KITTY ✈️🎬✈️", id: "1090666691" },
      { title: "Ep. 14: DIAMOND D*CKZ OUT ⛵️💎🍆", id: "1090666698" },
      { title: "Ep. 15: A BILLION DOLLAR KITTY CAT 🎬🐈🍺", id: "1090666705" },
      { title: "Ep. 16: DOLAND'S BIRFDAY 🎂🍺🕺", id: "1090666712" },
      { title: "Ep. 17: DOLAND'S SECRET SAIKO 🗡️🩸📺", id: "1090666721" },
      { title: "Ep. 18: SEXXY DICK-FIL-A DRIVE BY 🍔🍟🐹", id: "1090666737" },
      { title: "Ep. 19: PIZZOZEMPIC MEETING PT.1  🔪🍕🛻", id: "1090666751" },
      { title: "Ep. 20: PIZZOZEMPIC MEETING PT. 2🍕🔪🍷", id: "1090666761" },
      { title: "Ep. 21: SAYLORD'S HONEY YACHT ⛵️🔪💃", id: "1090666773" },
      { title: "Ep. 22: ABOUT THE UPCUMMING DEBATEZ  🇺🇸🎙️🗒️", id: "1090666789" },
      { title: "Ep. 23: A VERY BUSHY SURPRISE✈️🇺🇸🫡", id: "1090666801" },
      { title: "Ep. 24: DOLEY'Z BEEN BUSY 🎙️🇺🇸🫡", id: "1090666811" },
      { title: "Ep. 25: DUH BIG DEBATE 🎙️🤔🇺🇸", id: "1090666826" },
      { title: "Ep. 26: BYE BYE BODEN 🏆🎙️🇺🇸", id: "1090666834" },
      { title: "Ep. 27: SlEePY JoE SaToRiA ⛳️💤📠", id: "1090666844" },
      { title: "Ep. 28: SlEePY JoE SAtoRiA: Pt. 2 💤💤", id: "1090666855" },
      { title: "Ep. 29: DOLAND mEetZ Satoria 🤖🎮🤖", id: "1090666867" },
      { title: "Ep. 30: HAPPY 4TH OF JULY!  🎇🎆", id: "1090666877" },
      { title: "Ep. 31: THE BEST OF DOLAND & FRiEnDz 🤖🎮", id: "1090666883" },
      { title: "Ep. 32: DiAMonD DiCk MoNdAy MEeTing🤝🍌💎", id: "1090666897" },
      { title: "Ep. 33: ThE @HoneyBadgersBtc ReaLlY DoEsn'T GiVe a ShiT 🎬🦡🦝", id: "1090666906" },
      { title: "Ep. 34: ThE SeCrEt WeaPon 💣🎮", id: "1090666913" },
      { title: "Ep. 35: DuH BoTTom iS In! 📈📈📈", id: "1090666924" },
      { title: "Ep. 36: DuH BuTler RallY ✈️🎙️🙌", id: "1090666931" },
      { title: "Ep. 37: The PiZzA MaFiA 👂🔫🍕", id: "1090666941" },
      { title: "Ep. 38: The SolAnA JeEtS StrIkE AgAiN 🔫🍕💣", id: "1090666952" },
      { title: "Ep. 39: A LonG tIme CoMinG ⏲️ 🖼️✊", id: "1090666963" },
      { title: "Ep. 40: ThE DOLAND & FriEndZ Ordinal ColleCtion 👂🖼️🚀", id: "1090666972" },
      { title: "Ep. 41: The DesPerAte Dems EviL MeeTing 🦉💹🔮", id: "1090666979" },
      { title: "Ep. 42: BTC NashViLlE PreP ☕️🧡💎", id: "1090666985" },
      { title: "Ep. 43: BoDen'S DirTy DiRty SeCrEt ❓🫢🪦", id: "1090666992" },
      { title: "Ep. 44: DiRty DiCkEd DeMonCrAtZ 🦉👿🩸", id: "1090667003" },
      { title: "Ep. 45: DUH DOLAND CABAL 🫵😈🤝", id: "1090667011" },
      { title: "Ep. 46: WEN DOLAMBO???? 🏎️🏎️🏎️", id: "1090667022" },
      { title: "Ep. 47: DuH FaKe DOLAND CaBaL 🤔🤔🤔", id: "1090667038" },
      { title: "Ep. 48: ITZ MINT DAY 🖼️🖼️🖼️", id: "1090667048" },
      { title: "Ep. 49: MINT OUT KUMPLEET ✅🚀🥂", id: "1090667057" },
      { title: "Ep. 50: WELKUM TO DUH DOLAND CABAL!🇺🇸🇺🇸🇺🇸", id: "1090667073" },
      { title: "Ep. 51: GOODBYE DARK LORD SOROS 🪄🔮😶", id: "1090667087" },
      { title: "Ep. 52: Is The OlyMPiCz Gay? 🤔🧠👬", id: "1090667101" },
      { title: "Ep. 53: NaNcy'S SeCrEt BaCkDooR 🚪🍑", id: "1090667112" },
      { title: "Ep. 54: Nancy's SeCreT EnTrAncE 🫡🚪😱", id: "1090667124" },
      { title: "Ep. 55: DuH CalM BeFoRe DuH BuTtHolE 🦨💩🍑", id: "1090667132" },
      { title: "Ep. 56: SuRpISe BackDoOr BeTchEs!! 🍑🔫🤝", id: "1090667143" },
      { title: "Ep. 57: We NeeDz to Open Ze Loot 🎁🙏👀", id: "1090667149" },
      { title: "Ep. 58: GanDoLf ThE FriGGiN WhiTe StylEd 🧙‍♂️🪄🧔", id: "1090667162" },
      { title: "Ep. 59: It's TiMe for A ChaNge 🫡🚀🫵", id: "1090667171" },
      { title: "Ep. 60: BTC ShiRtz to duh Moon 🌕🌕🌕", id: "1090667188" },
      { title: "Ep. 61: The BiG D*cKeD MEEtiNg 💎🍌🤗", id: "1090667203" },
      { title: "Ep. 62: ExPeCt ThE UnExPeCteD 😅💩💀", id: "1090667259" },
      { title: "Ep. 63: KumAla Sh*T HeR PaNtiEz LaZt NiGht 💩👙😋", id: "1090667228" },
      { title: "Ep. 64: WaiT@papozorus iZ BaCk... on SATORIA NIGHT?!?! 🎁🥲🎁", id: "1090667235" },
      { title: "Ep. 65: OuT WiTh DuH DNC, iN w/ duH WiTchEs 🪄", id: "1090667244" },
      { title: "Ep. 66: ToP SeCrEt AgENt @udiWertheimer 🪄💣🧙‍♂️", id: "1090667259" },
      { title: "Ep. 67: ThE UdI TakEz a DoOdi ThEorY 🐈💩😢", id: "1090667268" },
      { title: "Ep. 68: Udi GoLdeN BuLl ProPhEcy 🪙🐂🔮", id: "1090667281" },
      { title: "Ep. 69: A QuiCk TrIp To IsRaEl 🇮🇱✈️😼", id: "1090666258" },
      { title: "Ep. 70: Udi's Multi-D**k ThEorY 🪐👽🛸", id: "1090666247" },
      { title: "Ep. 71: Udi's GrEaT IsRaeli ExpEriMent 🧪🥼🇮🇱", id: "1090666230" },
      { title: "Ep. 72: In my Inventory, not my Anus 🍑🫙", id: "1090666224" },
      { title: "Ep. 73: The SnEaKiEst DOLAND of Them All 🥷👟🇲🇽", id: "1090666208" },
      { title: "Ep. 74: MeEting ThE AlMigHty Wooki 🥷🇲🇽🌮", id: "1090666200" },
      { title: "Ep. 75: WooKi The ReTiRed NinJa 🥷🗡️🎮", id: "1090666193" },
      { title: "Ep. 76: Meanwhile At Roscoe's Chicken & Waffles... ☠️🍗🤺", id: "1090666184" },
      { title: "Ep. 77: One DaY TiL duh DirTy Demz Debatez 🎉☕️☀️", id: "1090666179" },
      { title: "Ep. 78: The BiG G** DeBatEz Day 🌈📣📢", id: "1090666172" },
      { title: "Ep. 79: DOLAND vs KUmAla ReCaP 🎯📢🥊", id: "1090666166" },
      { title: "Ep. 80: BaCk To BiDnEsS 🤝🍌💎", id: "1090666158" },
      { title: "Ep. 81: Udi's In OhIo.. & WiTcHes On ToP 🧙‍♀️🪄🍳", id: "1090666151" },
      { title: "Ep. 82: FaileD Assinat...WAIT! DolAnDz a MaChInE?? 🤖🤖🤖", id: "1090666147" },
      { title: "Ep. 83: it all started with the $ZBIT loot box dust weed 🧙‍♀️🌬️🤖", id: "1090666140" },
      { title: "Ep. 84: DOLAND HAZ A DREAM😶‍🌫️🌬️🪄", id: "1090666129" },
      { title: "Ep. 85: Witches, Bitches, Orgies & Blorgies.. 🩸🌈🤖", id: "1090666119" },
      { title: "Ep. 86: TAPROOT WITCHES LOADING...🪫🔋🧙‍♀️", id: "1090666111" },
      { title: "Ep. 87: The BIG ReVeaL😶‍🌫️💤🧙", id: "1090666102" },
      { title: "Ep. 88: how many wishes ✨ do i get with each witch? 🧙‍♀️", id: "1090666097" },
      { title: "Ep. 89: Mormon Wives Witch Marathon.. 🌅🪄📺", id: "1090666084" },
      { title: "Ep. 90: Casting Spellz to Save America 🇺🇸... and therefore the WORLD🌎", id: "1090666076" },
      { title: "Ep. 91: DOLANDz Emergency Diamond Dicked Giga Chad Top Secret Meeting... 🌎🇺🇸🪄", id: "1090666066" },
      { title: "Ep. 92: ThE GoLdEn BULL haz ArriVeThEd 🐂🪙🥇", id: "1090666057" },
      { title: "Ep. 93: LarrY TeH ThuPeR GeHhhH BuLl 🐂🌈📺", id: "1090666056" },
      { title: "Ep. 94: $69 Billion should be enough.... i think??? 💰😅💸", id: "1090666043" },
      { title: "Ep. 95: OpeRaTiOn GOD CANDLE 🕯️📜💹", id: "1090666038" },
      { title: "Ep. 96: ThE MyStErIoUs James A. DoLanD 🪄🐳💰", id: "1090666019" },
      { title: "Ep. 97: The DOLAND Cabal Meetz Satoshi NakAmoTo..? 👀🇺🇸☕️", id: "1090665993" },
      { title: "Ep. 98: LeN SaSsAMan'S BiG GaY SaToShI StoRy..🤝📖🔏", id: "1090665981" },
      { title: "Ep. 99: 99 epIsoDes... & HBO's still Geh 🌈📺👨‍👨‍👦‍👦", id: "1090665965" },
      { title: "Ep. 100: THE GRAND FINALE 🌄🏆🫡", id: "1090664903" }
    ],
    Season2: [
      { title: "Ep. 1: Doland's Runeral ⚰️🇺🇸 ⛪️", id: "1090722592" },
      { title: "Ep. 2: D.O.E is now D.O.G.E. 🏬🤏", id: "1090722643" },
      { title: "Ep. 3: Bradley Cooper, The Frenchman 🥖🇹🇫🤏", id: "1090722681" },
      { title: "Ep. 4: Mr. Yen vs. The Bro Bears 🍽️🐻🍽️", id: "1090722724" },
      { title: "Ep. 5: ENDING THE TARIFF WAR with $DOG 💥🇺🇸🐕", id: "1090722803" },
      { title: "Ep. 6: THE LAST OF US... ON BITCOIN 🧙‍♂️🧟🙀", id: "1090722958" },
      { title: "Ep. 7: THE LAST OF US... ON BITCOIN Pt. 2 🧙‍♂️🧟🙀", id: "1090722958" },
      { title: "Ep. 8: THE LAST OF US... ON BITCOIN Pt. 3 - FINALE 🧙‍♂️🧟🙀", id: "1090723068" },
      { title: "Ep. 9: ORDI WAR 3: PUPPETS, WEIRDOS, AND PSYOPS ✊🤬🕵️‍♀️", id: "1090723167" }
    ]
  };
  
  const seasonSelect = document.getElementById("seasonSelect");
  const episodeSelect = document.getElementById("episodeSelect");
  const videoFrame = document.getElementById("videoFrame");
  const nextButton = document.getElementById("nextButton");
  const randomButton = document.getElementById("randomButton");
  const titleEl = document.getElementById("episodeTitle");
  
  let currentSeason = "Season1";
  let currentEpisodeIndex = 0;
  
  // Populate seasons
  Object.keys(episodes).forEach((season) => {
    const opt = document.createElement("option");
    opt.value = season;
    opt.text = season;
    seasonSelect.appendChild(opt);
  });
  
  // Load episodes for selected season
  function loadEpisodes(season) {
    episodeSelect.innerHTML = "";
    episodes[season].forEach((ep, idx) => {
      const opt = document.createElement("option");
      opt.value = idx;
      opt.text = ep.title;
      episodeSelect.appendChild(opt);
    });
    loadEpisode(season, 0);
  }
  
  // Load a single episode by index
  function loadEpisode(season, index) {
    const ep = episodes[season][index];
    videoFrame.src = `https://player.vimeo.com/video/${ep.id}`;
    titleEl.innerText = ep.title;
    currentSeason = season;
    currentEpisodeIndex = index;
  }
  
  seasonSelect.addEventListener("change", (e) => {
    loadEpisodes(e.target.value);
  });
  
  episodeSelect.addEventListener("change", (e) => {
    loadEpisode(currentSeason, parseInt(e.target.value));
  });
  
  nextButton.addEventListener("click", () => {
    const nextIndex = currentEpisodeIndex + 1;
    if (nextIndex < episodes[currentSeason].length) {
      episodeSelect.value = nextIndex;
      loadEpisode(currentSeason, nextIndex);
    }
  });
  
  randomButton.addEventListener("click", () => {
    const allSeasons = Object.keys(episodes);
    const randomSeason = allSeasons[Math.floor(Math.random() * allSeasons.length)];
    const randomIndex = Math.floor(Math.random() * episodes[randomSeason].length);
  
    seasonSelect.value = randomSeason;
    loadEpisodes(randomSeason);
  
    setTimeout(() => {
      episodeSelect.value = randomIndex;
      loadEpisode(randomSeason, randomIndex);
    }, 50);
  });
  
  // Init
  loadEpisodes(currentSeason);