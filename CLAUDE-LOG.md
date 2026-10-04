# Tadabbur enrichment: live state

The method lives in `.claude/skills/tadabbur-enrich/SKILL.md`. This file is only
the state, kept short on purpose. Full history of earlier rounds:
`tools/wip/round11/HISTORY.md` (read only if needed).

## Start of every run (3 small commands)
1. `node tools/wip/round11/budget.js`: plan usage and the mode (NORMAL / LOW / STOP).
2. `git status --short && git log --oneline -3`
3. Use the table below. The first row that is not DONE is where to resume.

## LIVE STATE (updated 2026-10-03, DEPLOYED lq-v647, WIND-DOWN, no drafters in flight)

- **DEPLOYED (2026-10-03): lq-v647 live-verified (?v=647; live js/tadabbur-articles/39.js md5 matches local), both remotes pushed (b9bc49f).** Undeployed: none.
- This window after v643, one drafter at a time: v644 38:76, v645 38:78, v646 38:67-68, v647 39:5. All gate clean.
  - 38:78 was briefed with 38:67-68 watch-points by mistake; the article is on the right verse (38:78 = curse on Iblis). Nothing to redo.
  - 38:67-68: the tawhid reading is not in any fetched text and is said so in the article, not attributed.
  - 39:5: Mujahid's word is rendered as a loose gloss ("He rolls it on"); ledger flags it. Consider keeping only the transliteration.
- Budget at deploy: 5h 91%, 7d 80%, WIND-DOWN (0 fit). No drafters in flight.
- Next session: "read CLAUDE-LOG.md and continue." Queue: 39:12 and on (`node tools/wip/round11/queue.js` to confirm). Re-check the 38:44 and 38:48 summarised hadiths in a later read.

## LIVE STATE (updated 2026-10-03 11:17, DEPLOYED lq-v643; USER OVERRIDE: one drafter at a time, use the remaining limit)

- **Batch v644+ (11:17, WIND-DOWN override, 1 at a time, budget re-checked before each launch):** 38:76 LAUNCHED (PREP.md in audit/38_76/). Budget at 11:17: 5h 67%, 7d 77%.
  Stop at budget STOP (95%) and deploy whatever is committed before stopping.

- **DEPLOYED (2026-10-03): lq-v643 live-verified (?v=643 served; live js/tadabbur-articles/38.js matches local), both remotes pushed (9ed044f).** 10 ayat this window: v634-v643 = 38:4, 38:11-12, 38:18, 38:34, 38:37, 38:65, 38:62, 38:53, 38:44, 38:48. Undeployed: none.
- Budget at deploy: 5h 28% room, 7d 18% room, WIND-DOWN (0 fit). No drafters in flight, safe to /clear.
- Points to re-check in a future read: 38:44 hadith (Abu Dawud 4472) is summarised, not quoted whole; 38:48 hadith (Tirmidhi 2496) summarised; 38:44 §5.3 striking ruling is al-Qurtubi's, licensing sentence in §5.4.
- Next session: "read CLAUDE-LOG.md and continue." Next targets: 38:65 done, 38:62 done. Run `node tools/wip/round11/queue.js` to confirm (next in queue after these: 38:76 and on).

## LIVE STATE (updated 2026-10-03 10:50, wave 2 LAUNCHED; 5 committed, NOT YET DEPLOYED)

