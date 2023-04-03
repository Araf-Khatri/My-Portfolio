/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      spacing: {
        4.5: "1.125rem",
      },

      animation: {
        active: "active 1s linear infinite",
      },
      keyframes: {
        active: {
          "0%": { transform: "scale(1)" },
          "80%": { transform: "scale(1.5)", opacity: 1 },
          "100%": { transform: "scale(1.6)", opacity: 0 },
        },
      },

      colors: {
        primary: {
          100: "#F1FAFF",
          200: "#daf2ff",
          250: "#d8effa",
          300: "#c5e6f7",
          350: "#b1def5",
          500: "#263c47",
          900: "#0e2633",
          1000: "#071319",
        },
        blurr: {
          100: "#44C0FE",
          500: "#0081A7",
          600: "#29739875",
        },
        secondary: {
          100: "#cce6ed",
          200: "#9ed6f2",
          "200-25": "#9ed6f22c",
          "200-50": "#9ed6f28a",
          500: "#44c0fe",
          "500-25": "#44c0fe30",
          600: "#3dade5",
          700: "#369acb",
          800: "#318ab7",
        },
      },
    },
  },
  plugins: [],
};
