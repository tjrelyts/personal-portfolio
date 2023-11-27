/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "home-gradient": "radial-gradient(ellipse at center, #1b2735, #090a0f)",
      },
    },
  },
  plugins: [],
};
