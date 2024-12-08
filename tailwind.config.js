/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e0ecff',
          200: '#c0d8ff',
          300: '#91b8ff',
          400: '#608eff',
          500: '#3b66ff',
          600: '#1f3af5',
          700: '#1729e1',
          800: '#1823b6',
          900: '#1a2591',
          950: '#131754'
        },
        secondary: {
          50: '#fff8ed',
          100: '#fff0d6',
          200: '#ffdead',
          300: '#ffc677',
          400: '#ffa441',
          500: '#ff811a',
          600: '#ff6a08',
          700: '#cc4c02',
          800: '#a13c07',
          900: '#82330b',
          950: '#461604'
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};