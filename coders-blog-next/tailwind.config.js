/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e6005c",
        "primary-dark": "#99003d",
      },
    },
    fontFamily: {
      sans: ["Source Sans Pro", "sans-serif"],
    },
  },
  plugins: [],
};
