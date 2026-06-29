/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#faf9f7',
        sidebar: '#f0ede8',
        ink: '#1c1c1c',
        muted: '#7a7570',
        border: '#e5e2de',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '10px',
        lg: '14px',
        xl: '20px',
        '2xl': '28px',
      },
    },
  },
  plugins: [],
};
