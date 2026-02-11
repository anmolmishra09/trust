import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Escorts', path: '/escorts' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-bg/95 backdrop-blur-md border-b border-gold/20' : 'bg-dark-bg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="text-2xl font-serif font-bold text-gold">TE</div>
              <div className="hidden sm:block">
                <div className="text-sm font-serif text-gold">Trusted</div>
                <div className="text-xs font-sans text-gold/70">Escort</div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.div
                  whileHover={{ color: '#D4AF37' }}
                  className={`font-sans text-sm transition-colors ${
                    isActive(item.path) ? 'text-gold' : 'text-gray-300 hover:text-gold'
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/signin">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-sm text-gold border border-gold/50 rounded-lg hover:bg-gold/10 transition"
              >
                Sign In
              </motion.button>
            </Link>
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gold text-sm"
              >
                Book Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-dark-hover"
          >
            <div className="space-y-1.5">
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                className="w-6 h-0.5 bg-gold"
              />
              <motion.div
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="w-6 h-0.5 bg-gold"
              />
              <motion.div
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                className="w-6 h-0.5 bg-gold"
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden md:hidden"
        >
          <div className="py-4 space-y-3 border-t border-gold/20">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`font-sans text-sm py-2 px-4 rounded transition-colors ${
                    isActive(item.path)
                      ? 'text-gold bg-dark-hover'
                      : 'text-gray-300 hover:text-gold'
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
            <Link to="/signin" onClick={() => setIsOpen(false)}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full px-4 py-2 text-sm text-gold border border-gold/50 rounded-lg hover:bg-gold/10 transition font-sans"
              >
                Sign In
              </motion.button>
            </Link>
            <Link to="/booking" onClick={() => setIsOpen(false)}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="btn-gold w-full text-sm"
              >
                Book Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
