import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { getAllProfiles } from '../services/profileService'

function CompanionProfile() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [allEscortsData, setAllEscortsData] = useState([])
  
  // Image modal state
  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  // Loading effect
  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to top when profile loads
  }, [id])

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false)
      }
    }
    
    window.addEventListener('keydown', handleEscape)
    
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [showModal])
  
  // Load all escorts including advertiser profiles
  useEffect(() => {
    const loadAllEscorts = () => {
      setIsLoading(true)
      // Get advertiser profiles
      const advertiserProfiles = getAllProfiles()
      
      // Complete companion database (default hardcoded data)
      const escortsData = [
    {
      id: 1,
      name: 'Sakshi',
      age: 24,
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=900&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
      ],
      description: 'Elegant and sophisticated Mumbai beauty',
      height: '5\'7"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Hindi', 'Marathi'],
      services: ['Dinner & Wine', 'Cultural Events', 'Shopping Companion', 'Travel Companion', 'Corporate Events', 'Private Dates'],
      rates: { hourly: '₹5000', halfDay: '₹15000', fullDay: '₹25000', overnight: '₹30000' },
      rating: 4.9, reviews: 127, verified: true, responseTime: '< 30 min', availability: 'Available',
    },
    {
      id: 2,
      name: 'Ishita',
      age: 26,
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&h=900&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1580489944761-b0a1cd18e4be?w=600&h=600&fit=crop',
      ],
      description: 'Charming and witty Delhi beauty with grace',
      height: '5\'6"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Hindi', 'Punjabi'],
      services: ['Dinner & Wine', 'Nightlife', 'Cultural Events', 'Travel', 'Corporate Events'],
      rates: { hourly: '₹4500', halfDay: '₹14000', fullDay: '₹24000', overnight: '₹29000' },
      rating: 5.0, reviews: 142, verified: true, responseTime: '< 15 min', availability: 'Available',
    },
    {
      id: 3,
      name: 'Krina',
      age: 25,
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&h=900&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=600&h=600&fit=crop',
      ],
      description: 'Graceful and alluring Bangalore princess',
      height: '5\'8"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Kannada', 'Tamil'],
      services: ['Events', 'Travel', 'Escortship', 'Dinner & Wine'],
      rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' },
      rating: 4.8, reviews: 112, verified: true, responseTime: '< 45 min', availability: 'Available Today',
    },
    {
      id: 4,
      name: 'Ananya',
      age: 23,
      location: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&h=900&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1520293591298-1b434c919eba?w=600&h=600&fit=crop',
      ],
      description: 'Adventurous and playful Hyderabad beauty',
      height: '5\'5"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Telugu', 'Urdu'],
      services: ['Dinner & Wine', 'Nightlife', 'Travel', 'Events'],
      rates: { hourly: '₹4200', halfDay: '₹13000', fullDay: '₹23000', overnight: '₹28000' },
      rating: 4.7, reviews: 84, verified: true, responseTime: '< 1 hour', availability: 'Available',
    },
    {
      id: 5,
      name: 'Nikita',
      age: 28,
      location: 'Pune',
      image: 'https://images.unsplash.com/photo-1634749721469-c7cfcf108790?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      gallery: [
        'https://images.unsplash.com/photo-1634749721469-c7cfcf108790?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1598913869652-074abf85df67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
        'https://images.unsplash.com/photo-1581985188326-264f0c1733ef?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      description: 'Sophisticated Pune beauty with refined elegance',
      height: '5\'7"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Hindi', 'Marathi'],
      services: ['Corporate Events', 'Dinner & Wine', 'Travel', 'Shopping'],
      rates: { hourly: '₹5200', halfDay: '₹15500', fullDay: '₹25500', overnight: '₹31000' },
      rating: 4.95, reviews: 156, verified: true, responseTime: '< 20 min', availability: 'Available',
    },
    {
      id: 6,
      name: 'Omisha',
      age: 22,
      location: 'Goa',
      image: 'https://images.unsplash.com/photo-1515191107209-c28698631303?w=900&h=900&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1542178243-bc20204b769f?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=600&h=600&fit=crop',
      ],
      description: 'Vibrant and energetic Goa beach beauty',
      height: '5\'6"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Konkani', 'Hindi'],
      services: ['Nightlife', 'Events', 'Entertainment', 'Travel'],
      rates: { hourly: '₹4000', halfDay: '₹12000', fullDay: '₹22000', overnight: '₹27000' },
      rating: 4.6, reviews: 76, verified: true, responseTime: '< 55 min', availability: 'Available Tomorrow',
    },
    {
      id: 7,
      name: 'Priya',
      age: 24,
      location: 'Mumbai',
      image: 'https://plus.unsplash.com/premium_photo-1705018501151-4045c97658a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      gallery: [
        'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?w=600&h=600&fit=crop',
      ],
      description: 'Charming Mumbai beauty with warm personality',
      height: '5\'7"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Hindi', 'Marathi'],
      services: ['Dinner & Wine', 'Travel', 'Shopping', 'Events'],
      rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' },
      rating: 4.85, reviews: 134, verified: true, responseTime: '< 25 min', availability: 'Available',
    },
    {
      id: 8,
      name: 'Anjali',
      age: 26,
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&h=900&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&h=600&fit=crop',
      ],
      description: 'Elegant and mysterious Delhi enchantress',
      height: '5\'8"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Hindi', 'Punjabi'],
      services: ['Events', 'Nightlife', 'Escortship', 'Dinner & Wine'],
      rates: { hourly: '₹5000', halfDay: '₹15000', fullDay: '₹25000', overnight: '₹30000' },
      rating: 4.92, reviews: 145, verified: true, responseTime: '< 20 min', availability: 'Available',
    },
    {
      id: 9,
      name: 'Neha',
      age: 23,
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1520293591298-1b434c919eba?w=900&h=900&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1548142813-c348350df52b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=600&h=600&fit=crop',
      ],
      description: 'Fun and adventurous Bangalore spirit',
      height: '5\'6"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Kannada', 'Tamil'],
      services: ['Travel', 'Events', 'Nightlife', 'Entertainment'],
      rates: { hourly: '₹4500', halfDay: '₹13500', fullDay: '₹23500', overnight: '₹28500' },
      rating: 4.78, reviews: 109, verified: true, responseTime: '< 40 min', availability: 'Available Today',
    },
    {
      id: 10,
      name: 'Divya',
      age: 25,
      location: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=900&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=600&h=600&fit=crop',
      ],
      description: 'Sophisticated and cultured Hyderabad princess',
      height: '5\'7"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Telugu', 'Urdu'],
      services: ['Corporate Events', 'Dinner & Wine', 'Travel', 'Events'],
      rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' },
      rating: 4.88, reviews: 128, verified: true, responseTime: '< 35 min', availability: 'Available',
    },
    {
      id: 11,
      name: 'Isha',
      age: 27,
      location: 'Pune',
      image: 'https://images.unsplash.com/photo-1547867881-7be82e1319cc?w=900&h=900&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1598550487042-b5345c08c4c5?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=600&h=600&fit=crop',
      ],
      description: 'Glamorous and confident Pune fashionista',
      height: '5\'8"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Hindi', 'Marathi'],
      services: ['Nightlife', 'Events', 'Entertainment', 'Shopping'],
      rates: { hourly: '₹5000', halfDay: '₹15000', fullDay: '₹25000', overnight: '₹31000' },
      rating: 4.93, reviews: 167, verified: true, responseTime: '< 18 min', availability: 'Available',
    },
    {
      id: 12,
      name: 'Kavya',
      age: 24,
      location: 'Goa',
      image: 'https://images.unsplash.com/photo-1520293591298-1b434c919eba?w=900&h=900&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=600&fit=crop',
      ],
      description: 'Beach beauty and free spirited Goa charm',
      height: '5\'7"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Konkani', 'Hindi'],
      services: ['Nightlife', 'Travel', 'Entertainment', 'Events'],
      rates: { hourly: '₹4500', halfDay: '₹13500', fullDay: '₹23500', overnight: '₹28500' },
      rating: 4.71, reviews: 92, verified: true, responseTime: '< 50 min', availability: 'Available Tomorrow',
    },
    {
      id: 13,
      name: 'Meera',
      age: 25,
      location: 'Chennai',
      image: 'https://images.unsplash.com/photo-1462332420958-a05d1e741341?w=900&h=900&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1598343146174-ab46aa4195ad?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1622022720859-c75c5ee83c37?w=600&h=600&fit=crop',
      ],
      description: 'Graceful South Indian beauty with classical charm',
      height: '5\'6"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Tamil', 'Telugu'],
      services: ['Dinner & Wine', 'Events', 'Travel', 'Escortship'],
      rates: { hourly: '₹4600', halfDay: '₹14000', fullDay: '₹24000', overnight: '₹29000' },
      rating: 4.84, reviews: 118, verified: true, responseTime: '< 38 min', availability: 'Available',
    },
    {
      id: 14,
      name: 'Tanya',
      age: 26,
      location: 'Kolkata',
      image: 'https://images.unsplash.com/photo-1506277886241-b8a9ad009800?w=900&h=900&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1602442259296-389e69d06803?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606814893907-c2e42943c91fc?w=600&h=600&fit=crop',
      ],
      description: 'Artistic and passionate Kolkata sophisticate',
      height: '5\'8"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Bengali', 'Hindi'],
      services: ['Dinner & Wine', 'Cultural Events', 'Escortship', 'Travel'],
      rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' },
      rating: 4.89, reviews: 135, verified: true, responseTime: '< 30 min', availability: 'Available',
    },
    {
      id: 15,
      name: 'Simran',
      age: 23,
      location: 'Chandigarh',
      image: 'https://images.unsplash.com/photo-1474552220723-9a0aca6ce338?w=900&h=900&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1561677843-39dee7a319ca?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1525096650203-75a929e75d08?w=600&h=600&fit=crop',
      ],
      description: 'Spirited and playful Punjab beauty',
      height: '5\'7"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Punjabi', 'Hindi'],
      services: ['Events', 'Nightlife', 'Travel', 'Entertainment'],
      rates: { hourly: '₹4400', halfDay: '₹13200', fullDay: '₹23200', overnight: '₹28200' },
      rating: 4.75, reviews: 103, verified: true, responseTime: '< 42 min', availability: 'Available Today',
    },
    {
      id: 16,
      name: 'Riya',
      age: 24,
      location: 'Jaipur',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&h=900&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1569443693539-175ea9f007e8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590650046871-92c887180603?w=600&h=600&fit=crop',
      ],
      description: 'Royal Rajasthani beauty with princess charm',
      height: '5\'6"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Hindi', 'Rajasthani'],
      services: ['Dinner & Wine', 'Travel', 'Events', 'Escortship'],
      rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' },
      rating: 4.87, reviews: 141, verified: true, responseTime: '< 32 min', availability: 'Available',
    },
    {
      id: 17,
      name: 'Aisha',
      age: 27,
      location: 'Indore',
      image: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=600&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1592621385612-4d7129426394?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8fDA%3D  ',
        'https://images.unsplash.com/photo-1712546852186-4e180297529e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
      ],
      description: 'Warm and welcoming Indore sweetheart',
      height: '5\'8"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Hindi', 'Marathi'],
      services: ['Dinner & Wine', 'Shopping', 'Escortship', 'Travel'],
      rates: { hourly: '₹4600', halfDay: '₹13800', fullDay: '₹23800', overnight: '₹28800' },
      rating: 4.81, reviews: 124, verified: true, responseTime: '< 36 min', availability: 'Available',
    },
    {
      id: 18,
      name: 'Pooja',
      age: 25,
      location: 'Ahmedabad',
      image: 'https://images.unsplash.com/photo-1462332420958-a05d1e741341?w=900&h=900&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1499651681375-8afc5b4db253?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?w=600&h=600&fit=crop',
      ],
      description: 'Vibrant Gujarat charm and business elegance',
      height: '5\'7"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Gujarati', 'Hindi'],
      services: ['Events', 'Dinner & Wine', 'Travel', 'Corporate Events'],
      rates: { hourly: '₹4700', halfDay: '₹14000', fullDay: '₹24000', overnight: '₹29000' },
      rating: 4.79, reviews: 116, verified: true, responseTime: '< 44 min', availability: 'Available Tomorrow',
    },
    {
      id: 19,
      name: 'Shreya',
      age: 22,
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1474552220723-9a0aca6ce338?w=900&h=900&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1532170579297-281918c8ae72?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1534008897995-27a23e859048?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1511548774318-563182fe8d03?w=600&h=600&fit=crop',
      ],
      description: 'Young and bubbly Mumbai spirit',
      height: '5\'5"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Hindi', 'Marathi'],
      services: ['Nightlife', 'Events', 'Entertainment', 'Shopping'],
      rates: { hourly: '₹4200', halfDay: '₹12500', fullDay: '₹22500', overnight: '₹27500' },
      rating: 4.73, reviews: 89, verified: true, responseTime: '< 50 min', availability: 'Available',
    },
    {
      id: 20,
      name: 'Nisha',
      age: 28,
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?w=900&h=900&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1554103493-aa502084d8cf?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=600&h=600&fit=crop',
      ],
      description: 'Mature and sophisticated Delhi executive',
      height: '5\'8"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Hindi', 'Punjabi'],
      services: ['Corporate Events', 'Dinner & Wine', 'Escortship', 'Travel'],
      rates: { hourly: '₹5300', halfDay: '₹16000', fullDay: '₹26000', overnight: '₹32000' },
      rating: 4.96, reviews: 178, verified: true, responseTime: '< 15 min', availability: 'Available',
    },
    {
      id: 21,
      name: 'Disha',
      age: 23,
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1506277886241-b8a9ad009800?w=900&h=900&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1610808640360-4545f3778c67?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604004382469-0eaf9e80a700?w=600&h=600&fit=crop',
      ],
      description: 'Modern Indian beauty with tech city vibes',
      height: '5\'6"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Kannada', 'Tamil'],
      services: ['Dinner & Wine', 'Events', 'Travel', 'Shopping'],
      rates: { hourly: '₹4600', halfDay: '₹14000', fullDay: '₹24000', overnight: '₹29000' },
      rating: 4.86, reviews: 144, verified: true, responseTime: '< 28 min', availability: 'Available',
    },
    {
      id: 22,
      name: 'Seema',
      age: 26,
      location: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1538391846015-35a9af4eae37?w=900&h=900&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1621784563330-caee0b138a00?w=600&h=600&fit=crop',
      ],
      description: 'Tech city sophistication with modern outlook',
      height: '5\'7"',
      ethnicity: 'Indian',
      eyes: 'Brown',
      hair: 'Black',
      languages: ['English', 'Telugu', 'Urdu'],
      services: ['Dinner & Wine', 'Nightlife', 'Corporate Events', 'Travel'],
      rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' },
      rating: 4.91, reviews: 152, verified: true, responseTime: '< 22 min', availability: 'Available Today',
    },
    // Additional Mumbai profiles
    { id: 23, name: 'Tanvi', age: 25, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573496774917-408c31846ee4?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Mumbai model with international experience', height: '5\'8"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Marathi'], services: ['Events', 'Entertainment', 'Corporate Events', 'Travel'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.82, reviews: 115, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 24, name: 'Aditi', age: 23, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573496774535-dc45d9319dfe?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573496359172-d2e8df34d5c8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573496358715-88f60c951384?w=600&h=600&fit=crop',
      ], description: 'Glamorous Bollywood aspirant with star quality', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi'], services: ['Dinner', 'Nightlife', 'Events'], rates: { hourly: '₹4400', halfDay: '₹13300', fullDay: '₹23300', overnight: '₹28300' }, rating: 4.77, reviews: 98, verified: true, responseTime: '< 40 min', availability: 'Available' },
    { id: 25, name: 'Zoya', age: 27, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1570158268183-d296b2892211?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop',
      ], description: 'Elegant Mumbai socialite with refined taste', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Urdu'], services: ['Corporate Events', 'Travel', 'Dinner'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.90, reviews: 140, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 26, name: 'Myra', age: 24, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619379403956-7c7f25f20c08?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=600&fit=crop',
      ], description: 'Charming Mumbai entertainer with vivacious personality', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi'], services: ['Dinner', 'Events', 'Entertainment'], rates: { hourly: '₹4300', halfDay: '₹13000', fullDay: '₹23000', overnight: '₹28000' }, rating: 4.75, reviews: 87, verified: true, responseTime: '< 45 min', availability: 'Available' },
    { id: 27, name: 'Tara', age: 26, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1609132718866-e473b88b9a40?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619945258699-35d5d8be80fa?w=600&h=600&fit=crop',
      ], description: 'Sophisticated finance professional with elegance', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.88, reviews: 132, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 28, name: 'Alisha', age: 22, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1603775020644-eb8decd79994?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1599842057874-37393e9342df?w=600&h=600&fit=crop',
      ], description: 'Young vibrant Mumbai beauty with fresh energy', height: '5\'4"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi'], services: ['Nightlife', 'Entertainment', 'Events'], rates: { hourly: '₹4000', halfDay: '₹12000', fullDay: '₹22000', overnight: '₹27000' }, rating: 4.70, reviews: 75, verified: true, responseTime: '< 50 min', availability: 'Available' },
    { id: 29, name: 'Naina', age: 28, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1591018450941-0022430c8984?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1583864697877-a6b49e782e8d?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1580894908361-967195033215?w=600&h=600&fit=crop',
      ], description: 'Mature Mumbai executive companion with class', height: '5\'8"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Marathi'], services: ['Travel', 'Corporate Events', 'Dinner'], rates: { hourly: '₹5200', halfDay: '₹15700', fullDay: '₹26000', overnight: '₹31000' }, rating: 4.93, reviews: 165, verified: true, responseTime: '< 20 min', availability: 'Available' },
    { id: 30, name: 'Jiya', age: 25, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1592124549776-a7f0cc973b24?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&h=600&fit=crop',
      ], description: 'Elegant Mumbai fashion model with runway experience', height: '5\'9"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi'], services: ['Events', 'Shopping', 'Corporate Events'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.85, reviews: 118, verified: true, responseTime: '< 32 min', availability: 'Available' },
    // Additional Delhi profiles
    { id: 31, name: 'Kavita', age: 27, location: 'Delhi', image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573879500645-ebe1fc4b9d84?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Delhi intellectual with cultural depth', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Punjabi'], services: ['Dinner', 'Cultural Events', 'Travel'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.89, reviews: 138, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 32, name: 'Sanya', age: 24, location: 'Delhi', image: 'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573879500208-f3c78c19e2b9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1599842167275-5f5d8d689a3b?w=600&h=600&fit=crop',
      ], description: 'Charming Delhi university graduate with bright mind', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi'], services: ['Travel', 'Events', 'Dinner'], rates: { hourly: '₹4400', halfDay: '₹13300', fullDay: '₹23300', overnight: '₹28300' }, rating: 4.76, reviews: 102, verified: true, responseTime: '< 38 min', availability: 'Available' },
    { id: 33, name: 'Aradhya', age: 26, location: 'Delhi', image: 'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1609505848616-2a95ed7e3d05?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&h=600&fit=crop',
      ], description: 'Elite Delhi socialite with connections', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Punjabi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.91, reviews: 155, verified: true, responseTime: '< 18 min', availability: 'Available' },
    { id: 34, name: 'Mahira', age: 23, location: 'Delhi', image: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&h=600&fit=crop',
      ], description: 'Vibrant Delhi artist with creative soul', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Urdu'], services: ['Nightlife', 'Entertainment', 'Events'], rates: { hourly: '₹4100', halfDay: '₹12300', fullDay: '₹22300', overnight: '₹27300' }, rating: 4.72, reviews: 89, verified: true, responseTime: '< 42 min', availability: 'Available' },
    { id: 35, name: 'Saanvi', age: 25, location: 'Delhi', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&h=600&fit=crop',
      ], description: 'Elegant Delhi professional with poise', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi'], services: ['Dinner', 'Travel', 'Corporate Events'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.87, reviews: 126, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 36, name: 'Palak', age: 28, location: 'Delhi', image: 'https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1606103836293-0a063a1dda1a?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1601122424950-c5b70e0bf6bb?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Delhi ambassador with grace', height: '5\'8"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Punjabi'], services: ['Corporate Events', 'Cultural Events', 'Travel'], rates: { hourly: '₹5300', halfDay: '₹16000', fullDay: '₹26500', overnight: '₹31500' }, rating: 4.94, reviews: 172, verified: true, responseTime: '< 15 min', availability: 'Available' },
    { id: 37, name: 'Shanaya', age: 24, location: 'Delhi', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1596215143922-eebd0d6ec0b5?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606103836293-0a063a1dda1a?w=600&h=600&fit=crop',
      ], description: 'Charming Delhi fashion designer with unique style', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi'], services: ['Shopping', 'Events', 'Dinner'], rates: { hourly: '₹4600', halfDay: '₹14000', fullDay: '₹24000', overnight: '₹29000' }, rating: 4.80, reviews: 110, verified: true, responseTime: '< 33 min', availability: 'Available' },
    { id: 38, name: 'Kirti', age: 22, location: 'Delhi', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1598965675045-dc2c43f2f37e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1595956913089-fba1785ad2d8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1591727855064-2c761f7c935a?w=600&h=600&fit=crop',
      ], description: 'Young Delhi beauty with sweet charm', height: '5\'4"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi'], services: ['Nightlife', 'Dinner', 'Events'], rates: { hourly: '₹3900', halfDay: '₹11700', fullDay: '₹21700', overnight: '₹26700' }, rating: 4.68, reviews: 72, verified: true, responseTime: '< 48 min', availability: 'Available' },
    // Additional Bangalore profiles
    { id: 39, name: 'Aanya', age: 25, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1507081323647-4d250478b919?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604519927106-7c4f5a7d3b55?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?w=600&h=600&fit=crop',
      ], description: 'Tech-savvy Bangalore professional with modern outlook', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Kannada', 'Hindi'], services: ['Corporate Events', 'Travel', 'Dinner'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.83, reviews: 119, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 40, name: 'Pari', age: 23, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=600&h=600&fit=crop',
      ], description: 'Vibrant Bangalore entrepreneur with innovative spirit', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Kannada'], services: ['Dinner', 'Events', 'Travel'], rates: { hourly: '₹4400', halfDay: '₹13300', fullDay: '₹23300', overnight: '₹28300' }, rating: 4.78, reviews: 95, verified: true, responseTime: '< 36 min', availability: 'Available' },
    { id: 41, name: 'Avni', age: 26, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1542178243-bc20204b769f?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619895092538-128341789043?w=600&h=600&fit=crop',
      ], description: 'Elegant Bangalore yoga instructor with wellness focus', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Kannada', 'Tamil'], services: ['Travel', 'Escortship', 'Dinner'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.85, reviews: 128, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 42, name: 'Inaya', age: 24, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=600&h=600&fit=crop',
      ], description: 'Charming Bangalore software engineer with tech expertise', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Kannada', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4600', halfDay: '₹14000', fullDay: '₹24000', overnight: '₹29000' }, rating: 4.81, reviews: 107, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 43, name: 'Mishka', age: 27, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619945258699-35d5d8be80fa?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Bangalore consultant with business acumen', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Kannada', 'Hindi'], services: ['Corporate Events', 'Travel', 'Dinner'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.90, reviews: 143, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 44, name: 'Navya', age: 22, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=600&h=600&fit=crop',
      ], description: 'Young Bangalore blogger with social media following', height: '5\'4"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Kannada'], services: ['Events', 'Nightlife', 'Entertainment'], rates: { hourly: '₹4200', halfDay: '₹12600', fullDay: '₹22600', overnight: '₹27600' }, rating: 4.74, reviews: 85, verified: true, responseTime: '< 41 min', availability: 'Available' },
    { id: 45, name: 'Reya', age: 25, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573496774535-dc45d9319dfe?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=600&fit=crop',
      ], description: 'Elegant Bangalore model with runway experience', height: '5\'8"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Kannada', 'Hindi'], services: ['Events', 'Shopping', 'Corporate Events'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.86, reviews: 122, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 46, name: 'Nitya', age: 28, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1577880216142-8549e9488dad?w=600&h=600&fit=crop',
      ], description: 'Mature Bangalore executive with leadership qualities', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Kannada', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹5100', halfDay: '₹15400', fullDay: '₹25700', overnight: '₹30700' }, rating: 4.92, reviews: 159, verified: true, responseTime: '< 19 min', availability: 'Available' },
    // Additional Hyderabad profiles
    { id: 47, name: 'Lavanya', age: 24, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573496359172-d2e8df34d5c8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=600&h=600&fit=crop',
      ], description: 'Graceful Hyderabad classical dancer with cultural heritage', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Telugu', 'Hindi'], services: ['Cultural Events', 'Dinner', 'Events'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.84, reviews: 117, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 48, name: 'Anika', age: 23, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1565464027194-7957a2295fb7?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&h=600&fit=crop',
      ], description: 'Charming Hyderabad IT professional with tech background', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Telugu'], services: ['Corporate Events', 'Travel', 'Dinner'], rates: { hourly: '₹4400', halfDay: '₹13300', fullDay: '₹23300', overnight: '₹28300' }, rating: 4.79, reviews: 101, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 49, name: 'Trisha', age: 26, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1596215143922-eebd0d6ec0b5?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1595956913089-fba1785ad2d8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Hyderabad architect with design sensibility', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Telugu', 'Hindi'], services: ['Dinner', 'Events', 'Corporate Events'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.88, reviews: 134, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 50, name: 'Reet', age: 25, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?w=600&h=600&fit=crop',
      ], description: 'Vibrant Hyderabad entrepreneur with business spirit', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Telugu', 'Hindi'], services: ['Corporate Events', 'Nightlife', 'Events'], rates: { hourly: '₹4600', halfDay: '₹14000', fullDay: '₹24000', overnight: '₹29000' }, rating: 4.82, reviews: 113, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 51, name: 'Suhana', age: 27, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573496358715-88f60c951384?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&h=600&fit=crop',
      ], description: 'Elegant Hyderabad fashion model with international exposure', height: '5\'8"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Telugu', 'Hindi'], services: ['Events', 'Shopping', 'Corporate Events'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.90, reviews: 147, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 52, name: 'Aarohi', age: 24, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573879500202-c132b7bb6faf?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573879500208-f3c78c19e2b9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?w=600&h=600&fit=crop',
      ], description: 'Charming Hyderabad singer with melodious voice', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Telugu', 'Hindi'], services: ['Entertainment', 'Events', 'Cultural Events'], rates: { hourly: '₹4400', halfDay: '₹13300', fullDay: '₹23300', overnight: '₹28300' }, rating: 4.77, reviews: 96, verified: true, responseTime: '< 37 min', availability: 'Available' },
    { id: 53, name: 'Anushka', age: 22, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1609505848616-2a95ed7e3d05?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&h=600&fit=crop',
      ], description: 'Young Hyderabad influencer with vibrant personality', height: '5\'4"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Telugu'], services: ['Nightlife', 'Events', 'Entertainment'], rates: { hourly: '₹4000', halfDay: '₹12000', fullDay: '₹22000', overnight: '₹27000' }, rating: 4.71, reviews: 82, verified: true, responseTime: '< 43 min', availability: 'Available' },
    { id: 54, name: 'Mira', age: 28, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&h=600&fit=crop',
      ], description: 'Mature Hyderabad doctor with caring nature', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Telugu', 'Hindi'], services: ['Dinner', 'Corporate Events', 'Travel'], rates: { hourly: '₹5200', halfDay: '₹15700', fullDay: '₹26000', overnight: '₹31000' }, rating: 4.93, reviews: 164, verified: true, responseTime: '< 18 min', availability: 'Available' },
    // Additional Pune profiles
    { id: 55, name: 'Aradhana', age: 25, location: 'Pune', image: 'https://images.unsplash.com/photo-1598550487042-b5345c08c4c5?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Pune professor with intellectual charm', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Marathi', 'Hindi'], services: ['Cultural Events', 'Dinner', 'Travel'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.86, reviews: 125, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 56, name: 'Diya', age: 23, location: 'Pune', image: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1601122424950-c5b70e0bf6bb?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=600&h=600&fit=crop',
      ], description: 'Charming Pune artist with creative soul', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Marathi'], services: ['Events', 'Shopping', 'Cultural Events'], rates: { hourly: '₹4400', halfDay: '₹13300', fullDay: '₹23300', overnight: '₹28300' }, rating: 4.79, reviews: 104, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 57, name: 'Ishika', age: 26, location: 'Pune', image: 'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606103836293-0a063a1dda1a?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&h=600&fit=crop',
      ], description: 'Elegant Pune lawyer with professional demeanor', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Marathi', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.89, reviews: 139, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 58, name: 'Kriti', age: 24, location: 'Pune', image: 'https://images.unsplash.com/photo-1619895092538-128341789043?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1595956913089-fba1785ad2d8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1591727855064-2c761f7c935a?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=600&h=600&fit=crop',
      ], description: 'Vibrant Pune journalist with storytelling flair', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Marathi', 'Hindi'], services: ['Dinner', 'Travel', 'Events'], rates: { hourly: '₹4600', halfDay: '₹14000', fullDay: '₹24000', overnight: '₹29000' }, rating: 4.81, reviews: 111, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 59, name: 'Sanvi', age: 27, location: 'Pune', image: 'https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1609132718866-e473b88b9a40?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619945258699-35d5d8be80fa?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Pune entrepreneur with business acumen', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Marathi', 'Hindi'], services: ['Corporate Events', 'Travel', 'Dinner'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.91, reviews: 150, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 60, name: 'Tanya', age: 22, location: 'Pune', image: 'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1603775020644-eb8decd79994?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1599842057874-37393e9342df?w=600&h=600&fit=crop',
      ], description: 'Young Pune dancer with graceful moves', height: '5\'4"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Marathi'], services: ['Events', 'Entertainment', 'Cultural Events'], rates: { hourly: '₹4100', halfDay: '₹12300', fullDay: '₹22300', overnight: '₹27300' }, rating: 4.73, reviews: 88, verified: true, responseTime: '< 40 min', availability: 'Available' },
    { id: 61, name: 'Vrinda', age: 25, location: 'Pune', image: 'https://images.unsplash.com/photo-159180485268-e7d89a869d5e?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1591018450941-0022430c8984?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1583864697877-a6b49e782e8d?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1580894908361-967195033215?w=600&h=600&fit=crop',
      ], description: 'Elegant Pune fashion designer with unique style', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Marathi', 'Hindi'], services: ['Shopping', 'Events', 'Corporate Events'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.84, reviews: 120, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 62, name: 'Yasmin', age: 28, location: 'Pune', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1592124549776-a7f0cc973b24?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&h=600&fit=crop',
      ], description: 'Mature Pune executive with strategic mind', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Marathi', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹5100', halfDay: '₹15400', fullDay: '₹25700', overnight: '₹30700' }, rating: 4.92, reviews: 161, verified: true, responseTime: '< 19 min', availability: 'Available' },
    // Chennai profiles
    { id: 63, name: 'Deepika', age: 24, location: 'Chennai', image: 'https://images.unsplash.com/photo-1548139086-8d9943c99ceb?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573879500645-ebe1fc4b9d84?w=600&h=600&fit=crop',
      ], description: 'Graceful Chennai classical dancer with traditional values', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Tamil', 'Telugu'], services: ['Cultural Events', 'Dinner', 'Events'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.85, reviews: 121, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 64, name: 'Lakshmi', age: 25, location: 'Chennai', image: 'https://images.unsplash.com/photo-1598343146174-ab46aa4195ad?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573879500208-f3c78c19e2b9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1599842167275-5f5d8d689a3b?w=600&h=600&fit=crop',
      ], description: 'Elegant Chennai software engineer with tech expertise', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Tamil', 'Hindi'], services: ['Corporate Events', 'Travel', 'Dinner'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.87, reviews: 129, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 65, name: 'Shalini', age: 26, location: 'Chennai', image: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1609505848616-2a95ed7e3d05?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Chennai doctor with caring personality', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Tamil', 'Telugu'], services: ['Dinner', 'Corporate Events', 'Travel'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.91, reviews: 148, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 66, name: 'Archana', age: 23, location: 'Chennai', image: 'https://images.unsplash.com/photo-1622022720859-c75c5ee83c37?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573496359172-d2e8df34d5c8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573496358715-88f60c951384?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573497019918-b64dc5c75f5e?w=600&h=600&fit=crop',
      ], description: 'Charming Chennai model with photogenic appeal', height: '5\'8"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Tamil'], services: ['Events', 'Shopping', 'Entertainment'], rates: { hourly: '₹4400', halfDay: '₹13300', fullDay: '₹23300', overnight: '₹28300' }, rating: 4.78, reviews: 99, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 67, name: 'Mythili', age: 27, location: 'Chennai', image: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1570158268183-d296b2892211?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=600&h=600&fit=crop',
      ], description: 'Vibrant Chennai entrepreneur with innovative ideas', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Tamil', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.89, reviews: 137, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 68, name: 'Priyanka', age: 22, location: 'Chennai', image: 'https://images.unsplash.com/photo-1592621385612-4d7129426394?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1619379403956-7c7f25f20c08?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?w=600&h=600&fit=crop',
      ], description: 'Young Chennai actress with performing skills', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Tamil'], services: ['Entertainment', 'Events', 'Cultural Events'], rates: { hourly: '₹4000', halfDay: '₹12000', fullDay: '₹22000', overnight: '₹27000' }, rating: 4.72, reviews: 84, verified: true, responseTime: '< 42 min', availability: 'Available' },
    { id: 69, name: 'Swathi', age: 25, location: 'Chennai', image: 'https://images.unsplash.com/photo-1606814893907-c2e42943c91fc?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619945258699-35d5d8be80fa?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=600&h=600&fit=crop',
      ], description: 'Elegant Chennai lawyer with professional ethics', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Tamil', 'Telugu'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.86, reviews: 124, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 70, name: 'Vaishnavi', age: 28, location: 'Chennai', image: 'https://images.unsplash.com/photo-1602442259296-389e69d06803?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1603775020644-eb8decd79994?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1599842057874-37393e9342df?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=600&h=600&fit=crop',
      ], description: 'Mature Chennai professor with academic excellence', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Tamil', 'Hindi'], services: ['Cultural Events', 'Dinner', 'Travel'], rates: { hourly: '₹5200', halfDay: '₹15700', fullDay: '₹26000', overnight: '₹31000' }, rating: 4.93, reviews: 166, verified: true, responseTime: '< 18 min', availability: 'Available' },
    // Goa profiles
    { id: 71, name: 'Luna', age: 23, location: 'Goa', image: 'https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1583864697877-a6b49e782e8d?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1580894908361-967195033215?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1577880216142-8549e9488dad?w=600&h=600&fit=crop',
      ], description: 'Free-spirited Goa beach beauty with carefree vibe', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Brown', languages: ['English', 'Hindi', 'Konkani'], services: ['Nightlife', 'Travel', 'Entertainment'], rates: { hourly: '₹4400', halfDay: '₹13300', fullDay: '₹23300', overnight: '₹28300' }, rating: 4.76, reviews: 94, verified: true, responseTime: '< 38 min', availability: 'Available' },
    { id: 72, name: 'Maya', age: 24, location: 'Goa', image: 'https://images.unsplash.com/photo-1561677843-39dee7a319ca?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1592124549776-a7f0cc973b24?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604004555530-4dc8a7160baf?w=600&h=600&fit=crop',
      ], description: 'Vibrant Goa DJ with music passion', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi'], services: ['Nightlife', 'Entertainment', 'Events'], rates: { hourly: '₹4000', halfDay: '₹12000', fullDay: '₹22000', overnight: '₹27000' }, rating: 4.71, reviews: 81, verified: true, responseTime: '< 44 min', availability: 'Available' },
    { id: 73, name: 'Kiara', age: 25, location: 'Goa', image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573879500645-ebe1fc4b9d84?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573879500202-c132b7bb6faf?w=600&h=600&fit=crop',
      ], description: 'Elegant Goa event planner with organizational skills', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Konkani'], services: ['Events', 'Travel', 'Corporate Events'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.83, reviews: 116, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 74, name: 'Sara', age: 26, location: 'Goa', image: 'https://images.unsplash.com/photo-1525096650203-75a929e75d08?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1599842167275-5f5d8d689a3b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604519927106-7c4f5a7d3b55?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Goa yoga instructor with wellness expertise', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Brown', languages: ['English', 'Hindi'], services: ['Travel', 'Escortship', 'Events'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.88, reviews: 131, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 75, name: 'Rina', age: 22, location: 'Goa', image: 'https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1609505848616-2a95ed7e3d05?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=600&h=600&fit=crop',
      ], description: 'Young Goa surfer girl with adventurous spirit', height: '5\'4"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Brown', languages: ['English', 'Hindi'], services: ['Nightlife', 'Entertainment', 'Travel'], rates: { hourly: '₹3900', halfDay: '₹11700', fullDay: '₹21700', overnight: '₹26700' }, rating: 4.68, reviews: 73, verified: true, responseTime: '< 50 min', availability: 'Available' },
    { id: 76, name: 'Alia', age: 27, location: 'Goa', image: 'https://images.unsplash.com/photo-1569443693539-175ea9f007e8?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=600&h=600&fit=crop',
      ], description: 'Charming Goa restaurateur with culinary passion', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Konkani'], services: ['Dinner', 'Events', 'Travel'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.85, reviews: 123, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 77, name: 'Bella', age: 24, location: 'Goa', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-15995661503-29194dcaad36?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606103836293-0a063a1dda1a?w=600&h=600&fit=crop',
      ], description: 'Elegant Goa travel blogger with wanderlust', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi'], services: ['Travel', 'Events', 'Escortship'], rates: { hourly: '₹4600', halfDay: '₹14000', fullDay: '₹24000', overnight: '₹29000' }, rating: 4.80, reviews: 108, verified: true, responseTime: '< 33 min', availability: 'Available' },
    { id: 78, name: 'Zara', age: 28, location: 'Goa', image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1601122424950-c5b70e0bf6bb?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1596215143922-eebd0d6ec0b5?w=600&h=600&fit=crop',
      ], description: 'Mature Goa artist with creative vision', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Brown', languages: ['English', 'Hindi', 'Konkani'], services: ['Cultural Events', 'Dinner', 'Travel'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.90, reviews: 145, verified: true, responseTime: '< 23 min', availability: 'Available' },
    // Kolkata profiles
    { id: 79, name: 'Roshni', age: 25, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1590650046871-92c887180603?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1598965675045-dc2c43f2f37e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1595956913089-fba1785ad2d8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1591727855064-2c761f7c935a?w=600&h=600&fit=crop',
      ], description: 'Artistic Kolkata poet with literary soul', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Bengali', 'Hindi'], services: ['Cultural Events', 'Dinner', 'Events'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.87, reviews: 127, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 80, name: 'Mitali', age: 24, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604519927106-7c4f5a7d3b55?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?w=600&h=600&fit=crop',
      ], description: 'Graceful Kolkata classical dancer with tradition', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Bengali'], services: ['Cultural Events', 'Events', 'Dinner'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.84, reviews: 119, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 81, name: 'Payal', age: 26, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Kolkata journalist with writing skills', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Bengali', 'Hindi'], services: ['Dinner', 'Corporate Events', 'Travel'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.90, reviews: 142, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 82, name: 'Ankita', age: 23, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1515191107209-c28698631303?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619895092538-128341789043?w=600&h=600&fit=crop',
      ], description: 'Charming Kolkata model with photogenic face', height: '5\'8"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Bengali'], services: ['Events', 'Shopping', 'Entertainment'], rates: { hourly: '₹4400', halfDay: '₹13300', fullDay: '₹23300', overnight: '₹28300' }, rating: 4.77, reviews: 97, verified: true, responseTime: '< 36 min', availability: 'Available' },
    { id: 83, name: 'Ritu', age: 27, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1546539782-6fc531453083?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=600&h=600&fit=crop',
      ], description: 'Elegant Kolkata entrepreneur with business mind', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Bengali', 'Hindi'], services: ['Corporate Events', 'Travel', 'Dinner'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.89, reviews: 136, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 84, name: 'Nandini', age: 22, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619945258699-35d5d8be80fa?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604519926708-b9fa2f04e879?w=600&h=600&fit=crop',
      ], description: 'Young Kolkata singer with melodious voice', height: '5\'4"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Bengali'], services: ['Entertainment', 'Events', 'Cultural Events'], rates: { hourly: '₹4000', halfDay: '₹12000', fullDay: '₹22000', overnight: '₹27000' }, rating: 4.70, reviews: 79, verified: true, responseTime: '< 45 min', availability: 'Available' },
    { id: 85, name: 'Sonali', age: 25, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1499651681375-8afc5b4db253?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600&h=600&fit=crop',
      ], description: 'Vibrant Kolkata fashion designer with unique aesthetics', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Bengali', 'Hindi'], services: ['Shopping', 'Events', 'Corporate Events'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.83, reviews: 114, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 86, name: 'Shreeja', age: 28, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?w=600&h=600&fit=crop',
      ], description: 'Mature Kolkata professor with academic excellence', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Bengali', 'Hindi'], services: ['Cultural Events', 'Dinner', 'Travel'], rates: { hourly: '₹5100', halfDay: '₹15400', fullDay: '₹25700', overnight: '₹30700' }, rating: 4.92, reviews: 157, verified: true, responseTime: '< 20 min', availability: 'Available' },
    // Surat profiles
    { id: 87, name: 'Jinal', age: 24, location: 'Surat', image: 'https://images.unsplash.com/photo-1511548774318-563182fe8d03?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1577880216142-8549e9488dad?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1570063578733-6a33b69d1439?w=600&h=600&fit=crop',
      ], description: 'Elegant Surat diamond trader with business acumen', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Gujarati', 'Hindi'], services: ['Dinner', 'Shopping', 'Corporate Events'], rates: { hourly: '₹4600', halfDay: '₹14000', fullDay: '₹24000', overnight: '₹29000' }, rating: 4.81, reviews: 106, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 88, name: 'Hiral', age: 25, location: 'Surat', image: 'https://images.unsplash.com/photo-1527736947477-2790e28f3443?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573496359172-d2e8df34d5c8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Surat textile designer with creative vision', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Gujarati', 'Hindi'], services: ['Corporate Events', 'Events', 'Shopping'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.86, reviews: 122, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 89, name: 'Khushi', age: 23, location: 'Surat', image: 'https://images.unsplash.com/photo-1554103493-aa502084d8cf?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1565464027194-7957a2295fb7?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1601122424950-c5b70e0bf6bb?w=600&h=600&fit=crop',
      ], description: 'Vibrant Surat entrepreneur with innovative ideas', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Gujarati'], services: ['Dinner', 'Travel', 'Events'], rates: { hourly: '₹4400', halfDay: '₹13300', fullDay: '₹23300', overnight: '₹28300' }, rating: 4.78, reviews: 93, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 90, name: 'Riddhi', age: 26, location: 'Surat', image: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1595956913089-fba1785ad2d8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&h=600&fit=crop',
      ], description: 'Charming Surat fashion model with runway experience', height: '5\'8"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Gujarati', 'Hindi'], services: ['Events', 'Shopping', 'Corporate Events'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.84, reviews: 117, verified: true, responseTime: '< 30 min', availability: 'Available' },
    // Lucknow profiles
    { id: 91, name: 'Aaradhya', age: 25, location: 'Lucknow', image: 'https://images.unsplash.com/photo-1532170579297-281918c8ae72?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573496774774-92264933dd67?w=600&h=600&fit=crop',
      ], description: 'Graceful Lucknow kathak dancer with classical training', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Urdu'], services: ['Cultural Events', 'Dinner', 'Events'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.88, reviews: 130, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 92, name: 'Khushbu', age: 24, location: 'Lucknow', image: 'https://images.unsplash.com/photo-1710262291995-bca99f46815b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D', gallery: [
        'https://plus.unsplash.com/premium_photo-1714195646981-221ce73e0d5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
        'https://images.unsplash.com/photo-1710262291995-bca99f46815b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
        'https://images.unsplash.com/photo-1710262291995-bca99f46815b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
      ], description: 'Elegant Lucknow lawyer with professional expertise', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.85, reviews: 120, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 93, name: 'Fiza', age: 26, location: 'Lucknow', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573879500208-f3c78c19e2b9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1599842167275-5f5d8d689a3b?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Lucknow entrepreneur with leadership', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Urdu'], services: ['Corporate Events', 'Travel', 'Dinner'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.90, reviews: 141, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 94, name: 'Noor', age: 23, location: 'Lucknow', image: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1609505848616-2a95ed7e3d05?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=600&h=600&fit=crop',
      ], description: 'Charming Lucknow artist with creative talent', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Urdu'], services: ['Events', 'Cultural Events', 'Dinner'], rates: { hourly: '₹4400', halfDay: '₹13300', fullDay: '₹23300', overnight: '₹28300' }, rating: 4.76, reviews: 92, verified: true, responseTime: '< 37 min', availability: 'Available' },
    // Nagpur profiles
    { id: 95, name: 'Vidya', age: 25, location: 'Nagpur', image: 'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Nagpur professor with academic credentials', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Marathi', 'Hindi'], services: ['Cultural Events', 'Dinner', 'Corporate Events'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.86, reviews: 125, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 96, name: 'Mansi', age: 24, location: 'Nagpur', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606103836293-0a063a1dda1a?w=600&h=600&fit=crop',
      ], description: 'Elegant Nagpur entrepreneur with business vision', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Marathi', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.83, reviews: 114, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 97, name: 'Garima', age: 26, location: 'Nagpur', image: 'https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1601122424950-c5b70e0bf6bb?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1596215143922-eebd0d6ec0b5?w=600&h=600&fit=crop',
      ], description: 'Vibrant Nagpur fashion designer with unique style', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Marathi', 'Hindi'], services: ['Shopping', 'Events', 'Corporate Events'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.88, reviews: 131, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 98, name: 'Harshita', age: 23, location: 'Nagpur', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1598965675045-dc2c43f2f37e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1595956913089-fba1785ad2d8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1591727855064-2c761f7c935a?w=600&h=600&fit=crop',
      ], description: 'Charming Nagpur model with photogenic appeal', height: '5\'8"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Marathi'], services: ['Events', 'Shopping', 'Entertainment'], rates: { hourly: '₹4500', halfDay: '₹13500', fullDay: '₹23500', overnight: '₹28500' }, rating: 4.79, reviews: 99, verified: true, responseTime: '< 34 min', availability: 'Available' },
    // More Mumbai profiles
    { id: 99, name: 'Niyati', age: 24, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604519927106-7c4f5a7d3b55?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?w=600&h=600&fit=crop',
      ], description: 'Elegant Mumbai marketing professional', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Marathi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.83, reviews: 116, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 100, name: 'Radhika', age: 27, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Mumbai business consultant', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi'], services: ['Corporate Events', 'Travel', 'Dinner'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.89, reviews: 135, verified: true, responseTime: '< 24 min', availability: 'Available' },
    // More Delhi profiles
    { id: 101, name: 'Ruhani', age: 25, location: 'Delhi', image: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619895092538-128341789043?w=600&h=600&fit=crop',
      ], description: 'Charming Delhi interior designer', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Punjabi'], services: ['Shopping', 'Events', 'Dinner'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.82, reviews: 112, verified: true, responseTime: '< 31min', availability: 'Available' },
    { id: 102, name: 'Tanu', age: 23, location: 'Delhi', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=600&h=600&fit=crop',
      ], description: 'Vibrant Delhi social media manager', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi'], services: ['Events', 'Nightlife', 'Entertainment'], rates: { hourly: '₹4300', halfDay: '₹13000', fullDay: '₹23000', overnight: '₹28000' }, rating: 4.74, reviews: 88, verified: true, responseTime: '< 39 min', availability: 'Available' },
    { id: 103, name: 'Urvi', age: 26, location: 'Delhi', image: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619945258699-35d5d8be80fa?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604519926708-b9fa2f04e879?w=600&h=600&fit=crop',
      ], description: 'Elegant Delhi HR professional', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Punjabi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.87, reviews: 129, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 104, name: 'Vaani', age: 24, location: 'Delhi', image: 'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Delhi finance analyst', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.85, reviews: 121, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 105, name: 'Yashika', age: 27, location: 'Delhi', image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?w=600&h=600&fit=crop',
      ], description: 'Charming Delhi public relations expert', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Punjabi'], services: ['Corporate Events', 'Events', 'Dinner'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.90, reviews: 142, verified: true, responseTime: '< 23 min', availability: 'Available' },
    // More Bangalore profiles
    { id: 106, name: 'Bhavya', age: 24, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1577880216142-8549e9488dad?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1570063578733-6a33b69d1439?w=600&h=600&fit=crop',
      ], description: 'Tech-savvy Bangalore data scientist', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Kannada', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.84, reviews: 118, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 107, name: 'Devika', age: 25, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573496359172-d2e8df34d5c8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=600&fit=crop',
      ], description: 'Elegant Bangalore product manager', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Kannada', 'Tamil'], services: ['Corporate Events', 'Travel', 'Dinner'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.88, reviews: 133, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 108, name: 'Eshita', age: 23, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1565464027194-7957a2295fb7?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1601122424950-c5b70e0bf6bb?w=600&h=600&fit=crop',
      ], description: 'Charming Bangalore UX designer', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Kannada'], services: ['Corporate Events', 'Events', 'Dinner'], rates: { hourly: '₹4500', halfDay: '₹13500', fullDay: '₹23500', overnight: '₹28500' }, rating: 4.76, reviews: 94, verified: true, responseTime: '< 36 min', availability: 'Available' },
    { id: 109, name: 'Falak', age: 26, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1595956913089-fba1785ad2d8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Bangalore startup founder', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Kannada', 'Hindi'], services: ['Corporate Events', 'Travel', 'Dinner'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.90, reviews: 141, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 110, name: 'Gayatri', age: 27, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573496774774-92264933dd67?w=600&h=600&fit=crop',
      ], description: 'Vibrant Bangalore venture capitalist', height: '5\'8"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Kannada', 'Hindi'], services: ['Corporate Events', 'Travel', 'Dinner'], rates: { hourly: '₹5000', halfDay: '₹15100', fullDay: '₹25400', overnight: '₹30400' }, rating: 4.91, reviews: 148, verified: true, responseTime: '< 21 min', availability: 'Available' },
    // More Hyderabad profiles
    { id: 111, name: 'Hema', age: 24, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573879500645-ebe1fc4b9d84?w=600&h=600&fit=crop',
      ], description: 'Elegant Hyderabad business analyst', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Telugu', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.83, reviews: 115, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 112, name: 'Jahnavi', age: 25, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573879500208-f3c78c19e2b9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1599842167275-5f5d8d689a3b?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Hyderabad marketing director', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Telugu', 'Hindi'], services: ['Corporate Events', 'Travel', 'Dinner'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.88, reviews: 132, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 113, name: 'Keerthi', age: 23, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1609505848616-2a95ed7e3d05?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=600&h=600&fit=crop',
      ], description: 'Charming Hyderabad content creator', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Telugu'], services: ['Events', 'Entertainment', 'Dinner'], rates: { hourly: '₹4300', halfDay: '₹13000', fullDay: '₹23000', overnight: '₹28000' }, rating: 4.75, reviews: 91, verified: true, responseTime: '< 38 min', availability: 'Available' },
    { id: 114, name: 'Leela', age: 26, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=600&h=600&fit=crop',
      ], description: 'Elegant Hyderabad operations manager', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Telugu', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.87, reviews: 128, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 115, name: 'Manisha', age: 27, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606103836293-0a063a1dda1a?w=600&h=600&fit=crop',
      ], description: 'Vibrant Hyderabad HR executive', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Telugu', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Events'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.89, reviews: 139, verified: true, responseTime: '< 24 min', availability: 'Available' },
    // More Pune profiles
    { id: 116, name: 'Nidhi', age: 24, location: 'Pune', image: 'https://images.unsplash.com/photo-1598550487042-b5345c08c4c5?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1601122424950-c5b70e0bf6bb?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1596215143922-eebd0d6ec0b5?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Pune research analyst', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Marathi', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Cultural Events'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.82, reviews: 111, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 117, name: 'Oorja', age: 25, location: 'Pune', image: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1598965675045-dc2c43f2f37e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1595956913089-fba1785ad2d8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1591727855064-2c761f7c935a?w=600&h=600&fit=crop',
      ], description: 'Elegant Pune brand strategist', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Marathi', 'Hindi'], services: ['Corporate Events', 'Travel', 'Dinner'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.86, reviews: 124, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 118, name: 'Pihu', age: 23, location: 'Pune', image: 'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604519927106-7c4f5a7d3b55?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?w=600&h=600&fit=crop',
      ], description: 'Charming Pune photographer', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Marathi'], services: ['Events', 'Shopping', 'Entertainment'], rates: { hourly: '₹4400', halfDay: '₹13300', fullDay: '₹23300', overnight: '₹28300' }, rating: 4.77, reviews: 98, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 119, name: 'Ridhi', age: 26, location: 'Pune', image: 'https://images.unsplash.com/photo-1619895092538-128341789043?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Pune investment banker', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Marathi', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.89, reviews: 137, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 120, name: 'Sahana', age: 24, location: 'Pune', image: 'https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619895092538-128341789043?w=600&h=600&fit=crop',
      ], description: 'Vibrant Pune management consultant', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Marathi', 'Hindi'], services: ['Corporate Events', 'Travel', 'Dinner'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.85, reviews: 119, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 121, name: 'Tanisha', age: 27, location: 'Pune', image: 'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=600&h=600&fit=crop',
      ], description: 'Elegant Pune corporate trainer', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Marathi', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.90, reviews: 144, verified: true, responseTime: '< 23 min', availability: 'Available' },
    // More Chennai profiles
    { id: 122, name: 'Amrita', age: 24, location: 'Chennai', image: 'https://images.unsplash.com/photo-1548139086-8d9943c99ceb?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619945258699-35d5d8be80fa?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604519926708-b9fa2f04e879?w=600&h=600&fit=crop',
      ], description: 'Graceful Chennai pharmaceutical researcher', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Tamil', 'Hindi'], services: ['Dinner', 'Corporate Events', 'Travel'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.83, reviews: 114, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 123, name: 'Brinda', age: 25, location: 'Chennai', image: 'https://images.unsplash.com/photo-1598343146174-ab46aa4195ad?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600&h=600&fit=crop',
      ], description: 'Elegant Chennai systems engineer', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Tamil', 'Telugu'], services: ['Corporate Events', 'Travel', 'Dinner'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.86, reviews: 126, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 124, name: 'Charvi', age: 23, location: 'Chennai', image: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?w=600&h=600&fit=crop',
      ], description: 'Charming Chennai graphic designer', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Tamil'], services: ['Events', 'Shopping', 'Entertainment'], rates: { hourly: '₹4400', halfDay: '₹13300', fullDay: '₹23300', overnight: '₹28300' }, rating: 4.75, reviews: 93, verified: true, responseTime: '< 37 min', availability: 'Available' },
    { id: 125, name: 'Divyani', age: 26, location: 'Chennai', image: 'https://images.unsplash.com/photo-1622022720859-c75c5ee83c37?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1577880216142-8549e9488dad?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1570063578733-6a33b69d1439?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Chennai financial advisor', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Tamil', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.88, reviews: 135, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 126, name: 'Esha', age: 24, location: 'Chennai', image: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573496359172-d2e8df34d5c8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=600&fit=crop',
      ], description: 'Vibrant Chennai event coordinator', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Tamil'], services: ['Events', 'Corporate Events', 'Dinner'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.82, reviews: 109, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 127, name: 'Gargi', age: 25, location: 'Chennai', image: 'https://images.unsplash.com/photo-1592621385612-4d7129426394?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1565464027194-7957a2295fb7?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1601122424950-c5b70e0bf6bb?w=600&h=600&fit=crop',
      ], description: 'Elegant Chennai biotechnology specialist', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Tamil', 'Telugu'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.85, reviews: 122, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 128, name: 'Harini', age: 27, location: 'Chennai', image: 'https://images.unsplash.com/photo-1606814893907-c2e42943c91fc?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1595956913089-fba1785ad2d8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Chennai legal consultant', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Tamil', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.90, reviews: 143, verified: true, responseTime: '< 23 min', availability: 'Available' },
    // More Goa profiles
    { id: 129, name: 'Dia', age: 23, location: 'Goa', image: 'https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573496774774-92264933dd67?w=600&h=600&fit=crop',
      ], description: 'Free-spirited Goa beach photographer', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Brown', languages: ['English', 'Hindi', 'Konkani'], services: ['Travel', 'Events', 'Entertainment'], rates: { hourly: '₹4300', halfDay: '₹13000', fullDay: '₹23000', overnight: '₹28000' }, rating: 4.73, reviews: 87, verified: true, responseTime: '< 40 min', availability: 'Available' },
    { id: 130, name: 'Eva', age: 24, location: 'Goa', image: 'https://images.unsplash.com/photo-1561677843-39dee7a319ca?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573879500645-ebe1fc4b9d84?w=600&h=600&fit=crop',
      ], description: 'Vibrant Goa bartender with mixology skills', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi'], services: ['Nightlife', 'Entertainment', 'Events'], rates: { hourly: '₹4200', halfDay: '₹12600', fullDay: '₹22600', overnight: '₹27600' }, rating: 4.69, reviews: 78, verified: true, responseTime: '< 46 min', availability: 'Available' },
    { id: 131, name: 'Fiona', age: 25, location: 'Goa', image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573879500208-f3c78c19e2b9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1599842167275-5f5d8d689a3b?w=600&h=600&fit=crop',
      ], description: 'Elegant Goa resort manager', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Konkani'], services: ['Events', 'Travel', 'Dinner'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.81, reviews: 113, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 132, name: 'Geet', age: 26, location: 'Goa', image: 'https://images.unsplash.com/photo-1525096650203-75a929e75d08?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1609505848616-2a95ed7e3d05?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Goa wellness coach', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Brown', languages: ['English', 'Hindi'], services: ['Travel', 'Escortship', 'Dinner'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.86, reviews: 127, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 133, name: 'Hina', age: 24, location: 'Goa', image: 'https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=600&h=600&fit=crop',
      ], description: 'Charming Goa water sports instructor', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Brown', languages: ['English', 'Hindi'], services: ['Travel', 'Entertainment', 'Events'], rates: { hourly: '₹4100', halfDay: '₹12300', fullDay: '₹22300', overnight: '₹27300' }, rating: 4.70, reviews: 82, verified: true, responseTime: '< 43 min', availability: 'Available' },
    { id: 134, name: 'Ira', age: 27, location: 'Goa', image: 'https://images.unsplash.com/photo-1569443693539-175ea9f007e8?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606103836293-0a063a1dda1a?w=600&h=600&fit=crop',
      ], description: 'Vibrant Goa gallery owner', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Konkani'], services: ['Cultural Events', 'Dinner', 'Travel'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.83, reviews: 118, verified: true, responseTime: '< 30 min', availability: 'Available' },
    // More Kolkata profiles
    { id: 135, name: 'Bidisha', age: 24, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1590650046871-92c887180603?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1601122424950-c5b70e0bf6bb?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1596215143922-eebd0d6ec0b5?w=600&h=600&fit=crop',
      ], description: 'Artistic Kolkata film critic', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Bengali', 'Hindi'], services: ['Cultural Events', 'Dinner', 'Events'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.81, reviews: 107, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 136, name: 'Chhaya', age: 25, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1598965675045-dc2c43f2f37e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1595956913089-fba1785ad2d8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1591727855064-2c761f7c935a?w=600&h=600&fit=crop',
      ], description: 'Graceful Kolkata bharatanatyam dancer', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Bengali'], services: ['Cultural Events', 'Events', 'Dinner'], rates: { hourly: '₹4600', halfDay: '₹14000', fullDay: '₹24000', overnight: '₹29000' }, rating: 4.78, reviews: 102, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 137, name: 'Debosmita', age: 26, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604519927106-7c4f5a7d3b55?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Kolkata media planner', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Bengali', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.88, reviews: 133, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 138, name: 'Eesha', age: 23, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1515191107209-c28698631303?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=600&h=600&fit=crop',
      ], description: 'Charming Kolkata advertising professional', height: '5\'8"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Bengali'], services: ['Corporate Events', 'Events', 'Dinner'], rates: { hourly: '₹4600', halfDay: '₹14000', fullDay: '₹24000', overnight: '₹29000' }, rating: 4.75, reviews: 95, verified: true, responseTime: '< 37 min', availability: 'Available' },
    { id: 139, name: 'Gouri', age: 24, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1546539782-6fc531453083?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576201836106-db17758fd1c97?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619895092538-128341789043?w=600&h=600&fit=crop',
      ], description: 'Elegant Kolkata museum curator', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Bengali', 'Hindi'], services: ['Cultural Events', 'Dinner', 'Events'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.83, reviews: 116, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 140, name: 'Jharna', age: 24, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=600&h=600&fit=crop',
      ], description: 'Elegant Kolkata writer', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Bengali', 'Hindi'], services: ['Cultural Events', 'Dinner', 'Events'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.83, reviews: 117, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 141, name: 'Kalyani', age: 25, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619945258699-35d5d8be80fa?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604519926708-b9fa2f04e879?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Kolkata designer', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Bengali', 'Hindi'], services: ['Shopping', 'Events', 'Corporate Events'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.86, reviews: 126, verified: true, responseTime: '< 27 min', availability: 'Available' },
    // Chandigarh profiles
    { id: 142, name: 'Harsha', age: 24, location: 'Chandigarh', image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600&h=600&fit=crop',
      ], description: 'Vibrant Chandigarh entrepreneur', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Punjabi', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4600', halfDay: '₹14000', fullDay: '₹24000', overnight: '₹29000' }, rating: 4.81, reviews: 108, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 143, name: 'Jasleen', age: 25, location: 'Chandigarh', image: 'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?w=600&h=600&fit=crop',
      ], description: 'Elegant Chandigarh model', height: '5\'8"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Punjabi', 'Hindi'], services: ['Events', 'Shopping', 'Entertainment'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.84, reviews: 119, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 144, name: 'Kiran', age: 26, location: 'Chandigarh', image: 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1577880216142-8549e9488dad?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1570063578733-6a33b69d1439?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Chandigarh banker', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Punjabi', 'Hindi'], services: ['Corporate Events', 'Travel', 'Dinner'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.88, reviews: 132, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 145, name: 'Neetu', age: 23, location: 'Chandigarh', image: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573496359172-d2e8df34d5c8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=600&fit=crop',
      ], description: 'Charming Chandigarh fitness coach', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Punjabi', 'Hindi'], services: ['Travel', 'Events', 'Escortship'], rates: { hourly: '₹4300', halfDay: '₹13000', fullDay: '₹23000', overnight: '₹28000' }, rating: 4.75, reviews: 92, verified: true, responseTime: '< 37 min', availability: 'Available' },
    // Jaipur profiles
    { id: 146, name: 'Poornima', age: 24, location: 'Jaipur', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1565464027194-7957a2295fb7?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1601122424950-c5b70e0bf6bb?w=600&h=600&fit=crop',
      ], description: 'Regal Jaipur heritage host', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Rajasthani'], services: ['Cultural Events', 'Dinner', 'Travel'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.86, reviews: 123, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 147, name: 'Rajani', age: 25, location: 'Jaipur', image: 'https://images.unsplash.com/photo-1598550487042-b5345c08c4c5?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1595956913089-fba1785ad2d8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&h=600&fit=crop',
      ], description: 'Elegant Jaipur jewelry designer', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Rajasthani'], services: ['Shopping', 'Events', 'Corporate Events'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.89, reviews: 137, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 148, name: 'Shivani', age: 26, location: 'Jaipur', image: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573496774774-92264933dd67?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Jaipur architect', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.91, reviews: 148, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 149, name: 'Una', age: 23, location: 'Jaipur', image: 'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573879500645-ebe1fc4b9d84?w=600&h=600&fit=crop',
      ], description: 'Charming Jaipur fashion model', height: '5\'8"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi'], services: ['Events', 'Shopping', 'Entertainment'], rates: { hourly: '₹4500', halfDay: '₹13500', fullDay: '₹23500', overnight: '₹28500' }, rating: 4.78, reviews: 101, verified: true, responseTime: '< 34 min', availability: 'Available' },
    // Indore profiles
    { id: 150, name: 'Bhumi', age: 24, location: 'Indore', image: 'https://images.unsplash.com/photo-1619895092538-128341789043?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573879500208-f3c78c19e2b9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1599842167275-5f5d8d689a3b?w=600&h=600&fit=crop',
      ], description: 'Elegant Indore entrepreneur', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Marathi'], services: ['Corporate Events', 'Travel', 'Dinner'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.83, reviews: 116, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 151, name: 'Chandni', age: 25, location: 'Indore', image: 'https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1609505848616-2a95ed7e3d05?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Indore marketing professional', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Marathi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.87, reviews: 128, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 152, name: 'Damini', age: 26, location: 'Indore', image: 'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?w=600&h=600&fit=crop',
      ], description: 'Vibrant Indore consultant', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi'], services: ['Corporate Events', 'Events', 'Dinner'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.90, reviews: 141, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 153, name: 'Ekta', age: 23, location: 'Indore', image: 'https://images.unsplash.com/photo-1548139086-8d9943c99ceb?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1606103836293-0a063a1dda1a?w=600&h=600&fit=crop',
      ], description: 'Charming Indore teacher', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi'], services: ['Dinner', 'Cultural Events', 'Events'], rates: { hourly: '₹4400', halfDay: '₹13300', fullDay: '₹23300', overnight: '₹28300' }, rating: 4.76, reviews: 97, verified: true, responseTime: '< 36 min', availability: 'Available' },
    // Ahmedabad profiles
    { id: 154, name: 'Deepa', age: 24, location: 'Ahmedabad', image: 'https://images.unsplash.com/photo-1598343146174-ab46aa4195ad?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1601122424950-c5b70e0bf6bb?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1596215143922-eebd0d6ec0b5?w=600&h=600&fit=crop',
      ], description: 'Elegant Ahmedabad textile designer', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Gujarati', 'Hindi'], services: ['Shopping', 'Events', 'Corporate Events'], rates: { hourly: '₹4700', halfDay: '₹14200', fullDay: '₹24200', overnight: '₹29200' }, rating: 4.84, reviews: 118, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 155, name: 'Foram', age: 25, location: 'Ahmedabad', image: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1598965675045-dc2c43f2f37e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1595956913089-fba1785ad2d8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1591727855064-2c761f7c935a?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Ahmedabad architect', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Gujarati', 'Hindi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.88, reviews: 133, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 156, name: 'Gayatri', age: 26, location: 'Ahmedabad', image: 'https://images.unsplash.com/photo-1622022720859-c75c5ee83c37?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604519927106-7c4f5a7d3b55?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?w=600&h=600&fit=crop',
      ], description: 'Vibrant Ahmedabad entrepreneur', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Gujarati', 'Hindi'], services: ['Corporate Events', 'Travel', 'Dinner'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.91, reviews: 147, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 157, name: 'Hetal', age: 23, location: 'Ahmedabad', image: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=600&h=600&fit=crop',
      ], description: 'Charming Ahmedabad influencer', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Gujarati'], services: ['Events', 'Nightlife', 'Entertainment'], rates: { hourly: '₹4200', halfDay: '₹12600', fullDay: '₹22600', overnight: '₹27600' }, rating: 4.74, reviews: 89, verified: true, responseTime: '< 39 min', availability: 'Available' },
    // Additional Mumbai escorts
    { id: 158, name: 'Roshini', age: 26, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573496774774-92264933dd67?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Mumbai investment banker', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Marathi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹4900', halfDay: '₹14800', fullDay: '₹24800', overnight: '₹29800' }, rating: 4.91, reviews: 149, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 159, name: 'Pooja', age: 24, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573496359172-d2e8df34d5c8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=600&fit=crop',
      ], description: 'Vibrant Mumbai marketing executive', height: '5\'6"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Marathi'], services: ['Dinner', 'Events', 'Nightlife'], rates: { hourly: '₹4600', halfDay: '₹14000', fullDay: '₹24000', overnight: '₹29000' }, rating: 4.83, reviews: 112, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 160, name: 'Kavya', age: 23, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1619945258699-35d5d8be80fa?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604519926708-b9fa2f04e879?w=600&h=600&fit=crop',
      ], description: 'Charming Mumbai PR professional', height: '5\'5"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Marathi'], services: ['Corporate Events', 'Shopping', 'Dinner'], rates: { hourly: '₹4400', halfDay: '₹13300', fullDay: '₹23300', overnight: '₹28300' }, rating: 4.79, reviews: 95, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 161, name: 'Siya', age: 27, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600&h=600&fit=crop',
      ], description: 'Elegant Mumbai art gallery owner', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Marathi'], services: ['Cultural Events', 'Dinner', 'Travel'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.88, reviews: 133, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 162, name: 'Disha', age: 25, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1598965675045-dc2c43f2f37e?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1601122424950-c5b70e0bf6bb?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1596215143922-eebd0d6ec0b5?w=600&h=600&fit=crop',
      ], description: 'Sophisticated Mumbai jewelry designer', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Marathi'], services: ['Shopping', 'Events', 'Dinner'], rates: { hourly: '₹4800', halfDay: '₹14500', fullDay: '₹24500', overnight: '₹29500' }, rating: 4.86, reviews: 126, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 163, name: 'Meera', age: 22, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1577880216142-8549e9488dad?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1570063578733-6a33b69d1439?w=600&h=600&fit=crop',
      ], description: 'Young Mumbai social media influencer', height: '5\'4"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Marathi'], services: ['Nightlife', 'Events', 'Entertainment'], rates: { hourly: '₹4000', halfDay: '₹12000', fullDay: '₹22000', overnight: '₹27000' }, rating: 4.72, reviews: 81, verified: true, responseTime: '< 41 min', availability: 'Available' },
    { id: 164, name: 'Riya', age: 28, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=900&h=900&fit=crop', gallery: [
        'https://images.unsplash.com/photo-1573496359172-d2e8df34d5c8?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=600&fit=crop',
      ], description: 'Mature Mumbai corporate lawyer', height: '5\'7"', ethnicity: 'Indian', eyes: 'Brown', hair: 'Black', languages: ['English', 'Hindi', 'Marathi'], services: ['Corporate Events', 'Dinner', 'Travel'], rates: { hourly: '₹5000', halfDay: '₹15100', fullDay: '₹25400', overnight: '₹30400' }, rating: 4.94, reviews: 172, verified: true, responseTime: '< 18 min', availability: 'Available' },
  ]
      
      // Combine advertiser profiles with default escorts
      const combined = [...advertiserProfiles, ...escortsData]
      setAllEscortsData(combined)
      setIsLoading(false)
    }
    
    loadAllEscorts()
  }, [])

  // Find companion by ID
  const companion = allEscortsData.find(c => c.id === parseInt(id) || c.id === id)
  
  // If companion not found, show error
  if (!isLoading && !companion) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-gold mb-4">Profile Not Found</h1>
          <p className="text-gray-400 mb-8">Sorry, the profile you're looking for doesn't exist.</p>
          <Link to="/escorts" className="btn-gold">
            Back to Escorts
          </Link>
        </div>
      </div>
    )
  }

  // Show loading state
  if (isLoading || !companion) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading profile...</p>
        </div>
      </div>
    )
  }

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
        <title>{companion.name} - {companion.age}yo {companion.location} Escort | Trusted Escort</title>
        <meta name="title" content={`${companion.name} - ${companion.age}yo ${companion.location} Escort | Trusted Escort`} />
        <meta name="description" content={`Meet ${companion.name}, ${companion.age} years old from ${companion.location}. ${companion.description}. Rating: ${companion.rating}/5 (${companion.reviews} reviews). Available for bookings.`} />
        <meta name="keywords" content={`${companion.name} escort, ${companion.location} escort, ${companion.age} year old escort ${companion.location}, premium escort ${companion.location}`} />
        <link rel="canonical" href={`https://www.trustedescort.com/escort/${id}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={`https://www.trustedescort.com/escort/${id}`} />
        <meta property="og:title" content={`${companion.name} - ${companion.age}yo ${companion.location} Escort`} />
        <meta property="og:description" content={`Meet ${companion.name}, ${companion.age} years old from ${companion.location}. ${companion.description}`} />
        <meta property="og:image" content={companion.gallery[0]} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Trusted Escort" />
        <meta property="profile:first_name" content={companion.name} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://www.trustedescort.com/escort/${id}`} />
        <meta property="twitter:title" content={`${companion.name} - ${companion.age}yo ${companion.location} Escort`} />
        <meta property="twitter:description" content={`Meet ${companion.name}, ${companion.age} years old from ${companion.location}.`} />
        <meta property="twitter:image" content={companion.gallery[0]} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Trusted Escort" />
        <meta name="geo.region" content={`IN-${companion.location.substring(0, 2).toUpperCase()}`} />
        <meta name="geo.placename" content={companion.location} />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-dark-bg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-4 md:px-6"
        >
          <Link to="/escorts" className="text-gold hover:text-gold/80 text-sm mb-6 inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Escorts
          </Link>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Gallery */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="card-glass overflow-hidden mb-6 h-96 cursor-pointer bg-dark-card"
                onClick={() => {
                  setSelectedImage(companion.image)
                  setShowModal(true)
                }}
              >
                <motion.img
                  src={companion.image}
                  alt={companion.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop'
                  }}
                  layoutId="profile-image"
                />
              </motion.div>

              {/* Gallery Thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {companion.gallery.map((image, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="card-glass overflow-hidden h-24 cursor-pointer bg-dark-card"
                    onClick={() => {
                      setSelectedImage(image)
                      setShowModal(true)
                    }}
                  >
                    <img
                      src={image}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop'
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <h1 className="text-5xl font-serif font-bold text-gold">
                    {companion.name}
                  </h1>
                  {companion.verified && (
                    <div className="bg-green-500/20 backdrop-blur-md px-3 py-1 rounded-full text-sm text-green-300 border border-green-300/30 flex items-center gap-1 h-fit">
                      ✓ Verified
                    </div>
                  )}
                </div>
                
                <p className="text-xl text-gray-400 mb-4">
                  {companion.age} years old • {companion.location}
                </p>

                {/* Metadata Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 text-lg font-semibold">★ {companion.rating}</span>
                    <span className="text-xs text-gray-400">({companion.reviews} reviews)</span>
                  </div>

                  {/* Availability */}
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-sm text-green-300 font-medium">{companion.availability}</span>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00-.293.707l-2.828 2.829a1 1 0 101.415 1.415L9 10.414V6z" />
                    </svg>
                    <span className="text-sm text-gray-300">Responds {companion.responseTime}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed">
                {companion.description}
              </p>

              {/* Physical Details */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-4 p-6 card-glass"
              >
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Height</p>
                  <p className="text-lg text-gold font-semibold">{companion.height}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Eyes</p>
                  <p className="text-lg text-gold font-semibold">{companion.eyes}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Hair</p>
                  <p className="text-lg text-gold font-semibold">{companion.hair}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Ethnicity</p>
                  <p className="text-lg text-gold font-semibold">{companion.ethnicity}</p>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-serif font-bold text-gold mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {companion.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gold/10 text-gold border border-gold/20 rounded-lg text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <Link to="/booking">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-gold w-full text-lg"
                >
                  Book {companion.name} Now
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* About Me Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 pt-20 border-t border-gold/10"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-serif font-bold text-gold mb-6">About {companion.name}</h2>
              <div className="card-glass p-8 space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {companion.description} I am a professional companion dedicated to providing exceptional experiences 
                  for discerning clients in {companion.location}. With {companion.languages.join(', ')} language proficiency, 
                  I can communicate fluently and make you feel comfortable in any setting.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My {companion.age} years of age brings the perfect balance of youthful energy and mature sophistication. 
                  Standing at {companion.height} with {companion.hair.toLowerCase()} hair and {companion.eyes.toLowerCase()} eyes, 
                  I take pride in maintaining my appearance and health.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Whether you need a companion for corporate events, social gatherings, intimate dinners, or private moments, 
                  I ensure complete discretion and professionalism. My reviews speak for themselves - {companion.rating} stars 
                  from {companion.reviews} satisfied clients who appreciate quality companionship.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Services and Rates */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 mt-20 pt-20 border-t border-gold/10"
          >
            {/* Services */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-serif font-bold text-gold mb-6">Services Offered</h2>
              <div className="space-y-3">
                {companion.services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-dark-hover transition-colors"
                  >
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span className="text-gray-300">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Rates */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-serif font-bold text-gold mb-6">Rates</h2>
              <div className="card-glass p-6 space-y-4">
                {Object.entries(companion.rates).map(([type, rate]) => (
                  <motion.div
                    key={type}
                    whileHover={{ x: 10 }}
                    className="flex justify-between items-center p-3 rounded-lg hover:bg-dark-hover transition-colors"
                  >
                    <span className="text-gray-300 capitalize">{type.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="text-gold font-bold text-lg">{rate}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Availability & Booking Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 pt-20 border-t border-gold/10"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-serif font-bold text-gold mb-6">Availability & Booking</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-glass p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-2xl">✓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gold">Current Status</h3>
                      <p className="text-green-300">{companion.availability}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    I typically respond within {companion.responseTime}. For same-day bookings, 
                    please contact me as early as possible to ensure availability.
                  </p>
                </div>

                <div className="card-glass p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gold">Advance Booking</h3>
                      <p className="text-gray-300">Recommended</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    For the best experience, advance bookings of 24-48 hours are preferred. 
                    This ensures I can prepare and give you my undivided attention.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Special Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 pt-20 border-t border-gold/10"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-serif font-bold text-gold mb-6">What Makes Me Special</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card-glass p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-3xl">⭐</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gold mb-2">Verified Profile</h3>
                  <p className="text-gray-400 text-sm">
                    100% authentic photos and verified identity for your peace of mind.
                  </p>
                </div>

                <div className="card-glass p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-3xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gold mb-2">Well Educated</h3>
                  <p className="text-gray-400 text-sm">
                    Engaging conversation and cultural awareness for any social setting.
                  </p>
                </div>

                <div className="card-glass p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-3xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gold mb-2">Discreet & Private</h3>
                  <p className="text-gray-400 text-sm">
                    Complete confidentiality and respect for your privacy guaranteed.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Client Reviews */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 pt-20 border-t border-gold/10"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-serif font-bold text-gold mb-6">Client Reviews</h2>
              <div className="space-y-6">
                <div className="card-glass p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                    <span className="text-gray-400 text-sm">5.0 / 5.0</span>
                  </div>
                  <p className="text-gray-300 italic mb-3">
                    "Absolutely wonderful experience! {companion.name} was professional, charming, and made the evening 
                    truly memorable. Would highly recommend for corporate events."
                  </p>
                  <p className="text-gray-500 text-sm">- Business Executive, {companion.location}</p>
                </div>

                <div className="card-glass p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                    <span className="text-gray-400 text-sm">5.0 / 5.0</span>
                  </div>
                  <p className="text-gray-300 italic mb-3">
                    "Best companion service I've experienced. Great conversation, beautiful, and very professional. 
                    The {companion.responseTime} response time is impressive!"
                  </p>
                  <p className="text-gray-500 text-sm">- International Traveler</p>
                </div>

                <div className="card-glass p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                    <span className="text-gray-400 text-sm">{companion.rating} / 5.0</span>
                  </div>
                  <p className="text-gray-300 italic mb-3">
                    "Exceptional service and genuine companionship. {companion.name} made me feel comfortable 
                    throughout our time together. Highly recommend!"
                  </p>
                  <p className="text-gray-500 text-sm">- Regular Client, {companion.location}</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  Based on <span className="text-gold font-semibold">{companion.reviews} verified reviews</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Important Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 pt-20 border-t border-gold/10"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-serif font-bold text-gold mb-6">Important Information</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-glass p-6">
                  <h3 className="text-xl font-semibold text-gold mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Booking Guidelines
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span>Advance booking recommended for best availability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span>Minimum booking duration: 2 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span>Outcall services available to hotels and private residences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span>Travel within {companion.location} included in rates</span>
                    </li>
                  </ul>
                </div>

                <div className="card-glass p-6">
                  <h3 className="text-xl font-semibold text-gold mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Privacy & Safety
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span>Complete discretion and confidentiality guaranteed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span>Regular health check-ups maintained</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span>Respectful behavior expected from all clients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span>Right to refuse service if feeling uncomfortable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 pt-20 border-t border-gold/10"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-4xl font-serif font-bold text-gold mb-4">Ready to Book?</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Contact me now to arrange an unforgettable experience. I look forward to meeting you 
                and creating wonderful memories together in {companion.location}.
              </p>
              <Link to="/booking">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-gold text-xl px-12 py-4"
                >
                  Book {companion.name} Now
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp CTA */}
      <section className="py-12 bg-dark-card border-t border-gold/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold text-white">Questions? Get in Touch</h2>
            <p className="text-gray-400 text-lg">
              Contact us on WhatsApp for special requests or inquiries.
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

      {/* Image Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
            style={{ backdropFilter: 'blur(8px)' }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute -top-12 right-0 text-white hover:text-gold transition-colors text-2xl font-light flex items-center gap-2 bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm"
              >
                <span className="text-sm font-normal">Close</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <img
                src={selectedImage}
                alt="Full size"
                className="max-w-full max-h-[90vh] w-auto h-auto rounded-lg shadow-2xl"
                style={{ objectFit: 'contain' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CompanionProfile
