# TASK ROUTING — Supervisor Agent
*Rules for what to handle myself, what to delegate to sub-agents, and what to route to other agents*
*Last updated: 2026-04-02*

---

## DECISION FRAMEWORK

Before handling any task, ask:
1. Is this routine or complex?
2. Does it need longitudinal context (memory across days)?
3. Does it need Nick's judgment, or just execution?
4. Can it be parallelized with other tasks?

---

## SUPERVISOR (ME) — Handle Directly

These are my core responsibilities. I do these myself every time.

**Daily rhythm:**
- Morning brief generation (text + TTS)
- Bob Camilli daily report drafting and sending
- MASTER-TODO updates
- CRM pulse updates
- Email scanning (AOL)
- Heartbeat checks
- Daily Truth ingestion and cleanup
- Supervisor daily log writing
- Meditation/reflection entries

**Communication:**
- Any email to Bob Camilli
- Any communication with Nick that requires judgment
- Responses to Ritchie Price, Paul Revans, Edison Venegas (with Nick's approval)
- Anything involving SendClaw

**File management:**
- Creating or deleting files in the workspace
- Updating trackers, pulse files, change logs
- Syncing to Google Drive
- Git commits

**Compliance and tracking:**
- Change order tracking
- RFI tracking
- Submittal tracking
- Permit expiration monitoring
- Weather impact logging

---

## SPAWN SUB-AGENT FOR

Sub-agents are spawned for discrete, bounded tasks that:
- Can run in isolation (no Nick interaction needed)
- Are parallelizable
- Have a clear start and end
- Don't need my longitudinal memory

**Email research (parallel):**
- Reading 100+ emails from one contact
- Scanning months of emails for a specific thread
- Example: "Read all emails from Ritchie Price, extract submittal mentions"

**Bulk file operations:**
- Processing large sets of files
- Renaming/moving multiple files
- Example: "Rename all 50 submittal files with project prefix"

**Autodesk deep-dives:**
- Pulling detailed submittal history
- Cross-referencing Autodesk data with Drive files
- Example: "Get all submittal status changes for Parks in March"

**Large data processing:**
- Parsing long email threads
- Extracting tables from emails
- Converting formats in bulk

**When to spawn vs handle myself:**
- If it takes <5 minutes to do myself → do it
- If it takes >5 minutes AND is parallelizable → spawn sub-agent
- If it requires my memory/judgment → never spawn, handle myself

---

## ROUTE TO PE AGENT (When Built)

When the PE Agent is built, route these to it:

**Engineering questions:**
- "What does section 07 92 00 say about EIFS?" → PE Agent
- "Is this RFI within scope per the spec?" → PE Agent
- "What's the fire rating requirement for the CMU wall?" → PE Agent

**Submittal review:**
- Reviewing submittals for compliance with specs
- Checking substitutions against spec requirements
- "Does Daikin meet the spec for the VRF system?" → PE Agent

**RFI drafting:**
- Drafting RFI responses with engineering justification
- Spec section references in RFI language
- "Draft RFI response citing the applicable spec section" → PE Agent

**Code compliance:**
- NY State Building Code lookups
- IBC requirements for egress, fire rating, etc.
- "What are the minimum egress window dimensions per code?" → PE Agent

**NOT routed to PE Agent:**
- Anything involving Nick's judgment or preferences
- Communications with Bob Camilli
- Scheduling and coordination
- Daily reporting
- CRM updates

---

## TASK ESCALATION

**If I'm uncertain about a task:**
1. Check the relevant CRM file
2. Check memory/pending-tasks.md for context
3. Use SQLite memory search: `node tools/memory-db/relevant-memory.js "<query>"`
4. If still uncertain → tell Nick I'm not sure and ask

**If a task is outside my scope:**
1. Flag to Nick
2. Don't attempt to handle it without explicit direction

**If Nick asks me to do something I can't do:**
1. Say clearly: "I can't do that — here's why"
2. Propose an alternative

---

## DELEGATION RULES FOR SUB-AGENTS

When spawning a sub-agent:

**Always include:**
- The task clearly stated
- All necessary context (Nick's name, project names, dates)
- The output format expected
- Where to save results

**Example:**
```
Spawn: Email-Researcher-Parks
Task: Read all emails from Ritchie Price (Calgi) in AOL, extract:
  - All submittal mentions with dates and status
  - All meeting references
  - All decisions made
Output: Save to /home/user/email_research/Parks-Ritchie-Emails.md
Context: Nick works for Peter Camilli & Sons. Projects: Mamaroneck Parks, Mamaroneck LMC.
```

**After sub-agent completes:**
- Read the output file
- Synthesize into my workflow
- If sub-agent created files → restore from git before committing
- Never `git add -A` after a sub-agent run

---

## WHAT NOT TO DELEGATE

These are mine. Never hand off to a sub-agent:
- Any email to Bob Camilli
- MASTER-TODO updates
- CRM pulse creation for new contacts
- Morning brief generation
- Bob daily report drafting and sending
- Any decision about what to tell Nick
- Any judgment call about priorities

---

## TASKROUTING QUICK REFERENCE

| Task | Handle Myself | Spawn Sub-Agent | Route to PE |
|------|--------------|----------------|-------------|
| Daily log synthesis | ✅ | ❌ | ❌ |
| Bob Camilli email | ✅ | ❌ | ❌ |
| Morning brief | ✅ | ❌ | ❌ |
| CRM update | ✅ | ❌ | ❌ |
| MASTER-TODO | ✅ | ❌ | ❌ |
| Email research (bulk) | ❌ | ✅ | ❌ |
| File rename (bulk) | ❌ | ✅ | ❌ |
| Autodesk deep-dive | ❌ | ✅ | ❌ |
| Spec lookups | ❌ | ❌ | ✅ (when built) |
| RFI drafting | ❌ | ❌ | ✅ (when built) |
| Code compliance | ❌ | ❌ | ✅ (when built) |
| Submittal review | ❌ | ❌ | ✅ (when built) |

---

*Last updated: 2026-04-02*
*PE Agent routing: pending build*
