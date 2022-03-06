module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 1s ease-out",
      },
      colors: {
        peach: {
          50: "#fffdd6",
          100: "#fff3cc",
          200: "#ffe9c2",
          300: "#ffdfb8",
          400: "#ffd5ae",
          500: "#ffcba4",
          600: "#f5c19a",
          700: "#ebb790",
          800: "#e1ad86",
          900: "#d7a37c",
        },
      },
    },
  },
  plugins: [],
};
