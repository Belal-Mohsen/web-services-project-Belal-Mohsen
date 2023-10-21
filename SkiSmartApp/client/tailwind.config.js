/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#4774E5', // Change to your desired color
        'custom-green': '#85B327',
      },
    },
  },
  plugins: [],
}
