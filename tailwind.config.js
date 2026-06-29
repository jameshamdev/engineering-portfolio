/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This line tells Tailwind to scan your React files
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ink: {
          950: '#05080d',
          900: '#0a0f17',
          800: '#0f1722',
          700: '#16202e',
          600: '#1f2c3d',
        },
        circuit: {
          400: '#5eead4',
          500: '#2dd4bf',
          600: '#14b8a6',
        },
        signal: {
          400: '#7dd3fc',
          500: '#38bdf8',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(45, 212, 191, 0.35)',
        'glow-lg': '0 0 40px rgba(45, 212, 191, 0.25)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        pulseSlow: 'pulseSlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
