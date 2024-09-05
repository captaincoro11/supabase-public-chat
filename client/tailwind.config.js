/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        moreBlack:'#1a1818'
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft:{
          '0%':{transform:'translateX(-100%) ', opacity:'0'},
          '100%':{transform:'translateX(0)',opacity:'1'}
        }
      },
      animation: {
        'gradient-move': 'gradient 5s ease infinite',
        'slide-up': 'slideUp 1s ease-out',
        'slide-down': 'slideDown 1s ease-out',
        'slide-in-right': 'slideInRight 1s ease-out',
        'slide-in-left': 'slideInLeft 1s ease-in'
      
      },
    },
  },
  plugins: [],
}