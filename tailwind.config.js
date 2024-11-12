/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C1E3E',
        secondary: '#D1E2F3',
        text: '#F4F4F9',
        accent: '#7A9BAF',
      },
      fontFamily:{
        uthman: "uthmani"
      }
    },
  },
  plugins: [],
}