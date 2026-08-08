/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0E14',
          alt: '#0E1118',
        },
        surface: {
          DEFAULT: '#141922',
          hover: '#1A1E2A',
          border: '#232837',
        },
        ember: {
          DEFAULT: '#F5A65B',
          soft: '#FFC48A',
          deep: '#E0852F',
          glow: '#FFBE8A',
        },
        frost: {
          DEFAULT: '#6EE7F0',
        },
        signal: {
          DEFAULT: '#B79CFF',
        },
        parchment: {
          DEFAULT: '#EDEAE3',
        },
        success: {
          DEFAULT: '#34D399',
          soft: '#6EE7B7',
          deep: '#10B981',
        },
        muted: {
          DEFAULT: '#8B93A7',
          deep: '#5F6779',
        },
      },
      fontFamily: {
        sans: ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
