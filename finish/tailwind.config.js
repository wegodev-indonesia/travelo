const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        label: ['Montserrat'],
      },
      fontSize: {
        'heading-1': '48px',
        'heading-2': '36px',
        'heading-3': '24px',
        'heading-4': '18px',
        'heading-5': '14px',
        'heading-6': '12px',
      },
    },
    colors: {
      primary: {
        blue: '#1053B7',
        white: '#FFFFFF',
        black: '#050D18',
      },
      secondary: {
        yellow: '#EBA41F',
        red: '#EB1F2B',
      },
      color: {
        primary: '#050D18',
        secondary: '#50555D',
      },
      white: '#FFFFFF',
      black: '#000000',
      facebook: '#4267B2',
      yellow: {
        10: '#FDF5E8',
        30: '#F9E3BB',
        50: '#F5D18F',
        70: '#F1BF62',
        100: '#EBA41F',
      },
      red: {
        10: '#FDE8E9',
        30: '#F9BBBF',
        50: '#F58F95',
        70: '#F1626A',
        100: '#EB1F2B',
      },
      blue: {
        10: '#E7EDF7',
        30: '#B7CBE9',
        50: '#87A9DB',
        70: '#5786CC',
        100: '#1053B7',
      },
      gray: {
        10: '#E6E6E7',
        30: '#B4B6B9',
        50: '#82868B',
        70: '#50555D',
        100: '#050D18',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
