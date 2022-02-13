module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'gochi-hand': ['Gochi Hand', 'cursive'],
      },
      height: {
        'screen-1/2': '50vh',
        'screen-3/4': '75vh',
        'screen-9/10': '90vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
