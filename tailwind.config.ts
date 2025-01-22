import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        xs: '380px',
      },
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#3c50e0',
        'navy-blue': '#1c2434',
        'tabs-gray': '#f7fafc',
        customGray: '#263B5E',
        customBlue: '#002C3F',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        hero: "url('/images/home/hero.webp')",
        'web-services': "url('/images/home/image-02-min.jpg')",
        'bg-contact': "url('/images/contact/world-map-png-35418.png')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
