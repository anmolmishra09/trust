// Email service for sending verification codes
// Using EmailJS for client-side email sending

import emailjs from '@emailjs/browser'

const EMAIL_SERVICE_CONFIG = {
  serviceId: 'YOUR_EMAILJS_SERVICE_ID', // Replace with your EmailJS Service ID
  templateId: 'YOUR_EMAILJS_TEMPLATE_ID', // Replace with your EmailJS Template ID
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY' // Replace with your EmailJS Public Key
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
      storeVerificationCode(email, code)
      return { success: true }
    } else {
      console.error('Failed to send email:', response)
      return { success: false, error: `Failed to send email: ${response.text || 'Unknown error'}` }
    }
  } catch (error) {
    console.error('Error sending verification email:', error)
    
    // Check if EmailJS is not configured
    if (EMAIL_SERVICE_CONFIG.serviceId === 'YOUR_EMAILJS_SERVICE_ID' ||
        EMAIL_SERVICE_CONFIG.templateId === 'YOUR_EMAILJS_TEMPLATE_ID' ||
        EMAIL_SERVICE_CONFIG.publicKey === 'YOUR_EMAILJS_PUBLIC_KEY') {
      console.log('⚠️ EmailJS not configured! Please set up EmailJS following EMAILJS_SETUP.md')
      console.log(`FALLBACK - Verification code for ${email}: ${code}`)
      storeVerificationCode(email, code)
      return { 
        success: true,
        warning: 'EmailJS not configured. Code logged to console. Check EMAILJS_SETUP.md to enable real emails.'
      }
    }
    
    // Fallback to console logging for demo
    console.log(`FALLBACK - Verification code for ${email}: ${code}`)
    storeVerificationCode(email, code)
    
    return { 
      success: true,
      warning: 'Email service failed. Code logged to console for demo purposes.'
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
      to_email: 'test@example.com',
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
    return { success: false, error }
  }
}

// Setup helper for EmailJS configuration
export const setupEmailJS = () => {
  console.log('🚀 EmailJS Setup Helper')
  console.log('=======================')
  console.log('')
  console.log('1. Go to https://www.emailjs.com/')
  console.log('2. Create a free account')
  console.log('3. Add an email service (Gmail, Outlook, etc.)')
  console.log('4. Create an email template with these variables:')
  console.log('   - {{to_name}}')
  console.log('   - {{verification_code}}')
  console.log('   - {{from_name}}')
  console.log('5. Get your Service ID, Template ID, and Public Key')
  console.log('6. Update EMAIL_SERVICE_CONFIG in this file')
  console.log('7. Run testEmailJS() in browser console')
  console.log('')
  console.log('📖 See EMAILJS_SETUP.md for detailed instructions')
}

// Make setup helper available globally
if (typeof window !== 'undefined') {
  window.setupEmailJS = setupEmailJS
  window.testEmailJS = testEmailJS
}
