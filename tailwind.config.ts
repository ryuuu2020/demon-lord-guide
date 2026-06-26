import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        abyss: '#ffffff',
        'abyss-light': '#f5f5f5',
        'abyss-elevated': '#fafafa',
        'accent-primary': '#000000',
        'accent-primary-dim': '#333333',
        'accent-primary-glow': 'rgba(0,0,0,0.04)',
        'accent-secondary': '#c96442',
        'text-primary': '#000000',
        'text-secondary': '#4e4e4e',
        'text-muted': '#777169',
        'border-subtle': 'rgba(0,0,0,0.05)',
        'border-strong': '#e5e5e5',
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "SF Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
