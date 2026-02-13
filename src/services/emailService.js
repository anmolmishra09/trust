// Email service for sending verification codes
// Using EmailJS for client-side email sending

const EMAIL_SERVICE_CONFIG = {
  serviceId: 'service_3l7xbwb', // EmailJS service ID
  templateId: 'template_jk8m6qr', // EmailJS template ID
  publicKey: 'q7K8vXQFZLH0dG9RU' // EmailJS public key
}

// Generate a random 6-digit verification code
export const generateVerificationCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// Store verification code temporarily (in production, use secure backend)
const VERIFICATION_CODES_KEY = 'verificationCodes'

export const storeVerificationCode = (email, code) => {
  const codes = JSON.parse(localStorage.getItem(VERIFICATION_CODES_KEY) || '{}')
  codes[email] = {
    code,
    timestamp: Date.now(),
    expiresIn: 10 * 60 * 1000 // 10 minutes
  }
  localStorage.setItem(VERIFICATION_CODES_KEY, JSON.stringify(codes))
}

export const verifyCode = (email, code) => {
  const codes = JSON.parse(localStorage.getItem(VERIFICATION_CODES_KEY) || '{}')
  const stored = codes[email]
  
  if (!stored) {
    return { success: false, error: 'No verification code found for this email' }
  }
  
  // Check if code has expired
  if (Date.now() - stored.timestamp > stored.expiresIn) {
    delete codes[email]
    localStorage.setItem(VERIFICATION_CODES_KEY, JSON.stringify(codes))
    return { success: false, error: 'Verification code has expired' }
  }
  
  // Verify code
  if (stored.code !== code) {
    return { success: false, error: 'Invalid verification code' }
  }
  
  // Remove used code
  delete codes[email]
  localStorage.setItem(VERIFICATION_CODES_KEY, JSON.stringify(codes))
  
  return { success: true }
}

// Send verification email using EmailJS
export const sendVerificationEmail = async (email, code, userName) => {
  try {
    // Import EmailJS
    const emailjs = await import('https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js')
    
    // Initialize EmailJS with public key
    emailjs.default.init(EMAIL_SERVICE_CONFIG.publicKey)
    
    const templateParams = {
      to_email: email,
      to_name: userName || 'User',
      verification_code: code,
      from_name: 'Trusted Escort',
      message: `Your verification code is: ${code}. This code will expire in 10 minutes.`
    }
    
    console.log(`Attempting to send verification code to ${email}`)
    
    const response = await emailjs.default.send(
      EMAIL_SERVICE_CONFIG.serviceId,
      EMAIL_SERVICE_CONFIG.templateId,
      templateParams
    )
    
    if (response.status === 200) {
      console.log('Email sent successfully!')
      storeVerificationCode(email, code)
      return { success: true }
    } else {
      console.error('Failed to send email:', response)
      return { success: false, error: 'Failed to send email' }
    }
  } catch (error) {
    console.error('Error sending verification email:', error)
    
    // Fallback to console logging for demo
    console.log(`FALLBACK - Verification code for ${email}: ${code}`)
    storeVerificationCode(email, code)
    
    return { 
      success: true,
      warning: 'Email service not configured. Code logged to console for demo purposes.'
    }
  }
}

// Resend verification code
export const resendVerificationCode = async (email, userName) => {
  const newCode = generateVerificationCode()
  return await sendVerificationEmail(email, newCode, userName)
}
