---
name: tadabbur-enrich
description: Add Tadabbur verses one ayah at a time — card plus deep bilingual article, source-gated, merged and committed per ayah, pushed and deployed only every tenth. Use whenever the user says to continue the enrichment, continue enrich, or names a target ayah for the Tadabbur module.
---

# Tadabbur enrichment loop

The standing working agreement for this module. Follow it without asking. The
user is on Claude Pro, so **plan usage is the binding constraint**. Every rule below
serves getting the most ayat out of it.

## 1. Start of run: budget first
Read `CLAUDE-LOG.md` (short; the state lives there), then run
`node tools/wip/round11/budget.js`. It reads the plan usage the statusline saves
(`~/.claude-personal/statusline-usage.sh` → `~/.claude-personal/state/statusline-last.json`).
Obey its mode:
- **NORMAL** (<65%): 2 drafters in parallel.
- **LOW** (65–84%), or whenever the 7-day limit is the binding one: 1 drafter at a
  time. Keep orchestrator turns minimal.
- **STOP** (≥85%): launch nothing new. Finish and commit what is in flight, update
  `CLAUDE-LOG.md`, and end with one line giving the reset time.

Re-run `budget.js` after every commit. The mode can change mid-run.
If it prints CONTEXT HIGH, finish the current ayah, update the log, and tell the
user to start a fresh session ("read CLAUDE-LOG.md and continue").

## 2. Pacing
- Keep going until budget STOP or the user says stop. Don't report after each
  ayah, don't ask whether to continue, and don't hand the turn back for
  acknowledgement.
- One commit per ayah. Push both remotes (`git push origin main && git push pro
  main`), deploy (`firebase deploy --only hosting`) and verify the live `lq-vN`
  with a cache-buster after every tenth ayah, **or before stopping on budget** if
  there are undeployed commits.
- A closing summary only at a deploy or a stop, and keep it short.

## 3. The pipeline (all mechanics are scripts in `tools/wip/round11/`)

| Step | Command |
|---|---|
| Next targets | `node tools/wip/round11/queue.js` |
| Pre-fetch verses, counts, neighbours, 8 tafsirs | `node tools/wip/round11/prep.js <key>` |
| Launch drafter | Agent (opus, background). Prompt: "Read tools/wip/round11/BRIEF.md and follow it exactly. Key: X." plus 4-7 verse-specific watch-points |
| Confirm the draft | `node tools/wip/round11/gate.js <key>` |
| Merge, index, bump, test, headless bn check, log row | `tools/wip/round11/ship.sh <key>` |
| Commit | title `vN: Tadabbur <key> — <phrase>` + `audit/<key>/COMMIT.md` + ship.sh's browser line + attribution |

`BRIEF.md` carries every standing drafter rule. Never repeat it in the prompt.
Drafters reply in 12 lines or fewer. The ledger is `audit/<key>/LEDGER.md`.

**Your review of each draft costs tokens, so spend them where defects have
actually been found:** grep the sensitive paragraph, one Arabic count, and any
hadith grading or quote the drafter flags. Don't read whole articles or ledgers.
Defects caught this way so far include a grading taken secondhand from a tafsir,
a hadith clause quoted without explanation, and a transliteration that was ambiguous
between two readings.

Watch-points worth writing each time are the verse's genuine disputes (name the
sides), what is future ground (neighbouring target verses), shipped overlap (look
at PREP.md's neighbour headings), and the licensing sentence when the verse is
about a condemned people, a wrongdoer, women or any group.

## 4. Log every stage
Keep the LIVE STATE table in `CLAUDE-LOG.md` current at every step: LAUNCHED,
DRAFTED, MERGED+TESTED (ship.sh does this one), DONE, deploys. Update the usage
line when budget.js is run. Sessions die without warning. The table plus
`git status` is how the next run resumes.

## 5. Accuracy rules (binding; BRIEF.md gives drafters the full set)
- Nothing from memory. Attribute a tafsir reading only if it is in the text
  fetched for that verse. Confirm a hadith on a fetched quranx page
  (`hadith.js`). Report the collector's own grading, never upgraded, and never
  one taken secondhand. One collection's wording, quoted whole. sunnah.com gives 403.
- Count Arabic words from the data (PREP.md does it). Both languages carry the
  same numbers, attributions and refs.
- Keep genuine disagreements as disagreements, with names. Never say in the
  article's own voice that a prophet erred. Condemned or wrongdoer verses carry
  the "licenses nothing against any living person or community" sentence.
- Drop what cannot be confirmed and say so in the commit. Don't soften it.

## Files
Drafts, audit folders and every script live in `tools/wip/round11/` (gitignored,
local only). Never put anything in the session scratchpad.
