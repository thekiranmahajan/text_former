/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    variants: {
      scrollbar: ["dark"],
      extend: {},
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
