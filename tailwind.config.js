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
        "bdxio-blue": {
          base: "#4652f8",
          light: "#7d7df8",
          dark: "#242457",
        },
        "bdxio-yellow": {
          base: "#fbdb33",
        },
        "bdxio-cream": {
          base: "#f6f2e8",
        },
        "bdxio-font": {
          light: "#fff7ec",
          dark: "#373739",
        },
        grey: {
          100: "#F5F5F5",
          200: "#e3e3e3",
          300: "#F5F5F5",
          400: "#72767A",
        },
        green: "#19D2B1",
        red: "#cc0625",
        yellow: "#fac319",
        orange: "#FF820F",
        purple: "#DABFEF",
        white: "#FFFFFF",
        black: "#000000",
      },
      screens: {
        xxs: "320px",
        xs: "480px",
        s: "768px",
        m: "992px",
        l: "1200px",
        xl: "1400px",
        xxl: "1600px",
        xxxl: "1800px",
      },
      spacing: {
        1: "0.5rem",
        2: "1rem",
        3: "1.5rem",
        4: "2rem",
        5: "2.5rem",
        6: "3rem",
        7: "3.5rem",
        8: "4rem",
      },
    },
  },
};
