/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-HR": "#C8C8C8",
        "primary-zinc": " #858A7E",
        "secondary-white": "#FFFFFF",
        "secondary-black": "#000000",
        red: "#FF0000",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
