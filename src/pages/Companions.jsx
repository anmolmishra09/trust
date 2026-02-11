import React, { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

function Escorts() {
  const [searchParams] = useSearchParams()
  const [locationFilter, setLocationFilter] = useState('all')
  const [ageRange, setAgeRange] = useState([18, 40])

  // Check for location query parameter and set filter
  useEffect(() => {
    const locationParam = searchParams.get('location')
    if (locationParam) {
      setLocationFilter(locationParam)
    }
  }, [searchParams])

  const escorts = [
    {
      id: 1,
      name: 'Sakshi',
      age: 24,
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=500&fit=crop',
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
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop',
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
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1520293591298-1b434c919eba?w=500&h=500&fit=crop',
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
      location: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1506277886241-b8a9ad009800?w=500&h=500&fit=crop',
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
      location: 'Pune',
      image: 'https://images.unsplash.com/photo-1462332420958-a05d1e741341?w=500&h=500&fit=crop',
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
      location: 'Goa',
      image: 'https://images.unsplash.com/photo-1474552220723-9a0aca6ce338?w=500&h=500&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=500&fit=crop',
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
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop',
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
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1520293591298-1b434c919eba?w=500&h=500&fit=crop',
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
      location: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop',
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
      location: 'Pune',
      image: 'https://images.unsplash.com/photo-1547867881-7be82e1319cc?w=500&h=500&fit=crop',
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
      location: 'Goa',
      image: 'https://images.unsplash.com/photo-1520293591298-1b434c919eba?w=500&h=500&fit=crop',
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
      location: 'Chennai',
      image: 'https://images.unsplash.com/photo-1462332420958-a05d1e741341?w=500&h=500&fit=crop',
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
      location: 'Kolkata',
      image: 'https://images.unsplash.com/photo-1506277886241-b8a9ad009800?w=500&h=500&fit=crop',
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
      location: 'Chandigarh',
      image: 'https://images.unsplash.com/photo-1474552220723-9a0aca6ce338?w=500&h=500&fit=crop',
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
      location: 'Jaipur',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop',
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
      location: 'Indore',
      image: 'https://images.unsplash.com/photo-1547867881-7be82e1319cc?w=500&h=500&fit=crop',
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
      location: 'Ahmedabad',
      image: 'https://images.unsplash.com/photo-1462332420958-a05d1e741341?w=500&h=500&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1474552220723-9a0aca6ce338?w=500&h=500&fit=crop',
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
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?w=500&h=500&fit=crop',
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
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1506277886241-b8a9ad009800?w=500&h=500&fit=crop',
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
      location: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1538391846015-35a9af4eae37?w=500&h=500&fit=crop',
      description: 'Tech city sophistication with modern outlook',
      services: ['Dinner', 'Nightlife', 'Corporate Events'],
      rating: 4.91,
      reviews: 152,
      verified: true,
      responseTime: '< 22 min',
      availability: 'Available Today',
    },
    // Additional Mumbai profiles
    { id: 23, name: 'Tanvi', age: 25, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=500&fit=crop', description: 'Sophisticated Mumbai model', services: ['Events', 'Entertainment'], rating: 4.82, reviews: 115, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 24, name: 'Aditi', age: 23, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=500&fit=crop', description: 'Glamorous Bollywood aspirant', services: ['Dinner', 'Nightlife'], rating: 4.77, reviews: 98, verified: true, responseTime: '< 40 min', availability: 'Available' },
    { id: 25, name: 'Zoya', age: 27, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=500&fit=crop', description: 'Elegant Mumbai socialite', services: ['Corporate Events', 'Travel'], rating: 4.90, reviews: 140, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 26, name: 'Myra', age: 24, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&h=500&fit=crop', description: 'Charming Mumbai entertainer', services: ['Dinner', 'Events'], rating: 4.75, reviews: 87, verified: true, responseTime: '< 45 min', availability: 'Available' },
    { id: 27, name: 'Tara', age: 26, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop', description: 'Sophisticated finance professional', services: ['Corporate Events', 'Dinner'], rating: 4.88, reviews: 132, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 28, name: 'Alisha', age: 22, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=500&fit=crop', description: 'Young vibrant Mumbai beauty', services: ['Nightlife', 'Entertainment'], rating: 4.70, reviews: 75, verified: true, responseTime: '< 50 min', availability: 'Available' },
    { id: 29, name: 'Naina', age: 28, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop', description: 'Mature Mumbai executive companion', services: ['Travel', 'Corporate Events'], rating: 4.93, reviews: 165, verified: true, responseTime: '< 20 min', availability: 'Available' },
    { id: 30, name: 'Jiya', age: 25, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop', description: 'Elegant Mumbai fashion model', services: ['Events', 'Shopping'], rating: 4.85, reviews: 118, verified: true, responseTime: '< 32 min', availability: 'Available' },
    // Additional Delhi profiles
    { id: 31, name: 'Kavita', age: 27, location: 'Delhi', image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=500&h=500&fit=crop', description: 'Sophisticated Delhi intellectual', services: ['Dinner', 'Cultural Events'], rating: 4.89, reviews: 138, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 32, name: 'Sanya', age: 24, location: 'Delhi', image: 'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=500&h=500&fit=crop', description: 'Charming Delhi university graduate', services: ['Travel', 'Events'], rating: 4.76, reviews: 102, verified: true, responseTime: '< 38 min', availability: 'Available' },
    { id: 33, name: 'Aradhya', age: 26, location: 'Delhi', image: 'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=500&h=500&fit=crop', description: 'Elite Delhi socialite', services: ['Corporate Events', 'Dinner'], rating: 4.91, reviews: 155, verified: true, responseTime: '< 18 min', availability: 'Available' },
    { id: 34, name: 'Mahira', age: 23, location: 'Delhi', image: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&h=500&fit=crop', description: 'Vibrant Delhi artist', services: ['Nightlife', 'Entertainment'], rating: 4.72, reviews: 89, verified: true, responseTime: '< 42 min', availability: 'Available' },
    { id: 35, name: 'Saanvi', age: 25, location: 'Delhi', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=500&fit=crop', description: 'Elegant Delhi professional', services: ['Dinner', 'Travel'], rating: 4.87, reviews: 126, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 36, name: 'Palak', age: 28, location: 'Delhi', image: 'https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?w=500&h=500&fit=crop', description: 'Sophisticated Delhi ambassador', services: ['Corporate Events', 'Cultural Events'], rating: 4.94, reviews: 172, verified: true, responseTime: '< 15 min', availability: 'Available' },
    { id: 37, name: 'Shanaya', age: 24, location: 'Delhi', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop', description: 'Charming Delhi fashion designer', services: ['Shopping', 'Events'], rating: 4.80, reviews: 110, verified: true, responseTime: '< 33 min', availability: 'Available' },
    { id: 38, name: 'Kirti', age: 22, location: 'Delhi', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&h=500&fit=crop', description: 'Young Delhi beauty', services: ['Nightlife', 'Dinner'], rating: 4.68, reviews: 72, verified: true, responseTime: '< 48 min', availability: 'Available' },
    // Additional Bangalore profiles
    { id: 39, name: 'Aanya', age: 25, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1507081323647-4d250478b919?w=500&h=500&fit=crop', description: 'Tech-savvy Bangalore professional', services: ['Corporate Events', 'Travel'], rating: 4.83, reviews: 119, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 40, name: 'Pari', age: 23, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=500&h=500&fit=crop', description: 'Vibrant Bangalore entrepreneur', services: ['Dinner', 'Events'], rating: 4.78, reviews: 95, verified: true, responseTime: '< 36 min', availability: 'Available' },
    { id: 41, name: 'Avni', age: 26, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1542178243-bc20204b769f?w=500&h=500&fit=crop', description: 'Elegant Bangalore yoga instructor', services: ['Travel', 'Escortship'], rating: 4.85, reviews: 128, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 42, name: 'Inaya', age: 24, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=500&h=500&fit=crop', description: 'Charming Bangalore software engineer', services: ['Corporate Events', 'Dinner'], rating: 4.81, reviews: 107, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 43, name: 'Mishka', age: 27, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=500&h=500&fit=crop', description: 'Sophisticated Bangalore consultant', services: ['Corporate Events', 'Travel'], rating: 4.90, reviews: 143, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 44, name: 'Navya', age: 22, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=500&fit=crop', description: 'Young Bangalore blogger', services: ['Events', 'Nightlife'], rating: 4.74, reviews: 85, verified: true, responseTime: '< 41 min', availability: 'Available' },
    { id: 45, name: 'Reya', age: 25, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?w=500&h=500&fit=crop', description: 'Elegant Bangalore model', services: ['Events', 'Shopping'], rating: 4.86, reviews: 122, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 46, name: 'Nitya', age: 28, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=500&h=500&fit=crop', description: 'Mature Bangalore executive', services: ['Corporate Events', 'Dinner'], rating: 4.92, reviews: 159, verified: true, responseTime: '< 19 min', availability: 'Available' },
    // Additional Hyderabad profiles  
    { id: 47, name: 'Lavanya', age: 24, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=500&h=500&fit=crop', description: 'Graceful Hyderabad classical dancer', services: ['Cultural Events', 'Dinner'], rating: 4.84, reviews: 117, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 48, name: 'Anika', age: 23, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=500&h=500&fit=crop', description: 'Charming Hyderabad IT professional', services: ['Corporate Events', 'Travel'], rating: 4.79, reviews: 101, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 49, name: 'Trisha', age: 26, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=500&h=500&fit=crop', description: 'Sophisticated Hyderabad architect', services: ['Dinner', 'Events'], rating: 4.88, reviews: 134, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 50, name: 'Reet', age: 25, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=500&h=500&fit=crop', description: 'Vibrant Hyderabad entrepreneur', services: ['Corporate Events', 'Nightlife'], rating: 4.82, reviews: 113, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 51, name: 'Suhana', age: 27, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=500&h=500&fit=crop', description: 'Elegant Hyderabad fashion model', services: ['Events', 'Shopping'], rating: 4.90, reviews: 147, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 52, name: 'Aarohi', age: 24, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=500&h=500&fit=crop', description: 'Charming Hyderabad singer', services: ['Entertainment', 'Events'], rating: 4.77, reviews: 96, verified: true, responseTime: '< 37 min', availability: 'Available' },
    { id: 53, name: 'Anushka', age: 22, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=500&h=500&fit=crop', description: 'Young Hyderabad influencer', services: ['Nightlife', 'Events'], rating: 4.71, reviews: 82, verified: true, responseTime: '< 43 min', availability: 'Available' },
    { id: 54, name: 'Mira', age: 28, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop', description: 'Mature Hyderabad doctor', services: ['Dinner', 'Corporate Events'], rating: 4.93, reviews: 164, verified: true, responseTime: '< 18 min', availability: 'Available' },
    // Additional Pune profiles
    { id: 55, name: 'Aradhana', age: 25, location: 'Pune', image: 'https://images.unsplash.com/photo-1598550487042-b5345c08c4c5?w=500&h=500&fit=crop', description: 'Sophisticated Pune professor', services: ['Cultural Events', 'Dinner'], rating: 4.86, reviews: 125, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 56, name: 'Diya', age: 23, location: 'Pune', image: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?w=500&h=500&fit=crop', description: 'Charming Pune artist', services: ['Events', 'Shopping'], rating: 4.79, reviews: 104, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 57, name: 'Ishika', age: 26, location: 'Pune', image: 'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=500&h=500&fit=crop', description: 'Elegant Pune lawyer', services: ['Corporate Events', 'Dinner'], rating: 4.89, reviews: 139, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 58, name: 'Kriti', age: 24, location: 'Pune', image: 'https://images.unsplash.com/photo-1619895092538-128341789043?w=500&h=500&fit=crop', description: 'Vibrant Pune journalist', services: ['Dinner', 'Travel'], rating: 4.81, reviews: 111, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 59, name: 'Sanvi', age: 27, location: 'Pune', image: 'https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=500&h=500&fit=crop', description: 'Sophisticated Pune entrepreneur', services: ['Corporate Events', 'Travel'], rating: 4.91, reviews: 150, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 60, name: 'Tanya', age: 22, location: 'Pune', image: 'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=500&h=500&fit=crop', description: 'Young Pune dancer', services: ['Events', 'Entertainment'], rating: 4.73, reviews: 88, verified: true, responseTime: '< 40 min', availability: 'Available' },
    { id: 61, name: 'Vrinda', age: 25, location: 'Pune', image: 'https://images.unsplash.com/photo-159180485268-e7d89a869d5e?w=500&h=500&fit=crop', description: 'Elegant Pune fashion designer', services: ['Shopping', 'Events'], rating: 4.84, reviews: 120, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 62, name: 'Yasmin', age: 28, location: 'Pune', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&h=500&fit=crop', description: 'Mature Pune executive', services: ['Corporate Events', 'Dinner'], rating: 4.92, reviews: 161, verified: true, responseTime: '< 19 min', availability: 'Available' },
    // Chennai profiles
    { id: 63, name: 'Deepika', age: 24, location: 'Chennai', image: 'https://images.unsplash.com/photo-1548139086-8d9943c99ceb?w=500&h=500&fit=crop', description: 'Graceful Chennai classical dancer', services: ['Cultural Events', 'Dinner'], rating: 4.85, reviews: 121, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 64, name: 'Lakshmi', age: 25, location: 'Chennai', image: 'https://images.unsplash.com/photo-1598343146174-ab46aa4195ad?w=500&h=500&fit=crop', description: 'Elegant Chennai software engineer', services: ['Corporate Events', 'Travel'], rating: 4.87, reviews: 129, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 65, name: 'Shalini', age: 26, location: 'Chennai', image: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=500&h=500&fit=crop', description: 'Sophisticated Chennai doctor', services: ['Dinner', 'Corporate Events'], rating: 4.91, reviews: 148, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 66, name: 'Archana', age: 23, location: 'Chennai', image: 'https://images.unsplash.com/photo-1622022720859-c75c5ee83c37?w=500&h=500&fit=crop', description: 'Charming Chennai model', services: ['Events', 'Shopping'], rating: 4.78, reviews: 99, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 67, name: 'Mythili', age: 27, location: 'Chennai', image: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=500&h=500&fit=crop', description: 'Vibrant Chennai entrepreneur', services: ['Corporate Events', 'Dinner'], rating: 4.89, reviews: 137, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 68, name: 'Priyanka', age: 22, location: 'Chennai', image: 'https://images.unsplash.com/photo-1592621385612-4d7129426394?w=500&h=500&fit=crop', description: 'Young Chennai actress', services: ['Entertainment', 'Events'], rating: 4.72, reviews: 84, verified: true, responseTime: '< 42 min', availability: 'Available' },
    { id: 69, name: 'Swathi', age: 25, location: 'Chennai', image: 'https://images.unsplash.com/photo-1606814893907-c2e42943c91fc?w=500&h=500&fit=crop', description: 'Elegant Chennai lawyer', services: ['Corporate Events', 'Dinner'], rating: 4.86, reviews: 124, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 70, name: 'Vaishnavi', age: 28, location: 'Chennai', image: 'https://images.unsplash.com/photo-1602442259296-389e69d06803?w=500&h=500&fit=crop', description: 'Mature Chennai professor', services: ['Cultural Events', 'Dinner'], rating: 4.93, reviews: 166, verified: true, responseTime: '< 18 min', availability: 'Available' },
    // Goa profiles
    { id: 71, name: 'Luna', age: 23, location: 'Goa', image: 'https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?w=500&h=500&fit=crop', description: 'Free-spirited Goa beach beauty', services: ['Nightlife', 'Travel'], rating: 4.76, reviews: 94, verified: true, responseTime: '< 38 min', availability: 'Available' },
    { id: 72, name: 'Maya', age: 24, location: 'Goa', image: 'https://images.unsplash.com/photo-1561677843-39dee7a319ca?w=500&h=500&fit=crop', description: 'Vibrant Goa DJ', services: ['Nightlife', 'Entertainment'], rating: 4.71, reviews: 81, verified: true, responseTime: '< 44 min', availability: 'Available' },
    { id: 73, name: 'Kiara', age: 25, location: 'Goa', image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=500&h=500&fit=crop', description: 'Elegant Goa event planner', services: ['Events', 'Travel'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 74, name: 'Sara', age: 26, location: 'Goa', image: 'https://images.unsplash.com/photo-1525096650203-75a929e75d08?w=500&h=500&fit=crop', description: 'Sophisticated Goa yoga instructor', services: ['Travel', 'Escortship'], rating: 4.88, reviews: 131, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 75, name: 'Rina', age: 22, location: 'Goa', image: 'https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=500&h=500&fit=crop', description: 'Young Goa surfer girl', services: ['Nightlife', 'Entertainment'], rating: 4.68, reviews: 73, verified: true, responseTime: '< 50 min', availability: 'Available' },
    { id: 76, name: 'Alia', age: 27, location: 'Goa', image: 'https://images.unsplash.com/photo-1569443693539-175ea9f007e8?w=500&h=500&fit=crop', description: 'Charming Goa restaurateur', services: ['Dinner', 'Events'], rating: 4.85, reviews: 123, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 77, name: 'Bella', age: 24, location: 'Goa', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&h=500&fit=crop', description: 'Elegant Goa travel blogger', services: ['Travel', 'Events'], rating: 4.80, reviews: 108, verified: true, responseTime: '< 33 min', availability: 'Available' },
    { id: 78, name: 'Zara', age: 28, location: 'Goa', image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=500&h=500&fit=crop', description: 'Mature Goa artist', services: ['Cultural Events', 'Dinner'], rating: 4.90, reviews: 145, verified: true, responseTime: '< 23 min', availability: 'Available' },
    // Kolkata profiles
    { id: 79, name: 'Roshni', age: 25, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1590650046871-92c887180603?w=500&h=500&fit=crop', description: 'Artistic Kolkata poet', services: ['Cultural Events', 'Dinner'], rating: 4.87, reviews: 127, verified: true, responseTime: '< 27 min', availability: 'Available' },
    { id: 80, name: 'Mitali', age: 24, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=500&h=500&fit=crop', description: 'Graceful Kolkata classical dancer', services: ['Cultural Events', 'Events'], rating: 4.84, reviews: 119, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 81, name: 'Payal', age: 26, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=500&h=500&fit=crop', description: 'Sophisticated Kolkata journalist', services: ['Dinner', 'Corporate Events'], rating: 4.90, reviews: 142, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 82, name: 'Ankita', age: 23, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1515191107209-c28698631303?w=500&h=500&fit=crop', description: 'Charming Kolkata model', services: ['Events', 'Shopping'], rating: 4.77, reviews: 97, verified: true, responseTime: '< 36 min', availability: 'Available' },
    { id: 83, name: 'Ritu', age: 27, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1546539782-6fc531453083?w=500&h=500&fit=crop', description: 'Elegant Kolkata entrepreneur', services: ['Corporate Events', 'Travel'], rating: 4.89, reviews: 136, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 84, name: 'Nandini', age: 22, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=500&fit=crop', description: 'Young Kolkata singer', services: ['Entertainment', 'Events'], rating: 4.70, reviews: 79, verified: true, responseTime: '< 45 min', availability: 'Available' },
    { id: 85, name: 'Sonali', age: 25, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1499651681375-8afc5b4db253?w=500&h=500&fit=crop', description: 'Vibrant Kolkata fashion designer', services: ['Shopping', 'Events'], rating: 4.83, reviews: 114, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 86, name: 'Shreeja', age: 28, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&h=500&fit=crop', description: 'Mature Kolkata professor', services: ['Cultural Events', 'Dinner'], rating: 4.92, reviews: 157, verified: true, responseTime: '< 20 min', availability: 'Available' },
    // Surat profiles
    { id: 87, name: 'Jinal', age: 24, location: 'Surat', image: 'https://images.unsplash.com/photo-1511548774318-563182fe8d03?w=500&h=500&fit=crop', description: 'Elegant Surat diamond trader', services: ['Dinner', 'Shopping'], rating: 4.81, reviews: 106, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 88, name: 'Hiral', age: 25, location: 'Surat', image: 'https://images.unsplash.com/photo-1527736947477-2790e28f3443?w=500&h=500&fit=crop', description: 'Sophisticated Surat textile designer', services: ['Corporate Events', 'Events'], rating: 4.86, reviews: 122, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 89, name: 'Khushi', age: 23, location: 'Surat', image: 'https://images.unsplash.com/photo-1554103493-aa502084d8cf?w=500&h=500&fit=crop', description: 'Vibrant Surat entrepreneur', services: ['Dinner', 'Travel'], rating: 4.78, reviews: 93, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 90, name: 'Riddhi', age: 26, location: 'Surat', image: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=500&h=500&fit=crop', description: 'Charming Surat fashion model', services: ['Events', 'Shopping'], rating: 4.84, reviews: 117, verified: true, responseTime: '< 30 min', availability: 'Available' },
    // Lucknow profiles
    { id: 91, name: 'Aaradhya', age: 25, location: 'Lucknow', image: 'https://images.unsplash.com/photo-1532170579297-281918c8ae72?w=500&h=500&fit=crop', description: 'Graceful Lucknow kathak dancer', services: ['Cultural Events', 'Dinner'], rating: 4.88, reviews: 130, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 92, name: 'Khushbu', age: 24, location: 'Lucknow', image: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?w=500&h=500&fit=crop', description: 'Elegant Lucknow lawyer', services: ['Corporate Events', 'Dinner'], rating: 4.85, reviews: 120, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 93, name: 'Fiza', age: 26, location: 'Lucknow', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&h=500&fit=crop', description: 'Sophisticated Lucknow entrepreneur', services: ['Corporate Events', 'Travel'], rating: 4.90, reviews: 141, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 94, name: 'Noor', age: 23, location: 'Lucknow', image: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?w=500&h=500&fit=crop', description: 'Charming Lucknow artist', services: ['Events', 'Cultural Events'], rating: 4.76, reviews: 92, verified: true, responseTime: '< 37 min', availability: 'Available' },
    // Nagpur profiles
    { id: 95, name: 'Vidya', age: 24, location: 'Nagpur', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=500&fit=crop', description: 'Elegant Nagpur professor', services: ['Cultural Events', 'Dinner'], rating: 4.82, reviews: 109, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 96, name: 'Mansi', age: 25, location: 'Nagpur', image: 'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=500&h=500&fit=crop', description: 'Sophisticated Nagpur doctor', services: ['Dinner', 'Corporate Events'], rating: 4.87, reviews: 126, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 97, name: 'Garima', age: 26, location: 'Nagpur', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=500&fit=crop', description: 'Vibrant Nagpur entrepreneur', services: ['Corporate Events', 'Travel'], rating: 4.89, reviews: 133, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 98, name: 'Harshita', age: 23, location: 'Nagpur', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=500&fit=crop', description: 'Charming Nagpur journalist', services: ['Dinner', 'Events'], rating: 4.75, reviews: 88, verified: true, responseTime: '< 39 min', availability: 'Available' },
    // Additional Mumbai profiles (to reach 16)
    { id: 99, name: 'Niyati', age: 27, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=500&fit=crop', description: 'Elegant Mumbai corporate executive', services: ['Corporate Events', 'Dinner'], rating: 4.89, reviews: 136, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 100, name: 'Radhika', age: 25, location: 'Mumbai', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&h=500&fit=crop', description: 'Sophisticated Mumbai architect', services: ['Corporate Events', 'Travel'], rating: 4.86, reviews: 123, verified: true, responseTime: '< 27 min', availability: 'Available' },
    // Additional Delhi profiles (to reach 16)
    { id: 101, name: 'Ruhani', age: 25, location: 'Delhi', image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=500&h=500&fit=crop', description: 'Charming Delhi diplomat', services: ['Corporate Events', 'Cultural Events'], rating: 4.88, reviews: 131, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 102, name: 'Tanu', age: 24, location: 'Delhi', image: 'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=500&h=500&fit=crop', description: 'Vibrant Delhi host', services: ['Events', 'Entertainment'], rating: 4.79, reviews: 103, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 103, name: 'Urvi', age: 27, location: 'Delhi', image: 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=500&h=500&fit=crop', description: 'Elegant Delhi consultant', services: ['Corporate Events', 'Dinner'], rating: 4.90, reviews: 144, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 104, name: 'Vaani', age: 23, location: 'Delhi', image: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=500&h=500&fit=crop', description: 'Sophisticated Delhi marketing manager', services: ['Corporate Events', 'Travel'], rating: 4.84, reviews: 119, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 105, name: 'Yashika', age: 26, location: 'Delhi', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop', description: 'Charming Delhi entrepreneur', services: ['Corporate Events', 'Dinner'], rating: 4.87, reviews: 127, verified: true, responseTime: '< 26 min', availability: 'Available' },
    // Additional Bangalore profiles (to reach 16)
    { id: 106, name: 'Bhavya', age: 24, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1598550487042-b5345c08c4c5?w=500&h=500&fit=crop', description: 'Tech-savvy Bangalore product manager', services: ['Corporate Events', 'Travel'], rating: 4.82, reviews: 112, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 107, name: 'Devika', age: 25, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?w=500&h=500&fit=crop', description: 'Sophisticated Bangalore data scientist', services: ['Corporate Events', 'Dinner'], rating: 4.88, reviews: 133, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 108, name: 'Eshita', age: 26, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=500&h=500&fit=crop', description: 'Vibrant Bangalore startup founder', services: ['Corporate Events', 'Events'], rating: 4.90, reviews: 146, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 109, name: 'Falak', age: 23, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1619895092538-128341789043?w=500&h=500&fit=crop', description: 'Charming Bangalore fitness trainer', services: ['Travel', 'Events'], rating: 4.76, reviews: 96, verified: true, responseTime: '< 36 min', availability: 'Available' },
    { id: 110, name: 'Gayatri', age: 27, location: 'Bangalore', image: 'https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=500&h=500&fit=crop', description: 'Elegant Bangalore architect', services: ['Corporate Events', 'Cultural Events'], rating: 4.89, reviews: 138, verified: true, responseTime: '< 23 min', availability: 'Available' },
    // Additional Hyderabad profiles (to reach 16)
    { id: 111, name: 'Hema', age: 25, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=500&h=500&fit=crop', description: 'Sophisticated Hyderabad pharmacist', services: ['Dinner', 'Corporate Events'], rating: 4.85, reviews: 121, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 112, name: 'Jahnavi', age: 24, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1548139086-8d9943c99ceb?w=500&h=500&fit=crop', description: 'Graceful Hyderabad traditional dancer', services: ['Cultural Events', 'Events'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 113, name: 'Keerthi', age: 26, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1598343146174-ab46aa4195ad?w=500&h=500&fit=crop', description: 'Elegant Hyderabad banker', services: ['Corporate Events', 'Dinner'], rating: 4.88, reviews: 130, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 114, name: 'Leela', age: 23, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=500&h=500&fit=crop', description: 'Vibrant Hyderabad graphic designer', services: ['Events', 'Shopping'], rating: 4.78, reviews: 100, verified: true, responseTime: '< 35 min', availability: 'Available' },
    { id: 115, name: 'Manisha', age: 27, location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1622022720859-c75c5ee83c37?w=500&h=500&fit=crop', description: 'Sophisticated Hyderabad lawyer', services: ['Corporate Events', 'Dinner'], rating: 4.91, reviews: 149, verified: true, responseTime: '< 21 min', availability: 'Available' },
    // Additional Pune profiles (to reach 16)
    { id: 116, name: 'Nidhi', age: 24, location: 'Pune', image: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=500&h=500&fit=crop', description: 'Charming Pune software developer', services: ['Corporate Events', 'Travel'], rating: 4.80, reviews: 107, verified: true, responseTime: '< 33 min', availability: 'Available' },
    { id: 117, name: 'Oorja', age: 25, location: 'Pune', image: 'https://images.unsplash.com/photo-1592621385612-4d7129426394?w=500&h=500&fit=crop', description: 'Elegant Pune researcher', services: ['Cultural Events', 'Dinner'], rating: 4.86, reviews: 124, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 118, name: 'Pihu', age: 26, location: 'Pune', image: 'https://images.unsplash.com/photo-1602442259296-389e69d06803?w=500&h=500&fit=crop', description: 'Sophisticated Pune marketing executive', services: ['Corporate Events', 'Events'], rating: 4.89, reviews: 135, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 119, name: 'Ridhi', age: 23, location: 'Pune', image: 'https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?w=500&h=500&fit=crop', description: 'Vibrant Pune photographer', services: ['Events', 'Travel'], rating: 4.77, reviews: 98, verified: true, responseTime: '< 36 min', availability: 'Available' },
    { id: 120, name: 'Sahana', age: 27, location: 'Pune', image: 'https://images.unsplash.com/photo-1561677843-39dee7a319ca?w=500&h=500&fit=crop', description: 'Charming Pune consultant', services: ['Corporate Events', 'Dinner'], rating: 4.88, reviews: 132, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 121, name: 'Tanisha', age: 24, location: 'Pune', image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=500&h=500&fit=crop', description: 'Elegant Pune interior designer', services: ['Shopping', 'Events'], rating: 4.82, reviews: 113, verified: true, responseTime: '< 31 min', availability: 'Available' },
    // Additional Chennai profiles (to reach 16)
    { id: 122, name: 'Amrita', age: 25, location: 'Chennai', image: 'https://images.unsplash.com/photo-1525096650203-75a929e75d08?w=500&h=500&fit=crop', description: 'Graceful Chennai Bharatanatyam dancer', services: ['Cultural Events', 'Dinner'], rating: 4.87, reviews: 128, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 123, name: 'Brinda', age: 24, location: 'Chennai', image: 'https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=500&h=500&fit=crop', description: 'Elegant Chennai software architect', services: ['Corporate Events', 'Travel'], rating: 4.84, reviews: 118, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 124, name: 'Charvi', age: 26, location: 'Chennai', image: 'https://images.unsplash.com/photo-1569443693539-175ea9f007e8?w=500&h=500&fit=crop', description: 'Sophisticated Chennai entrepreneur', services: ['Corporate Events', 'Dinner'], rating: 4.90, reviews: 143, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 125, name: 'Divyani', age: 23, location: 'Chennai', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&h=500&fit=crop', description: 'Charming Chennai fashion designer', services: ['Shopping', 'Events'], rating: 4.79, reviews: 102, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 126, name: 'Esha', age: 27, location: 'Chennai', image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=500&h=500&fit=crop', description: 'Vibrant Chennai medical professional', services: ['Dinner', 'Corporate Events'], rating: 4.88, reviews: 134, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 127, name: 'Gargi', age: 24, location: 'Chennai', image: 'https://images.unsplash.com/photo-1590650046871-92c887180603?w=500&h=500&fit=crop', description: 'Elegant Chennai journalist', services: ['Events', 'Cultural Events'], rating: 4.82, reviews: 114, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 128, name: 'Harini', age: 25, location: 'Chennai', image: 'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=500&h=500&fit=crop', description: 'Sophisticated Chennai HR executive', services: ['Corporate Events', 'Dinner'], rating: 4.86, reviews: 125, verified: true, responseTime: '< 27 min', availability: 'Available' },
    // Additional Goa profiles (to reach 16)
    { id: 129, name: 'Dia', age: 24, location: 'Goa', image: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=500&h=500&fit=crop', description: 'Free-spirited Goa marine biologist', services: ['Travel', 'Events'], rating: 4.79, reviews: 104, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 130, name: 'Eva', age: 25, location: 'Goa', image: 'https://images.unsplash.com/photo-1515191107209-c28698631303?w=500&h=500&fit=crop', description: 'Vibrant Goa scuba instructor', services: ['Travel', 'Entertainment'], rating: 4.82, reviews: 111, verified: true, responseTime: '< 31 min', availability: 'Available' },
    { id: 131, name: 'Fiona', age: 26, location: 'Goa', image: 'https://images.unsplash.com/photo-1546539782-6fc531453083?w=500&h=500&fit=crop', description: 'Elegant Goa hotel manager', services: ['Events', 'Dinner'], rating: 4.87, reviews: 129, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 132, name: 'Geet', age: 23, location: 'Goa', image: 'https://images.unsplash.com/photo-1499651681375-8afc5b4db253?w=500&h=500&fit=crop', description: 'Charming Goa bartender', services: ['Nightlife', 'Entertainment'], rating: 4.73, reviews: 86, verified: true, responseTime: '< 40 min', availability: 'Available' },
    { id: 133, name: 'Hina', age: 27, location: 'Goa', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&h=500&fit=crop', description: 'Sophisticated Goa business owner', services: ['Corporate Events', 'Dinner'], rating: 4.89, reviews: 140, verified: true, responseTime: '< 23 min', availability: 'Available' },
    { id: 134, name: 'Ira', age: 24, location: 'Goa', image: 'https://images.unsplash.com/photo-1511548774318-563182fe8d03?w=500&h=500&fit=crop', description: 'Vibrant Goa music producer', services: ['Nightlife', 'Events'], rating: 4.80, reviews: 109, verified: true, responseTime: '< 32 min', availability: 'Available' },
    // Additional Kolkata profiles (to reach 16)
    { id: 135, name: 'Bidisha', age: 25, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1527736947477-2790e28f3443?w=500&h=500&fit=crop', description: 'Artistic Kolkata filmmaker', services: ['Cultural Events', 'Events'], rating: 4.85, reviews: 122, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 136, name: 'Chhaya', age: 24, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1554103493-aa502084d8cf?w=500&h=500&fit=crop', description: 'Elegant Kolkata theatre artist', services: ['Cultural Events', 'Dinner'], rating: 4.82, reviews: 115, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 137, name: 'Debosmita', age: 26, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=500&h=500&fit=crop', description: 'Sophisticated Kolkata professor', services: ['Cultural Events', 'Corporate Events'], rating: 4.90, reviews: 146, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 138, name: 'Eesha', age: 23, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1532170579297-281918c8ae72?w=500&h=500&fit=crop', description: 'Charming Kolkata musician', services: ['Entertainment', 'Events'], rating: 4.76, reviews: 95, verified: true, responseTime: '< 36 min', availability: 'Available' },
    { id: 139, name: 'Gouri', age: 27, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?w=500&h=500&fit=crop', description: 'Vibrant Kolkata entrepreneur', services: ['Corporate Events', 'Dinner'], rating: 4.88, reviews: 133, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 140, name: 'Jharna', age: 24, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&h=500&fit=crop', description: 'Elegant Kolkata writer', services: ['Cultural Events', 'Dinner'], rating: 4.83, reviews: 117, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 141, name: 'Kalyani', age: 25, location: 'Kolkata', image: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?w=500&h=500&fit=crop', description: 'Sophisticated Kolkata designer', services: ['Shopping', 'Events'], rating: 4.86, reviews: 126, verified: true, responseTime: '< 27 min', availability: 'Available' },
    // Additional profiles for other cities
    { id: 142, name: 'Harsha', age: 24, location: 'Chandigarh', image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=500&h=500&fit=crop', description: 'Vibrant Chandigarh entrepreneur', services: ['Corporate Events', 'Dinner'], rating: 4.81, reviews: 108, verified: true, responseTime: '< 32 min', availability: 'Available' },
    { id: 143, name: 'Jasleen', age: 25, location: 'Chandigarh', image: 'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=500&h=500&fit=crop', description: 'Elegant Chandigarh model', services: ['Events', 'Shopping'], rating: 4.84, reviews: 119, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 144, name: 'Kiran', age: 26, location: 'Chandigarh', image: 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=500&h=500&fit=crop', description: 'Sophisticated Chandigarh banker', services: ['Corporate Events', 'Travel'], rating: 4.88, reviews: 132, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 145, name: 'Neetu', age: 23, location: 'Chandigarh', image: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=500&h=500&fit=crop', description: 'Charming Chandigarh fitness coach', services: ['Travel', 'Events'], rating: 4.75, reviews: 92, verified: true, responseTime: '< 37 min', availability: 'Available' },
    { id: 146, name: 'Poornima', age: 24, location: 'Jaipur', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop', description: 'Regal Jaipur heritage host', services: ['Cultural Events', 'Dinner'], rating: 4.86, reviews: 123, verified: true, responseTime: '< 28 min', availability: 'Available' },
    { id: 147, name: 'Rajani', age: 25, location: 'Jaipur', image: 'https://images.unsplash.com/photo-1598550487042-b5345c08c4c5?w=500&h=500&fit=crop', description: 'Elegant Jaipur jewelry designer', services: ['Shopping', 'Events'], rating: 4.89, reviews: 137, verified: true, responseTime: '< 24 min', availability: 'Available' },
    { id: 148, name: 'Shivani', age: 26, location: 'Jaipur', image: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?w=500&h=500&fit=crop', description: 'Sophisticated Jaipur architect', services: ['Corporate Events', 'Dinner'], rating: 4.91, reviews: 148, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 149, name: 'Una', age: 23, location: 'Jaipur', image: 'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=500&h=500&fit=crop', description: 'Charming Jaipur fashion model', services: ['Events', 'Shopping'], rating: 4.78, reviews: 101, verified: true, responseTime: '< 34 min', availability: 'Available' },
    { id: 150, name: 'Bhumi', age: 24, location: 'Indore', image: 'https://images.unsplash.com/photo-1619895092538-128341789043?w=500&h=500&fit=crop', description: 'Elegant Indore entrepreneur', services: ['Corporate Events', 'Travel'], rating: 4.83, reviews: 116, verified: true, responseTime: '< 30 min', availability: 'Available' },
    { id: 151, name: 'Chandni', age: 25, location: 'Indore', image: 'https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=500&h=500&fit=crop', description: 'Sophisticated Indore marketing professional', services: ['Corporate Events', 'Dinner'], rating: 4.87, reviews: 128, verified: true, responseTime: '< 26 min', availability: 'Available' },
    { id: 152, name: 'Damini', age: 26, location: 'Indore', image: 'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=500&h=500&fit=crop', description: 'Vibrant Indore consultant', services: ['Corporate Events', 'Events'], rating: 4.90, reviews: 141, verified: true, responseTime: '< 22 min', availability: 'Available' },
    { id: 153, name: 'Ekta', age: 23, location: 'Indore', image: 'https://images.unsplash.com/photo-1548139086-8d9943c99ceb?w=500&h=500&fit=crop', description: 'Charming Indore teacher', services: ['Dinner', 'Cultural Events'], rating: 4.76, reviews: 97, verified: true, responseTime: '< 36 min', availability: 'Available' },
    { id: 154, name: 'Deepa', age: 24, location: 'Ahmedabad', image: 'https://images.unsplash.com/photo-1598343146174-ab46aa4195ad?w=500&h=500&fit=crop', description: 'Elegant Ahmedabad textile designer', services: ['Shopping', 'Events'], rating: 4.84, reviews: 118, verified: true, responseTime: '< 29 min', availability: 'Available' },
    { id: 155, name: 'Foram', age: 25, location: 'Ahmedabad', image: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=500&h=500&fit=crop', description: 'Sophisticated Ahmedabad architect', services: ['Corporate Events', 'Dinner'], rating: 4.88, reviews: 133, verified: true, responseTime: '< 25 min', availability: 'Available' },
    { id: 156, name: 'Gayatri', age: 26, location: 'Ahmedabad', image: 'https://images.unsplash.com/photo-1622022720859-c75c5ee83c37?w=500&h=500&fit=crop', description: 'Vibrant Ahmedabad entrepreneur', services: ['Corporate Events', 'Travel'], rating: 4.91, reviews: 147, verified: true, responseTime: '< 21 min', availability: 'Available' },
    { id: 157, name: 'Hetal', age: 23, location: 'Ahmedabad', image: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?w=500&h=500&fit=crop', description: 'Charming Ahmedabad influencer', services: ['Events', 'Nightlife'], rating: 4.74, reviews: 89, verified: true, responseTime: '< 39 min', availability: 'Available' },
  ]

  const locations = ['all', 'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Pune', 'Goa', 'Chennai', 'Kolkata', 'Chandigarh', 'Jaipur', 'Indore', 'Ahmedabad', 'Surat', 'Lucknow', 'Nagpur']

  const filteredEscorts = useMemo(() => {
    return escorts.filter((companion) => {
      const locationMatch = locationFilter === 'all' || companion.location === locationFilter
      const ageMatch = companion.age >= ageRange[0] && companion.age <= ageRange[1]
      return locationMatch && ageMatch
    })
  }, [locationFilter, ageRange])

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
                  <span className="text-gold">{locationFilter}</span> Escorts
                </>
              ) : (
                <>
                  Our <span className="text-gold">Escorts</span>
                </>
              )}
            </h1>
            <p className="text-xl text-gray-400">
              {locationFilter !== 'all' 
                ? `Discover our exclusive escorts in ${locationFilter}, each offering a unique experience.`
                : 'Discover our exclusive selection of escorts, each offering a unique experience.'
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
                      <motion.label
                        key={location}
                        whileHover={{ x: 5 }}
                        className="flex items-center cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="location"
                          value={location}
                          checked={locationFilter === location}
                          onChange={(e) => setLocationFilter(e.target.value)}
                          className="w-4 h-4 accent-gold"
                        />
                        <span className="ml-3 text-sm text-gray-300 group-hover:text-gold transition-colors capitalize">
                          {location === 'all' ? 'All Locations' : location}
                        </span>
                      </motion.label>
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
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredEscorts.map((companion) => (
                    <motion.div key={companion.id} variants={itemVariants}>
                      <Link to={`/companion/${companion.id}`}>
                        <motion.div
                          whileHover={{ y: -10 }}
                          className="card-glass overflow-hidden group cursor-pointer h-full flex flex-col"
                        >
{/* Badges Overlay */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              className="absolute top-4 right-4 flex flex-col gap-2"
                            >
                              {companion.verified && (
                                <div className="bg-green-500/20 backdrop-blur-md px-3 py-1 rounded-full text-xs text-green-300 border border-green-300/30 flex items-center gap-1">
                                  ✓ Verified
                                </div>
                              )}
                              <div className="bg-gold/20 backdrop-blur-md px-3 py-1 rounded-full text-xs text-gold border border-gold/30">
                                Age {companion.age}
                              </div>
                            </motion.div>

                          {/* Content */}
                          <div className="p-6 flex-grow flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-2xl font-serif font-bold text-gold flex-grow">
                                {companion.name}
                              </h3>
                              <div className="text-yellow-400 text-sm font-semibold">
                                ★ {companion.rating}
                              </div>
                            </div>
                            
                            <p className="text-xs text-gray-400 mb-2">
                              {companion.reviews} reviews
                            </p>
                            
                            <p className="text-sm text-gray-300 mb-3">
                              {companion.description}
                            </p>
                            
                            {/* Location & Availability */}
                            <div className="space-y-2 mb-3 text-xs">
                              <div className="flex items-center text-gray-300">
                                <svg className="w-3 h-3 mr-2 text-gold" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                                {companion.location}
                              </div>
                              <div className="flex items-center text-green-300">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                                {companion.availability}
                              </div>
                              <div className="flex items-center text-gray-400">
                                <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00-.293.707l-2.828 2.829a1 1 0 101.415 1.415L9 10.414V6z" />
                                </svg>
                                Responds {companion.responseTime}
                              </div>
                            </div>

                            {/* Services */}
                            <div className="mb-4 flex flex-wrap gap-2">
                              {companion.services.slice(0, 2).map((service, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs px-2 py-1 bg-gold/10 text-gold rounded border border-gold/20"
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
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-gray-400 text-lg">No escorts match your filters.</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Escorts
