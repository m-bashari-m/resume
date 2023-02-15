/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Sans", "sans-serif"]
      },

      textColor:{
        primary: "var(--color-text-primary)"
      },

      backgroundColor: {
        hover: "var(--color-hover)",
        navbar: "var(--color-navbar)"
      },

      screens: {
       'xs' : '550px'
      },

      animation:{
        open: 'open 800ms '
      },

      keyframes: {
        open: {
          '0%': { top: '-100vh'},
          '100%': { top: '0'}
        }
      }
    },
  },
  plugins: [],
}
