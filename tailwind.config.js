/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff4155",
        footer: "#0A0001",
        copyright: "#0e0e0e",
        gray01: "#b8b8b9",
        gray02: "#d7d7d7",
        blue01: "#0C0053",
        dark01: "#101010",
        hero: "#fffbfb",
      },
    },
  },
  plugins: [],
};
