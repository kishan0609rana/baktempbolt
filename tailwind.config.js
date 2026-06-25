/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FFF5E4',
          100: '#FFFAF4',
        },
        amber: {
          DEFAULT: '#D4882F',
          light: '#E8A04D',
          dark: '#B8701A',
        },
        espresso: {
          DEFAULT: '#2C1A0E',
          light: '#3D2B1F',
          dark: '#1A0F08',
        },
        text: '#2b190d',
        background: '#fff5e5',
        primary: '#d58830',
        secondary: '#5e3b22',
        accent: '#8c3b3b',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
