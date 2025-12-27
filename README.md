# Ha Anh Portfolio - Y2K Grunge Style

A pixel-perfect portfolio website showcasing Ha Anh's journey as an artist, leader, and changemaker. Built with Next.js 14 and styled with a bold Y2K/Grunge aesthetic.

## Features

- 🎨 **Y2K Grunge Design**: Bold colors (#4a0072, #39ff14), metal fonts, sticker effects
- 🎭 **Smooth Animations**: Framer Motion for engaging user experience
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Next.js 14**: Latest App Router for optimal performance
- 🎯 **Sections**:
  - Hero with introduction
  - About Me (TIME, IG17, IMPROVISE, WATCH HUNT, DARK HORSE)
  - Lion Heart (Leadership roles & volunteering)
  - The Soul (Music projects)
  - Achievement (Certificates & accomplishments)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Google Fonts (Metal Mania, New Rocker, Inter)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
source_v2/
├── app/
│   ├── globals.css       # Global styles & Tailwind
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── MarqueeBar.tsx    # Scrolling text banner
│   ├── HeroSection.tsx   # Hero section
│   ├── AboutSection.tsx  # About section with subsections
│   ├── LionHeartSection.tsx    # Leadership roles
│   ├── TheSoulSection.tsx      # Music projects
│   ├── AchievementSection.tsx  # Certificates
│   └── Footer.tsx        # Footer with social links
├── tailwind.config.ts    # Tailwind configuration
└── package.json          # Dependencies

```

## Color Palette

- **Primary Purple**: `#4a0072` (Deep purple background)
- **Dark Purple**: `#2a004e` (Darker accents)
- **Neon Green**: `#39ff14` (Bright highlights)
- **Light Green**: `#7fff00` (Hover states)

## Customization

Replace placeholder images in components with actual images by updating the `src` attributes in:
- `HeroSection.tsx`
- `AboutSection.tsx`
- `LionHeartSection.tsx`
- `TheSoulSection.tsx`
- `AchievementSection.tsx`

## Build for Production

```bash
npm run build
npm start
```

## License

© 2024 Ha Anh Portfolio. All rights reserved.
