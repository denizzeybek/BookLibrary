/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minWidth: {
        '52': '208px',
        '60': '240px',
        '72': '288px',
      },
    },
    colors: {
      transparent: 'transparent',
      'purple-100': '#dde2f4',
      'purple-200': '#BCC6E9',
      'purple-500': '#99A7ED',
      'purple-700': '#717bf3',
      'purple-900': '#505DF1',
      'sky-200': '#69cdfa',
      'sky-500': '#38bdf8',
      'sky-900': '#09acf4',
      offWhite: '#F8F8FC',
      offGray: '#A4A4AB',
      'gray-200': '#b8b8c1',
      'gray-900': '#727275',
      offBlack: '#4D484E',
      white: '#FFFFFF',
      black: '#000000',
      gray: '#808080',
    }
  },
  plugins: [],
}
