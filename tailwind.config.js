/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-900': '#050505',
        'dark-800': '#111111',
        'dark-700': '#1E1E1E',
        'neon-green': '#39FF14',
        'neon-cyan': '#00F0FF',
        'neon-purple': '#9E00FF',
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(#ffffff10 1px, transparent 1px)',
        'radial-gradient': 'radial-gradient(600px_circle_at_50%_-10%, rgba(0,240,255,0.06), transparent 60%)',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
      },
      dropShadow: {
        glow: '0 0 20px rgba(0, 240, 255, 0.35)',
      },
    },
  },
  plugins: [],
}
