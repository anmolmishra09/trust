// Quick Call Modal Functions
function openQuickCall() {
    document.getElementById('quickCallModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeQuickCall() {
    document.getElementById('quickCallModal').classList.add('hidden');
    document.getElementById('quickCallForm').reset();
    document.getElementById('quickCallStatus').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('quickCallModal');
    if (event.target === modal) {
        closeQuickCall();
    }
}

// Handle Quick Call Form Submission
async function handleQuickCall(event) {
    event.preventDefault();

    const phone = document.getElementById('quickPhone').value;
    const message = document.getElementById('quickMessage').value;
    const statusDiv = document.getElementById('quickCallStatus');
    const form = document.getElementById('quickCallForm');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!phone || !message) {
        showQuickCallStatus('❌ Error', 'Please fill in all fields', 'error');
        return;
    }

    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '📞 Calling...';

    try {
        const response = await fetch('/api/make-call', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phoneNumber: phone,
                message: message,
                recipientName: 'User'
            })
        });

        const data = await response.json();

        if (data.success) {
            showQuickCallStatus(
                '✅ Call Initiated!',
                `AI call is now being made to ${phone}. The recipient will hear the message shortly.`,
                'success'
            );

            // Close modal after 3 seconds
            setTimeout(() => {
                closeQuickCall();
            }, 3000);

            // Reset form
            form.reset();

            // Poll for status if call SID is available
            if (data.callSid) {
                pollQuickCallStatus(data.callSid);
            }
        } else {
            showQuickCallStatus('❌ Error', data.error || 'Failed to initiate call', 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        showQuickCallStatus('❌ Error', 'Network error. Please try again.', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
}

function showQuickCallStatus(title, message, type) {
    const statusDiv = document.getElementById('quickCallStatus');
    statusDiv.innerHTML = `
        <div class="status-content">
            <h3>${title}</h3>
            <p>${message}</p>
        </div>
    `;
    statusDiv.classList.remove('hidden', 'success', 'error');
    statusDiv.classList.add(type);
}

function pollQuickCallStatus(callSid, attempts = 0, maxAttempts = 5) {
    if (attempts >= maxAttempts) return;

    setTimeout(async () => {
        try {
            const response = await fetch(`/api/call-status/${callSid}`);
            const data = await response.json();

            if (data.success && data.status === 'in-progress') {
                pollQuickCallStatus(callSid, attempts + 1, maxAttempts);
            }
        } catch (error) {
            console.error('Error polling call status:', error);
        }
    }, 2000);
}
