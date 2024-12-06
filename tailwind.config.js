/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Customize your college colors here
        primary: {
          DEFAULT: "rgba(92, 162, 146, 1)", // Main primary color
          light: "rgba(70, 163, 150, 1)", // Slightly lighter version
          lighter: "rgba(70, 150, 150, 1)", // Slightly lighter version
          dark: "rgba(70, 122, 110, 1)", // A darker shade
        },
        secondary: {
          DEFAULT: "rgba(70, 122, 110, 1)", // Darker version of primary
          light: "rgba(70, 122, 110, 0.7)", // Slightly transparent version
          dark: "rgba(50, 87, 78, 1)", // Even darker shade
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Montserrat", "system-ui", "sans-serif"],
      },
      boxShadow: {
        custom:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
