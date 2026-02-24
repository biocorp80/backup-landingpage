/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A4AB6',   /* Deep Trust Blue */
        secondary: '#1CB8A3', /* Academic Teal */
        accent: '#F97316',    /* Action Orange */
        dark: '#0F172A',
        light: '#F8FAFC',     
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'glow-pulse': 'glow-pulse 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(28, 184, 163, 0.2)' },
          '50%': { boxShadow: '0 0 25px rgba(28, 184, 163, 0.5)' },
        }
      }
    },
  },
  plugins: [],
}