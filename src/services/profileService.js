// Profile management service using localStorage

const PROFILES_KEY = 'advertiserProfiles'
const USERS_KEY = 'advertiserUsers'
const CURRENT_USER_KEY = 'currentUser'

// User authentication functions
export const registerUser = (userData) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
  
  // Check if user already exists
  if (users.some(user => user.email === userData.email)) {
    throw new Error('User with this email already exists')
  }
  
  const newUser = {
    id: Date.now().toString(),
    email: userData.email,
    password: userData.password, // In production, this should be hashed
    businessName: userData.businessName,
    phone: userData.phone,
    createdAt: new Date().toISOString()
  }
  
  users.push(newUser)
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
  return newUser
}

export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
  const user = users.find(u => u.email === email && u.password === password)
  
  if (!user) {
    throw new Error('Invalid email or password')
  }
  
  // Store current user (excluding password)
  const { password: _, ...userWithoutPassword } = user
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword))
  return userWithoutPassword
}

export const logoutUser = () => {
  localStorage.removeItem(CURRENT_USER_KEY)
}

export const getCurrentUser = () => {
  const userStr = localStorage.getItem(CURRENT_USER_KEY)
  return userStr ? JSON.parse(userStr) : null
}

export const isAuthenticated = () => {
  return getCurrentUser() !== null
}

// Profile management functions
export const createProfile = (profileData) => {
  const user = getCurrentUser()
  if (!user) {
    throw new Error('User must be logged in to create a profile')
  }
  
  const profiles = JSON.parse(localStorage.getItem(PROFILES_KEY) || '[]')
  
  // Check if user already has a profile
  const existingProfileIndex = profiles.findIndex(p => p.userId === user.id)
  
  const newProfile = {
    id: existingProfileIndex >= 0 ? profiles[existingProfileIndex].id : Date.now().toString(),
    userId: user.id,
    ...profileData,
    createdAt: existingProfileIndex >= 0 ? profiles[existingProfileIndex].createdAt : new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    verified: true,
    rating: existingProfileIndex >= 0 ? profiles[existingProfileIndex].rating : 4.5,
    reviews: existingProfileIndex >= 0 ? profiles[existingProfileIndex].reviews : 0,
    responseTime: '< 30 min',
    availability: profileData.availability || 'Available'
  }
  
  if (existingProfileIndex >= 0) {
    profiles[existingProfileIndex] = newProfile
  } else {
    profiles.push(newProfile)
  }
  
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles))
  return newProfile
}

export const getProfile = (userId) => {
  const profiles = JSON.parse(localStorage.getItem(PROFILES_KEY) || '[]')
  return profiles.find(p => p.userId === userId)
}

export const getCurrentUserProfile = () => {
  const user = getCurrentUser()
  if (!user) return null
  return getProfile(user.id)
}

export const getAllProfiles = () => {
  return JSON.parse(localStorage.getItem(PROFILES_KEY) || '[]')
}

export const getProfilesByLocation = (location) => {
  const profiles = getAllProfiles()
  if (location === 'all') return profiles
  return profiles.filter(p => p.location === location)
}

export const deleteProfile = (profileId) => {
  const profiles = JSON.parse(localStorage.getItem(PROFILES_KEY) || '[]')
  const updatedProfiles = profiles.filter(p => p.id !== profileId)
  localStorage.setItem(PROFILES_KEY, JSON.stringify(updatedProfiles))
}

// Helper function to convert image file to base64
export const imageToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

// Search profiles
export const searchProfiles = (filters) => {
  let profiles = getAllProfiles()
  
  if (filters.location && filters.location !== 'all') {
    profiles = profiles.filter(p => p.location === filters.location)
  }
  
  if (filters.minAge) {
    profiles = profiles.filter(p => p.age >= filters.minAge)
  }
  
  if (filters.maxAge) {
    profiles = profiles.filter(p => p.age <= filters.maxAge)
  }
  
  if (filters.services && filters.services.length > 0) {
    profiles = profiles.filter(p => 
      filters.services.some(service => p.services?.includes(service))
    )
  }
  
  return profiles
}
