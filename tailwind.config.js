/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        passion: "'Passion One', cursive",
        mono: "'JetBrains Mono', monospace"
      },
      backgroundColor: {
        primary: "#00A5CF",
        secundary: "#7AE582",
        third: "#f4f1de",
        navy: "#0D1B2A",
        teal: "#004E64"
      },
      colors: {
        primary: "#00A5CF",
        secundary: "#7AE582",
        third: "#f4f1de",
        navy: "#0D1B2A",
        teal: "#004E64"
      },
      textColor: {
        primary: "#00A5CF",
        secundary: "#7AE582",
        third: "#004E64",
        javascript: "#FCAA00",
        "red-accent": "#EF4444"
      }
    },
  },
  plugins: [],
};