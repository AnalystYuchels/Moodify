/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#A78BFA",
          DEFAULT: "#6D28D9",
          dark: "#3B0764",
        },
        accent: {
          light: "#FEF9C3",
          DEFAULT: "#FACC15",
          dark: "#CA8A04",
        },
        neutral: {
          light: "#F9FAFB",
          DEFAULT: "#E5E7EB",
          dark: "#111827",
        },
        background: {
          light: "#F3F4F6",
          DEFAULT: "#E0E7FF",
          dark: "#252B3B",
        },
        text: {
          light: "#1E1E1E",
          dark: "#F3F4F6",
        },
      },
      backgroundImage: {
        "light-gradient": "linear-gradient(135deg, #fafafa 0%, #e6eefc 50%, #dbeafe 100%)",
        "dark-gradient": "linear-gradient(135deg, #151226 0%, #332b63 50%, #2a2a3a 100%)",
        "primary-gradient": "linear-gradient(90deg, #6D28D9 0%, #7C3AED 60%, #FACC15 100%)",
      },
      fontFamily: {
        casual: ["Poppins", "sans-serif"],
        heading: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 6px 18px rgba(13, 12, 31, 0.35)",
        glow: "0 0 20px rgba(250, 204, 21, 0.18)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
