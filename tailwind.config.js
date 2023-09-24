/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sup': "url('/src/assets/img/OurTeam/sup.png')",
        'login':"url('/src/assets/images/wallpaperflare.com_wallpaper (2).jpg')",
      },
      
    },
  },
  plugins: [require("daisyui")],
}

