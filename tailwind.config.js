// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        righteous: ['"Righteous"', "sans-serif"], // Menambahkan font Righteous dengan fallback sans-serif
      },
      fontWeight: {
        normal: 400, // Menambahkan font-weight normal (400)
      },
      fontStyle: {
        normal: "normal", // Menambahkan font-style normal
      },
    },
  },
  plugins: [],
};
