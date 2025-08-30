/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
   keyframes: {
        "bounce-smooth": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "bounce-smooth": "bounce-smooth 1.8s infinite",
      },
    
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      
      
    },

  container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          "2xl": "1440px", 
        },
      },

  },
  plugins: [],
}
