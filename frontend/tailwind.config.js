/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nato Sans"], // Change to your preferred font
        // You can also add multiple font options:
        // 'primary': ["Montserrat", "sans-serif"],
        // 'secondary': ["Open Sans", "sans-serif"],
      },
      colors: {
        ocean: {
          50: "#f0f9f8",
          100: "#d5f0ed",
          200: "#aae3db",
          300: "#78cfc4",
          400: "#4db5a8",
          500: "#34998e",
          600: "#287b73",
          700: "#0f766e",
          800: "#0d6b63",
          900: "#0a4f49",
        },
        sand: {
          50: "#faf8f5",
          100: "#f5f0eb",
          200: "#ebe2d6",
          300: "#dccbb8",
          400: "#c9af94",
          500: "#b89570",
          600: "#a87c54",
          700: "#8c6442",
          800: "#725139",
          900: "#5e4331",
        },
        gold: {
          400: "#f5a623",
          500: "#e89509",
          600: "#cc7d00",
        },
        green: {
          400: "#4ade80",
          500: "#22c55e",
        },
      },
      screens: {
        xs: "475px",
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 3s infinite",
        "ray-float": "ray-float 3s infinite",
        "ray-sway": "ray-sway 3s infinite",
        "ray-pulse": "ray-pulse 3s infinite",
        shimmer: "shimmer 2s infinite",
        ripple: "ripple 1s infinite",
        sparkle: "sparkle 1s infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
