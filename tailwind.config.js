/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        lg: '20px', // Customize blur size
      },
      colors: {
        white: '#fff',
      },
    },
  },
  plugins: [],
}

