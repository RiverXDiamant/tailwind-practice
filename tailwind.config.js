/** @type {import('tailwindcss').Config} */
module.exports = {
  // tells taliwind where to look for the utility classes
  // can use src folder instead to have tailwind look at html, js |  content: ["./src/**/*.{html,js}"]
  content: ["./*.html"],
  theme: {
    // set the break points for sm, md, lg and xl
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1536px",
    },
    // Add color within the extend object
    extend: {
      colors: {
        // Put custom colors here: using hex values, rgb, hsl, etc
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
