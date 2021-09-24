module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlueColor: "hsl(209, 23%, 22%)",
        veryDarkBlueDarkColor: "hsl(207, 26%, 17%)",
        veryDarkBlueLightColor: "hsl(200, 15%, 8%)",
        darkGrayColor: "hsl(0, 0%, 52%)",
        veryLightGrayColor: "hsl(0, 0%, 98%)",
        whiteColor: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        nuni: "'Nunito Sans', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
