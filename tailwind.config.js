module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'teal-blue': '#3F5965',
        'teal-blue-light': '#526974',
        'beige': '#EDE5DC'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
