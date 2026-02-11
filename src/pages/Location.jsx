import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

function Location() {
  const { city } = useParams()

  // City data with descriptions and images
  const cityData = {
    mumbai: {
      name: 'Mumbai',
      title: 'Premium Escorts in Mumbai',
      description: 'Experience the finest escortship services in Mumbai, India\'s financial capital. Our elite escorts offer sophisticated company for business events, social gatherings, or private occasions.',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&h=600&fit=crop',
      highlights: ['Financial District Escorts', 'Bollywood Events', 'Five-Star Hotel Services', 'Airport Pickups'],
    },
    delhi: {
      name: 'Delhi',
      title: 'Elite Escorts in Delhi',
      description: 'Delhi\'s most exclusive escort service featuring sophisticated escorts for the distinguished clientele. Perfect for diplomatic events, corporate functions, and private engagements.',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&h=600&fit=crop',
      highlights: ['Diplomatic Events', 'Corporate Functions', 'Cultural Events', 'VIP Services'],
    },
    bangalore: {
      name: 'Bangalore',
      title: 'Premium Escorts in Bangalore',
      description: 'Bangalore\'s leading escort service with elegant escorts who understand the IT capital\'s sophisticated lifestyle. Ideal for tech events, conferences, and private meetings.',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=1200&h=600&fit=crop',
      highlights: ['Tech Conference Escorts', 'Startup Events', 'International Clients', 'Luxury Hotels'],
    },
    hyderabad: {
      name: 'Hyderabad',
      title: 'Luxury Escorts in Hyderabad',
      description: 'Hyderabad\'s premier escort agency offering refined escortship for the city\'s elite. Our escorts are perfect for business dinners, social events, and cultural occasions.',
      image: 'https://images.unsplash.com/photo-1584487702749-29a3e768a21a?w=1200&h=600&fit=crop',
      highlights: ['Business Dinners', 'Cultural Events', 'Hi-Tech City Services', 'Hotel Meetups'],
    },
    pune: {
      name: 'Pune',
      title: 'Exclusive Escorts in Pune',
      description: 'Pune\'s most trusted escort service featuring educated and elegant escorts. Perfect for corporate professionals seeking sophisticated company.',
      image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=1200&h=600&fit=crop',
      highlights: ['Corporate Events', 'Educational Escorts', 'Weekend Getaways', 'Private Meetings'],
    },
    goa: {
      name: 'Goa',
      title: 'Beach Escorts in Goa',
      description: 'Goa\'s finest escort service offering beach escorts and party escorts. Perfect for vacation escortship, beach resorts, and nightlife experiences.',
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1200&h=600&fit=crop',
      highlights: ['Beach Escorts', 'Party Escorts', 'Resort Services', 'Yacht Parties'],
    },
    chennai: {
      name: 'Chennai',
      title: 'Premium Escorts in Chennai',
      description: 'Chennai\'s most prestigious escort agency with cultured escorts who appreciate the city\'s rich heritage and modern lifestyle.',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&h=600&fit=crop',
      highlights: ['Cultural Events', 'Business Meetings', 'Beach Resorts', 'Traditional Functions'],
    },
    kolkata: {
      name: 'Kolkata',
      title: 'Elite Escorts in Kolkata',
      description: 'Kolkata\'s leading escort service featuring sophisticated Bengali beauties and international escorts for the city\'s discerning elite.',
      image: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=1200&h=600&fit=crop',
      highlights: ['Cultural Programs', 'Business Events', 'Art Gallery Escorts', 'Fine Dining'],
    },
    chandigarh: {
      name: 'Chandigarh',
      title: 'Luxury Escorts in Chandigarh',
      description: 'Chandigarh\'s premium escort service with elegant escorts perfect for the planned city\'s sophisticated lifestyle.',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=1200&h=600&fit=crop',
      highlights: ['Hotel Services', 'Party Escorts', 'Corporate Events', 'Private Meetings'],
    },
    jaipur: {
      name: 'Jaipur',
      title: 'Royal Escorts in Jaipur',
      description: 'Jaipur\'s exclusive escort service featuring royal escorts who embody the Pink City\'s regal charm and elegance.',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&h=600&fit=crop',
      highlights: ['Heritage Hotels', 'Royal Events', 'Tourism Escorts', 'Palace Visits'],
    },
    indore: {
      name: 'Indore',
      title: 'Premium Escorts in Indore',
      description: 'Indore\'s trusted escort service with sophisticated escorts for business and leisure engagements.',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&h=600&fit=crop',
      highlights: ['Business Meetings', 'Hotel Services', 'Dinner Escorts', 'Private Events'],
    },
    ahmedabad: {
      name: 'Ahmedabad',
      title: 'Elite Escorts in Ahmedabad',
      description: 'Ahmedabad\'s finest escort agency featuring educated and elegant Gujarati escorts for the city\'s business community.',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&h=600&fit=crop',
      highlights: ['Business Dinners', 'Cultural Events', 'Hotel Meetups', 'Corporate Functions'],
    },
    surat: {
      name: 'Surat',
      title: 'Premium Escorts in Surat',
      description: 'Surat\'s leading escort service with sophisticated escorts for the diamond city\'s affluent clientele.',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&h=600&fit=crop',
      highlights: ['Business Events', 'Hotel Services', 'Diamond Merchant Escorts', 'Private Meetings'],
    },
    lucknow: {
      name: 'Lucknow',
      title: 'Nawabi Escorts in Lucknow',
      description: 'Lucknow\'s premier escort service featuring elegant escorts who embody the city\'s nawabi culture and sophistication.',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=1200&h=600&fit=crop',
      highlights: ['Cultural Events', 'Heritage Tours', 'Fine Dining', 'Business Meetings'],
    },
    nagpur: {
      name: 'Nagpur',
      title: 'Exclusive Escorts in Nagpur',
      description: 'Nagpur\'s trusted escort service offering sophisticated escortship for business and personal occasions.',
      image: 'https://images.unsplash.com/photo-1584487702749-29a3e768a21a?w=1200&h=600&fit=crop',
      highlights: ['Hotel Services', 'Business Dinners', 'Private Events', 'Travel Escorts'],
    },
    visakhapatnam: {
      name: 'Visakhapatnam',
      title: 'Beach Escorts in Visakhapatnam',
      description: 'Visakhapatnam\'s finest escort service with beach escorts perfect for the port city\'s coastal lifestyle.',
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1200&h=600&fit=crop',
      highlights: ['Beach Escorts', 'Hotel Services', 'Port City Events', 'Cruise Escorts'],
    },
    bhopal: {
      name: 'Bhopal',
      title: 'Premium Escorts in Bhopal',
      description: 'Bhopal\'s leading escort agency featuring sophisticated escorts for the city of lakes.',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&h=600&fit=crop',
      highlights: ['Lake View Meetings', 'Hotel Services', 'Business Events', 'Cultural Functions'],
    },
    patna: {
      name: 'Patna',
      title: 'Elite Escorts in Patna',
      description: 'Patna\'s trusted escort service offering refined escortship for business and social occasions.',
      image: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=1200&h=600&fit=crop',
      highlights: ['Business Meetings', 'Hotel Services', 'Private Events', 'Dinner Escorts'],
    },
    vadodara: {
      name: 'Vadodara',
      title: 'Luxury Escorts in Vadodara',
      description: 'Vadodara\'s premier escort service with elegant escorts for the cultural capital of Gujarat.',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&h=600&fit=crop',
      highlights: ['Cultural Events', 'Business Dinners', 'Hotel Meetups', 'Heritage Tours'],
    },
    agra: {
      name: 'Agra',
      title: 'Royal Escorts in Agra',
      description: 'Agra\'s exclusive escort service featuring escorts perfect for tourism and business in the city of Taj Mahal.',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&h=600&fit=crop',
      highlights: ['Taj Mahal Tours', 'Heritage Hotels', 'Tourism Escorts', 'Business Meetings'],
    },
    nashik: {
      name: 'Nashik',
      title: 'Premium Escorts in Nashik',
      description: 'Nashik\'s trusted escort service with sophisticated escorts for India\'s wine capital.',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=1200&h=600&fit=crop',
      highlights: ['Wine Tours', 'Hotel Services', 'Business Events', 'Weekend Getaways'],
    },
    kochi: {
      name: 'Kochi',
      title: 'Elite Escorts in Kochi',
      description: 'Kochi\'s finest escort agency featuring elegant escorts for Kerala\'s commercial capital and port city.',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&h=600&fit=crop',
      highlights: ['Port City Services', 'Backwater Tours', 'Business Meetings', 'Hotel Escorts'],
    },
    coimbatore: {
      name: 'Coimbatore',
      title: 'Premium Escorts in Coimbatore',
      description: 'Coimbatore\'s leading escort service offering refined escortship for Tamil Nadu\'s Manchester.',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&h=600&fit=crop',
      highlights: ['Business Events', 'Hotel Services', 'Industrial Meetings', 'Hill Station Tours'],
    },
  }

  const normalizedCity = city?.toLowerCase()
  const currentCity = cityData[normalizedCity] || cityData.mumbai

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
        <title>{currentCity.title} | Trusted Escort</title>
        <meta name="title" content={`${currentCity.title} | Trusted Escort`} />
        <meta name="description" content={currentCity.description} />
        <meta name="keywords" content={`${currentCity.name} escorts, ${currentCity.name} escort service, premium escorts ${currentCity.name}, elite escorts ${currentCity.name}, luxury companionship ${currentCity.name}, ${currentCity.name} companion services`} />
        <link rel="canonical" href={`https://www.trustedescort.com/location/${normalizedCity}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.trustedescort.com/location/${normalizedCity}`} />
        <meta property="og:title" content={`${currentCity.title} | Trusted Escort`} />
        <meta property="og:description" content={currentCity.description} />
        <meta property="og:image" content={currentCity.image} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Trusted Escort" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://www.trustedescort.com/location/${normalizedCity}`} />
        <meta property="twitter:title" content={`${currentCity.title} | Trusted Escort`} />
        <meta property="twitter:description" content={currentCity.description} />
        <meta property="twitter:image" content={currentCity.image} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Trusted Escort" />
        <meta name="geo.region" content={`IN-${normalizedCity.substring(0, 2).toUpperCase()}`} />
        <meta name="geo.placename" content={currentCity.name} />
        
        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": currentCity.title,
            "description": currentCity.description,
            "provider": {
              "@type": "Organization",
              "name": "Trusted Escort",
              "url": "https://www.trustedescort.com"
            },
            "areaServed": {
              "@type": "City",
              "name": currentCity.name,
              "addressCountry": "IN"
            },
            "serviceType": "Escort Service",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": `https://www.trustedescort.com/location/${normalizedCity}`
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 bg-dark-bg overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={currentCity.image}
            alt={currentCity.name}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/80 to-dark-bg" />
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <Link to="/" className="text-gold hover:text-gold/80 text-sm mb-6 inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gold mb-6">
              {currentCity.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {currentCity.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-dark-card border-t border-gold/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-gold mb-4">
              Services in {currentCity.name}
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {currentCity.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card-glass p-6 text-center"
              >
                <div className="text-3xl mb-3">✨</div>
                <h3 className="text-lg font-semibold text-white">{highlight}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* View Escorts CTA */}
      <section className="py-20 bg-dark-bg border-t border-gold/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-serif font-bold text-gold">
              View Our {currentCity.name} Escorts
            </h2>
            <p className="text-xl text-gray-300">
              Browse our exclusive selection of elite escorts available in {currentCity.name}.
            </p>
            <Link to={`/escorts?location=${currentCity.name}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gold"
              >
                Browse {currentCity.name} Escorts
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-dark-card border-t border-gold/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold text-white">Book Your Companion</h2>
            <p className="text-gray-400 text-lg">
              Contact us via WhatsApp for bookings and special requests in {currentCity.name}.
            </p>
            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.947 1.347l-.355.199-3.682.993 1.012-3.678-.235-.374A9.86 9.86 0 015.031 3.284c5.432 0 9.873 4.441 9.873 9.873 0 2.65-.997 5.151-2.813 7.06l-.262.214-3.822-1.02.667 2.989.261-.042a9.908 9.908 0 004.761-1.486l.327-.206 3.957 1.06-1.274-4.648.23-.365a9.884 9.884 0 001.395-5.159c0-5.432-4.441-9.873-9.873-9.873" />
              </svg>
              Message on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Location
