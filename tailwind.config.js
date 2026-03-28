/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: { DEFAULT: "1.25rem", sm: "2rem", lg: "4rem", xl: "5rem" },
      },
      colors: {
        accent:      "#08E95E",
        "accent-dark": "#05c04e",
        "accent-dim":  "rgba(8,233,94,0.1)",
        surface:     "#0d0d0d",
        card:        "#111111",
        "card-hover":"#161616",
        border:      "#222222",
      },
      boxShadow: {
        "glow-sm": "0 0 10px rgba(8,233,94,0.2)",
        "glow":    "0 0 24px rgba(8,233,94,0.35)",
        "card":    "0 4px 32px rgba(0,0,0,0.6)",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up":   "fade-up 0.7s ease-out both",
        "fade-up-1": "fade-up 0.7s 0.15s ease-out both",
        "fade-up-2": "fade-up 0.7s 0.3s ease-out both",
        "fade-up-3": "fade-up 0.7s 0.45s ease-out both",
        "fade-up-4": "fade-up 0.7s 0.6s ease-out both",
        "fade-in":   "fade-in 1s ease-out both",
        "blink":     "blink 1s step-end infinite",
        "float":     "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
