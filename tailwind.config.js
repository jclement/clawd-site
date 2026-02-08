/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sith: {
          black: '#0a0a0a',
          gray: '#1a1a1a',
          darkgray: '#2a2a2a',
          orange: '#ff6b35',
          blue: '#4285f4',
          red: '#dc2626',
        }
      },
      animation: {
        'pulse-glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'lightning': 'lightning 0.2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        lightning: {
          '0%': { opacity: '0.5', textShadow: '0 0 5px #4285f4' },
          '100%': { opacity: '1', textShadow: '0 0 20px #4285f4, 0 0 30px #4285f4' },
        },
      },
    },
  },
  plugins: [],
}