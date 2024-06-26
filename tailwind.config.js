/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "rgba(255, 255, 255, 0.25);",
        "border-bg": "rgba(255, 255, 255, 0.18)",
      },
      boxShadow: {
        "7xl": "0 8px 32px 0 rgba(31, 38, 135, 0.37);",
      },
    },
  },
  plugins: [],
};
