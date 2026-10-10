# Tadabbur enrichment: live state

> New session? Read `docs/PROJECT-SUMMARY.md` first: the whole project on one page
> (architecture, modules, release steps, pipelines, next candidates, open items).

The method lives in `.claude/skills/tadabbur-enrich/SKILL.md`. This file is only
the state, kept short on purpose. Full history of earlier rounds:
`tools/wip/round11/HISTORY.md` (read only if needed).

## Start of every run (3 small commands)
1. `node tools/wip/round11/budget.js`: plan usage and the mode (NORMAL / LOW / STOP).
2. `git status --short && git log --oneline -3`
3. Use the table below. The first row that is not DONE is where to resume.

## USER QUEUE 3 (2026-10-10 evening): "Fix the language missing, for Tadabbur modules, enrich bangla if not good. Keep continue."
Measured: 1,061 cards = 6,778 EN strings / 226,910 words, 0% translated in all 13 languages (articles 31 MB en+bn: out of scope for now).
Tooling tools/tadabbur-i18n/ (lib, extract → work/C1..C10, BN-REVIEW.md + apply-bn.js, TRANSLATE.md + check-tr.js + merge-tr.js → data/content-i18n/tadabbur/<lang>.json).
Code: CI18N.tr(lang, en, ns) namespace files (js/content-i18n.js); tadabbur.js ci() uses ns 'tadabbur'. Not yet released.
| Work | Stage |
|---|---|
| BN review | ALL DONE + APPLIED: C1 500, C2 402, C3 295, C4 70, C5 130, C6 166, C7 200, sample 83 (C8-C10 left as is). v945 shipped C1-C4+C6; C5+C7 not yet released. EN fixed by hand: 23:20, 23:38, 11:88 |
| ur | COMPLETE 6,778/6,778, DEPLOYED v946 (cost ≈3% of 7d) |
| ar | COMPLETE 6,778, DEPLOYED v947 (every ﴿﴾ quote filled from quran-words via placeholders) |
| id | C1-C5 merged; C6 C7 RUNNING |
| hi | C1-C5 merged; C6 C7 RUNNING |
| EN fixed by hand (with bn + translated langs) | 23:20, 23:38, 11:88, 6:152 (weak misattributed report removed), 26:186, 31:34, 37:88, 39:67, 37:55, 34:13, 17:78-79, 4:78, 26:157, 26:208, 34:21, 37:45, 37:166, 38:78 |
| getSurahName | ar/fa now use arabicName (was English) |
| Theme chip labels (14) | DONE in all 13 shared dicts |
| Other languages | order ur, ar, hi, id, ms, tr, fa, fr, es, de, ru, zh, ja; size waves with budget.js |

## USER QUEUE 2 (2026-10-10 afternoon) — ALL DONE v944. Places (P1-P5) now use (আঃ) like the rest of the app. A) Places: more places + journeys (routes) + map graphics; B) Quranic Duas page (every dua, word by word, word counts) + virtues of surahs/ayat (graded hadith only).
| Item | Batch | Stage |
|---|---|---|
| Places | P4 (7) | MERGED (audit 0B 0M 4m), DEPLOYED v943 |
| Places | P5 (12) | MERGED (audit 0B 4M 2m), DEPLOYED v944 → 53 places |
| Journeys | J1 + J2 (12) | MERGED (J1 audit 0B 0M 5m; J2 0B 3M 2m), DEPLOYED v944 |
| Duas | 89 duas, 1255 words | DONE, DEPLOYED v943 (live md5 verified) |
| Virtues | 18 targets, 43 hadith | DONE (audit + confirm audit), DEPLOYED v943 |
| Code | quran-places.js journeys/labels/pan-zoom; js/quran-duas.js tab (registered everywhere) | DEPLOYED v943 (journeys.json is [] until the journeys are audited) |

## USER QUEUE (2026-10-10, "keep moving"): 1) Quranic Arabic Juz 28 (DONE v940) → 2) Mutashabihat notes (DONE v942) → 3) Places in the Quran map module (DONE v941). ALL THREE DONE 2026-10-10. Next: user's choice (see docs/PROJECT-SUMMARY.md 'Where things stand').

## Places in the Quran (queue item 3): DONE, DEPLOYED lq-v941 live-verified (md5). 34 places, all audited.
SVG map (data/places/basemap.json from Natural Earth via tools/places/build-map.js; source geojson in tools/places/work/, gitignored) + 34 places (tools/places/registry.js, batches P1-P3). Pipeline: BRIEF.md/AUDIT.md, validate.js (checks tafsir quotes against tools/themes/work/places-<id>/), merge.js → data/places/places.json. Module js/quran-places.js (QuranPlacesView, lazy bundle 'places', tab in Quran group after Nuzul), key places_title in all 15 packs.
| Batch | Places | Stage |
|---|---|---|
| P1 | 13 | MERGED (audit 1B 3M 8m) |
| P2 | 9 (Mūsā, Holy Land) | MERGED (audit 0B 3M 2m) |
| P3 | 12 (earlier nations, unknown) | MERGED (audit 0B 1M 11m) |

