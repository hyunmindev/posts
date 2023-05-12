/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        monospace: ['var(--font-fira-mono)'],
      },
      colors: {
        background: '#262729',
      },
    },
  },
  plugins: [],
};
