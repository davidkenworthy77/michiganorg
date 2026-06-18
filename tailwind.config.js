/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0A0A0B',
          900: '#0A0A0B',
          800: '#141417',
          700: '#1F1F23',
          600: '#2A2A2F',
        },
        bone: {
          DEFAULT: '#F5F2EC',
          50: '#FBFAF6',
          100: '#F5F2EC',
          200: '#EAE5DA',
        },
        ember: {
          DEFAULT: '#FF4A1C',
          50: '#FFF1EB',
          400: '#FF6B3D',
          500: '#FF4A1C',
          600: '#E63A0E',
          700: '#C12C05',
        },
        glow: {
          DEFAULT: '#FFB347',
          400: '#FFC36B',
          500: '#FFB347',
        },
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.035em',
        tight: '-0.02em',
        loose: '0.08em',
        looser: '0.16em',
      },
      fontSize: {
        // Editorial display scale
        'display-sm': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'display': ['clamp(3.5rem, 7vw, 6rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(5rem, 10vw, 9rem)', { lineHeight: '0.88', letterSpacing: '-0.045em' }],
        'display-xl': ['clamp(6rem, 13vw, 12rem)', { lineHeight: '0.85', letterSpacing: '-0.05em' }],
      },
    },
  },
  plugins: [],
}
