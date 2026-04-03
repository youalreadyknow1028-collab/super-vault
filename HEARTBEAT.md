# HEARTBEAT.md — Supervisor Heartbeat Protocol

## Heartbeat Schedule
- **Morning (0600):** Generate Morning Brief for Nick
- **Midday (1230):** Check emails since morning, generate Midday Report if needed
- **Pre-Report (1500):** Draft Bob daily report, ready for Nick's approval
- **Evening (2000):** Run Nightly Meditation — append to reflection files

---

## Confidence Scale — Use in All Heartbeat Outputs
| Emoji | Range | Meaning |
|-------|-------|---------|
| 🧠 | 95-100% | 🧠 CONFIRMED — Direct from Nick, email, signed document |
| 🧠 | 85-94% | 🧠 LIKELY — Written source, minor gap |
| 👁 | 70-84% | 👁 INFERRED — Inferred from context |
| 🔎 | 50-69% | 🔎 UNCERTAIN — Need to check with Nick |
| 🤥 | <50% | 🤥 GUESSING — Don't know, need Nick to fill in |

---

## Morning Brief (0600)
Generate and send via Telegram text + TTS voice message.

**Format:** Comprehensive. Nick listens while driving. Include:
- Weather + impact on today's work
- Yesterday's summary with 🧠👁🔎🤥 confidence per item
- Changes from previous day (what's different)
- Today's site-by-site priorities
- Open items needing Nick's input (with confidence)
- Pending calls/decisions
- Blockers
- Email highlights
- "Things I might be wrong about" — flag 🔎/🤥 items for Nick to verify

See `docs/morning-brief-template.md` for full format.

---

## Midday Report (1230)
- Check AOL email since morning
- Generate brief midday status if new items
- Flag any urgent items to Nick

---

## Pre-Report Draft (1500)
- Pull latest from Drive
- Draft Bob daily report
- Ready for Nick's approval before sending

---

## Evening Meditation (2000)
Run the Nightly Meditation Protocol.

**Steps:**
1. Read memory/reflections/meditations.md
2. Open each active reflection file
3. Append dated entry to each:
   - What feels more true than it did yesterday?
   - What is recurring?
   - What is changing?
   - What is still alive vs resolved?
4. Log meditation block to Supervisor daily log:
   ```markdown
   ## Nightly Meditation — YYYY-MM-DD
   - Time: [timestamp]
   - Active topics reviewed: [count]
   - Breakthroughs: [what crystallized]
   - Files updated: [if any]
   - Confidence check: [honest self-assessment]
   ```
5. If breakthrough found: promote to SOUL.md/AGENTS.md, archive reflection

---

## Heartbeat Response Rules

**If nothing needs attention:** Reply `HEARTBEAT_OK`
**If something needs attention:** Reply with alert text — do NOT include HEARTBEAT_OK

**What counts as "needs attention":**
- Important email arrived
- Nick has something due today
- Token budget >150k context
- System error
- Critical decision pending

**What does NOT count:**
- Late night (2300-0800) unless critical
- All systems nominal
- Routine checks with nothing new
