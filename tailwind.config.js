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
      0: "0px",
      1: "0.5rem",
      2: "1rem",
      3: "1.5rem",
      4: "2rem",
      5: "2.5rem",
      6: "3rem",
      7: "3.5rem",
      8: "4rem",
      100: "100px",
    },
    zIndex: {
      upper: 9999,
      modal: 5,
      design: 4,
      absolute: 3,
      relative: 2,
      default: 1,
      negative: -1,
    },
    fontSize: {
      base: "22px",
      title: "40px",
    },
    fontFamily: {
      body: ["Lato", "Helvetica Neue", "Helvetica", "Roboto", "sans-serif"],
      title: ["Merriweather", "Arial", "serif"],
    },
    boxShadow: {
      card: "0px 7px 29px rgba(36, 36, 87, 0.1)",
      "homepage-about": "0px 0px 30px 20px #F5F5F5",
    },
    borderRadius: {
      radius: "8px",
    },
    gridTemplateColumns: {
      "homepage-portraits": "repeat(4, 210px)",
      "homepage-portraits-m": "repeat(2, 210px)",
      "homepage-key-concepts": "repeat(2, 50%)",
      "homepage-key-concepts-m": "repeat(6, 1fr)",
      "homegpage-categories-m": "repeat(2, 1fr)",
      "homegpage-categories-xxl": "repeat(3, 1fr)",
    },
  },
};
