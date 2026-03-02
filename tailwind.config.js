/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#070b1a',
          night: '#0f1730',
          cyan: '#69f3ff',
          mint: '#78ffba',
          violet: '#75a1ff',
          slate: '#b9c6ff',
        },
      },
      boxShadow: {
        glass: '0 24px 80px rgba(7, 11, 26, 0.45)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 15% 20%, rgba(120,255,186,0.16), transparent 38%), radial-gradient(circle at 90% 5%, rgba(117,161,255,0.24), transparent 46%), radial-gradient(circle at 50% 100%, rgba(105,243,255,0.18), transparent 42%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
