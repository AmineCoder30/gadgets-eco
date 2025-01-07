/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    extend: {
      colors: {
        "dark-gray": "#111518",
        primary: {
          100: "#4928cf",
          200: "#5B38ED",
        },
      },
    },
  },
  plugins: [],
};
