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
      minHeight: {
        'screen-1/2': '50vh',
        'screen-3/4': '75vh',
        'screen-9/10': '90vh',
      },
      transitionDuration: {
        4000: '4000ms',
      },
      transitionTimingFunction: {
        step: 'steps(60, end)',
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