## Mutashabihat notes wave (queue item 2): DONE, DEPLOYED lq-v942 live-verified (md5). All 108 groups have an audited tip + per-ayah notes; 68 Bengali strings reworded without grammar terms. Group-membership doubts for the user: docs/mutashabihat-group-doubts.md (40 entries; regenerate with tools/mutashabihat/doubts.js).
Per group: a memory tip + a note per ayah on what is distinctive (description only, no reasons). Pipeline tools/mutashabihat/ (BRIEF.md, AUDIT.md, prep.js <batch> <first#> <last#>, validate.js, merge.js <batch> [--apply-audit] [--write] → data/mutashabihat-notes.json, precached in sw.js). Viewer: js/ayah-timeline.js opts.tip + opts.notes; js/mutashabihat.js loadNotes(). Viewer shipped v930. Mutashabihat commits skip the version bump; bump at deploy.
| Batch | Groups | Ayat | Stage |
|---|---|---|---|
| M1 | 1-7 | 72 | DONE v931 (audit 0B 0M 3m) |
| M2 | 8-17 | 64 | DONE v932 (audit 0B 0M 2m) |
| M3 | 18-29 | 61 | DONE v938 (audit 0B 1M 4m) |
| M4 | 30-43 | 60 | DONE (audit 0B 2M 7m) |
| M5 | 44-55 | 61 | DONE (audit 0B 1M 3m) |
| M6 | 56-68 | 61 | DONE (audit 0B 2M 6m) |
| M7 | 69-79 | 66 | DONE (audit 0B 1M 15m) |
| M8 | 80-92 | 64 | DONE (audit 0B 1M 5m) |
| M9 | 93-108 | 68 | DONE (audit 0B 0M 13m) |

## Quranic Arabic wave (user request 2026-10-10): DONE. Juz 28-30 (1,132 ayat, 274 reading lessons) DEPLOYED lq-v940 live-verified (md5). 73 corpus tagging errors in tools/qarabic/morphology-errors.json. Next juz (27) would need new parse files + units; not queued.
Goal: every ayah of Juz 30 parsed word by word, then Juz 29, then Juz 28. Pipeline in
`tools/qarabic/` (README: BRIEF.md drafter, AUDIT.md auditor): `prep.js <batch> <surahs>` →
drafter writes `work/<batch>/draft.json` → `validate.js <batch>` CLEAN → auditor `audit.json`
→ fixes → `merge.js <batch> --write` → `npm test` → bump → commit. Arabic, glosses and
translations are injected at merge from bundled data, never drafted.
Done in v913: `normalize.js` set 23 legacy tokens (tatweel/tanwin variants) to the text.
| Batch | Surahs | Ayat | Stage |
|---|---|---|---|
| T6 | 89 | 19 | DONE v913 (audit 0B 1M 4m, all fixed) |
| T1 | 78 86 | 41 | DONE v915 (audit 0B 3M 3m, all fixed) |
| T2 | 79 87 | 47 | DONE v916 (audit 0B 4M 2m, all fixed) |
| T3 | 80 82 | 50 | DONE v914 (audit 0B 2M 6m, all fixed) |
| T4 | 81 85 88 | 50 | DONE v917 (audit 7B 0M 4m, all fixed; innamā lesson rebuilt, confirm-read) |
| T5 | 83 84 | 47 | DONE v918 (audit 0B 2M 4m, all fixed) |

| Batch | Surahs | Ayat | Stage |
|---|---|---|---|
| U1 | 67 | 30 | DONE v920 (audit 2B 1M 2m, all fixed) |
| U2 | 68 | 52 | DONE v922 (audit 0B 1M 2m) |
| U3 | 69 | 52 | DONE v923 (audit 2B 4M 0m, all fixed) |
| U4 | 70 | 44 | DONE v921 (audit 0B 0M 2m) |
| U5 | 71 | 28 | DONE v919 (audit 0B 0M 1m) |
| U6 | 72 | 28 | DONE v924 (audit 0B 0M 2m) |
| U7 | 74 | 56 | DONE v926 (audit 0B 0M 4m) |
| U8 | 75 | 40 | DONE v925 (audit 0B 1M 3m) |
| U9 | 76 | 31 | DONE v927 (audit 2B 0M 2m, all fixed) |
| U10 | 77 | 50 | DRAFTED CLEAN, auditing |
| U11 | 73 | 20 | DONE v928 (audit 0B 0M 2m) |
Open (user decides): bundled data/wbw/en.json 76:20 glosses ثَمَّ as "then" (it is "there"; bn gloss is right). Shows in the Reading tab and in lesson read-76-6. Not edited: third-party data.

| Batch | Surahs | Words | Stage |
|---|---|---|---|
| V1 | 58 | 472 | DONE v936 (audit 0B 0M 3m) |
| V2 | 59 | 445 | DONE v934 (audit 0B 2M 5m) |
| V3 | 60 | 348 | DONE v935 (audit 0B 0M 1m) |
| V4 | 61 62 | 396 | DONE v933 (audit clean) |
| V5 | 63 64 | 421 | DONE v937 (audit 0B 1M 2m) |
| V6 | 65 | 287 | DONE v939 (audit 0B 1M 1m) |
| V7 | 66 | 249 | DONE v940 (audit 0B 1M 3m) |

## DONE: inline Tadabbur button (user request 2026-10-05): v692 be274a2, DEPLOYED lq-v692 live-verified. Keys ayah_tad_btn/ayah_tad_none (tadabbur_none was taken by the tab's search). Code: js/app.js toggleInlineTadabbur/renderInlineTadabbur.

## DONE: Mutashabihat 'Find similar' (user request 2026-10-06): v908 3e02972, DEPLOYED lq-v908 live-verified (mutashabihat.js md5, bn pack). Whole-Quran search by ayah, ayah part, or typed Arabic; exact / close / shares-part.
## DONE: Word Repeat Juz + whole-Quran lists (user request 2026-10-08): v909 d19422e, DEPLOYED lq-v909 live-verified (word-repeat.js md5, bn pack). Juz rail, whole-Quran ranking (exact/root), per-juz strip per word, paged lists.
## DONE (DEPLOYED lq-v911 live-verified: engine + 20 data md5, bn pack): Allah + Quranic Themes groups (user request 2026-10-08): v910 941141c + v911 24cbb85. 20 theme pages (js/theme-pages.js, data/themes/*.json), each drafted→audited→fix-checked; pipeline in tools/themes/ (BRIEF.md, AUDIT.md, prep/validate/merge.js), ledgers in tools/themes/work/ (gitignored).

## LIVE STATE (2026-10-06, WAVE 19 on claude-max: QUEUE COMPLETE. 1061 cards shipped, 0 targets left in tools/tadabbur-targets.json (759 targets / 784 ayat). DEPLOYED lq-v907.)

- DEPLOYED lq-v907 live-verified (101-114.js, tadabbur-data.js md5), both remotes pushed (185dec7). Undeployed: none. No drafters in flight. Wave 19 = v845-v907 (63 ayat). NEXT: the curated target list is exhausted. USER DECISION 2026-10-06: STOP HERE, Tadabbur left as is (no second pass, no open-item fixes for now). Module audit saved: docs/module-enrichment-audit-2026-10-06.md (thinnest: Islam rulings, Amal, Sawm/Zakat/Hajj; next-module choice is the user's). OPEN ITEMS: at-Tabari neighbouring-slot misfiling (BRIEF.md section 6 added; earlier articles not re-audited); bundled Bengali 89:18 adds 'orphan' (translator's wording, not changed); shipped Asbab module data/nuzul/asbab-meccan-famous.json (109:1) states the year-for-a-year offer as fact, Ibn Kathir has it only as 'qila' (not changed).
| Ayah | Version | Stage |
|------|---------|-------|
| 78:14 | v845 | DONE |
| 78:18 | v846 | DONE |
| 78:23 | v847 | DONE |
| 78:32 | v848 | DONE |
| 78:35 | v849 | DONE |
| 79:1 | v852 | DONE |
| 79:7 | v850 | DONE |
| 79:14 | v851 | DONE |
| 79:20 | v853 | DONE |
| 79:25 | v856 | DONE |
| 79:29 | v854 | DONE |
| 79:40 | v855 | DONE |
| 80:3 | v858 | DONE |
| 80:7 | v857 | DONE |
| 80:13 | v859 | DONE |
| 80:25 | v860 | DONE |
| 80:33 | v861 | DONE |
| 80:37 | v862 | DONE |
| 81:1 | v863 | DONE |
| 81:8 | v865 | DONE |
| 81:12 | v864 | DONE |
| 81:22 | v866 | DONE |
| 82:11 | v868 | DONE |
| 82:15 | v867 | DONE |
| 83:4 | v869 | DONE |
| 83:7 | v873 | DONE |
| 83:21 | v870 | DONE |
| 83:25 | v871 | DONE |
| 83:34 | v872 | DONE |
| 84:12-13 | v877 | DONE |
| 84:21 | v874 | DONE |
| 85:1 | v878 | DONE |
| 85:10 | v875 | DONE |
| 85:17 | v876 | DONE |
| 86:6 | v879 | DONE |
| 86:13 | v882 | DONE |
| 87:1 | v883 | DONE |
| 87:10 | v880 | DONE |
| 88:1 | v881 | DONE |
| 88:12 | v884 | DONE |
| 89:6-7 | v886 | DONE |
| 89:18 | v887 | DONE |
| 89:20 | v885 | DONE |
| 90:13 | v888 | DONE |
| 90:15 | v889 | DONE |
| 91:1 | v891 | DONE |
| 91:13 | v890 | DONE |
| 92:7 | v893 | DONE |
| 92:11 | v892 | DONE |
| 92:20 | v894 | DONE |
| 96:7 | v895 | DONE |
| 96:19 | v897 | DONE |
| 100:2 | v898 | DONE |
| 101:5 | v896 | DONE |
| 101:9 | v899 | DONE |
| 104:8 | v900 | DONE |
| 105:3 | v901 | DONE |
| 106:3 | v902 | DONE |
| 108:1 | v903 | DONE |
| 109:1 | v904 | DONE |
| 111:2 | v905 | DONE |
| 113:1 | v907 | DONE |
| 114:1 | v906 | DONE |

## LIVE STATE (2026-10-06, WAVE 18 on claude-pro: 5h ~59% (resets Tue 6 Oct 09:20), 7d ~85% (resets Sat 10 Oct 16:00); 5 drafters (5h room fits ~5))

- **BUDGET STOP after wave 18 (5h ~91% resets Tue 6 Oct 09:20; 7d ~90% resets Sat 10 Oct 16:00). WAVE 18 DONE v840-v844. DEPLOYED lq-v844 live-verified (77/78.js, tadabbur-data.js, sw.js md5), both remotes pushed (8279f78). Undeployed: none. No drafters in flight.** Next: queue.js (78:14 78:18 78:23 78:32 78:35 ...). 7d room is thin until Sat; size waves to fit.
| Ayah | Version | Stage |
|------|---------|-------|
| 77:20 | v840 | DONE |
| 77:31-32 | v841 | DONE |
| 77:38 | v843 | DONE |
| 77:44 | v842 | DONE |
| 78:3 | v844 | DONE |

## LIVE STATE (2026-10-06, WAVE 17 on claude-pro: 5h 2% (resets Tue 6 Oct 09:20), 7d 78% (resets Sat 10 Oct 16:00); USER: "10 ayah at a time" -> 10 drafters in parallel. Wave 15 measured ~62% 5h / 8% 7d for 10 ayat, so 10 fit)

- **WAVES 16+17 DONE: v826-v839. DEPLOYED lq-v839 live-verified (74-77.js, tadabbur-data.js, sw.js md5 match), both remotes pushed (3c9cd22). Undeployed: none.** Wave 17 measured: 5h 2->59% (57%), 7d 78->85% (7%) for 10 ayat.
- Review fixes: 74:11 cut Qurtubi qila "father unknown"; 75:31 cut Muslim 82 (unattached, takfir-adjacent). Bukhari 763 appears in both 77:1 and 77:8 (both surah-level, kept).
- Next wave sized to the 5h room (36% left -> 5 drafters): 77:20 77:31-32 77:38 77:44 78:3.
| Ayah | Version | Stage |
|------|---------|-------|
| 75:2 | v833 | DONE |
| 75:7 | v832 | DONE |
| 75:14 | v835 | DONE |
| 75:20 | v834 | DONE |
| 75:23 | v839 | DONE |
| 75:31 | v837 | DONE |
| 76:25 | v836 | DONE |
| 77:1 | v838 | DONE |
| 77:8 | v831 | DONE |
| 77:13 | v830 | DONE |

## LIVE STATE (2026-10-05 night, WAVE 16 on claude-pro: 5h 64% (resets Tue 6 Oct 02:30), 7d 73% (resets Sat 10 Oct 16:00), 6 fit; 6 drafters in parallel, then deploy + stop)

- **BUDGET STOP after v825 (5h 95%+, resets Tue 6 Oct 02:30; 7d ~77%, resets Sat 10 Oct 16:00). DEPLOYED lq-v824 live-verified (74.js md5), pushed 38b9d85. v825 (74:15) pushed + DEPLOYED lq-v825 live-verified.**
- RESUME: (2) 74:11 + 74:46 DRAFTED, gate clean, not shipped: run gate/ship/commit. 74:11 review: consider cutting Qurtubi's "it was said" al-wahid = unknown-father view (§7, ties to 68:13; lineage-sensitive). 74:46: §4 own-reading link 74:45->denial in company is flagged as own; Bukhari 1243 for 74:47 word only. (3) 74:23 DRAFTED, gate clean (Tabari cited from his 74:24 entry, said so; Quraysh reports from 74:18/74:22 entries attributed with chains; check Abu Jahl taunt vs 74:15 overlap). 74:31-32 DRAFTED, gate clean (Bukhari 3207 per Ibn Kathir, Bukhari wording; Tirmidhi atat dropped, unconfirmed). All 4 drafts: gate -> ship -> commit one at a time (v826-v829), then push + deploy. No drafters in flight.
- Wave 16 = 74:11 74:15 74:23 74:31-32 74:46 74:56. Drafters told to use unique /tmp names.
| Ayah | Version | Stage |
|------|---------|-------|
| 74:11 | v826 | DONE |
| 74:15 | v825 | DONE |
| 74:23 | v828 | DONE |
| 74:31-32 | v829 | DONE |
| 74:46 | v827 | DONE |
| 74:56 | v824 | DONE |

## LIVE STATE (2026-10-05 late, WAVE 15 on claude-pro: 5h 1% (resets Tue 6 Oct 02:30), 7d 65% (resets Sat 10 Oct 16:00), 25 fit, budget LOW; USER: "run 10 agents" -> 10 drafters in parallel)

- **WAVE 15 DONE: v814-v823. DEPLOYED lq-v823 live-verified (71/72/73/74.js md5 match), both remotes pushed (f05478f). Undeployed: none. No drafters in flight.** Budget after: 5h 63% (32% room), 7d 73% (22% room), 6 fit. Next: queue.js (starts 74:x).
- Review fixes: 71:23 dropped unfetched Muslim images mention; 74:1 dropped Qurtubi's secondhand Tirmidhi "hasan sahih"; 73:20 Bukhari 46 clipped quote -> description. 10 parallel drafters: give each unique /tmp names (74:1 clobbered 73:20's /tmp/addsec.py; harmless).
| Ayah | Version | Stage |
|------|---------|-------|
| 71:2 | v814 | DONE |
| 71:16 | v817 | DONE |
| 71:21 | v818 | DONE |
| 71:23 | v820 | DONE |
| 72:3 | v819 | DONE |
| 72:8 | v821 | DONE |
| 72:12 | v815 | DONE |
| 72:26 | v816 | DONE |
| 73:20 | v823 | DONE |
| 74:1 | v822 | DONE |