- **Wave 1 DONE (v634-v638): 38:4, 38:11-12, 38:18, 38:34, 38:37 all gated, shipped, committed; both remotes NOT pushed, NOT deployed** (5 undeployed; deploy at the tenth ayah or before stopping on budget). Usage at 10:50: 5h 36%, 7d 73%, MODE LOW.
- **Wave 2 LAUNCHED (2026-10-03, USER OVERRIDE: 5 drafters for the hour):** 38:44 38:48 38:53 38:62 38:65 (PREP.md in audit/38_*).
  - 38:65 v639 DONE (framing sentence "differences of emphasis, not a dispute over meaning" removed in both languages; it was the article's own voice)
  - 38:62 v640 DONE (licensing sentence present; all tafsirs make the asked men believers; reach kept as a named disagreement)
  - 38:44, 38:48, 38:53 still drafting at this line. 7 undeployed commits (v634-v640); the tenth ayah (v643) triggers the deploy.


- **Batch v634+ LAUNCHED (2026-10-03, claude-max, budget 5h 0% / 7d 68%). USER OVERRIDE: 5 drafters in parallel for the next hour (budget.js said 1 fit; 7d 68% is above the 65% NORMAL line, so the limit may stop the batch mid-draft; resume from audit folders if so).**
  | Ayah | Version | Stage |
  |------|---------|-------|
  | 38:4 | v634 | LAUNCHED (PREP.md in tools/wip/round11/audit/38_4/) |
  | 38:11-12 | v635 | LAUNCHED (PREP.md in audit/38_11-12/) |
  | 38:18 | v636 | LAUNCHED (PREP.md in audit/38_18/) |
  | 38:34 | v637 | LAUNCHED (PREP.md in audit/38_34/; Solomon, no prophet-erred voice) |
  | 38:37 | v638 | LAUNCHED (PREP.md in audit/38_37/) |

## LIVE STATE (updated 2026-10-02, stopped on user request)

- **DEPLOYED (2026-10-02): lq-v633 live-verified via cache-buster, both remotes pushed.** 789 cards, 789 articles.
  This window (v627-v633): 37:142, 37:150, 37:153, 37:158, 37:166, 37:173, 37:177. STOPPED at user request; no drafters
  in flight (safe to /clear). Next session: "read CLAUDE-LOG.md and continue." Next targets: 38:4 and on
  (node tools/wip/round11/queue.js to confirm). Budget at stop: 7d ~80% used (resets Mon 5 Oct 16:00), MODE LOW.
- Tips learned: `gate.js`/`ship.sh` take the colon key (37:153), not 37_153. hadith.js can time out on quranx; use
  `node --dns-result-order=ipv4first --network-family-autoselection-attempt-timeout=5000 tools/wip/round11/hadith.js`.
  When a drafter dies after the article, run gate, re-check attributions against the fetched t*.txt, write COMMIT.md by hand.

## LIVE STATE (updated 2026-10-02, cont.)

- **Batch v627+ LAUNCHED (2026-10-02, claude-max, MODE LOW 3 fit, 1 drafter at a time):** 37:142 37:150 37:153.
  5h just reset (1% used, 94% room); 7d the binding constraint at 74% used (21% room). Prepped all three.
  | Ayah | Version | Stage |
  |------|---------|-------|
  | 37:142 | v627 | DONE (muleem glosses all attributed, never "sinned" in own voice; tark-al-awla label dropped, not in any fetched tafsir; Bukhari 3395 verified live, quoted whole; duration range left open) |
  | 37:150 | v628 | DONE (all 6 tafsirs converge, no manufactured dispute; 43:19 Arabic checked; 16:58 link is from Ibn Kathir abridged, not Ma'arif, attributed so; angels never called male; no hadith attaches, stock 660 not used) |
  | 37:153 | v629 | DONE (drafter died after article, no ledger; gate clean, attributions re-checked vs fetched tafsir; fixed "ten"→11 istafa verses per token data; qira'at two named readings of one rebuke) |
  | 37:158 | v630 | DONE (jinna=angels per Baghawi/Tabari/Qurtubi/Muyassar; nasab readings all named; Jews vs Kinana/Khuza'a/Quraysh clash left open + licensing both langs; la-muhdarun 2 readings; no hadith, no stock 660; 37:57/37:127 verified in token data) |
  | 37:166 | v631 | DONE (musabbihun pray vs declare-free kept open, Baghawi joins both; Muslim 522 verified vs saved quranx page, quoted whole, marked as 37:165's; Tabari A'isha report ungraded w/ chain; Umar iqama ungraded; hadith.js needs --dns-result-order=ipv4first) |
  | 37:173 | v632 | DONE (SENSITIVE; licensing both langs; glosses argument/outcome/force kept a range, Muyassar bil-hujja wal-quwwa kept to the messengers; Sa'di fights-clause in his words; Ma'arif reconciliation attributed; my-brief-side fix: dropped "no commentary permits violence" overclaim; no hadith, Khaybar left for 37:177; 5:56 + 38:11 verified) |
  | 37:177 | v633 | DONE (SENSITIVE; Bukhari 2945 quoted whole from the saved page, ungraded; Ibn Kathir's Sahihayn attribution and his own judgement on the Ahmad route kept as his; "a report, not a rule" + licensing both langs; Khaybar Jews only in Baghawi's/Bukhari's wording; chronology dropped, no fetched text dates the verse; the "why morning" reason is Qurtubi's alone) |

## LIVE STATE (updated 2026-10-02)

- **DEPLOYED (2026-10-02): lq-v626 live-verified via cache-buster, both remotes pushed.** 782 cards, 782 articles.
  6 ayat shipped this window (37:105→37:134): 37:105 (sacrifice stopped, son unnamed), 37:112 (HIGHLY
  SENSITIVE Isma'il-vs-Ishaq dispute, named/unresolved), 37:116 (Musa/Harun victory), 37:125 (Ba'l 4-way
  dispute), 37:131 (reward refrain, Ilyas), 37:134 (SENSITIVE — Lut's wife exclusion, licensing guard,
  resolved via 11:81/66:10 cross-refs not invented narrative).
  Push needed `gh auth switch --user learnquranbd` (was on miningshahin, 403'd) — now switched and both
  remotes ahead.
- Budget at v626: 5h 8% room (WIND-DOWN, 0 fit), 7d 27% room. No drafters in flight (safe to /clear).
  Next session: "read CLAUDE-LOG.md and continue." Next targets: 37:142, 37:150, 37:153 (node
  tools/wip/round11/queue.js to reconfirm).

## LIVE STATE (updated 2026-10-01)

- **Batch v599+ LAUNCHED (2026-10-01, claude-pro, 2 drafters, MODE NORMAL 4 fit):** 36:47 36:51 36:55 36:60.
  Yāsīn continued. 36:47 disbelievers twist qadar to excuse withholding charity (speaker-voice dispute, Qurtubi
  sīra anecdote source-gated not hadith). 36:51 second horn-blast/resurrection (Qurtubi's "40 years between
  blasts" report flagged weak/mursal, not a hadith). Queue after this batch: 36:55 36:60 36:69 36:77.
  | Ayah | Version | Stage |
  |------|---------|-------|
  | 36:47 | v600 | DONE (speaker-voice 3-way named; Jews/zanādiqa minority readings kept minority; Qurtubi Abu Bakr/Abu Jahl anecdote source-gated not hadith; Bukhari 1442 flagged general, not stock 660) |
  | 36:51 | v599 | DONE (second blast vs Ibn Kathir's "third" kept as named disagreement; Bukhari 4935 flagged general, fresh not stock; Qurtubi "40yr" report flagged weak/mursal not hadith) |
  | 36:55 | v602 | DONE (shughul 6-way named range, marital-joy reading one modest line no Arabic term; qiraʾat linguistic only; no hadith — none fetched attaches) |
  | 36:69 | v604 | DONE ("not a poet" — Tirmidhi 2848 hasan-sahih + Muslim 2473 Unays both verified live; Tarafa/Ibn Rawaha half-line genuine source clash kept unresolved) |

  Yāsīn (36) now complete through 36:77. Next surah: 37 as-Ṣāffāt.
  | 37:5  | v605 | DONE (Rabb al-Mashariq — 360 (not 363, my brief's error, drafter caught it) vs Qurtubi's 365 kept unresolved; Bukhari 3272 verified live, quoted whole) |
  | 37:11 | v606 | DONE (my brief mis-attributed as-Suddi; drafter fixed to ad-Dahhak for the 37:5 tie-back; lazib sticky vs muntin lexical split kept open) |
  | 37:16 | v607 | DONE (thin tafsir, at-Tabari fetch failed/skipped; 6 cross-ref verse keys spot-verified against quran-tokens.json, replies not quoted) |
  | 37:19 | v608 | DONE (zajra kept distinct from sayha/horn vocabulary; Bukhari 6527 "barefoot naked uncircumcised" verified live, matches as-Sa'di's wording exactly) |

- **DEPLOYED (2026-10-01): lq-v608 live-verified via cache-buster, both remotes pushed.** 764 cards, 764 articles.
  10 ayat shipped this deploy window (36:47→37:19): Yāsīn(36) complete through 36:77; as-Ṣāffāt(37) started 37:5-19.
- **MODE LOW now (budget 5h 65%, 7d 40% used, 1 ayah fits at a time).** Next batch after deploy, 1 drafter at a time:
  | Ayah | Version | Stage |
  |------|---------|-------|
  | 37:25 | v609 | DONE (my brief overstated Qurtubi's Abu Jahl attribution — drafter fixed to wa-qila/Baghawi-only; silence-as-answer per Sa'di kept) |
  | 37:35 | v610 | DONE — SENSITIVE, handled well: Bukhari 2946 + Muslim 916 both verified live; Abu Talib deathbed refusal correctly kept plural (the gathering's, not his personally) per Qurtubi's actual wording; interfaith groups left unnamed, licensing guard both places; no-war-ruling disclaimer on the fighting hadith |
  | 37:41 | v611 | DONE (rizq ma'lum 4-way range kept open; cross-ref 19:62 verified against quran-tokens.json; "morning/evening meal" overreach caught and fixed by drafter) |

- **DEPLOYED (2026-10-01): lq-v611 live-verified via cache-buster, both remotes pushed.** 767 cards, 767 articles.
  3 more ayat this window (37:25, 37:35, 37:45→41 typo: 37:25/35/41): as-Ṣāffāt now through 37:41.
- **STOPPED for the day at v611 on user request.** Everything committed, pushed both remotes, deployed,
  live-verified. No drafters in flight (safe to /clear). Budget was WIND-DOWN (0 ayat fit) at stop.
  Session total (claude-pro, 2026-10-01 cont. after v598): v599-v611 = 13 ayat in two deploys
  (lq-v608, lq-v611). Yāsīn(36) COMPLETE through 36:77 (36:47/51/55/60/69/77); as-Ṣāffāt(37) started
  37:5/11/16/19/25/35/41.
  SENSITIVE verses handled clean this window (scrutinised at merge): 36:55 (Paradise "shughul" — marital-joy
  reading kept to one modest line, no explicit phrasing, dignified register per 33:50/33:59); 37:35 (Abu
  Talib deathbed anecdote — refusal correctly kept plural, the gathering's not his personally, per Qurtubi's
  actual wording; no verdict on anyone's final standing; interfaith Day-of-Judgement groups left unnamed;
  licensing guard both places; no-war-ruling disclaimer on the Bukhari 2946 "umirtu an uqatil" hadith).
- **Batch v612+ LAUNCHED (2026-10-02, claude-pro, 2 drafters, MODE NORMAL 5 fit):** 37:45 37:53.
  37:45 the circulated cup (ka's=vessel-with-wine, ma'in=visibly-flowing). 37:53 the qarin's mocking
  taunt quoted by the believer now in Paradise. 37:55 prepped, queued next (cap 2 on claude-pro).
  | Ayah | Version | Stage |
  |------|---------|-------|
  | 37:45 | v612 | DONE (ka's=vessel-with-wine per Tabari/Qurtubi/Baghawi/Dahhak/Suddi; ma'in=visibly-flowing per Tabari's own "jariya zahira... ghayr gha'ira"; 37:46-47 qualities correctly left out as future ground; no hadith, none essential) |
  | 37:53 | v613 | DONE (lamadinun muhasabun/mujaziyyun both named, Ibn Kathir "both correct"; 37:16 la-mab'uthun vs 37:53 la-madinun spine verified live against quran-json; two-partners narration kept as commentators' report not settled fact, Ma'arif al-Qur'an's no-name caution kept) |
  | 37:55 | v615 | DONE (sawa' al-jahim=middle of Fire near-unanimous, stated as consensus not dispute; elided "yes" before this verse per Tabari; companion unrecognisable but for Allah making him known, two chains; no hadith, none attached) |
  | 37:68 | v617 | DONE (Maqatil hamim-outside-Jahannam vs Qushayri hamim-at-its-edge kept live disagreement; Ibn Mas'ud reading transmitted as TWO different words across tafsirs, both named; drafter fixed my brief's wrong cross-ref 32:20→55:43, verified) |
  | 37:75 | v616 | DONE (which prayer "Noah called Us" names kept as genuine disagreement: 71:5-6/71:26 Tabari/Sa'di vs 54:10 Ibn Kathir/Baghawi, Ma'arif's own framing; 71:5/71:6/71:26 verified against quran-json; no hadith) |
  | 37:79 | v618 | DONE ("salam 'ala Nuh"; fi'l-akhirin 2-way Ummah/all-prophets kept open, cross-validated not merged with Mujahid's separate gloss; Ibn Mas'ud salaman variant named; scorpion-protection folk report + unrelated Muwatta hadith both correctly dropped, not hadith) |
  | 37:88 | v619 | DONE — SENSITIVE, handled well: Muslim 2371 + Bukhari 3357 both verified live, matching exactly (full vs short form); article never asserts "Ibrahim lied" in its own voice, reports hadith's own wording then Ibn Kathir/Ma'arif's ma'aridh/tauriyah reconciliation; 5-way saqim gloss + astrology-knowledge range both kept open; weaker Abu Sa'id chain flagged explicitly |
  | 37:97 | v620 | DONE (furnace structure built for Ibrahim; Bukhari 4563 "hasbuna Allahu wa ni'ma al-wakil" verified live, cross-ref 3:173 matches hadith's own text; al-jahim's definite article = kinaya pointing to that structure's own fire, not the Hereafter's, cross-ref'd against shipped 37:55; al-Haizan tangent correctly dropped) |

- **DEPLOYED (2026-10-02): lq-v620 live-verified via cache-buster, both remotes pushed.** 776 cards, 776 articles.
  9 ayat shipped this window (37:45→37:97): as-Ṣāffāt(37) now through 37:45/53/55/63/68/75/79/88/97.
  SENSITIVE verses handled clean this window (scrutinised at merge): 37:88 (Ibrahim's "inni saqim" — Muslim 2371 +
  Bukhari 3357 both verified live; article never asserts "Ibrahim lied" in its own voice, reports the hadith's own
  wording then Ibn Kathir's/Ma'arif's ma'aridh/tauriyah reconciliation as the dominant scholarly position).
- Budget at v620: 5h 12% room (WIND-DOWN, 0 fit), 7d 41% room. No drafters in flight (safe to /clear).
  Next session: "read CLAUDE-LOG.md and continue." Next targets: 37:105, 37:112, 37:116 (node
  tools/wip/round11/queue.js to reconfirm).
- **Batch v621+ LAUNCHED (2026-10-02, claude-pro, 2 drafters, MODE NORMAL 3 fit):** 37:105 37:112.
  37:105 Allah stops the sacrifice ("you have fulfilled the vision"). 37:112 Ishaq's own later
  tiding — HIGHLY SENSITIVE Isma'il-vs-Ishaq dispute, kept unresolved, non-polemical. 37:116, 37:125,
  37:131 followed in the same window (MODE dropped to LOW after v623). 5 ayat shipped since last
  deploy (v620); deploy due at the 10th or before any stop. MODE LOW, 1 drafter at a time.
  | Ayah | Version | Stage |
  |------|---------|-------|
  | 37:134 | - | LAUNCHED (SENSITIVE — Lut's wife exclusion, licensing guard watch-point given) |
  | 37:131 | v625 | DONE (ihsan anchored in Ilyas's own arc — Ba'l confrontation 37:125, denial 37:127, remembrance 37:129, peace 37:130 — not a rebuild of 37:105's refrain discussion, referenced by number only; all 6 Arabic mufassirun converge, no manufactured dispute; Qurtubi's two glosses kept as his own two readings not cross-scholar; Ma'arif checked, did NOT support "general law for every muhsin" claim so that attribution was dropped per ledger; Bukhari 660 fetched, confirmed unrelated, dropped) |
  | 37:112 | v621 | DONE (Ibn Kathir's own Isma'il=dhabih reading named beside opposing Ibn 'Abbas "al-dhabihu Ishaq" transmission; even within that route one chain ties prophethood-tiding to the ransom moment, another doesn't — both flagged, not merged; al-Baghawi two-camp framing, Qurtubi's own inference attributed to Qurtubi not Ibn 'Abbas, Qatada's chronology kept neutral; non-polemical one-sentence framing toward Jewish/Christian tradition + licensing guard; 37:113 not pulled forward; Bukhari 660 fetched, confirmed unrelated, dropped; (আঃ) Bengali honorific confirmed matching shipped convention over BANGLA-STYLE.md's general default)
  | 37:105 | v622 | DONE (son's identity never named, article says "the son"/"his son" throughout and points to 37:112 without resolving; naskh/Mu'tazila usul al-fiqh point named as scholarly dispute, no position; (AS) used in EN per shipped TEMPLATE convention, (আঃ) in BN; Bukhari 660 fetched, flagged general not drawn from this story) |
  | 37:116 | v623 | DONE (grammarian's plural-pronoun note settled via Tabari+Qurtubi/al-Farra, not a live dispute; "victory" kept as whole deliverance arc not single battle; al-Baghawi's "al-qibt" paraphrased as "those who had ruled over the Israelites in Egypt" to avoid modern Coptic-Christian conflation, logged as word-choice softening; no hadith attaches, stated plainly; 117-122 left as forward ground) |
  | 37:125 | v624 | DONE (Ba'l 4-way named dispute kept open: rabb/Yemeni dialect, idol behind Ba'albakk's name, worshipped woman (minority), king (Qurtubi/Tha'lab-only minority); Qurtubi's two Ibn 'Abbas chains reconciled via an-Nahhas as written; Muqatil's gold/20-cubit/400-attendant idol detail kept small, single-source attributed; Tabari's Ahab/famine narrative used only up to non-repentance, its horse-of-fire/feathers-and-light ending read in full and dropped entirely, no allusion; Bukhari 660 confirmed unrelated, dropped)
  | 37:63 | v614 | DONE (zaqqum fitnah: both ikhtibar/trial and 'uqubah/punishment senses kept open; Makkan "tree in Fire" objection paralleled with 74:30's nineteen-guardians ridicule; Abu Jahl/Ibn al-Zibaʿrā dates-and-butter mockery two independent chains; no hadith, none verse-apt) |

- Next targets (prepped, watch-points below): 37:45, 37:53, 37:55. After that: 37:63, 37:68, 37:75
  (node tools/wip/round11/queue.js to reconfirm). Next session: "read CLAUDE-LOG.md and continue."
  | 36:77 | v603 | DONE (3-way named id dispute Ubayy/al-ʿAas/Ibn Ubayy incl. Ibn Kathir's munkar verdict; distinct from shipped 16:4 same closing words; Uhud detail licensing-guarded; 36:78 left for its own verse) |
  | 36:60 | v601 | DONE ("worship Satan"=obey him; covenant=prophetic warning not 7:172; Bukhari 2886 slave-of-dinar flagged general, "Quantify" quranx typo corrected to qatifa) |

- **Batch v550+ LAUNCHED (2026-10-01, claude-max, 5 drafters):** 28:47 28:59 28:70 28:76 29:8.
  Budget at launch: 5h 0% (reset 15:40), 7d 53% used (42% room, 7 fit). al-Qaṣaṣ tail + al-ʿAnkabūt start.
  | Ayah | Version | Stage |
  |------|---------|-------|
  | 28:47 | v554 | DONE (Bukhari 7416 al-Mughīra; excuse-removal; licensing) |
  | 28:59 | v551 | DONE (Bukhari 335; umm al-qurā both sides; licensing) |
  | 28:70 | v550 | DONE (Muslim 223; tawhid; vs 28:88 distinct) |
  | 28:76 | v553 | DONE (Qārūn; isrāʾīliyyāt name-to-reject; Bukhari 5788; licensing) |
  | 29:8  | v552 | DONE (Muslim 1748 Saʿd; 31:15 balance; licensing) |

- **Batch v555+ LAUNCHED (2026-10-01, claude-max, 5 drafters):** 29:14 29:20 29:25 29:31 29:39.
  al-ʿAnkabūt — Nūḥ's 950 yrs, travel-and-see resurrection, Ibrāhīm vs idols, angels to Ibrāhīm re Lūṭ's town, the triad Qārūn/Firʿawn/Hāmān.
  Deploy target v559 (10th since v549). v550-554 committed, NOT yet pushed/deployed.
  | Ayah | Version | Stage |
  |------|---------|-------|
  | 29:14 | v559 | DONE (950/৯৫০ parity; whole-life vs calling-span dispute; Bukhari 3340; licensing) |
  | 29:20 | v555 | DONE (Bukhari 4935 flagged general; resurrection; no overreach) |
  | 29:25 | v558 | DONE (mawadda qirāʾāt both; Bukhari 660 clause — STOCK reuse, net-timeout cached page verified; licensing) |
  | 29:31 | v557 | DONE (al-bushrā=Isḥāq; no hadith, source-gated; licensing) |
  | 29:39 | v556 | DONE (triad-as-set; Muslim 91 kibr, distinct from 28:76; licensing) |

- **Batch v560+ LAUNCHED (2026-10-01, claude-max, 5 drafters):** 29:47 29:52 30:3 30:9 30:18.
  al-ʿAnkabūt close + ar-Rūm start (Byzantine prophecy). Deploy target v569. v560+ not yet pushed/deployed.
  | Ayah | Version | Stage |
  |------|---------|-------|
  | 29:47 | v561 | DONE (Bukhari 7274; Baghawi "the Jews" narrowed to the rejecters-among-them — kept; licensing) |
  | 29:52 | v560 | DONE (Bukhari 4981 verse-attached; bāṭil referent kept open; licensing) |
  | 30:3  | v562 | DONE (qirāʾāt both named; Tirmidhi 3194 Abū Bakr bet "sahih hasan gharib" as-page) |
  | 30:9  | v563 | DONE (vs 29:20 distinct; athārū lexical both; Bukhari 3381 al-Ḥijr=STOCK, verse-apt; licensing) |
  | 30:18 | v564 | DONE (space+hours frame vs 28:70; prayer-times dispute open; AbūDāwūd 5076, Ibn Kathir jayyid attributed) |

- **Batch v565+ LAUNCHED (2026-10-01, claude-max, 5 drafters):** 30:30 30:32 30:46 30:51 31:4.
  ar-Rūm (fiṭrah, sects, winds) + Luqmān start. Reaches v569 → DEPLOY target. v560-v564 committed, NOT yet pushed/deployed.
  | Ayah | Version | Stage |
  |------|---------|-------|
  | 30:30 | v569 | DONE (fiṭrah; Muslim 2658 whole, avoids Bukhari 1385 dup; lā tabdīl both ways + khisāʾ reading) |
  | 30:32 | v565 | DONE (SENSITIVE sects; §8 no-takfīr guard; farraqū/fāraqū qirāʾāt; Tirmidhi 2641 ḥasan gharīb) |
  | 30:46 | v566 | DONE (four lām-clauses; Bukhari 846 verse-apt; distinct from 30:51) |
  | 30:51 | v568 | DONE (contrast vs 30:46; yakfurūn both senses; Muslim 2999 flagged general; dropped munkar-rafʿ) |
  | 31:4  | v567 | DONE (iḥsān triad; yaqīn as root; Jibrīl hadith Bukhari 50; 29:45 refd not rebuilt) |

- **Batch v570+ LAUNCHED (2026-10-01, claude-max, 5 drafters):** 31:10 31:34 32:4 32:23 32:27.
  Luqmān close + as-Sajda. SENSITIVE: 32:4 istiwāʾ ʿalā al-ʿarsh (ṣifāt — salaf bilā kayf); 31:34 five keys of unseen.
  Deploy target v579. v560-v569 live (lq-v569); v570+ not yet pushed/deployed.
  | Ayah | Version | Stage |
  |------|---------|-------|
  | 31:10 | v570 | DONE (ʿamad both ways; no geology overreach; no hadith source-gated — dropped stock Bukhari 660) |
  | 31:34 | v573 | DONE (five keys; ultrasound objection reframed via Qurtubi, not conceded; Bukhari 1039 whole sahih) |
  | 32:4  | v574 | DONE (SENSITIVE istiwāʾ; salaf bilā-kayf, Mālik formula as transmitted maxim; taʾwīl respected; shafāʿa by-leave; §8 creed note) |
  | 32:23 | v571 | DONE (liqāʾihi crux all 4 readings no position; Bukhari 3239 Isrāʾ verse-attached; licensing) |
  | 32:27 | v572 | DONE (sawq + sight motif; distinct from 29:20/30:9; Bukhari 79 flagged general; dropped weak Nile story) |

- **Batch v575+ LAUNCHED (2026-10-01, claude-max, 5 drafters):** 33:6 33:9 33:18 33:28 33:45.
  al-Aḥzāb. SENSITIVE: 33:6 Mothers of the Believers + inheritance-abrogation; 33:28 takhyīr of the Prophet's wives (reverence).
  Deploy target v579. v560-v569 live (lq-v569); v570-v574 + this batch not yet deployed.
  | Ayah | Version | Stage |
  |------|---------|-------|
  | 33:6  | v579 | DONE (SENSITIVE; awlā=authority not ownership; mothers fiqh-precise; inheritance abrogation; no hadith#s — net timeout, collection-only) |
  | 33:9  | v577 | DONE (Trench; angels agreement; Muslim 1788 Ḥudhayfa whole; ṣabā kept as mufassirūn report, no false Bukhari#) |
  | 33:18 | v578 | DONE (muʿawwiqīn; 3 views no position; Bukhari 33 flagged general; no-takfīr guard, verdict to Allah 33:24) |
  | 33:28 | v576 | DONE (SENSITIVE takhyīr; framed as elevation; Bukhari 4785 ʿĀʾishah chose Allah; §8 "Not a Template" guard) |
  | 33:45 | v575 | DONE (three offices; shāhid object both views; Bukhari 2125 verse-apt verbatim) |

- **Batch v580+ LAUNCHED (2026-10-01, claude-max, 5 drafters):** 33:50 33:59 33:63 34:3 34:12.
  al-Aḥzāb close + Sabaʾ start. HIGHLY SENSITIVE: 33:50 (Prophet's marital privileges, mā malakat aymān, woman who offers herself —
  khāliṣa to him alone); 33:59 (jilbāb — recognition+protection, non-policing, scholarly range on extent). Deploy target v589.
  v570-v579 live (lq-v579); v580+ not yet deployed.
  | Ayah | Version | Stage |
  |------|---------|-------|
  | 33:50 | v583 | DONE (HIGHLY SENSITIVE; khāliṣa exclusivity; mā malakat per 23:6 + manumission; no-template §9; cousin-marriage attributed to Ibn Kathir non-polemical; Bukhari 5113; no single wife asserted) |
  | 33:59 | v582 | DONE (SENSITIVE jilbāb; dignity+protection; non-policing §6+24:30; extent ikhtilāf no side sinful; Muslim 890) |
  | 33:63 | v580 | DONE (questioners + qarīb; distinct from 31:34; Bukhari 6503 verse-apt + 50 clause) |
  | 34:3  | v584 | DONE (commanded oath; dharra non-physics; distinct from 31:34; Muslim 2653 flagged general; licensing) |
  | 34:12 | v581 | DONE (subjection-by-leave; isrāʾīliyyāt as lore only; Bukhari 461 ʿifrīt; distinct from Naml) |

- **Batch v585+ LAUNCHED (2026-10-01, claude-max, 5 drafters):** 34:21 34:28 34:34 34:46 34:49.
  Sabaʾ. Non-sensitive. Overlaps: 34:28 kāffatan vs shipped 33:45 three-offices; 34:34 mutrafūn (wealth-not-condemned like 28:76).
  Deploy target v589. v580-v584 committed (not deployed); v570-v579 live.
  | Ayah | Version | Stage |
  |------|---------|-------|
  | 34:21 | v588 | DONE (sulṭān=call not power; li-naʿlama=manifestation; Bukhari 660 STOCK flagged general; licensing) |
  | 34:28 | v586 | DONE (kāffatan universality; distinct from 33:45; Bukhari 335 at its home verse) |
  | 34:34 | v585 | DONE (mutraf pattern; wealth-not-condemned licensing; Bukhari 7 verse-attached) |
  | 34:46 | v587 | DONE (tafakkur vs majnūn slander; waqf dispute; Bukhari 4770 Ṣafā verse-apt phrase) |
  | 34:49 | v589 | DONE (ḥaqq vs impotent bāṭil; yubdiʾ/yuʿīd both readings; Bukhari 4287 idols at Conquest verse-apt) |

- **Batch v590+ LAUNCHED (2026-10-01, claude-max, 4 drafters — smaller wave, budget at edge):** 35:1 35:18 35:34 35:42.
  Fāṭir. Non-sensitive. Budget "5 fit" at launch — after this wave expect WIND-DOWN; deploy v590-v593 before any stop.
  | Ayah | Version | Stage |
  |------|---------|-------|
  | 35:1  | v592 | DONE (Fāṭir; wings affirmed as revealed salaf-method; yazīd range; Bukhari 3232 verse-apt) |
  | 35:18 | v591 | DONE (individual accountability; refrain cross-lit; reconciled w/ intercession; Bukhari 660 STOCK flagged) |
  | 35:34 | v593 | DONE (Ghafūr-shortfall/Shakūr-multiplied; al-ḥazan range; Bukhari 6463 verse-apt; dropped weak chain) |
  | 35:42 | v590 | DONE (oath vs nufūr; scope disagreement kept; Bukhari 1 flagged general; dropped stock 660) |

- **Batch v594+ LAUNCHED (2026-10-01, claude-max, 5 drafters):** 36:2 36:11-12 36:23 36:26 36:34.
  Yāsīn. Non-sensitive. 36:34 overlaps shipped 32:27 (revived earth) — keep distinct. Deploy target v599 (or before stop).
  v590-v593 live (lq-v593); v594+ not yet deployed.
  | Ayah | Version | Stage |
  |------|---------|-------|
  | 36:2     | v597 | DONE (oath by the Book; al-ḥakīm 3-way; "heart of Qur'an" Tirmidhi 2887 correctly reported WEAK; Bukhari 6108 adab) |
  | 36:11-12 | v598 | DONE (receptive heart + āthār recording; Muslim 665a Banū Salima verse-apt whole; man-sanna tafsir-attrib) |
  | 36:23    | v596 | DONE (tawhid daʿwah-by-reasoning; shafāʿa reconciled; durr dispute; Tirmidhi 2516 ḥasan ṣaḥīḥ flagged general) |
  | 36:26    | v595 | DONE (martyr's wish for his killers; mode-of-death disagreement; Bukhari 3477 verse-apt; isrāʾīliyyāt dropped) |
  | 36:34    | v594 | DONE (garden/fruit distinct from 32:27; Muslim 2734 verse-apt; dropped stock 660) |

- **Live at v598** (deployed + live-verified 2026-10-01 via cache-buster; live sw.js = lq-v598). 754 cards, 754 articles.
- STOPPED at v598 (wind-down: MODE LOW + 7d budget 30% room must last to Mon 5 Oct reset + context ~35%). Everything
  committed, pushed both remotes, deployed, live-verified. NO drafters in flight (safe to /clear). Next session: "read
  CLAUDE-LOG.md and continue". Next targets: 36:47 36:51 36:55 36:60 36:69 (node tools/wip/round11/queue.js to confirm).
  Budget at stop: 5h 45% used, 7d 65% used; context 35%.
  This session (claude-max, 2026-10-01 cont.) shipped v550-v598 = 49 ayat in SIX deploys (lq-v559/v569/v579/v589/v593/v598),
  all live-verified, both remotes pushed. al-Qaṣaṣ(28)→28:76; al-ʿAnkabūt(29) 29:8-52; ar-Rūm(30) 30:3-51; Luqmān(31)
  31:4/10/34; as-Sajda(32) 32:4/23/27; al-Aḥzāb(33) 33:6/9/18/28/45/50/59/63; Sabaʾ(34) 34:3/12/21/28/34/46/49;
  Fāṭir(35) 35:1/18/34/42; Yāsīn(36) 36:2/11-12/23/26/34.
  SENSITIVE verses handled clean this session (all scrutinised at merge): 32:4 istiwāʾ (salaf bilā-kayf, taʾwīl respected);
  30:32 sects (no-takfīr guard); 31:34 five-keys (ultrasound objection reframed not conceded); 33:6 Mothers of the Believers
  (fiqh-precise); 33:28 takhyīr (framed as elevation); 33:50 Prophet's marital privileges (khāliṣa exclusivity, mā malakat per
  23:6); 33:59 jilbāb (dignity+protection, non-policing); 33:18 hinderers (no-takfīr).
- STOCK-HADITH watch (this session): Bukhari 660 (seven shaded) FELL BACK AGAIN at 29:25, 34:21, 35:18 (flagged general
  each time), and was correctly DROPPED as off-topic at 31:10/34:34/34:3/35:42/36:2/36:34. Ṣafā "warn your kin" Bukhari
  4770 reused at 34:46 (but verse-apt — its closing phrase IS 34:46). Bukhari 335 reused at 34:28 (its HOME verse, kāffatan —
  resolved). Feeds the pending "stock-hadith rotation" decision.
- (prev) Live at v549 — STOPPED at v549 by earlier user request; everything committed/pushed/deployed/live-verified.
- SESSION TOTAL (claude-max, 2026-10-01): v510-v549 = 40 ayat in five deploys (lq-v519/v529/v539/v544/v549),
  all live-verified, both remotes pushed. **ash-Shuʿarāʾ (26) COMPLETE**; an-Naml (27) COMPLETE; al-Qaṣaṣ (28)
  through 28:42 (28:8/15/18 Mūsā's infancy + unintended killing, 28:32 two proofs, 28:41-42 imams of the Fire).

Batch v545-v549 (all DONE, deployed lq-v549): 28:8 v547, 28:15 v545 (SENSITIVE — unintended death, prophet never
  said to sin; Bukhari 4712), 28:18 v548 (SENSITIVE; Bukhari 2444), 28:32 v549, 28:41-42 v546.
- STOCK-HADITH watch (this session): the al-Ḥijr/Thamūd event now used THREE times — Bukhari 3380 (26:142),
  Bukhari 3379 (26:155), Muslim 2980 (27:52); each verse-apt and 27:52 is the ruins verse, but event-level
  repetition is real. Also Ṣafā "warn your kin": Bukhari 4771 (26:170), 4770 (26:178), 4771/4770 at 26:214
  (its home verse). And Tirmidhi 2733 "nine signs" reused at 27:12 (prior: 17:104). Feeds the user's pending
  "stock-hadith rotation" decision.
- ATTRIBUTION FIX (2026-10-01): commit.sh was appending `Co-Authored-By: Claude Opus 4.8` to every
  commit — forbidden by the machine CLAUDE.md (no co-author/AI line; CLAUDE.md overrides the attribution
  reminder). Removed the echo from commit.sh line 11; stripped the line from this session's then-unpushed
  commits v510-v514 (filter-branch, origin/main..HEAD). **OPEN ITEM for user:** the whole earlier module
  history (v509 and back, already pushed + deployed) still carries the line on hundreds of commits — left
  untouched; scrub only on your say-so.
Batch v540-v544 (all DONE, deployed lq-v544): 27:67 v543, 27:75-76 v541, 27:82 v544 (Dābbat al-Arḍ, isrāʾīliyyāt
  named-to-reject only), 27:92 v542, 28:4 v540 (Pharaoh — "sparing women"=enslavement, licensing prominent).
Batch v535-v539 (all DONE, deployed lq-v539): 27:24 v536, 27:34 v539, 27:42 v538, 27:52 v535, 27:54 v537.
Batch v530-v534 (all DONE, deployed lq-v539): 26:219 v532, 26:227 v530 (ash-Shuʿarāʾ COMPLETE), 27:3 v531, 27:7 v533, 27:12 v534.
Batch v525-v529 (all DONE, deployed lq-v529): 26:186 v525, 26:193 v529, 26:198 v526, 26:208 v527, 26:214 v528.
Batch v520-v524 (all DONE, deployed lq-v529): 26:157 v520, 26:165 v523, 26:170 v521, 26:178 v524, 26:183 v522.
  STOCK-HADITH watch cont.: Ṣafā "warn your kin" narrations — Bukhari 4771 at 26:170 and Bukhari 4770 at 26:178,
  two verses apart; 26:214 is the episode's home verse (used Bukhari 4771/4770 there as primary).
Batch v510-v519 (all DONE, deployed lq-v519): 26:97 v512, 26:106 v511, 26:109 v513, 26:115 v510,
26:123 v514, 26:128 v516, 26:133 v518, 26:142 v517, 26:146 v515, 26:155 v519.
- (earlier) STOPPED at v509 by prior user request; everything was committed/pushed/deployed/live-verified.
  Next targets after v539 batch: 27:24 ... (node tools/wip/round11/queue.js to confirm).
- claude-max session (2026-09-30, cont.) shipped v450–v509 (60 ayat: al-Anbiyāʾ tail, al-Ḥajj,
  al-Muʾminūn, an-Nūr, al-Furqān, ash-Shuʿarāʾ through the drowning of Pharaoh + Ibrāhīm's opening),
  all committed, pushed both remotes, deployed & live-verified in six deploys
  (v459/v469/v479/v489/v499/v509). Surah 21 done through 21:105; 22 al-Ḥajj covered; 23 al-Muʾminūn
  through 23:111; 24 an-Nūr through 24:61; 25 al-Furqān through 25:48; 26 ash-Shuʿarāʾ through 26:95
  (26:1 muqaṭṭaʿāt; Mūsā/Pharaoh 26:10-66; Ibrāhīm 26:75; Iblīs's hosts 26:95). **665 shipped, 395 to go.**
- STALL RECOVERY (batch v505-509): 3 drafters (26:63, 26:75, 26:95) hit a simultaneous stream-watchdog
  stall (no progress 600s) with only their card-notes written, no article. Resumed all 3 via SendMessage
  (recovery: resume, never restart) — each finished its article + gate cleanly and shipped (v507/508/509).
  If this recurs: check tools/wip/round11/<s>_<a>-articles.js exists; if only -notes.js does, SendMessage
  the agent by its agentId to finish the article, do NOT relaunch.
  (Pre-existing uncommitted: .claude/skills/tadabbur-enrich/SKILL.md and package.json — present at
  session start, NOT from this run; left untouched.)
- 26:1 (Ṭā-Sīn-Mīm, muqaṭṭaʿāt) shipped with "meaning known to Allah alone" as the leading stance
  (tied to 3:7); scholarly views kept as ijtihād, no decoding asserted — the pattern for future
  disconnected-letters verses. 26:12 (Mūsā's fear) never framed as a fault. 26:22 (Pharaoh's
  "favour") stands with the oppressed, guard sentence carried.
- Sensitive verses handled clean this session (each scrutinised at merge — forbidden phrasings grepped
  absent, framing sentences grepped present): 22:53 gharānīq (named only to reject, idol-praise words
  never quoted, no "prophet erred"); 22:40 (fighting-permission — defensive-redress); 23:6 (mā malakat
  aymānuhum — historical framing, weight on chastity); 23:50 (ʿĪsā/Maryam — no polemics); 23:27 (Nūḥ's
  drowned son — no "prophet erred"); 24:2 (ḥadd for zinā — judicial-only, four-witness bar, no
  vigilantism, رأفة = no suspending a proven sentence, stoning only as reported dispute); 24:6 (liʿān —
  wife's counter-oath as shield, judicial-only); 24:12 (the ifk — ḥusn aẓ-ẓann, her innocence never in
  doubt, decent); 24:31 (women's modesty — balanced with 24:30, non-policing, ends on hope); 24:61
  (blind/lame/ill — inclusion not pity); 25:4 (Qurʾān-is-borrowed charge — no suspicion of any class).
- NOTE for user (STOCK-HADITH REPETITION — the clearest quality item this session): when no
  verse-specific sound hadith exists, drafters fall back on the same few narrations, each honestly
  flagged "not attached to this verse" but repeating across articles. Bukhari 660 (seven shaded) ~11×
  (21:105, 22:35, 23:27, 23:32, 23:38, 23:78, 23:111, 24:2, 26:36, 26:95 …). Adjacent-verse repeats a
  reader would notice browsing one surah: Tirmidhi 2639 (bitāqa) on 23:62 & 23:103; Tirmidhi 2174 (just
  word before a tyrant) on 26:10 & 26:22; Bukhari 2004 (ʿĀshūrāʾ) on 26:63 & 26:66; Bukhari 1385 (fiṭrah)
  on 26:26 & 26:75. Worth a curated per-theme "stock general-hadith rotation" (or a gate check that warns
  when a fallback hadith repeats within N verses) so the same narration doesn't recur nearby.
- NOTE for user: nums.js (numeral EN/BN parity check) has two gaps drafters worked around by using digit
  forms — it flags "nine" inside "ninety-nine" as an EN-only number, and its BN dictionary lacks সাতজন
  (seven-persons). Drafters rendered "৯৯"/"৭ জন" as digits to pass. Minor prose cost; a dictionary/​regex
  fix would let those spell out.
- Budget at v469 deploy: 5h 33%, 7d 34%, context 20% — MODE NORMAL, continuing.
- SEARCH FEATURE now LIVE (v412+): ref search accepts `--` and ayah ranges (18--94, 18:90-94,
  18--90-94) in js/tadabbur.js parseRefQuery/filtered. It shipped with the batch because commit.sh
  swept the js/ edit into the v412 commit (memory commit-sweeps-js). User was told it would be held;
  it went live instead — flag for the user.
- Usage (30 Sep, claude-max): 5h ~30%, 7d ~24%. Budget account-aware; 5 parallel claude-max.
  NOTE: pushes need `gh auth switch --user learnquranbd` (403s otherwise). Next: 19:75 19:85-86 20:2 20:14 20:22
- Next batch (deploy after v371):

| Ayah   | Version | Stage |
|--------|---------|-------|
| 15:22 | v362 | DONE |
| 15:26 | v363 | DONE |
| 15:33 | v364 | DONE |
| 15:36 | v365 | DONE |
| 15:45 | v366 | DONE |
| 15:63 | v367 | DONE |
| 15:67 | v369 | DONE |
| 15:74 | v368 | DONE |
| 15:80 | v371 | DONE (batch deployed) |
| 15:88 | v370 | DONE |
| 16:4 | v372 | DONE |
| 16:8 | v373 | DONE |
| 16:22 | v374 | DONE |
| 16:30 | v375 | DONE |
| 16:36 | v376 | DONE |
| 16:39 | v377 | DONE |
| 16:43 | v378 | DONE (deployed) |
| 16:58 | v379 | DONE (deployed) |
| 16:61 | v380 | DONE (deployed) |

### Batch v381–v392 — DEPLOYED (live lq-v392). 12 ayat, all DONE.
### Batch v397+ (claude-pro session, 2 drafters)
| Ayah   | Version | Stage |
|--------|---------|-------|
| 18:18 | v397 | DONE |
| 18:29 | v398 | DONE |

### Batch v393–v396 — DEPLOYED (live lq-v396, verified). 4 ayat, all DONE.
  17:90 v393, 17:97 v394, 18:2 v395, 17:104 v396.

### Batch v399–v409 — DEPLOYED (live lq-v409, verified). 11 ayat surah 18, all DONE.

### Batch v410–v419 — DEPLOYED (live lq-v419). Surah 19 Maryam, 10 ayat, all DONE.
  (Search feature shipped with this batch — see LIVE STATE note.)

### Batch v420–v429 — DEPLOYED (live lq-v429). 10 ayat (surah 19 tail + Ṭā-Hā), all DONE.

### Batch v430–v439 — DEPLOYED (live lq-v439). 10 ayat (Ṭā-Hā tail + al-Anbiyāʾ start), all DONE.

### Batch v440–v444 — DEPLOYED (live lq-v444). 5 ayat al-Anbiyāʾ, all DONE.

### Batch v505–v509 — DEPLOYED (live lq-v509, verified). ash-Shuʿarāʾ (sea/drowning/Ibrāhīm); 3 stall-recovered. All DONE.
| Ayah   | Version | Stage |
|--------|---------|-------|
| 26:57 | v505 | DONE |
| 26:63 | v508 | DONE |
| 26:66 | v506 | DONE |
| 26:75 | v507 | DONE |
| 26:95 | v509 | DONE |

### Batch v500–v504 — DEPLOYED (live lq-v509, verified). ash-Shuʿarāʾ Mūsā/magicians. All DONE.
| Ayah   | Version | Stage |
|--------|---------|-------|
| 26:26 | v503 | DONE |
| 26:34 | v500 | DONE |
| 26:36 | v502 | DONE |
| 26:44 | v504 | DONE |
| 26:51 | v501 | DONE |

### Batch v495–v499 — DEPLOYED (live lq-v499, verified). al-Furqān close + ash-Shuʿarāʾ start, all DONE.
| Ayah   | Version | Stage |
|--------|---------|-------|
| 25:48 | v496 | DONE |
| 26:1 | v499 | DONE |
| 26:10 | v497 | DONE |
| 26:12 | v495 | DONE |
| 26:22 | v498 | DONE |

### Batch v490–v494 — DEPLOYED (live lq-v499, verified). al-Furqān, all DONE.
| Ayah   | Version | Stage |
|--------|---------|-------|
| 25:15 | v491 | DONE |
| 25:20 | v494 | DONE |
| 25:25 | v490 | DONE |
| 25:35 | v492 | DONE |
| 25:38 | v493 | DONE |

### Batch v485–v489 — DEPLOYED (live lq-v489, verified). an-Nūr close + al-Furqān start, all DONE.
| Ayah   | Version | Stage |
|--------|---------|-------|
| 24:50 | v488 | DONE |
| 24:58 | v487 | DONE |
| 24:61 | v489 | DONE |
| 25:4 | v486 | DONE |
| 25:8 | v485 | DONE |

### Batch v480–v484 — DEPLOYED (live lq-v489, verified). an-Nūr, all DONE.
| Ayah   | Version | Stage |
|--------|---------|-------|
| 24:6 | v481 | DONE |
| 24:12 | v483 | DONE |
| 24:27 | v484 | DONE |
| 24:31 | v482 | DONE |
| 24:45 | v480 | DONE |

### Batch v475–v479 — DEPLOYED (live lq-v479, verified). al-Muʾminūn close + an-Nūr start, all DONE.
| Ayah   | Version | Stage |
|--------|---------|-------|
| 23:91 | v476 | DONE |
| 23:96 | v477 | DONE |
| 23:103 | v478 | DONE |
| 23:111 | v475 | DONE |
| 24:2 | v479 | DONE |

### Batch v470–v474 — DEPLOYED (live lq-v479, verified). al-Muʾminūn mid, all DONE.
| Ayah   | Version | Stage |
|--------|---------|-------|
| 23:62 | v470 | DONE |
| 23:66 | v472 | DONE |
| 23:75 | v473 | DONE |
| 23:78 | v474 | DONE |
| 23:84 | v471 | DONE |

### Batch v465–v469 — DEPLOYED (live lq-v469, verified). 5 ayat al-Muʾminūn, all DONE.
| Ayah   | Version | Stage |
|--------|---------|-------|
| 23:32 | v468 | DONE |
| 23:38 | v469 | DONE |
| 23:45 | v467 | DONE |
| 23:50 | v465 | DONE |
| 23:55 | v466 | DONE |

### Batch v460–v464 — DEPLOYED (live lq-v469, verified). al-Ḥajj tail + al-Muʾminūn start, all DONE.
| Ayah   | Version | Stage |
|--------|---------|-------|
| 22:65 | v460 | DONE |
| 22:71 | v461 | DONE |
| 23:6 | v464 | DONE |
| 23:20 | v463 | DONE |
| 23:27 | v462 | DONE |

### Batch v455–v459 — DEPLOYED (live lq-v459, verified). 5 ayat al-Ḥajj, all DONE.
| Ayah   | Version | Stage |
|--------|---------|-------|
| 22:26 | v457 | DONE |
| 22:35 | v458 | DONE |
| 22:40 | v459 | DONE |
| 22:53 | v456 | DONE |
| 22:58 | v455 | DONE |

### Batch v450–v454 — DEPLOYED (live lq-v459, verified). al-Anbiyāʾ tail + al-Ḥajj start, all DONE.
| Ayah   | Version | Stage |
|--------|---------|-------|
| 21:97 | v450 | DONE |
| 21:105 | v451 | DONE |
| 22:5 | v454 | DONE |
| 22:18 | v453 | DONE |
| 22:23 | v452 | DONE |

### Batch v445+ (claude-max; al-Anbiyāʾ — Ibrāhīm & the idols, Dāwūd/Sulaymān; deploy ~every 10)
| Ayah   | Version | Stage |
|--------|---------|-------|
| 21:54 | v446 | DONE |
| 21:61 | v449 | DONE |
| 21:66 | v448 | DONE |
| 21:72 | v445 | DONE |
| 21:79 | v447 | DONE |

### (done) Batch v440+ al-Anbiyāʾ: 21:16 v444, 21:19 v443, 21:25 v442, 21:41 v441, 21:47-48 v440

### (prev) Batch v430+ (claude-max; Ṭā-Hā — magicians & the calf; deploy ~every 10)
| Ayah   | Version | Stage |
|--------|---------|-------|
| 20:59 | v430 | DONE |
| 20:70-71 | v431 | DONE |
| 20:87 | v433 | DONE |
| 20:90 | v432 | DONE |
| 20:94 | v434 | DONE |
| 20:102 | v438 | DONE |
| 20:106 | v439 | DONE |
| 20:120 | v436 | DONE |
| 21:3 | v435 | DONE |
| 21:7 | v437 | DONE |

Stages: LAUNCHED → DRAFTED → MERGED+TESTED (uncommitted) → DONE. `ship.sh` sets
MERGED+TESTED. If a run died there, run the tests and commit; never re-merge.
Versions follow merge order, so fix a row when it differs. Next targets:
`node tools/wip/round11/queue.js`.

## SMALL TASKS (for WIND-DOWN: cheap, safe, nothing left half-done)
1. Push both remotes and deploy if any commit is undeployed; verify live `lq-vN`.
2. `node tools/wip/round11/prep.js <key>` for the next 2-3 queue targets (no model tokens).
3. Write 4-7 watch-points per prepped target under "Prepared watch-points" below,
   so the next run can launch at once.
4. Refresh the usage line in LIVE STATE with the reset time.
5. Report open items that need the user's decision; don't act on them.

## Prepared watch-points

**37:142** (Yunus swallowed by the fish, "wa huwa mulim"):
- SENSITIVE — never say in the article's own voice that Yunus "sinned." "Mulim" (Tabari/Qurtubi/Baghawi, all converge): "one who did what merits blame" — report the Qur'an's own word and the mufassirun's gloss, don't editorialize beyond it. as-Sa'di specifically glosses the blame as "mughadabatuhu li-rabbih" (his departure in anger, without leave) — cross-ref 21:87 ("dha-n-nun idh dhahaba mughadiban") and 68:48-50 ("sahib al-hut") as the Qur'an's own parallel accounts; classical understanding treats this as a prophetic lapse (tark al-awla), not a major sin, followed by immediate repentance (37:143-144's "if he had not been of those who glorify Allah" + the 21:87 dua "la ilaha illa anta subhanaka inni kuntu min az-zalimin").
- Mujahid/Qatada/Ibn Zayd (at-Tabari): "mulim" = "mudhnib" (one who erred) — name this gloss but keep it inside "what the mufassirun say the word means," not the article's own verdict on Yunus's standing.
- Strong hadith candidate (verify live via hadith.js, don't assume grading): Sahih Bukhari ~4603/3395-ish "whoever says I am better than Yunus bin Matta has lied" — verse-apt, specifically about not demeaning Yunus's honor; good counterweight to the "blameworthy" word so the article doesn't read as diminishing him.
- Ibn Kathir (ar) duration-in-the-fish dispute: 3 days (Qatada) / a week (Ja'far as-Sadiq) / 40 days (Abu Malik) / "swallowed at midday, cast out in the evening" (ash-Sha'bi) — "Allah knows best the actual duration," keep as an open, named range, don't pick one.
- Future ground: 37:143-148 (the repentance, the gourd vine, the 100,000+ people who believed) — don't pull forward in depth.

**37:150** (Or did We create the angels as females, while they were witnesses?):
- Not sensitive in dispute terms — all 6 fetched Arabic tafsirs converge: this rebukes the Meccan polytheists' claim that angels are female/daughters of Allah, pointing out they never witnessed the angels' creation. Near-verbatim parallel at 43:19 ("wa ja'alu al-mala'ikata... a-shahidu khalqahum") — cite as the Qur'an's own cross-reference, don't rebuild a full new argument.
- Keep neutral on angels' own nature: the verse denies the pagans' claim that angels are female; don't overclaim the opposite (that angels are "male") — classical position is that angels are not characterized by human gender categories at all.
- Future ground: 37:151-153 (the "Allah has begotten" lie, the daughters-over-sons rebuke) — 37:153 is prepped separately below, don't duplicate its qira'at point here.
- Ma'arif (en) file is large (4804 chars, grouped 37:149-157) — likely connects to 16:57-59 (Arabs hating daughters for themselves yet assigning them to Allah, a hypocrisy argument); reference 16:57-59 by number if the connection is natural, don't rebuild that verse's material.

**37:153** (Has He chosen daughters over sons?):
- Genuine qira'at/grammar point, not sensitive: "a-stafa" can be read with the interrogative hamza pronounced (istifham — "Has He chosen...?", the majority reading per at-Tabari, chosen by Kufan/Basran reciters) or read as a plain declarative continuing the prior sentence without the interrogative (a minority reading attributed to Abu Ja'far/Shaybah/Nafi'/Hamzah per al-Baghawi/al-Qurtubi) — both are named, attributed qira'at, not a live exegetical dispute; state briefly, don't overbuild a grammar lecture.
- Ibn Kathir (ar) cross-refs 17:40 (al-Isra) as the Qur'an's own parallel rebuke ("has your Lord favored you with sons and taken daughters from among the angels? Indeed you say a monstrous saying") — good anchor, quote/cite by number.
- Tone: this is Allah's own rebuke of a specific invented Meccan theological claim (that He has offspring, and specifically female offspring) — not a verse about women or daughters in general; keep the licensing/non-generalizing instinct in mind if the article drifts toward daughters-in-general commentary, redirect back to the theological claim being refuted.
- Future ground: 37:154-157 ("what is wrong with you, how do you judge," "do you have a clear authority," "bring your book if you are truthful") — don't pull forward.

## Recovery
- Drafter died: its files stay in `tools/wip/round11/<s>_<a>-*.js`. Run
  `node tools/wip/round11/gate.js <key>`, then resume the agent (SendMessage)
  or finish the files yourself. Never restart from scratch.
- The draft files never parse on their own (fragment format). That's normal.

## Open items (none blocking; the user decides)
- Pushing needs the gh active account = learnquranbd. If a push 403s as "miningshahin",
  run `gh auth switch --user learnquranbd` (both accounts are logged in). commit.sh
  attribution is now Opus 4.8.
- `bn.json` 6:110 drops the كما لم يؤمنوا به أول مرة clause.
- BANGLA-STYLE.md says `(আ)`; shipped articles use `(আঃ)` 819 times vs 24. Drafts
  follow the shipped form.
- Tailwind CDN swap is ready but blocked on a dark-mode accent choice. 17 MiB
  precache. The Hajj quick link shows in all 15 languages but points to a
  Bengali-only guide.
