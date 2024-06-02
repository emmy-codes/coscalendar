/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'chetwode-blue': {
        '50': '#f0f6fd',
        '100': '#e4effb',
        '200': '#cde1f8',
        '300': '#afcdf2',
        '400': '#8fafea',
        '500': '#7393e1',
        '600': '#687fd7',
        '700': '#495fb9',
        '800': '#3d4e96',
        '900': '#374578',
        '950': '#202746',
      },
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'transparent': 'transparent',
      'black': '#000',
      'white': '#fff',
    },
    extend: {},
  },
  plugins: [],
}