/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "20px"],
      lg: ["18px", "22px"],
      xl: ["20px", "25px"],
      "2xl": ["24px", "30px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"],
        brand: ["Doppio One", "sans-serif"],
      },
      colors: {
        primary: "#5C14A3",
        secondary: "#ECEEFF",
        "purple-light": "#C78FFF",
        "lemon": "#E8FFB6",
        "gray-title": "#5A5A5A",
        "gray-txt": "#04050C",
        "gray-light": "#F5F5F7",
      }
    },
  },
  plugins: [],
};
