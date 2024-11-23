/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hidden": {
          /* Hide scrollbar for Webkit browsers */
          "&::-webkit-scrollbar": { display: "none" },
          /* Hide scrollbar for IE, Edge, and Firefox */
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    },
  ],
}