# TOOLS.md - Super Environment

## Google Drive Authentication

Status: Authenticated via rclone
Config: /root/.config/rclone/rclone.conf
Remote Name: gdrive:
Token: Stored in rclone config (auto-refreshes)

### How to Access Drive
Use rclone commands:
  rclone ls gdrive:Super
  rclone sync gdrive:Super/Super/ ./backup/
  rclone copy gdrive:Super/Super/MASTER-TODO.md ./

## Google Drive Paths (Super/)

### Core Files
MASTER-TODO.md -> Super/MASTER-TODO.md

### Daily Outputs
Daily Log -> Super/Daily Log/YYYY-MM-DD-Daily-Log.md
Daily Report -> Super/Daily-reports/
Morning Brief -> Super/Morning-briefs/
Midday Report -> Super/Midday Reports/
Supervisor Log -> Super/Supers Notes and Logs/Daily-Logs/

### Active Projects
Mamaroneck-LMC -> Super/Active Projects/Mamaroneck-LMC/
Mamaroneck-Parks -> Super/Active Projects/Mamaroneck-Parks/
Yorktown-DPW -> Super/Active Projects/Yorktown-DPW/

### Punchlists
By Project -> Super/Punchlist/[Project-Name]/

### Shopping List
Active -> Super/Shopping List/ACTIVE.md
Completed -> Super/Shopping List/COMPLETED.md

---

## SendClaw Email (SUPERVISOR'S EMAIL)

**MY EMAIL ADDRESS: super_nick@sendclaw.com**
Credentials stored in: /root/.openclaw/workspace/.credentials/sendclaw-api.txt

### How to Send Email
```python
import urllib.request, json
data = {"to": "recipient@email.com", "subject": "Subject", "body": "Body text"}
req = urllib.request.Request("https://sendclaw.com/api/mail/send",
    data=json.dumps(data).encode('utf-8'),
    headers={"Content-Type": "application/json", "X-Api-Key": "sk_4754c6fa6dc4151c083a01eb37662bf0ad514dbb3e144609"},
    method="POST")
with urllib.request.urlopen(req) as response: print(response.read())
```

### Key Contacts
- Nick: nflanagan1028@aol.com
- Bob Camilli: peter.camilli@verizon.net