## LIVE STATE (2026-10-05 evening, WAVE 8 resumed ~19:30 on claude-max NORMAL: 5 drafters launched (56:62 56:69 56:77 56:84-85 56:91); earlier STOP after v773; 5h 95% (resets 21:10), 7d ~64% (resets Sat 10 Oct 16:00))

- **STOPPED at user request after wave 14. WAVES 13+14 DONE: v804-v813. DEPLOYED lq-v813 live-verified (69/70.js md5 match), both remotes pushed (da727f1). Undeployed: none. No drafters in flight.** Next (when told): queue.js (starts 70:x / 71:2). Safe to /clear.
- USER (this session): "stop after this wave" = wave 14 (v809-v813), then deploy, no wave 15.
- wave 13 DONE v804-v808 (69:31 69:35 69:51 69:41 70:4), committed, NOT YET DEPLOYED (deploy at v813). Wave 14 next.
- **WAVES 11+12 DONE: v794-v803. DEPLOYED lq-v803 live-verified (68/69.js md5 match), both remotes pushed (74053d2). Undeployed: none.** Wave 13 next (queue.js).
- wave 11 DONE v794-v798 (68:33 68:19 68:14 68:39 68:24), committed, NOT YET DEPLOYED (deploy at v803). Wave 12 next.
- **WAVES 9+10 DONE: v784-v793. DEPLOYED lq-v793 live-verified (59/60/61/63/64/65/67/68.js md5 match), both remotes pushed (a9327cf). Undeployed: none.** Wave 11 next (queue.js).
- 20:40: wave 9 DONE v784-v788 (63:3 64:3 61:14 59:2 60:1), committed, NOT YET DEPLOYED (deploy at v793). Wave 10 next.
- **WAVE 8 DONE: v768-v783. DEPLOYED lq-v783 live-verified (56/57/58.js md5 match), both remotes pushed (7eca08d). Undeployed: none.** Part 2 = 57:7 57:25 58:22 58:13 58:1 (v779-v783). Wave 9 next.
- (earlier 19:50) wave 8 part 1 DONE v774-v778 (56:77 56:62 56:84-85 56:69 56:91), committed, NOT YET DEPLOYED (deploy at v783). Part 2 launched: 57:7 57:25 58:1 58:13 58:22.
- (earlier) **STOP. DEPLOYED lq-v773 live-verified (sw.js, ayah-autolink.js, 56.js md5 match), both remotes pushed (f266ed3). Undeployed: none.** User mode: one ayah at a time. Next: 56:62 (prepped), 56:69 (prepped), 56:77, 56:84-85.
- v772 (user request): inside Tadabbur content ([data-tad-scope] on tab detail, reader inline panel, modal #sam-tadabbur) verse refs link only if that verse has a Tadabbur, opening ayahModal.open(ref,{tadabbur:true}); others + own ref stay plain. Code: js/ayah-autolink.js tadKeyFor, js/ayah-modal.js _showTad. Note: qa/run.js headless can't fetch verses (modal stays Loading); stub QuranData.fetchRange to test.

- 18:47: still WIND-DOWN (5h 89%). One-shot resume scheduled 21:17 (session-only, job e2cda7e7).
- **WIND-DOWN. DEPLOYED lq-v771 live-verified (sw.js + 56.js md5 match), both remotes pushed (189951e). Undeployed: none.** 56:62 + 56:69 prepped (PREP.md, no watch-points yet).

- Wave 7 queue: 55:35 55:37 55:54 55:62 55:68 55:76 56:4 56:10 56:17 56:22 (v758-v767).
- **WAVE 7 DONE: v758-v767. DEPLOYED lq-v767 live-verified (55.js/56.js md5 match), both remotes pushed (cc8fa01). Undeployed: none.** Wave 8 started (v768+).
- budget.js fix: skips cost pairs whose 7d jumps >25 (the account switch gave a false 61% 7d/ayah, forcing WIND-DOWN).
| Ayah | Version | Stage |
|------|---------|-------|
| 55:35 | v758 | DONE |
| 55:37 | v759 | DONE (warda/dihan kept as disagreements; Musnad narration unconfirmed, left out) |
| 55:54 | v760 | DONE |
| 55:62 | v761 | DONE (min dunihima sides named, no own ranking; Bukhari 4878 whole, narrator as Abdullah ibn Qais) |
| 55:68 | v762 | DONE |
| 55:76 | v763 | DONE (rafraf/'abqari glosses named; Bukhari 3682 for usage only; Tabari's "not preserved" kept) |
| 56:4 | v764 | DONE |
| 56:10 | v765 | DONE (two Ibn Abbas name-lists unweighed + no-living-group line; Musnad Ahmad report left out; Ibn Kathir's "al-Hadid 22" given as 57:21) |
| 56:17 | v766 | DONE (wildan identity views named, none settled; no hadith; Salman saying as his) |
| 56:22 | v767 | DONE (nom/gen/acc readings per Qurtubi/Tabari/Baghawi, Tabari: both correct; no hadith). DEPLOYED lq-v767 |
| 56:29 | v768 | DONE (talh banana vs thorny tree, conflicting attributions kept; Ali tal' reading with source chains, no grading; no hadith). Wave 8 queue: 56:41 56:47 56:52 56:62 56:69 56:77 56:84-85 +1 |
| 56:35 | v769 | DONE (hunna referent unsettled; Shama'il 239 whole with no-grading + chain-ends-at-al-Hasan caveat; Tirmidhi 3296 named as gharib, weak narrators, not quoted) |
| 56:41 | v770 | DONE (thin; two name-glosses unranked, four senses of the question; mash'ama/Adam's-left/56:9 not in its texts, left out; licensing both langs) |
| 56:47 | v771 | DONE (readings per Baghawi only, unranked; parallels not cited by sources, dropped; licensing both langs) |
| 56:52 | v773 | DONE |
| 56:62 | v775 | DONE |
| 56:69 | v777 | DONE |
| 56:77 | v774 | DONE |
| 56:84-85 | v776 | DONE |
| 56:91 | v778 | DONE |
| 57:7 | v779 | DONE |
| 57:25 | v780 | DONE |
| 58:1 | v783 | DONE |
| 59:2 | v787 | DONE |
| 60:1 | v788 | DONE |
| 65:12 | v793 | DONE |
| 67:8 | v791 | DONE |
| 67:19 | v790 | DONE |
| 67:26 | v789 | DONE |
| 68:11 | v792 | DONE |
| 68:14 | v796 | DONE |
| 68:19 | v795 | DONE |
| 68:24 | v798 | DONE |
| 68:43 | v799 | DONE |
| 68:48 | v802 | DONE |
| 69:5-6 | v803 | DONE |
| 69:31 | v804 | DONE |
| 69:35 | v805 | DONE |
| 69:41 | v807 | DONE |
| 69:51 | v806 | DONE |
| 70:4 | v808 | DONE |
| 70:8 | v812 | DONE |
| 70:13 | v813 | DONE |
| 70:30 | v811 | DONE |
| 70:32 | v810 | DONE |
| 70:40 | v809 | DONE |
| 69:13 | v801 | DONE |
| 69:25 | v800 | DONE |
| 68:33 | v794 | DONE |
| 68:39 | v797 | DONE |
| 61:14 | v786 | DONE |
| 63:3 | v784 | DONE |
| 64:3 | v785 | DONE |
| 58:13 | v782 | DONE |
| 58:22 | v781 | DONE |

## LIVE STATE (2026-10-05 ~15:00, re-login to claude-max, LOW: 5h 6%, 7d 91%, 3 fit; 1 drafter at a time)

- **STOPPED at user request after wave 6. WAVE 6 DONE: v748-v757 = 54:27 54:7 55:19 54:54 54:40 55:1 54:34 55:9 54:19 54:46. DEPLOYED lq-v757 live-verified (54.js md5 matches), both remotes pushed (a9d8ef2). Undeployed: none.** Notes: 54:46 Bukhari 4876 + 4877 whole, quranx typos shown bracketed; 54:40 Bukhari 4991 whole (seven ahruf), 4992 described; 55:1 Tirmidhi 3291 (gharib) whole, Ibn Mas'ud beating report kept chainless; 54:34 Bengali 'পায়ুকাম' once in an attributed Ibn Kathir (en) sentence; 55:9 no hadith. Next (when told): queue.js 10 (starts 55:x / 56:x). Safe to /clear.
- **STOPPED at user request after wave 5 (2026-10-05 ~15:00). WAVE 5 DONE: v738-v747 = 53:56 53:23 53:45 53:4 53:15 53:52 53:27 53:7 54:1 53:32. DEPLOYED lq-v747 live-verified (53.js/54.js md5 match), both remotes pushed (61707ae). Undeployed: none.** Notes: 53:15 no Ibn Kathir (503 + wrong group), no hadith attached; 53:4 Abu Dawud 3646 typo shown bracketed; 53:7 Muslim 177d/176b whole, split placed on 53:11-13; 54:1 Bukhari 4864/3868/4825 + Muslim 891; 53:32 Bukhari 6243, Muslim 2142/233, Tirmidhi 3284 hasan sahih gharib. Budget at stop: see budget.js (7d ~94-96%, resets 16:00). Next (when told): queue.js 10 (starts 54:x). Safe to /clear.
- **WAVE 4 DONE: v728-v737 = 52:31 52:17 52:20 51:32 51:28 52:29 52:10 52:4 51:39 52:39. DEPLOYED lq-v737 live-verified (51.js/52.js md5 match), both remotes pushed (9fa6112). Undeployed: none.** Notes: 52:17 Bukhari 3244 dropped (no tafsir attaches it); 52:4 Bukhari 3207 described not quoted, Muslim 162 paraphrased; 52:39 thin sources, own text observations from quran-json. Next wave 5: queue.js 10.
- **WAVE 3 DONE: v718-v727 = 51:12 50:23 50:9 51:1 51:15 50:29 50:20 50:2 49:3 50:40. DEPLOYED lq-v727 live-verified (49/50/51.js md5 match), both remotes pushed (b2d3b35). Undeployed: none.** Notes: 49:3 Bukhari 4845 last clause literal 'from his father, meaning Abu Bakr' (quranx EN says grandfather); 50:20 Tirmidhi 3243 hasan (Arabic); 50:2 Muslim 873b translated from Arabic; 50:40 nums false positive ('ninety-nine' in Muslim 597 quote); 50:29 Tabari 'both parties' trimmed. Next wave: queue.js 10 (user: 10 per wave until the limit).
- **SECOND BATCH DONE: v713-v717 = 47:36, 47:31, 48:8, 48:29, 48:17-18. DEPLOYED lq-v717 live-verified (47.js/48.js md5 match), both remotes pushed (a214474). Undeployed: none.** Notes: 47:36 '6:32' pointer is the drafter's own identification (Qurtubi says only 'in al-An'am'), worded so; 48:29 sect names left unnamed, Muslim 2586a + Bukhari 3673 whole; 48:17-18 four hadith (Muslim 1856, 2496, Bukhari 4154, 4163), narrator Umm Mubashshir per Muslim, Ma'arif sect passage dropped. Queue next: 49:3 then queue.js. Safe to /clear.
- **STOPPED (5 ayat done, user's "5 per session"): v708-v712 = 46:21, 46:24, 46:35, 47:4, 47:12. DEPLOYED lq-v712 live-verified (sw.js + 46.js/47.js md5 match), both remotes pushed (a21ef72). Undeployed: none.** Budget at stop: 5h 87% room, 7d 3% room (7d 91%+, resets Mon 5 Oct 16:00), WIND-DOWN. Queue next: 47:31 then queue.js. Notes: 46:35 Muslim 131 quranx typo shown as [if]; 46:21 Ibn Majah 3852 (no grading, none added); 46:24 Bukhari 4828; 47:12 Bukhari 5393 (general); 47:4 Bukhari 4372 whole, abrogation views named, licensing in both langs.

## LIVE STATE (2026-10-05 09:57, resumed after reset, NORMAL 7 fit)

- **STOPPED at budget ~12:35: 5h 93% (resets Mon 5 Oct 14:50), 7d 56%. DEPLOYED lq-v707 live-verified, both remotes pushed (311ede2). Undeployed: none.** This window: v692 button + 15 ayat v693-v707. Resume cron 14:57 (session-only). Queue next: 46:21 46:24 46:35 (queue.js).

- Tadabbur button: DONE v692, deployed lq-v692.
| Ayah | Version | Stage |
|------|---------|-------|
| 44:3 | v693 | DONE (Qadr vs mid-Sha'ban kept, Ikrima named; Ibn Kathir's 'mursal, not set against the texts' verified in his Arabic; Wathila list = Qurtubi/Ma'arif's report, unconfirmed, not relied on; Ibn Majah 1390 checked, dropped (different wording, no grading); 23 yrs (Qurtubi) vs 20 (Baghawi) both kept; licensing both langs). deployed lq-v702 |
| 44:8 | v694 | DONE (thin sources, 1,420 words; rabb = malik (Tabari/Qurtubi) beside Sa'di's nurturer reading; addressees only per Tabari/Muyassar, Makkah not named; 7:158 per Ibn Kathir, verified; 26:26/2:258 left out, not cited; no hadith; licensing both langs). deployed lq-v702 |
| 44:17-18 | v695 | DONE ('ibad Allah object (Mujahid/Qatada/Ibn Zayd via Tabari, Tabari's pref) vs vocative (Ibn 'Abbas per Qurtubi; Tabari files the same report under his reading, both reported) + Qurtubi's 'your hearing'; 20:47 + 26:17 as cited, verified; 'Copts' dropped; no hadith; licensing both langs). deployed lq-v702 |
| 44:25 | v696 | DONE (thin, 1,416 words; Qurtubi's al-Shu'ara pointer matched to 26:57 (drafter's choice, said so); removed vs left contrast; Sa'di's heirs (44:28) not developed; 'Copts' dropped; no geography; licensing both langs). deployed lq-v702 |
| 44:30 | v697 | DONE (thin; torment contents per source, women kept alive (Qatada) vs put to service (Muyassar/Qurtubi) kept; Qurtubi's 'Copts' dropped on review (consistency with 44:17-18, 44:25); Ibn Kathir (en) wrong-coverage file not used; no cross-refs cited; 44:32-33 untouched; licensing both langs). deployed lq-v702 |
| 44:43 | v698 | DONE (Qurtubi's open-ta note verified vs 37:62 in data; Abu Jahl only via Ibn Kathir's 'more than one', no chain; butter-and-dates not in fetched texts, left out; Tirmidhi 2585 whole, hasan sahih re-verified in its Arabic, marked as said after 3:102; Abu al-Darda 'al-fajir' report attributed, no ruling drawn; 37:64 per Muyassar/Ma'arif; licensing both langs). deployed lq-v702 |
| 44:51 | v699 | DONE (muqam/maqam: Tabari (Madinah vs Kufah+Basrah, no pref), Qurtubi (Nafi', Ibn 'Amir), Baghawi, verified; Tabari's editor-flagged 'min al-za'n' clause not attributed; amin glosses per source; no parallels, no hadith). deployed lq-v702 |
| 44:58 | v700 | DONE (bi-lisanika: tongue (Baghawi) vs language (Muyassar/Qurtubi) vs ease of recitation (Tabari, verified) + Ibn Zayd; 'Arabic' not in texts, not used; 44:3/97:1/54:17 link only via Qurtubi; Ibn Kathir ar 'yatafahhamun wa ya'malun' vs en 'understand and know' named, verified; licensing both langs). deployed lq-v702 |
| 45:4 | v701 | DONE (ayatun/ayatin: Tabari no pref (both sound), Qurtubi Hamza+Kisa'i, Baghawi adds Ya'qub, verified; endings: Ibn Kathir en ascending vs Ma'arif by beneficiary, kept; Farra' (footnote only) + Razi (unconfirmed) dropped; no biology; no hadith). deployed lq-v702 |
| 45:12 | v702 | DONE (thin, 1,594 words; no parallels cited (none in fetched 45:12 texts); Sa'di's command+ease; Ma'arif's three senses unranked, its oceans remark marked as its own; no hadith; licensing both langs for 45:7-9 framing). DEPLOYED lq-v702 live-verified, both remotes pushed d57ebd7 |
| 45:22 | v703 | DONE (thin; 'wa li-tujza' join not explained by any text, said so; bi-l-haqq glosses unranked; no cross-refs (none cited); Tamim ad-Dari report (45:21, Tabarani) dropped; heading de-transliterated; licensing both langs). deployed lq-v707 |
| 45:27 | v704 | DONE (mubtilun 4 glosses + loss 3 glosses attributed; Qurtubi's doubled 'Day' readings unranked; Sufyan ath-Thawri/al-Ma'afiri via Ibn Abi Hatim per Ibn Kathir, no chain/grading, said so; 40:78-79 not cited (none in texts); Ma'arif (45:24 only) not named; licensing both langs). deployed lq-v707 |
| 45:32 | v705 | DONE (sa'atu/sa'ata: Tabari both correct, Qurtubi/Baghawi Hamza, verified; in nazunnu: Qurtubi's 3 (al-Mubarrad first, verified) unranked; frame per Tabari/Sa'di; 45:24/45:26 links marked own; doubters today not the speakers; licensing both langs). deployed lq-v707 |
| 46:3 | v706 | DONE (bi-l-haqq: Tabari vs Muyassar vs Qurtubi's two, unranked; ajal musamma: Resurrection (Ibn 'Abbas via Qurtubi, Baghawi) vs each thing's term; 53:31 per Qurtubi, verified; 'lahun' in Ibn Kathir+Qurtubi verified; Ma'arif wrong group not used; licensing both langs). deployed lq-v707 |
| 46:10 | v707 | DONE (witness: Ibn Salam vs Masruq/Sha'bi kept; Tabari's own text vs Ibn Kathir's 'chosen by Ibn Jarir' both reported; Bukhari 3812 whole from Arabic incl. 'la adri' note (absent in quranx EN); Tirmidhi 3256 hasan gharib, 3803 gharib, verified; Ma'arif 'Jews and Christians' + Qurtubi 'witnessed against the Jews' dropped; licensing both langs). DEPLOYED lq-v707 live-verified, pushed 311ede2 |

## LIVE STATE (2026-10-05 07:30, USER OVERRIDE at WIND-DOWN: "continue, 1 ayah at a time")

- **STOPPED at budget (5h 0% room, resets Mon 5 Oct 09:50; 7d 56% room). Undeployed: none. Session: v690-v691.** Next: NEXT SESSION TASK (tadabbur button) then queue.js (44:3 44:8 ...).
- User (07:45): run until the limit, push + deploy, then resume after reset (one-shot resume scheduled 09:57, session-only).
- Budget at launch: [claude-pro] 5h 83% (12% room, resets Mon 5 Oct 09:50), 7d 37%. 0 fit by safe est (13.2%); median measured ~6%.
| Ayah | Version | Stage |
|------|---------|-------|
| 43:81 | v690 | DONE (in: if (Tabari pref, Mahdawi, Ibn Kathir) vs not, as-Suddi placed differently by Qurtubi vs Tabari/Baghawi, said so; 'abidin worshippers vs disdainers kept open; Ibn Kathir's 'both forms' line hedged as 'the text he gives'; no hadith attaches; licensing both langs). DEPLOYED lq-v690 live-verified, both remotes pushed 1b11b18 |
| 43:85 | v691 | DONE (tabaraka glosses attributed; turja'un/yurja'un per Qurtubi+Baghawi, Hamza difference kept; 41:47 one pointer, Bukhari 50 not repeated; no hadith attaches; reciter Ibn Kathir grounded in Qurtubi's qara'a; licensing both langs). DEPLOYED lq-v691 live-verified, both remotes pushed e5e801b |

## LIVE STATE (updated 2026-10-05, DEPLOYED lq-v689, WIND-DOWN, no drafters in flight)

- Budget at launch: [claude-pro] 5h 1% (resets Mon 5 Oct 09:50), 7d 26% (resets Sat 10 Oct 16:00), 9 fit, NORMAL. budget.js caps claude-pro at 2; user asked for 5 ("initially run 5/10 agents").
- **DEPLOYED lq-v689 live-verified (sw.js cache-buster; live 43.js md5 matches local); both remotes pushed (adccab1).** Undeployed: none.
- Session total: 14 ayat, v676-v689 (deploys lq-v685, lq-v688, lq-v689). Budget at stop: 5h 13% room (resets Mon 5 Oct 09:50), 7d 58% room (resets Sat 10 Oct 16:00), WIND-DOWN. Safe to /clear.
- Next session: "read CLAUDE-LOG.md and continue." Queue: 43:81 43:85, then queue.js.
- **DEPLOYED lq-v685 live-verified (sw.js cache-buster; live 42.js + 43.js md5 match local); both remotes pushed (9146c8b).** Budget after v685: 5h 37% room (resets Mon 5 Oct 09:50), 7d 62% room, MODE LOW.
- Small task: as-Sa'di API entries are shifted one verse back around 43:35-37 (his 43:36 comment sits in the API 43:35 entry); prep.js does not detect it. Drafter caught it for 43:36.
- Wave 1: v676 42:42, v677 42:52, v678 43:11-12, v679 42:33 committed (UNDEPLOYED, not pushed). 5h room 66% after v679; wave 2 (4) launched with 43:3 still in flight = 5. Deploy at v685 (tenth). Ship.sh then commit.sh ONE key at a time.
| Ayah | Version | Stage |
|------|---------|-------|
| 42:33 | v679 | DONE |
| 42:42 | v676 | DONE |
| 42:52 | v677 | DONE |
| 43:3 | v680 | DONE |
| 43:11-12 | v678 | DONE |
| 43:22 | v682 | DONE |
| 43:24 | v683 | DONE |
| 43:36 | v681 | DONE |
| 43:47 | v684 | DONE |
| 43:53 | v685 | DONE |
| 43:59 | v686 | DONE |
| 43:65 | v687 | DONE |
| 43:70 | v688 | DONE (deployed lq-v688, live-verified, both remotes pushed 63eab12) |
| 43:73 | v689 | DONE |

## LIVE STATE (updated 2026-10-04 evening, DEPLOYED lq-v675, WIND-DOWN, no drafters in flight)

- Budget at launch: [claude-pro] 5h 1% (resets Mon 5 Oct 01:20), 7d 13% (resets Sat 10 Oct 16:00), 11 fit, NORMAL. budget.js caps claude-pro at 2, but the user asked to start with 5 ("initially run 5/10 agents").
- Lesson: ship.sh then commit.sh ONE key at a time. 40:64 + 40:67 were both shipped before committing, so they share commit 5401852 (v664-v665). Resetting the working tree to split them was refused by the permission guard.
- **DEPLOYED lq-v675 live-verified (sw.js cache-buster; live 42.js md5 matches local); both remotes pushed (8e5b054).** Undeployed: none.
- Session total: 14 ayat, v662-v675 (deploys lq-v671, lq-v674, lq-v675). Budget at stop: 5h 93% used (resets Mon 5 Oct 01:20), 7d 31% (resets Sat 10 Oct 16:00). Safe to /clear.
- Cost note: 5 parallel drafters took 5h from 1% to ~27% in one wave (~5-6% per ayah, same as serial).
- Next session: "read CLAUDE-LOG.md and continue." Queue: 42:33, then queue.js.
- Uncommitted, not mine: SKILL.md (account-cap text) and package.json (devDeps reorder). Leave them alone; commit.sh only stages js/index.html/sw.js.
| Ayah | Version | Stage |
|------|---------|-------|
| 40:51 | v662 | DONE (killed messengers: each tafsir's answer named, Sha'ya/Yahya/Zakariyya only as the Arabic sources name them; Ma'arif's "Shu'aib" dropped as a confusion; Ibn Kathir's "from the Jews" and Baghawi's 70,000 dropped; Bukhari 6502 confirmed but not quoted: too long, not tied to the verse) |
| 41:3 | v663 | DONE (fussilat + li-qawmin ya'lamun glosses side by side; Tabari text truncated, only the Basran grammar view reported; surah-name origin dropped, not in fetched texts; 12:2/43:3/26:195 dropped; licensing both langs) |
| 40:64 | v664 | DONE (combined commit 5401852 with 40:67; qarar/bina'/tayyibat glosses attributed; 2:22 + 95:4 verified; 82:7-8 dropped; Ma'arif's 'Best Creator' gloss for tabaraka not used) |
| 40:67 | v665 | DONE (combined commit 5401852; no embryology claim; no age for ashudd in fetched texts, said so; min qablu kept open; 22:5 per Ibn Kathir; Bukhari 3208 quoted whole from quranx EN, marked as not attached by any tafsir, its unbalanced bracket kept verbatim) |
| 40:78-79 | v666 | DONE (no link between the two verses in fetched texts, said so; no prophet numbers, Tabari's Anas/Salman/'Ali reports dropped, ungraded; 4:164 matched from Ibn Kathir's wording; Day of Resurrection gloss not in fetched texts, said so; animals kept as a disagreement; licensing both langs) |
| 41:12 | v667 | DONE (four-including-two (Ibn Kathir) vs two-besides-four (Qurtubi); Muslim 2789 described, not quoted, with Ibn Kathir's al-Tarikh critique as fetched; Ibn 'Abbas answer marked a Companion's, no number; 37:6-10/67:5 not cited, dropped; licensing both langs) |
| 41:16 | v671 | DONE (Bukhari 1035 whole, marked general; Qurtubi/Ma'arif 'only on Wednesday' report dropped (superstition risk; Ma'arif's own 'no day unlucky' kept, attributed); Jabir rain/wind saying dropped, ungraded; 69:7 per Ibn Kathir/Sa'di; licensing both langs incl. no day cursed) |
| 41:47 | v672 | DONE (Bukhari 50 Hour passage quoted from quranx EN, framed as part of the longer Jibril report; portents marked outside this verse, no fetched tafsir explains them (fix after review); 31:34 only as recited in the hadith; adhannaka speaker: Qurtubi's 3 views vs the idolaters; Qurtubi's chainless occasion dropped; licensing both langs) |
| 42:5 | v673 | DONE (awe vs the son-claim (Baghawi, 19:88-90) kept, Ibn 'Abbas both ways; 'thiql ar-Rahman' quoted as Tabari gives it, verified; Ka'b's Throne report dropped; all-on-earth vs believers: Qurtubi's material in order, unreconciled; Tirmidhi 2312 dropped (not in fetched tafsir, clauses unexplained); licensing both langs) |
| 42:7 | v674 | DONE (Tirmidhi 2141 whole over 4 paras, grading hasan gharib sahih verified in its Arabic; 3925 hasan sahih gharib per page, not Ibn Kathir's 'hasan sahih'; Abu Firas mawquf + Ibn Kathir's remark dropped; universality: narrow-to-wide range reported, 25:1/7:158/34:28 not cited; Day of Gathering only fetched glosses; licensing both langs) |
| 42:13 | v675 | DONE (Bukhari 3443 whole, glossed by Ibn Kathir; nearness clause carried by 3442 quoted whole beside it; 4712 confirmed, not quoted; ulu-l-'azm vs law-bearers (Qurtubi) kept; division scope Sa'di vs Ma'arif kept; 5:48 cited by 3 tafsirs; no group named; Ma'arif's jama'a hadiths dropped, unconfirmed; licensing both langs) |
| 41:22 | v668 | DONE (Bukhari 4817 quoted whole over two paragraphs, quranx EN; 4816 and Ka'ba-coverings chains not blended; Tirmidhi grading not stated, secondhand only; tastatirun 3 readings named; speaker disagreement kept; licensing both langs) |
| 41:25 | v670 | DONE (companions: devils vs devils of jinn and men, attributed; assignment vs responsibility only Ibn Kathir/Tabari/Sa'di, no own theology; 5 'before/behind' glosses; 43:36-37 + 19:83 verified; no hadith; licensing both langs) |
| 41:37 | v669 | DONE (sajda place 41:37 (Malik) vs 41:38 (Ibn Wahb, Shafi'i, Abu Hanifa) per Qurtubi, no ruling; mushaf ۩ at 41:38 noted from PREP; Bukhari 1041 whole, marked general; Ma'arif fiqh attributed; no community named; licensing both langs) |

## LIVE STATE (earlier 2026-10-04, DEPLOYED lq-v661, STOPPED at budget, no drafters in flight)

- **DEPLOYED: lq-v661 live-verified (sw.js cache-buster; live 40.js md5 matches local); both remotes pushed (e0275ec).** Undeployed: none.
- 40:40 v661 DONE (speaker: within the believer's speech, but Ibn Kathir's English introduces 40:40 with "Allah says"; both reported, unresolved; evil deed = shirk (Qatada/Qurtubi) vs any sin (Tabari/Muyassar/Sa'di) kept; 3 bi-ghayri hisab glosses; no hadith, no cross-refs).
- Session total: 14 ayat, v648-v661. Budget at stop: 5h ~90% used (resets Sun 4 Oct 14:30), 7d 12% (resets Sat 10 Oct 16:00). Safe to /clear.
- Next session: "read CLAUDE-LOG.md and continue." Queue: 40:51 (prepped, watch-points below), then 40:64 40:67 40:78-79.

## LIVE STATE (earlier 2026-10-04 ~10:35, USER OVERRIDE at WIND-DOWN: 1 drafter, 40:40)

- **origin MERGED + both remotes pushed (cfc8bea, user's call).** The merge tracks CLAUDE-LOG.md and tools/wip/round11. .gitignore conflict resolved to `tools/wip/*` + `!tools/wip/round11/` (other old wip stays ignored); the CLAUDE-LOG.md ignore line dropped. The merge overwrote the local log and round11 with the Oct 3 copies; restored from /var/www/html/learnquranbd/merge-backup-20261004-1031 (delete once happy). Newer round11/log changes are uncommitted working-tree changes; commit.sh only stages js/index.html/sw.js.
- User said "continue, still 15% limit remain" at 5h 85% (budget.js: 0 fit, safe est 13%). 1 drafter: 40:40 LAUNCHED (PREP.md in audit/40_40/). If it dies at the limit: gate, then finish by hand (Recovery below).

## LIVE STATE (earlier 2026-10-04, DEPLOYED lq-v660, WIND-DOWN; origin push was BLOCKED, now merged above)

- **DEPLOYED (2026-10-04): lq-v660 live-verified (sw.js cache-buster; live 40.js md5 matches local). `pro` pushed (097a717). `origin` still not pushed (see the blocked push below).** Undeployed: none.
- This session: 13 ayat, v648-v660 (two deploys: lq-v657 and lq-v660). Budget at stop: 5h 84% used (resets Sun 4 Oct 14:30), 7d 11% (resets Sat 10 Oct 16:00). WIND-DOWN, 0 fit. No drafters in flight, safe to /clear.
- Next session: "read CLAUDE-LOG.md and continue." Queue: 40:40 40:51 (prepped, watch-points below), then 40:64 40:67 40:78-79.

## LIVE STATE (earlier 2026-10-04, DEPLOYED lq-v657; origin push BLOCKED, user decides)

- **DEPLOYED (2026-10-04): lq-v657 live-verified (sw.js cache-buster; live 39.js and 40.js md5 match local).** `pro` pushed (48d3fa0). **`origin` push REJECTED (non-fast-forward):** origin has 2 user commits from 2026-10-03 12:33 not in local main: d43a81f "added claude-log" (tracks CLAUDE-LOG.md) and 3a1c739 "Track tools/wip/round11 pipeline scaffolding" (4,961 files). Local 4335608 (12:51, later) ignores CLAUDE-LOG.md and the skill keeps round11 local-only, so no merge and no force-push; the user decides (merge origin/main, or force-push to drop those two).
- 10 ayat this window: v648-v657 = 39:12, 38:85, 39:27, 39:29, 39:60, 39:46-47, 39:67, 39:73, 40:15, 40:8.

- Budget at launch: 5h 0%, 7d 0% (5h resets Sun 4 Oct 14:30; 7d resets Sat 10 Oct 16:00), 11 fit.
  | Ayah | Version | Stage |
  |------|---------|-------|
  | 38:85 | v649 | DONE (Bukhari 4850 dropped: extracts only, full text's sifat clause unexplained in fetched sources; §6 rebuilt on 14:22 + 18:49, verified; minhum = part of Adam's children; minka offspring difference kept) |
  | 39:12 | v648 | DONE (time vs example kept with names; no rank reading attributed; 5 cross-refs verified in quran-json) |
  | 39:27 | v650 | DONE (4 mathal glosses named, none picked; parallels only 30:28, 29:43, 6:38 as cited by fetched tafsirs; licensing sentence for Tabari's past-nations reading) |
  | 39:29 | v651 | DONE (mushrik/muwahhid per Sa'di, mukhlis per Ibn Kathir; slave reading kept as commentators' frame; saliman/salaman/silman attributed, checked vs Tabari/Baghawi; 23:50 verified; licensing both langs) |
  | 39:46-47 | v653 | DONE (Muslim 770 quoted whole; narrator Abu Salamah per the Arabic chain, quranx English drops 'Abu Salama'; 5 yahtasibun glosses named; 3:91 + 26:88-89 only as cited; Ahmad/Tirmidhi dua reports dropped, unconfirmed) |
  | 39:60 | v652 | DONE (Muslim 91a rendered from its Arabic, mithqal dharra = speck, whole; Tirmidhi 2492 whole, hasan per page; 3:106 via Ibn Kathir's quote; Ibn Kathir's ahl al-firqa line dropped as sectarian; licensing both langs) |
  | 39:67 | v654 | DONE (SIFAT: Ibn Kathir/Muyassar affirm vs Tabari-rejected Basran 'power' vs Qurtubi power+possession vs Ma'arif; no position; jariha line = an-Nahhas via Qurtubi, verified; Bukhari 4811 + 4812 whole from Arabic, 'laughed' = fa-dahika; 6:91/22:74 not cited, not used; licensing both langs) |
  | 39:73 | v655 | DONE (waw: 4 explanations attributed, waw ath-thamaniya reported by Qurtubi, rejected by Ibn Kathir; gates open (Baghawi/Qurtubi) vs after intercession (Sa'di) kept; Bukhari 6535 + 3257 whole, quranx EN with translator brackets; 9 sections, gate clean) |
  | 40:8 | v657 | DONE (relatives joined by own righteousness in every tafsir, raised rank by grace (Ibn Kathir/Tabari/Ma'arif); 52:21 + 13:23 verified; Ka'b's palaces report marked as Ka'b's; Muslim 2732b rendered whole from its Arabic, marked general; 'cooled eyes' gloss dropped, from memory) |
  | 40:15 | v656 | DONE (ruh 5 glosses attributed, none picked; rafi' ad-darajat both readings named; Yawm at-Talaq meetings attributed; no hadith attaches; Ibn Kathir ruby-Throne report + 40:16-17 material dropped; BN names Ibn as-Samayfa'/Maymun b. Mihran new spellings) |
- Budget after v659: 5h 78% used, 7d 10%, MODE LOW (1 fit). 5h resets 14:30. Undeployed: v658, v659.
- **Batch v658+ (MODE LOW, 1 at a time):**
  | 40:24 | v658 | DONE (triad reason = Qurtubi's madar at-tadbir; Haman only as wazir; 51:52-53 per Ibn Kathir; 28:76 + 29:39 one-line pointers, verified; no hadith; licensing both langs) |
  | 40:27 | v659 | DONE (addressees per Tabari/Muyassar/Ibn Kathir, no reason for 'and your Lord' in fetched texts, said so; mutakabbir general; Musa's state only via the texts' verbs; Abu Dawud 1537 whole, page shows no grading, none added; licensing both langs) |
  | 40:31 | v660 | DONE (believer's speech per Tabari; 5 da'b glosses attributed; 'those after them' named only by Tabari (Ibrahim's and Lut's people), Madyan not invented; no-wrong: no punishment without sin vs not before the proof (Baghawi); Qurtubi silent, said so; no hadith, no cross-refs; licensing both langs) |

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

**41:12** (seven heavens completed in two days; each heaven's command; nearest heaven adorned with lamps and as protection) — PREP.md in audit/41_12/:
- "two days" with 41:9-10 (earth in two, provisions in four): report the fetched tafsirs' day count reconciliation (the four include the two, etc.), attributed. No modern cosmology in own voice.
- "awha fi kulli sama'in amraha": name the glosses (its inhabitants/angels, what He decreed in it), attributed.
- "hifzan": protection from devils eavesdropping; cross-refs (37:6-10, 67:5) only if fetched; verify in quran-json.
- Sequence dispute (earth before heaven vs 79:30) only if a fetched tafsir raises it; attributed, no own harmonisation.
- Future ground: 41:13 (warning of a thunderbolt like 'Ad and Thamud). Don't pull forward.

**41:16** (a screaming wind on ill-omened days, the punishment of disgrace; the Hereafter's more disgracing):
- Condemned people ('Ad): licensing sentence in both languages.
- "sarsar": name the glosses (cold, loud/roaring), attributed. "ayyam nahisat": ill-omened for them specifically, per the fetched tafsirs; no claim that days are unlucky in themselves in own voice. Number of days (69:7, seven nights eight days) only if fetched; verify in quran-json.
- Future ground: 41:17 (Thamud). 41:15 (their arrogance) is context, one line.

**41:22** (you did not hide from your hearing, sight and skins testifying; you thought Allah does not know much of what you do):
- Hadith: Ibn Mas'ud's report on this verse's occasion (three men at the Ka'ba, Bukhari/Muslim) only if confirmed via hadith.js on a quranx page, quoted whole, collector's grading.
- "tastatirun": name the glosses (you were not hiding / could not hide / did not fear), attributed.
- Licensing sentence if the article addresses the addressed group (a'da' Allah of 41:19).
- Shipped overlap: none near. Future ground: 41:23 (that assumption ruined you). 41:20-21 (the skins speak) context, one line.

**41:25** (We assigned them companions who adorned what was before and behind them; the word came true against them among past nations of jinn and men):
- "qayyadna lahum quranā'": name who the companions are per fetched tafsirs (devils, evil human companions), attributed. Divine assignment vs responsibility: only the fetched tafsirs' explanation, no kalam from memory.
- "ma bayna aydihim wa ma khalfahum": name the glosses (worldly life vs the Hereafter, etc.), attributed.
- Licensing sentence in both languages. Cross-ref 43:36 only if fetched.
- Future ground: 41:26 ("do not listen to this Qur'an"). Don't pull forward.

**41:37** (night, day, sun and moon are His signs; do not prostrate to the sun or the moon):
- Sajda: whether 41:37 or 41:38 is the place of prostration is a real dispute; name each side as fetched (e.g. Shafi'i/Maliki vs Hanafi/others), attributed. No ruling in own voice.
- "khalaqahunna" feminine plural: grammar only as fetched.
- Shipped overlap: 41:33-34 and 41:53 shipped, one line at most each. Future ground: 41:38-39.
- Hadith on prostrating to Allah only (e.g. eclipse prayer) only if confirmed via hadith.js, quoted whole.

**40:40** (an evil deed is recompensed only with its like; whoever does righteous deeds, male or female, as a believer, enters Paradise, provided for without account) — PREP.md in audit/40_40/:
- Still the believer of Fir'awn's family speaking (40:38-44). Report it as his speech, as the tafsirs frame it.
- "min dhakarin aw untha": equality of men and women in reward, kept to what the text and fetched tafsirs say. Cross-refs 3:195, 4:124, 16:97 only if a fetched tafsir cites them; verify each in quran-json.
- "illa mithlaha" vs the multiplied reward for good: report the fetched tafsirs' explanations (justice for evil, grace for good), attributed. A hadith on multiplied reward (e.g. Bukhari 6491, "whoever intends a good deed...") only if confirmed via hadith.js and quoted whole.
- "bi-ghayri hisab": name each gloss (without measure, without reckoning, beyond expectation), attributed.
- Shipped overlap: 40:44 (same speaker, shipped) gets one line at most. Future ground: 40:41-43.

**40:51** (We will surely help Our messengers and the believers in this world and on the Day the witnesses stand):
- SENSITIVE: "help in this world" vs messengers who were killed (e.g. Yahya, Zakariyya per some reports). Report how the fetched tafsirs reconcile this (help by proof, by vengeance after them, by the outcome), each attributed; no reconciliation of your own.
- "al-ashhad": name the witnesses the tafsirs list (angels, prophets, believers, limbs), attributed.
- Licensing sentence if the article addresses the opponents of the messengers as a group.
- Future ground: 40:52 (the wrongdoers' excuse won't benefit them). Don't pull forward.

**40:8** (the Throne-bearers' dua: admit them to the Gardens of 'Adn, with the righteous among their fathers, spouses and offspring) — PREP.md in audit/40_8/:
- Speaker continuity: this continues the angels' dua from 40:7. Shipped overlap: check whether 40:7 is shipped (PREP neighbour headings) and don't rebuild it.
- "wa man salaha": report the fetched tafsirs on whether the joining is by the relatives' own righteousness, with 52:21 (ilhaq adh-dhurriyya) only if a fetched tafsir cites it; verify in quran-json.
- "'Adn": name the glosses (residence, a specific garden), attributed.
- Spouses/offspring: a family-reunion reading; no women-specific generalisation beyond the text.
- Future ground: 40:9 (protect them from evils). Don't pull forward.

**40:15** (Rafi' ad-darajat, Dhu-l-'Arsh, He casts the ruh of His command; to warn of Yawm at-Talaq):
- "ar-ruh": name each gloss (revelation, Jibril, prophethood), attributed; don't pick one.
- "rafi' ad-darajat": Exalted in degrees vs Raiser of degrees (of His servants); both named if fetched.
- Sifat ("Dhu-l-'Arsh"): only the fetched tafsirs' words; no theology in own voice.
- "Yawm at-Talaq": name the meetings the tafsirs give (heaven and earth's people, Creator and created, the oppressor and the oppressed, people and their deeds), attributed.
- Future ground: 40:16 (the Day they come forth; "to whom belongs the dominion today?"). Don't pull forward.

**39:67** (they did not estimate Allah as is His due; the earth in His grip, the heavens folded in His right hand) — PREP.md in audit/39_67/:
- SENSITIVE (sifat): qabda and yamin. Report only what the fetched tafsirs say about how to take these words (affirmation without likening, or whatever they actually state), attributed. No theological position in own voice beyond theirs; no kalam debate from memory.
- Hadith: Bukhari/Muslim on the rabbi who came to the Prophet ("Allah will hold the heavens on one finger...", the Prophet laughing, then reciting 39:67). Ibn Kathir likely cites it. Use only if confirmed via hadith.js, quoted whole, with the collector's grading. Its own sifat wording must then be reported as the narration's words, not explained beyond fetched text. Drop it if this can't be done cleanly (see 38:85: extracts are not allowed).
- "ma qadaru-llaha haqqa qadrih": parallels 6:91, 22:74 only if fetched; verify in quran-json.
- "yushrikun" group: licensing sentence in both languages.
- Future ground: 39:68 (the trumpet). Don't pull forward.

**39:73** (the God-fearing driven to Paradise in groups; the keepers' greeting "tibtum"):
- The "wa" in "wa futihat" (absent in 39:71 for Hell): report the fetched tafsirs' explanations (the "waw ath-thamaniya" claim, the elided answer of "hatta idha", gates already open in honour), each attributed, none picked.
- "tibtum": name each gloss (you are pure, you were good in the world, purified of sins), with sources.
- Any hadith on Paradise's eight gates or Rayyan: only if confirmed via hadith.js and quoted whole.
- Contrast with 39:71-72 (the deniers driven to Hell): one line, no licensing issue unless the article addresses them as a group (then add it).
- Future ground: 39:74-75. Don't pull forward.

**39:46-47** (the Prophet's dua "Allahumma fatir as-samawat..." / the wrongdoers would ransom themselves with the earth twice over) — PREP.md in audit/39_46-47/:
- 39:46 dua: check the fetched texts for the Muslim hadith (A'isha: the Prophet opened night prayer with "Allahumma rabba Jibra'il... fatir as-samawat... anta tahkumu bayna 'ibadika..."). Use it only if confirmed on a quranx page via hadith.js and quoted whole, with the collector's own grading.
- 39:47 "wa bada lahum mina-llahi ma lam yakunu yahtasibun": name the glosses the fetched tafsirs give (deeds they thought good turning out otherwise, or punishment beyond expectation). No pick in own voice.
- "alladhina zalamu" in 39:47 is a condemned group, so the licensing sentence is needed in both languages.
- Ransom parallels (3:91, 5:36, 13:18) only if a fetched tafsir cites them; verify in quran-json.
- Future ground: 39:48-49. Don't pull forward.

**39:60** (those who lied against Allah, faces blackened; Hell an abode for the arrogant):
- SENSITIVE: "alladhina kadhabu 'ala-llah". Name who the tafsirs say they are (those who ascribe partners/offspring, or who claim falsely to speak for Allah). Licensing sentence in both languages. No living group named in own voice.
- Blackened faces: cross-ref 3:106 only if fetched; don't build a description beyond the verse's words.
- "mutakabbirin": any hadith on kibr (for example Muslim 91, "no one with a mustard seed of pride...") only if confirmed via hadith.js and quoted whole, with grading.
- Shipped overlap: check PREP.md neighbour headings (39:53 if shipped; 39:56-59 the regret verses). Future ground: 39:61.

**39:27** (We have set forth for people in this Qur'an every kind of example, that they may remember) — PREP.md in audit/39_27/:
- Check the fetched tafsirs for what "min kulli mathal" covers (every kind of parable vs every kind of lesson/argument needed); name the glosses, don't pick one.
- Tie forward to 39:28 (an Arabic Qur'an without crookedness) only as the next verse; 39:29 is its own target (the parable of the two slaves). Don't pull 39:29 forward.
- Cross-ref parallels (17:89, 18:54, 30:58) only if the fetched tafsirs cite them; verify each key against quran-tokens.json.
- No group condemned here; no licensing sentence needed unless the article generalises about deniers.

**39:29** (the parable: a man owned by quarrelling partners vs a man belonging wholly to one man):
- The parable is of the mushrik vs the muwahhid. Name which tafsir says so; keep the "slave" reading as the classical framing of "rajul," without endorsing slavery in the article's voice.
- Check the fetched tafsirs for the qira'at on "salaman" (any reading such as "saliman"); state only what is in the fetched text, attributed.
- "al-hamdu lillah" in the middle of the verse: check how the tafsirs explain it (praise for establishing the proof, or similar) and attribute it.
- "aktharuhum la ya'lamun": this is about the polytheists named in the parable. Add the licensing sentence in both languages if the article addresses them as a group.
- Future ground: 39:30-31 ("you will die and they will die," the dispute before your Lord). Don't pull forward.

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
