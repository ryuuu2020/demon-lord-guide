import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        abyss: '#0a0a0f',
        'abyss-elevated': '#111118',
        'dark-gold': '#c9a84c',
        'dark-gold-dim': '#a88a3a',
        'dark-gold-glow': 'rgba(201,168,76,0.15)',
        'blood-red': '#8b2020',
        'blood-red-dim': '#6b1818',
        'ember': '#d4713a',
        'parchment': '#d4c5a9',
        'parchment-dim': '#9e8f76',
        'border-gold': 'rgba(201,168,76,0.25)',
        'border-gold-strong': 'rgba(201,168,76,0.4)',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['"Crimson Text"', 'serif'],
        label: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(201,168,76,0.12), 0 0 60px rgba(201,168,76,0.06)',
        'gold-inner': 'inset 0 1px 0 rgba(201,168,76,0.25)',
        'blood-glow': '0 0 16px rgba(139,32,32,0.12)',
      },
      backgroundImage: {
        'abyss-gradient': 'linear-gradient(180deg, #0a0a0f 0%, #111118 100%)',
        'rune-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L30 55 M5 30 L55 30' stroke='rgba(201,168,76,0.04)' stroke-width='1' fill='none'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '41%': { opacity: '1' },
          '42%': { opacity: '0.8' },
          '43%': { opacity: '1' },
          '67%': { opacity: '1' },
          '68%': { opacity: '0.7' },
          '69%': { opacity: '1' },
        },
        'smoke-rise': {
          '0%': { opacity: '0.01', transform: 'translateY(0)' },
          '50%': { opacity: '0.03' },
          '100%': { opacity: '0', transform: 'translateY(-100%)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 8px rgba(201,168,76,0.08)' },
          '50%': { boxShadow: '0 0 20px rgba(201,168,76,0.14)' },
        },
      },
      animation: {
        'flicker': 'flicker 3s infinite',
        'smoke-rise': 'smoke-rise 8s linear infinite',
        'pulse-gold': 'pulse-gold 3s ease-in-out infinite',
      },
      borderRadius: {
        'none': '0px',
      },
      letterSpacing: {
        'display': '0.15em',
        'display-wide': '0.25em',
      },
    },
  },
  plugins: [],
};

export default config;
