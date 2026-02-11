import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    companion: '',
    specialRequests: '',
  })

  const [errors, setErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)

  const escorts = [
    { id: 1, name: 'Sakshi', age: 24, location: 'Mumbai', rating: 4.9, reviews: 127, verified: true },
    { id: 2, name: 'Ishita', age: 26, location: 'Delhi', rating: 5.0, reviews: 142, verified: true },
    { id: 3, name: 'Veda', age: 25, location: 'Bangalore', rating: 4.8, reviews: 98, verified: true },
    { id: 4, name: 'Ananya', age: 23, location: 'Hyderabad', rating: 4.7, reviews: 76, verified: true },
    { id: 5, name: 'Nikita', age: 28, location: 'Pune', rating: 4.95, reviews: 156, verified: true },
    { id: 6, name: 'Omisha', age: 22, location: 'Goa', rating: 4.6, reviews: 89, verified: true },
    { id: 7, name: 'Priya', age: 24, location: 'Mumbai', rating: 4.85, reviews: 134, verified: true },
    { id: 8, name: 'Anjali', age: 26, location: 'Delhi', rating: 4.92, reviews: 145, verified: true },
    { id: 9, name: 'Neha', age: 23, location: 'Bangalore', rating: 4.78, reviews: 109, verified: true },
    { id: 10, name: 'Divya', age: 25, location: 'Hyderabad', rating: 4.88, reviews: 128, verified: true },
    { id: 11, name: 'Isha', age: 27, location: 'Pune', rating: 4.93, reviews: 167, verified: true },
    { id: 12, name: 'Kavya', age: 24, location: 'Goa', rating: 4.71, reviews: 92, verified: true },
    { id: 13, name: 'Meera', age: 25, location: 'Chennai', rating: 4.84, reviews: 118, verified: true },
    { id: 14, name: 'Tanya', age: 26, location: 'Kolkata', rating: 4.89, reviews: 135, verified: true },
    { id: 15, name: 'Simran', age: 23, location: 'Chandigarh', rating: 4.75, reviews: 103, verified: true },
    { id: 16, name: 'Riya', age: 24, location: 'Jaipur', rating: 4.87, reviews: 141, verified: true },
    { id: 17, name: 'Aisha', age: 27, location: 'Indore', rating: 4.81, reviews: 124, verified: true },
    { id: 18, name: 'Pooja', age: 25, location: 'Ahmedabad', rating: 4.79, reviews: 116, verified: true },
    { id: 19, name: 'Shreya', age: 22, location: 'Mumbai', rating: 4.73, reviews: 89, verified: true },
    { id: 20, name: 'Nisha', age: 28, location: 'Delhi', rating: 4.96, reviews: 178, verified: true },
    { id: 21, name: 'Disha', age: 23, location: 'Bangalore', rating: 4.86, reviews: 144, verified: true },
    { id: 22, name: 'Seema', age: 26, location: 'Hyderabad', rating: 4.91, reviews: 152, verified: true },
  ]

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Valid email is required'
    }
    if (!formData.phone.match(/^\+?[\d\s\-()]+$/)) {
      newErrors.phone = 'Valid phone number is required'
    }
    if (!formData.date) newErrors.date = 'Date is required'
    if (!formData.time) newErrors.time = 'Time is required'
    if (!formData.companion) newErrors.companion = 'Please select a companion'

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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData)
      setShowSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        companion: '',
        specialRequests: '',
      })

      // Auto-hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000)
    }
  }

  const getTodayDate = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
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
        <title>Book a Companion | Trusted Escort</title>
        <meta name="title" content="Book a Companion | Trusted Escort" />
        <meta name="description" content="Book your exclusive companion experience today. Easy online booking for premium escort services. Available 24/7 across major Indian cities." />
        <meta name="keywords" content="book escort, escort booking, companion booking, schedule escort, hire companion, premium escort booking India" />
        <link rel="canonical" href="https://www.trustedescort.com/booking" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.trustedescort.com/booking" />
        <meta property="og:title" content="Book a Companion | Trusted Escort" />
        <meta property="og:description" content="Book your exclusive companion experience today. Easy online booking for premium escort services." />
        <meta property="og:image" content="https://www.trustedescort.com/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Trusted Escort" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.trustedescort.com/booking" />
        <meta property="twitter:title" content="Book a Companion | Trusted Escort" />
        <meta property="twitter:description" content="Book your exclusive companion experience today." />
        <meta property="twitter:image" content="https://www.trustedescort.com/og-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Trusted Escort" />
      </Helmet>

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-dark-card to-dark-bg border-b border-gold/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Book Your <span className="text-gold">Experience</span>
            </h1>
            <p className="text-xl text-gray-400">
              Select your companion and schedule your exclusive appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-8 p-6 bg-green-500/20 border border-green-500/50 rounded-xl text-green-300"
              >
                <h3 className="font-semibold mb-2">✓ Booking Request Submitted!</h3>
                <p className="text-sm">
                  Thank you for your booking request. We'll contact you shortly to confirm your appointment.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.form
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="card-glass p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gold mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className={`w-full px-4 py-3 bg-dark-bg border rounded-lg font-sans focus:outline-none transition-colors ${
                    errors.name
                      ? 'border-red-500/50 focus:border-red-500/80'
                      : 'border-gold/20 focus:border-gold/50'
                  }`}
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-400 text-xs mt-2"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gold mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full px-4 py-3 bg-dark-bg border rounded-lg font-sans focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-red-500/50 focus:border-red-500/80'
                      : 'border-gold/20 focus:border-gold/50'
                  }`}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-400 text-xs mt-2"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gold mb-3">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className={`w-full px-4 py-3 bg-dark-bg border rounded-lg font-sans focus:outline-none transition-colors ${
                    errors.phone
                      ? 'border-red-500/50 focus:border-red-500/80'
                      : 'border-gold/20 focus:border-gold/50'
                  }`}
                />
                <AnimatePresence>
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-400 text-xs mt-2"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Companion */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gold mb-3">
                  Select Companion *
                </label>
                <select
                  name="companion"
                  value={formData.companion}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-dark-bg border rounded-lg font-sans focus:outline-none transition-colors ${
                    errors.companion
                      ? 'border-red-500/50 focus:border-red-500/80'
                      : 'border-gold/20 focus:border-gold/50'
                  }`}
                >
                  <option value="">-- Please Select --</option>
                  {escorts.map((comp) => (
                    <option key={comp.id} value={`${comp.name} - ${comp.age}, ${comp.location}`}>
                      {comp.verified && '✓ '}{comp.name} - {comp.age}, {comp.location} - ★{comp.rating}
                    </option>
                  ))}
                </select>
                <AnimatePresence>
                  {errors.companion && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-400 text-xs mt-2"
                    >
                      {errors.companion}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Date */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gold mb-3">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={getTodayDate()}
                  className={`w-full px-4 py-3 bg-dark-bg border rounded-lg font-sans focus:outline-none transition-colors ${
                    errors.date
                      ? 'border-red-500/50 focus:border-red-500/80'
                      : 'border-gold/20 focus:border-gold/50'
                  }`}
                />
                <AnimatePresence>
                  {errors.date && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-400 text-xs mt-2"
                    >
                      {errors.date}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Time */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gold mb-3">
                  Preferred Time *
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-dark-bg border rounded-lg font-sans focus:outline-none transition-colors ${
                    errors.time
                      ? 'border-red-500/50 focus:border-red-500/80'
                      : 'border-gold/20 focus:border-gold/50'
                  }`}
                />
                <AnimatePresence>
                  {errors.time && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-400 text-xs mt-2"
                    >
                      {errors.time}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Special Requests */}
            <motion.div variants={itemVariants} className="mb-8">
              <label className="block text-sm font-semibold text-gold mb-3">
                Special Requests
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Any special requests or preferences..."
                rows="5"
                className="w-full px-4 py-3 bg-dark-bg border border-gold/20 rounded-lg font-sans focus:border-gold/50 focus:outline-none transition-colors resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-gold py-4 text-lg"
              >
                Submit Booking Request
              </motion.button>
            </motion.div>

            {/* Privacy Note */}
            <motion.p
              variants={itemVariants}
              className="text-xs text-gray-500 text-center mt-6"
            >
              Your information is secure and will only be used to process your booking. 
              We respect your privacy completely.
            </motion.p>
          </motion.form>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-dark-card border-t border-gold/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="text-lg font-serif font-bold text-gold mb-2">Quick Response</h3>
              <p className="text-sm text-gray-400">
                We'll confirm your booking within 30 minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="text-lg font-serif font-bold text-gold mb-2">Discreet Service</h3>
              <p className="text-sm text-gray-400">
                Complete confidentiality and privacy guaranteed.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="text-lg font-serif font-bold text-gold mb-2">Flexible Payment</h3>
              <p className="text-sm text-gray-400">
                Multiple payment options available for your convenience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Booking
