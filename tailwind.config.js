/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {

      fontSize: {
         hazhir: '50px'
      },

      extend: {
         colors: {
            'hazhir':'#FFF'
         }
      },
   },
   plugins: [],
}