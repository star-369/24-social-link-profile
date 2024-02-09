/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["docs/index.html"],
  theme: {
    extend: {
      colors: {
        green: "var( --green)",
        white: "var(--white)",
        grey: "var(--grey)",
        "dark-grey": "var(--dark-grey)",
        "off-black": "var(--off-black)",
      },
      fontFamily: {
        inter: "var(--inter)",
      },
    },
  },
  plugins: [],
};
