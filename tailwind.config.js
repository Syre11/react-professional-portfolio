/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'teal': '#23bd98',
      'blue': '#305fd8',
    },
    fontFamily: {
      headerFont: ['Russo One'],
    },
    extend: {
      backgroundImage: {
        'whiteGeo': "url('./assets/images/WhiteGeo.png')",
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}

