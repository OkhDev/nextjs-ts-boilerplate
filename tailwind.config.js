/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      body: ['', ''],
    },
    extend: {
      colors: {
        flatblack: '#313639',
      },
    },
  },
  plugins: [],
}
