# Round 7 addendum — the SOURCE GATE (binding)

One requirement on top of tools/TADABBUR-DRAFTER-BRIEF.md: **every named source
must be confirmed against the actual source text before you write the sentence
that cites it.** No citing from memory. If you cannot confirm it, you do not
write it.

## 1. Commentators (article section 3, and any tafsir claim anywhere)

Pull the real tafsir for the exact verse before attributing anything:

```
curl -s "https://api.qurancdn.com/api/qdc/tafsirs/<ID>/by_ayah/<S:A>" | python3 -c "import sys,json,html,re;t=json.load(sys.stdin)['tafsir']['text'];print(html.unescape(re.sub('<[^>]+>','',t))[:5000])"
```

IDs: `15` at-Tabari (ar) · `90` al-Qurtubi (ar) · `91` as-Sa'di (ar) ·
`14` Ibn Kathir (ar) · `169` Ibn Kathir abridged (en) · `94` al-Baghawi (ar) ·
`168` Ma'arif al-Qur'an (en) · `16` Muyassar (ar, also local at data/tafsir/16.json).

- Attribute a reading to at-Tabari / al-Qurtubi / as-Sa'di / Ibn Kathir /
  al-Baghawi ONLY if you fetched that mufassir on THAT verse and the reading is
  in the text you fetched — you must be able to point at the Arabic clause.
- Ibn Ashur, ar-Razi and Ibn al-Qayyim are not in this API. Name them only if
  you confirm the position on a page you fetched (quranx.com/Tafsirs/<S.A>,
  altafsir.com). Otherwise use the commentators you did fetch.
- Where two differ, state the difference as a difference — that is the section's
  job, and it is only possible because you read both.
- data/tafsir/165.json (Ahsanul Bayaan, Bengali) is in the repo and is a good
  sanity check on the Bengali register.
- Fetch economy: one fetch per mufassir per verse, truncated as above. Do not
  re-fetch what you have already read.

## 2. Hadith (article section 4, and any narration anywhere)

sunnah.com returns 403 to this environment — do not waste calls on it.
Confirm on a page you actually fetch:

- `https://quranx.com/hadith/Bukhari/DarusSalam/Hadith-<N>`
- `https://quranx.com/hadith/Muslim/Hadith-<N>`
- `https://quranx.com/hadith/<Collection>/...` (Abu Dawud, Tirmidhi, Nasai, Ibn Majah)
- WebSearch with `allowed_domains: ["sunnah.com","quranx.com","hadeethenc.com"]`
  is fine for FINDING a number, but a snippet never confirms it — fetch the page.

Rules:
- One collection's wording, quoted whole, never a hybrid of two variants.
- Cite the number only if the fetched page shows it; otherwise the collection alone.
- Report the collector's own grading if he gave one; never upgrade a grading.
- Never fill the slot with a weak report. If there is no sound hadith on the
  verse, say so in one sentence and move on — that is a correct outcome.
- Asbab an-nuzul: only if established and confirmed on a page you fetched
  (quranx.com/Tafsirs/<S.A> carries al-Wahidi for many verses). If disputed or
  weak, write the verse's placement instead.

## 3. The ledger you must report

Per verse, a SOURCES block: tafsir IDs fetched and which you ended up naming;
each hadith with collection, number, the URL you fetched, the first ten words of
the wording you used, and any grading; asbab confirmed / not used, with source;
and anything you wanted to say but dropped because you could not confirm it.

An unconfirmable claim quietly softened instead of dropped is a defect. Dropping
it and saying so in the ledger is the correct move.
