/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#020014',
        secondary: '#D1E2F3',
        text: '#F4F4F9',
        accent: '#7A9BAF',
        tertiary: '#009678',
      },
      fontFamily:{
        uthman: "uthmani",
        nakkhatraFont: "nakkhatraFont",
        chayanaFont: "chayanaFont",
      }
    },
  },
  plugins: [],
}