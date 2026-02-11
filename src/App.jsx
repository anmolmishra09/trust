import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AgeVerificationModal from './components/AgeVerificationModal'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Escorts from './pages/Companions'
import CompanionProfile from './pages/CompanionProfile'
import Booking from './pages/Booking'
import About from './pages/About'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import AdvertiserSignup from './pages/AdvertiserSignup'
import Location from './pages/Location'
import FAQ from './pages/FAQ'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'

function App() {
  const [isAgeVerified, setIsAgeVerified] = useState(false)

  useEffect(() => {
    const verified = localStorage.getItem('ageVerified')
    if (verified) {
      setIsAgeVerified(true)
    }
  }, [])

  const handleAgeVerification = () => {
    localStorage.setItem('ageVerified', 'true')
    setIsAgeVerified(true)
  }

  return (
    <HelmetProvider>
      <Router>
        {!isAgeVerified && <AgeVerificationModal onVerify={handleAgeVerification} />}
        
        <div className="flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/escorts" element={<Escorts />} />
              <Route path="/companion/:id" element={<CompanionProfile />} />
              <Route path="/location/:city" element={<Location />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/advertiser-signup" element={<AdvertiserSignup />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
        
        <WhatsAppButton />
      </Router>
    </HelmetProvider>
  )
}

export default App
