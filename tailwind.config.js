/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/App.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-section': "url('/src/assets/sushi-1.webp')",
        'abouts-one': "url('/src/assets/about_bg1.webp')",
        'abouts-two': "url('/src/assets/about_bg2.webp')",
      }
    },
    fontFamily:{
      sans : ["Plus Jakarta Sans", "sans-serif"],
      serif: ["Playfair Display", "serif"]
    },
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

