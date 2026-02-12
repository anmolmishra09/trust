import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { loginUser } from '../services/profileService'

function SignIn() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })

  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

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
      await loginUser(formData.email, formData.password)
      // Redirect to advertiser dashboard
      navigate('/advertiser-dashboard')
    } catch (error) {
      setErrors({ submit: error.message || 'Invalid email or password' })
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
        <title>Sign In | Trusted Escort</title>
        <meta name="title" content="Sign In | Trusted Escort" />
        <meta name="description" content="Sign in to your Trusted Escort account. Access your bookings, messages, and exclusive features." />
        <meta name="keywords" content="escort login, trusted escort sign in, account login, escort member area" />
        <link rel="canonical" href="https://www.trustedescort.com/signin" />
        
        {/* Additional SEO */}
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-dark-bg pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Sign In Form Section */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <div className="bg-dark-card border border-gold/20 rounded-xl p-8 backdrop-blur-sm">
                <h1 className="text-4xl font-serif font-bold mb-2">
                  Sign <span className="text-gold">In</span>
                </h1>
                <p className="text-gray-400 mb-8">Access your exclusive account</p>

                {/* Error Message */}
                {errors.submit && (
                  <div className="mb-4 p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-400">
                    {errors.submit}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
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

                  {/* Password Field */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                        Password
                      </label>
                      <Link
                        to="/forgot-password"
                        className="text-sm text-gold hover:text-gold/80 transition"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
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

                  {/* Remember Me */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="w-4 h-4 bg-dark-bg border border-gold/30 rounded cursor-pointer accent-gold"
                    />
                    <label htmlFor="rememberMe" className="ml-3 text-sm text-gray-400 cursor-pointer">
                      Remember me
                    </label>
                  </div>

                  {/* Sign In Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70 text-dark-bg font-bold py-3 rounded-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disable:scale-100"
                  >
                    {isLoading ? 'Signing In...' : 'Sign In'}
                  </button>
                </form>

                {/* Links */}
                <div className="mt-6 space-y-3">
                  <p className="text-center text-gray-400 text-sm">
                    Didn't receive confirmation email?{' '}
                    <Link to="/resend-confirmation" className="text-gold hover:text-gold/80 transition">
                      Resend
                    </Link>
                  </p>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gold/20"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-dark-card text-gray-400">Or</span>
                    </div>
                  </div>
                  <p className="text-center text-gray-400">
                    Don't have an account yet?{' '}
                    <Link to="/register" className="text-gold font-semibold hover:text-gold/80 transition">
                      Register now - it's free!
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side Info Sections */}
            <motion.div variants={itemVariants} className="md:col-span-1 space-y-6">
              {/* User Section */}
              <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-xl p-8 backdrop-blur-sm hover:border-gold/40 transition">
                <div className="text-4xl mb-4">👤</div>
                <h3 className="text-2xl font-serif font-bold text-gold mb-3">User</h3>
                <p className="text-gray-300 leading-relaxed">
                  Keep updated on activity in your area! Access exclusive companion profiles, manage your bookings, and receive personalized recommendations based on your preferences.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <span className="text-gold mr-2">✓</span> Browse verified escorts
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold mr-2">✓</span> Secure booking system
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold mr-2">✓</span> Real-time availability
                  </li>
                </ul>
              </div>

              {/* Advertiser Section */}
              <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl p-8 backdrop-blur-sm hover:border-blue-500/40 transition">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-2xl font-serif font-bold text-blue-400 mb-3">Advertiser</h3>
                <p className="text-gray-300 leading-relaxed">
                  Get listed for free today! Expand your reach and connect with clients in your area. Manage your profile, pricing, and availability with our easy-to-use dashboard.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-2">✓</span> Free profile creation
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-2">✓</span> Advanced booking tools
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-400 mr-2">✓</span> Analytics & insights
                  </li>
                </ul>
                <Link
                  to="/advertiser-signup"
                  className="inline-block mt-6 px-6 py-3 bg-blue-500 border border-blue-500 rounded-lg text-white hover:bg-blue-600 transition font-semibold text-sm"
                >
                  Get listed for free today!
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default SignIn
