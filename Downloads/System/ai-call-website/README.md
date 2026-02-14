# AI Call Website

A modern website with a contact page that enables AI-powered phone calls. When users click the "Make AI Call" button, the system automatically initiates an AI voice call to their phone number.

## Features

- 🎨 Modern, responsive website design
- 📞 One-click AI calling functionality
- 🤖 AI voice messages powered by Twilio
- 📧 Contact form with validation
- 🏠 Home and Contact pages
- 📱 Mobile-friendly interface
- ✅ Call status tracking

## Architecture

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js with Express.js
- **Calling Service**: Twilio API
- **Voice**: AI-powered text-to-speech

## Prerequisites

Before you begin, ensure you have:

1. **Node.js** (v14 or higher) installed on your system
2. **A Twilio account** (free trial available at https://www.twilio.com/try-twilio)
3. **A Twilio phone number** (for making outbound calls)

## Setup Instructions

### Step 1: Get Twilio Credentials

1. Sign up for a free Twilio account at [https://www.twilio.com/try-twilio](https://www.twilio.com/try-twilio)
2. Verify your phone number
3. Go to the Twilio Console Dashboard
4. Copy your:
   - **Account SID** - Found on the main dashboard
   - **Auth Token** - Found on the main dashboard
   - **Phone Number** - Purchase a phone number (available under Phone Numbers > Manage Numbers)

### Step 2: Install Dependencies

Navigate to the project directory and install required packages:

```bash
cd ai-call-website
npm install
```

### Step 3: Configure Environment Variables

1. Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

2. Edit the `.env` file and add your Twilio credentials:

```
TWILIO_ACCOUNT_SID=your_actual_account_sid
TWILIO_AUTH_TOKEN=your_actual_auth_token
TWILIO_PHONE_NUMBER=+1234567890
PORT=3000
```

### Step 4: Run the Server

Start the development server:

```bash
npm start
```

The server will run on `http://localhost:3000`

For development with auto-reload:

```bash
npm run dev
```

## Usage

### Access the Website

1. Open your browser and navigate to `http://localhost:3000`
2. Click on the "Contact" link in the navigation menu
3. Fill in the contact form:
   - **Your Name** - Your full name
   - **Your Phone Number** - The number where AI call will be sent
   - **Email Address** (optional)
   - **Message** - The message to be read by the AI

4. Click "📞 Make AI Call" button
5. You'll receive a call on your phone with the AI reading your message

## API Endpoints

### POST /api/make-call
Makes an AI call to the specified phone number.

**Request Body:**
```json
{
  "phoneNumber": "+1234567890",
  "message": "Your message here",
  "recipientName": "John",
  "email": "john@example.com"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Call initiated successfully",
  "callSid": "CA1234567890abcdef",
  "status": "queued"
}
```

### GET /api/call-status/:callSid
Check the status of a call.

**Response:**
```json
{
  "success": true,
  "callSid": "CA1234567890abcdef",
  "status": "completed",
  "duration": "45"
}
```

### POST /api/twiml
Internal endpoint that generates TwiML instructions for the call.

## File Structure

```
ai-call-website/
├── public/                 # Frontend files
│   ├── index.html         # Home page
│   ├── contact.html       # Contact page
│   ├── contact.js         # Contact form logic
│   └── styles.css         # Global styles
├── server.js              # Express server & API routes
├── package.json           # Project dependencies
├── .env.example          # Environment variables template
├── .env                  # Environment variables (not in git)
└── README.md             # This file
```

## Features in Detail

### Home Page
- Welcome message with value proposition
- Feature highlights
- Call-to-action button directing to contact page
- Beautiful gradient design

### Contact Page
- Professional contact form
- Form validation
- AI calling functionality
- Real-time status updates
- Alternative contact information

### AI Calling System
- Automatic call initiation
- Text-to-speech voice messaging
- Call status tracking
- Error handling and user feedback

## Customization

### Change AI Voice

In `server.js`, you can modify the voice used by Twilio. Options include:
- `alice` (default)
- `man`
- `woman`

Change the `voice` parameter in the TwiML response:

```javascript
twiml.say(
    { voice: 'man', language: 'en-US' },
    'Your message here'
);
```

### Customize Messages

Edit the greeting or farewell messages in `server.js`:

```javascript
twiml.say(
    { voice: 'alice', language: 'en-US' },
    'Your custom message here'
);
```

### Style Customization

Modify `public/styles.css` to change colors, fonts, and layout. The current color scheme uses:
- Primary: `#667eea` (purple)
- Secondary: `#764ba2` (dark purple)

## Production Deployment

### Using Ngrok for HTTPS (for testing webhooks)

1. Install ngrok: https://ngrok.com/download
2. Run ngrok:
```bash
ngrok http 3000
```
3. Update your `.env`:
```
NGROK_URL=https://your-ngrok-url.ngrok.io
```

### Deploy to Production

1. Use a hosting service (Heroku, AWS, Azure, etc.)
2. Set environment variables on the hosting platform
3. Ensure HTTPS is enabled
4. Update Twilio webhook configuration

## Troubleshooting

### Issue: "401 Unauthorized" error
- Check your Twilio Account SID and Auth Token
- Verify they're correctly copied in the `.env` file

### Issue: Call not connecting
- Verify your phone number is in the correct format (E.164: +1234567890)
- Check that your Twilio account has sufficient credits (free trial has limited calls)
- Ensure your Twilio phone number supports outbound calls

### Issue: CORS errors
- The server is configured with CORS enabled
- If issues persist, check your browser's developer console

### Issue: "Callback URL not accessible"
- If testing locally, use ngrok to create a public URL
- Update the NGROK_URL in `.env`
- Ensure ngrok is running

## Security Considerations

⚠️ **Important:**
- Never commit your `.env` file to version control
- Keep your Twilio credentials secure
- In production, use environment variables from your hosting provider
- Implement rate limiting to prevent abuse
- Validate and sanitize all user inputs

## Limitations

- Twilio free trial has limitations on call duration and number of calls
- Messages must follow Twilio's acceptable use policy
- Phone numbers must be in valid E.164 format
- Not all countries support outbound calling

## Support

For issues with:
- **Twilio**: Visit https://support.twilio.com
- **Node.js/Express**: Check https://nodejs.org or https://expressjs.com
- **This Project**: Review the code comments and error messages

## License

This project is open source and available for educational and commercial use.

## Version History

- **v1.0.0** (Feb 2026) - Initial release

---

**Happy calling! 🎉**
