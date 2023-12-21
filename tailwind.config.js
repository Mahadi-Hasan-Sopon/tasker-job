/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Open Sans", "sans serif"],
        openSans: ["Open Sans", "Inter"],
      },
    },
  },
  plugins: [],
};
