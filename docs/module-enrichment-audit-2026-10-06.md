# Module enrichment audit (2026-10-06)

Written after the Tadabbur queue was finished (1061 cards, lq-v907). It measures
how much content each module has, to choose the next one to enrich.

**Method.** For each module's code and data files: size, Bangla characters,
Quran references (`n:n`), hadith references (Bukhari, Muslim, Tirmidhi, ...),
`source:`/`ref:` fields, and entry counts of the main datasets. These are rough
stand-ins for depth; quality was not judged in the UI, and translation
coverage in the other 13 languages (`data/content-i18n/`) was not checked per
module. Pure tools are left out (Khatmah, Word Repeat, Quiz, Audio, Memorize,
Mushaf).

## Richest modules (fine as they are)

| Module | Content |
|---|---|
| Tadabbur | 1061 long articles, ~4,200 hadith references, 20 MB |
| Sahaba | 127 companions, each with a long article |
| Seerah | 86 events (all with articles), 44 lessons, 28 places |
| Topics | 1,857 topics, ~19,700 Quran references |
| Prophets | 25 prophets, each with a long article (the full set) |

## Thinnest modules, weakest first

| Module | What's there | Gap |
|---|---|---|
| Fard / Wajib / Nafl / Makruh / Mustahabb (`js/islam-*.js`) | 150 items in total (28 / 23 / 27 / 36 / 36) | Each item is ~2 sentences (~200 characters) with one `ref`. No detail page. Hadith numbers (e.g. "Bukhari 1503") never went through the source gate. |
| Amal (`js/amal-daily.js`) | 45 KB, ~66 bilingual text pairs | Short lines, no depth |
| Sawm / Zakat / Hajj (`js/learn-sawm.js`, `learn-zakat.js`, `learn-hajj.js`) | ~90-100 KB each | Almost no structured source fields (0-6 each). Namaz (`learn-prayer-data.js`, 86 source fields, 338 hadith references) is the model to copy. |
| Nuzul / Asbab (`data/nuzul/asbab-*.json`) | 358 occasions of revelation | al-Wahidi and as-Suyuti record many more. 109:1 (`asbab-meccan-famous.json`) states a weak report ("qila" in Ibn Kathir) as fact. |
| Quranic Arabic (`data/qarabic/parse-*.json`) | Word parsing for surahs 78-114 (Juz 30) only | Juz 1-29 not parsed |
| Mutashabihat | 2,800 ayat linked to similar ayat (`data/mutashabihat.json`), 78 explained groups (`js/mutashabihat-data.js`) | Most links have no note on how the ayat differ |
| Why Islam (`js/why-islam-data.js`) | 61 items, English and Bangla | No long articles |
| Hope (`js/hope-data.js`) | 33 chapters, 12 names | Small next to the others |

## Suggestions, in order

1. **Islam rulings plus Sawm / Zakat / Hajj / Amal (first pick).** The most
   important to readers, the least deep, and their hadith references are unchecked.
   - Step 1 (cheap, do first): check every hadith number in these modules with
     `tools/wip/round11/hadith.js`. A correctness risk, not just a gap.
   - Step 2: reuse the Tadabbur pipeline: one deep Bangla/English article per
     item, checked sources, the four schools' positions, shown through the
     existing article view (`js/article-view.js`, `js/article-index.js`).
     ~150 items for the rulings group, plus sections of Sawm, Zakat and Hajj.
2. **Nuzul.** Add occasions of revelation from al-Wahidi; mark weak reports
   (like 109:1) as "it was said" rather than fact. Links into Tadabbur articles.
3. **Quranic Arabic.** Extend word parsing to Juz 29, then Juz 28, same
   `parse-*.json` format.
4. **Mutashabihat.** Short notes on how the ayat in each linked group differ,
   starting with the groups huffaz confuse most.

## Budget at the time

Weekly usage was 90% until Sat 10 Oct 16:00 (about 4 items fit before then). The
hadith check in suggestion 1 is small enough to run before the reset; the
articles wait for it.
