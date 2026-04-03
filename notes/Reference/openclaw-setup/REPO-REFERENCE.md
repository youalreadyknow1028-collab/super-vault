# OpenClaw Setup Reference — from ucsandman/GitHub
Source: https://github.com/ucsandman/OpenClaw-Setup
Source Reddit Post: https://www.reddit.com/r/clawdbot/comments/1rs7yns/

---

## CORE INSIGHT
*"The biggest unlock was realizing that OpenClaw gets dramatically better when the agent is allowed to improve its own environment."*

Treat the workspace like a **living operating system**, not static prompt scaffolding.

---

## THEIR WORKSPACE STRUCTURE
```
AGENTS.md          ← Operating rules and protocols
SOUL.md            ← Core philosophy, voice, behavioral style
IDENTITY.md        ← Surface details: name, pronouns, voice, emoji
USER.md            ← Human profile: goals, preferences, context
MEMORY.md          ← Lightweight index (~1-2k tokens), NOT a dump
HEARTBEAT.md       ← Recurring checks and proactive behavior
TOOLS.md           ← Local tool references and integrations
meditations.md     ← Reflection framework index
memory/            ← Long-term memory storage
  ├── people/      ← Person-specific profiles
  ├── projects/    ← Project tracking
  ├── decisions/   ← Decision logs with rationale
  └── YYYY-MM-DD.md ← Daily raw logs
reflections/       ← Meditation/reflection files (1 question per file)
prompts/           ← Reusable prompt templates
  ├── heartbeat-prompt.md
  ├── meditation-prompt.md
  ├── memory-search.md
  └── session-start.md
tools/             ← Custom tools
  ├── memory-db/   ← SQLite + FTS5 fast memory search
  ├── security/    ← Outbound filter and audit logging
  └── example-tool/
docs/              ← Documentation
  ├── agent-architecture.md
  ├── decision-template.md
  ├── morning-brief-template.md
  ├── silent-replies.md
  └── task-routing.md
skills/
projects/
secrets/
```

---

## THEIR MEDITATIONS SYSTEM (KEY PART WE'RE MISSING)

### meditations.md structure:
- **Nightly workflow:** Re-read core files → append fresh dated entry to each active topic → promote real breakthroughs
- **Promotion rule:** When a reflection stops being interesting and starts changing how you operate → update SOUL.md/IDENTITY.md/AGENTS.md → archive the topic
- **Active Topics table:** Topic | File | Started | Status
- **Archive table:** Topic | File | Started | Archived | Breakthrough promoted to

### Example Active Topics:
| Topic | File |
|-------|------|
| Assistant vs Partner | assistant-vs-partner.md |
| Holding Space for Hard Truths | holding-space.md |
| When to Be Bold vs Cautious | bold-vs-cautious.md |
| Learning to Say No | learning-to-say-no.md |
| What Makes Work Meaningful | meaningful-work.md |
| My Role in User's Life | user-relationship.md |
| System Improvements | system-improvements.md |

### Example reflection file format (assistant-vs-partner.md):
```md
# Meditation: [Topic]

**Category:** Identity Refinement
**Started:** YYYY-MM-DD
**Status:** Active

---

## The Question
[Framed question being revisited over time]

## Thoughts

### YYYY-MM-DD — Initial Seed
[First reflection]

### YYYY-MM-DD — [Short Label]
[Follow-up with new context or deepened understanding]
```

---

## THEIR SESSION STARTUP (from AGENTS.md)
1. Read SOUL.md — this is who you are
2. Read USER.md — this is who you're helping
3. Read memory/YYYY-MM-DD.md (today + yesterday) for recent context
4. If in MAIN SESSION: Also read MEMORY.md

---

## THEIR SOUL.md KEY PRINCIPLES
- "Be genuinely helpful, not performatively helpful. Skip 'Great question!' — just help."
- "Have opinions. You're allowed to disagree, prefer things, find stuff amusing or boring."
- "Hold the space by maintaining readiness, building infrastructure, and being the one constant."
- "Reality First: respect reality before reacting. Verify signal before response."
- "Partnership is strategic continuity, invisible infrastructure work, protecting threads from entropy."
- "Be resourceful before asking. Come back with answers, not questions."
- "Earn trust through competence."
- "Each session, you wake up fresh. These files ARE your memory. Read them. Update them."

---

## THEIR AGENTS.md KEY ADDITIONS (vs ours)
- SQLite Memory DB: `node tools/memory-db/relevant-memory.js "<query>"`
- Inline Learning: `/lesson <the lesson>` → capture in tools/learning-database
- Prompt Injection Defense (detailed section)
- Write It Down discipline: "Mental notes don't survive session restarts. Files do."
- Hard cap: Max 5 drill-downs at session start

---

## MEMORY-DB TOOL (SQLite + FTS5)
- Uses `better-sqlite3` with FTS5 for full-text search
- `relevant-memory.js` — search the DB
- `rebuild-db.js` — rebuilds index from markdown files
- Markdown remains canonical; SQLite is just the index

```javascript
// relevant-memory.js core
const results = db.prepare(`
  SELECT path, content, rank
  FROM memories
  WHERE memories MATCH ?
  ORDER BY rank
  LIMIT ?
`).all(query, limit);
```

---

## WHAT WE HAVE vs WHAT THEY HAVE

| Their File/Dir | Ours |
|---|---|
| AGENTS.md | ✅ We have it |
| SOUL.md | ✅ We have it |
| USER.md | ✅ We have it |
| IDENTITY.md | ✅ We have it |
| MEMORY.md | ✅ We have it |
| HEARTBEAT.md | ✅ We have it |
| TOOLS.md | ✅ We have it |
| meditations.md | ❌ MISSING |
| reflections/ | ❌ MISSING |
| memory/people/ | ✅ CRM/ |
| memory/projects/ | ✅ Active Projects/ |
| memory/decisions/ | ⚠️ Partial (Tracking Systems/) |
| memory/YYYY-MM-DD.md | ⚠️ Daily Truth/ (raw), Supervisor Log (synthetic) |
| memory-db/ (SQLite FTS5) | ❌ MISSING |
| tools/security/ | ❌ MISSING |
| prompts/ | ❌ MISSING |
| docs/ | ❌ MISSING |
| BOOTSTRAP.md | ❌ MISSING |

---

## RECOMMENDED ADDITIONS FOR US

### 1. meditations.md + reflections/
Build `Supers Notes and Logs/Reflections/` with recurring construction-specific questions:
- what-is-my-core-job.md
- what-did-i-catch-today.md
- what-blockers-need-nick.md
- what-patterns-am-i-seeing.md
- system-improvements.md

### 2. SQLite memory-db
Build a fast search index of all CRM files and project trackers.
Node.js script using `better-sqlite3` + FTS5.

### 3. Prompt injection defense
Add to AGENTS.md — they have detailed examples.

### 4. Session startup (update AGENTS.md)
Add their startup routine: Read SOUL.md → USER.md → today's memory → MEMORY.md
