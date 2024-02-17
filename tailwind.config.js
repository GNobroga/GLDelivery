/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#FFDD22',
        }
      },
      backgroundImage: {
        'background': 'url(/assets/images/bg_food.png)',
      },
    },
  },
  plugins: [],
}
