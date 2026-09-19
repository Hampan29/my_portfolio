import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#020817',
        panel: '#0f172a',
        glow: '#7dd3fc',
      },
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.18)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(125, 211, 252, 0.20), transparent 40%)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        display: ['var(--font-geist-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
