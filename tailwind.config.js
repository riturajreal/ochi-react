/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'founders': ['Founders Grotesk X Condensed', 'sans-serif'],
        'montreal' : ['Neue Montreal']
      }
    },
  },
  plugins: [],
}