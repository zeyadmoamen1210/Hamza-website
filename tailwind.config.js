/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{vue,js}"],
  theme: {
    extend: {
      boxShadow: {
        'simple': '0 15px 40px 6px #e2e2e254',
        'medium': '0 0 12px 1px #eeeeeea1'
      },
      backgroundImage: {
      }
    },
    colors: {

    }
  },
  plugins: [],
}

