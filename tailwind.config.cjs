/** @type {import('tailwindcss').Config} */



const plugin = require("tailwindcss/plugin");

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backface-hidden": {
      "backface-visibility": "hidden",
    },
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      "transform-style": "preserve-3d",
    },
    ".perspective-800": {
      perspective: "150rem",
    },
  });
});

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        4.5: "1.125rem",
      },
      boxShadow: {
        'form': '0 1rem 50px -15px',
        
      },

      gridTemplateColumns: {
        '1/3': '2fr 4fr',
      },

      animation: {
        active: "active 1s linear infinite",
        projectActive: "sideBounce 350ms linear 1",
      },
      keyframes: {
        active: {
          "0%": { transform: "scale(1)" },
          "80%": { transform: "scale(1.5)", opacity: 1 },
          "100%": { transform: "scale(1.6)", opacity: 0 },
        },
        sideBounce: {
          "0%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(5px)" },
          "100%": { transform: "translateX(0px)" },
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
          800: "#003443",
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
          "700-25": "#369acb35",
          800: "#318ab7",
          900: "#276e92",
          1000: "#226180",
        },
      },
    },
  },
  plugins: [backfaceVisibility],
};
