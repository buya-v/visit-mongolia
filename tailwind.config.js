/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mongolia: {
          sky: '#4B9CD3', // Eternal blue sky
          sand: '#D4B996', // Gobi desert
          green: '#556B2F', // Steppe grass
          red: '#C8102E', // Flag red
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}