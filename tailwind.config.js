/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primery-500": "#2b3452",
        "secondary-500": "#bc4123",
      },
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
