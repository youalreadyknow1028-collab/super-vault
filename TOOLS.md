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

## AOL Email (NICK'S INBOX)

**AOL Email:** nflanagan1028@aol.com
**App Password:** qulzxxomlvrjulqs
**IMAP Server:** imap.aol.com (port 993, SSL)

### Credentials File
/root/.openclaw/workspace/.credentials/aol-imap.txt
Format: one line — email:password

### How to Connect (Python imaplib)
```python
import imaplib
import email
from email.header import decode_header

# Connect
mail = imaplib.IMAP4_SSL("imap.aol.com", 993)
mail.login("nflanagan1028@aol.com", "qulzxxomlvrjulqs")
mail.select("INBOX")

# Search all emails (most recent first)
status, messages = mail.search(None, "ALL")
email_ids = messages[0].split()
print(f"Total emails: {len(email_ids)}")

# Get 5 most recent
for eid in email_ids[-5:]:
    status, msg_data = mail.fetch(eid, "(RFC822)")
    msg = email.message_from_bytes(msg_data[0][1])
    subject = decode_header(msg["Subject"])[0]
    sender = msg["From"]
    date = msg["Date"]
    print(f"\nFrom: {sender}\nSubject: {subject}\nDate: {date}")

mail.logout()
```

### How to Search Emails
```python
import imaplib, email
from email.header import decode_header

mail = imaplib.IMAP4_SSL("imap.aol.com", 993)
mail.login("nflanagan1028@aol.com", "qulzxxomlvrjulqs")
mail.select("INBOX")

# Search by subject keyword
status, messages = mail.search(None, 'SUBJECT "Bob"')
ids = messages[0].split()

# Search by sender
status, messages = mail.search(None, 'FROM "peter.camilli@verizon.net"')
ids = messages[0].split()

# Search unread only
status, messages = mail.search(None, 'UNSEEN')
ids = messages[0].split()

# Search by date (SINCE dd-Mon-YYYY)
status, messages = mail.search(None, 'SINCE "01-Mar-2026"')
ids = messages[0].split()

# Fetch the email body
for eid in ids[-3:]:
    status, msg_data = mail.fetch(eid, "(RFC822)")
    msg = email.message_from_bytes(msg_data[0][1])
    body = ""
    if msg.is_multipart():
        for part in msg.walk():
            if part.get_content_type() == "text/plain":
                body = part.get_payload(decode=True).decode()
                break
    else:
        body = msg.get_payload(decode=True).decode()
    print(body[:500])

mail.logout()
```

### Key Contacts (from AOL emails)
| Person | Company | Email |
|--------|---------|-------|
| Peter/Bob Camilli | Peter Camilli & Sons | peter.camilli@verizon.net |
| Ritchie Price | Calgi Construction | rprice@calgiconstruction.com |
| Paul Revans | MEP Engineer | rdpepc@gmail.com |
| David Tetro | Architect | dtetarchitect@gmail.com |
| Andrew | Advanced Wall Systems (EIFS) | |
| Ruben | ABM HVAC | |
| Mike | Hanover Electric | hanoverelectric@optonline.net |
| Eugene | Neighbor Electric | |
| Katarina Legener | Tectonic Surveying | |
| Rob Wasp | Town of Mamaroneck Eng | RWasp@townofmamaroneckny.gov |
| Richie Puleo | Spruce Contracting | |

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
