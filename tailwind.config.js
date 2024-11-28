// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'mobile': '320px',
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      keyframes: {
        vibrate: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-2px)" },
          "40%": { transform: "translateX(2px)" },
          "60%": { transform: "translateX(-2px)" },
          "80%": { transform: "translateX(2px)" },
        },
        lightning: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
        typing: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'gray-800' },
        },
      },
      animation: {
        vibrate: "vibrate 0.3s linear infinite",
        lightning: "lightning 2s linear infinite",
        typing: 'typing 4s steps(15, end), blink .75s step-end infinite',
      },
      scale: {
        200: "2",
        250: "2.5",
        300: "3",
        350: "3.5",
        400: "4",
      },
    },
  },
  plugins: [],
};
