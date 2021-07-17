module.exports = {
  purge: ['./client/**/*.html', './client/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      margin: ['group-hover'],
      dropShadow: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
