import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#4a0072',
        'brand-purple-dark': '#2a004e',
        'brand-green': '#39ff14',
        'brand-green-light': '#7fff00',
        'border': '#39ff14',
      },
      fontFamily: {
        'metal': ['Metal Mania', 'cursive'],
        'display': ['New Rocker', 'cursive'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
        'marquee-reverse': 'marquee-reverse 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      boxShadow: {
        'sticker': '0 0 0 4px white, 0 0 0 6px black',
        'neon-green': '0 0 10px #39ff14, 0 0 20px #39ff14',
      },
    },
  },
  plugins: [],
}
export default config
