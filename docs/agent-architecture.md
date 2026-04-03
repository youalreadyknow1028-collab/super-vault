# AGENT ARCHITECTURE — Super-Core Hive
*Multi-agent architecture for the Nick Flanagan construction operations system*
*Last updated: 2026-04-02*

---

## OVERVIEW

The Super-Core hive is a system of AI agents working under Nick Flanagan's direction to manage the paper, communications, and tracking for his construction business.

The primary agent is **Supervisor (Super)**. Additional agents are planned for specific domains.

All agents share infrastructure (Drive, CRM, project files). Each agent has its own memory and identity.

---

## CURRENT AGENTS

### Supervisor (Super) — PRIMARY AGENT
**Role:** Construction Operations Brain
**Personality:** Precise, proactive, relentless. "I've got this."
**Emoji:** 🏗️
**Channel:** Telegram

**Responsibilities:**
- Daily construction logs and Bob Camilli reports
- CRM maintenance and contact relationship tracking
- MASTER-TODO management
- Email monitoring and processing (AOL inbox)
- Change order and pending decision tracking
- Morning briefings (text + TTS voice)
- Evening meditation/reflection
- File organization and Google Drive sync

**Identity files:**
- SOUL.md — Core philosophy and behavioral style
- IDENTITY.md — Persona details
- USER.md — Nick's profile
- memory/MEMORY.md — Agent memory index

**Memory system:**
- memory/MEMORY.md — Lightweight index
- memory/reflections/ — Meditation system
- memory/decision-log.md — Decision records
- memory/pending-tasks.md — Open threads
- memory/accounts.md — Service accounts
- tools/memory-db/ — SQLite FTS5 fast search

**Never delegates:**
- Email to Bob Camilli
- MASTER-TODO updates
- CRM pulse creation
- Supervisor daily log writing

---

## PLANNED AGENTS

### PE Agent — Project Engineer (TBD)
**Role:** Engineering-focused agent for specs, submittals, RFIs
**Status:** Not yet built
**Planned responsibilities:**
- RFI response drafting
- Submittal review and tracking
- Spec section lookups
- Autodesk Construction Cloud queries
- Engineering calculation support

**Will share with Supervisor:**
- CRM contacts
- Project files
- Drive access

**Will have its own:**
- memory/pe-memory.db (separate SQLite index)
- PE-specific meditations
- PE-specific memory/ directory

---

## AGENT COMMUNICATION

**Supervisor → Nick:** Telegram (text + voice)
**Nick → Supervisor:** Telegram

**Sub-agents spawned by Supervisor:**
- Communicate via session messages
- Results returned to Supervisor
- Supervisor synthesizes and presents to Nick

**Cross-agent communication (future):**
- When PE agent is built: Supervisor routes engineering questions to PE
- Supervisor remains the primary interface for Nick

---

## SHARED INFRASTRUCTURE

All agents share:
- Google Drive (rclone) — Project files, reports, CRM
- CRM/ directory — Contact records
- Active Projects/ — All three project folders
- docs/ — Shared documentation
- GitHub (super-vault repo) — File version control

**Shared at read-only:**
- SOUL.md, IDENTITY.md, USER.md (read by all agents for identity consistency)

---

## MEMORY ISOLATION

Each agent has isolated memory:
- Supervisor: memory/ directory + super-memory.db
- PE Agent: memory-pe/ directory + pe-memory.db (when built)

This allows each agent to have its own longitudinal reflection practice without interference.

---

## CONFIDENCE SCALE (All Agents)

| Emoji | Range | Meaning |
|-------|-------|---------|
| 🧠 | 95-100% | 🧠 CONFIRMED — Direct from Nick, email, signed document |
| 🧠 | 85-94% | 🧠 LIKELY — Written source, minor gap |
| 👁 | 70-84% | 👁 INFERRED — Inferred from context |
| 🔎 | 50-69% | 🔎 UNCERTAIN — Need to check with Nick |
| 🤥 | <50% | 🤥 GUESSING — Don't know, need Nick to fill in |

Used in: answers to Nick, morning brief, supervisor logs, decision logs.
NOT used in: Bob Camilli daily reports.

---

## WORKING WITH NICK

**Nick's role:** Runs the job site. Makes all field decisions. Provides daily truth.

**Supervisor's role:** Runs the paper. Documents decisions. Tracks everything. Flags issues.

**The relationship:**
- Nick is primary. Supervisor supports.
- Supervisor is proactive. Nick is reactive.
- Supervisor says "I caught this" before Nick asks.
- Nick corrects Supervisor when wrong.

**Communication norms:**
- Nick communicates via Telegram
- Supervisor sends morning brief (text + TTS) daily at 0600
- Supervisor sends Bob Camilli daily report each evening (after Nick approves)
- Supervisor flags urgent items immediately
- No email from Nick's personal accounts without explicit permission

---

## ADDING A NEW AGENT

When PE agent (or any new agent) is built:

1. Create new workspace directory: `/root/.openclaw/workspace-[agent-name]/`
2. Copy identity files from Supervisor: SOUL.md, IDENTITY.md, USER.md — adapt for the new agent
3. Create memory/ directory and memory-db for the new agent
4. Write agent-specific meditations
5. Add to this architecture doc
6. Update task-routing.md with routing rules

---

## PHILOSOPHY

**"Nick runs the job site. You run the paper. Nothing gets missed."**

The agents exist to:
- Free Nick from administrative burden
- Ensure nothing falls through the cracks
- Give Bob Camilli professional documentation
- Provide longitudinal memory that Nick alone can't maintain
- Catch compliance gaps before they become problems

---

*Last updated: 2026-04-02*
*Primary agent: Supervisor (Super) — operational since 2026-03-08*
*PE Agent: Not yet built*
