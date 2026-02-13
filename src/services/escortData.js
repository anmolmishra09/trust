// Shared escort data service for Companions and CompanionProfile pages

// Generate full profile details from basic escort data
export const generateFullProfile = (escort) => {
  return {
    ...escort,
    gallery: escort.gallery || [
      escort.image,
      escort.image.replace('profile-', 'profile-alt1-'),
      escort.image.replace('profile-', 'profile-alt2-'),
    ],
    height: escort.height || `5'${Math.floor(Math.random() * 4) + 5}"`,
    ethnicity: escort.ethnicity || 'Indian',
    eyes: escort.eyes || 'Brown',
    hair: escort.hair || 'Black',
    languages: escort.languages || ['English', 'Hindi'],
    rates: escort.rates || {
      hourly: `₹${Math.floor(Math.random() * 2000) + 4000}`,
      halfDay: `₹${Math.floor(Math.random() * 5000) + 12000}`,
      fullDay: `₹${Math.floor(Math.random() * 5000) + 22000}`,
      overnight: `₹${Math.floor(Math.random() * 5000) + 27000}`,
    },
  }
}

// This will be populated by Companions.jsx
let allEscortsData = []

export const setAllEscorts = (escorts) => {
  allEscortsData = escorts
}

export const getAllEscorts = () => {
  return allEscortsData
}

export const getEscortById = (id) => {
  const escort = allEscortsData.find(e => e.id === parseInt(id) || e.id === id)
  return escort ? generateFullProfile(escort) : null
}
