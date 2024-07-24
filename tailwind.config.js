/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoSerif: ['"Roboto Serif"', 'serif'],
        jost: ['"Jost"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage:{
        'home-img': "url('/assets/hero-image.jpg')",
      }
    },
    screens: {
      'xsm': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xlg': '1150px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
