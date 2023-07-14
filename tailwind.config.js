module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "light-blue": "#1fb6ff",

      "light-orange": "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#242424",
      "gray-dark1": "#1E1E1E",
      "gray-light": "#d3dce6",
      "white-original": "#ffffff",
      gray: "#8492a6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      fontFamily: {
        custom: ["CustomFont", "sans-serif"],
      },
      // blur: {
      //   xs: "2px",
      // },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
