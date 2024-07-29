/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    container: false,
  },
  content: ["./dist/**/*.html"],
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
    },
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
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
