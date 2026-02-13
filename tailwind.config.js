/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Adjust if your project uses "src/"
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px", // Small devices (phones)
      md: "768px", // Medium devices (tablets)
      lg: "1024px", // Large devices (laptops)
      xl: "1280px", // Extra large (desktops)
      "2xl": "1536px", // 2X large (monitors)
    },
    extend: {
      fontFamily: {
        inter: "var(--font-inter)",
        myfont: "var(--font-myfont)",
        "geist-mono": "var(--font-geist-mono)",
        "pinyon-script": "var(--font-pinyon-script)",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
