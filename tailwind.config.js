/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1abc9c', // Verde turquesa
        secondary: '#34495e', // Gris oscuro
      },
    },
  },
}