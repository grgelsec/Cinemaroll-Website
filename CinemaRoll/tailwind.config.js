/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropFilter: {
        'none':'none',
        'blur':'blur',
      },
      colors: {
        'gray-custom': '#080808',
        'purple-custom': '3500D3'
      },
    },
  },
  plugins: [
    
  ],
}