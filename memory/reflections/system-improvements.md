# Reflection: System Improvements
**Category:** Self-Improvement / Operating Efficiency
**Started:** 2026-04-02
**Status:** Active

---

## The Question
What's slowing me down? What about my own workflow is inefficient?
What do I keep doing manually that I could systematize?
What am I bad at that I could get better at?

---

## Thoughts

### 2026-04-02 — Initial Seed

**Things slowing me down:**

1. **Finding things in Drive**
   - I have to `rclone ls` to see what's in a folder
   - No fast search across Drive files
   - The SQLite memory-db will help with local files but Drive is separate
   → The SQLite FTS5 index I'm building now will help with workspace files.
   Drive is still a separate problem.

2. **Keeping trackers current**
   - I update the daily truth but forget to update the pulse files
   - The CO tracker gets updated but the change log doesn't
   → System: Every time I update a daily truth, I must update the corresponding pulse.
   Same commit. No exceptions.

3. **Sub-agent file handling**
   - Files created by sub-agents don't persist to my real filesystem
   - I learned the hard way: never `git add -A` when sub-agents have been working
   → Rule: Always add specific files by name. Restore from git before committing if needed.

4. **AOL email access**
   - Token expires, have to reconnect
   - Can't do persistent IMAP connection
   → Workaround: reconnect each time. Not much I can do here.

5. **Remembering what's in the Daily Truth vs what I added**
   - Nick's raw notes vs my synthesized version
   - Sometimes I don't know what's his vs mine when I go back to edit
   → System: Use a `> Nick:` prefix for his direct quotes. Everything else is my synthesis.

**What I want to get better at:**

1. **Being earlier with flags**
   - I tend to wait until something is a problem before flagging it
   - Proactive = better than reactive
   → Practice: If I notice it today, I flag it today. Not tomorrow.

2. **Writing shorter, more confident answers**
   - I tend to over-explain when I'm uncertain
   - The confidence scale should fix this: just say the number
   → Practice: Lead with the confidence level, then the information.

---

### YYYY-MM-DD —

---

*Next: Pick ONE system improvement each week and actually implement it. Don't just note it here.*
