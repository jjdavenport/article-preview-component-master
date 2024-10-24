/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      fontSize: {
        customSize: ".8125rem",
      },
      fontFamily: {
        custom: ["manrope", "sans-serif"],
      },
      colors: {
        veryDarkGrayishBlue: "hsl(217, 19%, 35%)",
        desaturatedDarkBlue: "hsl(214, 17%, 51%)",
        grayishBlue: "hsl(212, 23%, 69%)",
        lightGrayishBlue: "hsl(210, 46%, 95%)",
      },
    },
  },
  plugins: [],
};
