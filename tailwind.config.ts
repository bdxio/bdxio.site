import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      "bdxio-light": "#fff7ec",
      "bdxio-dark": "#373739",
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
      grey: {
        100: "#F5F5F5",
        200: "#e3e3e3",
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
    fontFamily: {
      body: ["Arial", "sans-serif"],
      title: ["Merriweather", "Arial", "serif"],
    },
    extend: {
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
      fontSize: {
        small: "16px",
        subtitle: "20px",
        base: "22px",
        title: "40px",
      },
      boxShadow: {
        card: "0px 7px 29px rgba(36, 36, 87, 0.1)",
        illustration: "0px 0px 30px 20px #F5F5F5",
      },
    },
  },
};

export default config;
