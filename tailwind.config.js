/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official European Union Reflex Blue (Pantone Reflex Blue / #003399 / #004494)
        // Mapped to `indigo` so all primary UI accents align with Official EU identity
        indigo: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#60a5fa',
          400: '#3b82f6',
          500: '#004494',
          600: '#003399',
          700: '#002673',
          800: '#001a4d',
          900: '#001133',
          950: '#000b1e',
        },
        eu: {
          blue: '#003399',
          blueLight: '#004494',
          gold: '#FFCC00',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"New York"', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        mono: ['"SF Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
};
