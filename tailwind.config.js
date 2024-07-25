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
      },
      boxShadow:{
        'custom-shadow':'0px 0px 3.22px 0px #00000040',
        'custom-shadow1':'0px 1.4px 2.81px 0px #00000040',
        'custom-shadow2':'0px 0px 2.81px 0.7px #00000040',
      },
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
