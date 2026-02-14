# ✅ Real Twilio Setup Checklist (5 min)

## Quick Start - Copy & Paste Instructions

### 1️⃣ GET FREE TWILIO ACCOUNT
```
Go to: https://www.twilio.com/try-twilio
Click "Sign up"
Verify email and phone
```

### 2️⃣ COPY THESE THREE VALUES

**In Twilio Dashboard**, copy:

- [ ] **Account SID** (looks like): `ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
- [ ] **Auth Token** (looks like): `1234567890abcdefabcdefabcdefabcd`  
- [ ] **Phone Number** (looks like): `+1234567890`

### 3️⃣ PASTE INTO .env FILE

Open: `c:\Users\dell\Downloads\System\ai-call-website\.env`

Find these lines and replace:

```
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_actual_auth_token
TWILIO_PHONE_NUMBER=+1234567890
DEMO_MODE=false
```

**With YOUR values:**

```
TWILIO_ACCOUNT_SID=AC1234567890abcdefghijklmnopqrst
TWILIO_AUTH_TOKEN=abcdefghijklmnopqrstuvwxyz123456
TWILIO_PHONE_NUMBER=+918787222966
DEMO_MODE=false
```

### 4️⃣ SAVE FILE & RESTART SERVER

```powershell
# In PowerShell, press Ctrl+C to stop server
# Then run:
cd ai-call-website
npm start
```

### 5️⃣ TEST REAL CALL

1. Go to: http://localhost:3000
2. Click **"📞 Make Direct Call"**
3. Enter:
   - Phone number: Your mobile (e.g., +918787222966)
   - Message: "Hello, this is a test call"
4. Click **"📞 Call Now"**
5. **📞 You'll get a REAL call!**

---

## Where to Find Your Credentials

### In Twilio Dashboard:

**Account SID & Auth Token:**
- Login to https://console.twilio.com
- You'll see them on the main dashboard
- Copy them exactly (no spaces)

**Phone Number:**
- Click "Phone Numbers" in sidebar
- Click "Manage Numbers"
- Click "Buy a Number" (or use assigned number)
- Copy in format: `+1234567890`

---

## Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Still showing "Demo Mode" | Did you set `DEMO_MODE=false`? Restart server. |
| "Invalid credentials" | Check Account SID starts with `AC`, no spaces |
| Call not connecting | Make sure phone number includes country code with `+` |
| No credits | Twilio free trial gives ~$15 credit, plenty for testing |

---

## Format Examples

✅ **Correct:**
- Account SID: `AC1234567890abcdef1234567890abcdef`
- Auth Token: `abcdefghijklmnopqrstuvwxyz123456`
- Phone (India): `+918787222966`
- Phone (USA): `+14155552671`

❌ **Wrong:**
- Account SID: `ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` (placeholder)
- Auth Token: `your_actual_auth_token` (placeholder)
- Phone: `918787222966` (missing +)
- Phone: `1234567890` (missing country code)

---

## You're Ready! 🚀

Follow the checklist above and your AI calling system will be live with REAL phone calls!

Need help? See `SETUP_REAL_CALLS.md` for detailed instructions.
