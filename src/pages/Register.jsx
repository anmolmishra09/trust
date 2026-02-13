import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { registerUser } from '../services/profileService'
import { generateVerificationCode, sendVerificationEmail, verifyCode, resendVerificationCode } from '../services/emailService'

function Register() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1) // 1: Form, 2: Verification, 3: Success
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    phone: '',
    agreeToTerms: false,
  })

  const [verificationCode, setVerificationCode] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [resendTimer, setResendTimer] = useState(0)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business/Display name is required'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!formData.phone.match(/^[0-9]{10}$/)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)
    
    try {
      // Generate and send verification code
      const code = generateVerificationCode()
      const result = await sendVerificationEmail(formData.email, code, formData.businessName)
      
      if (result.success) {
        // Move to verification step
        setStep(2)
        setErrors({})
        startResendTimer()
      } else {
        setErrors({ submit: result.error || 'Failed to send verification email. Please try again.' })
      }
    } catch (error) {
      setErrors({ submit: error.message || 'Failed to send verification email. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerification = async (e) => {
    e.preventDefault()
    
    if (!verificationCode || verificationCode.length !== 6) {
      setErrors({ verification: 'Please enter a valid 6-digit code' })
      return
    }

    setIsLoading(true)
    
    try {
      // Verify the code
      const verification = verifyCode(formData.email, verificationCode)
      
      if (!verification.success) {
        setErrors({ verification: verification.error })
        setIsLoading(false)
        return
      }
      
      // Code verified, now create the account
      await registerUser({
        email: formData.email,
        password: formData.password,
        businessName: formData.businessName,
        phone: formData.phone,
      })
      
      // Move to success step
      setStep(3)
      setErrors({})
      
      // Redirect to sign in after 3 seconds
      setTimeout(() => {
        navigate('/signin', { state: { message: 'Registration successful! Please sign in.' } })
      }, 3000)
    } catch (error) {
      setErrors({ verification: error.message || 'Account creation failed. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendCode = async () => {
    if (resendTimer > 0) return
    
    setIsLoading(true)
    try {
      const result = await resendVerificationCode(formData.email, formData.businessName)
      
      if (result.success) {
        setErrors({})
        startResendTimer()
        alert('Verification code resent successfully!')
      } else {
        setErrors({ verification: result.error || 'Failed to resend code. Please try again.' })
      }
    } catch (error) {
      setErrors({ verification: error.message || 'Failed to resend code. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const startResendTimer = () => {
    setResendTimer(60)
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <>
      <Helmet>
        <title>Register | Trusted Escort</title>
        <meta name="title" content="Register | Trusted Escort" />
        <meta name="description" content="Create your Trusted Escort account. Join our community and access premium escort services." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-dark-bg pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="bg-dark-card border border-gold/20 rounded-xl p-8 backdrop-blur-sm">
              {/* Step 1: Registration Form */}
              {step === 1 && (
                <>
                  <h1 className="text-4xl font-serif font-bold mb-2">
                    Create <span className="text-gold">Account</span>
                  </h1>
                  <p className="text-gray-400 mb-8">Join our exclusive community</p>

                  {/* Error Message */}
                  {errors.submit && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-400"
                    >
                      {errors.submit}
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={`w-full px-4 py-3 bg-dark-bg border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gold transition ${
                          errors.email ? 'border-red-500' : 'border-gold/30 hover:border-gold/50'
                        }`}
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
                    </div>

                    {/* Business Name Field */}
                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium text-gray-300 mb-2">
                        Business/Display Name *
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Enter your business or display name"
                        className={`w-full px-4 py-3 bg-dark-bg border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gold transition ${
                          errors.businessName ? 'border-red-500' : 'border-gold/30 hover:border-gold/50'
                        }`}
                      />
                      {errors.businessName && <p className="text-red-400 text-sm mt-2">{errors.businessName}</p>}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter 10-digit phone number"
                        className={`w-full px-4 py-3 bg-dark-bg border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gold transition ${
                          errors.phone ? 'border-red-500' : 'border-gold/30 hover:border-gold/50'
                        }`}
                      />
                      {errors.phone && <p className="text-red-400 text-sm mt-2">{errors.phone}</p>}
                    </div>

                    {/* Password Field */}
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                        Password *
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Create a password (min. 6 characters)"
                          className={`w-full px-4 py-3 bg-dark-bg border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gold transition ${
                            errors.password ? 'border-red-500' : 'border-gold/30 hover:border-gold/50'
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-gray-400 hover:text-gold transition"
                        >
                          {showPassword ? '👁️' : '👁️‍🗨️'}
                        </button>
                      </div>
                      {errors.password && <p className="text-red-400 text-sm mt-2">{errors.password}</p>}
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm your password"
                          className={`w-full px-4 py-3 bg-dark-bg border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gold transition ${
                            errors.confirmPassword ? 'border-red-500' : 'border-gold/30 hover:border-gold/50'
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-3 text-gray-400 hover:text-gold transition"
                        >
                          {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                        </button>
                      </div>
                      {errors.confirmPassword && <p className="text-red-400 text-sm mt-2">{errors.confirmPassword}</p>}
                    </div>

                    {/* Terms Agreement */}
                    <div>
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="agreeToTerms"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          className="w-4 h-4 mt-1 bg-dark-bg border border-gold/30 rounded cursor-pointer accent-gold"
                        />
                        <label htmlFor="agreeToTerms" className="ml-3 text-sm text-gray-400 cursor-pointer">
                          I agree to the{' '}
                          <Link to="/terms" className="text-gold hover:text-gold/80 transition">
                            Terms and Conditions
                          </Link>
                          {' '}and{' '}
                          <Link to="/privacy-policy" className="text-gold hover:text-gold/80 transition">
                            Privacy Policy
                          </Link>
                        </label>
                      </div>
                      {errors.agreeToTerms && <p className="text-red-400 text-sm mt-2">{errors.agreeToTerms}</p>}
                    </div>

                    {/* Register Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70 text-dark-bg font-bold py-3 rounded-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                    >
                      {isLoading ? 'Sending Code...' : 'Create Account'}
                    </button>
                  </form>

                  {/* Links */}
                  <div className="mt-6">
                    <p className="text-center text-gray-400">
                      Already have an account?{' '}
                      <Link to="/signin" className="text-gold font-semibold hover:text-gold/80 transition">
                        Sign In
                      </Link>
                    </p>
                  </div>
                </>
              )}

              {/* Step 2: Email Verification */}
              {step === 2 && (
                <>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-4">
                      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h1 className="text-3xl font-serif font-bold mb-2">
                      Verify Your <span className="text-gold">Email</span>
                    </h1>
                    <p className="text-gray-400 mb-2">
                      We've sent a 6-digit verification code to
                    </p>
                    <p className="text-gold font-semibold mb-4">{formData.email}</p>
                    
                    {/* Info Message */}
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 text-sm text-blue-300">
                      <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <div className="text-left">
                          <p className="font-semibold mb-1">Check your email inbox</p>
                          <p className="text-xs text-blue-400">
                            • Check your spam/junk folder if you don't see it
                            <br />• Email may take up to 1 minute to arrive
                            <br />• For demo: Check browser console (F12) if email not configured
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Error Message */}
                  {errors.verification && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-400"
                    >
                      {errors.verification}
                    </motion.div>
                  )}

                  <form onSubmit={handleVerification} className="space-y-6">
                    {/* Verification Code Input */}
                    <div>
                      <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-300 mb-2 text-center">
                        Enter Verification Code
                      </label>
                      <input
                        type="text"
                        id="verificationCode"
                        value={verificationCode}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '').slice(0, 6)
                          setVerificationCode(value)
                          if (errors.verification) {
                            setErrors({})
                          }
                        }}
                        placeholder="000000"
                        maxLength={6}
                        className="w-full px-4 py-4 bg-dark-bg border border-gold/30 hover:border-gold/50 rounded-lg text-white text-center text-2xl tracking-widest placeholder-gray-600 focus:outline-none focus:border-gold transition"
                      />
                      <p className="text-gray-500 text-xs text-center mt-2">
                        Enter the 6-digit code sent to your email
                      </p>
                    </div>

                    {/* Verify Button */}
                    <button
                      type="submit"
                      disabled={isLoading || verificationCode.length !== 6}
                      className="w-full bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70 text-dark-bg font-bold py-3 rounded-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                    >
                      {isLoading ? 'Verifying...' : 'Verify & Create Account'}
                    </button>
                  </form>

                  {/* Resend Code */}
                  <div className="mt-6 text-center">
                    <p className="text-gray-400 text-sm mb-2">Didn't receive the code?</p>
                    <button
                      onClick={handleResendCode}
                      disabled={resendTimer > 0 || isLoading}
                      className="text-gold hover:text-gold/80 font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend Code'}
                    </button>
                  </div>

                  {/* Back Button */}
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => setStep(1)}
                      className="text-gray-400 hover:text-gold text-sm transition"
                    >
                      ← Back to registration
                    </button>
                  </div>
                </>
              )}

              {/* Step 3: Success */}
              {step === 3 && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h1 className="text-4xl font-serif font-bold mb-4">
                    Account Created <span className="text-gold">Successfully!</span>
                  </h1>
                  <p className="text-gray-400 mb-2">
                    Welcome to Trusted Escort, <span className="text-gold font-semibold">{formData.businessName}</span>!
                  </p>
                  <p className="text-gray-500 text-sm mb-6">
                    Your account has been verified and created.
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="animate-pulse text-gold">Redirecting to sign in...</div>
                  </div>
                  <div className="mt-8">
                    <Link
                      to="/signin"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70 text-dark-bg font-bold rounded-lg transition transform hover:scale-105"
                    >
                      Go to Sign In
                    </Link>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Register
