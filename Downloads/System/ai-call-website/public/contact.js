document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const submitBtn = document.getElementById('submitBtn');

    // Validate form
    if (!name || !phone || !message) {
        showStatus('Error', 'Please fill in all required fields.', 'error');
        return;
    }

    // Disable button and show loading state
    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '📞 Making Call...';

    try {
        // Make API call to backend
        const response = await fetch('/api/make-call', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phoneNumber: phone,
                message: message,
                recipientName: name,
                email: email
            })
        });

        const data = await response.json();

        if (data.success) {
            // Show success message
            const demoInfo = data.isDemoMode ? '\n\n⚠️ DEMO MODE: This is a simulated call. For real calls, add Twilio credentials to .env' : '';
            showStatus(
                '✅ Call Initiated Successfully!',
                `Your AI call has been queued and will be delivered shortly to ${phone}${demoInfo}`,
                'success',
                data.callSid
            );

            // Reset form
            document.getElementById('contactForm').reset();

            // Poll for call status
            if (data.callSid) {
                pollCallStatus(data.callSid);
            }
        } else {
            showStatus('❌ Error', data.error || 'Failed to make the call. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        showStatus('❌ Error', 'An error occurred. Please check your connection and try again.', 'error');
    } finally {
        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
});

function showStatus(title, message, type, callSid = null) {
    const statusDiv = document.getElementById('callStatus');
    const statusTitle = document.getElementById('statusTitle');
    const statusMessage = document.getElementById('statusMessage');
    const statusDetails = document.getElementById('statusDetails');

    statusTitle.textContent = title;
    statusMessage.textContent = message;

    if (callSid) {
        statusDetails.innerHTML = `<p><strong>Call ID:</strong> ${callSid}</p>`;
    } else {
        statusDetails.innerHTML = '';
    }

    statusDiv.classList.remove('hidden', 'success', 'error');
    statusDiv.classList.add('show', type);

    // Auto-hide after 8 seconds for success messages
    if (type === 'success') {
        setTimeout(() => {
            closeStatus();
        }, 8000);
    }
}

function closeStatus() {
    document.getElementById('callStatus').classList.add('hidden');
}

function pollCallStatus(callSid, attempts = 0, maxAttempts = 10) {
    if (attempts >= maxAttempts) {
        console.log('Max polling attempts reached');
        return;
    }

    setTimeout(async () => {
        try {
            const response = await fetch(`/api/call-status/${callSid}`);
            const data = await response.json();

            if (data.success) {
                const status = data.status.toLowerCase();
                console.log(`Call ${callSid} status: ${status}`);

                // Continue polling if call is in progress
                if (status === 'in-progress' || status === 'queued') {
                    pollCallStatus(callSid, attempts + 1, maxAttempts);
                } else if (status === 'completed') {
                    console.log('Call completed successfully');
                    // Optionally update UI with completion status
                } else if (status === 'failed' || status === 'no-answer') {
                    console.log(`Call ended with status: ${status}`);
                }
            }
        } catch (error) {
            console.error('Error polling call status:', error);
        }
    }, 2000); // Poll every 2 seconds
}
