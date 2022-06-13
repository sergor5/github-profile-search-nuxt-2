module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    darkSelector: '.dark',
    extend: {},
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
    ],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active'],
  },
  plugins: [],
}
