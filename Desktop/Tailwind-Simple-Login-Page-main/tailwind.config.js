/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        public:[ 'Public Sans', "sans-serif" ],
        inter:[ 'Inter', "sans-serif" ]
        
      }
    },
  },
  plugins: [],
}
