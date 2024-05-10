/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(243 244 246)',
        primaryLight: '#1FBABF',
        secondary: 'rgb(255 255 255)',
        tertiary: '#018ABD',
        light: '#004581'
      }
    },
  },
  plugins: [],
}
