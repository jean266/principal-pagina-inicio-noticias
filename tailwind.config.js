/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'orange_soft': '#e9ab53',
      'red_soft': '#f15e50',
      'off_metal': '#fffdfa',
      'blue_grayish': '#c5c6ce',
      'blue_grayish_dark': '#5d5f79',
      'blue_very_dark': '#00001a',
    },
    fontFamily : {
      "sans" : ['Inter', 'sans-serif']
    },
    fontSize: {
      sm: '0.8rem',
      base: '15px',
      normal : "17px",
      xl: '1.25rem',
      '1/5xl': '1.40rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '2.8rem',
      '6xl': '3.5rem',
    },
    extend: {
      lineHeight: {
        'extra-title': '1.1',
        '12': '3rem',
      },
      boxShadow : {
        "menu" : "0 0 0 100vmax rgba(0, 0, 0, .5);"
      }
    }
  },
  plugins: [],
}

