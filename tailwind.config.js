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
      minHeight: {
        '32': '128px',
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
      'sky-200': '#E35151',
      'sky-500': '#38bdf8',
      'sky-900': '#09acf4',
      'red-200': '#f87171',
      'red-500': '#DC2626',
      'red-900': '#b01e1e',
      'green-200': '#64d68e',
      'green-500': '#22c55e',
      'green-900': '#178941',
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
