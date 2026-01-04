/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "marine-primary": "#213448",
        "marine-secondary": "#547792",
        "marine-accent": "#94B4C1",
        "marine-light": "#EAE0CF",
      },
      fontFamily: {
        sans: ["Nato Sans"], // Change to your preferred font
        // You can also add multiple font options:
        // 'primary': ["Montserrat", "sans-serif"],
        // 'secondary': ["Open Sans", "sans-serif"],
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
