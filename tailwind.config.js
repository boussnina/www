/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#FFD3B6', // Lighter shade of orange
          DEFAULT: '#FF8C00', // Default orange color
          dark: '#FF6700', // Darker shade of orange
        },
        blue: {
          dark: '#336EFF'
        }
      },
    },
  plugins: [],
  }
}