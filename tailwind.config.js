/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          primary: '#FA4A0C',
        }
      },
      fontFamily: {
        'sans-protest-strike': ['Protest Strike', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
