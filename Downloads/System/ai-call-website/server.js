const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const twilio = require('twilio');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Twilio credentials (set these in .env file)
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const demoMode = process.env.DEMO_MODE === 'true';

// Validate Twilio credentials
let client = null;
if (demoMode) {
    console.log('\n✅ DEMO MODE ENABLED - Simulating calls without Twilio credentials');
    console.log('To use real Twilio calls, update your .env file with real credentials.\n');
} else if (accountSid && authToken && accountSid.startsWith('AC')) {
    client = twilio(accountSid, authToken);
    console.log('✅ Twilio configured successfully!\n');
} else {
    console.warn('\n⚠️  Twilio not configured. Call functionality in demo mode only.');
    console.warn('To enable real calls, add your Twilio credentials to the .env file.\n');
}

// Route: Serve HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Route: Handle AI call
app.post('/api/make-call', async (req, res) => {
    const { phoneNumber, message, recipientName } = req.body;

    // Validate input
    if (!phoneNumber || !message) {
        return res.status(400).json({ 
            success: false, 
            error: 'Phone number and message are required' 
        });
    }

    // Demo mode - simulate a call
    if (demoMode) {
        const mockCallSid = 'CA' + Math.random().toString(36).substr(2, 9).toUpperCase() + 
                           Math.random().toString(36).substr(2, 9).toUpperCase();
        
        console.log(`\n📞 DEMO CALL SIMULATED:`);
        console.log(`   To: ${phoneNumber}`);
        console.log(`   Message: ${message}`);
        console.log(`   Call SID: ${mockCallSid}\n`);
        
        return res.json({
            success: true,
            message: 'Call simulated successfully (DEMO MODE)',
            callSid: mockCallSid,
            status: 'queued',
            isDemoMode: true
        });
    }

    // Check if real Twilio is configured
    if (!client) {
        return res.status(503).json({
            success: false,
            error: 'Twilio service not configured. Please add your Twilio credentials to the .env file.'
        });
    }

    try {
        // Make the call using Twilio
        const call = await client.calls.create({
            url: `${process.env.NGROK_URL || 'http://localhost:3000'}/api/twiml`,
            to: phoneNumber,
            from: fromPhoneNumber,
            method: 'POST'
        });

        res.json({
            success: true,
            message: 'Call initiated successfully',
            callSid: call.sid,
            status: call.status
        });

    } catch (error) {
        console.error('Error making call:', error);
        res.status(500).json({
            success: false,
            error: error.message || 'Failed to make the call'
        });
    }
});

// Route: TwiML endpoint for call content
app.post('/api/twiml', (req, res) => {
    const twiml = new twilio.twiml.VoiceResponse();
    
    // AI message to be played
    twiml.say(
        { voice: 'alice', language: 'en-US' },
        'Hi! This is an AI call from our contact website. Thank you for connecting with us!'
    );
    
    twiml.pause({ length: 1 });
    
    twiml.say(
        { voice: 'alice', language: 'en-US' },
        'We will be in touch with you soon. Goodbye!'
    );

    res.type('text/xml');
    res.send(twiml.toString());
});

// Route: Check call status
app.get('/api/call-status/:callSid', async (req, res) => {
    // Demo mode - simulate completed call
    if (demoMode) {
        return res.json({
            success: true,
            callSid: req.params.callSid,
            status: 'completed',
            duration: '45'
        });
    }

    if (!client) {
        return res.status(503).json({
            success: false,
            error: 'Twilio service not configured'
        });
    }

    try {
        const call = await client.calls(req.params.callSid).fetch();
        res.json({
            success: true,
            callSid: call.sid,
            status: call.status,
            duration: call.duration
        });
    } catch (error) {
        console.error('Error fetching call status:', error);
        res.status(500).json({
            success: false,
            error: error.message || 'Failed to fetch call status'
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Navigate to http://localhost:3000/contact to access the contact page');
});
