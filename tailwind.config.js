/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",  // Include files in the `pages` directory
    "./components/**/*.{js,ts,jsx,tsx}", // Include files in the `components` directory
    "./app/**/*.{js,ts,jsx,tsx}", // Include files in the `app` directory (if using Next.js 13+)
  ],
  theme: {
    extend: {}, // Customize your theme here
  },
  plugins: [],
  mode: 'jit',

};
