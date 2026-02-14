# Setting Up Real AI Phone Calls

This guide will help you configure real Twilio credentials to make actual AI phone calls.

## ⏱️ Time Required: ~5 minutes

---

## Step 1: Create a Free Twilio Account

1. Go to **https://www.twilio.com/try-twilio**
2. Click "Sign up"
3. Enter your details:
   - Email
   - Password
   - Phone number (this will be verified)
4. Verify your email and phone number

---

## Step 2: Get Your Twilio Credentials

### Get Account SID and Auth Token:
1. After logging in, you'll see the **Dashboard**
2. Look for the **Account SID** - it looks like: `AC1234567890abcdef1234567890abcdef`
3. Look for the **Auth Token** - it looks like: `1234567890abcdef1234567890abcdef`
4. **Copy both of these carefully** - you'll need them

### Get a Twilio Phone Number:
1. In your Twilio account, go to **Phone Numbers** on the left menu
2. Click **Manage Numbers**
3. Click **Buy a Number** (free trial gets some free numbers)
4. Select your country
5. You'll get a number like: `+1234567890`
6. **Copy this number**

---

## Step 3: Update Your .env File

Open this file in a text editor:
```
c:\Users\dell\Downloads\System\ai-call-website\.env
```

Replace the placeholder values with your real Twilio credentials:

```
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token_here_1234567890abcdef
TWILIO_PHONE_NUMBER=+1234567890
DEMO_MODE=false
```

**Example:**
```
TWILIO_ACCOUNT_SID=AC1234567890abcdef1234567890abcdef
TWILIO_AUTH_TOKEN=1234567890abcdefabcdefabcdefabcd
TWILIO_PHONE_NUMBER=+18005551234
DEMO_MODE=false
```

---

## Step 4: Restart the Server

After saving the `.env` file:

1. Stop the current server (press Ctrl+C in the terminal)
2. Run: `npm start`
3. The server will start with real Twilio enabled

---

## Step 5: Test a Real Call

1. Open http://localhost:3000
2. Click **"📞 Make Direct Call"**
3. Enter:
   - **Recipient's Phone Number**: Your actual phone number (e.g., +918787222966)
   - **Message**: What you want the AI to say
4. Click **"📞 Call Now"**
5. **You'll receive a real phone call!** 📞

---

## Troubleshooting

### "Still showing demo mode"
- Make sure you saved the `.env` file ✅
- Restart the server completely
- Check that `DEMO_MODE=false` (not `true`)

### "Call not connecting"
- Verify your Twilio Account SID starts with "AC"
- Check your Auth Token is correct
- Verify the phone number format: `+1234567890` (with country code)
- Make sure your Twilio account has credits (free trial has some)

### "Authentication Error"
- Double-check Account SID and Auth Token
- They should be **exactly** what Twilio shows
- No spaces or extra characters

---

## Important Notes

⚠️ **Security:**
- Never share your Auth Token
- Keep your `.env` file private
- Add `.env` to `.gitignore` (already done)

📱 **Phone Numbers:**
- Use E.164 format: `+[country code][number]`
- Example: `+918787222966` ✅
- Example: `+14155552671` ✅

💰 **Free Trial Limits:**
- Twilio free trial gives you about $15-20 in credits
- Each call costs about $0.01-0.05 depending on destination
- Plenty for testing!

---

## Need Help?

- Twilio Docs: https://www.twilio.com/docs
- Twilio Support: https://support.twilio.com
- Check server logs for error messages

---

**You're ready! Set up your Twilio account and enjoy real AI calls! 🎉**
