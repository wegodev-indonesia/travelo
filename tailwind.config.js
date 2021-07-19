const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
        'label': ['Montserrat']
      },
      fontSize: {
        'heading-1': '48px',
        'heading-2': '36px',
        'heading-3': '24px',
        'heading-4': '18px',
        'heading-5': '14px',
        'heading-6': '12px',
      }
    },
    colors: {
      primary: {
        blue: '#1053B7',
        white: '#FFFFFF',
        black: '#050D18'
      },
      secondary: {
        yellow: '#EBA41F',
        red: '#EB1F2B'
      },
      color: {
        primary: '#050D18',
        secondary: '#50555D'
      },
      white: '#FFFFFF',
      black: '#000000',
      yellow: {
        '100': '#FDF5E8',
        '200': '#F9E3BB',
        '300': '#F5D18F',
        '400': '#F1BF62',
        '500': '#EBA41F',
      },
      red: {
        '100': '#FDE8E9',
        '200': '#F9BBBF',
        '300': '#F58F95',
        '400': '#F1626A',
        '500': '#EB1F2B',
      },
      blue: {
        '100': '#E7EDF7',
        '200': '#B7CBE9',
        '300': '#87A9DB',
        '400': '#5786CC',
        '500': '#1053B7',
      },
      gray: {
        '100': '#E6E6E7',
        '200': '#B4B6B9',
        '300': '#82868B',
        '400': '#50555D',
        '500': '#050D18',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
