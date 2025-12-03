/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        retro: ['"VT323"', 'monospace'], 
      },
      colors: {
        retroGreen: '#4ade80',
        retroDark: '#1a1a1a',
        retroLight: '#f3f4f6',
      }
    },
  },
  plugins: [],
}