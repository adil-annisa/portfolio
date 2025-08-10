module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#5b8aff",
          50: "#f3f6ff",
          100: "#e8efff",
          200: "#cddbff",
          300: "#a9c0ff",
          400: "#85a6ff",
          500: "#5b8aff",
          600: "#3b6ff2",
          700: "#2e59c7",
          800: "#26499f",
          900: "#203d82",
        },
        ink: "#0b1020",
        paper: "#0f1629",
        muted: "#8a93a6",
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}; 