module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'teal-blue': '#3F5965',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
