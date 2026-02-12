import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { registerUser } from '../services/profileService'

function AdvertiserSignup() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    location: '',
    services: [],
    description: '',
    website: '',
    averageRate: '',
    availability: 'part-time',
  })

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const services = [
    'Dinner & Wine',
    'Travel Companion',
    'Events',
    'Nightlife',
    'Corporate Events',
    'Shopping',
    'Entertainment',
    'Intimate',
    'Private Dates',
    'Cultural Events',
  ]

  const locations = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Pune',
    'Goa',
    'Chennai',
    'Kolkata',
    'Chandigarh',
    'Jaipur',
    'Indore',
    'Ahmedabad',
    'Surat',
    'Lucknow',
    'Nagpur',
    'Visakhapatnam',
    'Bhopal',
    'Patna',
    'Vadodara',
    'Agra',
    'Nashik',
    'Kochi',
    'Coimbatore',
  ]

  const validateStep = (currentStep) => {
    const newErrors = {}

    if (currentStep === 1) {
      if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required'
      if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required'
      if (!formData.phone.match(/^\+?[\d\s\-()]+$/)) newErrors.phone = 'Valid phone number is required'
      if (!formData.password || formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
    }

    if (currentStep === 2) {
      if (!formData.location) newErrors.location = 'Please select a location'
      if (formData.services.length === 0) newErrors.services = 'Select at least one service'
      if (!formData.averageRate || isNaN(formData.averageRate)) newErrors.averageRate = 'Valid rate is required'
    }

    if (currentStep === 3) {
      if (!formData.description.trim()) newErrors.description = 'Profile description is required'
      if (formData.description.length < 50) newErrors.description = 'Description must be at least 50 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1)
    }
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateStep(step)) return

    setIsLoading(true)
    
    try {
      // Register the user
      const userData = {
        businessName: formData.businessName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      }
      
      await registerUser(userData)
      
      // Show success and redirect to signin
      alert('Account created successfully! Please sign in to create your profile.')
      navigate('/signin')
    } catch (error) {
      alert(error.message || 'Failed to create account. Please try again.')
    } finally {
      setIsLoading(false)
    }
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
        {/* Primary Meta Tags */}
        <title>Become an Advertiser | Trusted Escort</title>
        <meta name="title" content="Become an Advertiser | Trusted Escort" />
        <meta name="description" content="Get listed for free and manage your profile with our powerful dashboard. Join India's premium escort platform and grow your business." />
        <meta name="keywords" content="escort advertiser, list escort profile, escort agency signup, companion listing, escort business platform India" />
        <link rel="canonical" href="https://www.trustedescort.com/advertiser-signup" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.trustedescort.com/advertiser-signup" />
        <meta property="og:title" content="Become an Advertiser | Trusted Escort" />
        <meta property="og:description" content="Get listed for free and manage your profile with our powerful dashboard." />
        <meta property="og:image" content="https://www.trustedescort.com/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Trusted Escort" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.trustedescort.com/advertiser-signup" />
        <meta property="twitter:title" content="Become an Advertiser | Trusted Escort" />
        <meta property="twitter:description" content="Get listed for free and manage your profile with our powerful dashboard." />
        <meta property="twitter:image" content="https://www.trustedescort.com/og-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Trusted Escort" />
      </Helmet>

      <div className="min-h-screen bg-dark-bg pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-dark-card border border-gold/20 rounded-xl p-8 md:p-12 backdrop-blur-sm"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3">
                Get <span className="text-gold">Listed</span>
              </h1>
              <p className="text-xl text-gray-400">
                For free today! Create your profile and start connecting with clients
              </p>
            </motion.div>

            {/* Progress Steps */}
            <motion.div variants={itemVariants} className="flex justify-between mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex-1 flex items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition ${
                      s === step
                        ? 'bg-gold text-dark-bg'
                        : s < step
                        ? 'bg-gold/50 text-gold'
                        : 'bg-dark-bg border border-gold/30 text-gray-400'
                    }`}
                  >
                    {s < step ? '✓' : s}
                  </motion.div>
                  {s < 3 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition ${
                        s < step ? 'bg-gold' : 'bg-gold/20'
                      }`}
                    />
                  )}
                </div>
              ))}
            </motion.div>

            {/* Step 1: Account Details */}
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.form
                  key="step1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants}>
                    <h2 className="text-2xl font-serif font-bold mb-6">Account Information</h2>

                    {/* Business Name */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Business Name</label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Enter your business name"
                        className={`w-full px-4 py-3 bg-dark-bg border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gold transition ${
                          errors.businessName ? 'border-red-500' : 'border-gold/30 hover:border-gold/50'
                        }`}
                      />
                      {errors.businessName && <p className="text-red-400 text-sm mt-2">{errors.businessName}</p>}
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
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

                    {/* Phone */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className={`w-full px-4 py-3 bg-dark-bg border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gold transition ${
                          errors.phone ? 'border-red-500' : 'border-gold/30 hover:border-gold/50'
                        }`}
                      />
                      {errors.phone && <p className="text-red-400 text-sm mt-2">{errors.phone}</p>}
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        className={`w-full px-4 py-3 bg-dark-bg border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gold transition ${
                          errors.password ? 'border-red-500' : 'border-gold/30 hover:border-gold/50'
                        }`}
                      />
                      {errors.password && <p className="text-red-400 text-sm mt-2">{errors.password}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        className={`w-full px-4 py-3 bg-dark-bg border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gold transition ${
                          errors.confirmPassword ? 'border-red-500' : 'border-gold/30 hover:border-gold/50'
                        }`}
                      />
                      {errors.confirmPassword && (
                        <p className="text-red-400 text-sm mt-2">{errors.confirmPassword}</p>
                      )}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex gap-4 pt-6">
                    <Link to="/signin" className="flex-1">
                      <button
                        type="button"
                        className="w-full px-6 py-3 border border-gold/30 text-gold rounded-lg hover:bg-gold/10 transition font-semibold"
                      >
                        Back to Sign In
                      </button>
                    </Link>
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-gold to-gold/80 text-dark-bg rounded-lg hover:from-gold/90 hover:to-gold/70 transition font-semibold"
                    >
                      Next Step
                    </button>
                  </motion.div>
                </motion.form>
              )}

              {/* Step 2: Services & Rates */}
              {step === 2 && (
                <motion.form
                  key="step2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants}>
                    <h2 className="text-2xl font-serif font-bold mb-6">Services & Rates</h2>

                    {/* Location */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Primary Location</label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-dark-bg border rounded-lg text-white focus:outline-none focus:border-gold transition ${
                          errors.location ? 'border-red-500' : 'border-gold/30 hover:border-gold/50'
                        }`}
                      >
                        <option value="">Select a location</option>
                        {locations.map((loc) => (
                          <option key={loc} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                      {errors.location && <p className="text-red-400 text-sm mt-2">{errors.location}</p>}
                    </div>

                    {/* Services */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-300 mb-3">Services Offered</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {services.map((service) => (
                          <motion.button
                            key={service}
                            type="button"
                            onClick={() => handleServiceToggle(service)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                              formData.services.includes(service)
                                ? 'bg-gold text-dark-bg'
                                : 'bg-dark-bg border border-gold/30 text-gold hover:border-gold'
                            }`}
                          >
                            {formData.services.includes(service) && '✓ '}
                            {service}
                          </motion.button>
                        ))}
                      </div>
                      {errors.services && <p className="text-red-400 text-sm mt-2">{errors.services}</p>}
                    </div>

                    {/* Average Rate */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Average Hourly Rate (₹)</label>
                      <input
                        type="number"
                        name="averageRate"
                        value={formData.averageRate}
                        onChange={handleChange}
                        placeholder="e.g., 4500"
                        className={`w-full px-4 py-3 bg-dark-bg border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gold transition ${
                          errors.averageRate ? 'border-red-500' : 'border-gold/30 hover:border-gold/50'
                        }`}
                      />
                      {errors.averageRate && <p className="text-red-400 text-sm mt-2">{errors.averageRate}</p>}
                    </div>

                    {/* Availability */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-300 mb-3">Availability</label>
                      <div className="space-y-2">
                        {['part-time', 'full-time', '24/7'].map((avail) => (
                          <label key={avail} className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="availability"
                              value={avail}
                              checked={formData.availability === avail}
                              onChange={handleChange}
                              className="w-4 h-4 accent-gold"
                            />
                            <span className="ml-3 text-gray-300 capitalize">{avail}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex gap-4 pt-6">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="flex-1 px-6 py-3 border border-gold/30 text-gold rounded-lg hover:bg-gold/10 transition font-semibold"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-gold to-gold/80 text-dark-bg rounded-lg hover:from-gold/90 hover:to-gold/70 transition font-semibold"
                    >
                      Next Step
                    </button>
                  </motion.div>
                </motion.form>
              )}

              {/* Step 3: Profile Description */}
              {step === 3 && (
                <motion.form
                  key="step3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants}>
                    <h2 className="text-2xl font-serif font-bold mb-6">Profile Information</h2>

                    {/* Description */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Profile Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe your services, experience, and what makes you unique (minimum 50 characters)"
                        rows="6"
                        className={`w-full px-4 py-3 bg-dark-bg border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gold transition resize-none ${
                          errors.description ? 'border-red-500' : 'border-gold/30 hover:border-gold/50'
                        }`}
                      />
                      <div className="flex justify-between mt-2">
                        <p className="text-gray-500 text-xs">
                          {formData.description.length}/500 characters
                        </p>
                        {errors.description && <p className="text-red-400 text-sm">{errors.description}</p>}
                      </div>
                    </div>

                    {/* Website */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Website (Optional)</label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://yourwebsite.com"
                        className="w-full px-4 py-3 bg-dark-bg border border-gold/30 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gold transition hover:border-gold/50"
                      />
                    </div>

                    {/* Terms */}
                    <div className="flex items-start">
                      <input type="checkbox" id="terms" className="mt-1 w-4 h-4 accent-gold" required />
                      <label htmlFor="terms" className="ml-3 text-sm text-gray-400">
                        I agree to the{' '}
                        <span className="text-gold hover:underline cursor-pointer">Terms of Service</span> and{' '}
                        <span className="text-gold hover:underline cursor-pointer">Privacy Policy</span>
                      </label>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex gap-4 pt-6">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="flex-1 px-6 py-3 border border-gold/30 text-gold rounded-lg hover:bg-gold/10 transition font-semibold"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-gold to-gold/80 text-dark-bg rounded-lg hover:from-gold/90 hover:to-gold/70 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Creating Profile...' : 'Complete Registration'}
                    </button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link to="/signin" className="text-gold font-semibold hover:text-gold/80 transition">
                Sign In
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default AdvertiserSignup
