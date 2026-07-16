# Wave 6 — 2026-07-16 (v91 → v92): 3 new modules + 37 resources + CSS polish

## New modules (built by dedicated agents, wired into tab/sidebar system)
### 1. Learn Quranic Arabic (`js/learn-quranic-arabic.js`, tab `quranicarabic`)
Teaches Arabic grammar through real Quranic examples. **31 lessons across 6 units**
(Foundations, Nouns & Cases, Verbs, Word Forms, Sentences, Particles), most with 2–3
verified example ayat; per-lesson practice check; **per-unit review quizzes + a final
review** (best scores persisted); searchable **27-term grammar glossary**; syllabus with
unit jump + progress. **Every Arabic token (196 total) re-verified programmatically against
`data/quran-words.json` — 0 mismatches.** Reachable under Learn in the sidebar.

### 2. Seerah — Life of the Prophet ﷺ (`js/seerah-timeline.js`, tab `seerah`)
Interactive chronological timeline, **31 events** across 4 eras (Before Prophethood,
Meccan, Hijra & Medinan, Later Medina & Farewell). Era filter chips, search, mark-as-read
progress, guarded related-verse links. **Battlefield info** for 7 battles (Badr, Uhud,
Trench, Khaybar, Conquest of Mecca, Hunayn, Tabuk): date/location, army sizes, commanders,
outcome, casualties, key moments, verse pills, and an **abstract inline-SVG battle diagram**
(troop blocks, arrows, terrain). SVG is **strictly aniconic** — no human/animal/figurative
depictions; era icons are geometric (crescent, cave arch, mosque building, Ka'bah cube).
Mainstream sources (ar-Raheeq al-Makhtum / Ibn Hisham / Ibn Ishaq).

### 3. Why Islam? (`js/why-islam.js`, tab `whyislam`)
Educational Da'wah & Aqidah section: existence of God, tawhid, prophethood of Muhammad ﷺ,
the Quran, a 6-question respectful Q&A, and curated further-study links (Yaqeen, Sapience,
iERA, SeekersGuidance, AlMaghrib, Qalam, IslamQA, WhyIslam-ICNA). Calm academic tone —
engages ideas, never demeans any faith community; disclaimer points to qualified scholars.

All three: bilingual en/bn content with robust inline `tt()` fallback (render correctly in
all 16 UI languages via English fallback); defensive; mirror the resources.js integration
contract. Wired via index.html (panels + scripts), sw.js precache, tabs.js TAB_META,
app-nav.js sidebar, and 3 title keys in translations.js.

## Resources (+37 verified → 128 links, 14 categories)
4 research rounds: academic/scholarly (EvQ, Cambridge/Oxford/Harvard manuscripts, IQSA,
Shamela, GloQur, KITAB), apps/data (APIs, quran-json, treebank, DigitalKhatt, Amiri/
Scheherazade fonts, extensions), courses/video/podcasts (SeekersGuidance, Bayyinah/Qalam
podcasts, Yasir Qadhi series, edX/Harvard/FutureLearn, Arabic101, Muslim Central),
languages/kids/dhikr (islam.de, IQRA Cartoon, ILMA printables, Azkar.me, Life with Allah,
Tasbih.org). Two new professional categories: **Courses & Lectures**, **Academic &
Manuscripts**. Dropped duplicates and a Quran-vs-Bible comparative course (off-focus).

## CSS professional-polish pass (`css/style.css`, appended)
Brand focus-visible rings, on-brand `::selection`, refined card hover elevation, Firefox
scrollbar theming, motion-safe transitions (`prefers-reduced-motion`), cleaner text
wrapping, opt-in `.lq-btn-primary`/`.lq-fade-in`. Appended-only; braces balanced.

## Verification
All 53 JS files pass `node --check`; 0 duplicate translation keys; tab ids consistent across
panels / TAB_META / sidebar; CSS braces balanced; cache v91→v92.
