module.exports = {
  purge: ['./src/**/*.html', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      margin: ['group-hover'],
    },
  },
  plugins: [],
};
