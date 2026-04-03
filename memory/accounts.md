# ACCOUNTS & PLATFORMS — Supervisor Agent
*Service accounts, integrations, and credentials*
*Updated: 2026-04-02*

---

## SendClaw (Outbound Email)
| Field | Value |
|-------|-------|
| **My email address** | super_nick@sendclaw.com |
| **API Key** | `sk_4754c6fa6dc4151c083a01eb37662bf0ad514dbb3e144609` |
| **API Base** | https://sendclaw.com/api |
| **Endpoint** | https://sendclaw.com/api/mail/send |
| **Credentials file** | /root/.openclaw/workspace/.credentials/sendclaw-api.txt |
| **Status** | ✅ Active |

**How to send:**
```python
import urllib.request, json
data = {"to": "recipient@email.com", "subject": "Subject", "body": "Body"}
req = urllib.request.Request("https://sendclaw.com/api/mail/send",
    data=json.dumps(data).encode('utf-8'),
    headers={"Content-Type": "application/json", "X-Api-Key": "sk_4754c6fa6dc4151c083a01eb37662bf0ad514dbb3e144609"},
    method="POST")
with urllib.request.urlopen(req) as response: print(response.read())
```

**Key contacts:**
- Nick: nflanagan1028@aol.com
- Bob Camilli: peter.camilli@verizon.net

---

## AOL Email (Inbound — Nick's Inbox)
| Field | Value |
|-------|-------|
| **Email** | nflanagan1028@aol.com |
| **App Password** | `qulzxxomlvrjulqs` |
| **IMAP Server** | imap.aol.com |
| **Port** | 993 (SSL) |
| **Status** | ✅ Active |

**Access via:** Python imaplib.IMAP4_SSL

**Important contacts found in AOL:**
- Peter Camilli: peter.camilli@verizon.net
- Ritchie Price (Calgi): rprice@calgiconstruction.com
- ABM HVAC: bhaskel@abmhvac.com
- Hanover Electric: hanoverelectric@optonline.net
- Paul Revans: rdpepc@gmail.com
- Edison Venegas (Tietjen): edison@tietjenpe.com
- Nick's other email: youalreadyknow1028@gmail.com

---

## Google Drive (rclone)
| Field | Value |
|-------|-------|
| **Remote name** | gdrive: |
| **Config** | /root/.config/rclone/rclone.conf |
| **Status** | ✅ Authenticated |
| **Drive path** | Super/ |

**Key paths:**
- `gdrive:Super/MASTER-TODO.md`
- `gdrive:Super/Daily Truth/` — Nick's raw field logs
- `gdrive:Super/Daily-reports/` — Bob Camilli daily reports
- `gdrive:Super/Active Projects/[Project]/` — Project folders
- `gdrive:Super/CRM/` — Contact records
- `gdrive:Super/Supers Notes and Logs/` — Supervisor logs

**Commands:**
```bash
rclone ls gdrive:Super/                    # List root
rclone copy gdrive:Super/MASTER-TODO.md ./ # Download
rclone sync ./ gdrive:Super/               # Upload (CAREFUL)
```

---

## Autodesk Construction Cloud
| Field | Value |
|-------|-------|
| **Access via** | Email notifications → nflanagan1028@aol.com |
| **Projects** | Mamaroneck Parks, Mamaroneck LMC |
| **Notifications** | Submittal updates, RFIs, drawings |
| **Status** | ✅ Connected via email |

---

## GitHub
| Field | Value |
|-------|-------|
| **Repo** | github.com/youalreadyknow1028-collab/super-vault |
| **Workspace sync** | Local workspace → GitHub (git push) |
| **Status** | ✅ Active |

---

## OpenClaw
| Field | Value |
|-------|-------|
| **Workspace** | /root/.openclaw/workspace-super/ |
| **Channel** | Telegram |
| **My SendClaw address** | super_nick@sendclaw.com |

---

## Credentials Files
| File | What it contains |
|------|-----------------|
| /root/.openclaw/workspace/.credentials/sendclaw-api.txt | SendClaw API key |
| /root/.config/rclone/rclone.conf | Google Drive rclone config |

---

*Last verified: 2026-04-02*
