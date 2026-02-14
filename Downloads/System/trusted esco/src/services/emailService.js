// Email service for sending verification codes
// Using EmailJS for client-side email sending

import emailjs from '@emailjs/browser'

const EMAIL_SERVICE_CONFIG = {
  serviceId: 'service_bm2werv', // Replace with your EmailJS Service ID
  templateId: 'template_0z7x46w', // Replace with your EmailJS Template ID
  publicKey: '6cFWHndxg04Cs1zsX' // Replace with your EmailJS Public Key
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
  
  // Trim whitespace from input code
  const trimmedCode = code.trim()
  
  console.log('Verification attempt:', { email, code: trimmedCode, stored })
  
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
  if (stored.code !== trimmedCode) {
    console.log('Code mismatch:', { stored: stored.code, entered: trimmedCode })
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
    // Initialize EmailJS with public key
    emailjs.init(EMAIL_SERVICE_CONFIG.publicKey)
    
    const templateParams = {
      to_email: email,
      to_name: userName || 'User',
      verification_code: code,
      from_name: 'Trusted Escort',
      message: `Your verification code is: ${code}. This code will expire in 10 minutes.`
    }
    
    console.log('EmailJS Config:', EMAIL_SERVICE_CONFIG)
    console.log('Template Params:', templateParams)
    console.log(`Attempting to send verification code to ${email}`)
    
    const response = await emailjs.send(
      EMAIL_SERVICE_CONFIG.serviceId,
      EMAIL_SERVICE_CONFIG.templateId,
      templateParams
    )
    
    console.log('EmailJS Response:', response)
    
    if (response.status === 200) {
      console.log('Email sent successfully!')
      console.log(`DEBUG - Verification code for ${email}: ${code}`)
      storeVerificationCode(email, code)
      return { success: true }
    } else {
      console.error('Failed to send email:', response)
      return { success: false, error: `Failed to send email: ${response.text || 'Unknown error'}` }
    }
  } catch (error) {
    console.error('Error sending verification email:', error)
    
    // For debugging, always store the code and return success
    console.log(`DEBUG - EmailJS failed, falling back to console. Verification code for ${email}: ${code}`)
    storeVerificationCode(email, code)
    return { 
      success: true,
      warning: 'Email service failed. Code logged to console for debugging.'
    }
  }
}

// Resend verification code
export const resendVerificationCode = async (email, userName) => {
  const newCode = generateVerificationCode()
  return await sendVerificationEmail(email, newCode, userName)
}

// Test EmailJS connection (call this from browser console)
export const testEmailJS = async () => {
  if (EMAIL_SERVICE_CONFIG.serviceId === 'YOUR_EMAILJS_SERVICE_ID') {
    console.log('❌ EmailJS not configured!')
    console.log('📖 Please follow EMAILJS_SETUP.md to set up EmailJS')
    console.log('🔗 https://www.emailjs.com/')
    return { success: false, error: 'EmailJS not configured' }
  }
  
  try {
    console.log('🧪 Testing EmailJS connection...')
    console.log('Config:', EMAIL_SERVICE_CONFIG)
    
    emailjs.init(EMAIL_SERVICE_CONFIG.publicKey)
    
    const testParams = {
      to_email: 'trustedescort53@gmail.com', // Use the test email
      to_name: 'Test User',
      verification_code: '123456',
      from_name: 'Trusted Escort',
      message: 'This is a test email from Trusted Escort.'
    }
    
    const response = await emailjs.send(
      EMAIL_SERVICE_CONFIG.serviceId,
      EMAIL_SERVICE_CONFIG.templateId,
      testParams
    )
    
    console.log('✅ Test successful:', response)
    return { success: true, response }
  } catch (error) {
    console.error('❌ Test failed:', error)
    console.log('💡 Check your EmailJS configuration in emailService.js')
    console.log('💡 Make sure your template includes: {{to_name}}, {{verification_code}}, {{from_name}}')
    return { success: false, error }
  }
}

// Debug function to check stored codes
export const debugVerificationCodes = () => {
  const codes = JSON.parse(localStorage.getItem(VERIFICATION_CODES_KEY) || '{}')
  console.log('Stored verification codes:', codes)
  
  const now = Date.now()
  Object.entries(codes).forEach(([email, data]) => {
    const expired = now - data.timestamp > data.expiresIn
    console.log(`Email: ${email}, Code: ${data.code}, Expired: ${expired}`)
  })
  
  return codes
}

// Manual verification function for debugging
export const manualVerify = (email, code) => {
  console.log(`Manual verification for ${email} with code ${code}`)
  return verifyCode(email, code)
}

// Make setup helper available globally
if (typeof window !== 'undefined') {
  window.setupEmailJS = setupEmailJS
  window.testEmailJS = testEmailJS
  window.debugVerificationCodes = debugVerificationCodes
  window.manualVerify = manualVerify
}
