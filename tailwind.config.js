/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#633a1d",
        lightColor: "#f2ddc0",
        greenColor: "#7d8b5f",
        mainGold: "#C5A363",
      },
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'spin-slow': 'spinSlow 20s linear infinite',
        'fadeIn': 'fadeIn 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
});
