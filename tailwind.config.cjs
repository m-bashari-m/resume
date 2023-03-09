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

      maxWidth: {
        '9/10': '90%',
      },

      animation:{
        open: 'open 800ms ease-out',
        leftToRight: 'leftToRight 800ms ease-in-out alternate infinite',
        rightToLeft: 'rightToLeft 800ms ease-in-out alternate infinite',
        fadeIn: 'fadeIn 800ms ease-in-out'
      },

      keyframes: {
        open: {
          '0%': { top: '-250px'},
          '100%': { top: '0'}
        },

        leftToRight: {
          '0%, 100%': {
            left: '-20px',
          },
          '50%': {
            left: '-25px',
          }
        },

        rightToLeft:{
          '0%, 100%': {
            right: '-20px',
          },
          '50%': {
            right: '-25px',
          }
        },

        fadeIn: {
          '0%': {
            opacity: '0',
            bottom: '-80px'
          },
          '100%': {
            opacity: '1',
            bottom: '-60px'
          }
        }
      },

      boxShadow: {
        'button': '0 0 5px #000000',
      }
    },
  },
  plugins: [],
}
