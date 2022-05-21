const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  theme: {
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: '30px',
    },
    extend: {
      spacing: {
        0.75: '0.19rem',
      },
      colors: {
        'smooth-yellow': '#FBD784',
        'dark-blue': '#0b1d26',
      },
    },
    fontFamily: {
      gilroy: ['Gilroy', 'serif', 'Helvetica', 'Arial'],
      chronicle: ['ChronicleDisplay', 'serif', 'Helvetica', 'Arial'],
    },
  },
  variants: {
    extend: {},
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/*.njk', './src/**/*.svg'],
};
