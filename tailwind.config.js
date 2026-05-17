/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        obs: {
          black: "#040806",
          base: "#07140F",
          panel: "#0A1712",
          green: "#102820",
          mint: "#2AF598",
          emerald: "#21C55D",
          gold: "#D5A84F",
          amber: "#FFC107",
          soft: "#F5F5F0",
          muted: "#AAB8AF"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(42, 245, 152, 0.12)",
        gold: "0 18px 60px rgba(213, 168, 79, 0.12)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at top left, rgba(42,245,152,0.13), transparent 32rem), radial-gradient(circle at 80% 20%, rgba(213,168,79,0.1), transparent 28rem)"
      }
    }
  },
  plugins: []
};
