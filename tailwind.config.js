/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    container: false,
  },
  content: ["./dist/**/*.html", "./dist/js/**/*.js"],
  theme: {
    boxShadow: {
      "right-1": "5px 5px 24px 0px rgba(33,37,41,0.08)",
      "right-2": "5px 5px 24px 0px rgba(33,37,41,0.32)",

      "left-1": "-5px 5px 24px 0px rgba(33,37,41,0.08)",
      "left-2": "-5px 5px 24px 0px rgba(33,37,41,0.32)",

      "top-1": "0px -5px 24px 0px rgba(33,37,41,0.08)",
      "top-2": "0px -5px 24px 0px rgba(33,37,41,0.32)",

      "cta-dark": `inset 0px 0px 0px 1px #1864ab`,
      "cta-light": `inset 0px 0px 0px 1px #e7f5ff`,

      "icon-border-dark": "inset 0px 0px 0px 2px #212529",

      "icon-border-light-blue": "inset 0px 0px 0px 1px #e7f5ff",
      "icon-border-light-red": "inset 0px 0px 0px 1px #fff5f5",
      "icon-border-light-green": "inset 0px 0px 0px 1px #e6fcf5",

      none: "0 0 #000",
    },
    colors: {
      // Main color

      "blue-0": "#e7f5ff",
      "blue-9": "#1864ab",

      // Grey color

      "gray-1": "#f1f3f5",
      "gray-7": "#495057",
      "gray-9": "#212529",

      // Secondary colors

      "red-0": "#fff5f5",
      "red-7": "#f03e3e",

      "teal-0": "#e6fcf5",
      "teal-7": "#0ca678",

      white: "#fff",
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        // Gradients

        "home-hero-overlay":
          "linear-gradient(0deg, rgba(24,100,171,1) 0%, rgba(24,100,171,0.9) 50%, rgba(24,100,171,0.2) 100%)",
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      },
      gridTemplateColumns: {
        "footer-desktop-layout": "2fr 1fr 1fr 2fr",
      },
      minWidth: {
        55: "13.75rem",
      },
      spacing: {
        18.375: "4.59375rem",
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),

    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "86rem",
        },
      });
    },
  ],
};
