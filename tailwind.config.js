/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#6366f1", // color principal
          600: "#4f46e5", // hover / active
          700: "#4338ca", // pressed
        },
        secondary: {
          500: "#10b981",
          600: "#059669",
          700: "#047857",
        },
        accent: {
          400: "#facc15",
          500: "#eab308",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // texto base
        heading: ["Manrope", "system-ui", "sans-serif"], // títulos
      },
    },
  },
  plugins: [],
}

