/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'teal': '#23bd98',
      'blue': '#305fd8',
      'blue-400': '#63b3ed',
      'blue-500': '#4299e1',
      'blue-700': '#2b6cb0',
      'white': '#fff',
      'gray-200': '#edf2f7',
      'gray-700': '#4a5568'
    },
    fontFamily: {
      headerFont: ['Russo One'],
      bodyFont: ['Kanit'],
    },
    extend: {
      backgroundImage: {
        'whiteGeo': "url('./assets/images/WhiteGeo.png')",
      },
    }
  }
}

