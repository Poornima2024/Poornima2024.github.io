/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        btncolor: "rgba(92, 88, 195, 1)",
        greyclr:"#DCDCDC",
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(58deg, rgba(0,179,49,1) 4%, rgba(0,92,112,1) 32%, rgba(109,0,191,1) 100%)',
       
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translate-x-0' },
          '100%': { transform: '-translate-x-full' },
        }
      },
      animation: {
        wiggle: 'wiggle 20s linear infinite',
      },
      screens: {
        'sph': '320px',
      },
      
    },
  },
  plugins: [],
}