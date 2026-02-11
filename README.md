# Trusted Escort - Luxury Escortship Website

A modern, elegant React-based website with Vite, Tailwind CSS, Framer Motion, and React Router.

## 🎨 Features

- **Modern Design**: Luxury dark theme with gold accents
- **Glassmorphism Effects**: Beautiful frosted glass card design
- **Smooth Animations**: Powered by Framer Motion
- **Fully Responsive**: Mobile-first approach for all devices
- **SEO Optimized**: React Helmet integration for metadata
- **Age Verification**: Modal on first visit (18+ verification)
- **Floating WhatsApp Button**: Quick contact integration
- **Form Validation**: Complete booking and contact forms
- **Route-based Components**: React Router for smooth navigation
- **Performance Optimized**: Lazy loading and code splitting ready

## 📂 Project Structure

```
trusted-escort/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── AgeVerificationModal.jsx
│   │   └── WhatsAppButton.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Escorts.jsx
│   │   ├── CompanionProfile.jsx
│   │   ├── Booking.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎯 Pages

### 1. **Home** (`/`)
- Hero section with CTA buttons
- Featured escorts showcase
- Why Choose Us section
- Client testimonials
- Call-to-action sections

### 2. **Escorts** (`/escorts`)
- Grid layout of escort profiles
- Filtering by location and age
- Profile cards with images and info
- Link to individual profiles

### 3. **Companion Profile** (`/companion/:id`)
- Large hero image
- Physical details
- Languages spoken
- Services offered
- Rate information
- WhatsApp contact option

### 4. **Booking** (`/booking`)
- Comprehensive booking form
- Form validation
- Validation error messages
- Success animation
- Information about booking process

### 5. **About** (`/about`)
- Brand story and mission
- Core values display
- Privacy and security information
- Statistics and achievements
- Call-to-action

### 6. **Contact** (`/contact`)
- Contact form with validation
- Contact information display
- WhatsApp integration
- Service locations list
- Response time information

## 🛠 Technologies Used

- **React 18**: UI component library
- **Vite**: Modern build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation and interaction library
- **React Router DOM**: Client-side routing
- **React Helmet**: Document title and metadata management

## 🎨 Design Features

- **Color Scheme**: Dark background (#0a0a0a) with gold (#D4AF37) accents
- **Typography**: 
  - Serif (Playfair Display) for headings
  - Sans-serif (Inter) for body text
- **Animations**: 
  - Fade-in effects
  - Slide animations
  - Hover effects with motion
  - Smooth transitions

## ✨ Key Components

### Navbar
- Sticky navigation with scroll effect
- Mobile-responsive hamburger menu
- Active link highlighting
- Logo branding

### Footer
- Multi-column layout
- Quick links
- Contact information
- Social media integration
- Legal disclaimers

### AgeVerificationModal
- Birth year selector
- Validation logic
- LocalStorage persistence
- Error messaging

### WhatsAppButton
- Floating contact button
- Quick message template
- Fixed positioning
- Hover animations

## 🔒 Privacy & Security

- Age verification modal on first visit
- Private booking system
- Encrypted form handling
- Privacy-focused design
- Discreet company policies

## 📱 Responsive Breakpoints

- **Mobile**: Up to 640px
- **Tablet**: 641px to 1024px
- **Desktop**: 1025px and above

## 🎬 Animation Capabilities

- Page transitions with Framer Motion
- Hover effects on cards and buttons
- Staggered animations for lists
- Scroll-triggered animations
- Smooth micro-interactions

## 📊 SEO Optimization

Each page includes:
- Helmet metadata
- Proper title tags
- Meta descriptions
- Social sharing optimization

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Customization

### Colors
Edit in `tailwind.config.js`:
```js
colors: {
  gold: '#D4AF37',
  'dark-bg': '#0a0a0a',
  'dark-card': '#1a1a1a',
  'dark-hover': '#2a2a2a',
}
```

### Fonts
Customize in `index.html` and `tailwind.config.js`

### Content
Edit companion data and other content in respective page components

## 📞 Contact & Support

For customization or modifications, please contact the development team.

## 📄 License

All rights reserved. Trusted Escort © 2024

---

**Note**: This website is for 18+ users only. Verify age on first visit.
