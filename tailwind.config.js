module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      "light-orange": "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#242424",
      "gray-dark1": "#1E1E1E",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      fontFamily: {
        custom: ["CustomFont", "sans-serif"],
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
