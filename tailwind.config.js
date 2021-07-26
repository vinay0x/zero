module.exports = {
  purge: ['./client/**/*.html', './client/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        muted: '#6b7280',
        accent: '#333456',
        brand: '#e43f5a',
        border: '#e3e8ee',
        background: '#fbfbfb',
      },
    },
  },
  variants: {
    extend: {
      margin: ['group-hover'],
      dropShadow: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
