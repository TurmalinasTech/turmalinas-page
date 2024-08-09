/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#3F77AE',
        blue_: '#60A6E7',
        blue_light: '#B6D5F3',
        blue_dark: '#04253D',
        bege: '#FFF9F2',
        white: '#FFF',

      }
    },
  },
  plugins: [],
}
