import React, { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { getAllProfiles } from '../services/profileService'

function Escorts() {
  const [searchParams] = useSearchParams()
  const [locationFilter, setLocationFilter] = useState('all')
  const [ageRange, setAgeRange] = useState([18, 40])
  const [allEscorts, setAllEscorts] = useState([])
  const [openFAQIndex, setOpenFAQIndex] = useState(null)
  const [lightboxImage, setLightboxImage] = useState(null)

  // Check for location query parameter and set filter
  useEffect(() => {
    const locationParam = searchParams.get('location')
    if (locationParam) {
      setLocationFilter(locationParam)
    }
  }, [searchParams])
  
  // Load all escorts including advertiser profiles
  useEffect(() => {
    const loadAllEscorts = () => {
      // Get advertiser profiles
      const advertiserProfiles = getAllProfiles()
      
      // Default hardcoded escorts
      const defaultEscorts = [
    {
      id: 1,
      name: 'Sakshi',
      age: 24,
      location: 'Mumbai',
       image: '/images/profiles/Mumbai/profile-1.jpg',
      description: 'Elegant and sophisticated Mumbai beauty',
      services: ['Dinner', 'Events', 'Travel'],
      rating: 4.9,
      reviews: 127,
      verified: true,
      responseTime: '< 30 min',
      availability: 'Available',
    },
    {
      id: 2,
      name: 'Ishita',
      age: 26,
      location: 'Delhi', image: '/images/profiles/Delhi/profile-2.jpg',
      description: 'Charming and witty Delhi beauty',
      services: ['Dinner', 'Nightlife', 'Intimate'],
      rating: 5.0,
      reviews: 98,
      verified: true,
      responseTime: '< 15 min',
      availability: 'Available',
    },
    {
      id: 3,
      name: 'Krina',
      age: 25,
      location: 'Bangalore', image: '/images/profiles/Bangalore/profile-3.jpg',
      description: 'Graceful and alluring Bangalore beauty',
      services: ['Events', 'Travel', 'Escortship'],
      rating: 4.8,
      reviews: 112,
      verified: true,
      responseTime: '< 45 min',
      availability: 'Available Today',
    },
    {
      id: 4,
      name: 'Ananya',
      age: 23,
      location: 'Hyderabad', image: '/images/profiles/Hyderabad/profile-4.jpg',
      description: 'Adventurous and playful Hyderabad beauty',
      services: ['Dinner', 'Nightlife', 'Travel'],
      rating: 4.7,
      reviews: 84,
      verified: true,
      responseTime: '< 1 hour',
      availability: 'Available',
    },
    {
      id: 5,
      name: 'Nikita',
      age: 28,
      location: 'Pune', image: '/images/profiles/Pune/profile-5.jpg',
      description: 'Sophisticated and refined Pune beauty',
      services: ['Corporate Events', 'Dinner', 'Travel'],
      rating: 4.95,
      reviews: 156,
      verified: true,
      responseTime: '< 20 min',
      availability: 'Available',
    },
    {
      id: 6,
      name: 'Omisha',
      age: 22,
      location: 'Goa', image: '/images/profiles/Goa/profile-6.jpg',
      description: 'Vibrant and energetic Goa beach beauty',
      services: ['Nightlife', 'Events', 'Entertainment'],
      rating: 4.6,
      reviews: 76,
      verified: true,
      responseTime: '< 55 min',
      availability: 'Available Tomorrow',
    },
    {
      id: 7,
      name: 'Priya',
      age: 24,
      location: 'Mumbai',
       image: '/images/profiles/Mumbai/profile-7.jpg',
      description: 'Charming Mumbai beauty with warm personality',
      services: ['Dinner', 'Travel', 'Shopping'],
      rating: 4.85,
      reviews: 134,
      verified: true,
      responseTime: '< 25 min',
      availability: 'Available',
    },
    {
      id: 8,
      name: 'Anjali',
      age: 26,
      location: 'Delhi', image: '/images/profiles/Delhi/profile-8.jpg',
      description: 'Elegant and mysterious Delhi enchantress',
      services: ['Events', 'Nightlife', 'Escortship'],
      rating: 4.92,
      reviews: 145,
      verified: true,
      responseTime: '< 20 min',
      availability: 'Available',
    },
    {
      id: 9,
      name: 'Neha',
      age: 23,
      location: 'Bangalore', image: '/images/profiles/Bangalore/profile-9.jpg',
      description: 'Fun and adventurous Bangalore spirit',
      services: ['Travel', 'Events', 'Intimate'],
      rating: 4.78,
      reviews: 109,
      verified: true,
      responseTime: '< 40 min',
      availability: 'Available Today',
    },
    {
      id: 10,
      name: 'Divya',
      age: 25,
      location: 'Hyderabad', image: '/images/profiles/Hyderabad/profile-10.jpg',
      description: 'Sophisticated and cultured Hyderabad princess',
      services: ['Corporate Events', 'Dinner', 'Travel'],
      rating: 4.88,
      reviews: 128,
      verified: true,
      responseTime: '< 35 min',
      availability: 'Available',
    },
    {
      id: 11,
      name: 'Isha',
      age: 27,
      location: 'Pune', image: '/images/profiles/Pune/profile-11.jpg',
      description: 'Glamorous and confident Pune fashionista',
      services: ['Nightlife', 'Events', 'Entertainment'],
      rating: 4.93,
      reviews: 167,
      verified: true,
      responseTime: '< 18 min',
      availability: 'Available',
    },
    {
      id: 12,
      name: 'Kavya',
      age: 24,
      location: 'Goa', image: '/images/profiles/Goa/profile-12.jpg',
      description: 'Beach beauty and free spirited Goa charm',
      services: ['Nightlife', 'Travel', 'Entertainment'],
      rating: 4.71,
      reviews: 92,
      verified: true,
      responseTime: '< 50 min',
      availability: 'Available Tomorrow',
    },
    {
      id: 13,
      name: 'Meera',
      age: 25,
      location: 'Chennai', image: '/images/profiles/Chennai/profile-13.jpg',
      description: 'Graceful South Indian beauty with classical charm',
      services: ['Dinner', 'Events', 'Travel'],
      rating: 4.84,
      reviews: 118,
      verified: true,
      responseTime: '< 38 min',
      availability: 'Available',
    },
    {
      id: 14,
      name: 'Tanya',
      age: 26,
      location: 'Kolkata', image: '/images/profiles/Kolkata/profile-14.jpg',
      description: 'Artistic and passionate Kolkata sophisticate',
      services: ['Dinner', 'Cultural Events', 'Escortship'],
      rating: 4.89,
      reviews: 135,
      verified: true,
      responseTime: '< 30 min',
      availability: 'Available',
    },
    {
      id: 15,
      name: 'Simran',
      age: 23,
      location: 'Chandigarh', image: '/images/profiles/Chandigarh/profile-15.jpg',
      description: 'Spirited and playful Punjab beauty',
      services: ['Events', 'Nightlife', 'Travel'],
      rating: 4.75,
      reviews: 103,
      verified: true,
      responseTime: '< 42 min',
      availability: 'Available Today',
    },
    {
      id: 16,
      name: 'Riya',
      age: 24,
      location: 'Jaipur', image: '/images/profiles/Jaipur/profile-16.jpg',
      description: 'Royal Rajasthani beauty with princess charm',
      services: ['Dinner', 'Travel', 'Events'],
      rating: 4.87,
      reviews: 141,
      verified: true,
      responseTime: '< 32 min',
      availability: 'Available',
    },
    {
      id: 17,
      name: 'Aisha',
      age: 27,
      location: 'Indore', image: '/images/profiles/Indore/profile-17.jpg',
      description: 'Warm and welcoming Indore sweetheart',
      services: ['Dinner', 'Shopping', 'Escortship'],
      rating: 4.81,
      reviews: 124,
      verified: true,
      responseTime: '< 36 min',
      availability: 'Available',
    },
    {
      id: 18,
      name: 'Pooja',
      age: 25,
      location: 'Ahmedabad', image: '/images/profiles/Ahmedabad/profile-18.jpg',
      description: 'Vibrant Gujarat charm and business elegance',
      services: ['Events', 'Dinner', 'Travel'],
      rating: 4.79,
      reviews: 116,
      verified: true,
      responseTime: '< 44 min',
      availability: 'Available Tomorrow',
    },
    {
      id: 19,
      name: 'Shreya',
      age: 22,
      location: 'Mumbai',
       image: '/images/profiles/Mumbai/profile-19.jpg',
      description: 'Young and bubbly Mumbai spirit',
      services: ['Nightlife', 'Events', 'Entertainment'],
      rating: 4.73,
      reviews: 89,
      verified: true,
      responseTime: '< 50 min',
      availability: 'Available',
    },
    {
      id: 20,
      name: 'Nisha',
      age: 28,
      location: 'Delhi', image: '/images/profiles/Delhi/profile-20.jpg',
      description: 'Mature and sophisticated Delhi executive',
      services: ['Corporate Events', 'Dinner', 'Escortship'],
      rating: 4.96,
      reviews: 178,
      verified: true,
      responseTime: '< 15 min',
      availability: 'Available',
    },
    {
      id: 21,
      name: 'Disha',
      age: 23,
      location: 'Bangalore', image: '/images/profiles/Bangalore/profile-21.jpg',
      description: 'Modern Indian beauty with tech city vibes',
      services: ['Dinner', 'Events', 'Travel'],
      rating: 4.86,
      reviews: 144,
      verified: true,
      responseTime: '< 28 min',
      availability: 'Available',
    },
    {
      id: 22,
      name: 'Seema',
      age: 26,
      location: 'Hyderabad', image: '/images/profiles/Hyderabad/profile-22.jpg',
      description: 'Tech city sophistication with modern outlook',
      services: ['Dinner', 'Nightlife', 'Corporate Events'],
      rating: 4.91,
      reviews: 152,
      verified: true,
      responseTime: '< 22 min',
      availability: 'Available Today',
    },
    // Additional Mumbai profiles
    { id: 23, name: 'Tanvi', age: 25, location: 'Mumbai',  image: '/images/profiles/Mumbai/profile-23.jpg', description: 'Sophisticated Mumbai model', services: ['Events', 'Entertainment'], rating: 4.82, reviews: 115, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 24, name: 'Aditi', age: 23, location: 'Mumbai',  image: '/images/profiles/Mumbai/profile-24.jpg', description: 'Glamorous Bollywood aspirant', services: ['Dinner', 'Nightlife'], rating: 4.77, reviews: 98, verified: true, responseTime: '< 40 min', availability: 'Available' },
    { id: 25, name: 'Zoya', age: 27, location: 'Mumbai',  image: '/images/profiles/Mumbai/profile-25.jpg', description: 'Elegant Mumbai socialite', services: ['Corporate Events', 'Travel'], rating: 4.90, reviews: 140, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 26, name: 'Myra', age: 24, location: 'Mumbai',  image: '/images/profiles/Mumbai/profile-26.jpg', description: 'Charming Mumbai entertainer', services: ['Dinner', 'Events'], rating: 4.75, reviews: 87, verified: true, responseTime: '< 45 min', availability: 'Available' },
    { id: 27, name: 'Tara', age: 26, location: 'Mumbai',  image: '/images/profiles/Mumbai/profile-27.jpg', description: 'Sophisticated finance professional', services: ['Corporate Events', 'Dinner'], rating: 4.88, reviews: 132, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 28, name: 'Alisha', age: 22, location: 'Mumbai',  image: '/images/profiles/Mumbai/profile-28.jpg', description: 'Young vibrant Mumbai beauty', services: ['Nightlife', 'Entertainment'], rating: 4.70, reviews: 75, verified: true, responseTime: '< 50 min', availability: 'Available' },
    { id: 29, name: 'Naina', age: 28, location: 'Mumbai',  image: '/images/profiles/Mumbai/profile-29.jpg', description: 'Mature Mumbai executive companion', services: ['Travel', 'Corporate Events'], rating: 4.93, reviews: 165, verified: true, responseTime: '< 20 min', availability: 'Available' },
    { id: 30, name: 'Jiya', age: 25, location: 'Mumbai',  image: '/images/profiles/Mumbai/profile-30.jpg', description: 'Elegant Mumbai fashion model', services: ['Events', 'Shopping'], rating: 4.85, reviews: 118, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 158, name: 'Roshini', age: 26, location: 'Mumbai',  image: '/images/profiles/Mumbai/profile-158.jpg', description: 'Sophisticated Mumbai investment banker', services: ['Corporate Events', 'Dinner', 'Travel'], rating: 4.91, reviews: 149, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 159, name: 'Pooja', age: 24, location: 'Mumbai',  image: '/images/profiles/Mumbai/profile-159.jpg', description: 'Vibrant Mumbai marketing executive', services: ['Dinner', 'Events', 'Nightlife'], rating: 4.83, reviews: 112, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 160, name: 'Kavya', age: 23, location: 'Mumbai',  image: '/images/profiles/Mumbai/profile-160.jpg', description: 'Charming Mumbai PR professional', services: ['Corporate Events', 'Shopping', 'Dinner'], rating: 4.79, reviews: 95, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 161, name: 'Siya', age: 27, location: 'Mumbai',  image: '/images/profiles/Mumbai/profile-161.jpg', description: 'Elegant Mumbai art gallery owner', services: ['Cultural Events', 'Dinner', 'Travel'], rating: 4.88, reviews: 133, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 162, name: 'Disha', age: 25, location: 'Mumbai',  image: '/images/profiles/Mumbai/profile-162.jpg', description: 'Sophisticated Mumbai jewelry designer', services: ['Shopping', 'Events', 'Dinner'], rating: 4.86, reviews: 126, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 163, name: 'Meera', age: 22, location: 'Mumbai',  image: '/images/profiles/Mumbai/profile-163.jpg', description: 'Young Mumbai social media influencer', services: ['Nightlife', 'Events', 'Entertainment'], rating: 4.72, reviews: 81, verified: true, responseTime: '< 41 min', availability: 'Available' },
    { id: 164, name: 'Riya', age: 28, location: 'Mumbai',  image: '/images/profiles/Mumbai/profile-164.jpg', description: 'Mature Mumbai corporate lawyer', services: ['Corporate Events', 'Dinner', 'Travel'], rating: 4.94, reviews: 172, verified: true, responseTime: '< 18 min', availability: 'Available' },
    // Additional Delhi profiles
    { id: 31, name: 'Kavita', age: 27, location: 'Delhi', image: '/images/profiles/Delhi/profile-31.jpg', description: 'Sophisticated Delhi intellectual', services: ['Dinner', 'Cultural Events'], rating: 4.89, reviews: 138, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 32, name: 'Sanya', age: 24, location: 'Delhi', image: '/images/profiles/Delhi/profile-32.jpg', description: 'Charming Delhi university graduate', services: ['Travel', 'Events'], rating: 4.76, reviews: 102, verified: true, responseTime: '< 38 min', availability: 'Available' },
    { id: 33, name: 'Aradhya', age: 26, location: 'Delhi', image: '/images/profiles/Delhi/profile-33.jpg', description: 'Elite Delhi socialite', services: ['Corporate Events', 'Dinner'], rating: 4.91, reviews: 155, verified: true, responseTime: '< 18 min', availability: 'Available' },
    { id: 34, name: 'Mahira', age: 23, location: 'Delhi', image: '/images/profiles/Delhi/profile-34.jpg', description: 'Vibrant Delhi artist', services: ['Nightlife', 'Entertainment'], rating: 4.72, reviews: 89, verified: true, responseTime: '< 42 min', availability: 'Available' },
    { id: 35, name: 'Saanvi', age: 25, location: 'Delhi', image: '/images/profiles/Delhi/profile-35.jpg', description: 'Elegant Delhi professional', services: ['Dinner', 'Travel'], rating: 4.87, reviews: 126, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 36, name: 'Palak', age: 28, location: 'Delhi', image: '/images/profiles/Delhi/profile-36.jpg', description: 'Sophisticated Delhi ambassador', services: ['Corporate Events', 'Cultural Events'], rating: 4.94, reviews: 172, verified: true, responseTime: '< 15 min', availability: 'Available' },
    { id: 37, name: 'Shanaya', age: 24, location: 'Delhi', image: '/images/profiles/Delhi/profile-37.jpg', description: 'Charming Delhi fashion designer', services: ['Shopping', 'Events'], rating: 4.80, reviews: 110, verified: true, responseTime: '< 33 min', availability: 'Available' },
    { id: 38, name: 'Kirti', age: 22, location: 'Delhi', image: '/images/profiles/Delhi/profile-38.jpg', description: 'Young Delhi beauty', services: ['Nightlife', 'Dinner'], rating: 4.68, reviews: 72, verified: true, responseTime: '< 48 min', availability: 'Available' },
    // Additional Bangalore profiles
    { id: 39, name: 'Aanya', age: 25, location: 'Bangalore', image: '/images/profiles/Bangalore/profile-39.jpg', description: 'Tech-savvy Bangalore professional', services: ['Corporate Events', 'Travel'], rating: 4.83, reviews: 119, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 40, name: 'Pari', age: 23, location: 'Bangalore', image: '/images/profiles/Bangalore/profile-40.jpg', description: 'Vibrant Bangalore entrepreneur', services: ['Dinner', 'Events'], rating: 4.78, reviews: 95, verified: true, responseTime: '< 36 min', availability: 'Available' },
    { id: 41, name: 'Avni', age: 26, location: 'Bangalore', image: '/images/profiles/Bangalore/profile-41.jpg', description: 'Elegant Bangalore yoga instructor', services: ['Travel', 'Escortship'], rating: 4.85, reviews: 128, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 42, name: 'Inaya', age: 24, location: 'Bangalore', image: '/images/profiles/Bangalore/profile-42.jpg', description: 'Charming Bangalore software engineer', services: ['Corporate Events', 'Dinner'], rating: 4.81, reviews: 107, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 43, name: 'Mishka', age: 27, location: 'Bangalore', image: '/images/profiles/Bangalore/profile-43.jpg', description: 'Sophisticated Bangalore consultant', services: ['Corporate Events', 'Travel'], rating: 4.90, reviews: 143, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 44, name: 'Navya', age: 22, location: 'Bangalore', image: '/images/profiles/Bangalore/profile-44.jpg', description: 'Young Bangalore blogger', services: ['Events', 'Nightlife'], rating: 4.74, reviews: 85, verified: true, responseTime: '< 41 min', availability: 'Available' },
    { id: 45, name: 'Reya', age: 25, location: 'Bangalore', image: '/images/profiles/Bangalore/profile-45.jpg', description: 'Elegant Bangalore model', services: ['Events', 'Shopping'], rating: 4.86, reviews: 122, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 46, name: 'Nitya', age: 28, location: 'Bangalore', image: '/images/profiles/Bangalore/profile-46.jpg', description: 'Mature Bangalore executive', services: ['Corporate Events', 'Dinner'], rating: 4.92, reviews: 159, verified: true, responseTime: '< 19 min', availability: 'Available' },
    // Additional Hyderabad profiles  
    { id: 47, name: 'Lavanya', age: 24, location: 'Hyderabad', image: '/images/profiles/Hyderabad/profile-47.jpg', description: 'Graceful Hyderabad classical dancer', services: ['Cultural Events', 'Dinner'], rating: 4.84, reviews: 117, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 48, name: 'Anika', age: 23, location: 'Hyderabad', image: '/images/profiles/Hyderabad/profile-48.jpg', description: 'Charming Hyderabad IT professional', services: ['Corporate Events', 'Travel'], rating: 4.79, reviews: 101, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 49, name: 'Trisha', age: 26, location: 'Hyderabad', image: '/images/profiles/Hyderabad/profile-49.jpg', description: 'Sophisticated Hyderabad architect', services: ['Dinner', 'Events'], rating: 4.88, reviews: 134, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 50, name: 'Reet', age: 25, location: 'Hyderabad', image: '/images/profiles/Hyderabad/profile-50.jpg', description: 'Vibrant Hyderabad entrepreneur', services: ['Corporate Events', 'Nightlife'], rating: 4.82, reviews: 113, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 51, name: 'Suhana', age: 27, location: 'Hyderabad', image: '/images/profiles/Hyderabad/profile-51.jpg', description: 'Elegant Hyderabad fashion model', services: ['Events', 'Shopping'], rating: 4.90, reviews: 147, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 52, name: 'Aarohi', age: 24, location: 'Hyderabad', image: '/images/profiles/Hyderabad/profile-52.jpg', description: 'Charming Hyderabad singer', services: ['Entertainment', 'Events'], rating: 4.77, reviews: 96, verified: true, responseTime: '< 37 min', availability: 'Available' },
    { id: 53, name: 'Anushka', age: 22, location: 'Hyderabad', image: '/images/profiles/Hyderabad/profile-53.jpg', description: 'Young Hyderabad influencer', services: ['Nightlife', 'Events'], rating: 4.71, reviews: 82, verified: true, responseTime: '< 43 min', availability: 'Available' },
    { id: 54, name: 'Mira', age: 28, location: 'Hyderabad', image: '/images/profiles/Hyderabad/profile-54.jpg', description: 'Mature Hyderabad doctor', services: ['Dinner', 'Corporate Events'], rating: 4.93, reviews: 164, verified: true, responseTime: '< 18 min', availability: 'Available' },
    // Additional Pune profiles
    { id: 55, name: 'Aradhana', age: 25, location: 'Pune', image: '/images/profiles/Pune/profile-55.jpg', description: 'Sophisticated Pune professor', services: ['Cultural Events', 'Dinner'], rating: 4.86, reviews: 125, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 56, name: 'Diya', age: 23, location: 'Pune', image: '/images/profiles/Pune/profile-56.jpg', description: 'Charming Pune artist', services: ['Events', 'Shopping'], rating: 4.79, reviews: 104, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 57, name: 'Ishika', age: 26, location: 'Pune', image: '/images/profiles/Pune/profile-57.jpg', description: 'Elegant Pune lawyer', services: ['Corporate Events', 'Dinner'], rating: 4.89, reviews: 139, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 58, name: 'Kriti', age: 24, location: 'Pune', image: '/images/profiles/Pune/profile-58.jpg', description: 'Vibrant Pune journalist', services: ['Dinner', 'Travel'], rating: 4.81, reviews: 111, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 59, name: 'Sanvi', age: 27, location: 'Pune', image: '/images/profiles/Pune/profile-59.jpg', description: 'Sophisticated Pune entrepreneur', services: ['Corporate Events', 'Travel'], rating: 4.91, reviews: 150, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 60, name: 'Tanya', age: 22, location: 'Pune', image: '/images/profiles/Pune/profile-60.jpg', description: 'Young Pune dancer', services: ['Events', 'Entertainment'], rating: 4.73, reviews: 88, verified: true, responseTime: '< 40 min', availability: 'Available' },
    { id: 61, name: 'Vrinda', age: 25, location: 'Pune', image: '/images/profiles/Pune/profile-61.jpg', description: 'Elegant Pune fashion designer', services: ['Shopping', 'Events'], rating: 4.84, reviews: 120, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 62, name: 'Yasmin', age: 28, location: 'Pune', image: '/images/profiles/Pune/profile-62.jpg', description: 'Mature Pune executive', services: ['Corporate Events', 'Dinner'], rating: 4.92, reviews: 161, verified: true, responseTime: '< 19 min', availability: 'Available' },
    // Chennai profiles
    { id: 63, name: 'Deepika', age: 24, location: 'Chennai', image: '/images/profiles/Chennai/profile-63.jpg', description: 'Graceful Chennai classical dancer', services: ['Cultural Events', 'Dinner'], rating: 4.85, reviews: 121, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 64, name: 'Lakshmi', age: 25, location: 'Chennai', image: '/images/profiles/Chennai/profile-64.jpg', description: 'Elegant Chennai software engineer', services: ['Corporate Events', 'Travel'], rating: 4.87, reviews: 129, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 65, name: 'Shalini', age: 26, location: 'Chennai', image: '/images/profiles/Chennai/profile-65.jpg', description: 'Sophisticated Chennai doctor', services: ['Dinner', 'Corporate Events'], rating: 4.91, reviews: 148, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 66, name: 'Archana', age: 23, location: 'Chennai', image: '/images/profiles/Chennai/profile-66.jpg', description: 'Charming Chennai model', services: ['Events', 'Shopping'], rating: 4.78, reviews: 99, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 67, name: 'Mythili', age: 27, location: 'Chennai', image: '/images/profiles/Chennai/profile-67.jpg', description: 'Vibrant Chennai entrepreneur', services: ['Corporate Events', 'Dinner'], rating: 4.89, reviews: 137, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 68, name: 'Priyanka', age: 22, location: 'Chennai', image: '/images/profiles/Chennai/profile-68.jpg', description: 'Young Chennai actress', services: ['Entertainment', 'Events'], rating: 4.72, reviews: 84, verified: true, responseTime: '< 42 min', availability: 'Available' },
    { id: 69, name: 'Swathi', age: 25, location: 'Chennai', image: '/images/profiles/Chennai/profile-69.jpg', description: 'Elegant Chennai lawyer', services: ['Corporate Events', 'Dinner'], rating: 4.86, reviews: 124, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 70, name: 'Vaishnavi', age: 28, location: 'Chennai', image: '/images/profiles/Chennai/profile-70.jpg', description: 'Mature Chennai professor', services: ['Cultural Events', 'Dinner'], rating: 4.93, reviews: 166, verified: true, responseTime: '< 18 min', availability: 'Available' },
    // Goa profiles
    { id: 71, name: 'Luna', age: 23, location: 'Goa', image: '/images/profiles/Goa/profile-71.jpg', description: 'Free-spirited Goa beach beauty', services: ['Nightlife', 'Travel'], rating: 4.76, reviews: 94, verified: true, responseTime: '< 38 min', availability: 'Available' },
    { id: 72, name: 'Maya', age: 24, location: 'Goa', image: '/images/profiles/Goa/profile-72.jpg', description: 'Vibrant Goa DJ', services: ['Nightlife', 'Entertainment'], rating: 4.71, reviews: 81, verified: true, responseTime: '< 44 min', availability: 'Available' },
    { id: 73, name: 'Kiara', age: 25, location: 'Goa', image: '/images/profiles/Goa/profile-73.jpg', description: 'Elegant Goa event planner', services: ['Events', 'Travel'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 74, name: 'Sara', age: 26, location: 'Goa', image: '/images/profiles/Goa/profile-74.jpg', description: 'Sophisticated Goa yoga instructor', services: ['Travel', 'Escortship'], rating: 4.88, reviews: 131, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 75, name: 'Rina', age: 22, location: 'Goa', image: '/images/profiles/Goa/profile-75.jpg', description: 'Young Goa surfer girl', services: ['Nightlife', 'Entertainment'], rating: 4.68, reviews: 73, verified: true, responseTime: '< 50 min', availability: 'Available' },
    { id: 76, name: 'Alia', age: 27, location: 'Goa', image: '/images/profiles/Goa/profile-76.jpg', description: 'Charming Goa restaurateur', services: ['Dinner', 'Events'], rating: 4.85, reviews: 123, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 77, name: 'Bella', age: 24, location: 'Goa', image: '/images/profiles/Goa/profile-77.jpg', description: 'Elegant Goa travel blogger', services: ['Travel', 'Events'], rating: 4.80, reviews: 108, verified: true, responseTime: '< 33 min', availability: 'Available' },
    { id: 78, name: 'Zara', age: 28, location: 'Goa', image: '/images/profiles/Goa/profile-78.jpg', description: 'Mature Goa artist', services: ['Cultural Events', 'Dinner'], rating: 4.90, reviews: 145, verified: true, responseTime: '< 23 min', availability: 'Available' },
    // Kolkata profiles
    { id: 79, name: 'Roshni', age: 25, location: 'Kolkata', image: '/images/profiles/Kolkata/profile-79.jpg', description: 'Artistic Kolkata poet', services: ['Cultural Events', 'Dinner'], rating: 4.87, reviews: 127, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 80, name: 'Mitali', age: 24, location: 'Kolkata', image: '/images/profiles/Kolkata/profile-80.jpg', description: 'Graceful Kolkata classical dancer', services: ['Cultural Events', 'Events'], rating: 4.84, reviews: 119, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 81, name: 'Payal', age: 26, location: 'Kolkata', image: '/images/profiles/Kolkata/profile-81.jpg', description: 'Sophisticated Kolkata journalist', services: ['Dinner', 'Corporate Events'], rating: 4.90, reviews: 142, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 82, name: 'Ankita', age: 23, location: 'Kolkata', image: '/images/profiles/Kolkata/profile-82.jpg', description: 'Charming Kolkata model', services: ['Events', 'Shopping'], rating: 4.77, reviews: 97, verified: true, responseTime: '< 36 min', availability: 'Available' },
    { id: 83, name: 'Ritu', age: 27, location: 'Kolkata', image: '/images/profiles/Kolkata/profile-83.jpg', description: 'Elegant Kolkata entrepreneur', services: ['Corporate Events', 'Travel'], rating: 4.89, reviews: 136, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 84, name: 'Nandini', age: 22, location: 'Kolkata', image: '/images/profiles/Kolkata/profile-84.jpg', description: 'Young Kolkata singer', services: ['Entertainment', 'Events'], rating: 4.70, reviews: 79, verified: true, responseTime: '< 45 min', availability: 'Available' },
    { id: 85, name: 'Sonali', age: 25, location: 'Kolkata', image: '/images/profiles/Kolkata/profile-85.jpg', description: 'Vibrant Kolkata fashion designer', services: ['Shopping', 'Events'], rating: 4.83, reviews: 114, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 86, name: 'Shreeja', age: 28, location: 'Kolkata', image: '/images/profiles/Kolkata/profile-86.jpg', description: 'Mature Kolkata professor', services: ['Cultural Events', 'Dinner'], rating: 4.92, reviews: 157, verified: true, responseTime: '< 20 min', availability: 'Available' },
    // Surat profiles
    { id: 87, name: 'Jinal', age: 24, location: 'Surat', image: '/images/profiles/Surat/profile-87.jpg', description: 'Elegant Surat diamond trader', services: ['Dinner', 'Shopping'], rating: 4.81, reviews: 106, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 88, name: 'Hiral', age: 25, location: 'Surat', image: '/images/profiles/Surat/profile-88.jpg', description: 'Sophisticated Surat textile designer', services: ['Corporate Events', 'Events'], rating: 4.86, reviews: 122, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 89, name: 'Khushi', age: 23, location: 'Surat', image: '/images/profiles/Surat/profile-89.jpg', description: 'Vibrant Surat entrepreneur', services: ['Dinner', 'Travel'], rating: 4.78, reviews: 93, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 90, name: 'Riddhi', age: 26, location: 'Surat', image: '/images/profiles/Surat/profile-90.jpg', description: 'Charming Surat fashion model', services: ['Events', 'Shopping'], rating: 4.84, reviews: 117, verified: true, responseTime: '< 30 min', availability: 'Available' },
    // Lucknow profiles
    { id: 91, name: 'Aaradhya', age: 25, location: 'Lucknow', image: '/images/profiles/Lucknow/profile-91.jpg', description: 'Graceful Lucknow kathak dancer', services: ['Cultural Events', 'Dinner'], rating: 4.88, reviews: 130, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 92, name: 'Khushbu', age: 24, location: 'Lucknow', image: '/images/profiles/Lucknow/profile-92.jpg', description: 'Elegant Lucknow lawyer', services: ['Corporate Events', 'Dinner'], rating: 4.85, reviews: 120, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 93, name: 'Fiza', age: 26, location: 'Lucknow', image: '/images/profiles/Lucknow/profile-93.jpg', description: 'Sophisticated Lucknow entrepreneur', services: ['Corporate Events', 'Travel'], rating: 4.90, reviews: 141, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 94, name: 'Noor', age: 23, location: 'Lucknow', image: '/images/profiles/Lucknow/profile-94.jpg', description: 'Charming Lucknow artist', services: ['Events', 'Cultural Events'], rating: 4.76, reviews: 92, verified: true, responseTime: '< 37 min', availability: 'Available' },
    // Nagpur profiles
    { id: 95, name: 'Vidya', age: 24, location: 'Nagpur', image: '/images/profiles/Nagpur/profile-95.jpg', description: 'Elegant Nagpur professor', services: ['Cultural Events', 'Dinner'], rating: 4.82, reviews: 109, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 96, name: 'Mansi', age: 25, location: 'Nagpur', image: '/images/profiles/Nagpur/profile-96.jpg', description: 'Sophisticated Nagpur doctor', services: ['Dinner', 'Corporate Events'], rating: 4.87, reviews: 126, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 97, name: 'Garima', age: 26, location: 'Nagpur', image: '/images/profiles/Nagpur/profile-97.jpg', description: 'Vibrant Nagpur entrepreneur', services: ['Corporate Events', 'Travel'], rating: 4.89, reviews: 133, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 98, name: 'Harshita', age: 23, location: 'Nagpur', image: '/images/profiles/Nagpur/profile-98.jpg', description: 'Charming Nagpur journalist', services: ['Dinner', 'Events'], rating: 4.75, reviews: 88, verified: true, responseTime: '< 39 min', availability: 'Available' },
    // Additional Mumbai profiles (to reach 16)
    { id: 99, name: 'Niyati', age: 27, location: 'Mumbai',  image: '/images/profiles/Mumbai/profile-99.jpg', description: 'Elegant Mumbai corporate executive', services: ['Corporate Events', 'Dinner'], rating: 4.89, reviews: 136, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 100, name: 'Radhika', age: 25, location: 'Mumbai',  image: '/images/profiles/Mumbai/profile-100.jpg', description: 'Sophisticated Mumbai architect', services: ['Corporate Events', 'Travel'], rating: 4.86, reviews: 123, verified: true, responseTime: '< 27 min', availability: 'Available' },
    // Additional Delhi profiles (to reach 16)
    { id: 101, name: 'Ruhani', age: 25, location: 'Delhi', image: '/images/profiles/Delhi/profile-101.jpg', description: 'Charming Delhi diplomat', services: ['Corporate Events', 'Cultural Events'], rating: 4.88, reviews: 131, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 102, name: 'Tanu', age: 24, location: 'Delhi', image: '/images/profiles/Delhi/profile-102.jpg', description: 'Vibrant Delhi host', services: ['Events', 'Entertainment'], rating: 4.79, reviews: 103, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 103, name: 'Urvi', age: 27, location: 'Delhi', image: '/images/profiles/Delhi/profile-103.jpg', description: 'Elegant Delhi consultant', services: ['Corporate Events', 'Dinner'], rating: 4.90, reviews: 144, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 104, name: 'Vaani', age: 23, location: 'Delhi', image: '/images/profiles/Delhi/profile-104.jpg', description: 'Sophisticated Delhi marketing manager', services: ['Corporate Events', 'Travel'], rating: 4.84, reviews: 119, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 105, name: 'Yashika', age: 26, location: 'Delhi', image: '/images/profiles/Delhi/profile-105.jpg', description: 'Charming Delhi entrepreneur', services: ['Corporate Events', 'Dinner'], rating: 4.87, reviews: 127, verified: true, responseTime: '< 26 min', availability: 'Available' },
    // Additional Bangalore profiles (to reach 16)
    { id: 106, name: 'Bhavya', age: 24, location: 'Bangalore', image: '/images/profiles/Bangalore/profile-106.jpg', description: 'Tech-savvy Bangalore product manager', services: ['Corporate Events', 'Travel'], rating: 4.82, reviews: 112, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 107, name: 'Devika', age: 25, location: 'Bangalore', image: '/images/profiles/Bangalore/profile-107.jpg', description: 'Sophisticated Bangalore data scientist', services: ['Corporate Events', 'Dinner'], rating: 4.88, reviews: 133, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 108, name: 'Eshita', age: 26, location: 'Bangalore', image: '/images/profiles/Bangalore/profile-108.jpg', description: 'Vibrant Bangalore startup founder', services: ['Corporate Events', 'Events'], rating: 4.90, reviews: 146, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 109, name: 'Falak', age: 23, location: 'Bangalore', image: '/images/profiles/Bangalore/profile-109.jpg', description: 'Charming Bangalore fitness trainer', services: ['Travel', 'Events'], rating: 4.76, reviews: 96, verified: true, responseTime: '< 36 min', availability: 'Available' },
    { id: 110, name: 'Gayatri', age: 27, location: 'Bangalore', image: '/images/profiles/Bangalore/profile-110.jpg', description: 'Elegant Bangalore architect', services: ['Corporate Events', 'Cultural Events'], rating: 4.89, reviews: 138, verified: true, responseTime: '< 23 min', availability: 'Available' },
    // Additional Hyderabad profiles (to reach 16)
    { id: 111, name: 'Hema', age: 25, location: 'Hyderabad', image: '/images/profiles/Hyderabad/profile-111.jpg', description: 'Sophisticated Hyderabad pharmacist', services: ['Dinner', 'Corporate Events'], rating: 4.85, reviews: 121, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 112, name: 'Jahnavi', age: 24, location: 'Hyderabad', image: '/images/profiles/Hyderabad/profile-112.jpg', description: 'Graceful Hyderabad traditional dancer', services: ['Cultural Events', 'Events'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 113, name: 'Keerthi', age: 26, location: 'Hyderabad', image: '/images/profiles/Hyderabad/profile-113.jpg', description: 'Elegant Hyderabad banker', services: ['Corporate Events', 'Dinner'], rating: 4.88, reviews: 130, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 114, name: 'Leela', age: 23, location: 'Hyderabad', image: '/images/profiles/Hyderabad/profile-114.jpg', description: 'Vibrant Hyderabad graphic designer', services: ['Events', 'Shopping'], rating: 4.78, reviews: 100, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 115, name: 'Manisha', age: 27, location: 'Hyderabad', image: '/images/profiles/Hyderabad/profile-115.jpg', description: 'Sophisticated Hyderabad lawyer', services: ['Corporate Events', 'Dinner'], rating: 4.91, reviews: 149, verified: true, responseTime: '< 21 min', availability: 'Available' },
    // Additional Pune profiles (to reach 16)
    { id: 116, name: 'Nidhi', age: 24, location: 'Pune', image: '/images/profiles/Pune/profile-116.jpg', description: 'Charming Pune software developer', services: ['Corporate Events', 'Travel'], rating: 4.80, reviews: 107, verified: true, responseTime: '< 33 min', availability: 'Available' },
    { id: 117, name: 'Oorja', age: 25, location: 'Pune', image: '/images/profiles/Pune/profile-117.jpg', description: 'Elegant Pune researcher', services: ['Cultural Events', 'Dinner'], rating: 4.86, reviews: 124, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 118, name: 'Pihu', age: 26, location: 'Pune', image: '/images/profiles/Pune/profile-118.jpg', description: 'Sophisticated Pune marketing executive', services: ['Corporate Events', 'Events'], rating: 4.89, reviews: 135, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 119, name: 'Ridhi', age: 23, location: 'Pune', image: '/images/profiles/Pune/profile-119.jpg', description: 'Vibrant Pune photographer', services: ['Events', 'Travel'], rating: 4.77, reviews: 98, verified: true, responseTime: '< 36 min', availability: 'Available' },
    { id: 120, name: 'Sahana', age: 27, location: 'Pune', image: '/images/profiles/Pune/profile-120.jpg', description: 'Charming Pune consultant', services: ['Corporate Events', 'Dinner'], rating: 4.88, reviews: 132, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 121, name: 'Tanisha', age: 24, location: 'Pune', image: '/images/profiles/Pune/profile-121.jpg', description: 'Elegant Pune interior designer', services: ['Shopping', 'Events'], rating: 4.82, reviews: 113, verified: true, responseTime: '< 31 min', availability: 'Available' },
    // Additional Chennai profiles (to reach 16)
    { id: 122, name: 'Amrita', age: 25, location: 'Chennai', image: '/images/profiles/Chennai/profile-122.jpg', description: 'Graceful Chennai Bharatanatyam dancer', services: ['Cultural Events', 'Dinner'], rating: 4.87, reviews: 128, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 123, name: 'Brinda', age: 24, location: 'Chennai', image: '/images/profiles/Chennai/profile-123.jpg', description: 'Elegant Chennai software architect', services: ['Corporate Events', 'Travel'], rating: 4.84, reviews: 118, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 124, name: 'Charvi', age: 26, location: 'Chennai', image: '/images/profiles/Chennai/profile-124.jpg', description: 'Sophisticated Chennai entrepreneur', services: ['Corporate Events', 'Dinner'], rating: 4.90, reviews: 143, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 125, name: 'Divyani', age: 23, location: 'Chennai', image: '/images/profiles/Chennai/profile-125.jpg', description: 'Charming Chennai fashion designer', services: ['Shopping', 'Events'], rating: 4.79, reviews: 102, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 126, name: 'Esha', age: 27, location: 'Chennai', image: '/images/profiles/Chennai/profile-126.jpg', description: 'Vibrant Chennai medical professional', services: ['Dinner', 'Corporate Events'], rating: 4.88, reviews: 134, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 127, name: 'Gargi', age: 24, location: 'Chennai', image: '/images/profiles/Chennai/profile-127.jpg', description: 'Elegant Chennai journalist', services: ['Events', 'Cultural Events'], rating: 4.82, reviews: 114, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 128, name: 'Harini', age: 25, location: 'Chennai', image: '/images/profiles/Chennai/profile-128.jpg', description: 'Sophisticated Chennai HR executive', services: ['Corporate Events', 'Dinner'], rating: 4.86, reviews: 125, verified: true, responseTime: '< 27 min', availability: 'Available' },
    // Additional Goa profiles (to reach 16)
    { id: 129, name: 'Dia', age: 24, location: 'Goa', image: '/images/profiles/Goa/profile-129.jpg', description: 'Free-spirited Goa marine biologist', services: ['Travel', 'Events'], rating: 4.79, reviews: 104, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 130, name: 'Eva', age: 25, location: 'Goa', image: '/images/profiles/Goa/profile-130.jpg', description: 'Vibrant Goa scuba instructor', services: ['Travel', 'Entertainment'], rating: 4.82, reviews: 111, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 131, name: 'Fiona', age: 26, location: 'Goa', image: '/images/profiles/Goa/profile-131.jpg', description: 'Elegant Goa hotel manager', services: ['Events', 'Dinner'], rating: 4.87, reviews: 129, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 132, name: 'Geet', age: 23, location: 'Goa', image: '/images/profiles/Goa/profile-132.jpg', description: 'Charming Goa bartender', services: ['Nightlife', 'Entertainment'], rating: 4.73, reviews: 86, verified: true, responseTime: '< 40 min', availability: 'Available' },
    { id: 133, name: 'Hina', age: 27, location: 'Goa', image: '/images/profiles/Goa/profile-133.jpg', description: 'Sophisticated Goa business owner', services: ['Corporate Events', 'Dinner'], rating: 4.89, reviews: 140, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 134, name: 'Ira', age: 24, location: 'Goa', image: '/images/profiles/Goa/profile-134.jpg', description: 'Vibrant Goa music producer', services: ['Nightlife', 'Events'], rating: 4.80, reviews: 109, verified: true, responseTime: '< 32 min', availability: 'Available' },
    // Additional Kolkata profiles (to reach 16)
    { id: 135, name: 'Bidisha', age: 25, location: 'Kolkata', image: '/images/profiles/Kolkata/profile-135.jpg', description: 'Artistic Kolkata filmmaker', services: ['Cultural Events', 'Events'], rating: 4.85, reviews: 122, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 136, name: 'Chhaya', age: 24, location: 'Kolkata', image: '/images/profiles/Kolkata/profile-136.jpg', description: 'Elegant Kolkata theatre artist', services: ['Cultural Events', 'Dinner'], rating: 4.82, reviews: 115, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 137, name: 'Debosmita', age: 26, location: 'Kolkata', image: '/images/profiles/Kolkata/profile-137.jpg', description: 'Sophisticated Kolkata professor', services: ['Cultural Events', 'Corporate Events'], rating: 4.90, reviews: 146, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 138, name: 'Eesha', age: 23, location: 'Kolkata', image: '/images/profiles/Kolkata/profile-138.jpg', description: 'Charming Kolkata musician', services: ['Entertainment', 'Events'], rating: 4.76, reviews: 95, verified: true, responseTime: '< 36 min', availability: 'Available' },
    { id: 139, name: 'Gouri', age: 27, location: 'Kolkata', image: '/images/profiles/Kolkata/profile-139.jpg', description: 'Vibrant Kolkata entrepreneur', services: ['Corporate Events', 'Dinner'], rating: 4.88, reviews: 133, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 140, name: 'Jharna', age: 24, location: 'Kolkata', image: '/images/profiles/Kolkata/profile-140.jpg', description: 'Elegant Kolkata writer', services: ['Cultural Events', 'Dinner'], rating: 4.83, reviews: 117, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 141, name: 'Kalyani', age: 25, location: 'Kolkata', image: '/images/profiles/Kolkata/profile-141.jpg', description: 'Sophisticated Kolkata designer', services: ['Shopping', 'Events'], rating: 4.86, reviews: 126, verified: true, responseTime: '< 27 min', availability: 'Available' },
    // Additional profiles for other cities
    { id: 142, name: 'Harsha', age: 24, location: 'Chandigarh', image: '/images/profiles/Chandigarh/profile-142.jpg', description: 'Vibrant Chandigarh entrepreneur', services: ['Corporate Events', 'Dinner'], rating: 4.81, reviews: 108, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 143, name: 'Jasleen', age: 25, location: 'Chandigarh', image: '/images/profiles/Chandigarh/profile-143.jpg', description: 'Elegant Chandigarh model', services: ['Events', 'Shopping'], rating: 4.84, reviews: 119, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 144, name: 'Kiran', age: 26, location: 'Chandigarh', image: '/images/profiles/Chandigarh/profile-144.jpg', description: 'Sophisticated Chandigarh banker', services: ['Corporate Events', 'Travel'], rating: 4.88, reviews: 132, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 145, name: 'Neetu', age: 23, location: 'Chandigarh', image: '/images/profiles/Chandigarh/profile-145.jpg', description: 'Charming Chandigarh fitness coach', services: ['Travel', 'Events'], rating: 4.75, reviews: 92, verified: true, responseTime: '< 37 min', availability: 'Available' },
    { id: 146, name: 'Poornima', age: 24, location: 'Jaipur', image: '/images/profiles/Jaipur/profile-146.jpg', description: 'Regal Jaipur heritage host', services: ['Cultural Events', 'Dinner'], rating: 4.86, reviews: 123, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 147, name: 'Rajani', age: 25, location: 'Jaipur', image: '/images/profiles/Jaipur/profile-147.jpg', description: 'Elegant Jaipur jewelry designer', services: ['Shopping', 'Events'], rating: 4.89, reviews: 137, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 148, name: 'Shivani', age: 26, location: 'Jaipur', image: '/images/profiles/Jaipur/profile-148.jpg', description: 'Sophisticated Jaipur architect', services: ['Corporate Events', 'Dinner'], rating: 4.91, reviews: 148, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 149, name: 'Una', age: 23, location: 'Jaipur', image: '/images/profiles/Jaipur/profile-149.jpg', description: 'Charming Jaipur fashion model', services: ['Events', 'Shopping'], rating: 4.78, reviews: 101, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 150, name: 'Bhumi', age: 24, location: 'Indore', image: '/images/profiles/Indore/profile-150.jpg', description: 'Elegant Indore entrepreneur', services: ['Corporate Events', 'Travel'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 151, name: 'Chandni', age: 25, location: 'Indore', image: '/images/profiles/Indore/profile-151.jpg', description: 'Sophisticated Indore marketing professional', services: ['Corporate Events', 'Dinner'], rating: 4.87, reviews: 128, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 152, name: 'Damini', age: 26, location: 'Indore', image: '/images/profiles/Indore/profile-152.jpg', description: 'Vibrant Indore consultant', services: ['Corporate Events', 'Events'], rating: 4.90, reviews: 141, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 153, name: 'Ekta', age: 23, location: 'Indore', image: '/images/profiles/Indore/profile-153.jpg', description: 'Charming Indore teacher', services: ['Dinner', 'Cultural Events'], rating: 4.76, reviews: 97, verified: true, responseTime: '< 36 min', availability: 'Available' },
    { id: 154, name: 'Deepa', age: 24, location: 'Ahmedabad', image: '/images/profiles/Ahmedabad/profile-154.jpg', description: 'Elegant Ahmedabad textile designer', services: ['Shopping', 'Events'], rating: 4.84, reviews: 118, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 155, name: 'Foram', age: 25, location: 'Ahmedabad', image: '/images/profiles/Ahmedabad/profile-155.jpg', description: 'Sophisticated Ahmedabad architect', services: ['Corporate Events', 'Dinner'], rating: 4.88, reviews: 133, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 156, name: 'Gayatri', age: 26, location: 'Ahmedabad', image: '/images/profiles/Ahmedabad/profile-156.jpg', description: 'Vibrant Ahmedabad entrepreneur', services: ['Corporate Events', 'Travel'], rating: 4.91, reviews: 147, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 157, name: 'Hetal', age: 23, location: 'Ahmedabad', image: '/images/profiles/Ahmedabad/profile-157.jpg', description: 'Charming Ahmedabad influencer', services: ['Events', 'Nightlife'], rating: 4.74, reviews: 89, verified: true, responseTime: '< 39 min', availability: 'Available' },
    
    // Thane profiles
    { id: 165, name: 'Aditi', age: 24, location: 'Thane', image: '/images/profiles/Thane/profile-1.jpg', description: 'Elegant Thane model', services: ['Events', 'Shopping'], rating: 4.82, reviews: 115, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 166, name: 'Sneha', age: 26, location: 'Thane', image: '/images/profiles/Thane/profile-2.jpg', description: 'Sophisticated Thane professional', services: ['Business Events', 'Dinner'], rating: 4.87, reviews: 128, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 167, name: 'Priya', age: 23, location: 'Thane', image: '/images/profiles/Thane/profile-3.jpg', description: 'Charming Thane beauty', services: ['Nightlife', 'Entertainment'], rating: 4.76, reviews: 95, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 168, name: 'Anjali', age: 25, location: 'Thane', image: '/images/profiles/Thane/profile-4.jpg', description: 'Vibrant Thane escort', services: ['Travel', 'Events'], rating: 4.84, reviews: 118, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 169, name: 'Neha', age: 27, location: 'Thane', image: '/images/profiles/Thane/profile-5.jpg', description: 'Elite Thane companion', services: ['Corporate Events', 'Travel'], rating: 4.90, reviews: 142, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 170, name: 'Isha', age: 24, location: 'Thane', image: '/images/profiles/Thane/profile-6.jpg', description: 'Graceful Thane socialite', services: ['Dinner', 'Events'], rating: 4.79, reviews: 103, verified: true, responseTime: '< 32 min', availability: 'Available' },
    
    // Bhopal profiles
    { id: 171, name: 'Aarti', age: 25, location: 'Bhopal', image: '/images/profiles/Bhopal/profile-1.jpg', description: 'Elegant Bhopal beauty', services: ['Dinner', 'Travel'], rating: 4.85, reviews: 121, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 172, name: 'Kavya', age: 23, location: 'Bhopal', image: '/images/profiles/Bhopal/profile-2.jpg', description: 'Sophisticated Bhopal escort', services: ['Business Events', 'Dinner'], rating: 4.80, reviews: 108, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 173, name: 'Riya', age: 26, location: 'Bhopal', image: '/images/profiles/Bhopal/profile-3.jpg', description: 'Charming Bhopal professional', services: ['Corporate Events', 'Travel'], rating: 4.88, reviews: 135, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 174, name: 'Simran', age: 24, location: 'Bhopal', image: '/images/profiles/Bhopal/profile-4.jpg', description: 'Vibrant Bhopal companion', services: ['Events', 'Nightlife'], rating: 4.77, reviews: 97, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 175, name: 'Tanvi', age: 27, location: 'Bhopal', image: '/images/profiles/Bhopal/profile-5.jpg', description: 'Elite Bhopal socialite', services: ['Dinner', 'Cultural Events'], rating: 4.91, reviews: 148, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 176, name: 'Diya', age: 25, location: 'Bhopal', image: '/images/profiles/Bhopal/profile-6.jpg', description: 'Graceful Bhopal model', services: ['Shopping', 'Events'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 29 min', availability: 'Available' },
    
    // Visakhapatnam profiles
    { id: 177, name: 'Lakshmi', age: 24, location: 'Visakhapatnam', image: '/images/profiles/Visakhapatnam/profile-1.jpg', description: 'Beautiful Vizag beach escort', services: ['Beach Romance', 'Travel'], rating: 4.86, reviews: 124, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 178, name: 'Divya', age: 26, location: 'Visakhapatnam', image: '/images/profiles/Visakhapatnam/profile-2.jpg', description: 'Sophisticated Vizag professional', services: ['Business Events', 'Dinner'], rating: 4.89, reviews: 138, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 179, name: 'Priya', age: 23, location: 'Visakhapatnam', image: '/images/profiles/Visakhapatnam/profile-3.jpg', description: 'Charming Vizag beauty', services: ['Events', 'Nightlife'], rating: 4.78, reviews: 102, verified: true, responseTime: '< 33 min', availability: 'Available' },
    { id: 180, name: 'Swathi', age: 25, location: 'Visakhapatnam', image: '/images/profiles/Visakhapatnam/profile-4.jpg', description: 'Elegant Vizag companion', services: ['Cruise Events', 'Travel'], rating: 4.84, reviews: 119, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 181, name: 'Ananya', age: 27, location: 'Visakhapatnam', image: '/images/profiles/Visakhapatnam/profile-5.jpg', description: 'Elite Vizag escort', services: ['Corporate Events', 'Dinner'], rating: 4.92, reviews: 151, verified: true, responseTime: '< 20 min', availability: 'Available' },
    { id: 182, name: 'Keerthi', age: 24, location: 'Visakhapatnam', image: '/images/profiles/Visakhapatnam/profile-6.jpg', description: 'Vibrant Vizag socialite', services: ['Beach Events', 'Entertainment'], rating: 4.81, reviews: 110, verified: true, responseTime: '< 31 min', availability: 'Available' },
    
    // Patna profiles
    { id: 183, name: 'Ritu', age: 25, location: 'Patna', image: '/images/profiles/Patna/profile-1.jpg', description: 'Elegant Patna escort', services: ['Dinner', 'Events'], rating: 4.79, reviews: 105, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 184, name: 'Sapna', age: 23, location: 'Patna', image: '/images/profiles/Patna/profile-2.jpg', description: 'Sophisticated Patna beauty', services: ['Business Events', 'Travel'], rating: 4.83, reviews: 114, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 185, name: 'Komal', age: 26, location: 'Patna', image: '/images/profiles/Patna/profile-3.jpg', description: 'Charming Patna professional', services: ['Corporate Events', 'Dinner'], rating: 4.87, reviews: 130, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 186, name: 'Nisha', age: 24, location: 'Patna', image: '/images/profiles/Patna/profile-4.jpg', description: 'Vibrant Patna companion', services: ['Events', 'Shopping'], rating: 4.76, reviews: 93, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 187, name: 'Priyanka', age: 27, location: 'Patna', image: '/images/profiles/Patna/profile-5.jpg', description: 'Elite Patna socialite', services: ['Cultural Events', 'Dinner'], rating: 4.90, reviews: 145, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 188, name: 'Rekha', age: 25, location: 'Patna', image: '/images/profiles/Patna/profile-6.jpg', description: 'Graceful Patna model', services: ['Events', 'Travel'], rating: 4.82, reviews: 112, verified: true, responseTime: '< 30 min', availability: 'Available' },
    
    // Vadodara profiles
    { id: 189, name: 'Shruti', age: 24, location: 'Vadodara', image: '/images/profiles/Vadodara/profile-1.jpg', description: 'Elegant Vadodara beauty', services: ['Cultural Events', 'Dinner'], rating: 4.85, reviews: 122, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 190, name: 'Mansi', age: 26, location: 'Vadodara', image: '/images/profiles/Vadodara/profile-2.jpg', description: 'Sophisticated Vadodara escort', services: ['Business Events', 'Travel'], rating: 4.88, reviews: 134, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 191, name: 'Khushi', age: 23, location: 'Vadodara', image: '/images/profiles/Vadodara/profile-3.jpg', description: 'Charming Vadodara companion', services: ['Events', 'Shopping'], rating: 4.77, reviews: 98, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 192, name: 'Riddhi', age: 25, location: 'Vadodara', image: '/images/profiles/Vadodara/profile-4.jpg', description: 'Vibrant Vadodara socialite', services: ['Dinner', 'Nightlife'], rating: 4.83, reviews: 117, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 193, name: 'Hiral', age: 27, location: 'Vadodara', image: '/images/profiles/Vadodara/profile-5.jpg', description: 'Elite Vadodara professional', services: ['Corporate Events', 'Dinner'], rating: 4.91, reviews: 149, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 194, name: 'Jinal', age: 24, location: 'Vadodara', image: '/images/profiles/Vadodara/profile-6.jpg', description: 'Graceful Vadodara model', services: ['Events', 'Travel'], rating: 4.80, reviews: 107, verified: true, responseTime: '< 31 min', availability: 'Available' },
    
    // Ghaziabad profiles
    { id: 195, name: 'Ayesha', age: 25, location: 'Ghaziabad', image: '/images/profiles/Ghaziabad/profile-1.jpg', description: 'Elegant Ghaziabad escort', services: ['Business Events', 'Dinner'], rating: 4.84, reviews: 120, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 196, name: 'Megha', age: 23, location: 'Ghaziabad', image: '/images/profiles/Ghaziabad/profile-2.jpg', description: 'Sophisticated Ghaziabad beauty', services: ['Corporate Events', 'Travel'], rating: 4.86, reviews: 126, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 197, name: 'Tanya', age: 26, location: 'Ghaziabad', image: '/images/profiles/Ghaziabad/profile-3.jpg', description: 'Charming Ghaziabad professional', services: ['Dinner', 'Events'], rating: 4.89, reviews: 137, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 198, name: 'Soniya', age: 24, location: 'Ghaziabad', image: '/images/profiles/Ghaziabad/profile-4.jpg', description: 'Vibrant Ghaziabad companion', services: ['Nightlife', 'Entertainment'], rating: 4.78, reviews: 101, verified: true, responseTime: '< 33 min', availability: 'Available' },
    { id: 199, name: 'Kritika', age: 27, location: 'Ghaziabad', image: '/images/profiles/Ghaziabad/profile-5.jpg', description: 'Elite Ghaziabad socialite', services: ['Business Events', 'Dinner'], rating: 4.92, reviews: 152, verified: true, responseTime: '< 20 min', availability: 'Available' },
    { id: 200, name: 'Palak', age: 25, location: 'Ghaziabad', image: '/images/profiles/Ghaziabad/profile-6.jpg', description: 'Graceful Ghaziabad model', services: ['Shopping', 'Events'], rating: 4.81, reviews: 111, verified: true, responseTime: '< 30 min', availability: 'Available' },
    
    // Ludhiana profiles
    { id: 201, name: 'Simranjeet', age: 24, location: 'Ludhiana', image: '/images/profiles/Ludhiana/profile-1.jpg', description: 'Beautiful Punjabi escort', services: ['Events', 'Nightlife'], rating: 4.83, reviews: 115, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 202, name: 'Harleen', age: 26, location: 'Ludhiana', image: '/images/profiles/Ludhiana/profile-2.jpg', description: 'Sophisticated Ludhiana professional', services: ['Business Events', 'Dinner'], rating: 4.87, reviews: 129, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 203, name: 'Jasleen', age: 23, location: 'Ludhiana', image: '/images/profiles/Ludhiana/profile-3.jpg', description: 'Charming Punjabi beauty', services: ['Party Events', 'Entertainment'], rating: 4.76, reviews: 94, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 204, name: 'Manpreet', age: 25, location: 'Ludhiana', image: '/images/profiles/Ludhiana/profile-4.jpg', description: 'Vibrant Ludhiana companion', services: ['Travel', 'Events'], rating: 4.84, reviews: 118, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 205, name: 'Navneet', age: 27, location: 'Ludhiana', image: '/images/profiles/Ludhiana/profile-5.jpg', description: 'Elite Ludhiana socialite', services: ['Corporate Events', 'Dinner'], rating: 4.90, reviews: 143, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 206, name: 'Rajveer', age: 24, location: 'Ludhiana', image: '/images/profiles/Ludhiana/profile-6.jpg', description: 'Graceful Punjabi model', services: ['Events', 'Shopping'], rating: 4.79, reviews: 104, verified: true, responseTime: '< 31 min', availability: 'Available' },
    
    // Agra profiles
    { id: 207, name: 'Radha', age: 25, location: 'Agra', image: '/images/profiles/Agra/profile-1.jpg', description: 'Elegant Agra tourism escort', services: ['Heritage Tours', 'Travel'], rating: 4.86, reviews: 125, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 208, name: 'Sunita', age: 23, location: 'Agra', image: '/images/profiles/Agra/profile-2.jpg', description: 'Sophisticated Agra beauty', services: ['Dinner', 'Events'], rating: 4.82, reviews: 113, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 209, name: 'Geeta', age: 26, location: 'Agra', image: '/images/profiles/Agra/profile-3.jpg', description: 'Charming Agra professional', services: ['Business Events', 'Travel'], rating: 4.88, reviews: 136, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 210, name: 'Mamta', age: 24, location: 'Agra', image: '/images/profiles/Agra/profile-4.jpg', description: 'Vibrant Agra companion', services: ['Tourist Guide', 'Events'], rating: 4.77, reviews: 99, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 211, name: 'Sita', age: 27, location: 'Agra', image: '/images/profiles/Agra/profile-5.jpg', description: 'Elite Agra socialite', services: ['Heritage Hotels', 'Dinner'], rating: 4.91, reviews: 147, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 212, name: 'Vandana', age: 25, location: 'Agra', image: '/images/profiles/Agra/profile-6.jpg', description: 'Graceful Agra model', services: ['Events', 'Shopping'], rating: 4.80, reviews: 106, verified: true, responseTime: '< 31 min', availability: 'Available' },
    
    // Nashik profiles
    { id: 213, name: 'Aisha', age: 24, location: 'Nashik', image: '/images/profiles/Nashik/profile-1.jpg', description: 'Elegant Nashik wine tour escort', services: ['Wine Tours', 'Travel'], rating: 4.84, reviews: 119, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 214, name: 'Pooja', age: 26, location: 'Nashik', image: '/images/profiles/Nashik/profile-2.jpg', description: 'Sophisticated Nashik professional', services: ['Business Events', 'Dinner'], rating: 4.87, reviews: 131, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 215, name: 'Rakhi', age: 23, location: 'Nashik', image: '/images/profiles/Nashik/profile-3.jpg', description: 'Charming Nashik beauty', services: ['Events', 'Shopping'], rating: 4.76, reviews: 96, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 216, name: 'Sonal', age: 25, location: 'Nashik', image: '/images/profiles/Nashik/profile-4.jpg', description: 'Vibrant Nashik companion', services: ['Vineyard Tours', 'Dinner'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 217, name: 'Vaishnavi', age: 27, location: 'Nashik', image: '/images/profiles/Nashik/profile-5.jpg', description: 'Elite Nashik socialite', services: ['Corporate Events', 'Travel'], rating: 4.90, reviews: 144, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 218, name: 'Rutuja', age: 24, location: 'Nashik', image: '/images/profiles/Nashik/profile-6.jpg', description: 'Graceful Nashik model', services: ['Events', 'Entertainment'], rating: 4.79, reviews: 108, verified: true, responseTime: '< 32 min', availability: 'Available' },
    
    // Faridabad profiles
    { id: 219, name: 'Neetu', age: 25, location: 'Faridabad', image: '/images/profiles/Faridabad/profile-1.jpg', description: 'Elegant Faridabad escort', services: ['Business Events', 'Dinner'], rating: 4.85, reviews: 121, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 220, name: 'Priti', age: 23, location: 'Faridabad', image: '/images/profiles/Faridabad/profile-2.jpg', description: 'Sophisticated Faridabad beauty', services: ['Corporate Events', 'Travel'], rating: 4.83, reviews: 115, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 221, name: 'Rani', age: 26, location: 'Faridabad', image: '/images/profiles/Faridabad/profile-3.jpg', description: 'Charming Faridabad professional', services: ['Dinner', 'Events'], rating: 4.88, reviews: 133, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 222, name: 'Seema', age: 24, location: 'Faridabad', image: '/images/profiles/Faridabad/profile-4.jpg', description: 'Vibrant Faridabad companion', services: ['Nightlife', 'Entertainment'], rating: 4.77, reviews: 100, verified: true, responseTime: '< 33 min', availability: 'Available' },
    { id: 223, name: 'Uma', age: 27, location: 'Faridabad', image: '/images/profiles/Faridabad/profile-5.jpg', description: 'Elite Faridabad socialite', services: ['Business Events', 'Dinner'], rating: 4.91, reviews: 146, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 224, name: 'Vaishali', age: 25, location: 'Faridabad', image: '/images/profiles/Faridabad/profile-6.jpg', description: 'Graceful Faridabad model', services: ['Shopping', 'Events'], rating: 4.80, reviews: 109, verified: true, responseTime: '< 31 min', availability: 'Available' },
    
    // Meerut profiles
    { id: 225, name: 'Babita', age: 24, location: 'Meerut', image: '/images/profiles/Meerut/profile-1.jpg', description: 'Elegant Meerut escort', services: ['Dinner', 'Events'], rating: 4.82, reviews: 114, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 226, name: 'Chandni', age: 26, location: 'Meerut', image: '/images/profiles/Meerut/profile-2.jpg', description: 'Sophisticated Meerut professional', services: ['Business Events', 'Travel'], rating: 4.86, reviews: 127, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 227, name: 'Deepti', age: 23, location: 'Meerut', image: '/images/profiles/Meerut/profile-3.jpg', description: 'Charming Meerut beauty', services: ['Events', 'Shopping'], rating: 4.75, reviews: 92, verified: true, responseTime: '< 36 min', availability: 'Available' },
    { id: 228, name: 'Garima', age: 25, location: 'Meerut', image: '/images/profiles/Meerut/profile-4.jpg', description: 'Vibrant Meerut companion', services: ['Dinner', 'Nightlife'], rating: 4.84, reviews: 117, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 229, name: 'Heena', age: 27, location: 'Meerut', image: '/images/profiles/Meerut/profile-5.jpg', description: 'Elite Meerut socialite', services: ['Corporate Events', 'Dinner'], rating: 4.89, reviews: 140, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 230, name: 'Jyoti', age: 24, location: 'Meerut', image: '/images/profiles/Meerut/profile-6.jpg', description: 'Graceful Meerut model', services: ['Events', 'Travel'], rating: 4.79, reviews: 105, verified: true, responseTime: '< 32 min', availability: 'Available' },
    
    // Rajkot profiles
    { id: 231, name: 'Foram', age: 25, location: 'Rajkot', image: '/images/profiles/Rajkot/profile-1.jpg', description: 'Elegant Rajkot beauty', services: ['Business Events', 'Dinner'], rating: 4.85, reviews: 123, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 232, name: 'Hetal', age: 23, location: 'Rajkot', image: '/images/profiles/Rajkot/profile-2.jpg', description: 'Sophisticated Rajkot escort', services: ['Events', 'Shopping'], rating: 4.81, reviews: 110, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 233, name: 'Jinal', age: 26, location: 'Rajkot', image: '/images/profiles/Rajkot/profile-3.jpg', description: 'Charming Rajkot professional', services: ['Corporate Events', 'Travel'], rating: 4.88, reviews: 135, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 234, name: 'Khushi', age: 24, location: 'Rajkot', image: '/images/profiles/Rajkot/profile-4.jpg', description: 'Vibrant Rajkot companion', services: ['Dinner', 'Events'], rating: 4.76, reviews: 97, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 235, name: 'Mansi', age: 27, location: 'Rajkot', image: '/images/profiles/Rajkot/profile-5.jpg', description: 'Elite Rajkot socialite', services: ['Business Events', 'Dinner'], rating: 4.90, reviews: 142, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 236, name: 'Nidhi', age: 25, location: 'Rajkot', image: '/images/profiles/Rajkot/profile-6.jpg', description: 'Graceful Rajkot model', services: ['Events', 'Cultural Functions'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 29 min', availability: 'Available' },
    
    // Kalyan-Dombivli profiles
    { id: 237, name: 'Asmita', age: 24, location: 'Kalyan-Dombivli', image: '/images/profiles/Kalyan-Dombivli/profile-1.jpg', description: 'Elegant twin city escort', services: ['Dinner', 'Events'], rating: 4.82, reviews: 112, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 238, name: 'Damini', age: 26, location: 'Kalyan-Dombivli', image: '/images/profiles/Kalyan-Dombivli/profile-2.jpg', description: 'Sophisticated Kalyan beauty', services: ['Business Events', 'Travel'], rating: 4.86, reviews: 126, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 239, name: 'Gauri', age: 23, location: 'Kalyan-Dombivli', image: '/images/profiles/Kalyan-Dombivli/profile-3.jpg', description: 'Charming Dombivli companion', services: ['Events', 'Shopping'], rating: 4.77, reviews: 98, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 240, name: 'Janvi', age: 25, location: 'Kalyan-Dombivli', image: '/images/profiles/Kalyan-Dombivli/profile-4.jpg', description: 'Vibrant twin city socialite', services: ['Nightlife', 'Entertainment'], rating: 4.84, reviews: 119, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 241, name: 'Komal', age: 27, location: 'Kalyan-Dombivli', image: '/images/profiles/Kalyan-Dombivli/profile-5.jpg', description: 'Elite Kalyan professional', services: ['Corporate Events', 'Dinner'], rating: 4.89, reviews: 138, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 242, name: 'Madhuri', age: 24, location: 'Kalyan-Dombivli', image: '/images/profiles/Kalyan-Dombivli/profile-6.jpg', description: 'Graceful Dombivli model', services: ['Events', 'Travel'], rating: 4.80, reviews: 107, verified: true, responseTime: '< 31 min', availability: 'Available' },
    
    // Varanasi profiles
    { id: 243, name: 'Anjali', age: 25, location: 'Varanasi', image: '/images/profiles/Varanasi/profile-1.jpg', description: 'Spiritual city beauty', services: ['Tourism Escort', 'Cultural Events'], rating: 4.86, reviews: 124, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 244, name: 'Ganga', age: 23, location: 'Varanasi', image: '/images/profiles/Varanasi/profile-2.jpg', description: 'Elegant Varanasi escort', services: ['Temple Tours', 'Dinner'], rating: 4.82, reviews: 113, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 245, name: 'Kavita', age: 26, location: 'Varanasi', image: '/images/profiles/Varanasi/profile-3.jpg', description: 'Sophisticated Varanasi professional', services: ['Business Events', 'Travel'], rating: 4.88, reviews: 132, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 246, name: 'Meera', age: 24, location: 'Varanasi', image: '/images/profiles/Varanasi/profile-4.jpg', description: 'Charming Banaras beauty', services: ['Heritage Tours', 'Events'], rating: 4.79, reviews: 103, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 247, name: 'Parvati', age: 27, location: 'Varanasi', image: '/images/profiles/Varanasi/profile-5.jpg', description: 'Elite Varanasi companion', services: ['Cultural Events', 'Dinner'], rating: 4.91, reviews: 145, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 248, name: 'Saraswati', age: 25, location: 'Varanasi', image: '/images/profiles/Varanasi/profile-6.jpg', description: 'Graceful Varanasi socialite', services: ['Tourism', 'Shopping'], rating: 4.83, reviews: 115, verified: true, responseTime: '< 29 min', availability: 'Available' },
    
    // Srinagar profiles
    { id: 249, name: 'Aarifah', age: 24, location: 'Srinagar', image: '/images/profiles/Srinagar/profile-1.jpg', description: 'Beautiful Kashmir escort', services: ['Houseboat Romance', 'Travel'], rating: 4.87, reviews: 128, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 250, name: 'Dilshad', age: 26, location: 'Srinagar', image: '/images/profiles/Srinagar/profile-2.jpg', description: 'Elegant Srinagar beauty', services: ['Shikara Tours', 'Dinner'], rating: 4.89, reviews: 136, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 251, name: 'Gulnar', age: 23, location: 'Srinagar', image: '/images/profiles/Srinagar/profile-3.jpg', description: 'Sophisticated Kashmir companion', services: ['Tourism Escort', 'Events'], rating: 4.84, reviews: 118, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 252, name: 'Hina', age: 25, location: 'Srinagar', image: '/images/profiles/Srinagar/profile-4.jpg', description: 'Charming Kashmiri beauty', services: ['Dal Lake Tours', 'Shopping'], rating: 4.81, reviews: 109, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 253, name: 'Mehreen', age: 27, location: 'Srinagar', image: '/images/profiles/Srinagar/profile-5.jpg', description: 'Elite Srinagar socialite', services: ['Business Events', 'Travel'], rating: 4.92, reviews: 149, verified: true, responseTime: '< 20 min', availability: 'Available' },
    { id: 254, name: 'Zara', age: 24, location: 'Srinagar', image: '/images/profiles/Srinagar/profile-6.jpg', description: 'Graceful Kashmir model', services: ['Events', 'Cultural Functions'], rating: 4.85, reviews: 121, verified: true, responseTime: '< 27 min', availability: 'Available' },
    
    // Aurangabad profiles
    { id: 255, name: 'Archana', age: 25, location: 'Aurangabad', image: '/images/profiles/Aurangabad/profile-1.jpg', description: 'Heritage city escort', services: ['Ajanta Tours', 'Travel'], rating: 4.86, reviews: 125, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 256, name: 'Bhavna', age: 23, location: 'Aurangabad', image: '/images/profiles/Aurangabad/profile-2.jpg', description: 'Elegant Aurangabad beauty', services: ['Ellora Tours', 'Dinner'], rating: 4.83, reviews: 114, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 257, name: 'Chitra', age: 26, location: 'Aurangabad', image: '/images/profiles/Aurangabad/profile-3.jpg', description: 'Sophisticated Aurangabad professional', services: ['Business Events', 'Cultural Tours'], rating: 4.88, reviews: 133, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 258, name: 'Deepika', age: 24, location: 'Aurangabad', image: '/images/profiles/Aurangabad/profile-4.jpg', description: 'Charming heritage escort', services: ['Tourism', 'Events'], rating: 4.79, reviews: 104, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 259, name: 'Eshita', age: 27, location: 'Aurangabad', image: '/images/profiles/Aurangabad/profile-5.jpg', description: 'Elite Aurangabad companion', services: ['Heritage Hotels', 'Dinner'], rating: 4.91, reviews: 146, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 260, name: 'Falak', age: 25, location: 'Aurangabad', image: '/images/profiles/Aurangabad/profile-6.jpg', description: 'Graceful Aurangabad socialite', services: ['Events', 'Shopping'], rating: 4.84, reviews: 119, verified: true, responseTime: '< 28 min', availability: 'Available' },
    
    // Dhanbad profiles
    { id: 261, name: 'Anita', age: 24, location: 'Dhanbad', image: '/images/profiles/Dhanbad/profile-1.jpg', description: 'Elegant Dhanbad escort', services: ['Business Events', 'Dinner'], rating: 4.81, reviews: 111, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 262, name: 'Bindu', age: 26, location: 'Dhanbad', image: '/images/profiles/Dhanbad/profile-2.jpg', description: 'Sophisticated coal city beauty', services: ['Corporate Events', 'Travel'], rating: 4.85, reviews: 122, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 263, name: 'Champa', age: 23, location: 'Dhanbad', image: '/images/profiles/Dhanbad/profile-3.jpg', description: 'Charming Dhanbad companion', services: ['Dinner', 'Events'], rating: 4.77, reviews: 96, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 264, name: 'Disha', age: 25, location: 'Dhanbad', image: '/images/profiles/Dhanbad/profile-4.jpg', description: 'Vibrant Dhanbad professional', services: ['Business Meetings', 'Shopping'], rating: 4.83, reviews: 117, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 265, name: 'Ena', age: 27, location: 'Dhanbad', image: '/images/profiles/Dhanbad/profile-5.jpg', description: 'Elite Dhanbad socialite', services: ['Corporate Events', 'Dinner'], rating: 4.89, reviews: 139, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 266, name: 'Falguni', age: 24, location: 'Dhanbad', image: '/images/profiles/Dhanbad/profile-6.jpg', description: 'Graceful Dhanbad model', services: ['Events', 'Travel'], rating: 4.80, reviews: 108, verified: true, responseTime: '< 31 min', availability: 'Available' },
    
    // Amritsar profiles
    { id: 267, name: 'Gurleen', age: 25, location: 'Amritsar', image: '/images/profiles/Amritsar/profile-1.jpg', description: 'Beautiful Punjabi escort', services: ['Golden Temple Tours', 'Cultural Events'], rating: 4.87, reviews: 129, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 268, name: 'Harpreet', age: 23, location: 'Amritsar', image: '/images/profiles/Amritsar/profile-2.jpg', description: 'Elegant Amritsar beauty', services: ['Heritage Tours', 'Dinner'], rating: 4.84, reviews: 117, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 269, name: 'Japneet', age: 26, location: 'Amritsar', image: '/images/profiles/Amritsar/profile-3.jpg', description: 'Sophisticated Punjabi companion', services: ['Business Events', 'Travel'], rating: 4.89, reviews: 137, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 270, name: 'Kirandeep', age: 24, location: 'Amritsar', image: '/images/profiles/Amritsar/profile-4.jpg', description: 'Charming Amritsar socialite', services: ['Events', 'Shopping'], rating: 4.81, reviews: 112, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 271, name: 'Mandeep', age: 27, location: 'Amritsar', image: '/images/profiles/Amritsar/profile-5.jpg', description: 'Elite Punjabi professional', services: ['Corporate Events', 'Dinner'], rating: 4.91, reviews: 148, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 272, name: 'Navdeep', age: 25, location: 'Amritsar', image: '/images/profiles/Amritsar/profile-6.jpg', description: 'Graceful Amritsar model', services: ['Events', 'Cultural Functions'], rating: 4.85, reviews: 123, verified: true, responseTime: '< 27 min', availability: 'Available' },
    
    // Navi Mumbai profiles
    { id: 273, name: 'Aarohi', age: 24, location: 'Navi Mumbai', image: '/images/profiles/Navi-Mumbai/profile-1.jpg', description: 'Elegant Navi Mumbai escort', services: ['Corporate Hub', 'Business Events'], rating: 4.86, reviews: 126, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 274, name: 'Bhumi', age: 26, location: 'Navi Mumbai', image: '/images/profiles/Navi-Mumbai/profile-2.jpg', description: 'Sophisticated planned city beauty', services: ['Dinner', 'Travel'], rating: 4.88, reviews: 134, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 275, name: 'Charmi', age: 23, location: 'Navi Mumbai', image: '/images/profiles/Navi-Mumbai/profile-3.jpg', description: 'Charming Navi Mumbai professional', services: ['Business Meetings', 'Events'], rating: 4.82, reviews: 114, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 276, name: 'Devika', age: 25, location: 'Navi Mumbai', image: '/images/profiles/Navi-Mumbai/profile-4.jpg', description: 'Vibrant Navi Mumbai companion', services: ['Shopping', 'Nightlife'], rating: 4.84, reviews: 119, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 277, name: 'Esha', age: 27, location: 'Navi Mumbai', image: '/images/profiles/Navi-Mumbai/profile-5.jpg', description: 'Elite Navi Mumbai socialite', services: ['Corporate Events', 'Dinner'], rating: 4.92, reviews: 151, verified: true, responseTime: '< 20 min', availability: 'Available' },
    { id: 278, name: 'Freya', age: 24, location: 'Navi Mumbai', image: '/images/profiles/Navi-Mumbai/profile-6.jpg', description: 'Graceful Navi Mumbai model', services: ['Events', 'Travel'], rating: 4.85, reviews: 122, verified: true, responseTime: '< 27 min', availability: 'Available' },
    
    // Allahabad (Prayagraj) profiles  
    { id: 279, name: 'Aakansha', age: 25, location: 'Allahabad (Prayagraj)', image: '/images/profiles/Allahabad-Prayagraj/profile-1.jpg', description: 'Elegant sangam city escort', services: ['Tourism', 'Cultural Events'], rating: 4.84, reviews: 120, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 280, name: 'Bhavya', age: 23, location: 'Allahabad (Prayagraj)', image: '/images/profiles/Allahabad-Prayagraj/profile-2.jpg', description: 'Sophisticated Prayagraj beauty', services: ['Dinner', 'Events'], rating: 4.82, reviews: 113, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 281, name: 'Charu', age: 26, location: 'Allahabad (Prayagraj)', image: '/images/profiles/Allahabad-Prayagraj/profile-3.jpg', description: 'Charming Allahabad professional', services: ['Business Events', 'Travel'], rating: 4.87, reviews: 130, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 282, name: 'Diksha', age: 24, location: 'Allahabad (Prayagraj)', image: '/images/profiles/Allahabad-Prayagraj/profile-4.jpg', description: 'Vibrant Prayagraj companion', services: ['Events', 'Shopping'], rating: 4.78, reviews: 101, verified: true, responseTime: '< 33 min', availability: 'Available' },
    { id: 283, name: 'Ekta', age: 27, location: 'Allahabad (Prayagraj)', image: '/images/profiles/Allahabad-Prayagraj/profile-5.jpg', description: 'Elite Allahabad socialite', services: ['Corporate Events', 'Dinner'], rating: 4.90, reviews: 143, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 284, name: 'Gargi', age: 25, location: 'Allahabad (Prayagraj)', image: '/images/profiles/Allahabad-Prayagraj/profile-6.jpg', description: 'Graceful Prayagraj model', services: ['Events', 'Cultural Functions'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 29 min', availability: 'Available' },
    
    // Howrah profiles
    { id: 285, name: 'Ananya', age: 24, location: 'Howrah', image: '/images/profiles/Howrah/profile-1.jpg', description: 'Elegant Howrah beauty', services: ['Dinner', 'Events'], rating: 4.81, reviews: 110, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 286, name: 'Bipasha', age: 26, location: 'Howrah', image: '/images/profiles/Howrah/profile-2.jpg', description: 'Sophisticated Howrah escort', services: ['Business Events', 'Travel'], rating: 4.85, reviews: 124, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 287, name: 'Chandana', age: 23, location: 'Howrah', image: '/images/profiles/Howrah/profile-3.jpg', description: 'Charming Howrah companion', services: ['Events', 'Shopping'], rating: 4.76, reviews: 94, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 288, name: 'Debjani', age: 25, location: 'Howrah', image: '/images/profiles/Howrah/profile-4.jpg', description: 'Vibrant Howrah professional', services: ['Dinner', 'Nightlife'], rating: 4.83, reviews: 117, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 289, name: 'Era', age: 27, location: 'Howrah', image: '/images/profiles/Howrah/profile-5.jpg', description: 'Elite Howrah socialite', services: ['Corporate Events', 'Dinner'], rating: 4.89, reviews: 138, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 290, name: 'Geetanjali', age: 24, location: 'Howrah', image: '/images/profiles/Howrah/profile-6.jpg', description: 'Graceful Bengali model', services: ['Cultural Events', 'Travel'], rating: 4.80, reviews: 107, verified: true, responseTime: '< 31 min', availability: 'Available' },
    
    
    // Ranchi profiles
    { id: 291, name: 'Anjali', age: 25, location: 'Ranchi', image: '/images/profiles/Ranchi/profile-1.jpg', description: 'Elegant Ranchi escort', services: ['Business Events', 'Dinner'], rating: 4.84, reviews: 118, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 292, name: 'Bhavna', age: 23, location: 'Ranchi', image: '/images/profiles/Ranchi/profile-2.jpg', description: 'Sophisticated Jharkhand beauty', services: ['Events', 'Shopping'], rating: 4.80, reviews: 106, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 293, name: 'Chhaya', age: 26, location: 'Ranchi', image: '/images/profiles/Ranchi/profile-3.jpg', description: 'Charming Ranchi professional', services: ['Corporate Events', 'Travel'], rating: 4.87, reviews: 131, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 294, name: 'Deepti', age: 24, location: 'Ranchi', image: '/images/profiles/Ranchi/profile-4.jpg', description: 'Vibrant Ranchi companion', services: ['Dinner', 'Events'], rating: 4.78, reviews: 100, verified: true, responseTime: '< 33 min', availability: 'Available' },
    { id: 295, name: 'Esha', age: 27, location: 'Ranchi', image: '/images/profiles/Ranchi/profile-5.jpg', description: 'Elite Ranchi socialite', services: ['Business Events', 'Travel'], rating: 4.90, reviews: 142, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 296, name: 'Geeta', age: 25, location: 'Ranchi', image: '/images/profiles/Ranchi/profile-6.jpg', description: 'Graceful Ranchi model', services: ['Events', 'Cultural Functions'], rating: 4.83, reviews: 115, verified: true, responseTime: '< 29 min', availability: 'Available' },
    
    // Jabalpur profiles
    { id: 297, name: 'Aarti', age: 24, location: 'Jabalpur', image: '/images/profiles/Jabalpur/profile-1.jpg', description: 'Beautiful Jabalpur escort', services: ['Tourism', 'Dinner'], rating: 4.82, reviews: 112, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 298, name: 'Bharti', age: 26, location: 'Jabalpur', image: '/images/profiles/Jabalpur/profile-2.jpg', description: 'Elegant marble city beauty', services: ['Business Events', 'Travel'], rating: 4.86, reviews: 125, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 299, name: 'Chanchal', age: 23, location: 'Jabalpur', image: '/images/profiles/Jabalpur/profile-3.jpg', description: 'Sophisticated Jabalpur companion', services: ['Events', 'Shopping'], rating: 4.77, reviews: 97, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 300, name: 'Divya', age: 25, location: 'Jabalpur', image: '/images/profiles/Jabalpur/profile-4.jpg', description: 'Charming Jabalpur professional', services: ['Dinner', 'Events'], rating: 4.84, reviews: 119, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 301, name: 'Ekta', age: 27, location: 'Jabalpur', image: '/images/profiles/Jabalpur/profile-5.jpg', description: 'Elite Jabalpur socialite', services: ['Corporate Events', 'Travel'], rating: 4.89, reviews: 137, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 302, name: 'Gauri', age: 24, location: 'Jabalpur', image: '/images/profiles/Jabalpur/profile-6.jpg', description: 'Graceful Jabalpur model', services: ['Events', 'Cultural Tours'], rating: 4.81, reviews: 109, verified: true, responseTime: '< 31 min', availability: 'Available' },
    
    // Gwalior profiles
    { id: 303, name: 'Anu', age: 25, location: 'Gwalior', image: '/images/profiles/Gwalior/profile-1.jpg', description: 'Elegant fort city escort', services: ['Heritage Tours', 'Dinner'], rating: 4.85, reviews: 121, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 304, name: 'Babita', age: 23, location: 'Gwalior', image: '/images/profiles/Gwalior/profile-2.jpg', description: 'Sophisticated Gwalior beauty', services: ['Business Events', 'Events'], rating: 4.81, reviews: 110, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 305, name: 'Charu', age: 26, location: 'Gwalior', image: '/images/profiles/Gwalior/profile-3.jpg', description: 'Charming Gwalior professional', services: ['Corporate Events', 'Travel'], rating: 4.88, reviews: 133, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 306, name: 'Dolly', age: 24, location: 'Gwalior', image: '/images/profiles/Gwalior/profile-4.jpg', description: 'Vibrant Gwalior companion', services: ['Cultural Events', 'Shopping'], rating: 4.79, reviews: 103, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 307, name: 'Eena', age: 27, location: 'Gwalior', image: '/images/profiles/Gwalior/profile-5.jpg', description: 'Elite Gwalior socialite', services: ['Heritage Hotels', 'Dinner'], rating: 4.91, reviews: 146, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 308, name: 'Garima', age: 25, location: 'Gwalior', image: '/images/profiles/Gwalior/profile-6.jpg', description: 'Graceful Gwalior model', services: ['Events', 'Travel'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 29 min', availability: 'Available' },
    
    // Vijayawada profiles
    { id: 309, name: 'Anusha', age: 24, location: 'Vijayawada', image: '/images/profiles/Vijayawada/profile-1.jpg', description: 'Beautiful Krishna city escort', services: ['River Tours', 'Dinner'], rating: 4.86, reviews: 124, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 310, name: 'Bhavani', age: 26, location: 'Vijayawada', image: '/images/profiles/Vijayawada/profile-2.jpg', description: 'Elegant Vijayawada beauty', services: ['Business Events', 'Travel'], rating: 4.89, reviews: 136, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 311, name: 'Chandini', age: 23, location: 'Vijayawada', image: '/images/profiles/Vijayawada/profile-3.jpg', description: 'Sophisticated Vijayawada companion', services: ['Events', 'Shopping'], rating: 4.80, reviews: 107, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 312, name: 'Divyani', age: 25, location: 'Vijayawada', image: '/images/profiles/Vijayawada/profile-4.jpg', description: 'Charming AP beauty', services: ['Dinner', 'Cultural Events'], rating: 4.84, reviews: 118, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 313, name: 'Eshwari', age: 27, location: 'Vijayawada', image: '/images/profiles/Vijayawada/profile-5.jpg', description: 'Elite Vijayawada socialite', services: ['Corporate Events', 'Travel'], rating: 4.92, reviews: 150, verified: true, responseTime: '< 20 min', availability: 'Available' },
    { id: 314, name: 'Gayathri', age: 24, location: 'Vijayawada', image: '/images/profiles/Vijayawada/profile-6.jpg', description: 'Graceful Vijayawada model', services: ['Events', 'Temple Tours'], rating: 4.82, reviews: 113, verified: true, responseTime: '< 30 min', availability: 'Available' },
    
    // Jodhpur profiles
    { id: 315, name: 'Anjali', age: 25, location: 'Jodhpur', image: '/images/profiles/Jodhpur/profile-1.jpg', description: 'Royal blue city escort', services: ['Heritage Tours', 'Dinner'], rating: 4.87, reviews: 128, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 316, name: 'Bhawna', age: 23, location: 'Jodhpur', image: '/images/profiles/Jodhpur/profile-2.jpg', description: 'Elegant Jodhpur beauty', services: ['Palace Tours', 'Events'], rating: 4.83, reviews: 115, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 317, name: 'Chavi', age: 26, location: 'Jodhpur', image: '/images/profiles/Jodhpur/profile-3.jpg', description: 'Sophisticated Marwari companion', services: ['Business Events', 'Travel'], rating: 4.89, reviews: 138, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 318, name: 'Damini', age: 24, location: 'Jodhpur', image: '/images/profiles/Jodhpur/profile-4.jpg', description: 'Charming Jodhpur socialite', services: ['Cultural Events', 'Shopping'], rating: 4.81, reviews: 110, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 319, name: 'Esha', age: 27, location: 'Jodhpur', image: '/images/profiles/Jodhpur/profile-5.jpg', description: 'Elite Jodhpur professional', services: ['Heritage Hotels', 'Dinner'], rating: 4.92, reviews: 149, verified: true, responseTime: '< 20 min', availability: 'Available' },
    { id: 320, name: 'Ganga', age: 25, location: 'Jodhpur', image: '/images/profiles/Jodhpur/profile-6.jpg', description: 'Graceful Rajasthani model', services: ['Events', 'Desert Tours'], rating: 4.85, reviews: 122, verified: true, responseTime: '< 27 min', availability: 'Available' },
    
    // Madurai profiles
    { id: 321, name: 'Aishwarya', age: 24, location: 'Madurai', image: '/images/profiles/Madurai/profile-1.jpg', description: 'Beautiful temple city escort', services: ['Temple Tours', 'Dinner'], rating: 4.86, reviews: 125, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 322, name: 'Bhavani', age: 26, location: 'Madurai', image: '/images/profiles/Madurai/profile-2.jpg', description: 'Elegant Madurai beauty', services: ['Cultural Tours', 'Events'], rating: 4.88, reviews: 134, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 323, name: 'Chitra', age: 23, location: 'Madurai', image: '/images/profiles/Madurai/profile-3.jpg', description: 'Sophisticated Tamil beauty', services: ['Business Events', 'Travel'], rating: 4.82, reviews: 112, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 324, name: 'Devika', age: 25, location: 'Madurai', image: '/images/profiles/Madurai/profile-4.jpg', description: 'Charming Madurai companion', services: ['Heritage Tours', 'Shopping'], rating: 4.84, reviews: 119, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 325, name: 'Ezhili', age: 27, location: 'Madurai', image: '/images/profiles/Madurai/profile-5.jpg', description: 'Elite Madurai socialite', services: ['Corporate Events', 'Dinner'], rating: 4.91, reviews: 145, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 326, name: 'Gowri', age: 24, location: 'Madurai', image: '/images/profiles/Madurai/profile-6.jpg', description: 'Graceful Tamil model', services: ['Events', 'Cultural Functions'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 29 min', availability: 'Available' },
    
    // Raipur profiles
    { id: 327, name: 'Aditi', age: 25, location: 'Raipur', image: '/images/profiles/Raipur/profile-1.jpg', description: 'Elegant Chhattisgarh escort', services: ['Business Events', 'Dinner'], rating: 4.84, reviews: 120, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 328, name: 'Bhavya', age: 23, location: 'Raipur', image: '/images/profiles/Raipur/profile-2.jpg', description: 'Sophisticated Raipur beauty', services: ['Corporate Events', 'Travel'], rating: 4.81, reviews: 108, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 329, name: 'Chanchal', age: 26, location: 'Raipur', image: '/images/profiles/Raipur/profile-3.jpg', description: 'Charming Raipur professional', services: ['Dinner', 'Events'], rating: 4.87, reviews: 130, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 330, name: 'Diksha', age: 24, location: 'Raipur', image: '/images/profiles/Raipur/profile-4.jpg', description: 'Vibrant Raipur companion', services: ['Shopping', 'Nightlife'], rating: 4.78, reviews: 102, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 331, name: 'Eshika', age: 27, location: 'Raipur', image: '/images/profiles/Raipur/profile-5.jpg', description: 'Elite Raipur socialite', services: ['Business Events', 'Dinner'], rating: 4.90, reviews: 141, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 332, name: 'Geeta', age: 25, location: 'Raipur', image: '/images/profiles/Raipur/profile-6.jpg', description: 'Graceful Raipur model', services: ['Events', 'Travel'], rating: 4.83, reviews: 117, verified: true, responseTime: '< 29 min', availability: 'Available' },
    
    // Kota profiles
    { id: 333, name: 'Aashi', age: 24, location: 'Kota', image: '/images/profiles/Kota/profile-1.jpg', description: 'Elegant coaching city escort', services: ['Student Events', 'Dinner'], rating: 4.82, reviews: 114, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 334, name: 'Bhumi', age: 26, location: 'Kota', image: '/images/profiles/Kota/profile-2.jpg', description: 'Sophisticated Kota beauty', services: ['Business Events', 'Shopping'], rating: 4.85, reviews: 123, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 335, name: 'Charvi', age: 23, location: 'Kota', image: '/images/profiles/Kota/profile-3.jpg', description: 'Charming Kota companion', services: ['Events', 'Travel'], rating: 4.79, reviews: 105, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 336, name: 'Drishti', age: 25, location: 'Kota', image: '/images/profiles/Kota/profile-4.jpg', description: 'Vibrant Kota professional', services: ['Dinner', 'Entertainment'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 337, name: 'Esha', age: 27, location: 'Kota', image: '/images/profiles/Kota/profile-5.jpg', description: 'Elite Kota socialite', services: ['Corporate Events', 'Dinner'], rating: 4.89, reviews: 136, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 338, name: 'Gargi', age: 24, location: 'Kota', image: '/images/profiles/Kota/profile-6.jpg', description: 'Graceful Rajasthani model', services: ['Events', 'Cultural Tours'], rating: 4.81, reviews: 111, verified: true, responseTime: '< 31 min', availability: 'Available' },
    
    // Guwahati profiles
    { id: 339, name: 'Ananya', age: 25, location: 'Guwahati', image: '/images/profiles/Guwahati/profile-1.jpg', description: 'Beautiful Northeast escort', services: ['River Cruise', 'Travel'], rating: 4.86, reviews: 127, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 340, name: 'Bhanita', age: 23, location: 'Guwahati', image: '/images/profiles/Guwahati/profile-2.jpg', description: 'Elegant Assamese beauty', services: ['Temple Tours', 'Dinner'], rating: 4.84, reviews: 118, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 341, name: 'Chinmoyee', age: 26, location: 'Guwahati', image: '/images/profiles/Guwahati/profile-3.jpg', description: 'Sophisticated Guwahati professional', services: ['Business Events', 'Cultural Events'], rating: 4.88, reviews: 135, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 342, name: 'Dipalii', age: 24, location: 'Guwahati', image: '/images/profiles/Guwahati/profile-4.jpg', description: 'Charming Assam companion', services: ['Events', 'Shopping'], rating: 4.81, reviews: 109, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 343, name: 'Ellora', age: 27, location: 'Guwahati', image: '/images/profiles/Guwahati/profile-5.jpg', description: 'Elite Guwahati socialite', services: ['Corporate Events', 'Travel'], rating: 4.91, reviews: 148, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 344, name: 'Gitika', age: 25, location: 'Guwahati', image: '/images/profiles/Guwahati/profile-6.jpg', description: 'Graceful Assamese model', services: ['Events', 'Cultural Functions'], rating: 4.85, reviews: 121, verified: true, responseTime: '< 27 min', availability: 'Available' },
    
    // Chandigarh profiles
    { id: 345, name: 'Aarna', age: 24, location: 'Chandigarh', image: '/images/profiles/Chandigarh/profile-1.jpg', description: 'Beautiful city beautiful escort', services: ['Business Events', 'Dinner'], rating: 4.88, reviews: 132, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 346, name: 'Bhavika', age: 26, location: 'Chandigarh', image: '/images/profiles/Chandigarh/profile-2.jpg', description: 'Elegant Chandigarh professional', services: ['Corporate Hub', 'Travel'], rating: 4.91, reviews: 147, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 347, name: 'Charvi', age: 23, location: 'Chandigarh', image: '/images/profiles/Chandigarh/profile-3.jpg', description: 'Sophisticated Tricity beauty', services: ['Events', 'Shopping'], rating: 4.84, reviews: 119, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 348, name: 'Divisha', age: 25, location: 'Chandigarh', image: '/images/profiles/Chandigarh/profile-4.jpg', description: 'Charming Chandigarh socialite', services: ['Rock Garden Tours', 'Events'], rating: 4.86, reviews: 126, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 349, name: 'Evanshi', age: 27, location: 'Chandigarh', image: '/images/profiles/Chandigarh/profile-5.jpg', description: 'Elite Chandigarh companion', services: ['Business Events', 'Dinner'], rating: 4.93, reviews: 154, verified: true, responseTime: '< 19 min', availability: 'Available' },
    { id: 350, name: 'Garima', age: 24, location: 'Chandigarh', image: '/images/profiles/Chandigarh/profile-6.jpg', description: 'Graceful Chandigarh model', services: ['Events', 'Entertainment'], rating: 4.87, reviews: 129, verified: true, responseTime: '< 25 min', availability: 'Available' },
    
    // Solapur profiles
    { id: 351, name: 'Aarohi', age: 25, location: 'Solapur', image: '/images/profiles/Solapur/profile-1.jpg', description: 'Elegant textile city escort', services: ['Business Events', 'Dinner'], rating: 4.82, reviews: 113, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 352, name: 'Bhagyashree', age: 23, location: 'Solapur', image: '/images/profiles/Solapur/profile-2.jpg', description: 'Sophisticated Solapur beauty', services: ['Events', 'Shopping'], rating: 4.79, reviews: 104, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 353, name: 'Chaitali', age: 26, location: 'Solapur', image: '/images/profiles/Solapur/profile-3.jpg', description: 'Charming Solapur professional', services: ['Corporate Events', 'Travel'], rating: 4.86, reviews: 128, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 354, name: 'Deepali', age: 24, location: 'Solapur', image: '/images/profiles/Solapur/profile-4.jpg', description: 'Vibrant Solapur companion', services: ['Dinner', 'Events'], rating: 4.80, reviews: 107, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 355, name: 'Eshwari', age: 27, location: 'Solapur', image: '/images/profiles/Solapur/profile-5.jpg', description: 'Elite Solapur socialite', services: ['Business Events', 'Cultural Functions'], rating: 4.89, reviews: 139, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 356, name: 'Gauri', age: 25, location: 'Solapur', image: '/images/profiles/Solapur/profile-6.jpg', description: 'Graceful Solapur model', services: ['Events', 'Travel'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 29 min', availability: 'Available' },
    
    // Hubballi-Dharwad profiles
    { id: 357, name: 'Akanksha', age: 24, location: 'Hubballi-Dharwad', image: '/images/profiles/Hubballi-Dharwad/profile-1.jpg', description: 'Elegant twin city escort', services: ['Business Events', 'Dinner'], rating: 4.83, reviews: 115, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 358, name: 'Bhavya', age: 26, location: 'Hubballi-Dharwad', image: '/images/profiles/Hubballi-Dharwad/profile-2.jpg', description: 'Sophisticated Karnataka beauty', services: ['Corporate Events', 'Travel'], rating: 4.87, reviews: 130, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 359, name: 'Chaitra', age: 23, location: 'Hubballi-Dharwad', image: '/images/profiles/Hubballi-Dharwad/profile-3.jpg', description: 'Charming Hubballi companion', services: ['Events', 'Shopping'], rating: 4.78, reviews: 101, verified: true, responseTime: '< 33 min', availability: 'Available' },
    { id: 360, name: 'Divya', age: 25, location: 'Hubballi-Dharwad', image: '/images/profiles/Hubballi-Dharwad/profile-4.jpg', description: 'Vibrant Dharwad socialite', services: ['Dinner', 'Cultural Events'], rating: 4.84, reviews: 118, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 361, name: 'Eshana', age: 27, location: 'Hubballi-Dharwad', image: '/images/profiles/Hubballi-Dharwad/profile-5.jpg', description: 'Elite twin city professional', services: ['Business Events', 'Travel'], rating: 4.90, reviews: 143, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 362, name: 'Geetha', age: 24, location: 'Hubballi-Dharwad', image: '/images/profiles/Hubballi-Dharwad/profile-6.jpg', description: 'Graceful Karnataka model', services: ['Events', 'Entertainment'], rating: 4.82, reviews: 112, verified: true, responseTime: '< 30 min', availability: 'Available' },
    
    // Bareilly profiles
    { id: 363, name: 'Anjali', age: 25, location: 'Bareilly', image: '/images/profiles/Bareilly/profile-1.jpg', description: 'Elegant Bareilly escort', services: ['Business Events', 'Dinner'], rating: 4.81, reviews: 110, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 364, name: 'Babli', age: 23, location: 'Bareilly', image: '/images/profiles/Bareilly/profile-2.jpg', description: 'Sophisticated UP beauty', services: ['Events', 'Shopping'], rating: 4.77, reviews: 98, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 365, name: 'Chandni', age: 26, location: 'Bareilly', image: '/images/profiles/Bareilly/profile-3.jpg', description: 'Charming Bareilly professional', services: ['Corporate Events', 'Travel'], rating: 4.85, reviews: 124, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 366, name: 'Deepika', age: 24, location: 'Bareilly', image: '/images/profiles/Bareilly/profile-4.jpg', description: 'Vibrant Bareilly companion', services: ['Dinner', 'Events'], rating: 4.79, reviews: 105, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 367, name: 'Esha', age: 27, location: 'Bareilly', image: '/images/profiles/Bareilly/profile-5.jpg', description: 'Elite Bareilly socialite', services: ['Business Events', 'Travel'], rating: 4.88, reviews: 136, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 368, name: 'Garima', age: 25, location: 'Bareilly', image: '/images/profiles/Bareilly/profile-6.jpg', description: 'Graceful Bareilly model', services: ['Events', 'Cultural Functions'], rating: 4.82, reviews: 114, verified: true, responseTime: '< 30 min', availability: 'Available' },
    
    // Moradabad profiles
    { id: 369, name: 'Anamika', age: 24, location: 'Moradabad', image: '/images/profiles/Moradabad/profile-1.jpg', description: 'Elegant brass city escort', services: ['Business Events', 'Dinner'], rating: 4.80, reviews: 108, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 370, name: 'Bhavna', age: 26, location: 'Moradabad', image: '/images/profiles/Moradabad/profile-2.jpg', description: 'Sophisticated Moradabad beauty', services: ['Corporate Events', 'Shopping'], rating: 4.84, reviews: 119, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 371, name: 'Chanda', age: 23, location: 'Moradabad', image: '/images/profiles/Moradabad/profile-3.jpg', description: 'Charming Moradabad companion', services: ['Events', 'Travel'], rating: 4.76, reviews: 95, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 372, name: 'Divya', age: 25, location: 'Moradabad', image: '/images/profiles/Moradabad/profile-4.jpg', description: 'Vibrant Moradabad professional', services: ['Dinner', 'Events'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 373, name: 'Ekta', age: 27, location: 'Moradabad', image: '/images/profiles/Moradabad/profile-5.jpg', description: 'Elite Moradabad socialite', services: ['Business Events', 'Travel'], rating: 4.87, reviews: 131, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 374, name: 'Geeta', age: 24, location: 'Moradabad', image: '/images/profiles/Moradabad/profile-6.jpg', description: 'Graceful Moradabad model', services: ['Events', 'Shopping'], rating: 4.81, reviews: 111, verified: true, responseTime: '< 31 min', availability: 'Available' },
    
    // Mysore (Mysuru) profiles
    { id: 375, name: 'Aaradhya', age: 25, location: 'Mysore (Mysuru)', image: '/images/profiles/Mysore-Mysuru/profile-1.jpg', description: 'Royal palace city escort', services: ['Palace Tours', 'Dinner'], rating: 4.87, reviews: 129, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 376, name: 'Bhavana', age: 23, location: 'Mysore (Mysuru)', image: '/images/profiles/Mysore-Mysuru/profile-2.jpg', description: 'Elegant Mysuru beauty', services: ['Heritage Tours', 'Events'], rating: 4.85, reviews: 122, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 377, name: 'Chandana', age: 26, location: 'Mysore (Mysuru)', image: '/images/profiles/Mysore-Mysuru/profile-3.jpg', description: 'Sophisticated Mysore professional', services: ['Business Events', 'Travel'], rating: 4.89, reviews: 137, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 378, name: 'Deepa', age: 24, location: 'Mysore (Mysuru)', image: '/images/profiles/Mysore-Mysuru/profile-4.jpg', description: 'Charming sandalwood city companion', services: ['Cultural Tours', 'Shopping'], rating: 4.83, reviews: 115, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 379, name: 'Eshwari', age: 27, location: 'Mysore (Mysuru)', image: '/images/profiles/Mysore-Mysuru/profile-5.jpg', description: 'Elite Mysuru socialite', services: ['Heritage Hotels', 'Dinner'], rating: 4.92, reviews: 150, verified: true, responseTime: '< 20 min', availability: 'Available' },
    { id: 380, name: 'Gowri', age: 25, location: 'Mysore (Mysuru)', image: '/images/profiles/Mysore-Mysuru/profile-6.jpg', description: 'Graceful Mysore model', services: ['Events', 'Cultural Functions'], rating: 4.86, reviews: 125, verified: true, responseTime: '< 26 min', availability: 'Available' },
    
    // Gurgaon (Gurugram) profiles
    { id: 381, name: 'Aanya', age: 24, location: 'Gurgaon (Gurugram)', image: '/images/profiles/Gurgaon-Gurugram/profile-1.jpg', description: 'Elite corporate city escort', services: ['Business Events', 'Dinner'], rating: 4.90, reviews: 145, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 382, name: 'Bhavika', age: 26, location: 'Gurgaon (Gurugram)', image: '/images/profiles/Gurgaon-Gurugram/profile-2.jpg', description: 'Sophisticated Gurugram professional', services: ['Corporate Hub', 'Travel'], rating: 4.92, reviews: 152, verified: true, responseTime: '< 20 min', availability: 'Available' },
    { id: 383, name: 'Chavi', age: 23, location: 'Gurgaon (Gurugram)', image: '/images/profiles/Gurgaon-Gurugram/profile-3.jpg', description: 'Elegant millennium city beauty', services: ['Golf Events', 'Shopping'], rating: 4.88, reviews: 133, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 384, name: 'Disha', age: 25, location: 'Gurgaon (Gurugram)', image: '/images/profiles/Gurgaon-Gurugram/profile-4.jpg', description: 'Charming Gurgaon socialite', services: ['Cyber Hub Events', 'Nightlife'], rating: 4.86, reviews: 126, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 385, name: 'Esha', age: 27, location: 'Gurgaon (Gurugram)', image: '/images/profiles/Gurgaon-Gurugram/profile-5.jpg', description: 'Premium Gurugram companion', services: ['Business Events', 'Dinner'], rating: 4.94, reviews: 158, verified: true, responseTime: '< 18 min', availability: 'Available' },
    { id: 386, name: 'Gargi', age: 24, location: 'Gurgaon (Gurugram)', image: '/images/profiles/Gurgaon-Gurugram/profile-6.jpg', description: 'Graceful corporate model', services: ['Events', 'Entertainment'], rating: 4.89, reviews: 138, verified: true, responseTime: '< 23 min', availability: 'Available' },
    
    // Aligarh profiles
    { id: 387, name: 'Aarti', age: 25, location: 'Aligarh', image: '/images/profiles/Aligarh/profile-1.jpg', description: 'Elegant Aligarh escort', services: ['Business Events', 'Dinner'], rating: 4.80, reviews: 107, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 388, name: 'Bhawna', age: 23, location: 'Aligarh', image: '/images/profiles/Aligarh/profile-2.jpg', description: 'Sophisticated lock city beauty', services: ['Events', 'Shopping'], rating: 4.76, reviews: 96, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 389, name: 'Charu', age: 26, location: 'Aligarh', image: '/images/profiles/Aligarh/profile-3.jpg', description: 'Charming Aligarh professional', services: ['Corporate Events', 'Travel'], rating: 4.84, reviews: 120, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 390, name: 'Deepti', age: 24, location: 'Aligarh', image: '/images/profiles/Aligarh/profile-4.jpg', description: 'Vibrant Aligarh companion', services: ['Dinner', 'Events'], rating: 4.78, reviews: 102, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 391, name: 'Esha', age: 27, location: 'Aligarh', image: '/images/profiles/Aligarh/profile-5.jpg', description: 'Elite Aligarh socialite', services: ['Business Events', 'Cultural Functions'], rating: 4.87, reviews: 132, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 392, name: 'Geeta', age: 25, location: 'Aligarh', image: '/images/profiles/Aligarh/profile-6.jpg', description: 'Graceful Aligarh model', services: ['Events', 'Travel'], rating: 4.81, reviews: 110, verified: true, responseTime: '< 31 min', availability: 'Available' },
    
    // Jalandhar profiles
    { id: 393, name: 'Arohi', age: 24, location: 'Jalandhar', image: '/images/profiles/Jalandhar/profile-1.jpg', description: 'Beautiful Punjabi escort', services: ['Events', 'Nightlife'], rating: 4.84, reviews: 117, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 394, name: 'Harjot', age: 26, location: 'Jalandhar', image: '/images/profiles/Jalandhar/profile-2.jpg', description: 'Elegant Jalandhar beauty', services: ['Business Events', 'Dinner'], rating: 4.87, reviews: 128, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 395, name: 'Jaskirat', age: 23, location: 'Jalandhar', image: '/images/profiles/Jalandhar/profile-3.jpg', description: 'Sophisticated Punjabi companion', services: ['Party Events', 'Shopping'], rating: 4.81, reviews: 109, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 396, name: 'Kiranpreet', age: 25, location: 'Jalandhar', image: '/images/profiles/Jalandhar/profile-4.jpg', description: 'Charming Jalandhar socialite', services: ['Cultural Events', 'Travel'], rating: 4.85, reviews: 121, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 397, name: 'Manpreet', age: 27, location: 'Jalandhar', image: '/images/profiles/Jalandhar/profile-5.jpg', description: 'Elite Punjabi professional', services: ['Corporate Events', 'Dinner'], rating: 4.90, reviews: 141, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 398, name: 'Navpreet', age: 24, location: 'Jalandhar', image: '/images/profiles/Jalandhar/profile-6.jpg', description: 'Graceful Jalandhar model', services: ['Events', 'Entertainment'], rating: 4.83, reviews: 115, verified: true, responseTime: '< 29 min', availability: 'Available' },
    
    // Tiruchirappalli profiles
    { id: 399, name: 'Aarthi', age: 25, location: 'Tiruchirappalli', image: '/images/profiles/Tiruchirappalli/profile-1.jpg', description: 'Beautiful Trichy escort', services: ['Temple Tours', 'Dinner'], rating: 4.85, reviews: 123, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 400, name: 'Bhavani', age: 23, location: 'Tiruchirappalli', image: '/images/profiles/Tiruchirappalli/profile-2.jpg', description: 'Elegant rock fort city beauty', services: ['Heritage Tours', 'Events'], rating: 4.82, reviews: 112, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 401, name: 'Chitra', age: 26, location: 'Tiruchirappalli', image: '/images/profiles/Tiruchirappalli/profile-3.jpg', description: 'Sophisticated Tamil companion', services: ['Business Events', 'Travel'], rating: 4.87, reviews: 130, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 402, name: 'Divya', age: 24, location: 'Tiruchirappalli', image: '/images/profiles/Tiruchirappalli/profile-4.jpg', description: 'Charming Trichy socialite', services: ['Cultural Events', 'Shopping'], rating: 4.80, reviews: 106, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 403, name: 'Ezhil', age: 27, location: 'Tiruchirappalli', image: '/images/profiles/Tiruchirappalli/profile-5.jpg', description: 'Elite Tiruchirappalli professional', services: ['Corporate Events', 'Dinner'], rating: 4.89, reviews: 138, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 404, name: 'Gowri', age: 25, location: 'Tiruchirappalli', image: '/images/profiles/Tiruchirappalli/profile-6.jpg', description: 'Graceful Trichy model', services: ['Events', 'Cultural Functions'], rating: 4.84, reviews: 119, verified: true, responseTime: '< 28 min', availability: 'Available' },
    
    // Bhubaneswar profiles
    { id: 405, name: 'Ananya', age: 24, location: 'Bhubaneswar', image: '/images/profiles/Bhubaneswar/profile-1.jpg', description: 'Beautiful temple city escort', services: ['Temple Tours', 'Dinner'], rating: 4.86, reviews: 125, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 406, name: 'Bidisha', age: 26, location: 'Bhubaneswar', image: '/images/profiles/Bhubaneswar/profile-2.jpg', description: 'Elegant Odisha beauty', services: ['Heritage Tours', 'Events'], rating: 4.88, reviews: 134, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 407, name: 'Chitralekha', age: 23, location: 'Bhubaneswar', image: '/images/profiles/Bhubaneswar/profile-3.jpg', description: 'Sophisticated Bhubaneswar professional', services: ['Business Events', 'Travel'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 408, name: 'Dipti', age: 25, location: 'Bhubaneswar', image: '/images/profiles/Bhubaneswar/profile-4.jpg', description: 'Charming smart city companion', services: ['Events', 'Shopping'], rating: 4.85, reviews: 120, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 409, name: 'Eshani', age: 27, location: 'Bhubaneswar', image: '/images/profiles/Bhubaneswar/profile-5.jpg', description: 'Elite Bhubaneswar socialite', services: ['Corporate Events', 'Cultural Tours'], rating: 4.91, reviews: 147, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 410, name: 'Gargi', age: 24, location: 'Bhubaneswar', image: '/images/profiles/Bhubaneswar/profile-6.jpg', description: 'Graceful Odia model', services: ['Events', 'Cultural Functions'], rating: 4.84, reviews: 118, verified: true, responseTime: '< 28 min', availability: 'Available' },
    
    // Salem profiles
    { id: 411, name: 'Abinaya', age: 25, location: 'Salem', image: '/images/profiles/Salem/profile-1.jpg', description: 'Elegant steel city escort', services: ['Business Events', 'Dinner'], rating: 4.82, reviews: 113, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 412, name: 'Bhuvaneshwari', age: 23, location: 'Salem', image: '/images/profiles/Salem/profile-2.jpg', description: 'Sophisticated Salem beauty', services: ['Events', 'Shopping'], rating: 4.79, reviews: 104, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 413, name: 'Chithra', age: 26, location: 'Salem', image: '/images/profiles/Salem/profile-3.jpg', description: 'Charming Tamil companion', services: ['Corporate Events', 'Travel'], rating: 4.86, reviews: 127, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 414, name: 'Deepika', age: 24, location: 'Salem', image: '/images/profiles/Salem/profile-4.jpg', description: 'Vibrant Salem socialite', services: ['Dinner', 'Events'], rating: 4.81, reviews: 109, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 415, name: 'Ezhilarasi', age: 27, location: 'Salem', image: '/images/profiles/Salem/profile-5.jpg', description: 'Elite Salem professional', services: ['Business Events', 'Cultural Tours'], rating: 4.88, reviews: 135, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 416, name: 'Geetha', age: 25, location: 'Salem', image: '/images/profiles/Salem/profile-6.jpg', description: 'Graceful Salem model', services: ['Events', 'Travel'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 29 min', availability: 'Available' },
    
    // Warangal profiles
    { id: 417, name: 'Amulya', age: 24, location: 'Warangal', image: '/images/profiles/Warangal/profile-1.jpg', description: 'Beautiful heritage city escort', services: ['Fort Tours', 'Dinner'], rating: 4.84, reviews: 117, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 418, name: 'Bhavya', age: 26, location: 'Warangal', image: '/images/profiles/Warangal/profile-2.jpg', description: 'Elegant Telangana beauty', services: ['Heritage Tours', 'Events'], rating: 4.87, reviews: 129, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 419, name: 'Chandana', age: 23, location: 'Warangal', image: '/images/profiles/Warangal/profile-3.jpg', description: 'Sophisticated Warangal professional', services: ['Business Events', 'Travel'], rating: 4.81, reviews: 110, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 420, name: 'Divya', age: 25, location: 'Warangal', image: '/images/profiles/Warangal/profile-4.jpg', description: 'Charming temple city companion', services: ['Cultural Tours', 'Shopping'], rating: 4.83, reviews: 115, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 421, name: 'Eshwari', age: 27, location: 'Warangal', image: '/images/profiles/Warangal/profile-5.jpg', description: 'Elite Warangal socialite', services: ['Corporate Events', 'Dinner'], rating: 4.89, reviews: 136, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 422, name: 'Gayathri', age: 24, location: 'Warangal', image: '/images/profiles/Warangal/profile-6.jpg', description: 'Graceful Warangal model', services: ['Events', 'Cultural Functions'], rating: 4.82, reviews: 112, verified: true, responseTime: '< 30 min', availability: 'Available' },
    
    // Guntur profiles
    { id: 423, name: 'Anupama', age: 25, location: 'Guntur', image: '/images/profiles/Guntur/profile-1.jpg', description: 'Elegant chilli city escort', services: ['Business Events', 'Dinner'], rating: 4.83, reviews: 114, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 424, name: 'Bhanupriya', age: 23, location: 'Guntur', image: '/images/profiles/Guntur/profile-2.jpg', description: 'Sophisticated Guntur beauty', services: ['Events', 'Shopping'], rating: 4.80, reviews: 108, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 425, name: 'Chandrika', age: 26, location: 'Guntur', image: '/images/profiles/Guntur/profile-3.jpg', description: 'Charming AP companion', services: ['Corporate Events', 'Travel'], rating: 4.86, reviews: 126, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 426, name: 'Deeksha', age: 24, location: 'Guntur', image: '/images/profiles/Guntur/profile-4.jpg', description: 'Vibrant Guntur socialite', services: ['Dinner', 'Events'], rating: 4.81, reviews: 111, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 427, name: 'Eshwari', age: 27, location: 'Guntur', image: '/images/profiles/Guntur/profile-5.jpg', description: 'Elite Guntur professional', services: ['Business Events', 'Cultural Functions'], rating: 4.88, reviews: 133, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 428, name: 'Geetha', age: 25, location: 'Guntur', image: '/images/profiles/Guntur/profile-6.jpg', description: 'Graceful Guntur model', services: ['Events', 'Travel'], rating: 4.84, reviews: 117, verified: true, responseTime: '< 28 min', availability: 'Available' },
    
    // Bhiwandi profiles
    { id: 429, name: 'Aisha', age: 24, location: 'Bhiwandi', image: '/images/profiles/Bhiwandi/profile-1.jpg', description: 'Elegant textile city escort', services: ['Business Events', 'Dinner'], rating: 4.80, reviews: 107, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 430, name: 'Bhavika', age: 26, location: 'Bhiwandi', image: '/images/profiles/Bhiwandi/profile-2.jpg', description: 'Sophisticated Bhiwandi beauty', services: ['Corporate Events', 'Shopping'], rating: 4.83, reviews: 115, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 431, name: 'Charmi', age: 23, location: 'Bhiwandi', image: '/images/profiles/Bhiwandi/profile-3.jpg', description: 'Charming Bhiwandi companion', services: ['Events', 'Travel'], rating: 4.77, reviews: 99, verified: true, responseTime: '< 33 min', availability: 'Available' },
    { id: 432, name: 'Disha', age: 25, location: 'Bhiwandi', image: '/images/profiles/Bhiwandi/profile-4.jpg', description: 'Vibrant Bhiwandi socialite', services: ['Dinner', 'Events'], rating: 4.82, reviews: 113, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 433, name: 'Esha', age: 27, location: 'Bhiwandi', image: '/images/profiles/Bhiwandi/profile-5.jpg', description: 'Elite Bhiwandi professional', services: ['Business Events', 'Travel'], rating: 4.87, reviews: 128, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 434, name: 'Freya', age: 24, location: 'Bhiwandi', image: '/images/profiles/Bhiwandi/profile-6.jpg', description: 'Graceful Bhiwandi model', services: ['Events', 'Entertainment'], rating: 4.81, reviews: 110, verified: true, responseTime: '< 31 min', availability: 'Available' },
    
    // Saharanpur profiles
    { id: 435, name: 'Alisha', age: 25, location: 'Saharanpur', image: '/images/profiles/Saharanpur/profile-1.jpg', description: 'Elegant wood carving city escort', services: ['Business Events', 'Dinner'], rating: 4.79, reviews: 105, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 436, name: 'Bhavna', age: 23, location: 'Saharanpur', image: '/images/profiles/Saharanpur/profile-2.jpg', description: 'Sophisticated Saharanpur beauty', services: ['Events', 'Shopping'], rating: 4.75, reviews: 93, verified: true, responseTime: '< 36 min', availability: 'Available' },
    { id: 437, name: 'Chandni', age: 26, location: 'Saharanpur', image: '/images/profiles/Saharanpur/profile-3.jpg', description: 'Charming UP companion', services: ['Corporate Events', 'Travel'], rating: 4.84, reviews: 118, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 438, name: 'Deepika', age: 24, location: 'Saharanpur', image: '/images/profiles/Saharanpur/profile-4.jpg', description: 'Vibrant Saharanpur socialite', services: ['Dinner', 'Events'], rating: 4.78, reviews: 101, verified: true, responseTime: '< 33 min', availability: 'Available' },
    { id: 439, name: 'Esha', age: 27, location: 'Saharanpur', image: '/images/profiles/Saharanpur/profile-5.jpg', description: 'Elite Saharanpur professional', services: ['Business Events', 'Cultural Functions'], rating: 4.86, reviews: 124, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 440, name: 'Garima', age: 25, location: 'Saharanpur', image: '/images/profiles/Saharanpur/profile-6.jpg', description: 'Graceful Saharanpur model', services: ['Events', 'Travel'], rating: 4.80, reviews: 108, verified: true, responseTime: '< 31 min', availability: 'Available' },
    
    // Gorakhpur profiles
    { id: 441, name: 'Aakansha', age: 24, location: 'Gorakhpur', image: '/images/profiles/Gorakhpur/profile-1.jpg', description: 'Elegant railway city escort', services: ['Business Events', 'Dinner'], rating: 4.81, reviews: 109, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 442, name: 'Bhavna', age: 26, location: 'Gorakhpur', image: '/images/profiles/Gorakhpur/profile-2.jpg', description: 'Sophisticated Gorakhpur beauty', services: ['Events', 'Shopping'], rating: 4.84, reviews: 117, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 443, name: 'Charu', age: 23, location: 'Gorakhpur', image: '/images/profiles/Gorakhpur/profile-3.jpg', description: 'Charming Gorakhpur companion', services: ['Corporate Events', 'Travel'], rating: 4.78, reviews: 102, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 444, name: 'Diksha', age: 25, location: 'Gorakhpur', image: '/images/profiles/Gorakhpur/profile-4.jpg', description: 'Vibrant Gorakhpur socialite', services: ['Dinner', 'Events'], rating: 4.82, reviews: 112, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 445, name: 'Ekta', age: 27, location: 'Gorakhpur', image: '/images/profiles/Gorakhpur/profile-5.jpg', description: 'Elite Gorakhpur professional', services: ['Business Events', 'Travel'], rating: 4.87, reviews: 130, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 446, name: 'Garima', age: 24, location: 'Gorakhpur', image: '/images/profiles/Gorakhpur/profile-6.jpg', description: 'Graceful Gorakhpur model', services: ['Events', 'Cultural Functions'], rating: 4.80, reviews: 107, verified: true, responseTime: '< 31 min', availability: 'Available' },
    
    // Bikaner profiles
    { id: 447, name: 'Anjali', age: 25, location: 'Bikaner', image: '/images/profiles/Bikaner/profile-1.jpg', description: 'Beautiful desert city escort', services: ['Camel Safari', 'Heritage Tours'], rating: 4.85, reviews: 121, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 448, name: 'Bhawna', age: 23, location: 'Bikaner', image: '/images/profiles/Bikaner/profile-2.jpg', description: 'Elegant Bikaner beauty', services: ['Fort Tours', 'Dinner'], rating: 4.82, reviews: 113, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 449, name: 'Chavi', age: 26, location: 'Bikaner', image: '/images/profiles/Bikaner/profile-3.jpg', description: 'Sophisticated Rajasthani companion', services: ['Business Events', 'Travel'], rating: 4.88, reviews: 132, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 450, name: 'Damini', age: 24, location: 'Bikaner', image: '/images/profiles/Bikaner/profile-4.jpg', description: 'Charming Bikaner socialite', services: ['Cultural Events', 'Shopping'], rating: 4.80, reviews:106, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 451, name: 'Esha', age: 27, location: 'Bikaner', image: '/images/profiles/Bikaner/profile-5.jpg', description: 'Elite Bikaner professional', services: ['Heritage Hotels', 'Dinner'], rating: 4.90, reviews: 140, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 452, name: 'Garima', age: 25, location: 'Bikaner', image: '/images/profiles/Bikaner/profile-6.jpg', description: 'Graceful Rajasthani model', services: ['Events', 'Desert Tours'], rating: 4.84, reviews: 118, verified: true, responseTime: '< 28 min', availability: 'Available' },
    
    // Amravati profiles
    { id: 453, name: 'Aarohi', age: 24, location: 'Amravati', image: '/images/profiles/Amravati/profile-1.jpg', description: 'Elegant cotton city escort', services: ['Business Events', 'Dinner'], rating: 4.81, reviews: 110, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 454, name: 'Bhavana', age: 26, location: 'Amravati', image: '/images/profiles/Amravati/profile-2.jpg', description: 'Sophisticated Amravati beauty', services: ['Corporate Events', 'Shopping'], rating: 4.84, reviews: 119, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 455, name: 'Chaitali', age: 23, location: 'Amravati', image: '/images/profiles/Amravati/profile-3.jpg', description: 'Charming Maharashtra companion', services: ['Events', 'Travel'], rating: 4.78, reviews: 103, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 456, name: 'Deepali', age: 25, location: 'Amravati', image: '/images/profiles/Amravati/profile-4.jpg', description: 'Vibrant Amravati socialite', services: ['Dinner', 'Events'], rating: 4.83, reviews: 115, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 457, name: 'Eshwari', age: 27, location: 'Amravati', image: '/images/profiles/Amravati/profile-5.jpg', description: 'Elite Amravati professional', services: ['Business Events', 'Travel'], rating: 4.88, reviews: 134, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 458, name: 'Gauri', age: 24, location: 'Amravati', image: '/images/profiles/Amravati/profile-6.jpg', description: 'Graceful Amravati model', services: ['Events', 'Cultural Functions'], rating: 4.82, reviews: 113, verified: true, responseTime: '< 30 min', availability: 'Available' },
    
    // Noida profiles
    { id: 459, name: 'Aanya', age: 25, location: 'Noida', image: '/images/profiles/Noida/profile-1.jpg', description: 'Elite corporate hub escort', services: ['Business Events', 'Dinner'], rating: 4.89, reviews: 137, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 460, name: 'Bhavika', age: 23, location: 'Noida', image: '/images/profiles/Noida/profile-2.jpg', description: 'Sophisticated Noida professional', services: ['Corporate Events', 'Travel'], rating: 4.91, reviews: 146, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 461, name: 'Chavi', age: 26, location: 'Noida', image: '/images/profiles/Noida/profile-3.jpg', description: 'Elegant IT city beauty', services: ['Tech Events', 'Shopping'], rating: 4.87, reviews: 128, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 462, name: 'Disha', age: 24, location: 'Noida', image: '/images/profiles/Noida/profile-4.jpg', description: 'Charming Noida socialite', services: ['Malls Events', 'Nightlife'], rating: 4.85, reviews: 122, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 463, name: 'Esha', age: 27, location: 'Noida', image: '/images/profiles/Noida/profile-5.jpg', description: 'Premium Noida companion', services: ['Business Events', 'Dinner'], rating: 4.93, reviews: 155, verified: true, responseTime: '< 19 min', availability: 'Available' },
    { id: 464, name: 'Gargi', age: 25, location: 'Noida', image: '/images/profiles/Noida/profile-6.jpg', description: 'Graceful corporate model', services: ['Events', 'Entertainment'], rating: 4.88, reviews: 133, verified: true, responseTime: '< 24 min', availability: 'Available' },
    
    // Jamshedpur profiles
    { id: 465, name: 'Ananya', age: 24, location: 'Jamshedpur', image: '/images/profiles/Jamshedpur/profile-1.jpg', description: 'Elegant steel city escort', services: ['Business Events', 'Dinner'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 466, name: 'Bhavna', age: 26, location: 'Jamshedpur', image: '/images/profiles/Jamshedpur/profile-2.jpg', description: 'Sophisticated Tata city beauty', services: ['Corporate Events', 'Shopping'], rating: 4.86, reviews: 125, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 467, name: 'Chhaya', age: 23, location: 'Jamshedpur', image: '/images/profiles/Jamshedpur/profile-3.jpg', description: 'Charming Jamshedpur companion', services: ['Events', 'Travel'], rating: 4.80, reviews: 108, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 468, name: 'Deepti', age: 25, location: 'Jamshedpur', image: '/images/profiles/Jamshedpur/profile-4.jpg', description: 'Vibrant Jamshedpur socialite', services: ['Dinner', 'Events'], rating: 4.84, reviews: 119, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 469, name: 'Esha', age: 27, location: 'Jamshedpur', image: '/images/profiles/Jamshedpur/profile-5.jpg', description: 'Elite Jamshedpur professional', services: ['Business Events', 'Travel'], rating: 4.89, reviews: 136, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 470, name: 'Geeta', age: 24, location: 'Jamshedpur', image: '/images/profiles/Jamshedpur/profile-6.jpg', description: 'Graceful Jharkhand model', services: ['Events', 'Cultural Functions'], rating: 4.82, reviews: 114, verified: true, responseTime: '< 30 min', availability: 'Available' },
    
    // Bhilai profiles
    { id: 471, name: 'Aditi', age: 25, location: 'Bhilai', image: '/images/profiles/Bhilai/profile-1.jpg', description: 'Elegant steel city escort', services: ['Business Events', 'Dinner'], rating: 4.81, reviews: 111, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 472, name: 'Bhavya', age: 23, location: 'Bhilai', image: '/images/profiles/Bhilai/profile-2.jpg', description: 'Sophisticated Bhilai beauty', services: ['Corporate Events', 'Shopping'], rating: 4.78, reviews: 102, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 473, name: 'Chanchal', age: 26, location: 'Bhilai', image: '/images/profiles/Bhilai/profile-3.jpg', description: 'Charming Chhattisgarh companion', services: ['Events', 'Travel'], rating: 4.85, reviews: 123, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 474, name: 'Diksha', age: 24, location: 'Bhilai', image: '/images/profiles/Bhilai/profile-4.jpg', description: 'Vibrant Bhilai socialite', services: ['Dinner', 'Events'], rating: 4.80, reviews: 107, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 475, name: 'Eshika', age: 27, location: 'Bhilai', image: '/images/profiles/Bhilai/profile-5.jpg', description: 'Elite Bhilai professional', services: ['Business Events', 'Travel'], rating: 4.87, reviews: 131, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 476, name: 'Geeta', age: 25, location: 'Bhilai', image: '/images/profiles/Bhilai/profile-6.jpg', description: 'Graceful Bhilai model', services: ['Events', 'Cultural Functions'], rating: 4.83, reviews: 115, verified: true, responseTime: '< 29 min', availability: 'Available' },
    
    // Cuttack profiles
    { id: 477, name: 'Ananya', age: 24, location: 'Cuttack', image: '/images/profiles/Cuttack/profile-1.jpg', description: 'Beautiful millennium city escort', services: ['Business Events', 'Dinner'], rating: 4.84, reviews: 117, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 478, name: 'Bidisha', age: 26, location: 'Cuttack', image: '/images/profiles/Cuttack/profile-2.jpg', description: 'Elegant silver city beauty', services: ['Events', 'Shopping'], rating: 4.87, reviews: 129, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 479, name: 'Chitralekha', age: 23, location: 'Cuttack', image: '/images/profiles/Cuttack/profile-3.jpg', description: 'Sophisticated Cuttack professional', services: ['Corporate Events', 'Travel'], rating: 4.82, reviews: 112, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 480, name: 'Dipti', age: 25, location: 'Cuttack', image: '/images/profiles/Cuttack/profile-4.jpg', description: 'Charming Odisha companion', services: ['Dinner', 'Events'], rating: 4.85, reviews: 121, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 481, name: 'Eshani', age: 27, location: 'Cuttack', image: '/images/profiles/Cuttack/profile-5.jpg', description: 'Elite Cuttack socialite', services: ['Business Events', 'Cultural Functions'], rating: 4.90, reviews: 142, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 482, name: 'Gargi', age: 24, location: 'Cuttack', image: '/images/profiles/Cuttack/profile-6.jpg', description: 'Graceful Cuttack model', services: ['Events', 'Travel'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 29 min', availability: 'Available' },
    
    // Firozabad profiles
    { id: 483, name: 'Anjali', age: 25, location: 'Firozabad', image: '/images/profiles/Firozabad/profile-1.jpg', description: 'Elegant glass city escort', services: ['Business Events', 'Dinner'], rating: 4.79, reviews: 104, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 484, name: 'Bhavna', age: 23, location: 'Firozabad', image: '/images/profiles/Firozabad/profile-2.jpg', description: 'Sophisticated Firozabad beauty', services: ['Events', 'Shopping'], rating: 4.76, reviews: 97, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 485, name: 'Charu', age: 26, location: 'Firozabad', image: '/images/profiles/Firozabad/profile-3.jpg', description: 'Charming bangle city companion', services: ['Corporate Events', 'Travel'], rating: 4.83, reviews: 115, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 486, name: 'Deepti', age: 24, location: 'Firozabad', image: '/images/profiles/Firozabad/profile-4.jpg', description: 'Vibrant Firozabad socialite', services: ['Dinner', 'Events'], rating: 4.78, reviews: 101, verified: true, responseTime: '< 33 min', availability: 'Available' },
    { id: 487, name: 'Esha', age: 27, location: 'Firozabad', image: '/images/profiles/Firozabad/profile-5.jpg', description: 'Elite Firozabad professional', services: ['Business Events', 'Cultural Functions'], rating: 4.86, reviews: 126, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 488, name: 'Garima', age: 25, location: 'Firozabad', image: '/images/profiles/Firozabad/profile-6.jpg', description: 'Graceful Firozabad model', services: ['Events', 'Travel'], rating: 4.80, reviews: 108, verified: true, responseTime: '< 31 min', availability: 'Available' },
    
    // Kochi (Cochin) profiles
    { id: 489, name: 'Aishwarya', age: 24, location: 'Kochi (Cochin)', image: '/images/profiles/Kochi-Cochin/profile-1.jpg', description: 'Beautiful Arabian Sea escort', services: ['Backwater Tours', 'Dinner'], rating: 4.88, reviews: 134, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 490, name: 'Bhavana', age: 26, location: 'Kochi (Cochin)', image: '/images/profiles/Kochi-Cochin/profile-2.jpg', description: 'Elegant Kerala beauty', services: ['Port City Tours', 'Shopping'], rating: 4.90, reviews: 143, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 491, name: 'Chandini', age: 23, location: 'Kochi (Cochin)', image: '/images/profiles/Kochi-Cochin/profile-3.jpg', description: 'Sophisticated Kochi professional', services: ['Business Events', 'Travel'], rating: 4.86, reviews: 127, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 492, name: 'Devika', age: 25, location: 'Kochi (Cochin)', image: '/images/profiles/Kochi-Cochin/profile-4.jpg', description: 'Charming Queen of Arabian Sea', services: ['Fort Kochi Tours', 'Events'], rating: 4.89, reviews: 136, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 493, name: 'Eshwari', age: 27, location: 'Kochi (Cochin)', image: '/images/profiles/Kochi-Cochin/profile-5.jpg', description: 'Elite Cochin socialite', services: ['Cruise Events', 'Dinner'], rating: 4.92, reviews: 151, verified: true, responseTime: '< 20 min', availability: 'Available' },
    { id: 494, name: 'Gayathri', age: 24, location: 'Kochi (Cochin)', image: '/images/profiles/Kochi-Cochin/profile-6.jpg', description: 'Graceful Kochi model', services: ['Events', 'Cultural Shows'], rating: 4.87, reviews: 130, verified: true, responseTime: '< 25 min', availability: 'Available' },
    
    // Bhavnagar profiles
    { id: 495, name: 'Anjali', age: 25, location: 'Bhavnagar', image: '/images/profiles/Bhavnagar/profile-1.jpg', description: 'Elegant port city escort', services: ['Business Events', 'Dinner'], rating: 4.82, reviews: 113, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 496, name: 'Bhavika', age: 23, location: 'Bhavnagar', image: '/images/profiles/Bhavnagar/profile-2.jpg', description: 'Sophisticated Bhavnagar beauty', services: ['Events', 'Shopping'], rating: 4.79, reviews: 105, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 497, name: 'Charmi', age: 26, location: 'Bhavnagar', image: '/images/profiles/Bhavnagar/profile-3.jpg', description: 'Charming Gujarat companion', services: ['Corporate Events', 'Travel'], rating: 4.85, reviews: 124, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 498, name: 'Dipti', age: 24, location: 'Bhavnagar', image: '/images/profiles/Bhavnagar/profile-4.jpg', description: 'Vibrant Bhavnagar socialite', services: ['Beach Tours', 'Events'], rating: 4.81, reviews: 109, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 499, name: 'Eshika', age: 27, location: 'Bhavnagar', image: '/images/profiles/Bhavnagar/profile-5.jpg', description: 'Elite Bhavnagar professional', services: ['Business Events', 'Cultural Functions'], rating: 4.88, reviews: 135, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 500, name: 'Gargi', age: 25, location: 'Bhavnagar', image: '/images/profiles/Bhavnagar/profile-6.jpg', description: 'Graceful Bhavnagar model', services: ['Events', 'Travel'], rating: 4.83, reviews: 117, verified: true, responseTime: '< 29 min', availability: 'Available' },
    
    // Dehradun profiles
    { id: 501, name: 'Aakriti', age: 24, location: 'Dehradun', image: '/images/profiles/Dehradun/profile-1.jpg', description: 'Beautiful mountain city escort', services: ['Adventure Tours', 'Dinner'], rating: 4.87, reviews: 128, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 502, name: 'Bhavya', age: 26, location: 'Dehradun', image: '/images/profiles/Dehradun/profile-2.jpg', description: 'Elegant Doon valley beauty', services: ['Hill Station Tours', 'Shopping'], rating: 4.89, reviews: 137, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 503, name: 'Charvi', age: 23, location: 'Dehradun', image: '/images/profiles/Dehradun/profile-3.jpg', description: 'Sophisticated Dehradun professional', services: ['Business Events', 'Travel'], rating: 4.85, reviews: 121, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 504, name: 'Disha', age: 25, location: 'Dehradun', image: '/images/profiles/Dehradun/profile-4.jpg', description: 'Charming Himalayan companion', services: ['Trekking Tours', 'Events'], rating: 4.86, reviews: 125, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 505, name: 'Esha', age: 27, location: 'Dehradun', image: '/images/profiles/Dehradun/profile-5.jpg', description: 'Elite Dehradun socialite', services: ['Corporate Events', 'Adventure Travel'], rating: 4.92, reviews: 149, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 506, name: 'Garima', age: 24, location: 'Dehradun', image: '/images/profiles/Dehradun/profile-6.jpg', description: 'Graceful Uttarakhand model', services: ['Events', 'Cultural Tours'], rating: 4.84, reviews: 118, verified: true, responseTime: '< 28 min', availability: 'Available' },
    
    // Durgapur profiles
    { id: 507, name: 'Ananya', age: 25, location: 'Durgapur', image: '/images/profiles/Durgapur/profile-1.jpg', description: 'Elegant steel city escort', services: ['Business Events', 'Dinner'], rating: 4.82, reviews: 114, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 508, name: 'Bipasha', age: 23, location: 'Durgapur', image: '/images/profiles/Durgapur/profile-2.jpg', description: 'Sophisticated Durgapur beauty', services: ['Corporate Events', 'Shopping'], rating: 4.79, reviews: 106, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 509, name: 'Chandana', age: 26, location: 'Durgapur', image: '/images/profiles/Durgapur/profile-3.jpg', description: 'Charming WB companion', services: ['Events', 'Travel'], rating: 4.85, reviews: 122, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 510, name: 'Debjani', age: 24, location: 'Durgapur', image: '/images/profiles/Durgapur/profile-4.jpg', description: 'Vibrant Durgapur socialite', services: ['Dinner', 'Events'], rating: 4.81, reviews: 110, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 511, name: 'Era', age: 27, location: 'Durgapur', image: '/images/profiles/Durgapur/profile-5.jpg', description: 'Elite Durgapur professional', services: ['Business Events', 'Travel'], rating: 4.88, reviews: 133, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 512, name: 'Geetanjali', age: 25, location: 'Durgapur', image: '/images/profiles/Durgapur/profile-6.jpg', description: 'Graceful Bengali model', services: ['Events', 'Cultural Functions'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 29 min', availability: 'Available' },
    
    // Asansol profiles
    { id: 513, name: 'Aishwarya', age: 24, location: 'Asansol', image: '/images/profiles/Asansol/profile-1.jpg', description: 'Elegant coal city escort', services: ['Business Events', 'Dinner'], rating: 4.80, reviews: 108, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 514, name: 'Barnali', age: 26, location: 'Asansol', image: '/images/profiles/Asansol/profile-2.jpg', description: 'Sophisticated Asansol beauty', services: ['Corporate Events', 'Shopping'], rating: 4.83, reviews: 115, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 515, name: 'Chaitali', age: 23, location: 'Asansol', image: '/images/profiles/Asansol/profile-3.jpg', description: 'Charming Asansol companion', services: ['Events', 'Travel'], rating: 4.77, reviews: 99, verified: true, responseTime: '< 33 min', availability: 'Available' },
    { id: 516, name: 'Debosmita', age: 25, location: 'Asansol', image: '/images/profiles/Asansol/profile-4.jpg', description: 'Vibrant Asansol socialite', services: ['Dinner', 'Events'], rating: 4.82, reviews: 112, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 517, name: 'Ela', age: 27, location: 'Asansol', image: '/images/profiles/Asansol/profile-5.jpg', description: 'Elite Asansol professional', services: ['Business Events', 'Travel'], rating: 4.86, reviews: 127, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 518, name: 'Gargi', age: 24, location: 'Asansol', image: '/images/profiles/Asansol/profile-6.jpg', description: 'Graceful Asansol model', services: ['Events', 'Cultural Functions'], rating: 4.81, reviews: 111, verified: true, responseTime: '< 31 min', availability: 'Available' },
    
    // Nanded profiles
    { id: 519, name: 'Aarohi', age: 25, location: 'Nanded', image: '/images/profiles/Nanded/profile-1.jpg', description: 'Elegant pilgrimage city escort', services: ['Temple Tours', 'Dinner'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 520, name: 'Bhavika', age: 23, location: 'Nanded', image: '/images/profiles/Nanded/profile-2.jpg', description: 'Sophisticated Nanded beauty', services: ['Business Events', 'Shopping'], rating: 4.80, reviews: 107, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 521, name: 'Chaitali', age: 26, location: 'Nanded', image: '/images/profiles/Nanded/profile-3.jpg', description: 'Charming Maharashtra companion', services: ['Corporate Events', 'Travel'], rating: 4.86, reviews: 125, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 522, name: 'Deepali', age: 24, location: 'Nanded', image: '/images/profiles/Nanded/profile-4.jpg', description: 'Vibrant Nanded socialite', services: ['Cultural Events', 'Events'], rating: 4.81, reviews: 109, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 523, name: 'Eshwari', age: 27, location: 'Nanded', image: '/images/profiles/Nanded/profile-5.jpg', description: 'Elite Nanded professional', services: ['Business Events', 'Religious Tours'], rating: 4.88, reviews: 134, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 524, name: 'Gauri', age: 25, location: 'Nanded', image: '/images/profiles/Nanded/profile-6.jpg', description: 'Graceful Nanded model', services: ['Events', 'Cultural Functions'], rating: 4.83, reviews: 117, verified: true, responseTime: '< 29 min', availability: 'Available' },
    
    // Kolhapur profiles
    { id: 525, name: 'Aditi', age: 24, location: 'Kolhapur', image: '/images/profiles/Kolhapur/profile-1.jpg', description: 'Beautiful wrestling city escort', services: ['Cultural Events', 'Dinner'], rating: 4.84, reviews: 119, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 526, name: 'Bhavana', age: 26, location: 'Kolhapur', image: '/images/profiles/Kolhapur/profile-2.jpg', description: 'Elegant Kolhapur beauty', services: ['Temple Tours', 'Shopping'], rating: 4.87, reviews: 128, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 527, name: 'Chaitali', age: 23, location: 'Kolhapur', image: '/images/profiles/Kolhapur/profile-3.jpg', description: 'Sophisticated Kolhapur professional', services: ['Business Events', 'Travel'], rating: 4.82, reviews: 113, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 528, name: 'Deepali', age: 25, location: 'Kolhapur', image: '/images/profiles/Kolhapur/profile-4.jpg', description: 'Charming heritage city companion', services: ['Heritage Tours', 'Events'], rating: 4.85, reviews: 121, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 529, name: 'Eshwari', age: 27, location: 'Kolhapur', image: '/images/profiles/Kolhapur/profile-5.jpg', description: 'Elite Kolhapur socialite', services: ['Corporate Events', 'Dinner'], rating: 4.90, reviews: 141, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 530, name: 'Gauri', age: 24, location: 'Kolhapur', image: '/images/profiles/Kolhapur/profile-6.jpg', description: 'Graceful Kolhapur model', services: ['Events', 'Cultural Functions'], rating: 4.83, reviews: 115, verified: true, responseTime: '< 29 min', availability: 'Available' },
    
    // Ajmer profiles
    { id: 531, name: 'Anjali', age: 25, location: 'Ajmer', image: '/images/profiles/Ajmer/profile-1.jpg', description: 'Elegant holy city escort', services: ['Dargah Tours', 'Dinner'], rating: 4.85, reviews: 122, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 532, name: 'Bhavna', age: 23, location: 'Ajmer', image: '/images/profiles/Ajmer/profile-2.jpg', description: 'Sophisticated Ajmer beauty', services: ['Heritage Tours', 'Shopping'], rating: 4.82, reviews: 114, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 533, name: 'Chavi', age: 26, location: 'Ajmer', image: '/images/profiles/Ajmer/profile-3.jpg', description: 'Charming Rajasthani companion', services: ['Business Events', 'Travel'], rating: 4.88, reviews: 133, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 534, name: 'Damini', age: 24, location: 'Ajmer', image: '/images/profiles/Ajmer/profile-4.jpg', description: 'Vibrant Ajmer socialite', services: ['Cultural Events', 'Events'], rating: 4.80, reviews: 107, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 535, name: 'Esha', age: 27, location: 'Ajmer', image: '/images/profiles/Ajmer/profile-5.jpg', description: 'Elite Ajmer professional', services: ['Pushkar Tours', 'Dinner'], rating: 4.91, reviews: 145, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 536, name: 'Garima', age: 25, location: 'Ajmer', image: '/images/profiles/Ajmer/profile-6.jpg', description: 'Graceful Ajmer model', services: ['Events', 'Religious Tours'], rating: 4.84, reviews: 119, verified: true, responseTime: '< 28 min', availability: 'Available' },
    
    // Mangalore profiles
    { id: 537, name: 'Aishwarya', age: 24, location: 'Mangalore', image: '/images/profiles/Mangalore/profile-1.jpg', description: 'Beautiful coastal city escort', services: ['Beach Tours', 'Dinner'], rating: 4.87, reviews: 130, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 538, name: 'Bhavana', age: 26, location: 'Mangalore', image: '/images/profiles/Mangalore/profile-2.jpg', description: 'Elegant Mangalore beauty', services: ['Temple Tours', 'Shopping'], rating: 4.89, reviews: 138, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 539, name: 'Chandana', age: 23, location: 'Mangalore', image: '/images/profiles/Mangalore/profile-3.jpg', description: 'Sophisticated coastal companion', services: ['Business Events', 'Travel'], rating: 4.86, reviews: 126, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 540, name: 'Deepa', age: 25, location: 'Mangalore', image: '/images/profiles/Mangalore/profile-4.jpg', description: 'Charming port city socialite', services: ['Beach Events', 'Seafood Tours'], rating: 4.88, reviews: 132, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 541, name: 'Eshwari', age: 27, location: 'Mangalore', image: '/images/profiles/Mangalore/profile-5.jpg', description: 'Elite Mangalore professional', services: ['Corporate Events', 'Coastal Tours'], rating: 4.92, reviews: 148, verified: true, responseTime: '< 20 min', availability: 'Available' },
    { id: 542, name: 'Gowri', age: 24, location: 'Mangalore', image: '/images/profiles/Mangalore/profile-6.jpg', description: 'Graceful Mangalore model', services: ['Events', 'Cultural Functions'], rating: 4.87, reviews: 129, verified: true, responseTime: '< 25 min', availability: 'Available' },
  ]
      
      // Combine advertiser profiles with default escorts
      const combined = [...advertiserProfiles, ...defaultEscorts]
      setAllEscorts(combined)
    }
    
    loadAllEscorts()
    
    // Listen for profile updates
    const handleProfileUpdate = () => {
      console.log('Profiles updated, reloading all escorts')
      loadAllEscorts()
    }
    
    window.addEventListener('profilesUpdated', handleProfileUpdate)
    window.addEventListener('focus', loadAllEscorts)
    
    return () => {
      window.removeEventListener('profilesUpdated', handleProfileUpdate)
      window.removeEventListener('focus', loadAllEscorts)
    }
  }, [])

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && lightboxImage) {
        setLightboxImage(null)
      }
    }
    
    window.addEventListener('keydown', handleEscKey)
    return () => window.removeEventListener('keydown', handleEscKey)
  }, [lightboxImage])

  const locations = ['all', 'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Pune', 'Goa', 'Chennai', 'Kolkata', 'Chandigarh', 'Jaipur', 'Indore', 'Ahmedabad', 'Surat', 'Lucknow', 'Nagpur', 'Thane', 'Bhopal', 'Visakhapatnam', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivli', 'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Navi Mumbai', 'Allahabad (Prayagraj)', 'Howrah', 'Ranchi', 'Jabalpur', 'Gwalior', 'Coimbatore', 'Vijayawada', 'Jodhpur', 'Madurai', 'Raipur', 'Kota', 'Guwahati', 'Solapur', 'Hubli-Dharwad', 'Bareilly', 'Moradabad', 'Mysuru (Mysore)', 'Tiruchirappalli', 'Salem', 'Aligarh', 'Bhubaneswar', 'Jalandhar', 'Gorakhpur', 'Guntur', 'Bikaner', 'Noida', 'Firozabad', 'Jamshedpur', 'Bhavnagar', 'Cuttack', 'Kochi', 'Dehradun', 'Asansol', 'Nellore', 'Ajmer', 'Kollam', 'Mangalore']

  const filteredEscorts = useMemo(() => {
    return allEscorts.filter((escort) => {
      const locationMatch = locationFilter === 'all' || escort.location === locationFilter
      const ageMatch = escort.age >= ageRange[0] && escort.age <= ageRange[1]
      return locationMatch && ageMatch
    })
  }, [allEscorts, locationFilter, ageRange])

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
        <title>{locationFilter !== 'all' ? `${locationFilter} Escorts` : 'Escorts'} | Trusted Escort</title>
        <meta name="title" content={`${locationFilter !== 'all' ? `${locationFilter} Escorts` : 'Escorts'} | Trusted Escort`} />
        <meta name="description" content={locationFilter !== 'all' ? `Browse our exclusive verified escorts in ${locationFilter}. Premium companionship services available 24/7.` : 'Browse our selection of verified exclusive escorts across India. Premium companionship services available 24/7.'} />
        <meta name="keywords" content={locationFilter !== 'all' ? `${locationFilter} escorts, ${locationFilter} companions, premium escorts ${locationFilter}, verified escorts ${locationFilter}` : 'escorts India, premium escorts, verified companions, luxury escort service'} />
        <link rel="canonical" href={locationFilter !== 'all' ? `https://www.trustedescort.com/escorts?location=${locationFilter}` : 'https://www.trustedescort.com/escorts'} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={locationFilter !== 'all' ? `https://www.trustedescort.com/escorts?location=${locationFilter}` : 'https://www.trustedescort.com/escorts'} />
        <meta property="og:title" content={`${locationFilter !== 'all' ? `${locationFilter} Escorts` : 'Escorts'} | Trusted Escort`} />
        <meta property="og:description" content={locationFilter !== 'all' ? `Browse our exclusive escorts in ${locationFilter}` : 'Browse our selection of exclusive escorts.'} />
        <meta property="og:image" content="https://www.trustedescort.com/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Trusted Escort" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={locationFilter !== 'all' ? `https://www.trustedescort.com/escorts?location=${locationFilter}` : 'https://www.trustedescort.com/escorts'} />
        <meta property="twitter:title" content={`${locationFilter !== 'all' ? `${locationFilter} Escorts` : 'Escorts'} | Trusted Escort`} />
        <meta property="twitter:description" content={locationFilter !== 'all' ? `Browse our exclusive escorts in ${locationFilter}` : 'Browse our selection of exclusive escorts.'} />
        <meta property="twitter:image" content="https://www.trustedescort.com/og-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Trusted Escort" />
        {locationFilter !== 'all' && (
          <>
            <meta name="geo.region" content={`IN-${locationFilter.substring(0, 2).toUpperCase()}`} />
            <meta name="geo.placename" content={locationFilter} />
          </>
        )}
        
        {/* Structured Data - Service Schema */}
        {locationFilter !== 'all' && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": `Premium Escort Services in ${locationFilter}`,
              "description": `Browse our exclusive verified escorts in ${locationFilter}. Premium companionship services available 24/7.`,
              "provider": {
                "@type": "Organization",
                "name": "Trusted Escort",
                "url": "https://www.trustedescort.com"
              },
              "areaServed": {
                "@type": "City",
                "name": locationFilter,
                "addressCountry": "IN"
              },
              "serviceType": "Escort Service",
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": `https://www.trustedescort.com/escorts?location=${locationFilter}`
              }
            })}
          </script>
        )}
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.trustedescort.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Escorts",
                "item": "https://www.trustedescort.com/escorts"
              },
              ...(locationFilter !== 'all' ? [{
                "@type": "ListItem",
                "position": 3,
                "name": locationFilter,
                "item": `https://www.trustedescort.com/escorts?location=${locationFilter}`
              }] : [])
            ]
          })}
        </script>
        
        {/* ItemList Schema for Escorts */}
        {filteredEscorts.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": filteredEscorts.slice(0, 10).map((escort, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Person",
                  "name": escort.name,
                  "description": escort.description,
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": escort.rating,
                    "reviewCount": escort.reviews
                  }
                }
              }))
            })}
          </script>
        )}
        
        {/* FAQ Schema */}
        {locationFilter !== 'all' && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": `How do I book an escort in ${locationFilter}?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Booking an escort in ${locationFilter} is simple and discreet. Contact us via WhatsApp or our contact form with your preferred date, time, and any special requests. Our team will match you with available escorts in ${locationFilter} and handle all arrangements professionally.`
                  }
                },
                {
                  "@type": "Question",
                  "name": `What areas of ${locationFilter} do you cover?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `We provide comprehensive escort services across all major areas of ${locationFilter}, including premium hotels, business districts, residential areas, and airports. Our escorts can travel to your preferred location within ${locationFilter} and surrounding areas.`
                  }
                },
                {
                  "@type": "Question",
                  "name": `Are your ${locationFilter} escorts available 24/7?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Yes, our elite escort services in ${locationFilter} are available 24 hours a day, 7 days a week. Whether you need daytime companionship, evening escorts, or overnight bookings, we can accommodate your schedule in ${locationFilter}.`
                  }
                },
                {
                  "@type": "Question",
                  "name": `What makes your ${locationFilter} escort service premium?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Our ${locationFilter} escorts are carefully selected for their sophistication, elegance, and professionalism. They understand the unique lifestyle and expectations of ${locationFilter}'s elite clientele and provide exceptional companionship for business events, social gatherings, and private occasions.`
                  }
                },
                {
                  "@type": "Question",
                  "name": `How is discretion maintained in ${locationFilter}?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `We maintain the highest standards of privacy and confidentiality in ${locationFilter}. All bookings are handled discreetly, we never share client information, and our escorts are trained professionals who understand the importance of discretion in ${locationFilter}'s business and social circles.`
                  }
                }
              ]
            })}
          </script>
        )}
      </Helmet>

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-dark-card to-dark-bg border-b border-gold/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {locationFilter !== 'all' && (
              <Link 
                to={`/location/${locationFilter.toLowerCase()}`} 
                className="text-gold hover:text-gold/80 text-sm mb-4 inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to {locationFilter}
              </Link>
            )}
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              {locationFilter !== 'all' ? (
                <>
                  Premium <span className="text-gold">{locationFilter}</span> Escorts
                </>
              ) : (
                <>
                  Exclusive <span className="text-gold">Escorts</span> Across India
                </>
              )}
            </h1>
            <p className="text-xl text-gray-400">
              {locationFilter !== 'all' 
                ? `Discover verified, sophisticated companions in ${locationFilter}. Elite escort services available 24/7 for discerning clientele.`
                : 'Browse our selection of verified elite companions across India. Premium companionship services available 24/7.'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-64 flex-shrink-0"
            >
              <div className="card-glass p-6 sticky top-24">
                <h3 className="text-xl font-serif font-bold text-gold mb-6">Filters</h3>

                {/* Location Filter */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gold mb-3">
                    Location
                  </label>
                  <div className="space-y-2">
                    {locations.map((location) => (
                      <Link
                        key={location}
                        to={location === 'all' ? '/escorts' : `/escorts?location=${location}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={location === 'all' ? 'View escorts in all locations' : `View escorts in ${location}`}
                      >
                        <motion.div
                          whileHover={{ x: 5 }}
                          className={`flex items-center cursor-pointer group p-2 rounded-lg transition-colors ${
                            locationFilter === location ? 'bg-gold/10 border border-gold/30' : 'hover:bg-dark-hover'
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full mr-3 ${
                            locationFilter === location ? 'bg-gold' : 'bg-gray-500'
                          }`} />
                          <span className={`text-sm capitalize ${
                            locationFilter === location ? 'text-gold font-semibold' : 'text-gray-300 group-hover:text-gold'
                          } transition-colors`}>
                            {location === 'all' ? 'All Locations' : location}
                          </span>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Age Range Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gold mb-3">
                    Age Range: {ageRange[0]} - {ageRange[1]}
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="18"
                      max="50"
                      value={ageRange[0]}
                      onChange={(e) => {
                        const newMin = Math.min(parseInt(e.target.value), ageRange[1])
                        setAgeRange([newMin, ageRange[1]])
                      }}
                      className="w-full accent-gold"
                    />
                    <input
                      type="range"
                      min="18"
                      max="50"
                      value={ageRange[1]}
                      onChange={(e) => {
                        const newMax = Math.max(parseInt(e.target.value), ageRange[0])
                        setAgeRange([ageRange[0], newMax])
                      }}
                      className="w-full accent-gold"
                    />
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Grid */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6"
              >
                <p className="text-gray-400 text-sm">
                  Showing <span className="text-gold font-semibold">{filteredEscorts.length}</span> escorts
                  {locationFilter !== 'all' && <span> in <span className="text-gold font-semibold">{locationFilter}</span></span>}
                </p>
              </motion.div>

              {filteredEscorts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredEscorts.map((escort) => (
                    <div key={escort.id}>
                      <Link 
                        to={`/companion/${escort.id}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`View profile of ${escort.name}, ${escort.age} year old ${escort.verified ? 'verified ' : ''}escort in ${escort.location}`}
                      >
                        <div className="card-glass overflow-hidden group cursor-pointer h-full flex flex-col hover:transform hover:-translate-y-2 transition-transform duration-300">
                          {/* Image */}
                          <div className="relative h-96 overflow-hidden bg-dark-card">
                            <img
                              src={escort.image}
                              alt={`${escort.name}, ${escort.age} - ${escort.description} - ${escort.verified ? 'Verified ' : ''}Elite escort in ${escort.location} with ${escort.rating} rating`}
                              className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                              onError={(e) => {
                                e.target.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop'
                              }}
                              onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                setLightboxImage(escort.image)
                              }}
                            />
                            
                            {/* Badges Overlay */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              className="absolute top-4 right-4 flex flex-col gap-2"
                            >
                              {escort.verified && (
                                <div className="bg-green-500/20 backdrop-blur-md px-3 py-1 rounded-full text-xs text-green-300 border border-green-300/30 flex items-center gap-1">
                                  ✓ Verified
                                </div>
                              )}
                              <div className="bg-gold/20 backdrop-blur-md px-3 py-1 rounded-full text-xs text-gold border border-gold/30">
                                Age {escort.age}
                              </div>
                            </motion.div>
                          </div>

                          {/* Content */}
                          <div className="p-6 flex-grow flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-2xl font-serif font-bold text-gold flex-grow">
                                {escort.name}
                              </h3>
                              <div className="text-yellow-400 text-sm font-semibold">
                                ★ {escort.rating}
                              </div>
                            </div>
                            
                            <p className="text-xs text-gray-400 mb-2">
                              {escort.reviews} reviews
                            </p>
                            
                            <p className="text-sm text-gray-300 mb-4 line-clamp-none">
                              {escort.description}
                            </p>
                            
                            {/* Location & Availability */}
                            <div className="space-y-2 mb-4 text-sm">
                              <div className="flex items-center text-gray-300">
                                <svg className="w-3 h-3 mr-2 text-gold" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                                {escort.location}
                              </div>
                              <div className="flex items-center text-green-300">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                                {escort.availability}
                              </div>
                              <div className="flex items-center text-gray-400">
                                <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00-.293.707l-2.828 2.829a1 1 0 101.415 1.415L9 10.414V6z" />
                                </svg>
                                Responds {escort.responseTime}
                              </div>
                            </div>

                            {/* Services */}
                            <div className="mb-4 flex flex-wrap gap-2">
                              {escort.services.map((service, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs px-3 py-1.5 bg-gold/10 text-gold rounded border border-gold/20"
                                >
                                  {service}
                                </span>
                              ))}
                            </div>

                            <motion.button
                              whileHover={{ x: 5 }}
                              className="text-gold text-sm font-semibold hover:text-gold/80 transition-colors mt-auto"
                            >
                              View Profile →
                            </motion.button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No escorts match your filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Features Section */}
      {locationFilter !== 'all' && (
        <section className="py-20 bg-dark-bg border-t border-gold/10">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-serif font-bold text-gold mb-4">
                Premium Escort Services in {locationFilter}
              </h2>
              <p className="text-xl text-gray-300">
                Discover the exclusive features of our {locationFilter} escort service
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {[
                {
                  icon: '🌟',
                  title: 'Elite Selection',
                  description: `Handpicked premium escorts in ${locationFilter} verified for authenticity, elegance, and sophistication. Each companion undergoes rigorous screening to ensure the highest quality standards.`
                },
                {
                  icon: '🔒',
                  title: 'Complete Discretion',
                  description: `Absolute privacy guaranteed for all ${locationFilter} bookings. Your personal information is encrypted and never shared. All meetings are handled with utmost confidentiality and professionalism.`
                },
                {
                  icon: '⏰',
                  title: '24/7 Availability',
                  description: `Round-the-clock escort services in ${locationFilter}. Book anytime for immediate or advance appointments. Our team is always ready to assist you with urgent requirements.`
                },
                {
                  icon: '💎',
                  title: 'Luxury Experience',
                  description: `Premium companionship tailored to your preferences in ${locationFilter}. From corporate events to private dinners, enjoy sophisticated company that matches your lifestyle and expectations.`
                },
                {
                  icon: '✈️',
                  title: 'Travel Companions',
                  description: `Escorts available for domestic and international travel from ${locationFilter}. Perfect companions for business trips, vacations, or special events requiring elegant company.`
                },
                {
                  icon: '🎭',
                  title: 'Event Partners',
                  description: `Professional escorts for corporate events, galas, and social functions in ${locationFilter}. Make a lasting impression with a sophisticated companion by your side.`
                },
                {
                  icon: '💬',
                  title: 'Instant Response',
                  description: `Quick response times for all ${locationFilter} inquiries. Most escorts respond within 15-30 minutes. Our support team is available via WhatsApp for immediate assistance.`
                },
                {
                  icon: '✓',
                  title: 'Verified Profiles',
                  description: `All ${locationFilter} escorts are verified with authentic photos and accurate descriptions. Blue checkmark indicates completed verification including ID, age, and background checks.`
                },
                {
                  icon: '🏨',
                  title: 'Hotel Services',
                  description: `Seamless outcall services to all major hotels in ${locationFilter}. Discreet arrivals and departures. Familiar with premium hotels and understand their protocols perfectly.`
                },
                {
                  icon: '💳',
                  title: 'Flexible Payments',
                  description: `Multiple secure payment options in ${locationFilter} including cash, bank transfers, and digital payments (UPI, Paytm, Google Pay). Clear pricing with no hidden charges.`
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="card-glass p-6"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-gold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-12"
            >
              <Link to="/contact" aria-label={`Contact us to book escorts in ${locationFilter}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-gold"
                  type="button"
                >
                  Contact Us Now
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {locationFilter !== 'all' && (
        <section className="py-20 bg-dark-card border-t border-gold/10">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-serif font-bold text-gold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Common questions about our escort services in {locationFilter}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                {
                  question: `How do I book an escort in ${locationFilter}?`,
                  answer: `Booking an escort in ${locationFilter} is simple and discreet. Contact us via WhatsApp or our contact form with your preferred date, time, and any special requests. Our team will match you with available escorts in ${locationFilter} and handle all arrangements professionally.`
                },
                {
                  question: `What areas of ${locationFilter} do you cover?`,
                  answer: `We provide comprehensive escort services across all major areas of ${locationFilter}, including premium hotels, business districts, residential areas, and airports. Our escorts can travel to your preferred location within ${locationFilter} and surrounding areas.`
                },
                {
                  question: `Are your ${locationFilter} escorts available 24/7?`,
                  answer: `Yes, our elite escort services in ${locationFilter} are available 24 hours a day, 7 days a week. Whether you need daytime companionship, evening escorts, or overnight bookings, we can accommodate your schedule in ${locationFilter}.`
                },
                {
                  question: `What makes your ${locationFilter} escort service premium?`,
                  answer: `Our ${locationFilter} escorts are carefully selected for their sophistication, elegance, and professionalism. They understand the unique lifestyle and expectations of ${locationFilter}'s elite clientele and provide exceptional companionship for business events, social gatherings, and private occasions.`
                },
                {
                  question: `How is discretion maintained in ${locationFilter}?`,
                  answer: `We maintain the highest standards of privacy and confidentiality in ${locationFilter}. All bookings are handled discreetly, we never share client information, and our escorts are trained professionals who understand the importance of discretion in ${locationFilter}'s business and social circles.`
                },
                {
                  question: `Can I request a specific escort from your ${locationFilter} gallery?`,
                  answer: `Absolutely! Browse our ${locationFilter} escort gallery and request your preferred companion. We'll confirm their availability for your desired date and time in ${locationFilter} and arrange all the details for your meeting.`
                },
                {
                  question: `What services are included with ${locationFilter} escorts?`,
                  answer: `Our ${locationFilter} escorts provide sophisticated companionship for various occasions including business dinners, corporate events, social gatherings, travel companionship, and private meetings. Services are customized based on your specific requirements in ${locationFilter}.`
                },
                {
                  question: `How far in advance should I book in ${locationFilter}?`,
                  answer: `For best availability in ${locationFilter}, we recommend booking at least 24-48 hours in advance. However, we also accommodate last-minute bookings based on escort availability in ${locationFilter}. Contact us to check immediate availability.`
                },
                {
                  question: `What payment methods do you accept in ${locationFilter}?`,
                  answer: `We accept multiple secure payment methods in ${locationFilter} including cash, bank transfers, and digital payments. Complete payment details and terms will be provided during your booking confirmation for ${locationFilter} services.`
                },
                {
                  question: `Do you offer both outcall and incall services in ${locationFilter}?`,
                  answer: `Yes, we provide both outcall services (escort visits your location) and incall services (you visit a designated location) in ${locationFilter}. Most clients in ${locationFilter} prefer outcall services to their hotel or private residence.`
                },
                {
                  question: `Can ${locationFilter} escorts accompany me for travel or events?`,
                  answer: `Certainly! Our ${locationFilter} escorts are available for travel companionship within the city and beyond, including domestic and international trips. They can also accompany you to social events, corporate functions, and special occasions in ${locationFilter}.`
                },
                {
                  question: `What is your cancellation policy in ${locationFilter}?`,
                  answer: `We understand that plans can change. Please contact us at least 4 hours before your scheduled appointment in ${locationFilter} to cancel or reschedule. Our complete cancellation policy will be explained during your booking confirmation.`
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border border-gold/20 rounded-lg overflow-hidden bg-dark-card/50"
                >
                  <button
                    onClick={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gold/5 transition-colors"
                    aria-expanded={openFAQIndex === index}
                    aria-controls={`faq-answer-${index}`}
                    type="button"
                  >
                    <span className="text-white font-semibold pr-4">{faq.question}</span>
                    <motion.svg
                      animate={{ rotate: openFAQIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 text-gold flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {openFAQIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div id={`faq-answer-${index}`} className="px-6 pb-4 pt-2 text-gray-400 leading-relaxed border-t border-gold/10">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-10"
            >
              <p className="text-gray-400 mb-4">Have more questions?</p>
              <Link to="/faq" aria-label="View all frequently asked questions about our escort services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-gold"
                  type="button"
                >
                  View All FAQs
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 bg-gold/20 hover:bg-gold/40 backdrop-blur-md p-3 rounded-full text-gold transition-colors z-[101]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              aria-label="Close image preview"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
            
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={lightboxImage}
              alt="Full size preview of escort profile image"
              className="max-w-full max-h-full object-contain cursor-default"
              onClick={(e) => e.stopPropagation()}
              loading="eager"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Escorts
