module.exports = {
  purge: [
    './public/**/*.html',
    './public/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'poppins':'Poppins'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
