# Quick Start Guide

Get your AI Call Website running in 5 minutes!

## 1. Get Twilio Ready (2 mins)

1. Go to [https://www.twilio.com/try-twilio](https://www.twilio.com/try-twilio)
2. Sign up and verify your phone number
3. Copy your **Account SID** and **Auth Token** from dashboard
4. Get a phone number (free in trial) under Phone Numbers

## 2. Install Dependencies (1 min)

Open PowerShell/Command Prompt in the project folder:

```bash
npm install
```

## 3. Configure (1 min)

Copy and rename the template file:

```bash
copy .env.example .env
```

Edit `.env` with your Twilio credentials:

```
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=+12125551234
PORT=3000
```

## 4. Run (1 min)

```bash
npm start
```

Open browser: `http://localhost:3000`

## 5. Make Your First Call

1. Click "Contact" in the menu
2. Fill the form with your phone number
3. Click "📞 Make AI Call"
4. Get a call on your phone!

---

## Troubleshooting

**Port already in use?**
```bash
PORT=3001 npm start
```

**Module not found?**
```bash
npm install
```

**Call not working?**
- Check Account SID and Auth Token
- Verify phone number format: +1234567890
- Check Twilio trial credits

---

Need more help? See [README.md](README.md)
