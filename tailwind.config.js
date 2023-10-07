/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {},
    fontFamily: {
      normal: ['Poppins','sans-serif'],
      sans1: ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: '#282F44',
        lightbrand: '#445074',
        lightbackground: "#EEF0F2",
        darkbackground: "#171A21",

        header: "#050505",
        hover: "#C6C7C4",
        textLight: "#FFFFFF",
        textFaded: "#ABABAB",
        border: "#313131",

        spacecadet: "#282F44",
        
        clightred: "#FE654F",
        cdarkred: "#984447",
        corange: "#E57A44",
        cgreen: "#47D05D",
        cgray: "#353B3C",


        twitter: "#1DA1F2",
        linkedin: "#0072b1",
        github: "#333"
      },
      gridTemplateColumns: {
        player: "85px repeat(10, minmax(0, 1fr)) 85px"
      }
    },
  },
  plugins: [],
}