/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#016F9F', // Change to your desired color
        'custom-green': '#85B327',
      },
      borderRadius:{
        'custom': '2rem',
      },
      
    },
  },
  plugins: [],
}


