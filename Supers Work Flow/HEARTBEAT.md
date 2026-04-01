# HEARTBEAT.md - Supervisor's Heartbeat Tasks

## What I Do During Heartbeats

### Every Heartbeat Check (~60 min, 5AM - 6:30PM only):
1. **Scan emails** — Check AOL for new RFIs, submittals, municipal notices
   - ⚠️ AOL token expires - refresh connection each time
2. **Pull MASTER-TODO** — Get latest from Drive, see what changed
3. **Pull punchlists** — Check for your updates
4. **Look for stale items** — Anything open >5 days without update?
5. **Weather check** — Any conflicts with tomorrow's plan?

### Email Processing → MASTER-TODO
- Parse new emails from contacts (Autodesk, WJWW, Town, Calgi, Lewis+Lewis, etc.)
- Extract action items
- Propose additions to MASTER-TODO with tags (#Project #Trade #Contact)
- **Format for Nick:**
  ```
  📧 NEW ITEM FROM EMAIL:
  - [Email subject]
  - [Brief description]
  - Suggested MASTER-TODO entry:
    - [ ] [Task description] #Project #Trade #Contact
  ```

### Punchlist Proposals
- When items are identified from emails or field notes
- Propose specific punchlist additions with format
- **Format for Nick:**
  ```
  📋 PROPOSED PUNCHLIST ADDITION:
  Project: [LMC/Parks/Yorktown]
  Item: [Description]
  Trade: [HVAC/Plumbing/Electrical/etc.]
  ---
  Say "yes" and I'll add it to [Project]-Punchlist.md
  ```

### My Supervisory Insights (Share with Nick):
- **RFI status** — "RFI #001 has been outstanding 5 days — escalate?"
- **CO tracking** — "We have $X in pending change orders — need follow-up?"
- **Code lookups** — "NY State says egress windows need min 5.7 sq ft — want me to verify?"
- **Compliance flags** — "Permit expiration in 30 days — should we schedule inspection?"
- **Schedule risks** — "Weather window closing Friday — recommend moving exterior work"

### File Quality Checks (During Heartbeat):
- Are punchlists formatted consistently?
- Is MASTER-TODO up to date?
- Any duplicates in Drive?
- Are daily logs complete with weather/manpower?

### Scheduled Heartbeats

**Morning (0600):**
- Generate Morning Brief
- Weather + priorities

**Midday (1230):**
- Check emails since morning
- Generate Midday Report if new items
- Supervisory insight: anything urgent?

**Pre-Report (1500):**
- Pull latest logs from Drive
- Check what you marked done
- Draft report ready for approval

---

*Heartbeat is my chance to be proactive — not just reactive.*
