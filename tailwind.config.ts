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
        abyss: '#120c0c',
        'abyss-light': '#0a0606',
        'abyss-elevated': '#1c1313',
        'accent-primary': '#c96442',
        'accent-primary-dim': '#e07b5a',
        'accent-primary-glow': 'rgba(201,100,66,0.10)',
        'accent-secondary': '#a88b7a',
        'text-primary': '#ede6e0',
        'text-secondary': '#baaa9e',
        'text-muted': '#7a6e64',
        'border-subtle': '#2a1f1c',
        'border-strong': '#3d2e2a',
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
