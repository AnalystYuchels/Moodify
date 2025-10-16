/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#A855F7", // light purple
          DEFAULT: "#7C3AED", // main purple
          dark: "#5B21B6", // deep purple
        },
        accent: "#FACC15", // yellow accent
        background: "#0F0A1C", // deep black-purple
      },
      fontFamily: {
        casual: ["'Poppins'", "sans-serif"],
        playful: ["Pacifico", "cursive"],
      },
      boxShadow: {
        soft: "0 10px 25px rgba(124, 58, 237, 0.3)",
      },
    },
  },
  plugins: [],
};
