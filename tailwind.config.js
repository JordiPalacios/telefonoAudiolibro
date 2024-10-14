/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C3E50",
        secondary: "#E74C3C",
        accent: "#F39C12",
        textWhite: "#f0efed",
        textBlack: "#11100e",
      }
    },
  },
  plugins: [],
}

