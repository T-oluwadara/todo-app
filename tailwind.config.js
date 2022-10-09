/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        lightModeImg: "url('../images/bg-desktop-light.jpg')",
        darkModeImg: "url('../images/bg-desktop-dark.jpg')",
      },
      colors: {
        veryLightGray: "hsl(0, 0%, 98%)",
        veryLightGrayishBlue: "hsl(236, 33%, 92%)",
        lightGrayishBlue: "hsl(233, 11%, 84%)",
        darkGrayishBlue: "hsl(236, 9%, 61%)",
        veryDarkGrayishBlue1: "hsl(235, 19%, 35%)",
        veryDarkBlue: "hsl(235, 21%, 11%)",
        veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        lightGrayishBlue: "hsl(234, 39%, 85%)",
        lightGrayishBlue2: "hsl(236, 33%, 92%)",
        darkGrayishBlue: "hsl(234, 11%, 52%)",
        veryDarkGrayishBlue2: "hsl(233, 14%, 35%)",
        veryDarkGrayishBlue3: "hsl(237, 14%, 26%)",
        brightBlue: "hsl(220, 98%, 61%)",
        blue: "hsl(192, 100%, 67%)",
        purple: "hsl(280, 87%, 65%)",
      },
    },
  },
  plugins: [],
};
