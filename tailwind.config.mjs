/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        bg: '#F9F9F7',
        card: '#EFEFED',
        ink: '#111111',
        accent: '#CBFF4D',
        muted: '#777777',
        border: '#DDDDD9',
        dark: '#111111',
      },
      fontFamily: {
        mono: ['"Space Mono"', '"Courier New"', 'monospace'],
      },
      maxWidth: {
        reading: '62ch',
        wide: '1200px',
      },
      letterSpacing: {
        cap: '0.1em',
      },
    },
  },
  plugins: [],
};
