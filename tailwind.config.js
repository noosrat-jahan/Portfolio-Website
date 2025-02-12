/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        rancho: ['Rancho', 'cursive'],
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [require('daisyui'),],
}

