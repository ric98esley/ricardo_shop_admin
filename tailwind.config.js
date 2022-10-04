/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*{html,js,jsx}'],
  theme: {
    colors: {
      ...colors,
      textInputField: '#F7F7F7',
      hospitalGreen: '#ACD9B2',
      veryLightPink: '#C7C7C7',
    },
    fontFamily: {
      Quicksand: ['Quicksand', 'sans-serif'],
    },
    boxShadow: {
      card: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    },
    borderRadius: {
      ...defaultTheme.borderRadius,
      target: '10% 10% 10% 50%',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
