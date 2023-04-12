/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        passion: "'Passion One', cursive"
      },
      backgroundColor: {
        primary: "#00A5CF",
        secundary: "#7AE582",
        third: "#f4f1de"
      },
      textColor: {
        primary: "#00A5CF",
        secundary: "#7AE582",
        third: "#004E64",
        javascript: "#FCAA00"
      }
    },
  },
  plugins: [],
};