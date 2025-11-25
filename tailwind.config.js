/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  extend: {
    colors: {
      primary: "#ffffff",     // White
      accent: "#FF3B30",      // Red
      textDark: "#1E293B",    // Dark text
      cardBg: "#ffffff",      // Card background
    },
  },
},
  plugins: [],
}