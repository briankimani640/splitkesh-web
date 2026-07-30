/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7c5cfc",    // SplitKesh Purple
        darkbg: "#0d0b14",     // Deep background
        darkcard: "#1a1728",   // Elevated card surface
        success: "#22c55e",    // Green for savings
        danger: "#f04848",     // Red for IOUs
        warning: "#f59e0b"     // Amber for pending
      }
    },
  },
  plugins: [],
}